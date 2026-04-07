




// Footer.tsx
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white font-sans border-t border-white/25">
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

          {/* Right Side */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-12 lg:gap-x-20">
            
            {/* Services */}
            <div>
              <p className="uppercase text-xs tracking-[3px] font-medium text-white/60 mb-6">
                Services
              </p>
              <div className="flex flex-col gap-3 text-sm">
                <Link href="/services" className="hover:text-white hover:translate-x-1 transition-all duration-300">Website Design</Link>
                <Link href="/services" className="hover:text-white hover:translate-x-1 transition-all duration-300">Web Development</Link>
                <Link href="/services" className="hover:text-white hover:translate-x-1 transition-all duration-300">SaaS Development</Link>
                <Link href="/services" className="hover:text-white hover:translate-x-1 transition-all duration-300">UI/UX Design</Link>
                <Link href="/services" className="hover:text-white hover:translate-x-1 transition-all duration-300">Landing Page</Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <p className="uppercase text-xs tracking-[3px] font-medium text-white/60 mb-6">
                Quick Links
              </p>
              <div className="flex flex-col gap-3 text-sm">
                <Link href="/about" className="hover:text-white hover:translate-x-1 transition-all duration-300">About Me</Link>
                <Link href="/projects" className="hover:text-white hover:translate-x-1 transition-all duration-300">Projects</Link>
                <Link href="/lab" className="hover:text-white hover:translate-x-1 transition-all duration-300">Lab / Experiments</Link>
                <Link href="/blog" className="hover:text-white hover:translate-x-1 transition-all duration-300">Blog</Link>
                <Link href="/contact" className="hover:text-white hover:translate-x-1 transition-all duration-300">Contact</Link>
              </div>
            </div>

            {/* Location */}
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
                <span className="text-sm text-white/70">
                  Available for freelance work
                </span>
              </div>

              <Link
                href="mailto:chinmayakumardas07@gmail.com"
                className="mt-6 block text-sm hover:text-white hover:translate-x-1 transition-all duration-300 md:text-right"
              >
                chinmayakumardas07@gmail.com
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Social */}
          <div>
            <p className="uppercase text-xs tracking-[3px] font-medium text-white/60 mb-4">
              SOCIAL:
            </p>
            <div className="flex flex-wrap gap-3">

              <Link 
                href="https://www.linkedin.com/in/chinmayakumardas2/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 border border-white/30 hover:border-white hover:bg-white hover:text-black rounded-full text-xs font-medium tracking-widest uppercase transition-all duration-300 hover:scale-105 active:scale-95"
              >
                LINKEDIN
              </Link>

              <Link 
                href="https://medium.com/@chinmayakumardas07"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 border border-white/30 hover:border-white hover:bg-white hover:text-black rounded-full text-xs font-medium tracking-widest uppercase transition-all duration-300 hover:scale-105 active:scale-95"
              >
                MEDIUM
              </Link>

              <Link 
                href="https://github.com/chinmayakumardas"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 border border-white/30 hover:border-white hover:bg-white hover:text-black rounded-full text-xs font-medium tracking-widest uppercase transition-all duration-300 hover:scale-105 active:scale-95"
              >
                GITHUB
              </Link>

              <Link 
                href="https://www.behance.net/chinmayakumar7"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 border border-white/30 hover:border-white hover:bg-white hover:text-black rounded-full text-xs font-medium tracking-widest uppercase transition-all duration-300 hover:scale-105 active:scale-95"
              >
                BEHANCE
              </Link>

            </div>
          </div>

          {/* Copyright */}
         <p className="text-xs text-white/40 text-center md:text-right">
  © {new Date().getFullYear()} Chinamaya. All rights reserved.
</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;