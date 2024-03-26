import type { Segment } from '../prisma/barista/barista-client'
import type {
  PrismaClient,
  project_segments,
  projects,
  routes,
  segment_routes,
  segments,
  users,
} from '../prisma/cafeins/cafeins-client'
import type { CafeinsSitePoint } from '../types/cafeins/sitepoint'
import { getSegmentsUnmigrated } from '../repositories/barista/segments'
import { LogLevel, writeToLog } from './logs'
import {
  getCreatedUserByEmployeeNo,
  getModifiedUserByEmployeeNo,
  getProjectByGroupCode,
  getRoutesByUniqueIds,
  getSitePointFromBySiteGroupCode,
  getSitePointToBySiteGroupCode,
} from './services'
import { baristaClient, cafeinsClient } from '../utils/database'
import moment from 'moment'
import { AuditEvent } from '../types/cafeins/audit'
import { logger } from '../utils/logger'

type ValidatedData = [
  users,
  users,
  projects,
  CafeinsSitePoint,
  CafeinsSitePoint,
  routes[],
]
const validateData = async (segment: Segment): Promise<ValidatedData> => {
  const [
    createdUser,
    modifiedUser,
    project,
    sitePointFrom,
    sitePointTo,
    segmentRoutes,
  ] = await Promise.all([
    getCreatedUserByEmployeeNo(segment.created_employee_no),
    getModifiedUserByEmployeeNo(
      segment.modified_employee_no ?? segment.created_employee_no,
    ),
    getProjectByGroupCode(segment.project_group_code),
    getSitePointFromBySiteGroupCode(segment.site_group_code_from),
    getSitePointToBySiteGroupCode(segment.site_group_code_to),
    getRoutesByUniqueIds(segment.route_unique_id_pembentuk ?? ''),
  ])

  return [
    createdUser,
    modifiedUser,
    project,
    sitePointFrom,
    sitePointTo,
    segmentRoutes,
  ]
}

const serializedDataSegment = (segment: segments): string => {
  return JSON.stringify({
    ...segment,
    id: segment.id?.toString(),
    site_from: segment.site_from?.toString(),
    site_to: segment.site_to?.toString(),
    created_user_id: segment.created_user_id?.toString(),
    modified_user_id: segment.modified_user_id?.toString(),
    deleted_user_id: segment.deleted_user_id?.toString(),
    created_at: moment(segment.created_at).format('YYYY-MM-DD HH:mm:ss'),
    updated_at: moment(segment.updated_at).format('YYYY-MM-DD HH:mm:ss'),
    deleted_at:
      segment.deleted_at != null
        ? moment(segment.deleted_at).format('YYYY-MM-DD HH:mm:ss')
        : null,
  })
}

const serializedDataSegmentRoute = (segmentRoute: segment_routes): string => {
  return JSON.stringify({
    ...segmentRoute,
    id: segmentRoute.id?.toString(),
    segment_id: segmentRoute.segment_id?.toString(),
    route_id: segmentRoute.route_id?.toString(),
    created_user_id: segmentRoute.created_user_id?.toString(),
    modified_user_id: segmentRoute.modified_user_id?.toString(),
    deleted_user_id: segmentRoute.deleted_user_id?.toString(),
    created_at: moment(segmentRoute.created_at).format('YYYY-MM-DD HH:mm:ss'),
    updated_at: moment(segmentRoute.updated_at).format('YYYY-MM-DD HH:mm:ss'),
    deleted_at:
      segmentRoute.deleted_at != null
        ? moment(segmentRoute.deleted_at).format('YYYY-MM-DD HH:mm:ss')
        : null,
  })
}

const serializedDataProjectSegment = (
  projectSegment: project_segments,
): string => {
  return JSON.stringify({
    ...projectSegment,
    id: projectSegment.id?.toString(),
    project_id: projectSegment.project_id?.toString(),
    segment_id: projectSegment.segment_id?.toString(),
    created_user_id: projectSegment.created_user_id?.toString(),
    modified_user_id: projectSegment.modified_user_id?.toString(),
    deleted_user_id: projectSegment.deleted_user_id?.toString(),
    created_at: moment(projectSegment.created_at).format('YYYY-MM-DD HH:mm:ss'),
    updated_at: moment(projectSegment.updated_at).format('YYYY-MM-DD HH:mm:ss'),
    deleted_at:
      projectSegment.deleted_at != null
        ? moment(projectSegment.deleted_at).format('YYYY-MM-DD HH:mm:ss')
        : null,
  })
}

const generateSegmentCode = (
  sitePointFrom: CafeinsSitePoint,
  sitePointTo: CafeinsSitePoint,
): string => {
  return `${sitePointFrom.name}-${sitePointTo.name}`
}

