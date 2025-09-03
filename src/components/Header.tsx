import React, { useState, useEffect } from 'react';
import { Menu, X, Truck } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">MoveRight CRM</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('demo')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Demo
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Contact
            </button>
            <a
              href="#trial"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Start Free Trial
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t">
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection('features')}
                className="block w-full text-left text-gray-700 hover:text-blue-600 py-2"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left text-gray-700 hover:text-blue-600 py-2"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('demo')}
                className="block w-full text-left text-gray-700 hover:text-blue-600 py-2"
              >
                Demo
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-gray-700 hover:text-blue-600 py-2"
              >
                Contact
              </button>
              <a
                href="#trial"
                className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;