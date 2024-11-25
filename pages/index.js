import localFont from "next/font/local";
import Hero from '../components/Hero';
<<<<<<< HEAD
import Crops from './crops';
import ContactUsComponent from "../components/ContactUsComponent";
import Footer from '@/components/Footer';
import AboutUsComponent from "@/components/AboutUsComponent";
=======
import Footer from '@/components/Footer';
import AboutUsComponent from "@/components/AboutUsComponent";
import ContactUsComponent from "@/components/ContactUsComponent";
import CropsProduct from "@/components/CropsProduct";
>>>>>>> 01512e9953ff99ead8ac5a5a42f0bfbf637af781
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
<<<<<<< HEAD
      <Crops/>
=======
      <CropsProduct/>
>>>>>>> 01512e9953ff99ead8ac5a5a42f0bfbf637af781
      <AboutUsComponent/>
      <ContactUsComponent/>
      <Footer/>

      
    </div>
  );
};

export default Home;


