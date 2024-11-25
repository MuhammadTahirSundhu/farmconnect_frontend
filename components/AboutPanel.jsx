import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { FaRegUser, FaMapMarkerAlt, FaSeedling, FaEnvelope, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'; // Import icons

const AboutPanel = ({ isVisible, onClose }) => {
  const currentFarmer = useSelector((state) => state.currentRecords.currentFarmer); // Directly use the selector here
  console.log(currentFarmer); // Debugging currentFarmer state

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isVisible ? 0 : "100%" }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="fixed top-0 right-0 w-1/3 h-full bg-white shadow-xl rounded-lg p-8 z-50 overflow-y-auto"
    >
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h2 className="text-lg font-bold text-green-700 flex items-center">
          <FaRegUser className="mr-2 text-xl" /> My Profile
        </h2>
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <FaTimesCircle className="text-2xl" />
        </button>
      </div>
      
      <div className="mt-4 space-y-6 text-black">
        <div className="flex items-center">
          <FaRegUser className="mr-3 text-xl text-gray-600" />
          <p>
            <span className="font-semibold">Name:</span> {currentFarmer.name}
          </p>
        </div>
        <div className="flex items-center">
          <FaMapMarkerAlt className="mr-3 text-xl text-gray-600" />
          <p>
            <span className="font-semibold">Location:</span> {currentFarmer.farmlocation}
          </p>
        </div>
        <div className="flex items-center">
          <FaSeedling className="mr-3 text-xl text-gray-600" />
          <p>
            <span className="font-semibold">Crops:</span> {currentFarmer.croptypes.join(", ")}
          </p>
        </div>
        <div className="flex items-center">
          <FaEnvelope className="mr-3 text-xl text-gray-600" />
          <p>
            <span className="font-semibold">Email:</span> {currentFarmer.email}
          </p>
        </div>
        <div className="flex items-center">
          <FaCheckCircle className={`mr-3 text-xl ${currentFarmer.availabilitystatus ? 'text-green-600' : 'text-red-600'}`} />
          <p>
            <span className="font-semibold">Availability Status:</span> {currentFarmer.availabilitystatus ? "Available" : "Not Available"}
          </p>
        </div>
        <div className="flex items-center">
          <span className="mr-3 text-xl text-gray-600">🗓</span>
          <p>
            <span className="font-semibold">Registered Date:</span> {currentFarmer.registereddate}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPanel;
