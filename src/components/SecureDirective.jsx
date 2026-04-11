import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Terminal, Mail, Paperclip, CheckCircle2, Loader2 } from 'lucide-react';
import { transitions, variants } from '../utils/motion';

const SecureDirective = () => {
  const [status, setStatus] = useState('idle'); // idle | transmitting | success | error
  const [attachedFile, setAttachedFile] = useState(null);
  const fileInputRef = useRef(null);
  
  // SECURE BACKEND ENDPOINT (GOOGLE APPS SCRIPT)
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzWFk93mmn0ofKDYvvbZSj5bFYADSeruajgIu5D9Vkso62pJHh4r2dUL6YXDYeiVgk/exec';

  const [formData, setFormData] = useState({
    subject: '',
    sector: 'Blockchain / Web3',
    priority: 'Mission Critical',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAttachedFile(file);
    }
  };

  // Helper to convert file to Base64 for Google Apps Script
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(',')[1]);
      reader.onerror = error => reject(error);
    });
  };

  const handleTransmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) {
      alert("Operational Error: Missing required data fields.");
      return;
    }

    setStatus('transmitting');
    
    try {
      let fileData = null;
      let fileName = null;
      let fileType = null;

      if (attachedFile) {
        // Enforce size limit for free tier stability (e.g., 5MB)
        if (attachedFile.size > 5 * 1024 * 1024) {
          alert("Intel Overflow: File exceeds 5MB threshold. Please optimize.");
          setStatus('idle');
          return;
        }
        fileData = await getBase64(attachedFile);
        fileName = attachedFile.name;
        fileType = attachedFile.type;
      }

      const payload = {
        ...formData,
        fileData,
        fileName,
        fileType,
        timestamp: new Date().toISOString()
      };

      // Transmission via Google Apps Script Web App
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Essential for Google Script endpoints
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      // Since mode is 'no-cors', we won't get a readable response body, 
      // but if the fetch doesn't throw, it's generally successful.
      setStatus('success');
      
      // Reset after showing success
      setTimeout(() => {
        setStatus('idle');
        setFormData({
          subject: '',
          sector: 'Blockchain / Web3',
          priority: 'Mission Critical',
          email: '',
          message: ''
        });
        setAttachedFile(null);
      }, 5000);

    } catch (error) {
      console.error("SECURE TUNNEL FAILURE:", error);
      alert("Critical Error: Transmission intercepted or failed. Please try again.");
      setStatus('idle');
    }
  };

  return (
    <section id="directives" className="py-40 bg-on-surface text-surface relative overflow-hidden">
      {/* Hidden File Input */}
      <input 
        type="file" 
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

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
          
          <motion.div 
             variants={variants.staggerContainer}
             initial="initial"
             whileInView="whileInView"
             viewport={{ once: true }}
             className="lg:col-span-6 space-y-12"
          >
            <div className="space-y-6">
              <motion.div variants={variants.scanReveal} className="flex items-center gap-3">
                 <span className="text-[10px] font-black uppercase tracking-[0.6em] text-secondary">Final Directive</span>
                 <div className="w-12 h-px bg-surface/20"></div>
              </motion.div>
              <motion.h2 variants={variants.fadeIn} className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                Initiate <br /> <span className="text-secondary">Connection.</span>
              </motion.h2>
              <motion.p variants={variants.fadeIn} className="text-xl md:text-2xl font-bold opacity-60 max-w-lg">
                The story of your data begins with a single query. Ready to extract the truth?
              </motion.p>
            </div>

            <motion.div variants={variants.staggerContainer} className="space-y-8">
               <motion.a variants={variants.fadeIn} href="mailto:Marvmuhd@gmail.com" className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-surface/5 border border-surface/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-surface transition-all duration-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Direct Mailbox</p>
                    <p className="text-2xl font-black tracking-tight">Marvmuhd@gmail.com</p>
                  </div>
               </motion.a>
               <motion.div variants={variants.fadeIn} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-surface/5 border border-surface/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-surface transition-all duration-500">
                    <Terminal size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Operations Hub</p>
                    <p className="text-xl font-black tracking-tight leading-tight text-secondary">Remote / Global</p>
                  </div>
               </motion.div>
               <motion.a 
                  variants={variants.fadeIn} 
                  href="https://t.me/ghostiemoh" 
                  target="_blank"
                  className="flex items-center gap-6 group cursor-pointer"
               >
                  <div className="w-14 h-14 rounded-2xl bg-surface/5 border border-surface/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-surface transition-all duration-500">
                    <Send size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Telegram DM</p>
                    <p className="text-xl font-black tracking-tight leading-tight">@ghostiemoh</p>
                  </div>
               </motion.a>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-6">
             <motion.div 
                variants={variants.springIn}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="bg-surface/5 backdrop-blur-3xl border border-surface/10 rounded-[4rem] p-12 md:p-16 space-y-10 relative overflow-hidden"
             >
                  {/* Success Overlay */}
                  <AnimatePresence>
                    {status === 'success' && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-20 bg-on-surface flex flex-col items-center justify-center text-center p-12 space-y-6"
                      >
                         <motion.div
                           initial={{ scale: 0 }}
                           animate={{ scale: 1 }}
                           transition={{ type: "spring", damping: 12 }}
                         >
                           <CheckCircle2 size={80} className="text-secondary" />
                         </motion.div>
                         <div className="space-y-2">
                           <h3 className="text-3xl font-black tracking-tighter uppercase whitespace-nowrap">Message Received</h3>
                           <p className="text-sm font-bold opacity-40 uppercase tracking-widest">Directive Received. Analyzing Data.</p>
                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-surface">
                    <div className="space-y-4">
                       <label className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 ml-1">Message Subject</label>
                       <input 
                         type="text" 
                         name="subject"
                         value={formData.subject}
                         onChange={handleInputChange}
                         placeholder="Project Name" 
                         className="w-full bg-transparent border-b border-surface/20 py-4 text-xl font-bold placeholder:opacity-20 focus:border-secondary focus:outline-none transition-colors"
                       />
                    </div>
                    <div className="space-y-4">
                       <label className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 ml-1">Project Sector</label>
                       <select 
                         name="sector"
                         value={formData.sector}
                         onChange={handleInputChange}
                         className="w-full bg-transparent border-b border-surface/20 py-4 text-xl font-bold focus:border-secondary focus:outline-none transition-colors appearance-none cursor-pointer"
                       >
                         <option className="bg-on-surface">Blockchain / Web3</option>
                         <option className="bg-on-surface">Data Analytics</option>
                         <option className="bg-on-surface">Forensic Audit</option>
                         <option className="bg-on-surface">Research & Ed</option>
                       </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-surface">
                    <div className="space-y-4">
                       <label className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 ml-1">Priority</label>
                       <select 
                         name="priority"
                         value={formData.priority}
                         onChange={handleInputChange}
                         className="w-full bg-transparent border-b border-surface/20 py-4 text-xl font-bold focus:border-secondary focus:outline-none transition-colors appearance-none cursor-pointer"
                       >
                         <option className="bg-on-surface text-secondary">Mission Critical</option>
                         <option className="bg-on-surface">Standard Protocol</option>
                         <option className="bg-on-surface text-secondary/50">Discovery / Planning</option>
                       </select>
                    </div>
                    <div className="space-y-4">
                       <label className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 ml-1">Your ID (Email)</label>
                       <input 
                         type="email" 
                         name="email"
                         value={formData.email}
                         onChange={handleInputChange}
                         placeholder="yourname@domain.com" 
                         className="w-full bg-transparent border-b border-surface/20 py-4 text-xl font-bold placeholder:opacity-20 focus:border-secondary focus:outline-none transition-colors"
                       />
                    </div>
                  </div>

                  <div className="space-y-4 text-surface">
                     <label className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 ml-1">Message Content</label>
                     <textarea 
                       name="message"
                       value={formData.message}
                       onChange={handleInputChange}
                       rows={3}
                       placeholder="How can I help you with your data..." 
                       className="w-full bg-transparent border-b border-surface/20 py-4 text-xl font-bold placeholder:opacity-20 focus:border-secondary focus:outline-none transition-colors resize-none"
                     />
                  </div>

                 <div className="flex flex-col md:flex-row gap-6 pt-4">
                    <motion.button 
                       onClick={handleTransmit}
                       disabled={status === 'transmitting'}
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                       className="flex-1 bg-secondary text-surface py-6 rounded-full font-black text-[11px] uppercase tracking-[0.5em] flex items-center justify-center gap-4 shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                       {status === 'transmitting' ? (
                         <>
                           Transmitting...
                           <Loader2 size={16} className="animate-spin" />
                         </>
                       ) : (
                         <>
                           Send Message
                           <Send size={16} />
                         </>
                       )}
                    </motion.button>
                    <motion.button 
                       onClick={() => fileInputRef.current.click()}
                       whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                       className="px-10 py-6 rounded-full border border-surface/10 font-black text-[11px] uppercase tracking-[0.5em] flex items-center justify-center gap-4 transition-all relative overflow-hidden"
                    >
                       {attachedFile ? attachedFile.name : 'Attach File'}
                       <Paperclip size={16} />
                       {attachedFile && (
                          <motion.div 
                            layoutId="attachment-glow"
                            className="absolute inset-0 bg-secondary/10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          />
                       )}
                    </motion.button>
                 </div>

                 <p className="text-[9px] font-black uppercase tracking-[0.3em] opacity-20 text-center">
                    Encrypted via end-to-end analytical tunnel.
                 </p>
             </motion.div>
          </div>

        </div>

        {/* Operational FAQ Section */}
        <motion.div 
          variants={variants.staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="mt-40 pt-20 border-t border-surface/10 grid grid-cols-1 md:grid-cols-3 gap-12"
        >
            <motion.div variants={variants.fadeIn}>
               <h4 className="text-secondary font-black text-xs uppercase tracking-widest mb-4">Remote Operations</h4>
               <p className="text-sm font-bold opacity-40">Operating globally. Available for remote synchronization across all time zones with 24/7 digital presence.</p>
            </motion.div>
            <motion.div variants={variants.fadeIn}>
               <h4 className="text-secondary font-black text-xs uppercase tracking-widest mb-4">Stack Protocol</h4>
               <p className="text-sm font-bold opacity-40">Python (Pandas/NumPy), SQL (PostgreSQL/BigQuery), Tableau, Power BI, and On-chain analysis (Dune/Flipside).</p>
            </motion.div>
            <motion.div variants={variants.fadeIn}>
               <h4 className="text-secondary font-black text-xs uppercase tracking-widest mb-4">Identity Verification</h4>
               <p className="text-sm font-bold opacity-40">Muhammad Auwal Abdulaziz. Verified Data Analyst. MetaDao Governance Contributor.</p>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecureDirective;
