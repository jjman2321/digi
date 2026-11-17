# 03 · Competitors: AI photo transformation apps

**Date of data:** Nov 16–17, 2026 (US App Store unless marked).
**Scope:** the big AI photo apps (Remini, Lensa, EPIK, Glam AI, Hypic, Pica AI, PhotoAI, Picsart, YouCam, FaceApp, Facetune, Retake, Photoroom), the 2025–2026 viral "trend" generators, and the AI trends that made them spike: Lensa avatars, Remini headshots, AI yearbook, Ghibli, Nano Banana figurine, AI polaroid with a celebrity, AI photobooth and the digicam/flash look. Last, which AI features actually work on **group party photos**.
**Builds on:** `digi-deep-2026-11/02-competitors.md`, `08-pricing-paywall.md`, `10-looks-trends.md` and `12-comps-exit.md`. I don't repeat them. Retro and digicam cameras are covered in this folder's `02-competitors-retro-cams.md`.

**Labels on every number**
- **V** = I verified it today from a primary source: the iTunes Lookup API, the apps.apple.com in-app purchase (IAP) list, the Apple review RSS feed or the Apple RSS charts.
- **C** = a claim from a company, a founder or the press.
- **E** = an estimate from a third-party model or my own maths, with a confidence of **high**, **med** or **low**.

**Raw data** (scratch files, not committed), all under `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/bible/aiph/`:
- `prof/profiles.json`: lookup data and the IAP price list for 47 apps (Nov 17).
- `rev/`: the 500 most recent US reviews for 26 apps, **11,541 reviews** in total.
- `quotes.json`: those reviews tagged by complaint theme.
- `adapty/`: Adapty paywall-library pages, captured Nov 7–8, 2026.
- `search/`: 34 keyword searches.

---

## Key takeaways

1. **The steady money in AI photos goes to "fix my face" apps, not to trend apps.**
   - US Photo & Video top grossing on Nov 16, 2026 [V]: Facetune #7, FaceApp #8, Picsart #11, Airbrush #15, Retake #17, Remini #21, Photoroom #22.
   - The trend apps of 2022–23 have dropped down the chart: Lensa is #83 and SNOW #96, and EPIK was outside the US chart [V]. (Fact-check note: Apple's feed returns only 100 rows even when asked for 200, so "outside" means outside the top 100. A re-pull later on Nov 17 had Lensa #81, SNOW #99 and EPIK just inside at **#100**. All three sit on the edge of the top 100.)
   - Every app on that list sells a lasting job (retouch, enhance, cut out), not one look.
2. **Trends spike for 2–6 weeks, then fall 70–80%.**
   - Lensa's group of 16 AI photo apps peaked in mid-December 2022 at 4.3M downloads and $1.8M of spending a day. By Feb 12, 2023 they were down to 0.95M and $0.51M a day (C, Apptopia via TechCrunch).
   - EPIK's yearbook trend took daily net revenue from about $15K to $340K, then faded (E, Appfigures, Oct 2023).
   - The apps that kept their customers did it by shipping new looks every week. Photo Lab kept **40% one-month retention** this way (C, Sensor Tower).
3. **A trend you buy with ads can bring downloads and no money.**
   - In the Ghibli week (late March 2025), Remini bid on "ghibli" in Apple Search Ads. Its downloads doubled (+3.6M, 7.3M in total), but revenue rose **less than 1%** (E, Appfigures).
   - ToonMe, whose cartoon look actually matched the trend, went from under 15K to almost 600K downloads a day (40×) (C, Insightrackr). Appfigures measured a much smaller bump for the same week (+221% on its best day, ~184K extra downloads), so read 40× as the top of the range.
   - Lesson: the look has to *be* the trend. Ads that only borrow the trend's name don't sell.
4. **"It changed my face" is the top quality complaint, and it now appears in almost every app.**
   - Across 11,541 recent US reviews, "looks nothing like me" or "changed my face" wording appears in **23 of 26 apps** [V]. A few hits are neutral (FaceApp fans who *want* a new face), and the keyword count misses paraphrases, so read it as a floor.
   - The pattern: users forgive face drift in cartoon or anime styles (ToonMe, Ghibli). They punish it hard in photo-real edits such as lighting, filters and headshots.
5. **Billing anger is the #1 complaint by volume, and it sinks recent ratings.**
   - Lifetime ratings sit at 4.5–4.8★, but the last 500 written reviews average much lower [V]:
     - ReelMe 1.55, Hypic 1.64, GIO 1.68, **Facetune 1.92**, Shots 2.09, EPIK 2.35, Photoroom 2.52, Lensa 2.67.
   - The top themes are trial charges, paying and still hitting a limit ("Pro but limited"), and paywalls on tools that used to be free.
   - The two apps with good recent reviews (Airbrush 4.41, Visify 4.34) have a clear free tier and a "natural" promise.
6. **Group photos are broken in most big apps. That is Digi's opening.**
   - Reviews say:
     - Lensa "crashes when there are more than two people";
     - Facetune "can no longer switch faces… when there are multiple faces";
     - FaceApp "recognize[s] only one face instead of five";
     - Remini "kept changing group photo completely";
     - ReShoot "completely altered everyone's faces" [V].
   - The two group features users praise are fixing one person's eyes or smile while everyone else stays the same (Retake, Airbrush), and cartoon-style group shots.
7. **Credit prices are an easy bar to clear.**
   - Today's US IAP prices per AI image [V]:
     - Sparkle $0.20 (25 for $4.99), GIO $0.20 (30 for $5.99), Boothie $0.24 (25 for $5.99, re-checked in the US IAP list, Nov 17);
     - CelebGen $0.36–0.50; TogetherLens $0.80–1.00 per token.
   - Seedream costs Digi about $0.02–0.03 an image, so the planned Party Pack at **$0.24 a digi** keeps roughly 85–90% after Apple's cut (E, high).
   - Price is not the problem. Trust is.
