import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PolaroidFrame from '../components/UI/PolaroidFrame';
import SectionHeader from '../components/UI/SectionHeader';
import ScrollReveal from '../components/UI/ScrollReveal';
import StickyNote from '../components/UI/StickyNote';
import { FiBookOpen, FiMapPin, FiZap, FiCheck } from 'react-icons/fi';

export default function About() {
  const [isPrinciplesExpanded, setIsPrinciplesExpanded] = useState(false);

  const principles = [
    "01 Understand before building",
    "02 Solve the right problem",
    "03 Keep things simple",
    "04 Let AI assist, not replace thinking",
    "05 Build software people enjoy using"
  ];

  return (
    <section id="about" className="py-14 sm:py-20 md:py-28 relative lg:pl-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeader number="01" title="About Me" annotation="who am I?" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mt-4 sm:mt-8 md:mt-10">
          
          {/* Left column: Scrapbook Photo Presentation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <ScrollReveal direction="left">
              <div className="relative w-full max-w-[260px] sm:max-w-[310px] md:max-w-[330px] my-3 sm:my-4">
                
                {/* Background decorative scrapbook card (desktop only) */}
                <div className="hidden sm:block absolute -bottom-5 -right-5 w-full h-full bg-[#EADCC5]/20 border border-dark-border/40 rounded-sm -rotate-3 -z-10 backdrop-blur-xs"></div>
                
                {/* Main Polaroid Photo of Mohammed Adnan */}
                <PolaroidFrame
                  imageSrc="/adnan-photo.jpg"
                  alt="Mohammed Adnan P speaking at podium"
                  caption="Mohammed Adnan P"
                  subtitle="Aspiring Software Engineer"
                  rotation="-2deg"
                  aspectRatio="aspect-[4/5]"
                  className="w-full"
                />

                {/* Pinned Note at Top Right */}
                <div className="absolute -top-3 sm:-top-4 -right-2 sm:-right-6 z-30 pointer-events-none">
                  <StickyNote rotation={5} className="py-1.5 px-2.5 sm:py-2 sm:px-3 shadow-md bg-[#F3EAD8]">
                    <span className="font-heading italic text-[10px] sm:text-xs text-dark font-medium whitespace-nowrap block">
                      "Good ideas happen anywhere."
                    </span>
                  </StickyNote>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right column: Bio text (Justified formatting) */}
          <div className="lg:col-span-7 flex flex-col">
            <ScrollReveal direction="up">
              <div className="space-y-3.5 sm:space-y-4">
                <p className="text-blue-gray-light text-sm sm:text-base md:text-lg leading-relaxed font-body text-justify">
                  I'm <span className="text-cream font-semibold">Mohammed Adnan</span>, a final-year Integrated M.Tech Software Engineering student at <span className="text-cream">VIT Vellore</span>. I enjoy understanding problems, spotting overlooked opportunities, and combining AI, data, and software engineering into practical systems that create real value.
                </p>
                <p className="text-blue-gray-light text-sm sm:text-base md:text-lg leading-relaxed font-body text-justify">
                  My goal isn't just to write code, but to build systems that are <span className="text-lime font-medium underline decoration-lime/40 underline-offset-4">practical, reliable, and worth using</span>.
                </p>
              </div>

              {/* Info chips */}
              <div className="flex flex-wrap gap-2 sm:gap-2.5 mt-5 sm:mt-6">
                <div className="bg-dark-card border border-dark-border rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-cream flex items-center gap-2 shadow-sm">
                  <FiBookOpen className="text-lime shrink-0 text-xs sm:text-sm" />
                  <span>M.Tech Integrated Software Engineering</span>
                </div>
                <div className="bg-dark-card border border-dark-border rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-cream flex items-center gap-2 shadow-sm">
                  <FiMapPin className="text-lime shrink-0 text-xs sm:text-sm" />
                  <span>Ambur, Tamil Nadu, India</span>
                </div>
                <div className="bg-dark-card border border-dark-border rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-lime flex items-center gap-2 shadow-sm">
                  <FiZap className="text-lime shrink-0 animate-pulse text-xs sm:text-sm" />
                  <span>Open to Opportunities</span>
                </div>
              </div>

              {/* Engineering Principles */}
              <div className="mt-6 sm:mt-8">
                <div className="hidden sm:block">
                  <StickyNote rotation={1} className="p-5">
                    <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-3 text-dark border-b border-dark/15 pb-2">
                      Engineering Principles
                    </h3>
                    <ul className="font-mono text-xs sm:text-sm space-y-2 text-dark font-medium">
                      {principles.map((p, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <FiCheck className="text-dark shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </StickyNote>
                </div>

                {/* Mobile Accordion */}
                <div className="sm:hidden">
                  <button 
                    onClick={() => setIsPrinciplesExpanded(!isPrinciplesExpanded)}
                    className="w-full flex justify-between items-center bg-dark-card border border-dark-border rounded-card px-4 py-3"
                  >
                    <span className="font-heading font-semibold text-cream text-xs">Engineering Principles</span>
                    <span className="text-lime font-mono text-xs">{isPrinciplesExpanded ? '−' : '+'}</span>
                  </button>
                  <AnimatePresence>
                    {isPrinciplesExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <ul className="font-mono text-xs space-y-2 mt-2.5 p-3.5 bg-dark-card/60 border border-dark-border rounded-card text-blue-gray-light">
                          {principles.map((p, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="text-lime">•</span>
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="mt-5 sm:mt-6 font-mono text-[11px] sm:text-xs text-lime tracking-widest uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-lime"></span>
                Building · Learning · Improving
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
