    export const VendorOrderResolver = {
        Query: {
            async vendorOrders(_: any, args: any, { prisma }: any) {
                const { vendorId } = args;

                const orders = await prisma.order.findMany({
                    where: {
                        items: {
                            some: {
                                vendorId
                            }
                        }
                    },
                    include: {
                        items: {
                            where: {
                                vendorId
                            },
                            include: {
                                product: true
                            }
                        }
                    }
                })

                return orders;
            }
        },
        Mutation: {
            async updateOrderStatus(_: any, args: any, { prisma }: any) {
                const { id, status } = args;

                const orderExist = await prisma.order.findUnique({
                    where: {
                        id,
                    }
                })

                if(!orderExist) {
                    throw new Error('Order does not exist')
                }

                const order = await prisma.order.update({
                    where: {
                        id: orderExist.id
                    },
                    data: {
                        ...orderExist,
                        status
                    }
                })

                return order;
            }
        }
    };