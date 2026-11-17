// Exports the picked icons (owner, Nov 17: "A main + black for dark mode") into assets/images.
// Run from the repo root: node docs/design/icons/export.js
const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright');
const ROOT = path.resolve(__dirname, '../../..');
const IMG = path.join(ROOT, 'assets/images');
const CHUNKY = {
  D: ['111111100', '111111110', '111000111', '111000111', '111000111', '111000111', '111000111', '111111110', '111111100'],
  I: ['111', '111', '111', '111', '111', '111', '111', '111', '111'],
  G: ['011111110', '111111111', '111000000', '111000000', '111001111', '111000111', '111000111', '111111111', '011111110'],
};
function logo(u, color, shadow) {
  let r = '', x0 = 0;
  for (const ch of 'DIGI') {
    CHUNKY[ch].forEach((row, y) => [...row].forEach((on, x) => {
      if (on !== '1') return;
      const X = (x0 + x) * u, Y = y * u;
      if (shadow) r += `<rect x="${X + u * 0.45}" y="${Y + u * 0.45}" width="${u + 0.5}" height="${u + 0.5}" fill="${shadow}"/>`;
      r += `<rect x="${X}" y="${Y}" width="${u + 0.5}" height="${u + 0.5}" fill="${color}"/>`;
    }));
    x0 += CHUNKY[ch][0].length + 1;
  }
  const w = (x0 - 1) * u + u, h = 9 * u + u;
  return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" shape-rendering="crispEdges">${r}</svg>`;
}
const box = (bg, inner) => `<div style="width:1024px;height:1024px;display:flex;align-items:center;justify-content:center;background:${bg}">${inner}</div>`;
const PINK = 'radial-gradient(120% 120% at 30% 20%,#FF8CC6 0%,#FF4FA3 45%,#E62D86 100%)';
const BLACK = 'radial-gradient(110% 110% at 50% 30%,#1E1018 0%,#0B0B0E 70%)';
const FILES = {
  'icon.png': box(PINK, logo(29, '#FFFFFF', '#A3165C')),
  'ios-dark.png': box(BLACK, logo(29, '#FF4FA3', '#5A1A3A')),
  'ios-tinted.png': box('#000', logo(29, '#FFFFFF', null)),
  'splash-icon.png': box('transparent', logo(29, '#FF4FA3', null)),
  'android-icon-foreground.png': box('transparent', logo(18, '#FFFFFF', '#A3165C')),
  'android-icon-background.png': box(PINK, ''),
  'android-icon-monochrome.png': box('transparent', logo(18, '#FFFFFF', null)),
  'favicon.png': box(PINK, logo(29, '#FFFFFF', null)),
};
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1024, height: 1024 } });
  for (const [f, html] of Object.entries(FILES)) {
    await p.setContent(`<html><body style="margin:0;background:transparent">${html}</body></html>`);
    await p.screenshot({ path: path.join(IMG, f), omitBackground: true });
  }
  await b.close();
  console.log('exported', Object.keys(FILES).join(', '));
})();
