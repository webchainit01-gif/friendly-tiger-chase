import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedDiv from './AnimatedDiv'; // Import AnimatedDiv

const HeroSection = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <AnimatedDiv delay={0} animationType="fade-in" className="absolute inset-0 w-full h-full">
        <img
          src="/images/accord-grand-building.jpeg"
          alt="Ayurveda of India Building"
          className="w-full h-full object-cover object-center"
          loading="eager" // Load eagerly for hero image
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </AnimatedDiv>

      {/* Content */}
      <div className="relative z-10 text-white text-center px-4 max-w-4xl mx-auto">
        <AnimatedDiv delay={200} animationType="fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-green-300 leading-tight mb-4">
            हजारों साल पुरानी आयुर्वेद की परंपरा को आगे ले जाते हुए
          </h1>
        </AnimatedDiv>
        <AnimatedDiv delay={400} animationType="fade-in">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-2">
            Ayurveda of India
          </h2>
        </AnimatedDiv>
        <AnimatedDiv delay={600} animationType="fade-in">
          <p className="text-base md:text-lg text-gray-200 mb-8 max-w-2xl mx-auto font-sans">
            Since 1948, Ayurveda of India has been carrying forward authentic Ayurvedic wellness with a perfect balance of heritage and modern science.
          </p>
        </AnimatedDiv>
        <AnimatedDiv delay={800} animationType="scale-in">
          <Link to="/about">
            <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              About Ayurveda of India
            </Button>
          </Link>
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default HeroSection;