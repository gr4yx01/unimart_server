import { OrderItem } from "@prisma/client"

export const VendorResolver = {
    Vendor: {
        total_orders: async (parent: any, _: any, { prisma }: any) => {
            console.log(parent.id);
            const totalOrders = await prisma.orderItem.findMany({
                where: {
                  product: {
                    vendorId: parent.id // Correct nested filtering based on vendorId in the Product model
                  }
                }
              });

            return totalOrders?.length
        },
        revenue: async (parent: any, _: any, { prisma }: any) => {
            const orders = await prisma.orderItem.findMany({
                where: {
                    product: {
                        vendorId: parent.id
                    }
                }
            })

            const calculateRevenue = async (orders: OrderItem[]) => {
                const revenuePromises = orders.map(async (order: OrderItem) => {
                    return order.amount;
                });
                // Resolve all the promises and sum up the revenue
                const revenueArray = await Promise.all(revenuePromises);
                const totalRevenue = revenueArray.reduce((acc: number, revenue: number) => acc + revenue, 0);
              
                return totalRevenue;
              };

            return calculateRevenue(orders)
        }
    },
    Query: {
        async getVendorIdByEmail(_: any, args: any, { prisma }: any) {
            try {
                const { email } = args;
    
                const vendor = await prisma.vendor.findFirst({
                    where: {
                        email
                    }
                })
    
                return vendor?.id   
            } catch (err) {
                console.log(err)
            }
        },
        async getVendorProfile(_: any, args: any, { prisma }: any) {
            try {
                const { id } = args;
    
                const vendor = await prisma.vendor.findUnique({
                    where: {
                        id,
                    }
                })
    
                return vendor
            } catch (err) {
                console.log(err)
            }
        }
    },
    Mutation: {
        async createVendor(_: any, args: any, { prisma }: any) {
            try {
                const vendor = await prisma.vendor.create({
                    data: {
                        ...args
                    }
                })
    
                return vendor   
            } catch (err: any) {
                console.log(err)
            }
        },
        async updateProfile(_: any, args: any, { prisma }: any) {
            const { id } = args;

            const vendorExist = await prisma.vendor.findUnique({
                where: {
                    id
                }
            })

            if(!vendorExist) {
                throw new Error('Vendor not found')
            }

            const vendor = await prisma.vendor.update({
                where: {
                    id: vendorExist.id
                },
                data: {
                    ...args
                }
            })

            return vendor;
        }
    }
}