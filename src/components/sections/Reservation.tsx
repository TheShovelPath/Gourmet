
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { CalendarIcon, Clock, Users, Check } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const timeSlots = [
  '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', 
  '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
];

const guestOptions = ['1', '2', '3', '4', '5', '6', '7', '8'];

const Reservation = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>('');
  const [guests, setGuests] = useState<string>('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !time || !guests || !name || !email || !phone) {
      toast({
        title: "Information manquante",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate reservation process
    setTimeout(() => {
      toast({
        title: "Réservation confirmée !",
        description: `Votre table pour ${guests} personnes est réservée le ${format(date, 'dd MMMM yyyy', { locale: fr })} à ${time}.`,
        variant: "default",
      });
      
      // Reset form
      setDate(undefined);
      setTime('');
      setGuests('');
      setName('');
      setEmail('');
      setPhone('');
      setNotes('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="reservation" className="py-16 bg-restaurant-cream dark:bg-restaurant-black/20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="section-title">Réservez votre table</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Réservez votre table en quelques clics et recevez une confirmation instantanée.
              Pour les groupes de plus de 8 personnes, veuillez nous contacter par téléphone.
            </p>
            
            <div className="bg-white dark:bg-restaurant-black/40 p-6 rounded-xl shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, 'PPP', { locale: fr }) : <span>Choisir une date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          disabled={(date) => date < new Date()}
                          locale={fr}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="time">Heure *</Label>
                    <Select value={time} onValueChange={setTime}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Choisir une heure">
                          {time ? (
                            <div className="flex items-center">
                              <Clock className="mr-2 h-4 w-4" />
                              {time}
                            </div>
                          ) : (
                            <span>Choisir une heure</span>
                          )}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="guests">Personnes *</Label>
                    <Select value={guests} onValueChange={setGuests}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Nombre de personnes">
                          {guests ? (
                            <div className="flex items-center">
                              <Users className="mr-2 h-4 w-4" />
                              {guests} {parseInt(guests) > 1 ? 'personnes' : 'personne'}
                            </div>
                          ) : (
                            <span>Nombre de personnes</span>
                          )}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {guestOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option} {parseInt(option) > 1 ? 'personnes' : 'personne'}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet *</Label>
                  <Input 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Votre nom et prénom" 
                    required 
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      placeholder="votre@email.com" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone *</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      value={phone} 
                      onChange={(e) => setPhone(e.target.value)} 
                      placeholder="Votre numéro de téléphone" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="notes">Remarques spéciales</Label>
                  <Input
                    id="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Allergies, occasions spéciales, etc."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full btn-reservation"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Confirmation en cours...</>
                  ) : (
                    <>
                      <Check className="mr-2 h-4 w-4" /> Confirmer la réservation
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0" 
                alt="Restaurant interior" 
                className="rounded-xl shadow-lg object-cover h-[600px] w-full"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-restaurant-black/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-playfair font-bold mb-2">Votre expérience culinaire vous attend</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Notre équipe est impatiente de vous accueillir et de vous faire vivre une expérience gastronomique mémorable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
