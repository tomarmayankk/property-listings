import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import leadRoutes from "./routes/lead.route.js";
import propertyRoutes from "./routes/property.routes.js";
import adminRoutes from "./routes/admin.route.js";

dotenv.config(); // MUST be FIRST

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/leads", leadRoutes);
app.use("/api/properties", propertyRoutes);
app.use("/api/admin", adminRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// start server AFTER DB connect
const startServer = async () => {
  try {
    await connectDB();

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log("CLOUD_API_KEY:", process.env.CLOUD_API_KEY);
    });
  } catch (err) {
    console.error("DB connection failed:", err);
  }
};

startServer();