import Property from "../models/property.model.js";

// @desc Get all properties (public - Buy page)
export const getProperties = async (req, res) => {
  try {
    const { location, type, minPrice, maxPrice } = req.query;

    let query = {};

    if (location) query.location = { $regex: location, $options: "i" };
    if (type) query.type = type;

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    const properties = await Property.find(query).sort({ createdAt: -1 });

    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// =========================
// CREATE PROPERTY (FIXED)
// =========================
export const createProperty = async (req, res) => {
  try {
    // ✅ images come from multer (Cloudinary storage)
    const imageUrls = req.files ? req.files.map((file) => file.path) : [];

    const property = await Property.create({
      ...req.body,
      price: Number(req.body.price),
      bhk: req.body.bhk ? Number(req.body.bhk) : undefined,
      area: req.body.area ? Number(req.body.area) : undefined,
      images: imageUrls
    });

    res.status(201).json(property);
  } catch (error) {
    console.error("CREATE PROPERTY ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};



// @desc Delete property (Admin)
export const deleteProperty = async (req, res) => {
  try {
    await Property.findByIdAndDelete(req.params.id);
    res.json({ message: "Property deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    res.json(property);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSimilarProperties = async (req, res) => {
  try {
    const current = await Property.findById(req.params.id);

    if (!current) {
      return res.status(404).json({ message: "Property not found" });
    }

    const properties = await Property.find({
      _id: { $ne: current._id }, // exclude current
      type: current.type,
      location: { $regex: current.location, $options: "i" }
    })
      .limit(4)
      .sort({ createdAt: -1 });

    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};