import Link from "next/link";
import { Button } from "@/components/Button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="text-center">
        <h1 className="mb-4 text-9xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          404
        </h1>
        <p className="mb-8 text-2xl text-muted-foreground">
          Page not found
        </p>
        <p className="mb-10 text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button href="/" size="lg">
          <Home className="mr-2 h-4 w-4" />
          Return Home
        </Button>
      </div>
    </div>
  );
}
