export const OrderResolver = {
    Query: {
        async orders(_: any, args: any, { prisma }: any) {
            const { userId } = args;

            const orders = await prisma.order.findMany({
                where: {
                    userId
                },
                include: {
                    items: {
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
        async createOrder(_: any, args: any, { prisma }: any) {
            const { items, userId, status, total_price, payment_status, payment_reference } = args.input;

            console.log(args.input);
            const order = await prisma.order.create({
                data: {
                    userId,
                    status,
                    total_price,
                    payment_status,
                    payment_reference
                },
                include: {
                    items: true
                }
            })

            items.forEach(async (item: any) => {
                await prisma.orderItem.create({
                    data: {
                        orderId: order.id,
                        productId: item.product_id,
                        quantity: item.quantity
                    }
                })
            })

            return order;
        },
    },
};