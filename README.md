# Modern Personal Portfolio Website

A modern personal portfolio built with **React 19**, **TypeScript**, and **Vite**, replicating the visual language, typography, interactions, and aesthetic of the design reference ([https://pin.it/4RWKNcxky](https://pin.it/4RWKNcxky) / Panda Coders).

---

## 🌟 Visual & Architectural Highlights

- **Deep Obsidian Atmosphere**: Dark mode (`#01010a`) with glowing, gently rotating radial neon blobs (`@keyframes animateBlob` with 360° rotation and 40–60px blurs).
- **Distinctive Typography**:
  - Headings & Badges: **Unbounded** (Google Fonts) – ultra-modern geometric wide typography.
  - Body & UI: **Montserrat** (Google Fonts) – clean, legible sans-serif.
- **Split Hero Composition**:
  - Left: "Hello, I'm" subtitle + Large Name.
  - Center: Cutout portrait with rotating neon halo backdrop and gradient shadow vignette.
  - Right: "Creative" uppercase split title + staggered profession animation ("Full-Stack Developer", "Frontend Specialist", etc.).
  - Floating vertical social icon bar + diagonal "Resume" download button with glow effects.
- **Asymmetric About Section**:
  - High-impact editorial headline: `Creativity Is My Passion` with bold text emphasis.
  - Cutout portrait surrounded by dual orbiting glowing blobs.
  - Distinctive pill CTA button with double neon shadow (outer halo + inner glow).
- **Interactive Projects Carousel**:
  - Project cards with 3.5rem rounded pill containers, corner glowing blobs, and large numbers (`01`, `02`, `03`...).
  - Tech stack tags, thumbnail preview, and pop-up circular launch button with `ri-arrow-right-up-long-line`.
  - Responsive track slider with keyboard navigation and pagination pills.
- **Journey & Timeline**:
  - Tab switcher ("Experience" vs. "Education") inside a floating pill container.
  - Glowing vertical rail with a pulsing endpoint dot.
  - Milestone cards with period tags and detailed accomplishments.
- **Skills & Services Accordion**:
  - Interactive cards ("Development Skills" and "Tools & Ecosystem") with smooth height animations, rotating chevron controls, and pill badges for every technology.
- **Testimonials Dual-Track Infinite Marquee**:
  - Continuous ticker with top track sliding left and bottom track sliding right in reverse.
  - Edge gradient mask overlays and pause-on-hover behavior.
  - Glowing star ratings and client endorsement cards.
- **Contact Section**:
  - One-click **Copy Email** pill button with clipboard API and instant checkmark feedback.
  - Categorized 3-column layout: Direct Coordinates, Social Profiles, and Direct Messaging (WhatsApp, Telegram, Discord, Calendar).
- **Custom Cursor**:
  - Neon follower circle with `mix-blend-mode: difference`, expanding on clickable elements and automatically disabled on touch devices.
- **Live Theme Accent Switcher**:
  - Floating quick-switch widget in the bottom-right corner allowing instant switching between 5 curated neon hues:
    1. **Electric Violet** (reference default - HSL 255)
    2. **Cyber Cyan** (HSL 185)
    3. **Emerald Matrix** (HSL 120)
    4. **Sunset Amber** (HSL 35)
    5. **Neon Pink** (HSL 315)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher (v26+ supported)
- **npm**: v9.0.0 or higher

### Installation & Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview the production build:
   ```bash
   npm run preview
   ```

---

## ✏️ How to Customize Your Content

All portfolio text, links, projects, journey milestones, and skills are decoupled into a single, strongly-typed configuration file:

📁 **[`src/data/portfolioData.ts`](file:///d:/Downloads/portfolio/src/data/portfolioData.ts)**

### 1. Update Personal Info
Change `personal.name`, `personal.firstName`, `personal.lastName`, `personal.title`, `personal.email`, `personal.location`, and `personal.resumeUrl`.

### 2. Replace Photos & Assets
Place your cutout portrait and project thumbnails in `public/assets/img/`:
- Hero portrait: `public/assets/img/hero-profile1.png`
- About portrait: `public/assets/img/home-perfil1.png`
- Favicon: `public/assets/img/Icon.png`
- Project screenshots: `public/assets/img/project-1.png` to `project-8.png`
- Resume PDF: `public/assets/pdf/resume-sample.pdf`

### 3. Add or Edit Projects
Modify the `projects` array in `portfolioData.ts`. Each project includes:
- `number`: Slide number (`01`, `02`...)
- `category`: Category badge (`Web App`, `E-Commerce`...)
- `title`: Project title
- `description`: Summary of what you built
- `techStack`: Array of technologies used
- `image`: Thumbnail path
- `liveUrl`: Link to live website / demo
- `githubUrl`: Link to GitHub repository

### 4. Experience & Education
Update the `experience` and `education` arrays with your career milestones, dates, company names, and achievements.

### 5. Skills & Tools
Add or remove skills in `skillCategories`.

---

## 🧪 Testing & Verification Performed

- **TypeScript Typecheck**: Passed with 0 errors (`tsc --noEmit`).
- **Production Build**: Verified with Vite bundle compilation (`npm run build`).
- **Local Dev Server**: Verified on `http://localhost:3000/` with HTTP 200 OK.
- **Asset Integrity**: Verified all 15 static image assets and PDF resume return HTTP 200 OK.
- **Copy Email Interaction**: Clipboard API copy with feedback state.
- **Responsive Breakpoints**: Desktop (1150px+), Tablet (768px-1149px), Mobile (<768px).
- **Reduced Motion Support**: Included `@media (prefers-reduced-motion: reduce)` in CSS.
