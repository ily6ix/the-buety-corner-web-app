
export interface Service {
  id: string;
  category: 'Nails' | 'Skin' | 'Hair' | 'Brows';
  name: string;
  price: number;
  duration: string;
  description: string;
}

export interface BookingData {
  serviceId: string;
  date: string;
  time: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
