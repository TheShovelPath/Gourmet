
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            alt="Plat signature"
            className="h-full w-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-restaurant-black via-restaurant-black/60 to-transparent opacity-70"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center py-16">
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-shadow">
            Un festin pour vos papilles, à quelques clics !
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto text-white/90">
            Découvrez une expérience gastronomique d'exception, où tradition et innovation se rencontrent pour créer des plats inoubliables.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#reservation">
              <Button size="lg" className="btn-reservation group">
                <span>Réservez une table</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="#menu">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                Découvrir notre menu
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scrolldown indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2">Découvrir</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start p-1">
            <div className="w-1.5 h-3 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
