import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, Heart, Truck, ShieldCheck, Info } from 'lucide-react';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [selectedWeight, setSelectedWeight] = useState('250g');

  return (
    <div className="pt-24 min-h-screen bg-background pb-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-text-muted">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
            <span className="mx-2">/</span>
            <Link to="/shop?category=mango" className="hover:text-primary transition-colors">Mango Pickles</Link>
            <span className="mx-2">/</span>
            <span className="text-dark font-medium">Andhra Mango Pickle</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Image Gallery */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-3xl overflow-hidden premium-shadow mb-4 relative">
              <img 
                src="https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Andhra Mango Pickle" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
                Best Seller
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((img) => (
                <div key={img} className={`bg-white rounded-xl overflow-hidden cursor-pointer premium-shadow border-2 ${img === 1 ? 'border-primary' : 'border-transparent'}`}>
                  <img 
                    src="https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                    alt={`Thumbnail ${img}`} 
                    className="w-full h-24 object-cover hover:opacity-80 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-dark mb-4 leading-tight">
              Authentic Andhra Mango Pickle
            </h1>
            
            <div className="flex items-center mb-6">
              <div className="flex text-accent mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className={i < 4 ? "fill-current" : (i === 4 ? "fill-current opacity-50" : "")} />
                ))}
              </div>
              <span className="text-text-muted font-medium hover:text-primary cursor-pointer transition-colors">(124 Customer Reviews)</span>
            </div>

            <div className="flex items-end mb-6">
              <span className="text-4xl font-bold text-primary">₹299</span>
              <span className="text-xl text-text-muted line-through ml-3 mb-1">₹350</span>
              <span className="bg-green-100 text-green-700 font-bold px-2 py-1 rounded text-sm ml-4 mb-1">15% OFF</span>
            </div>

            <p className="text-text-muted text-lg mb-8 leading-relaxed">
              Experience the true taste of Andhra with our signature Avakaya. Made with raw, sour sour mangoes, fiery Guntur chillies, and cold-pressed sesame oil. A perfect accompaniment to hot rice and ghee.
            </p>

            {/* Weight Selector */}
            <div className="mb-8">
              <h3 className="font-bold text-dark mb-3">Select Weight:</h3>
              <div className="flex flex-wrap gap-4">
                {['250g', '500g', '1kg'].map(weight => (
                  <button 
                    key={weight}
                    onClick={() => setSelectedWeight(weight)}
                    className={`px-6 py-3 rounded-xl font-bold transition-all ${
                      selectedWeight === weight 
                      ? 'bg-primary text-white premium-shadow ring-2 ring-primary ring-offset-2' 
                      : 'bg-white text-dark border border-gray-200 hover:border-primary hover:text-primary'
                    }`}
                  >
                    {weight}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="flex items-center bg-white border border-gray-200 rounded-full px-2 h-14">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-dark hover:text-primary hover:bg-gray-100 rounded-full transition-colors"
                >
                  <Minus size={20} />
                </button>
                <span className="w-12 text-center font-bold text-dark text-lg">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-dark hover:text-primary hover:bg-gray-100 rounded-full transition-colors"
                >
                  <Plus size={20} />
                </button>
              </div>
              <button className="flex-grow bg-primary text-white font-bold rounded-full h-14 hover:bg-dark transition-colors premium-shadow flex items-center justify-center text-lg">
                <ShoppingBag className="mr-2" size={24} /> Add to Cart
              </button>
              <button className="bg-white text-dark border-2 border-gray-200 hover:border-primary hover:text-primary rounded-full h-14 w-14 flex items-center justify-center transition-colors shadow-sm">
                <Heart size={24} />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-y border-gray-200 py-6 mb-8">
              <div className="flex items-center text-dark">
                <Truck className="text-secondary mr-3" size={24} />
                <span className="font-medium">Free shipping over ₹999</span>
              </div>
              <div className="flex items-center text-dark">
                <ShieldCheck className="text-secondary mr-3" size={24} />
                <span className="font-medium">100% Authentic Quality</span>
              </div>
              <div className="flex items-center text-dark">
                <Info className="text-secondary mr-3" size={24} />
                <span className="font-medium">Shelf Life: 12 Months</span>
              </div>
            </div>

          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-20">
          <div className="flex overflow-x-auto border-b border-gray-200 mb-8 pb-1 hide-scrollbar">
            {['description', 'ingredients', 'nutrition', 'shipping'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap pb-4 px-6 font-bold text-lg capitalize transition-colors relative ${
                  activeTab === tab ? 'text-primary' : 'text-text-muted hover:text-dark'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-t-md"></span>
                )}
              </button>
            ))}
          </div>

          <div className="bg-white p-8 rounded-3xl premium-shadow min-h-[300px]">
            {activeTab === 'description' && (
              <div className="prose prose-lg max-w-none text-text-dark">
                <p>
                  Our Andhra Mango Pickle (Avakaya) is a celebration of traditional South Indian culinary heritage. We source the finest, firmest raw mangoes and chop them perfectly with the inner shell intact to ensure a satisfying crunch in every bite.
                </p>
                <p className="mt-4">
                  The magic lies in our secret spice blend - freshly ground mustard powder, premium Guntur red chilli powder, and pure cold-pressed sesame oil. We don't use any artificial preservatives or colors. The oil and salt act as natural preservatives, just like how it was done generations ago.
                </p>
              </div>
            )}
            
            {activeTab === 'ingredients' && (
              <div className="text-text-dark">
                <ul className="list-disc pl-5 space-y-3 text-lg">
                  <li>Raw Mango Pieces</li>
                  <li>Guntur Red Chilli Powder</li>
                  <li>Mustard Seed Powder</li>
                  <li>Cold-pressed Sesame Oil</li>
                  <li>Crystal Salt</li>
                  <li>Fenugreek (Methi) Powder</li>
                  <li>Garlic Cloves</li>
                </ul>
              </div>
            )}
            
            {activeTab === 'nutrition' && (
              <div className="text-text-dark">
                <p className="mb-4 text-lg">Nutritional values per 100g (Approximate):</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-background p-4 rounded-xl text-center">
                    <span className="block text-text-muted mb-1">Energy</span>
                    <span className="text-2xl font-bold text-primary">280 kcal</span>
                  </div>
                  <div className="bg-background p-4 rounded-xl text-center">
                    <span className="block text-text-muted mb-1">Protein</span>
                    <span className="text-2xl font-bold text-primary">2.5g</span>
                  </div>
                  <div className="bg-background p-4 rounded-xl text-center">
                    <span className="block text-text-muted mb-1">Fat</span>
                    <span className="text-2xl font-bold text-primary">22.0g</span>
                  </div>
                  <div className="bg-background p-4 rounded-xl text-center">
                    <span className="block text-text-muted mb-1">Carbohydrates</span>
                    <span className="text-2xl font-bold text-primary">18.0g</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="text-text-dark prose prose-lg max-w-none">
                <h4 className="font-bold text-xl mb-3">Delivery Information</h4>
                <p>We pack our pickles in high-quality, leak-proof food-grade jars with bubble wrap to ensure they reach you safely. </p>
                <ul className="mt-4 space-y-2">
                  <li><strong>Dispatch:</strong> Orders are dispatched within 1-2 business days.</li>
                  <li><strong>Delivery Time:</strong> 3-5 business days across India.</li>
                  <li><strong>Shipping Charges:</strong> Free delivery on orders above ₹999. A flat shipping fee of ₹60 is applied to orders below that.</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-24">
          <h2 className="text-3xl font-serif font-bold text-dark mb-8 text-center">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Same cards as best sellers */}
            {[
              { id: 3, name: 'Gongura Pickle', price: 299, rating: 4.7, reviews: 156 },
              { id: 2, name: 'Chicken Pickle', price: 399, rating: 4.9, reviews: 89 },
              { id: 4, name: 'Garlic Pickle', price: 249, rating: 4.6, reviews: 72 },
              { id: 5, name: 'Lemon Pickle', price: 199, rating: 4.5, reviews: 93 },
            ].map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden premium-shadow group">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`} 
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-serif font-bold text-lg text-dark mb-1 hover:text-primary">{product.name}</h3>
                  </Link>
                  <div className="flex items-center justify-between mt-3">
                    <span className="font-bold text-xl text-primary">₹{product.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
