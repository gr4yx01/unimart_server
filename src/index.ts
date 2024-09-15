import express from 'express';
import cors from 'cors'
import { ApolloServer } from '@apollo/server';
import  { schema } from './graphql/schema';
import { expressMiddleware } from '@apollo/server/express4';
import {  PrismaClient } from '@prisma/client';
import dotenv from 'dotenv'
import { v2 as cloudinary } from 'cloudinary';
import { handleWebhook } from './webhook'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // replace with your cloud name
  api_key: process.env.CLOUDINARY_API_KEY,      // replace with your api key
  api_secret: process.env.CLOUDINARY_API_SECRET // replace with your api secret
});

const app = express();

dotenv.config();

export const prisma = new PrismaClient();

const startServer = async () => {
    const server = new ApolloServer({
        schema,
    });
    await server.start();
    app.use(
        '/graphql',
        cors(),
        express.json({ limit: '100mb' }),
        expressMiddleware(server, {
            context: async ({ req }) => {
                return {
                    prisma,
                    cloudinary
                }
            }
        }),
    );

    app.post('/webhook', handleWebhook);
    app.listen('4000', () => {
        console.log("Server's up");
    })
}

startServer();

