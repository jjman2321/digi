// UI round 3: renders option mockups at 390x844 and composes side-by-side boards.
// Run from the repo root: node docs/design/round3/gen.js
const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright');

const ROOT = path.resolve(__dirname, '../../..');
const OUT = path.join(__dirname, 'png');
fs.mkdirSync(OUT, { recursive: true });
const img = (n) => 'file://' + path.join(ROOT, 'docs/design/images', n);
const font = (p) => 'file://' + path.join(ROOT, 'node_modules/@expo-google-fonts', p);

const CSS = `
@font-face{font-family:Inter;font-weight:400;src:url(${font('inter/400Regular/Inter_400Regular.ttf')})}
@font-face{font-family:Inter;font-weight:500;src:url(${font('inter/500Medium/Inter_500Medium.ttf')})}
@font-face{font-family:Inter;font-weight:600;src:url(${font('inter/600SemiBold/Inter_600SemiBold.ttf')})}
@font-face{font-family:Inter;font-weight:700;src:url(${font('inter/700Bold/Inter_700Bold.ttf')})}
@font-face{font-family:Serif;src:url(${font('instrument-serif/400Regular/InstrumentSerif_400Regular.ttf')})}
@font-face{font-family:Serif;font-style:italic;src:url(${font('instrument-serif/400Regular_Italic/InstrumentSerif_400Regular_Italic.ttf')})}
@font-face{font-family:Pix;src:url(${font('silkscreen/700Bold/Silkscreen_700Bold.ttf')})}
@font-face{font-family:LCD;src:url(file://${path.join(ROOT, 'assets/fonts/DSEG7Classic-Bold.ttf')})}
*{box-sizing:border-box}
body{margin:0;background:#0B0B0E;font-family:Inter;color:#fff}
.screen{width:390px;height:844px;overflow:hidden;position:relative;display:flex;flex-direction:column;background:#0B0B0E}
.pix{font-family:Pix}
.serif{font-family:Serif;font-weight:400}
.pink{color:#FF4FA3;font-style:italic}
.btn{height:56px;border-radius:999px;background:#FF4FA3;color:#1A0010;font-weight:700;font-size:17px;display:flex;align-items:center;justify-content:center;box-shadow:0 10px 24px rgba(255,79,163,.4)}
.ico{width:44px;height:44px;border-radius:50%;background:#1C1C22;display:flex;align-items:center;justify-content:center}
.stamp{font-family:LCD;color:#FF9A2E;text-shadow:0 0 6px rgba(255,120,30,.9)}
`;

// ---------- the pixel DIGI logo (real pixel blocks, 5x7 glyphs) ----------
const GLYPH = {
  D: ['11110', '10001', '10001', '10001', '10001', '10001', '11110'],
  I: ['11111', '00100', '00100', '00100', '00100', '00100', '11111'],
  G: ['01111', '10000', '10000', '10111', '10001', '10001', '01111'],
};
// Logo styles: 'concept' = the owner's chunky DIGI (thick strokes, stepped corners),
// 'silk' = v1's Silkscreen "DIGI.pink", 'thin' = round-3 first try (rejected).
let LOGO = 'concept';
let LOGO_COLOR = '#FF4FA3';
const CHUNKY = {
  D: ['111111100', '111111110', '111000111', '111000111', '111000111', '111000111', '111000111', '111111110', '111111100'],
  I: ['111', '111', '111', '111', '111', '111', '111', '111', '111'],
  G: ['011111110', '111111111', '111000000', '111000000', '111001111', '111000111', '111000111', '111111111', '011111110'],
};
function pixelLogo(px, color, shadow = '#8E1F5A') {
  color = color || LOGO_COLOR;
  if (LOGO === 'silk') {
    const fs = px * 5.4;
    return `<span role="img" aria-label="DIGI.pink" style="display:inline-flex;align-items:baseline;gap:2px"><span class="pix" style="font-size:${fs}px;color:${color};letter-spacing:1px;line-height:1">DIGI</span><span class="pix" style="font-size:${fs * 0.45}px;color:#FFB3D6">.PINK</span></span>`;
  }
  const chunky = LOGO === 'concept';
  const G = chunky ? CHUNKY : GLYPH;
  const rows = chunky ? 9 : 7;
  const u = chunky ? (px * 7) / 9 : px;
  let rects = '', x0 = 0;
  for (const ch of 'DIGI') {
    G[ch].forEach((row, y) => [...row].forEach((on, x) => {
      if (on !== '1') return;
      const X = (x0 + x) * u, Y = y * u;
      if (!chunky) rects += `<rect x="${X + u * 0.35}" y="${Y + u * 0.35}" width="${u}" height="${u}" fill="${shadow}"/>`;
      rects += `<rect x="${X}" y="${Y}" width="${u + 0.3}" height="${u + 0.3}" fill="${color}"/>`;
    }));
    x0 += G[ch][0].length + 1;
  }
  const w = (x0 - 1) * u + u * 0.4, h = rows * u + u * 0.4;
  return `<svg role="img" aria-label="DIGI" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" shape-rendering="crispEdges">${rects}</svg>`;
}
const withLogo = (style, color, fn) => { const a = LOGO, b = LOGO_COLOR; LOGO = style; LOGO_COLOR = color; const out = fn(); LOGO = a; LOGO_COLOR = b; return out; };

// ---------- body skins ----------
const SKIN = {
  pink: { bg: 'linear-gradient(160deg,#FDE1EE 0%,#F7B9D6 45%,#EE9CC2 100%)', ink: '#A33A72', btn: 'linear-gradient(180deg,#FFFFFF,#F2D3E2)', btnInk: '#8E2D62', btnShadow: '#C97FA6', ring: '#D98AB2', logo: '#D6267F', logoSh: '#F7C9DD' },
  silver: { bg: 'linear-gradient(160deg,#F7F8FA 0%,#D3D6DC 50%,#A9AEB7 100%)', ink: '#5A606B', btn: 'linear-gradient(180deg,#FFFFFF,#DADDE2)', btnInk: '#3D424B', btnShadow: '#8E939C', ring: '#9EA3AC', logo: '#FF4FA3', logoSh: '#B9BDC4' },
  black: { bg: 'linear-gradient(160deg,#3A3A42 0%,#22222A 50%,#141418 100%)', ink: '#FF7DBE', btn: 'linear-gradient(180deg,#45454F,#2A2A31)', btnInk: '#FFB3D6', btnShadow: '#0A0A0C', ring: '#55555F', logo: '#FF4FA3', logoSh: '#5A1A3A' },
};

const ICON = {
  gear: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>',
  flash: '<svg width="20" height="20" viewBox="0 0 24 24"><path d="M13.5 2 4 14h6.5L9 22l11-13h-7z" fill="#2B2200"/></svg>',
  flip: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7h-9a5 5 0 0 0 0 10h1M17 4l3 3-3 3M4 17h9a5 5 0 0 0 0-10h-1M7 20l-3-3 3-3"/></svg>',
  x: '<svg width="18" height="18" viewBox="0 0 24 24" stroke="#fff" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  check: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF4FA3" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg>',
};

