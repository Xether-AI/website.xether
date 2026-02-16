"use client";

import { Button } from "@/components/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Upload, 
  Sparkles, 
  BarChart, 
  Eye, 
  FileText, 
  Download,
  Database,
  Server,
  Cpu,
  Container,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export default function FeaturesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="px-6 py-24 md:py-32">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              Powerful Features for
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Modern Teams</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need for data processing and document intelligence. 
              Nothing you don&apos;t.
            </p>
          </div>
        </div>
      </section>

      {/* Data Processing */}
      <section className="border-t border-border bg-card/50 px-6 py-24">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">Data Processing</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Transform raw data into actionable insights with automated workflows
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="group transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Upload className="h-6 w-6" />
                </div>
                <CardTitle>Upload</CardTitle>
                <CardDescription>
                  Drag and drop CSV, XLSX, JSON, Parquet files. Up to 500MB. Instant validation.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="group transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Sparkles className="h-6 w-6" />
                </div>
                <CardTitle>Clean</CardTitle>
                <CardDescription>
                  Remove duplicates, handle missing values, detect outliers, normalize data.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="group transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <BarChart className="h-6 w-6" />
                </div>
                <CardTitle>Transform</CardTitle>
                <CardDescription>
                  Encode categories, convert types, standardize formats, apply custom rules.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="group transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Eye className="h-6 w-6" />
                </div>
                <CardTitle>Monitor</CardTitle>
                <CardDescription>
                  Real-time progress tracking. Job status updates. Error reporting.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="group transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <FileText className="h-6 w-6" />
                </div>
                <CardTitle>Report</CardTitle>
                <CardDescription>
                  Quality scores, statistics, transformation logs, before/after comparisons.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="group transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Download className="h-6 w-6" />
                </div>
                <CardTitle>Export</CardTitle>
                <CardDescription>
                  Download cleaned data. Multiple formats. Automatic RAG integration.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Document Search */}
      <section className="border-t border-border bg-background px-6 py-24">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">Document Search</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              AI-powered semantic search with intelligent question answering
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Database className="h-5 w-5" />
                  </div>
                  Indexing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    PDF, DOCX, TXT, CSV, JSON support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    Automatic text extraction
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    Vector embeddings generation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    Chunk optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    Metadata preservation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    Background processing
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <FileText className="h-5 w-5" />
                  </div>
                  Querying
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    Natural language questions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    Semantic similarity search
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    LLM-powered answers
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    Source citations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    Query history
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    Context-aware responses
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="border-t border-border bg-card/50 px-6 py-24">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">Enterprise Architecture</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Built on modern, scalable technologies
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Server className="h-6 w-6" />
                </div>
                <CardTitle>Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• FastAPI framework</li>
                  <li>• PostgreSQL database</li>
                  <li>• Redis caching</li>
                  <li>• MinIO object storage</li>
                  <li>• Celery task queue</li>
                  <li>• JWT authentication</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Cpu className="h-6 w-6" />
                </div>
                <CardTitle>Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• React 19</li>
                  <li>• TypeScript</li>
                  <li>• React Query</li>
                  <li>• Tailwind CSS</li>
                  <li>• Vite build tool</li>
                  <li>• Responsive design</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Database className="h-6 w-6" />
                </div>
                <CardTitle>RAG Service</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• ChromaDB / Qdrant</li>
                  <li>• OpenAI / Groq LLMs</li>
                  <li>• Sentence transformers</li>
                  <li>• LangChain integration</li>
                  <li>• Vector embeddings</li>
                  <li>• Semantic search</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Container className="h-6 w-6" />
                </div>
                <CardTitle>Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Docker containers</li>
                  <li>• Docker Compose</li>
                  <li>• Environment configs</li>
                  <li>• Health checks</li>
                  <li>• Log aggregation</li>
                  <li>• Horizontal scaling</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 px-6 py-24">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Ready to Get Started?
            </h2>
            <p className="mb-10 text-xl text-muted-foreground">
              Experience the power of AI-driven data processing and document intelligence.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="http://localhost:5173" size="lg" className="w-full sm:w-auto">
                Launch App
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href="https://docs.xetherai.com" variant="outline" size="lg" className="w-full sm:w-auto" target="_blank" rel="noopener noreferrer">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
