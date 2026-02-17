"use client";

import React from "react";
import { AuthVisualHero } from "./auth-visual-hero";
import { motion } from "framer-motion";

export function AuthSplitLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen lg:h-screen w-full bg-background flex flex-col lg:flex-row lg:overflow-hidden">
      {/* Left Panel: Visual (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 h-full relative bg-muted/20 items-center justify-center border-r border-border/50 overflow-hidden">
        <AuthVisualHero />
      </div>

      {/* Right Panel: Content/Form */}
      <div className="flex-1 flex flex-col relative h-full overflow-y-auto overflow-x-hidden">
        {/* Subtle background decoration for the form side */}
        <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="url(#split-auth-grid)" />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-10 flex-1 flex flex-col items-center justify-center py-12 px-6 sm:px-12 lg:px-24"
        >
          {children}
        </motion.div>

        {/* Footer info or legal links could go here */}
        <div className="p-8 text-center sm:text-left">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Xether AI. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
