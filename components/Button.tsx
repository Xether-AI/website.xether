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
    primary: "bg-black dark:bg-black light:bg-blue-600 text-white hover:bg-accent dark:hover:bg-accent light:hover:bg-blue-700",
    secondary: "border border-black dark:border-black light:border-gray-300 hover:bg-black hover:text-white dark:hover:bg-black dark:hover:text-white light:hover:bg-gray-100 light:hover:text-gray-900",
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
