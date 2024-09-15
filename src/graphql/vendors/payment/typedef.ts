export const VendorSubscriptionTypeDef = `
    type Plan {
    name: String!
    interval: String!
    amount: Int!
    plan_code: String!
  }

  type Customer {
    email: String!
    customer_code: String
  }

  type SubscriptionResponse {
    customer: String!
    plan: String!
    subscription_code: String
  }

  type UnsubscriptionResponse {
    status: Boolean!
    message: String!
  }

  type Mutation {
    createPlan(name: String!, interval: String!, amount: Int!): Plan
    createCustomer(email: String!): Customer
    subscribeCustomer(customer_code: String!, plan_code: String!): SubscriptionResponse
    unsubscribeCustomer(subscriptionCode: String!, emailToken: String!): UnsubscriptionResponse
  }
`;