<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Co-founders' data
  const founders = [
    {
      name: "Awais Khan",
      role: "Co-Founder & CEO",
      description: "Awais Khan is a visionary leader with a passion for innovation and growth.",
      image: "/awais.jpeg",
    },
    {
      name: "Tahir Sandhu",
      role: "Co-Founder",
      description: "Tahir Sandhu specializes in technology and ensures seamless operations.",
      image: "/tahir.jpeg",
    },
    {
      name: "Hamza Arshad",
      role: "Co-Founder & COO",
      description: "Hamza Arshad oversees day-to-day operations and strategy execution.",
      image: "/images/hamza.jpg",
    },
  ];

  // Auto slide logic with animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % founders.length);
        setIsAnimating(false);
      }, 500); // Match this duration with the animation duration
    }, 3000);
    return () => clearInterval(interval);
  }, [founders.length]);
=======
import React from "react";
import TopBannerAndNav from "../components/TopBannerAndNav"; // Adjust path if necessary
import AboutUsComponent from "../components/AboutUsComponent";
import Footer from "@/components/Footer";
>>>>>>> 9602d14349d1afd7ef56b2ef632e9a713252f464

const ContactUs = () => {
  return (
    <>
      <TopBannerAndNav />
      <AboutUsComponent />
      <Footer />
    </>
  );
};

export default ContactUs;
