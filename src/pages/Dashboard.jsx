import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Package, MapPin, Heart, Bell, Settings, LogOut, ChevronRight } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('orders');

  const tabs = [
    { id: 'profile', icon: User, label: 'My Profile' },
    { id: 'orders', icon: Package, label: 'My Orders' },
    { id: 'addresses', icon: MapPin, label: 'Saved Addresses' },
    { id: 'wishlist', icon: Heart, label: 'Wishlist' },
    { id: 'notifications', icon: Bell, label: 'Notifications' },
    { id: 'settings', icon: Settings, label: 'Account Settings' },
  ];

  return (
    <div className="pt-24 min-h-screen bg-background pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-serif font-bold text-dark mb-8">My Account</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl premium-shadow overflow-hidden sticky top-28">
              <div className="p-6 border-b border-gray-100 flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xl">
                  JD
                </div>
                <div>
                  <h3 className="font-bold text-dark">John Doe</h3>
                  <p className="text-xs text-text-muted">john@example.com</p>
                </div>
              </div>
              <div className="p-4">
                <ul className="space-y-1">
                  {tabs.map(tab => (
                    <li key={tab.id}>
                      <button 
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${
                          activeTab === tab.id ? 'bg-primary/5 text-primary font-bold' : 'text-text-dark hover:bg-gray-50'
                        }`}
                      >
                        <tab.icon size={18} />
                        <span>{tab.label}</span>
                        {activeTab === tab.id && <ChevronRight size={16} className="ml-auto" />}
                      </button>
                    </li>
                  ))}
                  <li className="pt-4 mt-4 border-t border-gray-100">
                    <Link to="/" className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-colors">
                      <LogOut size={18} />
                      <span>Logout</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-grow">
            
            {activeTab === 'orders' && (
              <div className="bg-white rounded-3xl premium-shadow p-6 md:p-8">
                <h2 className="text-2xl font-serif font-bold text-dark mb-6">My Orders</h2>
                
                <div className="space-y-6">
                  {/* Order Card 1 */}
                  <div className="border border-gray-200 rounded-2xl p-6">
                    <div className="flex flex-wrap justify-between items-start mb-4 border-b border-gray-100 pb-4 gap-4">
                      <div>
                        <span className="text-sm text-text-muted block">Order ID</span>
                        <span className="font-bold text-dark">#KNR-89472</span>
                      </div>
                      <div>
                        <span className="text-sm text-text-muted block">Date</span>
                        <span className="font-bold text-dark">12 Oct 2026</span>
                      </div>
                      <div>
                        <span className="text-sm text-text-muted block">Total Amount</span>
                        <span className="font-bold text-dark">₹997</span>
                      </div>
                      <div>
                        <span className="text-sm text-text-muted block">Status</span>
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold mt-1 inline-block">Delivered</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <img src="https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Pickle" className="w-16 h-16 rounded-xl object-cover" />
                      <div>
                        <h4 className="font-bold text-dark">Andhra Mango Pickle</h4>
                        <p className="text-sm text-text-muted">2 x 250g</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 mt-4">
                      <img src="https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Pickle" className="w-16 h-16 rounded-xl object-cover" />
                      <div>
                        <h4 className="font-bold text-dark">Chicken Pickle</h4>
                        <p className="text-sm text-text-muted">1 x 500g</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex gap-3">
                      <button className="px-6 py-2 bg-primary text-white text-sm font-bold rounded-full hover:bg-dark transition-colors">Track Order</button>
                      <button className="px-6 py-2 border border-gray-300 text-dark text-sm font-bold rounded-full hover:border-dark transition-colors">View Details</button>
                    </div>
                  </div>

                  {/* Order Card 2 */}
                  <div className="border border-gray-200 rounded-2xl p-6">
                    <div className="flex flex-wrap justify-between items-start mb-4 border-b border-gray-100 pb-4 gap-4">
                      <div>
                        <span className="text-sm text-text-muted block">Order ID</span>
                        <span className="font-bold text-dark">#KNR-89301</span>
                      </div>
                      <div>
                        <span className="text-sm text-text-muted block">Date</span>
                        <span className="font-bold text-dark">05 Sep 2026</span>
                      </div>
                      <div>
                        <span className="text-sm text-text-muted block">Total Amount</span>
                        <span className="font-bold text-dark">₹499</span>
                      </div>
                      <div>
                        <span className="text-sm text-text-muted block">Status</span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold mt-1 inline-block">Processing</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <img src="https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Pickle" className="w-16 h-16 rounded-xl object-cover" />
                      <div>
                        <h4 className="font-bold text-dark">Gongura Pickle</h4>
                        <p className="text-sm text-text-muted">1 x 500g</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex gap-3">
                      <button className="px-6 py-2 bg-primary text-white text-sm font-bold rounded-full hover:bg-dark transition-colors">Track Order</button>
                      <button className="px-6 py-2 border border-gray-300 text-dark text-sm font-bold rounded-full hover:border-dark transition-colors">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Other tabs placeholders */}
            {activeTab !== 'orders' && (
              <div className="bg-white rounded-3xl premium-shadow p-6 md:p-8 flex items-center justify-center min-h-[400px] text-text-muted">
                {tabs.find(t => t.id === activeTab)?.label} details will appear here.
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
