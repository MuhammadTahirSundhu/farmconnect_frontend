import React from "react";
import ContactUsComponent from "../components/ContactUsComponent";
import TopBannerAndNav from "../components/TopBannerAndNav"; // Adjust path if necessary
import Footer from "@/components/Footer";
const ContactUs = () => {
  return (
    <>
      <TopBannerAndNav />
      <ContactUsComponent />
      <Footer />
    </>
  );
};

export default ContactUs;