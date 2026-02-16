"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { api } from "@/lib/api/client"
import { ApiError } from "@/lib/api/errors"
import { OAuthButtons } from "@/components/auth/oauth-buttons"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

const schema = z.object({
  email: z.string().email("Please enter a valid email."),
  password: z.string().min(8, "Password must be at least 8 characters."),
})

export function LoginForm() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
  })

  const mutation = useMutation({
    mutationFn: api.login,
    onSuccess: () => {
      toast.success("Logged in. Redirecting…")
      const appUrl = process.env.NEXT_PUBLIC_APP_URL || "/"
      window.location.assign(appUrl)
    },
    onError: (err) => {
      const message = err instanceof ApiError ? err.message : "Login failed. Please try again."
      toast.error(message)
    },
  })

  return (
    <div className="space-y-6">
      <OAuthButtons />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((values) => mutation.mutate(values))}
          className="space-y-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="you@company.com" autoComplete="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel>Password</FormLabel>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Forgot?
                  </Link>
                </div>
                <FormControl>
                  <Input type="password" autoComplete="current-password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={mutation.isPending} className="w-full">
            {mutation.isPending ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Signing in…
              </>
            ) : (
              "Sign in"
            )}
          </Button>
        </form>
      </Form>
    </div>
  )
}

