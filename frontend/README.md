# SPArC — React Migration

The Society for Promotion of Art & Culture (Karim City College) website,
migrated from the original static HTML/CSS/JS + Python-assembled build
system to a proper React + Vite + React Router application.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run lint     # oxlint
npm run preview  # preview the production build
```

## What changed from the original site

- **Routing.** The 12 hand-assembled HTML pages are now React Router
  routes. `/clubs/:clubId` and `/events/:eventId` are single dynamic
  routes (not one page per club/event), with a proper not-found state
  for invalid IDs.
- **`build.py` and `assets/_content/*.html` are gone.** That system
  existed only to paste a navbar/footer partial around per-page HTML
  fragments — React Router's nested layout (`PageLayout`) replaces it
  natively; there is nothing left to assemble at build time.
- **JS interactions became React.** Scroll-triggered reveals, staggered
  grid animations, animated counters, the event countdown, the magnetic
  button effect, navbar scroll state, and the scroll-progress bar all
  moved from `main.js`'s DOM queries into small hooks
  (`useInView`, `useCounter`, `useCountdown`, `useMagnetic`,
  `useParallax`, `useScrollState`) used by presentational components.
- **Repeated content became data.** Clubs, events, achievements/timeline,
  team members, news, gallery items, and reports were extracted from
  hardcoded markup into `src/data/*.js` and rendered via `.map()`.
- **Design is preserved, not redesigned.** `assets/css/style.css` was
  reorganized (not rewritten) into `src/styles/{variables,base,layout,
  components,animations}.css`, imported in cascade order via
  `globals.css`. Every rule from the original stylesheet is present.
- **No images were migrated** because `assets/img/` in the source project
  was empty — the original site itself only ever showed styled
  placeholder boxes (`<Media>` component here). Swapping in real photos
  later just means adding `src`/`import` to `Media` — the placeholder's
  aspect-ratio classes already match the final layout.
- **Small, deliberate upgrades**, since the goal was architecture, not a
  redesign: the club/event/gallery/news filter chips are now backed by
  real React state and actually filter (the original chips were static
  markup with no interactivity), and the portal's login/register toggle
  is proper tab state instead of nothing at all.

## Project structure

```
src/
├── components/
│   ├── layout/       Navbar, Footer, PageLayout (route Outlet), PageHero
│   ├── common/        Button, Card, Media, SectionHeader, Reveal, Stagger,
│   │                  Counter, Countdown, FilterBar, Timeline, Pill, ...
│   ├── home/          Sections used only on the homepage
│   ├── clubs/         ClubCard, ClubGrid
│   ├── gallery/        GalleryGrid, GalleryItem
│   ├── achievements/   JourneyTimeline (vertical alternating layout)
│   ├── team/           TeamMemberCard
│   ├── news/            NewsCard
│   └── portal/           PortalHero, RoleCard, LoginForm
├── pages/              One component per route (Home, About, Clubs, ...)
├── data/               Clubs, events, achievements, team, news, gallery,
│                       reports, portal roles — all content, no markup
├── hooks/              useInView, useCounter, useCountdown, useMagnetic,
│                       useParallax, useScrollState
├── styles/              variables → base → layout → components → animations
├── App.jsx              Route table only
└── main.jsx              Entry point
```

### Component responsibility

```
Pages → Sections/one-off page content → Reusable components → Data
```

For example: `Clubs.jsx` → `ClubGrid` → `ClubCard` → `data/clubs.js`.

Not every page needed a dedicated component folder — About, Achievements,
Reports, and the Events pages compose mostly from `components/common`
directly, since their sections aren't reused elsewhere. Adding a
components/events folder with one-off wrappers would have been
abstraction for its own sake.

## Known placeholders

Content that wasn't specified in the original source uses the same
bracket-placeholder convention the source project already used (e.g.
`Prof. [Name]`, `[Club Head] & team`) — search for `[` in `src/data/` to
find and fill these in with real names before launch.