// ---------- camera screen ----------
// o = { skin, logo: 'header'|'body'|'both', hw: 'none'|'bar'|'full', looks: 'tabs'|'tiles'|'hybrid' }
function camera(o) {
  const k = SKIN[o.skin];
  const headerLogo = o.logo === 'header' || o.logo === 'both';
  const bodyLogo = o.logo === 'body' || o.logo === 'both';
  const hasBar = o.hw !== 'none';
  const tiles = o.looks === 'tiles';
  let screenH = 440;
  if (headerLogo) screenH -= 40;
  if (hasBar) screenH -= 44;
  if (tiles) screenH -= 36;

  const top = headerLogo
    ? `<div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px 4px">
         <div class="ico">${ICON.gear}</div>${pixelLogo(6)}
         <div class="ico" style="background:#FFD43B">${ICON.flash}</div></div>
       <div style="display:flex;justify-content:center;padding:4px 0 10px"><div style="display:flex;align-items:center;gap:8px;height:34px;padding:0 14px;border-radius:999px;background:#1C1C22;font-size:14px;font-weight:600"><span style="width:8px;height:8px;border-radius:50%;background:#FF4FA3;box-shadow:0 0 8px #FF4FA3"></span>Just me <span style="color:#9A9AA8">⌄</span></div></div>`
    : `<div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px 12px">
         <div class="ico">${ICON.gear}</div>
         <div style="display:flex;align-items:center;gap:8px;height:40px;padding:0 16px;border-radius:999px;background:#1C1C22;font-size:14px;font-weight:600"><span style="width:8px;height:8px;border-radius:50%;background:#FF4FA3;box-shadow:0 0 8px #FF4FA3"></span>Just me <span style="color:#9A9AA8">⌄</span></div>
         <div class="ico" style="background:#FFD43B">${ICON.flash}</div></div>`;

  const hud = o.hw === 'full'
    ? `<span class="pix" style="position:absolute;top:9px;left:10px;font-size:13px;text-shadow:0 1px 2px #000">11/17/2026</span>
       <span class="pix" style="position:absolute;top:9px;right:10px;font-size:13px;color:#FF5A5A;text-shadow:0 1px 2px #000">● REC</span>
       <span class="pix" style="position:absolute;top:28px;left:10px;font-size:11px;color:#7CF3B5">▮▮▮ 3.2M</span>`
    : `<span class="pix" style="position:absolute;top:9px;left:10px;font-size:12px;text-shadow:0 1px 2px #000"><span style="color:#7CF3B5">▮▮▮</span> 3.2M</span>
       <span class="pix" style="position:absolute;top:9px;right:10px;font-size:12px;color:#FFE45C;text-shadow:0 1px 2px #000">FLASH</span>`;

  const zoomChips = hasBar ? '' : `<div style="position:absolute;bottom:10px;left:50%;transform:translateX(-50%);display:flex;gap:6px">${['.5', '1×', '2'].map((z) => `<span style="width:30px;height:30px;border-radius:50%;background:rgba(0,0,0,.5);font-size:12px;font-weight:700;color:${z === '1×' ? '#FFD43B' : '#fff'};display:flex;align-items:center;justify-content:center">${z}</span>`).join('')}</div>`;

  const hwBtn = (t, w = 44) => `<span class="pix" style="height:34px;min-width:${w}px;padding:0 12px;border-radius:999px;background:${k.btn};box-shadow:0 2px 0 ${k.btnShadow};font-size:12px;color:${k.btnInk};display:flex;align-items:center;justify-content:center">${t}</span>`;
  const bar = hasBar
    ? `<div style="display:flex;align-items:center;gap:8px;padding:10px 2px 0">${hwBtn('MODE')}<span class="pix" style="margin-left:auto;font-size:11px;color:${k.ink}">ZOOM</span>${hwBtn('T').replace('class="pix"','style2')}${hwBtn('W').replace('class="pix"','style2')}</div>`
    : '';

  const body = `<div style="margin:0 14px;border-radius:32px;background:${k.bg};box-shadow:inset 0 2px 0 rgba(255,255,255,.6),inset 0 -4px 0 rgba(0,0,0,.18),0 14px 40px rgba(255,79,163,.16);padding:12px 14px 14px">
    <div style="display:flex;align-items:center;gap:10px;padding:0 4px 10px">
      <div style="width:70px;height:24px;border-radius:8px;background:linear-gradient(180deg,#FFFBEA,#F3E6B5);box-shadow:inset 0 0 0 2px rgba(0,0,0,.08)"></div>
      <div style="width:32px;height:32px;border-radius:50%;background:radial-gradient(circle at 35% 35%,#4A6BFF 0%,#1B1B3A 45%,#050508 70%);box-shadow:0 0 0 4px ${k.ring}"></div>
      <span style="width:8px;height:8px;border-radius:50%;background:#3BE58E;box-shadow:0 0 8px #3BE58E"></span>
      <span style="margin-left:auto">${bodyLogo ? pixelLogo(2.6, k.logo, k.logoSh) : `<span class="pix" style="font-size:12px;color:${k.ink}">DIGI-05</span>`}</span>
    </div>
    <div style="border-radius:18px;background:#26252B;padding:9px;box-shadow:inset 0 2px 8px rgba(0,0,0,.6)">
      <div style="position:relative;height:${screenH}px;border-radius:10px;overflow:hidden;background:#000">
        <img src="${img(o.photo || 'r1.png')}" style="width:100%;height:100%;object-fit:cover;filter:${o.photoFilter || 'contrast(1.08) saturate(1.12)'}">
        ${o.vfOverlay ? '' : hud + zoomChips}${o.vfOverlay || ''}
        <span class="stamp" style="position:absolute;bottom:10px;right:10px;font-size:15px">11 17 '26</span>
      </div>
    </div>${bar}
  </div>`;

  const tabsRow = (items) => `<div style="display:flex;justify-content:center;gap:18px;padding:16px 0 0;font-size:13px;font-weight:700;letter-spacing:1.4px">${items
    .map((t) => (t === 'DIGICAM' || t === 'PHOTO'
      ? `<span style="display:flex;flex-direction:column;align-items:center;gap:4px">${t}<span style="width:5px;height:5px;border-radius:50%;background:#FF4FA3"></span></span>`
      : `<span style="color:${t.includes('✦') ? '#FF7DBE' : '#9A9AA8'}">${t}</span>`))
    .join('')}</div>`;

  const tile = (name, f, sel, badge) => `<div style="display:flex;flex-direction:column;align-items:center;gap:5px;width:64px"><div style="position:relative;width:60px;height:60px;border-radius:14px;overflow:hidden;${sel ? 'box-shadow:0 0 0 3px #FF4FA3' : ''}"><img src="${img('r1.png')}" style="width:100%;height:100%;object-fit:cover;filter:${f}">${badge ? `<span style="position:absolute;bottom:3px;right:3px;padding:0 5px;border-radius:6px;background:#FF4FA3;font-size:10px;font-weight:700;color:#1A0010">${badge}</span>` : ''}</div><span style="font-size:11px;font-weight:600;color:${sel ? '#fff' : '#B4B4C0'}">${name}</span></div>`;
  const tilesRow = `<div style="display:flex;gap:10px;padding:14px 16px 0;overflow:hidden">${[
    tile('Digicam', 'contrast(1.1) saturate(1.1)', true),
    tile('Y2K Glow', 'hue-rotate(300deg) saturate(1.5)'),
    tile('Film 400', 'sepia(.45) saturate(1.3)'),
    tile('Club B&W', 'grayscale(1) contrast(1.35)'),
    tile('Re-light', 'brightness(.8) contrast(1.4) saturate(1.3)', false, '✦1'),
  ].join('')}</div>`;

  let looksUi = '';
  if (o.looks === 'tabs') looksUi = tabsRow(['Y2K', 'FILM', 'DIGICAM', 'STRIP', '✦ AI']);
  if (o.looks === 'tiles') looksUi = tilesRow + tabsRow(['PHOTO', 'STRIP', '✦ AI']).replace('padding:16px 0 0', 'padding:10px 0 0');
  if (o.looks === 'hybrid') looksUi = tabsRow(['PHOTO', 'STRIP', '✦ AI', 'LIVE ✦']);

  const right = o.looks === 'hybrid'
    ? `<div style="display:flex;flex-direction:column;align-items:center;gap:4px"><div style="width:52px;height:52px;border-radius:50%;overflow:hidden;box-shadow:0 0 0 2px #fff"><img src="${img('r1.png')}" style="width:100%;height:100%;object-fit:cover;filter:contrast(1.1) saturate(1.1)"></div><span style="font-size:11px;font-weight:600;color:#B4B4C0">Digicam ⌃</span></div>`
    : `<div class="ico" style="width:52px;height:52px">${ICON.flip}</div>`;

  const controls = `<div style="flex-grow:1;display:flex;flex-direction:column;justify-content:center">
    <div style="display:flex;align-items:center;justify-content:space-between;padding:0 30px">
      <div style="position:relative;width:52px;height:52px;border-radius:12px;border:2px solid #fff;transform:rotate(-6deg)"><img src="${img('selfie.png')}" style="width:100%;height:100%;object-fit:cover;border-radius:10px"></div>
      <div style="width:84px;height:84px;border-radius:50%;border:4px solid #fff;display:flex;align-items:center;justify-content:center;box-shadow:0 0 30px rgba(255,79,163,.35)"><span style="width:66px;height:66px;border-radius:50%;background:#fff"></span></div>
      ${right}
    </div>
    <div class="pix" style="text-align:center;font-size:11px;color:#B4B4C0;padding-top:10px">3 FREE DIGIS ✦</div>
  </div>`;

  return `<div class="screen">${top}${body}${looksUi}${controls}<div style="height:26px"></div>${o.overlay || ''}</div>`;
}

