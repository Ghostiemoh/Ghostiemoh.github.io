import React from 'react';
import { motion } from 'framer-motion';
import { Search, BarChart4, Cpu } from 'lucide-react';
import { MODES } from '../utils/content';

const NexusToggle = ({ activeMode, setActiveMode }) => {
  const modes = [
    { id: MODES.ANALYTICS, label: 'ANALYTICS', icon: BarChart4, sector: 'SEC-01' },
    { id: MODES.ON_CHAIN, label: 'ON-CHAIN', icon: Search, sector: 'SEC-02' },
    { id: MODES.AGENTIC, label: 'AGENTIC', icon: Cpu, sector: 'SEC-03' }
  ];

  return (
    <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[100] px-4 w-full max-w-xl">
      <div className="relative group">
        {/* Glow Layer */}
        <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 via-white/5 to-secondary/20 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
        
        <nav className="relative flex items-center justify-between p-2 rounded-[2rem] bg-black/40 backdrop-blur-3xl border border-white/10 shadow-2xl overflow-hidden">
          {modes.map((mode) => {
            const Icon = mode.icon;
            const isActive = activeMode === mode.id;

            return (
              <button
                key={mode.id}
                onClick={() => setActiveMode(mode.id)}
                aria-label={`Switch to ${mode.label} mode`}
                className="relative flex-1 group/btn"
              >
                <div className={`relative flex flex-col items-center gap-1.5 py-4 px-2 rounded-2xl transition-all duration-500 ${
                  isActive ? 'text-white' : 'text-white/20 hover:text-white/40'
                }`}>
                  {/* Active Background Shimmer */}
                  {isActive && (
                    <motion.div
                      layoutId="nexus-bg"
                      className="absolute inset-0 bg-white/[0.03] border border-white/10 rounded-2xl shadow-inner"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}

                  <div className="relative flex flex-col items-center">
                    <Icon size={18} className={`transition-transform duration-500 ${isActive ? 'scale-110 text-secondary' : 'scale-100'}`} />
                    <span className="text-[10px] font-black tracking-[0.2em] mt-2 uppercase">
                      {mode.label}
                    </span>
                    <span className={`text-[7px] font-bold tracking-[0.3em] opacity-0 group-hover/btn:opacity-30 transition-opacity mt-1 ${isActive ? 'text-secondary opacity-40' : ''}`}>
                      {mode.sector}
                    </span>
                  </div>

                  {/* Active Indicator Glint */}
                  {isActive && (
                    <motion.div 
                      layoutId="active-glint"
                      className="absolute -bottom-1 w-12 h-[2px] bg-secondary shadow-[0_0_12px_rgba(255,255,255,0.5)] rounded-full" 
                    />
                  )}
                </div>
              </button>
            );
          })}
        </nav>

        {/* System Status readout */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 whitespace-nowrap opacity-20 group-hover:opacity-40 transition-opacity duration-700">
           <div className="w-1 h-1 rounded-full bg-secondary animate-pulse" />
           <span className="text-[7px] font-black uppercase tracking-[0.5em] text-white">System Status: Nominal // Authorized Access Only</span>
        </div>
      </div>
    </div>
  );
};

export default NexusToggle;
