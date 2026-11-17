# 21 · Tech and AI cost: the 5-day stack, the models, safety and the money per 1,000 users

**Date:** Nov 17, 2026. **Track:** 21-tech-ai-cost.
**Builds on:** `digi-deep-2026-11/04-tech-safety-legal.md` (Nov 16) and the AI price table in `digi-bible-2026-11/06-monetization-packs.md` §6. This chapter keeps what still holds, corrects what doesn't (section 0), and adds what was missing: **live latency and face tests I ran today on 15 image models**, measured moderation costs, the exact OpenRouter API gotchas, a backend choice, the RevenueCat credit set-up, a day-by-day build plan and a cost model per 1,000 installs.

**Labels**
- **[V]** = I checked it today on a primary source (official page, live API, or my own test call).
- **[C]** = secondary source, or a page I could only read in part.
- **[E]** = my estimate. Each estimate has a confidence: high, med or low.

**My own tests.** I ran 43 paid calls through Digi's OpenRouter key on Nov 17, 2026: 37 image calls and 6 screening calls. Total spend: **about $1.11**.
- No real people were used. The test photos are AI-made: a 4-person house-party photo (made with Seedream 5.5) and a 6-person couch photo (made with FLUX.3, so Seedream wouldn't get a home advantage).
- Each model got the same prompts: a "direct-flash re-light", a "NYE party restyle" and a "4-frame photobooth strip".
- Face judgments are **my eyes on side-by-side crops**, not a face-embedding score. n = 1–6 calls per model. Treat them as a first filter, not the bake-off.
- Raw outputs, contact sheets and the call log are in `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/bible/t21/` (`log.jsonl`, `facesA.jpg`, `facesB.jpg`, `faces6.jpg`, `strips.jpg`).
- **Contest note:** these test images and prompts are research only. Recreate prompts in the fresh repo; don't ship the test images.

---

## Key takeaways

1. **The AI is cheap and fast enough. Pick by face-holding, not price.** On OpenRouter today, a 1K photo edit costs **$0.009** (FLUX.3 Klein), **$0.018** (Seedream 5.0 Flash) or **$0.028** (Seedream 5.5) [V]. Median wait in my tests: **~10 s, ~13 s and ~21 s** [V, n = 5–6 each].
2. **Seedream 5.0 Flash is the best default I found.** In the hardest test (6 people, NYE restyle) it kept all six faces closest to the original. Seedream 5.5 gave the strongest "flash" look but visibly changed one of the six faces [V, my eyes, n = 1]. Use **5.0 Flash for groups and strips, 5.5 for 1–3-person "strong look" edits**, and Klein as the instant fallback.
3. **A whole 4-frame photobooth strip is one $0.018 call.** Seedream 5.0 Flash returns a 1152×2048 strip with four different expressions in **~13 s**, and the price is flat at 2K [V]. The old plan had $0.077 for a strip.
4. **Two API traps can double your cost.**
   - Calling Seedream 5.5 through the chat endpoint returns a 2048×2048 image billed at the "high resolution" rate: **$0.043 instead of $0.028** [V].
   - Seedream 5.0 Pro took **166 s** for one edit and cost $0.09 [V].
   - Use OpenRouter's **`/api/v1/images`** endpoint with `resolution: "1K"`.
5. **Moderation costs almost nothing.** Llama Guard 4 and NVIDIA Nemotron 3.5 Content Safety classify a photo for **~$0.00016 in ~1 s**. A cheap vision model (Amazon Nova Lite) returns a full JSON verdict (people count, "anyone possibly under 18", nudity) for **$0.00012 in ~2 s** [V]. The real cost of safety is build time, not API fees.
6. **None of the image models that work on our key are moderated by OpenRouter** (`is_moderated: false` for Seedream, FLUX, Qwen, MAI, MiniMax, Tencent, Krea, xAI) [V]. Digi's own input and output checks are the only filter. They are mandatory.
7. **Camera: start with `expo-camera`, not VisionCamera.** It already has real flash, front "screen" flash, lens choice and silent shutter, and it runs in Expo Go [V]. Do the digicam look as a Skia "develop" step after capture. VisionCamera 5 changed its API (`capturePhoto`, Nitro modules) [V], so AI-written code from older versions will break. Save it for a v1.1 live-filter preview.
8. **Backend: Supabase Pro ($25/month) does everything Digi needs in one place.** It gives anonymous sign-in, Postgres with row-level security, file storage, edge functions, a scheduler for "the roll develops at 10 am" and live job updates [V]. Push is free through Expo (600 notifications/second per project) [V].
9. **Let RevenueCat hold the "digis" balance.** Its In-App Currency feature adds digis automatically when a purchase is verified. It spends them through a server API with an idempotency key, so a retry never double-charges [V]. That removes a whole ledger you'd otherwise have to write.
10. **Per 1,000 installs, AI costs about $63–131 (base case), against about $900 net revenue (7–15%)** [E, med]. About half of it is the 3 free digis. The yearly plan's 60-digi monthly cap is **too close to break-even if every digi runs on Seedream 5.5** (worst case $27.07 of AI vs $27.99 net at Apple's 30%). Route most looks to 5.0 Flash or Klein, or cap at 50.

---

## 0. What I corrected from earlier work

| # | Earlier claim (where) | What is true now | Source |
|---|---|---|---|
| 1 | Primary model **Nano Banana 2.1**, fallback Seedream / GPT Image (04 §1, README §8) | Google and OpenAI models are blocked on Digi's key. Today's working shortlist: **Seedream 5.0 Flash, Seedream 5.5, FLUX.3 Klein**, with MAI-Image-2.6-Flash as a backup | Owner brief; my test calls [V] |
| 2 | "Plan for 10–30 s latency" (04 §1) | Measured: Klein 8–11 s, Seedream 5.0 Flash 10–18 s, Seedream 5.5 18–25 s, Qwen Image 3 41 s, Seedream 5.0 Pro **166 s** | My calls, Nov 17 [V] |
| 3 | Kept digi costs **$0.054**; strip in one 1:4 call **$0.077** (04 §2) | Kept digi **$0.012–0.038** depending on model (fees, screening and 25% redos included). Strip in one 9:16 call: **$0.018** on Seedream 5.0 Flash at 2K | OpenRouter image endpoints API + my calls [V]; maths [E, high] |
| 4 | Seedream 5.5 "from $0.02/image" (04 §1) | $0.02 output **+ $0.008 per input photo** = $0.028 at 1K–1.5K. The 2K "high_resolution" output is $0.035, so $0.043 with one input | `/api/v1/images/models/bytedance-seed/seedream-5-5/endpoints` [V] |
| 5 | Budget **$0.034 per digi** (06 §6) | Close, but it leaves out the 5.5% OpenRouter fee on credit top-ups. Fully loaded Seedream 5.5 is **$0.0376 per kept digi**. That makes the 60/month yearly cap break even at 30% (see §9) | OpenRouter pricing page [V]; maths [E, high] |
| 6 | 18+ because **Google's** terms ban apps used by under-18s (04 §0) | Google is no longer in the stack, so that clause no longer binds Digi. **Stay 18+ anyway**: the contest, Texas SB 2420, CSAM risk and BIPA all point the same way | 04 §5–6; owner brief |
| 7 | AI consent screen says "sent to Google (Gemini)" (04 §4) | It must name the real processor: **ByteDance (BytePlus, Singapore)** for Seedream, **Black Forest Labs** for FLUX. Exact copy in §5.4 | OpenRouter `/api/v1/providers` [V] |
| 8 | Group rules from Google's "4 characters" limit: 5–6 people expression-only, 7+ filter only (README §5) | That limit was Google's. In my 6-person test, **Seedream 5.0 Flash, FLUX.3 Klein and MAI Flash kept all 6 faces**; Seedream 5.5 drifted on 1 of 6. Keep a 4-face cap on "strong" looks until the bake-off; allow 6 on 5.0 Flash "light" looks | My test [V, n = 1, low confidence] |
| 9 | OpenAI `omni-moderation` (free) as the main input/output filter (04 §4) | That endpoint needs a **direct OpenAI platform account**. It is not reachable through this OpenRouter key. Use Llama Guard 4 / Nemotron + a vision JSON check on OpenRouter (§5). If the owner opens an OpenAI account, add omni-moderation as a free extra layer | OpenRouter model list [V] |
| 10 | FLUX "Kontext is old; FLUX 3 Klein too weak for faces" (04 §1) | Klein held faces well in all three of my tests at **$0.009** and ~10 s. Not too weak; its weakness is a softer "look" | My test [V, low–med] |
| 11 | Cloudflare Workers + R2 + Durable Objects backend (04 §7) | Still valid, but it's 4–5 products to wire (D1, DO, R2, Queues, auth). Rolls need auth, a database, realtime and a scheduler. **Supabase covers all of that in one product**, and the owner already uses it in AnkiDecks | Supabase docs [V] |
| 12 | "Snap / TikTok share" in v1 | Snap's React Native kit (`@snapchat/snap-kit-react-native`) was last published **Jun 30, 2022** (0.4.0) and needs an app review [V, npm; C, Snap docs]. Use the iOS share sheet for Snap/TikTok in v1. Instagram Stories needs a **Facebook App ID** (required since Jan 2023) [V] | npm; Meta docs |

