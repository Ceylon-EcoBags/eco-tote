// src/components/LoadingScreen.tsx
import React from "react";
import Image from "next/image";
import styles from "./LoadingScreen.module.css";

const LoadingScreen: React.FC = () => {
  return (
    <div className={styles.loadingContainer}>
      <Image
        src="/img/logo2.png"
        alt="EcoCraft Logo"
        width={150}
        height={150}
        className={styles.pulsatingLogo}
      />
    </div>
  );
};

export default LoadingScreen;
