import React from "react";
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
      {children}
    </div>
  );
}
