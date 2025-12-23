# Daily Horror SEO Intelligence

An autonomous Next.js dashboard that delivers USA-focused horror storytelling SEO intel every day. It synthesizes viral keywords, CTR-primed titles, compliant descriptions, tags, and hashtags for YouTube long-form videos and Shorts across the horror, paranormal, and true-story niche.

## Features

- 🌙 Daily topic anchored in real-location horror incidents across the United States  
- 🔍 Ten high-intent keyword targets tuned for high search volume and manageable competition  
- 🎬 Three click-magnetic, emotional titles using mandated power phrases  
- 📝 SEO description (150–200 words) with hook-driven first lines and built-in CTA  
- 🏷️ Metadata toolkit: 15–20 tags + 5 trending hashtags optimized for Search/Suggested/Browse  
- 📋 Copy-to-clipboard controls for every deliverable  
- 🎨 Atmospheric, responsive UI designed for late-night strategy sessions  
- 🧮 Deterministic generator seeded by Eastern Time midnight to guarantee fresh daily output

## Getting Started

1. Install dependencies
   ```bash
   npm install
   ```
2. Run the development server
   ```bash
   npm run dev
   ```
3. Visit `http://localhost:3000` to access the dashboard.

## Production Build

```bash
npm run build
npm start
```

## Linting

```bash
npm run lint
```

## Tech Stack

- Next.js 16 (App Router, Turbopack build)  
- React 18  
- TypeScript  
- Modern CSS with custom dark-mode theme  
- Deterministic content generation utilities

## Deployment

Ready for Vercel. After building locally, deploy with:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-836e620b
```

## License

MIT © 2024 Horror SEO Automation Lab
