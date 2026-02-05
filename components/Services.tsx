
import React, { useState } from 'react';
import { SERVICES } from '../constants';

interface ServicesProps {
  onViewAll?: () => void;
  limit?: number;
}

const Services: React.FC<ServicesProps> = ({ onViewAll, limit }) => {
  const categories = Array.from(new Set(SERVICES.map(s => s.category)));
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredServices = SERVICES.filter(s => s.category === activeCategory);
  const displayedServices = limit ? filteredServices.slice(0, limit) : filteredServices;

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-4">Our Curated Menu</h2>
          <div className="w-16 md:w-20 h-1 bg-[#c5a47e] mx-auto mb-6"></div>
          <p className="text-[#666] max-w-xl mx-auto text-sm md:text-base px-4">
            Each treatment is performed by master technicians using only premium, sustainable products.
          </p>
        </div>

        {/* Scrollable category bar for mobile */}
        <div className="overflow-x-auto pb-4 mb-8 -mx-4 px-4 scrollbar-hide flex md:justify-center">
          <div className="flex flex-nowrap md:flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 md:px-8 py-2 rounded-full text-xs md:text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat 
                  ? 'bg-[#c5a47e] text-white shadow-lg' 
                  : 'bg-[#faf9f6] text-[#666] hover:bg-[#eee]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 mb-12">
          {displayedServices.map(service => (
            <div 
              key={service.id} 
              className="group p-6 md:p-8 bg-[#faf9f6] border border-transparent hover:border-[#c5a47e]/30 rounded-2xl transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg md:text-xl font-bold font-serif group-hover:text-[#c5a47e] transition-colors pr-2">
                  {service.name}
                </h3>
                <span className="text-base md:text-lg font-semibold text-[#1a1a1a] whitespace-nowrap">R{service.price}</span>
              </div>
              <p className="text-[#666] mb-4 text-xs md:text-sm leading-relaxed">{service.description}</p>
              <div className="flex items-center text-[10px] md:text-xs uppercase tracking-widest text-[#999] font-medium">
                <svg className="w-3 h-3 md:w-4 md:h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {service.duration}
              </div>
            </div>
          ))}
        </div>

        {onViewAll && (
          <div className="text-center">
            <button 
              onClick={onViewAll}
              className="inline-flex items-center gap-2 text-[#1a1a1a] font-bold border-b-2 border-[#c5a47e] pb-1 hover:text-[#c5a47e] transition-colors text-sm md:text-base"
            >
              View Full Menu
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
