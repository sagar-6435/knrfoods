import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lock, ShieldCheck, CreditCard, Banknote, Smartphone } from 'lucide-react';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('upi');

  return (
    <div className="pt-24 min-h-screen bg-background pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-serif font-bold text-dark mb-8 text-center md:text-left">Checkout</h1>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Forms */}
          <div className="w-full lg:w-2/3 space-y-8">
            
            {/* 1. Contact & Delivery */}
            <div className="bg-white rounded-3xl premium-shadow p-8">
              <h2 className="text-2xl font-serif font-bold text-dark mb-6">1. Delivery Address</h2>
              <form className="space-y-4 text-dark font-medium">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-text-muted mb-1">First Name</label>
                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Enter first name" />
                  </div>
                  <div>
                    <label className="block text-sm text-text-muted mb-1">Last Name</label>
                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Enter last name" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-text-muted mb-1">Mobile Number</label>
                  <input type="tel" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Enter 10-digit mobile number" />
                </div>
                <div>
                  <label className="block text-sm text-text-muted mb-1">Street Address</label>
                  <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="House number and street name" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-1">
                    <label className="block text-sm text-text-muted mb-1">Pincode</label>
                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Pincode" />
                  </div>
                  <div className="md:col-span-1">
                    <label className="block text-sm text-text-muted mb-1">City</label>
                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="City" />
                  </div>
                  <div className="md:col-span-1">
                    <label className="block text-sm text-text-muted mb-1">State</label>
                    <select className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white">
                      <option>Select State</option>
                      <option>Andhra Pradesh</option>
                      <option>Telangana</option>
                      <option>Karnataka</option>
                      <option>Tamil Nadu</option>
                      <option>Maharashtra</option>
                      <option>Delhi</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>

            {/* 2. Payment Method */}
            <div className="bg-white rounded-3xl premium-shadow p-8">
              <h2 className="text-2xl font-serif font-bold text-dark mb-6">2. Payment Method</h2>
              <div className="space-y-4">
                <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${paymentMethod === 'upi' ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-gray-200 hover:border-gray-300'}`}>
                  <input type="radio" name="payment" checked={paymentMethod === 'upi'} onChange={() => setPaymentMethod('upi')} className="w-5 h-5 text-primary focus:ring-primary accent-primary" />
                  <Smartphone className="ml-4 mr-3 text-dark" size={24} />
                  <span className="font-bold text-dark flex-grow">UPI (GPay, PhonePe, Paytm)</span>
                </label>
                
                <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${paymentMethod === 'card' ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-gray-200 hover:border-gray-300'}`}>
                  <input type="radio" name="payment" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} className="w-5 h-5 text-primary focus:ring-primary accent-primary" />
                  <CreditCard className="ml-4 mr-3 text-dark" size={24} />
                  <span className="font-bold text-dark flex-grow">Credit / Debit Card</span>
                </label>

                <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-gray-200 hover:border-gray-300'}`}>
                  <input type="radio" name="payment" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} className="w-5 h-5 text-primary focus:ring-primary accent-primary" />
                  <Banknote className="ml-4 mr-3 text-dark" size={24} />
                  <span className="font-bold text-dark flex-grow">Cash on Delivery</span>
                </label>
              </div>
            </div>

          </div>

          {/* Right Column - Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-3xl premium-shadow p-8 sticky top-28">
              <h2 className="text-2xl font-serif font-bold text-dark mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <div className="flex items-center">
                    <img src="https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Pickle" className="w-12 h-12 rounded-lg object-cover mr-3" />
                    <div>
                      <h4 className="font-bold text-dark text-sm">Andhra Mango...</h4>
                      <p className="text-xs text-text-muted">Qty: 2 x 250g</p>
                    </div>
                  </div>
                  <span className="font-bold text-dark">₹598</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <div className="flex items-center">
                    <img src="https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Pickle" className="w-12 h-12 rounded-lg object-cover mr-3" />
                    <div>
                      <h4 className="font-bold text-dark text-sm">Chicken Pickle</h4>
                      <p className="text-xs text-text-muted">Qty: 1 x 500g</p>
                    </div>
                  </div>
                  <span className="font-bold text-dark">₹399</span>
                </div>
              </div>

              <div className="space-y-3 mb-6 text-dark font-medium text-sm">
                <div className="flex justify-between">
                  <span className="text-text-muted">Subtotal</span>
                  <span>₹997</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Delivery</span>
                  <span className="text-green-600">Free</span>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-dark">Total</span>
                  <span className="text-2xl font-bold text-primary">₹997</span>
                </div>
              </div>

              <button className="w-full bg-primary text-white font-bold rounded-full h-14 hover:bg-dark transition-colors premium-shadow flex items-center justify-center text-lg mb-4">
                <Lock size={18} className="mr-2" /> Place Order
              </button>

              <div className="flex items-center justify-center text-text-muted text-xs">
                <ShieldCheck size={16} className="mr-1 text-green-600" />
                <span>100% Secure & Encrypted Payments</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;
