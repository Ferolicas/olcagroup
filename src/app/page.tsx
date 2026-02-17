'use client';

import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Portfolio } from '@/components/Portfolio';
import { Pricing } from '@/components/Pricing';
import { Testimonials } from '@/components/Testimonials';
import { FAQs } from '@/components/FAQs';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Country } from '@/components/CountrySelector';

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState<Country>('ES');

  useEffect(() => {
    const savedCountry = localStorage.getItem('selectedCountry') as Country;
    if (savedCountry) {
      setSelectedCountry(savedCountry);
    } else {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (timezone.includes('America/Bogota')) {
        setSelectedCountry('CO');
      } else if (timezone.includes('America/Mexico')) {
        setSelectedCountry('MX');
      } else if (
        timezone.includes('America/New_York') ||
        timezone.includes('America/Los_Angeles')
      ) {
        setSelectedCountry('US');
      } else {
        setSelectedCountry('ES');
      }
    }
  }, []);

  const handleCountryChange = (country: Country) => {
    setSelectedCountry(country);
    localStorage.setItem('selectedCountry', country);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        selectedCountry={selectedCountry}
        onCountryChange={handleCountryChange}
      />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Pricing selectedCountry={selectedCountry} />
      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />
    </div>
  );
}
