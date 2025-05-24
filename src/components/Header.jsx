import React from 'react';
import { motion } from 'framer-motion';

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <img
              src="/assets/lg_hrz_transp.png"
              alt="MG Riscos Logo"
              className="h-12"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-primary">
              Recursos
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary">
              Sobre
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary">
              Contato
            </a>
          </nav>
          <div>
            <a
              href="#form"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-red-700"
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