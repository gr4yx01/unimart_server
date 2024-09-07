import express from 'express';
import cors from 'cors'
import { ApolloServer } from '@apollo/server';
import  { schema } from './graphql/schema';
import { expressMiddleware } from '@apollo/server/express4';
import {  PrismaClient } from '@prisma/client';
import cloudinary from './utils/cloudinary';



const app = express();

const prisma = new PrismaClient();

const startServer = async () => {
    const server = new ApolloServer({
        schema,
    });
    await server.start();
    app.use(
        '/graphql',
        cors(),
        express.json({ limit: '50mb' }),
        expressMiddleware(server, {
            context: async ({ req }) => {
                return {
                    prisma,
                    cloudinary
                }
            }
        }),
    );
    app.listen('4000', () => {
        console.log("Server's up");
    })
}

startServer();

