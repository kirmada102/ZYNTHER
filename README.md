# Orenva - Modernized with Next.js 14

Welcome to the modernized version of Orenva! This codebase has been upgraded from plain HTML/CSS/JS to a modern, production-ready Next.js stack.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **3D Graphics**: Three.js (preserved from original)
- **Fonts**: Google Fonts (Inter, Space Grotesk)
- **Package Manager**: npm

## 📁 Project Structure

```
.
├── app/
│   ├── layout.tsx              # Root layout, metadata, no-flash theme script
│   ├── page.tsx                # Home page
│   ├── about/page.tsx          # About page
│   ├── team/page.tsx           # Team page
│   ├── for-you/page.tsx        # For You page
│   ├── connect/page.tsx        # Connect page
│   ├── api/waitlist/route.ts   # Waitlist signup endpoint
│   ├── globals.css             # Global styles
│   ├── layout.css              # Layout / chrome styles
│   └── components.css          # Card & component styles
├── components/
│   ├── SiteHeader.tsx          # Shared header (active-nav aware)
│   ├── SiteFooter.tsx          # Shared footer
│   ├── HeroScene.tsx           # 3D hero scene (Three.js)
│   ├── ThemeProvider.tsx       # Light/dark theme state
│   ├── ClientScripts.tsx       # Menu, scroll-hide, reveal-on-scroll
│   └── HomeInteractions.tsx    # Activate / module cards / waitlist form
├── public/
│   └── orenva-logo.png         # Logo asset
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── tailwind.config.ts          # Tailwind configuration
└── next.config.js              # Next.js configuration
```

## 🎯 Getting Started

### Development
```bash
npm install
npm run dev
```
Visit `http://localhost:3000`

### Production Build
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## ✨ Features

- ✅ Server-side rendering (SSR) ready
- ✅ Static site generation (SSG) ready
- ✅ Image optimization with Next.js Image component
- ✅ Dark/Light mode support (CSS variables)
- ✅ Responsive design with mobile-first approach
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for utility-first styling
- ✅ Three.js 3D graphics (hero scene)
- ✅ Accessibility features (ARIA labels, semantic HTML)

## 🔄 What's Next?

### Phase 1: Home Page
- [x] Initialize Next.js project
- [x] Set up TypeScript & Tailwind
- [x] Port HTML structure to React
- [x] Preserve original styling & 3D scene
- [x] Migrate main.js functionality to React (activate, module cards, form)
- [x] Dark mode toggle
- [x] Reveal-on-scroll animations

### Phase 2: Additional Pages
- [x] Create About page (`/about`)
- [x] Create Team page (`/team`)
- [x] Create For You page (`/for-you`)
- [x] Create Connect page (`/connect`)

### Phase 3: Features
- [x] API route for waitlist form (`/api/waitlist`)
- [ ] Waitlist persistence — wire to a datastore (see `TODO(persistence)`)
- [ ] Email notifications
- [ ] Analytics integration
- [ ] CMS/Headless CMS integration (optional)

### Phase 4: Polish
- [ ] Replace Team page placeholder names/photos with real founders
- [ ] Refactor CSS to Tailwind (optional, design currently works well)
- [ ] Add unit / E2E tests
- [ ] Performance monitoring

## 📝 Notes

- The original design has been preserved exactly as-is
- CSS variables are used for theming (light/dark mode)
- Three.js library is loaded dynamically in the HeroScene component
- All responsive breakpoints match the original design

## 🚢 Deployment

> [!IMPORTANT]
> The original `main` branch (plain HTML) is served by **GitHub Pages** via
> the `CNAME` file — domain **orenvahealth.com**. GitHub Pages serves static
> files only; it **cannot run this Next.js app** (it has a server build step
> and an API route, `/api/waitlist`). Merging this branch into `main` will
> **not** make the live site update — it needs a host that runs Node.

### Recommended: deploy to Vercel

Vercel is built by the Next.js team and runs the build + API routes with no
extra configuration.

1. Go to [vercel.com/new](https://vercel.com/new) and import the
   `kirmada102/Orenva` GitHub repo.
2. Set **Production Branch** to `next-js-migration` (Project → Settings → Git)
   — or merge this branch into `main` first and leave it as `main`.
3. Vercel auto-detects Next.js — no build settings needed. Deploy.
4. Every push to the production branch then redeploys automatically.

### Pointing orenvahealth.com at Vercel

The domain currently resolves to GitHub Pages. To move it:

1. In the Vercel project: **Settings → Domains → Add** `orenvahealth.com`.
2. Update DNS at your registrar to the records Vercel shows
   (an `A` record to Vercel's IP, or a `CNAME` for `www`).
3. Once DNS propagates, remove the `CNAME` file from the GitHub Pages
   branch so the two hosts do not contend for the domain.

The original HTML site stays safe on `main` (and in git history) throughout.

### Alternatives

- **Netlify** — works via the official `@netlify/plugin-nextjs` adapter.
- **Docker / self-host** — `npm run build && npm start` behind a Node server.

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Three.js Documentation](https://threejs.org/docs/)

---

**Branch**: `next-js-migration`

The original HTML/CSS/JS version is still available on the `main` branch if needed.
