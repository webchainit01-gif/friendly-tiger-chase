import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import MalkanganiOilDetailContent from '@/components/MalkanganiOilDetailContent';

const WHATSAPP_NUMBER = "+919876543210"; // Dummy WhatsApp number

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-red-600 font-serif">Product Not Found</h1>
          <p className="text-lg text-gray-600 mb-4">The product you are looking for does not exist.</p>
          <Link to="/products" className="text-blue-500 hover:text-blue-700 underline">
            Return to Products
          </Link>
        </div>
      </div>
    );
  }

  // Conditionally render the detailed content for Malkangani Oil
  if (product.slug === "mount-abu-bala-malkangani-oil") {
    return <MalkanganiOilDetailContent product={product} />;
  }

  // Default rendering for other products
  return (
    <div className="container mx-auto py-16 px-4 bg-white rounded-lg shadow-sm my-8">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md h-auto rounded-lg shadow-xl border border-gray-100"
            loading="lazy"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-green-800 mb-4 font-serif">{product.name}</h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">{product.description}</p>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-green-700 mb-3 font-serif">Benefits:</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-base text-left">
              {product.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-green-700 mb-3 font-serif">Key Herbs Used:</h2>
            <p className="text-gray-700 text-base text-left">{product.keyHerbs.join(', ')}</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 mb-8">
            <span className="text-2xl font-bold text-green-900">{product.price}</span>
            <span className="text-lg text-gray-600">Pack Size: {product.packSize}</span>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=I'm interested in your product: ${product.name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <MessageCircle size={24} /> Chat with Us on WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;