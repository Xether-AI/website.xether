import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
}

const base =
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default: "bg-black text-white hover:bg-accent",
  outline: "border border-black hover:bg-black hover:text-white",
  ghost: "hover:bg-black/5",
};

const sizes = {
  default: "h-10 px-4 py-2",
  lg: "h-11 px-8 text-base",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        className={cn(base, variants[variant], sizes.lg, className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
