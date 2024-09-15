import { createCustomer, createPlan, subscribeCustomer, unsubscribeCustomer } from "../../../payment-service";

export const VendorSubscriptionResolver = {
    Mutation: {
        createPlan: async (_: any, { name, interval, amount }: { name: string, interval: string, amount: string}) => {
            try {
              const response = await createPlan(name, interval, amount);
              const { data } = response.data;
              return { name: data.name, interval: data.interval, amount: data.amount, plan_code: data.plan_code};
            } catch (error: any) {
              throw new Error(error.response.data.message);
            }
          },
        
          createCustomer: async (_: any, { email }: { email: string}) => {
            try {
              const response = await createCustomer(email);
              const { data } = response.data;
              return { email: data.email, customer_code: data.customer_code };
            } catch (error: any) {
              throw new Error(error.response.data.message);
            }
          },
    
          subscribeCustomer: async (_: any ,{ customer_code, plan_code }: { customer_code: string, plan_code: string}) => {
            try {
              const response = await subscribeCustomer(customer_code, plan_code);
              const { data } = response.data;
              console.log(response.data)
              return {
                customer: data.customer,
                plan: data.plan,
                subscription_code: data.subscription_code,
              };
            } catch (error: any) {
              throw new Error(error.response.data.message);
            }
          },
          unsubscribeCustomer: async (_: any, args: any) => {
            const { subscriptionCode, emailToken } = args;
            try {
              const response = await unsubscribeCustomer(subscriptionCode, emailToken)
              
              console.log(response);
              const { data } = response.data;
              return {
                status: data.status,
                message: data.message,
              }
            } catch (err: any) {
              throw new Error(err.response.data.message);
            }
          }
    }
}