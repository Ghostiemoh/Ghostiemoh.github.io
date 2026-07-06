import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { Menu, X, Github, Twitter, Linkedin, Terminal, ShieldCheck, Sun, Moon } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Narrative Progress Tracking
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // BOLT: Optimize scroll progress rendering by using useTransform instead of state
  // This prevents the entire Layout component from re-rendering on every scroll event
  const displayPercent = useTransform(scrollYProgress, (v) => Math.round(v * 100));
  const displayPercentString = useTransform(displayPercent, (v) => `${v}%`);

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
           <motion.span className="text-[10px] font-black tabular-nums text-secondary min-w-[3ch]">
             {displayPercentString}
           </motion.span>
        </div>
      </div>


      {/* Jobs-Inspired Header */}
      <header className={cn(
        "fixed top-0 w-full z-[100] transition-[background-color,border-color,height] duration-200 ease-out h-24 flex items-center px-6 md:px-12",
        isScrolled ? "bg-surface/80 backdrop-blur-2xl border-b border-on-surface/5" : "bg-transparent"
      )}>
        <div className="max-w-[1400px] w-full mx-auto flex justify-between items-center gap-4">
          <motion.a 
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-4 group shrink-0 active:scale-[0.97] transition-transform duration-100 ease-out"
          >
            <div className="w-10 h-10 rounded-xl bg-on-surface flex items-center justify-center text-surface group-hover:bg-secondary transition-all duration-500 shadow-xl">
               <Terminal size={18} />
            </div>
            <div className="flex flex-col">
               <span className="text-[11px] xl:text-sm font-black tracking-tighter uppercase whitespace-nowrap">Muhammad Auwal Abdulaziz</span>
               <span className="text-[8px] xl:text-[10px] font-bold text-secondary uppercase tracking-[0.2em] whitespace-nowrap">"Ghostly Shadow"</span>
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ delay: i * 0.05 }}
                className="text-[9px] xl:text-[10px] font-black uppercase tracking-[0.1em] xl:tracking-[0.2em] text-on-surface/60 hover:text-secondary transition-[color,transform] duration-200 ease-out whitespace-nowrap"
              >
                {link.name}
              </motion.a>
            ))}
            
            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-xl border border-on-surface/10 hover:border-secondary/40 text-on-surface/60 hover:text-secondary transition-all cursor-pointer flex items-center justify-center shrink-0"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </motion.button>

            <div className="hidden xl:block w-px h-6 bg-on-surface/10 mx-2"></div>
            <div className="flex gap-6">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-on-surface/40 hover:text-secondary transition-colors duration-200"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden w-12 h-12 rounded-full border border-on-surface/10 flex items-center justify-center text-on-surface active:scale-[0.95] transition-transform duration-100 ease-out"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Open mobile menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Shard */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            id="mobile-menu"
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
               
               {/* Mobile Theme Toggle */}
               <button
                 onClick={toggleTheme}
                 className="p-2 border border-on-surface/10 rounded-xl text-on-surface/60 hover:text-secondary ml-auto mr-4 cursor-pointer flex items-center justify-center active:scale-[0.95] transition-transform duration-100 ease-out"
                 aria-label="Toggle theme"
               >
                 {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
               </button>
 
               <button 
                 className="w-12 h-12 rounded-full border border-on-surface/10 flex items-center justify-center active:scale-[0.95] transition-transform duration-100 ease-out"
                 onClick={() => setMobileMenuOpen(false)}
                 aria-label="Close mobile menu"
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
                  className="text-4xl md:text-6xl font-black tracking-tighter hover:text-secondary active:scale-[0.98] transition-[color,transform] duration-200 ease-out"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="flex justify-between items-center pb-10">
               <div className="flex gap-8">
                  {socialLinks.map((social, i) => (
                    <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="text-on-surface/40">{social.icon}</a>
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
            <span className="text-xs sm:text-sm font-black tracking-tighter uppercase text-center sm:text-left text-white">Muhammad Auwal Abdulaziz</span>
            <span className="text-[8px] sm:text-[10px] font-bold text-secondary uppercase tracking-[0.4em] text-center sm:text-left">"Ghostly Shadow" • Protocol Specialist</span>
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
