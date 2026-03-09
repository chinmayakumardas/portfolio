




"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function Home() {
  const name = useRef<HTMLHeadingElement>(null);
  const role = useRef<HTMLParagraphElement>(null);
  const particles = useRef<HTMLDivElement[]>([]);
  const navMenu = useRef<HTMLDivElement>(null);
  const [navOpen, setNavOpen] = useState(false);

  const menuItems = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(role.current, { y: -50, opacity: 0, duration: 1 }).from(
      name.current,
      { scale: 0.7, opacity: 0, duration: 1.5 },
      "-=0.5"
    );

    const move = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.clientX) / 60;
      const y = (window.innerHeight / 2 - e.clientY) / 60;
      gsap.to(name.current, { x: -x, y: -y, duration: 0.6 });
      gsap.to(role.current, { x: x, y: y, duration: 0.6 });
    };
    window.addEventListener("mousemove", move);

    particles.current.forEach((p) => {
      gsap.to(p, {
        y: "random(-200,200)",
        x: "random(-300,300)",
        duration: "random(12,20)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Smooth dropdown open/close
  useEffect(() => {
    if (navMenu.current) {
      if (navOpen) {
        gsap.fromTo(
          navMenu.current,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.5, ease: "power3.out" }
        );
      } else {
        gsap.to(navMenu.current, { height: 0, opacity: 0, duration: 0.5, ease: "power3.inOut" });
      }
    }
  }, [navOpen]);

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* Floating particles */}
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          ref={(el) => { if (el) particles.current[i] = el!; }}
          className="absolute w-3 h-3 rounded-full"
          style={{
            background: ["#ff0000","#00f2ff","#ffd000","#f43f5e","#ff4d4d"][i % 5],
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Top-left role */}
      <p ref={role} className="absolute top-10 left-10 text-xl md:text-2xl tracking-widest text-white/70 uppercase">
        Frontend Developer
      </p>

      {/* Top-right navigation */}
      <div className="absolute top-10 right-10 z-20">
        <button
          className="bg-white/10 text-white px-4 py-2 rounded hover:bg-white/20 transition"
          onClick={() => setNavOpen(!navOpen)}
        >
          Menu
        </button>

        <div
          ref={navMenu}
          className="overflow-hidden mt-2 bg-black/90 border border-white/20 rounded shadow-lg w-48"
          style={{ height: 0, opacity: 0 }}
        >
          <ul className="flex flex-col text-left text-white p-2">
            {menuItems.map((item) => (
              <li
                key={item.href}
                className="py-1 px-2 cursor-pointer hover:text-red-600 hover:bg-white/10 transition"
                onClick={() => setNavOpen(false)}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom full-width name */}
      <div className="absolute bottom-10 w-full flex justify-center z-10 px-4">
        <h1
          ref={name}
          className="whitespace-nowrap text-[10vw]  font-extrabold uppercase text-center leading-[1]"
        >
          <span className="text-red-600">CHINMAY </span>
          <span className="text-white">KUMAR</span>
        </h1>
      </div>

    </main>
  );
}