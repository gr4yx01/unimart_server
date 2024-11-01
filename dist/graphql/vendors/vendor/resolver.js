"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorResolver = void 0;
exports.VendorResolver = {
    Vendor: {
        total_orders: async (parent, _, { prisma }) => {
            console.log(parent.id);
            const totalOrders = await prisma.orderItem.findMany({
                where: {
                    product: {
                        vendorId: parent.id // Correct nested filtering based on vendorId in the Product model
                    }
                }
            });
            return totalOrders === null || totalOrders === void 0 ? void 0 : totalOrders.length;
        },
        revenue: async (parent, _, { prisma }) => {
            const orders = await prisma.orderItem.findMany({
                where: {
                    product: {
                        vendorId: parent.id
                    }
                }
            });
            const calculateRevenue = async (orders) => {
                const revenuePromises = orders.map(async (order) => {
                    return order.amount;
                });
                const revenueArray = await Promise.all(revenuePromises);
                const totalRevenue = revenueArray.reduce((acc, revenue) => acc + revenue, 0);
                return totalRevenue;
            };
            return calculateRevenue(orders);
        }
    },
    Query: {
        async getVendorIdByEmail(_, args, { prisma }) {
            try {
                const { email } = args;
                const vendor = await prisma.vendor.findFirst({
                    where: {
                        email
                    }
                });
                return vendor === null || vendor === void 0 ? void 0 : vendor.id;
            }
            catch (err) {
                console.log(err);
            }
        },
        async getVendorProfile(_, args, { prisma }) {
            try {
                const { id } = args;
                const vendor = await prisma.vendor.findUnique({
                    where: {
                        id,
                    }
                });
                return vendor;
            }
            catch (err) {
                console.log(err);
            }
        }
    },
    Mutation: {
        async createVendor(_, args, { prisma }) {
            try {
                const vendor = await prisma.vendor.create({
                    data: Object.assign({}, args)
                });
                return vendor;
            }
            catch (err) {
                console.log(err);
            }
        },
        async updateProfile(_, args, { prisma }) {
            const { id } = args;
            const vendorExist = await prisma.vendor.findUnique({
                where: {
                    id
                }
            });
            if (!vendorExist) {
                throw new Error('Vendor not found');
            }
            const vendor = await prisma.vendor.update({
                where: {
                    id: vendorExist.id
                },
                data: Object.assign({}, args)
            });
            return vendor;
        }
    }
};
