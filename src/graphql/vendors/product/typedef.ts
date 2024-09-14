export const ProductTypeDef = `
    type Product {
        name: String
        price: Int
        description: String
        thumbnail: String
        vendor: Vendor
        stock: Int
        rating: Int
        category: String
    }

    enum Category {
        BOOK
        FOOD
        PHONE
        LAPTOP
        PERFUME
        CLOTHING
        ROOM_ITEMS
    }

    input ProductInput {
        name: String!
        price: Int!
        description: String!
        thumbnail: String!
        vendorId: String!
        stock: Int!
        rating: Int!
        category: Category!
    }

    type Query {
        products(vendorId: String!): [Product]
    }

    type Mutation {
        createProduct(
            name: String!
            price: Int!
            description: String!
            thumbnail: String!
            vendorId: String!
            stock: Int!
            rating: Int!
            category: Category!
        ): Product
        editProduct(
            id: String!
            name: String!
            price: Int!
            description: String!
            thumbnail: String!
            stock: Int!
        ): Product
        deleteProduct(id: String!): Product
    }
`;