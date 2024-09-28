export const userProductTypeDef = `
    type Product {
        id: String
        name: String
        price: Int
        description: String
        thumbnail: String
        vendor: Vendor
        stock: Int
        rating: Int
        category: String
    }

    type Query {
        availableProducts: [Product]
    }
`;
