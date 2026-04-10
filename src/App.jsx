import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Methodology from './components/Methodology';
import ProjectGrid from './components/ProjectGrid';
import IntelHub from './components/IntelHub';
import Experience from './components/Experience';
import Services from './components/Services';
import SecureDirective from './components/SecureDirective';

function App() {
  return (
    <Layout>
      <Hero />
      <div id="about" className="py-20 bg-surface">
         <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
               <div className="lg:col-span-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary">The Specialist</span>
               </div>
               <div className="lg:col-span-8">
                  <p className="text-3xl md:text-5xl font-black tracking-tighter leading-[1.1] text-on-surface">
                    A Mathematics graduate with a relentless focus on the <span className="text-secondary text-on-surface/20 decoration-secondary underline underline-offset-8 transition-all hover:text-secondary">Web3 ecosystem</span>. 
                    I bridge the gap between abstract data shards and actionable protocol intelligence.
                  </p>
               </div>
            </div>
         </div>
      </div>
      <Methodology />
      <ProjectGrid />
      <IntelHub />
      <Experience />
      <Services />
      <SecureDirective />
    </Layout>
  );
}

export default App;
