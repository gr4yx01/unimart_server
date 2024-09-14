export const VendorOrderTypeDef = `
    type Order {
        items: [OrderItem]
        user: User
        status: String
        total_price: Int
        created_at: String
        payment_status: String
        payment_reference: String
    }

    input Items {
        product_id: ID!
        quantity: Int!
    }

    type NumberOfOrders {
        label: String
        quantity: Int
    }

    input OrderInput {
        items: [Items!]!
        userId: String!
        status: String!
        total_price: Int!
        payment_status: String!
        payment_reference: String!
    }

    type Query {
        getPendingOrders(vendorId: String!): [Order]
    }
        
    type Mutation {
        updateOrderStatus(id: String!, status: String!): Order
    }
`;