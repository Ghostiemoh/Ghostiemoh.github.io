import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Download, Eye, Github, GraduationCap, ShieldCheck, Heart, Terminal, Cpu, Search, BarChart4, Database, Award, FileText, Briefcase, Code, Activity } from 'lucide-react';
import { CONTENT_MATRIX, MODES } from '../utils/content';
import ProjectViewer from './ProjectViewer';

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
  Code,
  Activity
};

const BentoHub = ({ activeMode }) => {
  // Defensive check for activeMode
  const modeData = CONTENT_MATRIX[activeMode] || CONTENT_MATRIX[MODES.ON_CHAIN];
  const projects = modeData.projects || [];
  const [viewerFile, setViewerFile] = useState(null);

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

  return (
    <section id="projects" className="py-32 bg-surface relative min-h-screen overflow-hidden transition-colors duration-700">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex items-center gap-6 mb-20">
           <span className="text-[10px] font-black uppercase tracking-[0.8em] text-on-surface/20 whitespace-nowrap transition-colors duration-700">Operational Matrix</span>
           <div className="h-px w-full bg-gradient-to-r from-on-surface/10 to-transparent transition-colors duration-700" />
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
                  className={`group relative p-12 rounded-[3.5rem] bg-on-surface/[0.02] border border-on-surface/5 hover:border-secondary/40 transition-all duration-700 flex flex-col justify-between ${
                    isLarge ? "md:col-span-8 md:row-span-2" : "md:col-span-4"
                  }`}
                >
                  <div className="space-y-8">
                    <div className="flex justify-between items-start">
                       <div className="w-16 h-16 rounded-2xl bg-on-surface/5 border border-on-surface/10 flex items-center justify-center text-on-surface/20 group-hover:bg-secondary group-hover:text-white group-hover:border-transparent transition-all duration-700">
                          <Icon size={28} />
                       </div>
                       <div className="flex flex-col items-end gap-2">
                          <span className="text-[9px] font-black tracking-[0.2em] text-on-surface/10 group-hover:text-secondary/50 transition-all uppercase">Source: {project.id}</span>
                          <div className="flex gap-2 transition-all duration-500">
                             {project.view && (
                               <button onClick={() => setViewerFile(project)} title="Click to view" className="p-3 bg-secondary/10 border border-secondary/20 rounded-xl text-secondary hover:bg-secondary hover:text-white transition-all cursor-pointer">
                                  <Eye size={16} />
                               </button>
                             )}
                             {project.link && (
                               <a href={project.link} target="_blank" rel="noopener noreferrer" title="Open" className="p-3 bg-secondary/10 border border-secondary/20 rounded-xl text-secondary hover:bg-secondary hover:text-white transition-all">
                                  <ExternalLink size={16} />
                                </a>
                             )}
                             {project.download && (
                               <a href={project.download} download title="Download source file" className="p-3 bg-on-surface/5 border border-on-surface/10 rounded-xl text-on-surface/60 hover:bg-on-surface hover:text-surface transition-all">
                                  <Download size={16} />
                               </a>
                             )}
                          </div>
                       </div>
                    </div>
 
                    <div className="space-y-5">
                       <div className="flex items-center gap-3">
                          <div className="w-1 h-1 rounded-full bg-secondary" />
                          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary/80">{project.category}</p>
                       </div>
                       <h3 className={`font-black tracking-tighter leading-[0.9] text-on-surface transition-colors duration-700 ${isLarge ? "text-6xl md:text-8xl" : "text-3xl"}`}>
                         {project.title}
                       </h3>
                       <p className={`font-medium text-on-surface/50 leading-relaxed group-hover:text-on-surface/80 transition-colors ${isLarge ? "text-xl max-w-xl" : "text-base max-w-sm"}`}>
                          {project.description}
                       </p>
                       {project.view && (
                         <button
                           onClick={() => setViewerFile(project)}
                           className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-secondary hover:gap-3 transition-all cursor-pointer"
                         >
                           <Eye size={14} /> Click to view
                         </button>
                       )}
                    </div>
                  </div>
 
                  <div className="flex flex-wrap gap-3 pt-10">
                     {project.tags.map((tag, i) => (
                       <span key={tag} className={`text-[9px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full border transition-all duration-500 ${
                         i === 0 
                         ? "border-secondary/30 text-secondary bg-secondary/5 group-hover:bg-secondary group-hover:text-white" 
                         : "border-on-surface/10 text-on-surface/30 group-hover:border-on-surface/30 group-hover:text-on-surface/60"
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
                    : "bg-on-surface/[0.01] border-on-surface/5 hover:border-on-surface/20"
                  } ${card.colSpan}`}
                >
                  {isCore && (
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/10 blur-[80px] rounded-full group-hover:bg-secondary/20 transition-all duration-1000" />
                  )}
 
                  <div className="space-y-8 relative z-10">
                    <div className="flex justify-between items-start">
                       <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-700 ${
                         isCore ? "bg-secondary/20 text-secondary" : "bg-on-surface/5 text-on-surface/20 group-hover:text-on-surface"
                       }`}>
                          <Icon size={24} className={isCore ? "animate-pulse" : ""} />
                       </div>
                    </div>
                    <div className="space-y-4">
                       <p className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary/60">{card.category}</p>
                       <h4 className={`font-black tracking-tight text-on-surface transition-colors duration-700 ${isCore ? "text-4xl md:text-5xl" : "text-2xl"}`}>{card.title}</h4>
                       <p className={`font-medium leading-relaxed transition-colors ${
                         isCore ? "text-lg text-on-surface/60 group-hover:text-on-surface max-w-2xl" : "text-sm text-on-surface/40 group-hover:text-on-surface/80"
                       }`}>
                          {card.description}
                       </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 pt-10 relative z-10">
                     {card.tags.map(tag => (
                       <span key={tag} className="text-[9px] font-black uppercase tracking-widest px-4 py-2 border border-on-surface/10 text-on-surface/30 rounded-full group-hover:border-on-surface/40 group-hover:text-on-surface transition-all">
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

      <ProjectViewer project={viewerFile} onClose={() => setViewerFile(null)} />
    </section>
  );
};

export default BentoHub;
