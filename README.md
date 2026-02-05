
# The BEAUTY CORNER - Professional Salon Web Application

A premium, modern beauty salon digital experience built with React and Tailwind CSS. This application provides a seamless journey from inspiration to appointment.

## 📱 Page Overview

### 1. Home Page (`App.tsx` - Root)
The digital storefront of the salon. It serves as an orchestration of the brand's best features:
- **Hero Section**: High-impact visual introduction with clear call-to-actions.
- **Featured Services**: A curated selection of the most popular treatments to drive quick conversions.
- **About Teaser**: A brief window into the salon's luxury philosophy.
- **Integrated Booking**: A full multi-step booking engine located at the bottom of the landing page for accessibility.

### 2. Services Page (`pages/ServicesPage.tsx`)
A comprehensive, categorized catalog of every treatment offered at the salon:
- **Categorization**: Grouped into Nails, Skin, Hair, and Brows for easy navigation.
- **Localized Pricing**: All costs are displayed in South African Rand (R/ZAR).
- **Service Details**: Includes duration, price, and a detailed description of the premium products used.
- **Direct Conversion**: Each service card features a "Book Now" link that scrolls the user to the reservation system.

### 3. About Page (`pages/AboutPage.tsx`)
The heart of the brand. This page builds trust and establishes authority:
- **Heritage**: Tells the story of the salon's 2018 founding in Sandton.
- **Philosophy**: Breaks down the three pillars of the brand: Pure (products), Bespoke (service), and Mastery (skill).
- **The Artisans**: Introduces the master technicians with professional profiles, humanizing the luxury experience.

## 🛠️ Core Systems

### Online Booking System (`components/Booking.tsx`)
A custom-built, three-step reservation engine:
1. **Service Selection**: Visual selection of treatments with price feedback.
2. **Date & Time**: Intelligent scheduling with date validation and time-slot selection.
3. **Client Details**: Secure capture of contact information with a simulated confirmation state.

## 🎨 Design Language
- **Typography**: `Playfair Display` (Serif) for headings to convey luxury; `Inter` (Sans) for body text for readability.
- **Palette**: A sophisticated mix of Charcoal (`#1a1a1a`), Champagne Gold (`#c5a47e`), and Bone White (`#faf9f6`).
- **Aesthetics**: "Quiet Luxury" with generous whitespace, subtle animations, and high-fidelity imagery.
