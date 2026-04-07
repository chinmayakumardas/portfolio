
"use client";

import { useState, useEffect } from "react";
import { Code2, Sparkles, Zap, Award, MousePointer } from "lucide-react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x: Math.max(30, Math.min(70, x)), y: Math.max(30, Math.min(70, y)) });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden max-w-screen-2xl mx-auto px-6">
      {/* Deep dark background */}
      <div className="absolute inset-0 " />

      <div className=" px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full">
        
        {/* LEFT CONTENT */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-3xl border border-zinc-700 bg-zinc-900/80 text-sm text-emerald-400 backdrop-blur-md hover:border-emerald-500/40 transition-all">
            <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
            Freelance Developer
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-[76px] font-semibold tracking-[-3px] leading-[1.02]">
            Hi, I&apos;m <span className="text-white">Chinmaya</span>.<br />
            I build <span className="bg-gradient-to-r from-zinc-300 to-white bg-clip-text text-transparent">exceptional digital experiences</span>.
          </h1>

          <p className="text-2xl text-zinc-400 max-w-lg leading-relaxed">
            Clean code. Modern design. Fast, scalable web applications that deliver real value.
          </p>

          <div className="flex items-center gap-10 pt-6 text-zinc-400">
            <div className="flex items-center gap-3 group">
              <Award className="w-7 h-7 text-yellow-400 group-hover:scale-110 transition-transform" />
              <span className="text-lg">4.9 • 45+ happy clients</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Premium with Electric Lightning Glow */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end h-full items-center">
          <div 
            className="relative w-full max-w-[420px] transition-transform duration-700"
            style={{
              transform: `perspective(1000px) rotateX(${(mousePosition.y - 50) * -0.12}deg) rotateY(${(mousePosition.x - 50) * 0.12}deg)`
            }}
          >
            {/* Electric Lightning Glow Layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 via-emerald-400/25 to-violet-500/20 rounded-full blur-[110px] opacity-75 group-hover:opacity-90 transition-all duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-cyan-300/10 to-transparent rounded-full blur-[80px]" />

            {/* Main Icon Container with Lightning Accent */}
            <div className="relative flex items-center justify-center group">
              <div className="absolute -inset-20 bg-gradient-to-br from-cyan-400/20 to-emerald-400/10 rounded-full blur-3xl group-hover:blur-[100px] transition-all duration-700" />
              
              <Code2 
                className="w-[340px] h-[340px] text-zinc-100 drop-shadow-[0_0_40px_rgb(103,232,249)] transition-all duration-500 group-hover:scale-105 group-hover:rotate-[6deg]" 
                strokeWidth={0.8}
              />
            </div>

            {/* Floating Icons with Electric Touch */}
            <div 
              className="absolute -top-12 -left-8 bg-zinc-900/95 border border-cyan-500/30 backdrop-blur-xl rounded-3xl p-6 shadow-2xl hover:border-cyan-400/50 transition-all duration-500"
              style={{ transform: `translate(${mousePosition.x * 0.04}px, ${mousePosition.y * -0.05}px)` }}
            >
              <Sparkles className="w-14 h-14 text-yellow-400 drop-shadow-[0_0_15px_rgb(250,204,21)]" strokeWidth={1.4} />
            </div>

            <div 
              className="absolute -bottom-10 -right-10 bg-zinc-900/95 border border-emerald-500/30 backdrop-blur-xl rounded-3xl p-6 shadow-2xl hover:border-emerald-400/50 transition-all duration-500"
              style={{ transform: `translate(${mousePosition.x * -0.05}px, ${mousePosition.y * 0.04}px)` }}
            >
              <Zap className="w-14 h-14 text-emerald-400 drop-shadow-[0_0_20px_rgb(52,211,153)]" strokeWidth={1.4} />
            </div>

            {/* Subtle mouse hint */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-zinc-500 flex items-center gap-1.5 opacity-50">
              <MousePointer className="w-3 h-3" /> Move to feel the energy
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Trusted By */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-4xl px-6">
        <p className="text-xs uppercase tracking-[4px] text-zinc-500 mb-5 text-center">Trusted by forward-thinking teams</p>
        <div className="flex flex-wrap justify-center gap-x-14 gap-y-4 text-zinc-300 text-2xl font-light tracking-wide">
          <span className="hover:text-white transition-colors">Framer</span>
          <span className="hover:text-white transition-colors">Figma</span>
          <span className="hover:text-white transition-colors">Vercel</span>
          <span className="hover:text-white transition-colors">Webflow</span>
        </div>
      </div>
    </section>
  );
}