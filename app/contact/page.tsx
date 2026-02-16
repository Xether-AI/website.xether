import Link from "next/link"

import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
            ← Back to home
          </Link>
          <h1 className="mt-4 text-3xl md:text-4xl font-semibold text-foreground">Contact sales</h1>
          <p className="mt-2 text-muted-foreground">
            Tell us what you’re building. We’ll respond with next steps and a tailored plan.
          </p>
        </div>
        <ContactForm />
      </div>
    </main>
  )
}

