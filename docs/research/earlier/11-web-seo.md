# Digi (digi.pink): website, SEO/AEO, free web tools and share pages (deep study, Nov 16, 2026)

**Labels:** **V** = verified today (link or raw data given) · **C** = claimed by a source or known but not re-checked today · **E** = my estimate.
**Builds on:** `DIGI-SEO-PLAN-2026-11-13.md` (site map, tool ranking, rules). This file does not repeat that plan. It adds new data, corrects four points, and turns the plan into specs you can build.
**Raw data:** `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/digi/web/data/`
- `ac_us.json`: 24 seeds × 27 alphabet expansions, about 5,200 unique suggestions.
- `ac_mods.json`: 77 modifier queries, each run for US, UK and AU.
- `ac_geo.json`: US/GB/AU comparison.
- `ac_us_flat.txt`: readable dump.

---

## 0. The short version

1. **Five new search patterns** are not in the Nov 13 plan (V, from autocomplete):
   - **AI-prompt intent**:
     - "photobooth strip ai prompt", "ai digicam prompt", "ai polaroid prompt"
     - "christmas photo gemini prompt", "graduation photo ai prompt", "ccd camera filter prompt", "disposable camera filter prompt"
     - People are trying to get this look out of Gemini or ChatGPT. Honest prompt pages are the best AEO play we have, and they send people straight to the app ("or do a 4-shot group strip in one tap").
   - **Webcam booth intent**:
     - "online photo booth with friends", "photobooth online webcam", "4 cut photo booth online", "photo booth online free kpop"
     - **"online photo booth for long distance couples / friends"**
   - **Template/PNG intent is huge.** "photo booth template" has 135 template-type variants. "polaroid frame" has 214 (png, transparent, template, horizontal). Downloadable PNG overlays are cheap to make and attract links.
   - **"photo booth not inverted"** (3 variants) is a real pain point. Our booth's "un-mirror" toggle answers it.
   - **"photo strip instagram story / option in instagram / not showing / gone"**: a support-type query we can answer with an honest how-to and a fallback tool.
