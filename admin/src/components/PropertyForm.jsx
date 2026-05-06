import { useState } from "react";
import API from "../services/api";

export default function PropertyForm({ onSuccess }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    type: "house",
    bhk: "",
    area: "",
    images: []
  });

  const handleChange = (e) => {
    if (e.target.name === "images") {
      setForm({ ...form, images: e.target.files });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      data.append("title", form.title);
      data.append("description", form.description);
      data.append("location", form.location);
      data.append("type", form.type);
      data.append("price", form.price.replace(/,/g, ""));

      if (form.bhk) data.append("bhk", form.bhk);
      if (form.area) data.append("area", form.area);

      for (let i = 0; i < form.images.length; i++) {
        data.append("images", form.images[i]);
      }

      await API.post("/properties", data);

      alert("Property added");

      setForm({
        title: "",
        description: "",
        price: "",
        location: "",
        type: "house",
        bhk: "",
        area: "",
        images: []
      });

      onSuccess();
    } catch (err) {
      console.error(err);
      alert("Error adding property");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6 mb-8">
      
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Add New Property
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* BASIC INFO */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Basic Information
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="title"
              placeholder="Property Title"
              value={form.title}
              onChange={handleChange}
              className="border rounded-lg px-3 py-2"
              required
            />

            <input
              name="location"
              placeholder="Location"
              value={form.location}
              onChange={handleChange}
              className="border rounded-lg px-3 py-2"
              required
            />

            <input
              name="price"
              placeholder="Price"
              value={form.price}
              onChange={handleChange}
              className="border rounded-lg px-3 py-2"
              required
            />

            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="border rounded-lg px-3 py-2"
            >
              <option value="house">House</option>
              <option value="flat">Flat</option>
              <option value="plot">Plot</option>
              <option value="shop">Shop</option>
            </select>

            <input
              name="bhk"
              placeholder="BHK (optional)"
              value={form.bhk}
              onChange={handleChange}
              className="border rounded-lg px-3 py-2"
            />

            <input
              name="area"
              placeholder="Area (sq ft)"
              value={form.area}
              onChange={handleChange}
              className="border rounded-lg px-3 py-2"
            />
          </div>
        </div>

        {/* IMAGES */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            Upload Images
          </h3>

          <input
            type="file"
            name="images"
            multiple
            accept="image/*"
            onChange={handleChange}
            className="block w-full text-sm"
          />
        </div>

        {/* DESCRIPTION */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            Description
          </h3>

          <textarea
            name="description"
            placeholder="Write property details..."
            value={form.description}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 w-full h-28 resize-none"
            required
          />
        </div>

        {/* SUBMIT */}
        <div className="flex justify-end">
          <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition font-medium">
            Add Property
          </button>
        </div>

      </form>
    </div>
  );
}