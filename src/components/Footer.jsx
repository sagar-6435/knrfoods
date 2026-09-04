import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Phone as WhatsApp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-text-dark text-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="font-serif font-bold text-2xl tracking-wider text-primary">KNR FOODS</span>
            </Link>
            <p className="text-gray-400 font-serif italic mb-6">"Authentic Taste. Made With Love."</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <WhatsApp size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Shop */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-gray-400 hover:text-white transition-colors">All Pickles</Link></li>
              <li><Link to="/shop?filter=best-sellers" className="text-gray-400 hover:text-white transition-colors">Best Sellers</Link></li>
              <li><Link to="/shop?filter=combos" className="text-gray-400 hover:text-white transition-colors">Combos</Link></li>
              <li><Link to="/shop?filter=new" className="text-gray-400 hover:text-white transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/story" className="text-gray-400 hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Column 4: Customer Care */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Customer Care</h4>
            <ul className="space-y-2">
              <li><Link to="/shipping" className="text-gray-400 hover:text-white transition-colors">Shipping</Link></li>
              <li><Link to="/returns" className="text-gray-400 hover:text-white transition-colors">Returns</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; 2026 KNR Foods. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <span>Made with ❤️ in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
