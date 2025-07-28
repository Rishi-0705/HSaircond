import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-4">
          {/* Logo */}
          <div className="logo-container flex items-center gap-3">
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <img 
                src="/hs-air-conditioner-logo.png" 
                alt="HS Air Conditioner Services Logo" 
                className="company-logo h-14 w-auto object-contain"
              />
              <div className="company-text hidden sm:flex flex-col">
                <span className="company-name font-bold text-blue-900 text-base">HS Air Conditioner Services</span>
                <span className="company-tagline text-gray-600 text-xs">Repair & Service</span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 ml-auto">
            <button 
              onClick={() => scrollToSection('home')} 
              className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 ml-auto"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-left px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-left px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="text-left px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-left px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;