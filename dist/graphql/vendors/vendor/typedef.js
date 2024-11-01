"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorTypeDef = void 0;
exports.VendorTypeDef = `
    type Vendor {
        id: String
        name: String
        verified: Boolean
        phone_no: String
        image: String
        email: String
        rating: Int
        total_orders: Int
        revenue: Int
        wallet_address: String
    }

    type Query {
        getVendorProfile(id: String!): Vendor
        getVendorIdByEmail(email: String!): String
    }

    type Mutation {
        createVendor(name: String!, verified: Boolean!, image: String!, phone_no: String!, rating: Int!, wallet_address: String!): Vendor
        updateProfile(id: String, name: String, image: String, phone_no: String, wallet_address: String): Vendor
    }
`;
