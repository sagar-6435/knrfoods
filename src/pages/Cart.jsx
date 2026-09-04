import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ArrowRight } from 'lucide-react';

const Cart = () => {
  return (
    <div className="pt-24 min-h-screen bg-background pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-serif font-bold text-dark mb-8 text-center md:text-left">Your Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-3xl premium-shadow overflow-hidden">
              {/* Header */}
              <div className="hidden md:grid grid-cols-6 gap-4 p-6 border-b border-gray-100 font-bold text-text-muted text-sm uppercase tracking-wider">
                <div className="col-span-3">Product</div>
                <div className="col-span-1 text-center">Price</div>
                <div className="col-span-1 text-center">Quantity</div>
                <div className="col-span-1 text-right">Total</div>
              </div>

              {/* Item 1 */}
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4 p-6 border-b border-gray-100 items-center">
                <div className="col-span-1 md:col-span-3 flex items-center">
                  <button className="text-gray-400 hover:text-primary transition-colors mr-4">
                    <Trash2 size={20} />
                  </button>
                  <div className="w-20 h-20 bg-gray-100 rounded-xl overflow-hidden mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                      alt="Mango Pickle" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <Link to="/product/1" className="font-bold text-dark hover:text-primary transition-colors block">Andhra Mango Pickle</Link>
                    <span className="text-sm text-text-muted">Weight: 250g</span>
                  </div>
                </div>
                <div className="col-span-1 text-center font-bold text-dark hidden md:block">
                  ₹299
                </div>
                <div className="col-span-1 flex justify-center">
                  <div className="flex items-center bg-background rounded-full px-1 py-1">
                    <button className="w-8 h-8 flex items-center justify-center text-dark hover:text-primary rounded-full transition-colors">
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center font-bold text-dark text-sm">2</span>
                    <button className="w-8 h-8 flex items-center justify-center text-dark hover:text-primary rounded-full transition-colors">
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
                <div className="col-span-1 text-right font-bold text-primary flex justify-between md:block mt-4 md:mt-0">
                  <span className="md:hidden text-text-muted">Total:</span>
                  ₹598
                </div>
              </div>

              {/* Item 2 */}
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4 p-6 border-b border-gray-100 items-center">
                <div className="col-span-1 md:col-span-3 flex items-center">
                  <button className="text-gray-400 hover:text-primary transition-colors mr-4">
                    <Trash2 size={20} />
                  </button>
                  <div className="w-20 h-20 bg-gray-100 rounded-xl overflow-hidden mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                      alt="Chicken Pickle" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <Link to="/product/2" className="font-bold text-dark hover:text-primary transition-colors block">Chicken Pickle</Link>
                    <span className="text-sm text-text-muted">Weight: 500g</span>
                  </div>
                </div>
                <div className="col-span-1 text-center font-bold text-dark hidden md:block">
                  ₹399
                </div>
                <div className="col-span-1 flex justify-center">
                  <div className="flex items-center bg-background rounded-full px-1 py-1">
                    <button className="w-8 h-8 flex items-center justify-center text-dark hover:text-primary rounded-full transition-colors">
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center font-bold text-dark text-sm">1</span>
                    <button className="w-8 h-8 flex items-center justify-center text-dark hover:text-primary rounded-full transition-colors">
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
                <div className="col-span-1 text-right font-bold text-primary flex justify-between md:block mt-4 md:mt-0">
                  <span className="md:hidden text-text-muted">Total:</span>
                  ₹399
                </div>
              </div>

              <div className="p-6 flex justify-between items-center bg-gray-50">
                <Link to="/shop" className="text-dark font-medium hover:text-primary transition-colors flex items-center">
                  Continue Shopping
                </Link>
                <button className="text-text-muted hover:text-primary font-medium transition-colors">
                  Clear Cart
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-3xl premium-shadow p-8 sticky top-28">
              <h2 className="text-2xl font-serif font-bold text-dark mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 text-dark font-medium">
                <div className="flex justify-between">
                  <span className="text-text-muted">Subtotal</span>
                  <span>₹997</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Delivery</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span>- ₹0</span>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-dark">Total</span>
                  <span className="text-2xl font-bold text-primary">₹997</span>
                </div>
                <p className="text-sm text-text-muted mt-1 text-right">(Inclusive of all taxes)</p>
              </div>

              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl mb-6 text-sm text-center">
                Yay! You get <strong>FREE Shipping</strong> on this order.
              </div>

              <Link to="/checkout" className="w-full bg-primary text-white font-bold rounded-full h-14 hover:bg-dark transition-colors premium-shadow flex items-center justify-center text-lg">
                Proceed to Checkout <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;
