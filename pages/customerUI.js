import localFont from "next/font/local";

import Hero from '../components/HeroConsumer';
import Crops from './crops';
import AboutUs from './AboutUs';
import ContactUs from './contactus';
import Footer from '@/components/Footer';
import CropsProduct from "@/components/CropsProduct";
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
  
  return (
    <div>
      <Hero/>
      <CropsProduct/>
      <AboutUs/>
      <ContactUs/>
      <Footer/>

      
    </div>
  );
};

export default Home;


