import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, GraduationCap, FileText, ChevronRight, CheckCircle2, BarChart4, Search } from 'lucide-react';
import { transitions, variants } from '../utils/motion';

// ⚡ Bolt: Extracted static array to prevent recreation on every render
const TECHNICAL_SKILLS = ["SQL", "Excel", "Power BI", "Python", "MATLAB", "Data Visualization"];
// ⚡ Bolt: Extracted static array to prevent recreation on every render
const IN_PROGRESS_ITEMS = ["Advanced SQL for Blockchains", "Deep Python for Data Science", "On-chain Governance Research"];

const IntelHub = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const credentials = [
    {
      type: "Academic",
      title: "B.Sc Ed Mathematics",
      org: "Yusuf Maitama Sule University, Kano",
      status: "Lower Second Class Honors",
      link: "#",
      icon: <GraduationCap size={20} />
    },
    {
      type: "Certification · 2026",
      title: "Anthropic Technical Certifications",
      org: "Anthropic",
      status: "Claude Code 101 · Claude 101 · Agent Skills",
      link: "#",
      icon: <Award size={20} />
    },
    {
      type: "Certification · 2025",
      title: "Advanced Data Analytics",
      org: "3MTT · DeepTech · NITDA",
      status: "Data Analysis & Visualization",
      link: "https://app.3mtt.training/verify?id=FE/24/4155597910",
      icon: <BarChart4 size={20} />
    },
    {
      type: "Certification · 2025",
      title: "No Long Ting Web3 & Tech Bootcamp",
      org: "BlockchainLex Group x CryptoMondays",
      status: "Verified Proof",
      link: "/legacy/Certificates/5.jpg",
      icon: <Award size={20} />
    },
    {
      type: "Certification · 2025",
      title: "Digital Literacy for All",
      org: "NITDA",
      status: "Federal Certification",
      link: "/legacy/Certificates/4.html",
      icon: <FileText size={20} />
    },
    {
      type: "Certification · 2023",
      title: "Blockchain Professional (BIP)",
      org: "Dominium Academy x NITDA x BSV",
      status: "Cohort #1",
      link: "/legacy/Certificates/3.png",
      icon: <CheckCircle2 size={20} />
    },
    {
      type: "Certification · 2023",
      title: "Introduction to Data Analytics",
      org: "SkillUp by SimpliLearn",
      status: "Verified Data Analyst",
      link: "/legacy/Certificates/2.jpg",
      icon: <BarChart4 size={20} />
    },
    {
      type: "Certification · 2022",
      title: "Introduction to Cyber Security",
      org: "Academy Halogen",
      status: "Security Certified",
      link: "/legacy/Certificates/1.jpg",
      icon: <Search size={20} />
    }
  ];

  return (
    <section 
      ref={containerRef}
      id="intel" 
      className="py-32 bg-surface relative overflow-hidden"
    >
      {/* Background Archival Depth */}
      <motion.div style={{ y }} className="absolute -left-20 top-0 opacity-[0.03] pointer-events-none select-none whitespace-nowrap">
         <div className="text-[30vw] font-black uppercase text-on-surface leading-none tracking-tighter">PROOF</div>
      </motion.div>
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          <motion.div 
             variants={variants.staggerContainer}
             initial="initial"
             whileInView="whileInView"
             viewport={{ once: true }}
             className="lg:col-span-5 space-y-10"
          >
            <div className="space-y-4">
              <motion.div variants={variants.scanReveal} className="flex items-center gap-3">
                 <span className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary">Chapter IV</span>
                 <div className="w-12 h-px bg-on-surface/10"></div>
                 <span className="text-[10px] font-bold opacity-30 uppercase tracking-[0.3em]">Verified Proof</span>
              </motion.div>
              <motion.h2 variants={variants.fadeIn} className="text-5xl md:text-7xl font-black tracking-tighter">The Verified Ledger.</motion.h2>
              <motion.p variants={variants.fadeIn} className="text-xl font-medium opacity-50 leading-relaxed">
                A track record of academic rigor and specialized protocol training. Every project is backed by a track record of verified results.
              </motion.p>
            </div>

            <motion.div variants={variants.fadeIn} className="p-10 rounded-[2.5rem] bg-on-surface/5 border border-on-surface/5 space-y-6">
               <h4 className="text-[11px] font-black uppercase tracking-[0.3em]">Technical Core</h4>
               <div className="flex flex-wrap gap-3">
                  {TECHNICAL_SKILLS.map(skill => (
                    <motion.span 
                      key={skill}
                      whileHover={{ scale: 1.05, borderColor: "var(--secondary)" }}
                      className="px-5 py-2.5 rounded-full bg-surface text-[10px] font-bold uppercase tracking-widest border border-on-surface/10 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
               </div>
            </motion.div>

            <motion.div variants={variants.fadeIn} className="p-10 rounded-[2.5rem] border border-on-surface/5 space-y-4">
               <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary">Chapter V</span>
                  <span className="text-[10px] font-bold opacity-30 uppercase tracking-[0.3em]">Continuous Evolution</span>
               </div>
               <h4 className="text-2xl font-black tracking-tight">Currently In-Progress.</h4>
               <ul className="space-y-2">
                  {IN_PROGRESS_ITEMS.map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium opacity-60">
                       <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                       {item}
                    </li>
                  ))}
               </ul>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={variants.staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
              {credentials.map((cred, i) => (
                <motion.a 
                   key={cred.title}
                   href={cred.link}
                   target="_blank"
                   rel="noopener noreferrer"
                   variants={variants.fadeIn}
                   className="card-low bg-surface border border-on-surface/5 rounded-[2.5rem] p-8 flex flex-col gap-6 group hover:border-secondary transition-all duration-700 block"
                >
                   <div className="w-12 h-12 rounded-xl bg-on-surface text-surface flex items-center justify-center group-hover:bg-secondary transition-colors duration-500">
                     {cred.icon}
                   </div>
                   <div>
                     <p className="text-[9px] font-black uppercase tracking-[0.4em] text-secondary mb-1">{cred.type}</p>
                     <h4 className="text-xl font-black tracking-tight leading-tight">{cred.title}</h4>
                     <p className="text-sm font-bold opacity-60 mt-1">{cred.org}</p>
                   </div>
                   <div className="mt-auto pt-6 border-t border-on-surface/5 flex justify-between items-center text-[9px] font-black uppercase tracking-widest opacity-30 group-hover:opacity-100 transition-opacity">
                     <span>{cred.status}</span>
                     <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                   </div>
                </motion.a>
              ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default IntelHub;
