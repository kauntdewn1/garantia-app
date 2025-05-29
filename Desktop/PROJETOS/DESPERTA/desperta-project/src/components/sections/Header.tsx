import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { label: 'Manifesto', href: '#manifesto' },
    { label: 'DNA', href: '#dna' },
    { label: 'Facilitadoras', href: '#facilitadoras' },
    { label: 'Agenda', href: '#agenda' },
    { label: 'Experiências', href: '#experiencias' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img 
              src="https://res.cloudinary.com/dgyocpguk/image/upload/v1748231374/logo_horizontal_lu6dwh.png" 
              alt="Desperta" 
              className="h-8 md:h-10"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-primary-800 hover:text-primary-600' : 'text-white hover:text-primary-300'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="primary" size="sm">
              Quero Despertar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-primary-500"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-6 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href}
                  className="font-medium text-primary-800 hover:text-primary-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button 
                variant="primary" 
                size="sm" 
                className="mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Quero Despertar
              </Button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header