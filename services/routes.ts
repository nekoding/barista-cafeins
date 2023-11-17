import { getRouteUnmigrated } from '../repositories/barista/routes'

export const syncRoutes = async (): Promise<void> => {
  try {
    const routes = await getRouteUnmigrated()
    console.log(routes)
  } catch (error) {}
}
