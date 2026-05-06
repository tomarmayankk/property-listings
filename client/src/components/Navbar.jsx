import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight text-gray-900">
          PropertyHub
        </Link>
        {/* Navigation */}
        <nav className="flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link
            to="/buy"
            className="hover:text-gray-900 transition-colors border border-gray-900 rounded-3xl px-3 py-2"
          >
            Buy Properties
          </Link>

          <Link
            to="/sell"
            className="hover:text-gray-900 transition-colors border border-gray-900 rounded-3xl px-3 py-2"
          >
            Sell Your Property
          </Link>

          <Link
            to="/contact"
            className="hover:bg-gray-700 transition-colors bg-gray-900 text-white rounded-3xl px-3 py-2"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}