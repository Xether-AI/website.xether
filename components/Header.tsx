import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-black px-6 py-4 sticky top-0 bg-white z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight hover:opacity-70 transition-opacity">
          XETHER
        </Link>
        <div className="flex gap-8 text-sm items-center">
          <Link href="/#features" className="hover:underline">Features</Link>
          <Link href="/docs" className="hover:underline">Docs</Link>
          <Link 
            href="http://localhost:5173" 
            className="px-4 py-2 bg-black text-white hover:bg-[var(--accent)] transition-colors"
          >
            Launch App
          </Link>
        </div>
      </nav>
    </header>
  );
}
