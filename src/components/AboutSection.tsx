import React from 'react';
import SectionTitle from './SectionTitle';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="About Ayurveda of India"
          subtitle="Founded by Mr. D.K. Agarwal, Ayurveda of India is dedicated to authentic Ayurvedic wellness with modern quality standards."
        />
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <div className="flex items-center space-x-3 bg-green-50 text-green-800 px-6 py-3 rounded-full shadow-md">
            <span className="text-xl font-semibold">ISO 9001</span>
          </div>
          <div className="flex items-center space-x-3 bg-green-50 text-green-800 px-6 py-3 rounded-full shadow-md">
            <span className="text-xl font-semibold">GMP Certified</span>
          </div>
          <div className="flex items-center space-x-3 bg-green-50 text-green-800 px-6 py-3 rounded-full shadow-md">
            <span className="text-xl font-semibold">Since 1995</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;