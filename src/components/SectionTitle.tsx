import React from 'react';
import RevealOnScroll from './RevealOnScroll'; // Import RevealOnScroll

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <RevealOnScroll delay={0} stagger={100}>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-800 mb-4 font-serif">{title}</h2>
        {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </RevealOnScroll>
  );
};

export default SectionTitle;