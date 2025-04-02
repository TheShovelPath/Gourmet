
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Leaf, Wheat } from 'lucide-react';

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image: string;
  isVegan?: boolean;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
}

const MenuItem = ({ name, description, price, image, isVegan, isVegetarian, isGlutenFree }: MenuItemProps) => {
  return (
    <div className="dish-card bg-white dark:bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={name} className="dish-card-image w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-playfair font-bold text-restaurant-black dark:text-restaurant-cream">{name}</h3>
          <span className="text-restaurant-red font-semibold">{price}</span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{description}</p>
        <div className="flex space-x-2">
          {isVegan && (
            <Badge variant="outline" className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800 flex items-center">
              <Leaf size={14} className="mr-1" /> Vegan
            </Badge>
          )}
          {isVegetarian && !isVegan && (
            <Badge variant="outline" className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800 flex items-center">
              <Leaf size={14} className="mr-1" /> Végétarien
            </Badge>
          )}
          {isGlutenFree && (
            <Badge variant="outline" className="bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800 flex items-center">
              <Wheat size={14} className="mr-1" /> Sans gluten
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState("entrees");

  return (
    <section id="menu" className="py-16 bg-restaurant-cream dark:bg-restaurant-black/20">
      <div className="container-custom">
        <h2 className="section-title text-center">Notre Menu</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Une sélection de plats exquis préparés avec passion par notre chef, utilisant les meilleurs produits de saison.
        </p>

        {/* Menu daily special */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-xl shadow-xl">
            <div className="absolute inset-0 bg-restaurant-red/90 dark:bg-restaurant-red/80">
              <div className="h-full w-full opacity-30 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9')] bg-cover bg-center mix-blend-overlay"></div>
            </div>
            <div className="relative p-8 text-white">
              <div className="bg-white/20 inline-block px-3 py-1 rounded-full text-sm font-medium mb-4">
                Plat du jour
              </div>
              <h3 className="text-3xl font-playfair font-bold mb-2">Risotto aux Cèpes et Truffe Noire</h3>
              <p className="mb-4 max-w-xl">
                Un risotto onctueux aux cèpes frais et à la truffe noire, accompagné de copeaux de parmesan affiné 24 mois.
              </p>
              <div className="text-xl font-semibold">28€</div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="entrees" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white/80 dark:bg-card/80 backdrop-blur-sm">
              <TabsTrigger value="entrees" onClick={() => setActiveTab("entrees")}>
                Entrées
              </TabsTrigger>
              <TabsTrigger value="plats" onClick={() => setActiveTab("plats")}>
                Plats
              </TabsTrigger>
              <TabsTrigger value="desserts" onClick={() => setActiveTab("desserts")}>
                Desserts
              </TabsTrigger>
              <TabsTrigger value="boissons" onClick={() => setActiveTab("boissons")}>
                Boissons
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="entrees" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <MenuItem
                name="Tartare de Saumon"
                description="Saumon frais, avocat, mangue, vinaigrette au citron et gingembre"
                price="14€"
                image="https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f"
                isGlutenFree={true}
              />
              <MenuItem
                name="Burrata Crémeuse"
                description="Burrata, tomates anciennes, basilic frais, huile d'olive et vinaigre balsamique"
                price="13€"
                image="https://images.unsplash.com/photo-1505253758473-96b7015fcd40"
                isVegetarian={true}
                isGlutenFree={true}
              />
              <MenuItem
                name="Velouté de Champignons"
                description="Champignons de saison, crème fraîche, huile de truffe et croûtons maison"
                price="12€"
                image="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a"
                isVegetarian={true}
              />
            </div>
          </TabsContent>

          <TabsContent value="plats" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <MenuItem
                name="Filet de Bœuf Rossini"
                description="Filet de bœuf, escalope de foie gras poêlée, sauce périgueux et pommes fondantes"
                price="34€"
                image="https://images.unsplash.com/photo-1600891964092-4316c288032e"
              />
              <MenuItem
                name="Risotto aux Fruits de Mer"
                description="Riz carnaroli, crevettes, moules, calamars, tomates et safran"
                price="26€"
                image="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb"
              />
              <MenuItem
                name="Tagliatelles aux Légumes"
                description="Pâtes fraîches, légumes de saison, pesto maison et parmesan"
                price="18€"
                image="https://images.unsplash.com/photo-1473093295043-cdd812d0e601"
                isVegetarian={true}
              />
            </div>
          </TabsContent>

          <TabsContent value="desserts" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <MenuItem
                name="Tarte au Citron Meringuée"
                description="Fond de tarte croustillant, crème de citron onctueuse et meringue italienne légère"
                price="9€"
                image="https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81"
                isVegetarian={true}
              />
              <MenuItem
                name="Fondant au Chocolat"
                description="Fondant au chocolat noir 70%, cœur coulant et glace vanille"
                price="10€"
                image="https://images.unsplash.com/photo-1606313564200-e75d5e30476c"
                isVegetarian={true}
              />
              <MenuItem
                name="Assiette de Fruits Frais"
                description="Sélection de fruits frais de saison, sirop léger à la menthe et sorbet"
                price="8€"
                image="https://images.unsplash.com/photo-1478145046317-39f10e56b5e9"
                isVegan={true}
                isGlutenFree={true}
              />
            </div>
          </TabsContent>

          <TabsContent value="boissons" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <MenuItem
                name="Sélection de Vins"
                description="Demandez notre carte des vins pour découvrir notre sélection de crus"
                price="6-12€ (verre)"
                image="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3"
                isVegan={true}
                isGlutenFree={true}
              />
              <MenuItem
                name="Cocktails Signature"
                description="Notre barman vous propose des créations originales aux saveurs uniques"
                price="12-15€"
                image="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b"
                isVegan={true}
                isGlutenFree={true}
              />
              <MenuItem
                name="Boissons Fraîches"
                description="Jus pressés, sodas artisanaux, eaux minérales et infusions maison"
                price="4-7€"
                image="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd"
                isVegan={true}
                isGlutenFree={true}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Menu;
