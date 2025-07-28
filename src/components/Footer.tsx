import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/hs-air-conditioner-logo.png" 
                alt="HS Air Conditioner Services Logo" 
                className="w-12 h-12 object-contain rounded-lg"
              />
              <div>
                <h3 className="text-xl font-bold">HS Air Conditioner Services</h3>
                <p className="text-gray-400">Repair & Service</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Professional air conditioning and refrigeration services in Klang Valley. 
              Trusted by hundreds of satisfied customers for reliable, affordable cooling solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/HSAirConditionerServices/about" target="_blank"
                rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/hsaircond/" target="_blank"
                rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://wa.me/60126565936" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+60126565936" className="text-gray-300 hover:text-white transition-colors">
                    +60 12-656 5936
                  </a>
                  <p className="text-sm text-gray-400">24/7 Emergency</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:hsairconditioner@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  hsairconditioner@gmail.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300">
                  <p>Klang Valley</p>
                  <p>Selangor, Malaysia</p>
                  <p className="text-sm text-gray-400">Service Areas: KLCC, PJ, Selangor</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex justify-center items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} HS Air Conditioner Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;