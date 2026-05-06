import express from "express";
import { createLead, getLeads } from "../controllers/lead.controller.js";

const router = express.Router();

// public (Sell form)
router.post("/", createLead);

// admin
router.get("/", getLeads);

export default router;