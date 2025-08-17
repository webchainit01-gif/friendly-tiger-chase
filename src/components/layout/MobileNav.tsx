import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'About Us', path: '/about' },
  { name: 'Quality & Safety', path: '/quality-safety' },
  { name: 'FAQs', path: '/faqs' },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle mobile menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[250px] sm:w-[300px] bg-white p-6">
        <Link to="/" className="flex items-center space-x-2 mb-8" onClick={() => setIsOpen(false)}>
          <img src="/images/ayurveda-of-india-logo.jpeg" alt="Ayurveda of India Logo" className="h-10 w-auto" />
        </Link>
        <nav className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-700 hover:text-green-700 font-medium text-lg transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;