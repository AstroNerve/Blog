# AstroNerve Gaming — Reconstructed Web App

A responsive, installable vanilla HTML/CSS/JavaScript reconstruction of the AstroNerve Gaming experience.

## Included
- Responsive desktop/tablet/mobile layout
- Reconstructed hero sections using cleaned visual crops from the supplied artwork
- Modern navigation with mobile menu
- Working merch catalogue, search, filters, quick-view modal and persistent cart
- Front-end checkout flow with local demo order creation
- Login / account creation demo using localStorage
- Google sign-in placeholder that points to the configuration requirements
- Contact form validation and local draft storage
- PWA manifest + service worker for installability/offline shell
- Scroll-reveal animations and accessible button/label structure
- Configuration checklist in `CONFIG_REQUIRED.txt`

## Run
Open `index.html` directly for the main experience. For full PWA/service-worker behavior, serve the folder from a local HTTP server.

No real payment, authentication, social, email, analytics or shipping services are connected until the values in `site-config.js` are replaced and the corresponding provider code is wired in.
