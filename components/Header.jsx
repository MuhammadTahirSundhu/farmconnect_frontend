import React, { useState } from "react";
import AboutPanel from "../components/AboutPanel";

const Header = () => {
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  // Sample farmer info
  const farmerInfo = {
    name: "John Doe",
    location: "Springfield",
    crops: "Tomatoes, Potatoes, Carrots",
    experience: 10,
  };

  const handleProfileClick = () => {
    setIsProfileVisible(true);
  };

  const handleClose = () => {
    setIsProfileVisible(false);
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
            { name: "About Us", path: "/AboutUs" },
            { name: "Contact Us", path: "/contactus" },
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
    </div>
  );
};

export default Header;
