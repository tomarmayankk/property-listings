import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    email: String,
    propertyType: {
      type: String,
      enum: ["plot", "house", "shop", "flat", "others"],
      required: true
    },
    location: {
      type: String,
      required: true
    },
    budget: Number,
    message: String
  },
  { timestamps: true }
);

export default mongoose.model("Lead", leadSchema);