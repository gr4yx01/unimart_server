export const VendorResolver = {
    Query: {
        async getVendorProfile(_: any, args: any, { prisma }: any) {
            try {
                const { vendorId } = args;
    
                const vendor = await prisma.vendor.findUnique({
                    where: {
                        id: vendorId
                    }
                })
    
                return vendor
            } catch (err) {
                console.log(err)
            }
        }
    },
    Mutation: {
        async createVendor(_: any, args: any, { prisma }: any) {
            try {
                const vendor = await prisma.vendor.create({
                    data: {
                        ...args
                    }
                })
    
                return vendor
            } catch (err: any) {
                console.log(err)
            }
        }
    }
}