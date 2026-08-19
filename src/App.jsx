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

// Bolt Optimization: Memoize heavy, static sections to prevent expensive
// application-wide re-renders when the activeMode state changes.
const MemoizedMethodology = React.memo(Methodology);
const MemoizedIntelHub = React.memo(IntelHub);
const MemoizedExperience = React.memo(Experience);
const MemoizedServices = React.memo(Services);
const MemoizedSecureDirective = React.memo(SecureDirective);

function App() {
  const [activeMode, setActiveMode] = useState(MODES.ANALYTICS);

  return (
    <Layout>
      <NexusToggle activeMode={activeMode} setActiveMode={setActiveMode} />
      <Hero activeMode={activeMode} />
      
      <div id="main-content" className="relative z-10">
        <MemoizedMethodology />
        <BentoHub activeMode={activeMode} />
        <MemoizedIntelHub />
        <MemoizedExperience />
        <MemoizedServices />
      </div>

      <MemoizedSecureDirective />
    </Layout>
  );
}

export default App;
