import React from "react";
import HeaderCard from "../../components/HeaderCard";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

import Image from "next/image";
import Link from "next/link";
const AboutPage: React.FC = () => {
  return (
    <div>
      <header className="header">
        <div className="logo-container">
          <Image src="/img/logo.png" alt="Logo" width={125} height={125} />
          <span className="logo-text">Ceylon EcoBags</span>
        </div>
        <Navbar />
      </header>
      <HeaderCard
        title="About Us"
        subtitle="Learn more about our journey and mission."
        backgroundImage="/img/head/hea.png"
      />
      <Footer />
    </div>
  );
};

export default AboutPage;
