# 02 · Competitors: retro, digicam and film camera apps

**Date of data:** Nov 16–17, 2026 (US App Store unless marked).
**Scope:** every retro / digicam / film / disposable / VHS / "old phone" camera app I could find on iOS, plus the AI digicam wave that now competes with them. Event cameras, booth apps and big AI editors are covered in other chapters. I mention them only where they change the picture.
**Builds on:** `digi-deep-2026-11/02-competitors.md`. I don't repeat it. I add 40+ apps it didn't profile, new revenue estimates, today's charts in four countries, 4,600 fresh US reviews, and I correct it where it was wrong (section 1).

**Labels used on every number**
- **V** = verified today from a primary source (iTunes Lookup/Search API, Apple RSS charts, apps.apple.com IAP list, Apple review RSS).
- **C** = claimed by the company, a founder or the press.
- **E** = estimate (third-party model or my own math). Each E gets a confidence: **high / med / low**.

**Raw data** (scratch, not committed): `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/bible/rc/`
- `search_all.json`: 50 keyword searches, 1,029 unique apps
- `prof/profiles.json`: lookup + IAP list for 68 apps
- `charts/`: Photo top free / top grossing for US, GB, JP, KR
- `rev/`: up to 150 most recent US reviews for 35 apps (4,600+ reviews)
- `adapty/`: 25 Adapty paywall-library pages

---

## Key takeaways

