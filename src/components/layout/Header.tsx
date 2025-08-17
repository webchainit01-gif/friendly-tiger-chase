import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import MobileNav from './MobileNav'; // Import the new MobileNav component

const Header = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Quality & Safety', path: '/quality-safety' },
    { name: 'FAQs', path: '/faqs' },
  ];

  return (
    <header className="bg-white shadow-sm py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/images/ayurveda-of-india-logo.jpeg" alt="Ayurveda of India Logo" className="h-12 w-auto" />
        </Link>
        <nav className="hidden md:flex space-x-6"> {/* Desktop navigation */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-700 hover:text-green-700 font-medium transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="md:hidden"> {/* Mobile menu trigger */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;