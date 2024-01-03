import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import LoadingScreen from "../components/LoadingScreen";
import { useRouter } from "next/router"; // Import useRouter for navigation

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  const navigateToAbout = () => {
    router.push("/about");
  };

  // Correct path to your image
  const backgroundImage = "/img/background.jpg";

  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          {/* <VideoBackground /> */} {/* Commented out */}
          <div
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "100vh",
            }}
          >
            <main className="home-content">
              <h1>Welcome to EcoCraft</h1>
              <button onClick={navigateToAbout} className="find-out-more-btn">
                Find More
              </button>
            </main>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
