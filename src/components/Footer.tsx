import React from 'react';
import { Link } from 'react-router-dom';

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
          {/* <a
            href="#"
            className="text-softgray hover:text-charcoal font-medium transition-colors">
            Twitter
          </a>
          <a
            href="#"
            className="text-softgray hover:text-charcoal font-medium transition-colors">
            Instagram
          </a> */}
          <Link
            to="/privacy"
            className="text-softgray hover:text-charcoal font-medium transition-colors">
            Privacy
          </Link>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd4NRSck8w7KyAvQVwbGRcI9WZehpfUZB_iJeyaiHByNrd4dQ/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-softgray hover:text-charcoal font-medium transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>);

}