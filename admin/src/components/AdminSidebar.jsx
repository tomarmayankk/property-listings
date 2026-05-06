import { Link, useLocation } from "react-router-dom";

export function AdminSidebar() {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `block px-3 py-2 rounded-lg transition ${
      pathname === path
        ? "bg-gray-800 text-white"
        : "text-gray-300 hover:bg-gray-800 hover:text-white"
    }`;

  return (
    <aside className="w-64 bg-gray-900 text-white p-6 hidden md:block min-h-screen">
      
      {/* LOGO */}
      <h2 className="text-xl font-semibold mb-8">PropertyHub</h2>

      {/* NAV */}
      <nav className="space-y-2 text-sm">
        <Link to="/dashboard" className={linkClass("/dashboard")}>
          Dashboard
        </Link>

        <Link to="/properties" className={linkClass("/properties")}>
          Manage Properties
        </Link>

        <Link to="/leads" className={linkClass("/leads")}>
          View Leads
        </Link>
      </nav>
    </aside>
  );
}