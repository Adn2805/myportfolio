import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/UI/SectionHeader';
import ScrollReveal from '../components/UI/ScrollReveal';
import { FiArrowUpRight, FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: "ADAS Engine",
    tags: ["AI", "Backend", "Auto Tech"],
    date: "Jun to Jul 2026",
    desc: "Advanced driver-assistance diagnostics & sensor fusion analysis platform. Analyzed 500+ events using FastAPI/Pandas with automated classifier.",
    tech: ["Python", "FastAPI", "React", "Pandas"],
    gradient: "from-blue-900/40 to-cyan-900/30",
    link: "https://github.com/Adn2805/ADAS-False-Positive-Engine"
  },
  {
    title: "NexusIntel",
    tags: ["Full-Stack", "AI", "FinTech"],
    date: "Dec 2025 to Jan 2026",
    desc: "AI-powered market intelligence platform analyzing global news across 150+ stocks, 20+ sectors, and ETFs with rule-based NLP impact scoring.",
    tech: ["Next.js", "React", "Zustand", "Recharts"],
    gradient: "from-purple-900/40 to-indigo-900/30",
    link: "https://github.com/Adn2805/nexus-intel"
  },
  {
    title: "VisualDebate",
    tags: ["AI", "NLP"],
    date: "Mar to Apr 2026",
    desc: "AI credibility intelligence platform with RAG-based fact-checking pipeline using FAISS + DistilBERT, claim verification, and timeline visuals.",
    tech: ["Python", "FastAPI", "Streamlit", "Docker"],
    gradient: "from-green-900/40 to-teal-900/30",
    link: "https://github.com/Adn2805/visualdebate"
  },
  {
    title: "ESP32 Secure Encryption",
    tags: ["Embedded Security", "Cryptography"],
    date: "Feb to Mar 2025",
    desc: "Hardware AES-128 + SHA-256 encryption with session key rotation and replay attack protection for embedded device security experimentation.",
    tech: ["C/C++", "Arduino", "AES-128", "SHA-256"],
    gradient: "from-red-900/40 to-orange-900/30",
    link: "https://github.com/Adn2805"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-14 sm:py-20 md:py-28 lg:pl-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 sm:gap-4 mb-2">
            <div>
              <SectionHeader number="04" title="Featured Projects" annotation="things I've built" />
              <p className="text-blue-gray text-xs sm:text-base mt-1 sm:mt-2">
                Turning ideas into real-world, high-performance systems.
              </p>
            </div>
            <a 
              href="https://github.com/Adn2805" 
              target="_blank" 
              rel="noreferrer"
              className="border border-cream/30 text-cream font-mono text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full hover:bg-cream/10 transition-colors inline-flex items-center gap-2 self-start sm:self-auto shrink-0"
            >
              View All on GitHub <FiArrowUpRight />
            </a>
          </div>
        </ScrollReveal>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.1}>
              <motion.div 
                className="bg-dark-card border border-dark-border rounded-card-lg overflow-hidden group hover:border-dark-border/90 transition-all duration-300 hover:shadow-xl h-full flex flex-col justify-between"
              >
                <div>
                  {/* Image area */}
                  <div className={`h-36 sm:h-40 relative overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                    <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none"></div>
                    <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105 bg-black/15"></div>
                    
                    <div className="absolute bottom-2.5 left-3 flex flex-wrap gap-1.5 z-10">
                      {project.tags.map((tag) => (
                        <span key={tag} className="bg-dark/90 backdrop-blur-sm text-lime text-[10px] font-mono px-2 py-0.5 rounded-sm border border-dark-border">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content area */}
                  <div className="p-4 sm:p-5">
                    <h3 className="font-heading font-bold text-base sm:text-lg text-cream group-hover:text-lime transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-blue-gray text-[11px] sm:text-xs font-mono mt-0.5 sm:mt-1 block">
                      {project.date}
                    </span>
                    <p className="text-blue-gray-light text-xs sm:text-sm mt-2 sm:mt-2.5 leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 pt-0">
                  <div className="flex justify-between items-center pt-3 border-t border-dark-border/50">
                    <div className="flex flex-wrap gap-1.5 max-w-[80%]">
                      {project.tech.map((techItem) => (
                        <span key={techItem} className="text-[10px] font-mono text-blue-gray-light bg-dark border border-dark-border px-2 py-0.5 rounded-sm">
                          {techItem}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.link} 
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-full bg-dark border border-dark-border flex items-center justify-center text-cream hover:bg-lime hover:text-dark hover:border-lime transition-colors shrink-0"
                      title="View GitHub Repository"
                    >
                      <FiArrowUpRight />
                    </a>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Freelance Project Highlight */}
        <ScrollReveal delay={0.2}>
          <div className="mt-8 sm:mt-10 bg-dark-card border border-dark-border rounded-card-lg p-5 sm:p-6 md:p-8 flex flex-col md:flex-row gap-5 sm:gap-6 items-start md:items-center justify-between shadow-lg">
            <div className="flex-1">
              <div className="inline-block font-mono text-[11px] sm:text-xs text-lime uppercase tracking-wider mb-1.5 sm:mb-2">
                // Freelance Project
              </div>
              <h4 className="font-heading text-lg sm:text-xl font-bold text-cream">
                BCC Football '26
              </h4>
              <p className="text-blue-gray-light text-xs sm:text-sm md:text-base mt-1.5 sm:mt-2 max-w-2xl leading-relaxed">
                Real-time tournament tracker with a UCL-style bracket algorithm, instant Firebase/Firestore live state sync, and a dedicated admin portal for referees.
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                {["React.js", "Firebase", "Firestore", "Tailwind CSS", "Real-time Sync"].map((t) => (
                  <span key={t} className="bg-dark text-blue-gray-light text-[10px] sm:text-xs font-mono px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-sm border border-dark-border">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2.5 sm:gap-3 shrink-0 w-full sm:w-auto mt-2 sm:mt-0">
              <a 
                href="https://github.com/Adn2805/bcc-football-2026" 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-dark border border-dark-border hover:border-lime text-cream font-mono text-xs px-4 py-2.5 rounded-full transition-colors text-center"
              >
                <FiGithub /> GitHub
              </a>
              <a 
                href="https://bcc-football-2026.vercel.app/" 
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-lime text-dark font-mono font-bold text-xs px-4 py-2.5 rounded-full hover:bg-lime-dim transition-colors text-center"
              >
                <FiExternalLink /> Live Site
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;
