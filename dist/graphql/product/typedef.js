"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTypeDef = void 0;
exports.ProductTypeDef = `
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
        product(name: String!): Product
    }

    type Mutation {
        createProduct(name: String!, price: Int!, description: String, image: String, vendor: String, rating: Int, category: String): Product
    }
`;
