import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img
              src="/assets/lg_hrz_transp.png"
              alt="MG Riscos Logo"
              className="h-12"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-primary hover:text-secondary transition-colors">
              Recursos
            </a>
            <a href="#about" className="text-primary hover:text-secondary transition-colors">
              Sobre
            </a>
            <a href="#contact" className="text-primary hover:text-secondary transition-colors">
              Contato
            </a>
          </nav>
          <div>
            <a
              href="#form"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-secondary transition-colors duration-300"
            >
              Solicitar Agora
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;