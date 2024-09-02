export const UniversityResolver = {
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