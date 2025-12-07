"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="border-b border-gray-700 px-6 py-4 sticky top-0 bg-[#020817]/90 backdrop-blur z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight hover:opacity-70 transition-opacity text-white">
          XETHER
        </Link>
        <div className="flex gap-8 text-sm items-center text-gray-300">
          <Link href="/#features" className="hover:underline">Features</Link>
          <Link href="/docs" className="hover:underline">Docs</Link>
          <ThemeToggle />
          <Link 
            href="http://localhost:5173" 
            className="px-4 py-2 rounded-md bg-accent text-black hover:bg-sky-400 transition-colors"
          >
            Launch App
          </Link>
        </div>
      </nav>
    </header>
  );
}
