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

    type SubaccountData {
        business_name: String
        account_number: String
        bank_code: String
        percentage_charge: Float
    }

    type SubaccountResponse {
        subaccount_code: String
    }

    type Mutation {
        createPaymentSession(email: String!, amount: Int!, subaccount_code: String!): PaymentInitialization
        verifyPayment(reference: String!): PaymentVerification
        createSubaccount(business_name: String!, account_number: String!, bank_code: String!, percentage_charge: Float!): SubaccountResponse
    }
`;