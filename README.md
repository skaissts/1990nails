# 1990 Nails – Premium Nail Studio Website

A modern, premium one-page website for 1990 Nails, a luxury nail salon in Vienna.

## Features

- Dark luxury theme with gold accents
- Fully responsive, mobile-first design
- Modern React + Vite setup
- Tailwind CSS for styling
- Smooth scrolling navigation
- Instagram-style gallery
- Google Maps integration
- Contact links (WhatsApp, Phone, Instagram)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Contact Information

Edit the contact details in `src/components/Contact.jsx`:
- WhatsApp number
- Phone number
- Instagram handle

### Update Location

The Google Maps embed URL in `src/components/Location.jsx` needs to be updated with the correct coordinates for "Lassallestraße 44, 1020 Wien, Austria".

### Add Booking Widget

Replace the booking placeholder in `src/components/Booking.jsx` with your SimplyBook.me iframe code.

### Add Gallery Images

Replace the placeholder images in `src/components/Gallery.jsx` with actual nail art photos.

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Google Fonts (Inter, Playfair Display)
