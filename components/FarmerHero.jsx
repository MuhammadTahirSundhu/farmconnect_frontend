import React, { useState, useEffect } from "react";
import { useRouter } from "next/router"; // Import useRouter to get the current route
import Header from "./Header";
import Sidebar from "../components/Sidebar"; // Import Sidebar component

const Hero = () => {
  const [offerIndex, setOfferIndex] = useState(0);
  const [sidebarVisible, setSidebarVisible] = useState(false); // State to track sidebar visibility

  const router = useRouter(); // Get the router object to access the current route
  const currentPage = router.pathname; // Get the current route pathname

  const offers = [
    "Get 5% Cashback on order greater than 500k",
    "Get Free Shipping",
  ];

  // Rotate offers every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setOfferIndex((prevIndex) => (prevIndex + 1) % offers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible); // Toggle the sidebar visibility
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Sidebar toggle button (hamburger icon) */}
      <button
        onClick={toggleSidebar}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          zIndex: 100, // Ensure the button is above the video
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        <span style={{ fontSize: "30px", color: "#fff" }}>☰</span> {/* Hamburger Icon */}
      </button>

      {/* Sidebar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "250px", // Width of the sidebar
          height: "100vh", // Full viewport height
          zIndex: 101, // Sidebar on top of everything else
          backgroundColor: "#fff", // Sidebar background color
          boxShadow: "2px 0px 5px rgba(0,0,0,0.2)", // Optional shadow for effect
          transform: sidebarVisible ? "translateX(0)" : "translateX(-100%)", // Toggle sidebar slide-in
          transition: "transform 0.3s ease", // Smooth transition
        }}
      >
        <Sidebar />
      </div>

      {/* Conditionally Render Video on FarmerDashboard page */}
      {currentPage === "/farmerdashboard" && (
        <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
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
              zIndex: 0, // Ensure video stays behind the sidebar
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
              zIndex: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h1
                style={{
                  fontSize: "4vh",
                  fontFamily: "'MonumentExtendedUltrabold', sans-serif",
                }}
              >
                Manage <br /> Your Farm
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
      )}

      {/* Top Banner with Rotating Offers */}
      <div
        style={{
          backgroundColor: "#1a202c",
          position: "absolute",
          top: 0,
          left: 50,
          right: 50,
          zIndex: 10,
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

      {/* Header Component */}
      <Header />
    </div>
  );
};

export default Hero;
