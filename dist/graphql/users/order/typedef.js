"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderTypeDef = void 0;
exports.OrderTypeDef = `
    type Order {
        id: String
        items: [OrderItem]
        user: User
        status: String
        total_price: Int
        createdAt: String
        payment_status: Boolean
        hash: String
    }

    input Items {
        product_id: ID!
        quantity: Int!
    }

    type Query {
        orders(userId: String!): [Order]
    }

    type Mutation {
        createOrder(items: [Items!]!
        userId: String!
        status: String!
        total_price: Int!
        payment_status: Boolean!
        hash: String!): Order
    }

`;
