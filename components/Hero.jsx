import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import FarmerSignup from "./farmerSignup";
import CustomerSignup from "./CustomerSignup";
import MillSignup from "./MillSignup";

const Hero = () => {
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
      {/* Hero Section with Video Background */}
      <div style={{ position: "relative", height: "100vh", overflow: "hidden", zIndex: 1 }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
        >
          <source src="videoplayback.mp4" type="video/mp4" />
        </video>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            padding: "3vw",
            color: "#fff",
            zIndex: 2,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h1
              style={{
                fontSize: "4vh",
                fontFamily: "'MonumentExtendedUltrabold', sans-serif",
              }}
            >
              Get Rid <br /> From interminories
            </h1>
            <h2
              style={{
                fontSize: "1vw",
                padding: "2vw 2.2vw",
                border: "2px solid #fff",
                borderRadius: "50%",
              }}
            >
              01
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderTop: "2px solid white",
              marginTop: "2rem",
              justifyContent: "space-between",
            }}
          >
            <h4 style={{ fontSize: "1.5vmax", fontWeight: 500 }}>Explore</h4>
          </div>
        </div>
      </div>

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
        <p style={{ color: "#fff", padding: "0.5rem 0", fontFamily: "Rubik, sans-serif" }}>
          {offers[offerIndex]
            .split(/(50%|40%)/)
            .map((text, idx) =>
              ["50%", "40%"].includes(text) ? (
                <span key={idx} style={{ color: "#48bb78", fontWeight: "bold" }}>
                  {text}
                </span>
              ) : (
                <span key={idx}>{text}</span>
              )
            )}
        </p>
      </div>

      {/* Navigation Bar */}
      <Nav onSignupSelect={setSelectedSignupType} />

      {/* Signup Forms */}
      {selectedSignupType === "farmer" && <FarmerSignup closeForm={closeSignupForm} />}
      {selectedSignupType === "consumer" && <CustomerSignup closeForm={closeSignupForm} />}
      {selectedSignupType === "mill" && <MillSignup closeForm={closeSignupForm} />}
    </div>
  );
};

export default Hero;
