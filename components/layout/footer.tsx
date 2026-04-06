


// Footer.tsx
import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white font-sans border-t border-white/10">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-16">
        
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24">
          
          {/* Left - Big Headline */}
          <div className="max-w-lg">
            <p className="text-5xl md:text-6xl font-bold leading-none tracking-tighter">
              Have a project<br />in mind?
            </p>
            <p className="text-5xl md:text-6xl font-bold leading-none tracking-tighter text-white/70 mt-2">
              Let’s work together.
            </p>
          </div>

          {/* Right Side - Services + Quick Links + Location */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-12 lg:gap-x-20">
            
            {/* Services */}
            <div>
              <p className="uppercase text-xs tracking-[3px] font-medium text-white/60 mb-6">
                Services
              </p>
              <div className="flex flex-col gap-3 text-sm">
                <a href="#services" className="hover:text-white hover:translate-x-1 transition-all duration-300">Website Design</a>
                <a href="#services" className="hover:text-white hover:translate-x-1 transition-all duration-300">Web Development</a>
                <a href="#services" className="hover:text-white hover:translate-x-1 transition-all duration-300">SaaS Development</a>
                <a href="#services" className="hover:text-white hover:translate-x-1 transition-all duration-300">UI/UX Design</a>
                <a href="#services" className="hover:text-white hover:translate-x-1 transition-all duration-300">Freelance Projects</a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <p className="uppercase text-xs tracking-[3px] font-medium text-white/60 mb-6">
                Quick Links
              </p>
              <div className="flex flex-col gap-3 text-sm">
                <a href="#about" className="hover:text-white hover:translate-x-1 transition-all duration-300">About Me</a>
                <a href="#projects" className="hover:text-white hover:translate-x-1 transition-all duration-300">Projects</a>
                <a href="#lab" className="hover:text-white hover:translate-x-1 transition-all duration-300">Lab / Experiments</a>
                <a href="#blog" className="hover:text-white hover:translate-x-1 transition-all duration-300">Blog</a>
                <a href="#contact" className="hover:text-white hover:translate-x-1 transition-all duration-300">Contact</a>
              </div>
            </div>

            {/* Based In + Availability */}
            <div className="md:text-right">
              <p className="uppercase text-xs tracking-[3px] font-medium text-white/60 mb-6">
                Based In
              </p>
              <div className="text-sm leading-relaxed text-white/80">
                Bhubaneswar, Odisha<br />
                India
              </div>

              <div className="mt-10 flex items-center gap-2 md:justify-end">
                <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]"></span>
                <span className="text-sm text-white/70">Available for freelance work</span>
              </div>

              <a
                href="mailto:hello@chinmaya.dev"
                className="mt-6 block text-sm hover:text-white hover:translate-x-1 transition-all duration-300 md:text-right"
              >
                hello@chinmaya.dev
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Social + Copyright */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Social Section - Like Reference Image */}
          <div>
            <p className="uppercase text-xs tracking-[3px] font-medium text-white/60 mb-4">
              OUR SOCIAL:
            </p>
            <div className="flex flex-wrap gap-3">
              <a 
                href="#" 
                className="px-6 py-2.5 border border-white/30 hover:border-white hover:bg-white hover:text-black rounded-full text-xs font-medium tracking-widest uppercase transition-all duration-300 hover:scale-105 active:scale-95"
              >
                LINKEDIN
              </a>
              <a 
                href="#" 
                className="px-6 py-2.5 border border-white/30 hover:border-white hover:bg-white hover:text-black rounded-full text-xs font-medium tracking-widest uppercase transition-all duration-300 hover:scale-105 active:scale-95"
              >
                INSTAGRAM
              </a>
              <a 
                href="#" 
                className="px-6 py-2.5 border border-white/30 hover:border-white hover:bg-white hover:text-black rounded-full text-xs font-medium tracking-widest uppercase transition-all duration-300 hover:scale-105 active:scale-95"
              >
                DRIBBBLE
              </a>
              <a 
                href="#" 
                className="px-6 py-2.5 border border-white/30 hover:border-white hover:bg-white hover:text-black rounded-full text-xs font-medium tracking-widest uppercase transition-all duration-300 hover:scale-105 active:scale-95"
              >
                BEHANCE
              </a>
            </div>
          </div>

          {/* Simplified Copyright */}
          <p className="text-xs text-white/40 text-center md:text-right">
            © 2026 Chinmaya • Bhubaneswar, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;