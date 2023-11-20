import type { Asset, Prisma } from '../../prisma/barista/barista-client'

type AssetUnmigrated = Asset &
  Partial<
    Prisma.AssetGetPayload<{
      include: {
        project: { select: { cafeins_uuid: true; company_code: true } }
        sitepoint: {
          select: {
            cafeins_uuid: true
            company_code: true
            latitude: true
            longitude: true
          }
        }
      }
    }>
  >

export type { AssetUnmigrated }
