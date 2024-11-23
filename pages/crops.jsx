import localFont from "next/font/local";
import Hero from '../components/FarmerHero';
import Footer from '@/components/Footer';
import ProductCard from '../components/ProductCard';

// Load custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const FarmerMyCrops = () => {
  // Simulating product data, this will be replaced by actual data from the backend
  const products = [
    { id: 1, name: "Tomato", type: "Vegetable", price: 2.5 },
    { id: 2, name: "Cucumber", type: "Vegetable", price: 1.8 },
    { id: 3, name: "Corn", type: "Vegetable", price: 1.2 },
    { id: 4, name: "Lettuce", type: "Vegetable", price: 1.0 },
    { id: 5, name: "Potato", type: "Vegetable", price: 1.5 },
    { id: 6, name: "Onion", type: "Vegetable", price: 2.0 },
    // Add more products as needed
  ];

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-0 z-0"></div>
      <div
        className="relative inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/back1.jpg")' }}
      ></div>

      {/* Header */}
      <Hero />

      {/* Main Content */}
      <main className="flex-grow py-12 z-10 relative" style={{ marginTop: "100px" }}>
        <div className="container mx-auto px-4">
          {/* Product Cards Section */}
          <div className="product-cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                productName={product.name} 
                productType={product.type} 
                price={product.price} 
              />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FarmerMyCrops;
