"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export default function Contact() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground uppercase tracking-wide">
            Contact Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Stay Connected with Us
          </h2>
          <p className="text-muted-foreground mt-3">
            Reach out for inquiries, support, or collaboration—we’d love to hear from you!
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Form */}
          <div className="border rounded-xl p-6 space-y-5">
            
            <div>
              <label className="text-sm font-medium">Name</label>
              <Input placeholder="Enter your name here..." />
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <Input type="email" placeholder="Enter your email here..." />
            </div>

            <div>
              <label className="text-sm font-medium">Budget</label>
              <Input placeholder="Enter the amount" />
            </div>

            <div>
              <label className="text-sm font-medium">Message</label>
              <Textarea placeholder="Enter your message" />
            </div>

            {/* Services */}
            <div>
              <p className="text-sm font-medium mb-2">Services</p>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <label className="flex items-center gap-2">
                  <Checkbox /> Website Design
                </label>
                <label className="flex items-center gap-2">
                  <Checkbox /> UX Design
                </label>
                <label className="flex items-center gap-2">
                  <Checkbox /> Content Creation
                </label>
                <label className="flex items-center gap-2">
                  <Checkbox /> Strategy & Consulting
                </label>
              </div>
            </div>

            <Button className="w-full">Send Message</Button>
          </div>

          {/* Image Section */}
          <div className="relative hidden lg:block">
            <div className="relative h-[500px] w-full overflow-hidden rounded-2xl">
              <Image
                src="https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/contact-us/image-13.png"
                alt="Contact"
                fill
                className="object-cover"
              />
            </div>

            {/* Small Badge */}
            <div className="absolute bottom-4 left-4 bg-background border rounded-xl px-4 py-2 text-sm shadow">
              20+ Daily New Clients
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}