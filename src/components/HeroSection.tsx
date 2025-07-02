"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Cpu, Heart, Lightbulb, Rocket } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-32 md:h-32 bg-cyan-500/10 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center mb-6">
            <motion.div 
              className="bg-teal-500/20 p-2 md:p-3 rounded-2xl mr-3 md:mr-4"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-teal-400" />
            </motion.div>
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 text-transparent bg-clip-text text-sm md:text-lg font-semibold">
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-500 text-transparent bg-clip-text">
              Cognitive Assistant
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            <span className="text-teal-400 font-semibold"></span> A Assistant Robot, Privacy Focused with local AI processing.
            <span className="text-teal-300"><br></br>No cloud. No tracking. Just pure, Personal Assistant.</span>
          </p>

          
        </motion.div>

        {/* Research Features Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-white/10 hover:border-teal-400/30 transition-colors duration-300">
            <Shield className="w-6 h-6 md:w-8 md:h-8 text-teal-400 mb-4 mx-auto" />
            <h3 className="text-base md:text-lg font-semibold text-white mb-2">Privacy First</h3>
            <p className="text-gray-400 text-sm">Your data never leaves your device. Ever.</p>
            <div className="mt-3 text-xs text-teal-400">📋 In Research</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-white/10 hover:border-cyan-400/30 transition-colors duration-300">
            <Cpu className="w-6 h-6 md:w-8 md:h-8 text-cyan-400 mb-4 mx-auto" />
            <h3 className="text-base md:text-lg font-semibold text-white mb-2">Edge Computing</h3>
            <p className="text-gray-400 text-sm">Powerful AI processing on local hardware.</p>
            <div className="mt-3 text-xs text-cyan-400">🔧 Prototyping</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-white/10 hover:border-teal-300/30 transition-colors duration-300">
            <Zap className="w-6 h-6 md:w-8 md:h-8 text-teal-300 mb-4 mx-auto" />
            <h3 className="text-base md:text-lg font-semibold text-white mb-2">Smart Control</h3>
            <p className="text-gray-400 text-sm">Seamless IoT and home automation.</p>
            <div className="mt-3 text-xs text-teal-300">💭 Planned</div>
          </div>
        </motion.div>

        {/* Development Progress Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 md:mt-16"
        >
          <p className="text-gray-500 text-sm mb-4">Development Progress</p>
          <div className="w-full max-w-md mx-auto bg-gray-800 rounded-full h-2">
            <motion.div 
              className="bg-gradient-to-r from-teal-500 to-cyan-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "25%" }}
              transition={{ duration: 2, delay: 1 }}
            ></motion.div>
          </div>
          <p className="text-gray-400 text-xs mt-2">Phase 1: Foundation & Research</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 