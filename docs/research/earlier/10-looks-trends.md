# Digi: look library, aesthetic trends and prompt craft (Nov 16, 2026)

**Labels:** V = verified today from the source (page, App Store API, our own test files). C = claimed by a source I could not check further. E = my estimate or recommendation.
**No paid calls were made.** I read `booth/gen.py`, `looks.sh`, `strip.sh` and the test contact sheet. I did not run them.
**Files:**
- This report: `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/digi/10-looks-trends.md`
- The look data as JSON with full prompts: `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/digi/looks/looks.json`
- The script that builds that JSON: `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/digi/looks/gen_looks.py`
- Raw App Store data: `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/digi/looks/raw/`

## 0. The short version

1. **The trend is real flash, not polish.** Digicam and direct flash, indie sleaze, photobooth strips and 2016 nostalgia are all rising (V/C). Clean girl, mob wife and coquette are fading (C/E). The thing users hate most is "it changed my face" and "it looks AI" (V, reviews). **Digi's taste rule: every look must still look like a real photo of the real people.**
2. **Competitor reviews are a gift.** WayShot's 150 most recent US reviews average **2.25 stars**, and **19% complain that it changed their face**. Pecra ("G7X Digital Camera") averages **1.2**. Its lifetime ratings are 4.7, so recent users are angry (V). The best praise in the category is "it doesn't change my face".
3. **Our own test, re-read:** the strip and the Christmas look worked. **Digicam and Y2K were too subtle** (barely different from the source). **Paparazzi invented a fake date stamp ("19 05 '18")** (V, `booth/sheet.jpg`). Fixes:
   - stronger optical wording;
   - never ask the model for text or dates;
   - do grain, date stamps, borders and pure colour grades on the phone.
4. **Model limits that matter:** Nano Banana 2.1 keeps character resemblance for **up to 4 people** per workflow (V, Google docs). By default the output keeps the input's size (V). **Group size is therefore a product rule:**
   - 1–4 people: full 4-pose strip;
   - 5–6 people: expression-only strip;
   - 7+ people: single restyle only (E).
5. **Fairness is measurable and it is a real risk:** a 2026 CMU study found that **62–71% of AI portrait edits lightened skin**, rising to **72–75% for Black and Indian subjects** versus 44% for White subjects (C, arXiv preprint). Describing each person's visible features in the prompt reduced the drift but did not remove it. Digi should:
   - add an automatic "cast description" step;
   - run a skin-tone check on every look before launch.
6. **Deliverables:** 30 looks with prompts (12 core, 6 party, 12 seasonal, plus 2 for later), 10 original layouts, prompt rules, and a QA test set with pass gates.

---

## 1. Trends: rising and fading, winter 2026 → summer 2027

**Note:** **Pinterest Predicts 2027 is not out yet** (V, no coverage found Nov 16). The 2026 edition was published **Dec 9, 2025** (V, Axios), so expect the next one around Dec 8–10, 2026 (E). Re-check this table the day it drops. TikTok's Creative Center trend detail pages need a login, so I used TikTok's public "Next 2026" report coverage instead.

