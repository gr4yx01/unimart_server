export const UserTypeDef = `
    type User {
        id: String
        name: String
        email: String
        department: String
        university: University
        level: String
        phone_no: String
        orders: [Order]
    }
    
    type Query {
        user(id: String!): User
    }
    
    type Mutation {
        createUser(name: String!, email: String!, department: String!, universityId: String!, level: String!, phone_no: String!): User
        updateUser(id : ID!, name: String!, email: String!, department: String!, level: String!, phone_no: String!): User
    }
`;