// ---------- onboarding: shutter-first welcome (ch. 18 A1 + ch. 24 §12) ----------
function welcome() {
  const k = SKIN.pink;
  return `<div class="screen" style="align-items:center">
    <div style="padding-top:54px">${pixelLogo(7)}</div>
    <div class="pix" style="font-size:11px;color:#B4B4C0;margin-top:10px;letter-spacing:1px">PARTY CAMERA</div>
    <div style="margin:26px 22px 0;width:346px;border-radius:30px;background:${k.bg};padding:12px;box-shadow:0 14px 40px rgba(255,79,163,.18)">
      <div style="border-radius:16px;background:#26252B;padding:8px"><div style="position:relative;height:330px;border-radius:9px;overflow:hidden">
        <img src="${img('r2.png')}" style="width:100%;height:100%;object-fit:cover;filter:brightness(1.1) saturate(.8)">
        <span class="pix" style="position:absolute;top:9px;left:10px;font-size:11px;padding:2px 6px;background:rgba(0,0,0,.55);border-radius:4px">A NORMAL PHONE PIC</span>
      </div></div></div>
    <div class="serif" style="font-size:40px;margin-top:22px">Tap <span class="pink">it.</span></div>
    <div style="flex-grow:1"></div>
    <div style="width:84px;height:84px;border-radius:50%;border:4px solid #fff;display:flex;align-items:center;justify-content:center;box-shadow:0 0 30px rgba(255,79,163,.5);margin-bottom:22px"><span style="width:66px;height:66px;border-radius:50%;background:#FF4FA3"></span></div>
    <div style="font-size:12px;color:#9A9AA8;margin-bottom:30px">By continuing you agree to our <u>Terms</u> and <u>Privacy</u></div>
  </div>`;
}

// ---------- paywall (ch. 24 P0 #1 + ch. 18 Variant A) ----------
function paywall(hero) {
  let top = '';
  if (hero === 'strips') {
    const strip = (r, rot, x, y) => `<div style="position:absolute;left:${x}px;top:${y}px;width:96px;padding:6px;background:#F5F2EE;transform:rotate(${rot}deg);box-shadow:0 10px 24px rgba(0,0,0,.5)">${r.map((n) => `<img src="${img(n)}" style="display:block;width:84px;height:62px;object-fit:cover;margin-bottom:5px;filter:grayscale(${rot === 0 ? 0 : 1}) contrast(1.15)">`).join('')}</div>`;
    top = `<div style="position:relative;height:250px">${strip(['r2.png', 'r3.png', 'r4.png'], -8, 40, 22)}${strip(['r1.png', 'r5.png', 'selfie.png'], 0, 147, 6)}${strip(['r3.png', 'r1.png', 'r2.png'], 8, 254, 22)}</div>`;
  } else if (hero === 'beforeafter') {
    top = `<div style="position:relative;height:250px;margin:0 16px;border-radius:20px;overflow:hidden">
      <img src="${img('r1.png')}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:brightness(1.25) saturate(.6) contrast(.85)">
      <div style="position:absolute;top:0;bottom:0;right:0;width:50%;overflow:hidden"><img src="${img('r1.png')}" style="position:absolute;right:0;width:358px;height:100%;object-fit:cover;filter:contrast(1.25) saturate(1.25)"></div>
      <div style="position:absolute;top:0;bottom:0;left:50%;width:2px;background:#fff"></div>
      <span class="pix" style="position:absolute;top:10px;left:10px;font-size:10px;padding:2px 6px;background:rgba(0,0,0,.6);border-radius:4px">BEFORE</span>
      <span class="pix" style="position:absolute;top:10px;right:10px;font-size:10px;padding:2px 6px;background:#FF4FA3;color:#1A0010;border-radius:4px">YOURS ✦</span>
      <span class="stamp" style="position:absolute;bottom:10px;right:12px;font-size:14px">11 17 '26</span></div>`;
  } else {
    top = `<div style="display:flex;flex-direction:column;align-items:center;gap:12px;padding-top:2px">${pixelLogo(5)}
      <div style="width:300px;border-radius:26px;background:${SKIN.pink.bg};padding:10px;transform:rotate(-3deg);box-shadow:0 14px 30px rgba(255,79,163,.25)"><div style="position:relative;height:250px;border-radius:12px;overflow:hidden;border:6px solid #26252B"><img src="${img('r1.png')}" style="width:100%;height:100%;object-fit:cover;filter:contrast(1.25) saturate(1.2)"><span class="stamp" style="position:absolute;bottom:6px;right:8px;font-size:12px">11 17 '26</span></div></div></div>`;
  }
  const opt = (sel, name, price, per, sub, badge) => `<div style="position:relative;display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:16px;border:2px solid ${sel ? '#FF4FA3' : '#2E2E36'};background:${sel ? '#2A1420' : '#17171C'}">
      ${badge ? `<span style="position:absolute;top:-10px;right:14px;padding:2px 8px;border-radius:999px;background:#FF4FA3;color:#1A0010;font-size:11px;font-weight:700">${badge}</span>` : ''}
      <span style="width:22px;height:22px;border-radius:50%;border:2px solid ${sel ? '#FF4FA3' : '#55555F'};display:flex;align-items:center;justify-content:center">${sel ? '<span style="width:12px;height:12px;border-radius:50%;background:#FF4FA3"></span>' : ''}</span>
      <div style="flex-grow:1"><div style="font-size:15px;font-weight:600">${name}</div><div style="font-size:13px;color:#B4B4C0">${sub}</div></div>
      <div style="text-align:right;white-space:nowrap"><span style="font-size:22px;font-weight:700">${price}</span><span style="font-size:14px;color:#B4B4C0"> ${per}</span></div></div>`;
  return `<div class="screen">
    <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 16px 6px"><div class="ico">${ICON.x}</div><span style="font-size:15px;font-weight:600;color:#B4B4C0">Restore</span></div>
    ${top}
    <div style="padding:0 20px">
      <div class="serif" style="font-size:36px;line-height:1;margin:14px 0 10px">Keep the <span class="pink">flash</span> going</div>
      ${['60 AI digis every month', 'Every look + holiday drops', 'No watermark'].map((t) => `<div style="display:flex;gap:8px;align-items:center;font-size:15px;margin-bottom:5px">${ICON.check}${t}</div>`).join('')}
      <div style="display:flex;flex-direction:column;gap:10px;margin-top:12px">
        ${opt(true, 'Yearly', '$39.99', '/ yr', '3 days free · about $0.77/wk', 'BEST VALUE')}
        ${opt(false, 'Weekly', '$6.99', '/ wk', '30 AI digis a week')}
      </div>
    </div>
    <div style="flex-grow:1"></div>
    <div style="padding:0 20px 26px">
      <div class="btn">Start my 3 free days</div>
      <div style="text-align:center;font-size:12px;color:#B4B4C0;margin-top:8px">Then $39.99/year. Not charged until Nov 20. Cancel anytime.</div>
      <div style="text-align:center;font-size:14px;font-weight:600;color:#FF7DBE;margin-top:8px">Just tonight? 25 digis · $5.99 →</div>
      <div style="text-align:center;font-size:12px;color:#9A9AA8;margin-top:6px"><u>Terms</u> · <u>Privacy</u></div>
    </div></div>`;
}

// Small onboarding screens for the shutter-first flow (ch. 24 §12).
function pickOne(title, pinkWord, sub, items, photos) {
  const cells = items.map((t, i) => photos
    ? `<div style="position:relative;height:150px;border-radius:16px;overflow:hidden"><img src="${img(photos[i])}" style="width:100%;height:100%;object-fit:cover;filter:contrast(1.1)"><span style="position:absolute;left:10px;bottom:9px;font-size:15px;font-weight:700;text-shadow:0 1px 4px #000">${t}</span></div>`
    : `<div style="height:56px;border-radius:16px;background:#17171C;border:1px solid #2E2E36;display:flex;align-items:center;padding:0 16px;font-size:16px;font-weight:600">${t}</div>`).join('');
  return `<div class="screen"><div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px"><div class="ico" style="background:none">‹</div>${pixelLogo(3)}<span style="width:44px;text-align:right;color:#B4B4C0;font-size:15px">Skip</span></div>
    <div style="padding:10px 20px 0"><div class="serif" style="font-size:38px;line-height:1.02">${title} <span class="pink">${pinkWord}</span></div><div style="font-size:15px;color:#B4B4C0;margin:8px 0 18px">${sub}</div>
    <div style="display:grid;grid-template-columns:${photos ? '1fr 1fr' : '1fr'};gap:10px">${cells}</div></div></div>`;
}

const BASE = { skin: 'pink', logo: 'header', hw: 'bar', looks: 'tabs' };
const PICK = { ...BASE, looks: 'hybrid' };

// ---------- round 4: onboarding + paywall rework (Mobbin: Lapse, Kino, Unfold, Halide, Snapchat) ----------
const sheet = (inner, h) => `<div style="position:absolute;inset:0;background:rgba(0,0,0,.45)"></div>
  <div style="position:absolute;left:0;right:0;bottom:0;${h ? `height:${h}px;` : ''}border-radius:28px 28px 0 0;background:#17171C;box-shadow:0 -10px 40px rgba(0,0,0,.6);padding:10px 20px 30px">
  <div style="width:40px;height:5px;border-radius:3px;background:#3A3A44;margin:0 auto 14px"></div>${inner}</div>`;
