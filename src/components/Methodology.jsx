import React from 'react';
import { motion } from 'framer-motion';
import { Database, Filter, PenTool, BarChart3, Binary, ScanSearch } from 'lucide-react';

const Methodology = () => {
  const steps = [
    {
      icon: <Database size={24} />,
      title: "Gathering",
      desc: "Collecting raw data from diverse sources, including on-chain protocols and distributed databases.",
      tag: "Process 01"
    },
    {
      icon: <Filter size={24} />,
      title: "Processing",
      desc: "Cleaning and refining complex datasets to ensure accuracy and structural integrity for analysis.",
      tag: "Process 02"
    },
    {
      icon: <ScanSearch size={24} />,
      title: "Analyzing",
      desc: "Applying mathematical theory and forensic techniques to uncover hidden trends and actionable insights.",
      tag: "Process 03"
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Visualizing",
      desc: "Transforming findings into high-impact narratives that provide clear strategic direction.",
      tag: "Process 04"
    }
  ];

  return (
    <section id="methodology" className="py-32 bg-on-surface text-white relative overflow-hidden">
      {/* Narrative grid background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="grid grid-cols-6 h-full">
           {[...Array(6)].map((_, i) => (
             <div key={i} className="border-r border-white/20"></div>
           ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="space-y-4 mb-20 text-center md:text-left">
           <div className="flex items-center gap-3 justify-center md:justify-start">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary">Chapter II</span>
              <div className="w-12 h-px bg-white/20"></div>
              <span className="text-[10px] font-bold opacity-40 uppercase tracking-[0.3em]">The Analytical Lens</span>
           </div>
           <h2 className="text-5xl md:text-7xl font-black tracking-tighter">The Methodology.</h2>
           <p className="text-xl opacity-60 max-w-2xl font-medium">
             Data is just a library of scattered shards until it's interrogated through a structured forensic framework.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
           {steps.map((step, i) => (
             <motion.div 
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-6 group"
             >
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500 shadow-xl">
                   {step.icon}
                </div>
                <div className="space-y-2">
                   <p className="text-[9px] font-black uppercase tracking-[0.4em] opacity-30">{step.tag}</p>
                   <h4 className="text-xl font-black uppercase tracking-widest">{step.title}</h4>
                   <p className="text-sm opacity-50 font-medium leading-relaxed">
                      {step.desc}
                   </p>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Story Focus Callout */}
        <div className="mt-32 p-12 rounded-[3.5rem] bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-10">
           <div className="space-y-4 max-w-xl text-center md:text-left">
              <h3 className="text-3xl font-black tracking-tight">Focus: On-Chain Forensics</h3>
              <p className="text-lg opacity-60 font-medium">
                My specialization lies at the intersection of Decentralized Finance (DeFi) and rigorous Data Auditing. I track the flows others miss.
              </p>
           </div>
           <div className="flex gap-4">
              <div className="text-center px-8 border-r border-white/10">
                 <p className="text-4xl font-black text-secondary tracking-tighter decoration-secondary underline underline-offset-8">8+</p>
                 <p className="text-[9px] font-black uppercase tracking-widest mt-4 opacity-40">Protocols Audited</p>
              </div>
              <div className="text-center px-8">
                 <p className="text-4xl font-black text-secondary tracking-tighter decoration-secondary underline underline-offset-8">50M+</p>
                 <p className="text-[9px] font-black uppercase tracking-widest mt-4 opacity-40">Transactions Traced</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
