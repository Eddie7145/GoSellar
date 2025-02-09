import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: 'daueleyul',
  api_key: '619565646168296',
  api_secret: 'Me5w5G9i79KANt1pN7FoJ4iSkkE',
  timeout: 120000, // Increase timeout to 120 seconds
});

console.log("Cloudinary Config:", cloudinary.config());



export default cloudinary;
