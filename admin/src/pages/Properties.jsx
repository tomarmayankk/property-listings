import { useEffect, useState } from "react";
import API from "../services/api";
import PropertyForm from "../components/PropertyForm";
import { AdminLayout } from "../components/AdminLayout";

export default function Properties() {
  const [properties, setProperties] = useState([]);

  const fetchProperties = async () => {
    const res = await API.get("/properties");
    setProperties(res.data);
  };

  const deleteProperty = async (id) => {
    await API.delete(`/properties/${id}`);
    fetchProperties();
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <AdminLayout>
      
      {/* FORM */}
      <PropertyForm onSuccess={fetchProperties} />

      {/* TABLE HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900">
          All Properties
        </h2>
        <p className="text-sm text-gray-500">
          {properties.length} total
        </p>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
        <table className="w-full text-sm">
          
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="text-left px-4 py-3">Title</th>
              <th className="text-left px-4 py-3">Location</th>
              <th className="text-left px-4 py-3">Price</th>
              <th className="text-left px-4 py-3">Type</th>
              <th className="text-right px-4 py-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {properties.map((p) => (
              <tr
                key={p._id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3 font-medium text-gray-900">
                  {p.title}
                </td>

                <td className="px-4 py-3 text-gray-600">
                  {p.location}
                </td>

                <td className="px-4 py-3 text-gray-700">
                  ₹ {p.price.toLocaleString()}
                </td>

                <td className="px-4 py-3">
                  <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                    {p.type}
                  </span>
                </td>

                <td className="px-4 py-3 text-right">
                  <button
                    onClick={() => deleteProperty(p._id)}
                    className="text-red-600 hover:text-red-800 text-sm font-medium"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {properties.length === 0 && (
        <p className="text-center text-gray-500 mt-6">
          No properties found.
        </p>
      )}

    </AdminLayout>
  );
}