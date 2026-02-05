
import React, { useState } from 'react';
import { PageType } from '../App';

interface NavbarProps {
  onNavigate: (page: PageType) => void;
  currentPage: PageType;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links: { name: string; href: string; page: PageType }[] = [
    { name: 'Home', href: '#', page: 'home' },
    { name: 'Services', href: '#services', page: 'services' },
    { name: 'About', href: '#about', page: 'about' },
  ];

  const handleLinkClick = (e: React.MouseEvent, page: PageType) => {
    e.preventDefault();
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-[#eee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => onNavigate('home')}>
            <span className="text-2xl font-serif tracking-tighter font-bold uppercase text-[#1a1a1a]">
              The BEAUTY <span className="text-[#c5a47e]">CORNER</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.page)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    currentPage === link.page 
                    ? 'text-[#c5a47e] border-b-2 border-[#c5a47e]' 
                    : 'text-[#1a1a1a] hover:text-[#c5a47e]'
                  } pb-1`}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => onNavigate('booking')}
                className={`bg-[#1a1a1a] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#333] transition-all ${
                  currentPage === 'booking' ? 'ring-2 ring-[#c5a47e] ring-offset-2' : ''
                }`}
              >
                Book Now
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-[#eee]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`block px-3 py-2 text-base font-medium ${
                  currentPage === link.page ? 'text-[#c5a47e] bg-[#faf9f6]' : 'text-[#1a1a1a]'
                }`}
                onClick={(e) => handleLinkClick(e, link.page)}
              >
                {link.name}
              </a>
            ))}
            <button
              className="w-full text-left px-3 py-2 text-base font-bold text-[#c5a47e]"
              onClick={() => {
                onNavigate('booking');
                setIsOpen(false);
              }}
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
