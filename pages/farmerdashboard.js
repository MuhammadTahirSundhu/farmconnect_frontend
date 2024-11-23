import localFont from "next/font/local";
import Hero from '../components/FarmerHero';
import ProductCard from '../components/ProductCard';
import AboutUs from '../components/AboutUsComponent';
import ContactUs from './contactus';
import Footer from '@/components/Footer';
import Link from 'next/link';

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

const Home = () => {
  const products = [
    { id: 1, name: "Tomato", type: "Vegetable", price: 2.5 },
    { id: 2, name: "Cucumber", type: "Vegetable", price: 1.8 },
    { id: 3, name: "Carrot", type: "Vegetable", price: 1.2 },
  ];

  return (
    <div>
      <Hero />

      {/* My Products Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">My Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              productName={product.name}
              productType={product.type}
              price={product.price}
            />
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href="/FarmerMyCrops">
            <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">
              Load More
            </button>
          </Link>
        </div>
      </div>

      <AboutUs />
      <ContactUs />
    </div>
  );
};

export default Home;
