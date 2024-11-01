"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniversityResolver = void 0;
exports.UniversityResolver = {
    Query: {
        async universities(_, __, { prisma }) {
            const universities = await prisma.university.findMany();
            return universities;
        },
    },
    Mutation: {
        async createUniversity(_, args, { prisma }) {
            const { name } = args;
            const university = await prisma.university.create({
                data: {
                    name
                }
            });
            return university;
        },
    },
};
