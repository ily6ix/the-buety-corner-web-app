
import React from 'react';

const AboutPage: React.FC = () => {
  const team = [
    { name: "Elena Venter", role: "Creative Director", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" },
    { name: "Marcus Thorne", role: "Master Stylist", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop" },
    { name: "Sarah Naidoo", role: "Skin Specialist", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop" },
    { name: "Jessica Smith", role: "Nail Artist", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop" }
  ];

  return (
    <div className="pt-20 bg-[#faf9f6]">
      {/* Hero */}
      <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2000&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt="Salon aesthetic"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif text-[#1a1a1a] mb-2 md:mb-4">Our Story</h1>
          <p className="text-[#c5a47e] uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold text-[10px] md:text-base">Artistry in every touch</p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl font-serif mb-6 md:mb-8 leading-tight text-[#1a1a1a] text-center lg:text-left">
              Crafting Beauty Since <span className="italic">2018</span>
            </h2>
            <div className="space-y-6 text-[#666] text-base md:text-lg leading-relaxed text-center lg:text-left">
              <p>
                The BEAUTY CORNER was founded with a singular mission: to redefine the South African beauty experience through a blend of international standards and local warmth.
              </p>
              <p className="hidden md:block">
                We don't just provide services; we curate experiences. Our space in Sandton is designed to be your escape from the urban hustle—a place where time slows down and your wellbeing takes center stage.
              </p>
              <div className="pt-6 md:pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
                <div className="text-center p-4 md:p-6 bg-white rounded-2xl border border-[#eee]">
                  <h4 className="font-serif text-lg md:text-xl mb-1 md:mb-2 text-[#c5a47e]">Pure</h4>
                  <p className="text-[10px] md:text-sm">Organic, high-performance products.</p>
                </div>
                <div className="text-center p-4 md:p-6 bg-white rounded-2xl border border-[#eee]">
                  <h4 className="font-serif text-lg md:text-xl mb-1 md:mb-2 text-[#c5a47e]">Bespoke</h4>
                  <p className="text-[10px] md:text-sm">Treatments tailored to you.</p>
                </div>
                <div className="text-center p-4 md:p-6 bg-white rounded-2xl border border-[#eee]">
                  <h4 className="font-serif text-lg md:text-xl mb-1 md:mb-2 text-[#c5a47e]">Mastery</h4>
                  <p className="text-[10px] md:text-sm">Globally certified specialists.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1600607687940-4e7a6a357499?q=80&w=1000&auto=format&fit=crop" 
              alt="Interior" 
              className="rounded-2xl md:rounded-3xl shadow-2xl relative z-10 w-full"
            />
            <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-24 h-24 md:w-40 md:h-40 bg-[#c5a47e] rounded-full z-0 opacity-20"></div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-serif mb-4">The Artisans</h2>
            <div className="w-16 md:w-20 h-1 bg-[#c5a47e] mx-auto mb-6"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4 sm:px-0">
            {team.map((member, i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-4 h-64 md:h-80">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-xs md:text-sm italic">"Beauty is found in the details."</p>
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-serif font-bold text-[#1a1a1a]">{member.name}</h3>
                <p className="text-[#c5a47e] text-xs md:text-sm uppercase tracking-widest">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
