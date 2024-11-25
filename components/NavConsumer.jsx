import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Cart from "./Cart";
import { useDispatch } from "react-redux";
import { reset } from "@/features/slice";


const Nav = ({ onLogout }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    if (onLogout) onLogout(); // Call logout handler (e.g., clear session)
    dispatch(reset());
    router.push("/"); // Redirect to home
  };

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
              {/* The Cart component is now placed here within the span */}
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
  );
};

export default Nav;
