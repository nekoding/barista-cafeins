import type { PrismaClient } from '../prisma/barista/barista-client'
import { getSitePointUnmigrated } from '../repositories/barista/sitepoints'
import {
  createSitePoint,
  getSitePointsByNearestCoords,
} from '../repositories/cafeins/sitepoints'
import { getUserByEmployeeNo } from '../repositories/cafeins/users'
import {
  generatedCode,
  getVilagesByCoords,
} from '../repositories/cafeins/villages'
import { baristaClient } from '../utils/database'
import { logger } from '../utils/logger'
import { LogLevel, writeToLog } from './logs'

export const syncSitePoint = async (): Promise<void> => {
  try {
    logger.info('sync sitepoint start')
    const sitePoints = await getSitePointUnmigrated()

    for (const sitePoint of sitePoints) {
      try {
        // find site point nearest coordinate (<=4 meters)
        const nearestSitePoint = await getSitePointsByNearestCoords(
          sitePoint.latitude,
          sitePoint.longitude,
        )

        // if found mark data already migrated
        if (nearestSitePoint.length > 0) {
          await baristaClient.$transaction(async (trx) => {
            await trx.sitePoint.update({
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
                uuid: sitePoint.uuid,
                table: 'site_points',
              },
              trx as PrismaClient,
            )
          })

          logger.info('sitepoint updated')
          continue
        }

        // if sitepoint not found create data to cafeins
        const user = await getUserByEmployeeNo(sitePoint.created_employee_no)
        if (user == null) {
          throw new Error('sitepoint owner user not found cannot migrate data')
        }

        const village = await getVilagesByCoords(
          sitePoint.latitude,
          sitePoint.longitude,
        )
        if (village.length === 0) {
          throw new Error('sitepoint village not found cannot migrate data')
        }

        // generate code (default using SLA-)
        const generateCode = await generatedCode(
          'SLA-',
          village[0].id.toLocaleString(),
        )
        if (generateCode == null) {
          throw new Error('cannot generate code for sitepoint')
        }

        // set default site_category = 1 'general'
        const siteCategory = parseInt(process.env.SITE_CATEGORY_ID ?? '1')
        await createSitePoint(
          sitePoint.uuid,
          village[0].id,
          generateCode,
          generateCode,
          sitePoint.latitude,
          sitePoint.longitude,
          sitePoint.geometry,
          siteCategory,
          user.id as unknown as string,
          sitePoint.created_at,
          sitePoint.updated_at,
        )

        // marking data already migrated
        await baristaClient.$transaction(async (trx) => {
          await trx.sitePoint.update({
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
              uuid: sitePoint.uuid,
              table: 'site_points',
            },
            trx as PrismaClient,
          )
        })

        logger.info('sitepoint created')
      } catch (error: any) {
        error.ctx = {
          uuid: sitePoint.uuid,
          table: 'site_points',
        }

        throw error
      }
    }

    logger.info('sync sitepoint end')
  } catch (error: any) {
    await writeToLog(
      LogLevel.ERROR,
      error.message.replace(/\n/g, ''),
      error.ctx,
    )

    throw new Error(error.message.replace(/\n/g, ''))
  }
}
