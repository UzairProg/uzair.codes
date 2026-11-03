# uzair.codes

Uzair Mohammad's personal portfolio, a single-page site built with React, Vite, and Tailwind CSS, covering experience, projects, 12+ hackathon wins, tech stack, and a contact form.

## Sections

- **Home**: intro, resume, and social links.
- **Experience**: a scroll-synced timeline; each entry lights up as you read it.
- **Projects**: led by DripCheck, a store's POS extended into a synced e-commerce storefront on one shared inventory, with stock holds and race-safe checkout, plus a grid of other selected and GitHub projects.
- **Tech stack**: a pinned-scroll showcase of the tools used day to day.
- **Achievements**: hackathon wins and awards.
- **Contact**: a form backed by Supabase.

## Running locally

```bash
npm ci
npm run dev
```

Then open `http://localhost:5173`.

Other scripts:

```bash
npm run build    # production build to dist/
npm run lint     # ESLint
npm run preview  # preview the production build
```

## Environment variables

The contact form uses Supabase. Create a `.env.local` (never committed) with:

```
VITE_SUPABASE_URL=your-supabase-project-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

For local work without real credentials, any placeholder values will let the app boot; the contact form just won't actually submit.
