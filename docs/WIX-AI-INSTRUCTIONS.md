# Rebuilding marcolamberti.com with Wix AI

Everything needed, in order. This file is self-contained — you can do the whole
build from it without opening anything else.

---

## Read this first

**Wix's AI builder creates new sites only.** It cannot rebuild marcolamberti.com
in place. So this makes a *second* Wix site and the domain moves to it at the
end. Keep the current site published the whole time.

**It will not reproduce the page that was built.** Expect to lose the lightbox,
the gallery filters, the light/dark toggle and the load-on-tap videos. What you
keep is the part that matters: the work on the homepage, real captions with
cities and years, the films, and a site that reads as current.

---

## Step 0 — Upload the media FIRST

29 files, about 10 MB, in the zip that came with this. All of it goes into
**Media Manager** before you prompt the AI — the file names in the prompts below
are meaningless until they are uploaded.

Video is not a constraint: Wix allows 30 minutes free and 15 GB per file. These
five films total about 90 seconds.

| File | Use it as | Caption to type under it |
| --- | --- | --- |
| `peacock-entry.webp` | **Homepage hero**, full width | Peacock Entry — Trompe-l'œil entrance hall, Pacific Palisades, 2006. 12 days. |
| `marco-fresco.mp4` | **Its own section** below the hero. Autoplay, muted, loop | Switzerland, 2023. Painting a Madonna freehand on a stone wall — no projector, no transfer. |
| `marco-meadow.mp4` | Gallery — Recent work | Meadow Bathroom — Pacific Palisades, 2026 |
| `marco-staircase.mp4` | Gallery — Recent work | Blossom Staircase — Pacific Palisades, 2026 |
| `staircase-blossom.webp` | Gallery — Recent work | Blossom Staircase, finished — Pacific Palisades, 2026 |
| `marco-plaster.mp4` | Gallery — Recent work | Curved Wall in Plaster — commercial interior, Beverly Hills, 2026 |
| `marco-restaurant.mp4` | Gallery — Recent work | Restaurant Wood & Walls — Manhattan Beach, 2026 |
| `aged-oak-dining-room.webp` | Gallery — Decorative finishes | Limewashed Dining Room |
| `plaster-living-room.webp` | Gallery — Decorative finishes | Two-Storey Living Room |
| `veined-plaster.webp` | Gallery — Decorative finishes | Veined Plaster |
| `patinated-urn.webp` | Gallery — Decorative finishes | Patinated Urn |
| `urns-in-progress.webp` | Gallery — Decorative finishes | Urns in Progress |
| `garden-loggia.webp` | Gallery — Murals & trompe-l'œil | Garden Loggia |
| `ceiling-fresco.webp` | Gallery — Murals & trompe-l'œil | Ceiling with Figures |
| `rinascimento-doors.webp` | Gallery — Murals & trompe-l'œil | Rinascimento Doors |
| `rose-strapwork-ceiling.webp` | Gallery — Murals & trompe-l'œil | Rose Strapwork Ceiling — Beverly Hills, 2001. 7 days. |
| `vignette-romane-i.webp` | Gallery — Studio paintings | Vignette Romane I |
| `vignette-romane-iii.webp` | Gallery — Studio paintings | Vignette Romane III |
| `vignette-romane-iv.webp` | Gallery — Studio paintings | Vignette Romane IV |
| `egyptian-trip.webp` | Gallery — Studio paintings | Egyptian Trip |
| `i-miei-pensieri.webp` | Gallery — Studio paintings | I Miei Pensieri |
| `marco-lamberti-portrait.webp` | Beside the biography | Marco Lamberti · Los Angeles |
| `og.jpg` | **Social share image**, not a page image | Page settings → Social Share. Already 1200×630. |

Mark the whole Studio paintings group **"Not for sale."**

The five `*-poster.webp` files are still frames for the films. Wix makes its own
thumbnails — use these only if the one it picks is poor.

---

## Step 1 — Create the site

**Create New Site** → build with AI. Paste this into the first box:

```
A one-man decorative painting studio in Los Angeles. Marco Lamberti is an
Italian-trained muralist who paints trompe-l'œil murals, ceilings, Venetian
plaster, gilding, faux marble and bas-relief by hand, on site — and restores
existing murals and decorative work. He trained in Verona and Ischia, worked in
Locarno and Paris, and has worked in Southern California since the 1980s: over
150 projects across private homes, restaurants and commercial interiors, from
Los Angeles to San Diego. Recent jobs include a staircase mural and a bathroom
landscape in Pacific Palisades, a plaster wall in Beverly Hills and a restaurant
in Manhattan Beach, all in 2026.

The site is a portfolio. Its job is to show the work and get interior designers,
architects, restaurateurs and homeowners to call or email about a commission.
Tone: quiet, confident, gallery-like. Not salesy, no exclamation marks, no
stock-photo optimism. Dark background, large photographs and video, elegant
serif headings.
```

---

## Step 2 — Give it the page order

This is the argument the site makes, in sequence. Left to itself the AI builds a
generic services page, so hand it the whole structure at once:

