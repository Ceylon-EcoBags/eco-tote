import React from "react";
import HeaderCard from "../../components/HeaderCard";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import styles from "./about.module.css";

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
      <div className={styles.aboutcontent}>
        <div className={`${styles.aboutImage} slide-in`}>
          <Image
            src="/img/about/factory1.png"
            alt="Eco-Friendly Factory"
            width={400}
            height={350}
          />
        </div>
        <div className={`${styles.aboutText} slide-in`}>
          <h2>Our Commitment to Sustainability</h2>
          <p>
            Eco Craft is an innovative initiative committed to making a positive
            impact on both the environment and rural economies in Sri Lanka. Our
            mission is to foster sustainable development by producing and
            promoting eco-friendly products that contribute to the well-being of
            communities and the planet. Through a holistic approach, Eco Craft
            aims to create a ripple effect of positive change, starting from the
            grassroots level.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
