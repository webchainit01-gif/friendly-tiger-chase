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
        <div className="max-w-3xl mx-auto text-center text-gray-700 leading-relaxed mb-10">
          <p className="mb-4">
            Since 1995, Ayurveda of India has been committed to bringing the profound healing power of Ayurveda to every household. We meticulously craft products that blend ancient knowledge with modern scientific rigor, ensuring purity, efficacy, and trust.
          </p>
          <p>
            Our mission is to empower individuals to embrace a natural lifestyle, fostering optimal health and vitality through the timeless, proven science of Ayurveda. We use carefully selected, potent herbs, sourced from pristine environments and processed with utmost care.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <div className="flex items-center space-x-2 bg-green-50 text-green-800 px-4 py-2 rounded-full shadow-md">
            <span className="text-base font-semibold">ISO 9001 Certified</span>
          </div>
          <div className="flex items-center space-x-2 bg-green-50 text-green-800 px-4 py-2 rounded-full shadow-md">
            <span className="text-base font-semibold">GMP Certified</span>
          </div>
          <div className="flex items-center space-x-2 bg-green-50 text-green-800 px-4 py-2 rounded-full shadow-md">
            <span className="text-base font-semibold">Established 1995</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;