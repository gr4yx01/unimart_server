"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const server_1 = require("@apollo/server");
const schema_1 = require("./graphql/schema");
const express4_1 = require("@apollo/server/express4");
const client_1 = require("@prisma/client");
const dotenv_1 = __importDefault(require("dotenv"));
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // replace with your cloud name
    api_key: process.env.CLOUDINARY_API_KEY, // replace with your api key
    api_secret: process.env.CLOUDINARY_API_SECRET // replace with your api secret
});
const app = (0, express_1.default)();
dotenv_1.default.config();
exports.prisma = new client_1.PrismaClient();
const startServer = async () => {
    const server = new server_1.ApolloServer({
        schema: schema_1.schema,
        formatError: (error) => {
            var _a, _b;
            console.error(error);
            return {
                message: error.message,
                code: (_b = (_a = error.extensions) === null || _a === void 0 ? void 0 : _a.code) !== null && _b !== void 0 ? _b : 'UNKNOWN_ERROR',
                locations: error.locations,
                path: error.path,
            };
        },
    });
    await server.start();
    app.use('/graphql', (0, cors_1.default)(), express_1.default.json({ limit: '100mb' }), (0, express4_1.expressMiddleware)(server, {
        context: async ({ req }) => {
            return {
                prisma: exports.prisma,
                cloudinary: cloudinary_1.v2
            };
        }
    }));
    app.listen('4000', () => {
        console.log("Server's up");
    });
};
startServer();
