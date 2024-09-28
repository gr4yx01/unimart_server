export const VendorOrderTypeDef = `
    type Order {
        items: [OrderItem]
        user: User
        status: String
        total_price: Int
        created_at: String
        payment_status: Boolean
        payment_reference: String
    }

    type OrderItem {
        quantity: Int
        product: Product
        order: Order
        status: Status
        amount: Int
        confirmed_payment: Boolean
        out_for_delivery: Boolean
        delivered: Boolean
    }

    input Items {
        product_id: ID!
        quantity: Int!
    }

    enum Status {
        PENDING
        DELIVERED
        CANCELLED
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
        payment_status: Boolean!
        payment_reference: String!
    }

    type Query {
        vendorOrders(vendorId: String!): [OrderItem]
        getOrderItemDetail(id: String!): OrderItem
    }
        
    type Mutation {
        updateOrderStatus(id: String!, confirmed_payment: Boolean!, out_for_delivery: Boolean!, delivered: Boolean!): OrderItem
    }  
`;