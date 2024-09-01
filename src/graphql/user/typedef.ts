export const UserTypeDef = `
    type User {
        name: String
        department: String
        university: University
        level: String
        phone_no: String
        orders: [Order]
    }
    
    type Query {
        user(name: String!): User
    }
    
    type Mutation {
        createUser(name: String!, department: String!, university: String, level: String, phone_no: String): User
    }
`