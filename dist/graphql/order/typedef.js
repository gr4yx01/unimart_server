"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderTypeDef = void 0;
exports.OrderTypeDef = `
    type Order {
        items: [OrderItem]
        status: String
        total_price: Int
        delivery_date: String
        delivery_time: String
        payment_status: String
    }

    input OrderInput {
        items: [OrderItemInput]
        status: String
        total_price: Int
        delivery_date: String
        delivery_time: String
        payment_status: String
    }


    type Mutation {
        createOrder(input: OrderInput): Order
    }

`;
