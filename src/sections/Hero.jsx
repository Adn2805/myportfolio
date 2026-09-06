import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import StickyNote from '../components/UI/StickyNote';
import { FiMapPin, FiCheckCircle } from 'react-icons/fi';

const roles = [
  "Full-Stack Developer",
  "AI Engineer",
  "Software Engineer",
  "Prompt Engineer",
  "Solutions Architect",
  "Data Engineer"
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const currentRole = roles[currentRoleIndex];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(40);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypingSpeed(90);
      }, typingSpeed);
    }

    if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden lg:pl-24 bg-gradient-to-br from-dark via-dark-alt to-[#0D1520] pt-16 lg:pt-0 pb-12 lg:pb-16">
      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-radial from-amber-500/10 via-amber-900/5 to-transparent pointer-events-none rounded-full blur-3xl opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-gradient-radial from-lime/5 to-transparent pointer-events-none rounded-full blur-3xl opacity-40 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-6 sm:py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Main Copy and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="mb-3"
            >
              <span className="inline-block text-cream-dark/70 font-mono text-[11px] sm:text-xs md:text-sm tracking-wider px-3 py-1 bg-dark-card border border-dark-border rounded-full">
                Developer Portfolio / Builder Desk
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl font-heading font-bold text-cream tracking-tight leading-[1.15]"
            >
              Hi, I'm <br className="hidden sm:inline" />
              <span className="text-white">Mohammed Adnan</span>
              <span className="animate-blink text-lime">_</span>
            </motion.h1>

            {/* Role Typewriter */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-9 md:h-10 mt-3 sm:mt-4 flex items-center"
            >
              <div className="text-sm sm:text-lg md:text-xl text-blue-gray font-mono bg-dark-card/60 border border-dark-border/80 px-3 py-1 sm:px-3.5 sm:py-1 rounded-md inline-flex items-center">
                <span className="text-lime mr-2">&gt;</span>
                <span className="text-cream font-medium">{displayText}</span>
                <span className="inline-block w-2 h-4 md:h-5 bg-lime ml-1.5 align-middle animate-pulse"></span>
              </div>
            </motion.div>

            {/* Pitch */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-blue-gray-light text-sm sm:text-base md:text-lg mt-4 sm:mt-5 max-w-xl leading-relaxed font-body"
            >
              I turn ideas into real-world solutions using code, curiosity, and practical problem solving.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto"
            >
              <a 
                href="#projects" 
                className="bg-lime text-dark font-heading font-bold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full hover:bg-lime-dim transition-all text-xs sm:text-sm inline-flex items-center justify-center gap-2 shadow-lg shadow-lime/20 glow-lime-hover transform hover:-translate-y-0.5 flex-1 sm:flex-none text-center"
              >
                View My Work
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a 
                href="#contact" 
                className="border border-cream/30 hover:border-cream text-cream font-heading font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-dark-card/40 hover:bg-dark-card transition-all text-xs sm:text-sm flex-1 sm:flex-none text-center"
              >
                Let's Connect
              </a>
            </motion.div>

            {/* Bottom Student Note Annotation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-6 sm:mt-8 pt-4 border-t border-dark-border/40 w-full max-w-lg"
            >
              <p className="annotation text-cream-dark/60 text-xs sm:text-sm italic">
                ✎ "A small developer today, a bigger impact tomorrow."
              </p>
            </motion.div>
          </div>

          {/* Right Column: Clean Builder Workspace Deck (Desktop only to keep mobile fast and uncluttered) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col gap-5 relative">
            
            {/* Top Row: Sticky Notes Pair */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, rotate: -4, y: 20 }}
                animate={{ opacity: 1, rotate: -2, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <StickyNote rotation={-2} className="h-full flex flex-col justify-between">
                  <div className="font-heading font-bold text-xs uppercase tracking-wider text-dark border-b border-dark/15 pb-2 mb-2">
                    Discipline Creates Freedom
                  </div>
                  <div className="font-heading italic text-[11px] text-dark/80">
                    "Same person, higher goals."
                  </div>
                </StickyNote>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, rotate: 4, y: 20 }}
                animate={{ opacity: 1, rotate: 2, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <StickyNote rotation={2} className="h-full">
                  <div className="text-xs text-dark">
                    <div className="font-bold font-mono border-b border-dark/15 pb-1.5 mb-2 flex items-center gap-1.5">
                      <FiCheckCircle className="text-dark text-sm" /> Status:
                    </div>
                    <ul className="space-y-1 text-[11px] font-mono leading-tight">
                      <li>✓ Learning</li>
                      <li>✓ Building</li>
                      <li>✓ Exploring</li>
                      <li>✓ Open to Work</li>
                    </ul>
                    <div className="text-[10px] font-mono mt-2.5 pt-1.5 border-t border-dark/15 text-dark/80 flex items-center gap-1">
                      <FiMapPin className="text-dark text-xs" />
                      Ambur, Tamil Nadu, India
                    </div>
                  </div>
                </StickyNote>
              </motion.div>
            </div>

            {/* Sleek Terminal / Code Profile Window */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-dark-card border border-dark-border rounded-card-lg overflow-hidden shadow-2xl"
            >
              <div className="bg-dark-alt px-4 py-2.5 border-b border-dark-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  <span className="font-mono text-xs text-blue-gray ml-2">profile.json</span>
                </div>
                <span className="text-[10px] font-mono text-lime px-2 py-0.5 rounded bg-lime/10 border border-lime/20">
                  READY
                </span>
              </div>

              <div className="p-4 font-mono text-xs leading-relaxed text-blue-gray-light bg-dark/60">
                <div><span className="text-purple-400">const</span> <span className="text-cream font-semibold">engineer</span> = &#123;</div>
                <div className="pl-4">
                  <span className="text-blue-400">name</span>: <span className="text-lime">"Mohammed Adnan"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">education</span>: <span className="text-lime">"Integrated M.Tech @ VIT Vellore"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">stack</span>: [<span className="text-cream">"AI/ML"</span>, <span className="text-cream">"Full-Stack"</span>, <span className="text-cream">"Cloud & APIs"</span>],
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">openToOpportunities</span>: <span className="text-lime font-bold">true</span>
                </div>
                <div>&#125;;</div>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-10 lg:mt-16 flex flex-col items-center justify-center gap-1 text-blue-gray text-xs font-mono"
        >
          <span>Scroll to explore</span>
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-lime text-sm"
          >
            ↓
          </motion.span>
        </motion.div>

      </div>
    </section>
  );
}
