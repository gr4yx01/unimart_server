export const userProductResolver = {
  Query: {
    async availableProducts(_: any, __: any, { prisma }: any) {
        try {
            const products = await prisma.product.findMany({
                include: {
                    vendor: true
                }
            })
            
            return products;
        } catch (err) {
            console.error(err)
        }
    }
  }
};