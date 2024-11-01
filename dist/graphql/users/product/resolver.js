"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProductResolver = void 0;
exports.userProductResolver = {
    Query: {
        async availableProducts(_, __, { prisma }) {
            try {
                const products = await prisma.product.findMany({
                    include: {
                        vendor: true
                    }
                });
                return products;
            }
            catch (err) {
                console.error(err);
            }
        }
    }
};
