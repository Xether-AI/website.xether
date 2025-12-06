import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
}

export function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none px-8 py-4";
  const variantStyles = {
    primary: "bg-black text-white hover:bg-accent",
    secondary: "border border-black hover:bg-black hover:text-white",
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
