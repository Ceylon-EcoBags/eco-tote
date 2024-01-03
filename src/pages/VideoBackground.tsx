import React, { useState, useEffect } from "react";

const VideoBackground: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    // Function to update the state with the window width
    const updateWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set width on initial load
    updateWidth();

    // Add event listener for window resize
    window.addEventListener("resize", updateWidth);

    // Clean up event listener
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Threshold for mobile devices (e.g., 768px for tablets)
  const isMobile = windowWidth < 768;

  console.log("VideoBackground component rendered");

  return (
    <div className="video-background">
      {isMobile ? (
        <img src="/img/mobile.jpg" alt="Mobile Background" />
      ) : (
        <video autoPlay loop muted playsInline>
          <source src="/video/back.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoBackground;
