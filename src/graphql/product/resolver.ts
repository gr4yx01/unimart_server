export const ProductResolver = {
    Query: {
        async products(_: any, args: any, { prisma }: any) {
            const products = await prisma.product.findMany({
                include: {
                    vendor: true
                }
            });

            return products;
        },
        async product(_: any, args: any, { prisma }: any) {
            const { category } = args;
            const products = await prisma.product.findMany({
                where: {
                    category: category
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
            const { name, price, description, image, vendorId, rating, category } = args;

            const product = await prisma.product.create({
                data: {
                    name,
                    price,
                    description,
                    image,
                    vendorId,
                    rating,
                    category
                }
            })

            return product;
        }
    }
};