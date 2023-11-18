import type { Asset, Prisma } from '../../prisma/barista/barista-client'

export type AssetUnmigrated = Asset &
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
