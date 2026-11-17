# 19 · App Store review mining: what 3,708 reviews of 30 rival apps say Digi should build

*Research date: Nov 17, 2026. US App Store only. Written for the owner of Digi (digi.pink).*

**Labels used in this chapter**
- **[V]** = I pulled or read it myself today from a primary source (Apple review RSS, the apps.apple.com review page, or the iTunes Lookup API).
- **[E]** = my estimate or my coding. Each one has a confidence level (high / med / low).
- **[C]** = a claim made by someone else that I could not check myself.

**Working files** (so anyone can re-check the numbers): `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/bible/rm19/`
- `corpus2.json`: every review used.
- `tagged.json`: the same reviews with their theme tags.
- `scripts/`: the scripts that fetch, merge, tag, count and sample.

---

## Key takeaways

1. **Surprise charges after a free trial are the worst thing in this market.** Reviews that mention a trial, a charge, a refund or a "scam" average **1.39★**, and **82% of them are 1★** (249 reviews) [V data, E coding, high]. In AI photo apps this is the #1 reason for 1–2★ reviews (26% of them). In the digicam apps that use a trial, the same story repeats with real prices: Dispo "$59.99 immediately", WayShot "$70", Kapi "78 dollars". Digi's 3-day trial is pre-selected, so this is Digi's biggest risk.

2. **In camera apps, the #1 reason for a bad review is a change to the pricing model.** I read 60 random 1–2★ reviews from the camera, social, event and booth apps and coded each one by hand. **13 of 60 (22%)** were about a free feature that became paid, a forced switch to a subscription, or "pay to save". Next came updates that removed features people loved (11 of 60), ads (9), lost photos (8) and crashes (8). Trial charges were only 3 of 60 here, because most camera apps don't run trials. [V, E coding, med]

3. **Free and generous looks earn the best reviews.**
   - Dazz (4.38★ across the 200 recent reviews in this sample, 12% 1–2★; its all-time store average is 4.75★) and Huji (4.26★ in the sample; store 4.22★) are praised again and again for being free: "It's free!!!!!!", "There is no ads".
   - The apps that took away free cameras got punished. Kapi: "randomly made like half the options cost money". OldRoll: "only about 5 filters for free". 0.3MP: "only 10 FREE PICTURES".
   - **211 reviews** praise an app for being free (coded tag), and the word "free" appears in 352 of the 3,708 reviews (including complaints).

4. **Losing photos is the most emotional complaint, and it kills social cameras.**
   - Lost or deleted photos appear in **32% of 1–2★ reviews for the social cameras** (Dispo, Lapse, Locket, Retro), against **3%** for the plain retro cameras.
   - Dispo: 51 mentions. Lapse: 27, after it deleted galleries on **May 31, 2026** (date from several user reviews; I found no official Lapse notice online).
   - Digi's "develops tomorrow" roll has to be built so that this can never happen.

5. **Group features drive love, and every extra step drives anger.**
   - Group, party or friends words appear in **42% of social-app 4–5★ reviews** and **75% of event-app 4–5★ reviews**.
   - The anger comes from gates:
     - Locket: "You need five freinds just to log in", plus a phone number is required.
     - POV: "we counted there are 7 steps to taking photos", plus guests are "forced to sign into their Apple ID".

6. **People hate AI face changes, and they hate AI jobs that fail after they pay.**
   - Face-change reviews average **1.72★** (76 reviews).
   - Pecra G7X, a paid AI digicam, has **95% 1–2★** in its last 87 reviews: "stay stuck at 26% for 2 days", "$15 for ai to completely change your face".
   - WayShot (65% 1–2★) is attacked for not saying it uses AI: "they never disclose this is generative AI based".

7. **Ads in a camera app destroy goodwill.** Ad complaints average **2.05★**. Remini (57 negative ad reviews), Dispo (33) and Retrica (16) are the examples. Twelve 4–5★ reviews praise an app *for having no ads*.

8. **The orange date stamp is a look, not a reason people review.** Only **43 of 3,708 reviews (1.2%)** mention it.
   - When they do, they ask for control: pick any date, show the time, change the format, stamp video too.
   - Or they are angry that it can't be removed, or that removing it costs money (Dispo, NOMO, Retrica).
   - So: put it on by default, and make it free to turn off and to edit.

9. **What users ask for most** (409 request-style reviews outside AI apps):
   - bring back a removed feature: 111
   - more free looks or a lower price: 104
   - sharing and friends: 91
   - account or backup so they never lose photos: 52
   - video: 45
   - importing camera-roll photos: 39
   - zoom, 0.5× or aspect ratio: 35

10. **Users name their own "fair price".** These are real lines from reviews:
    - "$1.99 for a full year is insane" (praise, 0.3MP)
    - "I wish the one time purchase was 10 dollars" (Dazz)
    - "I would rather pay $20 for lifetime"
    - "This feels like a $5 per year or $25 lifetime kind of app" (NOMO)

    Against those anchors, $39.99 a year is high for a *camera*. It is fine only if the paid part clearly feels like *more than a filter*, meaning the AI looks and the party roll.

---

## 0. What I corrected or sharpened from earlier chapters

| # | Earlier claim | What the reviews show | Source |
|---|---|---|---|
| 1 | "The orange date stamp… is table stakes" (02-competitors-retro-cams, §1 and §9) | It is a *look* people like, but it rarely drives reviews (43 of 3,708). It causes complaints when users can't turn it off or must pay to remove it. **Change:** on by default, free toggle, free custom date. Don't market it as the main hook. | Review RSS [V] |
| 2 | Dazz used as an example of "gating your own photos is hated" (02, §7 lesson 2) | Only 6 of Dazz's 15 paywall mentions are 1–2★. Dazz averages 4.38★ with 12% 1–2★. **"Try a premium camera, pay to keep the shot" is tolerated when the free cameras are good and clearly labelled.** It turns toxic when users can't tell what is free (OldRoll: "almost impossible to tell") or after they spend time editing (OldRoll: "i spent $15 editing only to find out u must pay for it to save"). | Review RSS [V] |
| 3 | Remini "73 (61)" ad complaints (03-competitors-ai-photo, §7) | That regex also matched "advertising/advertised", meaning marketing claims. With a stricter regex (ads, watch an ad, full-screen ads, no ads), I count **66 mentions, 57 of them in 1–2★ reviews**, in a similar 500-review window. The direction is the same; the number is a bit lower. | Review RSS [V] |
| 4 | Earlier chapters treat lost photos as a Dispo problem | It is a **category** problem. Lost photos appear in 32% of social-camera 1–2★ reviews. Lapse's May 31, 2026 gallery deletion produced reviews like "I lost all the photos I took from that trip". Huji (no account) loses photos when people change phones: "I REALLY wish there was a sign-in option". | Review RSS [V] |
| 5 | Trial charges were framed as an AI-app problem (03) | They also hit **digicam apps with yearly plans**: Dispo "$59.99 immediately after signing up", 1998 Cam "$32 subscription I didn't want", Kapi "78 dollars… free 3 day trial". Digi's 3-day trial puts it in this group. | Review RSS [V] |
| 6 | Pecra G7X listed as a hit (05-mrr-peaks: $88.5K MRR, Jan 2026 launch) | The revenue may be real, but the **last 87 US reviews average 1.20★ (95% 1–2★)**. They mention failed "develop" jobs, a 10-photo monthly cap, face changes and "$15… $90" prices. Treat Pecra as proof of **demand**, not as a model to copy. | Review RSS [V] |
| 7 | KD Pro was on the list of apps to mine | KD Pro Disposable Camera (id 1291297394) **returns nothing from the US or GB Lookup API today**, which matches chapter 02's finding. Its reviews can't be pulled, so I mined the active Gudak-style and event-roll apps (Party!, Once, Lense, POV) instead. | Lookup API [V] |

---

## 1. Method in plain words

**Which apps.** I used 30 apps in five groups:
- **retro cameras:** Dazz, Huji, NOMO, 1998 Cam, Kapi, OldRoll, ProCCD, CALLA, 0.3MP, Retrica, Kuji, Snap it
- **social cameras:** Dispo, Lapse, Locket, Retro (Lone Palm)
- **event rolls:** POV, Once, Lense, Party! by Hipstamatic
- **booths:** Pocketbooth, MY4CUT, Boothie, ThisBooth
- **AI "digicam" / photo apps:** Remini, Lensa, WayShot, Pecra G7X, BeautyCam, Sparkle

