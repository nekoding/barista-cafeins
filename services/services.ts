import type { projects, routes, users } from '../prisma/cafeins/cafeins-client'
import type { CafeinsSitePoint } from '../types/cafeins/sitepoint'
import { getMigratedProjectByGroupCode } from '../repositories/barista/projects'
import { getRouteByUniqueId } from '../repositories/barista/routes'
import { getMigratedSitePointByGroupCode } from '../repositories/barista/sitepoints'
import { findProjectByUuid } from '../repositories/cafeins/projects'
import { findSitePointByUuid } from '../repositories/cafeins/sitepoints'
import { getUserByEmployeeNo } from '../repositories/cafeins/users'
import { cafeinsClient } from '../utils/database'

const getCreatedUserByEmployeeNo = async (
  employeeNo: string,
): Promise<users> => {
  const user = await getUserByEmployeeNo(employeeNo)
  if (user == null) {
    throw new Error('user not found')
  }

  return user
}

const getModifiedUserByEmployeeNo = getCreatedUserByEmployeeNo

const getProjectByGroupCode = async (groupCode: string): Promise<projects> => {
  const project = await getMigratedProjectByGroupCode(groupCode)

  // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
  if (project == null || project?.cafeins_uuid === null) {
    throw new Error('project not found')
  }

  const cafeinsProject = await findProjectByUuid(project.cafeins_uuid)

  if (cafeinsProject == null) {
    throw new Error('project not found')
  }

  return cafeinsProject
}

const getRoutesByUniqueIds = async (
  routeUniqueId: string,
): Promise<routes[]> => {
  const routeUniqueIds = routeUniqueId.split(',')
  const cafeinRouteUuids = new Set<string>()
  for (const routeUniqueId of routeUniqueIds ?? []) {
    const route = await getRouteByUniqueId(routeUniqueId)
    if (route?.cafeins_uuid == null) {
      throw new Error('route unique_id not migrated yet')
    }

    cafeinRouteUuids.add(route.cafeins_uuid)
  }

  const cafeinRoutes = await cafeinsClient.routes.findMany({
    where: {
      uuid: {
        in: [...cafeinRouteUuids],
      },
    },
  })

  return cafeinRoutes
}

const getSitePointBySiteGroupCode = async (
  siteGroupCode: string,
): Promise<CafeinsSitePoint> => {
  const sitePoint = await getMigratedSitePointByGroupCode(siteGroupCode)

  // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
  if (sitePoint == null || sitePoint?.cafeins_uuid == null) {
    throw new Error('site point not found')
  }

  const cafeinSitePoint = await findSitePointByUuid(
    cafeinsClient,
    sitePoint.cafeins_uuid,
  )

  if (cafeinSitePoint == null) {
    throw new Error('site point not found')
  }

  return cafeinSitePoint
}

const getSitePointFromBySiteGroupCode = getSitePointBySiteGroupCode

const getSitePointToBySiteGroupCode = getSitePointBySiteGroupCode

export {
  getCreatedUserByEmployeeNo,
  getModifiedUserByEmployeeNo,
  getProjectByGroupCode,
  getRoutesByUniqueIds,
  getSitePointBySiteGroupCode,
  getSitePointFromBySiteGroupCode,
  getSitePointToBySiteGroupCode,
}
