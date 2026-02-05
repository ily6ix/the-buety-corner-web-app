
import { Service } from './types';

export const SERVICES: Service[] = [
  { id: '1', category: 'Nails', name: 'Signature Manicure', price: 250, duration: '45 min', description: 'Complete nail shaping, cuticle care, and luxury polish.' },
  { id: '2', category: 'Nails', name: 'Gel Extensions', price: 550, duration: '90 min', description: 'Long-lasting extensions with custom nail art options.' },
  { id: '3', category: 'Nails', name: 'Pedicure Deluxe', price: 380, duration: '60 min', description: 'Exfoliating foot soak, massage, and precision polish.' },
  { id: '4', category: 'Skin', name: 'Glow Facial', price: 750, duration: '60 min', description: 'Deep hydration and enzyme peel for an instant radiance.' },
  { id: '5', category: 'Skin', name: 'Anti-Aging Therapy', price: 950, duration: '75 min', description: 'Focused on collagen stimulation and fine line reduction.' },
  { id: '6', category: 'Skin', name: 'Deep Cleanse Facial', price: 600, duration: '45 min', description: 'Targeted extraction and purification for clear skin.' },
  { id: '7', category: 'Hair', name: 'Designer Cut & Style', price: 450, duration: '60 min', description: 'Professional consultation followed by a precision cut.' },
  { id: '8', category: 'Hair', name: 'Balayage Artistry', price: 1250, duration: '180 min', description: 'Hand-painted highlights for a natural, sun-kissed look.' },
  { id: '9', category: 'Hair', name: 'Brazilian Blowout', price: 1800, duration: '150 min', description: 'Smoothing treatment for frizz-free, manageable hair.' },
  { id: '10', category: 'Brows', name: 'Brow Lamination', price: 350, duration: '45 min', description: 'Full, fluffy brows that stay in place for weeks.' },
  { id: '11', category: 'Brows', name: 'Lash Lift & Tint', price: 450, duration: '60 min', description: 'Enhance your natural lashes with a dramatic curl and color.' },
  { id: '12', category: 'Brows', name: 'Microblading', price: 2500, duration: '120 min', description: 'Semi-permanent brow enhancement for a perfect shape.' }
];

export const SALON_INFO = {
  address: "Sandton City Mall, Level 4, Sandton, Johannesburg, 2196",
  phone: "+27 11 123 4567",
  email: "hello@thebeautycorner.co.za",
  hours: [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "9:00 AM - 5:00 PM" },
    { day: "Sunday", time: "10:00 AM - 2:00 PM" }
  ]
};