**Where the reviews came from.**
- **Apple's customer-review RSS** (US, most recent first) [V]. It gives up to 50 reviews per page and at most 10 pages.
  - Remini and Lensa: 500 each.
  - Most others: 150, the first 3 pages. Apple started returning empty pages to this IP partway through today, so deeper pages for the camera apps were cut off.
  - Some pages were pulled earlier today by other chapters' scripts. I merged everything and removed duplicates.
- **The apps.apple.com review page** for 10 small apps whose RSS was blocked [V]. It shows about 10 "featured" reviews per app (60 in total). These are not the most recent reviews, so I use them for quotes and wants and leave them out of the per-app averages.
- **Total: 3,708 reviews** written between Nov 2017 and Nov 15, 2026. 2,223 of them (60%) are from 2026.
  - By star rating: 1,922 five-star, 315 four-star, 242 three-star, 212 two-star and 1,017 one-star.

**Coding.** I used three layers.
1. **Keyword tags.** 40 themes, matched on the title plus the body. One review can carry several tags. This gives the counts.
2. **Spot checks.** For six themes I read random samples of 12–15 tagged reviews to see how many tags were right:
   - lost photos: 11 of 12
   - pay to save: about 13 of 15
   - billing: about 12 of 15
   - crash: about 11 of 15
   - AI face: about 11 of 15
   - ads: about 10 of 15

   **So treat the counts as ±25% [E, med].** Most errors are positive reviews like "doesn't change your face", which the face regex also catches. For that reason the complaint counts below are mostly given **for 1–2★ reviews only**, which is much cleaner.
3. **Hand coding.** I read **100 random 1–2★ reviews myself** (60 from camera, social, event and booth apps; 40 from AI apps) and gave each one *one* main reason. This is the cleanest view of *why* people leave [E, high for the direction, ±10 points for the shares].

**Limits.**
- The RSS only gives US written reviews, not all ratings. People who write reviews skew young and angry.
- Some apps' 150 reviews cover five years (CALLA), others five days (Locket).
- Apple's RSS sometimes returns pages out of order. Dazz's pages mixed March and November 2026.

---

## 2. The sample

| App | Group | Reviews | Avg ★ | 1–2★ | Window | Reviews per day (proxy for activity) |
|---|---|---|---|---|---|---|
| Remini | AI | 501 | 3.53 | 36% | Jun 13 – Nov 15, 2026 | 3.2 |
| Lensa | AI | 500 | 2.67 | 55% | Dec 2024 – Nov 11, 2026 | 0.7 |
| WayShot | AI | 159 | 2.33 | 65% | Aug 2025 – Nov 14, 2026 | 0.35 |
| BeautyCam | AI | 150 | 2.57 | 55% | May 2023 – Nov 2026 | 0.1 |
| Pecra G7X | AI | 87 | **1.20** | **95%** | Apr 27 – Nov 10, 2026 | 0.4 |
| Dazz Cam | Retro | 200 | 4.38 | 12% | Mar – Nov 15, 2026 | ~0.9 |
| Huji Cam | Retro | 150 | 4.26 | 10% | Oct 2025 – Nov 14, 2026 | 0.4 |
| 1998 Cam | Retro | 150 | 4.37 | 12% | Jul 2025 – Oct 2026 | 0.3 |
| 0.3MP Camera | Retro | 150 | 4.34 | 12% | Oct 2025 – Nov 2026 | 0.4 |
| Kapi Cam | Retro | 149 | 4.35 | 9% | Jun 2025 – Nov 2026 | 0.3 |
| CALLA CAM | Retro | 150 | 4.51 | 7% | 2018 – Oct 2026 | 0.05 |
| OldRoll | Retro | 150 | 3.88 | 19% | Jul 2024 – Oct 2026 | 0.2 |
| NOMO CAM | Retro | 150 | 3.13 | 42% | 2021 – Aug 2026 | 0.08 |
| Retrica | Retro | 150 | 2.89 | 51% | 2020 – Sep 2026 | 0.07 |
| ProCCD | Retro | 93 | 4.30 | 13% | 2022 – Nov 2026 | 0.06 |
| Locket | Social | 150 | 4.51 | 6% | **Nov 9 – 14, 2026** | **30** |
| Retro (Lone Palm) | Social | 150 | 4.52 | 7% | Feb – Nov 2026 | 0.55 |
| Lapse | Social | 150 | 2.93 | 45% | Apr – Nov 2026 | 0.7 |
| Dispo | Social | 150 | **1.84** | **76%** | Jul 2023 – Nov 8, 2026 | 0.1 |
| POV | Event | 150 | 4.67 | 7% | May 2025 – Nov 2026 | 0.3 |
| Once / Lense / Party! | Event | 10 each (web) | 4.4 / 4.3 / 4.4 | 10% each | featured | n/a |
| Pocketbooth / MY4CUT / Boothie / ThisBooth | Booth | 10 / 4 / 1 / 1 (web) | 3.0 / 4.5 / 1 / 2 | n/a | featured | n/a |
| Sparkle (new, Nov 10, 2026) | AI | 8 | 5.00 | 0% | Nov 10–12, 2026 | n/a |
| Snap it / Kuji | Retro | 10 / 5 (web) | 3.6 / 2.8 | n/a | featured | n/a |

Lifetime US rating counts (Lookup API, Nov 17, 2026) [V]:
- **Over 100K:** Locket 593,254 · Lensa 418,218 · Remini 359,977 · Lapse 118,321 · Dazz 118,201
- **10K–50K:** NOMO 48,154 · 1998 Cam 40,452 · Retrica 33,782 · BeautyCam 22,762 · Retro 19,247 · POV 15,707 · Huji 12,004 · 0.3MP 10,137
- **Under 10K:** Dispo 8,299 · OldRoll 5,609 · WayShot 5,590 · ProCCD 2,316 · Pocketbooth 2,200 · Kapi 1,660 · Lense 1,547 · Pecra 1,316 · Snap it 919 · CALLA 827 · Once 729 · Party! 232 · Kuji 121 · Boothie 40 · ThisBooth 35 · MY4CUT 33 · Sparkle 11

**How to read this.** A high lifetime rating (most apps show 4.5–4.9) hides what is happening now. Dispo shows **4.3 lifetime** but its last 150 written reviews are **1.84**. WayShot shows **4.73 lifetime** but **2.33** in its recent written reviews. One likely reason is that in-app rating prompts collect happy taps, while unhappy users write long reviews [E, med]. For Digi, watch the *written* review average every week, not the headline star.

---

## 3. Why people leave 1–2★: hand-coded main reasons

### 3a. Camera, social, event and booth apps (60 random 1–2★ reviews, read one by one) [V, E coding]

