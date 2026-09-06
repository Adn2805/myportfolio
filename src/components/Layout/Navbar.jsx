import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineBars3, HiXMark } from 'react-icons/hi2';
import { 
  FiHome, FiUser, FiCpu, FiBriefcase, FiFolder, 
  FiAward, FiMail 
} from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '#home', icon: FiHome },
  { name: 'About', href: '#about', icon: FiUser },
  { name: 'Skills', href: '#skills', icon: FiCpu },
  { name: 'Experience', href: '#experience', icon: FiBriefcase },
  { name: 'Projects', href: '#projects', icon: FiFolder },
  { name: 'Certifications', href: '#certifications', icon: FiAward },
  { name: 'Contact', href: '#contact', icon: FiMail },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Desktop Left Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-24 bg-dark-alt/95 backdrop-blur-xl border-r border-dark-border/60 z-50 flex-col items-center py-6 justify-between shadow-2xl">
        
        {/* Logo */}
        <a 
          href="#home" 
          className="font-heading font-extrabold text-sm text-cream tracking-widest hover:text-lime transition-colors group flex flex-col items-center gap-1"
        >
          <span className="text-lime text-lg leading-none font-mono">_</span>
          <span>ADNAN</span>
        </a>
        
        {/* Nav Links */}
        <nav className="flex flex-col gap-1.5 w-full px-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`w-full py-2 px-1 text-center flex flex-col items-center gap-1 rounded-xl transition-all group ${
                  isActive
                    ? 'bg-lime text-dark font-bold shadow-md shadow-lime/20'
                    : 'text-blue-gray hover:text-cream hover:bg-dark-card/60'
                }`}
                title={link.name}
              >
                <Icon className={`text-base transition-transform group-hover:scale-110 ${isActive ? 'text-dark' : 'text-blue-gray-light group-hover:text-cream'}`} />
                <span className="text-[10px] font-mono leading-none tracking-tight">
                  {link.name}
                </span>
              </a>
            );
          })}
        </nav>
        
        {/* Open to Work Badge */}
        <div className="flex flex-col items-center gap-1 group relative cursor-pointer">
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-lime/10 border border-lime/30">
            <div className="w-2 h-2 rounded-full bg-lime animate-pulse"></div>
            <span className="text-[9px] font-mono text-lime font-bold">READY</span>
          </div>
          <div className="absolute left-24 top-1/2 -translate-y-1/2 whitespace-nowrap bg-dark-card border border-dark-border px-3 py-1.5 rounded-card text-xs text-cream opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl z-50 font-mono">
            Open to Work / Internships
          </div>
        </div>
      </aside>

      {/* Mobile Top Bar */}
      <header className="lg:hidden fixed top-0 left-0 w-full h-16 bg-dark/90 backdrop-blur-xl z-50 border-b border-dark-border/60 flex items-center justify-between px-5">
        <a href="#home" className="font-heading font-bold text-lg text-cream tracking-widest flex items-center gap-1">
          ADNAN<span className="text-lime font-mono">_</span>
        </a>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-lime/10 border border-lime/30 text-[10px] font-mono text-lime">
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse"></span>
            Open to Work
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-cream p-1.5 rounded-lg bg-dark-card border border-dark-border"
            aria-label="Open menu"
          >
            <HiOutlineBars3 className="w-6 h-6 text-cream" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 240 }}
            className="fixed inset-0 z-[60] bg-dark/98 backdrop-blur-2xl flex flex-col lg:hidden"
          >
            <div className="h-16 flex items-center justify-between px-5 border-b border-dark-border/60">
              <div className="font-heading font-bold text-lg text-cream tracking-widest">
                ADNAN<span className="text-lime font-mono">_</span>
              </div>
              <button
                onClick={closeMenu}
                className="text-cream p-1.5 rounded-lg bg-dark-card border border-dark-border"
                aria-label="Close menu"
              >
                <HiXMark className="w-6 h-6 text-cream" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={closeMenu}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-lg font-heading transition-all ${
                        isActive
                          ? 'bg-lime text-dark font-bold shadow-md shadow-lime/20'
                          : 'text-blue-gray-light hover:text-cream hover:bg-dark-card'
                      }`}
                    >
                      <Icon className="text-xl" />
                      <span>{link.name}</span>
                    </a>
                  );
                })}
              </nav>
              
              <div className="mt-8 pt-6 border-t border-dark-border/60">
                <div className="flex items-center gap-3 bg-dark-card border border-dark-border p-4 rounded-xl">
                  <div className="w-3 h-3 rounded-full bg-lime animate-pulse"></div>
                  <div>
                    <div className="text-xs font-mono text-lime font-bold">AVAILABLE FOR WORK</div>
                    <div className="text-[11px] text-blue-gray">Full-Time & Internships</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
