// Tap-through prototype of the picked Digi design (rounds 3–9).
// Renders each screen as a JPG and records where its tappable buttons are (by their text),
// so the prototype page can put real tap targets on top. Run from the repo root:
//   node docs/design/prototype/build.js
const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright');
const G = require('../round3/gen.js');

const OUT = path.join(__dirname, 'screens');
fs.mkdirSync(OUT, { recursive: true });
const { camera, sheet, confetti, vfLabel, PICK, img, payA, payPack, freeCard, pickLook, ready, appleBtn } = G;

// ---- screens the After Dark flow still needed (copy per ch. 18 / ch. 22, no "AI" except where required) ----
const wow = camera({
  ...PICK, photo: 'r2.png', photoFilter: 'contrast(1.3) saturate(1.25) brightness(.92)',
  vfOverlay: vfLabel("THAT'S A DIGI", true) + `<span class="stamp" style="position:absolute;bottom:10px;right:10px;font-size:15px">11 17 '26</span>`,
  overlay: `<div style="position:absolute;inset:0;pointer-events:none">${confetti()}</div>` + sheet(`<div class="serif" style="font-size:32px;line-height:1.05">That's a <span class="pink">digi.</span></div><div style="font-size:15px;color:#B4B4C0;margin:8px 0 18px">Flash, grain, the orange date. Now set up yours: 5 quick taps.</div><div class="btn">Let's go</div>`),
});
const tapIt = camera({ ...PICK, photo: 'r2.png', photoFilter: 'brightness(1.12) saturate(.75)', vfOverlay: vfLabel('A NORMAL PHONE PIC'), overlay: `<div style="position:absolute;left:50%;bottom:178px;transform:translateX(-50%);white-space:nowrap;padding:10px 16px;border-radius:14px;background:#fff;color:#1A0010;font-size:16px;font-weight:700;box-shadow:0 8px 24px rgba(0,0,0,.5)">Tap it.<span style="position:absolute;left:50%;bottom:-7px;margin-left:-7px;width:14px;height:14px;background:#fff;transform:rotate(45deg)"></span></div>` });
const cam = camera({ ...PICK });
const consent = camera({
  ...PICK, overlay: sheet(`<div class="pix" style="font-size:12px;color:#FF7DBE">BEFORE YOUR FIRST AFTER DARK ✦</div>
  <div class="serif" style="font-size:32px;line-height:1.05;margin-top:6px">The room goes <span class="pink">dark</span></div>
  <div style="font-size:14px;color:#B4B4C0;margin:10px 0 14px;line-height:1.45">To re-light it, we send this one photo to our AI partners (OpenRouter and Black Forest Labs, USA). It's deleted right after. Never used to train AI.</div>
  <div style="display:flex;align-items:center;gap:12px;padding:14px;border-radius:16px;background:#1C1C22;margin-bottom:14px"><span style="width:26px;height:26px;border-radius:7px;border:2px solid #FF4FA3;flex-shrink:0"></span><span style="font-size:15px;font-weight:600">Everyone in this photo is 18+ and said yes</span></div>
  <div class="btn">Make it After Dark ✦</div><div style="text-align:center;font-size:13px;color:#9A9AA8;margin-top:10px">Free digi 1 of 2 · If a face looks off, the redo is free</div>`),
});
const developing = `<div class="screen" style="align-items:center">
  <div style="margin-top:70px;width:330px;border-radius:30px;background:${G.SKIN.pink.bg};padding:12px;box-shadow:0 14px 40px rgba(255,79,163,.25)">
    <div style="border-radius:16px;background:#26252B;padding:8px"><div style="position:relative;height:380px;border-radius:9px;overflow:hidden">
      <img src="${img('r1.png')}" style="width:100%;height:100%;object-fit:cover;filter:blur(14px) brightness(.6)">
      <span class="pix" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:15px;letter-spacing:2px">DEVELOPING…</span>
      <span class="stamp" style="position:absolute;right:10px;bottom:8px;font-size:15px">11 17 '26</span></div></div></div>
  <div class="serif" style="font-size:36px;margin-top:26px">Lights <span class="pink">off…</span></div>
  <div style="font-size:15px;color:#B4B4C0;margin-top:6px">Usually about 15 seconds</div>
  <div style="width:220px;height:6px;border-radius:3px;background:#26252B;margin-top:16px"><div style="width:60%;height:100%;border-radius:3px;background:#FF4FA3"></div></div>
  <div style="flex-grow:1"></div>
  <div style="width:350px;display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-radius:16px;background:#17171C;margin-bottom:12px"><span style="font-size:15px;font-weight:600">Ping me when it's ready</span><span style="width:51px;height:31px;border-radius:16px;background:#FF4FA3;position:relative"><span style="position:absolute;right:2px;top:2px;width:27px;height:27px;border-radius:50%;background:#fff"></span></span></div>
  <div style="width:350px;height:54px;border-radius:999px;background:#26252B;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px;margin-bottom:28px">Keep shooting</div></div>`;
