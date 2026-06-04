import React, { useState } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import BentoHub from './components/BentoHub';
import NexusToggle from './components/NexusToggle';
import SecureDirective from './components/SecureDirective';
import Methodology from './components/Methodology';
import Experience from './components/Experience';
import IntelHub from './components/IntelHub';
import Services from './components/Services';
import { MODES } from './utils/content';

function App() {
  const [activeMode, setActiveMode] = useState(MODES.ANALYTICS);

  return (
    <Layout>
      <NexusToggle activeMode={activeMode} setActiveMode={setActiveMode} />
      <Hero activeMode={activeMode} />
      
      <div id="main-content" className="relative z-10">
        <Methodology />
        <BentoHub activeMode={activeMode} />
        <IntelHub />
        <Experience />
        <Services />
      </div>

      <SecureDirective />
    </Layout>
  );
}

export default App;
