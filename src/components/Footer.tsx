
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 py-12 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold text-white mb-2">
              <span className="text-blue-400">abdi</span>Portfolio
            </div>
            <p className="text-gray-400">
              Building the future, one line of code at a time.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex gap-6">
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                Projects
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                Contact
              </button>
            </div>

            <button
              onClick={scrollToTop}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors duration-200"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Abdisa Awel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
