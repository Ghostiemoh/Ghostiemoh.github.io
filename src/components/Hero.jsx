import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowDown, Database, Activity, Fingerprint } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-surface">
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
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="space-y-6"
            >
               <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-[0.4em] text-black opacity-30">Chapter I: The Narrative of Numbers</span>
                  <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
                     Muhammad Auwal <br/>
                     <span className="text-black opacity-100">Abdulaziz</span>
                  </h1>
               </div>

               <p className="text-lg text-black/60 font-medium leading-relaxed max-w-xl">
                  I'm a Data Analyst and Blockchain Specialist with a background in Mathematics. I don't just look at numbers—I hunt for the truth hidden inside complex datasets and on-chain protocols. From forensic blockchain research to building predictive models, I find the needle in the noise.
               </p>

               <div className="flex flex-wrap gap-4 pt-4">
                  <motion.a 
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     href="/legacy/resume.html"
                     target="_blank"
                     className="px-8 py-4 bg-white border border-black text-black text-xs font-bold uppercase tracking-widest rounded-full"
                  >
                     View Resume
                  </motion.a>
                  <motion.a 
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     href="mailto:Marvmuhd@gmail.com"
                     className="px-8 py-4 bg-black/5 text-black text-xs font-bold uppercase tracking-widest rounded-full"
                  >
                     Direct Connection
                  </motion.a>
               </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
             <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="card-lowest rounded-[3rem] p-4 bg-surface border border-on-surface/5 flex flex-col gap-6 shadow-sm overflow-hidden"
             >
                <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-on-surface/5">
                   <img 
                     src="/legacy/profile.JPG" 
                     alt="Muhammad Auwal Abdulaziz" 
                     className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                   />
                </div>
                <div className="px-6 pb-6 space-y-4">
                   <div className="flex justify-between items-end">
                      <div>
                         <p className="text-[10px] font-black uppercase tracking-widest text-on-surface/20">Operational Status</p>
                         <p className="text-xl font-black tracking-tighter">Verified Specialist</p>
                      </div>
                      <div className="text-right">
                         <p className="text-[10px] font-black uppercase tracking-widest text-on-surface/20">Extraction</p>
                         <p className="text-xl font-black tracking-tighter text-secondary">99.8%</p>
                      </div>
                   </div>
                   <div className="flex gap-3">
                      <div className="flex-1 h-1 bg-on-surface/5 rounded-full overflow-hidden">
                         <div className="w-[99.8%] h-full bg-secondary" />
                      </div>
                   </div>
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
