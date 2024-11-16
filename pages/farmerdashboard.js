import { useState } from "react";
import Header from "../components/Header";
import AboutPanel from "../components/AboutPanel";

const FarmerDashboard = () => {
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  const farmerInfo = {
    name: "John Doe",
    location: "Springfield",
    crops: "Corn, Wheat",
    experience: 10,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        title="Farmer Dashboard"
        onAboutClick={() => setIsAboutVisible(true)}
      />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-green-700">Welcome, Farmer!</h1>
        {/* Additional dashboard content */}
      </main>
      {isAboutVisible && (
        <AboutPanel
          isVisible={isAboutVisible}
          onClose={() => setIsAboutVisible(false)}
          farmerInfo={farmerInfo}
        />
      )}
    </div>
  );
};

export default FarmerDashboard;
