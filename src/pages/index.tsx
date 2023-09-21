import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <header className="header">
        <div className="logo-container">
          <Image src="/img/logo.png" alt="Logo" width={125} height={125} />
          <span className="logo-text">Ceylon EcoBags</span>
        </div>
        <Navbar />
      </header>
      <main className="home-title">Welcome to Ceylon EcoBags</main>
      <Footer />
    </div>
  );
}
