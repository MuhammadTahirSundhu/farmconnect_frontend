import React from "react";
import Header from "../components/FarmerHero";
import Footer from "../components/Footer";
import AnalyticsGrid from "../components/AnalyticsGrid";

const Analytics = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-0 z-0"></div>
      <div
        className="relative inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/back1.jpg")' }}
      ></div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow py-12 z-10 relative" style={{ marginTop: "100px" }}>
        {/* Increase marginTop if the header (FarmerHero) has a larger height */}
        <div className="container mx-auto px-4">
          <h1 className="text-center text-4xl font-bold mb-12 text-green-700">
            Analytics Dashboard
          </h1>
          <AnalyticsGrid />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Analytics;
