# Weiting Tan — Personal Academic Website

Personal academic homepage for Weiting Tan (谭维庭), physics undergraduate at East China Normal University (ECNU) and UC Berkeley visiting student.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 14 (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 3
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

## Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Photo, bio, research highlights, timeline, contact |
| Research | `/research` | Detailed research areas and techniques |
| Projects | `/projects` | Active projects with focus areas |
| Publications | `/publications` | Manuscripts in preparation (no fake pubs) |
| Notes | `/notes` | Technical notes and reading lists |
| CV | `/cv` | Curriculum vitae with download option |

## Visual Modes

The site includes two visual themes, toggleable via the sun/moon icon in the navigation bar:

1. **Academic Classic** (default) — White background, blue accents, Georgia headings, clean typography. Inspired by MIT / Stanford PhD student pages.

2. **Engineering Portfolio** — Dark background, indigo accents, monospace elements. A more technical/dev-oriented presentation.

Theme preference is persisted in `localStorage`.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18.17 or later
- npm (comes with Node.js)

### Installation

```bash
# Navigate to project directory
cd weiting-tan-site

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
weiting-tan-site/
├── public/
│   └── images/              # Place your images here
│       ├── portrait.jpg     # Your photo (circular crop on homepage)
│       └── projects/        # Project-related images
│           ├── femtosecond-setup.jpg
│           ├── fpga-hardware.jpg
│           └── microscope.jpg
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with nav + footer
│   │   ├── page.tsx         # Homepage
│   │   ├── globals.css      # Global styles + theme variables
│   │   ├── ThemeProvider.tsx # Theme context (academic / engineering)
│   │   ├── research/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── publications/page.tsx
│   │   ├── notes/page.tsx
│   │   └── cv/page.tsx
│   ├── components/
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   └── data/
│       ├── profile.ts       # Personal info, bio, contact
│       └── projects.ts      # Research projects data
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
├── postcss.config.js
└── package.json
```

## Customization

### Adding Your Photo

Replace the placeholder divs with actual images:

1. Place `portrait.jpg` in `public/images/`
2. Place project images in `public/images/projects/`
3. In `src/app/page.tsx`, replace the photo placeholder div with:
   ```tsx
   <img src="/images/portrait.jpg" alt="Weiting Tan" className="w-36 h-36 sm:w-40 sm:h-40 rounded-full object-cover" />
   ```

### Editing Content

- **Profile info**: Edit `src/data/profile.ts`
- **Projects**: Edit `src/data/projects.ts`
- **Publications, Notes, etc.**: Edit the respective page files in `src/app/`

### Changing the CV PDF

Replace `public/cv.pdf` with your actual CV PDF file.

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### GitHub Pages / Static Export

Add to `next.config.js`:
```js
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
};
```

Then:
```bash
npm run build
# Output is in out/ directory — deploy to any static host
```

## Design Notes

- Clean academic style — no startup landing page feeling
- No excessive animations or AI-looking gradients
- White background with strong typography (Academic mode)
- Responsive for mobile, tablet, and desktop
- No fake publications — only works in preparation are listed
- Easy to maintain — edit markdown-like TypeScript data files

## License

MIT — feel free to use this as a template for your own academic homepage.