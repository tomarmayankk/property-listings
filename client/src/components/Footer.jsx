export function Footer() {
  return (
    <footer className="bg-blue-950 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        
        {/* About */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">
            PropertyHub
          </h2>
          <p className="text-sm leading-relaxed">
            PropertyHub is a trusted platform to buy and sell properties with ease.
            We ensure verified listings and seamless connections between buyers and sellers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">
            Quick Links
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Buy Property</li>
            <li className="hover:text-white cursor-pointer">Sell Property</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">
            Contact
          </h2>
          <ul className="text-sm space-y-2">
            <li>Email: support@propertyhub.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>
              Address: 123, Business Street, <br />
              Roorkee, Uttarakhand, India
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800 text-center text-sm py-4 text-gray-400">
        © {new Date().getFullYear()} PropertyHub. All rights reserved.
      </div>
    </footer>
  );
}