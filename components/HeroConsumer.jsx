import React, { useState, useEffect } from "react";
import NavConsumer from "./NavConsumer"; // Import the NavConsumer component

const HeroConsumer = ({ userType, onLogout }) => {
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
  return (
    <div>
      {/* Add NavConsumer component */}
      <NavConsumer userType={userType} onLogout={onLogout} />

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
              Photography <br /> and films
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

      
    </div>
  );
};

export default HeroConsumer;