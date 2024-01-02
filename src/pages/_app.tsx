import { AppProps } from "next/app";
import "../styles/globals.css";
import RootLayout from "../layout/RootLayout";
import { LoadingProvider } from "../context/LoadingContext"; // Adjust the path as needed

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LoadingProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </LoadingProvider>
  );
}

export default MyApp;
