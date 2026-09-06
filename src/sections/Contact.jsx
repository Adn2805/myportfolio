import React from 'react';
import SectionHeader from '../components/UI/SectionHeader';
import StickyNote from '../components/UI/StickyNote';
import { FiMail, FiLinkedin } from 'react-icons/fi';
import { SiGithub, SiInstagram } from 'react-icons/si';

const Contact = () => {
  return (
    <section id="contact" className="py-14 sm:py-20 md:py-32 lg:pl-24 relative overflow-hidden bg-gradient-to-b from-dark via-[#0A1628] to-[#0D1B2A]">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-[15%] w-1.5 h-1.5 rounded-full bg-white opacity-20 animate-pulse-dot" />
        <div className="absolute top-10 left-[85%] w-1 h-1 rounded-full bg-white opacity-30 animate-pulse-dot" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-40 left-[75%] w-2 h-2 rounded-full bg-white opacity-10" />
        <div className="absolute top-60 left-[25%] w-1 h-1 rounded-full bg-white opacity-20" />
        
        {/* Glow behind heading */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-lime/5 rounded-full blur-[80px] sm:blur-[100px]" />
      </div>

      <div className='absolute bottom-0 left-0 right-0 h-28 sm:h-40 md:h-56 opacity-50' style={{ 
        background: 'linear-gradient(to top, #0D1520, #0A1628)',
        clipPath: 'polygon(0% 100%, 0% 65%, 8% 55%, 15% 70%, 22% 45%, 30% 60%, 38% 35%, 45% 55%, 52% 30%, 60% 50%, 68% 25%, 75% 45%, 82% 30%, 90% 50%, 100% 40%, 100% 100%)'
      }} />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <SectionHeader number="07" title="Let's Connect" annotation="say hello!" />

        <div className="relative mt-8 sm:mt-12 md:mt-20">
          {/* Sticky Notes (Desktop only) */}
          <div className="hidden lg:block absolute left-0 top-10 z-20">
            <StickyNote rotation={3}>
              <p className="font-mono text-xs whitespace-pre-line text-dark">
                {`Open to internships,\ncollaborations or just a\ntech chat. Reach out anytime!`}
              </p>
            </StickyNote>
          </div>
          
          <div className="hidden lg:block absolute right-0 top-20 z-20">
            <StickyNote rotation={-2}>
              <p className="font-mono text-xs whitespace-pre-line text-dark">
                {`✓ Better Code\n✓ Better Thinking\n✓ Better Tomorrow`}
              </p>
            </StickyNote>
          </div>

          {/* Heading */}
          <div className="text-center">
            <h2 
              className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-cream italic leading-tight"
              style={{ textShadow: '0 0 40px rgba(212, 255, 79, 0.1)' }}
            >
              Let's build<br />something meaningful.
            </h2>
            <p className="text-blue-gray-light text-xs sm:text-base md:text-lg mt-3 sm:mt-6 text-center max-w-xl mx-auto leading-relaxed">
              Good ideas start with a conversation. Open to internships, collaborations, or tech discussions.
            </p>
          </div>

          {/* Contact Buttons: 2x2 Grid on Mobile, Flex row on Tablet/Desktop */}
          <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:flex sm:justify-center gap-3 sm:gap-6 max-w-xs sm:max-w-none mx-auto">
            <a 
              href="mailto:mdadnan1903472@gmail.com" 
              className="h-16 sm:h-20 sm:w-20 rounded-xl bg-dark-card border border-dark-border flex flex-col items-center justify-center gap-1 sm:gap-1.5 hover:border-lime/30 hover:bg-dark-card/80 transition group p-2 shadow-sm"
              title="Send Email"
            >
              <FiMail className="text-xl sm:text-2xl text-cream group-hover:text-lime transition" />
              <span className="text-[10px] sm:text-[10px] font-mono text-blue-gray group-hover:text-cream transition">Email</span>
            </a>
            
            <a 
              href="https://linkedin.com/in/mohammed-adnan28" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="h-16 sm:h-20 sm:w-20 rounded-xl bg-dark-card border border-dark-border flex flex-col items-center justify-center gap-1 sm:gap-1.5 hover:border-lime/30 hover:bg-dark-card/80 transition group p-2 shadow-sm"
              title="LinkedIn Profile"
            >
              <FiLinkedin className="text-xl sm:text-2xl text-cream group-hover:text-lime transition" />
              <span className="text-[10px] sm:text-[10px] font-mono text-blue-gray group-hover:text-cream transition">LinkedIn</span>
            </a>
            
            <a 
              href="https://github.com/Adn2805" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="h-16 sm:h-20 sm:w-20 rounded-xl bg-dark-card border border-dark-border flex flex-col items-center justify-center gap-1 sm:gap-1.5 hover:border-lime/30 hover:bg-dark-card/80 transition group p-2 shadow-sm"
              title="GitHub Profile"
            >
              <SiGithub className="text-xl sm:text-2xl text-cream group-hover:text-lime transition" />
              <span className="text-[10px] sm:text-[10px] font-mono text-blue-gray group-hover:text-cream transition">GitHub</span>
            </a>
            
            <a 
              href="https://www.instagram.com/__adnan__28?igsh=MWVrbDIwc3R4MjBvNQ%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="h-16 sm:h-20 sm:w-20 rounded-xl bg-dark-card border border-dark-border flex flex-col items-center justify-center gap-1 sm:gap-1.5 hover:border-lime/30 hover:bg-dark-card/80 transition group p-2 shadow-sm"
              title="Instagram Profile"
            >
              <SiInstagram className="text-xl sm:text-2xl text-cream group-hover:text-lime transition" />
              <span className="text-[10px] sm:text-[10px] font-mono text-blue-gray group-hover:text-cream transition">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
