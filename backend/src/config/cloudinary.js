import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config(); // ✅ ensure env is loaded here too

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

// 🔍 DEBUG (temporary)
console.log("CLOUDINARY INIT:", {
  cloud: process.env.CLOUD_NAME,
  key: process.env.CLOUD_API_KEY ? "OK" : "MISSING",
  secret: process.env.CLOUD_API_SECRET ? "OK" : "MISSING"
});

export default cloudinary;