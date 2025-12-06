import type { Metadata } from "next";
import "./globals.css";
import { ClientLayout } from "@/components/ClientLayout";

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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.add(theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-gradient-radial dark:bg-gradient-radial light:bg-gradient-radial-light text-gray-900 dark:text-fg antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
