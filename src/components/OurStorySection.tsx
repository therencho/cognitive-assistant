"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Brain, 
  Heart, 
  Lightbulb, 
  Shield, 
  Zap,
  AlertTriangle,
  Target,
  Users
} from 'lucide-react';

const OurStorySection: React.FC = () => {
  return (
    <section id="story" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-teal-950">
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
            <BookOpen className="w-8 h-8 text-white" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Research Journey
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From academic curiosity to a mission-driven project inspired by both innovation and heartbreak.
          </p>
        </motion.div>

        {/* The Moxie Story */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-3xl p-8 md:p-12 border border-red-200 dark:border-red-800">
            <div className="text-center mb-8">
              <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">The Moxie Tragedy</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A heartbreaking story that changed everything and inspired our mission for truly private AI.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What Moxie Was</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Moxie was a remarkable $800 AI companion robot designed to help children learn social skills and emotional regulation. 
                  It was particularly beneficial for children on the autism spectrum, becoming a trusted friend and mentor.
                </p>
                
                <div className="bg-white dark:bg-slate-800 rounded-xl p-4 mb-4">
                  <div className="flex items-center mb-2">
                    <Heart className="w-5 h-5 text-red-500 mr-2" />
                    <span className="font-medium text-gray-900 dark:text-white">Real Impact</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Children formed deep emotional bonds with Moxie, using it to practice conversations, 
                    learn emotional regulation, and build confidence in social interactions.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">The Devastating Shutdown</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  In November 2024, Embodied Inc. suddenly announced they were shutting down due to failed funding. 
                  <span className="text-red-600 dark:text-red-400 font-semibold"> All Moxie robots would stop working immediately</span> because they were entirely dependent on cloud servers.
                </p>
                
                <div className="bg-red-100 dark:bg-red-900/30 rounded-xl p-4">
                  <div className="flex items-center mb-2">
                    <Users className="w-5 h-5 text-red-600 mr-2" />
                    <span className="font-medium text-red-700 dark:text-red-400">The Human Cost</span>
                  </div>
                  <p className="text-sm text-red-600 dark:text-red-400">
                    Children cried as parents had to explain their robot friend was "dying." 
                    Families felt devastated, especially those with autistic children who had made significant progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* My Research Journey */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Column - Background */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-slate-700">
              <div className="flex items-center mb-6">
                <Brain className="w-8 h-8 text-teal-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">My Research Foundation</h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                My journey began with a deep fascination for the intersection of <span className="text-teal-600 dark:text-teal-400 font-semibold">Physics, Mathematics, and Computer Science</span>. 
                What captivated me most was autonomous technology and the profound effects of AI on robotics.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-teal-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">Physics & Mathematical Foundations</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">Computer Science Applications</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-teal-400 rounded-full mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">Autonomous Technology Research</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Academic Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-3xl p-8 border border-teal-200 dark:border-teal-700">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Research & Innovation</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Autonomous Systems</p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl">
                <p className="text-sm text-gray-600 dark:text-gray-400 italic text-center">
                  "The more I studied autonomous technology, the more I realized its potential to create meaningful human-robot interactions."
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* The Solution Vision */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-3xl p-8 md:p-12 border border-teal-200 dark:border-teal-700">
            <div className="text-center mb-8">
              <Target className="w-12 h-12 text-teal-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Mission Born</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                The Moxie tragedy crystallized our vision: AI companions that can't be taken away.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Local Processing</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  All AI processing happens on-device. No cloud dependency means no sudden shutdowns.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Remote Updates</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Like smartphones, robots can receive updates without relying on continuous cloud services.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Lasting Bonds</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Children can form relationships knowing their AI friend will always be there.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white dark:bg-slate-800 rounded-xl">
              <p className="text-center text-gray-700 dark:text-gray-300 font-medium">
                "We're building the robot companion that <span className="text-teal-600 dark:text-teal-400">Moxie should have been</span> - 
                one that belongs to you, not to a cloud service that can disappear overnight."
              </p>
            </div>
          </div>
        </motion.div>

        
      </div>
    </section>
  );
};

export default OurStorySection; 