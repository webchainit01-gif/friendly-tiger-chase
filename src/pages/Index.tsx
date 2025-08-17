import React from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProductGridSection from '@/components/ProductGridSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AyurvedicHerbsSection from '@/components/AyurvedicHerbsSection'; // Import the new component

const Index = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <AboutSection />
      <ProductGridSection showTitle={true} limit={6} /> {/* Display all 6 products on homepage */}
      <AyurvedicHerbsSection /> {/* New section added here */}
      <WhyChooseUsSection />
      <TestimonialsSection />
    </div>
  );
};

export default Index;