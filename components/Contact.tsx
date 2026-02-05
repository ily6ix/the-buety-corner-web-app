
import React from 'react';
import { SALON_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-[#faf9f6] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
          <div>
            <h2 className="text-3xl font-serif mb-8">Visit Us</h2>
            <div className="space-y-6 text-[#666]">
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-[#1a1a1a] mb-2">Location</p>
                <p className="text-lg">{SALON_INFO.address}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-[#1a1a1a] mb-2">Get in Touch</p>
                <p className="text-lg">{SALON_INFO.phone}</p>
                <p className="text-lg">{SALON_INFO.email}</p>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              {['Instagram', 'Pinterest', 'Facebook'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full border border-[#eee] flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white transition-all text-[#666]">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current opacity-20 rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-serif mb-8">Business Hours</h2>
            <div className="space-y-4">
              {SALON_INFO.hours.map((h, i) => (
                <div key={i} className="flex justify-between border-b border-[#eee] pb-4">
                  <span className="text-[#1a1a1a] font-medium">{h.day}</span>
                  <span className="text-[#666]">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#eee]">
            <h2 className="text-2xl font-serif mb-6">Stay Inspired</h2>
            <p className="text-[#666] mb-6 text-sm">Join our newsletter for exclusive beauty tips and seasonal offers.</p>
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-4 py-3 rounded-xl bg-[#faf9f6] border border-transparent focus:border-[#c5a47e] outline-none transition-all"
              />
              <button className="w-full bg-[#1a1a1a] text-white py-3 rounded-xl font-bold hover:bg-[#333] transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-[#eee] pt-12 text-center">
          <p className="text-2xl font-serif tracking-tighter font-bold uppercase text-[#1a1a1a] mb-4">
            The BEAUTY <span className="text-[#c5a47e]">CORNER</span>
          </p>
          <p className="text-sm text-[#999]">© 2024 The Beauty Corner. All Rights Reserved. Designed for Excellence.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
