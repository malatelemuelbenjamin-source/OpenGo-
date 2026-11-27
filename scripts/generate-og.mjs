/**
 * Generates public/og-image.png (1200x630) for Open Graph / social previews.
 *
 * Usage: node scripts/generate-og.mjs
 * Requires the optional `sharp` package: npm install --no-save sharp
 */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0d2a4c"/>
      <stop offset="0.55" stop-color="#08182b"/>
      <stop offset="1" stop-color="#04101f"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.82" cy="0.12" r="0.65">
      <stop offset="0" stop-color="#2f74f5" stop-opacity="0.45"/>
      <stop offset="1" stop-color="#2f74f5" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M60 0H0V60" fill="none" stroke="#ffffff" stroke-opacity="0.05" stroke-width="1"/>
    </pattern>
    <linearGradient id="accentText" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#8ec2ff"/>
      <stop offset="1" stop-color="#cfe4ff"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- Logo mark -->
  <g transform="translate(88 78)">
    <rect width="64" height="64" rx="17" fill="#ffffff"/>
    <path d="M20 48V22a6 6 0 0 1 6-6h12a6 6 0 0 1 6 6v26" fill="none" stroke="#1449c4" stroke-width="4.4" stroke-linecap="round"/>
    <path d="M31 26v8.6" stroke="#1449c4" stroke-width="4.4" stroke-linecap="round"/>
    <circle cx="46" cy="19" r="6" fill="#12a877" stroke="#ffffff" stroke-width="2.6"/>
  </g>

  <text x="170" y="106" font-family="Plus Jakarta Sans, Segoe UI, Helvetica, Arial, sans-serif" font-size="23" font-weight="700" letter-spacing="3" fill="#ffffff">OPENNOW</text>
  <text x="170" y="134" font-family="Plus Jakarta Sans, Segoe UI, Helvetica, Arial, sans-serif" font-size="14" font-weight="600" letter-spacing="7" fill="#9cc3ff">GOVERNMENT</text>

  <!-- Headline -->
  <text x="88" y="292" font-family="Plus Jakarta Sans, Segoe UI, Helvetica, Arial, sans-serif" font-size="66" font-weight="800" letter-spacing="-2.5" fill="#ffffff">Know before</text>
  <text x="88" y="366" font-family="Plus Jakarta Sans, Segoe UI, Helvetica, Arial, sans-serif" font-size="66" font-weight="800" letter-spacing="-2.5" fill="url(#accentText)">you go.</text>

  <text x="90" y="424" font-family="Plus Jakarta Sans, Segoe UI, Helvetica, Arial, sans-serif" font-size="24" fill="#c3d8f2">Check office hours, official availability and</text>
  <text x="90" y="460" font-family="Plus Jakarta Sans, Segoe UI, Helvetica, Arial, sans-serif" font-size="24" fill="#c3d8f2">service schedules in Marinduque.</text>

  <rect x="90" y="506" width="52" height="4" rx="2" fill="#12a877"/>
  <text x="158" y="516" font-family="Plus Jakarta Sans, Segoe UI, Helvetica, Arial, sans-serif" font-size="17" font-weight="600" letter-spacing="1.6" fill="#8fb6e6">A BETTERGO MARINDUQUE INITIATIVE</text>

  <!-- Phone card -->
  <g transform="translate(792 96)">
    <rect width="322" height="438" rx="40" fill="#ffffff" fill-opacity="0.06" stroke="#ffffff" stroke-opacity="0.18" stroke-width="2"/>
    <rect x="16" y="16" width="290" height="406" rx="28" fill="#f7fafd"/>

    <text x="40" y="58" font-family="Plus Jakarta Sans, Segoe UI, Helvetica, Arial, sans-serif" font-size="15" font-weight="700" fill="#0d1b2c">Municipal Hall</text>
    <rect x="236" y="42" width="46" height="22" rx="11" fill="#e6f7ef"/>
    <circle cx="248" cy="53" r="3" fill="#0b8a5f"/>
    <text x="256" y="58" font-family="Plus Jakarta Sans, Segoe UI, Helvetica, Arial, sans-serif" font-size="10" font-weight="700" fill="#07714e">OPEN</text>

    <rect x="40" y="76" width="242" height="58" rx="12" fill="#eef4ff"/>
    <text x="54" y="99" font-family="Plus Jakarta Sans, Segoe UI, Helvetica, Arial, sans-serif" font-size="11" fill="#5c6c82">Monday – Friday</text>
    <text x="54" y="120" font-family="Plus Jakarta Sans, Segoe UI, Helvetica, Arial, sans-serif" font-size="14" font-weight="700" fill="#0d1b2c">8:00 AM – 5:00 PM</text>

    <g font-family="Plus Jakarta Sans, Segoe UI, Helvetica, Arial, sans-serif">
      <text x="40" y="171" font-size="13" font-weight="600" fill="#34435a">Office of the Mayor</text>
      <rect x="204" y="155" width="78" height="22" rx="11" fill="#fff4e2"/>
      <text x="216" y="170" font-size="9" font-weight="700" fill="#8a5309">OUT OF OFFICE</text>

      <line x1="40" y1="192" x2="282" y2="192" stroke="#e3e9f2"/>

      <text x="40" y="219" font-size="13" font-weight="600" fill="#34435a">Municipal Treasurer</text>
      <rect x="204" y="203" width="78" height="22" rx="11" fill="#eef4ff"/>
      <text x="216" y="218" font-size="9" font-weight="700" fill="#1449c4">AVAILABLE</text>

      <line x1="40" y1="240" x2="282" y2="240" stroke="#e3e9f2"/>

      <text x="40" y="267" font-size="13" font-weight="600" fill="#34435a">Civil Registrar</text>
      <rect x="190" y="251" width="92" height="22" rx="11" fill="#fdecec"/>
      <text x="202" y="266" font-size="9" font-weight="700" fill="#a02c2c">UNAVAILABLE</text>
    </g>

    <rect x="40" y="292" width="242" height="58" rx="12" fill="#ffffff" stroke="#e3e9f2"/>
    <text x="56" y="313" font-family="Plus Jakarta Sans, Segoe UI, Helvetica, Arial, sans-serif" font-size="9" font-weight="700" letter-spacing="1" fill="#5c6c82">EXPECTED RETURN</text>
    <text x="56" y="334" font-family="Plus Jakarta Sans, Segoe UI, Helvetica, Arial, sans-serif" font-size="14" font-weight="700" fill="#0d1b2c">4:00 PM</text>

    <text x="40" y="386" font-family="Plus Jakarta Sans, Segoe UI, Helvetica, Arial, sans-serif" font-size="9" fill="#8494a9">Illustrative preview — sample data</text>
  </g>
</svg>`;

await mkdir(resolve(root, "public"), { recursive: true });
const png = await sharp(Buffer.from(svg)).png({ quality: 92 }).toBuffer();
await writeFile(resolve(root, "public/og-image.png"), png);
console.log(`Wrote public/og-image.png (${(png.length / 1024).toFixed(0)} KB)`);
