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


const initializePaymentForMultipleSubaccounts = async (subaccounts: any) => {
  // Calculate the total amount
  const amount = subaccounts.reduce((sum: number, subaccount: any) => sum + subaccount?.amount, 0);

  const totalAmount =((amount * 0.05) + amount) * 100

  const splitDetails = subaccounts.map((subaccount: any) => ({
    subaccount: subaccount?.subaccount_code,
    share: subaccount?.amount * 100
  }));

  // Initialize payment for the aggregated transaction
  const result = await initializePayment(subaccounts[0].email, String(totalAmount), splitDetails);
  return result;
};

const initializePayment = async (email: string, amount: string, splitDetails: any) => {
  console.log(amount)
  console.log(splitDetails)
  try {
    const response = await instance.post('/transaction/initialize', JSON.stringify({
      email,
      amount,
      split: {
        "type": "flat",
        "bearer_type": "all",
        "subaccounts": splitDetails
      },
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
    }
  } catch (error: any) {
    console.error(`Verification Error: ${error.response ? error.response.data.message : error.message}`);
    throw new Error("Error verifying payment.");
  }
};

const createSubaccount = async (business_name: string, account_number: string, bank_code: string, percentage_charge: number = 10) => {
  try {
    const response = await instance.post(
      '/subaccount',
      {
        business_name,
        account_number,
        bank_code, // The bank code of the vendor's bank (e.g., '058' for GTBank)
        percentage_charge, // Percentage of the payment to be routed to the subaccount
        settlement_bank: bank_code,
      }
    );

    return response.data.data.subaccount_code;
  } catch (error: any) {
    console.error('Error creating subaccount:', error.response.data);
    throw error;
  }
};
const createPlan = async (name: string, interval: string, amount: string) => {
  return instance.post('/plan', {
    name,
    interval,
    amount,
  });
};

const createCustomer = async (email: string) => {
  return instance.post('/customer', { email });
};

const subscribeCustomer = async (customer_code: string, plan_code: string) => {
  return instance.post('/subscription', {
    customer: customer_code,
    plan: plan_code,
  });
};

const unsubscribeCustomer = async (subscription_code: string, email_token: string) => {
  console.log(subscription_code, email_token);
  return instance.post('/subscription/disable', {
    code: subscription_code,
    token: email_token,
  });
};


export {
  initializePayment,
  verifyPayment,
  createSubaccount,
  createPlan,
  createCustomer,
  subscribeCustomer,
  unsubscribeCustomer,
  initializePaymentForMultipleSubaccounts
};
