import type { Asset, PrismaClient } from '../prisma/barista/barista-client'
import { getAssetsUnmigrated } from '../repositories/barista/assets'
import { getMigratedProjectByGroupCode } from '../repositories/barista/projects'
import { getMigratedSitePointByGroupCode } from '../repositories/barista/sitepoints'
import { getApplicationParameterByCode } from '../repositories/cafeins/application_parameters'
import { getAssetCategoryByCode } from '../repositories/cafeins/asset_categories'
import { getAssetGroupByCode } from '../repositories/cafeins/asset_groups'
import { getProjectByUuid } from '../repositories/cafeins/projects'
import { getSitePointByUuid } from '../repositories/cafeins/sitepoints'
import { getUserByEmployeeNo } from '../repositories/cafeins/users'
import { baristaClient, cafeinsClient } from '../utils/database'
import { logger } from '../utils/logger'
import { LogLevel, writeToLog } from './logs'

export const syncAssets = async (): Promise<void> => {
  try {
    logger.info('sync assets start')
    const assets = await getAssetsUnmigrated()
    for (const asset of assets) {
      try {
        const [
          assetCreator,
          assetGroup,
          assetCategory,
          assetOwnership,
          areaOwnership,
          cafeinProject,
          cafeinSitePoint,
        ] = await prepareData(asset)

        await cafeinsClient.$transaction(async (trx) => {
          // create data asset
          const cafeinAsset = await trx.assets.create({
            data: {
              uuid: asset.uuid,
              asset_category_id: assetCategory.id,
              asset_group_id: assetGroup.id,
              site_point_id: cafeinProject.id,
              asset_ownership_id: assetOwnership.id,
              area_ownership_id: areaOwnership.id,
              name: asset.name,
              description: asset.description,
              created_at: asset.created_at,
              updated_at: asset.updated_at,
              created_user_id: assetCreator.id,
              modified_user_id: assetCreator.id,
            },
          })

          // create data project asset
          const cafeinProjectAsset = await trx.project_assets.create({
            data: {
              project_id: cafeinSitePoint.id,
              asset_id: cafeinAsset.id,
              created_at: asset.created_at,
              updated_at: asset.updated_at,
              created_user_id: assetCreator.id,
              modified_user_id: assetCreator.id,
            },
          })

          // mark data and logging
          await baristaClient.$transaction(async (baristaTrx) => {
            await baristaTrx.asset.update({
              data: {
                is_migrated: true,
                status: 'CREATED',
                cafeins_uuid: cafeinAsset.uuid,
                last_read: new Date(),
              },
              where: {
                uuid: asset.uuid,
              },
            })

            await writeToLog(
              LogLevel.INFO,
              'asset created',
              {
                uuid: asset.uuid,
                assets_uuid: cafeinAsset.uuid,
                project_asset_uuid: cafeinProjectAsset.uuid,
                table: 'assets',
              },
              baristaTrx as PrismaClient,
            )
          })
        })
      } catch (error: any) {
        error.ctx = {
          uuid: asset.uuid,
          table: 'assets',
        }

        throw error
      }
    }

    logger.info('sync assets success')
  } catch (error: any) {
    await writeToLog(
      LogLevel.ERROR,
      error.message.replace(/\n/g, ''),
      error.ctx,
    )

    throw new Error(error.message.replace(/\n/g, ''))
  }
}

const prepareData = async (asset: Asset): Promise<any> => {
  // validation created_employee_no
  if (asset.created_employee_no == null) {
    throw new Error('asset creator is null cannot migrate data')
  }

  // validation asset group code
  if (asset.asset_group_code == null) {
    throw new Error('asset group code is null cannot migrate data')
  }

  // validation asset category code
  if (asset.asset_category == null) {
    throw new Error('asset category code is null cannot migrate data')
  }

  // validation asset ownership code
  if (asset.asset_ownership == null) {
    throw new Error('asset ownership code is null cannot migrate data')
  }

  // validation area ownership code
  if (asset.area_ownership == null) {
    throw new Error('area ownership code is null cannot migrate data')
  }

  // validation project group code
  if (asset.project_group_code == null) {
    throw new Error('project group code is null cannot migrate data')
  }

  // validation site group code
  if (asset.site_group_code == null) {
    throw new Error('site group code is null cannot migrate data')
  }

  // prepare data
  const [
    assetCreator,
    assetGroup,
    assetCategory,
    assetOwnership,
    areaOwnership,
  ] = await Promise.all([
    getUserByEmployeeNo(asset.created_employee_no),
    getAssetGroupByCode(asset.asset_group_code),
    getAssetCategoryByCode(asset.asset_category),
    getApplicationParameterByCode(asset.asset_ownership),
    getApplicationParameterByCode(asset.area_ownership),
  ])

  // validation assets creator
  if (assetCreator == null) {
    throw new Error('asset creator not found cannot migrate data')
  }

  // validation assets group
  if (assetGroup == null) {
    throw new Error('asset group not found cannot migrate data')
  }

  // validation asset category
  if (assetCategory == null) {
    throw new Error('asset category not found cannot migrate data')
  }

  // validation asset ownership
  if (assetOwnership == null) {
    throw new Error('asset ownership not found cannot migrate data')
  }

  // validation area ownership
  if (areaOwnership == null) {
    throw new Error('area ownership not found cannot migrate data')
  }

  // validation project group code
  const baristaProject = await getMigratedProjectByGroupCode(
    asset.project_group_code,
  )
  if (baristaProject?.cafeins_uuid == null) {
    throw new Error('project not found in migration database')
  }

  const cafeinProject = await getProjectByUuid(baristaProject.cafeins_uuid)
  if (cafeinProject == null) {
    throw new Error('project group code not found cannot migrate data')
  }

  // validation site group code
  const baristaSitePoint = await getMigratedSitePointByGroupCode(
    asset.site_group_code,
  )
  if (baristaSitePoint?.cafeins_uuid == null) {
    throw new Error('site point not found in migration database')
  }

  const cafeinSitePoint = await getSitePointByUuid(
    baristaSitePoint.cafeins_uuid,
  )
  if (cafeinSitePoint == null) {
    throw new Error('site group code not found cannot migrate data')
  }

  return [
    assetCreator,
    assetGroup,
    assetCategory,
    assetOwnership,
    areaOwnership,
    cafeinProject,
    cafeinSitePoint,
  ]
}
