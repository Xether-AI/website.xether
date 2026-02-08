"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./Button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 max-w-screen-2xl items-center justify-between px-6">
        <Link 
          href="/" 
          className="flex items-center space-x-2 text-2xl font-bold tracking-tight transition-opacity hover:opacity-80"
        >
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            XETHER
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <Link 
            href="#features" 
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Features
          </Link>
          <Link 
            href="https://docs.xetherai.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Docs
          </Link>
          <ThemeToggle />
          <Button 
            href="http://localhost:5173" 
            className="h-9 px-4 text-sm"
          >
            Launch App
          </Button>
        </div>
      </nav>
    </header>
  );
}
