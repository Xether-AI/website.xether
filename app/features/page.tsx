import Link from "next/link";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

export default function FeaturesPage() {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <section className="px-6 py-24 max-w-7xl mx-auto">
          <h1 className="text-7xl font-bold mb-8 tracking-tight">Features</h1>
          <p className="text-xl text-[var(--muted)] max-w-3xl">
            Everything you need for data processing and document intelligence. Nothing you don't.
          </p>
        </section>

        <section className="px-6 py-16 border-t border-[var(--border)]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Data Processing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--border)]">
              <Card
                title="Upload"
                description="Drag and drop CSV, XLSX, JSON, Parquet files. Up to 500MB. Instant validation."
                className="p-8"
              />
              <Card
                title="Clean"
                description="Remove duplicates, handle missing values, detect outliers, normalize data."
                className="p-8"
              />
              <Card
                title="Transform"
                description="Encode categories, convert types, standardize formats, apply custom rules."
                className="p-8"
              />
              <Card
                title="Monitor"
                description="Real-time progress tracking. Job status updates. Error reporting."
                className="p-8"
              />
              <Card
                title="Report"
                description="Quality scores, statistics, transformation logs, before/after comparisons."
                className="p-8"
              />
              <Card
                title="Export"
                description="Download cleaned data. Multiple formats. Automatic RAG integration."
                className="p-8"
              />
            </div>
          </div>
        </section>

        <section className="px-6 py-16 border-t border-[var(--border)] bg-[#020617] text-[var(--fg)]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Document Search</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Indexing</h3>
                <ul className="space-y-3 text-sm">
                  <li>• PDF, DOCX, TXT, CSV, JSON support</li>
                  <li>• Automatic text extraction</li>
                  <li>• Vector embeddings generation</li>
                  <li>• Chunk optimization</li>
                  <li>• Metadata preservation</li>
                  <li>• Background processing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Querying</h3>
                <ul className="space-y-3 text-sm">
                  <li>• Natural language questions</li>
                  <li>• Semantic similarity search</li>
                  <li>• LLM-powered answers</li>
                  <li>• Source citations</li>
                  <li>• Query history</li>
                  <li>• Context-aware responses</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 border-t border-[var(--border)]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Automation</h2>
            <div className="space-y-8 max-w-3xl">
              <div className="border-l-4 border-[var(--accent)] pl-6">
                <h3 className="text-2xl font-bold mb-2">Pipeline Orchestration</h3>
                <p className="text-[var(--muted)]">Configure multi-step workflows. Automatic execution. Error handling. Retry logic.</p>
              </div>
              <div className="border-l-4 border-[var(--accent)] pl-6">
                <h3 className="text-2xl font-bold mb-2">RAG Integration</h3>
                <p className="text-[var(--muted)]">Cleaned data automatically indexed. Zero manual steps. Instant searchability.</p>
              </div>
              <div className="border-l-4 border-[var(--accent)] pl-6">
                <h3 className="text-2xl font-bold mb-2">Notifications</h3>
                <p className="text-[var(--muted)]">Real-time alerts. Job completion. Error notifications. Status updates.</p>
              </div>
              <div className="border-l-4 border-[var(--accent)] pl-6">
                <h3 className="text-2xl font-bold mb-2">Background Processing</h3>
                <p className="text-[var(--muted)]">Celery workers. Redis queue. Async operations. Scalable architecture.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 border-t border-[var(--border)]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Architecture</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-[var(--border)] p-8 bg-[#020617]/70 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Backend</h3>
                <ul className="space-y-2 text-sm">
                  <li>• FastAPI framework</li>
                  <li>• PostgreSQL database</li>
                  <li>• Redis caching</li>
                  <li>• MinIO object storage</li>
                  <li>• Celery task queue</li>
                  <li>• JWT authentication</li>
                </ul>
              </div>
              <div className="border border-[var(--border)] p-8 bg-[#020617]/70 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Frontend</h3>
                <ul className="space-y-2 text-sm">
                  <li>• React 19</li>
                  <li>• TypeScript</li>
                  <li>• React Query</li>
                  <li>• Tailwind CSS</li>
                  <li>• Vite build tool</li>
                  <li>• Responsive design</li>
                </ul>
              </div>
              <div className="border border-[var(--border)] p-8 bg-[#020617]/70 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">RAG Service</h3>
                <ul className="space-y-2 text-sm">
                  <li>• ChromaDB / Qdrant</li>
                  <li>• OpenAI / Groq LLMs</li>
                  <li>• Sentence transformers</li>
                  <li>• LangChain integration</li>
                  <li>• Vector embeddings</li>
                  <li>• Semantic search</li>
                </ul>
              </div>
              <div className="border border-[var(--border)] p-8 bg-[#020617]/70 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Deployment</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Docker containers</li>
                  <li>• Docker Compose</li>
                  <li>• Environment configs</li>
                  <li>• Health checks</li>
                  <li>• Log aggregation</li>
                  <li>• Horizontal scaling</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 border-t border-[var(--border)] bg-[#020617] text-[var(--fg)]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Security</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Authentication</h3>
                <ul className="space-y-2 text-sm">
                  <li>• JWT tokens</li>
                  <li>• Password hashing</li>
                  <li>• Session management</li>
                  <li>• API keys</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Authorization</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Role-based access</li>
                  <li>• Resource ownership</li>
                  <li>• Permission checks</li>
                  <li>• Scope validation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Protection</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Rate limiting</li>
                  <li>• CORS policies</li>
                  <li>• Input validation</li>
                  <li>• Security headers</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 border-t border-[var(--border)]">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8">Ready to start?</h2>
            <p className="text-xl text-[var(--muted)] mb-12 max-w-2xl mx-auto">
              Get the platform running in minutes. Process data. Search documents. Zero friction.
            </p>
            <div className="flex gap-4 justify-center">
              <Button href="/docs" variant="secondary">
                Read Docs
              </Button>
              <Button href="http://localhost:5173">
                Launch App
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
