import express from "express";
import {
  getProperties,
  createProperty,
  deleteProperty,
  getPropertyById,
  getSimilarProperties
} from "../controllers/property.controller.js";

import protectAdmin from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js"; // ✅ added

const router = express.Router();

// =======================
// PUBLIC ROUTES
// =======================
router.get("/", getProperties);
router.get("/:id", getPropertyById); // ✅ added route to get single property details
router.get("/similar/:id", getSimilarProperties); // ✅ added route to get similar properties

// =======================
// ADMIN ROUTES
// =======================
// Create property with backend image upload
router.post(
  "/",
  protectAdmin,
  upload.array("images", 5), // ✅ handles multiple images
  createProperty
);

router.delete("/:id", protectAdmin, deleteProperty);

export default router;