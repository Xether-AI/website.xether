import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 bg-[#020617]">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
        <div>© 2025 Xether AI</div>
        <div className="flex gap-8">
          <Link href="http://localhost:8000/docs" className="hover:underline">API</Link>
          <Link href="https://github.com" className="hover:underline">GitHub</Link>
          <Link href="http://localhost:5173" className="hover:underline">App</Link>
        </div>
      </div>
    </footer>
  );
}
