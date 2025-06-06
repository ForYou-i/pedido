import React from 'react';
import StarryBackground from './components/StarryBackground';
import OpeningPage from './pages/OpeningPage';
import StoryPage from './pages/StoryPage';
import InterlinesPage from './pages/InterlinesPage';
import ProposalPage from './pages/ProposalPage';
import FinalPage from './pages/FinalPage';

function App() {
  return (
    <div className="relative">
      <StarryBackground />
      <div className="snap-y snap-mandatory h-screen overflow-y-auto">
        <div className="snap-start"><OpeningPage /></div>
        <div className="snap-start"><StoryPage /></div>
        <div className="snap-start"><InterlinesPage /></div>
        <div className="snap-start"><ProposalPage /></div>
        <div className="snap-start"><FinalPage /></div>
      </div>
    </div>
  );
}

export default App;