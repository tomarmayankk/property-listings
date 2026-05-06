import { useEffect, useState } from "react";
import API from "../services/api";
import { AdminLayout } from "../components/AdminLayout";

export default function Leads() {
  const [leads, setLeads] = useState([]);

  const fetchLeads = async () => {
    const res = await API.get("/leads");
    setLeads(res.data);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <AdminLayout>
      
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          Leads
        </h1>
        <p className="text-sm text-gray-500">
          {leads.length} total inquiries
        </p>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
        <table className="w-full text-sm">
          
          {/* HEAD */}
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="text-left px-4 py-3">Name</th>
              <th className="text-left px-4 py-3">Phone</th>
              <th className="text-left px-4 py-3">Location</th>
              <th className="text-left px-4 py-3">Message</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {leads.map((lead) => (
              <tr
                key={lead._id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3 font-medium text-gray-900">
                  {lead.name}
                </td>

                <td className="px-4 py-3 text-gray-600">
                  {lead.phone}
                </td>

                <td className="px-4 py-3 text-gray-600">
                  {lead.location}
                </td>

                <td className="px-4 py-3 text-gray-500 max-w-xs truncate">
                  {lead.message || "-"}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {/* EMPTY STATE */}
      {leads.length === 0 && (
        <p className="text-center text-gray-500 mt-6">
          No leads yet.
        </p>
      )}

    </AdminLayout>
  );
}