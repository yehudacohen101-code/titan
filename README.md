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
site/assets/marco-fresco.mp4   25s film — painting a Madonna on a stone wall
site/assets/marco-*.mp4        four more films of recent work (+ .webp posters)
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
| Celebrity clients named in paragraph 3 of the About page | Removed — Marco confirmed he has no permission to use those names |
| Captions read `IMG_5219`, `faux finish on walls 1` | Every piece titled, categorised and described by technique and room |
| Work split into "Paintings" / "Faux finish" — with murals in both | Regrouped by what a client actually commissions: murals, finishes, studio |
| No call to action anywhere | `tel:` and `mailto:` with a pre-filled enquiry template, copy-to-clipboard |
| Dead "Show More" button | Working filters and a keyboard-navigable lightbox |
| Bio had typos throughout ("nobel man", "carrier", "he blossoms as a sculpture") | Rewritten, same facts, plus a timeline of Mantova → Verona → Ischia → Paris → LA |
| Sharing the link produced a blank card | 1200×630 share card rendered from the peacock mural |
| No video anywhere | Five films: the Madonna fresco in its own section, four more in the gallery |
| Gallery was all 2001–2006 work | A "Recent work" group leading the gallery — current commercial, restaurant and residential jobs |
| Nav vanished below 860px; tap targets as small as 18px | Scrollable nav rail, every touch target ≥44px, fixed Call/Email bar within thumb reach |

## The film

`site/assets/marco-fresco.mp4` is cut from a 43s phone video of Marco painting a
Madonna on the exterior wall of a stone building in Switzerland in 2023, both
confirmed by Marco (the canton is still unknown). The edit:

- trimmed 11.0s–42.5s, dropping the long approach and the black tail
- stabilised in two passes with `vidstab` (it was shot walking, handheld)
- the walk-up (11–22s) runs at 2.2×, the painting at real time, joined by a
  0.5s crossfade, with fades at both ends
- denoised with `hqdn3d` — WhatsApp compression noise was costing ~1MB
- audio stripped: the page autoplays it muted, which is the only way browsers
  allow autoplay, and the track was wind on a phone mic
- H.264 High/L4.0, yuv420p, faststart, 25.1s, 2.7MB

It autoplays muted and loops, but only when the viewer has not asked for
reduced motion, and only while on screen. If autoplay is refused the poster
holds and the button offers play.

Four more films sit in the gallery's "Recent work" group: polished plaster on a
curved commercial wall (Beverly Hills), a meadow band painted round a bathroom
(Pacific Palisades), a blossom tree up a staircase (Pacific Palisades) and a
restaurant's wood and textured walls (Manhattan Beach) — all four from 2026.

The Swiss fresco is kept for what it proves about the hand, not as a claim of
availability: Marco says it was a one-off and he wants the work kept in
Southern California, so the film section says so and the biography timeline
still ends in Los Angeles. All five sources
carried `rotation=-90` metadata — they are portrait, not the landscape their
stored frames suggest, and one early encode forced them the wrong way round
before that was caught.

The restaurant clip is cut differently from the rest. The source is 39s of a
full dining room, so it is reduced to three shots of the surfaces themselves —
bar cladding, cabinetry, textured wall — and the last is cropped to lift
diners out of frame. Nobody identifiable appears in it.

Gallery films are poster-only until opened: the tiles are images, and the
lightbox `<video>` carries `preload="none"` with its `src` set on demand. A
phone loads about 130KB of posters, and downloads a film only if someone taps
one.

## Mobile

The header stops being sticky below 860px and a fixed Call / Email bar takes
over — a two-row pinned header costs an eighth of a phone screen on a site
whose job is showing pictures, and a thumb-reachable call button converts
better than one at the top. The nav becomes a scrollable rail, the header CTA
is dropped as a duplicate of the bottom bar, and a closing block at the end of
the stylesheet lifts every control to a 44px touch target.

Checked at 390, 768 and 1440: no horizontal overflow at any width.

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
3. **Pricing looks low.** Marco prices at $500/day internally and quotes a fixed
   total. Specialty finish work in this market runs ~$537–963/day, and
   trompe-l'œil is commonly $35–150/sq ft. The site deliberately publishes no
   day rate — quoting per job is right — but the number behind it should rise.
4. **`artnmotion54@yahoo.com`.** Fine for twenty years of word of mouth; a weak
   signal on a page quoting five figures. `marco@marcolamberti.com` costs a few
   dollars a month.
5. **No contractor's licence, no liability insurance.** Marco holds neither. In
   California a C-33 is required once labour and materials reach $1,000, and
   under B&P §7031 an unlicensed contractor cannot sue to collect payment and
   can be ordered to refund everything already paid. Nothing on the site claims
   either credential. This is the biggest open risk and it is not a web problem.
6. **Dates and locations on the older work.** The 2026 pieces, the Swiss fresco
   and two older murals are placed and dated. The remaining twelve — the
   historical murals, finishes and studio paintings — still carry no year or
   city, which is the last credibility gap in the gallery.
7. **No contact form.** The page uses `tel:` and `mailto:` deliberately — a
   static site cannot process a form. If a form is wanted, a hosted endpoint
   (Formspree, Netlify Forms) can be added in the build.
