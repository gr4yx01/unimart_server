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
    }

    type Query {
        getVendorProfile(vendorId: String!): Vendor
    }

    type Mutation {
        createVendor(name: String!, verified: Boolean!, image: String!, phone_no: String!, rating: Int!, email: String!, account_number: String!, bank_code: String!, subaccount_code: String!): Vendor
    }
`;
