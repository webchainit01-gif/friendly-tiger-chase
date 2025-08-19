import React from 'react';
import AnimatedDiv from './AnimatedDiv'; // Import AnimatedDiv

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <AnimatedDiv delay={0}>
        <h2 className="text-4xl font-bold text-green-800 mb-4 font-serif">{title}</h2>
      </AnimatedDiv>
      {subtitle && (
        <AnimatedDiv delay={100}>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </AnimatedDiv>
      )}
    </div>
  );
};

export default SectionTitle;