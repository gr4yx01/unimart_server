import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { OrderTypeDef } from "./users/order/typedef";
import { ProductTypeDef } from "./users/product/typedef";
import { VendorTypeDef } from "./vendors/vendor/typedef";
import { UniversityTypeDef } from "./university/typedef";
import { UserTypeDef } from "./users/user/typedef";
import { OrderItemTypeDef } from "./users/orderitem/typedef";
import { PaymentTypeDef } from "./users/payment/typedef";
import { VendorOrderTypeDef } from "./vendors/orders/typedef";
import { PaymentResolver  } from "./users/payment/resolver";
import { OrderItemResolver } from "./users/orderitem/resolver";
import { OrderResolver } from "./users/order/resolver";
import { ProductResolver } from "./users/product/resolver";
import { VendorResolver } from "./vendors/vendor/resolver";
import { UniversityResolver } from "./university/resolver";
import { UserResolver } from "./users/user/resolver";
import { VendorOrderResolver } from "./vendors/orders/resolver";


const typeDefs = mergeTypeDefs([UniversityTypeDef, ProductTypeDef, UserTypeDef, OrderTypeDef, VendorTypeDef, OrderItemTypeDef, PaymentTypeDef, VendorOrderTypeDef, ]);

const resolvers = mergeResolvers([UniversityResolver, ProductResolver, UserResolver, OrderResolver, VendorResolver, OrderItemResolver, PaymentResolver, VendorOrderResolver]);

export const schema = makeExecutableSchema({ typeDefs, resolvers });
