export const OrderItemTypeDef = `
    type OrderItem {
        id: ID!
        order: Order
        product: Product
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
        rateProduct(id: String!, rating: Int!): Product
        rateVendor(id: String!, rating: Int!): Vendor
    }
`;