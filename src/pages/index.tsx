import React from "react";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import VideoBackground from "./VideoBackground";

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
      <VideoBackground />
      <main className="home-content">
        <h1>Welcome to Ceylon EcoBags</h1>
      </main>
      <Footer />
    </div>
  );
}
