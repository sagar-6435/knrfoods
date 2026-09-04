import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-background min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-serif text-dark mb-4">Contact Us</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch with us for any queries, bulk orders, or just to say hello!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
          >
            <h2 className="text-3xl font-serif text-primary mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-2">Subject</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="How can we help?" />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Your message here..."></textarea>
              </div>
              <button type="submit" className="w-full bg-primary hover:bg-dark text-white font-bold py-4 rounded-xl transition duration-300 flex items-center justify-center gap-2">
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-dark text-white rounded-3xl p-8 md:p-12 shadow-lg h-full">
              <h2 className="text-3xl font-serif text-accent mb-8">Contact Information</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Have questions about our products or your order? Our customer support team is here to assist you with anything you need.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Our Kitchen & Office</h3>
                    <p className="text-gray-300">123 Spice Route Avenue,<br />Hyderabad, Telangana 500034<br />India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Phone</h3>
                    <p className="text-gray-300">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Email</h3>
                    <p className="text-gray-300">hello@knrfoods.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-700">
                <h3 className="text-lg font-bold mb-4">Business Hours</h3>
                <p className="text-gray-300 flex justify-between mb-2"><span>Monday - Saturday:</span> <span>9:00 AM - 6:00 PM</span></p>
                <p className="text-gray-300 flex justify-between"><span>Sunday:</span> <span>Closed</span></p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
