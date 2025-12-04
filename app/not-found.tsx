import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-black px-6 py-4">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight">XETHER</Link>
          <div className="flex gap-8 text-sm">
            <Link href="/#features" className="hover:underline">Features</Link>
            <Link href="/docs" className="hover:underline">Docs</Link>
            <Link href="http://localhost:5173" className="px-4 py-2 bg-black text-white hover:bg-[var(--accent)] transition-colors">Launch App</Link>
          </div>
        </nav>
      </header>

      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-9xl font-bold mb-4">404</h1>
          <p className="text-2xl mb-8 text-[var(--muted)]">Page not found</p>
          <Link href="/" className="inline-block px-8 py-4 bg-black text-white hover:bg-[var(--accent)] transition-colors">
            Return Home
          </Link>
        </div>
      </main>

      <footer className="border-t border-black px-6 py-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div>© 2025 Xether AI</div>
          <div className="flex gap-8">
            <Link href="http://localhost:8000/docs" className="hover:underline">API</Link>
            <Link href="https://github.com" className="hover:underline">GitHub</Link>
            <Link href="http://localhost:5173" className="hover:underline">App</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
