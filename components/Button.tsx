import Link from "next/link";
import { ReactNode } from "react";
import { Button as UiButton } from "@/components/ui/button";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
}

export function Button({ href, onClick, variant = "primary", children, className = "" }: ButtonProps) {
  if (href) {
    return (
      <Link href={href}>
        <UiButton
          asChild={false}
          variant={variant === "primary" ? "default" : "outline"}
          className={className + " px-8 py-4 text-lg"}
        >
          {children}
        </UiButton>
      </Link>
    );
  }

  return (
    <UiButton
      onClick={onClick}
      variant={variant === "primary" ? "default" : "outline"}
      className={className + " px-8 py-4 text-lg"}
    >
      {children}
    </UiButton>
  );
}
