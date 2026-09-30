# AstroNerve Gaming Website

A standalone HTML/CSS/JavaScript recreation inspired by the supplied AstroNerve Gaming mockup.

## Open locally
1. Extract the ZIP.
2. Open `index.html` in a browser.
3. No build system or package installation is required.

## Structure
- `index.html` — Home page
- `about.html` — About page
- `contact.html` — Contact page
- `merch.html` — Merch page
- `css/style.css` — All shared styling
- `js/site.js` — Shared navigation, contact demo and cart demo
- `assets/images/` — All replaceable image sources

## Replacing images
Keep the same filenames and replace the files inside `assets/images/`, or edit the `src` / CSS `background-image` paths in the HTML/CSS.

## Contact form
The form is intentionally front-end only. Connect it to your preferred backend, Formspree, Supabase, email service, etc. before production use.

## Merch cart
The demo cart uses browser `localStorage` only. It does not process payments.
