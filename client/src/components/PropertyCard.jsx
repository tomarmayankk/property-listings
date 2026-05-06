import { Link } from "react-router-dom";

export default function PropertyCard({ property }) {
  return (
    <Link to={`/property/${property._id}`}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer">
        
        {/* Image */}
        <div className="relative">
          <img
            src={property.images?.[0] || "https://via.placeholder.com/400"}
            alt="property"
            className="w-full h-48 object-cover"
          />

          {/* Price Badge */}
          <div className="absolute bottom-3 left-3 bg-white px-3 py-1 rounded-lg text-sm font-semibold shadow">
            ₹ {property.price.toLocaleString()}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-2">
          
          {/* Title */}
          <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">
            {property.title}
          </h2>

          {/* Location */}
          <p className="text-sm text-gray-500">
            📍 {property.location}
          </p>

          {/* Type */}
          <div className="flex justify-between items-center">
            <span className="text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-600">
              {property.type}
            </span>

            <span className="text-xs text-gray-400">
              View Details →
            </span>
          </div>

        </div>
      </div>
    </Link>
  );
}