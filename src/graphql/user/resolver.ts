

const resolvers = {
    Query: {
      user: (name: string) => {
        return {
            message: 'Welcome to September'
        }
      },
    },
  };