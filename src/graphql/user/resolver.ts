
export const UserResolver = {
    Query: {
      user: async (_: any, args: any, { prisma }: any) => {
        
        const { id } = args;
        const user = await prisma.user.findUnique({
          where: {
            id
          },
          include: {
            university: true,
          }
        });

        return user;
      }
    },
    Mutation: {
      createUser: async (_: any, args: any, { prisma }: any) => {
        const { name, email, department, universityId, level, phone_no } = args;

        const user = await prisma.user.create({
          data: {
            name,
            email,
            department,
            universityId,
            level,
            phone_no
          }
        });

        return user;
      }
    }
}