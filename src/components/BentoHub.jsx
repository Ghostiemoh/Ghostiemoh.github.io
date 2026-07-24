import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Download, Eye, Github, GraduationCap, ShieldCheck, Heart, Terminal, Cpu, Search, BarChart4, Database, Award, FileText, Briefcase, Code, Activity } from 'lucide-react';
import { CONTENT_MATRIX, MODES } from '../utils/content';
import ProjectViewer from './ProjectViewer';

const iconMap = {
  Search, BarChart4, Database, Cpu, Award, FileText,
  Briefcase, ShieldCheck, GraduationCap, Heart, Terminal, Code, Activity
};

const BentoHub = ({ activeMode }) => {
  const modeData = CONTENT_MATRIX[activeMode] || CONTENT_MATRIX[MODES.ON_CHAIN];
  const projects = modeData.projects || [];
  const [viewerFile, setViewerFile] = useState(null);

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
    <section id="projects" className="py-32 bg-surface relative min-h-screen overflow-hidden transition-colors duration-300 ease-out">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex items-center gap-6 mb-20">
          <span className="text-[10px] font-black uppercase tracking-[0.8em] text-on-surface/20 whitespace-nowrap transition-colors duration-700">Operational Matrix</span>
          <div className="h-px w-full bg-gradient-to-r from-on-surface/10 to-transparent transition-colors duration-700" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(auto,auto)]">
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
                  className={`group relative overflow-hidden rounded-[2.5rem] bg-on-surface/[0.03] border border-on-surface/5 hover:border-secondary/40 transition-[border-color,box-shadow] duration-200 ease-out flex flex-col ${
                    isLarge ? "md:col-span-8" : "md:col-span-4"
                  }`}
                >
                  {/* ── THUMBNAIL ── */}
                  <div className={`relative overflow-hidden shrink-0 ${isLarge ? "h-72" : "h-52"} bg-on-surface/5`}>
                    {project.thumbnail ? (
                      <>
                        <img
                          src={project.thumbnail}
                          alt={`${project.title} screenshot`}
                          className="w-full h-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                          loading="lazy"
                          onError={(e) => { e.currentTarget.parentElement.classList.add('thumbnail-error'); e.currentTarget.style.display = 'none'; }}
                        />
                        {/* Bottom fade to blend into card body */}
                        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-on-surface/10 to-transparent pointer-events-none" />
                      </>
                    ) : (
                      /* Fallback gradient for missing thumbnails */
                      <div className="w-full h-full bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent flex items-center justify-center">
                        <Icon size={isLarge ? 48 : 32} className="text-secondary/30" />
                      </div>
                    )}

                    {/* Category badge overlaid on image top-left */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-surface/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-on-surface/10">
                      <div className="w-1 h-1 rounded-full bg-secondary" />
                      <span className="text-[9px] font-black uppercase tracking-[0.35em] text-secondary/80">{project.category}</span>
                    </div>

                    {/* Action buttons top-right */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-200 ease-out">
                      {project.view && (
                        <button
                          onClick={() => setViewerFile(project)}
                          title="Click to view"
                          aria-label="View project"
                          className="p-2.5 bg-surface/90 backdrop-blur-sm border border-on-surface/10 rounded-xl text-secondary hover:bg-secondary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary active:scale-[0.95] transition-[transform,background-color,color] duration-100 ease-out cursor-pointer"
                        >
                          <Eye size={14} />
                        </button>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Open project"
                          aria-label="Open project in new tab"
                          className="p-2.5 bg-surface/90 backdrop-blur-sm border border-on-surface/10 rounded-xl text-secondary hover:bg-secondary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary active:scale-[0.95] transition-[transform,background-color,color] duration-100 ease-out"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                      {project.download && (
                        <a
                          href={project.download}
                          download
                          title="Download file"
                          aria-label="Download project file"
                          className="p-2.5 bg-surface/90 backdrop-blur-sm border border-on-surface/10 rounded-xl text-on-surface/60 hover:bg-on-surface hover:text-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary active:scale-[0.95] transition-[transform,background-color,color] duration-100 ease-out"
                        >
                          <Download size={14} />
                        </a>
                      )}
                    </div>

                    {/* Source ID */}
                    <div className="absolute bottom-4 right-4 text-[8px] font-black tracking-[0.25em] text-white/30 uppercase">{project.id}</div>
                  </div>

                  {/* ── TEXT BODY ── */}
                  <div className="flex flex-col flex-1 p-8 gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-on-surface/5 border border-on-surface/8 flex items-center justify-center text-on-surface/20 group-hover:bg-secondary group-hover:text-white group-hover:border-transparent transition-[background-color,color,border-color] duration-200 ease-out shrink-0 mt-0.5">
                        <Icon size={18} />
                      </div>
                      <h3 className={`font-black tracking-tight leading-tight text-on-surface transition-colors duration-300 ${isLarge ? "text-3xl" : "text-xl"}`}>
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-sm font-medium text-on-surface/50 leading-relaxed group-hover:text-on-surface/75 transition-colors duration-200 flex-1">
                      {project.description}
                    </p>

                    {project.view && (
                      <button
                        onClick={() => setViewerFile(project)}
                        className="self-start inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-secondary hover:gap-3 active:scale-[0.97] transition-[transform,gap] duration-150 ease-out cursor-pointer"
                      >
                        <Eye size={13} /> View file
                      </button>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag, i) => (
                        <span
                          key={tag}
                          className={`text-[8px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border transition-all duration-300 ${
                            i === 0
                              ? "border-secondary/30 text-secondary bg-secondary/5 group-hover:bg-secondary group-hover:text-white"
                              : "border-on-surface/10 text-on-surface/30 group-hover:border-on-surface/20 group-hover:text-on-surface/50"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
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
                  className={`group relative overflow-hidden rounded-[2.5rem] transition-[border-color] duration-200 ease-out flex flex-col border ${
                    isCore
                      ? "bg-gradient-to-br from-secondary/10 to-transparent border-secondary/20 hover:border-secondary/50"
                      : "bg-on-surface/[0.01] border-on-surface/5 hover:border-on-surface/20"
                  } ${card.colSpan}`}
                >
                  {isCore && (
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/10 blur-[80px] rounded-full group-hover:bg-secondary/20 transition-all duration-1000 pointer-events-none" />
                  )}

                  <div className="flex flex-col flex-1 p-12 gap-6 relative z-10 justify-between">
                    <div className="space-y-6">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-[background-color,color] duration-200 ease-out ${
                        isCore ? "bg-secondary/20 text-secondary" : "bg-on-surface/5 text-on-surface/20 group-hover:text-on-surface"
                      }`}>
                        <Icon size={24} className={isCore ? "animate-pulse" : ""} />
                      </div>
                      <div className="space-y-3">
                        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary/60">{card.category}</p>
                        <h4 className={`font-black tracking-tight text-on-surface transition-colors duration-700 ${isCore ? "text-4xl md:text-5xl" : "text-2xl"}`}>{card.title}</h4>
                        <p className={`font-medium leading-relaxed transition-colors ${
                          isCore ? "text-lg text-on-surface/60 group-hover:text-on-surface max-w-2xl" : "text-sm text-on-surface/40 group-hover:text-on-surface/80"
                        }`}>
                          {card.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {card.tags.map(tag => (
                        <span key={tag} className="text-[9px] font-black uppercase tracking-widest px-4 py-2 border border-on-surface/10 text-on-surface/30 rounded-full group-hover:border-on-surface/40 group-hover:text-on-surface transition-all">
                          {tag}
                        </span>
                      ))}
                    </div>
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
