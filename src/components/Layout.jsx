import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Github, Twitter, Linkedin, Terminal, ShieldCheck } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Narrative Progress Tracking
  const { scrollYProgress } = useScroll();
  const progressPercent = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [displayPercent, setDisplayPercent] = useState(0);

  useEffect(() => {
    return scrollYProgress.onChange((v) => setDisplayPercent(Math.round(v * 100)));
  }, [scrollYProgress]);


  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Narrative', href: '#about' },
    { name: 'Methodology', href: '#methodology' },
    { name: 'Gallery', href: '#projects' },
    { name: 'Credentials', href: '#intel' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Directives', href: '#directives' },
    { name: 'Resume', href: '/legacy/resume.html', external: true },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: <Github size={18} />, href: 'https://github.com/Ghostiemoh' },
    { name: 'Twitter', icon: <Twitter size={18} />, href: 'https://twitter.com/Ghostieemoh' },
    { name: 'LinkedIn', icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/Ghostieemoh' },
  ];

  return (
    <div className="min-h-screen bg-surface selection:bg-secondary/30 selection:text-on-surface">
      {/* Narrative Progress HUD - Desktop Only */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[101] hidden lg:flex flex-col items-center gap-6 mix-blend-difference">
        <div className="h-40 w-[1px] bg-white/10 relative">
           <motion.div 
             className="absolute top-0 left-0 w-full bg-secondary origin-top"
             style={{ scaleY }}
           />
        </div>
        <div className="rotate-90 flex items-center gap-3 w-max">
           <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20 whitespace-nowrap">System Analysis</span>
           <span className="text-[10px] font-black tabular-nums text-secondary min-w-[3ch]">
             {displayPercent}%
           </span>
        </div>
      </div>


      {/* Jobs-Inspired Header */}
      <header className={cn(
        "fixed top-0 w-full z-[100] transition-all duration-700 h-24 flex items-center px-6 md:px-12",
        isScrolled ? "bg-surface/80 backdrop-blur-2xl border-b border-on-surface/5" : "bg-transparent"
      )}>
        <div className="max-w-[1400px] w-full mx-auto flex justify-between items-center gap-4">
          <motion.a 
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 group shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-on-surface flex items-center justify-center text-surface group-hover:bg-secondary transition-all duration-500 shadow-xl">
               <Terminal size={18} />
            </div>
            <div className="flex flex-col">
               <span className="text-[11px] xl:text-sm font-black tracking-tighter uppercase whitespace-nowrap">Muhammad Auwal Abdulaziz</span>
               <span className="text-[8px] xl:text-[10px] font-bold opacity-40 uppercase tracking-[0.2em] whitespace-nowrap">Onchain & Data Analyst</span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-end gap-3 xl:gap-6 ml-auto shrink">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-[9px] xl:text-[10px] font-black uppercase tracking-[0.1em] xl:tracking-[0.2em] text-on-surface/60 hover:text-secondary transition-colors whitespace-nowrap"
              >
                {link.name}
              </motion.a>
            ))}
            <div className="hidden xl:block w-px h-6 bg-on-surface/10 mx-2"></div>
            <div className="flex gap-6">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${social.name}`}
                  className="text-on-surface/40 hover:text-secondary transition-all duration-500 hover:scale-110"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button 
            aria-label="Open mobile menu"
            aria-expanded={mobileMenuOpen}
            className="lg:hidden w-12 h-12 rounded-full border border-on-surface/10 flex items-center justify-center text-on-surface"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Shard */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[110] bg-surface p-6 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center">
               <div className="flex items-center gap-3">
                  <Terminal size={20} />
                  <span className="text-[11px] font-black uppercase tracking-[0.4em]">Protocol Menu</span>
               </div>
               <button 
                 aria-label="Close mobile menu"
                 className="w-12 h-12 rounded-full border border-on-surface/10 flex items-center justify-center"
                 onClick={() => setMobileMenuOpen(false)}
               >
                 <X size={20} />
               </button>
            </div>
            <nav className="flex flex-col gap-8 py-20">
              {navLinks.map((link, i) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-4xl md:text-6xl font-black tracking-tighter hover:text-secondary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="flex justify-between items-center pb-10">
               <div className="flex gap-8">
                  {socialLinks.map((social, i) => (
                    <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${social.name}`} className="text-on-surface/40">{social.icon}</a>
                  ))}
               </div>
               <span className="text-[10px] font-bold opacity-30 uppercase tracking-[0.5em]">v1.0.24</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-24">{children}</main>

      {/* Archival Footer */}
      <footer className="py-20 bg-surface border-t border-on-surface/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start gap-3">
            <span className="text-xs sm:text-sm font-black tracking-tighter uppercase text-center sm:text-left">Muhammad Auwal Abdulaziz</span>
            <span className="text-[8px] sm:text-[10px] font-bold opacity-30 uppercase tracking-[0.4em] text-center sm:text-left">Onchain & Data Analyst • 2026 Archive</span>
          </div>
          <div className="flex gap-10">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-[9px] font-black uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity">{link.name}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
