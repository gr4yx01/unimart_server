"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductResolver = void 0;
exports.ProductResolver = {
    Query: {
        async products(_, args, { prisma }) {
            const { vendorId } = args;
            const products = await prisma.product.findMany({
                where: {
                    vendorId
                },
                include: {
                    vendor: true
                }
            });
            return products;
        }
    },
    Mutation: {
        async createProduct(_, args, { prisma }) {
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
            });
            return product;
        },
        async editProduct(_, args, { prisma }) {
            const { id } = args;
            const productExist = await prisma.product.findUnique({
                where: {
                    id,
                }
            });
            if (!productExist) {
                throw new Error('Product is not found');
            }
            const product = await prisma.product.update({
                where: {
                    id: productExist.id
                },
                data: Object.assign({}, args)
            });
            return product;
        },
        async deleteProduct(_, args, { prisma }) {
            const { id } = args;
            const productExist = await prisma.product.findUnique({
                where: {
                    id,
                }
            });
            if (!productExist) {
                throw new Error('Product is not found');
            }
            const product = await prisma.product.delete({
                where: {
                    id
                }
            });
            return product;
        }
    }
};
