import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = ({ onSignupSelect }) => {
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const [isSignupDropdownOpen, setIsSignupDropdownOpen] = useState(false);
  const loginDropdownRef = useRef(null);
  const signupDropdownRef = useRef(null);
  const router = useRouter();

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
    <nav
      style={{
        backgroundColor: "#48bb78",
        padding: "1rem 2rem",
        position: "absolute",
        top: "3rem",
        left: 50,
        right: 50,
        zIndex: 20,
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
          { name: "Crops", path: "/crops" },
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
                zIndex: 50,
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
                zIndex: 50,
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
  );
};

export default Nav;