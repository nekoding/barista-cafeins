import { getProjectsUnmigrated } from '../repositories/barista/projects'

export const syncProjects = async (): Promise<void> => {
  console.log('syncing projects')
  const projects = await getProjectsUnmigrated()

  for (const project of projects) {
    console.log(project)
  }
}
