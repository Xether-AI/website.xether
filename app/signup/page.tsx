import Link from "next/link"
import { redirect } from "next/navigation"

import { SignupForm } from "@/components/auth/signup-form"
import { isAuthenticated } from "@/lib/server/session"

export default function SignupPage() {
  if (isAuthenticated()) {
    redirect(process.env.NEXT_PUBLIC_APP_URL || "/")
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-md mx-auto px-6 py-16">
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to home
        </Link>
        <h1 className="mt-4 text-3xl font-semibold text-foreground">Create your account</h1>
        <p className="mt-2 text-muted-foreground">
          Start using Xether. You’ll be redirected to the app after signup.
        </p>
        <div className="mt-8">
          <SignupForm />
        </div>
      </div>
    </main>
  )
}

