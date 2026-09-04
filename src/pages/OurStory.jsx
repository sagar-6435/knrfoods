import React from 'react';
import { motion } from 'framer-motion';

const OurStory = () => {
  return (
    <div className="bg-background min-h-screen pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-serif text-dark mb-4">Our Story</h1>
          <p className="text-xl text-muted">
            A journey of flavor, tradition, and a grandmother's love.
          </p>
        </motion.div>

        <div className="space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border-l-4 border-primary relative"
          >
            <div className="absolute -left-4 top-8 w-8 h-8 bg-accent rounded-full border-4 border-white"></div>
            <h2 className="text-3xl font-serif text-dark mb-4">The Beginning</h2>
            <p className="text-lg text-text leading-relaxed">
              Our story begins in a small, bustling kitchen in the heart of Andhra Pradesh, where the aroma of roasted spices and tangy raw mangoes filled the air every summer. Our grandmother, lovingly known as Ammamma, was the culinary matriarch of the family. Her secret to the perfect pickle wasn't just the carefully selected ingredients, but the immense patience and love she poured into every jar.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border-l-4 border-secondary relative"
          >
            <div className="absolute -left-4 top-8 w-8 h-8 bg-accent rounded-full border-4 border-white"></div>
            <h2 className="text-3xl font-serif text-dark mb-4">Preserving Tradition</h2>
            <p className="text-lg text-text leading-relaxed">
              As we grew older, we realized that the authentic taste of homemade pickles was slowly disappearing, replaced by mass-produced alternatives that lacked the soul of our grandmother's creations. We knew we had to preserve this heritage. KNR Foods was born out of a desire to share Ammamma's treasured recipes with the world.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border-l-4 border-primary relative"
          >
            <div className="absolute -left-4 top-8 w-8 h-8 bg-accent rounded-full border-4 border-white"></div>
            <h2 className="text-3xl font-serif text-dark mb-4">Today & Tomorrow</h2>
            <p className="text-lg text-text leading-relaxed mb-6">
              Today, KNR Foods stands proudly as a premium modern food brand that stays completely true to its traditional roots. We still sun-dry our ingredients, we still hand-blend our spices, and we still ensure that every jar delivers the authentic taste of home.
            </p>
            <img 
              src="/src/assets/hero.jpg" 
              alt="KNR Foods Legacy" 
              className="rounded-xl shadow-md w-full h-[300px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
