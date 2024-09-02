export const PaymentTypeDef = `
    type PaymentInitialization {
        status: String
        message: String
        data: PaymentData
    }

    type PaymentData {
        authorization_url: String
        access_code: String
        reference: String
    }

    type PaymentVerification {
        status: String
        message: String
        data: PaymentVerificationData
    }

    type PaymentVerificationData {
        id: String
        amount: Int
        email: String
        status: String
    }

    type OrderProduct {
        productId: String
        quantity: Int
    }

    type Mutation {
        createPaymentSession(email: String!, amount: Int!): PaymentInitialization
        verifyPayment(reference: String!): PaymentVerification
    }
    
`;