---

## 1. The stack in one table

Versions are from the npm registry on Nov 17, 2026 [V].

| Layer | Pick for v1 | Version | Why | Skip / later |
|---|---|---|---|---|
| App framework | Expo SDK 58 + Expo Router, TypeScript | `expo` 58.0.26 | Fastest path for a non-coder with Claude Code | — |
| Camera | **`expo-camera`** (`CameraView`) | 58.0.14 | Flash on/auto/screen, torch, lens pick, silent shutter; in Expo Go [V] | VisionCamera 5.2.4 for live filters in v1.1 |
| Look engine | **`@shopify/react-native-skia`**: one SkSL runtime shader, run once after capture | 2.14.0 | LUT + flash + grain + leaks + date stamp in one GPU pass | Live per-frame filter (v1.1) |
| Photo import | `expo-image-picker` (system picker, no Photos permission) | 58.0.10 | Apple prefers the picker (5.1.1) | — |
| Save | `expo-media-library` (add-only) | 58.0.14 | | |
| Share | `expo-sharing` + a small native IG Stories call | 58.0.23 | IG Stories needs the pasteboard + Facebook App ID [V] | Snap Creative Kit, TikTok Share Kit (v1.1) |
| Payments | **`react-native-purchases`** + `react-native-purchases-ui` | 11.0.3 (Nov 16) | Paywalls, trials, consumables, **In-App Currency** for digis [V] | — |
| Device check | **`@expo/app-integrity`** (official Expo, App Attest) | 58.0.2 | Stops reinstall-farming of free digis | — |
| Age signal | `expo-age-range` (Declared Age Range) | 58.0.3 | Texas SB 2420; 18+ gate | — |
| Backend | **Supabase Pro**: Auth (anonymous), Postgres + RLS, Storage, Edge Functions, `pg_cron`, Realtime | `@supabase/supabase-js` 2.119.0 | One vendor; owner knows it | Cloudflare Workers for digi.pink pages only |
| AI images | **OpenRouter `/api/v1/images`**: Seedream 5.0 Flash, Seedream 5.5, FLUX.3 Klein | — | Works on Digi's key; per-image prices [V] | fal.ai or BFL direct as a second host |
| Moderation | OpenRouter: Llama Guard 4 + Amazon Nova Lite JSON verdict | — | ~$0.0003 per check pair [V] | AWS Rekognition ($0.001) |
| Push | `expo-notifications` + Expo push service | 58.1.9 | Free, 600/s [V] | — |
| Errors / analytics | `@sentry/react-native` 8.36.0, `posthog-react-native` 4.87.0 | | | |
| Builds | EAS Build | Starter $19/month [V] | Priority queue during build week | Free plan: 15 iOS builds, low priority [V] |

**Not needed in v1:** `react-native-vision-camera`, `react-native-nitro-modules`, `react-native-vision-camera-skia`, `expo-gl`, `react-native-view-shot`. Fewer native modules means fewer build failures.

---

## 2. Camera: `expo-camera` vs VisionCamera

| Question | `expo-camera` 58.0.14 | `react-native-vision-camera` 5.2.4 |
|---|---|---|
| Runs in Expo Go | **Yes**, "Included in Expo Go" [V] | No. Needs a dev build plus Nitro modules (`react-native-nitro-modules` 0.37.2) [V, npm] |
| Real flash | `flash`: `'off' \| 'on' \| 'auto' \| 'screen'`. `'screen'` "uses the device screen as a flash for front camera selfies" [V] | Yes, via capture settings (not read in full) [C] |
| Torch (for "always-on flash" video looks) | `enableTorch` [V] | Yes [C] |
| Lens choice (ultra-wide) | iOS `selectedLens`, e.g. `"AVCaptureDeviceTypeBuiltInUltraWideCamera"` [V] | Yes, plus format and HDR control [C] |
| Silent shutter | `takePictureAsync({ shutterSound: false })` [V] | Yes [C] |
| Picture size | `pictureSize` from `getAvailablePictureSizesAsync`; the same list on all iOS devices [V] | Full format control |
| Live shader preview | **Not supported** (no frame processors) [V] | **Yes**: `<SkiaCamera />` with `onFrame` and `render(...)` from `react-native-vision-camera-skia` [V] |
| API stability for AI-written code | Stable | **v5 renamed capture** to `capturePhoto(...)` / `capturePhotoToFile(...)` [V]. Most tutorials and AI training data use v4's `takePhoto`. Expect broken code on the first try |
| Build risk in 5 days | Low | Medium–high (native build, Nitro, Skia frame pipeline, pixel formats: "the pixel format affects your Skia Camera's performance" [V]) |

**Recommendation [E, med-high]: v1 uses `expo-camera` plus a fake-live preview.**
- Over the live camera, draw cheap React views:
  - a warm or cool tint (`backgroundColor` with 8–12% opacity);
  - a vignette PNG;
  - the orange date stamp in the corner;
  - a 4:3 crop frame.
- It *feels* like the filter is live. It costs nothing in performance and needs no native code.
- Show the real look in a 0.5–1.5 s "developing…" moment after capture. It matches the brand (Dispo-style delay) and hides the render.
- Move to VisionCamera's `<SkiaCamera />` only if reviews ask for a true live preview (v1.1, after Dec 16).

**Capture settings for the digicam feel [E, med]:**
- Back camera, `flash="on"` for the "Flash" look. At a dark party, the real phone flash *is* the look.
- Front camera: `flash="screen"`.
- `takePictureAsync({ quality: 0.9, shutterSound: false })`, then downscale to a 2048 px long edge before the look pass. That's faster and closer to a 2006 sensor.
- Turn off `animateShutter` and draw your own white flash-frame flicker (80 ms) plus a haptic (`expo-haptics`).

---

## 3. The free on-device looks (Skia), with exact recipes

**Plan:** one SkSL runtime shader takes the photo plus a few uniforms and outputs the finished image. Render it offscreen once, encode it to JPEG, save it. No server, no cost, works offline.

