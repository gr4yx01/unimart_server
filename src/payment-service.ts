import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config();

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

const instance = axios.create({
  baseURL: 'https://api.paystack.co',
  headers: {
    Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
    'Content-Type': 'application/json',
  },
});

const initializePayment = async (email: string, amount: string) => {
  try {
    const response = await instance.post('/transaction/initialize', JSON.stringify({
      email,
      amount
    }));
    return response.data;
  } catch (error: any) {
    throw new Error(`Error initializing payment: ${error.message}`);
  }
};

const verifyPayment = async (reference: any) => {
  try {
    const response = await instance.get(`/transaction/verify/${reference}`);
    const data = response.data;
    if (data.status && data.data.status === "success" && data.data.gateway_response === "Successful") {
      console.log("Verification successful: Payment was successful.");
      return data; // Return transaction data for further processing
    } else {
      return {
        message: 'Payment verification failed: Transaction was declined or incomplete.',
      }
      // console.log("Verification failed: Payment was not successful.");
      throw new Error("Payment verification failed: Transaction was declined or incomplete.");
    }
  } catch (error: any) {
    console.error(`Verification Error: ${error.response ? error.response.data.message : error.message}`);
    throw new Error("Error verifying payment.");
  }
};

export {
  initializePayment,
  verifyPayment,
};
