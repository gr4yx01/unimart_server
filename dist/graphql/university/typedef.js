"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniversityTypeDef = void 0;
exports.UniversityTypeDef = `
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
`;
