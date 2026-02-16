import Link from "next/link"
import { redirect } from "next/navigation"

import { LoginForm } from "@/components/auth/login-form"
import { isAuthenticated } from "@/lib/server/session"
import { ArrowLeft } from "lucide-react"

export default async function LoginPage() {
  if (await isAuthenticated()) {
    redirect(process.env.NEXT_PUBLIC_APP_URL || "/")
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-md mx-auto px-6 py-16">
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground flex flex-row">
          <div className="flex flex-row justify-between items-center border rounded-sm px-4 p-2">
            <ArrowLeft />
            Back to home
          </div>
        </Link>
        <h1 className="mt-4 text-3xl font-semibold text-foreground">Sign In</h1>
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

