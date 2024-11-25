import React, { useState, useEffect } from "react";
import AboutPanel from "../components/AboutPanel";
import FeedbackPanel from "../components/FarmerFeedbackPanel";
import { useSelector } from "react-redux";
import { getFeedbackByFarmerId } from "@/Services/feedbackServiceApi";

const Header = () => {
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);
  const [feedbackData, setFeedbackData] = useState([]);
  const [loading, setLoading] = useState(false);
  const currentFarmer = useSelector((state) => state.currentRecords.currentFarmer);

  useEffect(() => {
    const fetchFeedback = async () => {
      if (currentFarmer && currentFarmer.farmerid) {
        try {
          setLoading(true);
          const data = await getFeedbackByFarmerId(currentFarmer.farmerid);
          setFeedbackData(data);
        } catch (error) {
          console.error("Error fetching feedback data", error);
        } finally {
          setLoading(false);
        }
      }
    };

    if (currentFarmer?.farmerid) {
      fetchFeedback();
    }

    return () => {
      setFeedbackData([]);
    };
  }, [currentFarmer]);

  const handleProfileClick = () => setIsProfileVisible(true);
  const handleFeedbackClick = () => setIsFeedbackVisible(true);
  const handleClose = () => {
    setIsProfileVisible(false);
    setIsFeedbackVisible(false);
  };

  return (
    <div>
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

      {isProfileVisible && (
        <AboutPanel
          isVisible={isProfileVisible}
          onClose={handleClose}
          farmerInfo={currentFarmer}
        />
      )}

      {isFeedbackVisible && (
        <FeedbackPanel
          isVisible={isFeedbackVisible}
          onClose={handleClose}
          feedbackData={feedbackData}
          loading={loading}
        />
      )}
    </div>
  );
};

export default Header;