const chip = (t, sel) => `<span style="height:44px;padding:0 16px;border-radius:999px;background:${sel ? '#FF4FA3' : '#26252B'};color:${sel ? '#1A0010' : '#fff'};font-size:15px;font-weight:600;display:inline-flex;align-items:center">${t}</span>`;
const coach = (t) => `<div style="position:absolute;left:50%;bottom:178px;transform:translateX(-50%);white-space:nowrap;padding:10px 16px;border-radius:14px;background:#fff;color:#1A0010;font-size:16px;font-weight:700;box-shadow:0 8px 24px rgba(0,0,0,.5)">${t}<span style="position:absolute;left:50%;bottom:-7px;margin-left:-7px;width:14px;height:14px;background:#fff;transform:rotate(45deg)"></span></div>`;
const confetti = () => { let c = ''; const cols = ['#FF4FA3', '#FFD43B', '#7CF3B5', '#FF9A2E', '#fff']; for (let i = 0; i < 26; i++) { const x = (i * 53) % 380, y = 60 + ((i * 97) % 420), r = (i * 37) % 180; c += `<span style="position:absolute;left:${x}px;top:${y}px;width:${i % 3 ? 8 : 12}px;height:${i % 2 ? 4 : 10}px;background:${cols[i % 5]};transform:rotate(${r}deg);border-radius:2px"></span>`; } return c; };
const vfLabel = (t, pink) => `<span class="pix" style="position:absolute;top:9px;left:10px;font-size:11px;padding:2px 7px;border-radius:4px;background:${pink ? '#FF4FA3' : 'rgba(0,0,0,.6)'};color:${pink ? '#1A0010' : '#fff'}">${t}</span>`;

function unbox() {
  const bars = Array.from({ length: 34 }, (_, i) => `<span style="width:${i % 3 ? 2 : 4}px;height:44px;background:#5A1A3A"></span>`).join('');
  return `<div class="screen" style="align-items:center;justify-content:center;background:radial-gradient(circle at 50% 40%,#2A1420,#0B0B0E 70%)">
    <div style="width:320px;height:560px;border-radius:10px;background:linear-gradient(170deg,#FBD3E6,#F2A7CA);box-shadow:0 30px 60px rgba(0,0,0,.6),inset 0 0 0 2px rgba(255,255,255,.4);padding:22px;display:flex;flex-direction:column;color:#5A1A3A;position:relative">
      <div style="display:flex;justify-content:space-between;align-items:center"><div style="display:flex;gap:1px;align-items:flex-end">${bars}</div><span class="stamp" style="font-size:16px;padding:4px 8px;background:#1A0010;border-radius:4px">11 17 '26</span></div>
      <div style="margin-top:30px">${pixelLogo(11, '#C21F70')}</div>
      <div class="pix" style="font-size:15px;margin-top:14px">DIGI-05</div>
      <div style="font-size:15px;font-weight:700;margin-top:4px">Digital party camera</div>
      <div style="display:flex;gap:8px;margin-top:22px">${['FLASH', 'CCD', 'DATE', 'STRIP'].map((t) => `<span class="pix" style="font-size:11px;padding:5px 8px;border:2px solid #C21F70;border-radius:6px">${t}</span>`).join('')}</div>
      <div style="flex-grow:1"></div>
      <div style="border-top:3px dashed #C21F70;padding-top:14px;text-align:center"><div class="pix" style="font-size:15px">▽ OPEN HERE ▽</div></div>
    </div>
    <div style="font-size:15px;color:#B4B4C0;margin-top:22px">Tap to unbox</div></div>`;
}

// ---------- round 5: onboarding questions + pro paywall (Mobbin: ABY, Insight Timer, Tabby, VSCO, Halide) ----------
// Progress = a pixel battery, like the camera HUD.
const battery = (filled, total = 5) => `<div style="display:flex;align-items:center;gap:3px" aria-label="Step ${filled} of ${total}"><div style="display:flex;gap:3px;padding:3px;border:2px solid #55555F;border-radius:5px">${Array.from({ length: total }, (_, i) => `<span style="width:18px;height:10px;border-radius:1px;background:${i < filled ? '#FF4FA3' : '#26252B'}"></span>`).join('')}</div><span style="width:3px;height:8px;border-radius:1px;background:#55555F"></span></div>`;
const qTop = (step) => `<div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px 6px"><div class="ico" style="background:none"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"><path d="M15 5l-7 7 7 7"/></svg></div>${battery(step)}<span style="width:44px;text-align:right;color:#B4B4C0;font-size:15px;font-weight:600">Skip</span></div>`;
const optRow = (icon, t, sub, sel) => `<div style="display:flex;align-items:center;gap:14px;min-height:68px;padding:12px 16px;border-radius:18px;background:${sel ? '#2A1420' : '#17171C'};border:2px solid ${sel ? '#FF4FA3' : '#24242B'}"><span style="width:40px;height:40px;border-radius:12px;background:#26252B;display:flex;align-items:center;justify-content:center;font-size:20px">${icon}</span><div style="flex-grow:1"><div style="font-size:17px;font-weight:600">${t}</div>${sub ? `<div style="font-size:14px;color:#B4B4C0;margin-top:2px">${sub}</div>` : ''}</div><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${sel ? '#FF4FA3' : '#55555F'}" stroke-width="2.4" stroke-linecap="round"><path d="M9 5l7 7-7 7"/></svg></div>`;
function question(step, reply, title, pinkWord, sub, body) {
  return `<div class="screen">${qTop(step)}<div style="padding:18px 20px 0">
    ${reply ? `<div style="font-size:15px;font-weight:600;color:#FF7DBE;margin-bottom:8px">${reply}</div>` : ''}
    <div class="serif" style="font-size:40px;line-height:1.02">${title} <span class="pink">${pinkWord}</span></div>
    ${sub ? `<div style="font-size:15px;color:#B4B4C0;margin-top:8px">${sub}</div>` : ''}
    <div style="margin-top:22px">${body}</div></div></div>`;
}
const occTile = (t, ph, sel) => `<div style="position:relative;height:132px;border-radius:18px;overflow:hidden;${sel ? 'box-shadow:0 0 0 3px #FF4FA3' : ''}"><img src="${img(ph)}" style="width:100%;height:100%;object-fit:cover;filter:contrast(1.15) saturate(1.1)"><div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,0) 45%,rgba(0,0,0,.75))"></div><span style="position:absolute;left:12px;bottom:10px;font-size:16px;font-weight:700">${t}</span></div>`;
const Q1 = question(1, '', "What's the first", 'party?', 'We load the looks for it.', `<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">${[['Birthday', 'r5.png', true], ['House party', 'r1.png'], ['Night out', 'r2.png'], ['Holidays', 'r6.png'], ['Wedding', 'r4.png'], ['Just us', 'selfie.png']].map(([t, p, sel]) => occTile(t, p, sel)).join('')}</div>`);
const bigRow = (icon, t, sub) => optRow(icon, t, sub).replace('min-height:68px', 'min-height:104px').replace('width:40px;height:40px;border-radius:12px;background:#26252B;display:flex;align-items:center;justify-content:center;font-size:20px', 'width:60px;height:60px;border-radius:16px;background:#26252B;display:flex;align-items:center;justify-content:center;font-size:30px').replace('font-size:17px;font-weight:600', 'font-size:19px;font-weight:700');
const Q2 = question(2, 'Birthday looks, loaded 🎂', 'How often are you', 'out?', "We'll suggest the plan that fits. No pressure.", `<div style="display:flex;flex-direction:column;gap:12px">${bigRow('🪩', 'Every weekend', 'Most Fridays and Saturdays')}${bigRow('📅', 'A couple of times a month', 'Dinners, house parties')}${bigRow('🎉', 'Only big nights', 'Birthdays, holidays, weddings')}</div>`);
const photoRow = (ph, t, sub, sel) => `<div style="position:relative;height:172px;border-radius:20px;overflow:hidden;${sel ? 'box-shadow:0 0 0 3px #FF4FA3' : ''}"><img src="${img(ph)}" style="width:100%;height:100%;object-fit:cover;object-position:50% 35%;filter:contrast(1.15) saturate(1.1)"><div style="position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.8),rgba(0,0,0,0) 70%)"></div><div style="position:absolute;left:18px;bottom:16px"><div style="font-size:20px;font-weight:700">${t}</div><div style="font-size:14px;color:#E4E4EA;margin-top:2px">${sub}</div></div></div>`;
const Q3 = question(3, 'Noted.', "Who's in your", 'pics?', 'We set your camera up for it.', `<div style="display:flex;flex-direction:column;gap:12px">${photoRow('selfie.png', 'Mostly me', 'Front flash first')}${photoRow('r2.png', 'Me + a few friends', 'Strip mode first', true)}${photoRow('r1.png', 'The whole group', 'Wide 0.5× first')}</div>`);
const Q4 = question(4, 'Strip mode it is.', 'How did you find', 'Digi?', 'One tap. It helps a tiny team a lot.', `<div style="display:flex;flex-direction:column;gap:10px">${[['🎵', 'TikTok'], ['📸', 'Instagram'], ['💬', 'A friend'], ['🔎', 'App Store search'], ['✨', 'Somewhere else']].map(([i, t]) => optRow(i, t, '')).join('')}</div>`);
function ready() {
  const line = (t) => `<div style="display:flex;align-items:center;gap:8px"><span style="color:#7CF3B5">✓</span>${t}</div>`;
  return `<div class="screen" style="align-items:center">${qTop(5).replace('Skip', '')}
    <div class="serif" style="font-size:40px;line-height:1.02;text-align:center;margin-top:18px">Your camera's <span class="pink">ready</span></div>
    <div style="margin-top:30px;width:350px;border-radius:32px;background:${SKIN.pink.bg};padding:12px;box-shadow:0 14px 40px rgba(255,79,163,.25)">
      <div style="display:flex;align-items:center;gap:10px;padding:0 4px 10px"><div style="width:62px;height:22px;border-radius:7px;background:linear-gradient(180deg,#FFFBEA,#F3E6B5)"></div><div style="width:28px;height:28px;border-radius:50%;background:radial-gradient(circle at 35% 35%,#4A6BFF 0%,#1B1B3A 45%,#050508 70%);box-shadow:0 0 0 4px ${SKIN.pink.ring}"></div><span class="pix" style="margin-left:auto;font-size:12px;color:${SKIN.pink.ink}">DIGI-05</span></div>
      <div style="border-radius:16px;background:#101012;padding:30px 20px;min-height:330px;display:flex;flex-direction:column;justify-content:center;box-shadow:inset 0 2px 8px rgba(0,0,0,.7)">
        <div class="pix" style="font-size:17px;line-height:2.3;color:#fff">${line('BIRTHDAY LOOKS')}${line('STRIP MODE')}${line('FLASH ON')}${line('<span style="color:#FF7DBE">3 FREE AI DIGIS ✦</span>')}</div>
        <div class="stamp" style="text-align:right;font-size:15px;margin-top:6px">11 17 '26</div></div></div>
    <div style="flex-grow:1"></div>
    <div style="width:350px;padding-bottom:30px"><div class="btn">Open my camera</div><div style="text-align:center;font-size:13px;color:#9A9AA8;margin-top:10px">Next, iPhone asks for the camera. Photos stay on your phone.</div></div></div>`;
}

