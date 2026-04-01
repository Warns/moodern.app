import React from 'react';
import { motion } from 'framer-motion';
import { AppStoreBadge } from './AppStoreBadge';
const IMAGES = {
  yellow: "/hero-okay.webp",
  green: "/hero-happy.webp",
  blue: "/hero-sad.webp",
  red: "/hero-angry.webp"
};
export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          {/* Text Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.1
            }}
            className="flex-1 text-center lg:text-left z-10">
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-charcoal leading-[1.1] mb-6 tracking-tight">
              Track your mood, <br className="hidden lg:block" />
              <span className="text-mood-green">beautifully.</span>
            </h1>
            <p className="text-lg lg:text-xl text-softgray mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Where classical art meets modern wellness. Express how you feel,
              add context to your days, and discover patterns over time in a
              space designed to make you smile.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <AppStoreBadge />
              <p className="text-sm text-softgray font-medium px-4">
                Ad-free.
              </p>
            </div>
          </motion.div>

          {/* Fanned Images */}
          <div className="flex-1 relative w-full max-w-md lg:max-w-none h-[500px] lg:h-[600px] flex justify-center items-center perspective-1000">
            {/* Back Image (Red) - Behind everything */}
            <motion.div
              initial={{
                opacity: 0,
                x: 120,
                rotate: 0
              }}
              animate={{
                opacity: 1,
                x: -100,
                rotate: -18
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: 'spring'
              }}
              className="absolute w-[200px] lg:w-[240px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10 z-0">
              
              <img
                src={IMAGES.red}
                alt="Angry mood"
                className="w-full h-auto" />
              
            </motion.div>

            {/* Left Image (Blue) */}
            <motion.div
              initial={{
                opacity: 0,
                x: 100,
                rotate: 0
              }}
              animate={{
                opacity: 1,
                x: -80,
                rotate: -12
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                type: 'spring'
              }}
              className="absolute w-[220px] lg:w-[260px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/20 z-10">
              
              <img src={IMAGES.blue} alt="Sad mood" className="w-full h-auto" />
            </motion.div>

            {/* Right Image (Yellow) */}
            <motion.div
              initial={{
                opacity: 0,
                x: -100,
                rotate: 0
              }}
              animate={{
                opacity: 1,
                x: 80,
                rotate: 12
              }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                type: 'spring'
              }}
              className="absolute w-[220px] lg:w-[260px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/20 z-20">
              
              <img
                src={IMAGES.yellow}
                alt="Okay mood"
                className="w-full h-auto" />
              
            </motion.div>

            {/* Center Image (Green) */}
            <motion.div
              initial={{
                opacity: 0,
                y: 50
              }}
              animate={{
                opacity: 1,
                y: 0,
                rotate: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                type: 'spring'
              }}
              className="absolute w-[240px] lg:w-[280px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/40 z-30">
              
              <img
                src={IMAGES.green}
                alt="Happy mood"
                className="w-full h-auto" />
              
            </motion.div>
          </div>
        </div>
      </div>
    </section>);

}