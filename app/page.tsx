"use client";

import Link from "next/link";
import { Button } from "@/components/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Database, 
  FileSearch, 
  Zap, 
  Shield, 
  TrendingUp, 
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-24 md:py-32 lg:py-40">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50 dark:opacity-30" />
        <div className="container relative z-10 mx-auto max-w-screen-2xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm shadow-sm">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-muted-foreground">AI-Powered Data Intelligence Platform</span>
            </div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                Data Processing.
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Document Intelligence.
              </span>
              <br />
              <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                Zero Friction.
              </span>
            </h1>
            <p className="mb-10 text-xl text-muted-foreground sm:text-2xl">
              Transform your data workflows with AI-powered automation. 
              Process millions of rows, search documents semantically, and get insights in seconds.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="http://localhost:5173" size="lg" className="w-full sm:w-auto">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href="#features" variant="outline" size="lg" className="w-full sm:w-auto">
                Explore Features
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="border-t border-border bg-card/50 px-6 py-24">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Everything You Need
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              A complete platform for data processing and document intelligence. 
              Built for enterprise scale, designed for developer experience.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Database className="h-6 w-6" />
                </div>
                <CardTitle>Data Processing</CardTitle>
                <CardDescription>
                  Automated cleaning, validation, and transformation. 10+ operations with real-time monitoring.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    Remove duplicates
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    Handle missing values
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    Detect outliers
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    Normalize data
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <FileSearch className="h-6 w-6" />
                </div>
                <CardTitle>Document Search</CardTitle>
                <CardDescription>
                  Semantic search with AI. Question answering with source citations. Multi-format support.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    PDF, DOCX, TXT, CSV
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    Vector embeddings
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    LLM-powered answers
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    Citation tracking
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Zap className="h-6 w-6" />
                </div>
                <CardTitle>Automation</CardTitle>
                <CardDescription>
                  RAG integration after processing. Real-time notifications. Zero manual steps required.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    Automatic indexing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    Pipeline orchestration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    Background processing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    Status tracking
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Shield className="h-6 w-6" />
                </div>
                <CardTitle>Enterprise Ready</CardTitle>
                <CardDescription>
                  Microservices architecture. FastAPI backend. Scalable design with Docker deployment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    REST APIs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    Docker deployment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    Scalable design
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    Type-safe
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="border-t border-border bg-gradient-to-b from-card to-background px-6 py-24">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Built for Performance
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Enterprise-grade performance metrics that scale with your business needs.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <TrendingUp className="h-8 w-8" />
              </div>
              <div className="mb-2 text-5xl font-bold text-foreground">1M</div>
              <div className="text-sm text-muted-foreground">rows/minute</div>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Zap className="h-8 w-8" />
              </div>
              <div className="mb-2 text-5xl font-bold text-foreground">&lt;2s</div>
              <div className="text-sm text-muted-foreground">query response</div>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <BarChart3 className="h-8 w-8" />
              </div>
              <div className="mb-2 text-5xl font-bold text-foreground">100</div>
              <div className="text-sm text-muted-foreground">pages/minute</div>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Shield className="h-8 w-8" />
              </div>
              <div className="mb-2 text-5xl font-bold text-foreground">&lt;100ms</div>
              <div className="text-sm text-muted-foreground">API latency</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="border-t border-border bg-card px-6 py-24">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Why Choose Xether AI?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                We've built the platform that enterprises trust for mission-critical data operations. 
                Our architecture scales from startup to Fortune 500, with the same developer experience.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Zero Configuration</h3>
                    <p className="text-muted-foreground">
                      Get started in minutes. No complex setup, no infrastructure management. 
                      Just upload and process.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Enterprise Security</h3>
                    <p className="text-muted-foreground">
                      JWT authentication, role-based access control, and end-to-end encryption. 
                      Your data stays secure.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Scalable Architecture</h3>
                    <p className="text-muted-foreground">
                      Microservices design with horizontal scaling. Process terabytes of data 
                      without breaking a sweat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Start</CardTitle>
                  <CardDescription>Get up and running in minutes</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
{`# Start services
docker-compose up -d

# Access platform
http://localhost:5173

# Process data
Upload → Configure → Monitor → Download`}
                  </pre>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>API Integration</CardTitle>
                  <CardDescription>RESTful APIs for every operation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between rounded-md bg-muted p-2">
                      <code className="text-xs">POST /api/v1/datasets</code>
                      <span className="text-muted-foreground">Upload</span>
                    </div>
                    <div className="flex items-center justify-between rounded-md bg-muted p-2">
                      <code className="text-xs">POST /api/v1/pipelines</code>
                      <span className="text-muted-foreground">Process</span>
                    </div>
                    <div className="flex items-center justify-between rounded-md bg-muted p-2">
                      <code className="text-xs">GET /api/v1/jobs</code>
                      <span className="text-muted-foreground">Monitor</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 px-6 py-24">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Ready to Transform Your Data Workflows?
            </h2>
            <p className="mb-10 text-xl text-muted-foreground">
              Join forward-thinking companies using Xether AI to process data faster, 
              search smarter, and scale effortlessly.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="http://localhost:5173" size="lg" className="w-full sm:w-auto">
                Start Free Trial
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
