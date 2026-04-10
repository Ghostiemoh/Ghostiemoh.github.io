import React from 'react';
import { motion } from 'framer-motion';
import { Send, Terminal, Mail, Paperclip } from 'lucide-react';

const SecureDirective = () => {
  return (
    <section id="directives" className="py-40 bg-on-surface text-surface relative overflow-hidden">
      {/* Narrative grid background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="grid grid-cols-12 h-full">
           {[...Array(12)].map((_, i) => (
             <div key={i} className="border-r border-surface/20"></div>
           ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          <div className="lg:col-span-6 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                 <span className="text-[10px] font-black uppercase tracking-[0.6em] text-secondary">Final Directive</span>
                 <div className="w-12 h-px bg-surface/20"></div>
              </div>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                Initiate <br /> <span className="text-secondary">Connection.</span>
              </h2>
              <p className="text-xl md:text-2xl font-bold opacity-60 max-w-lg">
                The story of your data begins with a single query. Ready to extract the truth?
              </p>
            </div>

            <div className="space-y-8">
               <a href="mailto:Marvmuhd@gmail.com" className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-surface/5 border border-surface/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-surface transition-all duration-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Direct Mailbox</p>
                    <p className="text-2xl font-black tracking-tight">Marvmuhd@gmail.com</p>
                  </div>
               </a>
               <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-surface/5 border border-surface/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-surface transition-all duration-500">
                    <Terminal size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Operations Hub</p>
                    <p className="text-xl font-black tracking-tight leading-tight">Wuye, Abuja, Nigeria</p>
                  </div>
               </div>
               <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-surface/5 border border-surface/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-surface transition-all duration-500">
                    <Send size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Direct Link</p>
                    <p className="text-xl font-black tracking-tight leading-tight">+234 903 075 4145</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="lg:col-span-6">
             <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-surface/5 backdrop-blur-3xl border border-surface/10 rounded-[4rem] p-12 md:p-16 space-y-10"
             >
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-surface">
                   <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 ml-1">Directive Subject</label>
                      <input 
                        type="text" 
                        placeholder="Project Narrative" 
                        className="w-full bg-transparent border-b border-surface/20 py-4 text-xl font-bold placeholder:opacity-20 focus:border-secondary focus:outline-none transition-colors"
                      />
                   </div>
                   <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 ml-1">Project Sector</label>
                      <select className="w-full bg-transparent border-b border-surface/20 py-4 text-xl font-bold focus:border-secondary focus:outline-none transition-colors appearance-none cursor-pointer">
                        <option className="bg-on-surface">Blockchain / Web3</option>
                        <option className="bg-on-surface">Data Analytics</option>
                        <option className="bg-on-surface">Forensic Audit</option>
                        <option className="bg-on-surface">Research & Ed</option>
                      </select>
                   </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-surface">
                   <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 ml-1">Technical Priority</label>
                      <select className="w-full bg-transparent border-b border-surface/20 py-4 text-xl font-bold focus:border-secondary focus:outline-none transition-colors appearance-none cursor-pointer">
                        <option className="bg-on-surface text-secondary">Mission Critical</option>
                        <option className="bg-on-surface">Standard Protocol</option>
                        <option className="bg-on-surface text-secondary/50">Discovery / Planning</option>
                      </select>
                   </div>
                   <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 ml-1">Operational ID</label>
                      <input 
                        type="email" 
                        placeholder="yourname@domain.com" 
                        className="w-full bg-transparent border-b border-surface/20 py-4 text-xl font-bold placeholder:opacity-20 focus:border-secondary focus:outline-none transition-colors"
                      />
                   </div>
                 </div>

                 <div className="space-y-4 text-surface">
                    <label className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 ml-1">The Intel Payload</label>
                    <textarea 
                      rows={3}
                      placeholder="Describe the data shards you need interrogated..." 
                      className="w-full bg-transparent border-b border-surface/20 py-4 text-xl font-bold placeholder:opacity-20 focus:border-secondary focus:outline-none transition-colors resize-none"
                    />
                 </div>

                <div className="flex flex-col md:flex-row gap-6 pt-4">
                   <button className="flex-1 bg-secondary text-surface py-6 rounded-full font-black text-[11px] uppercase tracking-[0.5em] flex items-center justify-center gap-4 hover:scale-105 transition-all duration-700 shadow-2xl">
                      Transmit directive
                      <Send size={16} />
                   </button>
                   <button className="px-10 py-6 rounded-full border border-surface/10 font-black text-[11px] uppercase tracking-[0.5em] flex items-center justify-center gap-4 hover:bg-surface/10 transition-all duration-500">
                      Attach Shard
                      <Paperclip size={16} />
                   </button>
                </div>

                <p className="text-[9px] font-black uppercase tracking-[0.3em] opacity-20 text-center">
                   Encrypted via end-to-end analytical tunnel.
                </p>
             </motion.div>
          </div>

        </div>

        {/* Operational FAQ Section */}
        <div className="mt-40 pt-20 border-t border-surface/10 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
               <h4 className="text-secondary font-black text-xs uppercase tracking-widest mb-4">Location Hub</h4>
               <p className="text-sm font-bold opacity-40">Operating primarily from Wuye, Abuja. Available for global remote synchronization across all time zones.</p>
            </div>
            <div>
               <h4 className="text-secondary font-black text-xs uppercase tracking-widest mb-4">Stack Protocol</h4>
               <p className="text-sm font-bold opacity-40">Python (Pandas/NumPy), SQL (PostgreSQL/BigQuery), Tableau, Power BI, and On-chain analysis (Dune/Flipside).</p>
            </div>
            <div>
               <h4 className="text-secondary font-black text-xs uppercase tracking-widest mb-4">Identity Verification</h4>
               <p className="text-sm font-bold opacity-40">Muhammad Auwal Abdulaziz. Verified Data Analyst. MetaDao Governance Contributor.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SecureDirective;
