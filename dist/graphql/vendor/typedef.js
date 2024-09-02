"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorTypeDef = void 0;
exports.VendorTypeDef = `
    type Vendor {
        name: String
        verified: Boolean
        phone_no: String
        rating: Int
    }

    type Mutation {
        createVendor(name: String!, verified: Boolean!, phone_no: String!): Vendor
    }
`;
