export const ProductResolver = {
    Query: {
        async products(_: any, args: any, { prisma }: any) {
            const { vendorId } = args;
            const products = await prisma.product.findMany({
                where: {
                    vendorId
                },
                include: {
                    vendor: true
                }
            })

            return products;
        }
    },
    Mutation: {
        async createProduct(_: any, args: any, { prisma }: any ) {
            const { name, price, description, thumbnail, vendorId, rating, category, stock } = args;

            const product = await prisma.product.create({
                data: {
                    name,
                    price,
                    description,
                    thumbnail,
                    vendorId,
                    rating,
                    category,
                    stock
                }
            })

            return product;
        },
        async editProduct(_: any, args: any, { prisma }: any) {
            const { id } = args;

            const productExist = await prisma.product.findUnique({
                where: {
                    id,
                }
            })

            if(!productExist) {
                throw new Error('Product is not found');
            }

            const product = await prisma.product.update({
                where: {
                    id: productExist.id
                },
                data: {
                    ...args
                }
            })

            return product;
        },
        async deleteProduct(_: any, args: any, { prisma }: any) {
            const { id } = args;

            const productExist = await prisma.product.findUnique({
                where: {
                    id,
                }
            })

            if(!productExist) {
                throw new Error('Product is not found');
            }

            const product = await prisma.product.delete({
                where: {
                    id
                }
            })

            return product;
        }
    }
};