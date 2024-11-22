import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="relative h-48 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/river_rocks.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">CONTACT US</h1>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[400px] bg-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.695244029506!2d73.01485077651154!3d33.65184137436173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df951074350481%3A0x732cf6277b32b244!2sFAST%20NUCES%20Islamabad%20Campus!5e0!3m2!1sen!2s!4v1699999999999"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
        />
      </div>

      {/* Contact Form and Details */}
      <div
        className="bg-gray-50 py-12"
        style={{
          background: 'linear-gradient(135deg, rgba(211, 211, 211, 0.5) 25%, rgba(255, 255, 255, 0.5) 75%)',
        }}
      >
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div
            className="col-span-2 bg-white p-8 shadow rounded-lg"
            style={{
              background: 'linear-gradient(135deg, rgba(211, 211, 211, 0.5) 25%, rgba(255, 255, 255, 0.5) 75%)',
            }}
          >
            <h2 className="text-lg font-semibold text-green-600 mb-6">Get in Touch</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name (required)"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500 text-black"
                />
                <input
                  type="email"
                  placeholder="Your Email (required)"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500 text-black"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500 text-black"
              />
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500 text-black"
              />
              <button
                type="submit"
                className="bg-green-700 text-white px-8 py-3 rounded hover:bg-green-800 transition-colors"
              >
                SUBMIT
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-white p-8 shadow rounded-lg">
            <h2 className="text-lg font-semibold text-green-600 mb-6">Our Location</h2>
            <p className="text-gray-700 mb-4">
              <strong>Address:</strong> FAST NUCES, Islamabad, Pakistan
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Email:</strong>{" "}
              <a href="mailto:info@example.com" className="text-green-600">
                info@example.com
              </a>
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Phone:</strong>{" "}
              <a href="tel:+1234567890" className="text-green-600">
                +92 (51) 123-4567
              </a>
            </p>
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-600">
                Follow us on social media:
              </h3>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-green-600 hover:text-green-800">
                  Facebook
                </a>
                <a href="#" className="text-green-600 hover:text-green-800">
                  Twitter
                </a>
                <a href="#" className="text-green-600 hover:text-green-800">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
