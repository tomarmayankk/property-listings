import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { ContactSection } from "../components/ContactSection";

// Contact Section Component


// Footer Component


export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="h-[80vh] flex items-center justify-center text-center bg-[url('https://images.unsplash.com/photo-1560185127-6ed189bf02f4')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-white px-6">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
            Discover Your Perfect Property
          </h1>

          <Link
            to="/buy"
            className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
          >
            Browse Collection
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-12">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-2xl hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">Buy Property</h3>
              <p className="text-gray-500 text-sm">
                Explore verified listings and find your dream home easily.
              </p>
            </div>

            <div className="p-6 border rounded-2xl hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">Sell Property</h3>
              <p className="text-gray-500 text-sm">
                List your property and connect with genuine buyers.
              </p>
            </div>

            <div className="p-6 border rounded-2xl hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">Trusted Platform</h3>
              <p className="text-gray-500 text-sm">
                All listings are verified to ensure safe transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}