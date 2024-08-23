"use client";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./components/ui/aurora-background";
import Homepage, { Navbar } from "./components/home-components/homepage";
import CompanyOverview from "./components/home-components/companyOverview";

export default function Home() {
  return (
    <main className="min-h-screen">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="w-full flex flex-col h-full"
        >
          <Navbar className="top-2" />
          <Homepage />
          <CompanyOverview/>
        </motion.div>
      </AuroraBackground>
    </main>
  );
}
