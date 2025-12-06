import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#020817",
        fg: "#e5e7eb",
        accent: "#38bdf8",
        border: "#1e293b",
        muted: "#9ca3af",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at top, #1e293b 0%, #020817 45%, #020617 100%)',
      },
    },
  },
};

export default config;
