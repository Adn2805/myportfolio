import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
import { FiArrowLeft, FiArrowRight, FiGrid } from 'react-icons/fi';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Sync hash on initial load and handle window hash changes
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && navSections.some(s => s.id === hash)) {
        setActiveSection(hash);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Desktop intersection observer for scroll-based highlight on >= 1024px
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1024) return;
      const sectionIds = navSections.map(s => s.id);
      
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectSection = (id) => {
    setActiveSection(id);
    window.history.pushState(null, '', `#${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentIndex = navSections.findIndex(s => s.id === activeSection);
  const prevSection = currentIndex > 0 ? navSections[currentIndex - 1] : null;
  const nextSection = currentIndex < navSections.length - 1 ? navSections[currentIndex + 1] : null;

  // Map section components for mobile single-view rendering
  const renderMobileSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero onSelectSection={handleSelectSection} />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'certifications':
        return <Certifications />;
      case 'education':
        return <Education />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onSelectSection={handleSelectSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-dark text-cream relative overflow-x-hidden">
      <DotGrid />
      <Navbar activeSection={activeSection} onSelectSection={handleSelectSection} />

      {/* ===================================================== */}
      {/* 1. DESKTOP VIEW (>= 1024px): FROZEN CONTINUOUS SCROLL */}
      {/* ===================================================== */}
      <main className="hidden lg:block relative z-10">
        <Hero onSelectSection={handleSelectSection} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>

      {/* ===================================================== */}
      {/* 2. MOBILE VIEW (< 1024px): APP-STYLE ACTIVE VIEW      */}
      {/* ===================================================== */}
      <main className="lg:hidden relative z-10 pt-14 min-h-screen flex flex-col justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="w-full flex-1"
          >
            {renderMobileSection()}
          </motion.div>
        </AnimatePresence>

        {/* Mobile Section Switcher Pagination Bar */}
        <div className="px-4 py-6 mt-4 border-t border-dark-border/60 bg-dark-alt/80 backdrop-blur-md">
          <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
            {prevSection ? (
              <button
                onClick={() => handleSelectSection(prevSection.id)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-dark-card border border-dark-border text-cream text-xs font-mono hover:border-lime/40 transition cursor-pointer"
              >
                <FiArrowLeft className="text-lime text-sm" />
                <span className="truncate max-w-[90px]">{prevSection.name}</span>
              </button>
            ) : (
              <div className="w-20" />
            )}

            <div className="text-[10px] font-mono text-blue-gray text-center">
              {currentIndex + 1} / {navSections.length}
            </div>

            {nextSection ? (
              <button
                onClick={() => handleSelectSection(nextSection.id)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-dark-card border border-dark-border text-cream text-xs font-mono hover:border-lime/40 transition cursor-pointer"
              >
                <span className="truncate max-w-[90px]">{nextSection.name}</span>
                <FiArrowRight className="text-lime text-sm" />
              </button>
            ) : (
              <button
                onClick={() => handleSelectSection('home')}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-lime text-dark font-bold text-xs font-mono shadow-md shadow-lime/20 cursor-pointer"
              >
                Back to Top ↑
              </button>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

