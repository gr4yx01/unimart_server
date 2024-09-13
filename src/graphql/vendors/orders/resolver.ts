export const VendorOrderResolver = {
    Query: {
        async getPendingOrders(_: any, args: any, { prisma }: any) {
            const { vendorId } = args;

            const orders = await prisma.order.findMany({
                where: {
                    status: 'PENDING',
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
        },
        getNumberOfPendingOrders(_: any, args: any, { prisma }: any) {
            const { vendorId } = args;

            const orders = prisma.order.findMany({
                where: {
                    status: 'PENDING',
                    items: {
                        some: {
                            vendorId
                        }
                    }
                }
            })

            return {
                label: 'Pending Orders',
                quantity: orders.length || 0
            };
        },
        getNumberOfCompletedOrders(_: any, args: any, { prisma }: any) {
            const { vendorId } = args;
            const orders = prisma.order.findMany({
                where: {
                    status: 'COMPLETED',
                    items: {
                        some: {
                            vendorId
                        }
                    }
                }
            })

            return {
                label: 'Pending Orders',
                quantity: orders.length || 0
            };
        }
    }
};