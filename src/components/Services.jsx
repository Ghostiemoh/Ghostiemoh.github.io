import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Database, LayoutPanelLeft, SearchCode, ChevronRight } from 'lucide-react';
import { transitions, variants } from '../utils/motion';

const Services = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const services = [
    {
      title: "Blockchain Forensics",
      desc: "Deep-dive investigation of on-chain transactions, fund tracing, and protocol vulnerability mapping.",
      icon: <SearchCode size={32} />,
      specialty: "Forensic Extraction"
    },
    {
      title: "Data Wrangling",
      desc: "Transforming raw, messy datasets into structured formats ready for high-level statistical analysis.",
      icon: <Database size={32} />,
      specialty: "High Integrity"
    },
    {
      title: "BI Architecture",
      desc: "Building intuitive dashboards in Tableau and Power BI that turn complex data into human narratives.",
      icon: <LayoutPanelLeft size={32} />,
      specialty: "Decision Ready"
    },
    {
      title: "Governance Data",
      desc: "On-chain governance monitoring, voter distribution analysis, and treasury flow visualization.",
      icon: <ShieldCheck size={32} />,
      specialty: "Verified Specs"
    }
  ];

  return (
    <section 
      ref={containerRef}
      id="services" 
      className="py-32 bg-surface text-on-surface relative overflow-hidden transition-colors duration-200 ease-out"
    >
      {/* Abstract Parallax background */}
      <motion.div style={{ y }} className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(var(--on-surface-color)) 1px, transparent 0)', backgroundSize: '60px 60px' }}></div>
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <motion.div 
             variants={variants.staggerContainer}
             initial="initial"
             whileInView="whileInView"
             viewport={{ once: true }}
             className="space-y-6 max-w-2xl"
          >
            <motion.div variants={variants.scanReveal} className="flex items-center gap-3">
               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary">Chapter VII</span>
               <div className="w-12 h-px bg-on-surface/20"></div>
            </motion.div>
            <motion.h2 variants={variants.fadeIn} className="text-5xl md:text-7xl font-black tracking-tighter text-on-surface transition-colors duration-700">Technical Services.</motion.h2>
            <motion.p variants={variants.fadeIn} className="text-xl font-medium opacity-60">
              Specialized infrastructure for the Web3 and Data age. Reliable, forensic, and human-centric.
            </motion.p>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="hidden lg:block pb-4"
          >
             <div className="px-6 py-3 rounded-full border border-on-surface/20 text-[10px] font-black uppercase tracking-widest bg-on-surface/5 text-on-surface transition-colors duration-700">
                Current Availability: High Priority Sync
             </div>
          </motion.div>
        </div>

        <motion.div 
          variants={variants.staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((svc, i) => (
            <motion.div
              layout
              key={svc.title}
              variants={variants.springIn}
              whileHover={{ y: -10, borderColor: "var(--secondary)" }}
              className="group p-10 rounded-[3rem] bg-on-surface/5 border border-on-surface/10 hover:bg-on-surface/10 transition-[transform,border-color,background-color] duration-200 ease-out h-full flex flex-col"
            >
              <div className="mb-8 p-4 bg-on-surface/5 rounded-2xl w-fit text-secondary group-hover:bg-secondary group-hover:text-surface transition-colors duration-200 ease-out">
                {svc.icon}
              </div>
              <p className="text-[9px] font-black uppercase tracking-[0.4em] opacity-40 mb-3">{svc.specialty}</p>
              <h3 className="text-2xl font-black tracking-tight mb-4 text-on-surface transition-colors duration-700">{svc.title}</h3>
              <p className="text-sm font-medium opacity-50 leading-relaxed mb-8">
                {svc.desc}
              </p>
              <div className="mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-secondary opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity">
                <span>Deploy Protocol</span>
                <ChevronRight size={14} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
