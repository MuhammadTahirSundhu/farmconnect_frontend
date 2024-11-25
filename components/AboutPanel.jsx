import { motion } from "framer-motion";

const AboutPanel = ({ isVisible, onClose, farmerInfo }) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isVisible ? 0 : "100%" }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="fixed top-0 right-0 w-1/3 h-full bg-white shadow-lg p-8 z-50"
    >
      <div className="flex justify-between items-center border-b pb-4">
        <h2 className="text-lg font-bold text-green-700">Farmer Information</h2>
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✖
        </button>
      </div>
      <div className="mt-4 space-y-4 text-black">
        <p>
          <span className="font-semibold">Name:</span> {farmerInfo.name}
        </p>
        <p>
          <span className="font-semibold">Location:</span> {farmerInfo.location}
        </p>
        <p>
          <span className="font-semibold">Crops:</span> {farmerInfo.crops}
        </p>
        <p>
          <span className="font-semibold">Years of Experience:</span>{" "}
          {farmerInfo.experience} years
        </p>
      </div>
    </motion.div>
  );
};

export default AboutPanel;
