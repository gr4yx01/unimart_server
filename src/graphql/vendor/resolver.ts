export const VendorResolver = {
    Mutation: {
        async createVendor(_: any, args: any, { prisma }: any) {
            const vendor = await prisma.vendor.create({
                data: {
                    ...args
                }
            })

            return vendor
    },
}
}