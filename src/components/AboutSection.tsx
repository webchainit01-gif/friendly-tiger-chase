import React from 'react';
import SectionTitle from './SectionTitle';
import RevealOnScroll from './RevealOnScroll'; // Import RevealOnScroll

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="About Ayurveda of India"
          subtitle="Since 1948, Dr. D.K. Agrawal Ayurvedic Medicines has been a trusted name in Ayurvedic wellness."
        />
        <RevealOnScroll delay={200} stagger={100}>
          <div className="max-w-3xl mx-auto text-center text-gray-700 leading-relaxed mb-10">
            <p className="mb-4">
              Our legacy is built on authenticity, family tradition, and quality. Ayurveda, for us, is not just medicine—it is a way of life that restores balance and strengthens health from the roots.
            </p>
            <p>
              Taking forward the thousand-year-old tradition of Ayurveda, we combine heritage with modern practices to deliver safe, effective, and trustworthy Ayurvedic formulations.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center space-x-2 bg-green-50 text-green-800 px-4 py-2 rounded-full shadow-md">
              <span className="text-base font-semibold">Established 1948</span>
            </div>
            <div className="flex items-center space-x-2 bg-green-50 text-green-800 px-4 py-2 rounded-full shadow-md">
              <span className="text-base font-semibold">GMP Certified</span>
            </div>
            <div className="flex items-center space-x-2 bg-green-50 text-green-800 px-4 py-2 rounded-full shadow-md">
              <span className="text-base font-semibold">ISO 9001 Certified</span>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default AboutSection;