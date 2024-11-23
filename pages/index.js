import localFont from "next/font/local";
import Hero from '../components/Hero';
import Footer from '@/components/Footer';
import AboutUsComponent from "@/components/AboutUsComponent";
import ContactUsComponent from "@/components/ContactUsComponent";
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
      <AboutUsComponent/>
      <ContactUsComponent/>
      <Footer/>

      
    </div>
  );
};

export default Home;


