import { baristaClient, cafeinsClient } from '../utils/database'

export const syncHandler = async (
  tablename: string,
  option: object,
): Promise<void> => {
  switch (tablename) {
    case 'projects':
      await syncProjectTables()
      break

    default:
      console.log('Table not found')
      break
  }
}

const syncProjectTables = async (): Promise<void> => {
  try {
    const projects = await baristaClient.project.findMany({
      where: {
        is_migrated: false,
        status: null,
      },
      take: 100,
    })

    for (const project of projects) {
      if (
        project.company_code != null &&
        project.vendor_no != null &&
        project.owner_nik != null
      ) {
        const company = await cafeinsClient.companies.findFirst({
          where: {
            name: {
              contains: project.company_code,
              mode: 'insensitive',
            },
          },
        })

        const vendor = await cafeinsClient.vendors.findFirst({
          where: {
            name: {
              contains: project.vendor_no,
              mode: 'insensitive',
            },
          },
        })

        const projectOwner = await cafeinsClient.users.findFirst({
          where: {
            t_employee_id: parseInt(project.owner_nik),
          },
        })

        console.log(company, vendor, projectOwner)
      }
    }
  } catch (error) {
    console.log(error)
  }
}
