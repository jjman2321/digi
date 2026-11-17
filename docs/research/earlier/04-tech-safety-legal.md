# Digi: AI tech, costs, safety, Apple rules and law (research slice 04)

**Date:** Nov 16, 2026. **Scope:** image models, cost model, on-device camera, safety stack, Apple review, US/UK/EU law, Cloudflare infra.

**Labels:**
- **V:** read today on an official or primary page.
- **C:** secondary source, or a page I couldn't load in full (blocked or JS-rendered).
- **E:** my estimate.

**This is research, not legal advice.** Before launch, get one hour with a US privacy lawyer on items L1–L4 (section 6).

---

## 0. The five things that matter most (blunt)

1. **Google's terms ban apps for minors.** The Gemini API terms say: "You must be 18 years of age or older to use the APIs. You also will not use the Services as part of a website, application, or other service … that is directed towards or is likely to be accessed by individuals under the age of 18." [V, https://aistudio.google.com/docs/terms, effective Mar 23, 2026]
   - Vertex AI has the same clause: Service Specific Terms, "Age Restrictions" (last modified Nov 11, 2026) [V, https://cloud.google.com/terms/service-terms].
   - OpenRouter only routes Nano Banana to Google (AI Studio or Vertex). Its own terms make you follow each model's terms [V, https://openrouter.ai/terms].
   - The plan's audience is "women aged 16–40", and Boothie's TikTok audience includes teens. **If Nano Banana is the engine, Digi must be 18+:**
     - age rating 18+;
     - an age gate;
     - marketing aimed at 18+ only (no teen personas, no school hooks).
   - If you want 13–17 users, the main model has to be OpenAI's. OpenAI explicitly allows serving minors with safeguards [V, https://developers.openai.com/api/docs/guides/safety-checks/under-18-api-guidance].
   - **My recommendation: go 18+.** It also cuts CSAM risk, the Texas app-store-law burden and the contest "real people" risk.

2. **Nano Banana 2.1 only keeps "up to 4 characters" recognisable.** [V, https://aistudio.google.com/docs/image-generation, Limitations]
   - A group of 5 or more will drift.
   - Product rule: AI looks take at most 4 faces. For bigger groups, warn the user or offer the on-device filter instead.

3. **Apple's 15% rate isn't automatic.** Under the Small Business Program, "Adjusted proceeds take effect 15 days after the end of the fiscal month in which enrollment is approved" [V, https://developer.apple.com/app-store/small-business-program/].
   - If Grasp Labs isn't enrolled yet, enroll today.
   - Most contest-month sales will probably still be at **30%** (E). The cost model below shows both rates.

4. **Generative face editing is a live BIPA target.** On Oct 12, 2026, a putative class action (*Wilson v. xAI*, N.D. Ill.) argued that Grok's identity-preserving edits are "scans of face geometry". It seeks $1,000–$5,000 per violation [C, https://technologylaw.fkks.com/post/102o602/not-just-a-selfie-the-new-bipa-theory-aimed-at-generative-ai].
   - Digi does exactly this kind of edit, on group photos of people who aren't users.
   - Mitigation:
     - a written biometric retention policy;
     - an explicit written release from the uploader;
     - deletion within 24 h;
     - no face templates, no face recognition, no training.
   - The risk can be reduced, not removed.

5. **The free tier, not paying users, is the money leak.**
   - 3 free AI digis cost about **$0.16 per free user** (E).
   - At 4% conversion, that's **about $4 of AI spend per paying customer** before any paid usage.
   - Annual plans break even at about **52 AI digis a month** at 15% commission, or about 43 at 30%. Caps are mandatory.

---

## 1. Image-edit models (Nov 2026)

**How to read the table:**
- **Price:** the official per-image price at about 1 MP (1024²), unless noted.
- **AA rank:** Artificial Analysis image-editing leaderboard, AA-Image-Editing v2.1, Elo; the page also lists price per 1,000 images [V, https://artificialanalysis.ai/image/leaderboard/editing].
- **OpenRouter IDs:** from the public models API [V, https://openrouter.ai/api/v1/models?output_modalities=image].
- I couldn't load Arena (LMArena, now arena.ai): 403 to bots. A search snippet says GPT-Image-2.5/2.6 Sunburst lead single-image edit (updated Nov 12) [C, https://arena.ai/leaderboard/image-edit].

| Model (OpenRouter ID) | Price / image | AA edit rank (Elo) | Identity on groups | Content policy / minors | Notes |
|---|---|---|---|---|---|
| **Nano Banana 2.1** `google/gemini-nano-banana-2.1` (Oct 6, 2026) | 1K **$0.0336**, 2K $0.0504, 4K $0.113 output. Input $1.50/M tokens, text/thinking $7.50/M. Batch is half price [V, https://aistudio.google.com/docs/pricing]. Your tests: $0.037–0.039 all-in [V, owner test] | #9 (1152) | Good up to **4 characters** [V]. Our strip test 9/10 | Google Prohibited Use Policy. **API apps must not be directed at or likely used by under-18s** [V]. SynthID on every image [V]. Thinking can't be turned off; levels minimal/medium/high (default medium) [V] | Supports 1:4 and 4:1 ratios, so one-call strips are possible [V]. Up to 14 reference images. No 0.5K tier [V] |
| Nano Banana 2 Lite `google/gemini-3.1-flash-lite-image` | 1K $0.0336 [V] | #42 (1052) | "Not optimized for multiple reference inputs" [V] | Same Google terms | No reason to use: same price, worse |
| Nano Banana 2 `google/gemini-3.1-flash-image` | 0.5K $0.045, 1K $0.067 [V] | #17 (1126) | 4 characters [V] | Same | Double the price of 2.1 and worse. Skip |
| Nano Banana Pro `google/gemini-3-pro-image` | 1K/2K $0.134 [V] | #24 (1111) | 5 characters [V] | Same | Too expensive |
| **GPT Image 2.6 Flare / Sunburst** `openai/gpt-image-2.6-flare` (Nov 4, 2026) | $30/M image output tokens [V, https://developers.openai.com/api/docs/pricing]. About **$0.025 low / $0.043 medium** per 1024² [C, calculator figures quoted by kie.ai and eesel.ai]. "Max" ≈ $0.21 [V, AA] | **#1–2 (1205–1211) at max quality** | Strong; "may occasionally struggle" with recurring characters [V] | Moderated: `moderation` auto or low. Allows apps for minors with safeguards [V]. Under-13 data needs zero data retention [V]. Bans likeness use without consent [C, usage policies, 403]. Launched in 2025 blocking edits of photoreal children [C, 4o system card]; current status unknown | Flare is about 50% faster than 2.5 [V, OR description]. Latency "up to 2 minutes" on complex prompts [V]. **Low/medium quality isn't what AA ranked**: test it |
| **Seedream 5.5** `bytedance-seed/seedream-5-5` (Nov 12, 2026) | "From $0.02/image" on OpenRouter [V]. AA lists $0.028 | **#7 (1160)**, above NB 2.1 | Up to 10 references [V]. Untested by us | OpenRouter shows `is_moderated: false`. ByteDance policy not checked. Historically lax on NSFW (C) | Four days old: no production record. 1K/1.5K/2K [V] |
| MAI-Image-2.6-Flash `microsoft/mai-image-2.6-flash` | about $0.019 [V, AA] | #11 (1145) | Untested | Microsoft terms not checked | A cheap, strong fallback to test |
| MiniMax H3 Image `minimax/minimax-h3-image` | about $0.027 [V, AA] | #13 (1135) | 1–16 references [V] | Not checked | Brand new |
| FLUX 3 Image `black-forest-labs/flux-3-image` | $0.048/MP [V, fal]. AA $0.048 | #21 (1119) | Up to 10 references [V] | BFL policy not checked | FLUX Kontext is now old: Kontext [pro] ranks #75 |
| FLUX 3 Klein (open weights) | $0.009 [V, AA] | #35 (1069) | Weaker | Self-hostable | Cheapest decent option. Too weak for faces (E) |
| Qwen Image 3 / 3 Pro `qwen/qwen-image-3` | $0.030 / $0.040 [V, AA] | #34 / #28 | Untested | Alibaba | Qwen-Image-Edit (2025) ranks #78: obsolete |
| Krea K3 Edit `krea/k3-edit` | about $0.02+ [V, OR pricing field] | Krea 3 Fast #20 | 1–8 references | Not checked | |
| Ideogram 4.5 (High) | $0.22 [V, AA] | #37 | Poor fit | | Built for typography. Skip |
| Recraft V4.x | ~1K images, mostly text-to-image [V, OR] | Not on the edit board | n/a | | Design and vector use. Skip |
| Higgsfield | Consumer credit platform plus API; it resells models like GPT Image 2.6 (its default) [C, MCP server instructions] | n/a | n/a | n/a | Markup over going direct. Not a backend for a cost-sensitive app (E) |

**Other hosts:**
- fal.ai: Nano Banana Edit $0.0398, NB2 Edit $0.08, Seedream 4.5 Edit $0.04, FLUX 3 edit $0.048/MP, FLUX 2 Flash edit $0.005/MP [V, https://fal.ai/pricing].
- Replicate: not checked.
- OpenRouter adds a **5.5% fee on credit purchases**. It has no plan-based rate limits on paid models; provider limits apply. BYOK is free up to $25K/month of list-price usage [V, https://openrouter.ai/pricing].
- Failed generations (HTTP 502) aren't billed [V, OR model page].

**Latency:**
- No official numbers for these models (E).
- Plan for 10–30 s on NB 2.1 at medium thinking. The plan already assumes ~30 s.
- Use `reasoning: minimal` on NB 2.1 to cut time and thinking-token cost, then check quality.
- Measure p50/p95 in the 20-photo test.

**Commercial terms:**
- Google paid tier: prompts aren't used for training; logged "for a limited period" only to detect abuse [V].
- Free/unpaid Gemini use **does** train on inputs [V]. Never use AI Studio free quota with user photos.
- In the EEA/UK/CH, you may use only paid services [V].

**Recommendation:**
- **Primary: Nano Banana 2.1 at 1K**, `reasoning: minimal` or `medium`. Use **2K only for strips** (one 1:4 call).
  - It's proven in our tests, cheap, and has SynthID.
  - Condition: Digi is 18+.
- **Fallback (automatic on 5xx or refusal): Seedream 5.5 or GPT Image 2.6 Flare (medium).** Run both through the same 20-photo test and keep the one that holds faces better.
  - Seedream is cheaper and ranks higher on AA, but it's 4 days old and unmoderated.
  - GPT Flare has the safest policy and the best rank at max, but low/medium quality is unproven for faces.
- **If you refuse to go 18+:** make GPT Image 2.6 Flare the primary and drop Gemini. Expect cost per image about equal at medium, plus OpenAI moderation refusals on some party photos.
- Keep the model ID, quality and price in config (already planned).

---

## 2. Cost model (E unless marked)

**Inputs:**
- NB 2.1 at 1K: $0.039 per generation all-in (your tests).
- OpenRouter fee: ×1.055.
- Safety pre-check with a cheap vision LLM: +$0.0002. Examples: `google/gemini-2.5-flash-lite` at $0.10/M input, or `openai/gpt-5-nano` at $0.05/M [V, OR models API].
- OpenAI omni-moderation: free [V].
- Workers/R2: about $0.00002.
- Plan assumption: 1.3 generations per kept image.

| Item | Maths | Cost |
|---|---|---|
| One generation, 1K | 0.039 × 1.055 + 0.0002 | **$0.0413** |
| **One kept digi, 1K** | 0.0413 × 1.3 | **$0.054** |
| One generation, 2K | (0.0504 + ~0.0055 input/thinking) × 1.055 + 0.0002 | $0.059 |
| Kept strip, one 1:4 call at 2K (each frame ~1024²) | 0.059 × 1.3 | **$0.077** |
| Kept strip, 4 separate 1K calls | 4 × 0.054 | $0.215 (avoid) |
| Free user, 3 AI digis | 3 × 0.054 | **$0.16** |
| Free-tier AI cost per paying user, at 2% / 4% / 6% conversion | 0.16 ÷ conversion | **$8.06 / $4.03 / $2.69** |

**Net per sale:** price × (1 − Apple commission) × 0.99 (RevenueCat takes 1% above $2.5K monthly tracked revenue [V, https://www.revenuecat.com/pricing/]). US prices exclude sales tax.

| Plan | Net at 15% | Net at 30% | Usage assumption | AI cost | Margin at 15% (30%) |
|---|---|---|---|---|---|
| Digi Plus weekly $6.99 | $5.88 | $4.84 | Typical 25 digis/week | $1.34 | **$4.54, 77%** ($3.50, 72%) |
| | | | Light 10/week | $0.54 | $5.34, 91% |
| | | | At a 10/day cap (70/week) | $3.76 | $2.12, 36% ($1.08, 22%) |
| Annual $39.99 | $33.65 | $27.71 | 10/month | $6.45/yr | $27.20, 81% |
| | | | 20/month | $12.90/yr | **$20.75, 62%** ($14.81, 53%) |
| | | | 50/month | $32.25/yr | $1.40, 4% (−$4.54) |
| | | | 80/month | $51.60/yr | **−$17.95** (−$23.89) |
| Party Pack $5.99, 25 digis | $5.04 | $4.15 | All 25 used | $1.34 | **$3.70, 73%** ($2.81, 68%) |

**Rules that follow from the maths:**
- **Annual break-even:** 626 digis a year (about 52 a month) at 15%, or 516 (about 43 a month) at 30%.
  - Cap the annual plan at about **30 AI digis a month**, or 5 a day with a monthly ceiling.
  - Say so on the paywall (Apple 3.1.2(c) asks you to "clearly describe what the user will get").
- **Weekly:** a 10/day cap keeps even the heaviest user profitable.
- **Strips:** one 1:4 call should cost 1–2 credits; 4 calls should cost 4. Price credits by generations, not by "looks".
- **Free tier:** reduce it if conversion is under 4%.
  - Option: 1 free AI digi + a pre-rendered sample + unlimited free camera.
  - Or keep 3 but render them at 1K with a watermark (already 1K).
  - Free digis must be device-bound (App Attest + DeviceCheck bits) to stop reinstall farming.
- **Contest cash:** annual plans are paid upfront, so most of their profit lands in the contest window, while AI costs come later.
- **Retries:** if the real retry rate is 1.6 instead of 1.3, every AI cost above rises 23%.
- **Fixed costs in the contest window:** Apple developer $99/yr, Workers $5/month, domain about $10, OpenRouter top-ups. No ads.

---

## 3. On-device free digicam filter (Expo)

**Versions today:**

| Package | Version | Date | Source |
|---|---|---|---|
| expo | 58.0.25 | Nov 12 | [V, npm] |
| expo-camera | 58.0.14 | | [V, npm] |
| react-native-vision-camera | **5.2.4** | Oct 29 | [V, npm]; needs `react-native-nitro-modules` and `react-native-nitro-image` |
| @shopify/react-native-skia | 2.14.0 | | [V, npm] |
| react-native-worklets | 0.13.1 | | [V, npm] |
| expo-age-range | 58.0.3 | | [V, npm; official Expo module: Apple Declared Age Range / Play Age Signals] |

**Build path (contest-safe):**
1. **Capture.**
   - Use `expo-camera` (simplest) or VisionCamera 5 (better control: format, HDR off, real flash).
   - Use the real flash (`flash="on"`), with the torch as a fallback for the "night" look.
2. **"Develop" after capture.** Don't filter the live preview in v1: render a full-resolution still once, offscreen, with Skia (`Skia.Surface.MakeOffscreen` or `<Canvas>` + `makeImageSnapshot`).
   - The "developing…" moment fits the brand (Dispo-style) and avoids per-frame performance work.
3. **Shader stack** (one `RuntimeEffect` SkSL shader, or chained image filters):
   1. Downscale to about 2048×1536 (4:3, the digicam look; it also makes everything fast).
   2. **3D LUT:** a 512×512 PNG holding 64³ colours, sampled in the shader. Make 3–5 LUTs (Digicam, Night, Film, B&W) in Photoshop or DaVinci and export them as images. Your own LUTs, not copied.
   3. **Flash simulation:**
      - lift exposure near the faces/centre;
      - harsh highlight roll-off with a slight bloom;
      - fast vignette falloff;
      - cool white balance and darker background (inverse-square feel);
      - optional hard shadow offset.
   4. **Grain:** hash noise seeded per photo, stronger in the shadows, plus a slight chroma shift and JPEG-style softness.
   5. **Date stamp:** orange 7-segment text bottom-right with a glow.
      - Use an OFL-licensed font (DSEG7 is OFL; check its licence file).
      - Use the photo's EXIF date, or let the user pick a date (the "fake 2006" look).
4. **Save and share.**
   - `encodeToBytes` (JPEG), then `expo-file-system`, then `expo-media-library` (add-only permission) or the share sheet.
   - Use PHPicker for imports: no library permission needed (Apple 5.1.1(iii) prefers the picker) [V].

**Live filtered preview (v1.1):**
- VisionCamera Skia frame processors need `react-native-vision-camera-skia`. Margelo claims up to 500 FPS for simple shaders; the frame budget is 33 ms at 30 fps [C, https://visioncamera.margelo.com/docs/skia-frame-processors and the Margelo v5 blog].
- Expect 30 fps with a LUT + grain on an iPhone 12 or newer (E).

**Dev build:** required anyway.
- VisionCamera (Nitro), RevenueCat (`react-native-purchases`), App Attest and Declared Age Range don't run in Expo Go.
- Use EAS Build with a development client. Skia alone works in Expo Go (C).

**Strip compositing:** on device, with Skia. It's free, instant and works offline:
- frames, borders, logo, date, 2×6 or 9:16 layouts;
- the server only makes AI frames;
- upload the **final composite** for the share page, so the Worker never processes images. Workers have no canvas; Cloudflare Images would cost extra.

**Web strip maker (digi.pink):** Canvas 2D in the browser with the same LUT PNGs. No upload.

---

## 4. Safety and moderation stack

**Layer 1: product design (the cheapest, strongest layer)**
- Fixed looks only. **No free-text prompt box.** This protects you under Minnesota's nudification ban and Apple 1.2.
- No looks involving swimwear, underwear, "hot", body changes or "undress".
- No face-swapping someone onto another body or scene template with a stranger's body.
- No celebrity or public-figure looks.
- At most 4 faces per AI look.
- 18+ only (see 0.1).

**Layer 2: consent (Apple 5.1.2(i), contest rule, BIPA)**
- **One-time AI data consent screen:**
  - "Your photos are sent to Google (Gemini) via OpenRouter to create your digi. Deleted from our servers within 24 h. Never used to train AI."
  - Explicit "Agree" button. Don't hide it inside the terms.
  - Apple: "clearly disclose where personal data will be shared with third parties, including with third-party AI, and obtain explicit permission" [V].
- **Per upload, a checkbox (not pre-ticked):** "Everyone in this photo is 18+ and agreed to have it restyled with AI."
- **Biometric release (BIPA-style)** at first use, written plainly:
  - why face data may be processed;
  - kept at most 24 h for uploads, 30 days for results;
  - destroyed after that;
  - with a timed consent record.
- Log `consent_version`, timestamp, user ID and an image hash. Don't keep the image.
- The Digi Party group strip (each friend uploads their own selfie) is consent by design. Push it as the hero flow.

**Layer 3: input screening (server, before the paid call)**

| Tool | What it catches | Price |
|---|---|---|
| OpenAI `omni-moderation-latest` | Sexual, violence, self-harm on images | **Free**, images up to 20 MB [V, https://developers.openai.com/api/docs/guides/moderation]. But `sexual/minors` is **text-only** for images (see the example's applied input types) [V]. Don't send suspected CSAM [V] |
| Cheap vision LLM, JSON verdict (e.g. gemini-2.5-flash-lite) | `{people_count, any_person_possibly_under_18, nudity_or_underwear, is_screenshot_of_others_post, public_figure}`. Block on doubt. | about $0.0002 (E) |
| AWS Rekognition DetectModerationLabels / DetectFaces (AgeRange) | Nudity labels; face-based age estimate | $0.001/image for the first 1M, 1,000/month free for 12 months [V, https://aws.amazon.com/rekognition/pricing/]. **DetectFaces runs face geometry analysis, a direct BIPA risk.** Avoid DetectFaces |
| Google Cloud Vision SafeSearch | Adult/racy | about $1.50 per 1,000, first 1,000/month free [C; pricing table is JS-rendered] |
| Hive Visual Moderation | Broad NSFW; CSAM hash/classifier is sales-only | $3 per 1,000 images [C, https://thehive.ai/pricing] |

**Layer 4: model-side safety**
- Gemini blocks sexual content by default. You "may not attempt to bypass these protective measures" [V].
- OpenAI GPT Image: `moderation: auto` [V].
- Seedream: assume no moderation; the screening layers must catch everything.

**Layer 5: output screening**
- Run omni-moderation (free) on every result.
- If an output is sexual, block it, refund the credit, and flag the user (3 strikes, then ban).

**Layer 6: share pages (digi.pink/s/:id)**
- Unguessable IDs, `noindex`, 30-day expiry, delete button for the owner.
- A **"Report / request removal"** link on every page.
- Remove within 48 h; treat it as the TAKE IT DOWN process (section 6).
- Turn on the **Cloudflare CSAM Scanning Tool** for the zone. It's hash-matching on cached content: you get daily emails and it blocks matches. It does **not** report to NCMEC for you, and it doesn't catch new AI images [V, https://developers.cloudflare.com/cache/reference/csam-scanning/].

**Layer 7: CSAM duty (18 U.S.C. § 2258A)** [V, https://www.law.cornell.edu/uscode/text/18/2258A]
- A provider must report to the NCMEC CyberTipline "as soon as reasonably possible after obtaining actual knowledge" of apparent CSAM.
- A report counts as a request to **preserve the content for 1 year**.
- Fines for a knowing and willful failure: **up to $600K** (first) and **$850K** (later) for providers under 100M MAU.
- You are **not** required to scan proactively (§ 2258A(f)).
- **Practical steps:**
  - register Grasp Labs as an ESP with NCMEC before launch;
  - write a one-page procedure: don't view or share; lock the object in a separate R2 bucket with a 1-year hold; report; ban; call a lawyer;
  - don't pass the file to moderation APIs.
- The 18+ gate and minor blocking make this rare, not impossible.

**Layer 8: AI labelling**
- Gemini embeds **SynthID** in every image [V].
- Add IPTC `DigitalSourceType = trainedAlgorithmicMedia` (and C2PA if the library is easy) in the exported JPEG (E: cheap).
- Show a small "AI · Digi" mark on share pages, and in the image for free users (the watermark is already planned).
- Never present results as real photos in marketing.

**Layer 9: abuse and rate limits:** see section 7.

---

## 5. Apple App Review checklist (Guidelines last updated Oct 16, 2026) [V, https://developer.apple.com/app-store/review/guidelines/]

| Rule | What it says (V) | Digi action |
|---|---|---|
| **1.1.4** | No "overtly sexual or pornographic material" | No suggestive looks. The output filter blocks the rest |
| **1.2 UGC** | Now names "**AI content creation apps**" and "**nonconsensual intimate imagery**". Requires: a filter for objectionable material, reporting with timely responses, blocking abusive users, published contact info | Filter on input and output; report button on results and share pages; block or ban users; support email in the app and on the store page. Uploads and AI results count as UGC even without a feed |
| 1.2 removal clause | Apps "used primarily for … objectification of real people" can be removed | No ranking or "hot" features. No public feed |
| **4.1 / 4.3** | No copycats. 4.3(b): no apps "indistinguishable from what's already widely available" | Lead with groups, strips, Party Roll and seasonal drops in screenshots and in the review notes. Own names and art. Never mention Boothie or WayShot |
| **5.1.1(i)** | Privacy policy link in App Store Connect and in the app; it must explain retention, deletion and how to revoke consent | Policy covers: 24 h deletion of uploads, 30 days for shares, sub-processors (OpenRouter, Google, OpenAI moderation, Cloudflare, RevenueCat), no training |
| 5.1.1(ii)/(iii) | Consent and an easy way to withdraw it; use the picker instead of full Photos access | PHPicker; add-only Photos permission; a "Withdraw AI consent / delete my data" setting |
| 5.1.1(v) | No forced login. If accounts exist, deletion must be in the app | Stay account-free (anonymous RevenueCat ID) in v1. If you add accounts, add in-app deletion |
| **5.1.2(i)** | "Clearly disclose where personal data will be shared with third parties, **including with third-party AI**, and obtain explicit permission" | A dedicated consent screen naming the AI provider, before the first upload |
| 5.1.2(vi) | Facial or Camera/Photo API data can't be used for marketing or data mining | Don't keep face data. No ad SDKs that touch photos |
| 5.1.4 | Data from minors needs COPPA compliance | 18+ gate. Block under-13 entirely |
| **3.1.1** | IAP for credits; "credits … purchased via in-app purchase may not expire"; restore mechanism | Party Pack credits never expire. Restore button. Use consumables plus server-side balances keyed to the RevenueCat app user ID |
| **3.1.2(a)/(c)** | Subscriptions of at least 7 days; clearly describe "what the user will get for the price" | Paywall lists "X AI digis/day, Y/month", the price per period and the renewal terms. No fake countdown |
| 2.3.6 / age rating | Answer the questionnaire honestly. Tiers: 4+, 9+, 13+, **16+**, **18+**. Items include "User-Generated Content", "Age Assurance" (Declared Age Range API, age estimation) [V, https://developer.apple.com/help/app-store-connect/reference/app-information/age-ratings-values-and-definitions/] | Answer UGC: yes; Age Assurance: yes. To reach **18+**, set it higher; App Store Connect allows a higher rating than calculated [C]. Screenshots must still suit 4+ (2.3.8) [V] |
| Privacy nutrition label | Data "collected" = sent off-device and kept longer than real-time servicing | Declare: Photos (User Content; app functionality; not tracking); User ID / Device ID; Purchase history; Usage data and Diagnostics if you use analytics or Sentry. Linked to user: yes (anonymous ID). Tracking: no |
| Review notes | | Include a demo flow, explain the consent and moderation stack, and state that there's no free-text prompt |

**Texas App Store Accountability Act (SB 2420):**
- In effect since the 5th Circuit stayed the injunction on May 28, 2026.
- Developers must use the app store's age signals; there's a safe harbour for good-faith reliance.
- Utah's deadline moved to May 6, 2027. Louisiana's law has been amended. Alabama's takes effect Jan 1, 2027 [C, https://fpf.org/blog/comparing-enacted-app-store-accountability-acts/ and https://www.mofo.com/resources/insights/251111-texas-targets-app-stores-with-new-accountability-law].
- **Action:** call `expo-age-range` (Declared Age Range) at onboarding. Block anyone under 18, and anyone who declines and states a DOB under 18.

---

## 6. Legal checklist (US first)

**Strong suggestion for the contest: launch on the US storefront only** (maybe also CA/AU later). That avoids the EU AI Act, GDPR, the UK Online Safety Act and EU/UK Gemini restrictions in the first month (E).

| # | Law | Applies? | What to do |
|---|---|---|---|
| **L1** | **Illinois BIPA** (740 ILCS 14) | Likely in play. Photos themselves are excluded, but the *Wilson v. xAI* theory says identity-preserving edits are face-geometry scans. Damages $1K negligent / $5K reckless per person (2024 amendment: per person, not per scan) [C; ilga.gov was down, FKKS post above] | Public written retention and destruction policy; written release (an e-sign checkbox counts as written under BIPA's 2024 definition of "written release", C); 24 h deletion; no templates or embeddings; no Rekognition DetectFaces; contract terms that OpenRouter and Google don't keep data. You can't get consent from non-user faces in group photos: the uploader attests. This is residual risk. **Ask a lawyer (1 h).** |
| L2 | Texas CUBI (Bus. & Com. Code § 503.001) | Applies to capturing biometric identifiers commercially. AG-only enforcement, up to $25K per violation. The AG won $1.4B from Meta (2024) [C] | Same notice and consent; destroy within 1 year (24 h is fine) |
| L3 | Washington RCW 19.375 + **My Health My Data Act** (biometric data = consumer health data, private right of action); Colorado biometric amendment (from Jul 1, 2025, no size threshold) [C] | Possibly | Same consent; a separate consumer-health privacy notice link if you serve WA (C) |
| L4 | **COPPA** (amended rule; compliance date Apr 22, 2026; biometric identifiers added) [C] | Only if you knowingly collect from under-13s | Age gate. If you learn a user is under 13, delete their data |
| L5 | **CCPA/CPRA** | Thresholds: over ~$26.6M revenue, or buying/selling/sharing personal information of 100K+ consumers, or 50%+ of revenue from selling PI [C]. Digi likely **doesn't qualify** in year 1. CalOPPA still requires a privacy policy | Write a CCPA-style policy anyway (cheap; a buyer will ask). No selling or sharing for ads |
| **L6** | **TAKE IT DOWN Act** (Pub. L. 119-12, signed May 19, 2025; platform duty from May 19, 2026) [V, https://www.govinfo.gov/content/pkg/PLAW-119publ12/html/PLAW-119publ12.htm] | "Covered platform" = serves the public and "**primarily provides a forum for user-generated content**", or regularly hosts nonconsensual intimate imagery (NCII). Private, unlisted share links are **arguably not a "forum"** (E). Digi Rolls, shared albums or @name pages push you toward coverage | Do it anyway; it's cheap. A "clear and conspicuous" plain-language notice and removal form (signature, location, good-faith statement, contact); remove within **48 h**, plus "reasonable efforts" to remove identical copies (hash match within your R2). The FTC enforces it as an unfair or deceptive practice. The criminal side bans publishing NCII "digital forgeries" |
| L7 | State deepfake and NCII laws; **Minnesota nudification ban** (HF 1606, from Aug 1, 2026: lawsuits plus AG fines of $500K per violation; Texas and California also target nudify operators) [C, https://www.multistate.ai/updates/vol-103-minnesota-nudification-technology-ban] | Applies to tools that generate fake nudes of real people | Fixed looks, no prompt box, output nudity filter. That keeps Digi outside the definition (E) |
| L8 | Right of publicity / likeness (NY, CA, TN ELVIS Act; federal NO FAKES Act status unknown) [C] | Celebrity or public-figure edits | Ban public-figure uploads in the terms; the vision pre-check flags them; no celebrity looks in marketing |
| L9 | **UK Online Safety Act** | Share pages make Digi a user-to-user service if it has UK links. It needs illegal-content and children's-access risk assessments, and likely highly effective age assurance. UK law also criminalises creating sexual deepfakes [C] | **Skip the UK storefront in v1** |
| L10 | **EU AI Act Art. 50** | Transparency duties apply from Aug 2, 2026. The Art. 50(2) machine-readable marking duty for systems already on the market reportedly moved to Dec 2, 2026 (Omnibus) [C]. Deployers must disclose deepfakes of real people | **Skip EU storefronts in v1.** Later: SynthID + C2PA + a visible label meets most of it. GDPR Art. 9 (biometrics) also applies |
| L11 | Egypt PDPL | Founder location only; data sits in the US with a US LLC (E) | No action for now |
| L12 | Contest rule: "no deepfakes or real people without consent" | | Consent checkbox, Party strip consent-by-design, AI-made or consenting people in marketing. Email the organisers (still pending) and keep their reply |

**What a small app must do in practice:**
1. Privacy policy plus a **biometric data policy**. Host both on digi.pink.
2. Terms of use: 18+; you need consent from everyone pictured; no minors, nudity or public figures; Grasp Labs may report CSAM to NCMEC.
3. Retention:
   - uploads: R2 lifecycle rule deletes after 1 day ("typically removed within 24 hours of expiration" [V]), plus an explicit delete call right after generation;
   - results: 30 days;
   - consent logs: kept without images.
4. **No training on user photos**: state it in the policy and use only paid API tiers [V].
5. A removal and report process (48 h), support email, NCMEC ESP registration.
6. A sub-processor list in the policy.

---

## 7. Infrastructure: Cloudflare Workers + R2

**Prices** [V, https://developers.cloudflare.com/r2/pricing/ and https://developers.cloudflare.com/workers/platform/pricing/]:
- R2 Standard: $0.015/GB-month; Class A operations $4.50/M; Class B $0.36/M.
- R2 free tier: 10 GB, 1M Class A, 10M Class B per month. **Zero egress.**
- Workers Paid: $5/month with 10M requests and 30M CPU-ms; $0.30 per extra million requests.
- Duration isn't billed; CPU is capped at 5 minutes. Waiting on `fetch` isn't CPU time (C).
- Durable Objects: 1M requests included, then $0.15/M.

**Example at 10,000 AI digis a day (E):**
- Uploads: 0.4 MB each, kept 1 day.
- Results and composites: 0.6 MB each, kept 30 days.
- That's about 184 GB stored = **$2.61/month**.
- About 900K Class A operations a month = free.
- Workers: about $5–10.
- **AI cost at the same volume: about $540 a day.** Infrastructure is a rounding error; AI is everything.

**Design:**
- **Key safety:**
  - OpenRouter key only as a Worker secret (`wrangler secret put`); never in the app or the repo;
  - a separate OpenRouter key with a **credit limit** for production, plus a low-balance alert;
  - a second key for the fallback.
- **Request authentication:**
  - Apple **App Attest** (DeviceCheck framework) assertion on every generate call;
  - RevenueCat entitlement checked on the server (REST API, or a webhook-fed balance);
  - never trust the client's credit count.
- **Credits ledger:**
  - one Durable Object per user (strict, consistent counters);
  - or D1 with idempotency keys, so a retry never double-charges.
- **Rate limiting:**
  - use the Workers Rate Limiting binding for bursts (10 s or 60 s windows, per location, approximate) [V, https://developers.cloudflare.com/workers/runtime-apis/bindings/rate-limit/];
  - use Durable Objects for hard daily caps, per user and per device.
  - Suggested limits:
    - 1 in-flight generation per user;
    - 5 per minute;
    - plan daily caps;
    - a global kill-switch if spend per hour exceeds $X.
- **Long calls:**
  - don't hold the phone's HTTP request for 30–60 s;
  - start the job and return a job ID;
  - run it via Queues or Workflows (or a Durable Object alarm);
  - the app polls, or gets a silent push;
  - this survives app backgrounding and client disconnects (C).
- **Storage layout:**
  - `in/` prefix with a 1-day lifecycle rule; `out/` prefix with 30 days; `hold/` bucket for legal preservation (no lifecycle);
  - lifecycle rules filter by prefix, with a maximum of 1,000 rules [V, https://developers.cloudflare.com/r2/buckets/object-lifecycles/].
- **Share pages:**
  - the Worker renders HTML with OG tags pointing to the on-device composite in R2 via a custom domain;
  - `X-Robots-Tag: noindex`;
  - expiry checked by the Worker, not only by lifecycle;
  - CSAM Scanning Tool on the zone; report form.
- **Client-side upload prep:** resize to 1.5 MP or less and strip EXIF GPS before upload. That's less data, less liability and a cheaper input-token bill.
- **Logging:** log cost (tokens in/out, USD), model ID, latency, refusal reason and moderation scores for every job, without image content.

---

## 8. Open items to test or confirm

1. 20-photo bake-off:
   - NB 2.1 (minimal vs medium thinking) vs Seedream 5.5 vs GPT Image 2.6 Flare (medium) vs MAI-Image-2.6-Flash;
   - include 2-, 4- and 6-person photos and one-call 1:4 strips;
   - score face fidelity per person, and record p50/p95 latency and cost.
2. Confirm the 18+ decision. Retarget the persona accounts to 18+.
3. Check whether Grasp Labs is already in the Apple Small Business Program. If not, enroll today.
4. One hour with a lawyer on BIPA, CUBI and MHMDA wording and the group-photo attestation.
5. Read the ByteDance/BytePlus, Microsoft MAI and BFL usage terms (minors, real people) before using any of them as the fallback.
6. Register with NCMEC as an ESP. Email the contest organisers about consent.

---

## Sources (accessed Nov 16, 2026)

**Models and pricing**
- OpenRouter models API (image output): https://openrouter.ai/api/v1/models?output_modalities=image [V]
- OpenRouter endpoints per model: https://openrouter.ai/api/v1/models/google/gemini-nano-banana-2.1/endpoints [V]
- OpenRouter model pages: https://openrouter.ai/google/gemini-nano-banana-2.1 · https://openrouter.ai/bytedance-seed/seedream-5-5 [V]
- OpenRouter pricing: https://openrouter.ai/pricing [V]
- OpenRouter terms: https://openrouter.ai/terms [V, updated Aug 31, 2026]
- Gemini pricing: https://aistudio.google.com/docs/pricing [V]
- Gemini image generation docs: https://aistudio.google.com/docs/image-generation [V]
- OpenAI pricing: https://developers.openai.com/api/docs/pricing [V]
- OpenAI image generation guide: https://developers.openai.com/api/docs/guides/image-generation [V]
- GPT Image 2.6 per-image estimates: https://kie.ai/blog/gpt-image-2-6-pricing · https://www.eesel.ai/blog/chatgpt-images-2-6-pricing [C]
- Artificial Analysis edit leaderboard: https://artificialanalysis.ai/image/leaderboard/editing [V]
- Arena image edit leaderboard: https://arena.ai/leaderboard/image-edit [C, 403]
- fal pricing: https://fal.ai/pricing [V]
- RevenueCat pricing: https://www.revenuecat.com/pricing/ [V]

**Provider terms**
- Gemini API terms: https://aistudio.google.com/docs/terms [V]
- Google Cloud service terms: https://cloud.google.com/terms/service-terms [V]
- Google Prohibited Use Policy: https://policies.google.com/terms/generative-ai/use-policy [C, not opened]
- OpenAI under-18 guidance: https://developers.openai.com/api/docs/guides/safety-checks/under-18-api-guidance [V]
- OpenAI usage policies: https://openai.com/policies/usage-policies/ [C, 403]
- OpenAI 4o image generation system card addendum (via search) [C]

**Moderation**
- OpenAI moderation guide: https://developers.openai.com/api/docs/guides/moderation [V]
- AWS Rekognition pricing: https://aws.amazon.com/rekognition/pricing/ [V]
- Google Cloud Vision pricing: https://cloud.google.com/vision/pricing [C, JS table]
- Hive pricing: https://thehive.ai/pricing [C]
- Cloudflare CSAM Scanning Tool: https://developers.cloudflare.com/cache/reference/csam-scanning/ [V]

**Apple**
- App Review Guidelines: https://developer.apple.com/app-store/review/guidelines/ [V, updated Oct 16, 2026]
- Age ratings: https://developer.apple.com/help/app-store-connect/reference/app-information/age-ratings-values-and-definitions/ [V]
- Small Business Program: https://developer.apple.com/app-store/small-business-program/ [V]

**Law**
- TAKE IT DOWN Act: https://www.govinfo.gov/content/pkg/PLAW-119publ12/html/PLAW-119publ12.htm [V]
- 18 U.S.C. § 2258A: https://www.law.cornell.edu/uscode/text/18/2258A [V]
- BIPA and generative AI (Wilson v. xAI): https://technologylaw.fkks.com/post/102o602/not-just-a-selfie-the-new-bipa-theory-aimed-at-generative-ai [C]
- App store accountability acts: https://fpf.org/blog/comparing-enacted-app-store-accountability-acts/ · https://www.mofo.com/resources/insights/251111-texas-targets-app-stores-with-new-accountability-law [C]
- Minnesota nudification ban: https://www.multistate.ai/updates/vol-103-minnesota-nudification-technology-ban [C]
- EU AI Act Art. 50 status: https://www.joneswalker.com/en/insights/blogs/ai-law-blog/yes-august-2-still-matters-the-eu-approved-a-high-risk-ai-delay-but-most-trans.html · https://www.ropesgray.com/en/insights/viewpoints/102nfqm/you-talkin-to-me-operationalising-the-eu-ai-acts-transparency-obligations [C]

**Cloudflare**
- R2 pricing: https://developers.cloudflare.com/r2/pricing/ [V]
- Workers pricing: https://developers.cloudflare.com/workers/platform/pricing/ [V]
- R2 lifecycles: https://developers.cloudflare.com/r2/buckets/object-lifecycles/ [V]
- Rate Limiting binding: https://developers.cloudflare.com/workers/runtime-apis/bindings/rate-limit/ [V]

**Expo / React Native**
- npm registry (expo, expo-camera, react-native-vision-camera, @shopify/react-native-skia, expo-age-range) [V]
- VisionCamera Skia frame processors: https://visioncamera.margelo.com/docs/skia-frame-processors [C]

Downloaded raw pages and JSON are in `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/digi/tech/`.
