"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemTypeDef = void 0;
exports.OrderItemTypeDef = `
    type OrderItem {
        id: ID!
        order_id: ID!
        product_id: ID!
        quantity: Int!
    }

    input OrderItemInput {
        order_id: ID!
        product_id: ID!
        quantity: Int!
    }

    type Query {
        orderItems: [OrderItem]
    }

    type Mutation {
        createOrderItem(input: OrderItemInput): OrderItem
    }
`;