```
Build a single long homepage with these sections in this exact order.

1. HERO — the peacock mural photo, full width, dark overlay so text reads.
Headline: "Rooms that look like somewhere else." Below it: "Marco Lamberti
trained in the Italian decorative tradition — Verona, Ischia, Paris — and has
painted homes, restaurants and commercial interiors across Southern California
since the 1980s." Two buttons: "Discuss a commission" and "See the work".

2. FACT STRIP — four cells across, thin dividing lines, no icons: "150+ projects
completed" / "Since the 1980s in California" / "Homes, restaurants &
commercial" / "LA to San Diego".

3. FILM — the vertical video marco-fresco.mp4 on the left, text on the right.
Autoplay, muted, looping, no controls. Heading: "A wall, a plank, and a palette
in one hand." Body: a Madonna painted freehand on a stone wall in Switzerland in
2023, straight onto the render, from a plank across two trestles — no projector,
no transfer, no grid. Add that the Swiss job was a one-off and the work is in
Southern California. Label the video "Switzerland, 2023".

4. WHAT HE DOES — a short paragraph, then a glossary grid of the trade terms
with one line of definition each: trompe-l'œil, grisaille, marmorino,
bas-relief, strié, doratura (gilding), finto marmo, patina, restauro. Plain
grid, thin rules, no cards or icons.

5. THE WORK — a gallery in four groups, in this order: Recent work (the four
films and the finished-staircase photo, all 2026), Murals & trompe-l'œil,
Decorative finishes, Studio paintings (labelled "not for sale"). Every item gets
a title and a caption naming the technique, the city and the year. Clicking
opens it larger. Videos play on click, not automatically.

6. THE MAKER — the biography beside the portrait, plus a timeline: Mantova →
Verona → Ischia → Locarno & Paris → Los Angeles, 1980s to present. End it in
Los Angeles.

7. TRACK RECORD — four cells: Private homes (Pacific Palisades · Beverly Hills ·
Malibu) / Restaurants / Commercial interiors / Restoration. No client names
anywhere.

8. ENQUIRIES — heading "Tell him about the room." Phone 310 594-6217 as a
tap-to-call link, email artnmotion54@yahoo.com, the service area, and a short
contact form: name, email, phone, "what room and roughly how big", message.

Rules: do not invent testimonials, client names, prices, awards, years or
statistics. Do not add a "Trusted by" or logo strip. Use only the text and
images I give you. Delete every stock photo you add.
```

---

## Step 3 — Set the look

Left alone it picks a bright generic theme. Give it exact values:

```
Colours — page background dark green-black #101A18, raised panels #182523, body
text #ECE9DF, muted text #A7B4AD, accent blue #3F9AB8 for buttons and links,
gold #BB9448 for hairlines and small uppercase labels only.

Type — headings in Bodoni Moda, regular weight, large, tight line spacing. Body
text and buttons in Archivo. Small labels in uppercase with wide letter-spacing.

Layout — 1px rules instead of boxes, drop shadows or cards. No rounded corners
anywhere. No gradients except the dark overlay on the hero photo. Photographs
large, plenty of quiet space around them. Generous margins.

Mobile — must work at 390px wide with no sideways scrolling. Every button and
link at least 44px tall. Put a fixed Call / Email bar at the bottom of the
screen on phones rather than a large sticky header.
```

---

## Step 4 — Strip the filler, paste the real text

The AI writes placeholder copy and picks stock photography. All of it comes out.

**Delete every stock photo.** A picture of someone else's painted wall, on a page
selling Marco's hand, is worse than an empty space.

### Page title (Settings → SEO)

```
Marco Lamberti — Muralist & Decorative Painter, Los Angeles
```

### Meta description

```
Italian-trained muralist and decorative painter in Los Angeles. Trompe-l'œil,
painted ceilings, Venetian plaster, gilding, faux marble and bas-relief for
homes, restaurants and commercial interiors. Restoration of existing decorative
work. Over 150 projects across Southern California.
```

### Biography — replace the current About text entirely

The version on the live Wix site has typos throughout and names four celebrity
clients Marco has **no permission to use**. Those must come off today, whichever
route you take.

```
Marco Zanardi Lamberti was born in Mantova, a città d'arte in Lombardy, and grew
up surrounded by architecture, painting and sculpture. He enrolled at art school
in Verona, where he worked mainly in sculpture and his teachers took to calling
him Maestro.

The third of four sons of a nobleman, he was expected to become an architect or
an engineer. His father did not approve of art school. His mother did — and sent
him south to stay with her brother on Ischia, in the bay of Naples, where he
could keep studying. He took his degree there in fine arts.

He worked next as a painter-decorator and design consultant in Locarno and
Paris. In the 1980s he moved to Los Angeles, which has been home ever since.

He has completed over 150 projects since — private homes, restaurants and
commercial interiors — from Los Angeles down to San Diego. Alongside new work he
restores existing murals and decorative finishes.
```

### Service list — put this as text on the page, it is what makes him findable

