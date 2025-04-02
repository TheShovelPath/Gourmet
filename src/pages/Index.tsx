
import { useState, useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import Menu from '@/components/sections/Menu';
import Testimonials from '@/components/sections/Testimonials';
import Reservation from '@/components/sections/Reservation';
import Location from '@/components/sections/Location';
import OnlineOrder from '@/components/sections/OnlineOrder';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if user prefers dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }

    // Listen for changes to the prefers-color-scheme media query
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <Menu />
      <OnlineOrder />
      <Testimonials />
      <Reservation />
      <Location />
      <Footer />
    </div>
  );
};

export default Index;
