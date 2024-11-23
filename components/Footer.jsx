export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Shopping Guide Column */}
          <div>
            <h3 className="text-green-500 font-semibold mb-4">SHOPPING GUIDE</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">Payment</a></li>
              <li><a href="#" className="hover:text-white">Shipment</a></li>
              <li><a href="#" className="hover:text-white">Where is my order?</a></li>
              <li><a href="#" className="hover:text-white">Return Policy</a></li>
            </ul>
          </div>

          {/* Style Advisor Column */}
          <div>
            <h3 className="text-green-500 font-semibold mb-4">STYLE ADVISOR</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Your Account</a></li>
              <li><a href="#" className="hover:text-white">Information</a></li>
              <li><a href="#" className="hover:text-white">Addresses</a></li>
              <li><a href="#" className="hover:text-white">Discount</a></li>
              <li><a href="#" className="hover:text-white">Orders History</a></li>
              <li><a href="#" className="hover:text-white">Order Tracking</a></li>
            </ul>
          </div>

          {/* Information Column */}
          <div>
            <h3 className="text-green-500 font-semibold mb-4">INFORMATION</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Site Map</a></li>
              <li><a href="#" className="hover:text-white">Search Terms</a></li>
              <li><a href="#" className="hover:text-white">Advanced Search</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Suppliers</a></li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div>
            <h3 className="text-green-500 font-semibold mb-4">CONTACT US</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>FarmConnect, 789 Main rd, Anytown, CA 12345 Pakistan</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <span>+92 3055967153</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✉️</span>
                <span>FarmConnect@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media and Payment Icons */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                <img src="https://img.icons8.com/material-outlined/24/ffffff/facebook-new.png" alt="Facebook" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-sky-500 text-white rounded hover:bg-sky-600"
              >
                <img src="https://img.icons8.com/ios-glyphs/24/ffffff/twitter.png" alt="Twitter" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-orange-500 text-white rounded hover:bg-orange-600"
              >
                <img src="https://img.icons8.com/material-outlined/24/ffffff/rss.png" alt="RSS" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-red-500 text-white rounded hover:bg-red-600"
              >
                <img src="https://img.icons8.com/material-outlined/24/ffffff/pinterest.png" alt="Pinterest" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-red-700 text-white rounded hover:bg-red-800"
              >
                <img src="https://img.icons8.com/material-outlined/24/ffffff/youtube-play.png" alt="YouTube" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                <img src="https://img.icons8.com/ios-filled/24/ffffff/linkedin.png" alt="LinkedIn" />
              </a>
            </div>

            {/* Payment Icons */}
            <div className="flex space-x-4">
              <img src="https://img.icons8.com/ios-filled/48/ffffff/paypal.png" alt="PayPal" className="w-10" />
              <img src="https://img.icons8.com/ios-filled/48/ffffff/amex.png" alt="American Express" className="w-10" />
              <img src="https://img.icons8.com/ios-filled/48/ffffff/visa.png" alt="Visa" className="w-10" />
              <img src="https://img.icons8.com/ios-filled/48/ffffff/mastercard.png" alt="Mastercard" className="w-10" />
            </div>
          </div>
          <div className="text-center mt-8">
            <p>© 2024 FarmTheme. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
