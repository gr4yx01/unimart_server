import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { OrderTypeDef } from "./order/typedef";
import { ProductTypeDef } from "./product/typedef";
import { VendorTypeDef } from "./vendor/typedef";
import { UniversityTypeDef } from "./university/typedef";
import { UserTypeDef } from "./user/typedef";
import { OrderItemTypeDef } from "./orderitem/typedef";
import { PaymentTypeDef } from "./payment/typedef";
import { CloudinaryTypeDef } from "./cloudinary/typedef";
import { PaymentResolver  } from "./payment/resolver";
import { OrderItemResolver } from "./orderitem/resolver";
import { OrderResolver } from "./order/resolver";
import { ProductResolver } from "./product/resolver";
import { VendorResolver } from "./vendor/resolver";
import { UniversityResolver } from "./university/resolver";
import { UserResolver } from "./user/resolver";
import { CloudinaryResolver } from "./cloudinary/resolver";


const typeDefs = mergeTypeDefs([UniversityTypeDef, ProductTypeDef, UserTypeDef, OrderTypeDef, VendorTypeDef, OrderItemTypeDef, PaymentTypeDef, CloudinaryTypeDef]);

const resolvers = mergeResolvers([UniversityResolver, ProductResolver, UserResolver, OrderResolver, VendorResolver, OrderItemResolver, PaymentResolver, CloudinaryResolver]);

export const schema = makeExecutableSchema({ typeDefs, resolvers });
