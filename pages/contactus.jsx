<<<<<<< HEAD
import React from "react";
import ContactUsComponent from "../components/ContactUsComponent";
import TopBannerAndNav from "../components/Nav"; // Adjust path if necessary
=======
"use client"

import React,{useState,useEffect} from "react";
import Banner from'@/components/Nav';
import Farmerbanner from '@/components/Header'
import Consumerbanner from'@/components/NavConsumer';import ContactUsComponent from "../components/ContactUsComponent";
>>>>>>> 41447b6797d1e142436beae6587a902a76000e91
import Footer from "@/components/Footer";
const ContactUs = () => {
  const [userType, setUserType] = useState("")
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUserType(window.localStorage.getItem("userType"));
    }
  }, []);  return (
    <>
{
        userType?<Consumerbanner/>:<Banner />
       }      <ContactUsComponent />
      <Footer />
    </>
  );
};

export default ContactUs;