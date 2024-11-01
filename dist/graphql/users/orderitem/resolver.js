"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemResolver = void 0;
exports.OrderItemResolver = {
    Query: {
        async orderItems() {
            return {
                msg: 'orderItems'
            };
        }
    },
    Mutation: {
        async rateProduct(_, args, { prisma }) {
            const { id, rating } = args;
            const codeOfHonour = 10;
            try {
                const productExist = await prisma.product.findUnique({
                    where: {
                        id
                    }
                });
                const allProduct = await prisma.product.findMany({});
                const totalRatings = allProduct === null || allProduct === void 0 ? void 0 : allProduct.reduce((sum, acc) => sum + (acc === null || acc === void 0 ? void 0 : acc.rating), 0);
                const meanRating = totalRatings / (allProduct === null || allProduct === void 0 ? void 0 : allProduct.length);
                if (productExist) {
                    const data = await prisma.product.update({
                        where: {
                            id
                        },
                        data: Object.assign(Object.assign({}, productExist), { rating: Math.round((codeOfHonour * meanRating + ((productExist === null || productExist === void 0 ? void 0 : productExist.totalRate) + rating)) / (codeOfHonour + (productExist === null || productExist === void 0 ? void 0 : productExist.noOfRating))), noOfRating: (productExist === null || productExist === void 0 ? void 0 : productExist.noOfRating) + 1, totalRate: (productExist === null || productExist === void 0 ? void 0 : productExist.totalRate) + rating })
                    });
                    return data;
                }
                else {
                    return new Error('Product does not exist');
                }
            }
            catch (err) {
                return err.message;
            }
        },
        async rateVendor(_, args, { prisma }) {
            const { id, rating } = args;
            const codeOfHonour = 10;
            try {
                const vendorExist = await prisma.vendor.findUnique({
                    where: {
                        id
                    }
                });
                const allVendor = await prisma.vendor.findMany({});
                const totalRatings = allVendor === null || allVendor === void 0 ? void 0 : allVendor.reduce((sum, acc) => sum + (acc === null || acc === void 0 ? void 0 : acc.rating), 0);
                const meanRating = totalRatings / (allVendor === null || allVendor === void 0 ? void 0 : allVendor.length);
                if (vendorExist) {
                    const data = await prisma.vendor.update({
                        where: {
                            id
                        },
                        data: Object.assign(Object.assign({}, vendorExist), { rating: Math.round((codeOfHonour * meanRating + ((vendorExist === null || vendorExist === void 0 ? void 0 : vendorExist.totalRate) + rating)) / (codeOfHonour + (vendorExist === null || vendorExist === void 0 ? void 0 : vendorExist.noOfRating))), noOfRating: (vendorExist === null || vendorExist === void 0 ? void 0 : vendorExist.noOfRating) + 1, totalRate: (vendorExist === null || vendorExist === void 0 ? void 0 : vendorExist.totalRate) + rating })
                    });
                    return data;
                }
                else {
                    return new Error('Product does not exist');
                }
            }
            catch (err) {
                return err.message;
            }
        }
    }
};
