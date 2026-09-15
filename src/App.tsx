/**
 * Landing Page Dra. Amparo Peña Martín del Campo - Odontología Integral
 */

import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Doctor } from './components/Doctor';
import { Facilities } from './components/Facilities';
import { PaymentMethods } from './components/PaymentMethods';
import { LocationHours } from './components/LocationHours';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HERO_SLIDES } from './data/landingData';

export default function App() {
  const [slide, setSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Resize & Scroll listeners
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 860);
    const handleScroll = () => setScrolled(window.scrollY > 12);

    handleResize();
    handleScroll();

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Slide rotation timer (every 5s)
  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <div
      id="app-root"
      style={{
        position: 'relative',
        width: '100%',
        background: '#FCFCFE',
        fontFamily: "'Manrope', sans-serif",
      }}
    >
      <Header isMobile={isMobile} scrolled={scrolled} />
      <Hero slide={slide} nextSlide={nextSlide} isMobile={isMobile} />
      <Services isMobile={isMobile} />
      <Doctor isMobile={isMobile} />
      <Facilities isMobile={isMobile} />
      <PaymentMethods isMobile={isMobile} />
      <LocationHours isMobile={isMobile} />
      <FinalCTA isMobile={isMobile} />
      <Footer isMobile={isMobile} />
      <FloatingWhatsApp isMobile={isMobile} />
    </div>
  );
}
