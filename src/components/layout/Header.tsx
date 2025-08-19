import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import MobileNav from './MobileNav'; // Import the new MobileNav component

const Header = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Quality & Safety', path: '/quality-safety' },
    { name: 'FAQs', path: '/faqs' },
  ];

  const handleNavLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('/#')) {
      event.preventDefault();
      const targetId = path.substring(2); // Remove '/#'
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (location.pathname === path) {
      // If already on the same page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-sm py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2" onClick={(e) => handleNavLinkClick(e, '/')}>
          <img src="/images/ayurveda-of-india-logo.jpeg" alt="Ayurveda of India Logo" className="h-12 w-auto" />
        </Link>
        <nav className="hidden md:flex space-x-6"> {/* Desktop navigation */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-700 hover:text-green-700 font-medium transition-colors duration-200"
              onClick={(e) => handleNavLinkClick(e, link.path)}
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