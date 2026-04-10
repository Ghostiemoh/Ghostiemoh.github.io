import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "MetaDao",
      role: "On-chain Governance Analyst",
      period: "Aug 2024 - Present",
      location: "Remote / Protocol",
      description: "Analyzing on-chain metadata and governance proposals. Monitoring treasury flows and voting distributions to ensure protocol integrity and decentralization metrics.",
      tags: ["Governance", "Treasury", "Snapshot"]
    },
    {
      company: "Flipside Crypto",
      role: "Analytics Contributor",
      period: "2023 - 2024",
      location: "Remote",
      description: "Leveraged SQL to conduct deep-dive analytics on various blockchain protocols. Created comprehensive dashboards for the community to track active users and TVL movement.",
      tags: ["SQL", "Data Viz", "Protocols"]
    },
    {
      company: "Kelsier",
      role: "Blockchain Researcher",
      period: "2022 - 2023",
      location: "United Arab Emirates (Remote)",
      description: "Focused on forensic-level blockchain research and ecosystem mapping. Documenting protocol vulnerabilities and tracing transaction origin shards.",
      tags: ["Forensics", "Research", "Security"]
    },
    {
      company: "Sanafi",
      role: "Data Analyst",
      period: "2021 - 2022",
      location: "Abuja, Nigeria",
      description: "Extracted and processed organizational data to streamline reporting workflows. Built automated Excel models and SQL queries to reduce manual audit time by 40%.",
      tags: ["Excel", "SQL", "Reporting"]
    }
  ];

  return (
    <section id="experience" className="py-32 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-on-surface/5"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          <div className="lg:col-span-4 space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                 <span className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary">Chapter VI</span>
                 <div className="w-12 h-px bg-on-surface/10"></div>
                 <span className="text-[10px] font-bold opacity-30 uppercase tracking-[0.3em]">Operational History</span>
              </div>
              <h2 className="text-6xl font-black tracking-tighter">Field Experience.</h2>
              <p className="text-xl font-medium opacity-50 leading-relaxed">
                The deployment history of a specialist. From identifying governance anomalies to forensic research across global protocols.
              </p>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-on-surface/5 border border-on-surface/5">
               <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-secondary/10 rounded-2xl text-secondary">
                     <Briefcase size={20} />
                  </div>
                  <h4 className="text-lg font-black uppercase tracking-widest text-on-surface/30">Total Service</h4>
               </div>
               <p className="text-4xl font-black tracking-tighter">3+ Years</p>
               <p className="text-sm font-bold opacity-40 mt-2 lowercase">Active in Web3 & Data Analytics</p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-8">
            {experiences.map((exp, i) => (
              <motion.div 
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="p-10 rounded-[2.5rem] bg-surface border border-on-surface/5 hover:border-secondary transition-all duration-700 card-low shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="space-y-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-2">
                           <h3 className="text-3xl font-black tracking-tighter">{exp.company}</h3>
                           <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-on-surface/10" />
                           <p className="text-lg font-bold text-secondary">{exp.role}</p>
                        </div>
                        <div className="flex flex-wrap gap-4 text-[10px] font-black uppercase tracking-widest opacity-40">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={12} strokeWidth={3} />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin size={12} strokeWidth={3} />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-base font-medium opacity-60 leading-relaxed max-w-2xl">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                         {exp.tags.map(tag => (
                           <span key={tag} className="px-4 py-1.5 rounded-full bg-on-surface/5 text-[9px] font-bold uppercase tracking-widest border border-on-surface/5">
                             {tag}
                           </span>
                         ))}
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                       <div className="w-14 h-14 rounded-2xl bg-on-surface/5 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-secondary group-hover:text-surface transition-all duration-500">
                          <ExternalLink size={24} />
                       </div>
                    </div>
                  </div>
                </div>
                
                {i !== experiences.length - 1 && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-on-surface/10 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