const findProjectSegmentBySitepoint = async (
  sitePointFrom: CafeinsSitePoint,
  sitePointTo: CafeinsSitePoint,
): Promise<project_segments | null> => {
  return await cafeinsClient.project_segments.findFirst({
    where: {
      segment: {
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
    },
  })
}

const createProjectSegmentBySitePoint = async (
  trx: PrismaClient,
  data: {
    project: projects
    createdUser: users
    modifiedUser: users
    sitePointFrom: CafeinsSitePoint
    sitePointTo: CafeinsSitePoint
    segment: segments
  },
): Promise<project_segments> => {
  const projectSegment = await findProjectSegmentBySitepoint(
    data.sitePointFrom,
    data.sitePointTo,
  )

  // using existing segment id
  if (projectSegment != null) {
    return await trx.project_segments.create({
      data: {
        project_id: data.project.id,
        segment_id: projectSegment.segment_id,
        created_at: new Date(),
        updated_at: new Date(),
        created_user_id: data.createdUser.id,
        modified_user_id: data.modifiedUser.id,
      },
    })
  }

  return await trx.project_segments.create({
    data: {
      project_id: data.project.id,
      segment_id: data.segment.id,
      created_at: new Date(),
      updated_at: new Date(),
      created_user_id: data.createdUser.id,
      modified_user_id: data.modifiedUser.id,
    },
  })
}

const syncSegments = async (): Promise<void> => {
  try {
    logger.info('sync segment start')
    const segments = await getSegmentsUnmigrated()

    for (const segment of segments) {
      try {
        const [
          createdUser,
          modifiedUser,
          project,
          sitePointFrom,
          sitePointTo,
          segmentRoutes,
        ] = await validateData(segment)

        await cafeinsClient.$transaction(async (trx) => {
          // check existing segment using data site from and site to
          const existingSegment = await trx.segments.findFirst({
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

          if (existingSegment != null) {
            // create project segment using data site from and site to
            const projectSegment = await createProjectSegmentBySitePoint(
              trx as PrismaClient,
              {
                project,
                createdUser,
                modifiedUser,
                sitePointFrom,
                sitePointTo,
                segment: existingSegment,
              },
            )

            // create audit logs project segment
            await trx.audits.create({
              data: {
                user_type: `App\\Models\\User`,
                user_id: createdUser.id,
                event: AuditEvent.CREATED,
                auditable_type: `Modules\\Master\\Entities\\ProjectSegment`,
                auditable_id: projectSegment.id,
                old_values: '[]',
                new_values: serializedDataProjectSegment(projectSegment),
                user_agent: 'Barista',
                created_at: new Date(),
                updated_at: new Date(),
              },
            })

            // mark data migrated
            await baristaClient.segment.update({
              where: {
                uuid: segment.uuid,
              },
              data: {
                is_migrated: true,
                status: 'UPDATED',
                last_read: new Date(),
                cafeins_uuid: existingSegment.uuid,
              },
            })
          } else {
            // create data segment
            const createdSegment = await trx.segments.create({
              data: {
                uuid: segment.uuid,
                name: segment.name,
                code: generateSegmentCode(sitePointFrom, sitePointTo),
                site_from: sitePointFrom.id,
                site_to: sitePointTo.id,
                created_at: segment.created_at,
                updated_at: segment.updated_at,
                created_user_id: createdUser.id,
                modified_user_id: modifiedUser.id,
              },
            })

            // create audit logs segment
            await trx.audits.create({
              data: {
                user_type: `App\\Models\\User`,
                user_id: createdUser.id,
                event: AuditEvent.CREATED,
                auditable_type: `Modules\\SitePoint\\Entities\\Segment`,
                auditable_id: createdSegment.id,
                old_values: '[]',
                new_values: serializedDataSegment(createdSegment),
                user_agent: 'Barista',
                created_at: new Date(),
                updated_at: new Date(),
              },
            })

            // create project segment using data site from and site to
            const projectSegment = await createProjectSegmentBySitePoint(
              trx as PrismaClient,
              {
                project,
                createdUser,
                modifiedUser,
                sitePointFrom,
                sitePointTo,
                segment: createdSegment,
              },
            )

            // create audit logs project segment
            await trx.audits.create({
              data: {
                user_type: `App\\Models\\User`,
                user_id: createdUser.id,
                event: AuditEvent.CREATED,
                auditable_type: `Modules\\Master\\Entities\\ProjectSegment`,
                auditable_id: projectSegment.id,
                old_values: '[]',
                new_values: serializedDataProjectSegment(projectSegment),
                user_agent: 'Barista',
                created_at: new Date(),
                updated_at: new Date(),
              },
            })

            // create segment routes
            const segmentRoutesData = segmentRoutes.map((segmentRoute) => {
              return {
                segment_id: createdSegment.id,
                route_id: segmentRoute.id,
                created_at: new Date(),
                updated_at: new Date(),
                created_user_id: createdUser.id,
                modified_user_id: modifiedUser.id,
              }
            })

            await trx.segment_routes.createMany({
              data: segmentRoutesData,
            })

            // create audit logs segment routes
            const createdSegmentRoutes = await trx.segment_routes.findMany({
              where: {
                segment_id: createdSegment.id,
              },
            })

            await trx.audits.createMany({
              data: createdSegmentRoutes.map((createdSegmentRoute) => {
                return {
                  user_type: `App\\Models\\User`,
                  user_id: createdUser.id,
                  event: AuditEvent.CREATED,
                  auditable_type: `Modules\\SitePoint\\Entities\\SegmentRoute`,
                  auditable_id: createdSegmentRoute.id,
                  old_values: '[]',
                  new_values: serializedDataSegmentRoute(createdSegmentRoute),
                  user_agent: 'Barista',
                  created_at: new Date(),
                  updated_at: new Date(),
                }
              }),
            })

            // mark data migrated
            await baristaClient.segment.update({
              where: {
                uuid: segment.uuid,
              },
              data: {
                is_migrated: true,
                status: 'CREATED',
                last_read: new Date(),
                cafeins_uuid: createdSegment.uuid,
              },
            })
          }
        })
      } catch (error: any) {
        error.ctx = {
          uuid: segment.uuid,
          table: 'segments',
        }

        throw error
      }
    }

    logger.info('sync segment finish')
  } catch (error: any) {
    await writeToLog(
      LogLevel.ERROR,
      error.message.replace(/\n/g, ''),
      error.ctx,
    )

    throw new Error(error.message.replace(/\n/g, ''))
  }
}

export { syncSegments }
