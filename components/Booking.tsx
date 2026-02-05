
import React, { useState } from 'react';
import { SERVICES } from '../constants';

const Booking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceId: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const selectedService = SERVICES.find(s => s.id === formData.serviceId);

  if (isSuccess) {
    return (
      <section id="booking" className="py-16 md:py-24 bg-[#faf9f6]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-[#c5a47e]/20">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif mb-4">Your Appointment is Set!</h2>
            <p className="text-[#666] mb-8 text-sm md:text-base">We've sent a confirmation email to {formData.email}. See you soon!</p>
            <button 
              onClick={() => { setIsSuccess(false); setStep(1); setFormData({ serviceId: '', date: '', time: '', name: '', email: '', phone: '' }); }}
              className="bg-[#1a1a1a] text-white px-8 py-3 rounded-full hover:bg-[#333] w-full sm:w-auto"
            >
              Book Another Appointment
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-16 md:py-24 bg-[#faf9f6]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-4">Reserve Your Moment</h2>
          <div className="w-16 md:w-20 h-1 bg-[#c5a47e] mx-auto mb-6"></div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-[#eee]">
          {/* Progress Section */}
          <div className="bg-[#1a1a1a] text-white p-6 md:p-8 md:w-1/3 flex flex-col justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg md:text-xl font-serif mb-6 md:mb-8 text-[#c5a47e] text-center md:text-left">Booking Progress</h3>
              <ul className="flex md:flex-col justify-center gap-4 md:gap-6">
                {[
                  { n: 1, t: 'Service' },
                  { n: 2, t: 'Time' },
                  { n: 3, t: 'Details' }
                ].map((s) => (
                  <li key={s.n} className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                    <span className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-[10px] md:text-xs font-bold transition-colors ${step >= s.n ? 'bg-[#c5a47e] text-white' : 'bg-white/10 text-white/40'}`}>
                      {s.n}
                    </span>
                    <span className={`text-[10px] md:text-sm uppercase tracking-widest md:normal-case md:tracking-normal ${step >= s.n ? 'text-white' : 'text-white/40'}`}>{s.t}</span>
                  </li>
                ))}
              </ul>
            </div>
            {selectedService && (
              <div className="mt-6 pt-6 border-t border-white/10 hidden md:block">
                <p className="text-xs text-white/50 uppercase tracking-widest mb-2">Selected Service</p>
                <p className="font-medium text-[#c5a47e]">{selectedService.name}</p>
                <p className="text-sm text-white/70">R{selectedService.price} • {selectedService.duration}</p>
              </div>
            )}
          </div>

          {/* Form Content */}
          <div className="p-6 md:p-12 md:w-2/3">
            {step === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <h4 className="text-lg md:text-xl font-medium mb-4">What treatment would you like?</h4>
                <div className="grid grid-cols-1 gap-3 max-h-[300px] md:max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {SERVICES.map(s => (
                    <label key={s.id} className={`flex items-center p-3 md:p-4 border rounded-xl cursor-pointer transition-all ${formData.serviceId === s.id ? 'border-[#c5a47e] bg-[#c5a47e]/5' : 'border-[#eee] hover:bg-gray-50'}`}>
                      <input 
                        type="radio" 
                        name="service" 
                        className="hidden" 
                        onChange={() => setFormData({...formData, serviceId: s.id})}
                        checked={formData.serviceId === s.id}
                      />
                      <div className="flex-1">
                        <p className="font-bold text-sm md:text-base">{s.name}</p>
                        <p className="text-xs text-[#666]">{s.category}</p>
                      </div>
                      <p className="font-medium text-sm">R{s.price}</p>
                    </label>
                  ))}
                </div>
                <button 
                  disabled={!formData.serviceId}
                  onClick={handleNext}
                  className="w-full bg-[#1a1a1a] text-white py-3 md:py-4 rounded-xl font-bold disabled:opacity-50 hover:bg-[#333] transition-all text-sm md:text-base"
                >
                  Continue to Schedule
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <h4 className="text-lg md:text-xl font-medium mb-4">When can we expect you?</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Select Date</label>
                    <input 
                      type="date" 
                      className="w-full p-3 md:p-4 border border-[#eee] rounded-xl focus:ring-2 focus:ring-[#c5a47e]/30 outline-none text-sm"
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      value={formData.date}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">Available Times</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {['09:00', '10:30', '12:00', '14:30', '16:00', '17:30'].map(time => (
                        <button
                          key={time}
                          onClick={() => setFormData({...formData, time})}
                          className={`py-3 text-xs rounded-xl border transition-all ${formData.time === time ? 'bg-[#c5a47e] text-white border-[#c5a47e]' : 'border-[#eee] hover:border-[#c5a47e]'}`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button onClick={handleBack} className="flex-1 border border-[#1a1a1a] py-3 md:py-4 rounded-xl font-bold text-xs md:text-base">Back</button>
                  <button 
                    disabled={!formData.date || !formData.time}
                    onClick={handleNext} 
                    className="flex-[2] bg-[#1a1a1a] text-white py-3 md:py-4 rounded-xl font-bold disabled:opacity-50 text-xs md:text-base"
                  >
                    Enter Details
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-5 animate-fadeIn">
                <h4 className="text-lg md:text-xl font-medium mb-4">Complete Your Booking</h4>
                <div className="space-y-3">
                  <input 
                    required
                    placeholder="Full Name"
                    className="w-full p-3 md:p-4 border border-[#eee] rounded-xl focus:ring-2 focus:ring-[#c5a47e]/30 outline-none text-sm md:text-base"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <input 
                    required
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3 md:p-4 border border-[#eee] rounded-xl focus:ring-2 focus:ring-[#c5a47e]/30 outline-none text-sm md:text-base"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  <input 
                    required
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full p-3 md:p-4 border border-[#eee] rounded-xl focus:ring-2 focus:ring-[#c5a47e]/30 outline-none text-sm md:text-base"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="flex gap-3">
                  <button type="button" onClick={handleBack} className="flex-1 border border-[#1a1a1a] py-3 md:py-4 rounded-xl font-bold text-xs md:text-base">Back</button>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-[2] bg-[#c5a47e] text-white py-3 md:py-4 rounded-xl font-bold hover:bg-[#b4936d] transition-all flex items-center justify-center gap-2 text-xs md:text-base"
                  >
                    {isSubmitting ? (
                      <><span className="animate-spin h-4 w-4 md:h-5 md:w-5 border-2 border-white/30 border-t-white rounded-full"></span> Confirming...</>
                    ) : 'Confirm Now'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
