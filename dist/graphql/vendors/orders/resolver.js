"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorOrderResolver = void 0;
exports.VendorOrderResolver = {
    Query: {
        async vendorOrders(_, args, { prisma }) {
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
            });
            return orders;
        },
        async getOrderItemDetail(_, args, { prisma }) {
            const { id } = args;
            const orderItem = await prisma.orderItem.findUnique({
                where: {
                    id
                },
                include: {
                    product: true,
                    order: {
                        include: {
                            user: true
                        }
                    }
                }
            });
            return orderItem;
        }
    },
    Mutation: {
        async updateOrderStatus(_, args, { prisma }) {
            const { id, confirmed_payment, out_for_delivery, delivered } = args;
            const orderItemExist = await prisma.orderItem.findUnique({
                where: {
                    id,
                }
            });
            console.log(orderItemExist);
            if (!orderItemExist) {
                throw new Error('Order does not exist');
            }
            const orderItem = await prisma.orderItem.update({
                where: {
                    id: orderItemExist.id
                },
                data: Object.assign(Object.assign({}, orderItemExist), { confirmed_payment,
                    out_for_delivery,
                    delivered })
            });
            return orderItem;
        }
    }
};
