import { syncAssets } from './services/assets'
import { syncCables } from './services/cables'
import { syncProjects } from './services/projects'
import { syncRoutes } from './services/routes'
import { syncSegments } from './services/segments'
import { syncSitePoint } from './services/sitepoints'

export const syncronizeAction = async (arg: string): Promise<void> => {
  switch (arg) {
    case arg.match(/\bprojects?\b/i)?.[0]:
      await syncProjects()
      break
    case arg.match(/\bsitepoints?\b/i)?.[0]:
      await syncSitePoint()
      break
    case arg.match(/\bassets?\b/i)?.[0]:
      await syncAssets()
      break
    case arg.match(/\broutes?\b/i)?.[0]:
      await syncRoutes()
      break
    case arg.match(/\bcables?\b/i)?.[0]:
      await syncCables()
      break
    case arg.match(/\bsegments?\b/i)?.[0]:
      await syncSegments()
      break
    default:
      throw new Error('Invalid argument')
  }
}
