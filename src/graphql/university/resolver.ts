export const UniversityResolver = {
    Query: {
        async universities(_: any, __: any, { prisma }: any) {
            const universities = await prisma.university.findMany()
            return universities
        },
    },
    Mutation: {
        async createUniversity(_: any, args: any, { prisma }: any) {
            const { name } = args;

            const university = await prisma.university.create({
                data: {
                    name
                }
            })
            return university
        },
    },
}  