import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { insertFeedback } from "@/Services/feedbackServiceApi";

function GetFeedback({ productOwnerId }) {
  const currentConsumer = useSelector((state) => state.currentRecords.currentConsumer);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(true); // Modal visibility state

  const consumerID = currentConsumer?.consumerID || null;

  if (!consumerID) {
    return <div>Error: Unable to fetch consumer information.</div>;
  }

  const farmerID = productOwnerId;

  const handleRatingClick = (rate) => {
    setRating(rate);
  };

  const handleSubmit = async () => {
    if (rating === 0 || comment.trim() === "") {
      setStatus("Please select a rating and provide a comment before submitting.");
      return;
    }

    const feedback = {
      rating,
      comment,
      date: new Date().toISOString().split("T")[0],
      farmerID,
      consumerID,
    };

    setIsLoading(true);
    try {
      await insertFeedback(feedback);
      setStatus("Thank you for your feedback!");
      setTimeout(() => {
        setShowModal(false); // Close modal after success
      }, 1500); // Close modal after a short delay
    } catch (error) {
      setStatus("Failed to submit feedback. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setShowModal(false); // Close modal on "Maybe later"
  };

  if (!showModal) return null; // Do not render the modal if it's closed

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-1/5 min-w-[300px] flex flex-col rounded-3xl shadow-2xl p-4">
        <div className="text-center mb-4">
          <h2 className="text-white text-xl font-semibold">Your Opinion Matters!</h2>
          <p className="text-white text-sm">We'd love to hear your thoughts.</p>
        </div>

        <div className="flex flex-col items-center space-y-4 bg-white p-4 rounded-2xl shadow-lg">
          <span className="text-md text-gray-800">How would you rate the quality of the call?</span>
          <div className="flex space-x-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                onClick={() => handleRatingClick(star)}
                className={`w-8 h-8 cursor-pointer ${
                  star <= rating ? "text-yellow-400" : "text-gray-300"
                } hover:text-yellow-500 transition duration-200`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-col space-y-2 bg-white p-4 rounded-2xl shadow-lg">
          <textarea
            rows="3"
            className="p-2 text-gray-700 rounded-2xl resize-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Leave a comment"
          />
          <button
            onClick={handleSubmit}
            className={`py-2 text-sm font-medium rounded-xl text-white transition duration-300 ease-in-out transform ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-105"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit Feedback"}
          </button>
        </div>

        {status && (
          <div
            className={`text-center mt-4 text-sm ${
              status.includes("Failed") ? "text-red-500" : "text-green-500"
            }`}
          >
            {status}
          </div>
        )}

        <div className="mt-4 text-center">
          <button
            onClick={closeModal} // Close modal when "Maybe later" is clicked
            className="text-gray-500 hover:text-indigo-600 text-sm underline"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}

GetFeedback.propTypes = {
  productOwnerId: PropTypes.number.isRequired,
};

export default GetFeedback;
