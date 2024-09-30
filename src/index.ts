import express from 'express';
import cors from 'cors'
import { ApolloServer } from '@apollo/server';
import  { schema } from './graphql/schema';
import { expressMiddleware } from '@apollo/server/express4';
import {  PrismaClient } from '@prisma/client';
import dotenv from 'dotenv'
import { v2 as cloudinary } from 'cloudinary';
import { handleWebhook } from './webhook'
import { verifyPayment } from './payment-service';

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

    app.get('/verify-payment/:reference', async (req, res) => {
        const transactionReference = req.params.reference;
      
        try {
          const { status, data } = await verifyPayment(transactionReference);
            
          console.log(data)
          if (status === 'success') {
            res.json({
              success: true,
              paymentStatus: data.data.status, // 'success' or 'failed'
              reference: transactionReference
            });
          } else {
            res.json({
              success: false,
              message: 'Failed to verify payment'
            });
          }
        } catch (error: any) {
          res.status(500).json({
            success: false,
            message: 'Error verifying transaction',
            error: error.message
          });
        }
      });

    app.post('/webhook', handleWebhook);
    app.listen('4000', () => {
        console.log("Server's up");
    })
}

startServer();

