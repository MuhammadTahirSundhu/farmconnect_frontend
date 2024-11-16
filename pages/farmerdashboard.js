import { useState } from "react";
import Header from "../components/Header";
import AboutPanel from "../components/AboutPanel";
import ProductAd from "../components/ProductAd";
import ProductCard from "../components/ProductCard";
import ProductSlider from "../components/ProductSlider";

const FarmerDashboard = () => {
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  const farmerInfo = {
    name: "John Doe",
    location: "Springfield",
    crops: "Corn, Wheat",
    experience: 10,
  };

  // Sample products for display
  const products = [
    { id: 1, name: "Organic Corn", price: "$10/bag", image: "/corn.jpg" },
    { id: 2, name: "Fresh Wheat", price: "$8/bag", image: "/wheat.jpg" },
    { id: 3, name: "Soybeans", price: "$12/bag", image: "/soybeans.jpg" },
  ];

  return (
    <div
      className="min-h-screen flex flex-col relative bg-cover bg-center"
      style={{ backgroundImage: 'url("/back1.jpg")' }}
    >
      {/* Darker Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col">
        <Header
          title="Farmer Dashboard"
          onAboutClick={() => setIsAboutVisible(true)}
        />

        <main className="flex-1 p-8">
          <h1 className="text-2xl font-bold text-green-200 mb-4">
            Welcome, Farmer!
          </h1>

          {/* Product Slider */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-green-300 mb-2">
              Featured Products
            </h2>
            <ProductSlider products={products} />
          </section>

          {/* Individual Product Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            ))}
          </section>

          {/* Advertisement Section */}
          <section>
            <h2 className="text-xl font-semibold text-green-300 mb-2">
              Advertisements
            </h2>
            <ProductAd
              title="Promote Your Crops"
              description="Reach out to more customers and grow your sales!"
              image="/ad.jpg"
            />
          </section>
        </main>

        {/* About Panel */}
        {isAboutVisible && (
          <AboutPanel
            isVisible={isAboutVisible}
            onClose={() => setIsAboutVisible(false)}
            farmerInfo={farmerInfo}
          />
        )}
      </div>
    </div>
  );
};

export default FarmerDashboard;
