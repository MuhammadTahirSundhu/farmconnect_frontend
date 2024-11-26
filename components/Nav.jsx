import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = ({ onSignupSelect }) => {
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const [isSignupDropdownOpen, setIsSignupDropdownOpen] = useState(false);
  const [offerIndex, setOfferIndex] = useState(0);
  const loginDropdownRef = useRef(null);
  const signupDropdownRef = useRef(null);
  const router = useRouter();

  // Rotating offers
  const offers = [
    "Special Offers! - Get 50% off on crops",
    "Sale 40% off on bulk shopping!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setOfferIndex((prevIndex) => (prevIndex + 1) % offers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Toggle login dropdown
  const toggleLoginDropdown = () => setIsLoginDropdownOpen(!isLoginDropdownOpen);

  // Toggle signup dropdown
  const toggleSignupDropdown = () => setIsSignupDropdownOpen(!isSignupDropdownOpen);

  // Handle click outside dropdowns
  const handleClickOutside = (event) => {
    if (
      loginDropdownRef.current &&
      !loginDropdownRef.current.contains(event.target) &&
      signupDropdownRef.current &&
      !signupDropdownRef.current.contains(event.target)
    ) {
      setIsLoginDropdownOpen(false);
      setIsSignupDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div style={{ position: "relative", zIndex: 20 }}>
      {/* Top Banner */}
      <div
        style={{
          backgroundColor: "#1a202c",
          padding: "0.5rem",
          textAlign: "center",
          fontFamily: "Rubik, sans-serif",
          color: "#fff",
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
      </div>

      {/* Navigation Bar */}
      <nav
        style={{
          backgroundColor: "#48bb78",
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "Rubik, sans-serif",
        }}
      >
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>FarmConnect</h1>
        <ul style={{ display: "flex", gap: "1rem" }}>
          {[
            { name: "Home", path: "/" },
<<<<<<< HEAD
            { name: "Crops", path: "/crops" },
=======
            { name: "123Crops", path: "/crops" },
>>>>>>> 41447b6797d1e142436beae6587a902a76000e91
            { name: "About Us", path: "/AboutUs" },
            { name: "Contact Us", path: "/contactus" },
          ].map((link, idx) => (
            <li key={idx}>
              <Link
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
              </Link>
            </li>
          ))}
        </ul>
        <ul style={{ display: "flex", gap: "1rem" }}>
          <li ref={loginDropdownRef} style={{ position: "relative" }}>
            <button
              onClick={toggleLoginDropdown}
              style={{
                background: "none",
                color: "#fff",
                fontSize: "1rem",
                fontWeight: "500",
                border: "none",
                cursor: "pointer",
              }}
              aria-expanded={isLoginDropdownOpen}
              aria-label="Toggle login options"
            >
              Login
            </button>
            {isLoginDropdownOpen && (
              <ul
                style={{
                  position: "absolute",
                  right: 0,
                  top: "2rem",
                  background: "#000",
                  color: "#fff",
                  borderRadius: "0.5rem",
                  padding: "0.5rem",
                }}
              >
                {["Farmer", "Consumer", "Mill"].map((type) => (
                  <li key={type}>
                    <button
                      onClick={() => router.push(`/${type.toLowerCase()}login`)}
                      style={{
                        display: "block",
                        padding: "0.5rem 1rem",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "#fff",
                        width: "100%",
                        textAlign: "left",
                      }}
                    >
                      {type}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li ref={signupDropdownRef} style={{ position: "relative" }}>
            <button
              onClick={toggleSignupDropdown}
              style={{
                background: "none",
                color: "#fff",
                fontSize: "1rem",
                fontWeight: "500",
                border: "none",
                cursor: "pointer",
              }}
              aria-expanded={isSignupDropdownOpen}
              aria-label="Toggle signup options"
            >
              Signup
            </button>
            {isSignupDropdownOpen && (
              <ul
                style={{
                  position: "absolute",
                  right: 0,
                  top: "2rem",
                  background: "#000",
                  color: "#fff",
                  borderRadius: "0.5rem",
                  padding: "0.5rem",
                }}
              >
                {["Farmer", "Consumer", "Mill"].map((type) => (
                  <li key={type}>
                    <button
                      onClick={() => {
                        onSignupSelect(type.toLowerCase());
                        setIsSignupDropdownOpen(false); // Close the dropdown
                      }}
                      style={{
                        display: "block",
                        padding: "0.5rem 1rem",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "#fff",
                        width: "100%",
                        textAlign: "left",
                      }}
                    >
                      {type}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;