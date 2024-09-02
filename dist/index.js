"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const server_1 = require("@apollo/server");
const schema_1 = require("./graphql/schema");
const express4_1 = require("@apollo/server/express4");
const app = (0, express_1.default)();
const server = new server_1.ApolloServer({
    schema: schema_1.schema
    // context: ({ req, res }) => ({ req, res }),
});
const startServer = async () => {
    await server.start();
    app.use('/graphql', (0, cors_1.default)(), express_1.default.json(), (0, express4_1.expressMiddleware)(server));
    app.listen('4000', () => {
        console.log("Server's up");
    });
};
startServer();
