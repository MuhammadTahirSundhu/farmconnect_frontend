import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Cart from "./Cart";
import { useDispatch } from "react-redux";
import { reset } from "@/features/slice";

const Nav = ({ onLogout }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [offerIndex, setOfferIndex] = useState(0);

  const offers = [
    "Welcome to FarmConnect! Enjoy 50% off on your first purchase!",
    "Limited time offer: 40% off on selected crops!",
    "Subscribe now for exclusive 50% discounts on future orders!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setOfferIndex((prevIndex) => (prevIndex + 1) % offers.length);
    }, 5000); // Rotate offers every 5 seconds
    return () => clearInterval(interval);
  }, [offers.length]);

  const handleLogout = () => {
    if (onLogout) onLogout(); // Call logout handler (e.g., clear session)
    dispatch(reset());
    router.push("/"); // Redirect to home
  };

  return (
    <div>
      {/* Top Banner */}
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
      </div>

      {/* Navigation */}
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
            { name: "Crops", path: "/CropsConsumer" },
            { name: "About Us", path: "/AboutUs" },
            { name: "Contact Us", path: "/contactus" },
            { name: "Profile", path: "/profile" },
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
        <ul style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <li>
            <div
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                role="img"
                aria-label="Cart"
                style={{ marginRight: "0.5rem" }}
              >
                <Cart cartId={1} />
              </span>
            </div>
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
    </div>
  );
};

export default Nav;
