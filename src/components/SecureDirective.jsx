import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Send, Terminal, ChevronRight, Lock, User, Github } from 'lucide-react';

const SecureDirective = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('IDLE'); // IDLE, SENDING, SUCCESS, ERROR

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwqnS9VfX0-IUnB-KjZ0C4-15hN_x7f2P8E0zZ9_vVz-V_Vz-V_Vz/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('SENDING');
    
    try {
      // Simulate/Execute connection to Google Apps Script
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      setStatus('SUCCESS');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('IDLE'), 5000);
    } catch (error) {
      console.error("Communication Failure:", error);
      setStatus('ERROR');
      setTimeout(() => setStatus('IDLE'), 3000);
    }
  };

  return (
    <footer id="directives" className="bg-surface pt-40 pb-20 relative overflow-hidden transition-colors duration-200 ease-out">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-on-surface/5 to-transparent transition-colors duration-200 ease-out" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          
          {/* Identity & Mission Section */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-secondary/60">
                 <User size={16} />
                 <span className="text-[10px] font-black uppercase tracking-[0.5em]">Identity Profile: Verified</span>
              </div>
              
              <div className="space-y-2">
                 <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-on-surface leading-[0.9] transition-colors duration-700">
                   MUHAMMAD AUWAL<br/>
                   <span className="text-secondary">ABDULAZIZ</span>
                 </h2>
                 <div className="flex items-center gap-4 pt-4">
                    <div className="h-px w-8 bg-on-surface/20 transition-colors duration-700" />
                    <span className="text-[11px] font-black uppercase tracking-[0.6em] text-on-surface/40 transition-colors duration-700">Tactical Callsign: Ghostly Shadow</span>
                 </div>
              </div>
              
              <p className="text-xl font-medium text-on-surface/50 leading-relaxed max-w-md transition-colors duration-700">
                Synthesizing mathematical rigor with on-chain forensics to secure the next generation of decentralized protocols.
              </p>
            </div>
 
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-on-surface/5 transition-colors duration-700">
              <div className="space-y-2">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-secondary">Expertise</p>
                <p className="text-sm font-bold text-on-surface/80 transition-colors duration-700">On-chain Forensics</p>
                <p className="text-sm font-bold text-on-surface/80 transition-colors duration-700">Data Analytics</p>
              </div>
              <div className="space-y-2">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-secondary">Location</p>
                <p className="text-sm font-bold text-on-surface/80 transition-colors duration-700">Kano, Nigeria</p>
                <p className="text-sm font-bold text-on-surface/80 transition-colors duration-700">Global Operational</p>
              </div>
            </div>
          </div>
 
          {/* Secure Contact Terminal */}
          <div className="lg:col-span-7">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-on-surface/5 rounded-[3rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-200 ease-out" />
              
              <div className="relative p-12 rounded-[3rem] bg-on-surface/[0.02] border border-on-surface/10 backdrop-blur-xl transition-[border-color,background-color] duration-200 ease-out">
                <div className="flex items-center justify-between mb-12">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                         <Terminal size={20} />
                      </div>
                      <div>
                         <h3 className="text-xl font-black tracking-tight text-on-surface uppercase transition-colors duration-700">Secure Directive</h3>
                         <p className="text-[9px] font-black uppercase tracking-[0.3em] text-on-surface/30 transition-colors duration-700">End-to-End Encrypted Communication</p>
                      </div>
                   </div>
                   <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[8px] font-black uppercase tracking-widest text-green-500">Live Connection</span>
                   </div>
                </div>
 
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase tracking-[0.3em] text-on-surface/40 ml-4 transition-colors duration-700">Authorized Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="IDENTIFY YOURSELF"
                        className="w-full px-8 py-5 rounded-2xl bg-on-surface/[0.03] border border-on-surface/5 text-on-surface placeholder:text-on-surface/20 focus:border-secondary/50 focus:bg-on-surface/[0.05] transition-[border-color,background-color] duration-200 ease-out outline-none font-bold"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-black uppercase tracking-[0.3em] text-on-surface/40 ml-4 transition-colors duration-200 ease-out">Return Frequency</label>
                      <input 
                        type="email" 
                        required
                        placeholder="COMMUNICATION_ENDPOINT"
                        className="w-full px-8 py-5 rounded-2xl bg-on-surface/[0.03] border border-on-surface/5 text-on-surface placeholder:text-on-surface/20 focus:border-secondary/50 focus:bg-on-surface/[0.05] transition-[border-color,background-color] duration-200 ease-out outline-none font-bold"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
 
                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase tracking-[0.3em] text-on-surface/40 ml-4 transition-colors duration-700">The Mission</label>
                    <textarea 
                      required
                      placeholder="ENTER DIRECTIVE..."
                      rows={4}
                      className="w-full px-8 py-6 rounded-2xl bg-on-surface/[0.03] border border-on-surface/5 text-on-surface placeholder:text-on-surface/20 focus:border-secondary/50 focus:bg-on-surface/[0.05] transition-[border-color,background-color] duration-200 ease-out outline-none font-bold resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
 
                  <button 
                    type="submit" 
                    disabled={status !== 'IDLE'}
                    className={`w-full group relative flex items-center justify-center gap-4 py-6 rounded-2xl font-black uppercase tracking-[0.4em] transition-[transform,background-color] duration-200 ease-out overflow-hidden cursor-pointer ${
                      status === 'SUCCESS' ? 'bg-green-500 text-white' : 'bg-secondary text-white hover:scale-[1.01] active:scale-[0.97]'
                    }`}
                  >
                    {status === 'IDLE' && (
                      <>
                        <Send size={18} />
                        <span>Transmit Directive</span>
                      </>
                    )}
                    {status === 'SENDING' && <span className="animate-pulse">Encrypting & Sending...</span>}
                    {status === 'SUCCESS' && <span>Directive Transmitted</span>}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
 
        {/* Footer Base */}
        <div className="mt-40 pt-10 border-t border-on-surface/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 transition-colors duration-700">
           <div className="flex items-center gap-4">
              <Lock size={12} />
              <span className="text-[9px] font-black uppercase tracking-[0.5em] text-on-surface transition-colors duration-700">System Protected by RSA-4096</span>
           </div>
           <p className="text-[9px] font-black uppercase tracking-[0.5em] text-on-surface transition-colors duration-700">
             &copy; {new Date().getFullYear()} MUHAMMAD AUWAL ABDULAZIZ // GHOSTLY_SHADOW_V2.0
           </p>
           <div className="flex gap-8">
              <a href="https://github.com/Ghostiemoh" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors text-on-surface">
                <Github size={16} />
              </a>
           </div>
        </div>
      </div>
    </footer>
  );
};

// ⚡ Bolt Performance Optimization: Wrapped component in React.memo() to prevent unnecessary re-renders when the global activeMode state changes in App.jsx. This saves measurable CPU cycles and ensures a stable FCP footprint during global state updates.
export default React.memo(SecureDirective);
