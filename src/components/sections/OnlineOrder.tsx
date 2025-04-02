
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';

const deliveryPartners = [
  {
    name: 'UberEats',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_Eats_2020_logo.svg/2560px-Uber_Eats_2020_logo.svg.png',
    link: '#'
  },
  {
    name: 'Deliveroo',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Deliveroo_logo.svg/2560px-Deliveroo_logo.svg.png',
    link: '#'
  },
  {
    name: 'Just Eat',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Just_Eat_logo.svg/2560px-Just_Eat_logo.svg.png',
    link: '#'
  }
];

const OnlineOrder = () => {
  return (
    <section className="py-16 bg-restaurant-black text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Commandez en ligne et faites-vous livrer</h2>
              <p className="text-gray-300 mb-8">
                Profitez de nos plats délicieux depuis le confort de votre domicile. Nous nous associons avec les meilleurs services de livraison pour vous garantir une expérience parfaite.
              </p>
              
              <Button size="lg" className="btn-reservation mb-6">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Commandez maintenant
              </Button>
              
              <p className="text-sm text-gray-400 mb-4">Ou commandez via nos partenaires :</p>
              
              <div className="flex flex-wrap gap-6 items-center">
                {deliveryPartners.map((partner) => (
                  <a 
                    href={partner.link} 
                    key={partner.name}
                    className="bg-white rounded-lg p-3 h-12 w-32 flex items-center justify-center hover:opacity-80 transition-opacity"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="h-full object-contain" 
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-restaurant-red rounded-full opacity-20 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1505826759037-406b40feb4cd" 
                alt="Food delivery" 
                className="rounded-2xl relative z-10 h-full w-full object-cover shadow-xl" 
              />
              <div className="absolute -bottom-6 -right-6 bg-white text-restaurant-black p-4 rounded-lg shadow-xl z-20">
                <p className="font-playfair font-bold">Livraison rapide</p>
                <p className="text-sm">30-45 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineOrder;
