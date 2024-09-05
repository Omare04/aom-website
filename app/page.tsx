"use client";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./components/ui/aurora-background";
import Homepage, { Navbar } from "./components/home-components/homepage";
import CompanyOverview from "./components/home-components/companyOverview";
import Aircrafts from "./components/pages/aircrafts";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-200">
      {/* <AuroraBackground> */}
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="w-full flex flex-col h-auto"
      >
        <Navbar />
        <Homepage />
        <CompanyOverview />
        <Aircrafts />
      </motion.div>
      {/* </AuroraBackground> */}
    </main>
  );
}
