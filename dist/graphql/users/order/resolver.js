"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderResolver = void 0;
exports.OrderResolver = {
    Query: {
        async orders(_, args, { prisma }) {
            const { userId } = args;
            const orders = await prisma.order.findMany({
                where: {
                    userId
                },
                include: {
                    items: {
                        include: {
                            product: {
                                include: {
                                    vendor: true
                                }
                            }
                        }
                    }
                }
            });
            return orders;
        }
    },
    Mutation: {
        async createOrder(_, args, { prisma }) {
            const { items, userId, status, total_price, payment_status, hash } = args;
            const order = await prisma.order.create({
                data: {
                    userId,
                    status,
                    total_price,
                    payment_status,
                    hash
                },
                include: {
                    items: true
                }
            });
            items.forEach(async (item) => {
                const product = await prisma.product.findUnique({
                    where: {
                        id: item.product_id
                    }
                });
                await prisma.orderItem.create({
                    data: {
                        orderId: order.id,
                        productId: item.product_id,
                        quantity: item.quantity,
                        amount: (item === null || item === void 0 ? void 0 : item.quantity) * (product === null || product === void 0 ? void 0 : product.price)
                    }
                });
            });
            return order;
        },
    },
};
