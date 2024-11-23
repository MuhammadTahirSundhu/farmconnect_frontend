import { useState } from "react";
import { insertFarmer } from "@/services/farmerServiceApi"; // Assuming insertFarmer is the API call

const FarmerSignup = ({ closeForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [farmLocation, setFarmLocation] = useState("");
  const [cropTypes, setCropTypes] = useState([]); // Store crop types as strings
  const [newCrop, setNewCrop] = useState(""); // Temporary state for a new crop input
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    const farmerData = { 
      name, 
      email, 
      password, 
      farmlocation: farmLocation, 
      croptypes: cropTypes, // Pass cropTypes as an array of strings
    };

    try {
      if (!email.includes("@")) {
        throw new Error("Invalid email address.");
      }

      // API call
      const response = await insertFarmer(farmerData);

      // Success message
      setSuccessMessage("Farmer signed up successfully!");

      // Clear form
      setName("");
      setEmail("");
      setPassword("");
      setFarmLocation("");
      setCropTypes([]);
      setNewCrop("");

      // Close form after delay
      setTimeout(() => {
        closeForm();
      }, 2000);
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || error.message || "An unexpected error occurred."
      );
    }
  };

  const handleAddCrop = () => {
    if (newCrop.trim() !== "") {
      // Add the crop type as a string to the array
      setCropTypes((prev) => [...prev, newCrop.trim()]);
      setNewCrop(""); // Clear the new crop input after adding
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      {/* Full-Screen Blurred Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-500 to-yellow-600 opacity-50"></div>

      {/* Glassmorphic Form Container */}
      <div className="relative flex flex-col items-center w-[400px] p-6 bg-white/60 backdrop-blur-md rounded-xl shadow-xl border border-gray-200 overflow-hidden">
        <h2 className="text-center text-3xl font-semibold text-green-700 mb-6">
          Farmer Signup
        </h2>
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 bg-white text-gray-800 rounded-lg shadow-md border focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 bg-white text-gray-800 rounded-lg shadow-md border focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 bg-white text-gray-800 rounded-lg shadow-md border focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Farm Location"
              value={farmLocation}
              onChange={(e) => setFarmLocation(e.target.value)}
              className="w-full p-4 bg-white text-gray-800 rounded-lg shadow-md border focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
              required
            />
          </div>

          {/* Crop Types Section with Scrollable Area */}
          <div className="space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="New Crop Type"
                value={newCrop}
                onChange={(e) => setNewCrop(e.target.value)}
                className="w-full p-4 bg-white text-gray-800 rounded-lg shadow-md border focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
              />
              <button
                type="button"
                onClick={handleAddCrop}
                className="absolute right-4 top-4 p-2 bg-green-700 text-white rounded-full hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
              >
                +
              </button>
            </div>

            {/* Scrollable Crops List */}
            {cropTypes.length > 0 && (
              <div className="max-h-[30px] overflow-y-auto border-t-2 border-gray-300 pt-2">
                <ul className="space-y-2">
                  {cropTypes.map((item, index) => (
                    <li key={index} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full p-4 bg-green-700 text-white rounded-lg shadow-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
          >
            Sign Up
          </button>
        </form>

        {/* Error and Success Messages */}
        {errorMessage && <p className="text-red-600 mt-4 text-center">{errorMessage}</p>}
        {successMessage && <p className="text-green-600 mt-4 text-center">{successMessage}</p>}

        {/* Close Button */}
        <button
          onClick={closeForm}
          className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 rounded-full w-8 h-9 flex items-center justify-center focus:outline-none"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default FarmerSignup;
