export const ProductTypeDef = `
    type Product {
        name: String
        price: Int
        description: String
        image: String
        vendor: Vendor
        rating: Int
        category: String
    }

    type Query {
        products: [Product]
        product(category: String!): [Product]
    }

    type Mutation {
        createProduct(name: String!, price: Int!, description: String, image: String!, vendorId: String!, rating: Int!, category: String!): Product
    }
`;