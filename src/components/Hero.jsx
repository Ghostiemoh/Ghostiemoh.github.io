import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Shard, Zap, Globe, Cpu } from 'lucide-react';

const Hero = () => {
  return (
    <section id="genesis" className="relative min-h-[110vh] flex flex-col justify-center overflow-hidden pt-32 pb-20">
      {/* Background Ambient Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-10 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] mix-blend-multiply opacity-50 animate-subtle-float"></div>
        <div className="absolute bottom-1/4 -right-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] mix-blend-multiply opacity-30"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Main Narrative - Altman Pivot */}
          <div className="lg:col-span-8 space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="px-5 py-2 rounded-full bg-on-surface text-surface text-[10px] font-black uppercase tracking-[0.4em] shadow-2xl">
                  Protocol 01
                </span>
                <span className="w-px h-6 bg-on-surface/10"></span>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Shard: Lagos // Global Archive</p>
              </div>

              <h1 className="text-responsive-title">
                Engineering <br />
                <span className="text-secondary">The Archival</span> <br />
                Singularity
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-responsive-body max-w-2xl"
            >
              I architect digital systems that harmonize high-fidelity engineering with visionary product strategies. From the precision of the <strong>Ghostie Protocol</strong> to the scale of global financial archives, I build for the singularity of clarity and impact.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-6 items-center"
            >
              <button className="bg-on-surface text-surface btn-premium hover:bg-secondary hover:text-white group shadow-2xl shadow-on-surface/30">
                 Explore Archives 
                 <span className="inline-block transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </button>
              <button className="text-on-surface btn-premium border border-on-surface/10 hover:bg-on-surface/5">
                 View Intel
              </button>
            </motion.div>
          </div>

          {/* Side Intel - Jobs Detail */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 lg:pt-32 hidden lg:block"
          >
            <div className="glass-card p-10 rounded-[3rem] space-y-10 relative overflow-hidden group">
               <div className="absolute -right-10 -top-10 w-40 h-40 bg-secondary/20 rounded-full blur-[50px] group-hover:scale-150 transition-transform duration-1000"></div>
               
               <div className="space-y-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">System Status</p>
                  <div className="flex items-center justify-between">
                     <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Archive Sync</p>
                     <p className="text-sm font-black">99.9%</p>
                  </div>
                  <div className="w-full h-1 bg-on-surface/5 rounded-full overflow-hidden">
                     <motion.div 
                       initial={{ width: 0 }}
                       animate={{ width: '99.9%' }}
                       transition={{ duration: 2, delay: 1 }}
                       className="h-full bg-secondary"
                     ></motion.div>
                  </div>
               </div>

               <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                     <div className="text-on-surface/40 mb-3"><Cpu size={20} /></div>
                     <p className="text-2xl font-black">1.2ms</p>
                     <p className="text-[9px] font-black uppercase tracking-widest opacity-40">Latency</p>
                  </div>
                  <div className="space-y-2">
                     <div className="text-on-surface/40 mb-3"><Globe size={20} /></div>
                     <p className="text-2xl font-black">32</p>
                     <p className="text-[9px] font-black uppercase tracking-widest opacity-40">Nodes</p>
                  </div>
               </div>

               <div className="h-px bg-on-surface/5"></div>

               <p className="text-[11px] font-medium leading-relaxed opacity-60 italic">
                 "We are here to put a dent in the universe. Otherwise why else even be here?"
               </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Directive */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer"
        onClick={() => {
           const next = document.getElementById('archives');
           next?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <p className="text-[9px] font-black uppercase tracking-[0.5em] opacity-30 rotate-90 origin-left ml-2 whitespace-nowrap mb-8 text-on-surface">Initialize Scan</p>
        <div className="w-8 h-12 rounded-full border border-on-surface/10 flex items-center justify-center">
           <div className="w-1 h-2 bg-on-surface/40 rounded-full animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
