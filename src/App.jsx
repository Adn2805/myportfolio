import React, { useState, useEffect } from 'react';
import Navbar, { navSections } from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import DotGrid from './components/Background/DotGrid';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Education from './sections/Education';
import Contact from './sections/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Real-time scroll spy that updates activeSection on both mobile and desktop
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = navSections.map(s => s.id);
      const scrollPosition = window.scrollY + 220;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler that compensates for mobile header height
  const handleSelectSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const isMobile = window.innerWidth < 1024;
      const offset = isMobile ? 84 : 0;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = Math.max(0, elementPosition - offset);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-dark text-cream relative overflow-x-hidden selection:bg-lime/20 selection:text-cream">
      <DotGrid />
      <Navbar activeSection={activeSection} onSelectSection={handleSelectSection} />

      {/* Main Continuous Document Flow (100% stable across all screen sizes) */}
      <main className="relative z-10 pt-16 sm:pt-20 lg:pt-0">
        <Hero onSelectSection={handleSelectSection} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}


