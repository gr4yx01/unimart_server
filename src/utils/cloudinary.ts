import { v2 as cloudinary } from 'cloudinary';

console.log(process.env.CLOUDINARY_CLOUD_NAME)
console.log(process.env.CLOUDINARY_API_KEY)
console.log(process.env.CLOUDINARY_API_SECRET)

export default cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // replace with your cloud name
  api_key: process.env.CLOUDINARY_API_KEY,      // replace with your api key
  api_secret: process.env.CLOUDINARY_API_SECRET // replace with your api secret
});

