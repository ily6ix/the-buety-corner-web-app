
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Booking from './components/Booking';
import About from './components/About';
import AIExpert from './components/AIExpert';
import Contact from './components/Contact';
import ServicesPage from './pages/ServicesPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'services'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderHome = () => (
    <>
      <Hero />
      <Services limit={4} onViewAll={() => setCurrentPage('services')} />
      <About />
      <AIExpert />
      <Booking />
      <Contact />
    </>
  );

  return (
    <div className="min-h-screen">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <main>
        {currentPage === 'home' ? renderHome() : (
          <>
            <ServicesPage />
            <Contact />
          </>
        )}
      </main>
    </div>
  );
};

export default App;
