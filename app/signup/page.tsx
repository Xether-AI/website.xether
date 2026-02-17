import Link from "next/link";
import { redirect } from "next/navigation";

import { SignupForm } from "@/components/auth/signup-form";
import { isAuthenticated } from "@/lib/server/session";
import { ArrowLeft } from "lucide-react";
import { AuthSplitLayout } from "@/components/auth/auth-split-layout";

export default async function SignupPage() {
  if (await isAuthenticated()) {
    redirect(process.env.NEXT_PUBLIC_APP_URL || "/");
  }

  return (
    <AuthSplitLayout>
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        <Link
          href="/"
          className="self-start text-sm text-muted-foreground hover:text-foreground transition-all mb-12 flex items-center gap-2 group"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-full border border-border/50 bg-background/50 group-hover:border-primary/50 transition-colors">
            <ArrowLeft className="h-4 w-4" />
          </div>
          Back to home
        </Link>

        <div className="w-full space-y-2 mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Create your account
          </h1>
          <p className="text-muted-foreground text-lg">
            Start using Xether. You&apos;ll be redirected to the app after
            signup.
          </p>
        </div>

        <div className="w-full">
          <SignupForm />
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-primary hover:underline font-semibold"
          >
            Sign in here
          </Link>
        </p>
      </div>
    </AuthSplitLayout>
  );
}