2. **Corrections to the Nov 13 plan:**
   - **HowTo and FAQ rich results are gone.** HowTo was removed in Sept 2023. FAQ rich results stopped showing on **May 7, 2026** (V: [SEJ, May 10 2026](https://www.searchenginejournal.com/google-drops-faq-rich-results/574429/)). Keep the visible Q&A text, because it still helps AEO. Don't expect stars or dropdowns in results.
   - **`MobileApplication` rich results need real `aggregateRating` or `review` data** (C: [Google software-app docs](https://developers.google.com/search/docs/appearance/structured-data/software-app)). Don't add markup we can't back with real ratings.
   - **Cloudflare Web Analytics does not record UTMs or custom events** (V: [CF WA FAQ](https://developers.cloudflare.com/web-analytics/faq/), "Not yet… do not log query strings"). So web→install attribution needs our own `/go/` redirect logging or Plausible.
   - **No hreflang for US/UK/AU.** Use one English site. Google says to use a generic `en` page when content is the same (V: [Google localized versions](https://developers.google.com/search/docs/specialty/international/localized-versions)). Build UK/AU-intent pages instead, such as "year 12 formal photo ideas" and "leavers photo booth".
3. **Share pages:**
   - Render on a Worker from R2. Send `X-Robots-Tag: noindex` and do **not** block `/s/` in robots.txt; otherwise Google never sees the noindex.
   - OG image: 1200×630, at least 900 px wide; the HTML must be ≤1 MB (V: [Apple TN3156](https://developer.apple.com/documentation/technotes/tn3156-create-rich-previews-for-messages)).
   - Links expire after 30 days, and the owner can delete one at any time (the page then returns 410).
   - Cost is about $5–10 a month up to roughly 10k shares a day (E, from V price lists).
4. **Deferred deep links with no paid SDK** (all V from Apple docs):
   - Custom Product Pages: up to 70 per app, each with its own deep link (iOS 18+). The link only drives the App Store's "Open" button.
   - The Smart App Banner's `app-argument` survives the install when the user goes back to Safari.
   - Add a "copy look code" button on the web and a `UIPasteControl` in onboarding.
   - Never fingerprint. Apple forbids it (V: [Apple privacy](https://developer.apple.com/app-store/user-privacy-and-data-use/)).
5. **The niche is full of small one-person tools**, e.g. picapicaphoto.pages.dev, digicamfx.pages.dev, retrofilterlab-sv.pages.dev, madegooddesigns.com, onaircode.com (V, search results).
   - The good news: low-authority sites rank, so the field is winnable.
   - The bad news: a plain filter tool is a commodity.
   - Win with real before/after looks, tool-to-look-to-app linking, Pinterest, and seasonal templates live **4–8 weeks before** each peak.

---

## 1. Keyword research

### 1.1 Method (V)
- **Source:** `suggestqueries.google.com` (client=firefox, hl=en, gl=us). Each seed was queried bare and with `seed + a…z`: 24 seeds, 648 calls, plus 77 modifier queries × 3 countries.
- **Countries:** `gl=gb/au` returned almost the same lists as `gl=us`. The proxy's IP probably sets the locale, so this endpoint can't measure UK/AU differences. Some AU-only local terms did appear (Kmart, Officeworks, JB Hi-Fi, Melbourne). Treat UK/AU demand as unmeasured (E).
- **How "breadth" works:** breadth means unique suggestions that start with the seed. It tops out around 260 (26 letters × 10), so it's a rough signal for broad seeds. It's useful for narrow ones: "nye photo" gives only 37, "friendsgiving photo" 32, "ugly sweater party photo" 10. Those narrow seeds mean small demand.
- **SERPs:** Google SERPs were not fetched (bot-checked). Bing served degraded junk results to the script, so I stopped there rather than work around it. "Who ranks" below comes from the WebSearch tool, a US index (V for the URLs shown, C for the ranking order).

### 1.2 Breadth and intent mix per seed (V counts from `ac_us.json`)
| Seed | Unique | Tool-type (online/free/maker/generator) | App | Template/PNG/frame | Ideas/poses | Captions | How-to/editing | AI/prompt | Local/rental |
|---|---|---|---|---|---|---|---|---|---|
| photo strip | 227 | 12 | 4 | 33 | 8 | 1 | 3 | 0 | 6 |
| photobooth | 254 | 8 | 4 | 8 | 6 | 1 | 1 | 0 | **33** |
| photo booth template | 154 | 22 | 3 | **135** | 5 | 0 | 8 | 1 | 5 |
| digicam | 248 | 11 | 9 | 5 | 1 | 1 | 2 | 0 | 5 |
| digital camera filter | 132 | 16 | **35** | 2 | 0 | 0 | 7 | 2 | 0 |
| disposable camera filter | 66 | 11 | 11 | 1 | 0 | 0 | 12 | 3 | 0 |
| y2k filter | 110 | 16 | 12 | 5 | 1 | 0 | 7 | 1 | 0 |
| film filter | 192 | 18 | 19 | 4 | 0 | 0 | 20 | 2 | 0 |
| polaroid frame | 215 | 21 | 2 | **214** | 6 | 0 | 7 | 0 | 3 |
| photo booth ideas | 206 | 4 | 0 | 5 | **180** | 0 | 0 | 1 | 4 |
| photo dump | 234 | 12 | 4 | 12 | 16 | **33** | 2 | 0 | 1 |
| christmas photo | 240 | 12 | 4 | 6 | 34 | 3 | 0 | 6 | 12 |
| graduation photo | 233 | 10 | 2 | 16 | 29 | 4 | 3 | 6 | 7 |
| prom photo | 199 | 6 | 2 | 6 | 32 | 4 | 1 | 3 | 12 |
| galentines | 195 | 1 | 1 | 1 | 30 | 4 | 0 | 0 | 12 |
| ai photo | 236 | 66 | 6 | 1 | 2 | 1 | 2 | 236 | 0 |
| date stamp | 235 | 14 | 13 | 2 | 0 | 0 | 0 | 0 | 2 |

**How to read it (E):**
- "photobooth" alone is mostly **local/rental** intent ("near me", city names, museums). Don't target the bare term.
- "photo booth template" and "polaroid frame" are **asset-download** intent. Free PNG/template pages win here.
- "photo booth ideas" is pure **inspiration**, which is a Pinterest game.
- "digital camera filter" leans toward **app** intent, which is good for App Store keywords too.

### 1.3 Clusters (with real suggestions, V)
**A. Tool intent (fully client-side, $0 AI cost)**
- **Strip maker:** photo strip maker online · photo strip generator free · photobooth strip maker online free · photo strip online free · photo strip maker horizontal · photo strip collage maker · photo strip creator · photo strip editor
- **Filters:** digicam filter online free · digicam filter website · digicam editor online · digicam effect online · y2k camera filter website (free) · 2000s camera filter website · ccd camera filter online · disposable camera filter online free · film filter online free · polaroid filter online free · grain filter online · flash filter online
- **Webcam booth:** online photo booth free · photobooth online webcam · photobooth online vintage / cute / aesthetic · 4 cut photo booth online · photo booth online free kpop · online photo booth with friends · **online photo booth for long distance couples / friends** · virtual photo booth online free · selfie booth online free
- **Date stamp:** date stamp generator online free · add date stamp to photos online · date stamp editor online · digicam date stamp (font)
- **Frames and grids:** polaroid frame maker online · polaroid frame editor online free · polaroid frame generator online free · polaroid frame adder · photo dump collage maker (free) · photo dump maker · photo dump generator · photo dump website free

**B. Template / asset intent**
- photo strip template (free download, png, transparent, editable, horizontal, size, canva)
- photobooth strip template png
- photo booth template (free, 4x6, christmas, birthday, graduation, new year, wedding, vintage, aesthetic, black and white)
- polaroid frame png transparent
- digicam overlay png
- film filter overlay / png
- photo strip blank
- christmas photo booth frame / template
- nye photo booth frame
- friendsgiving photo booth template

**C. Inspiration intent (Pinterest-led)**
- **Ideas:** photo booth ideas (poses, friends, couple, party, aesthetic, christmas, new year, birthday, graduation, sweet 16, at home)
- **Poses:** photo booth poses (friends, couples, solo, duo, 3 people)
- **Christmas:** christmas photo ideas (friends, couples, 2026, at home), christmas party photo booth ideas, christmas photo booth backdrop ideas
- **Seasonal:** nye photo ideas, galentines photoshoot ideas, galentines photo booth, prom photo ideas (friends, group), graduation photo ideas, graduation photo booth ideas
- **Strip uses:** photo strip ideas poses, photo strip display ideas
- **Digicam:** digicam aesthetic, digicam y2k look

**D. How-to intent**
- **Look on iPhone:** how to make photos look like digicam / 2000s / disposable camera / photobooth / film on iphone · how to get digicam effect on iphone / android · how to make your photos look like a digital camera
- **Strips:** how to make a photo strip (on canva / instagram story / iphone) · photo strip option in instagram · photo strip instagram story not showing
- **Mac Photo Booth:** how to make photo booth (pictures) not inverted (on mac)
- **Settings and fonts:** digicam iphone edit settings · disposable camera filter settings iphone · photo strip size / dimensions / ratio · photobooth strip font · digicam date stamp font

**E. Captions intent**
- **Photo dump:** photo dump captions (funny, for instagram, for tiktok, reddit, summer, vacation, gen z, of yourself, with friends, with boyfriend, of the year, new year) · photo dump january captions · christmas photo dump captions · christmas and new year photo dump captions · birthday photo dump captions
- **Events and selfies:** prom / graduation / nye photo dump captions · galentines photo caption · mirror selfie captions · work christmas party photo captions

**F. AI / prompt intent (new)**
- **Strips, digicam, polaroid:** photobooth strip ai prompt · ai photo strip generator / free · ai digicam (prompt, filter, flash) · ai polaroid (generator, trend, prompt, maker free)
- **Christmas:** ai christmas photo (trend, generator, prompt, free) · christmas photo gemini prompt · christmas photo trend chatgpt
- **Grad, yearbook, filters:** graduation photo ai prompt / gemini prompt · ai yearbook (photos, trend, generator, app) · ccd / disposable / y2k filter prompt · flash filter prompt (AU)
- **Who ranks today (V, search results):**
  - Dreamina/CapCut has one prompt page in ~10 languages.
  - Media.io has a "Gemini AI photobooth prompt" page.
  - Prompt libraries: Techpresso, Vantaige, Filmora.
  - Atlas Cloud has a "photo booth strip maker" guide noting that Nano Banana returns a 2×2 grid when you ask for 1×4. That's a real failure mode we can document honestly.

**G. Brand/navigational: skip or careful**
- **Physical-booth brands:** life4cuts, photoism, "korean photo booth near me" (huge local intent; AU suggestions list Melbourne/Sydney/Brisbane).
- **Camera brand terms:** "canon g7x filter", "g7x filter app".
- **Our approach:** reach them with descriptive pages ("Korean 4-cut photo booth at home"; "G7X-style look" in body text only). Brand names never go in titles, per the Nov 13 rule.

### 1.4 The 20 pages to build (ranked by winnability × fit to the app)
Competition notes are from WebSearch results (V for the URLs listed). Win score /10 is E.

| # | URL | Main queries | Intent | Who ranks now | Win /10 | Ship by |
|---|---|---|---|---|---|---|
| 1 | `/photo-strip-maker` | photo strip maker online (free), photobooth strip maker online free, photo strip generator free, photo strip maker horizontal | Tool | onaircode, madegooddesigns, picapicaphoto.pages.dev, Templated, Fotor/Pixlr/Kapwing collage pages | **8** | Nov 22 |
| 2 | `/digicam-filter` | digicam filter online free / website, y2k & 2000s camera filter website, ccd camera filter online | Tool | DigicamFilter (on-device, look pages with slider values), WeShop, Media.io, Pokecut, digicamfx.pages.dev | 7 | Nov 22 |
| 3 | `/online-photo-booth` | online photo booth free, photobooth online webcam, 4 cut photo booth online, photobooth online cute/vintage | Tool | BeautyPlus, Wavespeed, madegooddesigns, Teamzlab, Floot, CapCut | 6.5 | Nov 29 |
| 4 | `/date-stamp` | date stamp generator online free, add date stamp to photos online, digicam date stamp | Tool | imagen-ai, pixotter.pages.dev | **8** | Nov 22 (part of #2) |
| 5 | `/templates/photo-strip-png` | photo strip template png / transparent / free download / blank / horizontal | Asset | Canva, Etsy, Pinterest, booth-software sites | 6.5 | Nov 29 |
| 6 | `/templates/christmas-photo-booth` | christmas photo booth template / frame, christmas party photo booth template, photo booth xmas frame | Asset + tool preset | TemplatesBooth (free and paid), dslrBooth store ($15), Check Cherry, Breeze, madegooddesigns | **7.5** | **Nov 29** (peak is December) |
| 7 | `/polaroid-frame-maker` | polaroid frame maker online, polaroid frame editor online free, polaroid frame png transparent | Tool + asset | Cloudinary, Adobe Express, Kapwing, polaroidbooth, onaircode, imageonline | 6 | Dec 6 |
| 8 | `/ai-prompts/photo-booth-strip` (and an `/ai-prompts` hub) | photobooth strip ai prompt, ai photo strip generator, gemini photobooth prompt | AEO / how-to | Media.io, Techpresso, Vantaige, Atlas Cloud, Magic Hour | 7 | Nov 29 |
| 9 | `/ai-prompts/christmas-photo` | ai christmas photo prompt, christmas photo gemini prompt, ai christmas photo trend | AEO | Dreamina, Filmora, prompt libraries, news posts | 6.5 | Dec 6 |
| 10 | `/ai-prompts/digicam` | ai digicam prompt, ccd camera filter prompt, disposable camera filter prompt, flash filter prompt | AEO | thin: prompt libraries | **8** | Dec 6 |
| 11 | `/photo-dump-captions` (hub) | photo dump captions (+ funny / instagram / gen z / tiktok) | Captions | Picsart, Shotkit, The Knot, Scary Mommy, Fotor, NapoleonCat, AOL | 4 (head) | Nov 29 |
| 12 | `/photo-dump-captions/christmas-new-year` | christmas photo dump captions, christmas and new year photo dump captions, photo dump of the year captions, nye photo dump captions | Captions (seasonal) | generic caption blogs | **7** | Dec 6 |
| 13 | `/photo-dump-maker` | photo dump collage maker (free), photo dump template (free), instagram photo dump template, photo dump order ideas | Tool | Canva, CapCut, Fotor, Pixlr, Kapwing, jasperbernaers.com | 5.5 | Dec 13 |
| 14 | `/ideas/christmas-party-photo-booth` | christmas party photo booth ideas, christmas photo booth ideas, office christmas party photo booth | Ideas | Scary Mommy, FixThePhoto, Retouching Labs, Shutterfly, Simplebooth, Adorama | 6 | Nov 29 |
| 15 | `/ideas/new-years-eve-photo-booth` | nye photo booth ideas / frame, new years photo booth template, new years eve photo ideas | Ideas + asset | narrow (37 suggestions); booth vendors | **7.5** | Dec 13 |
| 16 | `/ideas/photo-booth-poses` | photo booth poses (friends, couples, solo, 3 people, duo), photo strip ideas poses | Ideas | BeautyPlus Academy, Airbrush, YouCam, Creatrip (Korean poses) | 6 | Dec 13 |
| 17 | `/how-to/digicam-look-on-iphone` | how to make photos look like digicam / 2000s / disposable on iphone, how to get digicam effect on iphone | How-to | VSCO Learn (sponsored), Preview.ph, Nostalgia Cam blog, Shop Moment | 6.5 | Nov 29 |
| 18 | `/how-to/make-a-photo-strip-on-iphone` | how to make a photo strip (on iphone / instagram story / canva), photo strip option in instagram not showing | How-to | Canva help, PicMonkey, Picapica blog | 7 | Dec 6 |
| 19 | `/ideas/galentines-photo-ideas` | galentines photo booth (props), galentines photoshoot ideas, galentines photo captions | Ideas + captions | lifestyle blogs; Pinterest | 7 | **Jan 9** (pins in December) |
| 20 | `/looks` hub + `/looks/digicam-flash` as the model look page | digicam look, digicam aesthetic, y2k digicam look, flash photo effect, paparazzi filter | Gallery + try-look | Pinterest, VSCO, TikTok pages | 6 | Nov 22 (hub) |

**Next 10 (build after the first 20):**
- `/ideas/prom-photo-ideas` (friends/group angle; publish Feb for Apr–May)
- `/ideas/graduation-photo-booth` (template plus ideas; publish Mar)
- `/ideas/year-12-formal-photo-ideas`: AU; "year 12 formal photo ideas" is V. Formals run Nov–Dec (C), so this is timely now.
- `/ideas/leavers-photo-booth`: UK; "leavers photo booth props / frame" V. Leavers events run June–July.
- `/templates/friendsgiving-photo-booth`: small demand, but due **this week** (Thanksgiving is Nov 26).
- `/ideas/korean-photo-booth-poses-at-home`
- `/online-photo-booth/long-distance`: needs WebRTC (v2). LensBooth already does this (V).
- `/how-to/photo-booth-not-inverted`: Mac Photo Booth answer, plus our un-mirror toggle.
- `/photo-strip-size`: answers "photo strip size / dimensions / ratio" with a 2×6 in (600×1800 @ 300 dpi) table.
- `/captions/mirror-selfie`: huge demand, weak fit. Only if the caption pages work.

---

## 2. Free browser tools: build specs

**Shared rules for every tool:**
- Nothing uploads; all work happens in the page (no `fetch` of image data). Say so in plain words and make it checkable ("works in airplane mode").
- No sign-in. No AI.
- The tool code loads **after** the page's text and preview image. The SEO text is server-rendered above the fold, and the tool loads when tapped or once the browser is idle.
- **Image input** (C):
  - iOS Safari turns HEIC into JPEG for `<input type="file" accept="image/*">`.
  - Desktop Chrome can't decode HEIC. Lazy-load `heic2any@0.0.4` (jsDelivr, MIT; latest version, published 2023-03-29, V via npm registry) **only** when `file.type === "image/heic"`.
  - Use `createImageBitmap(file, {imageOrientation: "from-image"})` for EXIF rotation (C).
- **Size cap:** shrink to ≤2048 px on the long edge before effects. Use `pica@10.0.3` (MIT, 2026-08-15, V on jsDelivr/cdnjs) for good-quality downscaling. This keeps iPhone memory safe (E).
- **Heavy work goes in a Web Worker with `OffscreenCanvas`** where supported (Safari 17+, C), with a fallback to the main thread. This protects INP.
- **Export:** `canvas.toBlob` to JPEG (0.92) or PNG. On mobile, use `navigator.share({files:[…]})` so the user can tap "Save Image" straight to Photos (C), with a plain download as the fallback.
- **Watermark:** a small "digi.pink" mark, **on by default and switch-off-able** (no dark patterns). The mark is our viral loop. Being able to turn it off is what makes the free tool honest.
- **Funnel to the app:** after export, show a bottom sheet with an App Store badge on iOS and a QR code on desktop (`qrcode-generator@2.0.4`, MIT, 2025-08-07, V). Copy: **"Want everyone in it restyled as a 2003 party pic? Do it with AI in Digi."** The link goes through `https://digi.pink/go/<placement>` (§6) to a Custom Product Page that matches the tool.
- **Analytics events** (Plausible, or our own beacon): `tool_open`, `tool_export`, `app_cta_click`. No image data and no file names.

### Tool 1: Photo strip maker `/photo-strip-maker` (effort 2–3 days, E)
- **Targets:** cluster A strips + "photo strip template / size / horizontal", plus the Christmas, NYE, Galentine's and grad frame presets.
- **UX:**
  1. Add 2–4 photos, or "Take them now", which opens Tool 3's camera.
  2. Drag to reorder (`sortablejs@1.15.7`, MIT, V).
  3. Tap a frame to pan and zoom (custom pointer code, or `cropperjs@2.3.1`, V, 2026-10-16).
  4. **Layout:**
     - classic vertical 4×1 at 2×6 in = **600×1800 px @300 dpi**
     - 3×1
     - horizontal 1×4
     - **4×6 print sheet** (two strips side by side, 1200×1800)
     - 2×2 "4-cut" (K-booth style)
     - 9:16 story (1080×1920) with the strip centred
  5. **Style:** B&W, colour, warm film, flash. Simple canvas filters are enough.
  6. **Frame theme:** classic white or black, film-edge, Christmas, NYE glitter, Galentine's hearts, grad cap. These are SVG overlays and need only a little art.
  7. **Text:** an optional date stamp (orange 7-segment font), plus a caption line in a strip font.
  8. **Export:** JPEG, PNG or print sheet.
- **Tech:** Canvas 2D is enough. Frame art is SVG drawn with `drawImage`. Fonts:
  - Strip caption: self-host one subset display font with `font-display: swap`. Load it only in the tool.
  - Date stamp: **DSEG7** (`dseg@0.46.0`, OFL-1.1, V).
- **Mobile performance:** 4 images at 2048 px ≈ 4 × 16 MB decoded RGBA. Shrink to 1200 px for strip frames (≈6 MB total, E) and call `close()` on ImageBitmaps.
- **Funnel:** "Make this strip with AI: same faces, Christmas-party look, 30 seconds." The deep link opens the app's Strip look.

### Tool 2: Digicam filter + date stamp `/digicam-filter` and `/date-stamp` (effort 2–3 days + 1 day tuning presets, E)
- **Targets:** cluster A filters, the date stamp queries, and "digicam iphone edit settings". Each preset also becomes a "recipe" section on its `/looks/<slug>` page. DigicamFilter already does this with slider values (C via [AlternativeTo](https://alternativeto.net/software/digicamfilter/about/)), so ours must add before/afters plus the AI version.
- **UX:**
  - Pick a photo, then pick a preset: **2003 party flash · CCD daylight · night flash · disposable · Y2K webcam · B&W booth**.
  - Before/after slider. Three sliders: Flash, Grain, Warmth.
  - Date stamp switch with a date picker. Default is the photo's EXIF date (read with `exifr@7.1.3`, MIT, V; old but stable) or today.
- **Tech:** **one WebGL2 fragment shader** (~150 lines, our own code; no library needed) with a Canvas 2D fallback. Effect chain:
  1. Exposure lift + centre-weighted flash falloff + vignette
  2. Highlight bloom (a cheap 2-pass blur on bright areas)
  3. CCD colour curve (lifted blacks, cyan-green cast in shadows, punchy reds)
  4. Luma + chroma noise
  5. Slight softness
  6. JPEG crunch: re-encode at q≈0.55, then draw back
  7. 4:3 crop option
  8. Date stamp: DSEG7 in #FF8A1F with a 1–2 px glow, bottom right
- **Mobile performance:** the shader runs in under 50 ms on a 2048 px image on recent iPhones (E). Always preview at screen size and render full size only on export.
- **Funnel:** "This is the filter version. Digi redraws the whole photo: real flash light, real 2000s skin, group shots too." Show 2 real before/after pairs, filter vs. AI.

### Tool 3: Online photo booth (webcam, 4-cut) `/online-photo-booth` (effort 1.5–2 days; long-distance v2 +5 days, E)
- **Targets:** cluster A webcam booth, "4 cut photo booth online", "photo booth not inverted".
- **UX:**
  1. Allow camera (`getUserMedia`, front camera by default).
  2. Choose 3 or 4 shots and a 3 s or 5 s timer.
  3. **Mirror preview, un-mirrored output** (a toggle that answers the "not inverted" queries).
  4. A white flash overlay at each shot. Optional shutter sound, off by default.
  5. Results flow straight into the strip maker (Tool 1).
  6. Works in iOS Safari (needs HTTPS and a user gesture; C).
- **Tech:** `<video>` → canvas capture. Stop camera tracks when done, and show a camera-off indicator.
- **v2, long-distance (two people):** WebRTC with signalling through a Durable Object. A TURN relay costs money (E). Only build it if `/online-photo-booth` gets traction in Search Console. LensBooth already has a "Shared Booth" (V: [AlternativeTo](https://alternativeto.net/software/lensbooth/about/)).
- **Privacy text:** "Your camera never leaves this page. Nothing is recorded or sent."
- **Funnel:** "Long-distance strip? In Digi, each of you adds a selfie and AI puts you in the same booth." This is a real app feature hook (E).

### Tool 4: Polaroid frame maker + free PNG frames `/polaroid-frame-maker`, `/templates/*` (effort 1 day + 1 day of PNG art, E)
- **Targets:** "polaroid frame maker online", "polaroid frame png transparent / template / horizontal", "photo strip template png / blank", the Christmas / NYE / grad photo booth templates.
- **UX:**
  - Pick a photo, then a frame: classic instant (square/mini/wide), film strip, booth strip.
  - Add a handwritten caption (one subset handwriting font).
  - Choose a background (white, cream, black, pink).
  - Export.
  - On template pages, a **"Download transparent PNG"** button serves static PNG/SVG files from Workers static assets. Credit-free, CC0 or our licence.
- **Link magnet (E):** free, well-made transparent PNGs are what bloggers and Pinterest users link to. Put `ImageObject` license metadata on them (§4).

### Tool 5: Photo dump planner `/photo-dump-maker` (effort 2 days, E)
- **Targets:** "photo dump collage maker", "photo dump template (instagram)", "photo dump order ideas", "photo dump layout ideas", "how many pictures in a photo dump".
- **UX:**
  - Add up to 20 photos and drag to order.
  - Preview as an **Instagram carousel at 4:5 (1080×1350)**, as a 3-column profile-grid preview, or as a "seamless panorama" split (one wide image cut into 2–5 slides).
  - Auto-crop with focus.
  - The **caption picker** pulls from the `/photo-dump-captions` data (the same JSON).
  - Export each slide (share sheet on iOS) or as a ZIP (`fflate@0.8.3`, MIT, 2026-05-16, V; ~8 KB). The ZIP is for desktop only, because iOS saves ZIPs to Files, not Photos.
- **Funnel:** "Turn your whole night into one matching flash set: Party mode in Digi." This is the app's headline feature, per FINAL-VERDICT.

**Don't build** (E): an AI caption generator (AI cost on every use), "remove background" (`@imgly/background-removal` is heavy), or a video photo dump maker (CapCut owns it).

---

## 3. Share pages `digi.pink/s/<id>`: spec

### 3.1 What a share page is
- It's what a friend sees when someone taps **Share link** in the app. It's built for **iMessage, WhatsApp, Instagram DMs and TikTok DMs**, not Google.
- **The page:**
  - The photo or strip, big
  - The look name ("Christmas party strip")
  - **"Try this look"** (the main button)
  - "Get Digi" (a small App Store badge)
  - "Report"
  - The footer
- No owner name, no profile and no comments. Visitors can't browse other shares.

### 3.2 URLs, IDs, storage
- **ID:** 12 random base62 characters (about 71 bits) from `crypto.getRandomValues`. Never sequential, so links can't be guessed (E best practice).
- **The app uploads 3 renditions it makes itself.** This costs $0 and avoids Cloudflare Images limits (Free plan: 5,000 unique transformations a month, then a 9422 error, V: [CF Images pricing](https://developers.cloudflare.com/images/pricing/)).
  - `full.webp` or `.jpg`: long edge ≤2160 px, ~400–700 KB. A strip is 720×2160.
  - `og.jpg`: **1200×630**, ~120–180 KB. Strip(s) are centred on a soft blurred or pink background, with **no text in the image**. Apple says to avoid text in previews and to keep images at least 900 px wide (V: TN3156).
  - `thumb.webp`: 400 px.
- **R2 key:** `s/<id>/<secret8>/full.jpg`. The extra secret segment means image URLs can't be guessed even when an ID leaks.
- **Metadata:** a D1 table `shares(id, owner_install_id_hash, look_slug, created_at, expires_at, deleted_at, report_count)`. No personal data is needed: the owner is an app-install key, not an email.
- **Serving:** a custom domain `img.digi.pink` on the R2 bucket. `r2.dev` is "for non-production use cases" and has no caching or WAF (V: [R2 public buckets](https://developers.cloudflare.com/r2/buckets/public-buckets/)).

### 3.3 HTML head (Worker-rendered; the main document must be ≤1 MB, V: TN3156)
```html
<title>Christmas party photo strip</title>
<meta name="robots" content="noindex, nofollow">
<meta property="og:site_name" content="Digi">
<meta property="og:title" content="Christmas party photo strip">          <!-- no brand in og:title (TN3156) -->
<meta property="og:description" content="Made in Digi. Tap to try this look.">
<meta property="og:image" content="https://img.digi.pink/s/Ab3.../k9X.../og.jpg">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta property="og:image:alt" content="AI photo strip in a Christmas party style">
<meta property="og:type" content="website"><meta property="og:url" content="https://digi.pink/s/Ab3...">
<meta name="twitter:card" content="summary_large_image">
<meta name="apple-itunes-app" content="app-id=<APP_ID>, app-argument=https://digi.pink/l/christmas-strip?src=s">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">                <!-- ≥108 px square (TN3156) -->
```
- **Headers:**
  - Send `X-Robots-Tag: noindex, nofollow` on the HTML **and** the images.
  - Also send `Referrer-Policy: strict-origin-when-cross-origin`.
  - Send a strict CSP with no third-party scripts except the analytics beacon.
- **What Messages needs** (all V: TN3156):
  - The same metadata for every user agent.
  - Previews **don't run JavaScript and don't follow meta redirects**. Server redirects are fine. Render the tags on the server.
  - Images under 150 px wide may be ignored.
  - Associated resources are capped at 10 MB in total.
- **robots.txt:** do **not** disallow `/s/`. Google has to fetch the page to see the noindex (C: [Google block-indexing docs](https://developers.google.com/search/docs/crawling-indexing/block-indexing)). Disallow only `/go/` and `/api/`.

### 3.4 Expiry, deletion, privacy
- **Expiry:**
  - The default is **30 days**, enforced two ways: an R2 lifecycle rule on prefix `s/` (objects are deleted within ~24 h of expiry, V: [R2 object lifecycles](https://developers.cloudflare.com/r2/buckets/object-lifecycles/)) and an `expires_at` check in the Worker.
  - After expiry, the page returns **410** with "This photo has expired" plus the Try-this-look button. The funnel keeps working with no photo.
- **Owner delete:** one tap in the app, sent to `DELETE /api/share/<id>` and signed with the install key. Then:
  1. Delete the R2 objects.
  2. Set `deleted_at`.
  3. Purge the 4 URLs from Cloudflare cache (purge-by-URL API).
  4. Return 410.
  - **Tell users honestly** (E): "Previews already shown in someone's chat may stay there."
  - Optional "Keep link" (no expiry) can be a paid perk. Default links must never be held hostage.
- **Consent:** the app's existing "everyone in these photos agreed" checkbox covers sharing too. Add a line: "Anyone with the link can see it."
- **No EXIF or location** on renditions; strip it when encoding in the app.

### 3.5 Anti-abuse
- **Only the app can create shares.** Each upload request carries an **App Attest** assertion (Apple, free; C), so the endpoint can't be used as free image hosting from scripts.
- **Rate limits:** a cap per install, e.g. 30 new links a day (E), using a Workers rate-limiting binding or a D1 counter.
- **Moderation:** the safety check that already runs on generated images (Apple 1.2 pipeline) must pass **before** a link goes live. Only AI outputs can be shared, never raw uploads.
- **Report button:** a form protected by **Turnstile** (free; C). Three reports hide the page automatically until reviewed (E).
- **Takedown:** target 24 h. Block re-shares by hashing the image (E).
- **Legal checks before launch** (C, not legal advice):
  - **US:** register a DMCA agent with the US Copyright Office (small fee).
  - **US:** know the NCMEC reporting duty for US providers (18 U.S.C. §2258A). The app already bans editing children.
  - **UK:** share links may make Digi a "user-to-user service" under the **UK Online Safety Act**, which needs an illegal-content risk assessment. Check this before UK launch.

### 3.6 Caching
- **Images:** immutable URLs with `Cache-Control: public, max-age=31536000, immutable`, served from the edge. On delete, purge the exact URLs.
- **HTML:** `Cache-Control: public, max-age=60, s-maxage=300`, so a deletion shows within ~5 minutes even if the purge fails.
- **Cache keys:** ignore `utm_*` and `src` in the cache key with a Cache Rule. The default cache key includes the whole query string (C).

### 3.7 Cost (prices V from Cloudflare docs; volumes E)
- **Prices:** R2 Standard is $0.015/GB-month, Class A $4.50/M, Class B $0.36/M, egress free. The free tier is 10 GB, 1M Class A and 10M Class B a month ([R2 pricing](https://developers.cloudflare.com/r2/pricing/)). Workers Free is 100k requests a day; Paid is $5/month with 10M requests, and **static-asset requests are free and unlimited** ([Workers pricing](https://developers.cloudflare.com/workers/platform/pricing/)).

| Daily new shares | Stored (30-day window, ~0.8 MB/share) | R2 storage | Class A (3 PUTs/share) | Worker requests (~6 views/share) | Est. total / month |
|---|---|---|---|---|---|
| 1,000 | 24 GB | $0.21 | 90k (free) | 180k (free) | **$0–5** |
| 10,000 | 240 GB | $3.45 | 0.9M (free) | 1.8M | **≈ $9** (Workers Paid $5 + R2) |
| 50,000 | 1.2 TB | $17.85 | 4.5M → $15.75 | 9M | **≈ $39** |

---

## 4. "Try this look" flow + deferred deep links (no paid SDK)

```
share page /s/<id>  ──► "Try this look" ──► https://go.digi.pink/l/<look>?src=s
look page /looks/<look> ─► "Make it in Digi" ─┘
                                   │
            app installed? ── yes ─┴─► Universal Link opens Digi on that look (AASA on go.digi.pink)
                                   │
                                   no ─► Worker logs click (§6) and 302 ► App Store CUSTOM PRODUCT PAGE for that look
                                                    (ppid=<cpp>, pt=<provider>, ct=<placement>)
                                         after install: user taps "Open" in App Store ► CPP deep link ► same look (iOS 18+)
                                         or returns to Safari ► Smart App Banner "Open" passes app-argument ► same look
                                         or opens from Home Screen ► onboarding shows "Paste look link" (UIPasteControl) + Trending looks
```

1. **Universal links on a separate subdomain, `go.digi.pink`** (C): iOS tends to keep same-domain taps in Safari. Keeping the CTA domain different from the page domain makes the app-open more reliable.
   - **AASA files:**
     - On `go.digi.pink`: `{"applinks":{"details":[{"appIDs":["<TEAMID>.pink.digi.app"],"components":[{"/":"/l/*"},{"/":"/open/*"}]}]}}`
     - On `digi.pink`: `/s/*` and later `/@*`, so friends who tap a share link in iMessage go straight into the app if they have it.
   - **AASA rules:** each domain serves its own file at `/.well-known/apple-app-site-association`, over HTTPS, **with no redirects**. Devices get it through Apple's CDN (V: [Supporting associated domains](https://developer.apple.com/documentation/xcode/supporting-associated-domains)).
   - **Expo:** set `ios.associatedDomains: ["applinks:digi.pink","applinks:go.digi.pink"]` (C).
   - **In-app browsers:** TikTok and Instagram often ignore universal links (C), so the share page also shows a plain App Store button.
2. **Custom Product Pages:**
   - Up to **70** per app, each with its own screenshots, a URL you can share, optional **keywords**, and an optional **deep link** (universal link recommended).
   - The deep link must be approved by Apple, works on iOS/iPadOS 18+, and **only changes the URL behind the App Store "Open" button** (V: [Apple CPP](https://developer.apple.com/app-store/custom-product-pages/), [dev forum](https://developer.apple.com/forums/thread/757367)).
   - **Plan (E):** about 12 CPPs: one per hero look (digicam flash, B&W strip, Christmas party, NYE glitter, Y2K, paparazzi, Galentine's, prom, grad, yearbook) + "free tools" + "party mode". Set CPP keywords to match (e.g. "photo strip", "christmas photo booth").
3. **Smart App Banner:**
   - Add it to every look, tool and share page with `app-argument=<go link>`.
   - Apple says that if the user installs from the banner and returns, the banner's **Open** "opens the app while preserving the user's content from your website" (V: [Apple smart banners](https://developer.apple.com/documentation/webkit/promoting-apps-with-smart-app-banners)).
   - It doesn't show inside frames (V).
   - Put campaign tokens in it with `affiliate-data=pt=…&ct=…` (V per [ASC campaign links](https://developer.apple.com/help/app-store-connect-analytics/acquisition/campaign-links/)).
4. **Clipboard, done Apple's way:**
   - The web button says **"Copy look link & get the app"**. It writes the `go.digi.pink/l/<look>` URL when the user taps; browsers allow that.
   - In onboarding, show a `UIPasteControl` (V: [UIKit](https://developer.apple.com/documentation/uikit/uipastecontrol)) labelled "Paste your look link". A user-tapped paste control doesn't trigger the "Allow Paste" alert. Reading the clipboard silently does (since iOS 16, C: [Branch](https://www.branch.io/resources/blog/everything-you-need-to-know-about-ios-16-and-pasteboard-opt-ins/)).
   - Never read the clipboard silently.
5. **Short look codes:**
   - The share page also shows a typeable code, e.g. **XMAS-STRIP**. The app has "Got a look code?" on the look picker.
6. **Never** match IP + device model, or "fingerprint". Apple: "you may not derive data from a device for the purpose of uniquely identifying it" (V: [Apple privacy](https://developer.apple.com/app-store/user-privacy-and-data-use/)).

---

## 5. Technical SEO checklist (Cloudflare)

### 5.1 Stack (options side by side)
| Option | Score /10 (E) | Why |
|---|---|---|
| **Astro (static) on Workers Static Assets + one small Worker** for `/s/`, `/go/`, `/api/` | **9** | Ships zero JS by default. Tools load as islands. Content collections validate with Zod (the same habit as AnkiDecks). Static requests are free and unlimited (V). Use `astro@7.4.x`: 7.4.4 (2026-10-28) is old enough; 7.4.12 is too new (V npm). |
| Next.js static export + OpenNext (`@opennextjs/cloudflare@1.20.15`, 2026-10-30, V) | 7.5 | The owner already knows it (Wird, AnkiDecks), but it ships more JS on content pages and has more moving parts. Choose it if one stack across projects matters more. |
| Hand-written HTML + Worker | 6 | Fastest pages, but slow to grow to 50+ pages. |

**Pick:** Astro, unless the owner prefers Next for consistency. Either way, all content is static HTML (Wird rule 4 thinking).

### 5.2 Checklist
- [ ] **URLs:**
  - Lowercase, hyphens, no trailing-slash duplicates (301 to one form).
  - Tools sit at the root (`/photo-strip-maker`), the rest in folders (`/looks/`, `/ideas/`, `/how-to/`, `/templates/`, `/ai-prompts/`, `/photo-dump-captions/`).
- [ ] **Canonical:** each page points to itself, and the Worker strips `utm_*`, `src` and `ref`. Keep tool state in `#hash`, not `?query`.
- [ ] **Titles:**
  - Lead with the keyword; ≤60 characters; "| Digi" at the end.
  - Example: "Free Photo Strip Maker: No Upload, No Sign-Up | Digi".
  - One H1. Meta description ≤155 characters with a concrete promise.
- [ ] **robots.txt:** allow all. Disallow `/go/` and `/api/`. **Allow `/s/`** (it carries noindex). List `Sitemap: https://digi.pink/sitemap-index.xml`.
- [ ] **AI crawlers:**
  - Check Cloudflare's **AI Crawl Control / managed robots.txt**. Cloudflare began blocking AI crawlers by default on new domains in 2025 (C).
  - For AEO, allow the *search/answer* bots (OAI-SearchBot, PerplexityBot, Claude-SearchBot, Bingbot, Googlebot).
  - Allowing *training* bots (GPTBot, CCBot, Google-Extended) is the owner's call. My lean is to allow them, since brand mentions in models help (E).
- [ ] **Sitemaps:**
  - `sitemap-index.xml` lists pages, looks, ideas and an **image sitemap** of the before/after images.
  - Only indexable URLs, with honest `lastmod`.
  - Never include `/s/`, `/go/`, or `/@` profiles that haven't opted in.
- [ ] **Search Console and Bing Webmaster Tools** on day 1. Bing feeds ChatGPT search and Copilot (C).
  - Turn on **Crawler Hints / IndexNow** in Cloudflare (free, C).
- [ ] **Keep the site out of the index until launch:** `SITE_INDEXING=off`, the same pattern as Wird, if pages go up before the app is live.
- [ ] **hreflang:** none for now, because this is one English site (V: Google guidance on same-language versions).
  - Later, add hreflang for es/de/fr/pt (Nov 13 plan), with `x-default`.
  - Use spellings that work everywhere ("photo booth"). Add UK/AU terms in the text ("Christmas jumper party", "Year 12 formal", "leavers", "schoolies") instead of making copies.
- [ ] **Core Web Vitals budgets** (E targets): LCP < 2.0 s (4G, mid-range Android), INP < 150 ms, CLS < 0.05.
  - **LCP:** the hero before/after image is AVIF with a WebP fallback, `fetchpriority="high"`, and set width and height.
  - **JS:** content pages ≤ 30 KB; tool JS loads on tap.
  - **Fonts:** one subset variable font, preloaded. Tool fonts load only inside the tool.
  - **INP:** pixel work happens in a Worker (§2).
  - **Monitoring:** use the `web-vitals@6.2.3` (2026-10-05, V) beacon, or Cloudflare WA's Core Web Vitals report.
- [ ] **Structured data** (only where it's honest):
  | Page | Schema | Note |
  |---|---|---|
  | Home | `Organization` (Grasp Labs LLC, logo, sameAs: TikTok/Pinterest/IG), `WebSite` | |
  | App section on home | `MobileApplication` (operatingSystem iOS, applicationCategory PhotographyApplication, offers price 0) | Rich result needs real `aggregateRating`. Add it only once App Store ratings exist, and never invent them. |
  | Tools | `WebApplication` (browserRequirements, offers price 0, isAccessibleForFree) | |
  | Looks, templates | `ImageObject` with `creator`, `license`, `acquireLicensePage`, `creditText` | Also embed **IPTC DigitalSourceType = trainedAlgorithmicMedia** in AI images (C: Google "About this image" reads IPTC) |
  | How-to, ideas, prompts | `Article` + `BreadcrumbList` | **HowTo and FAQPage give no rich results** (V, §0). Optional; keep the steps and Q&A as visible HTML. |
  | Tutorial clips | `VideoObject` | Video results still exist (C) |
- [ ] **AEO** (being cited in AI Overviews, ChatGPT, Perplexity):
  1. A 40–60 word direct answer under each H1 ("What is the digicam look? …").
  2. Real comparison tables ("digicam vs film vs disposable look"; "filter vs AI restyle").
  3. **Original data that others will quote** (E).
     - Example: "We ran 200 test photos through 10 looks; strips kept faces in 9 of 10".
     - Use only figures from our own logged tests.
  4. Named, dated updates ("Updated Dec 2026 for Christmas looks").
  5. Tool pages carry explanatory HTML. LLMs can't run a canvas, so describe what the tool does and its presets.
  6. Be present where LLMs pull from: Pinterest, Reddit (only where self-promotion is allowed), YouTube Shorts with descriptions, AlternativeTo/Product Hunt listings (Nov 13 plan).
  7. `llms.txt` at the root lists tools, looks and how-tos with one line each.
     - The spec is at v2 ([llmstxt.org](https://llmstxt.org/), V that it exists).
     - No major search engine has confirmed it uses llms.txt (C).
     - It takes 10 minutes and costs nothing; don't expect traffic from it (E).
- [ ] **Internal linking (hub and spoke):**
  - Every tool links to 3 looks + 1 how-to + the current seasonal idea page.
  - Every look links to its tool preset, its prompt page and 2 seasonal pages.
  - Every seasonal page links to its template + tool preset + captions.
  - A sitewide footer links the 5 tools.
  - The share pages' "Try this look" links to `/looks/<slug>`. Share pages are noindex, so this doesn't build SEO equity, but it does drive the funnel.
- [ ] **Programmatic look pages without thin content** (Google's scaled-content rule covers pages "generated… without adding value… no matter how it's created", V: [Google spam policies](https://developers.google.com/search/docs/essentials/spam-policies)):
  - **One template; every look needs, before it is indexable:**
    - at least 3 original before/afters (AI-made fictional people or people who gave written consent)
    - the filter "recipe" (Tool 2 values)
    - a tested AI prompt or the "do it in Digi" steps
    - "best for" occasions
    - 3 written Q&As
  - Pages below that bar stay `noindex` until they're filled.
  - **Cap at 20–30 looks.** No city pages, no "[celebrity] filter" pages, and no auto-written variations.
- [ ] **Gallery user content:** only through an explicit in-app "Submit to the Digi gallery" step (opt-in, moderated, revocable). Never promote share links to the gallery automatically.
- [ ] **Link-in-bio `digi.pink/@name` (later):**
  - Reserve the route and a list of reserved handles now (brands, "admin", "support", celebrity names).
  - Profiles are noindex by default; a profile becomes indexable only by opt-in, with at least 6 public photos.
  - Have an impersonation report path, and add `/@*` to AASA.
  - "link in bio free / tools" is a crowded Linktree market (V, autocomplete). Treat it as a retention feature, not an SEO bet (E).
- [ ] **Footer and legal:** privacy, terms, support, report abuse.
  - "AI-generated images" disclosure on gallery pages.
  - No camera-brand logos.

---

## 6. Measurement (privacy-friendly)

| Option | Cost | UTM / campaigns | Custom events | Verdict (E) |
|---|---|---|---|---|
| **Cloudflare Web Analytics** | Free | **No** (V: FAQ, "Not yet") | **No** (V) | Use for pageviews and Core Web Vitals from day 1 |
| **Plausible** | **$9/mo** Starter (1 site), $14 Growth (V: [plausible.io](https://plausible.io/#pricing)) | Yes (V) | Yes, plus outbound-click goals (V) | Add once Pinterest/TikTok traffic is real (about week 4) |
| **Our own `/go/` redirect log** in Workers Analytics Engine | Not billed yet; Paid plan includes 10M data points/mo (V: [WAE pricing](https://developers.cloudflare.com/analytics/analytics-engine/pricing/)) | We set the fields | Clicks only | **Build it on day 1**: ~40 lines |

**`/go/<placement>` Worker (the core of attribution):**
- **Logs:** placement, page path, look, `cf.country`, device class, `utm_source`/`utm_campaign`, and a timestamp. **No IP and no cookie.**
- **Then:** a 302 to the matching App Store URL `…/id<APP>?ppid=<cpp>&pt=<pt>&ct=<placement>`.
- **`ct` naming rule:** ≤30 characters (V: ASC campaign links). Examples:
  - `web-strip-tool`, `web-digicam-tool`, `web-booth-tool`
  - `web-look-xmas`, `share-s`
  - `pin-xmas-booth`, `tt-bio`, `ig-bio`
- **App Store Connect → Analytics → Campaigns** shows impressions, product page views, first-time downloads, sales and subscriptions per `ct` (V).
  - A row shows only once it has ≥5 users. Data appears after 24 h.
  - A download counts if it happens within 24 h of the click; the last click wins (V).
- **Each CPP** has its own conversion data in App Analytics (C).
- **In the app:** when Digi opens from a universal link or `app-argument`, read `src` and `look` and store them as RevenueCat subscriber attributes (e.g. `$campaign`, `look`; C). Then trial→paid can be split by web placement.

**Weekly dashboard (one sheet, E):**
1. **Search Console:** clicks and impressions per page; queries ranking 8–20 are next week's content updates.
2. **Tools:** opens → exports (goal: ≥40% of opens) → app CTA click (goal: ≥5% of exports).
3. **`/go/` clicks → ASC first-time downloads by `ct`** (click→install goal: ≥25%).
4. **Shares:** links created per 100 generations, views per share, "Try this look" CTR, installs with `ct=share-s`. Together these give an estimate of how much each user spreads the app.
5. **Pinterest Analytics:** outbound clicks per pin (the domain must be claimed).

---

## 7. 12-week content calendar (Nov 16, 2026 – Feb 7, 2027)

**Timing rules:**
- Google needs time (2–6 months for a new domain, Nov 13 plan, E). Pinterest planning runs **3+ months ahead**: Pinterest users plan seasonal activities "three to six months in advance" (C: [Pinterest create blog](https://create.pinterest.com/blog/holiday-content-planning)); one guide says pins should be live 30–45 days before (C).
- **The owner's exams start Dec 5.** Weeks 3–8 must be **written and scheduled by Dec 4**.
- **Dates (C):**
  - US Thanksgiving: Thu Nov 26, 2026
  - Christmas, NYE: fixed
  - Lunar New Year: Sat Feb 6, 2027 (check)
  - Galentine's: Feb 13
  - Valentine's: Feb 14
  - UK Christmas Jumper Day: mid-December (check the date)
  - AU Year 12 formals and Schoolies: late Nov–Dec

| Wk | Dates | Publish on digi.pink | Pinterest focus (what the pins point to) | Hook / note |
|---|---|---|---|---|
| 1 | Nov 16–22 | Home, `/photo-strip-maker`, `/digicam-filter` + `/date-stamp`, `/looks` hub + 3 looks, privacy/terms/support, robots/sitemap/AASA, GSC + Bing | Claim domain; 10 boards; 20 pins (strips, digicam before/afters) | Friendsgiving strip frame preset (small, timely) |
| 2 | Nov 23–29 | `/templates/christmas-photo-booth`, `/ideas/christmas-party-photo-booth`, `/how-to/digicam-look-on-iphone`, `/ai-prompts/photo-booth-strip`, `/photo-dump-captions` hub, `/templates/photo-strip-png`, `/online-photo-booth` | Christmas party booth ideas, Christmas strip templates, digicam aesthetic | Thanksgiving weekend; Black Friday for the app |
| 3 | Nov 30–Dec 6 | `/ai-prompts/christmas-photo`, `/ai-prompts/digicam`, `/photo-dump-captions/christmas-new-year`, `/how-to/make-a-photo-strip-on-iphone`, `/ideas/year-12-formal-photo-ideas` (AU) | Christmas photo ideas for friends, office party booth, ugly sweater / Christmas jumper party | Office-party season starts. **Batch-schedule weeks 4–8 now.** |
| 4 | Dec 7–13 | `/polaroid-frame-maker`, `/ideas/new-years-eve-photo-booth` + NYE frame preset, `/ideas/photo-booth-poses` | NYE photo booth ideas, poses for friends | Christmas Jumper Day (UK): a jumper-party look in the gallery |
| 5 | Dec 14–20 | `/photo-dump-maker`; "Christmas photo dump" section added to captions | Christmas photo dump captions + layouts; **first Galentine's pins** | Peak Christmas party week |
| 6 | Dec 21–27 | Refresh the Christmas pages with real launch examples; "2026 photo dump of the year" page section | Year-in-photos dump, NYE outfits + booth | Light week (holidays); scheduled pins only |
| 7 | Dec 28–Jan 3 | `/ideas/new-years-photo-dump` (captions + layout) | "january photo dump captions" (V), NYE recaps | Recap season |
| 8 | Jan 4–10 | `/ideas/galentines-photo-ideas` + Galentine's strip frame, `/ai-prompts/yearbook` (if "ai yearbook" is still trending) | Galentine's party ideas, photo booth, captions | Pinterest Valentine's planning is in full swing (E) |
| 9 | Jan 11–17 | `/templates/valentines-photo-booth` (+ props printable PDF, V demand: "valentines photo booth props printable pdf"), `/how-to/photo-booth-not-inverted` | Valentine's photo booth ideas, couples poses | First Search Console review: rewrite pages ranked 8–20 |
| 10 | Jan 18–24 | `/ideas/birthday-photo-booth` + template (all-year demand: "birthday photo booth template / ideas / props", V) | Birthday photo dump captions, sweet 16 booth | Evergreen filler |
| 11 | Jan 25–31 | `/ideas/prom-photo-ideas` (friends/group), `/templates/prom-photo-booth` | **Prom pins start** (US prom is Apr–May) | Lunar New Year look if tests show demand |
| 12 | Feb 1–7 | `/ideas/graduation-photo-booth` + grad frame, `/ai-prompts/graduation-photo` (V: "graduation photo ai/gemini prompt") | Graduation booth ideas + templates; Galentine's last push | Plan Q2: prom, grad, UK leavers, long-distance booth v2 |

**Writing rules:** follow the owner's style. Short, human, not AI-sounding. Real examples, sources where facts appear, and he approves every post (AnkiDecks rule 12 spirit).

### 7.1 Pinterest strategy
- **Why Pinterest:** 661M MAU in Q3 2026, with **Gen Z the largest group, at 57% of users** (C, management statement on the Q3 2026 call, reported by [SocialMediaToday](https://socialmediatoday.com/news/pinterest-reports-solid-user-growth-in-q3/873274) / [Nasdaq transcript](https://www.nasdaq.com/articles/pinterest-pins-q3-2026-earnings-call-transcript)). For "ideas" and "template" queries, it works as a search engine.
- **Setup:**
  - A free business account, **claim digi.pink**, and switch on rich pins. Rich pins read our OG/article tags (C).
  - 10 keyword-named boards:
    - Photo booth strip ideas
    - Christmas party photo booth
    - NYE photo booth ideas
    - Galentine's party photo ideas
    - Digicam aesthetic
    - Y2K camera look
    - Photo booth poses
    - Photo dump captions
    - Prom photo ideas
    - Graduation photo booth
- **Pin formats** (2:3, 1000×1500, C: [Pinterest specs](https://help.pinterest.com/en/business/article/pinterest-product-specs); taller pins get cropped in the feed):
  1. Before/after (top/bottom split)
  2. Strip on a coloured background with a 3-word headline
  3. "5 poses for a 4-shot strip" carousel
  4. 6–10 s video of a strip being "printed"
  5. Template preview + "free PNG"
  6. Caption list cards
- **Volume:** 3–5 fresh pins a day, made in batches. Use Pinterest's own scheduler (C: it schedules several weeks ahead) to cover the exam weeks.
- **Pin text:** a keyword-first title ("Christmas party photo booth ideas for friends"), a natural description, and a link to **the exact page** with `?utm_source=pinterest&utm_campaign=<board>` (stripped by the canonical rule).
- **Honesty:** examples use AI-made fictional people and are labelled "AI-generated". Pinterest labels AI content (C). No fake "customer" pins.
- **Check timing with [Pinterest Trends](https://trends.pinterest.com)** before each seasonal batch.

---

## 8. Risks and how to handle them
| Risk | Fix |
|---|---|
| Free tools are copied easily, so they give no lasting edge | Win on looks, gallery examples, templates, internal links and the app funnel, not on the filter code (E) |
| Scaled-content penalty | The quality bar and caps in §5.2. Every page is hand-reviewed |
| Share links misused (non-consensual images, harassment) | Only the app can upload; moderation first; report → hide; 30-day expiry; UK OSA check (§3.5) |
| Messages or iMessage previews leak a deleted photo | Tell users honestly; short HTML cache; purge on delete |
| Deep link fails (in-app browsers, iOS <18) | Four fallbacks in §4; the app's first screen always shows "Trending looks" |
| Brand and trademark | No camera brands in titles, URLs or images (Nov 13 rule). No look-alike booth-company names (Life4Cuts, Photoism) in titles |

---

## 9. Sources
**Keyword data (V, collected today):** `suggestqueries.google.com` raw JSON in `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/digi/web/data/`.

**Google:**
- Spam policies (scaled content): https://developers.google.com/search/docs/essentials/spam-policies (V)
- Localized versions / hreflang: https://developers.google.com/search/docs/specialty/international/localized-versions (V)
- FAQ rich results ended May 7, 2026: https://www.searchenginejournal.com/google-drops-faq-rich-results/574429/ (V); HowTo deprecation 2023: https://developers.google.com/search/blog/2023/08/howto-faq-changes (C)
- Software app structured data: https://developers.google.com/search/docs/appearance/structured-data/software-app (C)
- Block indexing: https://developers.google.com/search/docs/crawling-indexing/block-indexing (C)

**Apple:**
- TN3156 rich previews for Messages: https://developer.apple.com/documentation/technotes/tn3156-create-rich-previews-for-messages (V)
- Smart App Banners: https://developer.apple.com/documentation/webkit/promoting-apps-with-smart-app-banners (V)
- Associated domains / AASA: https://developer.apple.com/documentation/xcode/supporting-associated-domains (V)
- Custom product pages: https://developer.apple.com/app-store/custom-product-pages/ (V); CPP deep-link forum: https://developer.apple.com/forums/thread/757367 (V)
- Campaign links: https://developer.apple.com/help/app-store-connect-analytics/acquisition/campaign-links/ (V)
- Privacy / no fingerprinting: https://developer.apple.com/app-store/user-privacy-and-data-use/ (V)
- UIPasteControl: https://developer.apple.com/documentation/uikit/uipastecontrol (V)
- iOS 16 paste prompts: https://www.branch.io/resources/blog/everything-you-need-to-know-about-ios-16-and-pasteboard-opt-ins/ (C)

**Cloudflare:**
- R2 pricing: https://developers.cloudflare.com/r2/pricing/ (V)
- Workers pricing: https://developers.cloudflare.com/workers/platform/pricing/ (V)
- Images pricing: https://developers.cloudflare.com/images/pricing/ (V)
- R2 lifecycles: https://developers.cloudflare.com/r2/buckets/object-lifecycles/ (V)
- R2 public buckets: https://developers.cloudflare.com/r2/buckets/public-buckets/ (V)
- Web Analytics FAQ: https://developers.cloudflare.com/web-analytics/faq/ (V)
- Analytics Engine pricing: https://developers.cloudflare.com/analytics/analytics-engine/pricing/ (V)

**Analytics and AEO:**
- Plausible pricing: https://plausible.io/#pricing (V)
- llms.txt: https://llmstxt.org/ (V that it exists)

**Pinterest:**
- Q3 2026 users and Gen Z share: https://socialmediatoday.com/news/pinterest-reports-solid-user-growth-in-q3/873274, https://www.nasdaq.com/articles/pinterest-pins-q3-2026-earnings-call-transcript (C)
- Holiday planning: https://create.pinterest.com/blog/holiday-content-planning (C)
- Pin specs: https://help.pinterest.com/en/business/article/pinterest-product-specs (C)

**Competitors and current results** (V that each URL appeared in search results on Nov 16):
- **Strip tools:**
  - https://onaircode.com/photo-strip-maker/
  - https://madegooddesigns.com/tools/photo-booth/
  - https://picapicaphoto.pages.dev/blog/how-to-create-photo-strip
  - https://templated.io/tools/free-online-photo-collage-maker/
- **Digicam and film filters:**
  - https://alternativeto.net/software/digicamfilter/about/
  - https://www.weshop.ai/tools/digital-camera-filter-online
  - https://www.media.io/ai/image-to-image/digital-camera-filter
  - https://digicamfx.pages.dev/
  - https://retrofilterlab-sv.pages.dev/about
- **Webcam booths:**
  - https://wavespeed.ai/free-tools/online-photo-booth
  - https://beautyplus.com/photo-booth
  - https://tool.teamzlab.com/diagnostic/photo-booth/
  - https://floot.com/tools/photo-booth
  - https://alternativeto.net/software/lensbooth/about/
- **Templates:**
  - https://templatesbooth.com/free/holiday-party-photo-booth-template/
  - https://www.checkcherry.com/free-photo-booth-templates
  - https://store.dslrbooth.com/products/red-christmas-template
  - https://breezesys.com/Photobooth/templates6x4.php
- **Polaroid frames:**
  - https://cloudinary.com/tools/polaroid-image-maker
  - https://www.adobe.com/express/create/frame/polaroid
  - https://www.kapwing.com/templates/frame/polaroid
  - https://polaroidbooth.com/polaroid-frame-maker.html
- **AI prompts:**
  - https://dreamina.capcut.com/ai-image/gemini-polaroid-ai-prompt
  - https://www.media.io/image-effects/gemini-ai-photobooth-prompt.html
  - https://academy.techpresso.co/prompts/gemini-prompts-y2k-photos
  - https://www.atlascloud.ai/blog/tips/photo-booth-strip-maker
- **Captions:**
  - https://picsart.com/blog/photo-dump-captions/
  - https://shotkit.com/photo-dump-captions/
  - https://www.theknot.com/content/photo-dump-captions
- **Ideas:**
  - https://www.scarymommy.com/christmas-photo-booth-ideas/
  - https://fixthephoto.com/christmas-photo-booth-ideas.html
  - https://beautyplus.com/academy/photo-booth-poses
- **How-to:**
  - https://www.vsco.co/learn/digital-camera-effect
  - https://old.preview.ph/culture/digicam-effect-apps-a5200-20240919
- **Date stamp:**
  - https://imagen-ai.com/tools/photo-timestamp-adder.md

**Library versions** (V via registry.npmjs.org / jsDelivr API, Nov 16; all at least 2 weeks old):
- pica 10.0.3
- exifr 7.1.3
- heic2any 0.0.4
- qrcode-generator 2.0.4
- fflate 0.8.3
- sortablejs 1.15.7
- cropperjs 2.3.1
- dseg 0.46.0 (OFL)
- web-vitals 6.2.3
- astro 7.4.4
- @opennextjs/cloudflare 1.20.15
- next 16.4.3
