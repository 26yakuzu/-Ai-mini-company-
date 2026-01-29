
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">+Quick.ai</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Helping businesses automate operations and implement practical AI systems that drive efficiency and growth across Africa.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>Lagos, Nigeria</li>
              <li><a href="tel:09047632448" className="hover:text-white transition-colors">09047632448</a></li>
              <li><a href="mailto:hello@quickai.com" className="hover:text-white transition-colors">hello@quickai.com</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Actions</h4>
            <a 
              href="https://wa.me/2349047632448?text=Hello%20+Quick.ai,%20I’d%20like%20to%20talk%20about%20AI%20automation%20for%20my%20business." 
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors mb-4 w-full text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
            <Link 
              to="/contact" 
              className="inline-block border border-gray-600 hover:border-white text-white px-4 py-2 rounded-lg text-sm transition-colors w-full text-center"
            >
              Book a Call
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} +Quick.ai. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
