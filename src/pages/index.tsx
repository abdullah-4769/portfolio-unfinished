"use client";
import Link from "next/link";
import Hero from "./components/Hero";
import CTA from "./components/CTA";
import Features from "./components/Features";
import Services from "./components/Services";
import Shoutout from "./components/Shoutout";

const Portfolio = () => {
  return (
    <main>

      {/* Hero Section */}

      <Hero/>

      {/* Features Section */}

      <Features/>

      {/* Services area */}

      <Services/>

      {/* Shoutout Section */}

      <Shoutout/>

      {/* Call To Action */}

      <CTA />

    </main>
  );
};

export default Portfolio; //exporting the component