const result = `<div class="screen">
  <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px"><div class="ico">${G.ICON.x}</div><span class="pix" style="font-size:13px;color:#FF7DBE">AFTER DARK ✦</span><span style="width:44px;font-size:14px;font-weight:600;color:#B4B4C0">Redo</span></div>
  <div style="position:relative;margin:4px 14px 0;height:520px;border-radius:22px;overflow:hidden">
    <img src="${img('r1.png')}" style="width:100%;height:100%;object-fit:cover;filter:contrast(1.35) saturate(1.3) brightness(.9)">
    <div style="position:absolute;inset:0;background:radial-gradient(70% 55% at 50% 45%,rgba(0,0,0,0) 40%,rgba(0,0,0,.75) 100%)"></div>
    <span style="position:absolute;top:12px;left:12px;height:34px;padding:0 14px;border-radius:999px;background:rgba(0,0,0,.55);font-size:13px;font-weight:700;display:flex;align-items:center">Hold for before</span>
    <span class="pix" style="position:absolute;left:14px;bottom:12px;font-size:12px;color:#FF9A2E">DIGI.PINK</span>
    <span class="stamp" style="position:absolute;right:14px;bottom:10px;font-size:17px">11 17 '26</span></div>
  <div style="display:flex;gap:10px;padding:16px 14px 0">
    <div style="flex:1;height:54px;border-radius:999px;background:#FF4FA3;color:#1A0010;font-weight:800;font-size:16px;display:flex;align-items:center;justify-content:center">Share</div>
    <div style="width:110px;height:54px;border-radius:999px;background:#26252B;font-weight:700;font-size:16px;display:flex;align-items:center;justify-content:center">Save</div></div>
  <div style="display:flex;gap:10px;padding:10px 14px 0">
    <div style="flex:1;height:52px;border-radius:16px;background:#17171C;border:1.5px solid #2E2E36;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center">Make it Live ✦ 3</div>
    <div style="flex:1;height:52px;border-radius:16px;background:#17171C;border:1.5px solid #2E2E36;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:center">Make a strip ✦ 2</div></div>
  <div style="text-align:center;font-size:13px;color:#9A9AA8;margin-top:12px">1 free digi left · refills Friday</div></div>`;

