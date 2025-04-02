
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, MoonStar, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-playfair font-bold text-restaurant-red">Le Gourmet</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#menu" className="font-medium hover:text-restaurant-red transition-colors">
              Menu
            </a>
            <a href="#testimonials" className="font-medium hover:text-restaurant-red transition-colors">
              Avis
            </a>
            <a href="#location" className="font-medium hover:text-restaurant-red transition-colors">
              Où nous trouver
            </a>
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-muted transition-colors">
              {darkMode ? <Sun size={20} /> : <MoonStar size={20} />}
            </button>
            <a href="#reservation">
              <Button variant="default" className="btn-reservation">
                Réserver une table
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button onClick={toggleDarkMode} className="p-2 mr-2 rounded-full hover:bg-muted transition-colors">
              {darkMode ? <Sun size={20} /> : <MoonStar size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 text-restaurant-black dark:text-restaurant-cream rounded-md"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <a
                href="#menu"
                className="font-medium py-2 hover:text-restaurant-red transition-colors"
                onClick={toggleMenu}
              >
                Menu
              </a>
              <a
                href="#testimonials"
                className="font-medium py-2 hover:text-restaurant-red transition-colors"
                onClick={toggleMenu}
              >
                Avis
              </a>
              <a
                href="#location"
                className="font-medium py-2 hover:text-restaurant-red transition-colors"
                onClick={toggleMenu}
              >
                Où nous trouver
              </a>
              <a href="#reservation" onClick={toggleMenu}>
                <Button variant="default" className="btn-reservation w-full mt-2">
                  Réserver une table
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
