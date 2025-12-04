import Link from "next/link";
import { Button } from "@/components/Button";

export default function APIPage() {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <section className="px-6 py-24 max-w-7xl mx-auto">
          <h1 className="text-7xl font-bold mb-8 tracking-tight">API Reference</h1>
          <p className="text-xl text-[var(--muted)] max-w-3xl">
            RESTful APIs for data processing and document intelligence. OpenAPI documentation included.
          </p>
        </section>

        <section className="px-6 py-16 border-t border-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-black p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">AI Backend</h3>
                  <span className="text-xs px-3 py-1 bg-black text-white">Port 8000</span>
                </div>
                <p className="text-[var(--muted)] mb-6">Data processing, pipeline execution, job monitoring.</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-mono">/api/v1/datasets</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-mono">/api/v1/pipelines</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-mono">/api/v1/jobs</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-mono">/api/v1/reports</span>
                  </div>
                </div>
                <Button href="http://localhost:8000/docs" className="text-sm px-6 py-3">
                  View Documentation →
                </Button>
              </div>

              <div className="border border-black p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">RAG Service</h3>
                  <span className="text-xs px-3 py-1 bg-black text-white">Port 8001</span>
                </div>
                <p className="text-[var(--muted)] mb-6">Document indexing, semantic search, AI-powered Q&A.</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-mono">/api/v1/documents</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-mono">/api/v1/queries</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-mono">/api/v1/collections</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-mono">/api/v1/embeddings</span>
                  </div>
                </div>
                <Button href="http://localhost:8001/docs" className="text-sm px-6 py-3">
                  View Documentation →
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 border-t border-black bg-black text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Authentication</h2>
            <div className="max-w-3xl">
              <p className="mb-6">JWT-based authentication. Include token in Authorization header.</p>
              <pre className="bg-white text-black p-6 overflow-x-auto text-sm mb-6">
{`POST /api/v1/auth/login
Content-Type: application/json

{
  "username": "user",
  "password": "password"
}

Response:
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "bearer"
}`}
              </pre>
              <p className="text-sm">Use the access token in subsequent requests:</p>
              <pre className="bg-white text-black p-6 overflow-x-auto text-sm mt-4">
{`Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`}
              </pre>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 border-t border-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Common Endpoints</h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-black pl-6">
                <h3 className="text-2xl font-bold mb-2">Upload Dataset</h3>
                <pre className="bg-black text-white p-6 overflow-x-auto text-sm mt-4">
{`POST /api/v1/datasets/upload
Content-Type: multipart/form-data
Authorization: Bearer <token>

file: data.csv

Response:
{
  "id": 1,
  "name": "data.csv",
  "status": "uploaded",
  "file_size": 1024000
}`}
                </pre>
              </div>

              <div className="border-l-4 border-black pl-6">
                <h3 className="text-2xl font-bold mb-2">Execute Pipeline</h3>
                <pre className="bg-black text-white p-6 overflow-x-auto text-sm mt-4">
{`POST /api/v1/pipelines/execute
Content-Type: application/json
Authorization: Bearer <token>

{
  "dataset_id": 1,
  "steps": ["remove_duplicates", "handle_missing"]
}

Response:
{
  "job_id": 1,
  "status": "processing"
}`}
                </pre>
              </div>

              <div className="border-l-4 border-black pl-6">
                <h3 className="text-2xl font-bold mb-2">Upload Document</h3>
                <pre className="bg-black text-white p-6 overflow-x-auto text-sm mt-4">
{`POST /api/v1/documents/upload
Content-Type: multipart/form-data
Authorization: Bearer <token>

file: document.pdf

Response:
{
  "id": 1,
  "filename": "document.pdf",
  "status": "indexing"
}`}
                </pre>
              </div>

              <div className="border-l-4 border-black pl-6">
                <h3 className="text-2xl font-bold mb-2">Query Documents</h3>
                <pre className="bg-black text-white p-6 overflow-x-auto text-sm mt-4">
{`POST /api/v1/queries
Content-Type: application/json
Authorization: Bearer <token>

{
  "query": "What are the main findings?",
  "collection_id": 1
}

Response:
{
  "answer": "The main findings indicate...",
  "sources": [
    {
      "document": "document.pdf",
      "page": 5,
      "relevance": 0.95
    }
  ]
}`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 border-t border-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Response Codes</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="text-left py-4 font-bold">Code</th>
                  <th className="text-left py-4 font-bold">Status</th>
                  <th className="text-left py-4 font-bold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-black">
                  <td className="py-4 font-mono">200</td>
                  <td className="py-4">OK</td>
                  <td className="py-4 text-[var(--muted)]">Request successful</td>
                </tr>
                <tr className="border-b border-black">
                  <td className="py-4 font-mono">201</td>
                  <td className="py-4">Created</td>
                  <td className="py-4 text-[var(--muted)]">Resource created</td>
                </tr>
                <tr className="border-b border-black">
                  <td className="py-4 font-mono">400</td>
                  <td className="py-4">Bad Request</td>
                  <td className="py-4 text-[var(--muted)]">Invalid input</td>
                </tr>
                <tr className="border-b border-black">
                  <td className="py-4 font-mono">401</td>
                  <td className="py-4">Unauthorized</td>
                  <td className="py-4 text-[var(--muted)]">Authentication required</td>
                </tr>
                <tr className="border-b border-black">
                  <td className="py-4 font-mono">404</td>
                  <td className="py-4">Not Found</td>
                  <td className="py-4 text-[var(--muted)]">Resource not found</td>
                </tr>
                <tr className="border-b border-black">
                  <td className="py-4 font-mono">413</td>
                  <td className="py-4">Payload Too Large</td>
                  <td className="py-4 text-[var(--muted)]">File exceeds size limit</td>
                </tr>
                <tr>
                  <td className="py-4 font-mono">500</td>
                  <td className="py-4">Server Error</td>
                  <td className="py-4 text-[var(--muted)]">Internal server error</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="px-6 py-16 border-t border-black bg-black text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Rate Limits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">100</div>
                <div className="text-sm">requests/minute</div>
                <div className="text-xs text-gray-400 mt-2">Per endpoint</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1000</div>
                <div className="text-sm">requests/hour</div>
                <div className="text-xs text-gray-400 mt-2">Per user</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500MB</div>
                <div className="text-sm">max file size</div>
                <div className="text-xs text-gray-400 mt-2">Per upload</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
