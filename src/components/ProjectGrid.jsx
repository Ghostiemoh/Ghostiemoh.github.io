import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Search, ArrowRight, BarChart4 } from 'lucide-react';

const ProjectGrid = () => {
  const caseFiles = [
    {
      id: "LS-01",
      title: "LedgerSnap",
      category: "Financial Data Engineering",
      description: "A centralized command for fragmented on-chain wealth. Engineered the data pipeline to normalize transaction history across Layer 1 and Layer 2 networks.",
      tags: ["React", "Blockchain Data", "API Design"],
      icon: <Database size={24} />,
      link: "#",
      github: "https://github.com/Ghostiemoh/LedgerSnap"
    },
    {
      id: "SA-02",
      title: "Solana Launchpad Audit",
      category: "DeFi Forensics",
      description: "Deep-dive analysis of token distribution and whale movement post-launch. Identified sybil patterns and distribution anomalies.",
      tags: ["Python", "Solana SDK", "Forensics"],
      icon: <Search size={24} />,
      link: "#",
      github: "#"
    },
    {
      id: "MA-03",
      title: "MarginFi Protocol Analytics",
      category: "Yield Optimization",
      description: "Visualizing lending dynamics and liquidation risk parameters at scale. Transformed raw protocol telemetry into actionable risk dashboards.",
      tags: ["SQL", "Tableau", "DeFi"],
      icon: <BarChart4 size={24} />,
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-32 bg-surface">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
           <div className="space-y-4">
              <div className="flex items-center gap-3">
                 <span className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary">Chapter III</span>
                 <div className="w-12 h-px bg-on-surface/10"></div>
                 <span className="text-[10px] font-bold opacity-30 uppercase tracking-[0.3em]">The Extraction</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter">Case Files.</h2>
              <p className="text-xl md:text-2xl font-bold text-on-surface/60 max-w-xl">
                 Real-world interrogation of data shards. From protocol audits to integrated financial systems.
              </p>
           </div>
           
           <div className="hidden md:flex gap-4">
              <div className="w-12 h-12 rounded-full border border-on-surface/10 flex items-center justify-center opacity-30 hover:opacity-100 transition-opacity cursor-pointer">
                 <ArrowRight size={20} className="rotate-180" />
              </div>
              <div className="w-12 h-12 rounded-full border border-on-surface/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all cursor-pointer">
                 <ArrowRight size={20} />
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {caseFiles.map((file, i) => (
             <motion.div 
                key={file.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
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
                  <a
                    href={file.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${file.title} source on GitHub`}
                    className="w-12 h-12 rounded-full border border-on-surface/10 flex items-center justify-center bg-surface hover:bg-on-surface hover:text-white transition-all"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={file.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${file.title} live site`}
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white hover:scale-110 transition-all"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>

                {/* Subtle Grain Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] pointer-events-none transition-opacity bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
