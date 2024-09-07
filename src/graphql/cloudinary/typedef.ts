export const CloudinaryTypeDef = `
    type Mutation {
    uploadImage(base64Image: String!): ImageResponse!
  }

  type ImageResponse {
    optimizedUrl: String!
  }
`;