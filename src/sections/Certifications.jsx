import React from 'react';
import SectionHeader from '../components/UI/SectionHeader';
import ScrollReveal from '../components/UI/ScrollReveal';
import TiltCard from '../components/UI/TiltCard';
import { FiExternalLink } from 'react-icons/fi';
import { FaAward, FaTrophy, FaAtom } from 'react-icons/fa6';

const certifications = [
  { 
    title: "Introduction to Generative AI", 
    issuer: "Google Cloud", 
    icon: <FaAward className="text-lime" />,
    link: "https://www.skills.google/public_profiles/97576655-5395-4d3f-9ad1-46762b8fd6eb/badges/26243156"
  },
  { 
    title: "Power BI Hackathon", 
    issuer: "Hack the Dash Workshop", 
    icon: <FaTrophy className="text-lime" />,
    link: "https://drive.google.com/file/d/10Eo2oYL7X0lSjrGQv_f7DyVEohLnpyIU/view?usp=drivesdk"
  },
  { 
    title: "Quantum Programming using Qiskit", 
    issuer: "VIT School of CSE & IS / Qiskit", 
    icon: <FaAtom className="text-lime" />,
    link: "https://drive.google.com/file/d/1Q65S4wFpKL7gOxvocihyG1hyz7pMv765/view?usp=drivesdk"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-14 sm:py-20 md:py-32 lg:pl-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeader number="05" title="Certifications" annotation="verified skills" />
        
        {/* Responsive Grid: clean vertical stack on mobile, 3-column grid on desktop */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.title} delay={i * 0.1}>
              <TiltCard className="bg-dark-card border border-dark-border rounded-card-lg p-5 sm:p-6 h-full flex flex-col justify-between hover:border-dark-border/90 transition-all shadow-md">
                <div>
                  <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">{cert.icon}</div>
                  <h3 className="font-heading font-semibold text-sm sm:text-base text-cream">{cert.title}</h3>
                  <p className="text-blue-gray text-xs sm:text-sm font-mono mt-1 sm:mt-2">{cert.issuer}</p>
                </div>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-4 sm:mt-6 inline-flex items-center gap-2 text-lime text-xs sm:text-sm font-mono hover:underline group"
                >
                  <FiExternalLink className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-xs sm:text-sm" />
                  <span>Verify Credential</span>
                </a>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
