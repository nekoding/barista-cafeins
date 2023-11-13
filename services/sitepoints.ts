import { getAllAssetsWithCoords } from '../repositories/cafeins/assets'

export const syncSitePoint = async (): Promise<void> => {
  const assets = await getAllAssetsWithCoords(
    -6.251270309490195,
    106.83200075349885,
    10,
  )

  console.log(assets)
}
