










"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Pencil } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "SERVICES", href: "/services" },
    { name: "PROJECTS", href: "/projects" },
    { name: "BLOG", href: "/blog" },
    { name: "ABOUT ME", href: "/about" },
  ];

  return (
    <header className="w-full bg-black sticky top-0 z-50 ">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-1">
        <div className="flex items-center justify-between relative">
          
          {/* Left - Logo */}
          <Link href="/" className="text-[28px] font-bold tracking-[-1px] text-white">
            CHINMAYA .
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-all duration-200 
                  ${pathname === item.href 
                    ? "text-[#22C55E] font-semibold" 
                    : "text-white/75 hover:text-[#22C55E]"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side - Button + Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Smaller Button */}
            <a
              href="/contact"
              className="hidden md:flex items-center gap-2 
                         bg-[#22C55E] hover:bg-[#16A34A] active:scale-95 
                         transition-all duration-200
                         text-black font-semibold
                         px-6 py-2.5 rounded-full text-sm tracking-wide
                         hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
            >
              LET’S TALK
              <Pencil className="w-4 h-4" />
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setOpen(!open)}
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Border Bottom */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="border-b border-white/30" />
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10">
          <div className="px-6 py-8 flex flex-col gap-6 text-lg font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`${
                  pathname === item.href ? "text-[#22C55E] font-semibold" : "text-white/75"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-6 flex items-center justify-center gap-2 
                         bg-[#22C55E] hover:bg-[#16A34A] text-black 
                         font-semibold py-4 rounded-full text-base 
                         active:scale-95 transition-all"
            >
              LET’S TALK
              <Pencil className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}













