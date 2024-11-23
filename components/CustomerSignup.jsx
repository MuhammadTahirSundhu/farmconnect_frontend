import { useState } from "react";

const CustomerSignup = ({ closeForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      if (!email.includes("@")) {
        throw new Error("Invalid email address.");
      }

      // Simulate successful signup
      setSuccessMessage("Customer signed up successfully!");

      setTimeout(() => {
        closeForm();
      }, 2000); // Close form after 2 seconds
    } catch (error) {
      setErrorMessage(error.message || "An unexpected error occurred.");
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      {/* Full-Screen Blurred Background */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-gray-800/40 backdrop-blur-lg"
        style={{ zIndex: 40 }}
      ></div>

      {/* Glassmorphic Form Container */}
      <div
        className="relative flex flex-col items-center w-[400px] p-6 bg-transparent backdrop-blur-lg rounded-xl shadow-lg border border-gray-300/50"
        style={{ zIndex: 50 }}
      >
        <h2 className="text-center text-2xl font-semibold text-white mb-6">
          Customer Signup
        </h2>
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          {/* Name Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 bg-gray-50/70 border-b-2 border-gray-400 outline-none text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 rounded"
              required
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-gray-50/70 border-b-2 border-gray-400 outline-none text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 rounded"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-gray-50/70 border-b-2 border-gray-400 outline-none text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 rounded"
              required
            />
          </div>

          {/* Location Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-3 bg-gray-50/70 border-b-2 border-gray-400 outline-none text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 rounded"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>

        {/* Error and Success Messages */}
        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        {successMessage && (
          <p className="text-green-500 mt-4">{successMessage}</p>
        )}

        {/* Close Button */}
        <button
          onClick={closeForm}
          className="absolute top-2 right-2 bg-red-500 text-white w-8 h-8 flex items-center justify-center rounded hover:bg-red-600 focus:outline-none"
        >
          
        </button>
      </div>
    </div>
  );
};

export default CustomerSignup;
