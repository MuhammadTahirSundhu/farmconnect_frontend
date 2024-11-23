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

  return (
    <div className="flex flex-col min-h-screen">
      

      {/* Main Content */}
      <main
        className="flex-grow bg-cover bg-center relative py-16"
        style={{ backgroundImage: "url('/back1.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative container mx-auto px-4">
          <h1 className="text-center text-4xl font-bold mb-12 text-white">
            About Us
          </h1>

          {/* Slider */}
          <div className="relative max-w-4xl mx-auto bg-white bg-opacity-70 shadow-lg rounded-lg overflow-hidden">
            <div
              className={`flex items-center justify-center p-12 transition-opacity duration-500 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="text-center">
                <img
                  src={founders[currentSlide].image}
                  alt={founders[currentSlide].name}
                  className="w-48 h-48 mx-auto rounded-full object-cover mb-8 shadow-lg"
                />
                <h2 className="text-3xl font-bold text-gray-800">
                  {founders[currentSlide].name}
                </h2>
                <h3 className="text-xl text-gray-600 mt-2">
                  {founders[currentSlide].role}
                </h3>
                <p className="text-gray-700 mt-6 px-6 text-lg">
                  {founders[currentSlide].description}
                </p>
              </div>
            </div>

            {/* Dots Navigation */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {founders.map((_, index) => (
                <button
                  key={index}
                  className={`w-4 h-4 rounded-full border-2 transition-colors ${
                    currentSlide === index
                      ? "bg-green-700 border-green-700"
                      : "bg-white border-gray-400"
                  }`}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setCurrentSlide(index);
                      setIsAnimating(false);
                    }, 500);
                  }}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </main>

     
    </div>
  );
};

export default AboutUs;
