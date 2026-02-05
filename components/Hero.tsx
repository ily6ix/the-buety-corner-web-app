
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#faf9f6] py-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Salon Interior"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h3 className="text-[#c5a47e] uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm font-semibold mb-4 md:mb-6">Experience True Radiance</h3>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-[#1a1a1a] leading-[1.1] mb-6 md:mb-8">
          Elevate Your Natural <span className="italic">Beauty</span>
        </h1>
        <p className="text-base md:text-xl text-[#666] mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
          Bespoke beauty treatments designed to enhance your unique features in an environment of absolute tranquility.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Note: In a real SPA we'd use routing, but here we can rely on Navbar's state. 
              Since this component doesn't have access to setCurrentPage directly, we will let Navbar handle it or use a custom event. 
              For this demo, we'll keep anchors but they are handled by Navbar's global logic if they match.
          */}
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              // Logic is usually handled by a router or parent, but for simplicity we'll let Navbar or App catch it if needed.
              // We'll update Hero to accept an onBook prop in a real refactor.
            }}
            className="bg-[#1a1a1a] text-white px-8 md:px-10 py-4 rounded-full text-base md:text-lg font-medium hover:bg-[#333] transition-all w-full sm:w-auto shadow-xl hover:scale-105 active:scale-95 duration-200"
          >
            Reserve Your Visit
          </a>
          <a 
            href="#" 
            className="border border-[#1a1a1a] text-[#1a1a1a] px-8 md:px-10 py-4 rounded-full text-base md:text-lg font-medium hover:bg-[#1a1a1a] hover:text-white transition-all w-full sm:w-auto"
          >
            Explore Services
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-5 h-5 md:w-6 md:h-6 text-[#c5a47e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