8. **Free AI is the real rival.**
   - Free Gemini gives about 20 Nano Banana 2 images a day. Free ChatGPT gives 2–3 a day. (The Gemini number is on Google's own "Gemini Apps limits" help page, support.google.com/gemini/answer/16275805 [V, fact-check]. The ChatGPT number is still C, third-party write-ups, 2026.)
   - The polaroid, figurine, Ghibli and 1980s trends all spread as **copy-paste prompts**, not as apps.
   - A paid app wins only on speed, a look you can't easily prompt, group handling and kept faces.
9. **New AI trend apps that grow fast pay to grow, and reviewers call them scams.**
   - Examples [V]: Shots (Jun 2025, 18,674 ratings, #34 grossing), AI Maker (Nov 2025, 23,749 ratings), Dance AI (Feb 2026, 17,572).
   - They pair weekly subs at $6.99–14.99 with coin packs at $9.99–34.99.
   - Recent averages are about 2★, and 72% of Shots' last 500 reviews are 1–2★ [V].
   - This is the playbook Digi should not copy. Its refunds and chargebacks would come straight out of contest profit.

---

## 1. Corrections to the prior research

| # | Prior claim | What I found today | Source |
|---|---|---|---|
| 1 | "Glam AI: not found in US iOS search under that name; mostly Android; arr.club about $6M MRR" (02, 08) | Glam Labs **did** have an iOS app: *Glam AI: Video & Photo Editor*, id1545593132. An aggregator says it was last updated Apr 28, 2026 with ~40.5K ratings (C). Today its App Store page returns **404 in the US, GB and EG**, and the Lookup API returns nothing, so the iOS app looks **removed or region-pulled** (reason unknown). The Android app shows 6.2M installs and 217K ratings (E, AppGoblin). Revenue estimates disagree about 85×: under $10K/mo (AppGoblin) vs $850K/mo (ScreensDesign). **Treat the "$6M MRR" claim as unverified.** | [V] curl/Lookup Nov 17; AppGoblin; ScreensDesign |
| 2 | "Google says Nano Banana keeps at most 4 faces recognisable" (README, 04) | Google's own blog says **Nano Banana Pro** keeps "the consistency and resemblance of **up to 5 people**" and takes up to 14 images (C, Google, Nov 2025). More important: **Google models are blocked on Digi's key.** Seedream has **no published face limit**, and third-party testers say 4.0 drifted on faces in group shots while 4.5 is "noticeably lower" but not zero (C, low). The 1–4 people rule has to come from Digi's own test photos, not from Google's docs. | blog.google; genape.ai; dreamina guide |
| 3 | Hypic pricing "$6.99/wk · $6.99–10.99/mo · $69.99/yr" (02) | Today's top-10 IAP list shows **no weekly plan**. Monthly runs $2.99–20.99 and yearly $12.99–**159.99** [V]. ByteDance only started charging in 2025: under $100K/mo early in 2025, $1M+/mo from August, **$1.3M in Nov 2025** pre-fee (E, med, Appfigures). | apps.apple.com IAP; Appfigures Dec 19, 2025 |
| 4 | "Remini revenue held and grew to about $93M/yr run-rate (Appfigures, Feb 2026)" (12) | I couldn't find that Appfigures figure. Adapty's Nov 7, 2026 estimate is **~$5M/month (~$60M/yr), 2M downloads/month** (E, low-med). Keep a range of **$60–93M/yr** and call it uncertain. | Adapty paywall library |
| 5 | Lensa "peak month about $20M+" (01) | The sources disagree. Appfigures: "$37M+ net in the last 60 days" (to early Jan 2023). BusinessOfApps (AppMagic): "$8M in December 2022". Statista: $39.2M for 2022 and $18M for 2023 (−58%). Keep **$8–20M in the peak month** (E, low). | Appfigures Jan 6, 2023; BusinessOfApps |
| 6 | "Pica AI" was not profiled | Pica AI is **web-first** (pica-ai.com, est. 1.5–7M visits/month, E, low, Semrush/Moge 2025). Its iOS app (id6446337794, WEGITAL HK) returns **404 in the US store today** [V]. It is not a US iOS competitor. | Semrush; Lookup |
| 7 | "Facetune: #7 grossing US", shown as a healthy leader (02) | It is still #7 [V]. But its last 500 US reviews (Apr 20–Nov 15, 2026) average **1.92★, with 76% at 1–2★** [V]. The main reasons: basic tools moved behind the paywall, an AI update that "changed my face completely", and trial charges. A big incumbent is **making users angry right now**. | Review RSS |
| 8 | "Retake AI: Deep Flow (UAE)" (02) | The App Store seller is DEEP FLOW SOFTWARE SERVICES-FZCO [V]. Adapty calls it "a Turkey-based company" and estimates **$800K/mo on 600K downloads** (E, low-med). A blog ties it to Codeway with "$40M+ ARR" (C, low, unverified). | Lookup; Adapty |
| 9 | "Free AI is the hidden rival" (01, README) | Agreed, with numbers now. Free Gemini allows about 20 Nano Banana 2 images a day, and free Nano Banana Pro was cut to 2 a day. Free ChatGPT allows about 2–3 images a day (C, third-party, 2026). | TechRadar, Engadget, Analytics Insight |

---

## 2. The scoreboard today

Apple RSS charts, Photo & Video genre (6008), top 200, as published Nov 16, 2026 at 16:05 PT (pulled Nov 17). Ratings are US lifetime counts from the Lookup API on Nov 17 [V]. "Recent avg" is the average stars of the latest 500 written US reviews [V]. A blank cell means outside the top 200.

| App (ID) | Owner | Released | US ratings / avg | Recent avg (n) | G-US | F-US | G-GB | G-JP | G-KR |
|---|---|---|---|---|---|---|---|---|---|
| Facetune (1149994032) | Lightricks (IL) | 2016-11 | 381,875 / 4.62 | **1.92** (500) | **7** | 37 | 8 | 72 | 16 |
| FaceApp (1180884341) | FaceApp Technology (CY) | 2017-01 | 1,790,710 / 4.73 | 3.11 (500) | **8** | 76 | 6 | 40 | 34 |
| Picsart (587366035) | PicsArt (US/AM) | 2013-01 | 1,196,973 / 4.66 | 3.88 (500) | 11 | 12 | 15 | 12 | 13 |
| Airbrush (998411110) | Pixocial (SG) | 2015-10 | 204,345 / 4.80 | **4.41** (500) | 15 | 34 | 10 | | |
| Retake AI (6466298983) | Deep Flow FZCO | 2023-10 | 53,456 / 4.61 | 3.39 (500) | 17 | 42 | 23 | 64 | 98 |
| Remini (1470373330) | Bending Spoons (IT) | 2019-08 | 359,868 / 4.61 | 3.52 (500) | 21 | 70 | 19 | 14 | 47 |
| Photoroom (1455009060) | Photoroom (FR) | 2019-03 | 231,754 / 4.82 | 2.52 (500) | 22 | 65 | 17 | 15 | 24 |
| Prequel (1325756279) | Prequel Inc. | 2018-03 | 347,579 / 4.74 | 2.42 (500) | 23 | 63 | 18 | 46 | 38 |
| Meitu (416048305) | Meitu (CN) | 2011-02 | 80,438 / 4.78 | 2.32 (500) | 28 | 35 | 28 | **7** | **3** |
| Shots (6745820631) | Deepix AI (TR) | **2025-06** | 18,674 / 4.46 | 2.09 (500) | 34 | 27 | 39 | 67 | 88 |
| YouCam Makeup (863844475) | Perfect Corp (TW) | 2014-08 | 156,172 / 4.74 | 2.60 (500) | 44 | 57 | 49 | 49 | |
| ReelMe (6745781406) | TPC Invest (SG) | 2025-05 | 8,652 / 4.47 | **1.55** (328) | 62 | | 68 | | |
| AI Mirror (6444888896) | Polyverse | 2022-12 | 50,369 / 4.66 | 2.03 (500) | 71 | | 65 | 37 | 55 |
| Dance AI (6758041184) | Deepix AI (TR) | **2026-02** | 17,572 / 4.59 | not pulled | 75 | | 75 | | |
| Hypic (1644042837) | ByteDance (SG) | 2023-01 | 17,332 / 4.56 | **1.64** (500) | 80 | **20** | 37 | 44 | 49 |
| Lensa (1436732536) | Prisma Labs (US) | 2018-11 | 418,216 / 4.70 | 2.67 (500) | 83 | | 76 | | |
| Photoleap (1191337894) | Lightricks | 2017-07 | 138,310 / 4.68 | 2.55 (500) | 88 | | 78 | | |
| GIO (6449296449) | Prequel Inc. | 2023-08 | 36,130 / 4.53 | 1.68 (500) | 90 | | | | |
| SNOW (1022267439) | SNOW / Naver (KR) | 2015-11 | 36,794 / 4.61 | 3.01 (500) | 96 | | 97 | 11 | 7 |
| EPIK (1577705074) | SNOW / Naver (KR) | 2021-08 | 54,985 / 4.72 | 2.35 (500) | | 66 | | 22 | **5** |

**How to read this**
- **Lifetime stars mean little.** Almost every app shows 4.5–4.8★ for life, and its recent written reviews are 1.5–3.5★.
  - Lifetime ratings most likely come from in-app rating prompts shown after a good moment (E, med).
  - Written reviews come from upset people. They over-represent anger, but they tell you **what makes people angry**.
- **The Asian AI apps are huge at home and small in the US.** Meitu is #3 grossing in Korea and #7 in Japan; EPIK is #5 in Korea; SNOW is #7 in Korea. In the US they rank #28, outside the top 200, and #96.
- **Hypic is a download machine that earns little.** It is #20 free but only #80 grossing in the US.
- **The 2025–26 AI trend generators make real money by buying users.** Shots (#34), ReelMe (#62) and Dance AI (#75) were all launched in the last 18 months.

---

## 3. Revenue and download estimates (graded)

All numbers are monthly unless noted. The Adapty paywall library shows a rounded header plus a written "About" estimate, and they often disagree. I show the written figure, which is usually the more specific one.

| App | Monthly revenue | Monthly downloads | Grade | Notes and source |
|---|---|---|---|---|
| **FaceApp** | ~$10M | ~1M | E, low-med | Adapty Nov 7, 2026. The #8 US grossing rank fits an 8-figure-a-year business |
| **Meitu** (app) | ~$6M | ~2M | E, low-med | Adapty Nov 7, 2026. The parent reported 19.83M paying subs worldwide (C, prior research) |
| **Remini** | ~$5M | ~2M | E, low-med | Adapty Nov 7, 2026. US, Brazil and Indonesia are the top markets |
| **Picsart** | ~$5M | ~3M | E, low-med | Adapty. Company-wide ARR guesses run $150–250M (E, low; no official 2025 figure found) |
| **Facetune / Lightricks** | Lightricks ~$250M ARR (Jul 2025) | — | C, med | Wikipedia citing CTech. 6.6M paying users (C). Facetune's own share isn't public |
| **Photoroom** | ~$3M (app) | ~2M | E, low-med | Adapty. Company ARR ~$94M at end-2024, +89% YoY (E, Sacra). Profitable (C) |
| **Airbrush** | ~$2M | ~400K | E, low-med | Adapty Nov 8, 2026 |
| **Hypic** | **$1.3M** (Nov 2025, pre-fee, both stores) | ~3.7M (44M/yr) | E, med | Appfigures Dec 19, 2025. Q1 2026 downloads 33M, +21% QoQ (C, Sensor Tower summary) |
| **YouCam (Perfect Corp)** | **$69.2M in FY2025** (whole company); $61.1M AI/AR cloud + subscription | — | **C, high** (public company results, marked unaudited) | Perfect Corp, NYSE: PERF, Feb 24, 2026. **908K active subscribers on Dec 31, 2025, down 4.0% from 946K on Sep 30** |
| YouCam Makeup (app) | ~$900K | ~300K | E, low-med | Adapty |
| **SNOW** | ~$900K | ~300K | E, low-med | Adapty |
| **Retake** | ~$800K | ~600K | E, low-med | Adapty. A blog's "$40M+ ARR" figure is C, low |
| Prequel | ~$800K | ~300K | E, low-med | Adapty |
| Photoleap | ~$700K | ~200K | E, low | Adapty (its header says "$100K") |
| **EPIK** | ~$500K | ~500K | E, low-med | Adapty Nov 8, 2026 |
| **Lensa** | ~$500K | ~90K | E, low-med | Adapty. Down from a 2022 peak of $8–20M a month |
| ReShoot (Sep 2025) | ~$500K | ~600K | E, low | Adapty Oct 25, 2026 |
| GIO | ~$400K | ~90K | E, low | Adapty |
| Shots (Jun 2025) | ~$1M (header) | ~2M | E, low | Adapty |
| **PhotoAI.com** (web) | ~$105K revenue, ~$80K profit (Mar 2026) | — | C, med (founder's own post) | Pieter Levels, levels.io, Mar 6, 2026. Older "$132–138K MRR" posts are from late 2025 |
| **Glam AI** (Glam Labs) | <$10K to $850K | 150K (SD) | E, **very low** | AppGoblin vs ScreensDesign. iOS listing is 404 today |
| Pica AI (web) | Unknown | 1.5–7M web visits | E, low | Semrush, Moge (2025) |

**What the spread tells you (E)**
- The top 8 AI photo apps each earn **$2–10M a month**. All of them are utilities with a lasting job.
- Trend-born apps that survived (Lensa, EPIK) settle at **$0.5M a month**, 3–5 years after the spike.
- Perfect Corp is the only public-company view of an AI beauty app business: **$69M a year from about 0.9M subscribers ≈ $67 per subscriber per year**, and the subscriber count is now shrinking.

---

## 4. App-by-app teardowns

Each teardown gives the money model with today's US prices [V], the trend that made it spike, how long the spike lasted, the main complaints (theme counts from its last 500 US reviews [V]), and one lesson for Digi.

### 4.1 Remini (Bending Spoons)

**What it sells:** "Turn your old, blurry photos into gorgeous, clear HD in just ONE TAP." It also does "influencer-style" portraits and AI headshots.

**Prices [V]:**
- Remini Pro Weekly $9.99.
- Lite Weekly $4.99 / $5.99 / $7.99.
- 1 Month $9.99.
- Free users can enhance after watching ads.

**Spikes:**
- **July 2023, AI headshots on TikTok.** A @Gracesplace video passed 42.9M views. Daily net revenue went from about $90K to **$567K in one day**, and $2.3M net in that week (E, med, Appfigures, Jul 14, 2023). July downloads were about 23M (E, Appfigures); Sensor Tower measured +138% month on month. Remini itself claimed 40M downloads Jul 2–15 (C).
- **March–April 2025, Ghibli.** Downloads doubled to 7.3M between Mar 29 and Apr 8 (+3.6M vs early March), but **revenue rose less than 1%**. Appfigures thinks it was paid Apple Search Ads on "ghibli" keywords (E, med, Appfigures, Apr 4, 2025).

**How long:** the 2023 download spike lasted about a month. Revenue stayed, because the subscription holds a lasting job: restoring old photos.

**Complaints (last 500, Jun 13–Nov 15, 2026):**
- Average 3.52★, 36% negative.
- **Ads: 73 reviews (61 negative).** "you have to watch 4-5 ads to edit a single photo"; "the amount of ads is crazy… 5 Ads at least each one is 60s".
- Price: "for $10 a week? Get lost".
- Group photos: "kept changing group photo completely!!"; "the photos with people in them look terrible when enhanced! looks nothing like the original!"

**Lesson for Digi:** a weekly price near $10 sells when the job is lasting. Ad-gated free use makes people hate the app, so **Digi's free on-device looks should have no ads**.

### 4.2 Lensa (Prisma Labs)

**Prices [V]:**
- Unlimited Access $2.99/week, $4.99, or $29.99 / $39.99 / $49.99 a year.
- Membership $35.99.
- **Magic Avatars packs at $3.99, $5.99, $7.99 and $11.99.**

**The spike (Magic Avatars, late Nov–Dec 2022):**
- Downloads: 1.6M in November (+631% vs October), then **12.6M in Dec 1–11** (C, Sensor Tower via TechCrunch).
- Revenue: about $37M net in the 60 days to early January (E, Appfigures). Over 50% of 2022 revenue came in December (C).
- The 16-app group fell **−78% in downloads and −72% in spending** from mid-December to Feb 12, 2023 (C, Apptopia).
- Lensa made $18M in 2023 (−58%) (E, BusinessOfApps). It is ~$500K a month today (E, Adapty).

**How long:** about **3–4 weeks** at the peak, then a long slide.

**Complaints now (last 500, Dec 2024–Nov 2026):**
- Average 2.67★, 55% negative.
- Slow or failing: 69 reviews.
- Group photos crash or won't save: "crashes when there are more than two people… I can't save it"; "When my photo contains multiple people it won't save".
- Points on top of a subscription: "When you pay for a subscription, there should be no use of points!"
- Daily caps on "unlimited": "Paid for an unlimited subscription and then was told I'd reached the maximum daily limit".

**Lesson for Digi:** one-off packs on top of a subscription made a lot of money in the spike month. Selling "Unlimited" and then capping it turned into lasting anger. **Never call anything "unlimited" if it isn't.**

### 4.3 EPIK (SNOW / Naver)

**Prices [V]:**
- PRO $3.49/week, $11.99/month, $51.99/year.
- **Seasonal one-offs:** AI Christmas Limited Edition $0.99, AI Christmas Early Bird $3.99, Yearbook Standard LE $3.99, Yearbook PRO Express LE $4.99, Yearbook Express LE $5.99, Yearbook Express $9.99.

**The spike (AI Yearbook, Sep 18–Oct 2023):**
- Daily net revenue rose from about $15K to **$340K** on Wednesday, Oct 4. That was **2.8M downloads and $1.7M net in two weeks** (E, med, Appfigures, Oct 6, 2023).
- It was #1 on the US App Store (C, TechCrunch Oct 6, 2023).
- Mobile Action dates the climb from Sep 18 and the big jump from Oct 2.
- Today it is ~$500K a month (E, Adapty) and outside the US top 200, but #5 grossing in Korea [V].

**How long:** about **2–3 weeks** at the peak.

**Complaints (last 500, Oct 2023–Nov 2026):**
- Average 2.35★, 64% negative. Paywall: 77 reviews. Billing: 91.
- "Pro but limited", over and over: "Spent $13 on pro for the month and then it told me my monthly usage was up an hour later"; "paying over $100 a year for something to put me on a limit".
- Yearbook buyers on face changes: "Yearbook Photos Look Nothing Like Me… Waste of $3.99"; "My features were distorted into someone unrecognizable."
- **A July 2026 review: "I saw an ad on tik tok that told me I could download this app to use the g7x filter… as soon as I went to use t[he filter, it asked to pay]"** [V]. EPIK is already buying TikTok ads on the G7X/digicam look, which is Digi's look.

**Lesson for Digi:** EPIK proves the **seasonal one-off AI pack** (Christmas at $0.99–3.99). It also shows that hidden monthly caps on "Pro" create a steady stream of 1★ reviews.

### 4.4 Glam AI (Glam Labs)

- **What it was:** "pick a trend, add your photo" templates for photos, video, talking avatars and "viral effects" (C, listings).
- **Status:** the US/GB/EG App Store page returns 404 on Nov 17, 2026 [V]. Android shows 6.2M installs and 4.59★ from 217K ratings (E, AppGoblin).
- **Complaint on record:** a Product Hunt comment says a subscriber "got far fewer generations than the plan advertised", and the team replied that the "limits have now been removed" (C).
- **Not to be confused with:** **Glam Up** (6480331890, 33,456 ratings), a different app. Its founder claims a $150K MRR peak (C, unverified). Its last 500 reviews average 2.39★. **41 reviews mention its "invite 3 people to unlock your results" gate**, e.g. "you either have to invite 3 people or pay to see anything" [V].

**Lesson for Digi:** forced "invite 3 friends" gates do spread an app, but they produce angry reviews. Digi's group feature has to be a reason to invite friends, not a toll.

### 4.5 Hypic (ByteDance)

**Prices [V]:**
- Monthly $2.99 / $4.99 / $6.99 / $14.99 / $20.99.
- Yearly $12.99 / $14.99 / $35.99 / $109.99 / $159.99.
- Today's top-10 list shows no weekly plan.

**History:**
- It launched late 2022 and was free for most of 2023–24.
- Downloads: 19M in 2023, 37M in 2024, about 44M in 2025 (E, med, Appfigures).
- Revenue climbed in 2025: under $100K a month at first, $250K in April, just under $1M in August, then **$1.3M in November** pre-fee. That is still "the smallest" next to VSCO, which is more than 3× bigger (E, Appfigures).

**Complaints (last 500, Dec 2025–Nov 2026):**
- **Average 1.64★, 84% negative. Paywall: 118.**
- "Used to love this app, but now basically everything is behind a paywall."
- "the chinese version xingtu has them for free, which is unfair for global users."

**Lesson for Digi:** Hypic is the clearest case in this list of **charging for features people already had for free**. Digi should launch with its free on-device looks set free forever, and promise that in writing.

### 4.6 Pica AI

- It is web-first (pica-ai.com): face swap, headshots, enhancer, old-photo repair. A guide lists a $5.99/month tier (C).
- Web traffic estimates range from 1.5M to 7.2M visits a month (E, low, Semrush May 2025, Moge Q4 2025).
- The iOS app (WEGITAL HK, id6446337794) returns 404 in the US today [V]. AppGoblin put iOS revenue under $10K a month (E, low).

**Lesson for Digi:** a face-swap web tool gets SEO traffic but almost no US App Store presence. It isn't a direct rival. It does show that people search for "face swap" and "AI headshot" on the web, where Digi's share pages can rank.

### 4.7 PhotoAI.com (Pieter Levels)

- **Model:** web-only. You train a personal model on your selfies, then generate "photoshoots". Plans are monthly or annual, so Levels calls it "revenue", not MRR (C).
- **Numbers:** about **$105K revenue and $80K profit a month (Mar 2026, founder-reported)**. The often-quoted $132–138K MRR is late-2025 aggregator data (C). Around half its traffic comes from SEO (C, prior research). It took 2+ years.

**Lesson for Digi:** one person can run a profitable AI photo business with SEO plus a personal model. But it is a **slow** business, not a 30-day one. PhotoAI's playbook, **landing pages per style**, fits Digi's share pages and look pages.

### 4.8 Picsart

**Prices [V]:**
- Gold $4.99/week, $12.99/month, $57.00/year.
- Pro $11.99/week, $13.99/month, $83.99/year.
- Plus $11.99/month, $64.99/year.

**Size:**
- 1.2M US ratings. #11 grossing and #12 free in the US [V].
- About $5M a month from the app (E, Adapty).
- Company ARR guesses run $150–250M (E, low).

**AI:** "AI Playground" with 90+ models, launched March 2026 (C).

**Complaints (last 500, Oct 20–Nov 15, 2026):**
- **Average 3.88★, only 25% negative.** This is the best-liked big editor in the set.
- The main gripe is the paywall (29). Face-change complaints: 0.

**Lesson for Digi:** Picsart keeps reviews healthy by staying a **tool**, with a free core and AI as an add-on. That fits Digi: free camera first, AI looks second.

### 4.9 YouCam (Perfect Corp)

**Prices for YouCam Makeup [V]:**
- Premium $5.99 / $8.99 / $9.99 a month, $31.99 / $32.99 / $39.99 a year.
- Pro $19.99 a month, $79.99 a year.

**Company (C, high, public filing):**
- FY2025 revenue $69.2M (+14.9%).
- AI/AR cloud and subscription revenue $61.1M. Growth came partly from "virtual points" users bought for AI features.
- 908K active subscribers, down 4.0% in Q4 2025. Guidance for 2026 is about +10%.

**Trend use:** Perfect Corp writes SEO blog posts on every viral trend: "Gemini AI polaroid trend", "Nano Banana trends", "G7X filter" (Jul 2026) (C). This is **trend-jacking with content**, not with product.

**Complaints (last 500, May 2025–Nov 2026):**
- Average 2.60★, 58% negative. **Billing: 165**, the highest count in the set.
- Hair try-on: "allows AI to alter your face and body shape… Even my eyebrows were changed."

**Lesson for Digi:**
- (a) A public company shows that points on top of subscriptions do grow revenue.
- (b) Subscribers can shrink even while revenue grows.
- (c) A blog post per trend is a cheap SEO move Digi can copy on digi.pink.

### 4.10 FaceApp

**Prices [V]:** FaceApp PRO $10.00, $20.00, $60.00 or $100.00 (monthly and yearly SKUs).

**Size:**
- 1.79M US ratings, the most in this set.
- #8 grossing in the US and #6 in GB [V].
- ~$10M a month (E, low-med, Adapty).

**Spikes:** the 2017 launch and the 2019 "old age" filter, when new users went from 65K to 1.8M a day (C, BusinessOfApps). Revenue kept rising after each spike (prior research).

**Complaints (last 500, Jun–Nov 2026):**
- Average 3.11★.
- **Throttling paying users:** "I purchased the subscription and after using it on five of my photos… 'You've sent to many requests to our servers recently'".
- Group photos: "Sometimes the app recognize only one face instead of five faces… it's not fair to retouch one face and not the others"; "With a large group photo, I should be able to click the face that I want to enhance".

**Lesson for Digi:** FaceApp became huge on **one viral filter, then a sticky subscription base**. Its users ask for exactly what Digi can build: **pick which face**, or treat every face the same.

### 4.11 Facetune (Lightricks)

**Prices [V]:**
- Unlimited access $5.99 / $7.99 / $9.99, Premium $11.99.
- Yearly $35.99 / $77.99.

**Status:** #7 grossing in the US [V], yet its recent reviews are the worst of any big app: **1.92★, 76% negative (Apr 20–Nov 15, 2026)** [V].
- **Billing: 142.** "Unsubscribed within minutes and was charged $1.05 then 7 days later charged $42.05"; "They don't remind you when the free trial ends so you get charged."
- **Paywall: 59.** "This app is worthless unless you pay 80$"; "5 years ago this was free and there was no ai."
- **The AI update changed faces:** "now… it's terrible AI, it's changed my face completely when I apply a filter. Very sad, been paying subscription for 2 years, will be cancelling it."
- **Group photos:** "can no longer switch faces to edit when there are multiple faces in a photo which makes it worthless"; "their AI locks in automatically on a face."

**Lesson for Digi:** even the market leader is bleeding goodwill over **AI that changes faces** and **trial charges**. Digi can win the loyal "I just want to fix the lighting" user by promising the opposite, on the screen.

### 4.12 Retake AI

**Prices [V]:** Retake Pro 1 Week $4.99, $6.99, $7.99, $9.99, $11.99 or $14.99 (A/B-tested), and 1 Year $59.99.

**Size:** 53,456 ratings, #17 grossing in the US [V]. ~$800K a month (E, Adapty).

**What it does:** the app trains a personal model from a set of selfies. Its pitch: "transforms any snap, be it from three years ago or from your upcoming birthday bash… REALISTIC AI RETAKES THAT NO ONE CAN TELL."

**Reviews (last 500, Apr–Nov 2026):** average 3.39★. This is the best praise for group use in the set:
- "a great group photo of my friends and I on a trip. One of my friends was smiling with her eyes closed… I was able to… edit her eyes so that her eyes were open."
- "especially for group shots when not everyone is looking their best. First time I used it it switched my face with my nephews… I know now to choose which face to adjust."
- Complaints: billing (79), e.g. "It was supposed to be a free seven day trial, then $14.99 after that. They immediately charged me $20.99." Privacy: "Now I can't delete my photos from the APP."

**Lesson for Digi:** **fixing one face in a group photo is a feature people praise and pay for.** The risk is clear: the model can swap faces between people who look alike. A "tap the face" picker plus a before/after check solves that.

### 4.13 Photoroom

**Prices [V]:**
- PRO $5.99/week, $9.99/month, $89.99/year.
- Max $15.99 / $34.99 / $249.99.
- Basic plan $12.99–14.99 (experiments).

**Size:**
- ~$3M a month from the app (E, Adapty). Company ARR ~$94M at end-2024 (E, Sacra). $500M valuation at its Series B (C).
- Sensor Tower: downloads +238% and revenue +124% in 2023. US weekly revenue was $308K→$319K in Q3 2025 (C).

**Complaints (last 500, Feb–Nov 2026):**
- Average 2.52★. Billing: 112.
- **Faces:** "Faces on photos used to not be edited. Now no matter what I do, the faces get edited/altered and completely unusable."
- Cap complaints from sellers paying for Pro: "they are hard limiting me now on how many photos I can white the backgrounds out on."

**Lesson for Digi:** Photoroom's onboarding ("use a sample image", instant result, then the paywall) is still the model to copy (prior research). Even a utility app now gets face complaints once it adds generative AI.

### 4.14 Other AI apps that matter (2025–2026 launches and adjacent)

| App | Launched | US ratings | Money model [V] | Hook | Recent reviews [V] |
|---|---|---|---|---|---|
| **Shots** (Deepix, TR) | 2025-06-04 | 18,674 | Weekly $6.99–12.99 · coin packs $9.99 / $14.99 / $24.99 / $34.99 | AI photo/video templates, "Polaroid & Y2K filters", AI dance | 2.09★. Credits: 111 complaints. "Imagine paying to create a video, only to find out someone else is in it instead of you!" |
| **ReelMe** (SG) | 2025-05-21 | 8,652 | Weekly $7.99–14.99 · yearly $39.99 / $59.99 · coins $6.99–24.99 | Trending AI videos ("hotel lobby") | **1.55★**. Billing: 131. "3 times the video came back exactly the same as the advertisement with the actors in it, they didn't even use my pics!!!" |
| **AI Maker** (Hungrybird, TR) | 2025-11-16 | 23,749 | Basic $9.99–17.95, Gold $19.99, VIP $69.99 | Photo and video templates, figurine, anime | not pulled |
| **Dance AI** (Deepix) | 2026-02-02 | 17,572 | Weekly $9.99–14.99 · yearly $39.99 / $79.99 · coins | AI dance videos | not pulled |
| **GIO** (Prequel) | 2023-08 | 36,130 | Weekly $5.99–11.99 · yearly $29.99 / $39.99 · **30 Photos $5.99** · coins | AI photoshoots, outfits | 1.68★. Billing: 236 |
| **AI Mirror** (Polyverse) | 2022-12 | 50,369 | Weekly $4.99–9.99 · yearly $29.99 / $39.99 · AI Video $1.99–5.99 | Anime and AI video | 2.03★. "It actually costs all 5 credits just to make ONE video." Terms grant "a worldwide… sublicensable license" to your photos |
| **Visify** (GM UniverseApps) | 2024-01 | 39,230 | Premium $5.99–11.99 · Unlimited $49.99 | AI photo generator, yearbook. **"Enhance (1 photo/day) for free"** | **4.34★** (13% negative). A clear free daily allowance |
| **ReShoot** (HUBX, TR) | 2025-09-03 | 17,809 | Weekly $7.99–13.99 · 420 coins $2.99 · 1,300 coins $4.99 | Retake-style edits | 4.14★, but "completely altered everyone's faces"; "refer 3 people for unlimited… you don't [get it]" |
| **Halo AI** | 2025-10 | 2,119 | Weekly $5.99–8.99 · 300 credits $9.99 · 2,000 credits $49.99 | "Want couple photos without the couple?" | 1.66★ |
| **CelebGen** | 2025-11-26 | 192 | Weekly $9.99–14.99 · **3 credits $2.99 … 50 credits $17.99** | Selfies with celebrities | 2.0★ (n=24) |
| **Polaridol** | 2025-09-23 | 0 | none | "Generate a polaroid with any celebrity", built on rork.com | Dead on arrival |
| **TogetherLens** | 2025-09-13 | 3 | Weekly $1.99 · yearly $89.99 · 20 tokens $19.99 · 100 tokens $79.99 | "Create the group photo you needed but never got" (merge separate portraits) | n=3 |
| **Sparkle** (Jaxus Labs) | 2026-11-10 | 11 | Premium $7.99 · yearly $59.99 · 25 More Photos $4.99 | G7X flash, disposable, plus **"Group pic? Tap the face you want to fix and everyone else stays exactly as they are."** | Launch week |
| **Airbrush** (Pixocial) | 2015 | 204,345 | Weekly $7.99 · monthly $6.99–10.99 · yearly $28.99–54.99 | Retouch, "Relight" (G7X flash preset per prior research) | **4.41★.** "only quick easy app with lighting fix that doesn't completely change your face!"; "when one person in the group is not smiling you can actually… change they're expression to a smile" |

**The pattern (E, med):**
- The new trend generators (Shots, ReelMe, AI Mirror, GIO, Halo) share one recipe: weekly subscriptions, plus coins on top, plus ads in Meta/TikTok feeds that show a result the app can't match.
- They chart in grossing because they buy users. Their written reviews are about 1.5–2★.
- **Visify and Airbrush prove the other road.** A small, clear free allowance and a "natural" promise keep recent reviews above 4.3★.

---

## 5. The trend timeline, 2022–2026: what spiked, how much, how long

| Trend | Start → peak | How long at peak | Who won | Numbers | Who lost or what failed |
|---|---|---|---|---|---|
| **Lensa Magic Avatars** | ~Nov 20, 2022 → mid-Dec 2022 | ~3–4 weeks | Lensa, then 8 AI art apps in the top 100 | Group of apps: 4.3M downloads and $1.8M spending a day at the peak; −78% / −72% by Feb 12, 2023 (C, Apptopia). Lensa: 12.6M downloads Dec 1–11 (C, Sensor Tower) | Lensa fell from peak to ~$0.5M a month (E) |
| **Remini AI headshots** | Early Jul 2023 | ~1 month for downloads; revenue held | Remini | $90K → $567K daily net; $2.3M net in one week; ~23M July downloads (E, Appfigures) | Body edits were criticised ("go too far", TechCrunch) |
| **Snow AI Profile** | 2023 | Most of the year in Asia | SNOW | Revenue +1,400% YoY in 2023 (C, Sensor Tower) | 2023 was ~90% of Snow's lifetime revenue (prior research, C) |
| **AI Yearbook** | Sep 18 → Oct 4, 2023 | ~2–3 weeks | EPIK, Photo Lab | EPIK $15K → $340K daily net; 2.8M downloads and $1.7M net in 2 weeks (E, Appfigures). **Photo Lab kept 40% one-month retention by adding themes** (C, Sensor Tower) | Reviews: "AI makes a homogeneous face"; complaints about racial features being washed out |
| **Ghibli (GPT-4o images)** | Mar 26, 2025 → early May 2025 | ~5–6 weeks | ChatGPT (46M downloads in March, #1 worldwide); **ToonMe** (<15K → ~600K a day, 40×, still >400K in late April) (C, Appfigures / Insightrackr) | Sensor Tower: ChatGPT downloads, WAU and IAP all at highs the week of Mar 24, 2025 (C) | Remini bought "ghibli" Apple Search Ads: downloads 2×, **revenue +<1%** (E, Appfigures) |
| **Action figure / figurine** | Apr 2025 (ToonMe ads), then **Nano Banana figurine**, Aug–Sep 2025 | Weeks | Gemini (#1 US iOS from Sep 10, 2025; India peaked at 414K a day on Sep 13, +667%) (C, Appfigures via TechCrunch) | 23M new Gemini users by Sep 9 (C); 500M+ Nano Banana images (C, Google) | **Gemini earned only ~$1.7M net in Oct 2025** on the App Store (E, Appfigures). Hype ≠ revenue for a free tool |
| **AI polaroid with a celebrity / "hug my younger self"** | Sep 2025 (started with an Instagram selfie with Shah Rukh Khan in London) | Weeks | Gemini and ChatGPT (prompt-driven) | No app-level numbers found | Polaridol (0 ratings); CelebGen (192 ratings). Likeness rights risk |
| **AI 1980s portrait** | Early Sep 2026 | Weeks | Unknown | TrendLife tested 20 apps: **8 high-risk** (misleading "7 day free trial", charge "non-refundable"), 5 medium, 3 low, 4 unscored. High-risk apps still showed 4.0–4.6★ (C, TrendLife, Sep 17, 2026) | Scam clones under several names from one developer |
| **AI Flash / G7X / digicam look** | 2025 → now | Ongoing (months) | Meitu ("AI Flash Effect" is first in its feature list), Airbrush "Relight", Hypic "AI Flash", WayShot, Sparkle; EPIK buys TikTok ads on "g7x filter" | Meitu: #28 US, #7 JP, #3 KR grossing [V]. No trend-level revenue number found | **Face drift complaints:** Meitu users say the new AI G7X "completely changed the filters and made it AI looking and fake… before it didn't change my face" [V, Aug 2026 review] |
| **AI photobooth / photo strip** | 2025–2026 | Ongoing | Boothie (TR, $54K MRR per prior research), BeautyPlus "photobooth styles", Esti "AI photo booth" | ~13 strip apps in 2026 with 0–35 ratings each (prior research) | No breakout in the US |

**Rules that come out of this table (E, med-high)**
1. **Peak length is 2–6 weeks.** The Christmas and NYE window (Dec 1–Jan 2) is one peak. It is not a business.
2. **The free general AI tool captures most of the hype.** Across Ghibli, figurine and polaroid, ChatGPT and Gemini got the installs.
   - Specialist apps won only where the look was **one tap and better than a prompt** (ToonMe, EPIK).
3. **Apps that ship a new theme every week keep their users.** Photo Lab held 40% one-month retention; Lensa and EPIK did not hold theirs.
4. **Paid downloads on a trend keyword don't pay back** unless the first screen delivers that exact look (Remini, Ghibli).
5. **Every trend brings scam clones** (1980s trend), and they poison trust in the whole category. Honesty is a feature you can see.

---

## 6. How credits and subscriptions work in this category

### 6a. The five money models (today's US IAP lists [V])

| Model | Who | How it works | What users say |
|---|---|---|---|
| **Pure weekly / yearly sub** | Remini, Retake, Facetune, Picsart, Prequel | $4.99–14.99 a week or $35–90 a year. "Unlimited", with caps hidden in the terms | Fine when the job lasts. Anger when caps or trials bite |
| **Sub + monthly usage cap** | EPIK, FaceApp, Photoroom, Lensa | Pro includes AI, but with a monthly or daily limit | **The most hated pattern**: "Pro but limited" (EPIK: 16 credits/limits complaints; Lensa: 30; FaceApp: "Too many requests") |
| **Sub + coins / credits** | Shots, ReelMe, GIO, AI Mirror, Halo, SNOW, B612, Lensa tokens | A weekly sub unlocks the app; each AI generation costs coins; coin packs are $1.49–49.99 | "Not only do they want a weekly sub but you then have to buy coins" (MePic); "you lose all your points" when the result is wrong (Shots) |
| **Packs only (one-off)** | Lensa Magic Avatars ($3.99–11.99), EPIK Yearbook/Christmas ($0.99–9.99), Sparkle 25 photos ($4.99), GIO 30 photos ($5.99), CelebGen ($2.99–17.99) | Pay once for N images or one themed set | Fewer billing complaints. Face-change complaints land on the pack ("Waste of $3.99") |
| **Free tier + small allowance** | Visify (1 enhance a day free), Remini (ad-gated), Picsart (free core) | Free use every day, pay for more | Best recent reviews when there are **no ads** (Visify 4.34★); worst when ad-gated (Remini: 73 ad complaints) |

### 6b. Price per AI image (US, today's IAP prices [V]; per-image maths is mine)

| Offer | Price | Images | Price per image |
|---|---|---|---|
| Sparkle "25 More Photos" | $4.99 | 25 | **$0.20** |
| GIO "30 Photos" | $5.99 | 30 | $0.20 |
| Boothie 25 credits (prior research) | $5.99 | 25 | $0.24 |
| **Digi Party Pack (planned)** | **$5.99** | **25 digis** | **$0.24** |
| CelebGen 50 / 25 / 10 / 3 credits | $17.99 / $9.99 / $4.99 / $2.99 | 50 / 25 / 10 / 3 | $0.36 / $0.40 / $0.50 / $1.00 |
| TogetherLens 100 / 20 tokens | $79.99 / $19.99 | 100 / 20 | $0.80 / $1.00 |
| EPIK AI Christmas Limited Edition | $0.99 | one themed set (count not shown on the listing) | n/a |
| Lensa Magic Avatars Pack 1 → 11 | $3.99 → $11.99 | a set of avatars (count not shown on today's listing) | n/a |

**Margin check for Digi (E, high):**
- A $5.99 pack nets about $5.09 after Apple's 15% Small Business rate.
- If all 25 digis are used, they cost $0.50–0.75 at $0.02–0.03 each.
- That leaves **about 85–90% gross margin**.
- Even with 2 failed retries per digi, cost stays under $2.25, which keeps the price well above cost (the contest's no-selling-below-cost rule).

### 6c. Weekly and yearly price anchors in AI photo apps [V]

- **Weekly:** $2.99 (Lensa) · $3.49 (EPIK) · $4.99 (Picsart Gold, Retake low arm, AI Mirror) · $5.99 (Prequel, GIO low) · $6.99 (Shots basic) · $7.99 (Remini Lite high, Airbrush, ReelMe low) · **$9.99 (Remini Pro, Retake, Shots Pro, Visify)** · $11.99 (Picsart Pro) · $12.99–14.99 (ReelMe, ReShoot, Retake top arm).
- **Yearly:** $29.99 (Lensa, AI Mirror, GIO) · $35.99 (Facetune low) · **$39.99 (Lensa, ReelMe, YouCam, GIO, Dance AI; Shots per Adapty)** · $51.99 (EPIK) · $57 (Picsart Gold) · $59.99 (Retake, Meitu, Voilà) · $77.99 (Facetune) · $83.99 (Picsart Pro) · $89.99 (Photoroom).

**Reading (E, med):**
- Digi's **$6.99 a week** is middle of the pack.
- **$39.99 a year** is the most common yearly price among the AI generator apps. It's fine for launch.
- The big face apps charge $60–90 a year, but they sell a lasting job. Digi does not yet.

---

## 7. What 11,541 recent US reviews say (26 apps)

Each app's 500 most recent US reviews (fewer if the feed had fewer), counted by keyword on title plus body. Counts show all mentions, with 1–2★ mentions in brackets. One review can hit several themes. Date ranges vary by app (Picsart covers 4 weeks; SNOW covers 5 years).

| App | n | Avg | 1–2★ | Face not mine | AI artefacts | Group | Billing / trial | Price | Paywall | Credits / limits | Slow / fail | Ads | Praise |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| ReelMe | 328 | 1.55 | 85% | 14 (14) | 0 | 2 | **131 (129)** | 79 | 29 | 51 | 14 | 24 | 14 |
| Hypic | 500 | 1.64 | 84% | 1 | 0 | 6 | 44 | 26 | **118 (108)** | 12 | 32 | 6 | 91 |
| Halo AI | 154 | 1.66 | 82% | 1 | 1 | 9 | 51 | 13 | 24 | 18 | 20 | 6 | 8 |
| GIO | 500 | 1.68 | 83% | 14 (12) | 4 | 3 | **236 (222)** | 131 | 38 | 80 | 27 | 41 | 26 |
| Facetune | 500 | 1.92 | 76% | 4 | 7 | 8 | **142 (135)** | 108 | 59 | 12 | 21 | 16 | 84 |
| AI Mirror | 500 | 2.03 | 72% | 13 (13) | 7 | 9 | 136 | 81 | 42 | 64 | 31 | 33 | 52 |
| Shots | 500 | 2.09 | 72% | **21 (21)** | 6 | 7 | 141 | 83 | 34 | **111 (106)** | 46 | 35 | 44 |
| Meitu | 500 | 2.32 | 63% | 3 | 2 | 9 | 49 | 24 | 35 | 18 | 39 | **92 (79)** | 84 |
| EPIK | 500 | 2.35 | 64% | 9 (9) | 2 | 10 | 91 | 51 | 77 | 16 | 38 | 28 | 91 |
| Glam Up | 467 | 2.39 | 64% | 9 (9) | 5 | **41 (30)** (invite-3 gate) | 62 | 48 | **121 (113)** | 1 | 18 | 14 | 86 |
| ARTA | 500 | 2.41 | 62% | 8 | 3 | 4 | 99 | 48 | 30 | 44 | 28 | 28 | 73 |
| Prequel | 500 | 2.42 | 63% | 6 (6) | 8 | 1 | 84 | 62 | 74 | **115 (93)** | 28 | 19 | 114 |
| Photoroom | 500 | 2.52 | 59% | 0 | 2 | 5 | 112 | 71 | 15 | 38 | 49 | 15 | 100 |
| Photoleap | 500 | 2.55 | 59% | 5 (5) | 3 | 4 | 81 | 51 | 61 | 36 | 42 | 9 | 125 |
| YouCam Makeup | 500 | 2.60 | 58% | 5 | 2 | 7 | **165 (159)** | 91 | 23 | 22 | 28 | 17 | 96 |
| Lensa | 500 | 2.67 | 55% | 3 | 5 | 12 | 66 | 27 | 9 | 30 | 69 | 9 | 125 |
| SNOW | 500 | 3.01 | 42% | 3 | 5 | 24 | 19 | 11 | 19 | 4 | 46 | 19 | 189 |
| FaceApp | 500 | 3.11 | 45% | 5 | 1 | 5 | 29 | 24 | 19 | 12 | 15 | 4 | 115 |
| Retake | 500 | 3.39 | 39% | 7 | 5 | 5 | 79 | 56 | 9 | 12 | 17 | 11 | 132 |
| Remini | 500 | 3.52 | 36% | 3 | 7 | 4 | 16 | 16 | 12 | 10 | 16 | **73 (61)** | 104 |
| Picsart | 500 | 3.88 | 25% | 0 | 0 | 2 | 22 | 22 | 29 | 20 | 15 | 15 | 214 |
| ReShoot | 500 | 4.14 | 19% | 6 | 7 | 11 | 34 | 23 | 10 | 20 | 9 | 3 | 168 |
| Visify | 500 | 4.34 | 13% | 5 (5) | 2 | 2 | 36 | 12 | 5 | 10 | 12 | 10 | 234 |
| Airbrush | 500 | 4.41 | 13% | 3 (0) | 2 | 6 | 17 | 15 | 8 | 10 | 7 | 7 | 244 |

*Smaller samples (MePic 68, CelebGen 24) were left out of the table. Keyword matching undercounts face complaints, because many people describe them in other words ("cartoonish", "someone else's body"). Treat face counts as a floor.*

### Five lessons, with real quotes [V]

**1. People hate face drift in photo-real edits. In cartoon styles it's much less of an issue.**
- Lighting and filters: "all these filters do is change my face to idk who while editing, even if it's just to add light to the photo" (Prequel, Sep 2026).
- Digicam looks: "When I use the glowing tan or g7x filter before it didn't change my face… with the new update… made it AI looking and fake" (Meitu, Aug 2026).
- Headshots: "It takes your face only and puts it on someone else's head and body and hair" (Photoleap); "a cut out version of your face and placed over someone else" (Photoleap).
- Praise when faces are kept: "only quick easy app with lighting fix that doesn't completely change your face!" (Airbrush); "It simply accentuates my best features" (Retake).
- Identity bias: "it even changes ethnicity… changes your face, gender, skin color, everything" (MePic); "My hair, nose and complexion were washed away" (EPIK yearbook).

**2. Paying and then hitting a limit is the most predictable 1★ review.**
- "Why the hell did I pay $9.99 for a MONTH of pro… then the pro features reached their 'usage limit' on the first day" (EPIK, Jul 2026).
- "When you pay for a subscription, there should be no use of points!" (Lensa, Oct 2026).
- "they are hard limiting me now on how many photos I can white the backgrounds out on" (Photoroom, Aug 2026).

**3. Trial charges cause the most reviews in raw numbers.**
- "They don't remind you when the free trial ends so you get charged" (Facetune).
- "It was supposed to be a free seven day trial, then $14.99 after that. They immediately charged me $20.99" (Retake, Nov 2026).
- "nearly $300 was still taken out of my account" (Photoroom, Nov 2026).
- **Note:** the size of Photoroom's and Retake's charges is a *pricing* choice. Some of those reviews are also people who didn't know the trial renews. Clear screens prevent both.

**4. Ad-gated "free" use feels like a punishment.** "Every where you click you must watch an ad to continue. You have to watch 4-5 ads to edit a single photo" (Remini, Nov 2026).

**5. Ads that show a result the app can't make backfire.**
- "Saw the app on FB showing the Tesla stunt… it made my car… become a pickup truck" (Shots).
- "the video came back exactly the same as the advertisement with the actors in it" (ReelMe).
- "This is nothing like the ad" (FaceApp).

---

## 8. Group party photos: which AI features actually work

This is the question that matters most for Digi. The table scores each group feature on evidence of demand, whether faces survive, and the risk.

| Feature | Who does it | Evidence of demand | Faces survive? | Risk | **Digi verdict** |
|---|---|---|---|---|---|
| **A. Whole-photo relight / flash / film grade, with faces locked** | Airbrush Relight, Meitu AI Flash, Hypic, WayShot, Sparkle | The G7X/flash look is everywhere. EPIK buys TikTok ads on it [V] | Only if the edit is global. Users quit when the AI "re-draws" faces (Meitu, Prequel quotes) | Medium. Seedream may re-render faces; it needs a face-paste-back step | **Ship in v1.** It is Digi's core AI look. Add an on-screen **"faces kept"** before/after slider |
| **B. Fix one face (open eyes, smile) and leave everyone else exactly as they are** | Retake, Airbrush, Sparkle ("Tap the face you want to fix"), Pixel Best Take (Pixel 8, 2023), Samsung Best Face (Galaxy S25, 2025) | **The strongest group praise in the reviews** (Retake trip photo, Airbrush smile fix). FaceApp and SNOW users ask for "select face" | Yes for untouched people. The edited face can drift, and Retake swapped similar-looking faces | Medium. Needs a face picker and the other faces masked | **v1.1 (Nov 25–28).** "Tap a face → Fix eyes / Fix smile", one digi each |
| **C. Stylised group look** (claymation, anime, storybook, figurine, "holiday card painting") | ToonMe, Toonapp, Voilà, ChatGPT/Gemini prompts | Ghibli made ToonMe 40×. Figurine made Gemini #1 | Identity drift is **accepted** in stylised looks | Low face risk. **IP risk** if you name a studio (no "Ghibli") | **Ship 1–2 in v1** as a safe fallback for 5–8 people, where photo-real fails |
| **D. 4-pose photobooth strip from one group photo** | Boothie (single), Esti "AI photo booth"; no big app does it for groups (prior research) | Strips are trending; long-distance strip searches exist (prior research) | Hard: new expressions for 4 people × 4 frames = 16 faces to keep | High. Each extra face multiplies drift | **Ship only for 1–4 people**, and only after the 20-photo face test passes. Otherwise make a strip of 4 *different looks* of the same photo (no new faces) |
| **E. Merge separate selfies into one group photo** ("add the friend who wasn't there") | Pixel Add Me (Pixel 9, Aug 2024; bigger groups on Pixel 10), TogetherLens, Nano Banana Pro (up to 5 people, C) | Real need ("Families living in different cities… Friends who missed the group shot"), but TogetherLens has 3 ratings | Hardest case: every person comes from a different source photo | High. Consent: each person must agree | **v2.** Pair it with Digi Party, where each friend uploads their own selfie from the web page and consents themselves |
| **F. Background / scene swap** (NYE skyline, Christmas living room) | Shots, Halo, GIO, ReelMe | Big ad volume, terrible reviews | Faces often replaced ("someone else is in it instead of you") | High, plus refund risk | **Avoid** for groups at launch. At most, add props or decor around people, and test it first |
| **G. Enhance / upscale a blurry group photo** | Remini, PhotoApp ("sharpen… group photos") | Steady demand (Remini's lasting job) | Remini users: "kept changing group photo completely" | Medium | **Not core.** Maybe a "fix blur" helper later |
| **H. Photo with a celebrity / AI polaroid with an idol** | Gemini prompts, CelebGen, Polaridol | Viral as a prompt in Sep 2025 | n/a | **Likeness and right-of-publicity risk**; fake-photo risk | **Never.** Use "Polaroid with your friends", not with stars |

### What to test before launch (concrete, E)

1. **The 20-photo group test** (extends the prior plan in 04):
   - Make 20 real party photos: 4 each with 1, 2, 3, 4 and 5–6 people, mixed skin tones, mixed lighting, some with faces partly turned.
   - Run each AI look 3 times on Seedream.
   - **Pass rule:** in at least 54 of 60 runs per group size, the owner (and ideally a second person) says "everyone still looks like themselves".
   - Set the people limit for each look from where it starts to fail.
2. **Face paste-back test** for Feature A:
   - Run the relight, detect faces on the original photo, and blend the original faces back in.
   - Match their colour to the new lighting with a soft-edged mask.
   - Compare the "faces kept" scores with and without paste-back.
   - Expected (E, med): paste-back keeps identity in nearly every run, at the cost of slightly flatter lighting on faces.
3. **Stylised fallback test:** run the claymation or storybook look on the 5–6 person photos. Drift is acceptable there, but count missing or merged people.

---

## 9. The free-AI rival in numbers

| Free tool | Free image allowance (2026) | What it's good at | Where Digi beats it |
|---|---|---|---|
| Gemini (Nano Banana 2) | ~20 images a day on the free Basic plan; Nano Banana Pro cut to ~2 a day (C, Analytics Insight / Engadget / TechRadar) | Any prompt. Up to 5 people kept consistent on Pro (C, Google) | One tap, no prompt; the orange date stamp drawn on the phone; a consistent look across a whole roll; strips; shared group rolls; saves straight to IG Story |
| ChatGPT (GPT-Image) | ~2–3 images per rolling 24 h on free (C, third-party, Apr 2026) | Ghibli-style art, text in images | Speed, the camera itself, no prompt, a group roll |
| Google Photos / Pixel | Free on Pixel phones (Best Take, Add Me) | Group fixes, **Android only** | Digi is iOS-first, where Apple has no equivalent of Add Me or Best Take (none found) |

**Money reality (E, med):**
- Even the biggest free AI image moment barely changed revenue for the free tool itself.
- Gemini made about $1.7M net from the App Store in Oct 2025, after the Nano Banana boom (E, Appfigures).
- Meanwhile Remini, Facetune and FaceApp each make $5–10M a month selling **one job with no prompt**.
- People pay for convenience and results they can trust, not for model access.

---

## What this means for Digi

1. **Make "your real faces" the brand promise and prove it on every result.**
   - Add a before/after slider labelled **"Faces kept"** on the result screen.
   - Add a one-tap **"Doesn't look like us? Free redo"** button. It refunds the digi automatically, up to 2 redos per photo.
   - This answers the #1 quality complaint, which shows up in 23 of 26 competitor apps.
2. **Build the relight look with face paste-back, and test it before launch.**
   - Global edit on Seedream, then blend the original faces back in with colour matching.
   - Run the 20-photo × 3-run group test (section 8). Set the people limit **per look** from the results, not from Google's docs: Google models are blocked on Digi's key, and Seedream publishes no face limit.
3. **Launch group features in this order:**
   - (a) Whole-photo flash/digicam relight with faces locked: **v1**.
   - (b) One stylised look (claymation or "holiday card painting") as the fallback for 5–8 people: **v1**.
   - (c) "Tap a face → fix eyes / fix smile": **v1.1, by Nov 28**.
   - (d) A 4-pose strip only for 1–4 people, otherwise a strip of 4 looks.
   - (e) Merging separate selfies: **v2, with each friend's own consent** through Digi Party.
   - **Never:** celebrity polaroids, background swaps that replace people, or naming a studio ("Ghibli").
4. **Free on-device looks: free forever, no ads, written on the paywall.** Show the line "The camera and all film looks are free forever. AI looks use digis." This answers Hypic's 118 paywall complaints and Remini's 73 ad complaints.
5. **No "Pro but limited" surprises.**
   - Subscriptions state a number: e.g. "Digi Plus: 40 digis every week, refills Monday."
   - Show the balance on the camera screen and the paywall.
   - Never use the word "unlimited".
   - Keep Party Pack digis valid for 12 months and use them only after the weekly allowance runs out (the "Ahead" pattern on Mobbin: included usage first, then credits).
6. **Trials that can't surprise anyone.**
   - Keep the 3-day trial on yearly, with the exact charge date on the paywall ("Free until Thu, Dec 4. Then $39.99/year.").
   - Send a **local reminder notification 24 hours before the trial ends**. Facetune's top complaint is "they don't remind you".
   - This cuts refunds, and refunds count against contest profit until winners are confirmed.
7. **Keep the Party Pack at $5.99 for 25 ($0.24 a digi).**
   - It sits in the middle of the market ($0.20 Sparkle/GIO, $0.36–0.50 CelebGen) and keeps ~85–90% margin.
   - Add an EPIK-style seasonal SKU on Dec 8–10: **"Christmas Party Pack, 15 digis + 3 holiday looks, $3.99"**, live until Dec 26. That price matches EPIK's "AI Christmas Early Bird" at $3.99.
8. **Use a trend calendar with a 72-hour shipping rule.** Trends peak for 2–6 weeks, and the apps that kept users (Photo Lab, 40% one-month retention) added themes every week.
   - Keep looks as **remote presets** so a new look ships the same week a trend starts.
   - Planned slots: Friendsgiving (Nov 26), office party / ugly sweater (Dec 5–20), NYE glitter (Dec 26–Jan 1).
9. **Only buy trend traffic when the first screen delivers that exact look.**
   - Remini's "ghibli" Apple Search Ads doubled downloads with less than 1% more revenue.
   - In the contest every ad dollar counts against profit. Bid only on intent words (digicam filter, flash photo app, photo booth app, party camera), and send each to a Custom Product Page whose screenshots show that look.
10. **Copy Perfect Corp's cheap trick: one SEO page per trend on digi.pink.** Examples: "AI digicam filter", "G7X flash look on iPhone", "Christmas party photo booth", "NYE photo strip".
    - Each page shows real Digi results and has a "Try this look" button.
    - PhotoAI.com gets about half its traffic from SEO, built over 2 years (C). Start now. It pays after the contest.
11. **Don't gate features behind "invite 3 friends".**
    - Glam Up gets 41 angry reviews about it.
    - Make inviting worth it on its own: a shared roll that "develops" for everyone the next morning.
    - Add an *optional* reward on top: "Invite a friend to your roll, you both get 3 digis."
12. **Ask for ratings only after a good moment.** Show Apple's rating prompt after the second AI result a user **saves or shares**, never after a failed generation or the paywall. Separately, Airbrush and Visify show that a clear free tier plus a "natural" promise keeps even *written* reviews above 4.3★ [V].
13. **Watch these five apps every week** (rating counts and US Photo grossing rank via the Lookup API and RSS):
    - **Sparkle** (same pitch: G7X plus "tap the face");
    - **EPIK** (TikTok ads on G7X);
    - **Meitu** (AI Flash);
    - **Airbrush** (Relight plus group smile fix);
    - **Hypic** (ByteDance, #20 free US).
    If any of them ships a group roll or a group strip, move faster on the social loop. The social loop is what they can't copy quickly.

---

## Method and limits

- **Charts:** Apple RSS top grossing and top free, genre 6008, limit 200, for US, GB, JP and KR, published Nov 16, 2026, 16:05 PT. Pulled by the sibling chapter on Nov 17 and re-read here for these apps.
- **Prices:** the apps.apple.com "In-App Purchases" block for the US store, which shows **only the top 10 SKUs**. Some prices are A/B test arms. A price missing from the list doesn't prove it isn't sold.
- **Reviews:**
  - Apple's customer-review RSS, most recent first, at most 10 pages of 50.
  - Theme counts use keyword regexes. They miss sarcasm and paraphrase, and one review can count in several themes.
  - Written reviews skew negative compared with in-app ratings.
- **Revenue:**
  - All app-level numbers are third-party estimates (Adapty, Appfigures, Sensor Tower, Apptopia, AppGoblin, ScreensDesign). They often disagree 2–10×. I show ranges and grades.
  - Only Perfect Corp publishes company figures (public, marked unaudited).
- **Not done:**
  - No paid tools (Sensor Tower/Appfigures dashboards are paywalled). The AppKittie API was out of credits.
  - No sign-ups or purchases inside competitor apps, so paywall screens come from listings, reviews and Mobbin, not live captures.
  - Glam AI's iOS removal date and reason are unknown.

---

## Sources

**Primary data pulled today (Nov 16–17, 2026) [V]**
- iTunes Lookup API: https://itunes.apple.com/lookup?id=1470373330,1436732536,1577705074,1644042837,587366035,863844475,1180884341,1149994032,6466298983,1455009060&country=us (and the 37 other IDs in `prof/profiles.json`)
- App Store IAP lists: https://apps.apple.com/us/app/id1470373330 (Remini) · id1436732536 (Lensa) · id1577705074 (EPIK) · id1644042837 (Hypic) · id587366035 (Picsart) · id863844475 (YouCam Makeup) · id1180884341 (FaceApp) · id1149994032 (Facetune) · id6466298983 (Retake) · id1455009060 (Photoroom) · id6745820631 (Shots) · id6449296449 (GIO) · id6811675349 (Sparkle) · id6751791480 (TogetherLens) · id6755687816 (CelebGen)
- Glam AI 404 check: https://apps.apple.com/us/app/-/id1545593132 · Pica AI 404 check: https://apps.apple.com/us/app/id6446337794
- Review RSS: https://itunes.apple.com/us/rss/customerreviews/page=1/id=APPID/sortby=mostrecent/json (pages 1–10, 26 apps)
- Charts: https://itunes.apple.com/us/rss/topgrossingapplications/limit=200/genre=6008/json (and topfree; gb, jp, kr)
- iTunes Search API: https://itunes.apple.com/search?term=...&country=us&entity=software&limit=50 (34 terms)

**Estimates and reports**
- Adapty paywall library (captured Nov 7–8, 2026): https://adapty.io/paywall-library/remini/ · /lensa/ · /epik-ai-photo-video-editor/ · /faceapp-perfect-face-editor/ · /picsart-photo-video-editor/ · /meitu/ · /photoroom-ai-photo-editor/ · /airbrush/ · /youcam-makeup/ · /snow-ai-profile/ · /retake-ai-face-photo-editor/ · /prequel/ · /gio/ · /shots/ · /reshoot/ · /photoleap/ · /glam-up/
- Appfigures, Remini Ghibli (Apr 4, 2025): https://appfigures.com/resources/insights/20250404/4-remini-rides-the-ai-cartoon-wave-and-the-downloads-double-but-somethings-missing
- Appfigures, Remini TikTok (Jul 14, 2023): https://appfigures.com/resources/insights/20230714/2-this-latest-tiktok-success-story-grew-revenue-5x-in-a-week
- Appfigures, EPIK yearbook (Oct 6, 2023): https://appfigures.com/resources/insights/20231006/5-viral-features-=-runaway-success-for-epik-photo-editor
- Appfigures, Hypic (Dec 19, 2025): https://appfigures.com/resources/insights/20251219/3-bytedances-hypic-is-coming-for-the-photo-editing-market
- Appfigures, AI apps revenue (Nov 21, 2025): https://appfigures.com/resources/insights/20251121/3-ai-apps-break-revenue-records-(and-its-not-just-chatgpt)
- Appfigures, Lensa (Jan 6, 2023): https://appfigures.com/resources/insights/20230106?f=5
- TechCrunch, AI photo trend fizzled (Feb 13, 2023, Apptopia data): https://techcrunch.com/2023/02/13/the-ai-photo-app-trend-has-already-fizzled-new-data-shows/
- TechCrunch, EPIK #1 (Oct 6, 2023): https://techcrunch.com/2023/10/06/ai-app-epik-hits-no-1-on-the-app-store-for-its-viral-yearbook-photo-feature
- TechCrunch, Nano Banana in India (Sep 17, 2025): https://techcrunch.com/2025/09/17/india-leads-the-way-on-googles-nano-banana-with-a-local-creative-twist
- Mobile Action, EPIK: https://www.mobileaction.co/blog/epik-apps-epic-win-breaking-the-social-media-with-ai-yearbook/
- Sensor Tower, state of AI photo and video apps: https://sensortower.com/blog/rapid-growth-and-competitive-dynamics-the-state-of-ai-photo-and-video-apps
- Sensor Tower, Ghibli effect: https://sensortower.com/blog/mmm-the-ai-ghibli-effect-propels-chatgpt-usage-and-revenue
- Sensor Tower, State of AI Apps 2025: https://sensortower.com/blog/state-of-ai-apps-2025-ai-across-verticals
- Insightrackr, Ghibli-style trend apps: https://blog.insightrackr.com/en/docs/AI-Image-Apps-Drove-Viral-Growth-with-Ghibli-Style-Trends
- BusinessOfApps, Lensa statistics: https://www.businessofapps.com/data/lensa-ai-statistics
- PetaPixel, Lensa December 2022: https://petapixel.com/2022/12/13/ai-photo-editing-apps-now-dominate-the-apple-charts-following-lensa-ais-success
- Perfect Corp FY2025 results (Feb 24, 2026): https://www.businesswire.com/news/home/20260224503932/en/perfect-corp.-reports-unaudited-financial-results-for-the-three-months-and-the-full-year-ended-december-31-2025
- Lightricks (ARR, paying users): https://en.wikipedia.org/wiki/Lightricks
- Sacra, Photoroom: https://sacra.com/c/photoroom · Sifted, Photoroom Series B: https://sifted.eu/articles/photoroom-43m-series-b
- AppGoblin, Glam AI Android: https://appgoblin.info/apps/app.getglam · ScreensDesign, Glam AI: https://screensdesign.com/apps/glam-ai-video-photo-editor/
- Pica AI traffic: https://cw.semrush.com/website/pica-ai.com/overview · https://moge.ai/product/pica-ai
- PhotoAI (founder-reported, via profile): https://www.indiehackers.com/post/photo-ai-by-pieter-levels-complete-deep-dive-case-study-0-to-132k-mrr-in-18-months-3a9a2b1579 · https://ppc.land/how-one-photo-ai-app-generates-132k-monthly-after-70-failed-startups/
- Retake revenue claims: https://adapty.io/paywall-library/retake-ai-face-photo-editor/ · https://aiidelist.com/blog/retake-ai-review-40m-arr (C, low)
- TrendLife, 1980s AI photo trend (Sep 17, 2026): https://trendlife.com/en-us/blog/2026/09/17/1980s-ai-photo-trend-security
- Google, Nano Banana Pro (up to 5 people, 14 images): https://blog.google/technology/ai/nano-banana-pro/ · https://blog.google/intl/en-mena/product-updates/explore-get-answers/nano-banana-pro-available-globally/
- Seedream group-face notes (third-party, C, low): https://genape.ai/tutorial-article/genape-teaching/Seedream-4.5 · https://dreamina.capcut.com/resource/seedream-4-5
- Free AI limits: https://www.techradar.com/ai-platforms-assistants/gemini/openai-and-google-quietly-limit-free-sora-nano-banana-pro-and-gemini-3-pro-use-heres-what-it-means-for-you · https://www.engadget.com/ai/google-limits-free-nano-banana-pro-image-generation-usage-due-to-high-demand-223442929.html · https://www.analyticsinsight.net/artificial-intelligence/nano-banana-ai-daily-image-generation-limits-for-free-pro-and-ultra-plans-with-google-gemini · https://www.cometapi.com/how-many-images-can-you-create-with-chatgpt-free-in-2026/
- Gemini polaroid / celebrity trend: https://www.storyboard18.com/digital/google-gemini-nano-banana-trend-ai-powered-selfies-with-shah-rukh-khan-spark-frenzy-81018.htm · https://www.gamerevolution.com/news/981707-gemini-ai-polariod-prompt-goes-viral
- AI Flash / G7X look: https://picsart.com/blog/ai-flash-filter-trend/ · https://www.perfectcorp.com/de/consumer/blog/selfie-editing/g7x-filter-so-funktioniert-der-effekt
- Pixel Best Take / Add Me, Samsung Best Face: https://blog.google/products-and-platforms/devices/pixel/pixel-group-photo-features-ai/ · https://petapixel.com/2024/08/15/google-pixel-9s-add-me-tool-lets-the-photographer-be-in-the-group-photo · https://www.tomsguide.com/phones/samsung-phones/how-to-use-best-face-photo-editing-feature-on-galaxy-s25
- Mobbin screens (credit balance patterns): Ahead "Daily included usage + credits" https://mobbin.com/screens/dbee17fb-d099-432f-b798-8b920cc8a92c · Riveo "AI Coins" https://mobbin.com/screens/cb027d86-017a-4aec-9edd-786396673bc0 · Picsart Gold paywall https://mobbin.com/screens/e92b6848-07b8-49a0-9d51-5987d2275d25

---

## Fact-check (2026-11-16)

*Independent re-check of the 10 numbers in this chapter that matter most for decisions, Nov 16–17, 2026. Charts re-pulled from Apple's RSS feed, ratings and dates from the iTunes Lookup API, prices from apps.apple.com IAP lists, model prices from OpenRouter's public API, and trend numbers from the original analytics posts.*

| # | Claim | Re-check result | Status |
|---|---|---|---|
| 1 | US Photo & Video grossing: Facetune #7, FaceApp #8, Picsart #11, Airbrush #15, Retake #17, Remini #21, Photoroom #22; Lensa #83, SNOW #96, EPIK outside | Re-pull later on Nov 17: Facetune #7, FaceApp #9, Picsart #10, Airbrush #15, Retake #17, Photoroom #21, Remini #22, Shots #27; Lensa #81, SNOW #99, **EPIK #100**. The feed only returns 100 rows, so "top 200" could never be tested | Order holds; EPIK wording fixed |
| 2 | Lensa's group of AI apps: 4.3M downloads and ~$1.8M/day at the mid-Dec 2022 peak; 0.95M and $0.51M/day by Feb 12, 2023 | Holds (952K downloads, $507K spending). It is a group of apps, not Lensa alone, as the chapter says | Confirmed (C, Apptopia via TechCrunch Feb 13, 2023) |
| 3 | EPIK yearbook: daily net revenue ~$15K → $340K (Oct 2023) | Holds; same post: 2.8M downloads and $1.7M net in two weeks | Confirmed (E, Appfigures Oct 6, 2023) |
| 4 | Photo Lab kept 40% one-month retention after the yearbook trend | Holds as Sensor Tower's statement; cohort and date not published | Confirmed (C) |
| 5 | Ghibli week: Remini downloads doubled (+3.6M, 7.3M total), revenue up <1%; it bid on "ghibli" in Apple Search Ads | Holds, word for word | Confirmed (E, Appfigures Apr 4, 2025) |
| 6 | ToonMe <15K → ~600K downloads/day (40×) | Insightrackr says so; Appfigures saw only +221% on the peak day and ~184K extra downloads | Kept as C; caveat added to takeaway 3 |
| 7 | Free Gemini ≈ 20 Nano Banana 2 images/day | Confirmed on Google's own Gemini Apps limits page (was labelled third-party). ChatGPT free "2–3/day" not found on an OpenAI page | Gemini upgraded to V; ChatGPT stays C |
| 8 | Shots (Jun 2025, 18,674 ratings), AI Maker (Nov 2025, 23,749), Dance AI (Feb 2026, 17,572) | Release dates hold (Jun 4, 2025; Nov 16, 2025; Feb 2, 2026). Ratings now 18,699 / 23,751 / 17,576 | Confirmed |
| 9 | Credit prices: Sparkle 25 for $4.99, GIO 30 for $5.99, Boothie 25 for $5.99 | All three hold in today's US IAP lists. GIO weekly $5.99–11.99 and yearly $29.99–39.99 confirm the "weekly sub + coins" playbook | Confirmed; Boothie relabelled from "prior research" to re-checked |
| 10 | Seedream costs ~$0.02–0.03 per image | OpenRouter API (Nov 17): Seedream 5.5 = $0.008 per input image + ~4.79e-6 per output image token (≈ $0.02 per standard image); Seedream 5.0 Flash input is free, output ≈ $0.018 | Confirmed |

**What I changed**
- Takeaway 1: EPIK "not in the US top 200" → outside the top 100 at the first pull, #100 on a re-pull; explained that the feed caps at 100.
- Takeaway 3: added Appfigures' smaller ToonMe number next to Insightrackr's 40×.
- Takeaway 7: Boothie price now re-checked, not "prior research".
- Takeaway 8: Gemini's 20/day is now sourced to Google's help page.

**What I could not verify**
- Review-mining results (23 of 26 apps with "changed my face" wording; recent averages such as Facetune 1.92, Shots 72% 1–2★): not re-run.
- Meitu/EPIK/SNOW Korea and Japan ranks (§2): not re-pulled.
- "~$500K a month" for EPIK and other Adapty/AppKittie revenue estimates: paid tools; they stay E.
