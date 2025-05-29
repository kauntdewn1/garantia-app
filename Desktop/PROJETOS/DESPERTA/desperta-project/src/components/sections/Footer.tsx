import { Instagram, Facebook, Mail } from 'lucide-react';
import Container from '../common/Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-800 text-white pt-12 pb-6">
      <Container>
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-display font-bold mb-4">DESPERTA</h3>
            <p className="max-w-xs text-primary-100">
              Corpo. Mente. Emoção.<br />
              Treinos ao ar livre com propósito ☀️<br />
              Por Bianca & Jana
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-secondary-300">Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#manifesto" className="text-primary-100 hover:text-white transition-colors">Manifesto</a>
                </li>
                <li>
                  <a href="#dna" className="text-primary-100 hover:text-white transition-colors">DNA Desperta</a>
                </li>
                <li>
                  <a href="#facilitadoras" className="text-primary-100 hover:text-white transition-colors">Facilitadoras</a>
                </li>
                <li>
                  <a href="#agenda" className="text-primary-100 hover:text-white transition-colors">Agenda</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-secondary-300">Contato</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:ola@desperta.com.br" className="text-primary-100 hover:text-white transition-colors">
                    ola@desperta.com.br
                  </a>
                </li>
                <li className="flex items-center">
                  <Instagram className="w-4 h-4 mr-2" />
                  <a href="https://instagram.com/desperta" target="_blank" rel="noopener noreferrer" className="text-primary-100 hover:text-white transition-colors">
                    @desperta
                  </a>
                </li>
                <li className="flex items-center">
                  <Facebook className="w-4 h-4 mr-2" />
                  <a href="https://facebook.com/desperta" target="_blank" rel="noopener noreferrer" className="text-primary-100 hover:text-white transition-colors">
                    /despertaoficial
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-700 pt-6 mt-6 text-center text-primary-300 text-sm">
          <p>© {currentYear} Desperta. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;