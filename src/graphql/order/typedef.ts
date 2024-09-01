export const OrderTypeDef = `
    type Order {
        items: [OrderItem]
        status: String
        total_price: Int
        delivery_date: String
        delivery_time: String
        payment_status: String
    }

    type Mutation {
        createOrder(items: [OrderItemInput], delivery_date: String, delivery_time: String): Order
    }

`