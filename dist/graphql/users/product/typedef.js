"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProductTypeDef = void 0;
exports.userProductTypeDef = `
    type Product {
        id: String
        name: String
        price: Int
        description: String
        thumbnail: String
        vendor: Vendor
        stock: Int
        rating: Int
        category: String
    }

    type Query {
        availableProducts: [Product]
    }
`;
