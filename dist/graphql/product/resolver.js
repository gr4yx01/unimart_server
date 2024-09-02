"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductResolver = void 0;
exports.ProductResolver = {
    Query: {
        async products() {
            return {
                msg: 'products'
            };
        },
    },
};
