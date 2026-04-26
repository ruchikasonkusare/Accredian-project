# Accredian Enterprise — Partial Clone

> A high-fidelity Next.js 14 recreation of the Accredian Enterprise landing page, built as part of the Full Stack Developer Intern assignment.

**Live Demo:** [Deploy on Vercel](#deployment)  
**Reference:** [enterprise.accredian.com](https://enterprise.accredian.com)

---

## 🚀 Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/accredian-enterprise.git
cd accredian-enterprise

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Open in browser
open http://localhost:3000
```

No environment variables are required for local development.

---

## 📁 Project Structure

```
accredian-enterprise/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # POST /api/contact — lead capture API
│   ├── components/
│   │   ├── Navbar.tsx            # Sticky nav with dropdown + mobile menu
│   │   ├── Hero.tsx              # Full-screen hero with stats + floating dashboard
│   │   ├── Features.tsx          # 8-feature grid (2 highlighted cards)
│   │   ├── HowItWorks.tsx        # 4-step process with connector line
│   │   ├── Testimonials.tsx      # Carousel testimonials + mini grid
│   │   ├── Partners.tsx          # Academic partners + marquee company logos
│   │   ├── ContactForm.tsx       # Lead capture form with validation
│   │   └── Footer.tsx            # Multi-column footer with social links
│   ├── globals.css               # Tailwind base + custom design tokens
│   ├── layout.tsx                # Root layout with metadata + fonts
│   └── page.tsx                  # Page assembly
├── public/                       # Static assets
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## 🏗️ Approach

### Design Direction
I chose a **deep navy dark theme** with electric blue accents — a refined enterprise aesthetic that communicates trust, precision, and scale. The design avoids the generic purple-gradient-on-white look common in AI-generated UIs.

Key aesthetic choices:
- **Typography**: Playfair Display (display) + DM Sans (body) + DM Mono (labels) — creates a premium editorial feel
- **Color system**: Navy `#060d1f` base, brand blue `#1a6ef5`, accent orange `#f97316`
- **Glassmorphism cards** with layered transparency and subtle borders
- **Animated orbs** and grid patterns for atmospheric depth
- **Scroll-triggered animations** via IntersectionObserver (no heavy library needed)

### Architecture
- **App Router** (Next.js 14) — layouts, file-based routing, Server + Client Components
- All interactive components are `"use client"` — Navbar (scroll state), Testimonials (carousel), ContactForm (form state)
- Static sections (Footer) are Server Components by default
- Component-per-section structure makes each part independently editable

### Sections Built
| Section | Details |
|---|---|
| **Navbar** | Sticky with blur, dropdown menus, mobile hamburger, smooth scroll |
| **Hero** | Full-screen with animated floating dashboard card, stats, CTAs |
| **Features** | 8-feature grid with 2 highlighted cards spanning 2 columns |
| **How It Works** | 4-step timeline with connector line (desktop) |
| **Testimonials** | Auto-advancing carousel with dot + arrow navigation |
| **Partners** | Academic logo grid + infinite marquee of enterprise clients |
| **Contact Form** | Lead capture with validation, API integration, success state |
| **Footer** | 4-column link grid, social links, contact info, status indicator |

---

## 🤖 AI Usage

This project was built with assistance from **Claude (Anthropic)** at every stage.

### Where AI helped:
- **Initial scaffold**: Generated the full component structure, Tailwind config, and design token system
- **Component generation**: Each component's initial implementation was AI-drafted based on the reference site's content extracted via web search
- **Design decisions**: Color palette, glassmorphism card styles, animation keyframes, and the grid/orb background system were AI-suggested
- **TypeScript types**: Form state types, component prop interfaces

### What I modified or improved manually:
- **Responsive breakpoints**: Adjusted several grid layouts that broke on medium screens (sm:grid-cols-2 vs lg:grid-cols-4 combinations)
- **Animation timing**: Tuned `animationDelay` values per-card for a more natural stagger feel
- **Testimonial carousel**: Replaced a simple show/hide toggle with proper dot navigation + mini-grid preview cards
- **API route**: Added the `GET /api/contact` endpoint for admin visibility (AI only generated POST)
- **Mobile navbar**: Collapsed dropdown into a single button per group on mobile to avoid overflow
- **CSS scrollbar** and noise overlay — AI generated these but the opacity values needed manual calibration
- **Font pairing**: Switched from AI's initial suggestion (Space Grotesk) to Playfair Display + DM Sans for a more premium feel

---

## 🌐 Deployment on Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Production deploy
vercel --prod
```

Or connect the GitHub repo in the [Vercel dashboard](https://vercel.com) for automatic deployments on every push.

No environment variables needed for the basic version.

### Optional: Persist leads to a database
To replace in-memory lead storage with a real DB:
1. Add `DATABASE_URL` to Vercel environment variables
2. Install `@vercel/postgres` or `prisma`
3. Update `app/api/contact/route.ts` to write to the DB

---

## ✅ Functional Requirements Checklist

- [x] **Landing page** — all sections built
- [x] **Navigation menu** — sticky, responsive, dropdown, smooth scroll
- [x] **Footer** — multi-column with links and contact info
- [x] **Fully responsive** — mobile + tablet + desktop
- [x] **Clean, structured UI** — design system with tokens
- [x] **Reusable components** — each section is an independent component
- [x] **Smooth navigation** — IntersectionObserver scroll animations + smooth scroll
- [x] **API integration** — `/api/contact` POST endpoint with validation
- [x] **Deployment** — Vercel-ready (zero config)
- [x] **Lead capture form** ⭐ (bonus)
- [x] **API route for data storage** ⭐ (bonus)

---

## 🔧 Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 14 (App Router) | SSR + file-based routing + API routes |
| Language | TypeScript | Type safety for forms and component props |
| Styling | Tailwind CSS | Utility-first, fast iteration, responsive |
| Icons | Lucide React | Lightweight, consistent icon set |
| Fonts | Google Fonts (DM Sans, Playfair Display, DM Mono) | Premium editorial feel |
| Deployment | Vercel | Seamless Next.js hosting |

---

## 🔮 Improvements With More Time

1. **Real database** — Replace in-memory lead store with Supabase/Neon PostgreSQL + Prisma
2. **Email notifications** — Send confirmation email to lead + alert to sales team via Resend/SendGrid
3. **CMS integration** — Move testimonials and features content to Sanity or Contentful
4. **Analytics** — Add Vercel Analytics + custom lead tracking events
5. **A/B testing** — Test CTA button copy ("Request Demo" vs "Get Started Free")
6. **Animations** — Use Framer Motion for spring-based transitions and page transitions
7. **SEO** — Add structured data (JSON-LD), sitemap.xml, robots.txt
8. **Accessibility** — Full keyboard navigation audit, ARIA labels, focus rings
9. **i18n** — Multi-language support (Hindi + English) for broader Indian market reach
10. **Dark/light toggle** — System-preference aware theme switcher

---

## 📄 License

Built for evaluation purposes as part of the Accredian Full Stack Developer Intern assignment.
