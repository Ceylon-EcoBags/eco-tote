import React from "react";

const VideoBackground: React.FC = () => {
  console.log("VideoBackground component rendered");
  return (
    <div className="video-background">
      <video autoPlay loop muted playsInline>
        <source src="/video/back.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
