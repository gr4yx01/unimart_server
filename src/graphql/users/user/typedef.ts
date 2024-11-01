export const UserTypeDef = `
    type User {
        id: String
        name: String
        department: String
        university: University
        level: String
        phone_no: String
        orders: [Order]
        wallet_address: String
    }
    
    type Query {
        user(id: String!): User
    }
    
    type Mutation {
        createUser(name: String!, department: String!, universityId: String!, level: String!, phone_no: String!, gender: String!, wallet_address: String!): User
        updateUser(id : ID!, name: String!, department: String!, level: String!, phone_no: String!): User
    }
`;