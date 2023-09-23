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
            At Ceylon EcoBags, we take great pride in our unwavering commitment
            to sustainability. Our eco-friendly bags are crafted in
            carbon-neutral factories powered by clean, renewable solar energy.
            Beyond our dedication to safeguarding the environment, we are
            equally passionate about transforming lives. By creating meaningful
            employment opportunities in underprivileged communities across Sri
            Lanka, we actively contribute to a brighter and more eco-conscious
            future.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
