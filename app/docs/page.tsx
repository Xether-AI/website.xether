import Link from "next/link";
import { Button } from "@/components/Button";

export default function DocsPage() {
  return (
    <div className="flex flex-col">
      <main className="flex-1 flex">
        <aside className="w-64 border-r border-black px-6 py-12 sticky top-0 h-screen overflow-y-auto">
          <nav className="space-y-6">
            <div>
              <h3 className="font-bold mb-2 text-sm">Getting Started</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="#installation" className="hover:underline">Installation</a></li>
                <li><a href="#configuration" className="hover:underline">Configuration</a></li>
                <li><a href="#first-steps" className="hover:underline">First Steps</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-sm">Data Processing</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="#upload" className="hover:underline">Upload Datasets</a></li>
                <li><a href="#pipelines" className="hover:underline">Pipelines</a></li>
                <li><a href="#monitoring" className="hover:underline">Monitoring</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-sm">Document Search</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="#indexing" className="hover:underline">Indexing</a></li>
                <li><a href="#queries" className="hover:underline">Queries</a></li>
                <li><a href="#citations" className="hover:underline">Citations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-sm">API Reference</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="#auth" className="hover:underline">Authentication</a></li>
                <li><a href="#endpoints" className="hover:underline">Endpoints</a></li>
                <li><a href="#errors" className="hover:underline">Error Codes</a></li>
              </ul>
            </div>
          </nav>
        </aside>

        <div className="flex-1 px-12 py-12 max-w-4xl">
          <h1 className="text-5xl font-bold mb-12">Documentation</h1>

          <section id="installation" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Installation</h2>
            <p className="mb-4 text-muted">Prerequisites: Docker, Node.js 18+, 8GB RAM minimum.</p>
            <pre className="bg-black text-white p-6 overflow-x-auto text-sm mb-4">
              {`# Clone repository
git clone <repository-url>
cd xether-ai

# Start backend services
cd backend && docker-compose up -d
cd ../rag && docker-compose up -d

# Start frontend
cd ../frontend && npm install && npm run dev

# Access at http://localhost:5173`}
            </pre>
          </section>

          <section id="configuration" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Configuration</h2>
            <p className="mb-4 text-muted">Environment variables control service behavior.</p>

            <h3 className="text-xl font-bold mb-3 mt-6">Backend (.env)</h3>
            <pre className="bg-black text-white p-6 overflow-x-auto text-sm mb-4">
              {`PORT=8000
DATABASE_URL=postgresql://user:pass@localhost:5432/db
MINIO_ENDPOINT=localhost:9000
REDIS_URL=redis://localhost:6379
JWT_SECRET_KEY=your-secret-key`}
            </pre>

            <h3 className="text-xl font-bold mb-3 mt-6">RAG Service (.env)</h3>
            <pre className="bg-black text-white p-6 overflow-x-auto text-sm mb-4">
              {`PORT=8001
VECTOR_DB_TYPE=chromadb
LLM_PROVIDER=groq
GROQ_API_KEY=your_key_here`}
            </pre>
          </section>

          <section id="first-steps" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">First Steps</h2>
            <ol className="space-y-4 list-decimal list-inside">
              <li className="text-muted">Register account at /register</li>
              <li className="text-muted">Login with credentials</li>
              <li className="text-muted">Upload dataset (CSV, XLSX, JSON)</li>
              <li className="text-muted">Configure cleaning pipeline</li>
              <li className="text-muted">Monitor job execution</li>
              <li className="text-muted">Download cleaned results</li>
            </ol>
          </section>

          <section id="upload" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Upload Datasets</h2>
            <p className="mb-4 text-muted">Supported formats: CSV, XLSX, JSON, Parquet. Max size: 500MB.</p>
            <pre className="bg-black text-white p-6 overflow-x-auto text-sm">
              {`curl -X POST http://localhost:8000/api/v1/datasets/upload \\
  -F "file=@data.csv" \\
  -H "Authorization: Bearer <token>"`}
            </pre>
          </section>

          <section id="pipelines" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Pipelines</h2>
            <p className="mb-4 text-muted">Available operations:</p>
            <ul className="space-y-2 list-disc list-inside text-muted">
              <li>Remove duplicates</li>
              <li>Handle missing values (drop, fill, interpolate)</li>
              <li>Detect outliers (IQR, Z-score)</li>
              <li>Normalize/standardize columns</li>
              <li>Encode categorical variables</li>
              <li>Remove special characters</li>
              <li>Convert data types</li>
            </ul>
          </section>

          <section id="monitoring" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Monitoring</h2>
            <p className="mb-4 text-muted">Real-time job status tracking via WebSocket or polling.</p>
            <pre className="bg-black text-white p-6 overflow-x-auto text-sm">
              {`GET /api/v1/jobs/{job_id}

Response:
{
  "id": 1,
  "status": "completed",
  "progress": 100,
  "rows_processed": 10000,
  "quality_score": 0.95
}`}
            </pre>
          </section>

          <section id="indexing" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Document Indexing</h2>
            <p className="mb-4 text-muted">Upload documents for semantic search. Automatic embedding generation.</p>
            <pre className="bg-black text-white p-6 overflow-x-auto text-sm">
              {`curl -X POST http://localhost:8001/api/v1/documents/upload \\
  -F "file=@document.pdf" \\
  -H "Authorization: Bearer <token>"`}
            </pre>
          </section>

          <section id="queries" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Queries</h2>
            <p className="mb-4 text-muted">Ask questions in natural language. Get AI-generated answers with sources.</p>
            <pre className="bg-black text-white p-6 overflow-x-auto text-sm">
              {`POST /api/v1/queries

{
  "query": "What are the main findings?",
  "collection_id": 1
}

Response:
{
  "answer": "The main findings are...",
  "sources": [
    {"document": "report.pdf", "page": 5}
  ]
}`}
            </pre>
          </section>

          <section id="auth" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Authentication</h2>
            <p className="mb-4 text-muted">JWT-based authentication. Include token in Authorization header.</p>
            <pre className="bg-black text-white p-6 overflow-x-auto text-sm">
              {`POST /api/v1/auth/login

{
  "username": "user",
  "password": "pass"
}

Response:
{
  "access_token": "eyJ...",
  "token_type": "bearer"
}`}
            </pre>
          </section>

          <section id="endpoints" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">API Endpoints</h2>
            <div className="space-y-4">
              <div className="border border-black p-4">
                <code className="font-mono text-sm">GET /api/v1/datasets</code>
                <p className="text-sm text-muted mt-2">List all datasets</p>
              </div>
              <div className="border border-black p-4">
                <code className="font-mono text-sm">POST /api/v1/pipelines/execute</code>
                <p className="text-sm text-muted mt-2">Execute cleaning pipeline</p>
              </div>
              <div className="border border-black p-4">
                <code className="font-mono text-sm">GET /api/v1/jobs/{`{id}`}</code>
                <p className="text-sm text-muted mt-2">Get job status</p>
              </div>
              <div className="border border-black p-4">
                <code className="font-mono text-sm">POST /api/v1/documents/upload</code>
                <p className="text-sm text-muted mt-2">Upload document</p>
              </div>
              <div className="border border-black p-4">
                <code className="font-mono text-sm">POST /api/v1/queries</code>
                <p className="text-sm text-muted mt-2">Query documents</p>
              </div>
            </div>
          </section>

          <section id="errors" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Error Codes</h2>
            <table className="w-full border border-black">
              <thead>
                <tr className="border-b border-black">
                  <th className="text-left p-4 font-bold">Code</th>
                  <th className="text-left p-4 font-bold">Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-black">
                  <td className="p-4 font-mono">400</td>
                  <td className="p-4 text-muted">Bad request</td>
                </tr>
                <tr className="border-b border-black">
                  <td className="p-4 font-mono">401</td>
                  <td className="p-4 text-muted">Unauthorized</td>
                </tr>
                <tr className="border-b border-black">
                  <td className="p-4 font-mono">404</td>
                  <td className="p-4 text-muted">Not found</td>
                </tr>
                <tr className="border-b border-black">
                  <td className="p-4 font-mono">413</td>
                  <td className="p-4 text-muted">File too large</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono">500</td>
                  <td className="p-4 text-muted">Server error</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </main>
    </div>
  );
}
