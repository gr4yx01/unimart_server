export const OrderItemResolver = {
    Query : {
        async orderItems() {
            return {
                msg: 'orderItems'
            }

        }
    },
    Mutation: {
        async rateProduct(_: any, args: any, { prisma }: any) {
            const { id, rating } = args;
            const codeOfHonour = 10
            try {
                const productExist = await prisma.product.findUnique({
                    where: {
                        id
                    }
                })

                const allProduct = await prisma.product.findMany({})
                
                const totalRatings = allProduct?.reduce((sum: number, acc: any) => sum + acc?.rating, 0)
                const meanRating = totalRatings / allProduct?.length

                if(productExist) {
                    const data = await prisma.product.update({
                        where: {
                            id
                        },
                        data: {
                            ...productExist,
                            rating: Math.round((codeOfHonour * meanRating + (productExist?.totalRate + rating)) / (codeOfHonour + productExist?.noOfRating)),
                            noOfRating: productExist?.noOfRating + 1,
                            totalRate: productExist?.totalRate + rating
                        }
                    })

                    return data;
                } else {
                    return new Error('Product does not exist')
                }
            } catch (err: any) {
                return err.message
            }
        },
        async rateVendor(_: any, args: any, { prisma }: any) {
            const { id, rating } = args;
            const codeOfHonour = 10;
            try {
                const vendorExist = await prisma.vendor.findUnique({
                    where: {
                        id
                    }
                })

                const allVendor = await prisma.vendor.findMany({})
                
                const totalRatings = allVendor?.reduce((sum: number, acc: any) => sum + acc?.rating, 0)
                const meanRating = totalRatings / allVendor?.length

                if(vendorExist) {
                    const data = await prisma.vendor.update({
                        where: {
                            id
                        },
                        data: {
                            ...vendorExist,
                            rating: Math.round((codeOfHonour * meanRating + (vendorExist?.totalRate + rating)) / (codeOfHonour + vendorExist?.noOfRating)),
                            noOfRating: vendorExist?.noOfRating + 1,
                            totalRate: vendorExist?.totalRate + rating
                        }
                    })

                    return data;
                } else {
                    return new Error('Product does not exist')
                }
            } catch (err: any) {
                return err.message
            }
        }
    }
}