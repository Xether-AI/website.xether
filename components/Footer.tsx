import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto max-w-screen-2xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              XETHER AI
            </h3>
            <p className="text-sm text-muted-foreground">
              AI-powered data processing and document intelligence platform. Built for speed, designed for scale.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#features" className="transition-colors hover:text-foreground">
                  Features
                </Link>
              </li>
              <li>
                <Link href="http://localhost:5173" className="transition-colors hover:text-foreground">
                  Launch App
                </Link>
              </li>
              <li>
                <Link href="https://docs.xetherai.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="http://localhost:8000/docs" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>© 2025 Xether AI</li>
              <li className="text-xs text-muted-foreground/70">
                All rights reserved
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
