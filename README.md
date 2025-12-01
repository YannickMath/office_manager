# Office Manager Website

A professional, modern website for an independent office management business, built with Next.js 16, React 19, and TypeScript.

## 🌟 Project Overview

This is a responsive, SEO-optimized website showcasing office management services including administrative management, commercial management, HR management, and pre-accounting services.

## 🚀 Tech Stack

- **Framework**: Next.js 16.0.6 (App Router)
- **Language**: TypeScript 5
- **UI Library**: React 19
- **Styling**: Tailwind CSS 3.4.1
- **Icons**: React Icons 5.2.1
- **Form Service**: Web3Forms API

## ✨ Features

### Core Features

- ✅ **Fully Responsive Design** - Optimized for desktop, tablet, and mobile
- ✅ **SEO Optimized** - Meta tags, sitemap, robots.txt
- ✅ **Accessibility** - ARIA labels, semantic HTML, keyboard navigation
- ✅ **Performance** - Image optimization, compression, static generation
- ✅ **Security** - Comprehensive security headers
- ✅ **Error Handling** - Custom error boundaries and 404 page
- ✅ **Loading States** - Smooth transitions and user feedback
- ✅ **Contact Form** - Integrated with Web3Forms API

### Pages

1. **Home** (`/`) - Welcome page with banner and service overview
2. **Services** (`/services`) - Detailed service offerings
3. **Pricing** (`/tarifs`) - Pricing information and quote requests
4. **Contact** (`/contacts`) - Contact form and business information
5. **Terms** - Legal terms and conditions (modal)

## 📁 Project Structure

```
office_manager/
├── public/                      # Static assets (logos, images)
├── src/
│   └── app/
│       ├── components/          # Reusable React components
│       │   ├── contacts/        # Contact form and info
│       │   ├── footer/          # Footer component
│       │   ├── headerMenu/      # Navigation header
│       │   ├── shared/          # Shared components
│       │   └── welcome/         # Home page sections
│       ├── hooks/               # Custom React hooks
│       ├── interface/           # TypeScript interfaces
│       ├── utils/               # Utility functions
│       ├── conditions/          # Terms & conditions page
│       ├── contacts/            # Contact page
│       ├── services/            # Services page
│       ├── tarifs/              # Pricing page
│       ├── error.tsx            # Error boundary
│       ├── global-error.tsx     # Global error handler
│       ├── not-found.tsx        # 404 page
│       ├── loading.tsx          # Loading state
│       ├── robots.ts            # SEO robots file
│       ├── sitemap.ts           # SEO sitemap
│       ├── globals.css          # Global styles
│       ├── layout.tsx           # Root layout
│       └── page.tsx             # Home page
├── .env.local.example           # Environment variables template
├── .eslintrc.json               # ESLint configuration
├── .gitignore                   # Git ignore rules
├── next.config.mjs              # Next.js configuration
├── package.json                 # Dependencies
├── tailwind.config.ts           # Tailwind configuration
└── tsconfig.json                # TypeScript configuration
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 20+
- npm, yarn, or pnpm package manager

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd office_manager
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Configure Environment Variables

1. Copy the example environment file:

```bash
cp .env.local.example .env.local
```

2. Edit `.env.local` and fill in your actual values:

```env
# Web3Forms API Key (get from https://web3forms.com/)
NEXT_PUBLIC_WEB_3_FORMS_API_KEY=your_actual_api_key

# Your website URL
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Business Information
NEXT_PUBLIC_BUSINESS_NAME=Your Business Name
NEXT_PUBLIC_OWNER_NAME=Your Full Name
NEXT_PUBLIC_EMAIL=your.email@example.com
NEXT_PUBLIC_PHONE=01 23 45 67 89
NEXT_PUBLIC_ADDRESS=Your City
NEXT_PUBLIC_ACTIVITY=Office Manager Indépendant
```

### Step 4: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📦 Build & Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Run Linting

```bash
npm run lint
```

## 🚢 Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

- **Netlify**: Drag & drop build folder or connect Git
- **AWS Amplify**: Full-featured cloud hosting
- **Railway**: Simple deployment with Git integration
- **DigitalOcean**: App Platform for scalable hosting

**Important**: Always add your environment variables to your hosting platform!

## 🎨 Customization

### Tailwind Configuration

Custom colors and breakpoints are defined in `tailwind.config.ts`:

```typescript
colors: {
  customBrown: "#d2b697",
  customRose: "#E8AEB7",
  customCardBg: "rgb(229, 216, 189)",
}