const PICON = {
  ai: '<svg width="22" height="22" viewBox="0 0 24 24" fill="#FF4FA3"><path d="M12 2l2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2z"/></svg>',
  live: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF4FA3" stroke-width="2.2"><rect x="3" y="5" width="13" height="14" rx="3"/><path d="M16 10l5-3v10l-5-3z" fill="#FF4FA3"/></svg>',
  looks: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF4FA3" stroke-width="2.2"><circle cx="9" cy="9" r="5"/><circle cx="15" cy="9" r="5"/><circle cx="12" cy="15" r="5"/></svg>',
  mark: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF4FA3" stroke-width="2.2" stroke-linecap="round"><rect x="3" y="4" width="18" height="16" rx="3"/><path d="M4 20 20 4"/></svg>',
};
function paywallPro(glass) {
  const feat = (ic, t) => `<div style="display:flex;flex-direction:column;align-items:center;gap:6px;flex:1"><span style="width:46px;height:46px;border-radius:14px;background:#2A1420;display:flex;align-items:center;justify-content:center">${ic}</span><span style="font-size:12px;font-weight:600;color:#E4E4EA;text-align:center;line-height:1.2">${t}</span></div>`;
  const plan = (sel, name, sub, price, per, small, badge) => `<div style="display:flex;align-items:center;gap:12px;padding:14px 14px;${sel ? 'background:#2A1420;box-shadow:inset 0 0 0 2px #FF4FA3;border-radius:16px' : ''}">
      <span style="width:22px;height:22px;flex-shrink:0;border-radius:50%;border:2px solid ${sel ? '#FF4FA3' : '#55555F'};display:flex;align-items:center;justify-content:center">${sel ? '<span style="width:12px;height:12px;border-radius:50%;background:#FF4FA3"></span>' : ''}</span>
      <div style="flex-grow:1"><div style="display:flex;align-items:center;gap:8px;font-size:16px;font-weight:700">${name}${badge ? `<span style="font-size:10px;font-weight:700;padding:2px 7px;border-radius:999px;background:#FF4FA3;color:#1A0010">${badge}</span>` : ''}</div><div style="font-size:13px;color:#B4B4C0;margin-top:2px">${sub}</div></div>
      <div style="text-align:right;white-space:nowrap"><div><span style="font-size:22px;font-weight:700">${price}</span><span style="font-size:13px;color:#B4B4C0"> ${per}</span></div><div style="font-size:12px;color:#9A9AA8">${small}</div></div></div>`;
  const plans = `<div style="border-radius:20px;background:${glass ? 'rgba(23,23,28,.6)' : '#141418'};border:1px solid #24242B;padding:4px">${plan(true, 'Yearly', '3 days free', '$39.99', '/yr', '$0.77 a week', 'BEST VALUE')}<div style="height:1px;background:#24242B;margin:0 14px"></div>${plan(false, 'Weekly', '30 AI digis every week', '$6.99', '/wk', 'Cancel anytime')}</div>`;
  const hero = `<div style="position:absolute;top:0;left:0;right:0;height:${glass ? 844 : 400}px"><img src="${img('r1.png')}" style="width:100%;height:100%;object-fit:cover;filter:contrast(1.28) saturate(1.25) brightness(.95)"><div style="position:absolute;inset:0;background:${glass ? 'linear-gradient(180deg,rgba(11,11,14,.5) 0%,rgba(11,11,14,0) 18%,rgba(11,11,14,.1) 35%,rgba(11,11,14,.85) 55%)' : 'linear-gradient(180deg,rgba(11,11,14,.5) 0%,rgba(11,11,14,0) 20%,rgba(11,11,14,0) 60%,#0B0B0E 100%)'}"></div>${glass ? '' : `<span class="stamp" style="position:absolute;right:18px;bottom:64px;font-size:16px">11 17 '26</span>`}</div>`;
  const head = `<div style="position:relative;display:flex;justify-content:space-between;align-items:center;padding:12px 16px"><div class="ico" style="background:rgba(0,0,0,.45)">${ICON.x}</div><span style="font-size:14px;font-weight:600">Restore</span></div>`;
  const inner = `<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">${pixelLogo(3.6)}<span class="pix" style="font-size:12px;padding:3px 8px;border-radius:5px;background:#FF4FA3;color:#1A0010">PLUS</span></div>
    <div class="serif" style="font-size:34px;line-height:1.02;margin-bottom:16px">Keep the <span class="pink">flash</span> going</div>
    <div style="display:flex;gap:6px;margin-bottom:18px">${feat(PICON.ai, '60 AI digis<br>a month')}${feat(PICON.live, 'Live digis')}${feat(PICON.looks, 'Every look')}${feat(PICON.mark, 'No<br>watermark')}</div>
    ${plans}
    <div style="display:flex;align-items:center;justify-content:center;gap:6px;font-size:13px;color:#B4B4C0;margin:14px 0 10px"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7CF3B5" stroke-width="2.6" stroke-linecap="round"><path d="M5 12l5 5 9-10"/></svg>Nothing to pay today · not charged until Nov 20</div>
    <div class="btn">Start my 3 free days</div>
    <div style="display:flex;justify-content:center;gap:16px;font-size:12px;color:#9A9AA8;margin-top:12px"><span style="color:#FF7DBE;font-weight:600">Just tonight? 25 digis · $5.99</span></div>
    <div style="display:flex;justify-content:center;gap:16px;font-size:12px;color:#9A9AA8;margin-top:8px"><u>Terms</u><u>Privacy</u><u>Redeem code</u></div>`;
  return `<div class="screen">${hero}${head}<div style="flex-grow:1"></div><div style="position:relative;margin:0 ${glass ? 12 : 0}px ${glass ? 14 : 0}px;padding:${glass ? '20px 16px 18px' : '0 20px 24px'};${glass ? 'border-radius:30px;background:rgba(17,17,21,.72);backdrop-filter:blur(18px);border:1px solid rgba(255,255,255,.08)' : ''}">${inner}</div></div>`;
}

