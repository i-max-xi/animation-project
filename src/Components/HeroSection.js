import React from 'react';
import { motion } from 'framer-motion';
import YogaLady from './svgs/YagaLady';

const HeroSection = () => {
  return (
    <div className="hero d-flex align-items-center justify-content-center text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="hero-content">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="display-4"
              >
                Welcome to Yoga Studio
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="lead"
              >
                Join us to find your inner peace and harmony.
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="btn btn-primary btn-lg"
              >
                Explore Classes
              </motion.button>
            </div>
          </div>
          <div className="col-md-6">
            <YogaLady />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
