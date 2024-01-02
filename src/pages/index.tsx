// src/pages/index.tsx
import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import LoadingScreen from "../components/LoadingScreen";
import VideoBackground from "./VideoBackground";
import MotionWrapper from "../components/MotionWrapper";

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <VideoBackground />
          <main className="home-content">
            <h1>Welcome to EcoCraft</h1>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
