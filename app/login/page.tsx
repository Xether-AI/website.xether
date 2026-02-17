import Link from "next/link";
import { redirect } from "next/navigation";

import { LoginForm } from "@/components/auth/login-form";
import { isAuthenticated } from "@/lib/server/session";
import { ArrowLeft } from "lucide-react";
import { AuthBackground } from "@/components/auth/auth-background";
import { AuthHeroObject } from "@/components/auth/auth-hero-object";

export default async function LoginPage() {
  if (await isAuthenticated()) {
    redirect(process.env.NEXT_PUBLIC_APP_URL || "/");
  }

  return (
    <AuthBackground>
      <div className="max-w-md w-full mx-auto px-6 py-12 flex flex-col items-center">
        <Link
          href="/"
          className="self-start text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <div className="flex items-center gap-2 border border-border/50 rounded-lg px-3 py-1.5 bg-background/50 backdrop-blur-sm">
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </div>
        </Link>

        <AuthHeroObject />

        <div className="w-full space-y-2 text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Sign In
          </h1>
          <p className="text-muted-foreground">Welcome back to Xether AI</p>
        </div>

        <div className="w-full bg-card/50 backdrop-blur-xl border border-border/50 p-8 rounded-2xl shadow-2xl ring-1 ring-white/5">
          <LoginForm />
        </div>

        <p className="mt-8 text-sm text-muted-foreground text-center">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-primary hover:underline font-medium"
          >
            Create one
          </Link>
        </p>
      </div>
    </AuthBackground>
  );
}
