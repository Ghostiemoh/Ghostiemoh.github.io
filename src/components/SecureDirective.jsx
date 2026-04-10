import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, ShieldCheck, Lock, Terminal, CheckCircle2 } from 'lucide-react';

const SecureDirective = () => {
  const [status, setStatus] = useState('idle'); // idle | loading | success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 2000);
  };

  return (
    <section id="directives" className="py-32 bg-surface-bright relative overflow-hidden">
      {/* Decorative Shard Elements */}
      <div className="absolute top-0 right-1/4 w-px h-full bg-on-surface/5"></div>
      <div className="absolute top-1/2 left-0 w-full h-px bg-on-surface/5"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Narrative Content */}
          <div className="space-y-10">
             <div className="space-y-4">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-2xl bg-on-surface flex items-center justify-center text-surface shadow-xl">
                      <Terminal size={20} />
                   </div>
                   <p className="text-[11px] font-black uppercase tracking-[0.5em] text-on-surface/40">Intel Extraction</p>
                </div>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter">Initialize Secure <br />Directive</h2>
                <p className="text-responsive-body max-w-md">
                   Every successful shard starts with a clear directive. Send a secured transmission to discuss architectural collaborations or product scaling.
                </p>
             </div>

             <div className="space-y-8 pt-8">
                <div className="flex items-center gap-6 group">
                   <div className="w-14 h-14 rounded-full border border-on-surface/10 flex items-center justify-center text-on-surface group-hover:bg-on-surface group-hover:text-surface transition-all duration-500 shadow-sm">
                      <Lock size={20} />
                   </div>
                   <div>
                      <h4 className="text-sm font-black uppercase tracking-widest">End-to-End Encrypted</h4>
                      <p className="text-[11px] font-bold opacity-40 uppercase tracking-widest mt-1">Ghostie Protocol v1.0</p>
                   </div>
                </div>
                <div className="flex items-center gap-6 group">
                   <div className="w-14 h-14 rounded-full border border-on-surface/10 flex items-center justify-center text-on-surface group-hover:bg-on-surface group-hover:text-surface transition-all duration-500 shadow-sm">
                      <ShieldCheck size={20} />
                   </div>
                   <div>
                      <h4 className="text-sm font-black uppercase tracking-widest">Archival Persistence</h4>
                      <p className="text-[11px] font-bold opacity-40 uppercase tracking-widest mt-1">Verified Audit Trail</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Secure Form - Jobs Design */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {status !== 'success' ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  onSubmit={handleSubmit}
                  className="card-lowest p-8 md:p-16 rounded-[4rem] bg-surface space-y-8 shadow-2xl relative z-20"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                       <label className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 ml-2">Identify (Name)</label>
                       <input 
                         required
                         type="text" 
                         placeholder="Subject ID"
                         className="w-full bg-surface-container-low border-transparent focus:border-on-surface/10 focus:ring-2 focus:ring-on-surface/5 rounded-3xl py-5 px-8 text-sm font-bold text-on-surface transition-all placeholder:opacity-20"
                       />
                    </div>
                    <div className="space-y-3">
                       <label className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 ml-2">Route (Email)</label>
                       <input 
                         required
                         type="email" 
                         placeholder="route@shard.io"
                         className="w-full bg-surface-container-low border-transparent focus:border-on-surface/10 focus:ring-2 focus:ring-on-surface/5 rounded-3xl py-5 px-8 text-sm font-bold text-on-surface transition-all placeholder:opacity-20"
                       />
                    </div>
                  </div>

                  <div className="space-y-3">
                     <label className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 ml-2">Directive Details</label>
                     <textarea 
                       required
                       rows="5"
                       placeholder="Define the scope of the collaboration..."
                       className="w-full bg-surface-container-low border-transparent focus:border-on-surface/10 focus:ring-2 focus:ring-on-surface/5 rounded-[2rem] py-8 px-8 text-sm font-bold text-on-surface transition-all placeholder:opacity-20 resize-none"
                     ></textarea>
                  </div>

                  <button 
                    disabled={status === 'loading'}
                    className="w-full bg-on-surface text-surface py-6 rounded-full font-black text-[11px] uppercase tracking-[0.4em] flex items-center justify-center gap-4 hover:bg-secondary hover:text-white transition-all duration-700 disabled:opacity-50 group"
                  >
                    {status === 'loading' ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        Execute Directive
                        <Send size={16} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="card-lowest p-20 rounded-[4rem] bg-surface text-center space-y-8 shadow-2xl relative z-20 flex flex-col items-center justify-center min-h-[500px]"
                >
                   <div className="w-24 h-24 bg-secondary rounded-[2.5rem] flex items-center justify-center text-white shadow-2xl mb-8 animate-bounce">
                      <CheckCircle2 size={48} />
                   </div>
                   <h3 className="text-4xl font-black tracking-tighter">Pulse Synchronized</h3>
                   <p className="text-lg text-on-surface-variant font-medium opacity-60 max-w-xs">
                      The directive has been encoded and dispatched. Expect an extraction response within 2.4ms.
                   </p>
                   <button 
                     onClick={() => setStatus('idle')}
                     className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary hover:text-on-surface transition-colors pt-4"
                   >
                     Reset Directive
                   </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Background Ambient for card */}
            <div className="absolute inset-0 bg-secondary/5 blur-[120px] rounded-[4rem] -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecureDirective;
