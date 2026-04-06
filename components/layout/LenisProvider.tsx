"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize Lenis with valid options only
    const lenis = new Lenis({
      duration: 0.5,             // scroll animation duration
      easing: (t: number) => t,  // linear easing
      smoothWheel: true,          // smooth wheel/touchpad scrolling
      lerp: 0.1,                  // smoothness intensity
      orientation: "vertical",    // scrolling orientation
      gestureOrientation: "vertical", // optional, defaults to vertical
    });

    // Start RAF loop for Lenis
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}