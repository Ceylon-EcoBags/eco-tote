import React from "react";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import VideoBackground from "./VideoBackground";

export default function Home() {
  return (
    <div>
      <Navbar />
      <VideoBackground />
      <main className="home-content">
        <h1>Welcome to Ceylon EcoBags</h1>
      </main>
      <Footer />
    </div>
  );
}
