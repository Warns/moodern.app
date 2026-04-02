import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import privacyMarkdown from '../../docs/PRIVACY.md?raw';

export function PrivacyPage() {
  useEffect(() => {
    const prev = document.title;
    document.title = 'Privacy Policy · Moodern';
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-mood-green/30 selection:text-charcoal">
      <Navbar />
      <main className="pt-28 pb-16 md:pt-32 md:pb-20">
        <article className="max-w-3xl mx-auto px-6 text-charcoal">
          <p className="text-sm text-softgray mb-8">
            <Link to="/" className="hover:text-charcoal transition-colors">
              ← Back to home
            </Link>
          </p>
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal mb-6">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-xl font-bold text-charcoal mt-10 mb-4 first:mt-0">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-lg font-semibold text-charcoal mt-6 mb-3">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="text-softgray leading-relaxed mb-4 last:mb-0">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc pl-6 text-softgray space-y-2 mb-4">{children}</ul>
              ),
              li: ({ children }) => <li className="leading-relaxed pl-1">{children}</li>,
              strong: ({ children }) => (
                <strong className="font-semibold text-charcoal">{children}</strong>
              ),
              hr: () => <hr className="my-10 border-charcoal/10" />,
            }}>
            {privacyMarkdown}
          </ReactMarkdown>
        </article>
      </main>
      <Footer />
    </div>
  );
}