// ---------- round 6: 10/10 pass (Mobbin refs in docs/design/research/mobbin/) ----------
const PINKSEL = 'background:#FF4FA3;color:#1A0010;border-color:#FF4FA3';
const bars = (n) => `<svg width="34" height="26" viewBox="0 0 34 26">${[0, 1, 2, 3].map((i) => `<rect x="${i * 9}" y="${18 - i * 6}" width="6" height="${8 + i * 6}" rx="1.5" fill="${i < n ? '#FF4FA3' : '#33333B'}"/>`).join('')}</svg>`;
const tile6 = (lead, t, sub, sel) => `<div style="display:flex;align-items:center;gap:14px;min-height:112px;padding:12px 16px;border-radius:18px;border:2px solid #24242B;background:#17171C;${sel ? PINKSEL : ''}">${lead ? `<span style="width:44px;display:flex;justify-content:center">${sel ? lead.replaceAll('#FF4FA3', '#1A0010').replaceAll('#33333B', 'rgba(26,0,16,.25)') : lead}</span>` : ''}<div style="flex-grow:1"><div style="font-size:18px;font-weight:700">${t}</div>${sub ? `<div style="font-size:14px;margin-top:2px;${sel ? 'color:#3D0A24' : 'color:#B4B4C0'}">${sub}</div>` : ''}</div></div>`;
function q6(step, total, reply, title, pinkWord, helper, body, foot) {
  return `<div class="screen">${qTop(step).replace(battery(step), battery(step, total))}<div style="padding:16px 20px 0;flex-grow:1;display:flex;flex-direction:column">
    <div style="font-size:15px;font-weight:600;color:#FF7DBE;min-height:20px;margin-bottom:6px">${reply}</div>
    <div class="serif" style="font-size:40px;line-height:1.02">${title} <span class="pink">${pinkWord}</span></div>
    <div style="font-size:15px;color:#B4B4C0;margin-top:8px">${helper}</div>
    <div style="margin-top:26px">${body}</div><div style="flex-grow:1"></div>
    <div style="font-size:13px;color:#9A9AA8;text-align:center;padding:16px 0 30px">${foot || 'Tap one to keep going'}</div></div></div>`;
}
const occ6 = (t, ph, sel) => occTile(t, ph, false).replace('<span style="position:absolute;left:12px;bottom:10px;font-size:16px;font-weight:700">', `<span style="position:absolute;left:10px;bottom:10px;font-size:16px;font-weight:700;${sel ? 'padding:4px 10px;border-radius:999px;background:#FF4FA3;color:#1A0010' : ''}">`).replace('position:relative;height:132px;border-radius:18px;overflow:hidden;', `position:relative;height:150px;border-radius:18px;overflow:hidden;${sel ? 'box-shadow:0 0 0 3px #FF4FA3;' : ''}`);
const R6_Q1 = q6(1, 6, '', "What's the first", 'party?', "We'll load looks for it.", `<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">${[['Birthday', 'r5.png', true], ['House party', 'r1.png'], ['Night out', 'r2.png'], ['Holidays', 'r6.png'], ['Wedding', 'r4.png'], ['Just us', 'selfie.png']].map(([t, ph, sel]) => occ6(t, ph, sel)).join('')}</div>`, 'All good if it changes');
const R6_Q2 = q6(2, 6, 'Birthday looks, loaded 🎂', 'How often are you', 'out?', 'So we suggest the plan that fits.', `<div style="display:flex;flex-direction:column;gap:12px">${tile6(bars(4), 'Every weekend', 'Fridays, Saturdays, repeat')}${tile6(bars(2), 'A couple of times a month', 'Dinners and house parties', true)}${tile6(bars(1), 'Only big nights', 'Birthdays, holidays, weddings')}</div>`);
const R6_Q3 = q6(3, 6, 'Nice.', "Who's in your", 'pics?', 'We set up your camera for it.', `<div style="display:flex;flex-direction:column;gap:12px">${photoRow('selfie.png', 'Mostly me', 'Front flash first')}${photoRow('r2.png', 'Me + a few friends', 'Strip mode first', true)}${photoRow('r1.png', 'The whole group', 'Wide 0.5× first')}</div>`);
const R6_G = q6(4, 6, 'Strip mode it is.', 'Which describes', 'you?', 'Picks your sample photos and first looks. Never shown to anyone.', `<div style="display:flex;flex-direction:column;gap:10px">${['Woman', 'Man', 'Non-binary', 'Prefer not to say'].map((t, i) => tile6('', t, '', i === 0).replace('min-height:112px', 'min-height:84px')).join('')}</div>`, 'Optional · change it any time in Settings');
const R6_Q4 = q6(5, 6, 'Got it.', 'How did you find', 'Digi?', 'One tap. It helps a tiny team a lot.', `<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">${[['🎵', 'TikTok'], ['📸', 'Instagram'], ['💬', 'A friend'], ['🔎', 'App Store'], ['▶️', 'YouTube'], ['✨', 'Other']].map(([i, t]) => `<div style="height:132px;border-radius:18px;background:#17171C;border:2px solid #24242B;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px"><span style="font-size:28px">${i}</span><span style="font-size:16px;font-weight:700">${t}</span></div>`).join('')}</div>`);
const R6_READY = ready().replace(qTop(5).replace('Skip', ''), qTop(6).replace(battery(6), battery(6, 6)).replace('Skip', ''));

