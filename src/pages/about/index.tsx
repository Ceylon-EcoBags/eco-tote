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
          <span className="logo-text">Eco Craft</span>
        </div>
        <Navbar />
      </header>
      <HeaderCard
        title="About Us"
        subtitle="Learn more about our journey and mission."
        backgroundImage="/img/head/hea.png"
      />

      <div className={styles.aboutcontent}>
        <div className={styles.aboutSection}>
          <div className={styles.aboutImage}>
            <Image
              src="/img/about/factory1.jpg"
              alt="Eco-Friendly Factory"
              width={400}
              height={350}
            />
          </div>
          <div className={styles.aboutText}>
            <h2>Who We Are</h2>
            <p>
              Eco Craft is an innovative initiative committed to making a
              positive impact on both the environment and rural economies in Sri
              Lanka. Our mission is to foster sustainable development by
              producing and promoting eco-friendly products that contribute to
              the well-being of communities and the planet. Through a holistic
              approach, Eco Craft aims to create a ripple effect of positive
              change, starting from the grassroots level.
            </p>
          </div>
        </div>

        <div className={`${styles.aboutSection} ${styles.reverse}`}>
          <div className={styles.aboutImage}>
            <Image
              src="/img/about/rural.jpg"
              alt="Eco-Friendly Products"
              width={400}
              height={350}
            />
          </div>
          <div className={styles.aboutText}>
            <h2>Empowering Rural Economies</h2>
            <p>
              Eco Craft recognizes the need for a helping hand in rural
              economies, especially in Sri Lanka. By establishing partnerships
              with local artisans and entrepreneurs, we aim to empower
              individuals in rural areas, providing them with opportunities to
              showcase their skills and contribute to the growth of their
              communities. Through fair trade practices, Eco Craft ensures that
              the benefits of our initiatives reach those who need a helping
              hand the most.
            </p>
          </div>
        </div>
        <div className={styles.aboutSection}>
          <div className={styles.aboutImage}>
            <Image
              src="/img/about/ecomanu.jpg"
              alt="Eco-Friendly Factory"
              width={400}
              height={350}
            />
          </div>
          <div className={styles.aboutText}>
            <h2>Sustainable Products and Materials at Eco Craft:</h2>
            <p>
              Eco Craft is dedicated to sustainability, emphasizing eco-friendly
              materials and reusable, recyclable products. We prioritize
              renewable, biodegradable, and non-toxic materials to lessen
              environmental impact. Our range, including reusable shopping bags
              and recyclable packaging, is designed to cut down single-use
              waste. Through responsible sourcing and educating on proper
              disposal and recycling, we aim to conserve natural resources,
              support a circular economy, and reduce our ecological footprint.
            </p>
          </div>
        </div>
        <div className={`${styles.aboutSection} ${styles.reverse}`}>
          <div className={styles.aboutImage}>
            <Image
              src="/img/about/trend.jpg"
              alt="Eco-Friendly Products"
              width={400}
              height={350}
            />
          </div>
          <div className={styles.aboutText}>
            <h2>Creating a Global Trend</h2>
            <p>
              Eco Craft aims to set a trend in eco-friendly living and
              consumption not only in Sri Lanka but also globally. Through
              strategic marketing, partnerships, and social media campaigns, we
              aspire to create awareness and inspire individuals and businesses
              worldwide to embrace sustainable practices. By collaborating with
              influencers, environmentalists, and organizations, we aim to
              amplify our message and encourage a shift towards responsible and
              conscious consumerism on a global scale.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.dalleAcknowledgment}>
        <p>Images on this page were created using DALL-E by OpenAI.</p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
