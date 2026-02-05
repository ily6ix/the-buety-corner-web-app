
import React from 'react';
import { SERVICES } from '../constants';

const ServicesPage: React.FC = () => {
  const categories = Array.from(new Set(SERVICES.map(s => s.category)));

  return (
    <div className="pt-20 bg-[#faf9f6] min-h-screen">
      {/* Header */}
      <div className="bg-[#1a1a1a] text-white py-24 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-serif mb-6">Service Menu</h1>
        <p className="text-[#c5a47e] uppercase tracking-[0.3em] text-sm font-semibold max-w-xl mx-auto">
          Tailored treatments for your hair, skin, and soul
        </p>
      </div>

      {/* Categories sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {categories.map((category) => (
          <div key={category} className="mb-24 last:mb-0">
            <div className="flex items-center gap-6 mb-12">
              <h2 className="text-3xl font-serif text-[#1a1a1a]">{category}</h2>
              <div className="flex-1 h-[1px] bg-[#eee]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.filter(s => s.category === category).map(service => (
                <div key={service.id} className="bg-white p-8 rounded-3xl border border-[#eee] hover:border-[#c5a47e]/30 transition-all duration-300 hover:shadow-xl group">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold font-serif group-hover:text-[#c5a47e] transition-colors">{service.name}</h3>
                    <span className="text-lg font-semibold">R{service.price}</span>
                  </div>
                  <p className="text-[#666] text-sm mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#eee]">
                    <span className="text-xs uppercase tracking-widest text-[#999]">{service.duration}</span>
                    <a href="#booking" className="text-xs font-bold uppercase tracking-widest text-[#c5a47e] hover:text-[#1a1a1a] transition-colors">Book Now</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-white py-24 text-center border-t border-[#eee]">
        <h2 className="text-4xl font-serif mb-8 text-[#1a1a1a]">Ready to Glow?</h2>
        <a 
          href="#booking" 
          className="bg-[#1a1a1a] text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-[#c5a47e] transition-all inline-block shadow-lg"
        >
          Schedule Your Session
        </a>
      </div>
    </div>
  );
};

export default ServicesPage;
