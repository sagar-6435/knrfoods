import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag, Filter, ChevronDown, Heart } from 'lucide-react';

const products = [
  { id: 1, name: 'Andhra Mango Pickle', price: 299, rating: 4.8, reviews: 124, category: 'Mango' },
  { id: 2, name: 'Chicken Pickle', price: 399, rating: 4.9, reviews: 89, category: 'Non-Veg' },
  { id: 3, name: 'Gongura Pickle', price: 299, rating: 4.7, reviews: 156, category: 'Gongura' },
  { id: 4, name: 'Garlic Pickle', price: 249, rating: 4.6, reviews: 72, category: 'Vegetable' },
  { id: 5, name: 'Lemon Pickle', price: 199, rating: 4.5, reviews: 93, category: 'Lemon' },
  { id: 6, name: 'Mutton Pickle', price: 499, rating: 4.9, reviews: 45, category: 'Non-Veg' },
  { id: 7, name: 'Tomato Pickle', price: 249, rating: 4.6, reviews: 112, category: 'Vegetable' },
  { id: 8, name: 'Prawns Pickle', price: 549, rating: 4.8, reviews: 67, category: 'Non-Veg' },
];

const Shop = () => {
  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Breadcrumb & Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center text-sm text-text-muted mb-4">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-dark font-medium">Shop Our Pickles</span>
          </div>
          <h1 className="text-4xl font-serif font-bold text-dark">Shop Our Pickles</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-8">
        
        {/* Filters Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white p-6 rounded-xl premium-shadow sticky top-28">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold text-lg text-dark flex items-center">
                <Filter size={20} className="mr-2" /> Filters
              </h2>
            </div>
            
            <div className="space-y-6">
              {/* Categories */}
              <div>
                <h3 className="font-bold text-dark mb-3">Categories</h3>
                <div className="space-y-2">
                  {['All', 'Mango', 'Non-Veg', 'Gongura', 'Vegetable', 'Lemon', 'Combos'].map(cat => (
                    <label key={cat} className="flex items-center space-x-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary accent-primary" />
                      <span className="text-text-dark group-hover:text-primary transition-colors">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Diet */}
              <div>
                <h3 className="font-bold text-dark mb-3">Dietary</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary accent-primary" />
                    <span className="text-text-dark group-hover:text-primary transition-colors">Vegetarian</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary accent-primary" />
                    <span className="text-text-dark group-hover:text-primary transition-colors">Non-Vegetarian</span>
                  </label>
                </div>
              </div>
              
              {/* Price Range */}
              <div>
                <h3 className="font-bold text-dark mb-3">Price</h3>
                <input type="range" className="w-full accent-primary" min="100" max="1000" />
                <div className="flex justify-between text-sm text-text-muted mt-2">
                  <span>₹100</span>
                  <span>₹1000</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-grow">
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-xl premium-shadow mb-6">
            <span className="text-text-muted font-medium mb-4 sm:mb-0">Showing 1–8 of 24 results</span>
            <div className="flex items-center space-x-2">
              <span className="text-text-muted">Sort by:</span>
              <button className="flex items-center space-x-1 font-medium text-dark bg-background px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                <span>Featured</span>
                <ChevronDown size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden premium-shadow group">
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img 
                    src={`/src/assets/${product.name.toLowerCase().includes('mango') ? 'mango' : product.name.toLowerCase().split(' ')[0]}.jpg`} 
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full shadow-sm text-gray-400 hover:text-primary cursor-pointer transition-colors z-10">
                    <Heart size={20} />
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    <Link to={`/product/${product.id}`} className="bg-white text-dark px-4 py-2 rounded-full font-bold hover:bg-primary hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0">
                      Quick View
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-2 py-1 rounded">
                      {product.category}
                    </span>
                    <div className="flex items-center text-accent">
                      <Star size={14} className="fill-current" />
                      <span className="text-sm font-bold ml-1 text-dark">{product.rating}</span>
                    </div>
                  </div>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-serif font-bold text-xl text-dark mb-1 hover:text-primary transition-colors">{product.name}</h3>
                  </Link>
                  <p className="text-text-muted text-sm mb-4">250g | 500g | 1kg</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-2xl text-primary">₹{product.price}</span>
                    <button className="bg-dark text-white p-3 rounded-full hover:bg-primary transition-colors">
                      <ShoppingBag size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <button className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white font-bold premium-shadow">1</button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-dark hover:bg-gray-100 font-bold premium-shadow">2</button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-dark hover:bg-gray-100 font-bold premium-shadow">3</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
