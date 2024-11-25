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

  // Fallback if currentConsumer is not defined
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
      setRating(0);
      setComment("");
    } catch (error) {
      setStatus("Failed to submit feedback. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-300 py-6 flex flex-col justify-center sm:py-12">
      <div className="py-3 sm:max-w-xl sm:mx-auto">
        <div className="bg-white min-w-1xl flex flex-col rounded-xl shadow-lg">
          <div className="px-12 py-5">
            <h2 className="text-gray-800 text-3xl font-semibold">Your opinion matters to us!</h2>
          </div>
          <div className="bg-gray-200 w-full flex flex-col items-center">
            <div className="flex flex-col items-center py-6 space-y-3">
              <span className="text-lg text-gray-800">How was the quality of the call?</span>
              <div className="flex space-x-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    onClick={() => handleRatingClick(star)}
                    className={`w-12 h-12 cursor-pointer ${
                      star <= rating ? "text-yellow-500" : "text-gray-500"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="w-3/4 flex flex-col">
              <textarea
                rows="3"
                className="p-4 text-gray-500 rounded-xl resize-none"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Leave a comment"
              />
              <button
                onClick={handleSubmit}
                className={`py-3 my-8 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit Feedback"}
              </button>
            </div>
          </div>
          {status && (
            <div
              className={`text-center mt-4 ${
                status.includes("Failed") ? "text-red-500" : "text-green-500"
              }`}
            >
              {status}
            </div>
          )}
          <div className="h-20 flex items-center justify-center">
            <a href="#" className="text-gray-600">
              Maybe later
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

GetFeedback.propTypes = {
  productOwnerId: PropTypes.number.isRequired,
};

export default GetFeedback;
