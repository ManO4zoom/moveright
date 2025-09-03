import React from 'react';
import { Truck, MapPin, Phone, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">MoveRight CRM</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              The leading CRM solution built specifically for moving companies in Nigeria. 
              Automate your business and grow faster with our comprehensive platform.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/moverightcrm"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5"/>
              </a>
              <a
                href="https://www.linkedin.com/in/markdavidezeh/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@moverightcrm.com"
                className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-300 hover:text-white transition-colors duration-200">Features</a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-300 hover:text-white transition-colors duration-200">Pricing</a>
              </li>
              <li>
                <a href="#demo" className="text-gray-300 hover:text-white transition-colors duration-200">Demo</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Integrations</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                <a href="https://wa.me/2349024026893" className="hover:text-white transition-colors duration-200">
                  +234 902 402 6893
                </a>
              </li>
              <li className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:hello@moverightcrm.com" className="hover:text-white transition-colors duration-200">
                  hello@moverightcrm.com
                </a>
              </li>
              <li className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 mr-2 mt-1" />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2025 MoveRight CRM. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                About
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
