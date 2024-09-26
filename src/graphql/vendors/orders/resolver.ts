    export const VendorOrderResolver = {
        Query: {
            async vendorOrders(_: any, args: any, { prisma }: any) {
                const { vendorId } = args;

                const orders = await prisma.orderItem.findMany({
                    where: {
                        product: {
                            vendorId
                        }
                    },
                    include: {
                        product: true,
                        order: {
                            include: {
                                user: true
                            }
                        },
                    }
                })

                return orders;
            }
        },
        Mutation: {
            async updateOrderStatus(_: any, args: any, { prisma }: any) {
                const { id, confirmed_payment, out_for_delivery, delivered } = args;

                const orderItemExist = await prisma.orderItem.findUnique({
                    where: {
                        id,
                    }
                })

                console.log(orderItemExist)

                if(!orderItemExist) {
                    throw new Error('Order does not exist')
                }

                const orderItem = await prisma.orderItem.update({
                    where: {
                        id: orderItemExist.id
                    },
                    data: {
                        // ...orderItemExist,
                        confirmed_payment,
                        out_for_delivery,
                        delivered
                    }
                })

                return orderItem;
            }
        }
    };