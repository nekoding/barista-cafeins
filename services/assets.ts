import type {
  application_parameters,
  asset_categories,
  asset_groups,
  assets,
  project_assets,
  projects,
  users,
} from '../prisma/cafeins/cafeins-client'
import { getAssetsUnmigrated } from '../repositories/barista/assets'
import { getApplicationParameterByCode } from '../repositories/cafeins/application_parameters'
import { findAssetCategoryByCode } from '../repositories/cafeins/asset_categories'
import { findAssetGroupByCode } from '../repositories/cafeins/asset_groups'
import { findProjectByUuid } from '../repositories/cafeins/projects'
import { findSitePointByUuid } from '../repositories/cafeins/sitepoints'
import { getUserByEmployeeNo } from '../repositories/cafeins/users'
import { getVilagesByCoords } from '../repositories/cafeins/villages'
import type { AssetUnmigrated } from '../types/barista/assets'
import { AuditEvent } from '../types/cafeins/audit'
import type { CafeinsSitePoint } from '../types/cafeins/sitepoint'
import type { BaristaVillage } from '../types/cafeins/villages'
import { baristaClient, cafeinsClient } from '../utils/database'
import { logger } from '../utils/logger'
import { LogLevel, writeToLog } from './logs'

const getCreatedUserByEmployeeNo = getUserByEmployeeNo

const getModifiedUserByEmployeeNo = getUserByEmployeeNo

const getAssetOwnership = getApplicationParameterByCode

const getAreaOwnership = getApplicationParameterByCode

