import React from 'react';
import SectionHeader from '../components/UI/SectionHeader';
import ScrollReveal from '../components/UI/ScrollReveal';

const Experience = () => {
  return (
    <section id="experience" className="py-14 sm:py-20 md:py-32 lg:pl-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeader number="03" title="Work Experience" annotation="the real world" />
        
        <div className="mt-8 sm:mt-12 md:mt-16">
          <div className="relative pl-5 sm:pl-8 md:pl-12">
            <div className="absolute left-2 sm:left-3 md:left-5 top-0 bottom-0 w-0.5 bg-dark-border"></div>
            <div className="absolute left-0.5 sm:left-1.5 md:left-3.5 top-0 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-lime border-3 sm:border-4 border-dark z-10"></div>
            
            <ScrollReveal>
              <div className="bg-dark-card border border-dark-border rounded-card-lg p-4 sm:p-6 md:p-8 shadow-md">
                <h3 className="font-heading font-semibold text-base sm:text-lg md:text-xl text-cream">
                  Farida Classic Shoes Pvt. Ltd., Ambur, Tamil Nadu
                </h3>
                <div className="text-lime font-mono text-xs sm:text-sm mt-1">Software Development Intern</div>
                <div className="text-blue-gray text-xs sm:text-sm font-mono mt-0.5">May 2026 to Jul 2026 · On-site</div>
                
                <ul className="mt-3.5 sm:mt-4 space-y-2.5 sm:space-y-3">
                  <li className="flex items-start gap-2.5 sm:gap-3">
                    <span className="text-lime font-mono text-xs sm:text-sm mt-0.5">→</span>
                    <span className="text-blue-gray-light text-xs sm:text-sm md:text-base leading-relaxed">
                      Developed an automated footwear quality inspection prototype using Python/OpenCV, detecting shoes, extracting dimensional measurements, and running PASS/FAIL validation, processing 150+ pairs/hour
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 sm:gap-3">
                    <span className="text-lime font-mono text-xs sm:text-sm mt-0.5">→</span>
                    <span className="text-blue-gray-light text-xs sm:text-sm md:text-base leading-relaxed">
                      Achieved measurement consistency within ±2mm under controlled testing, validated across 20+ footwear samples and 500+ inspection images
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 sm:gap-3">
                    <span className="text-lime font-mono text-xs sm:text-sm mt-0.5">→</span>
                    <span className="text-blue-gray-light text-xs sm:text-sm md:text-base leading-relaxed">
                      Designed analytics dashboards for defect trend analysis and quality decision support
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 sm:gap-3">
                    <span className="text-lime font-mono text-xs sm:text-sm mt-0.5">→</span>
                    <span className="text-blue-gray-light text-xs sm:text-sm md:text-base leading-relaxed">
                      Collaborated with IT and manufacturing teams using Agile practices to translate quality requirements into a scalable proof of concept
                    </span>
                  </li>
                </ul>
                
                <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                  {["Computer Vision", "OpenCV", "Python", "Image Processing", "Agile"].map((tag) => (
                    <span key={tag} className="bg-dark border border-dark-border text-blue-gray text-[10px] sm:text-xs font-mono px-2.5 sm:px-3 py-1 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
