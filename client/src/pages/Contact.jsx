import { Footer } from "../components/Footer";

export function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      {/* MAIN CONTENT */}
      <section className="flex-grow py-20 px-6">
        
        {/* Section Heading */}
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Contact Us
          </h1>
          <p className="text-gray-600 mt-3">
            We'd love to hear from you. Reach out for any property-related queries.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          
          {/* LEFT: CONTACT INFO */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Get in Touch
            </h2>

            <p className="text-gray-600 mb-6">
              Have questions or want to list your property? Our team is here to help you with the best solutions.
            </p>

            <div className="space-y-5 text-sm text-gray-700">
              <div>
                <p className="font-medium text-gray-900">Address</p>
                <p>
                  123 Business Street <br />
                  Roorkee, Uttarakhand, India
                </p>
              </div>

              <div>
                <p className="font-medium text-gray-900">Phone</p>
                <p>+91 98765 43210</p>
              </div>

              <div>
                <p className="font-medium text-gray-900">Email</p>
                <p>support@propertyhub.com</p>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <form className="grid gap-4">
              
              <input
                type="text"
                placeholder="Your Name"
                className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="border rounded-lg px-4 py-3"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="border rounded-lg px-4 py-3"
              />

              <textarea
                placeholder="Your Message"
                rows="4"
                className="border rounded-lg px-4 py-3 resize-none"
              />

              <button className="bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-700 transition font-medium">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* FOOTER (SEPARATE, NOT INSIDE SECTION) */}
      <Footer />
    </div>
  );
}