// Example: PLLA-JKX-KBYKDN-001
const generateCounterNumber = async (
  asset: AssetUnmigrated,
  village: BaristaVillage,
): Promise<string> => {
  if (asset.sitepoint == null) {
    throw new Error('cannot migrate asset, due sitepoint not migrated')
  }

  const prefixIdentifier = `${asset.sitepoint?.company_code}${asset.asset_category}`
  const cityIdentifier = village.city_code_area
  const districtIdentifier = village.district_code_area
  const villageIdentitfier = village.village_code_area

  const identifier = `${prefixIdentifier}-${cityIdentifier}-${districtIdentifier}${villageIdentitfier}`
  const lastAsset = await cafeinsClient.assets.findFirst({
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
  if (lastAsset?.code != null) {
    const lastCounterSequence = lastAsset.code.substring(
      lastAsset.code.length - 3,
    )
    counterSequence = parseInt(lastCounterSequence) + 1
  }

  const finalCode = `${identifier}-${String(counterSequence).padStart(3, '0')}`
  return finalCode
}

type ValidatedData = [
  users,
  users,
  application_parameters,
  application_parameters,
  projects,
  CafeinsSitePoint,
  asset_categories,
  asset_groups,
  string,
]
const validateData = async (asset: AssetUnmigrated): Promise<ValidatedData> => {
  if (
    asset.project?.cafeins_uuid == null ||
    asset.sitepoint?.cafeins_uuid == null
  ) {
    throw new Error(
      'cannot migrate asset need migrate project and sitepoint first',
    )
  }

  const [
    createdUser,
    modifiedUser,
    assetOwnership,
    areaOwnership,
    project,
    sitepoint,
    assetCategory,
    assetGroup,
  ] = await Promise.all([
    getCreatedUserByEmployeeNo(asset.created_employee_no),
    getModifiedUserByEmployeeNo(
      asset.modified_employee_no ?? asset.created_employee_no,
    ),
    getAssetOwnership(asset.asset_ownership),
    getAreaOwnership(asset.area_ownership),
    findProjectByUuid(asset.project.cafeins_uuid),
    findSitePointByUuid(cafeinsClient, asset.sitepoint.cafeins_uuid),
    findAssetCategoryByCode(asset.asset_category),
    findAssetGroupByCode(asset.asset_group_code),
  ])

  if (createdUser == null) {
    throw new Error('created user not found')
  }

  if (modifiedUser == null) {
    throw new Error('modified user not found')
  }

  if (assetOwnership == null) {
    throw new Error('asset ownership not found')
  }

  if (areaOwnership == null) {
    throw new Error('area ownership not found')
  }

  if (project == null) {
    throw new Error('project not found')
  }

  if (sitepoint == null) {
    throw new Error('sitepoint not found')
  }

  if (assetCategory == null) {
    throw new Error('asset category not found')
  }

  if (assetGroup == null) {
    throw new Error('asset group not found')
  }

  const village = await getVilagesByCoords(
    asset.sitepoint?.latitude,
    asset.sitepoint?.longitude,
  )
  if (
    village?.village_code_area == null ||
    village?.city_code_area == null ||
    village?.district_code_area == null
  ) {
    throw new Error('village not found')
  }

  const assetCode = await generateCounterNumber(asset, village)
  return [
    createdUser,
    modifiedUser,
    assetOwnership,
    areaOwnership,
    project,
    sitepoint,
    assetCategory,
    assetGroup,
    assetCode,
  ]
}

const serializeAssetData = (asset: assets): string => {
  return JSON.stringify({
    ...asset,
    id: asset.id.toString(),
    asset_category_id: asset.asset_category_id.toString(),
    asset_group_id: asset.asset_group_id.toString(),
    site_point_id: asset.site_point_id.toString(),
    asset_ownership_id: asset.asset_ownership_id.toString(),
    area_ownership_id: asset.area_ownership_id.toString(),
    created_user_id: asset.created_user_id?.toString(),
    modified_user_id: asset.modified_user_id?.toString(),
    deleted_user_id: asset.deleted_user_id?.toString(),
  })
}

const serializeProjectAssetData = (projectAsset: project_assets): string => {
  return JSON.stringify({
    ...projectAsset,
    id: projectAsset.id.toString(),
    asset_id: projectAsset.asset_id.toString(),
    project_id: projectAsset.project_id.toString(),
    created_user_id: projectAsset.created_user_id?.toString(),
    modified_user_id: projectAsset.modified_user_id?.toString(),
    deleted_user_id: projectAsset.deleted_user_id?.toString(),
  })
}

export const syncAssets = async (): Promise<void> => {
  try {
    logger.info('sync asset start')
    const assets = await getAssetsUnmigrated()

    for (const asset of assets) {
      const [
        createdUser,
        modifiedUser,
        assetOwnership,
        areaOwnership,
        project,
        sitepoint,
        assetCategory,
        assetGroup,
        assetCode,
      ] = await validateData(asset)

      await cafeinsClient.$transaction(async (trx) => {
        // create asset
        const createdAsset = await trx.assets.create({
          data: {
            uuid: asset.uuid,
            asset_category_id: assetCategory.id,
            asset_group_id: assetGroup.id,
            site_point_id: sitepoint.id,
            asset_ownership_id: assetOwnership.id,
            area_ownership_id: areaOwnership.id,
            name: assetCode,
            code: assetCode,
            description: asset.description,
            created_at: asset.created_at,
            updated_at: asset.updated_at,
            created_user_id: createdUser.id,
            modified_user_id: modifiedUser.id,
          },
        })

        // create log asset
        const serializedAsset = serializeAssetData(createdAsset)
        await trx.audits.create({
          data: {
            user_type: `App\\Models\\User`,
            user_id: createdUser.id,
            event: AuditEvent.CREATED,
            auditable_type: `Modules\\Asset\\Entities\\Asset`,
            auditable_id: createdAsset.id,
            old_values: '[]',
            new_values: serializedAsset,
            user_agent: 'Barista',
            created_at: new Date(),
            updated_at: new Date(),
          },
        })

        // attach asset to project asset
        const projectAssetCreated = await trx.project_assets.create({
          data: {
            project_id: project.id,
            asset_id: createdAsset.id,
            created_at: new Date(),
            updated_at: new Date(),
            created_user_id: createdUser.id,
            modified_user_id: modifiedUser.id,
          },
        })

        // create log project asset
        const serializedProjectAsset =
          serializeProjectAssetData(projectAssetCreated)
        await trx.audits.create({
          data: {
            user_type: `App\\Models\\User`,
            user_id: createdUser.id,
            event: AuditEvent.CREATED,
            auditable_type: `Modules\\Master\\Entities\\ProjectAsset`,
            auditable_id: projectAssetCreated.id,
            old_values: '[]',
            new_values: serializedProjectAsset,
            user_agent: 'Barista',
            created_at: new Date(),
            updated_at: new Date(),
          },
        })

        // update data is migrated
        await baristaClient.asset.update({
          where: {
            uuid: asset.uuid,
          },
          data: {
            is_migrated: true,
            status: 'CREATED',
            last_read: new Date(),
            cafeins_uuid: asset.uuid,
          },
        })
      })
    }

    logger.info('sync asset finish')
  } catch (error: any) {
    await writeToLog(
      LogLevel.ERROR,
      error.message.replace(/\n/g, ''),
      error.ctx,
    )

    throw new Error(error.message.replace(/\n/g, ''))
  }
}
