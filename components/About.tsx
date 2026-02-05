
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1595475243692-3925209f029a?q=80&w=2000&auto=format&fit=crop" 
                alt="Our Founder" 
                className="w-full h-[400px] md:h-[600px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-40 h-40 md:w-64 md:h-64 bg-[#c5a47e]/10 rounded-full z-0"></div>
            <div className="absolute top-1/2 -left-6 md:-left-10 w-24 h-24 md:w-40 md:h-40 bg-[#1a1a1a]/5 rounded-full z-0"></div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h3 className="text-[#c5a47e] uppercase tracking-[0.2em] text-xs md:text-sm font-semibold mb-4 text-center lg:text-left">Our Heritage</h3>
            <h2 className="text-3xl md:text-5xl font-serif mb-6 md:mb-8 leading-tight text-center lg:text-left">Where Science Meets <span className="italic">Luxury</span></h2>
            <div className="space-y-6 text-[#666] text-base md:text-lg leading-relaxed text-center lg:text-left">
              <p>
                Founded in 2018, The BEAUTY CORNER was born from a desire to create a sanctuary where modern innovation and classic luxury coexist. We believe that beauty is an art form, and every client is our most important masterpiece.
              </p>
              <p className="hidden md:block">
                Our team consists of internationally trained artists who specialize in precision, technique, and artistic vision. We exclusively use organic, high-performance products that are kind to your body and the environment.
              </p>
              <div className="grid grid-cols-2 gap-4 md:gap-8 pt-4 md:pt-8">
                <div className="text-center lg:text-left">
                  <p className="text-2xl md:text-3xl font-serif text-[#1a1a1a] mb-1 md:mb-2">15k+</p>
                  <p className="text-[10px] md:text-sm uppercase tracking-widest">Happy Clients</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-2xl md:text-3xl font-serif text-[#1a1a1a] mb-1 md:mb-2">12</p>
                  <p className="text-[10px] md:text-sm uppercase tracking-widest">Master Artists</p>
                </div>
              </div>
              <div className="pt-6 md:pt-8 text-center lg:text-left">
                <button className="text-[#1a1a1a] font-bold border-b-2 border-[#c5a47e] pb-1 hover:text-[#c5a47e] transition-colors text-sm md:text-base">
                  Meet the Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
