"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Error() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      
      {/* Left Section */}
      <div className="flex flex-col items-center justify-center px-6 py-10 text-center">
        
        <h2 className="mb-6 text-5xl font-bold tracking-tight">
          Whoops!
        </h2>

        <h3 className="mb-2 text-2xl md:text-3xl font-semibold">
          Something went wrong
        </h3>

        <p className="text-muted-foreground mb-6 max-w-sm">
          The page you’re looking for doesn’t exist or an error occurred.
          Try going back to the homepage.
        </p>

        <Button asChild size="lg" className="rounded-lg text-base">
          <Link href="/">Back to home page</Link>
        </Button>

      </div>

      {/* Right Section */}
      <div className="relative hidden lg:block p-3">
        
        <div className="h-full w-full rounded-2xl bg-black" />

        <Image
          src="https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/error/image-1.png"
          alt="Error illustration"
          width={400}
          height={400}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />

      </div>
    </div>
  );
}