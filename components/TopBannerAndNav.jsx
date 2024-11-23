import React, { useState, useEffect } from "react";
import Nav from "../components/Nav"; // Assuming Nav is a separate component
import FarmerSignup from "../components/farmerSignup"; // Replace with the actual path
import CustomerSignup from "../components/CustomerSignup"; // Replace with the actual path
import MillSignup from "../components/MillSignup"; // Replace with the actual path

const ContactUs = () => {
  const [selectedSignupType, setSelectedSignupType] = useState(null);
  const [offerIndex, setOfferIndex] = useState(0);

  const offers = [
    "Special Offers! - Get 50% off on crops",
    "Sale 40% off on bulk shopping!",
  ];

  // Rotate offers every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setOfferIndex((prevIndex) => (prevIndex + 1) % offers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Function to close the signup form (after successful signup)
  const closeSignupForm = () => {
    setSelectedSignupType(null); // Reset selected signup type to hide the form
  };

  return (
    <div>
      {/* Top Banner with Rotating Offers */}
      <div
        style={{
          backgroundColor: "#1a202c",
          position: "absolute",
          top: 0,
          left: 50,
          right: 50,
          zIndex: 3,
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#fff",
            padding: "0.5rem 0",
            fontFamily: "Rubik, sans-serif",
          }}
        >
          {offers[offerIndex]
            .split(/(50%|40%)/)
            .map((text, idx) =>
              ["50%", "40%"].includes(text) ? (
                <span
                  key={idx}
                  style={{ color: "#48bb78", fontWeight: "bold" }}
                >
                  {text}
                </span>
              ) : (
                <span key={idx}>{text}</span>
              )
            )}
        </p>
        <Nav onSignupSelect={setSelectedSignupType} />

        {/* Signup Forms */}
        {selectedSignupType === "farmer" && <FarmerSignup closeForm={closeSignupForm} />}
        {selectedSignupType === "consumer" && <CustomerSignup closeForm={closeSignupForm} />}
        {selectedSignupType === "mill" && <MillSignup closeForm={closeSignupForm} />}
      </div>
      
    </div>
  );
};

export default ContactUs;
