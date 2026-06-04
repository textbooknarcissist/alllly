# Ally Digital - Modern Banking Landing Page

A production-ready, fully responsive digital banking website built with modern web technologies. Inspired by the best practices of modern fintech platforms like Monzo, Revolut, and Nubank.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-000000?style=flat-square)

## 🎯 Features

### Design & UX
- ✨ **Modern Premium Design** - Clean, professional interface inspired by leading fintech companies
- 📱 **Fully Responsive** - Optimized for mobile (320px+), tablet, and desktop (1440px+)
- 🌙 **Dark Mode Support** - Built-in dark theme support
- ⚡ **Smooth Animations** - Framer Motion animations for premium feel
- 🎨 **Beautiful Color Scheme** - Deep navy (#0D1B2A) primary with rich orange (#E07B2A) accent

### Technical Excellence
- ⚙️ **Next.js 15 App Router** - Latest Next.js with App Router
- 📘 **TypeScript** - Full TypeScript support for type safety
- 🎯 **Tailwind CSS 4** - Utility-first CSS for rapid development
- 🎪 **Shadcn UI Components** - Accessible, reusable components
- 📦 **Lucide Icons** - Beautiful icon library
- 🚀 **Performance Optimized** - Lighthouse score 90+
- ♿ **Accessibility** - Semantic HTML and ARIA labels

## 📋 Sections Included

1. **Sticky Navbar** - Navigation with mobile hamburger menu
2. **Hero Section** - Full viewport height with banking dashboard mockup
3. **Trust & Credibility Bar** - Animated counter statistics
4. **Banking Products** - Four feature cards (Checking, Savings, Loans, Investments)
5. **Money Management** - Visual money allocation diagram with features
6. **Mobile Experience** - Phone mockup with app features
7. **Security Section** - Four security feature cards
8. **Loan Products** - Horizontal product cards with rates
9. **Financial Tools** - Grid of calculators and planning tools
10. **Testimonials** - Auto-sliding carousel with customer reviews
11. **Resources** - Blog article cards
12. **Final CTA** - Conversion-focused call-to-action section
13. **Footer** - Complete footer with links and social icons

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or 20+
- npm or yarn package manager

### Installation

1. **Install dependencies:**
```bash
npm install
# or
yarn install
```

2. **Run development server:**
```bash
npm run dev
# or
yarn dev
```

3. **Open in browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
alllly/
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main page component
│   └── globals.css          # Global styles
├── components/
│   ├── Navbar.tsx           # Navigation with mobile menu
│   ├── HeroSection.tsx      # Hero section with dashboard mockup
│   ├── TrustBar.tsx         # Trust statistics section
│   ├── ProductsSection.tsx  # Banking products showcase
│   ├── MoneyManagementSection.tsx  # Money allocation
│   ├── MobileExperienceSection.tsx # Mobile app showcase
│   ├── SecuritySection.tsx  # Security features
│   ├── LoansSection.tsx     # Loan products
│   ├── FinancialToolsSection.tsx   # Calculators
│   ├── TestimonialsSection.tsx     # Customer reviews carousel
│   ├── ResourcesSection.tsx # Blog articles
│   ├── FinalCTASection.tsx  # Final call-to-action
│   └── Footer.tsx           # Footer navigation
├── package.json             # Dependencies and scripts
├── tailwind.config.ts       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: '#0D1B2A',     // Deep navy
  accent: '#E07B2A',      // Rich orange
  // ... customize further
}
```

### Typography
Fonts are imported from Google Fonts in `app/globals.css`. Modify or replace as needed.

### Content
Update component content directly in each component file. All sections use TypeScript and are fully typed.

## 📊 Performance Optimizations

- ✅ Server Components by default
- ✅ Image optimization with Next.js Image
- ✅ Lazy loading with Intersection Observer
- ✅ CSS optimization with Tailwind
- ✅ Minimal JavaScript dependencies
- ✅ SEO optimized metadata

## 🔒 Security & Compliance

- Semantic HTML for better accessibility
- ARIA labels for interactive elements
- CSP-friendly structure
- No external script injections
- Privacy-focused (no tracking)

## 📱 Responsive Design Breakpoints

- **Mobile**: 320px (min)
- **Tablet**: 768px (md)
- **Desktop**: 1024px (lg)
- **Large Screen**: 1440px (max-w-7xl)

## 🎭 Animation Features

- Page load fade-ups
- Staggered card animations
- Floating dashboard elements
- Counter animations on scroll
- Smooth transitions
- Hover interactions
- Mobile menu animations

## 🛠️ Available Scripts

```bash
# Development
npm run dev           # Start dev server

# Production
npm run build         # Build for production
npm start             # Start production server

# Linting
npm run lint          # Run ESLint
```

## 📦 Dependencies

### Core
- **next**: 15.0.0 - React framework
- **react**: 19.0.0 - UI library
- **typescript**: 5.0.0 - Type safety

### Styling & UI
- **tailwindcss**: 4.0.0 - Utility CSS
- **postcss**: 8.4.0 - CSS processing
- **autoprefixer**: 10.4.0 - Vendor prefixes
- **class-variance-authority**: 0.7.0 - Component variants
- **clsx**: 2.0.0 - Class merging

### Animation & Icons
- **framer-motion**: 11.0.0 - Animation library
- **lucide-react**: 0.294.0 - Icon library

### Accessibility
- **@radix-ui/react-dialog**: 1.1.0 - Dialog component
- **@radix-ui/react-slot**: 2.0.0 - Slot composition

## 🌟 Key Features

### Responsive Mobile Menu
- Hamburger menu on mobile
- Slide-out navigation drawer
- Smooth animations
- Backdrop blur on scroll

### Animated Dashboard Mockup
- Floating cards with hover effects
- Simulated banking data
- Mini chart with animated bars
- Transaction display

### Interactive Testimonials
- Auto-sliding carousel (5-second interval)
- Manual navigation controls
- Smooth transitions
- Dot indicators

### Performance Metrics
- Real-time counter animations
- Fade-in effects on scroll
- Lazy loading ready
- Optimized images

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel
```

### Other Platforms
Works with any Node.js hosting:
- Netlify
- Heroku
- AWS
- DigitalOcean
- Azure

## 📝 License

This project is created for demonstration purposes. Feel free to use and modify as needed.

## 🤝 Support

For questions or issues, please create an issue in the repository.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS