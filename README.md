# uzair.codes

Uzair Mohammad's personal portfolio, a single-page site built with React, Vite, and Tailwind CSS, covering experience, projects, 12+ hackathon wins, tech stack, and a contact form.

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
