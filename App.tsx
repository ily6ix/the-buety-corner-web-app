
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import BookingPage from './pages/BookingPage';

export type PageType = 'home' | 'services' | 'about' | 'booking';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderHome = () => (
    <>
      <Hero />
      <Services limit={4} onViewAll={() => setCurrentPage('services')} />
      <About />
    </>
  );

  return (
    <div className="min-h-screen">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <main>
        {currentPage === 'home' && renderHome()}
        {currentPage === 'services' && <ServicesPage onBook={() => setCurrentPage('booking')} />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'booking' && <BookingPage />}
        <Contact />
      </main>
    </div>
  );
};

export default App;
