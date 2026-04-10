import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowDown, Database, Activity, Fingerprint } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-surface">
      {/* Background Story-lines */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-on-surface/10 to-transparent"></div>
        <div className="absolute top-[10%] left-[10%] w-[30vw] h-[30vw] bg-secondary/5 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          <div className="lg:col-span-8 space-y-12">
            {/* Chapter Indicator */}
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               className="flex items-center gap-3"
            >
               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary">Chapter I</span>
               <div className="w-12 h-px bg-on-surface/10"></div>
               <span className="text-[10px] font-bold opacity-30 uppercase tracking-[0.3em]">The Noise vs The Needle</span>
            </motion.div>

            {/* Main Headline - Jobsian Impact */}
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1, duration: 0.8 }}
               className="space-y-4"
            >
               <h2 className="text-[12px] font-black uppercase tracking-[0.6em] text-on-surface/40 mb-4 ml-1">The Narrative of Numbers</h2>
               <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] text-on-surface">
                 M. Auwal <br />
                 <span className="text-secondary">Abdulaziz.</span>
               </h1>
            </motion.div>

            {/* Altman-inspired Sub-narrative */}
            <motion.p 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.4 }}
               className="text-xl md:text-2xl font-bold text-on-surface-variant max-w-2xl leading-tight"
            >
               Data & Blockchain Specialist. I decipher the chaotic entropy of on-chain networks to extract verified financial intel and strategic insights.
            </motion.p>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.6 }}
               className="flex flex-wrap gap-6 pt-6"
            >
              <a href="#projects" className="bg-on-surface text-surface px-10 py-5 rounded-full font-black text-[11px] uppercase tracking-[0.4em] flex items-center gap-4 hover:bg-secondary hover:text-white transition-all duration-700 shadow-2xl group">
                 Explore Case Files
                 <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#intel" className="border border-on-surface/10 px-10 py-5 rounded-full font-black text-[11px] uppercase tracking-[0.4em] flex items-center gap-4 hover:bg-on-surface/5 transition-all duration-500">
                 The Verified Ledger
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
             <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="card-lowest rounded-[3rem] p-10 bg-surface border border-on-surface/5 flex flex-col gap-8 shadow-sm"
             >
                <div className="flex justify-between items-start">
                   <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
                      <Database size={32} />
                   </div>
                   <div className="text-right">
                      <p className="text-[10px] font-black uppercase tracking-widest text-on-surface/20">Extraction Rate</p>
                      <p className="text-3xl font-black tracking-tighter">99.8%</p>
                   </div>
                </div>

                <div className="space-y-4">
                   <div className="flex items-center gap-4 group">
                      <Activity size={18} className="text-secondary" />
                      <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Real-time Forensics</span>
                   </div>
                   <div className="flex items-center gap-4 group">
                      <Fingerprint size={18} className="text-secondary" />
                      <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Asset Clustering</span>
                   </div>
                </div>

                <div className="pt-4 border-t border-on-surface/5">
                   <p className="text-[11px] font-bold leading-relaxed opacity-50">
                      Processing millions of data shards to build the story of transactional truth.
                   </p>
                </div>
             </motion.div>
          </div>

        </div>
      </div>

      {/* Narrative anchor */}
      <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 1, duration: 2 }}
         className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
         <span className="text-[9px] font-black uppercase tracking-[0.8em] opacity-30">Methodology</span>
         <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }}
         >
            <ArrowDown size={14} className="opacity-20" />
         </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
