import { initializePayment, verifyPayment } from "../../payment-service";

export const PaymentResolver = {
  Mutation: {
    createPaymentSession: async (_: any, args: any, { prisma }: any) => {
      const { email, amount } = args;
      const result = await initializePayment(email, amount);
      return result;
    },

    verifyPayment: async (_: any, { reference }: any) => {
      const result = await verifyPayment(reference);
      return result;
    },
  },
};