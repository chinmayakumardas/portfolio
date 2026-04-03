"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            Available for next months | 2 slots free
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Crafting <span className="text-muted-foreground">Designs</span><br />
            That Work Harder,<br />
            Think <span className="text-muted-foreground">Bigger.</span>
          </h1>

          {/* Description */}
          <p className="text-muted-foreground max-w-lg">
            I create tailored solutions that engage audiences, elevate your brand,
            and drive growth. Let’s build something impactful together.
          </p>

          {/* CTA */}
          <Button size="lg">Hire Me</Button>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="relative h-[400px] w-full">
            <Image
              src="https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-1.png"
              alt="Hero"
              fill
              className="object-contain"
            />
          </div>
        </div>

      </div>

      {/* Bottom Logos */}
      <div className="max-w-7xl mx-auto px-6 mt-12 flex flex-wrap items-center gap-6 text-muted-foreground text-sm">
        <span>⭐ 4.5 Trusted by 1000+ designers</span>
        <span>DEV</span>
        <span>daily.dev</span>
        <span>Y Combinator</span>
      </div>
    </section>
  );
}