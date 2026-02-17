"use client";

import React from "react";
import { motion } from "framer-motion";

export function AuthVisualHero() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-12 overflow-hidden bg-muted/30">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="split-auth-grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#split-auth-grid)" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-[400px]"
      >
        {/* Large Central Visual */}
        <svg
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto filter drop-shadow-[0_0_30px_rgba(var(--primary-rgb),0.2)]"
        >
          <defs>
            <linearGradient
              id="visual-grad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" />
            </linearGradient>
            <radialGradient id="visual-glow" cx="50%" cy="50%" r="50%">
              <stop
                offset="0%"
                stopColor="hsl(var(--primary))"
                stopOpacity="0.3"
              />
              <stop
                offset="100%"
                stopColor="hsl(var(--primary))"
                stopOpacity="0"
              />
            </radialGradient>
          </defs>

          {/* Glowing Aura */}
          <circle cx="200" cy="200" r="150" fill="url(#visual-glow)" />

          {/* Rotating Geometric Shapes */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            <path
              d="M200 80 L320 200 L200 320 L80 200 Z"
              stroke="url(#visual-grad)"
              strokeWidth="2"
              strokeDasharray="10 10"
              opacity="0.5"
            />
            <circle cx="200" cy="80" r="4" fill="hsl(var(--primary))" />
            <circle cx="320" cy="200" r="4" fill="hsl(var(--primary))" />
            <circle cx="200" cy="320" r="4" fill="hsl(var(--primary))" />
            <circle cx="80" cy="200" r="4" fill="hsl(var(--primary))" />
          </motion.g>

          <motion.path
            d="M200 40 L360 200 L200 360 L40 200 Z"
            stroke="url(#visual-grad)"
            strokeWidth="1"
            opacity="0.2"
            animate={{ scale: [1, 1.05, 1], rotate: [0, -5, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Central Core Object */}
          <motion.rect
            x="160"
            y="160"
            width="80"
            height="80"
            rx="12"
            fill="url(#visual-grad)"
            animate={{
              y: [160, 150, 160],
              rotate: [45, 135, 45],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        <div className="mt-12 text-center space-y-4">
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
