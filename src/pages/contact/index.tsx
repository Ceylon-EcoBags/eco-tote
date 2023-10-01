import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeaderCard from "../../components/HeaderCard";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import styles from "./contact.module.css";

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
      <div className={styles.FrameBox}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfFGRmLNUhKn0DvFdSjl7G6NN6wJEsUQj4TKkPxmZWjFwEgwg/viewform?embedded=true"
          width="640"
          height="688"
        >
          Loading…
        </iframe>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
