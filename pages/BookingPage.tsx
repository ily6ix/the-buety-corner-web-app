
import React from 'react';
import Booking from '../components/Booking';

const BookingPage: React.FC = () => {
  return (
    <div className="pt-20 bg-[#faf9f6] min-h-screen">
      {/* Header */}
      <div className="bg-[#1a1a1a] text-white py-16 md:py-24 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-serif mb-4 md:mb-6">Reservations</h1>
        <p className="text-[#c5a47e] uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm font-semibold max-w-xl mx-auto">
          Secure your premium beauty experience in Sandton
        </p>
      </div>

      {/* Booking Component */}
      <div className="py-12 md:py-20">
        <Booking />
      </div>

      {/* Helpful Info */}
      <div className="max-w-4xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 md:p-12 rounded-3xl border border-[#eee]">
          <div>
            <h3 className="text-xl font-serif mb-4 text-[#1a1a1a]">Arrival Policy</h3>
            <p className="text-sm text-[#666] leading-relaxed">
              We recommend arriving 15 minutes before your scheduled appointment to relax and enjoy a complimentary refreshment.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-serif mb-4 text-[#1a1a1a]">Cancellation</h3>
            <p className="text-sm text-[#666] leading-relaxed">
              Should you need to reschedule or cancel, please provide at least 24 hours notice to avoid a cancellation fee.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
