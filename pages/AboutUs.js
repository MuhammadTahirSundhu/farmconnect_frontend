<<<<<<< HEAD
import React from "react";
import TopBannerAndNav from "../components/Nav"; // Adjust path if necessary
=======
"use client"

import React,{useState,useEffect} from "react";
import Banner from'@/components/Nav';
import Farmerbanner from '@/components/Header'
import Consumerbanner from'@/components/NavConsumer';
>>>>>>> 41447b6797d1e142436beae6587a902a76000e91
import AboutUsComponent from "../components/AboutUsComponent";
import Footer from "@/components/Footer";

const AboutUs = () => {
  const [userType, setUserType] = useState("")
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUserType(window.localStorage.getItem("userType"));
    }
  }, []);
  return (
    <>
       {
        userType?<Consumerbanner/>:<Banner />
       }     
        <AboutUsComponent />
      <Footer />
    </>
  );
};

<<<<<<< HEAD
export default ContactUs;
=======
export default AboutUs;
>>>>>>> 41447b6797d1e142436beae6587a902a76000e91
