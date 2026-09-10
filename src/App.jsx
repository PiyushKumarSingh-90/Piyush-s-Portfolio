import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Audio Context Provider
import { AudioProvider, useAudio } from './audio/AudioController';

// Global Effects & Entry
import MagicalBackground from './effects/MagicalBackground/MagicalBackground';
import CloudEntrance from './effects/CloudEntrance/CloudEntrance';
import DotCursor from './effects/DotCursor/DotCursor';

// Layout & Navigation
import Navbar from './components/navigation/Navbar';
import Footer from './components/layout/Footer';

// Sections
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Experience from './sections/Experience/Experience';
import Skills from './sections/Skills/Skills';
import Projects from './sections/Projects/Projects';
import Certifications from './sections/Certifications/Certifications';
import Contact from './sections/Contact/Contact';

gsap.registerPlugin(ScrollTrigger);

const AppContent = () => {
  const [showEntrance, setShowEntrance] = useState(() => !window.location.hash);
  const { startAudio } = useAudio();

  useEffect(() => {
    // Attempt to start audio immediately (browsers might block this until user interacts)
    startAudio();
  }, [startAudio]);

  // Handle Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    window.lenis = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0, 0);

    return () => {
      delete window.lenis;
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'instant', block: 'start' });
          ScrollTrigger.refresh();
        }, 50);
      }
    }
  }, []);

  const handleEntranceComplete = () => {
    setShowEntrance(false);
  };

  return (
    <>
      <DotCursor />
      <MagicalBackground />
      
      {showEntrance && (
        <CloudEntrance onComplete={handleEntranceComplete} />
      )}

      <div className="app-container" style={{ opacity: showEntrance ? 0.2 : 1, transition: 'opacity 2s ease' }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

function App() {
  return (
    <AudioProvider>
      <AppContent />
    </AudioProvider>
  );
}

export default App;