| Aesthetic | Direction | Evidence | Label | What Digi does |
|---|---|---|---|---|
| **Digicam / direct flash** (2000s compact, overexposed, grainy) | **Rising, mainstream** | NPR (Jul 18–19, 2026): Canon PowerShot sales up ~7× 2022→2025; flash shots feel "more genuine than phone photos" | C (company figure via NPR) | Core: Digi Flash, After Dark, Webcam '08 |
| **Indie sleaze revival** (flash party pics, smudged liner, 2005–14) | Rising, now "curated imperfection" | The Conversation / Cyprus Mail (May 30, 2026); Interview Magazine | C | After Dark, Webcam '08, House Party |
| **Photobooth strips** (weddings, parties, keepsakes) | Rising in the US/UK/AU | Finger Lakes 1 (Nov 6, 2026): booths "back at weddings and events"; Life Four Cuts and Photomatic now in London and Singapore (Korea Herald) | C | Hero format: 4-strip + layouts |
| **2016 nostalgia** (hazy pink-purple early-Instagram tint, Snapchat dog filter) | Spiked Jan 2026; now a lasting "era" filter | TikTok: "2016" searches +452% in a week; the "2016" filter used on many millions of videos (NBC News, RNZ, The Week) | C | 2016 Feed (free, on-device LUT) |
| **"2006" beauty** (frosty lips, matte, side bangs) | Rising | Who What Wear: "2026's top beauty trends are coming straight out of 2006" (headline) | C | Supports the digicam era; Y2K Glow |
| **Glitchy Glam / maximalism** (mismatched, rainbow, eccentric makeup) | Rising (replaces clean girl) | Pinterest Predicts 2026: avant-garde beauty tutorials +270%, eccentric makeup +100% | V (Pinterest numbers via nss mag) | Y2K Glow, Disco Ball, NYE Glitter. **Never add makeup to faces** (identity) |
| **Vamp Romantic** (dark romantic makeup, goth nails) | Rising for winter | Pinterest 2026: dark romantic makeup +160%, vampire beauty +90% | V | After Dark mood; Halloween 2027 |
| **Opera aesthetic** (red velvet curtains, masquerade, cabaret) | Rising | Pinterest 2026: masquerade +95%, opera outfits +55% | V | Red-curtain booth variant; NYE Gala |
| **Cool Blue / frosted** (icy blues, glacier) | Rising for winter | Pinterest 2026: frosted makeup +150%, glacier aesthetic +35% | V | Snow Day; Soft Studio blue backdrop |
| **Extra Celestial** (holographic, opalescent) | Rising | Pinterest 2026: opalescent +115% | V | Y2K Glow v2 (holo sparkle) |
| **Throwback Kid** (2000s childhood nostalgia) | Rising | Pinterest 2026: 1970s/2000s childhood toys +125% | V | Supports the whole "digicam childhood" story |
| **Sporty / varsity / coastal prep** | Summer 2026 peak (World Cup year); likely holds into summer 2027 | Pinterest Summer 2026 report (May 26, 2026): Off-Duty Varsity, Pep-Rally Glam, Courtside & Coastal Prep | V (newsroom) / E (2027) | Euro Summer, Grad Day; a "Game Day" look later |
| **Ralph Lauren-style Christmas** (tartan, lodge, green/red/navy) and **anti-beige Christmas** | Holiday 2025 peak; likely still strong for 2026 | Apartment Therapy, GMA (2025) | C / E | Christmas Party palette (tartan, warm wood, gold) |
| **Glam party dressing** (metallic bows, sheer tights, glitter) | Rising for holidays | Her Campus / TikTok holiday coverage | C | NYE Glitter |
| **Clean girl** | **Fading** | Pinterest-based coverage: "clean girl era is dead, maximalism is taking over 2026" (IOL, Hello!) | C | Don't build a look on it. WayShot already owns that label |
| **Mob wife** | Faded (peaked Jan 2024) | 2024 coverage; 2025–26 pieces treat it as a reference, not a wave | C/E | Skip |
| **Coquette** (bows, lace, pink) | Fading in the mainstream, alive in the kawaii/K-pop deco niche | Bow searches peaked in 2024 (Fortune on Pinterest 2024: "bow nail designs" +2,220%); Moshicam still sells coquette frames | C/E | Frames only (Galentine's), not an AI look |
| **Office siren** | Fading (2024) | 2024 trend roundups | E | Skip |
| **Tomato girl summer** (2023) | Faded, folded into "Euro summer / coastal" | Pinterest Summer 2026 coastal-prep framing | E | Euro Summer, without the name |
| **Polished AI perfection** (the smooth "AI glow-up") | **Backlash** | TikTok Next 2026 "Reali-TEA" signal (realness over fantasy), as reported; app reviews say "looks AI" and "not my face" (V, section 2) | C/V | Digi's promise: real faces, real-camera look |

**My read on the calendar (E):**

| Window | Focus |
|---|---|
| **Dec–Jan** | Flash, glitter, red curtains, icy blue: Christmas Party, NYE Glitter, After Dark, Snow Day, Summer Christmas (AU) |
| **Jan–Mar** | 2016 Feed (anniversary of the trend), Paparazzi (awards season), Galentine's, Lunar New Year, Eid |
| **Mar–Jun** | Spring Break, Formal Night, Grad Day |
| **Jun–Aug** | Euro Summer, Disposable Roll, Golden Hour |
| **All year** | Digicam/flash stays the base layer |
| **Risk** | The name "Digi" dates if the digicam wave fades in 2027. The look library should therefore lean on "party photo" moments, not just the camera era |

---

## 2. Competitor look catalogue (US App Store, read Nov 16, 2026)

Descriptions and ratings come from the iTunes lookup API. Recent reviews come from the App Store RSS feed, newest first (up to 150 per app). The "face-change %" counts reviews that match "changed / distorted / ruined my face", "not my face", "looks AI" and similar. Raw files are in `looks/raw/`.

| App (id) | Lifetime rating | What looks it sells | Recent reviews (n, avg, face-change %) | What users rave about / hate (quotes, V) |
|---|---|---|---|---|
| **Boothie** (6775603987) | 4.35 (40) | **AI:** "Digicam flash, the 2000s point-and-shoot look", "Night flash & red-flash", "Soft, dreamy, glowy", "AI Flash, Digicam shot, Golden hour". Screenshot tiles: **Sunset Glow, Crimson Night, Digi Cam; Nikon Coolpix, Kodak Gold**. **Free:** film filters, grain/glow sliders, **Beauty Editor incl. "subtle reshape"** | 1 recent review (1★): waiting "10 hours to get more stars" while on a weekly plan | Hate: credit waits on top of a paid plan. Note: it uses camera **brand names** as look labels |
| **WayShot** (6749303003) | 4.72 (5,463) | 5 "cameras": **Digicam** (after-dark flash), **Digilite** (daylight, group photos, photo dumps), **Clean Girl**, **B&W**, **Procam**. Screenshot: free-text AI edits ("clean my dress, remove pedestrians and add sunlight") | **150, avg 2.25, 19% face-change** | Hate: "it completely changed my face… made me look super scary"; "No where does it disclose that the app uses AI… it's not my face"; "ai keeps changing my face 😞… the filters are SOOOO GOOD but it won't stop retouching my face". Rave: "other AI products kinda change my face but this app doesnt". **Correction to our Nov 14 doc:** WayShot is not just on-device filters; it runs AI edits |
| **Pecra: G7X Digital Camera** (6757448890) | 4.41 (1,310) | "Professional camera-style lighting" (AI relight); pays before any use; about $15 for 10 edits | **87, avg 1.20, 14% face-change** | "$15 for ai to completely change your face"; "they actually recreate an image"; "OD facetune your face". A camera trademark in the app name |
| **Dazz Cam** (1422471180) | 4.75 (118K) | Sampled film stocks: 135, 120, toy, slide, half-frame, instant, 3D, disposable, **CCD, compact**; video: 8mm, 16mm, VHS, DCR. Extras: star, prism, fisheye, colour flash | 50, avg 4.14, 0% | Love the looks; hate the UX ("unintuitive"). **Filters don't change faces**, so there are no identity complaints |
| **Esti** (6457366208) | 4.65 (20K) | Film effects "inspired by Polaroid, VCR, Kodak, Super8, Fuji"; overlays (dust, paper, plastic, light leaks); touch-ups (skin tone, hair volume); batch | n/a | (reviews not pulled) |
| **Tezza** (1393061654) | 4.74 (48K) | 40+ founder presets; effects (Stop Motion, Subtitles); frames Super 8, VHS, 8mm, Kodak, VCR; **150+ story templates** (film, editorial, magazines, 90s, y2k, floral) | n/a | Creator-taste brand; templates are a moat |
| **SNOW** (1022267439) | 4.61 (37K) | AR makeup, beauty effects, thousands of stickers, **"exclusive seasonal filters"**, photo booth effect, digicam effects; VIP $6.99/mo | 150, avg 2.34, 1% | Hate: paywall on everything; AI "will distort and add unnatural details" |
| **BeautyCam** (592331499) | 4.75 (23K) | Camera modes: **Digicam, DSLR, Photo Booth, iPhone Cam**; "Sony flash" (paid); slimming, wardrobe | 150, avg 2.57 | Hate: **"it makes you pay for the darker [skin tone] ones which isn't fair at all for people with darker skin"** (2023); usage limits |
| **Remini** (1470373330) | 4.61 (360K) | Enhance/HD, old-photo repair, "influencer-style" portraits | 150, avg 3.61, 1% | Rave: "does not alter faces, twist your eyeballs". Hate: "kept changing group photo completely" |
| **Lensa** (1436732536) | 4.70 (418K) | Retouch, erase, filters, avatars | 150, avg 3.14 | Hate: "you hit edit and your face is all distorted"; AI pushed over the old tools |
| **ReShoot** (6751296351) | 4.58 (18K) | AI face/photo edits | 150, avg 4.17, 3% | **"It changes brown eyes to green eyes, it makes features look european"**; **"Does NOT work well for photos of Black people"**; "turns a girl into a guy" |
| **Moshicam** (6738272757) | 4.86 (586) | Photo booth countdown, **5,000+ artist-made frames, new frames every week**, 1,000+ sticker packs, photocards | 49, avg 4.57 | Rave: "templates are so cute", "everybody is so creative". **Artist frames + weekly drops are the retention engine** |
| **KIRAKIRA** (6794825976, Aug 2026) | new | Purikura clone: 600+ stickers, glitter pens, **"Time attack: 60 seconds to decorate"**, 4-cut / 2×2 / two-cut strips, 16-up sticker sheet, digicam date stamp | 0 | Shows the purikura deco playbook arriving in the US |
| **Mini Photobooth** (1342093386) | 4.75 (9K) | Event mode, countdown, GIF booths, AirPrint printing, 800+ stickers by theme (Birthday Bash, Watercolor Wedding) | n/a | Event/host use case (matches Digi "Event mode" v2) |
| Glam AI / Ulike | not found under those names in the US store search (closest: EasyGlam, "ULike Cam" with 10 ratings) | EasyGlam sells MUA makeup looks, "Facial Symmetry & Reshaping", celebrity match | n/a | Shows the category Digi should not be in (reshaping) |

**What this means for Digi (E):**
1. **"Your faces stay yours" is the wedge.** Put it on the store page and the onboarding:
   - Use AI only where it adds something a filter can't (relighting, backdrops, props, poses).
   - Say plainly that the looks use AI. WayShot's reviews punish it for not disclosing this.
2. **No camera or film brand names in look names.** Boothie and Esti use "Nikon Coolpix", "Kodak Gold" and "Polaroid", and Pecra uses "G7X". Digi uses its own names (Digi Flash, Disposable Roll, Instant). Prompts can stay descriptive and don't need brand words either.
3. **No beauty-reshape tools.** Boothie's "subtle reshape", BeautyCam's slimming and EasyGlam's "symmetry" are exactly what drives the identity complaints. It is also the fairness trap: paid "darker tones" filters, "European features".
4. **Retention comes from frames, not filters.** Moshicam ships 5,000+ artist frames with weekly drops. SNOW sells seasonal filters. Copy the cadence with original designs.

---

## 3. Korean and Japanese photobooth culture: what to borrow

### Facts
- **Life Four Cuts (인생네컷):**
  - started in Daegu in 2017;
  - about **410 stores** and **120M visits** (Korea Herald, Jun 2025, company figures, C);
  - store count reported falling to about 330 more recently (Bizhankook, C).
- **Market:**
  - Korea's instant-photo-booth sales went from **₩134.4bn (2020) to ₩319.6bn (2024)**;
  - closures went from **176 to 611** a year;
  - 20s–30s make up more than 90% of payments in the big Seoul districts (Asia Business Daily, Feb 2026, National Tax Service data, C).
  - So demand is huge, and the physical market is now saturated.
- **Price and format:**
  - ₩4,000 (~$3) for **two** strips, and prints come only in pairs, one for each friend;
  - a **QR code** gives you the digital files **plus a video of the session**, valid for one day;
  - about 1 minute of shooting, then you pick your favourite frames (Korea Herald, JoongAng Daily, C).
- **Brand signatures (C, JoongAng Daily / Soul of Seoul / travel guides):**
  - **Photoism:** "Artist Frames", where you pose "next to" idols and athletes (IU, BTS, KBO teams), at a premium price (₩7,000), with **time-limited runs of ~1 month** (e.g. IU frame May 26–Jun 30; Yoshi birthday frame May 15–Jun 15);
  - **Haru Film:** a blue backdrop with cloud signs and cool-toned edits that "can make people look paler";
  - **Photo Signature:** the most props (headbands, sunglasses, plushies, hats), with **new frames almost weekly** and Sanrio/Doraemon collabs;
  - **Don't Lxxk Up:** a high-angle "looking up" camera with sunglasses props;
  - **Photogray / Photomatic:** elegant B&W and grey looks;
  - **Life Four Cuts:** Disney and Kakao frames, a "personal color" filter, makeup filters "matched to skin tone".
  - The booths also brighten skin, which users call "better and brighter" (Korea Herald, C).
- **Why people come back:**
  - **FOMO on limited frames** ("limited-edition frames encourage return trips");
  - friendship rituals (dressing up "to mark our years of friendship");
  - documenting ordinary days (Korea Herald, C).
- **Poses (Creatrip, JoongAng):**
  - the **finger heart** (a must);
  - the double finger heart;
  - the overhead **arm heart split between two people**;
  - palms on cheeks;
  - a finger frame around the face;
  - a common 4-frame sequence: straight → heart → silly → kiss/cheek.
- **Purikura (Japan):**
  - "Print Club" launched in July 1995 (Atlus);
  - the **rakugaki** decoration corner (pens, stamps, seasonal stickers) arrived around 2000;
  - the decoration time limit is **about 2–3 minutes**, shorter when there is a queue;
  - **big-eye enlargement** became standard after 2007 (Furyu) (LIVE JAPAN, Tsunagu Japan, Japan Journeys, C).

### What Digi borrows (original designs only) (E)
| Borrow | Digi version |
|---|---|
| **Limited-time frames (about 4 weeks)** | A **"Drop" every Thursday**: 1 new look + 2 frames, each with a visible end date ("leaves Jan 31"). It returns next year. Honest, with no fake countdowns |
| **Prints come in pairs** | Every strip exports as a **double strip** (two copies side by side) and a "send one to the group" share card |
| **QR code + video of the session** | The live Digi camera records a **3–4 s "making-of" clip** (countdown, flash, 4 frames dropping into the strip). It is ready-made TikTok content, saved together with the strip |
| **Pose prompts per frame** | The live camera shows a pose card before each shot ("1: look straight · 2: finger hearts · 3: surprised · 4: cheek squish"). The AI strip uses the same 4 beats |
| **Props shelf** | **Digital props** as on-device stickers (headbands, star sunglasses, bows, party hats). They sit on the photo, never generated into faces |
| **Rakugaki time attack** | Optional **"60-second deco"** mode with glitter pen + stamps (KIRAKIRA already copies this; ours must look different) |
| **Artist / idol collabs** | **No celebrities and no brand characters.** Instead, independent illustrators and creators design frames under a written licence, credited in-app ("frame by @artist"). That is Moshicam's model, and a good TikTok story |
| **Backdrop colours** (Haru blue, Photogray grey) | A Soft Studio backdrop picker (sky blue, butter, blush, mint, grey) |
| **Do NOT borrow** | Skin brightening, the cool tones "that make people paler", big-eye enlargement, face slimming. They are wrong for a US/UK/AU audience that is diverse and allergic to "not my face" |

---

## 4. The Digi look library (30 looks + 2 for later)

**How to read this:**
- **Changes:** L = lighting, C = colour, G = grain, P = props, B = background, O = outfit, S = pose/scene.
- **Tier A:** a pure grade. Do it on the phone with a LUT: free, instant, zero identity risk.
- **Tier B:** AI relight, backdrop or props, with faces locked.
- **Tier C:** AI changes outfits or poses. Highest risk; score body shape separately.
- **Risk:** L / M / H for identity, skin tone and body.

**Each full prompt is built as `CAST + LOOK + LOCK + FAIR_LIGHT + GUARD`.** The blocks are in section 6. Only the LOOK block is listed per look below. Full assembled prompts are in `looks.json`. `{N}` and `{CAST}` are filled automatically (section 6.2).

**Launch set (E):** Digi Flash, After Dark, Disposable Roll, Booth Mono, Paparazzi, Y2K Glow, Christmas Party, NYE Glitter, House Party, plus the **4-pose strip**. Free on-device: 2016 Feed, Instant. Then one seasonal drop each week from the table.

### Core (12)

**C1. Digi Flash** · `digi-flash` · when: all year · changes: L C G · tier B · risk L  
*The 2006 point-and-shoot at the party: blown-out flash, dark corners, proof you were there.*  
- LOOK block: "Re-light the photo as if taken with a small 2006 compact digital camera's built-in flash fired straight on from just above the lens: bright, flat, hard light on the faces with slightly overexposed foreheads and cheekbones, a crisp hard shadow cast on the wall right behind the people, light falling off quickly so the room beyond 2 metres goes dim. Cool, slightly blue flash white balance against warm orange lamp light in the background. Small-sensor look: mild digital noise in the shadows, slightly crunchy JPEG detail, a touch of barrel distortion, punchy saturated colour."
- On device: Add orange LCD date stamp + optional 4:3 crop + 0-10% noise on device (never ask the model to draw the date).
- Risk notes: Test showed the soft version barely changed the photo: be explicit about hard shadow, falloff and white-balance clash. Flash naturally overexposes light skin and underexposes deep skin in mixed groups; keep FAIR_LIGHT on.

**C2. After Dark** · `after-dark` · when: all year (peaks Fri/Sat, Dec) · changes: L C B G · tier B · risk M  
*Outside the club at 1 a.m.: black background, one hard flash, everyone glowing.*  
- LOOK block: "Turn this into a night-out flash photo: the people lit by one hard on-camera flash, glossy highlights on skin, the background falling to near-black with a few soft out-of-focus warm street lights. High contrast, rich blacks, slightly lifted saturation, fine digital noise. The scene behind them stays the same type of place, just dark and night-time."
- On device: Optional red-eye-free toggle; vignette and noise on device.
- Risk notes: Darkening the background can pull deep-skin faces into the shadows; FAIR_LIGHT on. Keep the place type (do not move a living room to a street unless asked).

**C3. Disposable Roll** · `disposable` · when: all year (peaks summer) · changes: L C G · tier B · risk L  
*The camera from the bottom of your bag: warm, grainy, a little light leak, 27 shots and none retaken.*  
- LOOK block: "Restyle as a photo from a cheap disposable 35mm film camera with its small flash: warm golden colour with slightly green-cyan shadows, visible fine film grain, soft slightly-off focus, gentle vignette, a faint orange light leak on one edge, flash lighting the people with deep shadows behind them. Colours natural, not orange-tinted on skin."
- On device: Grain, light leak and frame-number border can be on-device; AI only does the flash relight.
- Risk notes: Warm grades push undertones orange/yellow; 'not orange-tinted on skin' clause. Could ship a Tier A on-device version free.

**C4. Booth Mono** · `booth-mono` · when: all year · changes: L C B G · tier B · risk M  
*The mall photobooth your parents used: silver black-and-white, plain curtain, even flash.*  
- LOOK block: "Restyle as a classic black-and-white photobooth print: replace the background with a plain pale-grey pleated curtain directly behind the people, even frontal flash, rich silver-gelatin tones from deep black to clean white, fine grain, very slightly soft focus, a little paper texture. Framed from the chest up, the people closer together as if squeezed into a booth."
- On device: Strip layout, paper tone and cut marks on device.
- Risk notes: In B&W, deep skin can lose detail and become flat; FAIR_LIGHT and 'full tonal range on every face'. Background swap is safe; reframing to chest-up is a composition change (Tier B/C).

**C5. Soft Studio** · `soft-studio` · when: all year · changes: L C B · tier B · risk M  
*The Seoul self-studio feel: clean pastel backdrop, soft bright light, cute and calm.*  
- LOOK block: "Restyle as a modern self-photo studio portrait: a clean seamless backdrop in soft sky blue, even soft bright light from a large source in front, gentle shadows, crisp clean colour, a bright airy feel. The people stay exactly as they are; their real skin tone and texture are kept, lit evenly, not brightened, whitened or smoothed."
- On device: Pastel backdrop colour choice (blue, butter, blush, mint) as a picker; frame on device.
- Risk notes: Korean booths are known for cool edits that make people look paler and for skin 'brightening' (Korea Herald, Soul of Seoul). Explicitly forbid it; highest skin-lightening risk in the core set. Test hardest on MST 7-10.

**C6. Paparazzi** · `paparazzi` · when: all year (peaks awards season Jan-Mar) · changes: L C B G · tier B · risk M  
*Caught leaving the restaurant: three flashes at once, sunglasses optional.*  
- LOOK block: "Restyle as a paparazzi photo taken on a city pavement at night outside a restaurant: several hard flashes from slightly different angles creating crisp highlights and multiple soft shadows, a dark street behind with blurred warm lights and a hint of motion blur in the background only, high contrast, glossy tabloid look. The people stay sharp."
- On device: Optional sunglasses sticker; grain on device.
- Risk notes: Our test invented a fake date stamp ('19 05 18'); GUARD forbids text. Do not add photographers or crowds (extra people = count failures).

**C7. Y2K Glow** · `y2k-glow` · when: all year · changes: L C G P · tier B · risk L  
*Glossy 2002 magazine-party glow: bloom, sparkle and a lilac haze.*  
- LOOK block: "Restyle with an early-2000s glam party look: soft bloom and halation glowing around bright highlights and lights, small four-point star sparkles on the light sources, a dreamy pastel pink-and-lilac tint in the shadows and background, slight chromatic aberration at the edges, a soft flash on the faces. Skin keeps its real colour under the tint."
- On device: Star filter and halation can be on-device for control.
- Risk notes: Test was weak (only a pink tint). Tints on skin read as tone change: keep tint in shadows/background.

**C8. 2016 Feed** · `feed-2016` · when: Jan-Mar 2027 (anniversary of the 2016 trend), then all year · changes: C G · tier A · risk L  
*Your 2016 Instagram: hazy pink-purple fade, vignette, flower-crown energy.*  
- LOOK block: "Re-grade the photo like a 2016 Instagram post: lifted faded blacks, a hazy pink-purple tint, slightly boosted warmth in the highlights, soft vignette, low contrast, a little sharpening. Do not change anything else."
- On device: Ship as an on-device LUT (free, instant). AI version only if combined with flash relight.
- Risk notes: Pure grade: no reason to use AI. 'Search for 2016 up 452% in a week' (Jan 2026, C).

**C9. Webcam '08** · `webcam-08` · when: all year · changes: L C G · tier B · risk M  
*Indie-sleaze profile pic: high angle, flash, eyeliner energy, low-res and proud.*  
- LOOK block: "Restyle as a 2008 party photo taken with a small camera held at arm's length above the group: hard flash, slightly washed-out highlights, heavy contrast, cool colour cast, low resolution softness and visible JPEG blocks in the background, the faces still clearly readable. Keep the original angle; just make it look like that era's camera."
- On device: Downscale-upscale and blockiness better on device (control and no identity damage).
- Risk notes: Asking the model for a new high angle changes geometry (Tier C). Default keeps angle. Heavy degradation hides identity errors in QA: score faces at full res.

**C10. Golden Hour** · `golden-hour` · when: Apr-Sep (N), Oct-Mar (AU) · changes: L C · tier B · risk M  
*The sun just hit right: warm side light, long shadows, glowing hair.*  
- LOOK block: "Re-light the photo as if at golden hour: warm low sunlight coming from one side, soft glowing rim light on hair and shoulders, long soft shadows, a warm sky-tinted ambience, gentle lens flare at the edge. Keep everyone's real skin tone; the warmth comes from the light, not a colour cast on skin."
- On device: Flare intensity slider on device.
- Risk notes: Indoor photos: sunlight through a window, not teleporting outdoors. Warm casts change undertones.

**C11. Editorial Flash** · `editorial-flash` · when: all year (peaks Feb-Mar fashion weeks) · changes: L C B · tier B · risk M  
*Fashion-week street style meets studio: hard flash on white, sharp shadows, attitude.*  
- LOOK block: "Restyle as an editorial fashion photo: a seamless white studio backdrop, one hard direct flash slightly to the side creating a sharp-edged shadow on the backdrop, crisp detail, clean neutral colour, high contrast. Same people, same clothes, same poses."
- On device: Magazine-style typography overlays are Digi's own designs, added on device (never real magazine names).
- Risk notes: Magazine-cover variant: the model must not write mastheads (trademark + garbled text). GUARD on.

**C12. Instant** · `instant-film` · when: all year · changes: L C G · tier A · risk L  
*The square instant print: soft, creamy, slightly faded, developed in your pocket.*  
- LOOK block: "Re-grade as an instant-film photo: soft creamy contrast, slightly faded blues and greens, warm highlights, soft focus at the edges, a gentle flash fall-off. Do not change anything else."
- On device: Square crop + thick-bottom white border + handwriting caption on device. Free tier candidate.
- Risk notes: Do not use the brand name or rainbow stripe trade dress; frame is Digi's own.


### Party (6)

**P1. House Party** · `house-party` · when: all year · changes: L C P B · tier B · risk M  
*Kitchen at midnight: fairy lights, red cups, someone's playlist.*  
- LOOK block: "Make this a house-party flash photo: warm string fairy lights glowing out of focus in the background, a few balloons and party cups on surfaces, direct on-camera flash on the people, warm ambient light, slight grain. Keep the room recognisable, just dressed for a party."
- On device: —
- Risk notes: Only background props; never put objects in people's hands (hands are the top artefact source).

**P2. Birthday** · `birthday` · when: all year · changes: L C P B · tier B · risk M  
*Candles in, flash on, someone's mid-scream: the birthday shot.*  
- LOOK block: "Make this a birthday-party photo: a cluster of metallic and pastel balloons and a simple paper banner without letters in the background, a little confetti in the air (not on faces), warm candle-like glow plus direct flash on the people, slight grain."
- On device: 'Happy birthday {name}' text and age number as on-device stickers in Digi fonts.
- Risk notes: Text on banners garbles; draw text on device.

**P3. Disco Ball** · `disco` · when: all year (peaks Dec) · changes: L C P B · tier B · risk H  
*Mirror-ball sparkle across the room, everyone mid-dance.*  
- LOOK block: "Add a mirror-ball party atmosphere: small specks of reflected light scattered over the walls and background, a soft haze, coloured magenta and blue light on the background and as rim light on hair, while the faces are lit by a neutral white flash so everyone's true skin tone shows."
- On device: Light-speck overlay can be on device.
- Risk notes: Coloured light on faces = skin-tone shift (H). Keep coloured light off faces; speckles off eyes.

**P4. Karaoke Room** · `karaoke` · when: all year · changes: L C P B · tier B · risk H  
*Private karaoke booth: neon, tinsel curtain, someone going for the high note.*  
- LOOK block: "Restyle as a photo in a private karaoke room: a shimmering silver tinsel curtain and soft neon pink and teal glow in the background, a disco haze, direct white flash on the people so their real skin tone shows, slightly saturated colour, fine grain."
- On device: Lyric-caption sticker on device.
- Risk notes: Do not add microphones to hands (hand artefacts). Neon on skin risk as Disco.

**P5. Supper Club** · `supper-club` · when: all year (peaks Nov-Dec, Feb) · changes: L C G · tier B · risk M  
*Long table, candles, wine, film camera: the dinner-party photo dump.*  
- LOOK block: "Restyle as a candle-lit dinner-party photo on warm film: soft golden candlelight with a gentle fill flash on faces, warm shadows, fine film grain, slightly soft focus, out-of-focus candle flames and glassware glowing in the background."
- On device: —
- Risk notes: Low light pushes models to invent detail; check teeth and eyes.

**P6. Step & Repeat** · `red-carpet` · when: Dec-Mar, prom/formal season · changes: L C B · tier B · risk M  
*Your group on the step-and-repeat: logo wall, flash storm, main-character night.*  
- LOOK block: "Restyle as a red-carpet arrival photo: behind the people a step-and-repeat wall with a repeating simple abstract star pattern (no words or logos), a hint of red carpet at the bottom, several bright press flashes creating crisp highlights, high contrast, glossy colour."
- On device: Option to tile a user-chosen word ('Sam's 21st') on the wall: on device, not in the prompt.
- Risk notes: The pattern must not resemble any real brand; GUARD on.


### Seasonal (12)

**S1. Christmas Party** · `xmas-party` · when: Nov 27 - Dec 26 · changes: L C P B (O optional) · tier B · risk M  
*The group-chat Christmas photo: tree glowing, flash on, Santa hats optional.*  
- LOOK block: "Turn this into a cosy Christmas-party flash photo: a decorated tree with warm white lights and red and gold ornaments in the background, garlands and fairy lights glowing out of focus, warm ambient light plus direct flash on the people, a little grain. {HATS}"
- On device: Option: HATS='Add a simple red Santa hat to each person, sitting naturally on their existing hair.' else HATS=''. Snow-globe frame on device.
- Risk notes: Hats over hijabs, turbans or big hair: hats only on people with no head covering; cast description tells the model who. Test showed hats added only to some people.

**S2. Ugly Sweater** · `ugly-sweater` · when: Dec 1-24 · changes: O P · tier C · risk H  
*Office party ugly-sweater contest, and everyone's a winner.*  
- LOOK block: "Change only the clothing: give each person a chunky knitted Christmas jumper with a playful pattern (reindeer, snowflakes, trees), each a different colour, fitted naturally to their existing shoulders, arms and pose. Everything else stays exactly the same."
- On device: —
- Risk notes: Outfit changes are where body reshaping creeps in (OpenAI's guide: state body shape stays). Score body shape separately. Not for head coverings: keep them.

**S3. Snow Day** · `snow-globe` · when: Dec - Feb (UK/US) · changes: L C P B · tier B · risk M  
*First snow, cold cheeks, flash catching the flakes.*  
- LOOK block: "Add a winter snow atmosphere: large soft snowflakes falling, caught by the flash as bright out-of-focus dots in front of and behind the people (none covering faces), a cool blue night ambience, warm flash on the faces, frosty breath-like haze in the background."
- On device: Snow-dot overlay on device is the safer alternative.
- Risk notes: Pinterest 'Cool Blue' (frosted makeup +150%) fits; cool ambience must not turn skin grey.

**S4. Summer Christmas** · `aussie-xmas` · when: Dec (AU), Jan · changes: L C P B · tier B · risk M  
*Christmas in 34 degrees: beach, tinsel, sunburnt Santa hats.*  
- LOOK block: "Make this a summer Christmas photo: bright Australian summer daylight, a beach or backyard with a small tinsel-wrapped palm or Christmas tree, red and green tinsel, a sunny saturated look, harsh midday sun with a little fill flash on faces."
- On device: —
- Risk notes: AU is a core market and Christmas there is summer. Moving an indoor photo outdoors is a scene rebuild; offer only for daylight source photos.

**S5. NYE Glitter** · `nye-glitter` · when: Dec 26 - Jan 1 · changes: L C P B · tier B · risk M  
*Midnight: gold confetti, champagne sparkle, mascara still intact.*  
- LOOK block: "Make this a New Year's Eve party photo: gold and silver confetti and fine glitter floating in the air in front of and behind the people (not covering faces), warm golden bokeh lights in the background, a gold balloon or two, glossy direct flash, high sparkle, rich contrast."
- On device: '2027' balloon numbers as on-device stickers (models misdraw digits).
- Risk notes: Glitter on skin = skin change; keep it in the air. Opera-aesthetic red-curtain variant for 'NYE Gala'.

**S6. Galentine's** · `valentines` · when: Feb 1-15 · changes: L C P B · tier B · risk M  
*Pink booth, heart props, and the friends who are your actual valentines.*  
- LOOK block: "Restyle as a Valentine's photobooth picture: a soft pink and red backdrop with paper hearts hanging behind the people, a few small heart-shaped light sparkles, soft even flash, a slightly glossy romantic colour grade that keeps real skin tones."
- On device: Heart frame and 'xoxo' doodles on device (purikura-style pen).
- Risk notes: Pink casts on skin; keep in backdrop.

**S7. Lunar New Year** · `lunar-new-year` · when: late Jan - Feb 20 (LNY Feb 6, 2027) · changes: L C P B · tier B · risk M  
*Red lanterns and gold paper-cuts for the family and friends dinner.*  
- LOOK block: "Decorate the background for a Lunar New Year celebration: glowing red paper lanterns, gold and red paper-cut decorations and soft warm lights behind the people, a festive red-and-gold colour grade on the scene, gentle flash on faces. Do not change anyone's clothes."
- On device: Greeting text in Digi fonts on device, written by a native speaker.
- Risk notes: Cultural care: props in background only; never add traditional dress or change features. Have people who celebrate it review before launch.

**S8. Eid Night** · `eid-night` · when: around Eid al-Fitr (approx. Mar 9-10, 2027) and Eid al-Adha (approx. May 16, 2027) · changes: L C P B · tier B · risk M  
*Eid evening with the family: lanterns, fairy lights, best outfits.*  
- LOOK block: "Decorate the background for an Eid celebration evening: warm glowing lanterns, strings of fairy lights and a crescent-moon garland behind the people, a soft warm festive glow, gentle flash on faces. Do not change anyone's clothes or head coverings."
- On device: 'Eid Mubarak' text on device in Digi fonts.
- Risk notes: Never add or remove head coverings; never add religious text from the model. Dates move with the moon (E).

**S9. Spring Break** · `spring-break` · when: Mar - early Apr · changes: L C B G · tier B · risk M  
*Beach at dusk, disposable flash, sunglasses on heads.*  
- LOOK block: "Restyle as a spring-break beach photo at dusk on a disposable camera: a pink-orange sunset sky and sea behind the people, direct flash on faces, warm saturated film colour, grain, a faint light leak."
- On device: —
- Risk notes: Background move indoors->beach is a scene change; offer as 'take us to the beach' explicitly.

**S10. Formal Night** · `formal-night` · when: Apr - Jun (US prom/college formals), Jun-Jul (UK prom), Nov (AU formals) · changes: L C B · tier B · risk M  
*Dressed up, corsage on, ballroom lights, the photo your mum will frame.*  
- LOOK block: "Restyle as a formal-dance photo: a hotel ballroom background with soft bokeh chandeliers and balloon arches in silver and blue, polished flash with soft fill, glossy colour. Keep everyone's real outfits exactly as they are."
- On device: Optional corsage sticker on device.
- Risk notes: Prom attendees are often 16-17: owner must decide the age policy (plan says no editing children). Name it 'Formal Night', target 18+ in marketing.

**S11. Grad Day** · `grad-day` · when: May - Jul · changes: L C P B (O optional) · tier B · risk M  
*Caps in the air, confetti, the friends who got you through.*  
- LOOK block: "Make this a graduation-day photo: bright daylight on a campus lawn with soft out-of-focus trees and buildings, a few graduation caps flying in the sky above the people, a little gold confetti in the air, crisp cheerful colour. {GOWNS}"
- On device: GOWNS option: 'Add a black graduation cap sitting naturally on each person's head' (skip people with head coverings). Year/'class of' text on device.
- Risk notes: Caps flying = objects not near hands. Avoid real university crests.

**S12. Euro Summer** · `euro-summer` · when: Jun - Aug · changes: L C B G · tier B · risk M  
*Holiday film roll: white walls, blue sea, tomatoes and lemons, sun-drunk colour.*  
- LOOK block: "Restyle as a Mediterranean summer holiday film photo: bright hard sunlight, a whitewashed wall and blue sea in the background, a striped awning, warm saturated film colour with deep blue sky, fine grain. Skin keeps its real tone; no added tan."
- On device: —
- Risk notes: Successor of 'tomato girl summer' (2023, fading) via Pinterest summer 2026 'Courtside & Coastal Prep'. 'No added tan' = skin fidelity.


### Later (2)

**L1. Halloween Flash** · `halloween` · when: Oct 2027 · changes: L C P B (props on heads) · tier B · risk H  
*House-party Halloween on a cheap flash camera: cobwebs, pumpkins, costume props.*  
- LOOK block: "Make this a Halloween house-party flash photo: carved glowing pumpkins, fake cobwebs and orange string lights in the background, harsh direct flash, deep shadows, grain. {PROPS}"
- On device: PROPS options limited to headwear (cat ears, witch hat, devil horns headband).
- Risk notes: No face paint, masks, prosthetics or 'zombie skin' on real faces: biggest identity and skin-tone risk. Not before Oct 2027.

**L2. Friendsgiving** · `friendsgiving` · when: Nov 2027 · changes: L C P B · tier B · risk M  
*The long table, the mismatched chairs, the friend who brought three pies.*  
- LOOK block: "Restyle as a warm autumn dinner-party photo: candlelight and string lights, autumn leaves and small pumpkins on the table and shelves behind the people, warm film colour with gentle flash on faces, fine grain."
- On device: —
- Risk notes: Same as Supper Club with seasonal props.


### Seasonal calendar at a glance (dates V unless marked)
| Ship by | Look | Live window | Markets |
|---|---|---|---|
| Nov 24 | Christmas Party, Ugly Sweater, Supper Club (Friendsgiving variant) | Thanksgiving Nov 26 → Dec 26 | US/UK/AU |
| Dec 1 | Summer Christmas | Dec 1 → Jan 5 | AU |
| Dec 8 | Snow Day, Disco Ball | Dec → Feb | US/UK |
| Dec 18 | NYE Glitter (+ red-curtain "Gala" variant) | Dec 26 → Jan 1 | all |
| Jan 5 | 2016 Feed push, Paparazzi (awards season) | Jan → Mar | all |
| Jan 22 | Lunar New Year (Feb 6, 2027) | Jan 27 → Feb 20 | all |
| Feb 1 | Galentine's (Feb 13) / Valentine's (Sun Feb 14, 2027) | Feb 1 → 15 | all |
| Feb 24 | Eid Night (Eid al-Fitr ≈ Mar 9–10, 2027, E: moon sighting) | ~Mar 5 → 15 | all |
| Mar 1 | Spring Break | Mar → early Apr | US mainly |
| Apr 1 | Formal Night (age policy first) | US Apr–Jun · UK Jun–Jul · AU Nov | all |
| May 1 | Grad Day | May → Jul | all |
| Jun 1 | Euro Summer, Golden Hour, Disposable push | Jun → Aug | US/UK (AU gets them in Dec) |
| Oct 2027 | Halloween Flash · Friendsgiving (Thanksgiving Nov 25, 2027) | Oct → Nov | later |

---

## 5. Ten strip and frame layouts (all original Digi designs)

Pixel sizes are print-true at 600 dpi so they print sharply on a 4×6" or 2×6" photo printer, and are downscaled for sharing. Every layout has a small Digi wordmark in the footer and a date in Digi's own pixel font. The wordmark is removable on paid plans.

| # | Name | Canvas (px) | Frames | Design notes | Best looks |
|---|---|---|---|---|---|
| 1 | **Classic Strip** | 1200 × 3600 (2×6") | 4 × (1080 × 750), 60 px gaps, 300 px footer | Off-white paper, thin rounded corners on the frames, footer: date + optional caption in a typewriter-style face | Booth Mono, Digi Flash, Soft Studio |
| 2 | **Double Strip** | 2400 × 3600 (4×6") | Two Classic Strips side by side with a dashed cut line | The Korean "one for you, one for me" habit; the share sheet offers "send the second strip" | All strips |
| 3 | **Square Four** (2×2) | 2160 × 2160 (1:1) or 2160 × 2700 (4:5) | 4 × (1020 × 1020), 40 px gutters | Feed-friendly; a coloured border picked from the photo's dominant tone | Party looks |
| 4 | **Six-Up** (2×3) | 2160 × 2700 (4:5) or 1440 × 2560 (9:16 story) | 6 frames | For "photo dump" nights and Digi Roll results | Disposable, Digi Flash |
| 5 | **Instant Card** | 1800 × 2160 | 1 square frame, thick bottom margin | Creamy card with faint texture, handwriting-style caption. No rainbow stripe and no brand name | Instant, Golden Hour |
| 6 | **Playback Screen** | 2160 × 1620 (4:3) | 1 frame inside a drawn camera-LCD UI | An original flat UI: battery bar, "1/24" counter, orange date stamp, little flash icon. Not modelled on any real camera's menus | Digi Flash, After Dark |
| 7 | **Contact Strip** | 3600 × 1200 (landscape) | 4–5 frames on a dark film base | Sprocket holes, frame numbers, edge text "DIGI 400" in our own font. No film-maker marks | Disposable, Supper Club |
| 8 | **Story Stack** | 1080 × 1920 (9:16) | 3 frames stacked, slightly rotated like prints on a table | Space for a sticker and a caption; made for IG/TikTok stories | Any |
| 9 | **Receipt Strip** | 1200 × 3600 | 3–4 frames on a thermal-receipt look | Header "DIGI BOOTH · TABLE 04", a line-item list ("4 × FLASH … 1 × CHAOS"), barcode-like pattern (not a real barcode), timestamp | Party, NYE |
| 10 | **Holiday frame family** (one shape, re-skinned per drop) | Classic Strip and Square Four sizes | as base | Original illustrated borders: **Tinsel** (hand-drawn garland + baubles), **Countdown** (gold clock hands + confetti), **Love Note** (envelope flap + doodled hearts), **Lantern** (paper-cut red/gold), **Cap Toss** (caps + confetti), **Pumpkin Patch** (Oct 2027) | Matching seasonal looks |

**Bonus:** a **sticker sheet** (16-up mini prints on one 4×6") for purikura fans. Make it visually different from KIRAKIRA's.

---

## 6. Prompt craft for identity-safe group edits

### 6.1 What the official docs say (V unless marked)
- **Google, Nano Banana 2.1 / Gemini image docs (AI Studio, read today):**
  - `gemini-nano-banana-2.1` is the recommended model.
  - Sizes: **1K / 2K / 4K**, with uppercase values only ("1k" is rejected). Nano Banana 2.1 doesn't support 512px.
  - Aspect ratios include 1:1, 3:4, 4:3, 2:3, 3:2, 4:5, 5:4, 9:16, 16:9, 21:9, plus **1:4, 4:1, 1:8, 8:1**.
  - **"By default, the output matches the input image's size."**
  - Input limits: up to **4 character images and 10 object images**. "Character resemblance for up to 4 characters."
  - Thinking can't be turned off, and thinking tokens are billed.
  - Every output carries a **SynthID watermark** (plus C2PA credentials, per Google Cloud).
  - Users must have rights to the images they upload.
- **The same docs, prompt advice:**
  - Template: "Using the provided image of [subject], please [add/remove/modify]… **Keep everything else in the image exactly the same**."
  - "To ensure critical details (like a face…) are preserved… **describe them in great detail along with your edit request**."
  - "The model will match the original image's style, lighting, and perspective" (so you must state the new lighting clearly, or it keeps the old one; that is why our Digicam test was weak).
  - Be hyper-specific, give context and intent, and break complex scenes into steps.
  - **Describe what you want rather than what you don't want** ("empty street", not "no cars").
  - Use camera terms ("low angle", "wide-angle").
  - The model "may not return the exact number of images requested".
- **Google Cloud "Ultimate Nano Banana prompting guide" (Mar 6, 2026):**
  - Start with a strong verb.
  - Use photographic terms. It names "disposable camera (raw, nostalgic flash)" and "as if on 1980s color film, slightly grainy" as working style words.
  - It has **no face-preservation guidance**, so we build our own.
- **Google developer forum (Apr 2026, C):** users report **NB Pro / NB2 adding unwanted saturation and reddish or blotchy skin in image-to-image edits** "even with strict prompts", plus a "pink color cast" bug thread. Tests must check skin colour, not just identity.
- **OpenAI (image prompting guide, GPT-Image-2.5/2.6):**
  - Write identity lines like "Do not change her face, facial features, **skin tone, body shape**, pose, or identity in any way" and "Replace **only** the clothing".
  - "Repeated edits can still change details you intended to preserve. **Restate those constraints** and inspect each result."
  - Name each input image "by number and purpose".
  - On GPT-Image-2.6, leave out `input_fidelity`: high fidelity is the default.
  - Older cookbook (gpt-image-1): with several faces, **combine all faces into one composite input**. Only the first image gets the "extra richness".
- **Black Forest Labs (FLUX Kontext, via their guide and ComfyUI mirrors):**
  - Say outright what stays the same: "while maintaining the same facial features, hairstyle, and expression".
  - **Use concrete verbs** ("change the clothes", not "transform the person"). Vague "transform" swaps identity.
- **Seedream 4.x (third-party guides only, C):**
  - Name each reference's role.
  - Repeat the fixed details on every edit.
  - Keep the accepted output as the next reference.
  - Put exact text in quotes.
  - Start with 1–3 references.

### 6.2 Digi's prompt rules (E, based on the above)
1. **Run a cast description first, automatically.** A cheap vision-text call describes each person from left to right in **observable terms only**: skin tone in plain words, hair texture/length/colour, facial hair, glasses, head covering, notable marks (freckles, vitiligo, moles), top colour. Example: "far left: deep brown skin with warm undertone, short black coils, gold hoop earrings, no head covering, white T-shirt".
   - **Never write race or ethnicity labels.** The description is not stored and not shown.
   - Why: Google says to describe the face in detail, and the CMU study shows that appearance-feature prompts cut race drift (−1.48 points for Black subjects).
   - Also gives `N`, the people count.
2. **Order: CAST → LOOK → LOCK → FAIR_LIGHT → GUARD.** Lead with the edit (a strong verb), then the lock list, then a short guard.
3. **LOOK in optical terms, not moods.** Light source, position, hardness, falloff, white balance, grain type, lens. "Y2K vibe" fails; "bloom + halation on highlights, 4-point star on lights" works.
4. **Keep colour casts off skin.** Tints, neons and warm grades go on shadows, background and rim light, and "faces lit by neutral white flash".
5. **One edit per call.** Don't stack "re-light + new background + outfit + pose". Tier C looks change one thing only.
6. **No text from the model, ever.** Dates, captions, balloon numbers, banners and mastheads are drawn on the phone. This fixes the fake "19 05 '18" date stamp.
7. **Keep the source aspect ratio** (the API default) for single looks. Set `aspect_ratio` only for strip frames.
8. **Size:**
   - 1K for strip frames (each ends up ~1080 px wide anyway);
   - 2K for single hero looks;
   - 4K only if a print product appears.
   - Prices differ by size; check OpenRouter before setting credit costs (E).
9. **Groups:**
   - **1–4 people:** all looks + 4-pose strip.
   - **5–6 people:** Tier A/B looks + an *expression-only* strip.
   - **7+ people:** Tier A/B single looks, with a soft warning ("big groups: faces may shift, check before posting").
   - This follows Google's "up to 4 characters".
10. **For 2–4 people, add face crops as character references (E, test it).** Send the group photo first, then up to 4 tight face crops labelled in the prompt ("Image 2 is the person on the far left…"). This uses the 4 character-image slots the API offers. A/B test it against the group photo alone.
11. **Edit the original every time.** Never chain edits on an output (drift accumulates, as OpenAI's guide warns). For "try another look", start from the source again.
12. **Post-process on the phone:** grain, date stamp, light leaks, vignette, borders and the Tier A grades. These are deterministic, free, on-brand, and can't touch identity.
13. **Retry policy:** an automatic face-count check on the output (on-device face detection, Apple Vision `VNDetectFaceRectanglesRequest`). If the count differs from the source, retry once, then show "try again free". Never charge a credit for a failed result.
14. **Never edit people who look under 13** (existing plan rule). On-device age estimation isn't reliable, so use the consent checkbox, the report button, and refusals from the model.

### 6.3 The 4-pose strip: which method?
| Method | How | Cost (E, at ~$0.04/image) | Pros | Cons |
|---|---|---|---|---|
| **A. 4 separate edits** (what we tested, 9/10) | Same source + identical SCENE block + 4 pose deltas, run in parallel at 4:3 or 3:4, 1K; composited on the phone | ~$0.16 | Each face is full resolution; one bad frame can be redone alone; same latency as one call (parallel) | Backdrop or lighting can drift a little between frames |
| **A+. Anchor frame** | Make frame 1, then frames 2–4 with source + frame 1 as references: "match the background, lighting and framing of image 2 exactly" | ~$0.16, but slower (2 rounds) | Most consistent strip | +1 round trip (~15–30 s); frame 1 errors spread |
| **B. One composite call** | One prompt, `aspect_ratio` 1:4: "a vertical photobooth strip with 4 frames…" | ~$0.04 | Cheapest; naturally consistent | Faces are tiny (each frame ~1/4 of the pixels); the model may vary the number of frames, duplicate or swap people, draw borders/text; much harder to QA |
| **C. 2×2 grid call** | One 1:1 2K image of 4 panels, cut on the phone | ~$0.04+ | Cheap middle ground | Same risks as B, a bit less severe |

**Pick: A for paid strips. Test A+ against A in the tuning pass. Use B/C only as a free-tier "preview" if tests pass the QA gates (E).**

**Shared SCENE block (Booth Mono example, from our tested `strip.sh`, tightened):**
> "Same {N} people, same faces, identities, skin tones, hair and clothes, now squeezed together inside a classic photobooth, framed from the chest up, a plain pale-grey pleated curtain behind them, black-and-white high-contrast photobooth print, even frontal flash, fine grain, full tonal range on every face. " + LOCK_POSE + GUARD

**Pose deltas, ranked by safety:**
- **Safe (any N ≤ 6):**
  - "all smiling straight at the camera";
  - "all laughing hard, eyes crinkled, heads tilted slightly";
  - "all looking surprised, mouths open";
  - "eyes closed mid-laugh";
  - "leaning heads together, cheeks almost touching".
- **Medium (N ≤ 4):**
  - "each making a finger heart near their cheek";
  - "palms on cheeks";
  - "peace signs";
  - "one winking, others pouting".
- **Avoid:**
  - bunny ears behind someone (our test used it: hands over other heads are an artefact magnet);
  - hugs that rearrange bodies;
  - swapping places;
  - jumping;
  - holding new objects.

**The sequence that matches K-booth habit:** straight → finger hearts → surprised → laughing candid.

### 6.4 Negative constraints: how many?
- Google advises positive framing. OpenAI and BFL examples use explicit "do not change…" lines.
- **Our compromise:** positive LOCK list + **one short GUARD sentence at the end** (people count, no reshape/skin change, no text).
- A/B test GUARD on vs off on the test set. Keep it only if it measurably cuts count errors and text artefacts (E).

---

## 7. Fairness and quality

### 7.1 What the research says
- **CMU + Dongguk, "Evaluating Demographic Misrepresentation in Image-to-Image Portrait Editing" (arXiv 2602.16149, 2026, preprint, C):**
  - Models tested: FLUX.2-dev, Step1X-Edit, Qwen-Image-Edit.
  - **62–71% of edits lightened skin**: **72–75% for Indian and Black subjects vs 44% for White subjects**.
  - Race change in 14% of Indian-subject edits vs 1% for White subjects.
  - Stereotype-consistent gender changes in 84–86% of occupation edits.
  - "Feature prompts" (listing observable appearance + identity constraints) **reduced race drift by 1.48 points for Black subjects (0.06 for White subjects)** but cost some edit strength.
  - VLM judges **overrate edit success by +0.72**. Automated scoring needs human checks.
- **Google's own models weren't in that study.** Google forum reports of skin redness and blotchiness under NB2/Pro (C) mean Digi must test its own model, not assume.
- **Review evidence (V, section 2):** "changes brown eyes to green eyes, makes features look european"; "does NOT work well for photos of Black people"; paid "darker tones" filters.
- **Measurement standard:** Google's **Monk Skin Tone (MST) scale**, 10 shades, released openly with the **MST-E** example dataset (V, Google blog). Use it to label the test set and report results by skin-tone band (MST 1–3 / 4–6 / 7–10).

### 7.2 Test set (design) (E)
**Size:** 48 source photos. Use only **people who gave written consent** (team, friends, paid models with releases) or **licensed stock** that allows editing. Use AI-generated "fictional people" only as a supplement: the generator's own bias would hide ours.

| Dimension | Coverage (minimum) |
|---|---|
| Group size | 1 (8 photos), 2 (10), 3 (8), 4 (12), 5–6 (6), 7+ (4) |
| Skin tone (MST) | ≥ 35% of faces MST 7–10, ≥ 30% MST 4–6, rest MST 1–3; ≥ 12 **mixed-tone groups** (MST 1–3 next to 8–10 under the same flash) |
| Features | hijab/headscarf, turban, braids/locs/coils/afro, very straight long hair, beards, glasses (incl. thick frames), freckles, vitiligo, birthmark, tattoos near face, visible acne, heavy and no makeup, gap teeth, braces |
| Age (adults only) | 18–24 mostly, some 25–40 |
| Body | different body sizes; one wheelchair user; one very tall/short pairing |
| Lighting | dim party with lamps, phone flash already used, daylight, backlit window, coloured LED/neon, mixed warm/cool |
| Camera | front-camera selfie (wide-angle distortion), rear camera, low-res screenshot from a story, motion blur, someone half out of frame |
| Hands/occlusion | drinks held, hands near faces, arms around shoulders, phone in hand |

### 7.3 Per-image QA checklist (score each output)
1. **People count:** source = output (auto face count + human check). Any mismatch = **fail**.
2. **Identity per face**, 1–5: would a friend recognise them instantly? Two raters, ideally including someone who knows the person. Any face ≤ 2 = **fail**.
3. **Skin tone per face:** measure L\* and ITA° (CIELAB, mean of both cheeks, tight crop) before vs after. Flag if |ΔL\*| > 4 **in the lightening direction** or ΔITA° > 8 (E thresholds; tune on the first 100 outputs). Grades that intentionally shift colour (B&W, 2016 Feed) are judged by the human rater for "same relative tone".
4. **Undertone and redness:** no new red/orange/grey cast on skin (forum issue).
5. **Features:** eye colour, nose, lips, teeth, hair texture, facial hair, glasses and head covering are unchanged.
6. **Body:** no slimming, lengthening or reshaping. Clothes keep their fit (Tier C looks).
7. **Hands:** right finger count, no fused or extra hands, held objects intact.
8. **Text and logos:** none generated (we add text on the phone).
9. **Look strength**, 1–5: would a stranger name the look without the label? (Our Digicam/Y2K tests would have scored 2.)
10. **"Real photo" feel**, 1–5: no plastic skin, no AI glow, natural pores.

### 7.4 Pass gates before a look ships (E)
- Count integrity **≥ 98%** on N ≤ 4 and ≥ 95% on N = 5–6.
- Mean identity **≥ 4.3** and no face ≤ 2 in more than 1% of faces.
- **Skin-lightening rate (flagged faces) ≤ 10% overall, and the gap between MST 7–10 and MST 1–3 ≤ 5 points.** This is the direct fix for the bias the CMU study found.
- Look strength ≥ 3.8; hands OK ≥ 95%; text artefacts 0%.
- Re-run the gates **whenever the model ID or a prompt changes**. Model IDs stay in config (plan rule).

**Tooling note (E):**
- **Pass 1:** score faces by eye in a simple spreadsheet; it is fast enough for 48 × 30 looks if each pass is sampled.
- **Pass 2:** an automated face-similarity score is optional but needs a commercially licensed model and **consent**. Face embeddings are biometric data under US state laws such as Illinois' BIPA and Texas' CUBI. So use it only on the consented test set, and **never compute face embeddings on users' photos in production** unless legal review says otherwise.

### 7.5 Quick tuning loop (no code needed to start)
1. Pick 12 of the 48 photos (cover every MST band and N = 1, 2, 4, 6).
2. Run each launch look once. Score with the checklist.
3. Fix the LOOK wording for look strength first, then the skin/identity failures (move casts off skin, strengthen CAST).
4. Run all 48 only for looks that pass the 12.
5. Log cost per output. A look that needs two retries on average is a cost problem as well as a quality one.

---

## 8. Our earlier test, scored against the checklist (V from `booth/sheet.jpg`, scores E)
| Look (test prompt) | Count | Identity | Look strength | Issue | Fix applied in this library |
|---|---|---|---|---|---|
| 2000s Digicam | 4/4 | 5 | **2** (barely changed) | Prompt asked for a "restyle" without hard optical cues; the model "matches the original lighting" | Explicit flash position, hard shadow, falloff, white-balance clash; date stamp on the phone |
| Disposable Film | 4/4 | 5 | 3 | Light leak OK, flash weak | Asks for flash shadows; grain/leak on the phone |
| B&W Booth | 4/4 | 5 | 4 | Good; curtain swap worked | Adds "full tonal range on every face" |
| Christmas Party | 4/4 | 5 | 4 | Santa hats on only 2 of 4 people (inconsistent) | Hat option with explicit "each person" + head-covering rule |
| Paparazzi | 4/4 | 5 | 4 | **Invented date stamp "19 05 '18"**; moved the indoor sofa to a street | GUARD bans text; "same type of place" rule (After Dark) |
| Y2K Glow | 4/4 | 5 | **2** (pink tint only) | Mood words, not optics | Bloom, halation, star points, tint kept off skin |
| 4-shot strip | 4/4 per frame | 4–5 | 5 | Bunny-ears pose is a hand risk | Safe pose list |

---

## 9. Sources
**Trends**
- Pinterest Predicts 2026 (21 trends with search numbers), nss magazine: https://www.nssmag.com/en/lifestyle/43770/pinterest-predicts-2026-aesthetic-trends (V)
- Axios, Pinterest 2026 report (Dec 9, 2025): https://axios.com/2025/12/09/2026-pinterest-trend-report (V date)
- Fortune on the accuracy of Pinterest 2026 (Oct 15, 2026): https://fortune.com/2026/10/15/pinterest-predicts-2026-trends-accuracy-brooches-funhaus/
- Pinterest Summer 2026 Trend Report (May 26, 2026): https://newsroom.pinterest.com/en-gb/news/summer-trend-report-2026/
- NBC Select on Pinterest 2026: https://www.nbcnews.com/select/amp/rcna248706
- NPR, digicam comeback (Jul 2026): https://www.npr.org/2026/07/19/nx-s1-5879158-e1/old-school-digicams-are-everywhere-whats-behind-the-return-of-retro-tech · syndicated: https://www.michiganpublic.org/2026-07-18/the-2000s-called-they-want-their-digital-camera-back
- Indie sleaze history and revival (May 30, 2026): https://cyprus-mail.com/2026/05/30/indie-sleaze-a-brief-fashion-history-from-messy-rebellion-to-mainstream-revival · https://interviewmagazine.com/fashion/the-indie-sleaze-revival-is-a-hot-mess
- Dazed, digital camera trend (Apr 19, 2023): https://www.dazeddigital.com/fashion/article/59676/1/digital-cameras-trend-indie-sleaze-miu-miu-tiktok-bella-hadid-instagram-myspace
- Dazed, point-and-shoot club photography 2026: https://www.dazeddigital.com/art-photography/article/70631/1/howl-alternative-pride-hackney-east-london-queer-clubbing-photography
- 2016 nostalgia: https://www.nbcnews.com/pop-culture/pop-culture-news/2016-nostalgia-internet-instagram-celebrities-influencers-rcna254493 · https://www.rnz.co.nz/life/lifestyle/why-do-we-all-wish-it-was-2016 · https://theweek.com/culture-life/nostalgia-2016-social-media-trend · https://thenewshouse.com/life-and-style/olivia-rodriguez-2026-is-the-new-2016/
- Photobooths back at weddings (Nov 6, 2026): https://www.fingerlakes1.com/2026/11/06/photo-booths-are-back-at-weddings-and-events-heres-what-has-changed-for-hosts-and-small-businesses/
- Clean girl → maximalism: https://www.hellomagazine.com/hfm/beauty-trends/872063/the-clean-girl-aesthetic-is-dead-maximalist-makeup-is-set-to-take-over-2026/ · https://iol.co.za/lifestyle/style-beauty/2026-01-01-the-clean-girl-era-is-dead-and-maximalism-is-taking-over-in-2026-according-to-pinterest/ · https://www.purewow.com/beauty/glitchy-glam
- Who What Wear 2006 beauty: https://www.whowhatwear.com/beauty/beauty-trends-making-a-comeback-2026 · 2027 Gen Z fashion: https://www.whowhatwear.com/fashion/gen-z-fashion-trends-2027 (headline only read)
- TikTok Next 2026 report: https://ads.tiktok.com/business/library/TikTok_Next_2026_Trend_Report.pdf · coverage: https://gigazine.net/gsc_news/en/20260124-tiktok-trend-report
- Holiday aesthetics: https://www.apartmenttherapy.com/ralph-lauren-christmas-2025-37514648 · https://www.hercampus.com/?p=2070662

**Competitors (App Store, read Nov 16, 2026)**
- iTunes lookup / search API and customer-review RSS; raw JSON in `looks/raw/`. Pages: https://apps.apple.com/us/app/id6775603987 (Boothie) · id6749303003 (WayShot) · id6757448890 (Pecra) · id1422471180 (Dazz) · id6457366208 (Esti) · id1393061654 (Tezza) · id1022267439 (SNOW) · id592331499 (BeautyCam) · id1470373330 (Remini) · id1436732536 (Lensa) · id6751296351 (ReShoot) · id6738272757 (Moshicam) · id6794825976 (KIRAKIRA) · id1342093386 (Mini Photobooth) · id1389753326 (EasyGlam)

**Korea / Japan**
- Korea Herald, "Say 'kimchi'" (Jun 7, 2025): https://www.koreaherald.com/article/10503226
- Korea JoongAng Daily, booth brands: https://www.koreajoongangdaily.com/korea/koreas-photo-booths-offer-creative-ways-of-leaving-memories/12031344
- Asia Business Daily, closures and sales (Feb 17, 2026): https://www.asiae.co.kr/en/article/2026021709433718191 · store counts 2023: https://cm.asiae.co.kr/en/article/2024080215004942858
- Bizhankook, Life Four Cuts store decline: https://en.bizhankook.com/articles/29706.html
- Soul of Seoul: https://thesoulofseoul.net/the-photobooth-trend-in-korea-providing-unique-souvenir-memories/
- Creatrip, poses: https://creatrip.com/en/blog/11224
- Life4Cuts collab frames (Seventeen, Singapore): https://mothership.sg/2023/05/very-nice-photo/
- Purikura: https://livejapan.com/en/article-a0000752 · https://www.tsunagujapan.com/10-facts-you-probably-didn-t-know-about-purikura/ · https://japanjourneys.jp/tokyo/things-to-do/the-ultimate-guide-to-purikura-japanese-photo-booths/

**Prompting docs**
- Google AI Studio, image generation docs (Nano Banana 2.1): https://aistudio.google.com/docs/image-generation
- Google Cloud, Ultimate Nano Banana prompting guide (Mar 6, 2026): https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-nano-banana
- Google, 7 tips for Nano Banana Pro: https://blog.google/products/gemini/prompting-tips-nano-banana-pro/
- Google forum, colour shift / skin redness in NB2/Pro edits: https://discuss.ai.google.dev/t/consistent-color-shift-oversaturation-in-image-to-image-with-nanobanana-nb-pro-nb2/141554
- OpenAI image prompting guide: https://developers.openai.com/cookbook/examples/multimodal/image-gen-models-prompting-guide · high input fidelity: https://developers.openai.com/cookbook/examples/generate_images_with_high_input_fidelity
- BFL Kontext prompting: https://docs.bfl.ai/guides/prompting_guide_kontext_i2i (URL returned 404 today; content via https://docs.comfy.org/tutorials/flux/flux-1-kontext-dev) · https://docs.bfl.ai/guides/prompting_unified_reference.md
- Seedream (third-party): https://www.veed.io/learn/seedream-4-prompting-guide · https://magichour.ai/blog/seedream-edit-guide

**Fairness**
- Seo et al., "Evaluating Demographic Misrepresentation in Image-to-Image Portrait Editing", arXiv 2602.16149: https://www.arxiv.org/pdf/2602.16149 · project page: https://seochan99.github.io/i2i-demographic-bias
- Google Monk Skin Tone scale: https://blog.google/products/search/monk-skin-tone-scale/
