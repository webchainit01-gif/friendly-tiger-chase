import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import AnimatedDiv from './AnimatedDiv'; // Import AnimatedDiv

const HeroSection = () => {
  const malkanganiOil = products.find(p => p.isHero);

  if (!malkanganiOil) {
    return null; // Or a fallback hero if the product isn't found
  }

  return (
    <section className="relative bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 py-20 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 px-4">
        <div className="md:w-1/2 text-center md:text-left z-10">
          <AnimatedDiv delay={0}>
            <h1 className="text-5xl md:text-6xl font-extrabold text-green-900 leading-tight mb-4 font-serif">
              Mount Abu wala Malkaagni Oil
            </h1>
          </AnimatedDiv>
          <AnimatedDiv delay={150}>
            <p className="text-base text-gray-700 mb-6 leading-relaxed">
              <span className="font-bold">100% Ayurvedic | No Adulteration | Clinically Proven</span>
            </p>
          </AnimatedDiv>
          <AnimatedDiv delay={300}>
            <p className="text-xl text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
              An Ayurvedic oil designed to help ease stiffness and support freer movement.
            </p>
          </AnimatedDiv>
          <AnimatedDiv delay={450} animationType="scale-in">
            <Link to={`/products/${malkanganiOil.slug}`}>
              <Button className="bg-green-700 hover:bg-green-800 text-white text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                View Product
              </Button>
            </Link>
          </AnimatedDiv>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end z-10">
          <AnimatedDiv delay={600} animationType="fade-in" className="animate-float">
            <img
              src={malkanganiOil.image}
              alt={malkanganiOil.name}
              className="w-full max-w-md h-auto rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 hover:scale-[1.02] hover:shadow-xl"
              loading="lazy"
            />
          </AnimatedDiv>
        </div>
      </div>
      {/* Subtle background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <img src="/images/group-104.png" alt="Leaf pattern" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default HeroSection;