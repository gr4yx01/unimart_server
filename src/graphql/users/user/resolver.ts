
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
        
        try {
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
        } catch (err: any) {
          throw new Error(`Failed to fetch user: ${err.message}`);
        }
      },
      updateUser: async (_: any, args: any, { prisma }: any) => {
        const { id, ...detail } = args;
        const user = await prisma.user.update({
          where: {
            id
          },
          data: {
            ...detail
          }
        });

        return user
      }
    }
}