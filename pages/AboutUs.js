"use client"

import React,{useState,useEffect} from "react";
import Banner from'@/components/Nav';
import Farmerbanner from '@/components/Header'
import Consumerbanner from'@/components/NavConsumer';
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

export default AboutUs;
