import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React, { useEffect } from "react";
import { Poppins } from 'next/font/google';
import Lenis from "lenis"; // Ensure the import is correct

const poppins = Poppins({
  weight: ['100','200','300','400', '500', '600', '700','800','900'], // Load specific weights
  style: ['normal', 'italic'], // Load specific styles
  subsets: ['latin'], // Specify subsets if needed
  variable: '--font-poppins',
});


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Listen for the scroll event and log the event data
    lenis.on('scroll', (e) => {
      console.log(e);
    });

    // Use requestAnimationFrame to continuously update the scroll
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Cleanup function to remove the event listener
    return () => {
      lenis.destroy(); // Assuming Lenis has a destroy method to clean up
    };
  }, []); // Empty dependency array to run once on mount

  return (
    <div className={poppins.className}> {/* Apply the font variable here */}
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}