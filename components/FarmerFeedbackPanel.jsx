import React from "react";
import { motion } from "framer-motion";

const FeedbackPanel = ({ isVisible, onClose, feedbackData }) => {



  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isVisible ? 0 : "100%" }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="fixed top-0 right-0 w-1/3 h-full bg-white shadow-lg p-8 z-50"
    >
      <div className="flex justify-between items-center border-b pb-4">
        <h2 className="text-lg font-bold text-green-700">Farmer Feedback</h2>
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✖
        </button>
      </div>

      {/* Feedback list */}
      <div className="mt-4 space-y-4 text-black">
        {feedbackData.length === 0 ? (
          <p>No feedback available.</p>
        ) : (
          feedbackData.map((feedback, index) => (
            <div key={index} className="border-b pb-4 mb-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Rating:</span>
                <span className="text-yellow-500">{'★'.repeat(feedback.rating)}{'☆'.repeat(5 - feedback.rating)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Comment:</span>
                <p>{feedback.comment || "No comment provided"}</p>
              </div>
              <div className="text-sm text-gray-500">
                <span className="font-semibold">Date:</span> {feedback.date}
              </div>
            </div>
          ))
        )}
      </div>
    </motion.div>
  );
};

export default FeedbackPanel;
