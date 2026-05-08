import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, Database, Search, ArrowRight, BarChart4 } from 'lucide-react';
import { transitions, variants } from '../utils/motion';

const ProjectGrid = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const caseFiles = [
    {
      id: "SD-01",
      title: "Solana Fraud Detection",
      category: "Blockchain Forensics",
      description: "Forensic analysis of fraudulent activities on the Solana network, identifying malicious patterns and protective protocols.",
      tags: ["Forensics", "Solana", "Blockchain"],
      icon: <Search size={24} />,
      link: "https://docs.google.com/document/d/1pxf4EtWhSU6DWerlkD1fG8HMcj1QWlvBH3YYWmuYbec/edit?usp=sharing",
      github: "https://github.com/Ghostiemoh"
    },
    {
      id: "MA-02",
      title: "MarginFi Protocol Analytics",
      category: "Protocol Intelligence",
      description: "In-depth research into borrowing, lending, and yield strategies within the MarginFi ecosystem.",
      tags: ["DeFi", "Analytics", "MarginFi"],
      icon: <BarChart4 size={24} />,
      link: "https://docs.google.com/document/d/1HTd4yvNuGfzq1s_K62YRKFgCPEta__THQPxuwPHXSCg/edit?usp=sharing",
      github: "https://github.com/Ghostiemoh"
    },
    {
      id: "KV-03",
      title: "Kelsier Ventures Analysis",
      category: "Venture Analytics",
      description: "Analyzing wallet movements and venture capital flow within private investment networks.",
      tags: ["VC", "On-chain", "Data"],
      icon: <Database size={24} />,
      link: "https://docs.google.com/document/d/1SDxOn-GqTk7od60YsqBVENOSMm_nVDR9oxxDlDWfzKY/edit?usp=sharing",
      github: "https://github.com/Ghostiemoh"
    },
    {
      id: "NH-04",
      title: "Nashville Housing Data",
      category: "SQL Engineering",
      description: "Cleaning and transforming messy Nashville housing data for predictive real estate modeling.",
      tags: ["SQL", "Data Cleaning", "Analytics"],
      icon: <Database size={24} />,
      link: "/legacy/projects/2.txt",
      github: "https://github.com/Ghostiemoh"
    },
    {
      id: "CO-05",
      title: "COVID-19 Exploration",
      category: "Epidemiological Data",
      description: "Global data exploration of COVID-19 trends, mortality rates, and vaccination impact using SQL.",
      tags: ["SQL", "EDA", "Healthcare"],
      icon: <BarChart4 size={24} />,
      link: "/legacy/projects/1.txt",
      github: "https://github.com/Ghostiemoh"
    },
    {
      id: "BS-06",
      title: "Bicycle Sales Performance",
      category: "Business Intelligence",
      description: "Visualizing sales performance and customer demographics to optimize supply chain decisions.",
      tags: ["Excel", "Tableau", "Sales"],
      icon: <BarChart4 size={24} />,
      link: "https://1drv.ms/b/c/708714f1f76dc85e/IQO-Ssc_TzW_TIC_xI9-rX8HARz8v1R_7L8C_W-YQ",
      github: "https://github.com/Ghostiemoh"
    },
    {
      id: "TR-07",
      title: "Trepa Prediction",
      category: "Predictive Analytics",
      description: "A precision prediction platform focusing on data accuracy and market sentiment analysis.",
      tags: ["Analytics", "Prediction", "Web3"],
      icon: <Search size={24} />,
      link: "/legacy/projects/Trepa.html",
      github: "https://github.com/Ghostiemoh"
    },
    {
      id: "ML-08",
      title: "MetaDao Analysis",
      category: "Governance Data",
      description: "Analyzing governance participation and vote weight distribution within MetaDao.",
      tags: ["DAO", "Governance", "Solana"],
      icon: <Database size={24} />,
      link: "/legacy/projects/Metadao.html",
      github: "https://github.com/Ghostiemoh"
    },
    {
      id: "SE-09",
      title: "Sanafi Ethical Infographic",
      category: "Data Ethics",
      description: "An ethical exploration into data privacy and infographic systems.",
      tags: ["Ethics", "Design", "Data"],
      icon: <Search size={24} />,
      link: "/legacy/projects/sana.html",
      github: "https://github.com/Ghostiemoh"
    },
    {
      id: "SR-10",
      title: "Switchboard Research",
      category: "Oracle Intelligence",
      description: "Deep research into decentralized oracle networks and data feed reliability.",
      tags: ["Oracles", "Research", "Web3"],
      icon: <Search size={24} />,
      link: "/legacy/projects/index.html",
      github: "https://github.com/Ghostiemoh"
    },
    {
      id: "CL-11",
      title: "Call List Analysis",
      category: "Excel Operations",
      description: "Advanced Excel operations for managing and analyzing large-scale call list datasets.",
      tags: ["Excel", "Operations", "Data Management"],
      icon: <BarChart4 size={24} />,
      link: "https://1drv.ms/x/c/708714f1f76dc85e/IQO-Ssc_TzW_TIC_xI9-rX8HAQ8kC58E4hA9o1S_u_W8-YQ",
      github: "https://github.com/Ghostiemoh"
    }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All Cases");

  const categories = ["All Cases", ...new Set(caseFiles.map(f => f.category))];
  const filteredProjects = selectedCategory === "All Cases" 
    ? caseFiles 
    : caseFiles.filter(p => p.category === selectedCategory);

  return (
    <section 
      ref={containerRef}
      id="projects" 
      className="py-32 bg-surface relative overflow-hidden"
    >
      {/* Background Parallax Layer */}
      <motion.div style={{ y }} className="absolute inset-0 opacity-[0.02] pointer-events-none select-none">
         <div className="text-[20vw] font-black uppercase text-on-surface leading-none tracking-tighter">DATA EXTRACTION PROTOCOL</div>
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col xl:flex-row justify-between items-end gap-10 mb-20">
           <motion.div 
             variants={variants.staggerContainer}
             initial="initial"
             whileInView="whileInView"
             viewport={{ once: true }}
             className="space-y-4"
           >
              <motion.div variants={variants.scanReveal} className="flex items-center gap-3">
                 <span className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary">Chapter III</span>
                 <div className="w-12 h-px bg-on-surface/10"></div>
                 <span className="text-[10px] font-bold opacity-30 uppercase tracking-[0.3em]">The Extraction</span>
              </motion.div>
              <motion.h2 variants={variants.fadeIn} className="text-5xl md:text-8xl font-black tracking-tighter">Case Files.</motion.h2>
              <motion.p variants={variants.fadeIn} className="text-xl md:text-2xl font-bold text-on-surface/60 max-w-xl">
                 Real-world interrogation of data shards. From protocol audits to integrated financial systems.
              </motion.p>
           </motion.div>
           
           <div
             className="flex flex-wrap gap-3 mt-10"
             role="group"
             aria-label="Filter cases by category"
           >
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={selectedCategory === cat}
                  className={`px-6 py-3 rounded-full text-[9px] font-black uppercase tracking-widest transition-all duration-500 border ${
                    selectedCategory === cat 
                    ? "bg-secondary text-white border-secondary shadow-lg shadow-secondary/20" 
                    : "bg-surface border-on-surface/10 hover:border-secondary/40 hover:bg-on-surface/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
           </div>
        </div>

        <motion.div 
          layout
          variants={variants.staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
           {filteredProjects.length > 0 ? (
             filteredProjects.map((file, i) => (
               <motion.div 
                  layout
                  key={file.id}
                  variants={variants.scanReveal}
                  className="group relative h-[500px] rounded-[3rem] bg-surface border border-on-surface/5 flex flex-col p-10 hover:border-secondary/20 transition-all duration-700 overflow-hidden card-low"
               >
                  {/* ID Tag */}
                  <div className="flex justify-between items-start mb-10">
                     <div className="w-14 h-14 rounded-2xl bg-on-surface/5 flex items-center justify-center text-on-surface/40 group-hover:bg-secondary group-hover:text-white transition-all duration-700">
                        {file.icon}
                     </div>
                     <span className="text-[10px] font-black tracking-widest opacity-20 group-hover:opacity-100 group-hover:text-secondary transition-all">FILE: {file.id}</span>
                  </div>

                  <div className="space-y-4 relative z-10">
                     <p className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">{file.category}</p>
                     <h3 className="text-4xl font-black tracking-tighter leading-none">{file.title}</h3>
                     <p className="text-sm font-medium leading-relaxed opacity-50 group-hover:opacity-80 transition-opacity">
                        {file.description}
                     </p>
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2 pt-10">
                     {file.tags.map(tag => (
                       <span key={tag} className="text-[9px] font-black uppercase tracking-widest px-4 py-2 border border-on-surface/5 rounded-full opacity-40">
                          {tag}
                       </span>
                     ))}
                  </div>

                  {/* Hover Actions */}
                  <div className="absolute bottom-10 right-10 flex gap-4 translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                    <a href={file.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-on-surface/10 flex items-center justify-center bg-surface hover:bg-on-surface hover:text-white transition-all">
                      <Github size={18} />
                    </a>
                    <a href={file.link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white hover:scale-110 transition-all">
                      <ExternalLink size={18} />
                    </a>
                  </div>

                  {/* Subtle Grain Background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] pointer-events-none transition-opacity bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
               </motion.div>
             ))
           ) : (
             <div className="col-span-full py-40 text-center border-2 border-dashed border-on-surface/5 rounded-[4rem]">
                <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-30">System Warning</p>
                <h3 className="text-3xl font-black tracking-tighter mt-4">Zero Case Shards Found.</h3>
                <p className="text-on-surface/40 mt-2">The extraction for this category has no verified records.</p>
             </div>
           )}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectGrid;
