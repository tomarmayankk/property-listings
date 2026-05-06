import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ["plot", "house", "shop", "flat"],
      required: true
    },
    bhk: Number, // optional (only for houses/flats)
    area: Number, // sq ft
    images: [String] // URLs (we’ll use this later)
  },
  { timestamps: true }
);

export default mongoose.model("Property", propertySchema);