import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-black px-6 py-4">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight">XETHER</Link>
          <div className="flex gap-8 text-sm">
            <Link href="#features" className="hover:underline">Features</Link>
            <Link href="#docs" className="hover:underline">Docs</Link>
            <Link href="http://localhost:5173" className="px-4 py-2 bg-black text-white hover:bg-[var(--accent)] transition-colors">Launch App</Link>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <section className="px-6 py-32 max-w-7xl mx-auto">
          <h1 className="text-7xl font-bold leading-none mb-8 tracking-tight">
            Data processing.<br/>Document intelligence.<br/>Zero friction.
          </h1>
          <p className="text-xl max-w-2xl mb-12 text-[var(--muted)]">
            AI-powered platform for automated data cleaning and semantic document search. Built for speed.
          </p>
          <div className="flex gap-4">
            <Link href="http://localhost:5173" className="px-8 py-4 bg-black text-white text-lg hover:bg-[var(--accent)] transition-colors">
              Get Started
            </Link>
            <Link href="#features" className="px-8 py-4 border border-black text-lg hover:bg-black hover:text-white transition-colors">
              Learn More
            </Link>
          </div>
        </section>

        <section id="features" className="px-6 py-24 border-t border-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold mb-16">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black">
              <div className="bg-white p-12">
                <h3 className="text-2xl font-bold mb-4">Data Processing</h3>
                <p className="text-[var(--muted)] mb-6">Automated cleaning, validation, transformation. 10+ operations. Real-time monitoring.</p>
                <ul className="space-y-2 text-sm">
                  <li>• Remove duplicates</li>
                  <li>• Handle missing values</li>
                  <li>• Detect outliers</li>
                  <li>• Normalize data</li>
                </ul>
              </div>
              <div className="bg-white p-12">
                <h3 className="text-2xl font-bold mb-4">Document Search</h3>
                <p className="text-[var(--muted)] mb-6">Semantic search with AI. Question answering. Source citations. Multi-format support.</p>
                <ul className="space-y-2 text-sm">
                  <li>• PDF, DOCX, TXT, CSV</li>
                  <li>• Vector embeddings</li>
                  <li>• LLM-powered answers</li>
                  <li>• Citation tracking</li>
                </ul>
              </div>
              <div className="bg-white p-12">
                <h3 className="text-2xl font-bold mb-4">Automation</h3>
                <p className="text-[var(--muted)] mb-6">RAG integration after processing. Real-time notifications. Zero manual steps.</p>
                <ul className="space-y-2 text-sm">
                  <li>• Automatic indexing</li>
                  <li>• Pipeline orchestration</li>
                  <li>• Background processing</li>
                  <li>• Status tracking</li>
                </ul>
              </div>
              <div className="bg-white p-12">
                <h3 className="text-2xl font-bold mb-4">Architecture</h3>
                <p className="text-[var(--muted)] mb-6">Microservices. FastAPI backend. React frontend. PostgreSQL, Redis, MinIO.</p>
                <ul className="space-y-2 text-sm">
                  <li>• REST APIs</li>
                  <li>• Docker deployment</li>
                  <li>• Scalable design</li>
                  <li>• Type-safe</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 border-t border-black bg-black text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold mb-16">Performance</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              <div>
                <div className="text-5xl font-bold mb-2">1M</div>
                <div className="text-sm">rows/minute</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">&lt;2s</div>
                <div className="text-sm">query response</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">100</div>
                <div className="text-sm">pages/minute</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">&lt;100ms</div>
                <div className="text-sm">API latency</div>
              </div>
            </div>
          </div>
        </section>

        <section id="docs" className="px-6 py-24 border-t border-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold mb-16">Quick Start</h2>
            <div className="space-y-8 max-w-3xl">
              <div>
                <h3 className="text-2xl font-bold mb-4">1. Start Services</h3>
                <pre className="bg-black text-white p-6 overflow-x-auto text-sm">
{`cd backend && docker-compose up -d
cd rag && docker-compose up -d
cd frontend && npm install && npm run dev`}
                </pre>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">2. Access Platform</h3>
                <p className="text-[var(--muted)] mb-4">Open http://localhost:5173 in your browser.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">3. Process Data</h3>
                <p className="text-[var(--muted)]">Upload datasets. Configure pipelines. Monitor jobs. Download results.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">4. Search Documents</h3>
                <p className="text-[var(--muted)]">Upload documents. Ask questions. Get AI answers with citations.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 border-t border-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold mb-16">API Endpoints</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-black p-8">
                <h3 className="text-xl font-bold mb-4">AI Backend</h3>
                <p className="text-sm text-[var(--muted)] mb-4">Port 8000</p>
                <ul className="space-y-2 text-sm font-mono">
                  <li>/api/v1/datasets</li>
                  <li>/api/v1/pipelines</li>
                  <li>/api/v1/jobs</li>
                  <li>/api/v1/reports</li>
                </ul>
                <Link href="http://localhost:8000/docs" className="inline-block mt-6 text-sm underline">View Docs →</Link>
              </div>
              <div className="border border-black p-8">
                <h3 className="text-xl font-bold mb-4">RAG Service</h3>
                <p className="text-sm text-[var(--muted)] mb-4">Port 8001</p>
                <ul className="space-y-2 text-sm font-mono">
                  <li>/api/v1/documents</li>
                  <li>/api/v1/queries</li>
                  <li>/api/v1/collections</li>
                  <li>/api/v1/embeddings</li>
                </ul>
                <Link href="http://localhost:8001/docs" className="inline-block mt-6 text-sm underline">View Docs →</Link>
              </div>
            </div>
          </div>
        </section>
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
