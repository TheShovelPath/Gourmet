
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-16 bg-white dark:bg-background">
      <div className="container-custom">
        <h2 className="section-title text-center">Où nous trouver</h2>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-50 dark:bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-playfair font-semibold mb-4 flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-restaurant-red" />
                Adresse
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                23 Avenue des Gourmands
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                75001 Paris, France
              </p>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                À 5 minutes à pied de la station de métro Louvre-Rivoli
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-playfair font-semibold mb-4 flex items-center">
                <Clock className="mr-2 h-5 w-5 text-restaurant-red" />
                Horaires d'ouverture
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Lundi - Vendredi:</span>
                  <span className="text-gray-900 dark:text-gray-100 font-medium">11h30 - 22h30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Samedi:</span>
                  <span className="text-gray-900 dark:text-gray-100 font-medium">11h30 - 23h30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Dimanche:</span>
                  <span className="text-gray-900 dark:text-gray-100 font-medium">12h00 - 22h00</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-playfair font-semibold mb-4 flex items-center">
                <Phone className="mr-2 h-5 w-5 text-restaurant-red" />
                Contact
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-gray-700 dark:text-gray-300">(+33) 01 23 45 67 89</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-gray-700 dark:text-gray-300">contact@legourmet.fr</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.6244269797803!2d2.3385310765292486!3d48.859393301017454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e259678a227%3A0xbe2967387bb1fd42!2s23%20Rue%20de%20Rivoli%2C%2075004%20Paris%2C%20France!5e0!3m2!1sen!2sus!4v1687889721007!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
