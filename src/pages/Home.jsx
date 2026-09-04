import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, ShieldCheck, Heart, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-background z-0"></div>
        <div 
          className="absolute inset-0 z-0 opacity-40 bg-hero-pattern bg-cover bg-center"
          style={{ mixBlendMode: 'multiply' }}
        ></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6 leading-tight"
          >
            A Taste of Tradition in Every Spoonful.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-text-dark mb-10 max-w-2xl mx-auto font-medium"
          >
            Authentic Indian pickles crafted with traditional recipes, quality ingredients, and a whole lot of love.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/shop" className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-dark transition-colors premium-shadow flex items-center justify-center">
              Shop Pickles <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link to="/story" className="w-full sm:w-auto px-8 py-4 bg-white text-primary border border-primary font-bold rounded-full hover:bg-primary/5 transition-colors premium-shadow">
              Discover Our Story
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Highlights Section */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-background rounded-full p-4 mb-4 text-primary">
                <ShieldCheck size={32} />
              </div>
              <h3 className="font-serif font-bold text-xl mb-2 text-dark">Authentic Recipes</h3>
              <p className="text-text-muted">Traditional flavors passed down through generations.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-background rounded-full p-4 mb-4 text-secondary">
                <Heart size={32} />
              </div>
              <h3 className="font-serif font-bold text-xl mb-2 text-dark">Quality Ingredients</h3>
              <p className="text-text-muted">Carefully selected natural ingredients and spices.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-background rounded-full p-4 mb-4 text-accent">
                <Star size={32} />
              </div>
              <h3 className="font-serif font-bold text-xl mb-2 text-dark">Made With Love</h3>
              <p className="text-text-muted">Prepared with care, passion, and traditional methods.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-background rounded-full p-4 mb-4 text-primary">
                <Truck size={32} />
              </div>
              <h3 className="font-serif font-bold text-xl mb-2 text-dark">Delivered Fresh</h3>
              <p className="text-text-muted">Secure packaging and reliable delivery to your door.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-dark mb-4">Pick Your Favorite</h2>
            <p className="text-text-muted max-w-2xl mx-auto">Explore our wide range of authentic pickles, from classic mango to spicy non-veg delicacies.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Mango', 'Non-Veg', 'Gongura', 'Vegetable', 'Lemon', 'Garlic'].map((category) => (
              <Link to={`/shop?category=${category.toLowerCase()}`} key={category} className="group relative rounded-2xl overflow-hidden aspect-square premium-shadow cursor-pointer">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors z-10"></div>
                <img 
                  src={`/src/assets/mango.jpg`} 
                  alt={category} 
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <h3 className="text-white font-serif font-bold text-xl drop-shadow-md">{category}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Best Sellers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-serif font-bold text-dark mb-2">Our Best Sellers</h2>
              <p className="text-text-muted">Loved by pickle lovers everywhere.</p>
            </div>
            <Link to="/shop" className="hidden md:flex items-center text-primary font-bold hover:text-dark transition-colors">
              View All <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: 1, name: 'Andhra Mango Pickle', price: 299, rating: 4.8, reviews: 124 },
              { id: 2, name: 'Chicken Pickle', price: 399, rating: 4.9, reviews: 89 },
              { id: 3, name: 'Gongura Pickle', price: 299, rating: 4.7, reviews: 156 },
              { id: 4, name: 'Garlic Pickle', price: 249, rating: 4.6, reviews: 72 },
            ].map((product) => (
              <div key={product.id} className="bg-background rounded-2xl overflow-hidden premium-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.name.toLowerCase().includes('chicken') ? '/src/assets/chicken.jpg' : '/src/assets/mango.jpg'} 
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-sm text-gray-400 hover:text-primary cursor-pointer transition-colors">
                    <Heart size={20} />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex text-accent">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className={i < Math.floor(product.rating) ? "fill-current" : ""} />
                      ))}
                    </div>
                    <span className="text-sm text-text-muted ml-2">({product.reviews})</span>
                  </div>
                  <h3 className="font-serif font-bold text-xl text-dark mb-1">{product.name}</h3>
                  <p className="text-text-muted text-sm mb-4">250g</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-2xl text-primary">₹{product.price}</span>
                    <button className="bg-primary text-white p-3 rounded-full hover:bg-dark transition-colors">
                      <ShoppingBag size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
             <Link to="/shop" className="inline-flex items-center text-primary font-bold hover:text-dark transition-colors">
              View All <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="bg-background overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 h-[400px] lg:h-auto relative">
            <img 
              src="/src/assets/prep.jpg" 
              alt="Traditional Preparation" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
            <span className="text-secondary font-bold tracking-widest text-sm mb-4 uppercase">The KNR Tradition</span>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-dark mb-6 leading-tight">Made the Traditional Way.</h2>
            <p className="text-text-muted text-lg mb-8 leading-relaxed">
              At KNR Foods, we believe the best flavors come from time-tested recipes, carefully chosen ingredients, and traditional preparation methods. Every jar is a tribute to our grandmother's kitchen.
            </p>
            <Link to="/story" className="inline-flex items-center text-primary font-bold hover:text-dark transition-colors w-max">
              Learn Our Story <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Home;
