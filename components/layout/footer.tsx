"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";

/* --- SVG ICONS --- */

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M12 0.5C5.73 0.5 0.5 5.73 0.5 12c0 5.09 3.29 9.41 7.86 10.94.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.17a10.9 10.9 0 012.86-.38c.97 0 1.95.13 2.86.38 2.18-1.48 3.14-1.17 3.14-1.17.62 1.57.23 2.73.11 3.02.73.8 1.18 1.82 1.18 3.07 0 4.4-2.7 5.36-5.27 5.64.41.36.77 1.08.77 2.18 0 1.57-.01 2.83-.01 3.21 0 .3.21.66.79.55A10.99 10.99 0 0023.5 12c0-6.27-5.23-11.5-11.5-11.5z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M4.98 3.5C4.98 5 3.9 6.08 2.5 6.08S0 5 0 3.5 1.08.92 2.5.92s2.48 1.08 2.48 2.58zM.5 8.5h4V24h-4V8.5zM8 8.5h3.8v2.1h.05c.53-1 1.85-2.1 3.8-2.1 4.07 0 4.82 2.68 4.82 6.17V24h-4v-7.9c0-1.88-.03-4.3-2.63-4.3-2.64 0-3.05 2.06-3.05 4.18V24H8V8.5z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.29 3.9A12.13 12.13 0 013 4.8a4.28 4.28 0 001.32 5.7 4.2 4.2 0 01-1.94-.54v.05a4.28 4.28 0 003.43 4.2c-.47.13-.97.2-1.48.2-.36 0-.72-.03-1.06-.1a4.29 4.29 0 004 3 8.6 8.6 0 01-5.33 1.84c-.35 0-.7-.02-1.04-.06A12.13 12.13 0 006.56 21c7.87 0 12.18-6.52 12.18-12.18 0-.19 0-.39-.01-.58A8.72 8.72 0 0024 5.5a8.5 8.5 0 01-2.54.7z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3.5A5.5 5.5 0 1017.5 13 5.51 5.51 0 0012 7.5zm0 2A3.5 3.5 0 1115.5 13 3.5 3.5 0 0112 9.5zm4.75-3.75a1.25 1.25 0 11-1.25 1.25 1.25 1.25 0 011.25-1.25z"/>
  </svg>
);

/* --- FOOTER --- */

export default function Footer() {
  return (
    <footer className="border-t">
      
      {/* SAME WIDTH AS HEADER */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold">
          CHINMAYA
        </Link>

        {/* Nav */}
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/about" className="hover:text-foreground transition">About</Link>
          <Link href="/projects" className="hover:text-foreground transition">Projects</Link>
          <Link href="/services" className="hover:text-foreground transition">Services</Link>
          <Link href="/contact" className="hover:text-foreground transition">Contact</Link>
        </div>

        {/* Social */}
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="#"><GithubIcon /></a>
          <a href="#"><LinkedinIcon /></a>
          <a href="#"><TwitterIcon /></a>
          <a href="#"><InstagramIcon /></a>
        </div>

      </div>

      <Separator />

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Chinmaya. All rights reserved.
      </div>

    </footer>
  );
}