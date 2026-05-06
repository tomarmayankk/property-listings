import { useEffect, useState } from "react";
import API from "../services/api";
import PropertyCard from "../components/PropertyCard";
import { Footer } from "../components/Footer";

export default function BuyProperty() {
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    minPrice: "",
    maxPrice: "",
  });

  const fetchProperties = async () => {
    const query = new URLSearchParams(filters).toString();
    const res = await API.get(`/properties?${query}`);
    setProperties(res.data);
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      {/* MAIN CONTENT */}
      <div className="flex-grow max-w-7xl mx-auto w-full px-6 py-8">
        
        {/* Page Title */}
        <h1 className="text-3xl font-semibold text-gray-900 mb-6">
          Buy Properties
        </h1>

        <div className="grid grid-cols-12 gap-8">
          
          {/* LEFT: FILTER SIDEBAR */}
          <div className="col-span-12 md:col-span-3">
            <div className="sticky top-24 border rounded-2xl p-5 shadow-sm bg-white">
              <h2 className="text-lg font-semibold mb-4">Filters</h2>

              <div className="space-y-4">
                <input
                  placeholder="Location"
                  className="w-full border rounded-lg px-3 py-2"
                  onChange={(e) =>
                    setFilters({ ...filters, location: e.target.value })
                  }
                />

                <select
                  className="w-full border rounded-lg px-3 py-2"
                  onChange={(e) =>
                    setFilters({ ...filters, type: e.target.value })
                  }
                >
                  <option value="">All Types</option>
                  <option value="house">House</option>
                  <option value="flat">Flat</option>
                  <option value="plot">Plot</option>
                  <option value="shop">Shop</option>
                </select>

                <input
                  placeholder="Min Price"
                  className="w-full border rounded-lg px-3 py-2"
                  onChange={(e) =>
                    setFilters({ ...filters, minPrice: e.target.value })
                  }
                />

                <input
                  placeholder="Max Price"
                  className="w-full border rounded-lg px-3 py-2"
                  onChange={(e) =>
                    setFilters({ ...filters, maxPrice: e.target.value })
                  }
                />

                <button
                  onClick={fetchProperties}
                  className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-700 transition"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: RESULTS */}
          <div className="col-span-12 md:col-span-9">
            
            {/* Top Bar */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-gray-500">
                {properties.length} properties found
              </p>

              <select className="border rounded-lg px-3 py-2 text-sm">
                <option>Sort by</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            {/* Property Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {properties.map((p) => (
                <PropertyCard key={p._id} property={p} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER (NOW PROPERLY PLACED) */}
      <Footer />
    </div>
  );
}