
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-nature-950 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <svg 
                viewBox="0 0 24 24" 
                className="w-8 h-8 text-nature-400" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M12 2L9 6L12 10L15 6L12 2Z" 
                  fill="currentColor" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M12 10L7 16H17L12 10Z" 
                  fill="currentColor" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M12 22C7 22 5.5 19 5.5 16H18.5C18.5 19 17 22 12 22Z" 
                  fill="currentColor" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xl font-display font-medium">Desert Arbor<span className="text-nature-400">.</span></span>
            </div>
            <p className="text-gray-300 text-sm">
              Professional tree care services for Las Vegas and surrounding areas. Certified arborists dedicated to the health and beauty of your trees.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors text-sm">Services</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors text-sm">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services#trimming" className="text-gray-300 hover:text-white transition-colors text-sm">Tree Trimming</Link>
              </li>
              <li>
                <Link to="/services#removal" className="text-gray-300 hover:text-white transition-colors text-sm">Tree Removal</Link>
              </li>
              <li>
                <Link to="/services#palm" className="text-gray-300 hover:text-white transition-colors text-sm">Palm Tree Care</Link>
              </li>
              <li>
                <Link to="/services#health" className="text-gray-300 hover:text-white transition-colors text-sm">Tree Health Assessment</Link>
              </li>
              <li>
                <Link to="/services#emergency" className="text-gray-300 hover:text-white transition-colors text-sm">Emergency Services</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-nature-400 mt-0.5" />
                <span className="text-gray-300 text-sm">1234 Desert Avenue, Las Vegas, NV 89123</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-nature-400" />
                <a href="tel:+17025551234" className="text-gray-300 hover:text-white transition-colors text-sm">(702) 555-1234</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-nature-400" />
                <a href="mailto:info@desertarbor.com" className="text-gray-300 hover:text-white transition-colors text-sm">info@desertarbor.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Desert Arbor. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
