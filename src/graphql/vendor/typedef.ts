export const VendorTypeDef = `
    type Vendor {
        name: String
        verified: Boolean
        phone_no: String
        image: String
        rating: Int
        subaccount_code: String
        account_number: String
        bank_code: String
    }

    type Mutation {
        createVendor(name: String!, verified: Boolean!, image: String!, phone_no: String!, rating: Int!, account_number: String!, bank_code: String!, subaccount_code: String): Vendor
    }
`;
