import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { OrderTypeDef } from "./users/order/typedef";
import { ProductTypeDef } from "./vendors/product/typedef";
import { VendorTypeDef } from "./vendors/vendor/typedef";
import { UniversityTypeDef } from "./university/typedef";
import { UserTypeDef } from "./users/user/typedef";
import { OrderItemTypeDef } from "./users/orderitem/typedef";
import { VendorOrderTypeDef } from "./vendors/orders/typedef";
import { OrderItemResolver } from "./users/orderitem/resolver";
import { OrderResolver } from "./users/order/resolver";
import { ProductResolver } from "./vendors/product/resolver";
import { VendorResolver } from "./vendors/vendor/resolver";
import { UniversityResolver } from "./university/resolver";
import { UserResolver } from "./users/user/resolver";
import { VendorOrderResolver } from "./vendors/orders/resolver";
import { userProductResolver } from "./users/product/resolver";
import { userProductTypeDef } from "./users/product/typedef";

const typeDefs = mergeTypeDefs([UniversityTypeDef, ProductTypeDef, UserTypeDef, OrderTypeDef, VendorTypeDef, OrderItemTypeDef, VendorOrderTypeDef, userProductTypeDef]);

const resolvers = mergeResolvers([UniversityResolver, ProductResolver, UserResolver, OrderResolver, VendorResolver, OrderItemResolver, VendorOrderResolver, userProductResolver]);

export const schema = makeExecutableSchema({ typeDefs, resolvers });