// Paywall A: "their prints" (Photoroom fan + Snapchat rows + FocusFlight tiles/CTA + Headspace/Jomo date line)
const print = (ph, rot, x, y, w, label, filt) => `<div style="position:absolute;left:${x}px;top:${y}px;width:${w}px;padding:7px 7px 26px;background:#F4F1EC;border-radius:4px;transform:rotate(${rot}deg);box-shadow:0 14px 30px rgba(0,0,0,.55)"><div style="position:relative;height:${Math.round(w * 1.18)}px;overflow:hidden;border-radius:2px"><img src="${img(ph)}" style="width:100%;height:100%;object-fit:cover;filter:${filt}"><span class="stamp" style="position:absolute;right:6px;bottom:4px;font-size:${Math.round(w / 11)}px">11 17 '26</span></div><span class="pix" style="position:absolute;left:8px;bottom:7px;font-size:9px;color:#C21F70">${label}</span></div>`;
const featRow = (ic, t, sub) => `<div style="display:flex;align-items:center;gap:12px;padding:10px 0"><span style="width:38px;height:38px;flex-shrink:0;border-radius:11px;background:#2A1420;display:flex;align-items:center;justify-content:center">${ic}</span><div><div style="font-size:15px;font-weight:700">${t}</div><div style="font-size:13px;color:#B4B4C0">${sub}</div></div></div>`;
const planTile = (sel, name, price, per, sub, badge) => `<div style="position:relative;flex:1;padding:14px 12px 12px;border-radius:18px;${sel ? 'background:#FFFFFF;color:#1A0010' : 'background:#17171C;border:1.5px solid #2E2E36'}">${badge ? `<span style="position:absolute;top:-10px;left:50%;transform:translateX(-50%);white-space:nowrap;padding:3px 9px;border-radius:999px;background:#FF4FA3;color:#1A0010;font-size:11px;font-weight:800">${badge}</span>` : ''}<div style="font-size:14px;font-weight:700;${sel ? '' : 'color:#E4E4EA'}">${name}</div><div style="margin-top:6px"><span style="font-size:26px;font-weight:800">${price}</span><span style="font-size:14px;${sel ? 'color:#55304A' : 'color:#B4B4C0'}"> ${per}</span></div><div style="font-size:12px;margin-top:3px;${sel ? 'color:#55304A' : 'color:#B4B4C0'}">${sub}</div></div>`;
const bell = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF7DBE" stroke-width="2.4" stroke-linecap="round"><path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4zM10 21h4"/></svg>';
function payTop() { return `<div style="position:relative;display:flex;justify-content:space-between;align-items:center;padding:12px 16px;z-index:2"><span style="font-size:15px;font-weight:600;color:#B4B4C0;min-width:44px;height:44px;display:flex;align-items:center">Restore</span><div class="ico">${ICON.x}</div></div>`; }
function payBottom() {
  return `<div style="display:flex;gap:10px;margin:18px 0 16px">${planTile(true, 'Yearly', '$39.99', '/yr', '3 days free · $0.77/wk', 'BEST VALUE')}${planTile(false, 'Weekly', '$6.99', '/wk', 'Cancel anytime')}</div>
    <div style="height:58px;border-radius:999px;background:#FFFFFF;color:#1A0010;font-weight:800;font-size:17px;display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 1px rgba(255,79,163,.4),0 10px 34px rgba(255,79,163,.55)">Start my 3 free days</div>
    <div style="display:flex;align-items:center;justify-content:center;gap:6px;font-size:13px;color:#B4B4C0;margin-top:10px">${bell}Reminder on Nov 19 · first charge Nov 20</div>
    <div style="text-align:center;font-size:12px;color:#9A9AA8;margin-top:6px">Auto-renews until you cancel in Settings · <u>Terms</u> · <u>Privacy</u></div>
    <div style="text-align:center;font-size:14px;color:#FF7DBE;font-weight:700;margin-top:12px">Just tonight? 25 digis · $5.99</div>`;
}
function payA() {
  return `<div class="screen" style="background:radial-gradient(120% 60% at 50% 18%,#3A1028 0%,#0B0B0E 62%)">${payTop()}
    <div style="position:relative;height:262px;margin-top:-6px">${print('r2.png', -10, 30, 22, 118, 'FILM 400', 'sepia(.35) saturate(1.2) contrast(1.05)')}${print('r1.png', 9, 242, 22, 118, 'LIVE ✦', 'contrast(1.2) saturate(1.2)')}${print('r1.png', -1.5, 117, 0, 156, 'YOURS ✦', 'contrast(1.28) saturate(1.25) brightness(.95)')}</div>
    <div style="padding:0 20px 24px;display:flex;flex-direction:column;flex-grow:1">
      <div style="display:flex;align-items:center;gap:8px;margin-top:6px">${pixelLogo(3.4)}<span class="pix" style="font-size:12px;padding:3px 8px;border-radius:5px;background:#FF4FA3;color:#1A0010">PLUS</span></div>
      <div class="serif" style="font-size:36px;line-height:1.02;margin-top:8px">Keep the <span class="pink">flash</span> going</div>
      <div style="margin-top:8px">${featRow(PICON.ai, '60 AI re-lights a month', '')}${featRow(PICON.live, 'Live digis: 5-second flash clips', '')}${featRow(PICON.mark, 'Every look, no DIGI.PINK mark', '')}</div>
      <div style="flex-grow:1"></div>${payBottom()}</div></div>`;
}
// Paywall B: camera bento (Halide), drawn as digicam widgets
function payB() {
  const t = (inner, span, h) => `<div style="grid-column:span ${span};height:${h}px;border-radius:18px;background:#15151A;border:1px solid #26262E;padding:12px;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;position:relative">${inner}</div>`;
  const cap = (a, b) => `<div><div style="font-size:14px;font-weight:700">${a}</div><div style="font-size:12px;color:#B4B4C0">${b}</div></div>`;
  return `<div class="screen">${payTop()}
    <div style="padding:0 16px"><div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">
      ${t(`<img src="${img('r1.png')}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:contrast(1.28) saturate(1.25)"><span class="pix" style="position:relative;align-self:flex-start;font-size:10px;padding:2px 7px;border-radius:4px;background:#FF4FA3;color:#1A0010">AI RE-LIGHT ✦</span><span class="stamp" style="position:relative;align-self:flex-end;font-size:14px">11 17 '26</span>`, 2, 236)}
      <div style="grid-column:span 2;display:grid;gap:8px">${t(`<span class="pix" style="font-size:22px;color:#FF5A5A">● LIVE 5s</span>${cap('Live digis', 'Flash clips')}`, 2, 114)}${t(`<span class="pix" style="font-size:26px;color:#FF4FA3;letter-spacing:2px">60/mo</span>${cap('AI digis', 'Refill monthly')}`, 2, 114)}</div>
      ${t(`<div style="display:flex;gap:3px">${['r5.png', 'r2.png', 'r4.png', 'selfie.png'].map((p) => `<img src="${img(p)}" style="width:30px;height:40px;object-fit:cover;border:2px solid #F4F1EC">`).join('')}</div>${cap('Every look', 'Holiday drops too')}`, 2, 124)}
      ${t(`<span class="pix" style="font-size:13px;color:#9A9AA8;text-decoration:line-through;text-decoration-color:#FF4FA3;text-decoration-thickness:3px">DIGI.PINK</span>${cap('No watermark', 'Clean shares')}`, 2, 124)}
    </div></div>
    <div style="padding:0 20px 24px;display:flex;flex-direction:column;flex-grow:1">
      <div style="display:flex;align-items:center;gap:8px;margin-top:18px">${pixelLogo(3.4)}<span class="pix" style="font-size:12px;padding:3px 8px;border-radius:5px;background:#FF4FA3;color:#1A0010">PLUS</span></div><div class="serif" style="font-size:36px;line-height:1.02;margin-top:8px">Keep the <span class="pink">flash</span> going</div>
      <div style="flex-grow:1"></div>${payBottom()}</div></div>`;
}
// Out of digis: separate sheet, Party Pack first (Replika), never on the main paywall
function payPack() {
  const pk = (sel, n, price, sub, badge) => `<div style="position:relative;flex:1;border-radius:20px;padding:16px 14px;text-align:center;${sel ? 'background:#FFFFFF;color:#1A0010' : 'background:#1C1C22;border:1.5px solid #2E2E36'}">${badge ? `<span style="position:absolute;top:-10px;left:50%;transform:translateX(-50%);white-space:nowrap;padding:3px 9px;border-radius:999px;background:#FF4FA3;color:#1A0010;font-size:11px;font-weight:800">${badge}</span>` : ''}<div style="font-size:40px;font-weight:800;line-height:1">${n}</div><div style="font-size:14px;font-weight:600;margin-top:2px">AI digis</div><div style="font-size:22px;font-weight:800;margin-top:12px">${price}</div><div style="font-size:12px;margin-top:2px;${sel ? 'color:#55304A' : 'color:#B4B4C0'}">${sub}</div></div>`;
  return camera({ ...PICK, overlay: sheet(`<div style="text-align:center"><div class="pix" style="font-size:12px;color:#FF7DBE">0 DIGIS LEFT · CAMERA'S STILL FREE</div><div class="serif" style="font-size:34px;margin-top:6px">Party <span class="pink">tonight?</span></div><div style="font-size:14px;color:#B4B4C0;margin-top:4px">Pay once. Your digis never expire.</div></div>
    <div style="display:flex;gap:10px;margin:22px 0 16px">${pk(true, '25', '$5.99', 'Party Pack', 'PAY ONCE')}${pk(false, '60', '$11.99', 'Big Night')}</div>
    <div style="height:58px;border-radius:999px;background:#FFFFFF;color:#1A0010;font-weight:800;font-size:17px;display:flex;align-items:center;justify-content:center;box-shadow:0 10px 34px rgba(255,79,163,.5)">Get 25 digis · $5.99</div>
    <div style="display:flex;align-items:center;gap:10px;margin:16px 0 4px;color:#9A9AA8;font-size:12px"><span style="flex:1;height:1px;background:#2E2E36"></span>or<span style="flex:1;height:1px;background:#2E2E36"></span></div>
    <div style="display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:16px;background:#1C1C22"><div style="flex-grow:1"><div style="font-size:15px;font-weight:700">Digi Plus · 60 digis a month</div><div style="font-size:12px;color:#B4B4C0">3 days free, then $39.99/year</div></div><span style="height:40px;padding:0 14px;border-radius:999px;background:#2A1420;color:#FF7DBE;font-weight:700;font-size:14px;display:flex;align-items:center">See Plus</span></div>`) });
}

const ONB_A = camera({ ...PICK, photo: 'r2.png', photoFilter: 'brightness(1.12) saturate(.75)', vfOverlay: vfLabel('A NORMAL PHONE PIC'), overlay: coach('Tap it.') });
const ONB_B = camera({ ...PICK, photo: 'r2.png', photoFilter: 'contrast(1.3) saturate(1.25) brightness(.92)', vfOverlay: vfLabel("THAT'S A DIGI", true) + `<span class="stamp" style="position:absolute;bottom:10px;right:10px;font-size:15px">11 17 '26</span>`,
  overlay: `<div style="position:absolute;inset:0;pointer-events:none">${confetti()}</div>` + sheet(`<div class="serif" style="font-size:30px;line-height:1.05">Now shoot <span class="pink">your</span> party</div><div style="font-size:15px;color:#B4B4C0;margin:8px 0 18px">Digi needs the camera. Photos stay on your phone.</div><div class="btn">Use my camera</div>`) });
const ONB_C = camera({ ...PICK, overlay: sheet(`<div class="serif" style="font-size:30px;line-height:1.05">What's <span class="pink">tonight?</span></div><div style="font-size:15px;color:#B4B4C0;margin:6px 0 14px">One tap. We'll set your first looks.</div><div style="display:flex;flex-wrap:wrap;gap:8px">${['🎂 Birthday', '🏠 House party', '🌃 Night out', '🎄 Holidays', '💍 Wedding', '✌️ Just us'].map((t) => chip(t)).join('')}</div><div style="font-size:13px;color:#9A9AA8;margin-top:16px">Next: how did you find Digi? (1 tap)</div>`) });

