# Xether AI — Public Website

Brutalist Next.js website for the Xether AI platform.

## Design Principles

- **Minimal**: Essential information only. No decoration.
- **High contrast**: Black and white with single accent color.
- **Typography**: Large headings, rigid hierarchy, system fonts.
- **Geometry**: Sharp edges, consistent grids, precise spacing.
- **Functional motion**: State changes only. No decoration.
- **Accessibility**: WCAG AA compliant. Keyboard navigation. Screen reader support.

## Structure

```
/                 Homepage with features overview
/features         Detailed feature breakdown
/docs             Documentation and guides
/api              API reference
```

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- System fonts (no custom fonts)

## Color System

- Background: `#ffffff`
- Foreground: `#000000`
- Accent: `#0000ff`
- Muted: `#666666`

## Spacing Scale

Consistent 8px base unit. All spacing uses multiples of 8.

## Components

- `Header`: Navigation bar
- `Footer`: Site footer
- `Button`: Primary/secondary buttons
- `Card`: Content cards
- `CodeBlock`: Code examples

## Performance

- Static generation where possible
- Minimal JavaScript
- No external fonts
- Optimized images
- Fast page loads