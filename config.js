/**
 * EXCLUSIVE FITNESS STUDIO — CENTRAL CONFIGURATION
 * ----------------------------------------------------------------
 * Edit this single file to update contact details, opening hours,
 * membership content, social links and image references across the
 * entire site. Nothing else needs to change.
 * ----------------------------------------------------------------
 */

const EFS_CONFIG = {

  brand: {
    name: "Exclusive Fitness Studio",
    shortName: "EFS",
    tagline: "Train on your terms.",
  },

  contact: {
    address: {
      line1: "14 Foundry Road",
      line2: "Riverside District",
      city: "Your City",
      postcode: "AB1 2CD",
      // Used for the map embed and structured data — replace with real coordinates
      mapQuery: "14+Foundry+Road+Riverside+District+Your+City",
      lat: 51.5074,
      lng: -0.1278,
    },
    phone: {
      display: "+44 (0)00 0000 0000",
      href: "tel:+440000000000",
    },
    email: {
      display: "hello@exclusivefitnessstudio.com",
      href: "mailto:hello@exclusivefitnessstudio.com",
    },
  },

  hours: {
    access: "Members: 24/7/365 keyless access",
    staffed: [
      { days: "Monday – Friday", time: "06:00 – 21:00" },
      { days: "Saturday", time: "08:00 – 16:00" },
      { days: "Sunday", time: "08:00 – 14:00" },
    ],
    note: "The studio floor is accessible around the clock for members. The hours above reflect staffed front-desk and personal training hours only.",
  },

  social: [
    { platform: "Instagram", url: "https://instagram.com/exclusivefitnessstudio", handle: "@exclusivefitnessstudio" },
    { platform: "Facebook", url: "https://facebook.com/exclusivefitnessstudio", handle: "Exclusive Fitness Studio" },
    { platform: "TikTok", url: "https://tiktok.com/@exclusivefitnessstudio", handle: "@exclusivefitnessstudio" },
  ],

  nav: [
    { label: "Home", href: "index.html" },
    { label: "The Studio", href: "the-studio.html" },
    { label: "Facility", href: "facility.html" },
    { label: "Personal Training", href: "personal-training.html" },
    { label: "Memberships", href: "memberships.html" },
    { label: "Contact", href: "contact.html" },
  ],

  // Core services shown on the homepage service cards
  services: [
    {
      icon: "clock",
      title: "24/7 Gym Access",
      description: "Train when it works for you. Keyless entry gives members full access to the studio floor, day or night.",
      href: "facility.html",
      cta: "Explore Access",
    },
    {
      icon: "target",
      title: "Personal Training",
      description: "Professional guidance to help you train with purpose, from your first session to your next milestone.",
      href: "personal-training.html",
      cta: "Meet the Trainers",
    },
    {
      icon: "layers",
      title: "Memberships",
      description: "Flexible options designed around your fitness goals and lifestyle — no unnecessary contracts.",
      href: "memberships.html",
      cta: "View Memberships",
    },
  ],

  // Membership tiers — content structure ready to be populated with real pricing.
  // Leave "price" as null until pricing is confirmed; the UI will show "Enquire for pricing".
  memberships: [
    {
      name: "Foundation",
      description: "Full studio access for members who train independently and want the freedom of 24/7 entry.",
      price: null,
      period: null,
      benefits: [
        "24/7 keyless studio access",
        "Full use of strength & cardio floor",
        "Member app & booking access",
        "Access to the community calendar",
      ],
      featured: false,
      cta: "Enquire Now",
    },
    {
      name: "Performance",
      description: "Our most popular tier — built for members who want structure alongside their independent training.",
      price: null,
      period: null,
      benefits: [
        "Everything in Foundation",
        "Monthly progress check-in",
        "Priority class & equipment booking",
        "Guest passes for training partners",
      ],
      featured: true,
      cta: "Enquire Now",
    },
    {
      name: "Elite / PT",
      description: "The complete experience — studio access paired with dedicated personal training support.",
      price: null,
      period: null,
      benefits: [
        "Everything in Performance",
        "Dedicated personal trainer",
        "Bespoke programming",
        "Nutrition & recovery guidance",
      ],
      featured: false,
      cta: "Speak to the Team",
    },
  ],

  // Gallery images — replace src with real photography. Filenames follow a
  // predictable convention so the whole gallery can be swapped without
  // touching markup.
  gallery: [
    { src: "images/facility-01.jpg", alt: "Free weights and strength training area", category: "Strength" },
    { src: "images/facility-02.jpg", alt: "Cardio equipment along the studio window line", category: "Cardio" },
    { src: "images/facility-03.jpg", alt: "Dedicated functional training space", category: "Functional" },
    { src: "images/facility-04.jpg", alt: "Rack of Olympic barbells and plates", category: "Strength" },
    { src: "images/facility-05.jpg", alt: "Wide view of the main studio floor", category: "Studio" },
    { src: "images/facility-06.jpg", alt: "Personal training session in progress", category: "Personal Training" },
  ],

  // Testimonials — placeholders only. Replace with genuine member reviews.
  testimonials: [
    {
      quote: "PLACEHOLDER — Replace with a genuine member review before launch.",
      name: "Member Name",
      detail: "Member since 0000",
      isPlaceholder: true,
    },
    {
      quote: "PLACEHOLDER — Replace with a genuine member review before launch.",
      name: "Member Name",
      detail: "Member since 0000",
      isPlaceholder: true,
    },
    {
      quote: "PLACEHOLDER — Replace with a genuine member review before launch.",
      name: "Member Name",
      detail: "Member since 0000",
      isPlaceholder: true,
    },
  ],

  // Form submission endpoint. Point this at your backend, form service
  // (e.g. Formspree, Netlify Forms) or serverless function. No API keys
  // should ever be placed in this file or any client-side code.
  forms: {
    tourEndpoint: "/api/book-a-tour",
    contactEndpoint: "/api/contact",
  },

  seo: {
    siteUrl: "https://www.exclusivefitnessstudio.com",
    defaultTitle: "Exclusive Fitness Studio | Premium 24/7 Gym & Personal Training",
    defaultDescription: "Exclusive Fitness Studio is a premium 24/7 gym and fitness studio offering modern equipment, personal training and flexible memberships built around your schedule.",
    ogImage: "images/og-cover.jpg",
  },
};
