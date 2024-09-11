import { createSubaccount, initializePayment, verifyPayment } from "../../../payment-service";

export const PaymentResolver = {
  Mutation: {
    createPaymentSession: async (_: any, args: any) => {
      const { email, amount, subaccount_code } = args;
      const result = await initializePayment(email, amount, subaccount_code);
      return result;
    },

    verifyPayment: async (_: any, { reference }: any) => {
      const result = await verifyPayment(reference);
      return result;
    },

    createSubaccount: async (_: any, args: any) => {
      const { business_name, account_number, bank_code, percentage_charge } = args;
      const result = await createSubaccount(business_name, account_number, bank_code, percentage_charge);
      return { subaccount_code: result };
    }
  },
};