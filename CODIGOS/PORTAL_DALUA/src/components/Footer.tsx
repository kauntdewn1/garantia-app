import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-lg">
            Mercúrio Cazimi é o chamado. A decisão é sua.
          </p>
          
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="flex items-center space-x-2 text-orange-400">
              <span>⚡ Siga os sinais em</span>
              <a 
                href="https://www.instagram.com/intuitiva.aria" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-orange-300 transition-colors"
              >
                @intuitiva.aria
              </a>
            </div>
            
            <a 
              href="mailto:ariaintuitiva.tarot@gmail.com"
              className="text-orange-400 hover:text-orange-300 transition-colors"
            >
              ariaintuitiva.tarot@gmail.com
            </a>
          </div>

          <p className="text-sm text-zinc-500 pt-4 border-t border-zinc-800/50">
            © {new Date().getFullYear()} Portal da Claridade. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;