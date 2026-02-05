
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1595475243692-3925209f029a?q=80&w=2000&auto=format&fit=crop" 
                alt="Our Founder" 
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#c5a47e]/10 rounded-full z-0"></div>
            <div className="absolute top-1/2 -left-10 w-40 h-40 bg-[#1a1a1a]/5 rounded-full z-0"></div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-[#c5a47e] uppercase tracking-[0.2em] text-sm font-semibold mb-4">Our Heritage</h3>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Where Science Meets <span className="italic">Luxury</span></h2>
            <div className="space-y-6 text-[#666] text-lg leading-relaxed">
              <p>
                Founded in 2018, The BEAUTY CORNER was born from a desire to create a sanctuary where modern innovation and classic luxury coexist. We believe that beauty is an art form, and every client is our most important masterpiece.
              </p>
              <p>
                Our team consists of internationally trained artists who specialize in precision, technique, and artistic vision. We exclusively use organic, high-performance products that are kind to your body and the environment.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <p className="text-3xl font-serif text-[#1a1a1a] mb-2">15k+</p>
                  <p className="text-sm uppercase tracking-widest">Happy Clients</p>
                </div>
                <div>
                  <p className="text-3xl font-serif text-[#1a1a1a] mb-2">12</p>
                  <p className="text-sm uppercase tracking-widest">Master Artists</p>
                </div>
              </div>
              <div className="pt-8">
                <button className="text-[#1a1a1a] font-bold border-b-2 border-[#c5a47e] pb-1 hover:text-[#c5a47e] transition-colors">
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
