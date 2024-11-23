import localFont from "next/font/local";

import Hero from '../components/Hero';
import Crops from './crops';
import AboutUs from './AboutUs';
import ContactUsComponent from "../components/ContactUsComponent";
import Footer from '@/components/Footer';
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
      <Crops/>
      <AboutUs/>
      <ContactUsComponent/>
      <Footer/>

      
    </div>
  );
};

export default Home;


