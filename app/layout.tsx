import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xether AI — Data Processing & Document Intelligence",
  description: "AI-powered data cleaning and semantic document search. No friction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
