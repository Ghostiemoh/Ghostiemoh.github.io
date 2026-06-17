import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTENT_MATRIX } from '../utils/content';

const Hero = ({ activeMode }) => {
  const content = CONTENT_MATRIX[activeMode];

  return (
    <section id="about" className="h-screen flex flex-col items-center justify-center relative overflow-hidden bg-surface transition-colors duration-200 ease-out">
      {/* Background Archival Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <div className="h-full w-full bg-[linear-gradient(rgba(var(--on-surface-color),0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--on-surface-color),0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      {/* Dynamic Scanning Line */}
      <motion.div 
        animate={{ y: ["-100%", "200%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-0 h-[2px] bg-secondary/30 shadow-[0_0_25px_rgba(212,175,55,0.5)] z-0 pointer-events-none"
      />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        className="text-center space-y-8 z-10 px-6"
      >
        <div className="space-y-4">
           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="flex items-center justify-center gap-3 mb-4"
           >
              <div className="h-px w-8 bg-secondary/50" />
              <span className="text-[10px] font-black uppercase text-secondary tracking-[0.8em]">Operational Profile</span>
              <div className="h-px w-8 bg-secondary/50" />
           </motion.div>

           <h1 className="text-6xl md:text-[8vw] font-black tracking-tighter leading-[0.8] text-on-surface uppercase transition-colors duration-200 ease-out">
             Muhammad<br />Auwal
           </h1>
           
           <div className="flex items-center justify-center gap-4 py-2">
              <span className="text-on-surface/20 text-[10px] font-bold uppercase tracking-[0.3em] transition-colors duration-200 ease-out">Protocol Identity:</span>
              <span className="text-secondary font-black uppercase tracking-[0.2em] text-sm italic">"Ghostly Shadow"</span>
           </div>
        </div>

        <div className="h-20 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeMode}
              initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              className="text-lg md:text-2xl font-bold text-on-surface/60 max-w-2xl leading-relaxed tracking-tight transition-colors duration-200 ease-out"
            >
              {content.hero}
            </motion.p>
          </AnimatePresence>
        </div>
      </motion.div>
      
      {/* Visual Grain Layer */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
};

export default Hero;
