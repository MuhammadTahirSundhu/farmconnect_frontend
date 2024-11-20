import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnalyticsGrid from "../components/AnalyticsGrid";

const Analytics = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 py-12">
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
