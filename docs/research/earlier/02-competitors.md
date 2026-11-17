# Digi: competitor teardown (Nov 16, 2026)

**Scope:** every relevant camera / filter / AI-photo / photobooth / photo-dump / social-camera app on iOS, US-first (plus GB, CA, AU; TR/DE spot checks).
**Builds on:** `DIGI-HOW-COMPETITORS-WORK-2026-11-14.md`, `PHOTOBOOTH-PLAN-2026-11-13.md` and `flashstrip/pf-01-market.md` (Nov 11–12). I don't repeat those. I re-checked their numbers and corrected them where they had changed.

**Labels**
- **V**: verified today from a primary source (Apple RSS, iTunes Lookup/Search API, the apps.apple.com page, the TrustMRR RevenueCat page).
- **C**: claimed by a company, founder or seller, or reported in the press.
- **E**: my estimate or inference, or a third-party model (AppGoblin, Screensdesign).

**Raw data** (scratch): `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/digi/competitors/`
- `raw/`: 16 chart JSONs, 8 social-chart JSONs, `search_us.json`, `reviews.json`.
- `profiles.json`: lookup data and IAPs for 57 apps.
- `themes.json`: review theme counts and quotes.
- `scripts/`.

---

## 0. Bottom line (blunt)

1. **Boothie's revenue is real but not where you think. [V]**
   - $56,034 in the last 30 days and $54,458 MRR from 2,351 subscriptions.
   - It is **#31 top-grossing Photo in Turkey** and **not in the top 100 grossing Photo in US, GB, CA, AU or DE**.
   - It has 40 US ratings.
   - So most of its money is Turkey (plus Android), not the US.
   - "Copy Boothie for the US" is an untested bet. Boothie itself hasn't proven the US.
2. **The US digicam money leader is WayShot, and its users hate it.**
   - US Photo grossing **#28**, free **#11**. +532 US ratings in 5 days [V].
   - 67% of its recent US reviews are 1–2★ [V]: "charged after cancelling trial", "changed my face", "SHEIN of photo apps".
   - It wins on TikTok volume plus an aggressive paywall, not on happy users.
3. **"AI changes my face" plus "paid and got 5–10 photos" is the category-wide complaint.**
   - Pecra: 95% of reviews 1–2★.
   - Boothie: almost all non-US reviews are 1★ for the face or for credit caps.
   - EPIK and Esti: "paid Pro, still hit a monthly limit".
   - Whoever proves "your face stays yours" on the result screen, and is honest about how many photos you get, has the one real differentiation.
4. **Instagram shipped a Locket/BeReal clone.** "Instants, an Instagram app" launched May 2026. Today it is **#7 free Social in the US**, #12 CA and #16 GB, with 26,398 US ratings [V].
   - It is ephemeral and unedited. It is not an AI look or a party roll.
   - But it shows Meta will clone any casual friend-camera format within months.
5. **The social-camera graveyard has lessons for Digi Roll.**
   - **Lapse:** forced 5-friend invites gave #1 US in Oct 2023, then downloads fell 70% within weeks. Social features were removed in Dec 2025 because photo storage cost too much. Reviews today beg for social back and complain of lost photos.
   - **Dispo:** 9 a.m. development and a celebrity launch. Monthly downloads went 540K → 120K in 2 months (2022).
   - **BeReal:** about 15M → about 6M DAU in 7 months (2022–23). Sold to Voodoo for about €500M.
   - **Locket** is the survivor: about 9M DAU, profitable with 14 staff (C). It lives on the home-screen widget, a 5-friend gate, teens, and $1.99–$3.99 Gold plus ads.
   - **POV** is the quiet winner on events: 4.92★, wedding and bachelorette word of mouth, paid per event at $4.99–$89.99.
6. **There is a huge clone wave with tiny results. [V]**
   - **195 new 2026 apps** turned up across 20 keyword searches. Only ~10 have ≥100 US ratings.
   - 42 booth/strip apps (best is Sera with 84 ratings) and 53 event or shared-roll apps (median 1 rating).
   - Clones fail. Distribution plus a real hook wins.
7. **Close conceptual competitors to Digi's social hooks already exist, all tiny:**
   - **stripz** (a daily group strip that only "develops" if everyone posts; 34 ratings, no update since Aug).
   - **2AM CAM** (direct-flash night camera plus a QR shared album "sharing until sunrise"; 48 ratings).
   - **Beam** (social camera roll; 200 ratings).
   - **POV / Once / Lense** (event rolls).
   - **Sparkle** ("Group pic? Tap the face you want to fix", launched Nov 10).
   - Nobody combines AI looks, a group strip and a party roll that develops. But the parts are not new.

---

## 1. Chart census, today (Apple RSS, Nov 16, 2026) [V]

Columns: **G** = top grossing, **F** = top free; "Photo" = genre 6008. A blank cell means not in the top 100.

### 1a. Camera / filter / AI-photo / booth apps in the Photo & Video top 100

