export const VendorTypeDef = `
    type Vendor {
        name: String
        verified: Boolean
        phone_no: String
        image: String
        rating: Int
    }

    type Mutation {
        createVendor(name: String!, verified: Boolean!, image: String!, phone_no: String!, rating: Int!): Vendor
    }
`;
