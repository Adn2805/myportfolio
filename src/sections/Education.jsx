import React from 'react';
import SectionHeader from '../components/UI/SectionHeader';
import ScrollReveal from '../components/UI/ScrollReveal';
import { FiAward, FiBookOpen, FiCalendar } from 'react-icons/fi';

const Education = () => {
  return (
    <section id="education" className="py-14 sm:py-20 md:py-28 lg:pl-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeader number="06" title="Education" annotation="the foundation" />
        
        <div className="mt-8 sm:mt-10 space-y-3.5 sm:space-y-4 max-w-4xl">
          <ScrollReveal>
            <div className="bg-dark-card border border-dark-border rounded-card-lg p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-5 sm:items-center hover:border-dark-border/80 transition-all shadow-md">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-lime/10 border border-lime/30 flex items-center justify-center text-lime text-xl sm:text-2xl shrink-0">
                <FiAward />
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-semibold text-cream text-base sm:text-lg">
                  Vellore Institute of Technology, Vellore
                </h3>
                <div className="text-blue-gray-light text-xs sm:text-sm mt-0.5">
                  Integrated M.Tech Software Engineering
                </div>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-2">
                  <span className="font-mono text-[11px] sm:text-xs text-blue-gray flex items-center gap-1.5">
                    <FiCalendar className="text-lime" /> 2022 to Present
                  </span>
                  <span className="text-lime font-mono text-[11px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 bg-lime/10 border border-lime/20 rounded-md">
                    CGPA: 7.53
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.15}>
            <div className="bg-dark-card border border-dark-border rounded-card-lg p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-5 sm:items-center hover:border-dark-border/80 transition-all shadow-md">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 text-xl sm:text-2xl shrink-0">
                <FiBookOpen />
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-semibold text-cream text-base sm:text-lg">
                  T. Abdul Wahid Matriculation Higher Secondary School
                </h3>
                <div className="text-blue-gray-light text-xs sm:text-sm mt-0.5">
                  Higher Secondary Education
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-2.5 mt-2">
                  <span className="text-cream text-[11px] sm:text-xs font-mono px-2 sm:px-2.5 py-0.5 bg-dark border border-dark-border rounded-md">
                    HSC: <strong className="text-lime">76.2%</strong>
                  </span>
                  <span className="text-cream text-[11px] sm:text-xs font-mono px-2 sm:px-2.5 py-0.5 bg-dark border border-dark-border rounded-md">
                    SSLC: <strong className="text-lime">89%</strong>
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Education;
