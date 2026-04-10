import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, ArrowDown, Database, Activity, Fingerprint, Mail } from 'lucide-react';
import { transitions, variants } from '../utils/motion';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      id="about" 
      className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-surface"
    >
      {/* Background Story-lines - Parallax */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-on-surface/10 to-transparent"></div>
        <div className="absolute top-[30%] left-[20%] w-[40vw] h-[40vw] bg-secondary/5 rounded-full blur-[150px] animate-pulse"></div>
        
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 w-full">
        <motion.div style={{ opacity }} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          <div className="lg:col-span-8 space-y-12">
            {/* Chapter Indicator with Scan Reveal */}
            <motion.div 
               variants={variants.scanReveal}
               initial="initial"
               whileInView="whileInView"
               className="flex items-center gap-3"
            >
               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary">Chapter I</span>
               <div className="w-12 h-px bg-on-surface/10"></div>
               <span className="text-[10px] font-bold opacity-30 uppercase tracking-[0.3em]">The Noise vs The Needle</span>
            </motion.div>

            {/* Main Headline - Narrative Ingress */}
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={transitions.smooth}
               className="space-y-6"
            >
               <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-[0.4em] text-black opacity-30">The Narrative of Numbers</span>
                  <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
                     Muhammad Auwal <br/>
                     <span className="text-black inline-block relative">
                        Abdulaziz
                        <motion.div 
                          className="absolute -bottom-2 left-0 h-1 bg-secondary"
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ delay: 0.5, duration: 1 }}
                        />
                     </span>
                  </h1>
               </div>

               <p className="text-lg text-black/60 font-medium leading-relaxed max-w-xl">
                  I am an Onchain & Data Analyst with a background in Mathematics. I analyze data and blockchain protocols to find clear insights. From research to predictive modeling, I turn complex information into simple, actionable results.
               </p>

               <div className="flex flex-wrap gap-4 pt-4">
                  <motion.a 
                     whileHover={{ y: -5, scale: 1.02 }}
                     whileTap={{ scale: 0.98 }}
                     href="/legacy/resume.html"
                     target="_blank"
                     className="px-8 py-4 bg-white border border-black text-black text-[10px] font-black uppercase tracking-widest rounded-full transition-shadow hover:shadow-xl"
                  >
                     View Resume
                  </motion.a>
                  <motion.a 
                     whileHover={{ y: -5, scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     href="mailto:Marvmuhd@gmail.com"
                     className="px-8 py-4 bg-secondary text-surface text-[10px] font-black uppercase tracking-widest rounded-full flex items-center gap-3 shadow-[0_15px_30px_rgba(202,255,0,0.2)] hover:shadow-secondary/40 transition-shadow"
                  >
                     <Mail size={14} className="group-hover:rotate-12 transition-transform" />
                     Direct Connection
                  </motion.a>
               </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
             <motion.div 
                style={{ y: y2 }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={transitions.slowSpring}
                className="rounded-[3rem] p-4 bg-surface border border-on-surface/5 flex flex-col gap-6 shadow-2xl overflow-hidden"
             >
                <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-on-surface/5">
                   <img 
                      src="/legacy/profile.JPG" 
                      alt="Muhammad Auwal Abdulaziz" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-40"></div>
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
                         <motion.div 
                            className="h-full bg-secondary"
                            initial={{ width: 0 }}
                            whileInView={{ width: "99.8%" }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                         />
                      </div>
                   </div>
                </div>
             </motion.div>
          </div>

        </motion.div>
      </div>

      {/* Narrative anchor */}
      <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 1, duration: 2 }}
         className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 hidden md:flex"
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
