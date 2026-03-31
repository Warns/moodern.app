import React from 'react';
export function Footer() {
  return (
    <footer className="py-12 border-t border-charcoal/10 bg-cream">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-2xl font-bold tracking-tight text-charcoal mb-2">
            moodern
          </span>
          <p className="text-softgray text-sm">
            © {new Date().getFullYear()} Moodern App. All rights reserved.
          </p>
        </div>

        <div className="flex gap-6">
          <a
            href="#"
            className="text-softgray hover:text-charcoal font-medium transition-colors">
            
            Twitter
          </a>
          <a
            href="#"
            className="text-softgray hover:text-charcoal font-medium transition-colors">
            
            Instagram
          </a>
          <a
            href="#"
            className="text-softgray hover:text-charcoal font-medium transition-colors">
            
            Privacy
          </a>
          <a
            href="#"
            className="text-softgray hover:text-charcoal font-medium transition-colors">
            
            Terms
          </a>
        </div>
      </div>
    </footer>);

}