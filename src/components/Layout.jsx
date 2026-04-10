import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Globe, Github, Linkedin, Briefcase, User, Mail, ShieldCheck } from 'lucide-react';

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-secondary/30 selection:text-on-surface">
      {/* Dynamic Header */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${isScrolled ? 'py-4 bg-surface/80 backdrop-blur-2xl border-b border-on-surface/5' : 'py-8 bg-transparent'}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 bg-on-surface rounded-2xl flex items-center justify-center text-surface shadow-xl group-hover:rotate-12 transition-transform duration-500">
               <span className="font-black text-xl tracking-tighter">G</span>
            </div>
            <div className="hidden sm:block">
               <p className="text-[11px] font-black uppercase tracking-[0.4em] leading-none mb-1">Architect</p>
               <p className="text-[10px] font-bold opacity-40 uppercase tracking-[0.2em] leading-none">Protocol v1.0</p>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {['Genesis', 'Archives', 'Intel', 'Directives'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-[11px] font-black uppercase tracking-[0.3em] text-on-surface/60 hover:text-on-surface transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-secondary group-hover:w-full transition-all duration-500"></span>
              </a>
            ))}
            <button className="bg-on-surface text-surface px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-secondary hover:text-white transition-all duration-500 shadow-xl">
               Connect
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button className="md:hidden text-on-surface" onClick={() => setIsMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[200] bg-surface p-8 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center">
               <div className="w-10 h-10 bg-on-surface rounded-2xl flex items-center justify-center text-surface">
                  <span className="font-black text-xl">G</span>
               </div>
               <button onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
            </div>
            
            <div className="flex flex-col gap-12 pt-20">
              {['Genesis', 'Archives', 'Intel', 'Directives'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-5xl font-black tracking-tighter hover:text-secondary transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="space-y-8">
              <div className="h-px bg-on-surface/5 w-full"></div>
              <div className="flex justify-between items-center">
                <p className="text-[11px] font-black uppercase tracking-widest opacity-40">System Active</p>
                <div className="flex gap-6">
                   <Github size={20} className="opacity-40 hover:opacity-100 cursor-pointer" />
                   <Linkedin size={20} className="opacity-40 hover:opacity-100 cursor-pointer" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>{children}</main>

      {/* Archival Footer */}
      <footer className="py-20 bg-surface-bright border-t border-on-surface/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            <div className="col-span-1 md:col-span-2 space-y-8">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-on-surface rounded-2xl flex items-center justify-center text-surface shadow-2xl">
                    <span className="font-black text-2xl tracking-tighter">G</span>
                 </div>
                 <h2 className="text-3xl font-black tracking-tighter">Ghostie Protocol</h2>
              </div>
              <p className="text-lg text-on-surface-variant font-medium leading-relaxed max-w-md opacity-70">
                Architecting digital systems that prioritize clarity over chaos. Built on the principles of high-fidelity engineering and visionary narrative.
              </p>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-on-surface/40">Core Files</h4>
              <nav className="flex flex-col gap-4">
                 {['Vision', 'Repositories', 'Archive', 'Contact'].map(link => (
                   <a key={link} href="#" className="text-sm font-bold hover:text-secondary transition-colors w-fit">{link}</a>
                 ))}
              </nav>
            </div>

            <div className="space-y-6">
               <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-on-surface/40">Social Directives</h4>
               <nav className="flex flex-col gap-4">
                 {['GitHub', 'LinkedIn', 'Twitter', 'Bento'].map(link => (
                   <a key={link} href="#" className="text-sm font-bold flex items-center gap-2 hover:text-secondary transition-colors w-fit">
                     {link} <ArrowUpRight size={14} className="opacity-40" />
                   </a>
                 ))}
              </nav>
            </div>
          </div>

          <div className="mt-20 pt-12 border-t border-on-surface/5 flex flex-col md:flex-row justify-between items-center gap-8">
             <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30">© 2024 Shard West-01. All rights reserved.</p>
             <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-secondary">
                   <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                   Sync Active
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-30">Architected by Antigravity</p>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
