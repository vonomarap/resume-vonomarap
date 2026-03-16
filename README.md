# Vlad Resume Website

Modern personal resume website for an entry-level Java / Spring backend developer, delivered as a frontend-only React application.

## Architecture

- `frontend/` is the full website.
- All portfolio content is stored in frontend data/config files.
- The contact form validates in the browser and opens a pre-filled email draft through `mailto:`.
- No backend, database, Docker, or API layer is used anymore.

## Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- shadcn-style UI primitives
- Framer Motion
- react-hook-form
- zod
- lucide-react

## Run Locally

```bash
cd frontend
npm install
npm run dev
```

The site runs on `http://localhost:5173`.

## Files To Edit Later

### Main content

- `frontend/src/data/profile.ts`
- `frontend/src/data/skills.ts`
- `frontend/src/data/projects.ts`
- `frontend/src/data/education.ts`
- `frontend/src/data/contact.ts`

### Resume file

- `frontend/public/Vlad-Junior-Java-Backend-Developer-Resume.pdf`

### Contact form behavior

- `frontend/src/sections/contact-section.tsx`
- `frontend/src/lib/contact.ts`

## Contact Form

- The form validates name, email, and message on the client.
- After successful validation, it opens the user's email client with a pre-filled message draft.
- Direct links for email, Telegram, GitHub, and LinkedIn remain available in the contact section.
