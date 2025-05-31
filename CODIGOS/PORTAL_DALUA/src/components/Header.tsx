import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-800/50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="Portal da Claridade" className="h-8 w-auto" />
          </a>
          <button
            onClick={() => navigate('/webtalk')}
            className="text-sm px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 transition-colors text-white"
          >
            Transformar Minha Realidade
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;