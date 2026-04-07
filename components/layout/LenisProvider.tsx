"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.3, // use ONLY lerp (recommended)
      smoothWheel: true,
      // smoothTouch: false, // important: disable for mobile
    });

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId); // ✅ stop loop
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}