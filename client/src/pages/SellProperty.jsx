import { useState } from "react";
import API from "../services/api";

export default function SellProperty() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "house",
    location: "",
    budget: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.post("/leads", {
      ...form,
      budget: Number(form.budget)
    });

    alert("Details submitted!");
    setForm({
      name: "",
      phone: "",
      email: "",
      propertyType: "house",
      location: "",
      budget: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-sm p-8">
        
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-gray-900">
            Sell Your Property
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Fill in your details and we’ll connect you with buyers
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          
          <input
            placeholder="Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="col-span-2 md:col-span-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
          />

          <input
            placeholder="Phone"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="col-span-2 md:col-span-1 border rounded-lg px-3 py-2"
          />

          <input
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="col-span-2 md:col-span-1 border rounded-lg px-3 py-2"
          />

          <select
            value={form.propertyType}
            onChange={(e) => setForm({ ...form, propertyType: e.target.value })}
            className="col-span-2 md:col-span-1 border rounded-lg px-3 py-2"
          >
            <option value="house">House</option>
            <option value="flat">Flat</option>
            <option value="plot">Plot</option>
            <option value="shop">Shop</option>
          </select>

          <input
            placeholder="Location"
            required
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            className="col-span-2 border rounded-lg px-3 py-2"
          />

          <input
            placeholder="Budget"
            value={form.budget}
            onChange={(e) => setForm({ ...form, budget: e.target.value })}
            className="col-span-2 border rounded-lg px-3 py-2"
          />

          <textarea
            placeholder="Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="col-span-2 border rounded-lg px-3 py-2 h-24 resize-none"
          />

          <button
            className="col-span-2 bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-700 transition font-medium"
          >
            Submit Details
          </button>
        </form>
      </div>
    </div>
  );
}