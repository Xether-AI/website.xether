import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
}

export function Button({ href, onClick, variant = "primary", children, className = "" }: ButtonProps) {
  const baseStyles = "px-8 py-4 text-lg transition-colors inline-block";
  const variantStyles = {
    primary: "bg-black text-white hover:bg-[var(--accent)]",
    secondary: "border border-black hover:bg-black hover:text-white"
  };

  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
