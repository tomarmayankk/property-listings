import { AdminSidebar } from "./AdminSidebar";
import { useAuthStore } from "../store/authStore";

export function AdminLayout({ children }) {
  const { logout } = useAuthStore();

  return (
    <div className="min-h-screen flex bg-gray-100">
      
      {/* SIDEBAR */}
      <AdminSidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1">
        
        {/* TOP BAR */}
        <div className="flex justify-between items-center px-6 py-4 bg-white border-b">
          <h1 className="text-lg font-semibold text-gray-900">
            Admin Panel
          </h1>

          <button
            onClick={logout}
            className="text-sm bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            Logout
          </button>
        </div>

        {/* PAGE CONTENT */}
        <div className="p-6">{children}</div>

      </div>
    </div>
  );
}