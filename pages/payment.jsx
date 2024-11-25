import React, { useState } from "react";
import dynamic from "next/dynamic";
import { FaCreditCard, FaCalendarAlt, FaKey } from "react-icons/fa";

// Dynamically load Flowbite's DatePicker script without SSR
const FlowbiteDatePicker = dynamic(
  () => import("flowbite").then((mod) => mod.datepicker),
  { ssr: false }
);

function Payment() {
  const [formData, setFormData] = useState({
    fullName: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-500 via-green-600 to-green-800 py-12 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto shadow-lg rounded-lg bg-white dark:bg-gray-900 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Section */}
          <div className="p-6 lg:p-8 bg-gray-50 dark:bg-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Secure Payment
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Complete your payment securely. Your information is encrypted and
              safe.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="full_name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Full Name*
                </label>
                <div className="relative">
                  <FaCreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    id="full_name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="pl-10 w-full rounded-md border border-gray-300 p-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    placeholder="Your Name"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="cardNumber"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Card Number*
                </label>
                <div className="relative">
                  <FaCreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    className="pl-10 w-full rounded-md border border-gray-300 p-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    placeholder="1234-5678-1234-5678"
                    pattern="^[0-9]{16}$"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="expirationDate"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Expiration Date*
                  </label>
                  <div className="relative">
                    <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      id="expirationDate"
                      name="expirationDate"
                      value={formData.expirationDate}
                      onChange={handleChange}
                      className="pl-10 w-full rounded-md border border-gray-300 p-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="cvv"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    CVV*
                  </label>
                  <div className="relative">
                    <FaKey className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      className="pl-10 w-full rounded-md border border-gray-300 p-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                      placeholder="•••"
                      pattern="^[0-9]{3,4}$"
                      required
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md text-sm font-medium transition dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                Pay Now
              </button>
            </form>
          </div>

          {/* Right Section */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-8">
            <h3 className="text-lg font-bold mb-4">Order Summary</h3>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span>Original Price</span>
                <span>$6,592.00</span>
              </li>
              <li className="flex justify-between">
                <span>Tax</span>
                <span>$599.00</span>
              </li>
              <li className="border-t border-indigo-300 pt-4 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>$7,191.00</span>
              </li>
            </ul>
            <p className="mt-6 text-sm">
              By completing this payment, you agree to our{" "}
              <a href="#" className="underline">
                Terms and Conditions
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
