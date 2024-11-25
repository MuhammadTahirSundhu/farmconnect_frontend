import { useEffect, useState } from 'react';
import localFont from "next/font/local";
import Hero from '../components/FarmerHero';
import Footer from '@/components/Footer';
import ProductCard from '../components/ProductCard';
import { getProductsByFarmerId } from '../Services/productServiceApi'; // Assuming you have a service for this
import {useSelector} from 'react-redux'

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
  const [products, setProducts] = useState([]);
  const currentFarmer = useSelector((state) => state.currentRecords.currentFarmer);
  console.log(currentFarmer);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getProductsByFarmerId(currentFarmer.farmerid);
        setProducts(fetchedProducts); 
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };

    fetchProducts(); 
  }, []);

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
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard 
                  key={product.id} 
                  productName={product.name} 
                  productType={product.type} 
                  price={product.price} 
                />
              ))
            ) : (
              <p>No products available</p>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FarmerMyCrops;
