import { baristaClient, cafeinsClient } from './utils/database'

console.log('BARISTA DB URL', process.env.DATABASE_BARISTA_URL)
console.log('CAFEINS DB URL', process.env.DATABASE_CAFEINS_URL)
console.log('SITEPOINT CATEGORY ID', process.env.SITEPOINT_CATEGORY_ID)
console.log('PROJECT GROUP ID', process.env.PROJECT_PROJECT_GROUP_ID)

// DEBUG connection
const debugConnectionDB = async (): Promise<void> => {
  await baristaClient.$connect()
  await cafeinsClient.$connect()
}

await debugConnectionDB()
