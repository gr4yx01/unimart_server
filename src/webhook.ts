import { prisma } from ".";

const handleWebhook = async (req: any, res: any) => {
  const event = req.body;

  switch (event.event) {
    case 'subscription.create':
      // Handle new subscription creation
      break;
    case 'subscription.disable':
      // Update vendor's subscription status to inactive
      await prisma.vendor.update({
        where: { 
          subscriptionCode: event.data.subscription_code
         },
        data: { subscriptionStatus: 'INACTIVE' },
      });
      break;
    case 'invoice.payment_failed':
      // Handle failed payment, possibly notify vendor or update status
      await prisma.vendor.update({
        where: { subscriptionCode: event.data.subscription_code },
        data: { subscriptionStatus: 'INACTIVE' },
      });
      break;
    case 'invoice.payment_succeeded':
      // Handle successful payment, ensure subscription is active
      await prisma.vendor.update({
        where: { subscriptionCode: event.data.subscription_code },
        data: { subscriptionStatus: 'ACTIVE' },
      });
      break;
    default:
      console.log(`Unhandled event type ${event.event}`);
  }

  res.status(200).send('Webhook received');
};

export { handleWebhook };
