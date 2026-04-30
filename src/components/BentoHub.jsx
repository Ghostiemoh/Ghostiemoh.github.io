import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, GraduationCap, ShieldCheck, Heart, Terminal, Cpu, Search, BarChart4, Database, Award, FileText, Briefcase, Code } from 'lucide-react';
import { CONTENT_MATRIX, MODES } from '../utils/content';

// Map icon strings to components directly to avoid 'import * as' issues
const iconMap = {
  Search,
  BarChart4,
  Database,
  Cpu,
  Award,
  FileText,
  Briefcase,
  ShieldCheck,
  GraduationCap,
  Heart,
  Terminal,
  Code
};

// Global Cards - Elevated to "System Components"
  const globalCards = [
    {
      id: "GL-01",
      title: "MATHEMATICAL CORE",
      category: "System Foundation",
      description: "B.Sc Ed Mathematics. Powering all analytical shards with high-precision logic and statistical rigor.",
      tags: ["Logic", "Research", "Core"],
      icon: 'Cpu',
      colSpan: "md:col-span-8",
      special: "core"
    },
    {
      id: "GL-02",
      title: "Community Impact",
      category: "Social Shard",
      description: "Supporting youth empowerment through Al-Ansar and MotherHen Initiatives.",
      tags: ["Volunteer", "Impact"],
      icon: 'Heart',
      colSpan: "md:col-span-4"
    }
  ];

const BentoHub = ({ activeMode }) => {
  // Defensive check for activeMode
  const modeData = CONTENT_MATRIX[activeMode] || CONTENT_MATRIX[MODES.ON_CHAIN];
  const projects = modeData.projects || [];

  return (
    <section id="projects" className="py-32 bg-[#050505] relative min-h-screen overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex items-center gap-6 mb-20">
           <span className="text-[10px] font-black uppercase tracking-[0.8em] text-white/20 whitespace-nowrap">Operational Matrix</span>
           <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(340px,auto)]">
          <AnimatePresence mode="popLayout">
            {projects.map((project, index) => {
              const Icon = iconMap[project.icon] || Code;
              const isLarge = index === 0;
              
              return (
                <motion.div
                  key={`${activeMode}-${project.id}`}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.08,
                    type: "spring",
                    stiffness: 100,
                    damping: 20
                  }}
                  className={`group relative p-12 rounded-[3.5rem] bg-white/[0.02] border border-white/5 hover:border-secondary/40 transition-all duration-700 flex flex-col justify-between ${
                    isLarge ? "md:col-span-8 md:row-span-2" : "md:col-span-4"
                  }`}
                >
                  <div className="space-y-8">
                    <div className="flex justify-between items-start">
                       <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/20 group-hover:bg-secondary group-hover:text-white group-hover:border-transparent transition-all duration-700">
                          <Icon size={28} />
                       </div>
                       <div className="flex flex-col items-end gap-2">
                          <span className="text-[9px] font-black tracking-[0.2em] text-white/10 group-hover:text-secondary/50 transition-all uppercase">Source: {project.id}</span>
                          <div className="flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                             <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary/10 border border-secondary/20 rounded-xl text-secondary hover:bg-secondary hover:text-white transition-all">
                                <ExternalLink size={16} />
                             </a>
                          </div>
                       </div>
                    </div>

                    <div className="space-y-5">
                       <div className="flex items-center gap-3">
                          <div className="w-1 h-1 rounded-full bg-secondary" />
                          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary/80">{project.category}</p>
                       </div>
                       <h3 className={`font-black tracking-tighter leading-[0.9] text-white ${isLarge ? "text-6xl md:text-8xl" : "text-3xl"}`}>
                         {project.title}
                       </h3>
                       <p className={`font-medium text-white/50 leading-relaxed group-hover:text-white/80 transition-colors ${isLarge ? "text-xl max-w-xl" : "text-base max-w-sm"}`}>
                          {project.description}
                       </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-10">
                     {project.tags.map((tag, i) => (
                       <span key={tag} className={`text-[9px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full border transition-all duration-500 ${
                         i === 0 
                         ? "border-secondary/30 text-secondary bg-secondary/5 group-hover:bg-secondary group-hover:text-white" 
                         : "border-white/10 text-white/30 group-hover:border-white/30 group-hover:text-white/60"
                       }`}>
                          {tag}
                       </span>
                     ))}
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.04] pointer-events-none transition-opacity bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                </motion.div>
              );
            })}

            {globalCards.map((card) => {
              const Icon = iconMap[card.icon] || ShieldCheck;
              const isCore = card.special === "core";
              
              return (
                <motion.div
                  key={card.id}
                  layout
                  className={`group relative p-12 rounded-[3.5rem] transition-all duration-1000 flex flex-col justify-between border ${
                    isCore 
                    ? "bg-gradient-to-br from-secondary/10 to-transparent border-secondary/20 hover:border-secondary/50" 
                    : "bg-white/[0.01] border-white/5 hover:border-white/20"
                  } ${card.colSpan}`}
                >
                  {isCore && (
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/10 blur-[80px] rounded-full group-hover:bg-secondary/20 transition-all duration-1000" />
                  )}

                  <div className="space-y-8 relative z-10">
                    <div className="flex justify-between items-start">
                       <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-700 ${
                         isCore ? "bg-secondary/20 text-secondary" : "bg-white/5 text-white/20 group-hover:text-white"
                       }`}>
                          <Icon size={24} className={isCore ? "animate-pulse" : ""} />
                       </div>
                    </div>
                    <div className="space-y-4">
                       <p className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary/60">{card.category}</p>
                       <h4 className={`font-black tracking-tight text-white ${isCore ? "text-4xl md:text-5xl" : "text-2xl"}`}>{card.title}</h4>
                       <p className={`font-medium leading-relaxed transition-colors ${
                         isCore ? "text-lg text-white/60 group-hover:text-white max-w-2xl" : "text-sm text-white/40 group-hover:text-white/80"
                       }`}>
                          {card.description}
                       </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 pt-10 relative z-10">
                     {card.tags.map(tag => (
                       <span key={tag} className="text-[9px] font-black uppercase tracking-widest px-4 py-2 border border-white/10 text-white/30 rounded-full group-hover:border-white/40 group-hover:text-white transition-all">
                          {tag}
                       </span>
                     ))}
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] pointer-events-none transition-opacity bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default BentoHub;
