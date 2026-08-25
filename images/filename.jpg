<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="#0a0a09"/>
  <rect x="18" y="14" width="8" height="36" fill="#f5f3ee"/>
  <rect x="18" y="14" width="26" height="8" fill="#f5f3ee"/>
  <rect x="18" y="28" width="20" height="8" fill="#f5f3ee"/>
  <rect x="18" y="42" width="26" height="8" fill="#f5f3ee"/>
  <rect x="46" y="42" width="8" height="8" fill="#e8291c"/>
</svg>

# Image Replacement Guide

This site currently uses high-quality stock photography (hotlinked from Unsplash)
to establish the visual direction. Before launch, replace these with Exclusive
Fitness Studio's own photography using the filenames below — the layout,
cropping (via CSS `object-fit: cover`) and diagonal "cut" frames are already
built to accommodate real photos at these slots without any code changes.

## Recommended files and where they're used

| File                          | Used on                          | Suggested shot |
|--------------------------------|-----------------------------------|-----------------|
| `hero.jpg`                     | Homepage hero                     | Wide, dramatic shot of someone training — strength focus |
| `og-cover.jpg`                 | Social share preview (all pages)  | 1200×630px branded image |
| `studio-floor.jpg`             | The Studio / About section        | Wide shot of the full studio floor |
| `night-access.jpg`             | 24/7 sections                     | Studio at night/early morning, moody lighting |
| `facility-01.jpg` – `06.jpg`   | Facility gallery + homepage teaser| Equipment, free weights, cardio row, functional space, wide floor shot, PT session |
| `personal-training.jpg`        | Personal Training page & homepage | Trainer coaching a client |
| `favicon.svg`                  | Browser tab icon                  | Already set — replace with a real logo mark if preferred |

## How the system stays easy to update

1. Drop replacement files into this folder using the exact filenames above.
2. Update the `src` paths in `js/config.js` (the `gallery` array) if you rename
   any files — the gallery, lightbox and homepage teaser all read from that
   one array.
3. Hero, About and 24/7 images are set directly on their `<img>` tags in each
   page's HTML — swap the `src` attribute in place.

No other code changes are required to update photography across the site.
