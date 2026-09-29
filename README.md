# Arkadiusz Sarach — portfolio

One-page portfolio (Polish): business apps, process automation and AI tools.
Live: https://my-portoflio-mu.vercel.app

## Stack

Next.js 16 (App Router, static), React 19, Tailwind CSS 4, Geist font, Vercel Analytics.
No UI or animation libraries — components live in `src/components`.

## Commands

| Task        | Command                                                                                              |
| ----------- | ---------------------------------------------------------------------------------------------------- |
| Install     | `npm ci`                                                                                             |
| Dev server  | `npm run dev` → http://localhost:3000                                                                |
| Lint        | `npm run lint`                                                                                       |
| Tests       | `npm test`                                                                                           |
| Build       | `npm run build`                                                                                      |
| Screenshots | `npm run build && npm run start`, then `npm run screenshots` (needs local Chrome or `CHROMIUM_PATH`) |

Requires Node >= 20.9.

## Where things are

| What                                        | File                                                           |
| ------------------------------------------- | -------------------------------------------------------------- |
| All page texts                              | `src/content/pl.js`                                            |
| Projects (visibility, order, status, links) | `src/data/projects.js`                                         |
| Technologies                                | `src/data/technologies.js`                                     |
| Colors and fonts                            | `@theme` in `src/app/globals.css`                              |
| Author photo                                | `about.photo` in `src/content/pl.js`                           |
| Project screenshots                         | `public/projects/<slug>.webp` + `image` field in `projects.js` |

## Adding or changing a project

- Add an entry to `src/data/projects.js` (fields are documented at the top of the file).
- `group`: `main`, `casual` or `course`; `order` sets the position inside the group.
- `status: "archived"` keeps the project visible with an "Archiwum" label at the end of its group.
- `visible: false` hides it everywhere.
- `repo: null` shows "Kod prywatny — pokażę na rozmowie"; public repos must be listed in `src/data/projects.test.js`.
- `image: null` renders a placeholder tile.
- Run `npm test` — it checks required fields, unique slugs, image paths and repo links.
