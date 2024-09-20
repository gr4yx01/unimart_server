export const VendorTypeDef = `
    type Vendor {
        id: String
        name: String
        verified: Boolean
        phone_no: String
        image: String
        email: String
        rating: Int
        subaccount_code: String
        account_number: String
        bank_code: String
        total_orders: Int
        revenue: Int
        subscriptionStatus: String
        subscriptionCode: String
    }

    type Query {
        getVendorProfile(id: String!): Vendor
        getVendorIdByEmail(email: String!): String
    }

    type Mutation {
        createVendor(name: String!, verified: Boolean!, image: String!, phone_no: String!, rating: Int!, email: String!, account_number: String!, bank_code: String!, subaccount_code: String!, subscriptionStatus: String!, subscriptionCode: String!): Vendor
        updateProfile(id: String, name: String, image: String, phone_no: String, email: String, account_number: String, bank_code: String ): Vendor
    }
`;
