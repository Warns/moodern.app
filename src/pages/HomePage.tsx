import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen font-sans selection:bg-mood-green/30 selection:text-charcoal">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
