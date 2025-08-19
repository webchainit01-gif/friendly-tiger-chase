import React from 'react';
import ProductGridSection from '@/components/ProductGridSection';
import SectionTitle from '@/components/SectionTitle';
import AnimatedDiv from '@/components/AnimatedDiv'; // Import AnimatedDiv

const Products = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Complete Product Range"
          subtitle="Discover the full spectrum of Ayurvedic wellness solutions from Ayurveda of India."
        />
        <AnimatedDiv delay={200}>
          <ProductGridSection showTitle={false} /> {/* showTitle is false because SectionTitle is already above */}
        </AnimatedDiv>
      </div>
    </div>
  );
};

export default Products;