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
  D: ['011111100', '111111110', '111000111', '111000111', '111000111', '111000111', '111000111', '111111110', '011111100'],
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
        <img src="${img('r1.png')}" style="width:100%;height:100%;object-fit:cover;filter:contrast(1.08) saturate(1.12)">
        ${hud}${zoomChips}
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

  return `<div class="screen">${top}${body}${looksUi}${controls}<div style="height:26px"></div></div>`;
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
      <div style="width:270px;border-radius:24px;background:${SKIN.pink.bg};padding:9px;transform:rotate(-3deg);box-shadow:0 14px 30px rgba(255,79,163,.25)"><div style="position:relative;height:196px;border-radius:12px;overflow:hidden;border:6px solid #26252B"><img src="${img('r1.png')}" style="width:100%;height:100%;object-fit:cover;filter:contrast(1.25) saturate(1.2)"><span class="stamp" style="position:absolute;bottom:6px;right:8px;font-size:12px">11 17 '26</span></div></div></div>`;
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
    <div style="display:flex;padding:16px 20px 14px;gap:6px">${[['Today', 'Every AI look'], ['Nov 19', 'We remind you'], ['Nov 20', 'First charge']].map(([d, t], i) => `<div style="flex:1"><div style="height:4px;border-radius:2px;background:${i === 0 ? '#FF4FA3' : '#3A3A44'};margin-bottom:6px"></div><div style="font-size:13px;font-weight:700">${d}</div><div style="font-size:12px;color:#B4B4C0">${t}</div></div>`).join('')}</div>
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
  'logo-concept-pink': camera({ ...BASE }),
  'logo-concept-mint': withLogo('concept', '#CDEDEC', () => camera({ ...BASE })),
  'logo-v1-silk': withLogo('silk', '#FF4FA3', () => camera({ ...BASE })),
  'logo-thin': withLogo('thin', '#FF4FA3', () => camera({ ...BASE })),
};

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  for (const [name, html] of Object.entries(SCREENS)) {
    const file = path.join(OUT, name + '.html');
    fs.writeFileSync(file, `<!doctype html><html><head><meta charset="utf-8"><style>${CSS}</style></head><body>${html}</body></html>`);
    await page.goto('file://' + file);
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(150);
    await page.screenshot({ path: path.join(OUT, name + '.png') });
    fs.unlinkSync(file);
  }
  await browser.close();
  console.log('rendered', Object.keys(SCREENS).length);
})();
