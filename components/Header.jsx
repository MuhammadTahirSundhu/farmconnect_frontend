import React from "react";
import Link from "next/link";

const Header = () => {
  return (
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
      {/* Left-aligned title */}
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

      {/* Centered Navigation */}
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
    </header>
  );
};

export default Header;