| Main reason | Count of 60 | Share | Typical line |
|---|---|---|---|
| **Pricing model changed** (free feature made paid, forced subscription, pay to save) | 13 | 22% | "they randomly made like half the options cost money" (Kapi, 2★) |
| **An update removed something loved** (including Lapse's social layer, 5 of these) | 11 | 18% | "lapse has been horrible ever since it lost the social part" (1★) |
| **Ads** | 9 | 15% | "Full screen ads. For a photo filtering app. D-E-L-E-T-E-D" (Retrica, 1★) |
| **Lost photos** | 8 | 13% | "it updated and deleted all of them 😭 literally sick to my stomach" (Dispo, 1★) |
| **Crash / slow / abandoned** | 8 | 13% | "Just updated to the latest version and now it won't even open" (NOMO, 1★) |
| **Trial or surprise charge** | 3 | 5% | "will offer free trial and then charge you for a year immediately" (Dispo, 1★) |
| **Login / account** | 1 | 2% | ProCCD lifetime member can't log in, no support reply |
| **Other** (friend gate, watermark, privacy, lost streak, confusing UI, off-topic) | 7 | 12% | "You need five freinds just to log in" (Locket, 1★) |

**What this means.** Three of the top five reasons are **things the company chose to do**: change the pricing, remove a feature, add ads. These are not hard engineering problems.

### 3b. AI photo apps (40 random 1–2★ from Remini, Lensa, WayShot, Pecra) [V, E coding]

| Main reason | Count of 40 | Share | Typical line |
|---|---|---|---|
| Crash / not working / slow | 8 | 20% | "It'll stay stuck at 26% for 2 days. Doesn't work even after you pay" (Pecra, 1★) |
| **Bad or failed AI result (not face)** | 7 | 18% | "Paid $15 just for the photos to never develop, just to process for days" (Pecra, 1★) |
| **Face changed / looks AI / AI not disclosed** | 6 | 15% | "Can't edit a photo without warping your face entirely" (WayShot, 1★) |
| **Trial / billing / "predatory"** | 6 | 15% | "I saw '7days free' then pay 5,99 week. But when i double tap they charged 16,99$" (Remini, 1★) |
| Feature removed or moved behind paywall | 5 | 13% | "Must pay now, no freebies" (Remini, 1★) |
| Ads | 4 | 10% | "TOO MANY ADS!!! … there is NO EXIT BUTTON AT ALL" (Remini, 1★) |
| Price | 1 | 3% | "wants 9.99 a week… no thank you" (WayShot, 1★) |
| Noise / foreign-language / unclear | 3 | 8% | |

**Bad or failed results plus face problems make up 13 of 40 (33%)**. That is the single biggest risk for Digi's paid AI looks. People pay, and the photo either never comes back or comes back as a stranger.

---

## 4. Theme counts across all 3,708 reviews

### 4a. How much each theme hurts (the "star penalty") [V data, E coding]

The average of all reviews is **3.52★**. Each row shows how many reviews carry the theme and their average stars.

| Theme | Reviews with it | Avg ★ | Share that are 1★ |
|---|---|---|---|
| **Trial / charge / refund / "scam"** | 249 | **1.39** | **82%** |
| Ad doesn't match the app ("nothing like the ads") | 31 | 1.52 | 77% |
| AI face change / AI slop | 76 | 1.72 | 68% |
| Sign-in / account / phone number | 79 | 1.86 | 63% |
| Lost photos | 112 | 1.93 | 62% |
| Can't save / export | 40 | 1.95 | 58% |
| Ads | 192 | 2.05 | 59% |
| Crash / freeze / bug | 234 | 2.14 | 53% |
| Credits / coins / limits | 45 | 2.20 | 56% |
| Subscription vs one-time ("already paid", "lifetime") | 128 | 2.23 | 57% |
| Price too high | 127 | 2.32 | 54% |
| Pay to save / pay for basics | 163 | 2.61 | 45% |
| "Since the update" / "bring back" | 119 | 2.63 | 39% |
| Quality (blurry, low-res) | 53 | 2.74 | 45% |
| Mentions "develop" / reveal / next day | 48 | 2.83 | 44% |
| Mentions the date stamp | 43 | 2.91 | 35% |
| Request language ("wish", "please add") | 420 | 3.32 | 24% |
| Video | 121 | 3.71 | 19% |
| Sharing (IG, Snap, story) | 198 | 3.88 | 19% |
| "Looks like a real camera" | 87 | 3.94 | 14% |
| Group / party / friends / wedding / trip | 426 | **4.14** | 13% |
| Nostalgia / vibe / aesthetic / Y2K | 249 | **4.28** | 11% |
| Easy / simple | 199 | **4.42** | 10% |

**How to read this.**
- Group use, nostalgia and "easy" sit with 4+★ reviews.
- Money surprises sit with 1★ reviews. So do photos that vanish and AI that changes faces.
- "Develop" reviews average only 2.83★. In Dispo, the waiting step was tied to ads ("watch an ad to develop the photo now… it won't work"). The mechanic itself is loved in event apps (§9).

### 4b. Per-app counts (all mentions, with 1–2★ mentions in brackets) [V data, E coding]

| App | Pay to save / basics | Trial / billing | Price high | Sub vs one-time | Ads | AI face | Crash | Lost photos | "Since update" | Sign-in |
|---|---|---|---|---|---|---|---|---|---|---|
| Dazz | 15 (6) | 5 (3) | 3 (1) | 3 (2) | 3 (0) | 0 | 5 (2) | 1 (1) | 1 (0) | 3 (2) |
| Huji | 3 (0) | 1 (1) | 0 | 1 (0) | 4 (1) | 0 | 8 (3) | **9 (3)** | 0 | 1 (0) |
| 1998 Cam | 4 (0) | 5 (2) | 2 (1) | 1 (0) | 8 (3) | 0 | 7 (5) | 1 (1) | 1 (0) | 0 |
| 0.3MP | 12 (4) | 2 (0) | 3 (1) | 6 (3) | 2 (1) | 0 | 2 (1) | 1 (0) | 0 | 0 |
| Kapi | 10 (3) | 1 (1) | 2 (1) | 3 (1) | 2 (0) | 0 | 2 (2) | 0 | 4 (3) | 0 |
| OldRoll | **21 (8)** | 7 (2) | 4 (2) | 8 (2) | 2 (2) | 0 | 8 (4) | 3 (2) | 5 (4) | 3 (0) |
| NOMO | 13 (7) | 6 (5) | 9 (4) | 9 (6) | 0 | 0 | **24 (16)** | 0 | 5 (1) | 7 (4) |
| Retrica | 5 (5) | 4 (3) | 4 (2) | 8 (6) | **20 (16)** | 0 | 14 (9) | 2 (2) | 8 (7) | 3 (0) |
| CALLA | 2 (0) | 0 | 1 (0) | 1 (1) | 8 (3) | 0 | 3 (1) | 1 (0) | 0 | 1 (0) |
| ProCCD | 9 (2) | 2 (2) | 2 (0) | 9 (1) | 0 | 0 | 2 (1) | 0 | 1 (1) | 1 (1) |
| Dispo | 11 (10) | 12 (11) | 5 (3) | 6 (6) | **37 (33)** | 0 | 33 (24) | **51 (47)** | 3 (3) | 9 (8) |
| Lapse | 1 (1) | 0 | 1 (0) | 3 (2) | 1 (0) | 0 | 6 (2) | **27 (18)** | **51 (21)** | 6 (5) |
| Locket | 1 (0) | 0 | 3 (0) | 0 | 0 | 1 (0) | 1 (0) | 0 | 2 (2) | 6 (2) |
| Retro | 3 (1) | 0 | 4 (1) | 1 (0) | 5 (0) | 3 (1) | 1 (0) | 3 (0) | 1 (0) | 1 (1) |
| POV | 0 | 2 (1) | 4 (3) | 9 (2) | 2 (0) | 0 | 3 (1) | 0 | 0 | 6 (4) |
| Remini | 11 (10) | 19 (19) | 27 (19) | 9 (8) | **66 (57)** | 14 (12) | 16 (14) | 1 (0) | 4 (1) | 3 (3) |
| Lensa | 9 (7) | **80 (76)** | 22 (18) | 27 (23) | 2 (1) | 8 (5) | **74 (53)** | 4 (3) | 26 (14) | 12 (11) |
| WayShot | 16 (10) | **50 (46)** | 18 (13) | 4 (4) | 7 (6) | **32 (30)** | 4 (2) | 1 (0) | 0 | 13 (13) |
| Pecra G7X | 7 (7) | **31 (31)** | 5 (5) | 2 (2) | 7 (7) | **16 (16)** | 6 (6) | 0 | 0 | 0 |
| BeautyCam | 8 (7) | 20 (19) | 7 (7) | 13 (12) | 13 (9) | 0 | 8 (3) | 1 (1) | 5 (2) | 4 (4) |

### 4c. What share of 1–2★ reviews each theme explains, by group [V data, E coding]

| Theme | Retro (284 negative) | Social (201) | AI (725) |
|---|---|---|---|
| Pay to save / basics | **13%** | 6% | 6% |
| Trial / billing | 7% | 5% | **26%** |
| Price too high | 4% | 2% | 9% |
| Sub vs one-time | 8% | 4% | 7% |
| Ads | 9% | **16%** | 11% |
| AI face | 0% | 0% | 9% |
| Crash / bug | **16%** | 13% | 11% |
| Lost photos | 3% | **32%** | 1% |
| "Since update" / removed | 6% | 13% | 2% |
| Sign-in / account | 2% | 8% | 4% |

The event and booth groups had only 13 and 6 negative reviews. Of the 13 event negatives, 4 are about sign-in. That is small, but it matches the POV quotes in §9.

---

## 5. Pricing complaints, in depth

### 5a. Trial charges

**Every app that runs a free trial on a yearly plan gets the same 1★ review.** These are real quotes [V]:
- "Signed up for the 3 day free trial, it charged me $59.99 immediately after signing up. SCAM." (Dispo, 1★, Mar 2025)
- "app asks you when you start your 3 day free trial when you'd like to be reminded… I never got the notification and got charged" (Dispo, 1★, Aug 2026)
- "I accepted the free trial and it said it would remind me when to cancel it. IT DID NOT AND IT TOOK MY $70" (WayShot, 1★, Sep 2026)
- "I payed 78 dollars for this pp with just filters. It said I had a free 3 day trial." (Kapi, 1★, Mar 2026)
- "now I'm stuck paying a $32 subscription I didn't want" (1998 Cam, 3★, Jul 2026)
- "I saw '7days free' then pay 5,99 week'. But when i double tap they charged 16,99$" (Remini, 1★, Sep 2026)

**Two lessons.**
1. A promised reminder that doesn't arrive is worse than no promise. Two of these quotes name the broken reminder.
2. Many reviewers are young. They read "$0 today" and miss the yearly price.

For the contest, every refund costs profit, and every 1★ review lowers conversion [E, high].

### 5b. "Fair price" anchors written by users [V]

| What users said | App, ★ | Reading |
|---|---|---|
| "only 1.99 for a full year is insane… i love everything" | 0.3MP, 5★, Jun 2026 | A tiny yearly price is praised |
| "I would rather pay $20 for lifetime use than have to pay a subscription for a camera filter" | 0.3MP, 1★, Sep 2026 | Wants a one-time option |
| "I wish the one time purchase was 10 dollars tho" | Dazz, 5★, Sep 2026 | Dazz Pro lifetime is $19.99 |
| "i dont want to pay 20 dollars for the pro though" | Dazz, 5★, May 2026 | |
| "It's $5.99 annually or $15 lifetime. I think both prices are very fair" | ProCCD, 5★, Apr 2025 | |
| "This feels like a $5 per year or $25 lifetime kind of app" | NOMO, 3★, Jul 2026 | |
| "pricing is insane at $10/mo or $150 lifetime, especially when lifetime was originally $15.99" | Kapi, 3★, Dec 2025 | A price hike punished |
| "Not worth $60" | Dispo, 1★, May 2025 | |
| "it does cost money $69 a year… but it makes your picture amazing" | WayShot, 5★, Oct 2026 | AI looks can carry ~$70/yr *if the result is good* |
| "It's definitely worth the small price" | Sparkle, 5★, Nov 2026 | |

**Reading (E, med):**
- For a *filter camera*, users anchor at **$2–25**.
- Digi's $39.99 a year is only defensible because the paid tier includes **AI re-light and party features**. The paywall must sell those, not "more filters".
- The $5.99 Party Pack sits inside the range users already call fair. It is the safest first purchase.

### 5c. Paying twice: a subscription plus coins

- "Whats the point of paying a monthly or weekly subscription if you still have to buy in app coins in order to edit a photo?? It cost 50 coins to edit each photo and you get 1500 coins for 9.99" (WayShot, 3★, Nov 2026)
- "It's not right to have to pay for the app & buy coins to use it too" (WayShot, 1★, May 2026)
- "I paid for the annual cost, and now… It is now required to buy tokens to use" (Lensa, 2★, Jun 2026)
- "bought the 1 month subscription for it to only let me do 5 photos before telling me that's all" (Pecra, 1★, Jun 2026)
- "if i'm already paying weekly to use this app i shouldn't have to wait 10 hours to get more stars" (Boothie, 1★, Nov 13, 2026)

**For Digi:** "digis" credits on top of a subscription is exactly this pattern. It works only if:
- the paywall says, before purchase, **how many digis per month Pro includes**, and
- every AI button shows its cost ("2 digis").

### 5d. Locking things people already had

- "Bought dozens of filters… now I'm stuck having to pay a subscription" (Hipstamatic, cited in chapter 02)
- "the 503CW since i got this app in 2022… Today i opened the app and suddenly its a VIP/pro camera?" (OldRoll, 2★, Jan 2025)
- "i wish nokia was free like it used to be 🥀" (Kapi, 5★, Jun 2025)
- "including features that used to be free under the paid membership is ridiculous" (Dispo, 1★, Sep 2023)

**Rule for Digi:** whatever is free on launch day stays free for that user forever.

### 5e. Make free vs paid obvious

- "I'd use it more often if they LABLED what was free and what required the subscription" (OldRoll, 3★, May 2026)
- "please box all the free ones together so I know which one is VIP" (OldRoll, 4★, Feb 2025)
- "a little confusing on what's free or not" (Dazz, 4★, Oct 2026)
- A good pattern: "I like that I can try every camera even without premium you get free 3 passes" (Kapi, 4★, Jul 2025)

---

## 6. Ads

- **192 reviews** mention ads, averaging 2.05★. Twelve 4–5★ reviews praise having *no* ads.
- The ads that hurt most:
  - ads before saving or developing (Remini: "Ad to edit, ad to save. And the first ad never works")
  - ads while scrolling your own photos (Dispo: "a non-skippable ad every 3 photos you swipe through")
  - creepy or sexual ads (Huji in chapter 02; Remini, Aug 2026: "DISGUSTING SEXUAL ADS"; 1998 Cam: "the temu ads are weird pictures and uncomfortable pictures")
  - brand tie-ins inside the camera (NOMO's McDonald's cameras: "introducing mcds advertising into my cam app")
- Praise: "There is no ads which I'm so grateful for" (Dazz, 5★); "doesn't put an annoying watermark or have ads" (Dazz, 5★); "there is not constant annoying adds !!" (Huji, 5★).

**For Digi:** no ads, and say it in the first lines of the store page. The audience is teen-heavy (Locket and Huji reviewers often say "I'm thirteen", "strict parents"), so ad-network risk is also brand risk.

---

## 7. AI face complaints and failed AI jobs

**Volume.** 76 reviews mention face change or "AI slop" (1.72★ average):
- WayShot: 32 (30 negative)
- Pecra: 16 (16 negative)
- Remini: 14
- Lensa: 8

**What exactly upsets people** [V]:
- **Unasked beautifying:** "It makes me look subtly prettier (which i did not ask for i just wanted to fix the lighting) but it's not my face" (WayShot, 1★, Oct 2026)
- **The digicam look specifically:** "Tried the digi and digi cam filters… Made all my pictures look super fake, changed my face… like a cartoon" (WayShot, 1★, Jul 2026)
- **Undisclosed AI:** "No where does it disclose that the app uses AI" (WayShot, 1★); "Maybe mention your app is an AI photo editor?" (WayShot, 1★, Oct 2026)
- **Unwanted additions:** "The filter made my face completely different/added lashes to my face which I did not want. I just wanted the canon effect." (Pecra, 1★, Jun 2026)
- **Group photos:** "kept changing group photo completely!!" (Remini, 3★, Nov 2026); "Shuts down when you try to use it or have 3+ people in the picture!" (Lensa, 1★, Aug 2026)

**What earns praise** [V]:
- "other AI products kinda change my face but this app doesnt. i love this." (WayShot, 5★, Oct 2026)
- "this app has filters that don't affect the face, and that was the problem [with others]" (Sparkle, 5★, Nov 2026)
- "i like the new features they allow. (being able to pick how heavy the filter is)" (WayShot, 4★, Oct 2026)
- A 5★ WayShot reviewer asked for a "slider or setting to set the AI strength" (Nov 2025)

**Failed "develop" jobs.** This is Pecra, an app that uses the same "develop" word Digi plans to use:
- "My photos never developed, just process for days" (1★, Oct 2026)
- "it gives you an 'error. Cannot develop photo' every time you try and then prompts you to purchase it again" (1★, May 2026)
- "stay stuck at 26% for 2 days" (1★, May 2026)

**For Digi:** AI looks must:
- (a) keep faces, with a strength slider;
- (b) say "AI" on the button and in the store text;
- (c) finish in seconds, or **refund the digis automatically** and say so on screen.

---

## 8. Bugs and lost photos

**Lost photos: 112 mentions, 1.93★.** The causes in users' own words [V]:
- **App update or migration:** "I took pictures literally last night after updating my app and watched the timer on them go down as it was 'developing' and they're gone" (Dispo, 1★, Nov 8, 2026). "Sadly not every user was notified of the gallery being permanently deleted by May 31 2026" (Lapse, 1★, Jul 2026)
- **Uninstall or new phone, no account:** "I deleted the app because I didn't have enough storage… it lost all of my data and pictures" (Huji, 2★); "We need a user and password for it so we don't lose all of our photos when we buy a new phone" (Huji, 4★, Nov 2025)
- **Deleting the app wipes photos:** "whenever I went to delete it, it said that deleting it will cause it to remove all of my photos permanently" (Dispo, 1★, Mar 2026)
- **Crash before saving:** "Twice now it has deleted a whole nights worth of photos. Before I have had time to go through and save them to my camera roll" (Lapse, 2★, Jun 2026); "the ad froze halfway… I closed the app and lost the photos I just took" (MY4CUT, 3★)
- **Not saved where users expect:** "I saw that they were stored in temporary files that couldn't be viewed" (Dazz, 1★, Apr 2026)

**Crashes: 234 mentions.**
- NOMO crashes on iOS 26.4: "App keeps crashing in iOS 26.4" (1★, Apr 2026).
- Huji's full-screen viewfinder and flash break on iPhone 16 Pro with iOS 26.3.
- Lensa crashes on group photos.

New iOS versions break camera apps. Digi needs a test pass on every iOS point release.

---

## 9. Social, group and event apps: what helps and what blocks

**What people love** (event 4–5★, 75% mention group words) [V]:
- "One of the most fun things about this is not being able to see the photos right away. The old school anticipation" (Party!, 5★, Mar 2025)
- "you don't see the photos taken until later. So you stay focused on the actual fun" (Party!, 5★, Sep 2024)
- "Made it a surprise to release the photos the day after all of the events. It was so fun." (Once, 5★, Oct 2026)
- "perfect for parties and group settings where I can just pass my phone around… especially with the flash, are PERFECT" (Lapse, 5★, Oct 2026)
- "We had 85 guests… we still ended up with over 450 candid photos" (POV, Aug 2026, cited in chapter 04)

**What blocks them** [V]:
- **Steps:**
  - "From the time that someone scans the QR code I think we counted there are 7 steps to taking photos including giving away personal info" (POV, 2★, Nov 2025)
  - "guests are forced to sign into their Apple ID which is too much of a friction point" (POV, 2★, May 2026)
  - "Pretty misleading with the no download advertising when you have to make an account" (POV, 1★, Sep 2026)
- **Friend gates:**
  - "You need five freinds just to log in and I have to use friends I barely know" (Locket, 1★, Nov 2026)
  - "forcing me to add four people before I can even use the app. Major detractor." (Retro, 2★, Sep 2026)
  - "the needing to add three people is ridiculous… I feel like I am selling my friends out" (Retro, 3★, Sep 2026)
- **Phone number only:**
  - "I'm thirteen and don't have a phone… please make it optional" (Locket, 1★, Nov 14, 2026)
  - "You should let people with emails instead of phone numbers have Locket" (Locket, 4★)
- **Paying per scan:** "only 7 of 110 people posted 21 pictures… the app still counts a blank read against you. $15 for 21 pictures." (Lense, 2★, Jun 2025)
- **Host controls missing:**
  - "There's no way for an accidental photo to be deleted by the host after the event ends" (Party!, 5★, Sep 2026)
  - "It doesn't disclose upfront you can't UPLOAD photos after the event… Allowing guests to upload photos later as an option for the host to toggle" (Once, 4★, Sep 2026)
- **Blurry party shots:**
  - "a lot of the pictures come out blurry. The shutter speed on the app is very slow… in a party setting… people are moving around" (Party!, 3★)
  - "Fun but blurry" (Lense, 4★)
  - "Majority of the photos were blurry" (POV, 3★)

**Lapse is a warning.**
- 51 of its 150 recent reviews say "bring back" or "since the update".
- Most want the social layer back: "i live in a small town and most teens in my town used that to connect!" (4★, Nov 2026).
- Removing a loved social feature produced months of 1★ reviews. The app is still installed for its look: "The only reason I still have it is simply because I like the old filter."

**For Digi:** a shared roll is something you can't take away later. Launch it small, and keep it.

---

## 10. Booth apps (Pocketbooth, MY4CUT, Boothie, ThisBooth)

The booth reviews are few (16), but each one is specific [V]:
- **Simple and nostalgic beats feature-heavy.** "Before the latest update… 4 flashes, varying filters… Now opening this app feels like every other photo app… I don't want to create events to use it. I want to take goofy photostrips with my kids" (Pocketbooth, 5★, Jun 2025). Also: "Just open the app, choose my frames and shoot!… Now… you have to jump through so many hoops" (Pocketbooth, 1★, Oct 2025).
- **Event mode basics:** "It should have a standby screen for people to come in and press start" (Pocketbooth, 1★, Sep 2026); "The one thing missing is an on screen countdown" (Pocketbooth, 4★)
- **Layout for groups:** "I wanted to be able to turn my device in order to get a layout profile for the photo strips so that I could fit 2-3 people in a shot" (Pocketbooth, 3★)
- **Print quality:** "I only wish the images were higher resolution… too small for an oversized print" (Pocketbooth, 4★)
- **Save first, ads never:** "Wish they had a camera storage in app or at least saved the photos to camera roll immediately" (MY4CUT, 3★)
- **Love:** "It really feels like you're at a real Korean photo booth" (MY4CUT, 5★, Apr 2026); "perfect for creating your own DIY photo booth!" (MY4CUT, 5★)

---

## 11. Wants, ranked

These counts come from 409 reviews outside the AI apps that contain request language ("wish", "please add", "should add", "bring back"). One review can count in several rows [V data, E coding].

| Rank | Want | Reviews | Where most come from | Digi v1? |
|---|---|---|---|---|
| 1 | Bring back an old version or feature (mostly Lapse social) | 111 | Lapse 67, Retro 11, Dispo 8 | Lesson, not a feature: don't remove things |
| 2 | More free looks / cheaper / one-time option | 104 | OldRoll 19, Kapi 9, Dispo 9, NOMO 9 | Yes: generous free set + Party Pack |
| 3 | Sharing / friends / shared roll | 91 | Lapse 31, Retro 16, Locket 15 | Yes: rolls |
| 4 | Account / backup / restore photos | 52 | Lapse 15, Dispo 8, Huji 4 | Yes: Sign in with Apple, optional, plus cloud copy of rolls |
| 5 | Video (longer, with audio) | 45 | Retro 11, 0.3MP 6, Lapse 5, Dazz 4 | v1.1 (short clip with date stamp) |
| 6 | Import / edit camera-roll photos | 39 | Dispo 7, Huji 5, POV 4 | Yes, for AI looks; free for 1–2 classic looks |
| 7 | Zoom / 0.5× / aspect ratio / landscape | 35 | Lapse 13, Huji 10 | Yes |
| 8 | More filters / cameras / themes | 22 | NOMO, Dazz, Retrica | Weekly drops |
| 9 | Hardware button / widget / quick launch / Watch | 22 | Dispo 7, Lapse 3 | Camera Control + Action Button + lock-screen widget |
| 10 | Quality / higher resolution | 18 | Lapse 5, 0.3MP 3 | Full-res export |
| 11 | Timer / countdown / burst / Live | 18 | Retro 4, Dispo 3, Pocketbooth 2 | Countdown in booth + timer |
| 12 | No phone-number login / email option | 13 | Locket 3, Dispo 3, NOMO 3 | Yes: no phone number needed |
| 13 | Date stamp control (custom date, time, format, on video) | 9 | Huji 3, CALLA 2, Dispo 2 | Yes |
| 14 | Flash control (brightness) | 9 | Lapse 4, Huji 2 | Yes: flash strength |
| 15 | Front camera / selfie / flip | 9 | Huji 4, Pocketbooth 2 | Yes |
| 16 | Batch save / select all | 9 | Dispo 5 | Yes |
| 17 | Preview a look before shooting | 4 | Dazz, Huji, CALLA | Yes: live preview |

Some exact lines behind these rows [V]:
- "PLEASE PLEASE PLEASE ADD VIDEO RECORDING I BEG OF YOUUUUUU 🥹🤞" (Huji, 4★)
- "it should have 0.5 like the actual camera because 0.5 makes everything better so if it had 0.5 this would be 5 stars" (Huji, 3★)
- "iphone 18 flash is way too bright, all images no matter the lighting come out oversaturated" (Lapse, 5★, Nov 2026)
- "I want to be able to change the date to whatever I want but I can only change it to 1998 and the current date" (Huji, 4★)
- "i wish it would have an option to have the time instead of just the date" (Huji, 4★)
- "I wish you can superimpose the date on the video" (Dazz, 5★, Nov 2026)
- "Would be great if you could use the camera control button on newer iPhones" (Lapse, 4★)
- "Please make this work with the action button" (Huji, 4★)
- "I have to scroll through each individual picture and press download. I wish you could select all" (Huji, 4★)

---

## 12. What 4–5★ reviews praise

From 2,237 reviews rated 4–5★ [V data, E coding]:
- **Group use:** 42% of social and 75% of event positives.
- **Nostalgia / vibe / Y2K:** 13% of retro positives.
- **Free:** 8% of retro positives. Examples: "It's free!!!!!!", "all the necessities are free".
- **"Looks like a real camera":** "Deadass I have an actual digital camera and I use this app more" (Dazz, 5★); "it looks so realistic to a real digicam and even has a flash!" (Huji, 5★).
- **Saves money on a camera:** "Wanted a $1k fujifilm camera. Got KAPI instead." (Kapi, 5★); "The app is just like a digital camera but you don't have to pay $500+!" (1998 Cam, 4★); "Save $1000 and get this instead of a canon" (Sparkle, 5★).
- **Social proof:** "so many people asked where i got the camera. i just told them 'it's an app actually'" (Dazz, 5★); "I've gotten a lot of compliments… and asked many times what filter/app I use" (Dazz, 5★); "Everytime I take a pic with this app I always get compliments" (Huji, 5★).
- **TikTok as the source:** "just go on TikTok and find dazzcam settings" (Dazz, 5★); "I came across Once on TikTok" (Once, 5★).

**Copy note.** The words users choose themselves are "digicam vibes", "like a real digital camera", "no ads", "free", "insta dumps", "y2k" and "don't need to buy a camera". Use these in store text and in ads.

---

## 13. Quote bank (52 verbatim quotes)

All quotes are copied exactly from US App Store reviews [V]. "…" marks a cut. The date is the review date.

| # | App | ★ | Date | Theme | Quote |
|---|---|---|---|---|---|
| 1 | Dispo | 1 | 2025-03 | Trial | "Signed up for the 3 day free trial, it charged me $59.99 immediately after signing up. SCAM." |
| 2 | WayShot | 1 | 2026-09 | Trial | "it said it would remind me when to cancel it. IT DID NOT AND IT TOOK MY $70" |
| 3 | Kapi | 1 | 2026-03 | Trial | "I payed 78 dollars for this pp with just filters. It said I had a free 3 day trial." |
| 4 | Remini | 1 | 2026-09 | Trial | "I saw '7days free' then pay 5,99 week'. But when i double tap they charged 16,99$" |
| 5 | 1998 Cam | 3 | 2026-07 | Trial | "now I'm stuck paying a $32 subscription I didn't want" |
| 6 | 0.3MP | 5 | 2026-06 | Fair price | "only 1.99 for a full year is insane." |
| 7 | 0.3MP | 1 | 2026-09 | One-time | "I would rather pay $20 for lifetime use than have to pay a subscription for a camera filter" |
| 8 | Dazz | 5 | 2026-09 | One-time | "I wish the one time purchase was 10 dollars tho." |
| 9 | NOMO | 3 | 2026-07 | Fair price | "This feels like a $5 per year or $25 lifetime kind of app." |
| 10 | Kapi | 3 | 2025-12 | Price hike | "pricing is insane at $10/mo or $150 lifetime, especially when lifetime was originally $15.99." |
| 11 | WayShot | 3 | 2026-11 | Double pay | "Whats the point of paying a monthly or weekly subscription if you still have to buy in app coins" |
| 12 | Boothie | 1 | 2026-11 | Double pay | "if i'm already paying weekly to use this app i shouldn't have to wait 10 hours to get more stars" |
| 13 | Kapi | 2 | 2025-09 | Paywall moved | "they randomly made like half the options cost money and i just think thats stupid." |
| 14 | OldRoll | 2 | 2025-01 | Paywall moved | "Today i opened the app and suddenly its a VIP/pro camera?" |
| 15 | OldRoll | 1 | 2026-03 | Pay to save | "i spent $15 editing only to find out u must pay for it to save…." |
| 16 | OldRoll | 3 | 2026-05 | Label it | "I'd use it more often if they LABLED what was free and what required the subscription" |
| 17 | 0.3MP | 1 | 2026-03 | Free limit | "I find it outrageous that you have only 10 FREE PICTURES/VIDEOS" |
| 18 | Dazz | 5 | 2026-10 | Free love | "And guess what? It's free!!!!!!" |
| 19 | Dazz | 5 | 2026-09 | No ads | "There is no ads which I'm so grateful for" |
| 20 | Remini | 1 | 2026-10 | Ads | "Ad to edit, ad to save. And the first ad never works so you need to watch another ad again." |
| 21 | Dispo | 1 | 2025-08 | Ads | "Getting served a non-skippable ad every 3 photos you swipe through!" |
| 22 | Retrica | 1 | 2021-03 | Ads | "Full screen ads. For a photo filtering app. D-E-L-E-T-E-D" |
| 23 | NOMO | 1 | 2023-06 | Ads | "theyre purposeless cameras introducing mcds advertising into my cam app" |
| 24 | WayShot | 1 | 2026-10 | AI face | "It makes me look subtly prettier(which i did not ask for i just wanted to fix the lighting) but it's not my face." |
| 25 | WayShot | 1 | 2026-07 | AI face | "Made all my pictures look super fake, changed my face… just made it look like a cartoon" |
| 26 | Pecra G7X | 1 | 2026-06 | AI face | "added lashes to my face which I did not want. I just wanted the canon effect." |
| 27 | WayShot | 1 | 2026-10 | AI disclosure | "Maybe mention your app is an AI photo editor?" |
| 28 | Pecra G7X | 1 | 2026-05 | Failed job | "It'll stay stuck at 26% for 2 days. Doesn't work even after you pay" |
| 29 | Pecra G7X | 1 | 2026-10 | Failed job | "Paid $15 just for the photos to never develop, just to process for days." |
| 30 | Remini | 3 | 2026-11 | Group AI | "kept changing group photo completely!!" |
| 31 | WayShot | 5 | 2026-10 | Faces kept | "other AI products kinda change my face but this app doesnt. i love this." |
| 32 | Dispo | 1 | 2026-11 | Lost photos | "watched the timer on them go down as it was 'developing' and they're gone." |
| 33 | Lapse | 1 | 2026-07 | Lost photos | "not every user was notified of the gallery being permanently deleted by May 31 2026" |
| 34 | Lapse | 2 | 2026-06 | Lost photos | "Twice now it has deleted a whole nights worth of photos." |
| 35 | Huji | 4 | 2025-11 | Backup | "We need a user and password for it so we don't lose all of our photos when we buy a new phone" |
| 36 | Lapse | 4 | 2026-11 | Social | "i live in a small town and most teens in my town used that to connect! please bring the social part back!" |
| 37 | Locket | 1 | 2026-11 | Friend gate | "You need five freinds just to log in and I have to use friends I barely know" |
| 38 | Locket | 1 | 2026-11 | Phone number | "I'm thirteen and don't have a phone because of my parents strict rules. So please make it optional" |
| 39 | Retro | 3 | 2026-09 | Friend gate | "the needing to add three people is ridiculous… I feel like I am selling my friends out." |
| 40 | POV | 2 | 2025-11 | Steps | "we counted there are 7 steps to taking photos including giving away personal info to sign into the app" |
| 41 | POV | 2 | 2026-05 | Sign-in | "guests are forced to sign into their Apple ID which is too much of a friction point" |
| 42 | Party! | 5 | 2025-03 | Develop love | "not being able to see the photos right away. The old school anticipation" |
| 43 | Once | 5 | 2026-10 | Develop love | "Made it a surprise to release the photos the day after all of the events. It was so fun." |
| 44 | Party! | 3 | 2024-11 | Blurry | "a lot of the pictures come out blurry. The shutter speed on the app is very slow." |
| 45 | Huji | 3 | 2026-07 | Zoom | "if it had 0.5 this would be 5 stars" |
| 46 | Huji | 4 | 2026-09 | Video | "PLEASE PLEASE PLEASE ADD VIDEO RECORDING I BEG OF YOUUUUUU" |
| 47 | Huji | 4 | 2025-11 | Date stamp | "I want to be able to change the date to whatever I want but I can only change it to 1998 and the current date." |
| 48 | Dispo | 1 | 2024-07 | Date stamp | "Now I can't remove the time/date stamp or have it not auto-save to my camera roll without paying!??" |
| 49 | NOMO | 4 | 2026-04 | Watermark | "Wish I could turn off the watermarks on every camera, especially since I'm paying $25." |
| 50 | Dazz | 5 | 2026-06 | Social proof | "so many people asked where i got the camera. i just told them 'it's an app actually'" |
| 51 | Pocketbooth | 1 | 2026-09 | Booth | "It should have a standby screen for people to come in and press start." |
| 52 | Lense | 2 | 2025-06 | Event pricing | "the app still counts a blank read against you. $15 for 21 pictures." |

---

## 14. The top 15 product decisions for Digi

Each decision is tied to the evidence above. They are ordered by how much they protect profit and rating in the Nov 16 – Dec 16 contest.

1. **The free camera shoots and saves without limit, at full resolution, straight to the camera roll, with no ads.**
   - Free includes the date stamp and the core flash, digicam and film looks (6–8 looks).
   - *Why:* free-and-generous apps hold 4.3–4.5★ (Dazz, Huji, Kapi, CALLA). Shot limits draw anger: 0.3MP "only 10 FREE PICTURES". No ads, because ad reviews average 2.05★.

2. **Never take back anything free, and never raise the price for existing payers.** What a user got on day one stays theirs, so existing users are protected.
   - *Why:* a changed pricing model was the #1 hand-coded reason (22%) for 1–2★ reviews in camera apps.

3. **Mark every paid look with a lock and a "Pro" tag. Let users *try* paid looks: shoot with a live preview, then pay to keep the shot.** Never let them edit and *then* discover the paywall.
   - Give 3 free "passes" for paid looks (the Kapi pattern).
   - *Why:* Dazz's try-then-pay works (4.38★). OldRoll's unlabelled, after-the-edit wall fails ("i spent $15 editing only to find out u must pay").

4. **Make the trial impossible to misread, and keep the reminder promise.**
   - The paywall says, in text the same size as the button: "3 days free, then $39.99/year. We'll remind you 24 hours before."
   - Send that push reminder (the iOS local notification is set when the trial starts). Also show an in-app banner on the last day.
   - *Why:* billing reviews average 1.39★ and 82% are 1★. Two of the quotes are about reminders that never came.

5. **A digis budget that is visible and never feels like paying twice.**
   - The paywall states "Pro includes 60 digis a month" (whatever the final number is).
   - Every AI button shows its cost.
   - The Party Pack (25 digis, $5.99) is a no-subscription path.
   - *Why:* "subscription + coins" is a repeat 1–3★ pattern (WayShot, Lensa, Pecra, Boothie).

6. **Failed AI jobs refund automatically.**
   - Target: a result in under 60 seconds. If it fails or times out, refund the digis and show "Didn't work. Your 2 digis are back."
   - Never leave a progress bar hanging overnight.
   - *Why:* Pecra's "stuck at 26% for 2 days" and "never develop" reviews.

7. **AI looks keep faces and say they are AI.**
   - Use face-preserving settings and a before/after slider, plus a strength slider (Light, Medium, Strong).
   - The button label includes "AI".
   - The store description and the paywall say "AI re-light (generative AI)".
   - Test every AI look on 2–8-person group photos before shipping it.
   - *Why:* face-change reviews average 1.72★, undisclosed AI is called "false advertising", and group photos break other apps.

8. **Store screenshots and ads show only real Digi outputs.**
   - *Why:* "nothing like the ads" reviews average 1.52★ (Pecra, WayShot, Remini).

9. **Photos can never be lost.**
   - Every shot is written to local storage right away.
   - Roll photos also upload in the background. "Developing" only blurs the *view*; it never holds the only copy.
   - Uninstalling never deletes roll photos stored in the cloud.
   - Optional Sign in with Apple restores everything on a new phone.
   - *Why:* lost photos are 32% of social-camera 1–2★ reviews (Dispo, Lapse), and Huji users ask for an account.

10. **Joining a roll takes 2 taps for a guest.** No phone number, no "add 5 friends" gate, no Apple ID sign-in before the first shot.
    - Use a QR code or link that opens an App Clip or a web camera. Guests can create an account later, to keep their copies.
    - *Why:* POV's "7 steps" and Apple ID complaints, and Locket's and Retro's friend gates.

11. **The morning reveal is a feature, never a gate.**
    - The roll develops at 9:00 a.m. local time for everyone.
    - The host can choose "develop now" for free.
    - There is never an ad or a payment to "develop sooner" for personal photos.
    - *Why:* Party! and Once reviewers love the anticipation. Dispo's ad-gated development is one of its most hated features.

12. **Host controls from day one.** The host can:
    - delete any photo after the event;
    - let guests add camera-roll photos (a toggle);
    - set the roll's end time.

    Never charge per scan when nothing was uploaded.
    - *Why:* Party!, Once and Lense complaints.

13. **The date stamp: on by default, free to switch off.** Also free:
    - pick any date, not only today or "98";
    - show the time;
    - change the format;
    - stamp video too, when video arrives.

    - *Why:* the only date-stamp anger is about forced stamps or paid removal (Dispo, NOMO, Retrica). The only wants are for control.

14. **Camera basics people ask for, in v1:**
    - 0.5× and zoom;
    - front camera;
    - flash strength, because the iPhone 18 flash is "way too bright";
    - a fast shutter for moving party scenes, against blur;
    - 3:2 and 4:3 frames;
    - batch save;
    - the Camera Control and Action Button;
    - a lock-screen widget;
    - an on-screen countdown in booth mode.

    Short video with the date stamp goes in v1.1. It is asked for 45 times, but it is not needed for the contest.

15. **Watermark: small and only on free *shared* exports.** No watermark for anyone who has paid, ever. Never put one on guests' plain roll photos.
    - *Why:* every watermark complaint comes from paying users who could not remove it (Lensa "$36 subscription", NOMO "$25", WayShot Pro, Remini). Free users barely mind, and one calls OldRoll's marks "so cute".

---

## What this means for Digi

A concrete action list with specifics for the next 30 days.

1. **Paywall copy (put it in before submitting the build).** Write it exactly like this:
   - Headline: "Digi Pro: AI re-light + party rolls"
   - Under the yearly option: "3 days free, then $39.99/year ($0.77/week). We'll remind you a day before."
   - Under the weekly option: "$6.99/week. No trial."
   - Party Pack: "25 digis, $5.99 once. No subscription."
   - Footer: "Cancel anytime in Settings → Apple ID → Subscriptions."

   Then schedule a local notification at trial start + 48 h with the text: "Your Digi trial ends tomorrow. Keep it or cancel in Settings, no hard feelings."

2. **Store text, first 3 lines** (this is what users see before "more"). Use the users' own words:
   "Digicam vibes without buying a camera. Free looks, orange date stamp, flash. No ads." Then a separate line: "AI re-light looks use generative AI and keep your face."

3. **A free tier list you never shrink.**
   - Write it down in `docs/DECISIONS.md` (or the Digi equivalent): which looks are free on launch day, for example 6 looks plus the date stamp plus 1 booth layout.
   - Add a line: "Free looks are never removed from free."

4. **Lock badges and a "3 tries" counter on paid looks.** Show "Pro look: 3 free tries left" in the look picker. After the third try, show the paywall at the moment of *shooting*, never after an edit.

5. **AI job rules.**
   - Timeout: 90 seconds.
   - Auto-refund on error or timeout, plus a banner: "Didn't work. 2 digis refunded."
   - Log the failure rate per look. Turn off any look that fails more than 5% of the time or that a user marks "doesn't look like me".
   - Add a 👎 "Not my face" button on every AI result that refunds once a day.

6. **A face test before shipping each AI look.** Run it on 20 of your own test photos: 10 solo, 6 groups of 3–5, 4 groups of 6–8, with mixed skin tones. Ship only if faces stay recognisable in all 20. Keep a strength slider defaulting to "Light".

7. **Photo safety checklist** (test it by hand):
   - Shoot 10 photos, force-quit, reopen: all 10 are in the camera roll.
   - Shoot in airplane mode: the photos are saved, and the roll syncs later.
   - Delete the app, reinstall, sign in with Apple: the roll is back.
   - Update the app over an old build: nothing is lost.

8. **Guest join flow ≤ 2 taps.** Scan the QR → camera opens (App Clip or web) → shoot. Ask for a name only after the first shot. Never ask for a phone number. Measure scans → first shot. The target is ≥ 60% [E, low: no public benchmark found; POV hosts report 22 of 62 and 31 of 175 guests taking part].

9. **Default to the 9 a.m. reveal, with a free host "develop now".** No ads, no "pay to develop sooner" for roll photos. The digis are for AI looks and AI strips, not for unlocking your own party photos.

10. **Host tools in the roll settings:** delete any photo, allow camera-roll uploads (on/off), end time, download all (ZIP). Price rolls per roll or per event, never per scan.

11. **Date stamp settings screen:** On/Off (free), Date (pick any), Time (on/off), Format (`'26 12 31`, `12 31 '26`, `31.12.2026`). The default is the classic orange, bottom right.

12. **Camera v1 list:** 0.5×/1×/2×, front/back, flash Off/Soft/Full, fast-shutter "party mode", 3:2/4:3/1:1, batch save, Camera Control support, an Action Button shortcut, a lock-screen widget, and a 3-2-1 booth countdown.

13. **No ads SDK in the app at all.** Keep it out of the binary, so the privacy label stays clean and "No ads" is true.

14. **Review operations during the contest.**
    - Reply to every 1–2★ review within 24 hours. Use App Store Connect replies, with a short, human template per theme (trial, lost photo, AI face).
    - Offer a refund route for trial complaints: "Request a refund at reportaproblem.apple.com. We're sorry."
    - Track the *written* review average weekly, alongside the star rating.
    - Ask for ratings only after a happy moment, for example after the roll reveal, and never after a paywall.

15. **Weekly theme check.** Every Monday, re-run `scripts/fetch.py` + `scripts/tag.py` on Digi's own US reviews and on 5 rivals (Dazz, Kapi, WayShot, POV, Locket). If "trial/billing" goes above 10% of Digi's 1–2★ reviews, change the paywall that week.

16. **Marketing lines taken from real reviews.** These need no AI-sounding copy:
    - "Don't buy a $500 digicam. Use the app."
    - "People will ask what camera you used."
    - "Your party develops at 9 a.m."
    - "No ads. No face changes."

    Each is backed by repeated review language (§12). Use them as TikTok hooks and as screenshot captions.

---

## Sources

All pulled or read on Nov 17, 2026, US storefront. Review dates are given next to each quote.

**Apple customer-review RSS** (most recent; pages 1–3, and 1–10 for Remini and Lensa). The URL pattern is `https://itunes.apple.com/us/rss/customerreviews/page=N/id=APPID/sortby=mostrecent/json`:
- Dazz Cam: https://itunes.apple.com/us/rss/customerreviews/page=1/id=1422471180/sortby=mostrecent/json
- Huji Cam: https://itunes.apple.com/us/rss/customerreviews/page=1/id=781383622/sortby=mostrecent/json
- NOMO CAM: https://itunes.apple.com/us/rss/customerreviews/page=1/id=1362548649/sortby=mostrecent/json
- 1998 Cam: https://itunes.apple.com/us/rss/customerreviews/page=1/id=1450480287/sortby=mostrecent/json
- Dispo: https://itunes.apple.com/us/rss/customerreviews/page=1/id=1491684197/sortby=mostrecent/json
- Lapse: https://itunes.apple.com/us/rss/customerreviews/page=1/id=1636699256/sortby=mostrecent/json
- Locket: https://itunes.apple.com/us/rss/customerreviews/page=1/id=1600525061/sortby=mostrecent/json
- Retro (Lone Palm): https://itunes.apple.com/us/rss/customerreviews/page=1/id=6443709020/sortby=mostrecent/json
- POV: https://itunes.apple.com/us/rss/customerreviews/page=1/id=1636032890/sortby=mostrecent/json
- Remini: https://itunes.apple.com/us/rss/customerreviews/page=1/id=1470373330/sortby=mostrecent/json
- Lensa: https://itunes.apple.com/us/rss/customerreviews/page=1/id=1436732536/sortby=mostrecent/json
- WayShot: https://itunes.apple.com/us/rss/customerreviews/page=1/id=6749303003/sortby=mostrecent/json
- Pecra G7X: https://itunes.apple.com/us/rss/customerreviews/page=1/id=6757448890/sortby=mostrecent/json
- BeautyCam: https://itunes.apple.com/us/rss/customerreviews/page=1/id=592331499/sortby=mostrecent/json
- Retrica: https://itunes.apple.com/us/rss/customerreviews/page=1/id=577423493/sortby=mostrecent/json
- Kapi Cam: https://itunes.apple.com/us/rss/customerreviews/page=1/id=6740760807/sortby=mostrecent/json
- OldRoll: https://itunes.apple.com/us/rss/customerreviews/page=1/id=1570093460/sortby=mostrecent/json
- ProCCD: https://itunes.apple.com/us/rss/customerreviews/page=1/id=1616113199/sortby=mostrecent/json
- CALLA CAM: https://itunes.apple.com/us/rss/customerreviews/page=1/id=1268504808/sortby=mostrecent/json
- 0.3MP Camera: https://itunes.apple.com/us/rss/customerreviews/page=1/id=1661877394/sortby=mostrecent/json
- Sparkle: https://itunes.apple.com/us/rss/customerreviews/page=1/id=6811675349/sortby=mostrecent/json

**App Store web review pages** (featured reviews):
- Pocketbooth https://apps.apple.com/us/app/id385145330?see-all=reviews
- Once https://apps.apple.com/us/app/id6754265953?see-all=reviews
- Lense https://apps.apple.com/us/app/id6444442256?see-all=reviews
- Party! https://apps.apple.com/us/app/id6504739136?see-all=reviews
- MY4CUT https://apps.apple.com/us/app/id6504497435?see-all=reviews
- Boothie https://apps.apple.com/us/app/id6775603987?see-all=reviews
- ThisBooth https://apps.apple.com/us/app/id6762100716?see-all=reviews
- Snap it https://apps.apple.com/us/app/id6503426518?see-all=reviews
- Kuji Cam https://apps.apple.com/us/app/id1468247478?see-all=reviews
- Sparkle https://apps.apple.com/us/app/id6811675349?see-all=reviews

**iTunes Lookup API** (rating counts, release and update dates): https://itunes.apple.com/lookup?id=1422471180,781383622,1362548649,1450480287,1491684197,1636699256,1600525061,1470373330,1436732536,6749303003,6757448890,385145330,6443709020,1636032890,577423493,592331499,6740760807,1468247478,6504739136,6444442256,6775603987,6762100716,6504497435,1570093460,1616113199,1268504808,1661877394,6503426518,6754265953,6811675349&country=us

**KD Pro check** (returns no results for US or GB): https://itunes.apple.com/lookup?id=1291297394&country=us

**Earlier chapters cross-checked:**
- `digi-bible-2026-11/02-competitors-retro-cams.md` (§1, §7, §9)
- `03-competitors-ai-photo.md` (§7)
- `04-competitors-booth-social.md` (§2.5, §5)
- `05-mrr-peaks.md` (Pecra MRR)

---

## Fact-check (2026-11-16)

An adversarial re-check of the 10 numbers in this chapter that matter most for decisions. I re-ran the counts on the saved corpus (`rm19/tagged.json`, 3,708 reviews), queried the iTunes Lookup API (US) again, and searched the web for the outside claims.

| # | Claim | Re-check result | Action |
|---|---|---|---|
| 1 | Trial/charge/refund/scam reviews: 249 reviews, average 1.39★, 82% 1★ | Re-computed: 249 reviews, 1.39★, 82% 1★. | None |
| 2 | In AI photo apps, billing/trial is the #1 reason for 1–2★ reviews (26%) | Re-computed: 26% of 725 AI-app 1–2★ reviews. | None |
| 3 | Lost photos: 32% of social-camera 1–2★ reviews vs 3% for retro cameras; Dispo 51, Lapse 27 | Re-computed: social 32% (of 201), retro 3% (of 284), Dispo 51, Lapse 27. | None |
| 4 | Lapse deleted galleries on May 31, 2026 | Several 2026 user reviews say so ("until May 31st to download", "deleted all of my stuff in May"). No official Lapse notice found by search. | **Changed**: now says the date comes from user reviews |
| 5 | Face-change reviews average 1.72★ (76 reviews) | Re-computed: 76 reviews, 1.72★. | None |
| 6 | Pecra G7X: last 87 US reviews average 1.20★, 95% 1–2★ | Re-computed: 87 reviews, 1.20★, 95%. Note: Pecra's all-time store average is still **4.41★ (1,316 ratings)**, so the recent collapse doesn't show on the store badge yet. | Context added here |
| 7 | Ads complaints average 2.05★ | Re-computed: 192 reviews, 2.05★. | None |
| 8 | Date stamp mentioned in 43 of 3,708 reviews (1.2%) | Re-computed: 43. | None |
| 9 | "The word 'free' shows up in 211 reviews"; Dazz 4.38★ | 211 is the count of reviews **tagged as praising "free"**. The word "free" (whole word) appears in 352 reviews. Dazz's 4.38★ is the 200-review sample average; its store average is 4.75★ (118,201 ratings). | **Changed**: both clarified in takeaway 3 |
| 10 | KD Pro Disposable Camera (id 1291297394) returns nothing from the Lookup API | Confirmed: missing from a 21-app US Lookup batch today. | None |

**Could not verify:** the hand-coded sample (13 of 60 random camera-app 1–2★ reviews about pricing-model changes). It is the author's coding of a random draw, so it stays E (med). Pecra's $88.5K MRR (chapter 05) was not re-checked here. Users' "fair price" quotes are real review lines, but they are anchors from a few people, not survey data.
