import React from 'react';
import { motion } from 'framer-motion';
import { AppStoreBadge } from './AppStoreBadge';
export function Navbar() {
  return (
    <motion.nav
      initial={{
        y: -20,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
        duration: 0.5
      }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-cream/80 backdrop-blur-md border-b border-charcoal/5">
      
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tight text-charcoal">
          moodern
        </div>
        <AppStoreBadge size="sm" />
      </div>
    </motion.nav>);

}