export const CloudinaryResolver = {
    Mutation: {
        uploadImage: async (_: any, { base64Image }: { base64Image: string }, { cloudinary }: any) => {
            try {
              // Upload the base64 image to Cloudinary
              const result = await cloudinary.uploader.upload(base64Image, {
                folder: 'uploads', // Optional: specify folder in Cloudinary
                transformation: { width: 500, crop: 'scale' } // Optional: specify transformations
              });
      
              // Return the optimized URL
              return { optimizedUrl: result.secure_url };
            } catch (error) {
              console.error('Error uploading to Cloudinary:', error);
              throw new Error('Failed to upload image.');
            }
        },
    },
}