/**
 * Builds the deployable site from the single shared page source.
 *
 * `src/page.html` is written to the Claude Artifact contract: no doctype,
 * <html>, <head> or <body> of its own, because the Artifact host supplies
 * that wrapper. This script supplies an equivalent wrapper for the real
 * marcolamberti.com deployment, plus everything a public site needs that an
 * Artifact does not: canonical URL, Open Graph and Twitter cards, and
 * LocalBusiness / Person structured data.
 *
 * Keeping one source means the shared link and the live site never drift.
 *
 *   node scripts/build.mjs
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const SITE = {
  origin: 'https://www.marcolamberti.com',
  name: 'Marco Lamberti',
  business: 'Marco Lamberti Decorative Painting',
  title:
    'Marco Lamberti — Muralist & Decorative Painter, Los Angeles',
  description:
    'Italian-trained muralist and decorative painter in Los Angeles. ' +
    'Trompe-l’œil, painted ceilings, Venetian plaster, gilding, faux marble and ' +
    'bas-relief for homes, restaurants and commercial interiors. Restoration of ' +
    'existing decorative work. Over 150 projects across Southern California.',
  phone: '+1-310-594-6217',
  phoneDisplay: '310 594-6217',
  email: 'artnmotion54@yahoo.com',
  locality: 'Los Angeles',
  region: 'CA',
  country: 'US',
  ogImage: '/assets/og.jpg',
  themeDark: '#101a18',
  themeLight: '#e5e0d4'
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
      '@id': `${SITE.origin}/#business`,
      name: SITE.business,
      alternateName: SITE.name,
      url: SITE.origin,
      image: `${SITE.origin}${SITE.ogImage}`,
      telephone: SITE.phone,
      email: SITE.email,
      priceRange: '$$$',
      description: SITE.description,
      address: {
        '@type': 'PostalAddress',
        addressLocality: SITE.locality,
        addressRegion: SITE.region,
        addressCountry: SITE.country
      },
      areaServed: [
        { '@type': 'City', name: 'Los Angeles' },
        { '@type': 'City', name: 'Beverly Hills' },
        { '@type': 'City', name: 'Malibu' },
        { '@type': 'City', name: 'San Diego' },
        { '@type': 'AdministrativeArea', name: 'Los Angeles County' },
        { '@type': 'AdministrativeArea', name: 'Orange County' },
        { '@type': 'AdministrativeArea', name: 'Southern California' }
      ],
      founder: { '@id': `${SITE.origin}/#marco` },
      knowsAbout: [
        'Trompe-l’œil murals',
        'Fresco and ceiling painting',
        'Grisaille',
        'Venetian plaster (marmorino)',
        'Strié and glazed finishes',
        'Gilding',
        'Faux marble and faux stone',
        'Bas-relief',
        'Decorative patina and aged finishes',
        'Restoration of decorative painting and murals'
      ],
      makesOffer: [
        'Hand-painted murals',
        'Trompe-l’œil architecture',
        'Painted and frescoed ceilings',
        'Venetian plaster and glazed wall finishes',
        'Faux marble and faux wood',
        'Gilding and gold leaf',
        'Bas-relief ornament',
        'Aged and patinated finishes on doors, panelling and garden objects',
        'Restoration of existing murals and decorative finishes',
        'Decorative painting for restaurants and commercial interiors'
      ].map((name) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name, serviceType: name }
      }))
    },
    {
      '@type': 'Person',
      '@id': `${SITE.origin}/#marco`,
      name: 'Marco Zanardi Lamberti',
      alternateName: 'Marco Lamberti',
      jobTitle: 'Muralist and decorative painter',
      birthPlace: { '@type': 'Place', name: 'Mantova, Lombardy, Italy' },
      nationality: { '@type': 'Country', name: 'Italy' },
      homeLocation: { '@type': 'Place', name: 'Los Angeles, California' },
      telephone: SITE.phone,
      email: SITE.email,
      url: SITE.origin,
      image: `${SITE.origin}/assets/marco-lamberti-portrait.webp`,
      worksFor: { '@id': `${SITE.origin}/#business` }
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE.origin}/#website`,
      url: SITE.origin,
      name: SITE.business,
      inLanguage: 'en-US',
      publisher: { '@id': `${SITE.origin}/#business` }
    }
  ]
};

const head = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">

<title>${SITE.title}</title>
<meta name="description" content="${SITE.description}">
<link rel="canonical" href="${SITE.origin}/">

<meta name="author" content="${SITE.name}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="geo.region" content="US-CA">
<meta name="geo.placename" content="Los Angeles">

<meta name="color-scheme" content="dark light">
<meta name="theme-color" content="${SITE.themeDark}" media="(prefers-color-scheme: dark)">
<meta name="theme-color" content="${SITE.themeLight}" media="(prefers-color-scheme: light)">

<!-- Open Graph: this is what a link looks like when it is texted or posted -->
<meta property="og:type" content="website">
<meta property="og:site_name" content="${SITE.business}">
<meta property="og:locale" content="en_US">
<meta property="og:url" content="${SITE.origin}/">
<meta property="og:title" content="${SITE.title}">
<meta property="og:description" content="${SITE.description}">
<meta property="og:image" content="${SITE.origin}${SITE.ogImage}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="A hallway painted as an open loggia, with a peacock perched above the doorway.">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${SITE.title}">
<meta name="twitter:description" content="${SITE.description}">
<meta name="twitter:image" content="${SITE.origin}${SITE.ogImage}">

<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">

<script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
</script>

<style>
  /* Equivalent of the reset the Artifact host injects, so the shared link
     and the deployed site render identically. */
  :root{
    padding-top: env(safe-area-inset-top, 0px);
    padding-bottom: env(safe-area-inset-bottom, 0px);
    color-scheme: dark light;
  }
  body{ margin:0; }
  img{ max-width:100%; }
  [hidden]{ display:none !important; }
</style>
`;

const page = await readFile(resolve(root, 'src/page.html'), 'utf8');

// The page source opens with its own <title> for the Artifact host; the
// deployed document already has a fuller one in <head>, so drop that line.
const body = page.replace(/^\s*<title>[^<]*<\/title>\s*/i, '');

const html = `${head}</head>
<body>
${body}
</body>
</html>
`;

await mkdir(resolve(root, 'site'), { recursive: true });
await writeFile(resolve(root, 'site/index.html'), html, 'utf8');

await writeFile(
  resolve(root, 'site/robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE.origin}/sitemap.xml\n`,
  'utf8'
);

const today = new Date().toISOString().slice(0, 10);
await writeFile(
  resolve(root, 'site/sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE.origin}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`,
  'utf8'
);

console.log(`built site/index.html  (${(html.length / 1024).toFixed(1)} KB)`);
console.log('built site/robots.txt, site/sitemap.xml');
