export const VendorResolver = {
    Mutation: {
        async createVendor(_: any, args: any, { prisma }: any) {
            const { name, verified, image, phone_no, rating } = args;
            const vendor = await prisma.vendor.create({
                data: {
                    name,
                    image,
                    verified,
                    phone_no,
                    rating,
                }
            })

            return vendor
    },
}
}