import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, useMotionValue, animate } from 'framer-motion';
import { Database, Filter, PenTool, BarChart3, Binary, ScanSearch } from 'lucide-react';
import { transitions, variants } from '../utils/motion';

const StatCounter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const countMotion = useMotionValue(0);

  // Format string inside useTransform to avoid mixing MotionValue and text in JSX,
  // which crashes React when passing MotionValue as children.
  const displayValue = useTransform(countMotion, (latest) =>
    `${Math.floor(latest).toLocaleString()}${suffix}`
  );
  
  useEffect(() => {
    if (isInView) {
      const end = parseInt(value.replace(/\D/g, ''));
      if (end === 0) return;
      
      // ⚡ Bolt: Using Framer Motion's animate and MotionValue bypasses React re-renders,
      // avoiding ~125 re-renders per counter during the 2-second animation.
      const controls = animate(countMotion, end, {
        duration: 2,
        ease: "easeOut"
      });
      return controls.stop;
    }
  }, [isInView, value, countMotion]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {displayValue}
    </motion.span>
  );
};

const Methodology = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const steps = [
    {
      icon: <Database size={24} />,
      title: "Gathering",
      desc: "Collecting raw data from diverse sources, including on-chain protocols and distributed databases.",
      tag: "01"
    },
    {
      icon: <Filter size={24} />,
      title: "Processing",
      desc: "Cleaning and refining complex datasets to ensure accuracy and structural integrity for analysis.",
      tag: "02"
    },
    {
      icon: <ScanSearch size={24} />,
      title: "Analyzing",
      desc: "Applying mathematical theory and forensic techniques to uncover hidden trends and actionable insights.",
      tag: "03"
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Visualizing",
      desc: "Transforming findings into high-impact narratives that provide clear strategic direction.",
      tag: "04"
    }
  ];

  return (
    <section 
      ref={containerRef}
      id="methodology" 
      className="py-32 bg-surface text-on-surface relative overflow-hidden transition-colors duration-700"
    >
      {/* Narrative grid background - Parallax */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="grid grid-cols-6 h-full">
           {[...Array(6)].map((_, i) => (
             <div key={i} className="border-r border-on-surface/10"></div>
           ))}
        </div>
      </motion.div>
 
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          variants={variants.staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="space-y-4 mb-20 text-center md:text-left"
        >
           <motion.div variants={variants.scanReveal} className="flex items-center gap-3 justify-center md:justify-start">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary">Chapter II</span>
              <div className="w-12 h-px bg-on-surface/20"></div>
              <span className="text-[10px] font-bold opacity-40 uppercase tracking-[0.3em]">The Analytical Lens</span>
           </motion.div>
           <motion.h2 variants={variants.fadeIn} className="text-5xl md:text-8xl font-black tracking-tighter text-on-surface transition-colors duration-700">The Methodology.</motion.h2>
           <motion.p variants={variants.fadeIn} className="text-xl opacity-60 max-w-2xl font-medium">
             Data is just a library of scattered shards until it's interrogated through a structured forensic framework.
           </motion.p>
        </motion.div>
 
        <motion.div 
          variants={variants.staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
           {steps.map((step, i) => (
             <motion.div 
                key={step.title}
                variants={variants.springIn}
                className="space-y-6 group"
             >
                <div className="w-16 h-16 rounded-2xl bg-on-surface/5 border border-on-surface/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500 shadow-xl">
                   {step.icon}
                </div>
                <div className="space-y-2">
                   <p className="text-[9px] font-black uppercase tracking-[0.4em] opacity-30">Process {step.tag}</p>
                   <h4 className="text-xl font-black uppercase tracking-widest text-on-surface transition-colors duration-700">{step.title}</h4>
                   <p className="text-sm opacity-50 font-medium leading-relaxed">
                      {step.desc}
                   </p>
                </div>
             </motion.div>
           ))}
        </motion.div>
 
        {/* Story Focus Callout */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transitions.slowSpring}
          className="mt-32 p-12 rounded-[3.5rem] bg-on-surface/5 border border-on-surface/10 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-10"
        >
           <div className="space-y-4 max-w-xl text-center md:text-left">
              <h3 className="text-3xl font-black tracking-tight text-on-surface transition-colors duration-700">Focus: On-Chain Forensics</h3>
              <p className="text-lg opacity-60 font-medium">
                My specialization lies at the intersection of Decentralized Finance (DeFi) and rigorous Data Auditing. I track the flows others miss.
              </p>
           </div>
           <div className="flex gap-4">
              <div className="text-center px-8 border-r border-on-surface/10">
                 <p className="text-4xl md:text-6xl font-black text-secondary tracking-tighter">
                   <StatCounter value="8" suffix="+" />
                 </p>
                 <p className="text-[9px] font-black uppercase tracking-widest mt-4 opacity-40">Protocols Audited</p>
              </div>
              <div className="text-center px-8">
                 <p className="text-4xl md:text-6xl font-black text-secondary tracking-tighter">
                   <StatCounter value="50M" suffix="M+" />
                 </p>
                 <p className="text-[9px] font-black uppercase tracking-widest mt-4 opacity-40">Transactions Traced</p>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Methodology;
