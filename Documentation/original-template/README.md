# Dermato - Dermatology & Aesthetic Clinic Website

Dermato is a modern, responsive website designed for dermatology clinics, aesthetic practices, medical spas, and skincare specialists. Built with **Tailwind CSS 4** and bundled with **Vite**, it delivers fast load times, modular components, and smooth animations.

---

## 🚀 Quick Start

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher recommended) installed:
```bash
node -v
```

### 2. Install Dependencies
Open your terminal in the `HTML/` directory and install the project packages:

```bash
# Using npm
npm install

# On Windows PowerShell (if script execution is restricted):
npm.cmd install

# Or using yarn:
yarn install
```

### 3. Run Development Server
Start the local Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
# or: npm.cmd run dev
# or: yarn dev
```

Once started, open your browser at the displayed local URL (typically `http://localhost:5173`).

---

## 🛠 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with live reload and host exposure |
| `npm run build` | Compiles and bundles production-ready HTML, CSS, and JS into `dist/` |
| `npm run preview` | Runs a local web server to preview the production build in `dist/` |

---

## 📁 Project Structure

```text
Dermato_v1.0/
├── Documentation/         # Project setup documentation and guide
└── HTML/                  # Main web application source code
    ├── package.json       # Project dependencies & build scripts
    ├── vite.config.js     # Vite configuration & Handlebars setup
    ├── public/            # Static assets (images, icons, videos)
    │   ├── images/        # Clinic, doctor, treatment, & banner images
    │   └── videos/        # Video backgrounds & gallery clips
    ├── src/               # Website source files
    │   ├── index.html     # Homepage
    │   ├── about.html     # About Clinic & Specialists page
    │   ├── service.html   # Treatments & Services interactive page
    │   ├── service-static.html # Treatments static details page
    │   ├── appointment.html    # Online appointment booking page
    │   ├── contact.html   # Clinic contact, hours & map page
    │   ├── blog.html      # Skincare news & articles listing
    │   ├── blog-details.html   # Individual blog article page
    │   ├── privacy-policy.html # Privacy policy & medical disclaimers
    │   ├── 404-error.html # Custom 404 page
    │   ├── partials/      # Reusable Handlebars partials
    │   │   ├── navbar.html     # Navigation bar
    │   │   ├── footer.html     # Global footer
    │   │   ├── head-css.html   # Global CSS imports
    │   │   └── title-meta.html # Meta tags and page head configuration
    │   └── assets/        # Styles and client scripts
    │       ├── css/       # Tailwind & custom stylesheets
    │       └── js/        # Interactive sliders, animations, & galleries
    └── dist/              # Compiled, production-ready static website
```

---

## 🎨 Tech Stack & Libraries

- **Build Tool:** [Vite](https://vitejs.dev/)
- **CSS Framework:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [Preline UI](https://preline.co/)
- **Templating:** [Handlebars](https://handlebarsjs.com/) via `vite-plugin-handlebars`
- **Carousels / Sliders:** [Swiper](https://swiperjs.com/)
- **Media Lightbox:** [LightGallery](https://www.lightgalleryjs.com/)
- **Icons:** [Iconify](https://iconify.design/) (Lucide & Tabler sets)
- **Smooth Navigation:** [GumshoeJS](https://github.com/cferdinandi/gumshoe)
