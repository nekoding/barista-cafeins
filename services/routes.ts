import moment from 'moment'
import type {
  PrismaClient,
  application_parameters,
  users,
} from '../prisma/cafeins/cafeins-client'
import { getRouteUnmigrated } from '../repositories/barista/routes'
import { createRoutes, findRouteByUuid } from '../repositories/cafeins/routes'
import type { CafeinsSitePoint } from '../types/cafeins/sitepoint'
import { baristaClient, cafeinsClient } from '../utils/database'
import { logger } from '../utils/logger'
import { AuditEvent } from '../types/cafeins/audit'
import type { CafeinRoute } from '../types/cafeins/route'
import { getApplicationParameterByCode } from '../repositories/cafeins/application_parameters'
import { LogLevel, writeToLog } from './logs'
import {
  getCreatedUserByEmployeeNo,
  getModifiedUserByEmployeeNo,
  getSitePointFromBySiteGroupCode,
  getSitePointToBySiteGroupCode,
} from './services'
import type { BaristaRoute } from '../types/barista/routes'

const getRouteMethodByCode = getApplicationParameterByCode

const getRouteOwnershipByCode = getApplicationParameterByCode

// example: SLA-BGX-BGEKAN-011-SITE POINT 23
const generateRouteName = (
  sitePointFrom: CafeinsSitePoint,
  sitePointTo: CafeinsSitePoint,
): string => {
  return `${sitePointFrom.name}-${sitePointTo.name}`
}

type ValidatedData = [
  users,
  users,
  CafeinsSitePoint,
  CafeinsSitePoint,
  application_parameters,
  application_parameters,
  string,
]
const validateData = async (route: BaristaRoute): Promise<ValidatedData> => {
  const [
    createdUser,
    modifiedUser,
    sitePointFrom,
    sitePointTo,
    routeMethod,
    routeOwnership,
  ] = await Promise.all([
    getCreatedUserByEmployeeNo(route.created_employee_no),
    getModifiedUserByEmployeeNo(
      route.modified_employee_no ?? route.created_employee_no,
    ),
    getSitePointFromBySiteGroupCode(route.site_group_code_from),
    getSitePointToBySiteGroupCode(route.site_group_code_to),
    getRouteMethodByCode(route.route_method),
    getRouteOwnershipByCode(route.route_ownership),
  ])

  if (routeMethod == null) {
    throw new Error('route method not found in database')
  }

  if (routeOwnership == null) {
    throw new Error('route ownership not found in database')
  }

  const routeName = generateRouteName(sitePointFrom, sitePointTo)
  return [
    createdUser,
    modifiedUser,
    sitePointFrom,
    sitePointTo,
    routeMethod,
    routeOwnership,
    routeName,
  ]
}

const serializeRouteData = (route: CafeinRoute): string => {
  return JSON.stringify({
    ...route,
    id: route.id.toString(),
    site_category_id: route.site_category_id?.toString(),
    route_method_id: route.route_method_id?.toString(),
    route_ownership_id: route.route_ownership_id?.toString(),
    site_from: route.site_from?.toString(),
    site_to: route.site_to?.toString(),
    created_user_id: route.created_user_id?.toString(),
    modified_user_id: route.modified_user_id?.toString(),
    deleted_user_id: route.deleted_user_id?.toString(),
    created_at: moment(route.created_at).format('YYYY-MM-DD HH:mm:ss'),
    updated_at: moment(route.updated_at).format('YYYY-MM-DD HH:mm:ss'),
    deleted_at:
      route.deleted_at != null
        ? moment(route.deleted_at).format('YYYY-MM-DD HH:mm:ss')
        : null,
  })
}

const syncRoutes = async (): Promise<void> => {
  try {
    logger.info('sync routes start')
    const routes = await getRouteUnmigrated()

    for (const route of routes) {
      try {
        const [
          createdUser,
          modifiedUser,
          sitePointFrom,
          sitePointTo,
          routeMethod,
          routeOwnership,
          routeName,
        ] = await validateData(route)

        // check if route already registered
        const cafeinRoute = await cafeinsClient.routes.findFirst({
          where: {
            OR: [
              {
                site_from: sitePointFrom.id,
                site_to: sitePointTo.id,
              },
              {
                site_from: sitePointTo.id,
                site_to: sitePointFrom.id,
              },
            ],
          },
        })

        if (cafeinRoute != null) {
          await baristaClient.route.update({
            where: {
              uuid: route.uuid,
            },
            data: {
              status: 'UPDATED',
              is_migrated: true,
              last_read: new Date(),
              cafeins_uuid: cafeinRoute.uuid,
            },
          })

          continue
        }

        // if not available register data
        await cafeinsClient.$transaction(async (trx) => {
          // create data
          await createRoutes(trx as PrismaClient, {
            uuid: route.uuid,
            siteCategoryId: process.env.SITE_CATEGORY_ID ?? '1',
            name: routeName,
            siteFrom: sitePointFrom.id as unknown as string,
            siteTo: sitePointTo.id as unknown as string,
            createdAt: new Date(),
            updatedAt: new Date(),
            createdUserId: createdUser.id as unknown as string,
            modifiedUserId: modifiedUser.id as unknown as string,
            geometry: route.geometry,
            length: route.length ?? 0,
            routeMethodId: routeMethod.id as unknown as string,
            routeOwnershipId: routeOwnership.id as unknown as string,
          })

          const routeCreated = await findRouteByUuid(
            trx as PrismaClient,
            route.uuid,
          )

          if (routeCreated == null) {
            throw new Error('failed create route in database')
          }

          // write to audit log
          const serialized = serializeRouteData(routeCreated)

          await trx.audits.create({
            data: {
              user_type: `App\\Models\\User`,
              user_id: createdUser.id,
              event: AuditEvent.CREATED,
              auditable_type: `Modules\\SitePoint\\Entities\\Route`,
              auditable_id: routeCreated.id,
              old_values: '[]',
              new_values: serialized,
              user_agent: 'Barista',
              created_at: new Date(),
              updated_at: new Date(),
            },
          })

          // update status migration
          await baristaClient.route.update({
            where: {
              uuid: route.uuid,
            },
            data: {
              status: 'CREATED',
              is_migrated: true,
              last_read: new Date(),
              cafeins_uuid: routeCreated?.uuid,
            },
          })
        })
      } catch (error: any) {
        error.ctx = {
          uuid: route.uuid,
          table: 'routes',
        }

        throw error
      }
    }

    logger.info('sync routes finish')
  } catch (error: any) {
    await writeToLog(
      LogLevel.ERROR,
      error.message.replace(/\n/g, ''),
      error.ctx,
    )

    throw new Error(error.message.replace(/\n/g, ''))
  }
}

export { syncRoutes }
