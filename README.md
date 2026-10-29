# SkinTherapie — React

The existing website converted to **React + Vite + Tailwind CSS**, with the same content, images, colors, typography, layout, and page URLs.

## Run locally

Requires Node.js 22.12+ (or Node.js 24).

```sh
npm install
npm run dev
```

On Windows, use `npm.cmd` if PowerShell blocks npm scripts.

```sh
npm run build
npm run preview
```

`dist/` is the production website. Upload the entire directory to your static host. Existing links such as `about.html` and `service.html` continue to work, including when opened directly.

## Structure

```text
src/
  main.jsx                 React entry point and global style/font imports
  App.jsx                  Page selection and shared layout
  components/
    Navbar.jsx             Shared desktop/mobile navigation
    Footer.jsx             Shared footer and WhatsApp button
  pages/                   Ten editable JSX page components
    index.js               Page URLs, titles, and languages
  lib/
    interactions.js        Menu, accordions, sticky navigation, active links
    sliders.js             Swiper initialization and cleanup
    gallery.js             LightGallery initialization and cleanup
  styles/                  Original Tailwind theme and custom styles
public/                    Original images, fonts, icons, and videos
index.html                 HTML shell and metadata
vite.config.js             React, Tailwind, and static page aliases
Documentation/
  original-template/       Original HTML source/configuration and reference build
scripts/                   Visual comparison checks
```

Edit the relevant component in `src/pages/` to change a page. Shared navigation and footer changes belong in `src/components/`. Static asset paths remain `/images/...` and `/videos/...`.

The Home and Services pages share `src/components/ServiceAccordion.jsx`. Edit the eight service categories, sub-service titles, captions, image paths and alt text in `src/data/services.js`. Each of the 28 sub-services has its own illustrative photo in `public/images/subservices/`, optimized to WebP. Photos load eagerly when their card opens and lazily while closed; fixed image proportions reserve space during loading. Imagegen prompts and file paths are recorded in `Documentation/service-images.md`. Styling, staggered photo-card reveals and 450ms expansion transitions live in `src/styles/service-accordion.css`. Only one service opens at a time, all start closed, and the original appointment links remain separate from the accordion buttons. Biohacking includes the four client-specified Korean-inspired services; image prompts are recorded in Documentation/biohacking-korean-images.md.

The service accordion has a separate browser check covering all photo loads, desktop, tablet, mobile, keyboard controls, height animation, reduced motion, and appointment navigation:

```sh
node scripts/verify-service-accordion.cjs "PATH_TO_NODE_MODULES"
```

Navigation retains full page loads so the original links and third-party widgets keep their behavior. Widgets initialize after React mounts and release their listeners and instances on unmount. The before/after image comparison control now uses a React `onInput` handler.

Booking and contact sections open a direct WhatsApp conversation at +212 713 615 758. The forms and message-prefilling flow have been removed. The shared call to action is `src/components/WhatsAppContact.jsx`; the phone number is in `src/lib/whatsapp.js`, and the visible forest-green buttons are styled in `src/styles/whatsapp-contact.css`.

```sh
node scripts/verify-whatsapp-links.cjs "PATH_TO_NODE_MODULES"
```

The original template references Andora font files that were not supplied in `public/fonts/`. The same font fallback remains in use. Add the original licensed font files there if available.

## Verification

Unsupported verified-review claims and aggregate ratings were removed. Home now includes a photo carousel inspired by the supplied video, with fictional comments clearly labeled as illustrative examples. Edit these writing proposals in `src/data/reviewExamples.js`; the carousel is `src/components/ReviewExamples.jsx`. Actual customer testimonials can replace the examples when supplied. `src/components/PatientGuidance.jsx` retains the informational booking guidance elsewhere.

```sh
node scripts/verify-review-examples.cjs "PATH_TO_NODE_MODULES"
```

The visual comparison script serves the reference build and React build locally, compares all ten pages at desktop and mobile widths, and checks the mobile menu, FAQ, before/after slider, and page navigation. It requires Playwright, PNGJS, Pixelmatch, and local Chrome. Pass the directory containing these Node packages:

```sh
node scripts/verify-migration.cjs "PATH_TO_NODE_MODULES"
```

Results and homepage screenshots are written to `artifacts/`.
