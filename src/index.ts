import express from 'express';
import cors from 'cors'
import { ApolloServer } from '@apollo/server';
import  { schema } from './graphql/schema';
import { expressMiddleware } from '@apollo/server/express4';
import {  PrismaClient } from '@prisma/client';
import dotenv from 'dotenv'
import { v2 as cloudinary } from 'cloudinary';

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
        formatError: (error) => {
          console.error(error);
          return {
            message: error.message,
            code: error.extensions?.code ?? 'UNKNOWN_ERROR',
            locations: error.locations,
            path: error.path,
          };
        },
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

    app.listen('4000', () => {
        console.log("Server's up");
    })
}

startServer();

