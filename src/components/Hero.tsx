import { useLayoutEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AppStoreBadge } from './AppStoreBadge';
const IMAGES = {
  yellow: "/hero-okay.webp",
  green: "/hero-happy.webp",
  blue: "/hero-sad.webp",
  red: "/hero-angry.webp"
};
export function Hero() {
  const [isLg, setIsLg] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(min-width: 1024px)').matches
  );
  const [isXl, setIsXl] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(min-width: 1280px)').matches
  );
  useLayoutEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const sync = () => setIsLg(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);
  useLayoutEffect(() => {
    const mq = window.matchMedia('(min-width: 1280px)');
    const sync = () => setIsXl(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);
  return (
    <section className="relative overflow-visible pt-32 pb-20 lg:overflow-hidden lg:pt-48 lg:pb-32">
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
            className="z-10 flex-1 text-center lg:py-0 lg:text-left">
            
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
          <div className="relative flex h-[500px] max-w-md flex-1 max-lg:pb-[200px] max-lg:pt-[200px] w-full items-center justify-center perspective-1000 lg:max-w-none lg:py-0 lg:h-[600px]">
            {/* Back Image (Red) - Behind everything */}
            <motion.div
              initial={{
                opacity: 0,
                x: isXl ? 120 : 0,
                rotate: 0
              }}
              animate={{
                opacity: 1,
                x: isXl ? -100 : 0,
                rotate: isLg ? -24 : -22
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: 'spring'
              }}
              className="absolute max-xl:inset-x-auto max-xl:left-0 max-xl:mx-0 h-[466px] w-[220px] xl:inset-x-auto xl:left-[88px] xl:mx-0 lg:h-auto lg:w-[260px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10 z-0">
              
              <img
                src={IMAGES.red}
                alt="Angry mood"
                className="h-full w-full object-cover lg:h-[545px]" />
              
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
                x: isLg ? -80 : -60,
                rotate: isLg ? -12 : -10
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
                x: isLg ? 80 : 60,
                rotate: isLg ? 12 : 10
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