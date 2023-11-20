import moment from 'moment'
import type { Cable } from '../prisma/barista/barista-client'
import type {
  application_parameters,
  cable_categories,
  cable_groups,
  cable_routes,
  cables,
  routes,
  users,
} from '../prisma/cafeins/cafeins-client'
import { getCablesUnmigrated } from '../repositories/barista/cables'
import { getApplicationParameterByCode } from '../repositories/cafeins/application_parameters'
import { getCableGroupByName } from '../repositories/cafeins/cable_group'
import { getCableCategoryByName } from '../repositories/cafeins/cables_category'
import type { CafeinsSitePoint } from '../types/cafeins/sitepoint'
import { baristaClient, cafeinsClient } from '../utils/database'
import { logger } from '../utils/logger'
import { LogLevel, writeToLog } from './logs'
import { AuditEvent } from '../types/cafeins/audit'
import {
  getCreatedUserByEmployeeNo,
  getModifiedUserByEmployeeNo,
  getRoutesByUniqueIds,
  getSitePointFromBySiteGroupCode,
  getSitePointToBySiteGroupCode,
} from './services'

const getCableAssetOwnershipByCode = getApplicationParameterByCode

const getCableAreaOwnershipByCode = getApplicationParameterByCode

const getCablePlacementTypeByCode = getApplicationParameterByCode

const getCableFunctionByCode = getApplicationParameterByCode

type ValidatedData = [
  users,
  users,
  cable_categories,
  cable_groups,
  application_parameters,
  application_parameters,
  application_parameters,
  application_parameters,
  CafeinsSitePoint,
  CafeinsSitePoint,
  routes[],
]
const validateData = async (cable: Cable): Promise<ValidatedData> => {
  if (cable.route_unique_id_pembentuk == null) {
    throw new Error('route unique id pembentuk not found')
  }

  const [
    createdUser,
    modifiedUser,
    cableCategory,
    cableGroup,
    cableAssetOwnership,
    cableAreaOwnership,
    cablePlacementType,
    cableFunction,
    sitePointFrom,
    sitePointTo,
    cableRoutes,
  ] = await Promise.all([
    getCreatedUserByEmployeeNo(cable.created_employee_no),
    getModifiedUserByEmployeeNo(
      cable.modified_employee_no ?? cable.created_employee_no,
    ),
    getCableCategoryByName(cable.cable_category),
    getCableGroupByName(cable.cable_group),
    getCableAssetOwnershipByCode(cable.asset_ownership),
    getCableAreaOwnershipByCode(cable.area_ownership),
    getCablePlacementTypeByCode(cable.placement_type),
    getCableFunctionByCode(cable.function),
    getSitePointFromBySiteGroupCode(cable.site_group_code_from),
    getSitePointToBySiteGroupCode(cable.site_group_code_to),
    getRoutesByUniqueIds(cable.route_unique_id_pembentuk ?? ''),
  ])

  if (cableCategory == null) {
    throw new Error('cable category not found')
  }

  if (cableGroup == null) {
    throw new Error('cable group not found')
  }

  if (cableAssetOwnership == null) {
    throw new Error('cable asset ownership not found')
  }

  if (cableAreaOwnership == null) {
    throw new Error('cable area ownership not found')
  }

  if (cablePlacementType == null) {
    throw new Error('cable placement type not found')
  }

  if (cableFunction == null) {
    throw new Error('cable function not found')
  }

  return [
    createdUser,
    modifiedUser,
    cableCategory,
    cableGroup,
    cableAssetOwnership,
    cableAreaOwnership,
    cablePlacementType,
    cableFunction,
    sitePointFrom,
    sitePointTo,
    cableRoutes,
  ]
}

const generateCableCode = (
  sitePointFrom: CafeinsSitePoint,
  sitePointTo: CafeinsSitePoint,
): string => {
  return `${sitePointFrom.name}-${sitePointTo.name}`
}

const serializeCableData = (cable: cables): string => {
  return JSON.stringify({
    ...cable,
    id: cable.id.toString(),
    cable_category_id: cable.cable_category_id?.toString(),
    cable_group_id: cable.cable_group_id?.toString(),
    site_from: cable.site_from?.toString(),
    site_to: cable.site_to?.toString(),
    asset_ownership_id: cable.asset_ownership_id?.toString(),
    area_ownership_id: cable.area_ownership_id?.toString(),
    placement_type_id: cable.placement_type_id?.toString(),
    function_id: cable.function_id?.toString(),
    created_user_id: cable.created_user_id?.toString(),
    modified_user_id: cable.modified_user_id?.toString(),
    deleted_user_id: cable.deleted_user_id?.toString(),
    created_at: moment(cable.created_at).format('YYYY-MM-DD HH:mm:ss'),
    updated_at: moment(cable.updated_at).format('YYYY-MM-DD HH:mm:ss'),
    deleted_at:
      cable.deleted_at != null
        ? moment(cable.deleted_at).format('YYYY-MM-DD HH:mm:ss')
        : null,
  })
}

