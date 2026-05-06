import Lead from "../models/lead.model.js";

// @desc Submit lead (Sell Property form)
export const createLead = async (req, res) => {
  try {
    const lead = await Lead.create(req.body);
    res.status(201).json({ message: "Details submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Get all leads (Admin)
export const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};