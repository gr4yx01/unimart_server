import { Order } from "@prisma/client"

export const VendorResolver = {
    Vendor: {
        total_orders: async (parent: any, _: any, { prisma }: any) => {
            const totalOrders = await prisma.order.count({
                where: {
                    vendorId: parent.id
                }
            })

            return totalOrders
        },
        revenue: async (parent: any, _: any, { prisma }: any) => {
            const orders = await prisma.order.findMany({
                where: {
                    vendorId: parent.id
                }
            })

            const revenue = orders.reduce((acc: number, order: Order) => {
                return acc + order.total_price
            }, 0)

            return revenue
        }
    },
    Query: {
        async getVendorProfile(_: any, args: any, { prisma }: any) {
            try {
                const { vendorId } = args;
    
                const vendor = await prisma.vendor.findUnique({
                    where: {
                        id: vendorId
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