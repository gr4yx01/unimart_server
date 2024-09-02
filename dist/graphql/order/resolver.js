"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderResolver = void 0;
exports.OrderResolver = {
    Mutation: {
        async createOrder() {
            return {
                msg: 'create order'
            };
        },
    },
};
