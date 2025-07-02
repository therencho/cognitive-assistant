"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Zap, 
  Home, 
  Calendar,
  MessageSquare,
  Cpu,
  Eye,
  Lightbulb
} from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const researchFeatures = [
    {
      icon: MessageSquare,
      title: "Natural Conversations",
      description: "Chat with your AI like talking to a friend - understanding context, emotions, and your unique communication style.",
      status: "🔬 Research Phase",
      gradient: "from-teal-500 to-cyan-500",
      delay: 0.1
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your conversations never leave your device. No cloud processing, no data collection, no surveillance.",
      status: "🎯 Core Principle",
      gradient: "from-teal-600 to-teal-400",
      delay: 0.2
    },
    {
      icon: Home,
      title: "Smart Home Control",
      description: "Seamlessly control your IoT devices with voice commands and intelligent automation routines.",
      status: "💭 Planned Feature",
      gradient: "from-cyan-500 to-teal-500",
      delay: 0.3
    },
    {
      icon: Calendar,
      title: "Intelligent Scheduling",
      description: "AI-powered calendar management that learns your preferences and optimizes your time.",
      status: "🔧 In Design",
      gradient: "from-teal-400 to-cyan-400",
      delay: 0.4
    },
    {
      icon: Cpu,
      title: "Edge Computing Power",
      description: "Harness the power of local AI processing with optimized hardware for real-time responses.",
      status: "🛠️ Prototyping",
      gradient: "from-cyan-600 to-teal-600",
      delay: 0.5
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Instant responses without internet delays. Your AI assistant is always ready when you are.",
      status: "⚡ Vision Goal",
      gradient: "from-teal-300 to-cyan-300",
      delay: 0.6
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl mb-6"
          >
            <Lightbulb className="w-8 h-8 text-white" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 mb-6">
            Our Vision
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A <span className="text-teal-400 font-semibold">privacy-focused AI companion robot</span> that runs entirely on local hardware - 
            revolutionizing how we interact with AI while keeping your data truly private.
          </p>
          
          <div className="mt-8 inline-flex items-center px-6 py-3 bg-teal-500/20 border border-teal-400/30 rounded-full">
            <Eye className="w-5 h-5 text-teal-400 mr-2" />
            <span className="text-teal-300 font-medium">Local AI Assistant</span>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: feature.delay }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-teal-400/30 transition-all duration-300 h-full">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-teal-400 bg-teal-400/10 px-3 py-1 rounded-full">
                      {feature.status}
                    </span>
                    
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 bg-teal-400 rounded-full"
                    />
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default FeaturesSection;