**Skia APIs to use** [C: the Skia docs site returned 503 to me today; these names are from the library's public API]:
- `Skia.RuntimeEffect.Make(sksl)`;
- `effect.makeShaderWithChildren(uniforms, [imageShader, lutShader])`;
- `Skia.Surface.MakeOffscreen(w, h)`;
- `surface.makeImageSnapshot()`;
- `image.encodeToBytes(ImageFormat.JPEG, 92)`.

### 3.1 Layer order (one pass)

| # | Layer | How | Starting values to tune [E] |
|---|---|---|---|
| 1 | **Resize** | Draw at 2048×1536 (4:3) | — |
| 2 | **Colour LUT** | A 512×512 PNG holding a 64³ cube (8×8 tiles of 64×64), sampled in the shader | Strength 0.85–1.0 |
| 3 | **Flash simulation** | Radial exposure lift centred on the frame (or the face box if you add detection later), plus highlight bloom | Centre +0.35 EV falling to −0.6 EV at the corners; bloom threshold 0.82; cool white balance −300 K |
| 4 | **Harsh-flash contrast** | S-curve on luminance, crushed blacks | Black point 0.04, contrast 1.15 |
| 5 | **Chromatic fringe** | Offset R and B by ±1.5 px toward the edges | Scales with distance from the centre |
| 6 | **Grain** | Hash noise seeded per photo, stronger in the shadows | Amplitude 0.045 (shadows) to 0.02 (highlights); 1.3 px grain size |
| 7 | **Light leak** (Film and Y2K looks only) | Procedural: 1–2 soft radial gradients in orange/magenta at a random edge, added in screen mode | Opacity 0.15–0.35; random seed per photo, so no two match |
| 8 | **Vignette** | Smoothstep falloff | 0.25 strength |
| 9 | **JPEG softness** | Slight blur at 0.6 px, then sharpen 0.3 | Gives a "2006 CCD" feel |
| 10 | **Date stamp** | Drawn last, never by the AI (AI garbles digits) | See §3.3 |

### 3.2 LUT and grain shader sketch

A sketch to start from. It needs testing on a device: Skia `eval()` takes pixel coordinates.

```glsl
uniform shader image;    // the photo
uniform shader lut;      // 512x512 PNG: 8x8 tiles, each 64x64
uniform float strength;  // 0..1
uniform float seed;
float hash(float2 p) { return fract(sin(dot(p, float2(12.9898, 78.233)) + seed) * 43758.5453); }
half4 main(float2 xy) {
  half4 c = image.eval(xy);
  float b = c.b * 63.0;
  float b0 = floor(b), b1 = min(b0 + 1.0, 63.0);
  float2 rg = c.rg * 63.0 + 0.5;
  half4 a = lut.eval(float2(mod(b0, 8.0), floor(b0 / 8.0)) * 64.0 + rg);
  half4 d = lut.eval(float2(mod(b1, 8.0), floor(b1 / 8.0)) * 64.0 + rg);
  half3 graded = mix(c.rgb, mix(a, d, fract(b)).rgb, strength);
  float lum = dot(graded, half3(0.299, 0.587, 0.114));
  float g = (hash(floor(xy / 1.3)) - 0.5) * mix(0.045, 0.02, lum);
  return half4(graded + g, 1.0);
}
```

**Making LUTs:** build 4–6 of your own in DaVinci Resolve (free) or Photoshop:
- Digicam Flash (cool, punchy);
- Night Out (green-cyan shadows);
- Film Warm;
- Y2K (magenta lift);
- B&W Party.

Export each as a 64-cube `.cube`, convert it to the 512×512 PNG layout with a 20-line Python script, and ship the PNGs in the app. Your own LUTs, never copied presets.

### 3.3 The orange date stamp (Digi's signature)

- **Font:** DSEG7 Classic (7-segment, SIL Open Font License 1.1) [C: check the licence file in the release you download]. Bundle it with `expo-font` and draw it with Skia `Text`.
- **Format:** `'06 12 31` (apostrophe-year, month, day; the 1990s Japanese camera style), or the real date. Offer "real date" (default) and "2006 mode" in settings.
- **Colour:** core `#FF8A1F`, glow `#FF5A00` at 60% with a 3 px blur, drawn twice (glow, then core) [E, tune by eye].
- **Size and place:** text height 3.2% of the image's long edge; bottom-right, 4% inset.
- **Burned in:** it goes into the pixels, never as an overlay. Survives screenshots and reposts, so it doubles as branding.
- **Watermark:** a small "digi.pink" in the bottom-left on free exports, 2.2% height, 70% white. Paid users can turn it off.

### 3.4 Booth strip composition (on device)

AI strips come back as one finished image (§4.3). The **free strip** is four timed shots composed by Skia:
- Countdown 3-2-1 with haptics, 4 shots 2.5 s apart. Each gets the chosen look.
- **Layout (print size, 2×6 inch at 300 dpi):** 600×1800 px canvas.
  - 4 frames of 540×380 px, 30 px side margins, 24 px gaps.
  - A 160 px footer with the date stamp and "digi.pink".
- **Story layout:** 1080×1920 canvas, strip scaled to 1,640 px tall and centred on a solid brand colour. This meets Instagram's minimum background of 720×1280 at 9:16 [V].
- Export JPEG at quality 92. Typical size 0.6–1.2 MB [E].

### 3.5 Performance

- I could not benchmark on an iPhone from here.
- A single full-screen shader pass on a 3 MP image is normally well under one frame on recent iPhones [E, med].
- The 0.5–1.5 s "developing" animation covers decode, render and encode with room to spare.
- Test on the oldest device you can borrow (iPhone 11/12 class).

---

## 4. AI looks: which model, what it costs, how long it takes

### 4.1 Live prices on OpenRouter (Images API, Nov 17, 2026) [V]

Source: `https://openrouter.ai/api/v1/images/models/{id}/endpoints`.

| Model (OpenRouter ID) | Output price | Input photo price | Max refs | Resolutions | `is_moderated` |
|---|---|---|---|---|---|
| **FLUX.3 Image Klein** `black-forest-labs/flux-3-image-klein` | 768 $0.008 · **1K $0.009** · 1.5K $0.011 · 2K $0.014 · 4K $0.036 | free | 10 | 768–4K | false |
| **Seedream 5.0 Flash** `bytedance-seed/seedream-5-0-flash` | **$0.018 flat** (1K, 1.5K and 2K) | free | 14 | 1K–2K | false |
| Qwen Image 2.1 Turbo `qwen/qwen-image-2.1-turbo` | $0.0184 (1K and 2K) | free | 10 | 1K–2K | false |
| MAI-Image-2.6 Flash `microsoft/mai-image-2.6-flash` | token-priced; **$0.0224** measured | token-priced | 5 | fixed | false |
| Tencent Hy Image 3.5 Preview `tencent/hy-image-v3.5-preview` | token-priced; **$0.024** measured | — | 20 | 1K–4K | false |
| **Seedream 5.5** `bytedance-seed/seedream-5-5` (Nov 12) | **$0.02**; high-res $0.035 | **$0.008 each** | 10 | 1K–2K | false |
| Qwen Image 3 `qwen/qwen-image-3` | $0.03 | $0.003 | 3 | 1K–2K | false |
| Krea K3 Edit `krea/k3-edit` | $0.03 (2K $0.06) | $0.02 (2K $0.07) | 8 | 1K–2K | false |
| Seedream 4.5 | $0.04 | free | 14 | 1K–4K | false |
| Seedream 5.0 Pro | $0.045 (high-res $0.09) | $0.003 | 14 | 1K–2K | false |
| MiniMax H3 Image Highspeed | token-priced; **$0.047** measured | token-priced | 16 | 1K–4K | false |
| FLUX.3 Image `black-forest-labs/flux-3-image` | 1K $0.048 · 2K $0.10 | free | 10 | 768–4K | false |
| xAI Grok Imagine Image 2.0 | low 1K $0.04 · medium 1K $0.06 | $0.01 | 5 | 1K–2K | false |

**OpenRouter fees** [V]:
- **5.5% on credit purchases** (Standard plan). No per-request fee.
- "No plan-based rate limit on paid models"; the provider's limits pass through.
- Streaming previews that end early are "billed exactly as a failed generation: not at all".

### 4.2 My test results [V for latency and cost; faces are my visual judgment, low–med confidence]

| Model | Latency (s), each call | Cost per call | 4 people, flash re-light: faces | 6 people, NYE restyle: faces | Look strength | Verdict |
|---|---|---|---|---|---|---|
| **Seedream 5.0 Flash** | 18.2*, 12.0, 10.2, 13.2, 12.1, 13.6 | **$0.018** | Very close | **All 6 very close** | Medium: clean, a bit polite | **Default for groups and strips** |
| **FLUX.3 Klein** | 9.7, 9.3, 10.6, 8.2, 16.5 (2K) | **$0.009** (2K $0.014) | Close; one eye shape shifted slightly | All 6 close | Medium-weak flash; good NYE props | **Fallback + cheap "light" looks** |
| **Seedream 5.5** | 23.5*, 18.5, 20.8, 21.6, 24.4, 25.3 | $0.028 (*$0.043 via chat endpoint at 2K) | Close | **1 of 6 changed** (face shape) | **Strongest real-flash look** (dark falloff, specular skin) | **Premium 1–3-person looks** |
| MAI-Image-2.6 Flash | 17.1, 17.2, 16.5 | $0.0224 | Close | All 6 close, slightly brighter skin | Medium-strong | Backup (Azure, US) |
| Tencent Hy 3.5 Preview | 17.4, 15.5 | $0.024 | Close | Close | Weak (barely edits) | Skip |
| Qwen Image 2.1 Turbo | 18.8, 16.2, 14.3 | $0.0184 | Close | 1–2 faces softened | NYE: background went near-black, strong flash | Maybe for "Paparazzi Night" |
| Qwen Image 3 | 40.9 | $0.033 | Close | — | Medium | Too slow |
| MiniMax H3 Highspeed | 11.6, 12.5 | $0.047 | Glasses changed; skin lightened | **Confetti over a face** | Strongest flash | Skip (price, artifacts) |
| Krea K3 Edit | 9.3 | $0.05 | **Oily, blown-out skin; face drift** | — | Overcooked | Skip |
| FLUX.3 Image | 26.0, 29.3 | $0.048 | Close, but reframed (zoomed out) | Close | Medium | Skip (price) |
| Grok Imagine 2.0 | 20.0 | $0.07 | Reframed; one face changed | — | Medium | Skip |
| Seedream 4.5 | 24.7 | $0.04 | Close | — | Medium | Skip (5.0 Flash is cheaper and faster) |
| Seedream 5.0 Pro | **166.2** | $0.09 | — | — | — | **Never** |
| FLUX.2 Pro | 11.7 | $0.045 | Output came back 1024×768 from a square input | — | — | Skip |

\* First call via the chat endpoint, the rest via `/api/v1/images`.

**Eight models refused the chat endpoint** with "is an image generation model and cannot be used with the chat/completions endpoint. Use the /api/v1/images endpoint instead": FLUX.3 Image and Klein, Qwen Image 3 and 2.1 Turbo, Krea K3, MiniMax H3 Highspeed, Tencent Hy 3.5 and Meta Muse [V]. **Build on `/api/v1/images` from day one.**

**Caveats (read these):**
- One easy 4-person photo and one harder 6-person photo, both AI-made. Real party photos are darker, blurrier and full of half-turned faces.
- The 4-person base image was made by Seedream 5.5, which may flatter Seedream.
- Latency was measured from one cloud container (location not known to me) on a weekday. Peak US evening load (party time) may be slower.
- **The 20-photo × 3-run bake-off from chapter 04 is still required** before launch. Use consenting friends (18+) with written OK, and include darker skin tones, glasses, hats, side profiles and 5–6-person groups.

### 4.3 The photobooth strip result

Prompt: "four stacked frames… frame 1 smiling, 2 silly faces, 3 laughing, 4 peace sign/blowing a kiss… keep each face identical". Aspect 9:16 [V]:

| Model | Res | Time | Cost | Result |
|---|---|---|---|---|
| **Seedream 5.0 Flash 2K** | 1152×2048 | 13.6 s | **$0.018** | 4 clean frames, big expression changes (tongue out, open mouth), faces kept. Best |
| Seedream 5.0 Flash 1K | 720×1280 | 12.1 s | $0.018 | Same quality, lower res. No reason to use 1K |
| FLUX.3 Klein 2K | 1536×2736 | 16.5 s | $0.014 | Faces kept, but expressions barely change between frames |
| Seedream 5.5 1K | 720×1280 | 24.4 s | $0.028 | Good poses, smaller faces |
| MAI Flash | 768×1365 | 16.5 s | $0.022 | Good poses and faces |
| Qwen 2.1 Turbo | 576×1024 | 14.3 s | $0.018 | Low res, little variety |

**What this changes:**
- Sell the AI strip at **2 digis**: it costs one $0.018 call.
- The model draws its own white borders. Crop them, then re-compose the frames in Skia into Digi's own strip template (brand footer, date stamp). Every strip then looks like Digi, whatever the model drew.

### 4.4 Routing rules (put them in a `looks` table, not in code)

| Look type | People in photo | Model | Res | Digis charged | Our cost per call |
|---|---|---|---|---|---|
| "Light" looks (re-light, flash, film grade, NYE props) | 1–6 | Seedream 5.0 Flash | 2K (same price) | 1 | $0.018 |
| "Strong" looks (Paparazzi, Glam, Y2K restyle) | 1–3 | Seedream 5.5 | 1K | 1 | $0.028 |
| "Strong" looks | 4–6 | Seedream 5.0 Flash | 2K | 1 | $0.018 |
| AI booth strip (4 poses from 1 photo) | 1–4 | Seedream 5.0 Flash | 2K, 9:16 | 2 | $0.018 |
| Merge 2–4 separate selfies into one strip ("long-distance booth") | 2–4 refs | Seedream 5.0 Flash (free inputs) | 2K | 2 | $0.018 (on 5.5: 0.02 + 4×0.008 = $0.052) |
| Anything | 7+ | Refuse AI; offer free on-device looks | — | 0 | $0 |
| Fallback on 5xx, timeout or refusal | any | FLUX.3 Klein, then MAI Flash | 1K | same | $0.009 / $0.022 |

**People count:** the screening call (§5) returns `people_count` for ~$0.0001. No on-device face detection is needed, and nothing face-geometric is stored (BIPA).

### 4.5 Exact API call (Edge Function, server only)

```ts
const r = await fetch("https://openrouter.ai/api/v1/images", {
  method: "POST",
  headers: { Authorization: `Bearer ${Deno.env.get("OPENROUTER_API_KEY")}`, "Content-Type": "application/json" },
  body: JSON.stringify({
    model: look.model,                  // from the looks table, never hard-coded
    prompt: look.prompt,                // fixed preset text; users never type prompts
    input_references: [{ type: "image_url", image_url: { url: signedInputUrl } }],
    resolution: look.resolution,        // "1K" or "2K"
    aspect_ratio: look.aspect,          // "3:4", "4:3", "9:16" — match the input
    output_format: "jpeg",
    seed: job.seed,                     // where supported; makes "redo" reproducible
    user: hashedUserId,                 // OpenRouter hashes it; helps abuse tracing
    provider: { allow_fallbacks: false }
  }),
});
// response: data[0].b64_json + usage.cost (USD) → log cost on every job
```

All of these fields are documented on OpenRouter's image-generation guide [V]. I verified `resolution`, `aspect_ratio`, `input_references` and `usage.cost` in my own calls.

### 4.6 Consistency tricks that cost nothing

1. **Prompt template = CAST + LOOK + LOCK + FAIR + GUARD.**
   - LOCK, the line that did the most in my tests: "Keep every person exactly the same: same faces, same facial features, same skin tone, same hair, same expressions, same clothes, same pose and same framing. Do not add or remove people. Do not change body shape."
   - FAIR: "Do not lighten or smooth skin."
   - GUARD: "No text, numbers or date stamp." The date goes on later, on device.
2. **Send what you want back.** Resize the input to a 1536 px long edge on the phone, keep its aspect, and request the same `aspect_ratio`. A mismatched ratio made FLUX.2 Pro and Grok reframe the photo [V].
3. **Seed per job.** Store it. "Redo" uses a new seed. "Make another like this" reuses it.
4. **Global edits only.** Re-light, grade, props and background are safe. Don't ask the model to change pose or expression, except in the strip, where the user expects it.
5. **Face paste-back, for colour-only looks** [E, med]: after the edit, blend the original face crops back with a 20 px feather and match their colour to the edit. This helps grade-only looks. It looks wrong on re-light looks, because the lighting won't match. Don't build it for v1; keep it as the fix if the bake-off shows drift.
6. **Auto-redo on bad output:**
   - If the output check (§5) says `people_count` ≠ input count, retry once with a new seed on the fallback model, at no digi cost.
   - Budget 25% redos in the cost model.
7. **Fairness:** in my tests, MiniMax and (slightly) Seedream 5.5 brightened the East Asian woman's skin. Keep chapter 04's 48-photo skin-tone gate: no look ships if the darkest and lightest bands differ by more than 5 points.

---

## 5. Safety and moderation: what it costs and how to wire it

### 5.1 Measured screening costs (OpenRouter, Nov 17, 512 px test photo) [V]

| Model | What it returns | Latency | Cost per check | Use |
|---|---|---|---|---|
| **`meta-llama/llama-guard-4-12b`** | `safe` / `unsafe` + category | 1.0 s | **$0.00017** | Fast hard filter, input + output |
| **`nvidia/nemotron-3.5-content-safety`** | "User Safety: safe/unsafe" + categories | 1.0 s | $0.00016 | Alternative to Llama Guard |
| **`amazon/nova-lite-v1`** | Full JSON verdict (people count, youngest apparent age, nudity, screenshot, celebrity) | 2.1 s | **$0.00012** | **Main JSON check** |
| `z-ai/glm-5.3-flash` | Same JSON | 3.2 s | $0.00024 | Backup |
| `mistralai/mistral-small-3.2-24b-instruct` | Same JSON | 7.7 s | $0.00006 | Too slow for the hot path |
| `qwen/qwen3.7-flash` | Same JSON | 8.9 s | $0.00013 | Too slow (it reasons) |

**Other options:**
- AWS Rekognition `DetectModerationLabels`: **$0.0010/image** for the first 1M; 1,000/month free for 12 months [V]. **Avoid `DetectFaces`** (age range): it's face-geometry analysis, a BIPA risk.
- Sightengine: free 2,000 operations/month (max 500/day); Starter $29 for 10,000, then $0.002 each [V].
- Hive: $3 per 1,000 [C, from chapter 04].
- OpenAI `omni-moderation`: free, but needs a direct OpenAI account (not this key).

**The JSON prompt I tested** (Nova Lite returned clean JSON):

> You are a safety screener for a party photo app. Look at the photo and answer ONLY with JSON: `{"people_count": int, "any_person_possibly_under_18": bool, "youngest_apparent_age": int, "nudity_or_underwear_or_swimwear": bool, "sexual_pose": bool, "violence_or_weapons": bool, "is_screenshot_or_photo_of_screen": bool, "famous_person_likely": bool, "decision": "allow"|"block", "reason": str}`. Block if anyone could be under 18, any nudity/underwear/swimwear, sexual content, or a likely celebrity. When unsure, block.

**Limits of what I tested:** I only sent a safe photo. I did **not** test recall on unsafe images, and I won't. Age estimation by any model is unreliable near 18 [E, high]. The "possibly under 18 → block" rule will wrongly block some young-looking adults. Show a kind message and refund the digi: "We couldn't use this photo. Our safety check thought someone might be under 18. Your digi is back."

### 5.2 The pipeline per AI job (cost ~$0.0005 total)

1. **On device:** the 18+ gate (Declared Age Range + DOB), the AI consent screen (once), and a per-upload checkbox, not pre-ticked: "Everyone in this photo is 18+ and agreed to this."
2. **Input check:** Llama Guard 4 **and** Nova Lite JSON run in parallel (~2 s). Block if either flags. Block if `people_count` > the look's cap.
3. **Generate** (Seedream / Klein).
4. **Output check:** Llama Guard 4 on the result (~1 s). If unsafe: don't show it, refund, count a strike (3 strikes = ban).
5. **Delete the input** from storage right after the job. Keep the result 30 days (or until the user deletes it).
6. **Log per job:** model, cost, latency, both verdicts and categories, consent version. **No image content in logs.**

**Why both input checkers:** Llama Guard is a fast "is this harmful" filter. It doesn't count people or estimate age. Nova Lite does, but it's a general model that can miss things. Together they cost $0.0003.

### 5.3 CSAM and NCII duties (unchanged from 04, one fix)

- The 18 U.S.C. § 2258A reporting duty, NCMEC ESP registration, the 48-hour TAKE IT DOWN removal form and the 1-year preservation bucket all still apply (chapter 04 §4–6).
- **Fix:** Cloudflare's CSAM Scanning Tool compares "content served for your website through the Cloudflare cache" [V]. Images served straight from Supabase Storage URLs don't pass through your Cloudflare zone, so the tool wouldn't see them [E, med].
  - If you want it, serve share images through `img.digi.pink` proxied by Cloudflare.
  - The tool only emails you daily. "You likely have an obligation to report" yourself [V].

### 5.4 Who sees the photo: update the consent copy

OpenRouter lists **Seed (ByteDance/BytePlus)** with headquarters in **Singapore**, Black Forest Labs (no HQ listed; a German company [C]), and Azure (US) for MAI [V, `/api/v1/providers`].

**Consent screen copy (replace the old "Google" version):**

> **Before your first AI digi**
> To make AI looks, we send this photo to our AI partners: ByteDance (Seedream) and Black Forest Labs (FLUX), through OpenRouter. They create the image and send it back.
> We delete your original from our servers right after, and your AI result after 30 days. Nobody uses your photos to train AI.
> Only use photos of people 18+ who said yes.
> [Agree and continue] [Not now]

**Open items before shipping this copy:**
- I could not read BytePlus's GenAI Acceptable Use Policy (the page is JavaScript-only). A search found BytePlus has a "Real Person Verification" scheme for likeness use, but no minors clause or retention period I could confirm [C].
- **Read the BytePlus AUP and the BFL terms in a browser before launch.** Confirm: (a) no training on API inputs, (b) retention, (c) whether editing photos of real, consenting adults needs anything extra.
- Some US users distrust ByteDance. If the bake-off shows Klein or MAI holding faces equally well, making **FLUX.3 Klein (BFL) or MAI (Microsoft, US)** the primary gives cleaner privacy copy [E, med].

---

## 6. Backend: Supabase (pick) vs Cloudflare

| Need | Supabase | Cloudflare | Winner for a 5-day build |
|---|---|---|---|
| No-signup users | `supabase.auth.signInAnonymously()`; later `linkIdentity({ provider: 'google' })`. Default IP rate limit 30 requests/hour; add Turnstile/CAPTCHA [V] | Build it yourself (JWT + D1) | **Supabase** |
| Database + per-user security | Postgres + RLS; check `is_anonymous` in `auth.jwt()` [V] | D1 (SQLite) with no RLS | **Supabase** |
| File storage | Pro: 100 GB, then $0.0213/GB; egress 250 GB, then $0.09/GB (cached $0.03) [V] | R2: $0.015/GB-month, **zero egress** [V, ch. 04] | R2 is cheaper at scale; Supabase is simpler |
| Long AI call (10–25 s) | Edge Functions: 2 s CPU (I/O waits don't count), 150 s request idle timeout, wall clock 150 s free / 400 s paid; `EdgeRuntime.waitUntil` for background work [V] | Workers: no duration charge, 5 min CPU cap [V] | Both fine |
| "Roll develops at 10 am" scheduler | `pg_cron` inside Postgres [C, standard Supabase extension] | Cron Triggers | Tie |
| Live job status to the app | Realtime: Pro 500 concurrent peak, 5M messages/month [V] | Durable Objects / polling | **Supabase** |
| Price | Free pauses after 1 week idle, 1 GB storage. **Pro $25/month** [V] | $5/month [V] | Cloudflare cheaper; irrelevant at this size |

**Pick: Supabase Pro for the app backend; Cloudflare only for digi.pink web pages** (static site + share pages + the contest tracker) [E, high].
- Hosting and AI costs aren't deducted in the contest, so the $25 doesn't touch the score.
- The owner already runs Supabase in AnkiDecks.

### 6.1 Tables (all with RLS: users see only their own rows, or rolls they belong to)

| Table | Key columns |
|---|---|
| `profiles` | `id` (auth uid), `created_at`, `age_ok_at`, `consent_version`, `consent_at`, `device_attested`, `strikes`, `banned` |
| `looks` | `id`, `name`, `kind` (free/ai/strip), `model`, `fallback_model`, `prompt`, `resolution`, `aspect`, `max_people`, `digi_cost`, `active_from`, `active_to`, `sort` (remote "drops" with no app update) |
| `jobs` | `id`, `user_id`, `look_id`, `status` (queued/running/done/failed/blocked), `seed`, `in_path`, `out_path`, `model_used`, `cost_usd`, `latency_ms`, `in_verdict`, `out_verdict`, `rc_txn_id`, `created_at` |
| `rolls` | `id`, `owner_id`, `title`, `code` (6 chars), `develop_at`, `max_members`, `status` |
| `roll_members` | `roll_id`, `user_id`, `joined_at`, `push_token` |
| `roll_shots` | `id`, `roll_id`, `user_id`, `path`, `thumb_path`, `look_id`, `created_at` |
| `reports` | `id`, `target` (share or shot), `reason`, `contact`, `status`, `created_at` (TAKE IT DOWN log) |

**Storage buckets:**
- `in` (private, deleted after the job);
- `out` (private; signed URLs; 30-day cleanup by `pg_cron`);
- `rolls` (private; members only);
- `hold` (legal preservation, no cleanup).

### 6.2 The generate flow

1. The app resizes to a 1536 px long edge and re-encodes the JPEG (this strips EXIF/GPS), then uploads to `in/{uid}/{jobId}.jpg`.
2. The app calls the Edge Function `generate` with `{ jobId, lookId, consent: true }` and an App Attest assertion.
3. The function:
   - checks the JWT, ban status, rate limits (1 job in flight, 6 a minute) and `looks.active`;
   - **spends** `digi_cost` through RevenueCat's API with `Idempotency-Key: jobId` (§7). A 422 means "not enough digis": return 402 and the app opens the paywall;
   - creates the job row `running` and returns `202 { jobId }` at once;
   - in `EdgeRuntime.waitUntil(...)`: input checks → OpenRouter → output check → upload to `out/` → update the job row → delete the input.
   - On any failure: deposit the digis back (same idempotency pattern, key `refund:{jobId}`), mark `failed`.
4. The app listens to its job row over **Realtime**, so it updates without polling. Fallback: poll every 3 s.
5. If the app is closed when the job finishes, send an Expo push: "Your digi is ready ✨".

**Kill switches:**
- Make a separate OpenRouter key for Digi production **with a credit limit**. Keys have a `limit` field; the current shared key shows a $125 limit [V].
- Add a `settings.ai_enabled` flag the function reads first.
- Add an hourly `pg_cron` check: if spend in the last hour > $X, flip the flag off and email the owner.

### 6.3 Rolls: storage and egress maths

| Item | Value | Note |
|---|---|---|
| Party | 20 members × 20 shots = 400 photos | [E] |
| Full photo | 2048 px JPEG q85 ≈ 0.45 MB → **180 MB per roll** | [E, med] |
| Thumbnail | 400 px ≈ 40 KB → 16 MB per roll | Made **on device** at upload (Supabase transformations cost $5 per 1,000 origin images beyond 100 on Pro [V]) |
| Each member opens the developed roll | Grid of thumbs (16 MB) + ~30 full photos (13.5 MB) ≈ 30 MB | [E] |
| Egress per roll | 20 × 30 MB = **0.6 GB** | Without thumbnails it would be ~3.6 GB |
| Pro plan included egress | 250 GB ≈ **415 rolls/month** before $0.09/GB | Then about $0.05 per roll |

**Rule:** always upload a thumbnail with each roll shot and show thumbnails in grids. If rolls take off (more than 400/month), move `rolls` media to Cloudflare R2 (zero egress) in January.

### 6.4 Push

- Expo push service: "There is no cost associated with sending notifications through Expo push notification service". Limit **600 notifications per second per project** [V].
- **Expo Go doesn't support push on SDK 53+**: test push on a development build [V].
- Upload the APNs key once in EAS credentials.

**Pushes Digi sends (no guilt, no spam):**
- "Your digi is ready".
- "Your roll develops at 10:00".
- "📸 Party Roll is developed. 312 photos from 18 friends."
- Nothing else in v1.

### 6.5 Sharing

- **Instagram Stories** [V, Meta docs]:
  - URL `instagram-stories://share?source_application=<FB_APP_ID>`;
  - pasteboard key `com.instagram.sharedSticker.backgroundImage` (JPG/PNG, minimum 720×1280, 9:16) or `stickerImage` (640×480 recommended);
  - add `instagram-stories` to `LSApplicationQueriesSchemes`;
  - **"Beginning in January 2023, you must provide a Facebook AppID"**.
  - Create a free Meta developer app on Day 0.
  - This needs about 30 lines of native code (an Expo config plugin plus a small module) or `react-native-share` 12.3.1 (last published May 2026) [V, npm].
- **Snapchat and TikTok:** the iOS share sheet in v1. Snap's Creative Kit needs a client ID and a Snap app review [C]. The RN package is stale [V].

---

## 7. RevenueCat set-up (exact)

**Pricing:** free until $2.5K monthly tracked revenue, then 1%. "Our entire suite of features comes standard" [V].
**Expo:** needs a development build for real purchases; Expo Go runs a "Preview API Mode" with mocks [V].

**App Store Connect products** (IDs are suggestions; prices come from RevenueCat offerings, never hard-coded):

| Product ID | Type | Price | Notes |
|---|---|---|---|
| `digi_plus_yearly` | Auto-renewable, 1 year | $39.99 | Introductory offer: 3-day free trial. Subscription group "Digi Plus" |
| `digi_plus_weekly` | Auto-renewable, 1 week | $6.99 | Same group |
| `digi_pack_25` | **Consumable** | $5.99 | Grants 25 DIGI. **Never expires** (Apple 3.1.1) |
| `digi_roll_pass` | Consumable | $4.99 | One party roll up to 30 friends (chapter 06) |

**RevenueCat dashboard:**
- **Entitlement** `plus` ← both subscriptions.
- **Offering** `default` with packages `$rc_annual`, `$rc_weekly`, `pack_25`. A second offering `out_of_digis` leads with the Party Pack (chapter 06).
- **In-App Currency** `DIGI` [V]:
  - associate `digi_pack_25` → +25 (no expiry);
  - subscriptions → the plan allowance (weekly 30; yearly 60/month, see below), with auto-expiration so unused subscription digis don't pile up;
  - the dashboard offers "grant timing, units, and auto-expiration options" per product [V].
  - **Check in the dashboard** whether grant timing can do *monthly* grants on a *yearly* product. If not, a `pg_cron` job deposits 60 on the 1st of each month for active `plus`-yearly users through the API [E].
- **Spending:** `POST https://api.revenuecat.com/v2/projects/{project}/customers/{appUserId}/virtual_currencies/transactions` with a secret key (server only).
  - **Idempotency-Key** header: "it will be guaranteed that your transaction will be executed at most one time".
  - 900 requests/minute limit.
  - Insufficient balance → **HTTP 422, nothing deducted** [V].
- **Reading the balance in the app:** `Purchases.getVirtualCurrencies()` (RN SDK 9.1.0+). Call `invalidateVirtualCurrenciesCache()` after any purchase or spend, because "VirtualCurrencies does not update automatically" [V].
- **Free digis:** at first launch, after an App Attest check, the server deposits 3 DIGI once per attested device. Store the attestation key ID in `profiles` and refuse a second grant.
- **Sandbox:** "Anybody" during development, then "Nobody" before launch, so tester balances don't leak into production [V].
- **App user ID:** use the Supabase `auth.uid()` as the RevenueCat app user ID (`Purchases.logIn(uid)`), so the server can spend from the right balance.
- **Day 0 blocker:** in App Store Connect, the **Paid Apps agreement, tax and banking must be "Active"** before any IAP works, even in sandbox [C, standard Apple requirement]. Start it first; it can take a day or more.

---

## 8. Day-by-day build plan (5 days + review)

**Assumptions:**
- Owner plus Claude Code, about 8–10 focused hours a day. Exams from Dec 5.
- **Target: in App Review by the end of Day 5 (Sat Nov 22), live by about Nov 24–25, before Thanksgiving (Nov 26) and Black Friday (Nov 27).**
- Apple reviews most apps within about 24–48 h [C, Apple App Review page; not re-checked today].
- Each day ends with a TestFlight or dev build on the owner's iPhone and a click-through checklist.

### Day 0: today, Mon Nov 17 (owner only, ~2 h, no coding)

- [ ] Apple Developer account active. **Small Business Program enrolment submitted** (chapter 06: 15% only starts ~Dec 13).
- [ ] App Store Connect: app record `digi`, bundle ID `pink.digi.app`, Paid Apps agreement + tax + bank (**start first**), the 4 IAP products above, a subscription group, the trial offer.
- [ ] RevenueCat project + App Store Connect API key + products + entitlement + offering + `DIGI` currency.
- [ ] Supabase project on **Pro**, region `us-east-1`: enable anonymous sign-ins + manual linking + Turnstile.
- [ ] OpenRouter: a new key "digi-prod" with a $100 credit limit; saved only as a Supabase Edge Function secret (dashboard → Edge Functions → Secrets). **Never pasted in chat.**
- [ ] Meta developer app (for the IG Stories App ID). Expo account on **Starter ($19)**.
- [ ] Domain digi.pink on Cloudflare with the contest tracker snippet.

### Day 1: Tue Nov 18 · Camera + free looks

- Expo app (SDK 58, Expo Router, TypeScript), EAS dev build on the phone.
- Camera screen = home: `expo-camera`, flash toggle, front/back, ultra-wide, shutter with haptic and flash flicker, the fake-live overlay (tint, vignette, date).
- Skia develop pass: **1 LUT + grain + vignette + date stamp** working end to end. Save to Photos (add-only) and import from the picker.
- **Done when:** take a photo at night with flash → "developing" → an orange-dated digicam photo in Photos in under 2 s.

### Day 2: Wed Nov 19 · All free looks, strip, share, onboarding

- 5 LUT looks, flash simulation, light leaks, chromatic fringe, "2006 date" setting.
- Booth strip mode (4 timed shots → 600×1800 + 1080×1920 story).
- Instagram Stories share + share sheet; free watermark.
- Onboarding: welcome → 18+ gate (Declared Age Range + DOB) → vibe → sample before/after (no upload) → notification ask *after* first value. Copy from chapters 09/10/18.
- **Done when:** a new user can install, pass the age gate, shoot a strip and post it to an IG Story.

### Day 3: Thu Nov 20 · AI backend + paywall

- Supabase migrations: tables + RLS + buckets + `looks` rows (6–8 looks).
- Edge Function `generate`: screening → OpenRouter `/api/v1/images` → output check → Realtime → refund on failure → cost log.
- RevenueCat: paywall (custom, per chapters 07–08), Party Pack, restore, In-App Currency spend and refund, 3 free digis with App Attest.
- AI consent screen + per-photo checkbox. Result screen: save, share, redo (free on failure), report.
- **Done when:** in sandbox, buy the pack → 25 DIGI → 2 AI looks + 1 AI strip → balance 21 → a forced failure refunds the digi.

### Day 4: Fri Nov 21 · Rolls (cut to v1.1 if Day 3 slipped)

- Create a roll (title, develop time, max friends), invite link `digi.pink/r/{code}` (universal link plus a web fallback that says "get the app").
- Join, shoot into the roll (on-device look applied, thumbnail + full upload), member list.
- `pg_cron` every 5 min: rolls past `develop_at` → `developed` → Expo push to members.
- Developed roll: grid of thumbnails, open full, save all.
- **Done when:** two phones join one roll, shoot, and both get the "developed" push at the set time.

### Day 5: Sat Nov 22 · Ship

- Sentry + PostHog (no photo data). Settings: restore, delete my data (`auth.admin.deleteUser` through a function), privacy, terms, biometric policy, contact, report.
- digi.pink pages: privacy, terms, biometric policy, report/removal form, share pages (noindex).
- App Store: screenshots (6.9" and 6.5"), age rating answers (UGC yes, Age Assurance yes, set 18+), privacy label, review notes ("no free-text prompts; fixed looks; 18+; input and output moderation; demo account not needed").
- TestFlight smoke test on 2 devices, then **submit**.

### Days 6–7 (Sun–Mon Nov 23–24): review buffer

- Fix rejections. Prepare launch content.
- Release **manually** once approved, so it goes live when the owner is awake and posting.

**Cut order if behind:**
1. Rolls → v1.1 (Dec 1–3).
2. Light leaks and chromatic fringe.
3. The custom paywall → RevenueCat's paywall template.
4. IG Stories native share → share sheet only.

**Never cut:** the age gate, consent, moderation, refunds, the delete-my-data button and restore purchases.

---

## 9. Cost model per 1,000 installs

### 9.1 Unit costs (fully loaded) [E, high, from V prices]

- **Per generation** = (model price + $0.0005 screening) × 1.055 (OpenRouter fee).
- **Per kept digi** = per generation × 1.25 (redos, failed outputs and auto-retries).

| Model | Per generation | **Per kept digi** |
|---|---|---|
| Seedream 5.5 (1K, 1 photo) | $0.0301 | **$0.0376** |
| Seedream 5.0 Flash (any res up to 2K) | $0.0195 | **$0.0244** |
| FLUX.3 Klein (1K) | $0.0100 | **$0.0125** |
| AI strip (5.0 Flash, 2K, one call) | $0.0195 | **$0.0244** (sold for 2 digis) |

### 9.2 Worst case per plan at its cap (the contest's "no selling below cost" check)

Net = after Apple's commission; RevenueCat is free under $2.5K MTR.

| Plan | Net at 30% / 15% | Cap | Worst-case AI, all on Seedream 5.5 | All on 5.0 Flash | Verdict |
|---|---|---|---|---|---|
| Yearly $39.99 | $27.99 / $33.99 | 60 a month = 720 a year | **$27.07** | $17.57 | **On 5.5 the margin is $0.92 at 30%. Too thin.** Route most looks to 5.0 Flash, or cap at 50 a month ($22.56 on 5.5) |
| Weekly $6.99 | $4.89 / $5.94 | 30 a week | $1.13 | $0.73 | Safe |
| Party Pack $5.99 | $4.19 / $5.09 | 25 | $0.94 | $0.61 | Safe |
| Roll Pass $4.99 | $3.49 / $4.24 | storage only | ~$0.01–0.05 | — | Safe |
| Trial (3 days) | $0 if cancelled | 10 | $0.38 | $0.24 | It's a marketing cost; fine |
| Free user | $0 | 3 once | $0.11 | $0.07 | Device-bound |

### 9.3 Per 1,000 installs, contest window [E, med]

**Usage assumptions** (aligned with chapter 06):
- 70% use their 3 free digis;
- 6% start the yearly trial, 40% of those convert, and payers use 25 digis in month 1;
- 1.5% buy weekly (15 digis/week, 2 weeks);
- 2% buy a Party Pack (use 20 of 25);
- 30% of all digis are strips.

Low and heavy cases flex every input (script: `t21scripts/costmodel.py` in the scratchpad).

| Case | Digis made | Payers (yearly / weekly / pack) | Gross | Net at 30% | AI cost, 5.5-led | AI cost, **5.0 Flash-led** | AI cost, Klein-led |
|---|---|---|---|---|---|---|---|
| Low | 2,570 | 14 / 10 / 10 | $725 | $507 | $86 (17%) | **$63 (12%)** | $41 (8%) |
| **Base** | 3,910 | 24 / 15 / 20 | $1,289 | $902 | $131 (15%) | **$95 (11%)** | $63 (7%) |
| Heavy | 7,670 | 32 / 20 / 30 | $1,879 | $1,315 | $258 (20%) | **$187 (14%)** | $123 (9%) |

- **Free digis are about half of AI spend:** $51 of the $95 in the base case (5.0 Flash-led). If conversion comes in under ~4%, cut free digis from 3 to 2 before touching anything else.
- **Moderation** is already inside these numbers (about $1.20 per 1,000 installs in the base case).

### 9.4 Fixed and infra costs (monthly)

| Item | Cost | Deducted in contest? |
|---|---|---|
| Supabase Pro | $25 | No (hosting) |
| Extra Supabase storage/egress up to ~10K installs | ~$0–10 [E] | No |
| Expo Starter (priority builds, 3K OTA MAU) | $19 [V] | No (tooling) [E: confirm with organisers] |
| Cloudflare (digi.pink) | $0–5 | No |
| Apple Developer | $99/year | No [E] |
| RevenueCat | $0 below $2.5K MTR, then 1% [V] | Probably yes, as a payment fee [E: ask] |
| OpenRouter 5.5% top-up fee | Inside unit costs | No (AI) |
| Sentry, PostHog | Free tiers [C] | No |

### 9.5 At scale (base case, 5.0 Flash-led) [E, med]

| Installs | AI | Infra | Net revenue at 30% | AI + infra share |
|---|---|---|---|---|
| 1,000 | $95 | ~$45 | $902 | 16% (fixed costs dominate) |
| 10,000 | $954 | ~$55 | $9,020 | 11% |
| 100,000 | $9,540 | ~$300 (storage, egress, Realtime) | $90,200 | 11% |

**Bottom line:** AI cost never threatens profit if caps hold. Installs decide everything (chapter 06).

---

## 10. Risks and how the stack handles them

| Risk | Likelihood [E] | Mitigation built into the plan |
|---|---|---|
| Seedream slow or down on a party night (Dec 24, Dec 31) | Med | Automatic fallback to Klein, then MAI; honest progress copy; refund on failure |
| A new model release changes prices | High (5.5 is 5 days old) | Model, price and resolution live in the `looks` table; log `usage.cost` per job and alert if the 1-hour average is >20% above expected |
| Faces drift on real dark party photos | Med-high | Bake-off before launch; people caps per look; auto-retry on a people-count mismatch; free redo |
| Free-digi farming (reinstalls, many anonymous accounts) | Med | App Attest device binding; Turnstile on anonymous sign-in; 3 free digis per device, ever |
| Cost runaway from a bug or abuse | Low-med | OpenRouter key credit limit; `ai_enabled` flag; hourly spend check; 1 job in flight per user |
| App Review rejection (5.1.2(i) AI disclosure, 1.2 UGC) | Med | The consent screen names providers; report and block buttons; contact info; review notes |
| VisionCamera / Skia native build problems | Med | v1 avoids VisionCamera; Skia is used only after capture |
| Edge Function cold starts add 1–2 s | Med | Acceptable inside a 10–25 s wait [E] |

---

## What this means for Digi

1. **Today (Day 0), do the four slow admin tasks first:**
   - the Paid Apps agreement + tax + bank in App Store Connect;
   - Small Business Program enrolment;
   - a Meta developer app for the IG Stories App ID;
   - a new OpenRouter key "digi-prod" with a **$100 credit limit**, stored only in Supabase Edge Function secrets.
2. **Build with `expo-camera` + Skia "develop", not VisionCamera.** Fake the live preview with a tint, vignette and date overlay. Put VisionCamera's `<SkiaCamera />` on the v1.1 list.
3. **Call OpenRouter only through `/api/v1/images`** with `resolution` set (`"1K"` for Seedream 5.5, `"2K"` for Seedream 5.0 Flash, since it's the same $0.018). Never use the chat endpoint for images; it charged $0.043 instead of $0.028.
4. **Routing for launch:**
   - Seedream 5.0 Flash = default for groups of up to 6 and all strips;
   - Seedream 5.5 = "strong" looks for 1–3 people;
   - FLUX.3 Klein → MAI Flash = automatic fallbacks;
   - 7+ people = free looks only;
   - **never** Seedream 5.0 Pro, Krea K3, MiniMax H3 or Grok.
5. **Sell the AI strip for 2 digis.** It's one $0.018 call that takes ~13 s. Re-compose the four frames into Digi's own strip template in Skia, with the date stamp and digi.pink footer.
6. **Fix the yearly cap maths:** keep 60 digis a month only if ≥70% of looks run on 5.0 Flash or Klein. Otherwise set 50 a month. Either way, show the number on the paywall.
7. **Ship the safety pipeline on Day 3, not later:**
   - input: Llama Guard 4 + Nova Lite JSON, in parallel (~$0.0003, ~2 s);
   - output: Llama Guard 4;
   - block anyone possibly under 18;
   - refund on every block;
   - 3 strikes = ban;
   - delete inputs right after each job.
8. **Rewrite the AI consent screen** to name ByteDance (Seedream) and Black Forest Labs (FLUX) via OpenRouter, using the copy in §5.4. Before launch, read the BytePlus AUP and BFL terms in a browser (I couldn't load them) and note the retention and training clauses in `DECISIONS.md`.
9. **Use RevenueCat In-App Currency `DIGI` as the only balance.**
   - Products grant automatically.
   - The Edge Function spends with `Idempotency-Key = jobId` and refunds with `refund:{jobId}`.
   - 3 free digis are granted once per App-Attested device.
   - Party Pack digis never expire.
10. **Supabase Pro ($25/month)** for auth, database, storage, functions, cron and realtime. Always upload a 400 px thumbnail with each roll shot (6× less egress). Move roll media to Cloudflare R2 only if rolls pass ~400 a month.
11. **Run the real bake-off before submitting (Day 3 evening, ~$3):**
    - 20 consenting-adult photos (2–6 people, dark rooms, glasses, darker skin tones) × 3 runs × {5.0 Flash, 5.5, Klein};
    - score each face 0–2;
    - check the skin-tone gap ≤ 5 points;
    - set per-look people caps from the result.
12. **Log `usage.cost`, model, latency and verdicts on every job**, and set an hourly spend alarm. If real cost per kept digi drifts above $0.03 (5.0 Flash-led), look at redo rates first.

---

## Sources

All accessed Nov 17, 2026 unless noted.

**My tests (V)**
- OpenRouter call log, 37 image calls + 6 screening calls, ~$1.11 total: `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/bible/t21/log.jsonl`. Contact sheets: `facesA.jpg`, `facesB.jpg`, `faces6.jpg`, `nyeA.jpg`, `nyeB.jpg`, `strips.jpg` in the same folder. Scripts: `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/bible/t21scripts/` (`img.py`, `gen.py`, `screen.py`, `costmodel.py`).

**AI models and prices**
- OpenRouter models (image output): https://openrouter.ai/api/v1/models?output_modalities=image
- OpenRouter image models + per-endpoint pricing: https://openrouter.ai/api/v1/images/models and `https://openrouter.ai/api/v1/images/models/{id}/endpoints` (Seedream 5.5, 5.0 Flash/Lite/Pro, 4.5; FLUX.3 Image/Klein; FLUX.2; Qwen Image 3/2.1; Krea K3; MiniMax H3; MAI 2.6; Tencent Hy 3.5; Grok Imagine 2.0)
- OpenRouter image generation guide (Images API, `resolution`, `input_references`, streaming billing): https://openrouter.ai/docs/guides/overview/multimodal/image-generation.md
- OpenRouter pricing (5.5% fee, no plan rate limits): https://openrouter.ai/pricing
- OpenRouter providers (HQ, terms links): https://openrouter.ai/api/v1/providers
- OpenRouter full model list (safety and vision models): https://openrouter.ai/api/v1/models
- BytePlus GenAI Acceptable Use Policy (could not render): https://docs.byteplus.com/en/docs/legal/acceptable_use_policy_byteplus_genai · BytePlus Real Person Verification rules [C]: https://docs.byteplus.com/en/docs/ModelArk/BytePlus_Real_Person_Verification_H5_and_API_Usage_Rules

**Moderation**
- AWS Rekognition pricing: https://aws.amazon.com/rekognition/pricing/
- Sightengine pricing: https://sightengine.com/pricing
- Cloudflare CSAM Scanning Tool: https://developers.cloudflare.com/cache/reference/csam-scanning/
- Hive pricing [C, via ch. 04]: https://thehive.ai/pricing

**App stack**
- npm registry (versions and dates): https://registry.npmjs.org/ (expo, expo-camera, react-native-vision-camera, react-native-vision-camera-skia, @shopify/react-native-skia, react-native-purchases(-ui), expo-notifications, expo-media-library, expo-image-picker, expo-sharing, react-native-share, @expo/app-integrity, expo-age-range, @supabase/supabase-js, @snapchat/snap-kit-react-native, @sentry/react-native, posthog-react-native)
- expo-camera docs: https://docs.expo.dev/versions/latest/sdk/camera/
- VisionCamera Skia frame processors: https://visioncamera.margelo.com/docs/skia-frame-processors
- VisionCamera taking photos (v5 `capturePhoto`): https://visioncamera.margelo.com/docs/guides/taking-photos
- React Native Skia docs (site returned 503 today; API names from the library [C]): https://shopify.github.io/react-native-skia/
- Expo push FAQ (free, 600/s, Expo Go): https://docs.expo.dev/push-notifications/faq/
- Expo pricing (EAS Build/Update limits, Starter $19): https://expo.dev/pricing

**Backend**
- Supabase pricing: https://supabase.com/pricing
- Supabase Edge Function limits: https://supabase.com/docs/guides/functions/limits
- Supabase background tasks: https://supabase.com/docs/guides/functions/background-tasks
- Supabase anonymous sign-ins: https://supabase.com/docs/guides/auth/auth-anonymous
- Supabase image transformations: https://supabase.com/docs/guides/storage/serving/image-transformations
- Cloudflare Workers / D1 / Queues / DO / Workflows pricing: https://developers.cloudflare.com/workers/platform/pricing/

**Payments**
- RevenueCat pricing: https://www.revenuecat.com/pricing/
- RevenueCat Expo installation: https://www.revenuecat.com/docs/getting-started/installation/expo
- RevenueCat In-App Currency (virtual currency): https://www.revenuecat.com/docs/offerings/in-app-currency.md

**Sharing**
- Meta, Sharing to Instagram Stories: https://developers.facebook.com/docs/instagram-platform/sharing-to-stories/
- Snap Creative Kit [C]: https://developers.snap.com/snap-kit/creative-kit/overview · https://developers.snap.com/reference/CreativeKit/react-native/index.html

**Earlier chapters this corrects or builds on**
- `/home/user/MMTEST/research/digi-deep-2026-11/04-tech-safety-legal.md` (Nov 16)
- `/home/user/MMTEST/research/digi-deep-2026-11/README.md` (Nov 16)
- `/home/user/MMTEST/research/digi-bible-2026-11/06-monetization-packs.md` (Nov 17)

---

## Fact-check (2026-11-16)

An adversarial re-check of the 10 claims in this chapter that matter most for cost and build decisions. I used OpenRouter's public API, npm, and the vendors' own pricing and docs pages. I made no paid calls.

| # | Claim | Re-check result | Action |
|---|---|---|---|
| 1 | Seedream 5.5: $0.02 per output + $0.008 per input photo = $0.028; 2K "high_resolution" output $0.035 | Confirmed on `/api/v1/images/models/bytedance-seed/seedream-5-5/endpoints`. | None |
| 2 | Seedream 5.0 Flash: $0.018 per image, flat at 2K | Confirmed: $0.018 output, $0 input, no high-res tier. | None |
| 3 | FLUX.3 Klein: $0.009 at 1K | Confirmed (model id `black-forest-labs/flux-3-image-klein`): 768 $0.008, 1K $0.009, 1.5K $0.011, 2K $0.014, 4K $0.036. | None (ids noted) |
| 4 | OpenRouter fee 5.5% on credit purchases | Confirmed: 5.5% on Standard (8% on Business), charged on top-ups, not per request. | None |
| 5 | Moderation ~$0.00016 per photo (Llama Guard 4 / Nemotron 3.5 Content Safety); Nova Lite ~$0.00012 | List prices confirmed: Llama Guard 4 $0.18/M tokens, Nemotron 3.5 Content Safety $0.20/M, Nova Lite $0.06/M in, $0.24/M out. Per-photo cost depends on image tokens, so the totals stay the author's measurement. | None |
| 6 | Yearly-plan worst case: 60 digis × 12 × $0.0376 = $27.07 vs $27.99 net | Arithmetic checks out ($39.99 × 0.70 = $27.99). | None |
| 7 | Supabase Pro $25/month | Confirmed: $25/month with 100K MAU, 8 GB DB, 100 GB storage, 2M edge-function calls and $10 compute credit. | None |
| 8 | Expo push is free, 600 notifications/second per project | Confirmed in Expo's push FAQ. | None |
| 9 | RevenueCat In-App Currency: auto-grants on verified purchases; spends via server API with an idempotency key | Confirmed in RevenueCat docs ("automatically grant in-app currency from verified in-app purchases"; `Idempotency-Key` header, replays return `Idempotent-Replayed: true`). Spending needs a backend with the secret key (an SDK spend on iOS is in private beta). | None |
| 10 | Snap Kit RN `@snapchat/snap-kit-react-native` last published Jun 30, 2022 (0.4.0); Instagram Stories needs a Facebook App ID since Jan 2023 | Confirmed: npm latest 0.4.0, published 2022-06-30. Meta's docs say the Facebook App ID is required from Jan 2023 (`source_application`). | None |

**Also confirmed:** VisionCamera 5.0.0 shipped Apr 16, 2026 (latest 5.2.4), so pre-2026 sample code is out of date; expo-camera is at 58.0.14.

**Could not verify (not re-run):** latency figures and face-holding judgments come from the author's own 43 calls (n = 1–6 per model). They are a first filter, not a benchmark. `is_moderated: false` for the image models was not re-checked. The per-1,000-install cost model ($63–131 AI vs ~$900 net) is an estimate (E, med) built on the confirmed prices above.
