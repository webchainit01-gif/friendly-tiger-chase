import React from 'react';
import SectionTitle from './SectionTitle';
import ProductCard from './ProductCard';
import { products } from '@/data/products';
import RevealOnScroll from './RevealOnScroll'; // Import RevealOnScroll

interface ProductGridSectionProps {
  showTitle?: boolean;
  limit?: number;
}

const ProductGridSection: React.FC<ProductGridSectionProps> = ({ showTitle = true, limit }) => {
  const productsToDisplay = limit ? products.slice(0, limit) : products;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {showTitle && (
          <SectionTitle
            title="Our Ayurvedic Products"
            subtitle="Explore our range of natural and effective Ayurvedic solutions for your well-being."
          />
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {productsToDisplay.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGridSection;