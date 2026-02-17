"use client";

import React from "react";
import { motion } from "framer-motion";

export function AuthHeroObject() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative mb-8 w-24 h-24 md:w-32 md:h-32"
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]"
      >
        <defs>
          <linearGradient
            id="hero-obj-grad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" />
          </linearGradient>
          <filter
            id="hero-obj-blur"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feGaussianBlur stdDeviation="5" result="blur" />
          </filter>
        </defs>

        {/* Decorative containing object */}
        <motion.path
          d="M100 20 L180 60 V140 L100 180 L20 140 V60 Z"
          stroke="url(#hero-obj-grad)"
          strokeWidth="2"
          strokeLinejoin="round"
          animate={{
            d: [
              "M100 20 L180 60 V140 L100 180 L20 140 V60 Z",
              "M100 30 L170 70 V130 L100 170 L30 130 V70 Z",
              "M100 20 L180 60 V140 L100 180 L20 140 V60 Z",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <circle
          cx="100"
          cy="100"
          r="40"
          fill="url(#hero-obj-grad)"
          fillOpacity="0.1"
        />
        <circle cx="100" cy="100" r="10" fill="url(#hero-obj-grad)" />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.circle
            key={i}
            r="2"
            fill="hsl(var(--primary))"
            initial={{
              x: 100 + Math.cos(i) * 60,
              y: 100 + Math.sin(i) * 60,
              opacity: 0.2,
            }}
            animate={{
              y: [null, 100 + Math.sin(i) * 60 - 20, null],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </motion.div>
  );
}
