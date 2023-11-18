import type { SitePoint } from '../prisma/barista/barista-client'
import type { PrismaClient, users } from '../prisma/cafeins/cafeins-client'
import { getSitePointUnmigrated } from '../repositories/barista/sitepoints'
import {
  createSitePoint,
  findSitePointByUuid,
  getSitePointsByNearestCoords,
} from '../repositories/cafeins/sitepoints'
import { getUserByEmployeeNo } from '../repositories/cafeins/users'
import { getVilagesByCoords } from '../repositories/cafeins/villages'
import { AuditEvent } from '../types/cafeins/audit'
import type { BaristaVillage } from '../types/cafeins/villages'
import { baristaClient, cafeinsClient } from '../utils/database'
import { logger } from '../utils/logger'
import { LogLevel, writeToLog } from './logs'

const getCreatedUserByEmployeeNo = getUserByEmployeeNo

const getModifiedUserByEmployeeNo = getUserByEmployeeNo

// Example: SLA-JKX-KBYKDN-001
const generateCounterNumber = async (
  sitePoint: SitePoint | BaristaSitePoint,
  village: BaristaVillage,
): Promise<string> => {
  const prefixIdentifier = `S${sitePoint.company_code}`
  const cityIdentifier = village.city_code_area
  const districtIdentifier = village.district_code_area
  const villageIdentitfier = village.village_code_area

  const identifier = `${prefixIdentifier}-${cityIdentifier}-${districtIdentifier}${villageIdentitfier}`
  const lastSitePoint = await cafeinsClient.site_points.findFirst({
    where: {
      name: {
        contains: identifier,
      },
    },
    orderBy: {
      name: 'desc',
    },
  })

  let counterSequence = 1
  if (lastSitePoint?.name != null) {
    const lastCounterSequence = lastSitePoint.name.substring(
      lastSitePoint.name.length - 3,
    )
    counterSequence = parseInt(lastCounterSequence) + 1
  }

  const finalCode = `${identifier}-${String(counterSequence).padStart(3, '0')}`
  return finalCode
}

const updateSitePoint = async (uuid: string, data: object): Promise<void> => {
  await baristaClient.sitePoint.update({
    data,
    where: {
      uuid,
    },
  })
}

type ValidatedData = [BaristaVillage, users, users, string]
const validateData = async (
  sitePoint: SitePoint | BaristaSitePoint,
): Promise<ValidatedData> => {
  const [village, createdUser, modifiedUser] = await Promise.all([
    getVilagesByCoords(sitePoint.latitude, sitePoint.longitude),
    getCreatedUserByEmployeeNo(sitePoint.created_employee_no),
    getModifiedUserByEmployeeNo(
      sitePoint.modified_employee_no ?? sitePoint.created_employee_no,
    ),
  ])

  if (
    village?.village_code_area == null ||
    village?.city_code_area == null ||
    village?.district_code_area == null
  ) {
    throw new Error('village not found')
  }

  if (createdUser == null) {
    throw new Error('created user not found')
  }

  if (modifiedUser == null) {
    throw new Error('modified user not found')
  }

  const sitePointCode = await generateCounterNumber(sitePoint, village)
  return [village, createdUser, modifiedUser, sitePointCode]
}

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
          await updateSitePoint(sitePoint.uuid, {
            cafeins_uuid: sitePoint.uuid,
            is_migrated: true,
            last_read: new Date(),
            status: 'UPDATED',
          })

          logger.info('sitepoint updated in cafeins', {
            uuid: sitePoint.uuid,
            table: 'site_points',
          })

          continue
        }

        const [village, createdUser, modifiedUser, sitePointCode] =
          await validateData(sitePoint)

        await cafeinsClient.$transaction(async (trx) => {
          // create sitepoint
          await createSitePoint(
            trx as PrismaClient,
            sitePoint.uuid,
            village.village_id,
            process.env.SITEPOINT_CATEGORY_ID ?? 1,
            sitePointCode,
            sitePointCode,
            sitePoint.latitude,
            sitePoint.longitude,
            sitePoint.geometry,
            createdUser.id as unknown as string,
            modifiedUser.id as unknown as string,
            sitePoint.created_at,
            sitePoint.updated_at,
          )

          // get last inserted data
          const lastInsertedSitePoint = await findSitePointByUuid(
            trx as PrismaClient,
            sitePoint.uuid,
          )

          if (lastInsertedSitePoint == null) {
            throw new Error('sitepoint failed inserted to database cafeins')
          }

          const serialized = JSON.stringify({
            ...lastInsertedSitePoint,
            id: lastInsertedSitePoint.id.toString(),
            village_id: lastInsertedSitePoint.village_id.toString(),
            site_category_id: lastInsertedSitePoint.site_category_id.toString(),
            created_user_id: lastInsertedSitePoint.created_user_id?.toString(),
            modified_user_id:
              lastInsertedSitePoint.modified_user_id?.toString(),
            deleted_user_id: lastInsertedSitePoint.deleted_user_id?.toString(),
          })

          // create audit data
          await trx.audits.create({
            data: {
              user_type: `App\\Models\\User`,
              user_id: createdUser.id,
              event: AuditEvent.CREATED,
              auditable_type: `Modules\\SitePoint\\Entities\\SitePoint`,
              auditable_id: lastInsertedSitePoint.id,
              old_values: '[]',
              new_values: serialized,
              user_agent: 'Barista',
              created_at: new Date(),
              updated_at: new Date(),
            },
          })

          // mark data created
          await baristaClient.sitePoint.update({
            where: {
              uuid: sitePoint.uuid,
            },
            data: {
              status: 'CREATED',
              last_read: new Date(),
              is_migrated: true,
              cafeins_uuid: sitePoint.uuid,
            },
          })
        })
      } catch (error: any) {
        error.ctx = {
          uuid: sitePoint.uuid,
          table: 'site_points',
        }

        throw error
      }
    }

    logger.info('sync sitepoint finish')
  } catch (error: any) {
    await writeToLog(
      LogLevel.ERROR,
      error.message.replace(/\n/g, ''),
      error.ctx,
    )

    throw new Error(error.message.replace(/\n/g, ''))
  }
}