| App (ID) | G-US | G-GB | G-CA | G-AU | F-US | F-GB | F-CA | F-AU | Type |
|---|---|---|---|---|---|---|---|---|---|
| Facetune (1149994032) | 7 | 8 | 7 | 6 | 35 | 37 | 33 | 31 | AI beauty |
| FaceApp (1180884341) | 9 | 6 | 9 | 8 | 77 | 58 | 87 | 86 | AI face |
| Picsart (587366035) | 11 | 15 | 12 | 14 | 12 | 12 | 17 | 13 | Editor / AI |
| Airbrush (998411110) | 14 | 10 | 13 | 10 | 30 | 35 | 40 | 72 | AI beauty (G7X "Relight") |
| SCRL collage (1289057196) | 15 | 17 | 15 | 16 | 15 | 23 | 13 | 9 | Photo dump / carousel |
| Retake AI (6466298983) | 16 | 23 | 20 | 22 | 37 | 68 | 74 | 71 | AI face retouch |
| **Tezza** (1393061654) | **19** | 30 | 30 | 21 | 63 | | | | Aesthetic presets |
| VSCO (588013838) | 20 | 31 | 19 | 31 | 68 | | 39 | | Presets |
| Remini (1470373330) | 21 | 18 | 21 | 20 | 78 | 59 | 98 | 74 | AI enhance |
| Photoroom (1455009060) | 22 | 16 | 25 | 27 | 69 | 56 | 54 | 90 | AI cutout |
| Prequel (1325756279) | 24 | 19 | 22 | 19 | 64 | 67 | 45 | 59 | AI filters |
| PicCollage (448639966) | 25 | 20 | 27 | 26 | 57 | 42 | 55 | 48 | Collage |
| Meitu (416048305) | 27 | 27 | 16 | 13 | 34 | 75 | 86 | 54 | AI editor ("AI Flash") |
| **WayShot** (6749303003) | **28** | 37 | 34 | 46 | **11** | 13 | 9 | 8 | Digicam AI/filter |
| Shots: Photo & Video Generator (6745820631) | 32 | 43 | 31 | 28 | 26 | 50 | 23 | 18 | AI templates |
| BeautyPlus (622434129) | 33 | 29 | 26 | 23 | 73 | | | | Beauty |
| Instories (1454762989) | 36 | 44 | 37 | 34 | 71 | 99 | 49 | 53 | Story templates |
| **Esti** (6457366208) | **43** | 39 | 40 | 37 | 81 | 87 | 71 | 67 | Aesthetic / AI film |
| YouCam Makeup (863844475) | 44 | 46 | 49 | 55 | 56 | 74 | 65 | | Beauty |
| Persona (1561622206) | 67 | 79 | 68 | 89 | | | | | Beauty camera |
| **ism: Retro Camera** (MWM, 1580668065) | 71 | 91 | | 84 | **18** | 79 | 92 | 70 | Retro camera |
| Hypic (ByteDance, 1644042837) | 79 | 38 | 45 | 32 | 19 | 22 | 32 | 27 | AI editor ("AI Flash", G7X2) |
| BeautyCam "Digicam & Photo Editor" (Meitu, 592331499) | 83 | | 46 | 33 | 58 | 29 | 15 | 16 | Digicam + booth modes |
| Lensa (1436732536) | 87 | 75 | 73 | 96 | | | | | AI avatars |
| SNOW (1022267439) | 93 | 94 | 57 | 80 | | | | | AI profile |
| B612 (904209370) | | 100 | 63 | 81 | | | | | Selfie camera |
| EPIK (1577705074) | | | | 82 | 59 | | | | AI editor (yearbook, Christmas packs) |
| **Dazz Cam** (1422471180) | | 93 | 90 | 77 | **21** | 30 | 25 | 22 | Retro camera |
| Empose: Aesthetic Poses (6799978162, Aug 2026) | | | | | 23 | 76 | | 100 | Pose ideas (new) |
| Posi: Aesthetic Photo Poses (6826799689) | | | | | | 53 | | 94 | Pose ideas (new) |
| Kapi Cam (SenseTime, 6740760807) | | | | | | | 81 | | CCD camera |
| Huji Cam (781383622) | | | | | | | 78 | | Retro camera |
| Retro: Photos with Friends (6443709020) | | | | | | | 85 | 61 | Friends weekly journal |
| **POV: Disposable Camera Events** (1636032890) | | | | 98 | | | | | Event camera |
| **Boothie** (6775603987) | — | — | — | — | — | — | — | — | Not in any of these 8 lists |

**Spot checks: Photo top-grossing in TR and DE [V]:**
- **TR:** Retake #14, Hypic #23, Esti #25, **Boothie #31**, Tezza #41, Dazz #52, WayShot #82.
- **DE:** Retake #29, Tezza #43, Esti #44, Hypic #45. Boothie not in the top 100.

**All-genre charts [V].**
- **US top-100 grossing:** YouTube #2, Snapchat #5, Instagram #8, CapCut #19, Google Photos #30, Canva #37, Facetune #47, FaceApp #78.
- **US top-100 free:** CapCut #12, Instagram #36, Snapchat #55, Edits #63.
- **Missing:** no digicam, booth or party-camera app is in any all-genre top 100, in any of the 4 countries.

### 1b. Social Networking genre (6005): the friend-camera apps [V]

| App | F-US | F-GB | F-CA | F-AU | G-US | G-AU | Note |
|---|---|---|---|---|---|---|---|
| **Instants, an Instagram app** (6756442328) | **7** | 16 | 12 | — | | | Launched May 2026; 26,398 US ratings |
| **Locket Widget** (1600525061) | **15** | 44 | 38 | 29 | 58 | 61 | 592,775 US ratings; Locket Gold |
| Widgetable (1641107226) | 26 | 24 | 25 | 18 | | | Widget social |
| BeReal (1459645446) | 65 | 56 | 60 | 19 | | | 1.16M US ratings, flat |
| setlog: friends camera (6587576438) | 87 | 73 | 44 | 21 | | | Dec 2025 launch; 387 US ratings |
| Vlogit (6753156888) | 85 | | | | | | Video friends daily |

**Not in any top 100 today:**
- Lapse (Photo genre)
- Dispo
- Beam
- stripz
- Once
- Lense

