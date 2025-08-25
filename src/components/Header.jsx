import React, { useState, useEffect } from 'react';

function Header({ onShowForm }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShowForm = () => {
    onShowForm();
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img
              src={scrolled ? "/assets/lg_hrz_transp1.png" : "/assets/lg_hrz_transp.png"}
              alt="MG Riscos Logo"
              className="h-12 transition-all duration-300"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className={`transition-colors ${scrolled ? 'text-primary hover:text-secondary' : 'text-white hover:text-gray-200'}`}>
              Recursos
            </a>
            <a href="#about" className={`transition-colors ${scrolled ? 'text-primary hover:text-secondary' : 'text-white hover:text-gray-200'}`}>
              Sobre
            </a>
            <a href="#contact" className={`transition-colors ${scrolled ? 'text-primary hover:text-secondary' : 'text-white hover:text-gray-200'}`}>
              Contato
            </a>
          </nav>
          <div>
            <button
              onClick={handleShowForm}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-secondary transition-colors duration-300"
            >
              <span className="mr-2">📝</span>
              Solicitar Cotação
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;