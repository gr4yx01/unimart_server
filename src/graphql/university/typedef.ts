export const UniversityTypeDef = `
    type University {
        id: String
        name: String
    }

    type Query {
        universities: [University]
    }

    type Mutation {
        createUniversity(name: String!): University
    }
`