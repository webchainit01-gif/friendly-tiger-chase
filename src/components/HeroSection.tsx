import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedDiv from './AnimatedDiv'; // Import AnimatedDiv

const HeroSection = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-yellow-500 to-yellow-700 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 h-full">
        {/* Left Section: Image */}
        <AnimatedDiv delay={0} animationType="fade-in" className="md:w-1/2 flex justify-center items-center h-full">
          <img
            src="/images/ayurveda-logo.jpeg"
            alt="Ayurveda of India Logo"
            className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto object-contain animate-float"
            loading="eager"
          />
        </AnimatedDiv>

        {/* Right Section: Content */}
        <div className="md:w-1/2 text-white text-center md:text-left relative z-10">
          <AnimatedDiv delay={200} animationType="fade-up">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-yellow-200 leading-tight mb-4">
              हजारों साल पुरानी आयुर्वेद की परंपरा को आगे ले जाते हुए
            </h1>
          </AnimatedDiv>
          <AnimatedDiv delay={400} animationType="fade-in">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-2">
              Ayurveda of India
            </h2>
          </AnimatedDiv>
          <AnimatedDiv delay={600} animationType="fade-in">
            <p className="text-base md:text-lg text-gray-200 mb-8 max-w-2xl mx-auto md:mx-0 font-sans">
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
      </div>
    </section>
  );
};

export default HeroSection;