**What the charts say (E)**
- **The US camera-look money leaders are preset or "aesthetic" editors:** Tezza (#19 G), WayShot (#28), Esti (#43). Big AI face apps (Facetune, FaceApp, Retake, Remini) sit above them.
- **Retro camera apps win free downloads, not grossing:** Dazz (#21 F), ism (#18 F), Hypic (#19 F). They are cheap or one-time-purchase apps.
- **Pose-idea apps are new chart movers:** Empose (#23 F US, launched Aug 2026) and Posi. That is an adjacent "aesthetic photos with friends" demand signal.
- **Party and event cameras don't chart.** POV is only #98 G-AU. The category is small in store terms even though its reviews are great.

---

## 2. The 2026 clone wave (iTunes Search, US, 20 keywords) [V]

**Keywords:**
- photobooth, photo booth, photo strip, booth strip, ai photobooth
- digicam, digi cam, ai digicam, ccd camera, y2k camera, flash camera, film camera, disposable camera
- photo dump, party camera, event camera, shared camera roll, friends camera
- group photo ai, christmas photo ai

**Result:** 195 apps released in 2026 in Photo, Social, Graphics or Entertainment.

| Bucket | New 2026 apps | ≥50 US ratings | Best performer |
|---|---|---|---|
| Booth / strip | 42 | 1 | Sera: Vintage Photobooth, 84 ratings ($9.99/wk, $69.99–129.99/yr) |
| Event / shared roll / party | 53 | 4 | Beam (200), Scene Disposable Camera Events (115), Roll Camera (98) |
| Digicam / CCD / Y2K / G7X / film | ~134 (overlaps) | 9 | Pecra (1,310), 101cam by SNOW (603), Chromagraph (250), Rumi Cam (117) |
| Photo dump | 7 | 0 | Rewind (24) |

**Launches in the last 10 days:**
- GiggleCam, Popbooth (Nov 12)
- GETFLSH, Lil Booth (Nov 11)
- Tira (Nov 9)
- XA (Nov 8)
- pose, Memoroll, **IncrediBooth by Hipstamatic** (Nov 6)
- Memory and ShutterLive event cameras (Nov 5)
- Booth 77 (Nov 5)
- This Chapter (Nov 4)

**Lesson (E).** Shipping a booth or digicam app gets you nothing. Of the 2026 apps found, only Pecra (paid TikTok creators) and SNOW's 101cam (big parent) passed 500 US ratings. Boothie got its money with only 40 US ratings, through persona TikTok in Turkey. **Distribution is the whole game.**

**Name collisions to avoid:**
- "Boothie: Photo Strip Maker" (Tyler Loosemore)
- Flashroll / Flash Roll
- Popbooth
- 2AM CAM
- "Digital Camera" variants

I found no iOS app named plainly "Digi" in these searches. Several "Digi Cam" and "Digicam" apps exist, so the store title needs the subtitle to stand out.

---

## 3. App profiles (US, Nov 16) [V unless marked]

Columns:
- **Ratings** = US rating count and average.
- **Upd** = last update.
- **IAP** = the US App Store IAP list (up to the 10 shown).

### 3a. AI camera-look apps (direct competitors)

| App | Developer (country) | Released | Ratings | Upd | IAP (US) | Core | Onboarding / paywall (from listing + reviews) | Social | AI? |
|---|---|---|---|---|---|---|---|---|---|
| **Boothie: AI Photo Editor** 6775603987 | Keremcan Şeker (TR) | 2026-06-23 | 40 / 4.35 | Oct 12 (v1.6) | Plus $6.99 · Gold $9.99 · Pro Weekly $7.99 · Pro Monthly $19.99 · 10 credits $2.99 · 25 credits $5.99 · 60 credits $11.99 | Free on-device film filters + beauty editor; AI digicam flash, night/red flash, glow | Daily credits (reviews: "5 credits a day", "next one in 22 hours", "wait 10 hours to get more stars") | None | Yes (generative) |
| **WayShot** 6749303003 | Romangic Lab LLC (US LLC) | 2025-08-10 | 5,463 / 4.72 | Oct 27 | Pro $9.99/wk · $59.99/$69.99/yr · 1,500 coins $9.99 · 10,000 coins $49.99 · "30 film shots" $9.99 | 5 "cameras" (Digicam, Digilite, Clean Girl, B&W, Procam); "Real skin" | Long intro, spin-the-wheel offers, trial gate before any free use, coins on top of Pro (reviews) | None | Yes (reviews and the "reimagining photo" wording show generative) |
| **Pecra: G7X** 6757448890 | PECRAS Technologies | 2026-01-17 | 1,310 / 4.41 | Sep 30 | Premium $14.99 · Weekly $8.99 · Yearly $89.99 | G7X look | Hard paywall, no trial; 10–13 photos/month cap (reviews) | None | Yes |
| **Sparkle: AI Retake & G7X** 6811675349 | Jaxus Labs LLC | 2026-11-10 | 11 / 5.0 | Nov 11 | Premium $7.99 · Yearly $59.99 · **25 more photos $4.99** | G7X, disposable, flash, digi looks + **Retake (6 new expressions; "Group pic? Tap the face you want to fix")**, AI Profile from selfies | 1 free look (prior research) | None | Yes |
| **Lenz AI** (prior research) | Błażej Sawicki | 2026-03 | ~114 | Jul | $5.99/wk–$69.99/yr | G7X look, "built on Nano Banana" | Hard paywall | None | Yes. TrustMRR $1.3K/30d, for sale (V Nov 11) |
| **flag7x** 6747452095 | Ranjha, Inc. | 2025-06-30 | 203 / 4.59 | Nov 15 | $4.99 · $19.99 · lifetime $24.99 | G7X camera | — | None | Filter |
| **Esti** 6457366208 | Prequel Inc. (Cyprus/US) | 2023-10-25 | 20,146 / 4.65 | Oct 26 | Weekly $4.99–6.99 · Yearly $39.99 · Yearly trial $14.99 | Film (Polaroid, VCR, Kodak, Super8), AI "photo booth", "flash", window shadows; credits for AI filters | Long questionnaire before paywall ("fill out an application just to get to a page that wants you to pay"); "40 credits a year" on annual | None | Hybrid (filters + AI credits) |
| **Tezza** 1393061654 | Tezza App LLC (US, founder-led) | 2018-07-07 | 47,852 / 4.74 | Nov 4 | $4.99/wk · $3.99–9.99/mo · $19.99–59.99/yr · "Ambassador" tiers | Presets, retro effects, story templates, batch | — | None | Mostly filters |
| **ReShoot** 6751296351 | HUBX (TR) | 2025-09-03 | 17,809 / 4.58 | Nov 2 | $7.99–13.99/wk · coins $2.99/$4.99 | AI face / "instant camera" effects | Trial → charge complaints | None | Yes |
| **Retake AI** 6466298983 | Deep Flow (UAE) | 2023-10-01 | 53,456 / 4.61 | Nov 5 | $4.99–14.99/wk · $59.99/yr | AI retouch from a selfie model | Trial → $14.99–20.99 charge complaints | None | Yes |

### 3b. Retro / digicam cameras (the free-download base)

| App | Developer | Released | Ratings | Upd | IAP (US) | Notes |
|---|---|---|---|---|---|---|
| **Dazz Cam** 1422471180 | DAZZ PTE (SG/CN) | 2018-08-17 | 118,135 / 4.75 | Nov 9 | Pro $6.99 (yr) · one-time $19.99 · cameras $0.99–2.99 | #21 free US. Applies looks to old photos too. Reviews 4.34 avg, 11% 1–2★. Cheap pricing makes users happy |
| **NOMO CAM** 1362548649 | Beijing Lingguang | 2018-04-22 | 48,155 / 4.66 | Apr 2026 | PRO $24.99/yr · cameras $0–1.99 | Mostly China |
| **1998 Cam** 1450480287 | AAAI Studio | 2019-02-01 | 40,451 / 4.80 | Oct 24 | $1.99–5.99/mo · $15.99–29.99/yr · lifetime $39.99 | |
| **Huji Cam** 781383622 | Manhole (KR) | 2017-09-28 | 12,002 / 4.22 | **Dec 2024 (dormant)** | "Extra Options" $0.99 | Original date-stamp disposable |
| **Kuji Cam** 1468247478 | 鑫 李 (CN indie) | 2019-06-15 | 121 / 4.64 | **Oct 2021 (dormant)** | $0.99/mo · $6.49/yr · $15.99 lifetime | Irrelevant now |
| **ism** 1580668065 | MWM (FR) | 2021-11-04 | 12,389 / 4.73 | Nov 13 | $3.99–7.99/wk · $19.99–29.99/yr | #18 free US. A portfolio app studio |
| **y2k: 2000s photo editor** 6753996237 | Abel Thomas Noble (indie) | 2025-10-20 | 13,239 / 4.83 | Nov 12 | $3.99/wk · $24.99/yr · $2.99 / $12.99 | Stickers + filters. Very loved (4.82 avg, 1% 1–2★). Cheap |
| **101cam** 6781998623 | SNOW Corp (Naver, KR) | 2026-07-10 | 603 / 4.81 | Nov 5 | $4.99/mo · $13.99/yr | Naver's digicam entry. Cheap |
| **Kapi Cam** 6740760807 | TETRAS.AI (SenseTime) | 2025-03-03 | 1,660 / 4.70 | Nov 13 | $4.99/wk · $9.99–12.99/mo · $69.99–89.99/yr · lifetime $149 | Big in SE Asia |
| **ProCCD** 1616113199 | 亚玲 查 | 2022-03-31 | 2,313 / 4.74 | Nov 12 | $2.99/wk · $5.99–8.99/yr · lifetime $13.99–17.99 | Has a 4-shot "Booth" mode (prior research) |
| **OldRoll** 1570093460 | 梓杰 张 | 2021-06-04 | 5,608 / 4.71 | Oct 27 | $4.49–4.99/mo · $12.99–19.99/yr · lifetime $17.99–27.99 | |
| **2AM CAM** 6793744610 | Aiden Magarian (indie) | 2026-08-27 | 48 / 4.81 | Nov 12 | **Paid $0.99** + cloud 64 GB–1 TB $1.99–14.99/mo | **Direct flash for night + "shared albums: one QR code, everyone's photos in everyone's roll… sharing until sunrise"**. Closest to the Digi Roll idea |

### 3c. Booth / strip apps

| App | Developer | Released | Ratings | IAP | Notes |
|---|---|---|---|---|---|
| **Licowa** 6667106950 | Shining Ai (CN/US) | 2024-10-10 | 4,547 / 4.82 | $4.99/mo · $33.99/yr | 4-shot booth + K-pop idol stickers + wallpapers. 2.8M Android installs (prior research) |
| **Mini Photobooth** 1342093386 | Minivan Labs | 2018-05-23 | 9,106 / 4.75 | Pro $44.99/mo · $269.99/yr | Event-operator booth (B2B) |
| **Touchpix** 1355372875 | Propfun | 2018-12-21 | 6,765 / 4.80 | $43.90/wk · $122.99/mo · $879.99/yr | Pro event booth (B2B) |
| **Pocketbooth** 385145330 | AI Photo Editor Lab SRL | 2010-09-13 | 2,200 / 4.50 | $4.99/wk · "Event Pack" $4.99 · packs $0.99 | Classic |
| **Sera** 6758673087 | Ayotunde Ojo (indie) | 2026-03-26 | 84 / 4.90 | $9.99/wk · $129.99/yr ($69.99 "limited") | "Split the strip, keep one, give one". "Booth mode" lighting is Pro |
| **ThisBooth** 6762100716 | DOFA Tech (TR) | 2026-04-15 | 35 / 4.89 | $3.99 / $4.99 / $29.99 | Print-ready strips, pose ideas |
| **IncrediBooth** 6799999961 | Hipstamatic (US) | 2026-11-06 | 6 / 4.5 | Unlimited $9.99 | 4 shots "ready or not"; map of 1,500 real booths. A known brand entering the space |
| **stripz** 6776776707 | Ripple Video LLC | 2026-06-24 | 34 / 4.65 | Free (no IAP) | **Daily group strip: everyone posts, or the strip never develops; streaks and nudges.** No update since Aug 11 |

### 3d. Social / event cameras

| App | Developer | Released | Ratings | IAP (US) | Mechanic |
|---|---|---|---|---|---|
| **Locket Widget** 1600525061 | Locket Labs (US, Matt Moss) | 2021-12-30 | 592,775 / 4.76 | Gold $1.99–4.99/mo, $16–36/yr | Home-screen widget photos; **must add 5 friends to use** (reviews); Celebrity; Rollcall; ads |
| **BeReal** 1459645446 | BeReal (Voodoo, FR) | 2020-01-08 | 1,163,550 / 4.77 | No IAP listed | Daily notification, dual camera |
| **Instants** 6756442328 | Instagram | 2026-05-12 | 26,398 / 4.75 | None | Ephemeral, no edits, Instagram login. Reviews: frequent "not available for this account" |
| **Lapse** 1636699256 | Lapse Ltd (UK) | 2022-07-28 | 118,320 / 4.75 (now only +4 in 5 days) | None | Disposable camera. **Social removed** (Dec 2025). Last update Dec 6, 2025 |
| **Dispo** 1491684197 | All Summer Long (US) | 2019-12-21 | 8,297 / 4.30 | Max $1.99–9.99/mo, $19.99–59.99/yr · cameras $0.99 | Develops next morning; faded |
| **POV** 1636032890 | Untitled Tech (US) | 2022-08-01 | 15,683 / **4.92** | More Participants $4.99–89.99 · Gold $54.99 | Host QR event; guests shoot limited "film"; reveal later |
| **Once** 6754265953 | 10xCompany | 2025-11-24 | 726 / 4.76 | Film: 10 participants $1.99 … 150 participants $49.99 | POV clone with tiered pricing |
| **Lense** 6444442256 | Rewaive (NL) | 2023-02-11 | 1,543 / 4.85 | Max 25 guests $4.99 … 200 guests $69.99 · video $9.99 | Event camera + camera-roll upload |
| **Party! Disposable Camera** 6504739136 | Hipstamatic | 2024-09-10 | 232 / 4.81 | Pass $1 · Deluxe $2–10 · Premium $49–99 · Club $19.99/yr | Event camera |
| **Retro** 6443709020 | Lone Palm Labs (US) | 2023-07-13 | 19,170 / 4.77 | Premium $1.99/wk, $4.99/mo, $35.99/yr | Weekly photo journal for friends; **4-friend gate**; print postcards. Picks up ex-Lapse users |
| **setlog** 6587576438 | New Chat Inc. | 2025-12-24 | 387 / 4.61 | None | Friends camera; charting in AU (#21) and CA (#44) |
| **Beam** 6760328464 | Breezi Inc | 2026-06-15 | 200 / 4.79 | None | Finds the photos your friends have of you |

### 3e. Big AI and editor platforms (can add any look overnight)

| App | Owner | US ratings | IAP (US) | Relevant |
|---|---|---|---|---|
| **EPIK** 1577705074 | SNOW / Naver | 54,985 | Pro $3.49/wk, $11.99/mo, $51.99/yr · **AI Christmas Limited Edition $0.99 · AI Christmas Early Bird $3.99 · Yearbook Express $4.99–9.99** | **Already sells one-off seasonal AI packs** (Christmas now, Yearbook before). This is the Party Pack model |
| SNOW / B612 | SNOW | 36,794 / 109,672 | VIP $8.99–9.99/mo, $39.99–69.99/yr + coin packs $1.49–6.99 | AI profile packs |
| Hypic | ByteDance | 17,332 | $6.99/wk · $6.99–10.99/mo · $69.99/yr | AI Flash, G7X2, photo-dump templates (prior research) |
| BeautyCam ("Digicam & Photo Editor") | Meitu | 22,757 | $6.99–7.99/wk · $11.99/mo · $44.99–59.99/yr | Renamed around digicam; booth mode |
| Meitu | Meitu | 80,438 | $8.99/wk · $11.99–13.99/mo · $41.99–59.99/yr | AI Flash; 19.83M paying subs globally (C, prior research) |
| Airbrush | Pixocial | 204,345 | $7.99/wk · $6.99–10.99/mo · $28.99–54.99/yr | "Relight" with a G7X flash preset (Jun 2026, C) |
| Facetune | Lightricks | 381,875 | $5.99–11.99 · $35.99–77.99/yr | #7 grossing US |
| Remini | Bending Spoons | 359,868 | Lite $4.99–7.99/wk · Pro $9.99/wk | |
| Lensa | Prisma | 418,216 | $2.99–4.99/wk · $29.99–49.99/yr · Magic Avatar packs $3.99–11.99 | The 2022 avatar spike, then fizzle |
| Photoroom | Photoroom | 231,754 | PRO $5.99–9.99/wk, $89.99/yr · Max $15.99–249.99 | Sample-image onboarding (prior research) |
| Picsart | PicsArt | 1,196,973 | Gold $4.99/wk, $57/yr · Pro $11.99/wk, $83.99/yr | |
| Glam AI | Glam Labs | Not found in US iOS search under that name [V] | — | arr.club claims about $6M MRR (E, prior research). Mostly Android |
| Ulike / 轻颜 | ByteDance | CN-only | — | Not a US factor |

**Rating velocity, Nov 11 → Nov 16 (prior research vs today) [V]**

| App | Change in 5 days | Reading |
|---|---|---|
| WayShot | 4,931 → 5,463 (**+532**) | Hottest US app in the niche |
| Dazz | +299 | |
| y2k | +81 | |
| 101cam | +34 | |
| POV | +33 | |
| Pecra | +16 | |
| Boothie | +2 | |
| Kapi | +2 | |
| Lapse | +4 | Dead |

---

## 4. Price map, US (what users already accept) [V]

| Model | Range seen | Who |
|---|---|---|
| Weekly sub | $1.99 (Retro) · $3.49 (EPIK) · $3.99 (y2k) · $4.99 (Tezza, Esti, Kapi, Pocketbooth) · $6.99 (Esti, Hypic) · $7.99 (Boothie Pro, Sparkle, ism) · $8.99 (Pecra) · **$9.99 (WayShot, Sera, Remini, Retake)** · $12.99–14.99 (ReShoot, Retake) | |
| Yearly sub | $13.99 (101cam) · $19.99–24.99 (Tezza basic, y2k, NOMO) · **$39.99 (Esti, Tezza Pro)** · $51.99 (EPIK) · $59.99 (Sparkle, Retake) · $69.99 (WayShot, Hypic, Kapi) · $89.99 (Pecra) · $129.99 (Sera) | |
| Credit packs | $2.99 (10, Boothie) · **$4.99 (25 photos, Sparkle)** · **$5.99 (25, Boothie)** · $9.99 (30 film shots, WayShot) · $11.99 (60, Boothie) · $12.99 (60, Empose) | |
| Seasonal one-off AI pack | **$0.99–3.99 (EPIK AI Christmas)**, $3.99–9.99 (EPIK Yearbook), $3.99–11.99 (Lensa avatars) | |
| Per-event (guest count) | $1.99 (10 people, Once) → $4.99 (25) → $14.99–24.99 (50) → $29.99–44.99 (100) → $49.99–89.99 (150–200+) | POV, Once, Lense, Party! |
| Lifetime / one-time | $13.99–39.99 | Dazz, 1998 Cam, ProCCD, OldRoll, flag7x |

**Digi's planned prices: $6.99/wk, $39.99/yr, Party Pack $5.99 for 25 (E)**
- They sit right in the middle. That's fine.
- **Sparkle already sells "25 more photos" for $4.99**, and EPIK sells a Christmas pack for $0.99–3.99. A $5.99 / 25 pack isn't cheap by comparison.
- **The event market prices by guest count** ($4.99 for 25 guests up to about $45 for 100). A **Digi Roll host fee by roll size** (for example 10 friends free, 25 friends $4.99) fits proven willingness to pay better than "host needs Plus".

---

## 5. Revenue evidence (graded)

| App | Number | Grade | Source |
|---|---|---|---|
| **Boothie** | Last 30d **$56,034** (+18.1%); 7d $11,815; all-time $204,854; MRR **$54,458**; **2,351** active subs; margin 55%. Monthly: Jun $4.7K, Jul $27.3K, Aug $43.7K, **Sep $43.4K (flat)**, Oct $56.4K, Nov 1–16 $29.3K. Daily $1.3–2.7K with weekend peaks. For sale at $1.5M (2.2×), 32 offers, listed Oct 9 | **V** (RevenueCat API) | https://trustmrr.com/startup/boothie.md |
| Boothie (where the money comes from) | #31 Photo grossing TR; not top 100 grossing Photo in US/GB/CA/AU/DE; ratings 40 US vs 261 TR (Nov 11) | V (charts) → E (mostly TR + Android) | Apple RSS |
| Boothie seller's comps | "Tezza $26M/yr, Prequel $26M/yr, Dazz Cam $11M/yr, WayShot $1.7M/yr" | **C** (seller, no source given; looks like Sensor Tower / AppMagic style) | same TrustMRR page |
| Lenz AI | $1.3K/30d, MRR $2.2K, 289 subs, for sale | V (Nov 11, prior research) | TrustMRR |
| WayShot | $85–100K/mo (Screensdesign) vs <$10K (AppGoblin) vs $1.7M/yr (Boothie seller) | E / C, conflicting. Chart #28 grossing US suggests mid six figures a month is plausible (E) | prior research |
| POV | $200K/mo (Screensdesign) vs <$10K/mo (AppGoblin) | E, conflicting | https://screensdesign.com/showcase/pov-disposable-camera-events · https://appgoblin.info/apps/1636032890 |
| Locket | Profitable, 14 staff, 90M+ downloads, about 9M DAU; ad revenue +87% in 5 months after Moloco SDK | C (founder / partner) | https://techcrunch.com/2025/11/03/lockets-social-app-is-picking-up-steam-with-gen-alpha · https://www.moloco.com/case-studies/locket-widget |
| BeReal | Bought by Voodoo for about €500M (Jun 2024) | C (press) | https://en.wikipedia.org/wiki/BeReal |
| Lapse | Raised $1.4M pre-seed, $11M seed (GV, Dec 2021), $30M (Greylock/DST, Feb 2024); no IAP; social shut down | C (press) | https://techcrunch.com/2024/02/27/lapse-the-app-turning-your-phone-into-an-old-school-camera-snaps-up-30m |
| Dispo | $20M at a $200M valuation (Feb 2021), then Spark pulled out after the Dobrik scandal | C (press) | https://petapixel.com/2021/03/22/dispo-loses-top-investor-and-dobrik-leaves-company-amid-controversy |
| Meitu | 19.83M paying subscribers (Sep 2026) | C (company filing via press, prior research) | prior pf-01 |

**Boothie read (E).**
- **September was flat.** Growth only resumed in October. That's a sign of content-driven (not organic-store) demand that needs constant feeding.
- **At 2,351 subscriptions and about $23/subscription/month,** these are mostly weekly plans, which churn fast. A buyer is paying for a content machine, not a durable product.

---

## 6. Review mining (US, most recent up to 150 per app; Nov 16) [V]

Theme counts come from keyword matching on title plus body. One review can hit several themes. "neg" means the review was 1–2★.

| App (n) | Avg | 1–2★ | Face changed / looks AI | Billing / trial / refund | Paywall / not free | Credits / limits | Slow / bugs | Social / friends | Praise |
|---|---|---|---|---|---|---|---|---|---|
| WayShot (150; Apr–Nov) | 2.25 | **67%** | 32 (27 neg) | **51 (46)** | 40 (32) | 20 (14) | 3 | 0 | 13 |
| Pecra (87; Apr–Nov) | 1.20 | **95%** | 11 (11) | 37 (37) | 16 (16) | 8 (8) | 7 | 0 | 1 |
| Esti (150) | 2.43 | 63% | 2 | 42 (35) | 37 (29) | 17 (12) | 5 | 2 | 18 |
| EPIK (150) | 2.49 | 60% | — | 30 (25) | 39 (32) | 12 (7) | 10 | 1 | 11 |
| Retake (150; Sep–Nov) | 3.29 | 41% | 4 | 32 (27) | 14 | 6 | 5 | 2 | 18 |
| ReShoot (150) | 4.17 | 19% | 4 | 16 (14) | 6 | 8 | 1 | 4 | 19 |
| Dazz (150) | 4.34 | 11% | 0 | 4 | 15 (5) | 9 (0) | 4 | 8 | **58** |
| y2k (150) | 4.82 | 1% | 0 | 5 | 5 | 1 | 3 | 3 | 47 |
| POV (150) | 4.67 | 7% | 0 | 2 | 2 | 3 | 3 | **100 (7)** | 30 |
| Locket (150; Nov 9–14) | 4.51 | 6% | 0 | 0 | 5 | 9 | 1 | 65 | 53 |
| Retro (150) | 4.52 | 7% | 1 | 0 | 9 | 4 | 1 | 76 | 39 |
| Lapse (150) | 2.93 | 45% | 0 | 0 | 2 | 6 | 4 | **53 (21)** | 21 |
| Instants (150) | 2.89 | 51% | 0 | 0 | 0 | 2 | 5 + many "not available" | 5 | 11 |
| Boothie (US n=1; 16 non-US read by hand) | — | ~75% of non-US | **7 of 16 = face changed / AI artifacts** | — | 4 "pay to use" | 4 (5/day, 22 h wait, "10 hours for more stars") | — | 0 | 3 (free filters praised) |
| Sparkle (8, launch week) | 5.0 | 0% | — | — | — | — | — | — | Likely friends and family |

### Pattern 1: AI camera-look apps are hated, and they still make money

**What users hate:**
- **The face changes.**
  - "it will make your face look ai… get the digicam instead" (WayShot, 1★)
  - "It makes me look subtly prettier (which i did not ask for i just wanted to fix the lighting) but it's not my face" (WayShot)
  - "$15 for ai to completely change your face" (Pecra)
  - "5 farklı efekt denedim hepsinde yüzümü değiştirdi" ("I tried 5 effects, every one changed my face"; Boothie TR)
  - "removed the option to reduce the intensity of their AI filters… full intensity completely changes the facial…" (Esti)
- **Trial billing.**
  - "canceled the trial the same day and was still charged" (WayShot)
  - "$69.99 for a year subscription… after I had cancelled during the 7 day free trial" (WayShot)
  - "They immediately charged me $20.99" (Retake)
- **Paying and still being limited.**
  - "THERES A LIMIT ON HOW MANY PICS YOU CAN EDIT" and "only lets you process 13 photos" for $15/mo (Pecra)
  - "Spent $13 on pro for the month and then it told me my monthly usage was up an hour later" (EPIK)
  - "if i'm already paying weekly… I shouldn't have to wait 10 hours to get more stars" (Boothie US)
  - "coins on top of Pro" (WayShot)
- **No way to try it.**
  - "I can't even try it without asking for a free 7 day trail" (WayShot)
  - "forces you to pay before using" (Pecra)
  - "about 2 filters that are free" (Esti)
- **Dark-pattern UX.**
  - "The SHEIN of photo apps… makes you spin a wheel" (WayShot)
  - "long intros… pay option… hidden" (WayShot)
- **Not disclosing AI.**
  - "never disclose this is generative AI" and "Did not appreciate the use of AI without consent" (WayShot)
- **Slow or failed renders that still use up credits.**
  - "fails to edit my photo and deducts my credits" (WayShot)
  - "stuck at 15% for hours" (Pecra)
- **"ChatGPT does it better and free."** This shows up in WayShot, Pecra and Esti reviews (e.g. "You're better off asking chat gpt").
- **Content blocks.** "can't process bikini pictures" (Pecra) means safety filters annoy people.

**What users love:**
- The G7X look when it works: "by far the closest I've found" (Pecra 5★), "I love the G7X feature" (WayShot).
- Free filters: "Filtrelere bayıldım… ücretsiz" ("I loved the filters… and they're free"; Boothie TR).

### Pattern 2: cheap or free non-AI cameras are loved

- **Dazz** (4.34 avg): "multiple cameras you can use for free without paying the premium"; "you can do it on photos you've already taken."
- **y2k** (4.82 avg): "rly cheap."

### Pattern 3: group and event cameras are loved for memories, not for looks

**POV** (4.67 avg):
- **The good:** wedding and bachelorette word of mouth. "We had 22 out of the 62 people use it."
- **The complaints are about friction, not price:**
  - "Once you scan the QR guests are forced to sign into their Apple ID which is too much of a friction point."
  - "7 steps to taking photos."
  - "images would lose their crispness… all blurry."
  - "had to keep reminding guests."

**Locket and Retro:**
- **Love:** private, friends-only, "my mom allowed this."
- **Hate:** the forced invite gate. "You need five friends just to log in" (Locket); "forcing me to add four people" (Retro).
- **Locket's audience is 12–13-year-olds** (in their own words).

### Pattern 4: killing the social layer kills love; losing photos kills trust

**Lapse** (2.93 avg) reviews today:
- "BRING BACK THE SOCIAL"
- "Lost all my pictures… you guys deleted all of my stuff in May" (user claim)
- "Took a bunch of photos on my birthday… Two weeks later and they are still missing"

**Lesson for Digi Roll:** a party roll is a promise to keep memories. Storage costs and reliability are product-critical.

**Privacy:** few direct mentions. Locket's 13 privacy hits are mostly positive ("safe"). Retake: "Now I can't delete my photos from the APP." A clear "delete after 24 h" message is a selling point, not a cost.

**Watermarks:** essentially never mentioned (1 hit, Dazz). Users don't care about a small free-tier watermark. **They care about face fidelity, honest limits and trial billing.**

---

## 7. Social cameras: what made them viral, what killed them

| App | Viral mechanic | Peak (C unless noted) | What killed or capped it | Money | Lesson for Digi |
|---|---|---|---|---|---|
| **Dispo** (2019–) | Celebrity launch (David Dobrik); photos "develop" at 9 a.m. the next day; invite-only rolls in 2021 | 1M downloads in weeks (2020); $20M at $200M (Feb 2021); 8M downloads, 1M MAU; monthly downloads 540K (May 2022) → 120K two months later | Founder scandal (investor pulled out, Mar 2021); the delay is novel once, then a chore; no reason to come back between parties | Subscriptions now (Max $1.99–59.99) [V]; small (8,297 US ratings) | The 9 a.m. reveal is a **launch hook, not retention**. Pair it with a reason to come back (the next party, a seasonal drop). Don't hang the brand on one face |
| **Lapse** (2021–) | Waitlist (150K); **must invite 5 contacts to post** (2023 re-launch); "friends not followers" | #1 US App Store, 218K downloads/day (Oct 2023); about 1.2M users | Downloads fell 70% within weeks (Appfigures, Nov 2023); invite gate seen as spam; social removed Dec 2025 because **photo storage cost too much**; users report lost photos | Never monetized social; $42M+ raised | Invite gates create spikes, then backlash. **Never make friends a precondition for the free value.** Budget storage per roll (or expire rolls) from day one |
| **Locket** (2022–) | **Home-screen widget** (iOS 14/16); organic TikTok (founder: no paid influencers); a 5-friend gate is still in place [V reviews]; Celebrity (Aug 2025), Rollcall (2025) | 2M+ downloads in the first week (#1, Jan 2022); 90M+ downloads; about 9M DAU; profitable with 14 people (Oct 2025) | Not dead. Skews Gen Alpha (about half of US users); some 2026 complaints about a new update | Locket Gold $1.99–4.99/mo [V] + ads (+87% in 5 months after Moloco) | A **daily surface** (the widget) is what sustains a friend camera. Digi has none; a party app is episodic. Don't expect Locket retention |
| **BeReal** (2020–) | One random daily notification; dual camera; campus ambassadors | About 15M DAU (Oct 2022), #1 US | Fell to about 6M DAU in 7 months; daily prompt became a chore; Instagram/TikTok/Snap cloned dual camera within months; sold to Voodoo for about €500M (2024) | No IAP [V]; ads under Voodoo | Notification-driven habits fade. **The big platforms copy any format in weeks** (now Instants) |
| **POV** (2022–) | Host creates an event → **QR code on tables** → guests shoot limited "film" → gallery reveals; weddings and bachelorettes | 15,683 US ratings at **4.92★**; 1M+ Android installs | Store chart presence is minor (#98 G-AU); reviews say friction (Apple ID / sign-in, venue signal, blurry downloads) | **Pay per event by guest count** ($4.99–$89.99) [V]; revenue estimates conflict | **The host pays, guests are free.** Event pricing by roll size is proven. The QR at a real party is the growth loop. Digi's AI looks are a natural upsell POV doesn't have |
| **Instants** (Meta, May 2026) | Rides Instagram login and the Instagram graph | #7 free Social US today; 26K US ratings in 6 months [V] | 51% 1–2★, mostly "not available for this account" bugs [V] | None | Confirms the threat: Meta copies casual friend-camera formats immediately. Fight on AI looks plus party keepsakes, not on "share casual photos" |

**Sources:**
- **Dispo:** https://www.businessinsider.in/tech/news/youtuber-david-dobrik-already-hit-1-million-downloads-on-his-new-app-that-makes-your-photos-look-like-they-were-taken-with-a-disposable-camera/articleshow/73180470.cms · https://petapixel.com/2021/03/22/dispo-loses-top-investor-and-dobrik-leaves-company-amid-controversy · https://digiday.com/marketing/dispo-hopes-to-stand-out-with-photo-as-social-media-giants-compete-with-video
- **Lapse:** https://en.wikipedia.org/wiki/Lapse_(social_network) · https://appfigures.com/resources/insights/20231117/5-lapse-loses-momentum-as-downloads-drop-70-percent · https://news.yahoo.com/lapse-photo-app-forced-users-172405122.html · https://techcrunch.com/2024/02/27/lapse-the-app-turning-your-phone-into-an-old-school-camera-snaps-up-30m · https://www.producthunt.com/p/lapse-3/lapse-a-cautionary-tale-for-social-products-that-prioritize-disposable-sharing
- **Locket:** https://techcrunch.com/2025/11/03/lockets-social-app-is-picking-up-steam-with-gen-alpha · https://techcrunch.com/2025/08/06/photo-sharing-app-locket-is-banking-on-a-new-celebrity-focused-feature-to-fuel-its-growth · https://omr.com/de/locket-social-app-tiktok/ · https://www.moloco.com/case-studies/locket-widget
- **BeReal:** https://en.wikipedia.org/wiki/BeReal · https://www.socialmediatoday.com/news/bereal-struggling-users-running-out-of-funding/710400/
- **Instants:** https://techcrunch.com/2026/05/13/instagrams-new-instants-feature-combines-elements-from-snapchat-and-bereal/ · https://alternativeto.net/news/2026/5/instagram-launches-instants-a-new-disappearing-photo-app-to-rival-snapchat-and-bereal/

**Caveat:** the Lapse "social removed Dec 2025" date comes from a Wikipedia article sourced to an Instagram post. Current reviews and the last app update (Dec 6, 2025) [V] support it. User reports of lost photos are C.

---

## 8. Gaps nobody fills (with evidence)

| # | Gap | Evidence | Who comes closest | Digi move | Strength |
|---|---|---|---|---|---|
| 1 | **Honest AI looks: face kept, clear count, try before paying** | 24–95% of reviews on AI-look apps complain about face, billing or limits (§6); "ChatGPT does it better" recurs | Nobody. Sparkle pitches "every take still looks like you" | Free sample transform before any paywall; a "your face stays yours" before/after slider and free redo; show the exact count ("25 digis"); no wheel or fake offers; simple trial terms | **8/10**. Real pain, cheap to do |
| 2 | **AI looks for the whole group / party** (not one selfie) | Every AI-look app is single-photo; Sparkle fixes 1 face in a group; no group strip from one photo found in 195 new apps | Sparkle (retake), Licowa / ThisBooth (non-AI strips) | 4-pose strip from one group photo; Christmas / NYE group looks | 7/10. Copyable in weeks by Boothie / Sparkle |
| 3 | **Event roll + AI looks** | POV / Once / Lense / Party! sell rolls by guest count but have no AI; reviews want better image quality ("blurry") | 2AM CAM (night flash + QR album), POV | Digi Roll with a QR / link, web join (no Apple ID, which fixes POV's #1 friction), develops at 9 a.m., optional AI "re-develop" of the best shots | 7/10. Proven willingness to pay |
| 4 | **Friends far apart → one group strip** | stripz does a daily group strip (no AI, tiny); Retro reviews: "long distance friends" | stripz | Each friend adds a selfie by link → one AI strip ("the group strip, even if we're apart") | 6/10. Novel; AI multi-face quality risk |
| 5 | **Seasonal party packs (one-off purchase)** | EPIK sells AI Christmas $0.99–3.99 and Yearbook packs; Lensa avatar packs made $37M+ in about 60 days (2022) | EPIK (single-selfie AI, not party) | Party Pack $5.99 timed to Thanksgiving / Friendsgiving, Christmas parties, NYE | 6/10 |
| 6 | **English-speaking US/UK market is under-served by Boothie** | Boothie isn't in US/GB top 100; WayShot owns the US with hated UX | WayShot | Aim US/UK content directly; a clean-paywall reputation | 5/10. WayShot's TikTok machine is strong |
| 7 | **Printable / keepsake strips** | ThisBooth, Sera, IncrediBooth, Retro (postcards) all push physical keepsakes; nobody does it for AI party strips | ThisBooth | Print-ready PDF (later: print-and-mail) | 4/10 for the contest |

**Not gaps (don't build):**
- **A single-selfie digicam filter.** 134+ clones, plus Meitu, Hypic, Airbrush and Google Photos.
- **A friends feed.** Locket, Instants, Retro and BeReal own it, and it needs a daily surface.
- **Invite gates.** Lapse backlash.

---

## 9. Threats (ranked)

| Threat | Likelihood (60 days) | Impact | Evidence | Mitigation |
|---|---|---|---|---|
| **TikTok / CapCut / Hypic ship a "digicam / booth strip" template** | Medium–high | High | Hypic already has AI Flash, G7X2 and photo-dump templates; CapCut #12 free US all-genre | Own the party roll + group social loop, not the look |
| **Instagram (Restyle, Instants) / Snapchat (Imagine lens) add flash / Y2K AI looks** | Medium | High | Instants #7 free Social US [V]; Restyle and Imagine exist (prior research) | Group strip + keepsake + party roll; no head-on look war |
| **Boothie's buyer or Sparkle adds group strips** | Medium (Boothie for sale; a buyer will push the US) | Medium | Sparkle already handles group faces; Boothie ships monthly | Speed; a US-English brand; honest pricing as reputation |
| **WayShot adds AI strips / party** | Medium | High (biggest US TikTok reach in the niche) | +532 ratings in 5 days; 5 "cameras" structure | Differentiate on trust (its 67% 1–2★ is your ad copy, without naming it) |
| **POV / Lense / Once add AI looks to event galleries** | Low–medium | Medium for Digi Roll | Natural upsell; POV has a 4.92★ base | Ship AI-first; web join without an Apple ID |
| **Hipstamatic (IncrediBooth + Party!) bundles booth + event** | Low–medium | Low–medium | IncrediBooth launched Nov 6, 2026; Party! launched Sep 2024 [V] | — |
| **Free general AI (ChatGPT / Gemini / Google Photos Remix)** | Certain | Medium | Reviews: "ChatGPT does it better" | One tap, strip format, group consistency, no prompt |
| **Apple 4.3 (spam / copycat) rejection** given 195 lookalikes | Medium | High for the contest | Clone wave | Lead with group / party features in screenshots and review notes |
| **Storage cost of Digi Roll** (Lapse's killer) | Certain over time | Medium | Lapse shut social over photo storage costs (C) | Expire rolls (30 days), keep only developed strips, host pays for bigger rolls |

---

## 10. What this changes in Digi's plan (E)

1. **Keep the positioning ("your party's photobooth").** The charts and reviews confirm that single-selfie digicam is saturated and resented. Party, group and event is the open space, and POV proves people pay for it.
2. **Make trust the product.**
   - Free sample transform before signup. The first real AI digi is free.
   - Before/after face check, plus "redo free if it's not you".
   - Plain counters ("18 of 25 digis left").
   - No spin wheels, no trial-by-default trap. This is the #1 complaint in every AI competitor.
3. **Pricing tweaks.**
   - Keep $6.99/wk and $39.99/yr. They're middle of the market.
   - Consider **Party Pack $4.99 / 25** to match Sparkle, or keep $5.99 but include a strip and a share page.
   - Price **Digi Roll by size** like POV/Once (free up to about 8 friends; $4.99 for 25; $9.99 for 50) instead of "host must have Plus".
4. **Digi Roll design rules from the graveyard.**
   - No invite gate on free value.
   - Web join with no Apple ID or sign-in.
   - Rolls expire, with a clear export.
   - The 9 a.m. develop is the hook; the next party plus a seasonal drop is the retention.
   - Never lose a photo. Lapse's 1★ reviews are about lost memories.
5. **Expect US distribution to be the hard part.** Boothie's verified revenue mostly comes from outside the US. WayShot owns US TikTok. Clone apps without distribution get 0–50 ratings.

---

## 11. Method and limits

**Method**
- Apple RSS top-grossing and top-free (limit 100) for US/GB/CA/AU, Photo (6008) and all apps, plus Social (6005), plus TR/DE Photo grossing. All pulled Nov 16 with 1.5 s sleeps.
- iTunes Search (20 keywords, US) and Lookup.
- apps.apple.com pages for IAP lists (the page shows up to 10 IAPs, so some lists are truncated).
- Apple customer-review RSS, most recent, up to 3 pages (150 reviews). Keyword theme coding.
- One public TrustMRR markdown page.
- WebSearch for press.

**Limits**
- **No Sensor Tower / AppMagic access**, so WayShot / POV / Dazz revenue is unverified.
- **Review themes are keyword counts,** not hand-coded. Directionally right; the counts are rough.
- **Boothie's US review count is too small** (1), so I read 16 non-US reviews by hand.
- **I did not open any app.** Onboarding and paywall patterns come from listings and reviews.
- **TrustMRR:** I only read the public Boothie page. TrustMRR asks not to scrape its marketplace, and guessed slugs for other apps returned 404.
- **Glam AI's** US App Store listing was not found by name.
