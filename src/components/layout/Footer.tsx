import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../RevealOnScroll'; // Import RevealOnScroll

const Footer = () => {
  const legalLinks = [
    { name: 'Disclaimer', path: '/disclaimer-privacy-terms' },
    { name: 'Privacy Policy', path: '/disclaimer-privacy-terms#privacy' },
    { name: 'Terms & Conditions', path: '/disclaimer-privacy-terms#terms' },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Quality & Safety', path: '/quality-safety' },
    { name: 'FAQs', path: '/faqs' },
  ];

  return (
    <RevealOnScroll delay={0} animation="fade-in-up">
      <footer className="bg-green-800 text-white py-8 px-6 mt-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <img src="/images/ayurveda-of-india-logo-white.jpeg" alt="Ayurveda of India Logo" className="h-12 w-auto mb-4" />
            <p className="text-sm">
              Ayurveda of India is dedicated to authentic Ayurvedic wellness with modern quality standards.
            </p>
            <p className="text-xs text-gray-300">
              &copy; {new Date().getFullYear()} Ayurveda of India. All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm hover:text-green-300 transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm hover:text-green-300 transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-300 mt-4">
              Disclaimer: Information on this site is for general wellness purposes. Not a substitute for professional medical advice. Always consult your doctor before use.
            </p>
          </div>
        </div>
      </footer>
    </RevealOnScroll>
  );
};

export default Footer;