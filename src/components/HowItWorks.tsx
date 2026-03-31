import React from 'react';
import { motion } from 'framer-motion';
const steps = [
{
  num: '01',
  title: 'Pick your mood',
  desc: 'Swipe through the classical busts to find the one that matches how you feel right now.',
  image: "/hero-okay.heif"

},
{
  num: '02',
  title: 'Add some context',
  desc: "Select tags like Sleep, Work, or Weather to give your mood a 'why'.",
  image: "/how-context.heif"

},
{
  num: '03',
  title: 'Reflect and save',
  desc: 'Jot down a quick note and save it to your calendar to track your journey.',
  image: "/hero-happy.heif"

}];

export function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20 text-center lg:text-left">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="text-3xl lg:text-5xl font-bold text-charcoal mb-4">
            
            How it works
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.1
            }}
            className="text-softgray text-lg lg:text-xl max-w-2xl">
            
            Three simple steps to a more mindful you. It takes less than 10
            seconds a day.
          </motion.p>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {steps.map((step, index) => {
            const isEven = index % 2 !== 0;
            return (
              <div
                key={index}
                className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
                
                {/* Text */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: isEven ? 30 : -30
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0
                  }}
                  viewport={{
                    once: true,
                    margin: '-100px'
                  }}
                  transition={{
                    duration: 0.6
                  }}
                  className="flex-1 text-center lg:text-left">
                  
                  <span className="text-sm font-bold tracking-widest text-mood-green uppercase mb-4 block">
                    Step {step.num}
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-bold text-charcoal mb-6">
                    {step.title}
                  </h3>
                  <p className="text-xl text-softgray leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>

                {/* Image */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 40
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  viewport={{
                    once: true,
                    margin: '-100px'
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2
                  }}
                  className="flex-1 flex justify-center">
                  
                  <div className="relative">
                    {/* Decorative blob behind image */}
                    <div className="absolute inset-0 bg-charcoal/5 rounded-full blur-3xl transform scale-110 -z-10"></div>

                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-[260px] lg:w-[300px] rounded-[2.5rem] shadow-2xl border-8 border-white" />
                    
                  </div>
                </motion.div>
              </div>);

          })}
        </div>
      </div>
    </section>);

}