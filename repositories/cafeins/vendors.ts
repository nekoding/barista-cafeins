import type { vendors } from '../../prisma/cafeins/cafeins-client'
import { cafeinsClient } from '../../utils/database'

export const getVendorByVendorNo = async (
  vendorNo: string,
): Promise<vendors | null> => {
  return await cafeinsClient.vendors.findFirst({
    where: {
      vendor_no: vendorNo,
    },
  })
}
