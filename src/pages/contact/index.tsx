import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeaderCard from "../../components/HeaderCard";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

const ContactPage: React.FC = () => {
  return (
    <div>
      <header className="header">
        <Navbar />
      </header>
      <HeaderCard
        title="Contact Us"
        subtitle="Get in touch with our dedicated team"
        backgroundImage="/img/head/hea.png"
      />
      <Footer />
    </div>
  );
};

export default ContactPage;
