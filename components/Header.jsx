import React, { useState } from "react";
import AboutPanel from "../components/AboutPanel";
import FeedbackPanel from "../components/FarmerFeedbackPanel";

const Header = () => {
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);

  // Sample farmer info
  const farmerInfo = {
    name: "John Doe",
    location: "Springfield",
    crops: "Tomatoes, Potatoes, Carrots",
    experience: 10,
  };

  // Sample feedback data
  const feedbackData = [
    {
      customerName: "John Doe",
      rating: 5,
      comment: "Excellent product, very fresh and high quality!"
    },
    {
      customerName: "Jane Smith",
      rating: 4,
      comment: "Good quality, but the delivery was a bit delayed."
    }
  ];

  const handleProfileClick = () => {
    setIsProfileVisible(true);
  };

  const handleFeedbackClick = () => {
    setIsFeedbackVisible(true);  // Show feedback panel
  };

  const handleClose = () => {
    setIsProfileVisible(false);
    setIsFeedbackVisible(false);  // Close feedback panel
  };

  return (
    <div>
      {/* Header Section */}
      <header
        style={{
          backgroundColor: "#48bb78",
          padding: "1rem 2rem",
          position: "absolute",
          top: "3rem",
          left: 50,
          right: 50,
          zIndex: 20,
          display: "flex",
          alignItems: "center",
          fontFamily: "Rubik, sans-serif",
        }}
      >
        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#fff",
            marginRight: "auto",
          }}
        >
          FarmConnect
        </h1>
        <ul
          style={{
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center",
            margin: 0,
            listStyleType: "none",
            flexGrow: 1,
          }}
        >
          {[ 
            { name: "Home", path: "/farmerdashboard" },
            { name: "About Us", path: "/AboutUsFarmer" },
            { name: "Contact Us", path: "/ContactUsFarmer" },
          ].map((link, idx) => (
            <li key={idx}>
              <a
                href={link.path}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: "500",
                  transition: "color 0.2s",
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
          {/* Profile Button */}
          <li>
            <button
              onClick={handleProfileClick}
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: "1rem",
                fontWeight: "500",
                cursor: "pointer",
              }}
            >
              Profile
            </button>
          </li>
          {/* Feedback Button */}
          <li>
            <button
              onClick={handleFeedbackClick}
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: "1rem",
                fontWeight: "500",
                cursor: "pointer",
              }}
            >
              Feedback
            </button>
          </li>
        </ul>
      </header>

      {/* AboutPanel */}
      {isProfileVisible && (
        <AboutPanel
          isVisible={isProfileVisible}
          onClose={handleClose}
          farmerInfo={farmerInfo}
        />
      )}

      {/* FeedbackPanel */}
      {isFeedbackVisible && (
        <FeedbackPanel
          isVisible={isFeedbackVisible}
          onClose={handleClose}
          feedbackData={feedbackData}  // Pass feedback data
        />
      )}
    </div>
  );
};

export default Header;
