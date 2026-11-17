// Renders Digi app-icon options at 1024px, then a home-screen board next to competitor icons.
// Run from the repo root: node docs/design/icons/icons.js
const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright');

const ROOT = path.resolve(__dirname, '../../..');
const OUT = path.join(__dirname, 'png');
fs.mkdirSync(OUT, { recursive: true });
const font = (p) => 'file://' + path.join(ROOT, p);

// The owner's chunky DIGI (flat-sided D), 9 rows tall.
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

const CSS = `@font-face{font-family:LCD;src:url(${font('assets/fonts/DSEG7Classic-Bold.ttf')})}
@font-face{font-family:Pix;src:url(${font('node_modules/@expo-google-fonts/silkscreen/700Bold/Silkscreen_700Bold.ttf')})}
body{margin:0}.i{width:1024px;height:1024px;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center}`;

const ICONS = {
  // A: the chunky DIGI alone on hot pink
  'a-logo': `<div class="i" style="background:radial-gradient(120% 120% at 30% 20%,#FF8CC6 0%,#FF4FA3 45%,#E62D86 100%)">${logo(29, '#FFFFFF', '#A3165C')}</div>`,
  // B: pink digicam front with the DIGI logo (STATUS default)
  'b-camera': `<div class="i" style="background:linear-gradient(160deg,#2A1420,#0B0B0E)"><div style="width:820px;height:600px;border-radius:120px;background:linear-gradient(160deg,#FDE1EE,#F7B9D6 45%,#EE9CC2);box-shadow:inset 0 10px 0 rgba(255,255,255,.7),inset 0 -16px 0 rgba(160,40,100,.25);position:relative">
      <div style="position:absolute;left:70px;top:80px;width:230px;height:90px;border-radius:26px;background:linear-gradient(180deg,#FFFBEA,#F3E6B5)"></div>
      <div style="position:absolute;right:90px;top:60px;width:250px;height:250px;border-radius:50%;background:radial-gradient(circle at 35% 35%,#4A6BFF 0%,#1B1B3A 45%,#050508 70%);box-shadow:0 0 0 26px #D98AB2,0 0 0 40px #F7C9DD"></div>
      <div style="position:absolute;left:70px;bottom:80px">${logo(15, '#D6267F', '#F7C9DD')}</div></div></div>`,
  // C: hot pink + orange 7-segment date digits (bible ch. 12 brief: one element, no lens)
  'c-date': `<div class="i" style="background:radial-gradient(120% 120% at 30% 20%,#FF8CC6 0%,#FF4FA3 45%,#E62D86 100%);flex-direction:column;gap:40px">
      <div style="padding:40px 70px;border-radius:60px;background:#1A0010;box-shadow:inset 0 6px 20px rgba(0,0,0,.6)"><span style="font-family:LCD;font-size:300px;color:#FF9A2E;text-shadow:0 0 30px rgba(255,120,30,.9)">'26</span></div>
      ${logo(10, '#1A0010', null)}</div>`,
  // D: night version: black, pink DIGI, orange stamp
  'd-night': `<div class="i" style="background:radial-gradient(110% 110% at 50% 30%,#2A1420 0%,#0B0B0E 70%);flex-direction:column;gap:70px">${logo(26, '#FF4FA3', '#5A1A3A')}<span style="font-family:LCD;font-size:120px;color:#FF9A2E;text-shadow:0 0 24px rgba(255,120,30,.9)">11 17 '26</span></div>`,
};

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1024, height: 1024 } });
  for (const [name, html] of Object.entries(ICONS)) {
    const f = path.join(OUT, name + '.html');
    fs.writeFileSync(f, `<!doctype html><html><head><meta charset="utf-8"><style>${CSS}</style></head><body>${html}</body></html>`);
    await page.goto('file://' + f);
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: path.join(OUT, name + '.png') });
    fs.unlinkSync(f);
  }
  await browser.close();
  console.log('icons', Object.keys(ICONS).length);
})();
