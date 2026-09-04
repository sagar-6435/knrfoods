import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <span className="font-serif font-bold text-2xl tracking-wider text-primary">KNR FOODS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-text-dark hover:text-primary transition-colors font-medium">Home</Link>
            <Link to="/shop" className="text-text-dark hover:text-primary transition-colors font-medium">Shop</Link>
            <Link to="/about" className="text-text-dark hover:text-primary transition-colors font-medium">About Us</Link>
            <Link to="/story" className="text-text-dark hover:text-primary transition-colors font-medium">Our Story</Link>
            <Link to="/contact" className="text-text-dark hover:text-primary transition-colors font-medium">Contact</Link>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-text-dark hover:text-primary transition-colors">
              <Search size={20} />
            </button>
            <Link to="/login" className="text-text-dark hover:text-primary transition-colors">
              <User size={20} />
            </Link>
            <Link to="/account" className="text-text-dark hover:text-primary transition-colors">
              <Heart size={20} />
            </Link>
            <Link to="/cart" className="text-text-dark hover:text-primary transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
                2
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button className="text-text-dark">
              <Search size={20} />
            </button>
            <Link to="/cart" className="text-text-dark relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">2</span>
            </Link>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-dark focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-text-dark hover:bg-primary/10">Home</Link>
            <Link to="/shop" className="block px-3 py-2 text-base font-medium text-text-dark hover:bg-primary/10">Shop</Link>
            <Link to="/about" className="block px-3 py-2 text-base font-medium text-text-dark hover:bg-primary/10">About Us</Link>
            <Link to="/story" className="block px-3 py-2 text-base font-medium text-text-dark hover:bg-primary/10">Our Story</Link>
            <Link to="/contact" className="block px-3 py-2 text-base font-medium text-text-dark hover:bg-primary/10">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
