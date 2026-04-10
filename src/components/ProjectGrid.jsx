import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Shield, Zap, Circle } from 'lucide-react';

const projects = [
  {
    id: 'ledgersnap',
    title: 'LedgerSnap',
    subtitle: 'The Financial Architect',
    description: 'A premium archival system for digital assets. Engineered with high-fidelity React components and weighted Framer Motion physics.',
    tags: ['React', 'Framer Motion', 'Tailwind CSS', 'Finance'],
    links: {
      github: 'https://github.com/Ghostiemoh/ledgersnap',
      demo: '#'
    },
    color: 'secondary',
    icon: <Shield className="text-secondary" size={32} />
  },
  {
    id: 'ghostie-protocol',
    title: 'Ghostie Protocol',
    subtitle: 'Identity V3.0',
    description: 'A zero-line security framework for distributed shards. Prioritizing dark-mode integrity and absolute data sovereignty.',
    tags: ['Next.js', 'Auth.js', 'PostgreSQL', 'Security'],
    links: {
      github: '#',
      demo: '#'
    },
    color: 'primary',
    icon: <Zap className="text-secondary" size={32} />
  }
];

const ProjectGrid = () => {
  return (
    <section id="archives" className="py-32 bg-surface">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-20 space-y-4">
           <div className="flex items-center gap-3">
              <span className="w-12 h-px bg-on-surface/10"></span>
              <p className="text-[11px] font-black uppercase tracking-[0.5em] text-on-surface/40">Verified Archives</p>
           </div>
           <h2 className="text-5xl md:text-7xl font-black tracking-tighter">Case Studies</h2>
           <p className="text-xl text-on-surface-variant max-w-2xl font-medium opacity-60">
             Exploring the intersection of high-fidelity design systems and large-scale engineering directives.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="card-lowest rounded-[3rem] p-10 md:p-16 h-full flex flex-col justify-between overflow-hidden relative border-transparent hover:border-secondary/20 transition-all duration-700 bg-surface-container-low hover:bg-surface-bright shadow-sm hover:shadow-2xl">
                 {/* Decorative Accent */}
                 <div className="absolute -right-20 -top-20 w-80 h-80 bg-secondary/5 rounded-full blur-[80px] group-hover:bg-secondary/10 transition-colors duration-1000"></div>
                 
                 <div>
                    <div className="flex justify-between items-start mb-12">
                       <div className="w-16 h-16 md:w-20 md:h-20 bg-on-surface rounded-[2rem] flex items-center justify-center text-surface shadow-xl group-hover:rotate-6 transition-transform duration-500">
                          {project.icon}
                       </div>
                       <div className="flex gap-4">
                          <a href={project.links.github} className="w-12 h-12 rounded-full border border-on-surface/10 flex items-center justify-center hover:bg-on-surface hover:text-surface transition-all duration-500">
                             <Github size={20} />
                          </a>
                          <a href={project.links.demo} className="w-12 h-12 rounded-full border border-on-surface/10 flex items-center justify-center hover:bg-on-surface hover:text-surface transition-all duration-500">
                             <ExternalLink size={20} />
                          </a>
                       </div>
                    </div>

                    <p className="text-[11px] font-black uppercase tracking-[0.4em] text-secondary mb-4">{project.subtitle}</p>
                    <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">{project.title}</h3>
                    <p className="text-lg md:text-xl text-on-surface-variant font-medium leading-[1.7] opacity-70 mb-10 max-w-lg">
                       {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                       {project.tags.map(tag => (
                         <span key={tag} className="px-5 py-2 rounded-full bg-white border border-on-surface/5 text-[10px] font-black uppercase tracking-widest opacity-60">
                            {tag}
                         </span>
                       ))}
                    </div>
                 </div>

                 <div className="mt-16 flex items-center justify-between">
                    <button className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] group/btn">
                       Read Directive
                       <div className="w-10 h-10 rounded-full bg-on-surface/5 flex items-center justify-center group-hover/btn:bg-on-surface group-hover/btn:text-surface transition-all duration-500">
                          <ArrowRight size={16} />
                       </div>
                    </button>
                    <div className="flex items-center gap-2">
                       <Circle size={8} className="fill-secondary text-secondary animate-pulse" />
                       <p className="text-[9px] font-black uppercase tracking-widest opacity-30">Production Active</p>
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Call to Action - Altman Style */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-12 md:p-20 bg-on-surface rounded-[4rem] text-white flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative"
        >
           <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]"></div>
           <div className="relative z-10 space-y-6 text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
                 Seeking Shard <br />
                 Collaborators
              </h2>
              <p className="text-xl text-white/60 font-medium max-w-sm mx-auto lg:mx-0">
                 The scale of the singularity requires distributed intelligence. Join the protocol on GitHub.
              </p>
           </div>
           <div className="relative z-10">
              <button className="bg-white text-on-surface px-10 py-6 rounded-full font-black text-[11px] uppercase tracking-[0.4em] hover:bg-secondary hover:text-white transition-all duration-700 shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                 Initialize Pulse
              </button>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectGrid;
