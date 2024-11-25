import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Cart from "./Cart";
import { useDispatch } from "react-redux";
import { reset } from "@/features/slice";


const Nav = ({ onLogout }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const toggleLoginDropdown = () => setIsLoginDropdownOpen(!isLoginDropdownOpen);
  const toggleSignupDropdown = () => setIsSignupDropdownOpen(!isSignupDropdownOpen);

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 684d7c56af9b2b10e7f3cf8ad542588df552f7b3
        {[
          { name: "Home", path: "/" },
          { name: "Crops", path: "/crops" },
          { name: "About Us", path: "/AboutUs" },
          { name: "Contact Us", path: "/contactus" },
          { name: "Profile", path: "/profile" },
        ].map((link, idx) => (
<<<<<<< HEAD
=======
        {[{ name: "Home", path: "/" }, { name: "Crops", path: "/crops" }, { name: "About Us", path: "/AboutUs" }, { name: "Contact Us", path: "/contactus" }, { name: "Profile", path: "/profile" }].map((link, idx) => (
>>>>>>> 01512e9953ff99ead8ac5a5a42f0bfbf637af781
=======
>>>>>>> 684d7c56af9b2b10e7f3cf8ad542588df552f7b3
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
<<<<<<< HEAD
        {userType === "consumer" ? (
          // Consumer-specific content
          <>
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
          </>
        ) : (
          // Login and Signup dropdowns for other users
          <>
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
          </>
        )}
=======
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
>>>>>>> 01512e9953ff99ead8ac5a5a42f0bfbf637af781
      </ul>
    </nav>
  );
};

export default Nav;
