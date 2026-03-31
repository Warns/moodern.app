import React from 'react';
import { motion } from 'framer-motion';
export function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
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
            once: true
          }}
          transition={{
            duration: 0.6
          }}
          className="bg-mood-green rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-xl">
          
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-0">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-black/5 rounded-full blur-3xl"></div>

            {/* Happy bust decoration */}
            <motion.img
              src="/happy.png"
              alt=""
              initial={{
                opacity: 0,
                x: 50
              }}
              whileInView={{
                opacity: 0.15,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.8,
                delay: 0.3
              }}
              className="absolute -right-12 top-1/2 -translate-y-1/2 w-64 h-64 object-contain pointer-events-none hidden lg:block" />
            
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Ready to meet your mind?
            </h2>
            <p className="text-white/90 text-xl lg:text-2xl mb-10 max-w-2xl mx-auto font-medium">
              Join thousands of others tracking their mood beautifully. Download
              Moodern today.
            </p>
            <a
              href="#"
              className="inline-block px-10 py-5 bg-white text-mood-green rounded-full font-bold text-xl hover:bg-cream transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">
              
              Download for iOS
            </a>
          </div>
        </motion.div>
      </div>
    </section>);

}