screens: {
  mini: { max: "498px" },
  phone: { max: "640px" },
  laptop: { max: "1024px" },
  desktop: { min: "1025px" },
}
```

### Images

Replace images in the `/public` directory with your own branding:

- Logo files: `LOGO_CB_*.png`
- Service images: `gestion_*.png`
- Background: `office_manager_main.png`

## 🔒 Security Features

- HTTPS enforcement (Strict-Transport-Security)
- XSS protection
- Content type sniffing prevention
- Clickjacking protection (X-Frame-Options)
- Referrer policy configuration
- Permissions policy for sensitive features

## ♿ Accessibility

- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<footer>`)
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- Color contrast compliance

## 📊 Performance Optimizations

- Static page generation
- Image optimization (AVIF, WebP formats)
- Automatic code splitting
- Compression enabled
- Optimized fonts

## 🔍 SEO Implementation

### robots.ts - Search Engine Crawler Instructions

The `robots.ts` file generates `/robots.txt` which tells search engines what they can crawl on your site.

**What it does:**
- Instructs all search engine bots (`User-Agent: *`) to crawl your entire site
- Allows indexing of all pages (`Allow: /`)
- Points crawlers to your sitemap for efficient indexing
- Uses `NEXT_PUBLIC_SITE_URL` environment variable for domain

**Generated output** (accessible at `/robots.txt`):
```
User-Agent: *
Allow: /
Sitemap: https://cecileboiron.com/sitemap.xml
```

**Benefits:**
- ✅ Explicit permission for search engines to index your site
- ✅ Better crawl efficiency
- ✅ Direct link to sitemap for complete page discovery

### sitemap.ts - Site Structure Map

The `sitemap.ts` file generates `/sitemap.xml` with a complete list of your pages and metadata.

**What it includes:**
- All public pages (Home, Services, Pricing, Contact)
- Last modification date (automatically updated)
- Change frequency (how often to check for updates)
- Priority (importance from 0.0 to 1.0)

**Page priorities:**
- Home: 1.0 (highest priority)
- Services: 0.8 (high priority)
- Pricing: 0.8 (high priority)
- Contact: 0.7 (medium-high priority)

**Benefits:**
- ✅ Faster indexing of all pages by search engines
- ✅ Better SEO rankings through complete site discovery
- ✅ Control over crawl priorities
- ✅ Automatic updates when you add new pages

**How to verify:**
- Visit `https://cecileboiron.com/robots.txt` to see crawler instructions
- Visit `https://cecileboiron.com/sitemap.xml` to see your sitemap
- Submit sitemap URL to [Google Search Console](https://search.google.com/search-console) for faster indexing
- Submit to [Bing Webmaster Tools](https://www.bing.com/webmasters) for Bing indexing

## 🧪 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Environment Variables Reference

| Variable                          | Description                         | Required |
| --------------------------------- | ----------------------------------- | -------- |
| `NEXT_PUBLIC_WEB_3_FORMS_API_KEY` | API key for contact form submission | Yes      |
| `NEXT_PUBLIC_SITE_URL`            | Your website's public URL           | Yes      |
| `NEXT_PUBLIC_BUSINESS_NAME`       | Business/company name               | Yes      |
| `NEXT_PUBLIC_OWNER_NAME`          | Owner's full name                   | Yes      |
| `NEXT_PUBLIC_EMAIL`               | Contact email address               | Yes      |
| `NEXT_PUBLIC_PHONE`               | Contact phone number                | Yes      |
| `NEXT_PUBLIC_ADDRESS`             | Business location/city              | Yes      |
| `NEXT_PUBLIC_ACTIVITY`            | Business activity description       | No       |

## 🐛 Troubleshooting

### Build Fails

1. Ensure all environment variables are set
2. Delete `.next` folder and rebuild:
   ```bash
   rm -rf .next
   npm run build
   ```

### Contact Form Not Working

1. Verify `NEXT_PUBLIC_WEB_3_FORMS_API_KEY` is set correctly
2. Check Web3Forms dashboard for submission logs
3. Ensure email is valid in the form

### Images Not Loading

1. Check images exist in `/public` directory
2. Verify image paths are correct
3. Clear browser cache

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Web3Forms Documentation](https://docs.web3forms.com/)

## 📄 License

Private project - All rights reserved

## 🤝 Contributing

This is a private project. For any issues or suggestions, please contact the project maintainer.

## 📞 Support

For technical support or questions about this project, please refer to the contact information provided through the website.

---

**Next.js Version**: 16.0.6
**React Version**: 19.2.0