```
Trompe-l'œil murals · Painted ceilings · Grisaille panels and ornament ·
Venetian plaster and marmorino · Strié and glazed wall finishes · Gilding and
gold leaf · Faux marble and faux stone · Faux wood and limewashed finishes ·
Bas-relief ornament · Patina and aged finishes on doors, panelling and garden
objects · Restoration of existing murals and decorative work

For private homes, restaurants and commercial interiors. Serving all of Southern
California — the Westside, the Valley, the South Bay, Malibu, Orange County and
San Diego. Working directly with homeowners and restaurateurs, and alongside
interior designers and architects.
```

### Alt text — every image needs one

Wix: click image → Settings → "What's in the image?". Every image on the current
site has an empty alt attribute, which is both an accessibility failure and the
reason none of the artwork appears in image search.

```
Peacock Entry — Entrance hall painted as an open loggia with fluted pilasters, a distant garden, and a peacock on the door pediment.

Garden Loggia — Mural of a formal garden with clipped hedges and cypress seen through a painted arch and balustrade.

Ceiling with Figures — Ceiling painted with a cloud of figures rising, in the Baroque manner.

Rinascimento Doors — Pair of pocket doors painted with four Renaissance grotesque panels in ochre and grey.

Rose Strapwork Ceiling — Ceiling painted with interlacing strapwork radiating from a central rosette, with roses at the corners.

Limewashed Dining Room — Dining room with tall doors and panelling finished to look like pale, aged limewashed oak.

Two-Storey Living Room — Double-height living room with warm, mottled golden plaster walls and a chandelier.

Veined Plaster — Close detail of a warm ochre plaster wall with a fine hand-drawn vein running across it.

Patinated Urn — Large garden urn finished with a chalky, weathered white patina, standing outdoors.

Urns in Progress — Several large planters at different stages of a weathered paint finish, standing outdoors in dappled light.

Vignette Romane I — Watercolour of a dark horned carnival float towering over a crowd in a pale city square.

Vignette Romane III — Watercolour of a crowded tavern scene beneath a Corinthian arch, with a VIVA BACCO banner.

Vignette Romane IV — Watercolour of a Renaissance ball game across a piazza with spectators on balconies.

Egyptian Trip — Painting of four stylised faces gathered beneath a single crimson cloak against a rose ground.

I Miei Pensieri — Pointillist painting of reclining figures in ochre and gold with watching silhouettes behind.

Meadow Bathroom — Bathroom with a painted band of green meadow, cypress and orange wildflowers running around the walls behind a freestanding tub.

Blossom Staircase — Curved staircase with a hand-painted blossoming tree climbing the wall beside it.

Blossom Staircase, finished — Finished staircase wall with a delicate hand-painted blossoming tree beside the banister.

Curved Wall in Plaster — Marco Lamberti on a ladder, troweling plaster onto the curved wall of a modern commercial interior.

Restaurant Wood & Walls — Restaurant interior: wood cabinetry and bar cladding in a warm even tone, beside a mottled turquoise wall.

Fresco film — Marco Lamberti painting a Madonna on the exterior wall of a stone building in Switzerland, seated on a plank with a hand-held palette.
```

---

## Step 5 — Move the domain, then retire the old site

From the **new** site's dashboard: Settings → Domains → assign marcolamberti.com.
Both sites are on Wix, so this is an assignment, not a DNS edit.

Wix deletes custom-code snippets when a site's domain changes, so add any
tracking code **after** the move, not before.

Leave the old site unpublished rather than deleted for a month, in case
something is missing.

---

## The four things Wix AI will fight you on

1. **It will invent proof.** Testimonials, "500+ happy clients", awards, a
   five-star rating. Every one of those is a lie on this site, and that class of
   claim is exactly why the celebrity names had to come off. Delete on sight.
2. **It will lighten the palette.** Generated themes drift toward white and
   bright. Re-apply Step 3 after any regeneration.
3. **It will bury the work.** Its instinct is a text-led services page. The
   photographs and films are the product. If they are not the first thing on
   screen, the site has failed in the same way the current one does.
4. **It will autoplay everything.** One autoplaying film, muted, is right. Five
   is a mobile data bill. Set the gallery videos to play on click.

---

## Still outstanding — these are not website problems

1. **No contractor's licence, no liability insurance.** California requires a
   C-33 once labour and materials reach $1,000. Under B&P §7031 an unlicensed
   contractor cannot sue to collect payment and can be ordered to refund
   everything already paid. Commercial and restaurant clients ask for a licence
   number and a certificate of insurance before letting anyone on site — so this
   is blocking the exact work he is moving toward. Nothing on the site claims
   either credential.
2. **No testimonials.** Nothing on the site is said by anyone except Marco. He
   has four 2026 clients who are warm right now.
3. **Pricing looks low.** $500/day internally against a market of roughly
   $537–963/day for specialty finishes, and $35–150/sq ft for trompe-l'œil.
   Keep quoting a fixed price per job — never publish a day rate — but raise the
   number behind it.
4. **`artnmotion54@yahoo.com`** on a page quoting five figures.
5. **Photography.** Twelve older pieces survive only as ~300px scans. A half-day
   shoot beats everything else on this list.
6. **Dates and locations** are missing on those same twelve older pieces.
