"use client"

import React,{useState,useEffect} from "react";
import Banner from'@/components/Nav';
import Farmerbanner from '@/components/Header'
import Consumerbanner from'@/components/NavConsumer';import ContactUsComponent from "../components/ContactUsComponent";
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
