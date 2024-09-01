export const ProductTypeDef = `
    type Product {
        name: String
        price: Int
        description: String
        image: String
        vendor: Vendor
    }

    type Query {
        products: [Product]
        product(name: String!): Product
    }
`;