import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = ({ onLogout }) => {
  const router = useRouter();
  const [offerIndex, setOfferIndex] = useState(0);
  const offers = [
    "Welcome to FarmConnect! Enjoy 50% off on your first purchase!",
    "Fresh crops delivered to your doorstep with 40% off!",
    "Support local farmers and save 50% today!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setOfferIndex((prevIndex) => (prevIndex + 1) % offers.length);
    }, 5000); // Change offers every 5 seconds
    return () => clearInterval(interval);
  }, [offers.length]);

  const handleLogout = () => {
    if (onLogout) onLogout(); // Call logout handler (e.g., clear session)
    router.push("/"); // Redirect to home
  };

  return (
    <header>
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
          {[{ name: "Home", path: "/" }, { name: "Crops", path: "/crops" }, { name: "About Us", path: "/AboutUs" }, { name: "Contact Us", path: "/contactus" }, { name: "Profile", path: "/profile" }].map((link, idx) => (
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
        <ul style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <li>
            <Link
              href="/cart"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span role="img" aria-label="Cart" style={{ marginRight: "0.5rem" }}>
                🛒
              </span>
              Cart
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              style={{
                background: "none",
                color: "#fff",
                fontSize: "1rem",
                fontWeight: "500",
                border: "none",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
