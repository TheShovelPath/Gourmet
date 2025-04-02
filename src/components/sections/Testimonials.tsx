
import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  comment: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sophie Martin',
    role: 'Cliente fidèle',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    comment: "Une expérience culinaire d'exception ! Les saveurs sont sublimes et le service impeccable. Je recommande vivement le risotto aux cèpes, un vrai délice !",
    rating: 5,
  },
  {
    id: 2,
    name: 'Thomas Dubois',
    role: 'Critique gastronomique',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    comment: "Le chef propose une cuisine raffinée et innovante. L'ambiance est chaleureuse et l'accueil très professionnel. Un restaurant qui mérite sa réputation.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Émilie Rousseau',
    role: 'Blogueuse culinaire',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    comment: "Le menu est créatif et change selon les saisons. J'apprécie particulièrement l'attention portée aux produits locaux et bio. Un vrai régal pour les papilles !",
    rating: 4,
  },
  {
    id: 4,
    name: 'Antoine Leclerc',
    role: 'Client régulier',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    comment: "La carte des vins est exceptionnelle et le sommelier de très bon conseil. Les plats sont délicieux et les desserts divins. Un must à Paris !",
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  // Minimum swipe distance in pixels
  const minSwipeDistance = 50;

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section id="testimonials" className="py-16 bg-white dark:bg-background">
      <div className="container-custom">
        <h2 className="section-title text-center">Ce que nos clients disent</h2>
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center bg-restaurant-cream dark:bg-restaurant-black/10 rounded-full px-4 py-2">
            <Star className="h-5 w-5 text-yellow-500 mr-1" fill="currentColor" />
            <span className="font-semibold">4.9/5</span>
            <span className="text-gray-600 dark:text-gray-300 ml-2 text-sm">sur Google</span>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto mt-12">
          <div 
            className="overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-50 dark:bg-card rounded-xl p-6 md:p-8 shadow-md">
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-restaurant-red" 
                      />
                      <div>
                        <h3 className="font-playfair font-bold text-lg">{testimonial.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                              fill={i < testimonial.rating ? 'currentColor' : 'none'}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.comment}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button 
            variant="outline" 
            size="icon" 
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 bg-white dark:bg-card shadow-md rounded-full z-10 hidden md:flex"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-6 bg-white dark:bg-card shadow-md rounded-full z-10 hidden md:flex"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-restaurant-red' : 'bg-gray-300 dark:bg-gray-600'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
