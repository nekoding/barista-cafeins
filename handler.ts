import { syncProjects } from './services/projects'
import { syncSitePoint } from './services/sitepoints'

export const syncronizeAction = async (arg: string): Promise<void> => {
  switch (arg) {
    case arg.match(/\bprojects?\b/i)?.[0]:
      await syncProjects()
      break
    case arg.match(/\bsitepoints?\b/i)?.[0]:
      await syncSitePoint()
      break
    default:
      throw new Error('Invalid argument')
  }
}
