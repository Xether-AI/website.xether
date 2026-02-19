"use client";

import React from "react";
import { motion } from "framer-motion";

export function AuthVisualHero() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-8 overflow-hidden bg-muted/30">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-[400px]"
      >
        <div className="text-7xl flex justify-center items-center">
          <h1 className="font-bold">Xether<span className="text-primary"> AI</span></h1>
        </div>
        <div className="mt-8 text-center space-y-4">
          <h2 className="text-3xl font-bold text-foreground">
            Infrastructure-grade Reliability
          </h2>
          <p className="text-muted-foreground text-lg max-w-sm mx-auto">
            Secure, scalable, and built for the future of AI-driven automation.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
