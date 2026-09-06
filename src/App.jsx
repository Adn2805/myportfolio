import React from 'react';
import Navbar from './components/Layout/Navbar';
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
  return (
    <div className="min-h-screen bg-dark text-cream relative">
      <DotGrid />
      <Navbar />
      <main className="relative z-10">
        <Hero />
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
