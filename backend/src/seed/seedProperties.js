import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "../config/db.js";
import Property from "../models/property.model.js";

dotenv.config();
const properties = [
  {
    title: "2BHK Flat in Noida Sector 62",
    description: "Well-ventilated flat near metro station",
    price: 4200000,
    location: "Noida",
    type: "flat",
    bhk: 2,
    area: 1050,
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
    ]
  },
  {
    title: "3BHK Premium Flat in Noida",
    description: "Modern apartment with clubhouse access",
    price: 6500000,
    location: "Noida",
    type: "flat",
    bhk: 3,
    area: 1500,
    images: [
      "https://images.unsplash.com/photo-1560448075-bb4caa6b6bc6"
    ]
  },
  {
    title: "Luxury Villa in Dehradun",
    description: "Spacious villa with garden and parking",
    price: 15000000,
    location: "Dehradun",
    type: "house",
    bhk: 4,
    area: 3000,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    ]
  },
  {
    title: "3BHK House in Dehradun",
    description: "Family home in peaceful locality",
    price: 9000000,
    location: "Dehradun",
    type: "house",
    bhk: 3,
    area: 2200,
    images: [
      "https://images.unsplash.com/photo-1572120360610-d971b9b639c4"
    ]
  },
  {
    title: "Residential Plot in Roorkee",
    description: "Best for long-term investment",
    price: 2500000,
    location: "Roorkee",
    type: "plot",
    area: 1800,
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef"
    ]
  },
  {
    title: "Corner Plot in Roorkee",
    description: "Corner plot near main road",
    price: 3200000,
    location: "Roorkee",
    type: "plot",
    area: 2000,
    images: [
      "https://images.unsplash.com/photo-1470723710355-95304d8aece4"
    ]
  },
  {
    title: "Commercial Shop in Haridwar",
    description: "High footfall area shop",
    price: 6000000,
    location: "Haridwar",
    type: "shop",
    area: 500,
    images: [
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716"
    ]
  },
  {
    title: "Retail Shop in Haridwar Market",
    description: "Perfect for clothing or electronics",
    price: 7200000,
    location: "Haridwar",
    type: "shop",
    area: 650,
    images: [
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df"
    ]
  },
  {
    title: "1BHK Budget Flat in Roorkee",
    description: "Affordable housing option",
    price: 1800000,
    location: "Roorkee",
    type: "flat",
    bhk: 1,
    area: 600,
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    ]
  },
  {
    title: "2BHK Flat in Haridwar",
    description: "Near Ganga river, peaceful environment",
    price: 3500000,
    location: "Haridwar",
    type: "flat",
    bhk: 2,
    area: 950,
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb"
    ]
  },
  {
    title: "Independent House in Roorkee",
    description: "Perfect for families",
    price: 7000000,
    location: "Roorkee",
    type: "house",
    bhk: 3,
    area: 1800,
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
    ]
  },
  {
    title: "Premium Villa in Haridwar",
    description: "Luxury living with modern design",
    price: 12000000,
    location: "Haridwar",
    type: "house",
    bhk: 4,
    area: 2600,
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811"
    ]
  },
  {
    title: "Farm Land Plot near Dehradun",
    description: "Great for farmhouse projects",
    price: 5000000,
    location: "Dehradun",
    type: "plot",
    area: 4000,
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    ]
  },
  {
    title: "Office Space in Noida",
    description: "Commercial space for startups",
    price: 8000000,
    location: "Noida",
    type: "shop",
    area: 1200,
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c"
    ]
  },
  {
    title: "Studio Apartment in Dehradun",
    description: "Perfect for students or bachelors",
    price: 2200000,
    location: "Dehradun",
    type: "flat",
    bhk: 1,
    area: 550,
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858"
    ]
  }
];
const seedData = async () => {
  try {
    await connectDB();

    await Property.deleteMany(); // ⚠️ clears old data
    console.log("Old properties removed");

    await Property.insertMany(properties);
    console.log("Sample properties added");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedData();