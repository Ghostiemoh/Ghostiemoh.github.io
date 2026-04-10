import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, FileText, ChevronRight, CheckCircle2, BarChart4, Search } from 'lucide-react';

const IntelHub = () => {
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
      type: "Certification",
      title: "No Long Ting Web3 Bootcamp",
      org: "Unboxed Software/Solana Foundation",
      status: "Verified Shard",
      link: "/legacy/Certificates/5.jpg",
      icon: <Award size={20} />
    },
    {
      type: "Certification",
      title: "Digital Literacy for All",
      org: "NITDA",
      status: "Federal Certification",
      link: "/legacy/Certificates/4.html",
      icon: <FileText size={20} />
    },
    {
      type: "Certification",
      title: "Blockchain Professional",
      org: "Metana",
      status: "Advanced Analysis",
      link: "/legacy/Certificates/3.png",
      icon: <CheckCircle2 size={20} />
    },
    {
      type: "Certification",
      title: "Intro to Data Analytics",
      org: "CFI",
      status: "Verified Data Analyst",
      link: "/legacy/Certificates/2.jpg",
      icon: <BarChart4 size={20} />
    },
    {
       type: "Certification",
       title: "Cyber Security Fundamentals",
       org: "CFI",
       status: "Security Shard",
       link: "/legacy/Certificates/1.jpg",
       icon: <Search size={20} />
    }
  ];

  return (
    <section id="intel" className="py-32 bg-surface relative overflow-hidden">
      {/* Decorative vertical lines */}
      <div className="absolute top-0 right-1/4 w-px h-full bg-on-surface/5"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                 <span className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary">Chapter IV</span>
                 <div className="w-12 h-px bg-on-surface/10"></div>
                 <span className="text-[10px] font-bold opacity-30 uppercase tracking-[0.3em]">Verified Proof</span>
              </div>
              <h2 className="text-6xl font-black tracking-tighter">The Verified Ledger.</h2>
              <p className="text-xl font-medium opacity-50 leading-relaxed">
                A track record of academic rigor and specialized protocol training. Every project is backed by a lineage of verified shards.
              </p>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-on-surface/5 border border-on-surface/5 space-y-6">
               <h4 className="text-[11px] font-black uppercase tracking-[0.3em]">Technical Core</h4>
               <div className="flex flex-wrap gap-3">
                  {["Python", "SQL", "Excel", "Tableau", "Power BI", "Data Forensics"].map(skill => (
                    <span key={skill} className="px-5 py-2.5 rounded-full bg-surface text-[10px] font-bold uppercase tracking-widest border border-on-surface/10">
                      {skill}
                    </span>
                  ))}
               </div>
            </div>

            <div className="p-10 rounded-[2.5rem] border border-on-surface/5 space-y-4">
               <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary">Chapter V</span>
                  <span className="text-[10px] font-bold opacity-30 uppercase tracking-[0.3em]">Continuous Evolution</span>
               </div>
               <h4 className="text-2xl font-black tracking-tight">Currently In-Progress.</h4>
               <ul className="space-y-2">
                  {["Advanced SQL for Blockchains", "Deep Python for Data Science", "On-chain Governance Research"].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium opacity-60">
                       <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                       {item}
                    </li>
                  ))}
               </ul>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              {credentials.map((cred, i) => (
                <motion.a 
                   key={cred.title}
                   href={cred.link}
                   target="_blank"
                   rel="noopener noreferrer"
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
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
          </div>

        </div>
      </div>
    </section>
  );
};

export default IntelHub;
