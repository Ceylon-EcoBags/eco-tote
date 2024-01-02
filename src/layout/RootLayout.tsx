import React from "react";
import Head from "next/head";
import { useLoading } from "../context/LoadingContext"; // Adjust the import path as needed
import LoadingScreen from "../components/LoadingScreen"; // Adjust the import path as needed

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { loading } = useLoading();

  return (
    <div className="root-layout">
      <Head>
        <title>Ceylon EcoBags</title>
        <meta name="description" content="" />
        <link
          rel="preload"
          href="/fonts/inter-var-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      {loading && <LoadingScreen />}
      {!loading && children}
    </div>
  );
};

export default RootLayout;
