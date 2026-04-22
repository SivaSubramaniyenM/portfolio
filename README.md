# Siva Subramaniyen M — Portfolio

A clean, dark-themed personal portfolio website built with vanilla HTML, CSS, and JavaScript.

---

## 📁 File Structure

```
portfolio/
├── index.html     # Markup & content
├── style.css      # All styles & animations
├── main.js        # Interactivity & scroll effects
└── README.md      # This file
```

---

## ✨ Features

- **Custom cursor** — dual-layer cursor with smooth follower animation
- **Scroll reveal** — staggered IntersectionObserver animations on every section
- **3D tilt** — project cards and skill tags respond to mouse movement
- **Active nav highlighting** — current section highlighted in navbar
- **Hero tag cycling** — rotating text labels in the hero section
- **Responsive design** — mobile-first layout adjustments at 900px and 560px breakpoints
- **Noise texture overlay** — subtle grain for depth
- **Sticky navbar** — background transition on scroll

---

## 🚀 Getting Started

No build tools or dependencies required. Just open the file:

```bash
# Option 1 — Open directly in browser
open index.html

# Option 2 — Serve locally (recommended to load Google Fonts)
npx serve .
# or
python3 -m http.server 8080
```

Then visit `http://localhost:8080` (or `http://localhost:3000` for `npx serve`).

---

## 🎨 Design Tokens

All colors and spacing are controlled via CSS variables in `style.css`:

| Variable         | Value     | Usage                        |
|------------------|-----------|------------------------------|
| `--bg`           | `#080b10` | Main background              |
| `--bg-2`         | `#0d1117` | Alternate section background |
| `--bg-card`      | `#111820` | Card backgrounds             |
| `--accent`       | `#e8b84b` | Gold accent (headings, CTAs) |
| `--text-primary` | `#e8eaf0` | Body text                    |
| `--text-secondary`| `#7a8494`| Secondary text               |
| `--font-display` | Syne      | Headings & UI                |
| `--font-mono`    | Space Mono| Labels, tags, code           |

---

## 🖊️ Customisation

### Update contact details
Edit the `#contact` section in `index.html`:
```html
<a href="mailto:your@email.com" class="contact-link">...</a>
```

### Add a new project
Copy a `.project-card` block in `#projects` and fill in your details:
```html
<a class="project-card reveal" href="GITHUB_URL" target="_blank">
  <div class="project-meta">
    <span class="project-year">YEAR</span>
    <span class="project-type">TYPE</span>
  </div>
  <h3>Project Title</h3>
  <p>Description...</p>
  <div class="project-tech">
    <span>Tech1</span><span>Tech2</span>
  </div>
  <div class="project-arrow">↗</div>
</a>
```

### Change accent color
Find `--accent` in `style.css` and replace `#e8b84b` with your preferred hex:
```css
--accent: #e8b84b;  /* gold — change to any colour */
```

### Swap fonts
Replace the Google Fonts `<link>` in `index.html` and update the CSS variables:
```css
--font-display: 'Your Font', sans-serif;
--font-mono: 'Your Mono Font', monospace;
```

---

## 📦 Deployment

### GitHub Pages
1. Push all three files to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to **main branch / root**
4. Your site will be live at `https://username.github.io/repo-name`

### Netlify (drag & drop)
1. Go to [netlify.com](https://netlify.com) and sign in
2. Drag the `portfolio/` folder onto the deploy zone
3. Done — live URL generated instantly

### Vercel
```bash
npm i -g vercel
cd portfolio/
vercel
```

---

## 🛠️ Tech Stack

| Technology     | Purpose                     |
|----------------|-----------------------------|
| HTML5          | Semantic markup             |
| CSS3           | Animations, grid, variables |
| Vanilla JS     | IntersectionObserver, cursor, tilt |
| Google Fonts   | Syne + Space Mono           |

Zero dependencies. Zero build step.

---

## 📄 License

Free to use and adapt for personal portfolios.