function paywallBleed(single) {
  const hero = `<div style="position:absolute;top:0;left:0;right:0;height:${single ? 520 : 440}px">
      <img src="${img('r1.png')}" style="width:100%;height:100%;object-fit:cover;filter:contrast(1.28) saturate(1.25) brightness(.95)">
      <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(11,11,14,.55) 0%,rgba(11,11,14,0) 22%,rgba(11,11,14,0) 55%,#0B0B0E 100%)"></div>
      <span class="stamp" style="position:absolute;right:18px;bottom:${single ? 120 : 90}px;font-size:17px">11 17 '26</span>
      <span class="pix" style="position:absolute;left:18px;bottom:${single ? 122 : 92}px;font-size:11px;padding:3px 8px;border-radius:4px;background:#FF4FA3;color:#1A0010">YOURS ✦</span></div>`;
  const head = `<div style="position:relative;display:flex;justify-content:space-between;align-items:center;padding:12px 16px"><div class="ico" style="background:rgba(0,0,0,.45)">${ICON.x}</div><div style="display:flex;align-items:center;gap:6px">${pixelLogo(3.2)}<span class="pix" style="font-size:11px;padding:3px 7px;border-radius:5px;background:#FF4FA3;color:#1A0010">PLUS</span></div><span style="width:44px;font-size:14px;font-weight:600;color:#fff;text-align:right">Restore</span></div>`;
  const foot = (cta, line) => `<div class="btn">${cta}</div><div style="text-align:center;font-size:12px;color:#B4B4C0;margin-top:8px">${line}</div>`;
  if (single) {
    return `<div class="screen">${hero}${head}<div style="flex-grow:1"></div><div style="position:relative;padding:0 20px 26px">
      <div class="serif" style="font-size:38px;line-height:1">Keep the <span class="pink">flash</span> going</div>
      <div style="font-size:15px;color:#B4B4C0;margin:10px 0 16px">60 AI digis a month · every look · no watermark</div>
      <div style="display:flex;align-items:baseline;gap:8px;margin-bottom:4px"><span style="font-size:34px;font-weight:700">$39.99</span><span style="font-size:17px;color:#B4B4C0">/ year</span><span style="margin-left:auto;font-size:12px;font-weight:700;padding:3px 8px;border-radius:999px;background:#2A1420;color:#FF7DBE">3 DAYS FREE</span></div>
      <div style="font-size:13px;color:#9A9AA8;margin-bottom:16px">About $0.77 a week</div>
      ${foot('Start my 3 free days', 'Not charged until Nov 20. Cancel anytime.')}
      <div style="display:flex;justify-content:center;gap:18px;margin-top:10px;font-size:14px;font-weight:600;color:#FF7DBE"><span>Other plans</span><span>25 digis · $5.99</span></div>
      <div style="text-align:center;font-size:12px;color:#9A9AA8;margin-top:8px"><u>Terms</u> · <u>Privacy</u></div></div></div>`;
  }
  const row = (sel, name, price, per, sub, badge) => `<div style="position:relative;display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:16px;border:2px solid ${sel ? '#FF4FA3' : '#2E2E36'};background:${sel ? '#2A1420' : 'rgba(23,23,28,.9)'}">${badge ? `<span style="position:absolute;top:-10px;right:14px;padding:2px 8px;border-radius:999px;background:#FF4FA3;color:#1A0010;font-size:11px;font-weight:700">${badge}</span>` : ''}<span style="width:22px;height:22px;border-radius:50%;border:2px solid ${sel ? '#FF4FA3' : '#55555F'};display:flex;align-items:center;justify-content:center">${sel ? '<span style="width:12px;height:12px;border-radius:50%;background:#FF4FA3"></span>' : ''}</span><div style="flex-grow:1"><div style="font-size:15px;font-weight:600">${name}</div><div style="font-size:13px;color:#B4B4C0">${sub}</div></div><div style="white-space:nowrap"><span style="font-size:22px;font-weight:700">${price}</span><span style="font-size:14px;color:#B4B4C0"> ${per}</span></div></div>`;
  return `<div class="screen">${hero}${head}<div style="flex-grow:1"></div><div style="position:relative;padding:0 20px 26px">
    <div class="serif" style="font-size:36px;line-height:1;margin-bottom:12px">Keep the <span class="pink">flash</span> going</div>
    <div style="display:flex;gap:14px;font-size:14px;color:#fff;margin-bottom:14px">${['60 AI digis/mo', 'Every look', 'No watermark'].map((t) => `<span style="display:flex;align-items:center;gap:4px">${ICON.check.replace('18', '15').replace('18', '15')}${t}</span>`).join('')}</div>
    <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:16px">${row(true, 'Yearly', '$39.99', '/ yr', '3 days free · ~$0.77/wk', 'BEST VALUE')}${row(false, 'Weekly', '$6.99', '/ wk', '30 AI digis a week')}</div>
    ${foot('Start my 3 free days', 'Then $39.99/year. Not charged until Nov 20. Cancel anytime.')}
    <div style="text-align:center;font-size:14px;font-weight:600;color:#FF7DBE;margin-top:8px">Just tonight? 25 digis · $5.99 →</div>
    <div style="text-align:center;font-size:12px;color:#9A9AA8;margin-top:6px"><u>Terms</u> · <u>Privacy</u></div></div></div>`;
}

const SCREENS = {
  'q1-pink': camera({ ...BASE }),
  'q1-silver': camera({ ...BASE, skin: 'silver' }),
  'q1-black': camera({ ...BASE, skin: 'black' }),
  'q2-header': camera({ ...BASE, logo: 'header' }),
  'q2-body': camera({ ...BASE, logo: 'body' }),
  'q2-both': camera({ ...BASE, logo: 'both' }),
  'q3-none': camera({ ...BASE, hw: 'none' }),
  'q3-bar': camera({ ...BASE, hw: 'bar' }),
  'q3-full': camera({ ...BASE, hw: 'full' }),
  'q4-tabs': camera({ ...BASE }),
  'q4-tiles': camera({ ...BASE, looks: 'tiles' }),
  'q4-hybrid': camera({ ...BASE, looks: 'hybrid' }),
  'q5-welcome': welcome(),
  'q5-occasion': pickOne("What's the", 'occasion?', 'One tap. We pick your first looks.', ['Birthday', 'House party', 'Night out', 'Holidays', 'Wedding', 'Just us'], ['r5.png', 'r1.png', 'r2.png', 'r6.png', 'r4.png', 'selfie.png']),
  'q5-source': pickOne('How did you', 'find us?', 'One tap. It helps us a lot.', ['TikTok', 'Instagram', 'A friend', 'App Store search', 'Somewhere else']),
  'q6-strips': paywall('strips'),
  'q6-beforeafter': paywall('beforeafter'),
  'q6-pixel': paywall('pixel'),
  'r6-q1': R6_Q1, 'r6-q2': R6_Q2, 'r6-q3': R6_Q3, 'r6-gender': R6_G, 'r6-q4': R6_Q4, 'r6-ready': R6_READY,
  'r6-pay-a': payA(), 'r6-pay-b': payB(), 'r6-pack': payPack(),
  'r5-q1': Q1, 'r5-q2': Q2, 'r5-q3': Q3, 'r5-q4': Q4, 'r5-ready': ready(),
  'r5-pay-pro': paywallPro(false),
  'r5-pay-glass': paywallPro(true),
  'r4-unbox': unbox(),
  'r4-onb-a': ONB_A,
  'r4-onb-b': ONB_B,
  'r4-onb-c': ONB_C,
  'r4-pay-bleed': paywallBleed(false),
  'r4-pay-single': paywallBleed(true),
  'logo-concept-pink': camera({ ...BASE }),
  'logo-concept-mint': withLogo('concept', '#CDEDEC', () => camera({ ...BASE })),
  'logo-v1-silk': withLogo('silk', '#FF4FA3', () => camera({ ...BASE })),
  'logo-thin': withLogo('thin', '#FF4FA3', () => camera({ ...BASE })),
};

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  const audit = {};
  for (const [name, html] of Object.entries(SCREENS)) {
    const file = path.join(OUT, name + '.html');
    fs.writeFileSync(file, `<!doctype html><html><head><meta charset="utf-8"><style>${CSS}</style></head><body>${html}</body></html>`);
    await page.goto('file://' + file);
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(150);
    await page.screenshot({ path: path.join(OUT, name + '.png') });
    if (name.startsWith('r6-')) {
      audit[name] = await page.evaluate(() => {
        const scr = document.querySelector('.screen');
        const clone = scr.cloneNode(true); clone.querySelectorAll('.stamp,.pix,svg').forEach((e) => e.remove()); document.body.appendChild(clone); const txt = clone.innerText; clone.remove();
        const words = txt.split(/\s+/).filter((w) => /[A-Za-z0-9$]/.test(w)).length;
        const prices = [...scr.querySelectorAll('*')].filter((e) => e.children.length === 0 && /\$\d/.test(e.textContent)).map((e) => ({ t: e.textContent.trim().slice(0, 40), px: parseFloat(getComputedStyle(e).fontSize) }));
        const over = [...scr.querySelectorAll('*')].some((e) => { const r = e.getBoundingClientRect(); return r.bottom > 845 && r.height > 0 && getComputedStyle(e).position !== 'absolute'; });
        return { words, overflow: over, prices };
      });
    }
    fs.unlinkSync(file);
  }
  fs.writeFileSync(path.join(__dirname, 'audit-metrics.json'), JSON.stringify(audit, null, 1));
  await browser.close();
  console.log('rendered', Object.keys(SCREENS).length);
})();
