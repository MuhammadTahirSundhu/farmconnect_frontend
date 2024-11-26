import localFont from "next/font/local";
import Footer from '@/components/Footer';
import ProductCard from '../components/ProductCardConsumer';
import TopBanner from"@/components/Nav";
import {useSelector} from 'react-redux'
import { useState,useEffect } from "react";
import { getAllProducts } from '@/Services/productServiceApi';
import Nav from "@/components/NavConsumer";

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
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getAllProducts();
        console.log('Fetched Products:', productsData); // Log the fetched products
        setProducts(Array.isArray(productsData) ? productsData : []); // Ensure the response is an array
        console.log(products);
        
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]); // Default to an empty array on error
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading products...</div>;
  }
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-0 z-0"></div>
      <div
        className="relative inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/back1.jpg")' }}
      ></div>

      {/* Header */}
      {/* <TopBanner /> */}
      <Nav/>

      {/* Main Content */}
      <main className="flex-grow py-12 z-10 relative" style={{ marginTop: "100px" }}>
        <div className="container mx-auto px-4">
          {/* Product Cards Section */}
          <div className="product-cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                productId={product.productID}
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
