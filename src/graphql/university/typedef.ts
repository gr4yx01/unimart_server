export const UniversityTypeDef = `
    type University {
        id: String
        name: String
    }

    type Mutation {
        createUniversity(name: String!): University
    }
`