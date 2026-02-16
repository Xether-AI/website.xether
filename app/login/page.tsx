import Link from "next/link"
import { redirect } from "next/navigation"

import { LoginForm } from "@/components/auth/login-form"
import { isAuthenticated } from "@/lib/server/session"

export default async function LoginPage() {
  if (await isAuthenticated()) {
    redirect(process.env.NEXT_PUBLIC_APP_URL || "/")
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-md mx-auto px-6 py-16">
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to home
        </Link>
        <h1 className="mt-4 text-3xl font-semibold text-foreground">Sign in</h1>
        <p className="mt-2 text-muted-foreground">
          Access your workspace. Use SSO or email/password.
        </p>
        <div className="mt-8">
          <LoginForm />
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-foreground hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </main>
  )
}

