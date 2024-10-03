export const OrderTypeDef = `
    type Order {
        id: String
        items: [OrderItem]
        user: User
        status: String
        total_price: Int
        createdAt: String
        payment_status: Boolean
        payment_reference: String
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
        payment_reference: String!): Order
    }

`;