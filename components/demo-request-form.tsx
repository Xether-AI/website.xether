"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { api } from "@/lib/api/client";
import { ApiError } from "@/lib/api/errors";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { analytics } from "@/lib/analytics";

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  company: z.string().optional(),
  role: z.string().optional(),
  teamSize: z.string().optional(),
  notes: z.string().optional(),
});

export function DemoRequestForm() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      role: "",
      teamSize: "",
      notes: "",
    },
  });

  const mutation = useMutation({
    mutationFn: api.submitDemoRequest,
    onSuccess: () => {
      toast.success("Demo request received. We’ll reach out soon.");
      analytics.trackFormSubmit("demo_request", "success");
      form.reset();
    },
    onError: (err) => {
      analytics.trackFormSubmit("demo_request", "error");
      const message =
        err instanceof ApiError
          ? err.message
          : "Something went wrong. Please try again.";
      toast.error(message);
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((values) => mutation.mutate(values))}
        className="space-y-5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Jane Doe"
                    autoComplete="name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="jane@company.com"
                    autoComplete="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company (optional)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Acme Inc."
                    autoComplete="organization"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role (optional)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="ML Engineer"
                    autoComplete="organization-title"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="teamSize"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Team size (optional)</FormLabel>
              <FormControl>
                <Input placeholder="e.g. 5–10" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Anything else? (optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="What data sources, scale, compliance needs, timeline…"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={mutation.isPending} className="w-full">
          {mutation.isPending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Submitting…
            </>
          ) : (
            "Request a demo"
          )}
        </Button>
      </form>
    </Form>
  );
}
