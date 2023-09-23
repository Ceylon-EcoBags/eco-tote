import React from "react";
import Image from "next/image";
import styles from "./HeaderCard.module.css";

type HeaderCardProps = {
  title: string;
  subtitle?: string;
  backgroundImage: string;
};

export default function HeaderCard({
  title,
  subtitle,
  backgroundImage,
}: HeaderCardProps) {
  return (
    <div className={styles.headerCard}>
      <div style={{ width: "100%", height: "350px" }}>
        <Image
          src={backgroundImage}
          layout="fill"
          objectFit="cover"
          alt="Header Background"
        />
      </div>
      <div className={styles.headerContent}>
        <h1 className={styles.headerTitle}>{title}</h1>
        {subtitle && <p className={styles.headerSubtitle}>{subtitle}</p>}
      </div>
    </div>
  );
}
