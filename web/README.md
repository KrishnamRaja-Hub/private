# AI CS Sub Committee page (rebit.org.in)

An Angular 21 page for ReBIT's AI CS Sub Committee, built to drop into the
rebit.org.in Angular app and look identical to the rest of the site.

## Run the preview

```bash
npm ci
npx ng serve              # dev server: http://localhost:4200/committee-members/ai-cs-subcommittee
# or the production build:
npx ng build && node scripts/serve.mjs 4300
```

In the preview, links to other ReBIT pages go to https://rebit.org.in (`src/environments/environment.ts`).

## What is on the page

| Section | Live pattern reused | Content source |
|---|---|---|
| Hero: breadcrumb, title, KPI strip | `/our-story` hero + `app-hero-kpi-strip` | deck slides 5, 6, 21, 23 |
| Mandate statement (word-by-word highlight) | `/our-story` "what is" statement | deck slide 6 |
| Meet the Committee: cards + profile modal | `/leadership` director cards and modal | rebit.org.in names, titles, photos, bios (verbatim) |
| Scope of Responsibilities | `/services/ai-enterprise` overview check-points | deck slide 5 |
| Responsible AI in Practice: 7 FREE-AI Sutras | `/our-story` timeline rail | deck slide 21 |
| 12 Controls Traceable to FREE-AI | `/services/ai-enterprise` service portfolio cards | deck slide 23 |
| Previous / Next | `app-page-navigation` | Committee Members ← → CSR |

Smt. Darshana Kulkarni has no photograph or bio on rebit.org.in, so her card uses initials,
as `/committee-members` does. To add a photo, put `darshana-kulkarni.webp` (720×525) and
`darshana-kulkarni-banner.webp` in `public/assets/people/` and set `photo`, `banner` and `bio`
in `committee-members.data.ts`.

## How it matches the live site

- Same stack: Angular 21.2 with Zone.js, plus the site's Bootstrap 5 global stylesheet.
- Component CSS is the live site's own component CSS, with the Angular scope attributes
  stripped so this app's encapsulation re-scopes it (`header.css`, `footer.css`,
  `breadcrumb.css`, `page-navigation.css`, `cs-ai-governance.css` from `/leadership`,
  `story-patterns.css` from `/our-story`, `ai-patterns.css` from `/services/ai-enterprise`).
  Page-only additions are in small separate files, each marked with a comment.
- Self-hosted fonts and images, the same files the site serves (`public/assets`, `public/media`).
- Checked against the live site at 1440 and 390px: the nav bar is pixel-identical, and every
  footer element has the same position and size.

## Motion (GSAP, kept minor)

`src/app/shared/gsap.service.ts` registers ScrollTrigger once, runs animations outside
Angular's zone, scopes each setup to its component, reverts it on destroy, and gives every
setup a `prefers-reduced-motion` branch (everything shown, nothing moving). GSAP is used in
three places, each matching motion the live site already has:

1. Hero entrance: copy fades up, KPI tiles rise with an 80 ms stagger from 250 ms.
2. Mandate statement: words darken and the phrase lights up as you scroll, then the accent rule fills (ScrollTrigger scrub).
3. FREE-AI timeline: the rail fills with the scroll, and each row gets the site's `.animated` class (dot pops, line grows) as it enters (ScrollTrigger.batch).

Hovers, the profile modal and the menus use the site's own CSS transitions.

## Merging into rebit.org.in

1. Copy `src/app/pages/cs-ai-governance/` and `src/app/shared/gsap.service.ts` into the site app; add `gsap@3.15.1`.
2. Add the route `committee-members/ai-cs-subcommittee` (lazy `loadComponent`, see `app.routes.ts`).
3. Use the site's own `app-breadcrumb` and `app-page-navigation`. The copies in `src/app/shared/` match their markup.
4. Set `environment.siteOrigin` to `''`, or drop `SiteUrlPipe` and use `routerLink`.
5. Copy `public/assets/people/*` into the site's assets, or upload them to the CMS.
6. Optionally link the page from `/committee-members` and the "Leadership" mega-menu group.
