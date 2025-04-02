
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-restaurant-black text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Le Gourmet</h3>
            <p className="text-gray-300 mb-4">
              Une expérience culinaire exceptionnelle, alliant tradition et innovation pour satisfaire
              vos papilles.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Nous contacter</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-restaurant-red" />
                <span>(+33) 01 23 45 67 89</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-restaurant-red" />
                <span>contact@legourmet.fr</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-restaurant-red" />
                <span>23 Avenue des Gourmands, 75001 Paris</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Horaires d'ouverture</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Lundi - Vendredi:</span>
                <span>11h30 - 22h30</span>
              </li>
              <li className="flex justify-between">
                <span>Samedi:</span>
                <span>11h30 - 23h30</span>
              </li>
              <li className="flex justify-between">
                <span>Dimanche:</span>
                <span>12h00 - 22h00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Le Gourmet. Tous droits réservés.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/" className="text-gray-400 text-sm hover:text-white transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/" className="text-gray-400 text-sm hover:text-white transition-colors">
                Mentions légales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
