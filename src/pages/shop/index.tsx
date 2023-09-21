import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeaderCard from "../../components/HeaderCard";
import Footer from "../../components/footer";
import Navbar from "@/components/navbar";
import styles from "./shopPageStyle.module.css";

const bagsData = [
  {
    id: 1,
    name: "Elephant Tote",
    imageSrc: "/img/bags/elephant.png",
  },
  {
    id: 2,
    name: "Nelum Flower Tote",
    imageSrc: "/img/bags/nelum.png",
  },
  {
    id: 3,
    name: "Yala Safari Tote",
    imageSrc: "/img/bags/leopard.png",
  },
  {
    id: 4,
    name: "Elephant Tote",
    imageSrc: "/img/bags/sigiriya2.png",
  },
  {
    id: 5,
    name: "Sigiriya Heritage Tote",
    imageSrc: "/img/bags/sigiriya.png",
  },
  {
    id: 6,
    name: "Dambulla Heritage Tote",
    imageSrc: "/img/bags/dambulla.png",
  },
];

const shopPage: React.FC = () => {
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
        title="Bags For You"
        subtitle="Explore the variety of options we offer"
        backgroundImage="/img/head/hea.png"
      />
      <div className={styles.bagGrid}>
        {bagsData.map((bag) => (
          <div className={styles.bagItem} key={bag.id}>
            <Image src={bag.imageSrc} alt={bag.name} width={250} height={250} />
            <h3 className={styles.bagName}>{bag.name}</h3>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default shopPage;