const serializedCableRouteData = (cableRoute: cable_routes): string => {
  return JSON.stringify({
    ...cableRoute,
    id: cableRoute.id.toString(),
    cable_id: cableRoute.cable_id.toString(),
    route_id: cableRoute.route_id.toString(),
    created_user_id: cableRoute.created_user_id?.toString(),
    modified_user_id: cableRoute.modified_user_id?.toString(),
    deleted_user_id: cableRoute.deleted_user_id?.toString(),
    created_at: moment(cableRoute.created_at).format('YYYY-MM-DD HH:mm:ss'),
    updated_at: moment(cableRoute.updated_at).format('YYYY-MM-DD HH:mm:ss'),
    deleted_at:
      cableRoute.deleted_at != null
        ? moment(cableRoute.deleted_at).format('YYYY-MM-DD HH:mm:ss')
        : null,
  })
}

const syncCables = async (): Promise<void> => {
  try {
    logger.info('sync cables start')
    const cables = await getCablesUnmigrated()
    for (const cable of cables) {
      const [
        createdUser,
        modifiedUser,
        cableCategory,
        cableGroup,
        cableAssetOwnership,
        cableAreaOwnership,
        cablePlacementType,
        cableFunction,
        sitePointFrom,
        sitePointTo,
        cableRoutes,
      ] = await validateData(cable)

      await cafeinsClient.$transaction(async (trx) => {
        // create cable
        const createdCable = await trx.cables.create({
          data: {
            uuid: cable.uuid,
            cable_category_id: cableCategory.id,
            cable_group_id: cableGroup.id,
            name: cable.name,
            code: generateCableCode(sitePointFrom, sitePointTo),
            site_from: sitePointFrom.id,
            site_to: sitePointTo.id,
            description: cable.description,
            length: cable.length,
            is_active: true,
            asset_ownership_id: cableAssetOwnership.id,
            area_ownership_id: cableAreaOwnership.id,
            placement_type_id: cablePlacementType.id,
            function_id: cableFunction.id,
            created_at: cable.created_at,
            updated_at: cable.updated_at ?? cable.created_at,
            created_user_id: createdUser.id,
            modified_user_id: modifiedUser.id,
          },
        })

        // create audit log cable
        const serializedCable = serializeCableData(createdCable)
        await trx.audits.create({
          data: {
            user_type: `App\\Models\\User`,
            user_id: createdUser.id,
            event: AuditEvent.CREATED,
            auditable_type: `Modules\\Cable\\Entities\\Cable`,
            auditable_id: createdCable.id,
            old_values: '[]',
            new_values: serializedCable,
            user_agent: 'Barista',
            created_at: new Date(),
            updated_at: new Date(),
          },
        })

        // create cable route
        await trx.cable_routes.createMany({
          data: cableRoutes.map((cableRoute) => {
            return {
              cable_id: createdCable.id,
              route_id: cableRoute.id,
              created_at: new Date(),
              updated_at: new Date(),
              created_user_id: createdUser.id,
              modified_user_id: modifiedUser.id,
            }
          }),
          skipDuplicates: true,
        })

        const createdCableRoutes = await trx.cable_routes.findMany({
          where: {
            cable_id: createdCable.id,
          },
        })

        // create audit log cable route
        const auditDataCableRoutes = createdCableRoutes.map((cableRoute) => {
          return {
            user_type: `App\\Models\\User`,
            user_id: createdUser.id,
            event: AuditEvent.CREATED,
            auditable_type: `Modules\\Cable\\Entities\\CableRoute`,
            auditable_id: cableRoute.id,
            old_values: '[]',
            new_values: serializedCableRouteData(cableRoute),
            user_agent: 'Barista',
            created_at: new Date(),
            updated_at: new Date(),
          }
        })

        await trx.audits.createMany({
          data: auditDataCableRoutes,
        })

        // mark data migrated
        await baristaClient.cable.update({
          where: {
            uuid: cable.uuid,
          },
          data: {
            is_migrated: true,
            status: 'CREATED',
            last_read: new Date(),
            cafeins_uuid: createdCable.uuid,
          },
        })
      })
    }

    logger.info('sync cables finish')
  } catch (error: any) {
    await writeToLog(
      LogLevel.ERROR,
      error.message.replace(/\n/g, ''),
      error.ctx,
    )

    throw new Error(error.message.replace(/\n/g, ''))
  }
}

export { syncCables }
