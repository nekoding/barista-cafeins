import type { PrismaClient } from '../prisma/barista/barista-client'
import { getSitePointUnmigrated } from '../repositories/barista/sitepoints'
import {
  createSitePoint,
  getSitePointsByNearestCoords,
} from '../repositories/cafeins/sitepoints'
import { getVilagesByCoords } from '../repositories/cafeins/villages'
import { baristaClient, cafeinsClient } from '../utils/database'
import { logger } from '../utils/logger'
import { LogLevel, writeToLog } from './logs'

export const syncSitePoint = async (): Promise<void> => {
  const sitePoints = await getSitePointUnmigrated()

  for (const sitePoint of sitePoints) {
    // Find site point nearest coordinate (<=4 meters)
    const nearestSitePoint = await getSitePointsByNearestCoords(
      sitePoint.latitude,
      sitePoint.longitude,
    )

    // if found mark data already migrated
    if (nearestSitePoint.length > 0) {
      await baristaClient.$transaction(async (trx) => {
        await trx.site.update({
          data: {
            cafeins_uuid: nearestSitePoint[0].uuid,
            is_migrated: true,
            last_read: new Date(),
            status: 'UPDATED',
          },
          where: {
            uuid: sitePoint.uuid,
          },
        })

        await writeToLog(
          LogLevel.INFO,
          'nearest sitepoint found in cafeins',
          {
            employee_no: sitePoint.created_employee_no,
            uuid: sitePoint.uuid,
            name: sitePoint.name,
            site_group_code: sitePoint.site_group_code,
            cafein_uuid: nearestSitePoint[0].uuid,
            table: 'site',
          },
          trx as PrismaClient,
        )
      })

      logger.info('sitepoint updated')
      continue
    }

    // if sitepoint not found create data to cafeins
    const user = await cafeinsClient.users.findFirst({
      where: {
        t_employee_id: sitePoint.created_employee_no,
      },
    })

    if (user == null) {
      await writeToLog(
        LogLevel.ERROR,
        'sitepoint owner user not found cannot migrate data',
        {
          employee_no: sitePoint.created_employee_no,
          uuid: sitePoint.uuid,
          name: sitePoint.name,
          site_group_code: sitePoint.site_group_code,
          table: 'site',
        },
      )

      throw new Error('sitepoint owner user not found cannot migrate data')
    }

    const village = await getVilagesByCoords(
      sitePoint.latitude,
      sitePoint.longitude,
    )

    if (village.length < 1) {
      await writeToLog(
        LogLevel.ERROR,
        'sitepoint village not found cannot migrate data',
        {
          employee_no: sitePoint.created_employee_no,
          uuid: sitePoint.uuid,
          name: sitePoint.name,
          site_group_code: sitePoint.site_group_code,
          table: 'site',
        },
      )

      throw new Error('sitepoint village not found cannot migrate data')
    }

    // set default siteCategory to id 1
    const siteCategory = 1
    await createSitePoint(
      sitePoint.uuid,
      village[0].id,
      sitePoint.name,
      sitePoint.latitude,
      sitePoint.longitude,
      sitePoint.geometry,
      siteCategory,
      user.id as unknown as string,
      sitePoint.created_at,
      sitePoint.updated_at,
    )

    await baristaClient.$transaction(async (trx) => {
      await trx.site.update({
        data: {
          cafeins_uuid: nearestSitePoint[0].uuid,
          is_migrated: true,
          last_read: new Date(),
          status: 'CREATED',
        },
        where: {
          uuid: sitePoint.uuid,
        },
      })

      await writeToLog(
        LogLevel.INFO,
        'sitepoint created in cafeins',
        {
          employee_no: sitePoint.created_employee_no,
          uuid: sitePoint.uuid,
          name: sitePoint.name,
          site_group_code: sitePoint.site_group_code,
          cafein_uuid: sitePoint.uuid,
          table: 'site',
        },
        trx as PrismaClient,
      )
    })

    logger.info('sitepoint created')
  }
}
