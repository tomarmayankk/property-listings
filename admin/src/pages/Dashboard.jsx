import { Link } from "react-router-dom";
import { AdminLayout } from "../components/AdminLayout";

export default function Dashboard() {
  return (
    <AdminLayout>
      
      {/* PAGE HEADER */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">
          Dashboard
        </h1>
        <p className="text-sm text-gray-500">
          Overview of your platform
        </p>
      </div>

      {/* ACTION CARDS */}
      <div className="grid md:grid-cols-2 gap-6">
        
        <Link
          to="/properties"
          className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition border"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Manage Properties
          </h2>
          <p className="text-sm text-gray-500">
            Add, edit, and manage property listings.
          </p>
        </Link>

        <Link
          to="/leads"
          className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition border"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            View Leads
          </h2>
          <p className="text-sm text-gray-500">
            Check user inquiries and contact requests.
          </p>
        </Link>

      </div>

    </AdminLayout>
  );
}