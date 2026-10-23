
# Lilith Café

A moody, dark-coquette landing page for a fictional café, built from a finished design mockup. Candlelight, lilies and a touch of gothic romance, in a style inspired by Japanese horror games like Fatal Frame.

<img width="1627" height="1080" alt="Знімок екрана 2026-10-23 120740" src="https://github.com/user-attachments/assets/003c4ddf-9d1b-4094-b89f-5e0c6554bb5c" />

**Live demo:** 

## About the project

Part of a series of small landing pages (cafés, nail studios, little shops) in distinctive visual styles. The goal was to follow the design closely: typography, spacing, thin decorative lines, and the dark, cinematic mood of the photography.

## Features

- Pixel-careful implementation of a custom design: Navbar, Hero, About, Menu and Footer sections
- Fully responsive, with a burger menu on mobile
- Smooth scrolling between sections, disabled for users who prefer reduced motion
- Reusable components with their own CSS, such as the decorative side marker and menu cards
- Menu items driven by a data file, so adding a drink is a one-line change
- Accessible markup: semantic landmarks, alt text and ARIA labels on interactive elements

## Tech stack

- React and Vite
- Plain CSS, one file per component
- Inline SVG icons, no icon or UI libraries
- Cormorant Garamond via Google Fonts

## Getting started

```bash
git clone https://github.com/Jana-Abram/lilith-cafe.git
cd lilith-cafe
npm install
npm run dev
```

The site will be available at ``.

## Project structure

```
src/
  App.jsx
  index.css
  assets/images/
  components/
    Navbar/
    Hero/
    About/
    Menu/
    Footer/
    SideMarker/
```

Each component lives in its own folder with its `.jsx` and `.css` files.

## Notes

Images are used for demonstration purposes only.
