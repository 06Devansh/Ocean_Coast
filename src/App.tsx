import React, { useState } from 'react';
import { Navigation } from './components/Navigation/Navigation';
import { Hero } from './components/Hero/Hero';
import { EventScheduler } from './components/EventScheduler/EventScheduler';
import { VolunteerHub } from './components/VolunteerHub/VolunteerHub';
import { WasteTrack } from './components/WasteTrack/WasteTrack';
import { ContentCraft } from './components/ContentCraft/ContentCraft';
import { ImpactVision } from './components/ImpactVision/ImpactVision';
import { EduEngage } from './components/EduEngage/EduEngage';
import { AboutUs } from './components/AboutUs/AboutUs';

export type Section = 'home' | 'events' | 'volunteers' | 'waste' | 'content' | 'impact' | 'chat' | 'about';

function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero onNavigate={setActiveSection} />;
      case 'events':
        return <EventScheduler />;
      case 'volunteers':
        return <VolunteerHub />;
      case 'waste':
        return <WasteTrack />;
      case 'content':
        return <ContentCraft />;
      case 'impact':
        return <ImpactVision />;
      case 'chat':
        return <EduEngage />;
      case 'about':
        return <AboutUs />;
      default:
        return <Hero onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50">
      <Navigation activeSection={activeSection} onNavigate={setActiveSection} />
      <main className="pt-20">
        {renderSection()}
      </main>
    </div>
  );
}

export default App;