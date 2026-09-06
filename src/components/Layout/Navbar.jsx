import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineBars3, HiXMark } from 'react-icons/hi2';
import { 
  FiHome, FiUser, FiCpu, FiBriefcase, FiFolder, 
  FiAward, FiBookOpen, FiMail 
} from 'react-icons/fi';

export const navSections = [
  { id: 'home', name: 'Home', number: '00', icon: FiHome },
  { id: 'about', name: 'About', number: '01', icon: FiUser },
  { id: 'skills', name: 'Skills', number: '02', icon: FiCpu },
  { id: 'experience', name: 'Experience', number: '03', icon: FiBriefcase },
  { id: 'projects', name: 'Projects', number: '04', icon: FiFolder },
  { id: 'certifications', name: 'Certifications', number: '05', icon: FiAward },
  { id: 'education', name: 'Education', number: '06', icon: FiBookOpen },
  { id: 'contact', name: 'Contact', number: '07', icon: FiMail },
];

export default function Navbar({ activeSection, onSelectSection }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const handleMobileNavClick = (sectionId) => {
    if (onSelectSection) {
      onSelectSection(sectionId);
    }
    closeMenu();
  };

  const currentNav = navSections.find(n => n.id === activeSection) || navSections[0];

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const activeTabEl = document.getElementById(`mobile-tab-${activeSection}`);
      if (activeTabEl && typeof activeTabEl.scrollIntoView === 'function') {
        try {
          activeTabEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        } catch (e) {
          activeTabEl.scrollIntoView(false);
        }
      }
    }
  }, [activeSection]);

  return (
    <>
      {/* Desktop Left Sidebar (Preserved & Frozen for >= 1024px) */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-24 bg-dark-alt/95 backdrop-blur-xl border-r border-dark-border/60 z-50 flex-col items-center py-6 justify-between shadow-2xl">
        
        {/* Logo */}
        <a 
          href="#home" 
          onClick={() => onSelectSection && onSelectSection('home')}
          className="font-heading font-extrabold text-sm text-cream tracking-widest hover:text-lime transition-colors group flex flex-col items-center gap-1"
        >
          <span className="text-lime text-lg leading-none font-mono">_</span>
          <span>ADNAN</span>
        </a>
        
        {/* Nav Links */}
        <nav className="flex flex-col gap-1 w-full px-2">
          {navSections.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => {
                  if (onSelectSection) onSelectSection(link.id);
                }}
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

      {/* Mobile Fixed Top Header with Primary Horizontal Quick Navigation */}
      <header className="lg:hidden fixed top-0 left-0 w-full z-50 bg-dark/95 backdrop-blur-xl border-b border-dark-border/80">
        {/* Top bar: Brand + Active indicator + Hamburger button */}
        <div className="h-12 flex items-center justify-between px-3.5 border-b border-dark-border/50">
          <button
            onClick={() => handleMobileNavClick('home')}
            className="font-heading font-bold text-base text-cream tracking-widest flex items-center gap-1 cursor-pointer"
          >
            ADNAN<span className="text-lime font-mono">_</span>
          </button>
          
          <div className="flex items-center gap-2">
            <div className="bg-dark-card border border-dark-border px-2.5 py-0.5 rounded-full flex items-center gap-1.5 shadow-sm">
              <span className="font-mono text-[9px] text-lime font-bold">{currentNav.number}</span>
              <span className="text-[10px] font-heading font-medium text-cream">{currentNav.name}</span>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-cream p-1 rounded-lg bg-dark-card border border-dark-border hover:border-lime/40 transition-colors cursor-pointer"
              aria-label="Open mobile menu"
            >
              <HiOutlineBars3 className="w-5 h-5 text-cream" />
            </button>
          </div>
        </div>

        {/* Primary Horizontal Quick Navigation Row (Compact & Horizontally Scrollable) */}
        <div className="py-1.5 px-2.5 overflow-x-auto hide-scrollbar flex items-center gap-1.5 bg-dark-alt/90">
          {navSections.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-tab-${item.id}`}
                onClick={() => handleMobileNavClick(item.id)}
                className={`shrink-0 px-2.5 py-1 rounded-full text-[11px] font-mono transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 ${
                  isActive
                    ? 'bg-lime text-dark font-bold shadow-sm shadow-lime/20'
                    : 'bg-dark-card/80 text-blue-gray-light border border-dark-border/70 hover:text-cream hover:border-lime/30'
                }`}
              >
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>
      </header>

      {/* Mobile Drawer Menu (App Style) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[60] lg:hidden">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Slide-in Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 260 }}
              className="absolute top-0 right-0 bottom-0 w-[82%] max-w-xs bg-dark-alt/98 border-l border-dark-border/80 flex flex-col justify-between p-5 shadow-2xl overflow-y-auto"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-dark-border/60">
                  <div className="font-heading font-bold text-sm text-cream tracking-wider flex items-center gap-1.5">
                    <span className="text-lime font-mono text-xs">//</span> PORTFOLIO MENU
                  </div>
                  <button
                    onClick={closeMenu}
                    className="p-1 rounded-md bg-dark-card border border-dark-border text-cream hover:text-lime transition cursor-pointer"
                  >
                    <HiXMark className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Items */}
                <nav className="mt-4 flex flex-col gap-1.5">
                  {navSections.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleMobileNavClick(item.id)}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all cursor-pointer ${
                          isActive
                            ? 'bg-lime text-dark font-bold shadow-md shadow-lime/20'
                            : 'text-blue-gray-light hover:text-cream hover:bg-dark-card/70'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={`text-base ${isActive ? 'text-dark' : 'text-lime'}`} />
                          <span className="font-heading text-sm">{item.name}</span>
                        </div>
                        <span className={`font-mono text-[10px] ${isActive ? 'text-dark/80' : 'text-blue-gray'}`}>
                          {item.number}
                        </span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Status Badge */}
              <div className="pt-4 mt-6 border-t border-dark-border/60">
                <div className="bg-dark-card border border-dark-border/80 rounded-xl p-3 flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-lime animate-pulse shrink-0"></span>
                  <div className="leading-tight">
                    <div className="text-[11px] font-mono text-lime font-bold">OPEN TO WORK</div>
                    <div className="text-[10px] text-blue-gray">Full-Time & Internships</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
