# 🛍️ E-Commerce Product Catalog

A fully functional, production-ready e-commerce product catalog built with vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies at runtime. Built as a full-stack web development capstone project.

🔗 **[Live Demo] https://khushinaik-shop.netlify.app/

---

## ✨ Features

- **Product Catalog** — responsive grid layout showcasing 8 products with images, names, and prices
- **Product Detail Pages** — individual pages for each product with full description and add-to-cart functionality
- **Client-Side Routing** — seamless navigation using hash-based routing (`#/`, `#/product/:id`, `#/cart`) with no full page reloads
- **Live Search** — filter products instantly by name, triggered by typing, clicking the search button, or pressing Enter
- **Shopping Cart** — add items, update quantities, remove items, and view a running total
- **Cart Badge** — live item count badge on the cart icon, hidden when empty
- **Asset Optimization** — minified JS and CSS via a custom `npm run build` pipeline (18–28% smaller files)
- **Lazy Loading** — all images use `loading="lazy"` for faster initial page load
- **Accessible Markup** — all images include descriptive `alt` text
- **Responsive Design** — CSS Grid layout adapts from 1 column on mobile to 4 columns on desktop

---

## 🖥️ Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (Flexbox, Grid, custom properties) |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts (Krona One) |
| Build Tools | Terser, clean-css-cli, html-minifier-terser |
| Version Control | Git + GitHub |
| Deployment | Netlify (CI/CD via GitHub integration) |

---

## 📁 Project Structure

```
ecommerce-catalog/
├── index.html                  # Development entry point
├── index.production.html       # Production entry point (references minified assets)
├── style.css                   # Source stylesheet
├── package.json                # Build scripts and dev dependencies
├── .gitignore
├── js/
│   ├── data.js                 # Product data array
│   ├── cart.js                 # Cart logic (add, remove, update, render)
│   ├── router.js               # Hash-based client-side router
│   └── app.js                  # Render functions (product list, detail, 404)
└── dist/                       # Auto-generated production build (not committed)
    ├── index.html
    ├── style.min.css
    └── js/
        ├── data.min.js
        ├── cart.min.js
        ├── router.min.js
        └── app.min.js
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org) (v16 or higher)
- A code editor (VS Code recommended)

### Run locally

```bash
# 1. Clone the repository
git clone https://github.com/KhushiNaik505/E-commerce-Catalog.git

# 2. Open the project folder
cd E-commerce-Catalog

# 3. Install build tools
npm install

# 4. Open index.html with Live Server in VS Code
# Right-click index.html → Open with Live Server
```

### Build for production

```bash
npm run build
```

This generates the `dist/` folder with minified CSS, JS, and HTML — ready to deploy.

---

## 📦 Build Pipeline

The project uses a custom build pipeline defined in `package.json`:

```json
"scripts": {
  "build": "npm run build:js && npm run build:css && npm run build:html",
  "build:js": "terser js/*.js ...",
  "build:css": "cleancss -o dist/style.min.css style.css",
  "build:html": "html-minifier-terser ... index.production.html -o dist/index.html"
}
```

| File | Before | After | Saving |
|---|---|---|---|
| data.js | 2,685 bytes | 2,201 bytes | 18% |
| cart.js | 2,020 bytes | 1,436 bytes | 28% |
| router.js | 435 bytes | 312 bytes | 28% |
| app.js | 2,206 bytes | 1,669 bytes | 24% |
| style.css | 3,209 bytes | 2,373 bytes | 26% |

---

## 🌐 Deployment

This project is deployed on **Netlify** with automatic CI/CD:

1. Code is pushed to the `main` branch on GitHub
2. Netlify detects the push and triggers a new build automatically
3. Netlify runs `npm run build` on its servers
4. The contents of `dist/` are published live

No manual re-uploading or clicking "deploy" needed — every `git push` updates the live site.

---

## 🧠 Concepts Demonstrated

- Modular JavaScript architecture (separation of concerns across multiple files)
- DOM manipulation and dynamic HTML rendering via template literals
- Array methods: `.map()`, `.filter()`, `.find()`, `.reduce()`
- Event-driven programming (`click`, `input`, `keydown`, `hashchange`, `DOMContentLoaded`)
- CSS Grid and Flexbox for responsive layout
- `position: absolute` for badge overlays
- Git version control workflow
- Build tooling and the source vs. production file distinction
- Netlify deployment with GitHub integration

---

## 👩‍💻 Author

**Khushi Naik**  
Internship Capstone Project — Full-Stack Web Development

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
