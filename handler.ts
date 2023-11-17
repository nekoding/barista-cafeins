import { syncAssets } from './services/assets'
import { syncProjects } from './services/projects'
import { syncRoutes } from './services/routes'
import { syncSitePoint } from './services/sitepoints'

export const syncronizeAction = async (arg: string): Promise<void> => {
  switch (arg) {
    case arg.match(/\bprojects?\b/i)?.[0]:
      await syncProjects()
      break
    case arg.match(/\bsitepoints?\b/i)?.[0]:
      await syncSitePoint()
      break
    case arg.match(/\basset?\b/i)?.[0]:
      await syncAssets()
      break
    case arg.match(/\broute?\b/i)?.[0]:
      await syncRoutes()
      break
    default:
      throw new Error('Invalid argument')
  }
}
