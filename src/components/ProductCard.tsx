import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl border border-gray-100">
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>
      <CardContent className="p-6 text-center">
        <h3 className="text-xl font-semibold text-green-800 mb-2 font-serif">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="flex justify-center items-center gap-4 text-gray-700 text-sm mb-4">
          <span>{product.packSize}</span>
          <span className="font-bold text-green-700">{product.price}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-center">
        <Link to={`/products/${product.slug}`}>
          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700 rounded-full px-6 py-2">
            Learn More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;