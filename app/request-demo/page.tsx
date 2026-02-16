import Link from "next/link"

import { DemoRequestForm } from "@/components/demo-request-form"

export default function RequestDemoPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
            ← Back to home
          </Link>
          <h1 className="mt-4 text-3xl md:text-4xl font-semibold text-foreground">Request a demo</h1>
          <p className="mt-2 text-muted-foreground">
            Get a walkthrough tailored to your data stack, scale, and compliance needs.
          </p>
        </div>
        <DemoRequestForm />
      </div>
    </main>
  )
}

