# Liva Dental

Website for Liva Dental, a fictional dental clinic in South Austin, Texas (portfolio concept project). Built with Next.js (App Router), TypeScript and Tailwind v4.

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
npm run lint
```

## Editing the content

Every string, link, treatment, team member, price and testimonial lives in **`src/lib/config.ts`**, with each text field as an `{ en, sq }` pair. The language toggle and persistence logic is in `src/lib/language.tsx`.

Brand name:

```ts
export const BRAND_NAME = "Liva Dental";
```
