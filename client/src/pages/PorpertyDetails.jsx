import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../services/api";
import { Footer } from "../components/Footer";

export default function PropertyDetails() {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get(`/properties/${id}`);
        setProperty(res.data);

        const simRes = await API.get(`/properties/similar/${id}`);
        setSimilar(simRes.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [id]);

  if (!property) return <p className="p-6">Loading...</p>;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      <div className="flex-grow max-w-7xl mx-auto px-6 py-8">
        
        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          
          {/* LEFT: IMAGE GALLERY */}
          <div className="grid grid-cols-2 gap-4">
            {property.images?.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="property"
                className="w-full h-64 object-cover rounded-xl"
                onError={(e) =>
                  (e.target.src = "https://via.placeholder.com/400")
                }
              />
            ))}
          </div>

          {/* RIGHT: DETAILS */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border h-fit">
            
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
              {property.title}
            </h1>

            <p className="text-2xl text-gray-900 font-bold mb-3">
              ₹ {property.price.toLocaleString()}
            </p>

            <p className="text-gray-500 mb-4">
              📍 {property.location}
            </p>

            <div className="flex gap-4 text-sm mb-6 flex-wrap">
              {property.bhk && (
                <span className="bg-gray-100 px-3 py-1 rounded-md">
                  🏠 {property.bhk} BHK
                </span>
              )}
              {property.area && (
                <span className="bg-gray-100 px-3 py-1 rounded-md">
                  📐 {property.area} sq ft
                </span>
              )}
              <span className="bg-gray-100 px-3 py-1 rounded-md">
                🏷 {property.type}
              </span>
            </div>

            {/* CTA */}
            <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-700 transition font-medium">
              Contact Seller
            </button>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border mb-10">
          <h2 className="text-xl font-semibold mb-3">Description</h2>
          <p className="text-gray-600 leading-relaxed">
            {property.description}
          </p>
        </div>

        {/* SIMILAR PROPERTIES */}
        {similar.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-6">
              Similar Properties
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {similar.map((item) => (
                <Link
                  to={`/property/${item._id}`}
                  key={item._id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
                >
                  <img
                    src={item.images?.[0] || "https://via.placeholder.com/400"}
                    alt="similar property"
                    className="w-full h-36 object-cover"
                  />

                  <div className="p-3">
                    <h3 className="text-sm font-medium truncate">
                      {item.title}
                    </h3>

                    <p className="text-sm font-semibold text-gray-900">
                      ₹ {item.price.toLocaleString()}
                    </p>

                    <p className="text-xs text-gray-500">
                      {item.location}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}