1. **Cheap retro cameras are not "free downloads only". Dazz Cam is probably a top-3 earner in the whole niche.**
   - It charges just **$6.99/year** or **$19.99 once**, plus $0.99–2.99 per extra camera [V].
   - Estimates put it at **$0.5–0.9M a month** (Adapty, ScreensDesign) [E, med-low].
   - It is in the top 100 grossing Photo in GB (#94), Japan (#54) and Korea (#44) today [V]. A fact-check re-pull later on Nov 17 had it just outside the GB top 100, #56 in Japan and #51 in Korea, so GB is borderline.
   - It wins on volume (1–2M downloads a month, E) and on goodwill: 4.34★ average across its last 150 US reviews, with only 11% negative [V].
2. **The money leaders in "film look" are still preset editors, not cameras.**
   - US Photo grossing today: VSCO #19, Tezza #20, WayShot #27, Esti #43 [V].
   - Tezza reported **$26.5M in sales in 2023** (C, CNBC).
   - WayShot is the only true digicam app in the US top 30 grossing.
3. **WayShot is growing fast, and it is paying for that growth.**
   - US ratings rose **+126% in 30 days** to Nov 12 (E, AppKittie).
   - It spent about **$29.7K on Meta ads in 30 days** (E, AppKittie) and ran sponsored press (Tom's Guide "Sponsor Content").
   - The prior chapter said it wins on "TikTok volume". That's only half of it.
4. **The 2026 hits came from people, not features.**
   - **Chromagraph** (Rian Johnson + cinematographer Steve Yedlin) is a **$12.99 paid** app that reached #60 grossing Photo in Japan within four weeks [V] (#70 on a later re-pull; App Store release Oct 20, public announcement Oct 28, 2026).
   - In Korea, creator-branded cameras chart in grossing: Berryfilm (#50), filmhwa (#82) and @picn2k (#91) [V].
   - Huji (Selena Gomez, 2018), Dispo (David Dobrik, 2019) and Gudak (#1 in 9 Asian stores, 2017, C, Platum; I could only confirm it topped Apple's 2017 South East Asia paid-iPhone list) all spread the same way.
5. **The #1 way to make users hate a retro camera is to switch them to a subscription.** Reviews punish four things:
   - **Bait-and-switch subscriptions.** Hipstamatic, Afterlight, Retrica and NOMO all moved paid users onto a subscription: "locked features I already paid for".
   - **Save gates.** Dazz, OldRoll and NOMO: "can't save your pictures unless you buy pro".
   - **Lost photos.** 50 of Dispo's last 150 reviews mention lost or deleted photos.
   - **Ads.** Huji, 1998 Cam, Retrica and Dispo.
6. **The most-loved apps are small, simple and fair.**
   - mood.camera is a solo developer: 4.80★ recent average and **23 of 150 reviews praise the lifetime price**.
   - RetroShot (4.94★), Kamon (4.69★), CALLA (4.51★), Kapi (4.35★) and Huji (4.26★, no update in 23 months) are all cheap or free at the core.
7. **The orange date stamp, flash, CCD, disposable and VHS looks are table stakes.**
   - At least 25 of the apps in my list sell them.
   - The new looks are **"old phone" cameras**: flip phone, iPhone 4, 0.3 MP.
     - Oldi is a paid app that copies old-iPhone colours, at #41 grossing in Korea.
     - 0.3MP Camera has 10,125 US ratings.
     - Kroma, Rumi and 101cam all added phone looks.
8. **Two new apps already copy parts of Digi's idea.**
   - **Kroma** (Jul 30, 2026): cameras that "go away for a while" after a roll, home-screen widgets, coins, daily streaks, and **paid "Develop now" ($2.99 for 12 h, $4.99 for 24 h)** [V]. It is small: about $5K a month (E, low), but its ratings grew +254% in 30 days.
   - **2AM CAM** (Aug 27, 2026): direct-flash night camera plus QR shared albums.
   - Neither has AI looks or group strips.
9. **Naver/SNOW is quietly winning Asia with a cheap digicam.** 101cam (Jul 10, 2026) is **#4 free Photo in Korea** and #44 in Japan at $13.99/yr [V], but has only 603 US ratings. SNOW already runs the AI stack (EPIK, SNOW) that could bolt AI looks onto it.
10. **Clone wave: 9 apps squat on the word "Dazz" in their titles. Gudak Cam and KD Pro, two 2017 classics, are gone from the US store** [V]. Novelty dies. Distribution and trust are what last.

---

## 1. Corrections to the prior research

| # | Prior chapter said | What's true (Nov 17) | Evidence |
|---|---|---|---|
| 1 | "Retro camera apps win free downloads, not grossing. They are cheap or one-time-purchase apps." | Half wrong. Dazz is a big earner on volume (est. $0.5–0.9M/mo) and charts in grossing in GB #94, JP #54 and KR #44. Cheap ≠ small. | Apple RSS charts [V]; Adapty + ScreensDesign [E] |
| 2 | WayShot "wins on TikTok volume plus an aggressive paywall". | It also buys growth: ~$29.7K of Meta ads in 30 days [E, med], a sponsored Tom's Guide article [V], a GlobeNewswire press release (Dec 2025) [V]. Its revenue estimate is now $200–420K/mo [E, low-med]. | AppKittie cache (Nov 12); Tom's Guide page labelled "Sponsor Content Created With WayShot" |
| 3 | Revenue for WayShot / POV of "<$10K" (AppGoblin) was listed as a possibility. | Discard AppGoblin revenue. It shows Tezza at "<$10K/mo" while Tezza reported $26.5M in 2023. It is off by more than 100×. | appgoblin.info/apps/1393061654 vs CNBC |
| 4 | Huji Cam "dormant, irrelevant". | The code is dormant (last update Dec 11, 2024), but demand is alive: **#26 free Photo in Japan** today, 150 new US reviews in 13 months, and ~80K downloads a month (E, Adapty). It still has ads, and users dislike them. | RSS JP [V]; review RSS [V] |
| 5 | 101cam listed as a small 603-rating app. | Small in the US only. #4 free Photo in Korea, #63 grossing KR, #44 free JP [V]. | Apple RSS |
| 6 | Retro (Lone Palm Labs) "picks up ex-Lapse users" (US framing). | It is also **#6 free Photo in Korea and #19 in Japan** [V]. Friends-camera demand is strong in Asia. | Apple RSS |
| 7 | Chromagraph listed as a 2026 "digicam clone" with 250 ratings. | Not a clone. It's a $12.99 paid camera by director Rian Johnson and ASC cinematographer Steve Yedlin, launched Oct 20, 2026. It's #60 grossing Photo in Japan [V]. Its recent reviews are mixed (3.37★, n=119). | MacRumors Oct 30, 2026; Newsshooter Oct 28 |
| 8 | Dispo "faded". | Worse than faded. The last 150 US reviews average **1.84★** and 76% are 1–2★. 50 mention lost or deleted photos and 39 mention ads [V]. Adapty estimates ~$30K/mo [E, low]. | Review RSS |
| 9 | Gudak and KD Pro were not covered. | Both appear **removed from the US store**: iTunes Lookup returns nothing and the Gudak GB page returns 404 (Nov 17) [V]. KD Pro's last known update was Aug 2021 (C, aggregator). | Lookup API |
| 10 | ism called part of a "portfolio app studio". | ism is MWM's (seller field [V]). Search tools call other apps (Retrica, Fomz, 8mm) "MWM apps" because mwm.ai has pages for them, but mwm.ai is an app database. I found no proof that MWM owns them. Don't repeat that claim. | Lookup sellers: Retrica, Inc.; Guangzhou Mengdong; NEXVIO |
| 11 | WayShot ratings velocity "+532 in 5 days". | Still true in direction. AppKittie shows WayShot reviews +21.6% in 7 days and +126% in 30 days (to Nov 12) [E, med]. | AppKittie cache |

---

## 2. How to read the revenue numbers (important)

There is no Sensor Tower access. I used four estimate sources. Here is how far to trust each one.

| Source | What it gives | Calibration check | Trust |
|---|---|---|---|
| **AppKittie** (cached Nov 12, API now out of credits) | "revenue" ≈ last-30-day estimate, downloads, reviews growth, Meta ad spend | Boothie: AppKittie **$54,683** vs TrustMRR RevenueCat **$56,034** (last 30 days). That's within 3%. | **Med**. Best source here, but it only covers apps released 2025+ that hit my earlier filters. |
| **Adapty paywall library** (pages updated Nov 7, 2026) | Header "estimated monthly revenue / downloads" plus a written "About" paragraph | The header and paragraph often disagree, e.g. Dazz $500K vs $900K, NOMO $5K vs $80K, Afterlight $5K vs $50K. For Tezza, Adapty's $1M/mo is about half of reported revenue. | **Low–med**. I show both numbers when they differ. |
| **ScreensDesign** | Revenue and installs per month | Dazz $740K, 2.3M installs. Close to Adapty's paragraph. | **Low–med** |
| **AppGoblin** | "<$10K" buckets | Tezza "<$10K" vs $26.5M reported. Useless for revenue. | **Do not use** |

**Rule of thumb (E, med):**
- Trust the order of apps more than the dollar amounts.
- When AppKittie and Adapty agree within 2×, use the lower number.

---

## 3. The charts today (Apple RSS, Photo & Video genre, Nov 17, 2026) [V]

Only retro / film / digicam / aesthetic-camera apps are shown. A blank cell means the app is not in the top 100.

| App | US free | US grossing | GB free | GB grossing | JP free | JP grossing | KR free | KR grossing |
|---|---|---|---|---|---|---|---|---|
| WayShot | **11** | **27** | 14 | 45 | | | | |
| Dazz Cam | **24** | | 36 | 94 | 35 | **54** | 31 | **44** |
| ism | 23 | 70 | 84 | 89 | | | | |
| VSCO | 72 | **19** | | 32 | | 41 | | 32 |
| Tezza | 60 | **20** | | 30 | | | | |
| Esti (Prequel) | 81 | 43 | 96 | 38 | | | | |
| BeautyCam "Digicam" (Meitu) | 64 | 84 | 33 | 95 | **9** | **9** | 14 | 21 |
| 101cam (SNOW) | | | | | 44 | | **4** | 63 |
| Retro (friends camera) | | | | | 19 | | 6 | |
| Huji Cam | | | | | 26 | | | |
| 1998 Cam | | | | | 77 | | | |
| Pixie+ (Y2K digicam, JP dev) | | | | | 86 | | | |
| Kapi Cam (SenseTime) | | | | | 88 | | | |
| OldRoll | | | | | | 93 | | |
| Chromagraph ($12.99 paid) | | | | | | **60** | | |
| Oldi (old-iPhone colours, paid) | | | | | | | | 41 |
| Berryfilm (creator app, paid) | | | | | | | | 50 |
| filmhwa (creator app, paid) | | | | | | | | 82 |
| @picn2k camera (creator app) | | | | | | | | 91 |

**What the charts say (E, med)**
- **The US is a two-horse race for free digicam downloads: WayShot (#11) and Dazz (#24), with ism (#23) close behind.** Everything else is outside the top 100.
- **Japan and Korea are the real retro-camera markets.** Huji, Dazz, 101cam, 1998 Cam, Pixie+, Kapi, OldRoll and Chromagraph all chart there and not in the US.
  - This matters for ASO localisation later. It does not matter for the contest, which is US-first.
- **Meitu's BeautyCam renamed itself "Digicam & Photo Editor"** and is #9 free and #9 grossing in Japan. A giant has already taken the word "digicam" in Asia.

---

## 4. The master list: 50+ retro / digicam / film camera apps

Prices are the US IAP list on apps.apple.com [V]. That page shows at most 10 IAPs, so some lists are cut off.
- **Ratings** = US rating count / average.
- **Updated** = last version date.
- **Est. rev / dl** = per month, with source.

### 4a. The incumbents (10K+ US ratings, or charting)

| App (ID) | Developer (where) | Launched | Ratings | Updated | Price model and full visible IAP list | Est. rev / dl per month | Key looks |
|---|---|---|---|---|---|---|---|
| **Dazz Cam** (1422471180) | DAZZ PTE. LTD. (Singapore entity) | 2018-08-17 | 118,135 / 4.75 | 2026-11-09 | Free + **Dazz Pro $6.99 (yearly)** · Pro one-time $19.99 · cameras: Flash Color $0.99, ND Filter $0.99, Black Camera $0.99, S Classic $1.99, NT16 $1.99, Fisheye $1.99, Inst SQ $1.99, Exp Camera $2.99 | $500K–900K / 1–2M (Adapty header vs text); $740K / 2.3M (ScreensDesign). Seller of Boothie claims "$11M/yr" (C). **E, med-low** | 135, 120, half-frame, instant, slide, 3D (Nimslo-style), disposable, CCD, compact; video: 8 mm, 16 mm, VHS, DCR. Date stamp. Works on old photos too |
| **VSCO** (588013838) | Visual Supply Co. (US) | 2013-06-06 | 278,583 / 4.69 | 2026-11-13 | Plus $9.99/mo or $39.99/yr · Pro $14.99/mo or $69.99/yr · VSCO One $499.99/yr (C, PetaPixel Jun 2026) · free brand packs | $1–2M / 100–500K (Adapty) **E, low**. 160K Pro subs, profitable (C, 2024) | Film presets (B5, V3…). New: AI features, which users hate (section 7) |
| **Tezza** (1393061654) | Tezza App LLC (US, founder couple) | 2018-07-07 | 47,852 / 4.74 | 2026-11-04 | Basic $3.99/mo, $19.99/yr · Pro $4.99/wk, $6.99/mo, $39.99/yr · Luxe $9.99/mo, $59.99/yr · Ambassador $5.99/mo, $39.99/yr | $26.5M sales in 2023 = $2.2M/mo (C, CNBC). ~$32M ARR (C, TechCrunch Sep 2023). Adapty $1M (E, low) | Presets, retro effects, story templates. Not a camera-first app |
| **Esti** (6457366208) | Prequel Inc. | 2023-10-25 | 20,146 / 4.65 | 2026-10-26 | Weekly $4.99 / $5.99 / $6.99 · Yearly $39.99 · Yearly trial $14.99 | $800K / 200K+ (Adapty) **E, low-med** | Polaroid, VCR, Kodak, Super8, AI "photo booth", flash |
| **WayShot** (6749303003) | Romangic Lab LLC (US LLC) | 2025-08-10 | 5,463 / 4.72 | 2026-10-27 | Pro $9.99/wk · $59.99 or $69.99/yr · 1,500 coins $9.99 · 10,000 coins $49.99 · "30 film shots" $9.99 | **$417K / 348K** (AppKittie, Nov 12); $200K / 200K+ (Adapty); $100K / 700K (ScreensDesign). **E, low-med: call it $200–420K** | 5 "cameras" (Digicam, Digilite, Clean Girl, B&W, Procam); AI "reimagining"; AI coaching |
| **ism** (1580668065) | MWM (France per prior chapter, not re-checked; one listing shows © AHAF LLC, C) | 2021-11-04 | 12,389 / 4.73 | 2026-11-13 | Premium $7.99/wk · $3.99/wk · $4.99 · Yearly $29.99 · Pro Yearly $19.99 | $200K / 100–150K (Adapty, ScreensDesign) **E, low-med** | Retro, Y2K, digital camera, AI edits, collage, batch |
| **NOMO CAM** (1362548649) | Beijing Lingguang Zaixian (CN) | 2018-04-22 | 48,155 / 4.66 | 2026-04-08 | NOMO PRO $24.99/yr · cameras $0–1.99 (TOY F, ROMA, TOY K, FR2, 2007 free; 135 B $1.99, 135 M $0.99, EATS $1.99, INS 2 $0.99) | $5K header vs $80K text / 50–60K (Adapty) **E, low** | Point-and-shoot, instant, toy cameras. Japan is its biggest market (58,626 JP ratings vs 48,155 US) |
| **1998 Cam** (1450480287) | AAAI Studio LLC | 2019-02-01 | 40,451 / 4.80 | 2026-10-24 | Monthly $1.99 / $2.99 / $3.99 / $5.99 · Yearly $15.99 / $17.99 / $29.99 · Lifetime $39.99 (two SKUs) | $8K / 90K+ (Adapty) **E, low**. Listing claims "50 million users" (C) | 100+ filters, light leaks, dust, "random" filter; ads in free tier |
| **Retrica** (577423493) | Retrica, Inc. | 2012-11-15 | 33,787 / 4.70 | 2026-09-24 | Premium $5.99/wk, $12.99/mo, $59.99/yr · "Limited offer" $1.99/mo, $29.99/yr · Plus $7.99/mo, $29.99/yr · Go Pro $49.99 · No More Ads $49.99 · Enhance $49.99 | No reliable estimate. "600M downloads" (C, listing) | Rebranded "Digicam Filter Camera": 388 presets, 260+ free (C) |
| **radcam** (1079944301) | Going Merry LLC | 2016-02-24 | 39,522 / 4.49 | 2026-10-02 | Weekly $3.99 / $4.99 · Yearly $29.99 / $39.99 · Unlock All $5.99 / $29.99 · Premium $2.99 · **10 credits $2.99, 30 credits $8.99** | Not found | VHS, disposable, Kodak / Polaroid frames; credits for AI |
| **Afterlight** (1293122457) | Afterlight Collective (Roseville, CA) | 2017-11-02 | 20,783 / 4.74 | 2026-11-10 | $1.99/wk · $2.99 / $3.99/mo · $15.99 / $17.99 / $23.99/yr · Lifetime $19.99 / $39.99 | $5K header vs $50K text (Adapty) **E, low** | Film filters, dusty textures, frames. Same team ships yuzu cam (Y2K, $11.99/yr) |
| **Hipstamatic** Analog (1450672436) + Classic (342115564) | Hipstamatic, LLC (US) | 2019 / 2009 | 2,861 + 4,555 | Nov 2026 | Analog: Camera Club $7.99 / $19.99 / $29.99. Classic: **$4.99 paid** + HipstaPaks $0.99–1.99 | Relaunch got ~22K downloads (Appfigures, Apr 2023, E) | Lens + film + flash combos; also Party! (event) and IncrediBooth (booth, Nov 2026) |
| **Huji Cam** (781383622) | Manhole, Inc. (KR) | 2017-09-28 | 12,002 / 4.22 | **2024-12-11** | Free + "Extra Options" $0.99. Ads | <$1K / 80K+ (Adapty) **E, low** | The original orange date stamp + light leak, "1998" |
| **DAZE CAM** (1464359734) | Half Tab Inc. | 2019-08-19 | 12,265 / 4.75 | 2026-10-12 | Monthly $3.99 / $5.99 · Yearly $19.99 / $34.99 · one-time $3.99 / $5.99 / $19.99 | $5–9K / 5–40K (Adapty) **E, low** | Film, digital. Same team made sweet film |
| **West** (1517310923) | TheStudio, LLC | 2020-06-15 | 26,092 / 4.89 | 2026-11-06 | $6.99/mo · $39.99/yr · Lifetime $79.99 | $5–10K / 5–200K (Adapty) **E, low** | Film, effects |
| **Lomograph** (1291776269) + **1967** (916195181) | Maple Media Apps | 2018 / 2014 | 37,437 + 33,575 | 2024-09 / 2026-10 | Lomograph: packs $2.99, all $6.99. 1967: "Unlock All Films" $39.99 · 7-day trial $9.99 · sets $4.99 | Not found | Old-school filter packs. Lomograph is stale |
| **BeautyCam "Digicam & Photo Editor"** (592331499) | Meitu (CN) | 2013-01-27 | 22,757 / 4.75 | 2026-11-16 | VIP $6.99 / $7.99/wk · $11.99/mo · $44.99–59.99/yr | Not found (Meitu: 19.83M paying subs group-wide, C) | Digicam + booth modes, beauty |

### 4b. Mid-tier and long tail (500–10K US ratings)

| App (ID) | Developer | Launched | Ratings | Updated | Price model / IAP | Est. rev / dl per month | Notes |
|---|---|---|---|---|---|---|---|
| **OldRoll** (1570093460) | 梓杰 张 (CN indie) | 2021-06-04 | 5,608 / 4.71 | 2026-10-27 | $4.49 / $4.99/mo · $12.99–19.99/yr (with trials) · lifetime $17.99 / $19.99 / $27.99 | **$90K / 200K+** (Adapty) E, low-med | #93 grossing JP. Can't save or screenshot without VIP (reviews) |
| **ProCCD** (1616113199) | 亚玲 查 (CN) | 2022-03-31 | 2,313 / 4.74 | 2026-11-16 | $2.99/wk · $5.99–8.99/yr · lifetime $13.99–17.99 · $0.99 camera | **$50K / 200K+** (Adapty) E, low | CCD + 4-shot booth mode. Same dev: OldReel camcorder |
| **Kapi Cam** (6740760807) | TETRAS.AI (SenseTime) | 2025-03-03 | 1,660 / 4.70 | 2026-11-13 | $4.99/wk · $9.99 / $12.99/mo · $69.99 / $89.99/yr · lifetime $149 · 600 points $30 | $5K / 100K+ (Adapty) E, low | DV, CCD, film; "small team" (C). Loved: "it's free" |
| **101cam** (6781998623) | SNOW Corp (Naver, KR) | 2026-07-10 | 603 / 4.81 | 2026-11-05 | $4.99/mo · **$13.99/yr** | $5K / 100K+ (Adapty) E, low | #4 free KR. Film, digital, **retro phone models**, timestamp |
| **Kamon** (1296722377) | RO IT Consulting | 2017-10-26 | 5,760 / 4.71 | 2026-08-21 | Pro $19.99 one-time · $9.99/yr | Not found | 4.69★ recent; few complaints |
| **RetroShot** (6618147082) | Fansheng Network (CN) | 2024-09-03 | 4,843 / 4.96 | 2026-08-21 | $1.99–9.99/wk (incl. 3-day trial at $2.99) · $7.99/mo · $9.99–19.99/yr | Not found | 4.94★ recent; very short reviews (likely prompted) |
| **VNTG** (1113395996) | VNTG Hub LLC | 2016-09-28 | 6,952 / 4.73 | 2026-11-16 | PRO $4.99 / $5.99 / $39.99 / $49.99 · single cameras $0.99–4.99 | Not found | Per-camera sales like Dazz |
| **0.3MP Camera** (1661877394) | Dmitry Shatilov (solo) | 2023-01-20 | 10,125 / 4.84 | 2026-08-19 | Membership $1.99 · themes $1.99 · all themes $23.99 | Not found | Old phone / VGA look; free tier limited to 10 photos (reviews) |
| **Super 16** (1624035819) | Dmitry Shatilov | 2022-06-07 | 929 / 4.91 | 2026-11-07 | 6-month Pro $23.49 | Not found | 16 mm video look |
| **(Not Boring) Camera** (6737783441) | Not Boring Software (Andy Allen's studio) | 2025-06-05 | 5,758 / 4.55 | 2026-11-13 | !Camera Plus $14.99/yr or $59.99 lifetime · Super !Boring $7.99/mo, $29.99/yr | Not found | "No AI" Super RAW, 3D LUTs. Press quotes from The Verge, WaPo, MKBHD on the listing |
| **mood.camera** (6472954208) | Alex Fox (solo) | 2024-04-12 | 564 / 4.78 | 2026-11-10 | $1.99/mo · **Lifetime $24.99** · Early Adopter $14.99 | <$10K (AppGoblin, unreliable) | Was $14.99 lifetime at launch (C, TechCrunch Apr 2024). Raised the price, and fans stayed |
| **LoFi Cam** (1604592450) + Bebo Cam | PixelPunk Inc. | 2022-03-06 | 1,557 / 4.71 | 2026-10-29 | $1.99 / $3.99 / $6.99 · lifetime $14.99 / $19.99 | Not found | Film + digital |
| **Kada Cam** (1597218253) | Hangzhou Yuhang Solo Tech | 2021-11-30 | 1,847 / 4.68 | 2026-10-10 | $1.99/mo · $5.49/yr · $12.99 one-time | Not found | Same dev: Solo Cam |
| **Fomz** (1615744942) | Guangzhou Mengdong (CN) | 2022-04-18 | 1,264 / 4.71 | 2026-10-13 | $0.49 / $0.99/mo · $3.99 / $4.49/yr · lifetime $5.99 / $6.99 | $10K / 100K+ (Adapty) E, low | Film grain, time watermark, light leaks, notes |
| **CALLA CAM** (1268504808) | NOTEGG (KR) | 2017-08-14 | 827 / 4.49 (7,180 KR) | 2026-11-11 | Films $0.99 each · Lab $1.99 · All-pack $6.99 | Not found | Pure per-film sales; 4.51★ recent |
| **FILCA** (1436429074) | Cheol Kim (KR) | 2018-09-22 | 2,469 / 3.78 | 2026-11-16 | Pro $5.99 / $49.99 / $59.99 / $89.99 · film series $4.99–5.99 | Not found | Confusing price ladder; low rating |
| **Filmroll** (1445858252) | YooDoo Inc. | 2018-12-28 | 2,400 / 4.65 | 2025-01-22 | $0.49/mo · $4.49/yr · "Last Roll Of Film" $5.99 | Not found | Stale |
| **Foodie** (1076859004) | SNOW Corp | 2016-02-02 | 9,327 / 4.74 | 2026-10-22 | $6.99/mo · $31.99 / $34.99/yr | Not found | Food + film; SNOW again |
| **VHS Cam** (1091555594) | Ringtones LLC | 2016-03-24 | 10,583 / 4.38 | 2026-10-23 | $3.99/wk · $19.99/yr · lifetime $39.99 · $2.99 unlocks | Not found | VHS |
| **Rarevision VHS** (679454835) + Lite | Rarevision LLC | 2015 / 2017 | 6,732 + 7,923 | 2025-11 / 2024-08 | **$5.99 paid**, no IAP | Not found | VHS; paid-upfront survivor |
| **TOK CAM** (1522192046) + inFi | 英瑜 许 (CN) | 2020-07-10 | 514 / 4.68 | 2026-11-11 | Free film list ($0.00 items) | Not found | Instant, CCD, film |
| **FIMO** (1454219307) | Guangzhou Hongxiao (CN) | 2019-04-09 | 258 / 3.97 | 2025-12-17 | Pro $29.99/yr · film rolls $0.99–1.99 (Gold 200, Portra 160NC, X-Mas 25T…) | Not found | **Seasonal film rolls** ("X-Mas 25T", "New Year 2020"). Same dev: FIMO 1903 ($2.99) |
| **Snap it** (6503426518) | Mega e Limited | 2024-08-16 | 919 / 4.58 | 2026-09-24 | $6.99 / $9.99/wk · $6.99 / $12.99/mo · $19.99 / $39.99/yr · lifetime $17.99 / $29.99 | Not found | Retro + films |
| **Flashback Camera** (1601362087) | Tykee Pty (AU) | 2024-01-03 | 534 / 4.71 | 2026-11-03 | No IAP listed | Not found | Disposable |
| **Memo: Vintage Camera** (6504227647) | SCRL AB (makers of SCRL collage, #15 grossing) | 2024-06-13 | 899 / 4.72 | **2024-08-08** | Memo Gold $29.99 | Not found | A big studio tried retro and stopped after 2 months |
| **TinType** (926177061) | Hipstamatic | 2014-10-22 | 3,528 / 4.81 | 2026-10-03 | Unlimited $9.99 | Not found | Wet-plate look |

### 4c. 2025–2026 launches worth watching

| App (ID) | Developer | Launched | Ratings | Price / IAP | Est. rev / dl per month | Why it matters |
|---|---|---|---|---|---|---|
| **y2k: 2000s photo editor** (6753996237) | Abel Thomas Noble (indie) | 2025-10-20 | 13,239 / 4.83 | $3.99/wk · $24.99/yr · $2.99 / $12.99 | Not found | Fastest-loved indie of 2025. Stickers + filters, cheap |
| **Pecra: G7X** (6757448890) | PECRAS Technologies | 2026-01-17 | 1,310 / 4.41 | $8.99/wk · $14.99 · $89.99/yr, hard paywall | **$88.5K / 111K** (AppKittie); $70K / 90K+ (Adapty) E, med | AI G7X look; 95% of reviews 1–2★ (prior chapter) |
| **flag7x** (6747452095) | Ranjha, Inc. | 2025-06-30 | 203 / 4.59 | $4.99 · $19.99 · lifetime $24.99 | $5K / 50K+ (Adapty) E, low | Non-AI G7X filter; pays to remove watermark |
| **Kroma** (6791587711) | AppRover | 2026-07-30 | 282 / 4.82 | Weekly $4.99 · Yearly $39.99 · Premium $7.99 / $49.99 · Pro $9.99 · coins 200 / $2.99, 600 / $6.99, 1,500 / $14.99 · **Develop now 12 h $2.99, 24 h $4.99** | $5.3K / 18K (AppKittie) E, med; reviews +254% in 30 d | **Closest mechanic copy of Digi.** Disposable roll of 27 with no preview; cameras "go away for a while"; widgets; streak coins; camera skins; Y2K compact with "orange date stamp"; Mini DV; flip phone |
| **Chromagraph** (6803329435) | Chromatic Applications (Rian Johnson, Steve Yedlin, Eric Cameron) | 2026-10-20 | 250 / 4.06 | **$12.99 paid**, no IAP | 25K downloads in <30 days (third-party, unverified) | Proof that a famous person + a paid app can chart in weeks |
| **Digital Camera – Rumi Cam** (6768312391) | Giacomo Pignoni (indie) | 2026-06-15 | 117 / 4.67 | $4.99 · $14.99 · lifetime $19.99 | Not found | Camera collection incl. **old phone cameras** |
| **Pixie+ Y2K Digicam** (6774289960) | appful Inc. (JP) | 2026-05-29 | 42 US; #86 free JP | $2.99/mo · $19.99/yr | Not found | D-pad UI, date stamp, **private invite-code friend groups of 2–9** |
| **2AM CAM** (6793744610) | Aiden Magarian (indie) | 2026-08-27 | 48 / 4.81 | **$0.99 paid** + cloud storage $1.99–14.99/mo, $19.99–149.99/yr | Not found | Night direct flash + QR shared album "sharing until sunrise" |
| **Clicked** (6761549035) | Clicked, Inc. | 2026-04-20 | 39 / 3.92 | $4.99 / $6.99/wk · $7.99 / $9.99/mo · $39.99 / $59.99/yr · 10 magic credits $2.99 | **$41.7K / 31.7K** (AppKittie) E, med; revenue +300% in 30 d | "Recreate any photo you've saved" pose-guide camera + AI looks |
| **Fimii** (6755296366) | Khoa Le Nguyen (solo) | 2026-02-12 | 49 / 4.92 | Lifetime $9.99 only | $21.9K (AppKittie) E, low | One-price film presets |
| **Sparkle** (6811675349) | Jaxus Labs | 2026-11-10 | 11 / 5.0 | $7.99 · $59.99/yr · 25 photos $4.99 | Too new | AI retake + G7X (prior chapter) |
| **VSCO Capture** (6741483219) | VSCO | 2025-07-21 | 226 / 4.42 | Free | — | VSCO's separate preset camera; weak |
| **yuzu cam** (6476576794) | Afterlight Collective | 2025-05-16 | 8 / 5.0 | $0.99/wk · $2.99/mo · $11.99/yr · lifetime $23.99 | — | An incumbent's Y2K side bet that went nowhere |
| **BerryFilm** (6741474933) | Seungyun Kim (KR creator "Berry") | 2025-02-27 | 106 US; #50 grossing KR | **$1.99 paid** (₩3,300) | $50K / 20K (AppKittie, CN-store row) E, low | "Filters loved by 600K fans": creator distribution |
| **Oldi** (6760838876, KR) | Sean Cho | 2026-03-20 | 509 KR; #41 grossing KR | ₩1,100 paid + subscription after 5 free photos a day | Not found | Old-iPhone colour science (3GS to XS) |
| **Paji 相机** / **Gloam 相机** (CN store) | CN indies | 2026-05 / 2026-08 | 2,329 / 167 | — | $105K / 140K and $90K / 60K (AppKittie) E, low | China-only CCD cameras making real money. Not US threats |

### 4d. Dead, dormant or removed (lessons)

| App | Status | Lesson |
|---|---|---|
| **Gudak Cam** (1237692856) | Not found in US lookup; GB page 404 (Nov 17) [V]. It was $0.99 paid, launched July 2017 by "Screw Bar", a team of **four people with full-time jobs**. It reached **#1 in 9 Asian App Stores** within ~6 weeks (C, Platum). | A strong mechanic (24 shots, an hour to reload, **3-day development**) made press everywhere (PetaPixel, 9to5Mac). It had no retention plan and no update path. |
| **KD Pro Disposable Camera** (1291297394) | Not returned by US lookup (Nov 17) [V]. Last known update Aug 2021 (C, aggregator). | A Gudak clone with ~800 ratings. Clones of a mechanic die with the mechanic. |
| **Kuji Cam** (1468247478) | No update since Oct 2021; 121 ratings | Cheap Huji clone ($0.99/mo). |
| **Huji Cam** | No update since Dec 2024, still #26 free JP | A brand plus one perfect look can coast for years. |
| **Dispo** (1491684197) | Updated Oct 2026 but 1.84★ recent | Ads plus subscription pop-ups plus lost photos destroyed a celebrity-launched brand. |
| **Lapse** (1636699256) | No update since Dec 6, 2025 | See prior chapter (social removed over storage cost). |
| **Memo (SCRL)**, **sweet film** (Half Tab), **VaporCam / PinksCam / MolyCam** (思远 林, 2019–2020), **Retrica Packs** (2024) | Stale 1–6 years | Side projects from studios die fast unless they hit in month one. |
| **Hipstamatic social network** (2023 relaunch) | ~22K downloads after relaunch (E, Appfigures Apr 2023). Hipstamatic "Analog" now has 2,861 US ratings. | A loved brand from 2010 could not restart through a social feed. |

**Name squatting [V]:** 9 other apps put "Dazz" in their title:
- Dazz Cam (伟 刘)
- Dazz Camera (月红 韩)
- Dazz Cam Dispo.sable
- LUZMO – Dazz Cam 35mm
- Dazz Cam – Old Film & VHS
- "Dazz Cam ‎" (seller "Dazz Cam")
- DAZZ CAM Glitch
- Dazze Cam (Oct 2026)
- CCD CAM – Digital Dazz Cam

The biggest of these has 950 ratings. **Squatting a brand keyword doesn't build a business.** It is also an Apple 5.2 (intellectual property) risk. Digi must not do it.

---

## 5. How they make money: the six models

| Model | Who uses it | Typical prices | What users say | Fit for Digi |
|---|---|---|---|---|
| **1. Cheap yearly + per-camera add-ons + lifetime** | Dazz, NOMO, VNTG, CALLA, FIMO, Kada, Fomz | $5.49–24.99/yr; cameras $0.99–2.99; lifetime $12.99–19.99 | Happiest reviews in the niche (Dazz 11% negative, CALLA 7%). Complaints come only when saving or basic edits are gated | Copy the goodwill, not the price. Digi's free tier must feel as generous as Dazz's |
| **2. Weekly-first subscription** | WayShot ($9.99/wk), ism ($7.99/wk), Pecra ($8.99), Tezza ($4.99), Esti ($4.99–6.99), RetroShot, Snap it | $3.99–9.99/wk; $29.99–89.99/yr | ism 55% negative: "Another subscription app", "$32 a month for filters is highway robbery", "charged even if canceled". Tezza: "subscribed for 10 weeks before I realized" | Makes money short-term. It is the main source of 1★ reviews. Use only with very clear terms |
| **3. Lifetime-friendly indie** | mood ($24.99), Rumi ($19.99), Fimii ($9.99), LoFi ($14.99–19.99), Not Boring ($59.99), Afterlight ($19.99–39.99), West ($79.99), 1998 Cam ($39.99) | $9.99–79.99 one-time | mood: 23 of 150 reviews praise the price model, 4% negative. Lifetime is the trust signal of this niche | Dangerous with AI costs. OK for a non-AI "looks forever" pack later |
| **4. Paid upfront** | Chromagraph $12.99, Hipstamatic Classic $4.99, Rarevision VHS $5.99, BerryFilm $1.99, 2AM CAM $0.99, Oldi ₩1,100, filmhwa ₩4,400, Gudak $0.99 (dead) | $0.99–12.99 | Works only with a famous maker or a strong story. Chromagraph's paid reviews: "overpriced for what it is" | Not for Digi (kills TikTok-driven installs) |
| **5. Coins / credits / pay-to-skip-the-wait** | Kroma (coins + **Develop now $2.99 / $4.99**), WayShot (coins + "30 film shots" $9.99), radcam (10 credits $2.99), Kapi (600 points $30), Clicked (10 credits $2.99) | $0.20–0.33 per AI shot | WayShot: "coins on top of Pro" angers paying users (prior chapter) | **Yes, as Digi's Party Pack.** Never sell coins on top of a subscription without saying exactly what the subscription includes |
| **6. Free with a hard daily or total cap** | 0.3MP (10 photos), Oldi (5 photos a day), Huji (ads) | — | 0.3MP: "only 10 photos?" but still 4.34★ recent. Oldi charts in grossing | A visible counter is fine. A hidden cap is not |

**Price-per-AI-shot benchmark [V prices; E math]**

| Pack | Price | Per shot |
|---|---|---|
| WayShot 30 film shots | $9.99 | $0.33 |
| Boothie 25 credits | $5.99 | $0.24 |
| **Digi Party Pack, 25 digis (planned)** | **$5.99** | **$0.24** |
| Sparkle 25 photos | $4.99 | $0.20 |
| Kroma 600 coins | $6.99 | unknown per shot |

Digi's planned pack sits mid-market. Seedream at ~$0.02–0.03 per image leaves a high gross margin after Apple's cut (E, high).

**Yearly price ladder in the niche [V]:**

| Yearly price | Apps |
|---|---|
| $5.49–6.99 | Kada, ProCCD, Dazz |
| $13.99 | 101cam |
| $19.99 | Pixie+, Tezza basic |
| $24.99 | NOMO, y2k |
| $29.99 | ism, Retrica Plus, 1998 Cam |
| **$39.99** | **Tezza Pro, Esti, VSCO Plus, Kroma, West (Digi's draft price)** |
| $59.99–69.99 | WayShot, Retrica Premium, VSCO Pro |
| $89.99 | Pecra, Kapi |

**Read (E, med):**
- A non-AI retro camera at $39.99/yr would be overpriced next to Dazz at $6.99.
- **$39.99 is defensible only because Digi's paid tier is AI plus party features.**
- The free camera has to beat Dazz's free set, or US teens will keep Dazz and never open Digi.

---

## 6. Paywalls and onboarding (from listings, IAP names and reviews, E)

Mobbin has no screens for Dazz, Huji, NOMO, 1998 Cam, WayShot or the other retro cams. I checked Nov 17: a "retro film camera app paywall" search returned only non-camera apps. VSCO is on Mobbin. Its membership screen is a scrolling list of preset cards, each with a **"Try it out"** button, then a plain "Thank you for becoming a member" screen. So the paywall details below come from IAP names and user reviews. The UI chapter covers paywall design properly.

| App | Paywall type | When it appears | Trial | Evidence |
|---|---|---|---|---|
| Dazz | Soft. Most cameras free; locked cameras show a lock; Pro unlocks all | When you tap a locked camera or try some edits | None listed | "most of everything is free"; "To be able to edit your photos, it's an additional 5.99" |
| WayShot | Hard-ish. Trial gate before free use; spin-the-wheel offers | After a long intro | 3–7 days (reviews) | Prior chapter (67% 1–2★) |
| ism | Hard. Weekly-first | Early | Yes (reviews mention trial charges) | "If you wanted something actually free, do not bother" |
| Tezza | Hard for the camera | When opening the camera | Yes (weekly after trial) | "wouldn't let me use the camera without a subscription" |
| Dispo | Pop-ups + ads + yearly with 3-day trial ($19.99–59.99) | Repeated pop-ups | 3 days on yearly | "can't escape their subscription service pop ups"; "deleting it will … remove all of my photos" |
| NOMO | Was per-camera, moved to yearly | When saving pro-camera photos | — | "be prepared to pay for another entire year to access the photos taken" |
| OldRoll | Save gate | When saving / screenshotting | Yearly with trial | "people who cannot pay pro can not save photos. We can't even do a screenshot" |
| radcam | Hard | Most cameras | Weekly | "Only two of the cameras are free" |
| Not Boring | Soft but surprising | Some features | — | "I have to pay just to have one photo edited when it says nothing about having to pay" |
| Pecra | Hard, no trial | Before first edit | No | "Processing photos requires Pecra Premium" (Adapty) |
| mood.camera | Soft: 7-day free try, then $1.99/mo or lifetime | After a week | 7 days | TechCrunch Apr 2024; reviews love it |
| Kroma | Soft + coins + shop | Shop, "develop now", skins | Weekly plan | Listing |

**Pattern (E, med):** the apps with the best reviews let you **shoot and save for free with no time limit**, and charge for *more* (more cameras, more looks, less waiting). The worst-reviewed ones charge for **saving, editing basics or getting your own photos back**.

---

## 7. What 4,600 recent US reviews say (35 apps)

Method: up to 150 most recent US reviews per app (Apple RSS), keyword themes on title + body. The number in brackets is how many of those reviews were 1–2★. These are keyword counts, not hand coding, so treat them as directional [V data, E coding].

| App | n | Avg | 1–2★ | Paywall | Billing / trial | Cheap / lifetime praise | Ads | Bugs | Lost photos | AI | Love words |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Dazz | 150 | 4.34 | 11% | 25 (7) | 4 (2) | 3 | 3 (0) | 6 | 2 | 0 | 82 |
| Huji | 150 | 4.26 | 10% | 8 (0) | 1 | 2 | 4 (1) | 6 | 9 (4) | 0 | **108** |
| 1998 Cam | 150 | 4.37 | 12% | 12 (2) | 5 | 1 | 8 (3) | 4 | 2 | 0 | 82 |
| Kamon | 150 | 4.69 | 5% | 5 (0) | 1 | 3 | 3 | 6 | 1 | 1 | 80 |
| CALLA | 150 | 4.51 | 7% | 6 (3) | 0 | 4 | 10 (3) | 5 | 4 | 0 | 81 |
| RetroShot | 150 | 4.94 | 1% | 9 (0) | 1 | 1 | 2 | 1 | 1 | 1 | 69 |
| mood.camera | 150 | 4.80 | 4% | 17 (1) | 6 (1) | **23 (0)** | 1 | 3 | 4 | 0 | **96** |
| Kapi | 150 | 4.35 | 9% | 18 (8) | 1 | 2 | 2 | 4 | 0 | 0 | 67 |
| 0.3MP | 150 | 4.34 | 12% | 30 (8) | 2 | 10 | 3 | 1 | 2 | 0 | 77 |
| ProCCD | 93 | 4.30 | 13% | 27 (5) | 2 | 12 | 0 | 3 | 1 | 0 | 48 |
| OldRoll | 150 | 3.88 | 19% | 46 (13) | 7 | 10 | 1 | 8 | 5 | 0 | 73 |
| Not Boring | 150 | 3.93 | 20% | 29 (10) | 1 | 4 | 6 | 11 | 0 | 1 | 54 |
| West | 150 | 3.75 | 25% | 25 (12) | 2 | 8 | 0 | 10 | 7 | 0 | 70 |
| Chromagraph | 119 | 3.37 | 27% | 18 (9) | 5 | 4 | 2 | 22 (6) | 5 | 0 | 42 |
| FIMO | 107 | 3.33 | 35% | 34 (23) | 4 | 6 | 1 | 6 | 3 | 0 | 39 |
| Afterlight | 150 | 3.25 | 40% | 38 (25) | 19 (18) | 11 | 1 | 29 (17) | 8 (7) | 1 | 61 |
| NOMO | 150 | 3.13 | 42% | 44 (25) | 6 | 7 | 2 | 25 (15) | 4 | 0 | 66 |
| DAZE CAM | 150 | 3.11 | 43% | 40 (22) | 6 | 9 | 2 | 15 (11) | 13 (8) | 0 | 76 |
| Retrica | 150 | 2.89 | 51% | 33 (26) | 4 | 2 | **21 (17)** | 17 | 13 (12) | 0 | 53 |
| Hipstamatic Analog | 150 | 2.73 | 51% | 41 (34) | 4 | 11 | 3 | 22 | **21 (12)** | 3 | 55 |
| ism | 150 | 2.71 | 55% | 51 (39) | **27 (23)** | 10 | **21 (16)** | 13 | 2 | 3 | 39 |
| Tezza | 150 | 2.58 | 57% | **58 (47)** | 21 (19) | 10 | 4 | **41 (22)** | 11 | 2 | 64 |
| radcam | 150 | 2.51 | 61% | 51 (43) | 17 (14) | 6 | 6 | 22 | 8 | 0 | 25 |
| VSCO | 150 | 2.27 | 69% | 44 (38) | 11 (10) | 5 | 4 | 31 (28) | 15 (13) | **14 (14)** | 56 |
| Dispo | 150 | **1.84** | **76%** | 37 (32) | 12 | 6 | **39 (35)** | 29 | **50 (46)** | 0 | 49 |

(Smaller samples, not in the table: flag7x n=39, 4.13; 2AM CAM n=21, 4.57; VSCO Capture n=84, 4.11; Clicked n=9; 101cam n=7; Rumi n=5; Kroma n=4.)

### Five lessons with real quotes [V, quoted from the US review RSS]

**1. Switching paid users to a subscription is the fastest way to lose a loyal base.**
- Hipstamatic, 1★ (Aug 2026): "Bought dozens of filters and lenses. But of course now I'm stuck having to pay a subscription for filters I've already paid for."
- Afterlight, 1★ (Mar 2026): "I paid a flat rate for this app years ago… Now they've switched to a subscription model and locked features I already paid for."
- NOMO, 2★ (May 2026): "You used to be able to buy individual cameras you wanted. Now there is an annual subscription for all of them."
- Retrica, 1★: "I had this app a few years back before you had to pay to even take a picture."

*For Digi:* decide the free/paid line once, before launch, and never move a free feature behind the paywall later.

**2. Gating your own photos is hated more than anything else.**
- NOMO, 1★: "had to pay to get my photos… App cant be bothered to automatically save them to my camera roll."
- OldRoll, 3★: "people who cannot pay pro can not save photos. We can't even do a screenshot."
- Dazz, 1★: "you can't save your pictures you take unless you buy the pro."

*For Digi:* every free photo auto-saves to the camera roll, full resolution, with only the small digi.pink mark.

**3. Lost photos kill a camera brand.**
- Dispo, 1★ (Nov 8, 2026): "I lost everything… I took pictures literally last night after updating my app and watched the timer on them go down as it was 'developing' and they're gone."
- Dispo, 1★: "whenever I went to delete it, it said that deleting it will cause it to remove all of my photos permanently."
- Afterlight, 2★: "Crashed & lost everything… right after subscribing to pro."

*For Digi Roll:* the "develop next morning" moment must be bulletproof. Keep a local copy on the shooter's phone from the second the shot is taken. Show a clear "your photos are safe" state while developing.

**4. Ads in a camera feel creepy.**
- Huji, 2★ (Oct 2026): "Just deleted it due to the types of ads they allow. It's disgusting."
- Huji, 4★: "weird and inappropriate ads at the top."
- 1998 Cam, 2★: "the ads are ridiculous. I have to click on the ad in order to get the close x."
- Dispo, 1★: "the app is borderline unusable because any time i open to take a picture quickly…"

*For Digi:* no ads, ever. Say it in the App Store description ("No ads.").

**5. In a nostalgia app, AI can be a turn-off.**
- VSCO, 1★ (Nov 11, 2026): "Sold out for AI… the app just promotes AI slop."
- VSCO, 2★ (Nov 10): "This app was perfect for over a decade… until they integrated Artificial Intelligence."
- (Not Boring) Camera sells "No AI or over-processed photos" as its headline feature.
- The prior chapter found the same in AI-look apps: "changed my face".

*For Digi:*
- Keep the free camera 100% non-AI and say so ("Real camera looks. No AI.").
- Make AI an opt-in "re-light" with a before/after and "your face stays yours".

**What people love (5★ quotes):**
- Huji: "There's no ads, or premium purchase, it's just a great way to capture every small moment." (This is wrong about ads, but shows the feeling.)
- mood.camera: "the developer just 'gets it'. the emphasis is on being in the moment and making the images less perfect… worth the lifetime."
- 0.3MP: "Perfect, this is literally all you need. It's simple and straightforward without all the free trial bs."
- Kapi: "theres camera settings that you have to pay for but theres still ALOT to choose from for free."
- 2AM CAM: "Takes INSANE instant shots in dark settings… Why couldn't Apple figure this out?"

**A hardware signal [V reviews, C press]:** three camera apps have Oct–Nov 2026 reviews complaining about the **"iPhone Duo"**:
- Chromagraph: "Not compatible with iPhone Duo… almost all functionality is not usable"
- 2AM CAM: "lack of duo support has made it virtually impossible to use"
- mood.camera: "text of the options… don't rotate"

Press says Chromagraph added foldable support in v1.1.3. **Digi's camera screen must work on the iPhone Duo from day one.** Early adopters of new hardware are exactly the people who post camera content.

---

## 8. The looks: what is table stakes and what is new

Counted from listings and IAP names [V]; "who" lists examples, not every app.

| Look | Who sells it | Status for Digi |
|---|---|---|
| CCD / 2000s digicam with harsh flash | Dazz, Kapi, ProCCD, 101cam, Pixie+, Kroma, WayShot, Retrica, BeautyCam, flag7x, Pecra (AI) | **Table stakes.** Must be free and excellent |
| Orange date stamp | Huji (original), Dazz, Kroma ("orange date stamp"), Pixie+, 101cam, Fomz, RetroShot, Kamon | **Table stakes.** Free; let users set the date |
| Disposable (27 or 36 shots, no preview) | Dazz, Kroma (27), Gudak (24), Dispo, Huji, FIMO, Flashback | Table stakes as a look. The **no-preview roll** is the party mechanic |
| Instant / Polaroid frame | Dazz Inst SQ, Kroma Instant ("shake it to develop"), TOK CAM, NOMO | Free |
| Half-frame / 3D Nimslo / fisheye | Dazz, NOMO | Nice-to-have |
| VHS / Mini DV / 8 mm / 16 mm video | Dazz, Rarevision, VHS Cam, Kapi, Kroma, Super 16 | Video is a big tail. Later, not the contest |
| **Old phone cameras (flip phone, VGA, iPhone 3GS–X)** | **Oldi (#41 grossing KR), 0.3MP (10K ratings), Rumi, Kroma "Flip Phone 2006", 101cam "retro phone models"** | **New and rising.** A "2009 flip phone at the party" look is cheap to build on-device |
| G7X "clean girl" flash | WayShot, Pecra, flag7x, Sparkle | AI-heavy and saturated; hated when it changes faces |
| Night direct flash | 2AM CAM | **Party-specific.** Digi's "flash at night" look should be the hero |
| Creator / film-stock "recipes" | Kroma (weekly recipes), Berryfilm, filmhwa, picn2k, VSCO collabs | Distribution tool: one creator look per drop |
| Seasonal film rolls | FIMO "X-Mas 25T", "New Year 2020" ($1.99) | **Direct precedent for a Christmas / NYE look drop** |

---

## 9. What makes each one spread

| Engine | Examples | How it worked | Copyable by Digi? |
|---|---|---|---|
| **A famous person uses it** | Huji (Selena Gomez, Jasmine Sanders, 2018; #hujicam hit ~0.5M posts in weeks, C); Dispo (David Dobrik); Chromagraph (Rian Johnson + Yedlin, Oct 2026) | Celebrity posts → press → charts | Partly. Mid-size TikTok creators, not celebrities |
| **Creator-branded camera** | Berryfilm (600K fans), filmhwa (1M-follower photographer), @picn2k (Instagram travel photographer). All in KR grossing top 100 | The creator's audience buys "her look" | **Yes.** "@creator's party look" as a limited drop with revenue share |
| **One mechanic that makes a news story** | Gudak (3-day wait), Dispo (9 a.m. develop), Kroma (cameras go away; paid "develop now") | Press writes about the constraint | Yes: "your party develops at 9 a.m. for everyone". The prior chapter warns it's a launch hook, not retention |
| **TikTok UGC + paid acquisition + paid press** | WayShot: Meta ~$29.7K/30 d (E), sponsored Tom's Guide piece, GlobeNewswire release, creators named by Notebookcheck | Volume and money | Contest-limited: all marketing is deducted from profit |
| **Free and generous → word of mouth** | Dazz, Huji, Kapi, CALLA | Friends see the date stamp, ask "what app is that?" | **Yes. This is Digi's watermark loop** |
| **Press + Apple editorial** | (Not Boring) (The Verge, WaPo, MKBHD quotes on the listing); mood.camera (TechCrunch, Reddit beta) | Taste-makers | Some: a launch post on r/analog-style subs is risky; Product Hunt is cheap |
| **Daily habit surface** | Kroma (widgets + streak coins), Locket (widget) | Home-screen presence | Later: a "tonight's roll" widget |
| **Keyword squatting** | 9 "Dazz" clones | Steals a few searches | **No.** IP risk; tiny results |

---

## 10. The 10 most relevant threats to Digi (ranked)

Score = how likely they hurt Digi in the Nov 16 – Dec 16 contest × how much (E, med).

| Rank | Competitor | Why it's a threat | Likelihood (60 days) | What Digi does better |
|---|---|---|---|---|
| **1** | **WayShot** | Owns US digicam: #11 free, #27 grossing. Ratings +126% in 30 days. Paid ads + TikTok creators. Could add a "party" or strip camera any week | High | Trust (no spin wheel, no face changes, clear count); group strip and party roll; free non-AI camera. Its 67% negative reviews are Digi's positioning, without naming it |
| **2** | **Dazz Cam** | The default free retro camera for US teens: #24 free, 118K ratings, generous free tier at $6.99/yr. If Dazz adds a "party" camera, Digi's free side has no edge | Medium (Dazz ships new cameras often; no AI so far) | AI re-light looks, group strips, shared roll that develops, share-to-Story formats. Dazz is a solo camera |
| **3** | **ism (MWM)** | #23 free US, weekly-first, already lists "AI edits" and "digital camera". MWM is a studio that copies trends fast | Medium | Party / group positioning; honest pricing (ism has 27 billing complaints in 150 reviews) |
| **4** | **Meitu BeautyCam "Digicam & Photo Editor"** | Renamed around "digicam"; has booth modes; #9 free + #9 grossing JP, #64 free US; a huge AI + beauty stack | Medium | No beauty reshaping; "your face stays yours"; party roll. Meitu doesn't do friend-group features in the West |
| **5** | **Esti (Prequel)** | #43 US grossing; already sells AI "photo booth" + film + flash with credits at $39.99/yr, the same price as Digi | Medium | Prior chapter: 63% negative, "fill out an application" onboarding. Digi = shoot first, pay later |
| **6** | **Kroma** | Already ships the develop wait, no-preview roll, widgets, streak coins and **paid "Develop now"**. Growing fast from a small base | Medium (small team, but iterating weekly per its listing) | Group roll (Kroma is single-user); AI looks; party share formats |
| **7** | **101cam / SNOW (Naver)** | Cheap ($13.99/yr), #4 free KR. SNOW runs AI packs (EPIK sells AI Christmas packs for $0.99–3.99, prior chapter) and could add AI digicam looks overnight | Low in the US during the contest; medium later | US brand and English-first marketing; party focus |
| **8** | **Hipstamatic** (Party! + IncrediBooth + Classic) | The only US team that has a retro brand, an event camera AND a booth app (IncrediBooth launched Nov 6, 2026) | Low–medium | Speed, AI looks, one app instead of three |
| **9** | **2AM CAM** | Night flash + QR shared album "sharing until sunrise": the exact Digi Roll story, $0.99 | Low (48 ratings, solo dev) | AI looks, strips, free to join, 9 a.m. reveal. Watch it; it could get a viral TikTok any day |
| **10** | **G7X AI wave (Pecra, flag7x, Sparkle, Boothie)** | Owns "G7X / digicam AI" search intent; Pecra makes ~$70–90K/mo (E) despite 95% negative reviews | Medium (new ones launch weekly) | Group / party, honest limits, free sample before paywall |

**Lower threats:** Tezza and VSCO (preset editors; VSCO is losing loyal users over AI), Huji (dormant), Dispo (collapsing), NOMO (stale, last update Apr 2026), Retrica (51% negative), 1998 Cam (ads, slow library).

---

## 11. What Digi should copy, and what it should avoid

**Copy:**
1. **Dazz's generosity:** many free cameras, save always free, $0.99–2.99 extras later.
2. **Kroma's "develop" economy:** a no-preview roll, cameras that rest after a roll, streak coins, paid early develop.
3. **FIMO's seasonal rolls** ("X-Mas 25T"). Make them Digi's Christmas / NYE look drops.
4. **Korea's creator cameras.** One creator's look per drop, with their name on it.
5. **mood.camera's tone.** "Be in the moment, less perfect", and a developer who answers reviews.
6. **2AM CAM's night flash** as the hero party look.
7. **Old-phone looks** (flip phone 2006, iPhone 4) as a cheap new look nobody owns in the US.

**Avoid:**
1. A save gate or edit gate on free photos (NOMO, OldRoll, Dazz complaints).
2. Moving any free feature behind a paywall later (Hipstamatic, Afterlight, Retrica, NOMO).
3. Ads (Huji, 1998, Retrica, Dispo).
4. Pop-up paywalls on every open (Dispo).
5. Coins sold on top of a subscription with no clear limits (WayShot).
6. Weekly plans that renew silently without clear terms (Tezza, ism).
7. Losing a single photo (Dispo: 50 of 150 reviews).
8. Brand-keyword squatting ("Dazz" clones).

---

## What this means for Digi

1. **Ship a free camera that beats Dazz's free set on day one.**
   - At least **10 free on-device looks**: CCD digicam + flash, disposable, instant, night direct flash, flip phone 2006, B&W flash, warm 35 mm, half-frame, VHS still, and Y2K compact.
   - All with the **orange date stamp** on by default and an editable date.
   - **Free saving at full resolution, auto-save to the camera roll, no time limit.**
   - Test: a US teen who has Dazz should still pick Digi for party night.
2. **Keep the free camera 100% non-AI, and say so.** App Store first line: "Real party camera looks. No ads. No AI unless you ask for it." VSCO's AI backlash and Not Boring's "No AI" pitch show the audience cares.
3. **Price check, keep but frame it.**
   - $39.99/yr (3-day trial) and $6.99/wk are inside the niche range ($5.49–89.99/yr; $3.99–9.99/wk).
   - Put "AI re-light + group strips + party rolls" right on the plan card, so it doesn't look like "Dazz at 6× the price".
   - The paywall must show the exact renewal date and price. ism and Tezza get 20+ billing complaints per 150 reviews.
4. **Party Pack: keep $5.99 / 25 digis.**
   - That's $0.24 per AI shot, mid-market between Sparkle ($0.20) and WayShot ($0.33).
   - Show a live counter ("18 of 25 left").
   - Never sell digis to a subscriber without saying how many the subscription includes.
5. **Test a Kroma-style "Develop now" IAP on Digi Roll, host-only, after Dec 1.**
   - Example: "Develop tonight for everyone · $1.99".
   - The 9 a.m. reveal stays the default and the story.
   - E, med: Kroma already sells $2.99 / $4.99 skips, so people will pay to skip a wait.
6. **Run a Christmas and NYE "seasonal roll" drop**, following FIMO's "X-Mas 25T":
   - Two limited looks: "Christmas Party Flash" (Dec 1–26) and "NYE Midnight" (Dec 26–Jan 2).
   - The looks themselves are free.
   - The AI versions spend digis.
   - Each drop gets one TikTok post a day from the owner's account.
7. **Recruit 3–5 mid-size creators for a named look**, Korean creator-camera style (Berryfilm, filmhwa).
   - Example: "@creator's house-party flash".
   - Pay as revenue share or a small fee with receipts (it counts as marketing spend in the contest).
   - Start outreach this week so looks ship by Dec 5.
8. **Make photo safety a visible feature.**
   - Local copy on the shooter's phone at capture.
   - A cloud copy for the roll.
   - A "your photos are safe" developing state.
   - Never delete user photos on app delete or plan change.
   - Put "We never lose your party" in the listing.
9. **No ads, ever, and say "No ads" in the subtitle or first screenshot.** Four competitors lose stars over ads.
10. **ASO keywords: own the low-difficulty party and digicam terms, not "film camera".** AppKittie keyword data (US, cached Nov 2026) [E, med]:

    | Keyword | Popularity | Difficulty |
    |---|---|---|
    | "party camera" | 27 | 14 |
    | "y2k camera" | 33 | 16 |
    | "ccd camera" | 31 | 15 |
    | "flash camera" | 25 | 11 |
    | "ai digicam" | 28 | 10 |
    | "photo strip" | 39 | 17 |
    | "film camera" | 84 | 29 |

    - Target the first six (all difficulty 17 or under).
    - Avoid "film camera" head-on. It's popular but Dazz and NOMO own it.
    - Never use "Dazz", "Huji", "Kodak", "Fuji", "Polaroid" or "G7X" in the title or keyword field. That's a trademark rejection risk; "G7X" belongs to Canon.
11. **Support the iPhone Duo (foldable) layout from the first build.** Chromagraph, 2AM CAM and mood.camera are all getting 1–2★ reviews for missing it.
12. **Answer every review in the first 30 days**, in a human voice. mood.camera and Kapi show that a fair, responsive developer earns 4.8★ in a niche full of 2.5★ apps.
13. **Set up a weekly competitor watch** (15 minutes, Mondays). Pull US rating counts and chart ranks for:
    - WayShot, Dazz, ism, Esti, Kroma, 2AM CAM, 101cam, BeautyCam, Pecra, Sparkle
    - Hipstamatic Party! and IncrediBooth

    Use the iTunes Lookup API with IDs 6749303003, 1422471180, 1580668065, 6457366208, 6791587711, 6793744610, 6781998623, 592331499, 6757448890, 6811675349, 6504739136, 6799999961. If WayShot or Dazz ships a "party" or "strip" camera, change the creator messaging within 48 hours to lean on group rolls and honesty.
14. **After the contest: localise for Japan and Korea.** That's where Huji, Dazz, 101cam, Pixie+, OldRoll and the creator cameras chart. Japanese and Korean screenshots + the date-stamp look are a cheap second market (E, med).

---

## Method and limits

- **Searches:** 50 iTunes Search API keyword runs (US, limit 50), 1,029 unique apps, filtered to Photo & Video / Graphics / Entertainment / Social / Lifestyle. Plus spot searches in KR and JP.
- **Profiles:** iTunes Lookup + apps.apple.com IAP lists for 68 apps (Nov 17). The IAP list shows at most 10 items, so long price ladders are cut off.
- **Charts:** Apple RSS top free / top grossing, Photo & Video (genre 6008), limit 100, for US, GB, JP and KR (Nov 17).
- **Reviews:** Apple customer-review RSS, most recent, up to 3 pages (150) per app, 35 apps. Keyword themes, not hand-coded.
- **Revenue:**
  - AppKittie (cached Nov 12; the API is out of credits and was not called).
  - Adapty paywall library pages (updated Nov 7, 2026).
  - ScreensDesign.
  - Company and press claims.
  - No Sensor Tower or Appfigures access.
- **Not done:**
  - I did not install or open any app. Paywall timing comes from listings and reviews.
  - Mobbin has no retro-camera app screens.
  - Team sizes are known only where the press or the listing says so (Gudak 4, mood.camera 1, Chromagraph 3 named people, Tezza founder couple, Kapi "small team").
- **Unverified:**
  - Chromagraph's "25K downloads in 30 days" comes from an unnamed tracker quoted in search results.
  - Retrica's "600M downloads" and 1998 Cam's "50 million users" are the developers' own claims.
  - Dazz's developer location beyond "DAZZ PTE. LTD." (Singapore entity) is unknown.

---

## Sources

**Primary (V)**
- iTunes Search API: `https://itunes.apple.com/search?term=<term>&country=us&entity=software&limit=50` (Nov 16–17, 2026)
- iTunes Lookup API: `https://itunes.apple.com/lookup?id=<ids>&country=us` (Nov 17, 2026)
- Apple RSS charts: `https://itunes.apple.com/{us,gb,jp,kr}/rss/{topfreeapplications,topgrossingapplications}/limit=200/genre=6008/json` (Nov 17, 2026)
- Apple review RSS: `https://itunes.apple.com/us/rss/customerreviews/page={1-3}/id=<id>/sortby=mostrecent/json` (Nov 17, 2026)
- App Store pages (IAP lists): `https://apps.apple.com/us/app/id<id>` for every app ID in section 4
- Kroma listing: https://apps.apple.com/us/app/kroma-vintage-film-camera/id6791587711
- Mobbin, VSCO membership screens: https://mobbin.com/screens/0d44f043-d456-48d6-8300-87113090fbad , https://mobbin.com/screens/8856fb50-4baf-4b30-bbda-e7e6dd22128b

**Estimates (E)**
- Adapty paywall library (updated Nov 7, 2026):
  - https://adapty.io/paywall-library/dazz-cam-vintage-camera/
  - https://adapty.io/paywall-library/wayshot/
  - https://adapty.io/paywall-library/ism/
  - https://adapty.io/paywall-library/esti/
  - https://adapty.io/paywall-library/tezza/
  - https://adapty.io/paywall-library/vsco-photo-video-editor/
  - https://adapty.io/paywall-library/oldroll/
  - https://adapty.io/paywall-library/proccd/
  - https://adapty.io/paywall-library/pecra/
  - https://adapty.io/paywall-library/nomo-cam/
  - https://adapty.io/paywall-library/1998-cam/
  - https://adapty.io/paywall-library/afterlight/
  - https://adapty.io/paywall-library/kapi-cam/
  - https://adapty.io/paywall-library/101cam/
  - https://adapty.io/paywall-library/dispo/
  - https://adapty.io/paywall-library/daze-cam/
  - https://adapty.io/paywall-library/flag7x/
  - https://adapty.io/paywall-library/fomz/
  - https://adapty.io/paywall-library/west-film-effects/
  - https://adapty.io/paywall-library/huji-cam/
- ScreensDesign, Dazz Cam: https://screensdesign.com/apps/dazz-cam-vintage-camera/
- AppKittie cached exports (Nov 12, 2026): scratchpad `akdb/` (WayShot, Pecra, Boothie, Kroma, Clicked, Fimii, BerryFilm, Paji, Gloam, Once); keyword file `akdb/kd_fs.json`
- AppGoblin Tezza (used only to show it is unreliable): https://appgoblin.info/apps/1393061654
- TrustMRR Boothie (calibration, via prior chapter): https://trustmrr.com/startup/boothie.md

**Claims and press (C)**
- Tezza revenue: https://www.cnbc.com/2024/03/19/how-photo-editing-app-tezza-grew-from-side-hustle-to-millions-in-sales.html · https://techcrunch.com/2023/09/19/startup-tezza-takes-on-vsco-with-easy-to-use-photo-and-video-editing-tools
- VSCO: https://petapixel.com/2024/05/20/vsco-is-now-profitable-thanks-to-200-million-users-and-160000-pro-subs · https://petapixel.com/2026/06/23/why-vsco-believes-its-new-500-subscription-is-worth-it-for-pros/
- Gudak: https://petapixel.com/2017/07/13/gudak-brings-joy-pain-film-photography-phone/ · https://9to5mac.com/2017/07/14/gudak-iphone-disposable-camera/ · https://platum.kr/archives/88220
- Huji: https://www.whowhatwear.com/huji-cam-instagram-app · https://www.ypulse.com/article/2018/07/13/the-new-app-celebs-cant-stop-using-on-the-viral-list/
- Hipstamatic relaunch: https://appfigures.com/resources/insights/20230331/2-hipstamatic-(re)launches-a-classic-to-challenge-instagram-culture
- Chromagraph: https://macrumors.com/2026/10/30/rian-johnson-iphone-camera-app/ · https://www.newsshooter.com/2026/10/28/chromagraph-camera-ios-app-by-steve-yedlin-asc/
- mood.camera: https://techcrunch.com/2024/04/22/mood-camera-is-an-ios-app-that-feels-like-using-a-retro-analog-camera/amp/
- (Not Boring) Camera: https://www.producthunt.com/products/not-boring-camera
- WayShot:
  - Press release: https://www.globenewswire.com/news-release/2025/12/26/3210516/0/en/WayShot-Launches-the-World-s-First-AI-Photography-App-With-Real-Time-Coaching-and-Creative-Assistance-Redefining-How-People-Take-Photos.html
  - Sponsored article: https://www.tomsguide.com/computing/mobile-apps/your-iphones-new-secret-weapon-the-pro-editor-app-replacing-digital-cameras
  - Creator mention: https://www.notebookcheck.net/How-to-Take-Instagram-Ready-Photos-Without-Editing.1278369.0.html
- Lapse / Dispo context: https://appfigures.com/resources/insights/20231117/5-lapse-loses-momentum-as-downloads-drop-70-percent
- Prior chapter: `/home/user/MMTEST/research/digi-deep-2026-11/02-competitors.md`

---

## Fact-check (2026-11-16)

*Independent re-check of the 10 numbers in this chapter that matter most for decisions, Nov 16–17, 2026. Prices and dates were re-pulled from the iTunes Lookup/Search API and the apps.apple.com in-app purchase lists; charts from Apple's RSS feed; the rest from fresh searches.*

| # | Claim | Re-check result | Status |
|---|---|---|---|
| 1 | Dazz Cam: $6.99/yr or $19.99 once, extra cameras $0.99–2.99 | Holds exactly (Dazz Pro $6.99, One-Time $19.99, add-ons $0.99–2.99). 118,201 US ratings, updated Nov 9, 2026 | Confirmed |
| 2 | Dazz grossing GB #94, JP #54, KR #44 | Re-pull later on Nov 17: **not in GB top 100**, JP #56, KR #51. Free: US #29, GB #40, JP #39, KR #31 | Moves daily; note added to takeaway 1 |
| 3 | Tezza: $26.5M sales in 2023 (CNBC) | Holds. CNBC Make It, from documents it reviewed (early 2024 story, "last year" = 2023), ≈ $2.2M a month | Confirmed (C) |
| 4 | Chromagraph: Rian Johnson + Steve Yedlin, $12.99 paid, #60 grossing JP | Makers and price hold (PetaPixel Nov 12, Newsshooter Oct 28, Fast Company). Store release Oct 20, announced Oct 28. JP grossing **#70** on re-pull; 253 US ratings | Confirmed; dates added |
| 5 | Kroma (Jul 30, 2026): Develop now 12 h $2.99 / 24 h $4.99; weekly $4.99, yearly $39.99, coins $2.99/6.99/14.99 | Holds exactly (285 US ratings). The Egypt store also sells "Develop now" 6 h (EGP 99.99) and 2 h (EGP 49.99) | Confirmed; extra tiers noted |
| 6 | 2AM CAM (Aug 27, 2026): $0.99 paid + storage $1.99–14.99/mo, $19.99–149.99/yr | Holds exactly (49 ratings) | Confirmed |
| 7 | 101cam (Jul 10, 2026): $13.99/yr, #4 free Photo KR, 603 US ratings | Holds: release Jul 10, 101 PRO $13.99/yr and $4.99/mo (SNOW Corporation), KR free #4 on re-pull; US ratings now 621 | Confirmed |
| 8 | 0.3MP Camera 10,125 US ratings; Oldi is paid, #41 grossing KR | 0.3MP: 10,137. Oldi: $0.99 paid in US (4 US ratings); KR grossing #47 on re-pull | Confirmed (rank drift) |
| 9 | Huji: no update in 23 months; Gudak Cam and KD Pro gone from the US store | Huji last update Dec 11, 2024 (= 23 months). Lookup for Gudak (1237692856) and KD Pro (1291297394) returns 0 results in US and KR | Confirmed |
| 10 | Gudak "#1 in 9 Asian stores" (2017) | Only partly confirmed: Gudak tops Apple's 2017 South East Asia paid-iPhone list (Malay Mail). The "9 stores" count rests on Platum alone | Kept as C, label added to takeaway 4 |

**Also re-checked, no change needed:** mood.camera is a solo developer (Alex Fox; 565 ratings); Shots/WayShot/Pecra rating counts are within normal daily growth (WayShot 5,590); Korea creator cameras still chart in grossing (Berryfilm #54, @picn2k #87, filmhwa #89 on re-pull).

**What I changed**
- Takeaway 1: added the re-pulled Dazz ranks (GB is borderline, not safely top 100).
- Takeaway 4: Chromagraph release/announcement dates and the later #70 rank; Gudak's "#1 in 9 stores" now labelled C with what could be confirmed.

**What I could not verify**
- WayShot's ~$29.7K Meta ad spend and +126% ratings growth, Kroma's ~$5K/month, and all AppKittie/Adapty/ScreensDesign revenue estimates (Dazz $0.5–0.9M/month, 1–2M downloads/month): paid or cached tools; they stay E.
- Review-mining percentages (Dispo 50/150 lost-photo reviews, mood.camera 23/150 lifetime praise): not re-run.
- "9 apps squat on Dazz": not re-counted.