// ---- the prototype: screens + where each text-labelled button goes ----
const SCREENS = [
  { id: 'tap-it', name: 'Tap it', html: tapIt, links: [['Tap it.', 'wow'], ['[aria-label]|shutter', 'wow']] },
  { id: 'wow', name: "That's a digi", html: wow, links: [["Let's go", 'occasion']] },
  { id: 'occasion', name: 'Occasion', html: G.R6_Q1, links: [['Birthday', 'look'], ['House party', 'look'], ['Night out', 'look'], ['Holidays', 'look'], ['Wedding', 'look'], ['Just us', 'look'], ['Skip', 'look']] },
  { id: 'look', name: 'Pick your look', html: pickLook(), links: [['Use Digicam', 'who'], ['Skip', 'who']] },
  { id: 'who', name: "Who's in your pics", html: G.R6_Q3, links: [['Mostly me', 'gender'], ['Me + a few friends', 'gender'], ['The whole group', 'gender'], ['Skip', 'gender']] },
  { id: 'gender', name: 'Gender (optional)', html: G.R6_G, links: [['Woman', 'source'], ['Man', 'source'], ['Non-binary', 'source'], ['Prefer not to say', 'source'], ['Skip', 'source']] },
  { id: 'source', name: 'How you found us', html: G.R6_Q4, links: [['TikTok', 'ready'], ['Instagram', 'ready'], ['A friend', 'ready'], ['App Store', 'ready'], ['YouTube', 'ready'], ['Other', 'ready'], ['Skip', 'ready']] },
  { id: 'ready', name: "Camera's ready", html: ready(), links: [['Open my camera', 'camera']] },
  { id: 'camera', name: 'Camera', html: cam, links: [['AFTER DARK ✦', 'free'], ['2 FREE DIGIS ✦', 'free']] },
  { id: 'free', name: 'Free digi Friday', html: freeCard('weekly'), links: [['Try After Dark ✦', 'consent'], ['Invite', 'free']] },
  { id: 'consent', name: 'First After Dark', html: consent, links: [['Make it After Dark ✦', 'developing']] },
  { id: 'developing', name: 'Developing', html: developing, links: [['Lights', 'result'], ['Keep shooting', 'result']] },
  { id: 'result', name: 'Your After Dark', html: result, links: [['Share', 'paywall'], ['Save', 'paywall'], ['Make it Live ✦ 3', 'pack'], ['Make a strip ✦ 2', 'pack']] },
  { id: 'paywall', name: 'Digi Plus', html: payA(), links: [['Start my 3 free days', 'camera'], ['Just tonight? 25 digis · $5.99', 'pack'], ['[x]', 'camera']] },
  { id: 'pack', name: 'Out of digis', html: payPack(), links: [['Get 25 digis · $5.99', 'camera'], ['See Plus', 'paywall']] },
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  const out = [];
  for (const sc of SCREENS) {
    const file = path.join(OUT, sc.id + '.html');
    fs.writeFileSync(file, `<!doctype html><html><head><meta charset="utf-8"><style>${G.CSS}</style></head><body>${sc.html}</body></html>`);
    await page.goto('file://' + file);
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(150);
    await page.screenshot({ path: path.join(OUT, sc.id + '.jpg'), type: 'jpeg', quality: 82 });
    const hotspots = [];
    for (const [label, to] of sc.links) {
      const box = await page.evaluate((label) => {
        const all = [...document.querySelectorAll('.screen *')];
        let el = null;
        if (label === '[x]') el = all.find((e) => e.classList.contains('ico') && e.innerHTML.includes('M6 6l12'));
        else if (label.startsWith('[aria-label]')) el = all.find((e) => e.style && e.style.width === '84px' && e.style.height === '84px');
        else {
          const hits = all.filter((e) => e.innerText && e.innerText.trim().replace(/\s+/g, ' ').startsWith(label));
          hits.sort((a, b) => a.getBoundingClientRect().width * a.getBoundingClientRect().height - b.getBoundingClientRect().width * b.getBoundingClientRect().height);
          el = hits[0];
          // grow to the nearest tappable-looking ancestor (a tile, row or button), but never to a whole section
          while (el && el.parentElement && el.getBoundingClientRect().height < 44) {
            const pr = el.parentElement.getBoundingClientRect();
            if (pr.height > 200 || pr.width >= 390) break;
            el = el.parentElement;
          }
        }
        if (!el) return null;
        const r = el.getBoundingClientRect();
        const h = Math.max(r.height, 44), w = Math.max(r.width, 44);
        return { x: Math.round(r.x - (w - r.width) / 2), y: Math.round(r.y - (h - r.height) / 2), w: Math.round(w), h: Math.round(h) };
      }, label);
      if (box) hotspots.push({ label, to, ...box });
      else console.warn('no hotspot for', sc.id, label);
    }
    out.push({ id: sc.id, name: sc.name, hotspots });
    fs.unlinkSync(file);
  }
  fs.writeFileSync(path.join(__dirname, 'flow.json'), JSON.stringify(out, null, 1));
  await browser.close();
  console.log('screens', out.length, 'hotspots', out.reduce((n, s) => n + s.hotspots.length, 0));
})();
