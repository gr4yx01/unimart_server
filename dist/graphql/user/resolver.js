"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
exports.UserResolver = {
    Query: {
        user: (name) => {
            return {
                message: 'Welcome to September'
            };
        },
    },
};
