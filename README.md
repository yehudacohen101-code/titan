# marcolamberti.com

A rebuild of the website for **Marco Lamberti**, an Italian-trained muralist and
decorative painter working in Los Angeles.

The live site today is a Wix page whose homepage shows no artwork at all. This
repo is a static replacement: one page, no build dependencies, ~1.7 MB total,
that leads with the work.

## Layout

```
src/page.html        the whole site — markup, CSS and JS in one file
scripts/build.mjs    wraps src/page.html into site/index.html with the <head>
site/index.html      generated — do not edit by hand
site/assets/*.webp   artwork, recovered from the live site and re-processed
site/assets/og.jpg   1200×630 share card
site/robots.txt      generated
site/sitemap.xml     generated
```

`src/page.html` is written without its own `<!doctype>`, `<html>`, `<head>` or
`<body>`, because it doubles as a Claude Artifact (which supplies that wrapper).
`scripts/build.mjs` supplies an equivalent wrapper for the public deployment,
plus the things a real site needs and an Artifact does not: canonical URL, Open
Graph and Twitter cards, and `LocalBusiness` / `Person` structured data.

One source, so the shared link and the deployed site cannot drift apart.

## Build

```sh
node scripts/build.mjs      # no dependencies, Node 18+
```

Then deploy `site/` to any static host (Netlify, Cloudflare Pages, GitHub Pages,
S3). Point the `marcolamberti.com` DNS at it and the Wix site can be retired.

To preview locally:

```sh
npx http-server site -p 8080
```

## What changed, and why

| Before | After |
| --- | --- |
| Homepage showed a green background, a logo and a nav bar — no artwork | Full-bleed hero on the strongest mural, with a positioning line and two CTAs |
| No meta description; murals page lived at `/blank` | Full `<head>`: title, description, canonical, OG/Twitter cards, JSON-LD |
| "Los Angeles" appeared nowhere, despite a 310 number | Locality in the copy, `LocalBusiness` schema, `areaServed`, `geo` tags |
| Celebrity clients buried in paragraph 3 of the About page | Their own section, and Danny Elfman's name spelled correctly |
| Captions read `IMG_5219`, `faux finish on walls 1` | Every piece titled, categorised and described by technique and room |
| Work split into "Paintings" / "Faux finish" — with murals in both | Regrouped by what a client actually commissions: murals, finishes, studio |
| No call to action anywhere | `tel:` and `mailto:` with a pre-filled enquiry template, copy-to-clipboard |
| Dead "Show More" button | Working filters and a keyboard-navigable lightbox |
| Bio had typos throughout ("nobel man", "carrier", "he blossoms as a sculpture") | Rewritten, same facts, plus a timeline of Mantova → Verona → Ischia → Paris → LA |
| Sharing the link produced a blank card | 1200×630 share card rendered from the peacock mural |

## Design

Dark-first, on the green-black of the painted sky in *Peacock Entry*; the accent
is that mural's peacock blue. The light theme is a limewashed plaster, not cream.
Display type is **Bodoni Moda** — Giambattista Bodoni worked in Parma, a short
way from Marco's Mantova — set against **Archivo** for everything else.

Both themes are defined as tokens on bare `:root`, redefined under
`prefers-color-scheme` and again under `[data-theme]`, so the in-page toggle wins
in both directions.

## Known gaps

These need Marco, not code:

1. **Photography.** Several pieces survive only as ~300 px scans of old prints
   (marked *Archive photo* on the page). No amount of front-end work fixes that.
   A half-day shoot of three or four finished rooms would do more for this site
   than anything in this repo.
2. **No testimonials.** None were invented. Three sentences from a designer he
   has worked with would carry more weight than the client list.
3. **No pricing or scope signal.** Not even a "commissions typically start at…".
   Visitors self-select on price whether or not you help them.
4. **`artnmotion54@yahoo.com`.** Fine for twenty years of word of mouth; a weak
   signal on a page quoting five figures. `marco@marcolamberti.com` costs a few
   dollars a month.
5. **Client names are unverified.** They are reproduced from Marco's own About
   page. High-end residential work often carries an NDA — worth confirming
   before this goes live.
6. **No dates or locations per project.** "Beverly Hills, 2004" on each piece
   would add a great deal of credibility.
7. **No contact form.** The page uses `tel:` and `mailto:` deliberately — a
   static site cannot process a form. If a form is wanted, a hosted endpoint
   (Formspree, Netlify Forms) can be added in the build.
