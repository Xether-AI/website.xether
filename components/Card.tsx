import { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
}

export function Card({ title, description, children, className = "" }: CardProps) {
  return (
    <div className={`bg-white p-8 ${className}`}>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-sm text-[var(--muted)] mb-4">{description}</p>
      {children}
    </div>
  );
}
