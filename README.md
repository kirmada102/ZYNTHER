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
│   ├── layout.tsx          # Root layout with theme support
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── layout.css          # Layout component styles
├── components/
│   └── HeroScene.tsx       # 3D hero scene component
├── public/
│   └── orenva-logo.png    # Logo asset
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
├── tailwind.config.ts      # Tailwind configuration
└── next.config.js          # Next.js configuration
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

### Phase 1: Complete the Home Page (Current)
- [x] Initialize Next.js project
- [x] Set up TypeScript & Tailwind
- [x] Port HTML structure to React
- [x] Preserve original styling & 3D scene
- [ ] Migrate main.js functionality to React hooks
- [ ] Add dark mode toggle
- [ ] Test responsive design

### Phase 2: Additional Pages
- [ ] Create About page (`/about`)
- [ ] Create Team page (`/team`)
- [ ] Create For You page (`/for-you`)
- [ ] Create Connect page (`/connect`)

### Phase 3: Features
- [ ] API route for waitlist form
- [ ] Email notifications
- [ ] Analytics integration
- [ ] CMS/Headless CMS integration (optional)

### Phase 4: Optimization
- [ ] Refactor CSS to Tailwind (optional, design currently works well)
- [ ] Add unit tests
- [ ] Add E2E tests
- [ ] Performance monitoring

## 📝 Notes

- The original design has been preserved exactly as-is
- CSS variables are used for theming (light/dark mode)
- Three.js library is loaded dynamically in the HeroScene component
- All responsive breakpoints match the original design

## 🚢 Deployment

This project is ready for deployment on:
- **Vercel** (recommended - seamless Next.js integration)
- **Netlify** (requires minor configuration)
- **Docker** (self-hosted)

### Deploy to Vercel
```bash
# With GitHub connected
git push
# Auto-deploys on push to main
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Three.js Documentation](https://threejs.org/docs/)

---

**Branch**: `next-js-migration`

The original HTML/CSS/JS version is still available on the `main` branch if needed.
