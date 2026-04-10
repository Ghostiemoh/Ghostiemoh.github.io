import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import SecureDirective from './components/SecureDirective';
import { motion } from 'framer-motion';

function App() {
  return (
    <Layout>
      <Hero />
      
      {/* Narrative Break */}
      <section className="py-20 bg-surface flex justify-center">
         <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="w-1 h-24 bg-gradient-to-b from-secondary to-transparent rounded-full"
         ></motion.div>
      </section>

      <ProjectGrid />

      {/* Archival Intel Section (Brief Timeline) */}
      <section id="intel" className="py-32 bg-on-surface text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-secondary rounded-full blur-[150px]"></div>
         </div>

         <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
               <div className="lg:col-span-4 space-y-6">
                  <p className="text-[11px] font-black uppercase tracking-[0.5em] text-secondary">Technical Intel</p>
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Stack Shards</h2>
                  <p className="text-lg opacity-60 font-medium leading-relaxed">
                     The infrastructure supporting the Archival Singularity is built on a high-bandwidth toolset.
                  </p>
               </div>
               <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { label: 'Engineering', items: ['React', 'Next.js', 'Typescript', 'Node.js'] },
                    { label: 'Architecture', items: ['Framer Motion', 'Tailwind CSS', 'Redux', 'Zustand'] },
                    { label: 'Security', items: ['PostgreSQL', 'Auth.js', 'Docker', 'Ghostie Protocol'] },
                    { label: 'Marketability', items: ['Product Strategy', 'Narrative Design', 'Scaling', 'Intel'] }
                  ].map((shard, i) => (
                    <motion.div 
                       key={shard.label}
                       initial={{ opacity: 0, x: 20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.1 }}
                       className="p-8 border border-white/10 rounded-[2.5rem] bg-white/5 backdrop-blur-sm group hover:bg-white/10 transition-colors"
                    >
                       <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary mb-6">{shard.label}</h4>
                       <div className="flex flex-wrap gap-2">
                          {shard.items.map(item => (
                            <span key={item} className="text-sm font-bold opacity-60 group-hover:opacity-100 transition-opacity">
                               {item} <span className="text-secondary/40 px-1">•</span>
                            </span>
                          ))}
                       </div>
                    </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      <SecureDirective />
    </Layout>
  );
}

export default App;
