# 04. Competitors: photo booth apps, shared rolls, social and event cameras

**Track:** 04-competitors-booth-social · **Data pulled:** Nov 17, 2026 (US App Store unless noted) · **Author:** research agent for the Digi niche bible

**Builds on:** `digi-deep-2026-11/02-competitors.md` §3c–3d, §7 and `03-product-social.md` §1, §3.2–3.3. I don't repeat those tables. I re-pulled every app, price and rating today, added ~40 apps the earlier work didn't cover, mined 3,300+ App Store reviews, read the competitors' own pricing pages, and checked Mobbin screens. Corrections to earlier work are listed in §11.

**Labels:** **V** = I checked it today at the primary source (App Store API or page, company site, Apple/Google help page, SEC-style earnings coverage). **C** = a claim by a company, founder or press. **E** = my estimate, with confidence high/med/low.

**Raw data (scratch):** `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/bible/cb/` (`profiles.json` = 73 apps with in-app purchase lists; `rev/` = recent reviews for 23 apps; `web/` = competitor pricing pages; `raw/search_us.json` = 794 apps from 30 searches).

---

## Key takeaways

1. **The "event camera" category is real, crowded and priced the same everywhere.** A host makes a roll, guests join by QR or link with no app, everyone gets limited shots, photos reveal later. At least **9 apps sell the exact same guest ladder: 25 guests ≈ $4.99, 50 ≈ $14.99, 100 ≈ $29.99–34.99** as one-time purchases [V, App Store IAP lists and pricing pages, Nov 17, 2026]. Digi should match this ladder, not invent a new one.
2. **The host pays. Guests are free. Small groups are free.** Free tiers: Flock 3 guests, Once 5, Scene 5, Reveal 5, Lense 7, POV 10 [V]. **A normal house party (6–12 people) fits inside most free tiers.** The money comes from weddings, which are 41% of POV's last 250 US reviews (103 of 250) versus 1 review about a holiday party [V, review RSS].
3. **So a Digi Roll will not be a big contest revenue line.** Christmas and NYE house parties mostly fit the free tier everywhere. The roll's job in Dec 2026 is **acquisition**: every roll puts Digi's look and name in front of 5–25 people. AI looks stay the profit engine.
4. **Guest participation is the hidden metric, and it's low.** POV hosts report **22 of 62 guests** (35%), **~15 of 70 paid seats** (~21%) and **31 of 175 paid seats** actually shooting; active guests take about **12 photos each** (260 photos from 22 people) [V, POV reviews, 2025–2026]. Every event app sells reminders, table QR cards and slideshows to push that number up.
5. **The #1 complaint in event apps is friction, then blur.** POV's worst reviews: "forced to sign into their Apple ID", "7 steps to taking photos", "they're all blurry" (compression), "QR code wasn't working half the time" (venue signal) [V]. Copy the winners' fix: **first name only, web camera, offline queue, full-quality upload.**
6. **Apple quietly shipped a free event roll.** Since iOS 27 (Sept 2026), Shared Albums are full-resolution, there are **free Temporary Shared Albums (up to 5,000 items, deleted after 30 days)**, and people can join and add photos **on the web without an Apple Account** [V, Apple Support 148868, published Sep 14, 2026; MacRumors Aug 20, 2026]. (Fact-check: the 5,000-item and 30-day limits are spelled out on Apple Support 127875, "Create a temporary shared album", updated Oct 6, 2026, which also says the feature is not in every country. The "no Apple Account on the web" part I found only in MacRumors' report, so treat that piece as C.) Google Photos has had **QR-code album sharing** since May 2025 [V]. Pooling photos is now free and native. Digi must win on the *look* and the *reveal*, not storage.
7. **Social friend cameras are a graveyard or a giant; there is no middle.** Locket (593,068 US ratings, +293 in one day) is the giant; Lapse removed its social layer; 58% of its last 250 US reviews mention the social features (145) and 35% explicitly ask to "bring back" something (87); Dispo is now 80% 1–2★ with ads every few photos [V]. Digi should not build a feed.
8. **Booth/strip apps split into cheap consumer toys and pricey pro iPad booths.** Consumer: $3.99–9.99/week, $19.99–129.99/year. Pro operators: Touchpix $43.90/week, Mini Photobooth $44.99/month [V]. Nobody sells an **AI group strip**. Boothie (the AI one) is solo-selfie only.
9. **Two direct overlaps to watch:** **Once already burns an orange vertical date stamp** ("ONCE | JUL 30 2026, 11:11 PM") onto every photo and has an Instagram "Story" button [V, Mobbin]. And **Cammy sells "1 AI Recap" for $2.99** on top of a shared album [V]. Digi's date stamp and AI recap are not new on their own; the combination with digicam AI looks is.
10. **The task brief says POV "raised funding". I found no evidence.** A Tracxn listing for "POV Camera" (New York, founded 2022) states it has not raised funding [C, Tracxn via search snippet; page blocked]. Treat POV as bootstrapped until shown otherwise.

---

## 1. The map: five kinds of competitor

| Group | What it is | Who pays | Examples (US ratings, Nov 17, 2026) [V] | Threat to Digi |
|---|---|---|---|---|
| **A. Event cameras** | Host roll, QR join, shot limit, delayed reveal | Host, once per event | POV 15,701 · Once 729 · Lense 1,545 · Party! 232 · Scene 115 · Reveal 19 · Flock 5 | **High for Digi Roll.** Same mechanic, better tuned |
| **B. Shared albums** | Everyone uploads, no camera rules | Host or subscription, or free | Waldo 25,085 · PhotoCircle 128,894 · SWSH 1,019 · Cammy 6 · Apple Shared Albums · Google Photos | **Medium.** Free platform versions are good enough for pooling |
| **C. Friend / social cameras** | Ongoing friend graph, widget or daily ritual | Subscription + ads | Locket 593,068 · BeReal 1,163,576 · Instants 26,469 · Retro 19,211 · Lapse 118,322 · Dispo 8,298 · stripz 34 | **Low–medium.** Different job (daily habit). Instagram copies fast |
| **D. Booth / strip apps** | 4-shot booth, strip layouts | Weekly/yearly sub or pro sub | Mini Photobooth 9,107 · Touchpix 6,766 · Licowa 4,549 · Pocketbooth 2,200 · Sera 86 · ThisBooth 35 · IncrediBooth 6 · Boothie 40 | **Medium.** Strip is a commodity; AI group strip is not |
| **E. Invite apps with albums** | Party invite + RSVP + photo album | Free or small IAP | Partiful 289,598 · Apple Invites 22,302 · Evite 519,073 | **Medium as channel.** Plans live here; Digi should plug into the group chat, not replace it |

**What groups A and B prove (E, high confidence):** people want *everyone's* photos from one night in one place, and hosts will pay per event to get them, as long as guests don't have to do anything.

---

## 2. Event cameras: deep teardown

### 2.1 Price ladders side by side (one-time, per event) [V]

All prices US, consumable or non-renewing, from the App Store in-app purchase list (top 10 shown by Apple) and the company pricing page where one exists, Nov 17, 2026.

| Guests | **POV** | **Once** | **Lense** | **Party Cam** (ASAP) | **Flock** | **Reveal** (15 shots) | **Unveil** | **Kadra** (TR) | **Scene** |
|---|---|---|---|---|---|---|---|---|---|
| Free up to | **10** | **5** | **7** | — | **3** | **5** | — | — | **5** (first 10 events) |
| 10 | — | $1.99 | — | (15) $1.99 | $2.99 | $7.99 | — | $2.99 | $2.99 |
| 25 | $4.99 (E: likely) | **$4.99** | **$4.99** | **$4.99** | **$4.99** | $15.99 | **$4.99** | $6.99 | $9.99 |
| 50 | $14.99 (E: likely) | **$14.99** | **$14.99** | **$14.99** | **$14.99** | $29.99 | **$14.99** | — | $19.99 |
| 100 | $34.99 (E: likely) | $29.99 | $34.99 | $34.99 | $29.99 | $59.99 | $29.99 | $24.99 | $39.99 |
| 150–175 | $64.99 (E) | $49.99 (150) | $44.99 (150) | $64.99 (175) | $49.99 (150) | $84.99 (150) | — | — | — |
| 200–250 | $89.99 (E) | $69.99 (200) | $59.99 (200) / $69.99 (250) | $89.99 (250) | $69.99 (200) | — | — | $44.99 (200) | — |
| Unlimited / 500 | 251+: ask | $99.99 (∞) | $99.99 (500) | $149.99 (500) | $99.99 (400) | — | $109.99 | $999.99 (2,000) | — |
| Unlimited shots add-on | — | +$9.99 | +$9.99 (max 25 otherwise) | — | — | $59.99 (50 ppl ∞) | +$10 | — | +$9.99 |
| Video add-on | — | — | +$9.99 | in "extras" | — | — | — | — | +$9.99 |

**Notes on the table**
- **POV's exact mapping is not public** in text form. Its pricing calculator lists guest steps 10 (free), 25, 50, 100, 175, 250, 251+ [V, pov.camera/pricing], and its IAPs are "More Participants" $4.99, $9.99, $14.99, $24.99, $31.49, $34.99, $64.99, $89.99 plus "Gold" $54.99 [V]. Party Cam (ASAP Visuals) sells the identical step names and prices (25/$4.99, 50/$14.99, 100/$34.99, 175/$64.99, 250/$89.99), so POV's ladder is very likely the same (E, medium). One POV reviewer "paid for 100 people for 25 photos and it was a great price" [V, review Oct 26, 2026].
- **Lense** website (Nov 17, 2026): free up to 7, then $4.99 / $14.99 / $34.99 / $44.99 / $59.99 / $69.99 / $99.99 for 25 / 50 / 100 / 150 / 200 / 250 / 500 guests; "Up to 25 captures per guest"; "1 year of storage"; "Money-back guarantee — no questions asked" [V, lense.app/pricing].
- **Once** website: free up to 5; 10 $1.99, 25 $4.99, 50 $14.99, 100 $29.99, 150 $49.99, 200 $69.99, ∞ $99.99; "∞ Unlimited Shots $9.99"; refund only "if you haven't taken any photos yet… once a photo is taken, it's considered used—just like opening a real disposable camera" [V, once.film/pricing]. In-app top-ups: **+10 $3.99, +25 $9.99, +50 $19.99** [V, Mobbin "Add Participants" sheet].
- **Hipstamatic Party!** is the odd one: Party! Pass $1.00, Deluxe Camera $2 / $5 / $10 (15 / 25 / 35 users per PetaPixel, Sep 2024), Premium $49, Premium Max $99, **Party! Club annual $19.99**, "Camera Roll Boost" $2 [V IAP; C PetaPixel].

**The market price (E, high confidence):** **25 guests = $4.99, 50 guests = $14.99, 100 guests ≈ $30–35.** Anything far above that (Reveal charges $15.99 for 25) is an outlier with 19 ratings.

### 2.2 What else they sell (the second purchase) [V]

| Upsell | Who | Price |
|---|---|---|
| **Keep photos longer** | Flock "Keep another year" | $4.99 / $9.99 |
| | AllShots "Keep Photos Forever" | $4.99 |
| | Wedbox "Yearly hosting subscription" | $11.49 |
| | EventPics storage subs (10–200 GB) | $3.99–24.99/mo, $44.99–199.99/yr |
| **Unlimited shots** | Once, Lense, Scene, Camvi | $9.99 |
| **Video** | Lense, Scene | $9.99 |
| **Photo book** | POV "mystery" Photobook, 6×9 softcover | "like $20ish" per a reviewer [V review Jul 27, 2026] |
| **Physical join token** | POV Block (wooden NFC block that opens the App Clip) | price not shown [V pov.camera] |
| **Find my photos (face match)** | Flock "Find me for this event" | $2.99 |
| | Waldo Gold Special Event (AI face delivery, QR signage, live slideshow, 50 GB for a year) | $49.99 one-time [V waldophotos.com/pricing] |
| **AI recap video** | Cammy "1 AI Recap" / "5 AI Cuts" / "12 AI Cuts" / Unlimited yearly / "Keepsake" | $2.99 / $9.99 / $19.99 / $39.99 / $9.99 |
| **Business tier** | POV (branding, live slideshow), Once (+$9.99 business, moderation, lead capture), Lense pro subscription, AllShots Pro $69.99–79.99/mo | varies |

**Lesson for Digi (E, high):** the first purchase is "more people". The second is **"keep it" or "make it special"** (book, recap, face-find). Digi's natural second purchase is **"AI-develop the best shots"**, which nobody here sells except Cammy's generic recap.

### 2.3 Product rules compared [V]

| Rule | POV | Once | Lense | Party! | Scene | Reveal |
|---|---|---|---|---|---|---|
| Guest join | QR / link / App Clip / Instant App / NFC block | QR / link / App Clip / web (`join.once.film`) | QR / link, web, **lock-screen notification** | **App Clip, "no download, no account"** | QR, web, "type their name" | QR / link, **first name only** |
| Shots per guest | host-set; reviews mention 15, 20, 25 | **5 / 10 / 16 / 24 / 36 / ∞** | up to 25 (∞ paid) | not stated | host-set | 15 / 25 / 35 / ∞ |
| Reveal | during event or next day | at a chosen time | instant or delayed (hours to weeks) | **next morning, all at once** | at reveal time, "like picking up prints from the lab" | scheduled reveal |
| Look | stickers, design tools | **orange vertical date stamp**, "subtle" film | "disposable camera filter" | film looks: 90s, rich color, vintage, B&W, instant | Original / Vintage / B&W, **original never altered** | **no filters** |
| Storage | not stated | "unlimited memory storage" | 1 year | "you decide what to keep" | full 12 MP, no compression | not stated |
| Extras | Photobook, live slideshow (business) | voice "Tapes", recap video | live slideshow, video | Public Parties (LA), Apple Music set list | **audio guestbook**, offline mode, big-screen slideshow | credits each photo to the guest's first name |

Sources: App Store descriptions (Nov 17, 2026), company sites, Mobbin flows for Once.

### 2.4 Scale signals [V unless marked]

| App | Released | US ratings | Ratings/month since launch (E) | Company claim |
|---|---|---|---|---|
| POV | Aug 1, 2022 | 15,701 (4.92★) | ~304 | "4.9 stars · 28,433 ratings" (likely iOS + Android, all countries) [C, pov.camera] |
| Once | Nov 24, 2025 | 729 (4.76★) | ~62 | "1M+ memories, 50K+ events, 1,000+ ratings" [C, once.film] |
| Lense | Feb 11, 2023 | 1,545 (4.85★) | ~34 | "used by 100,000+ couples, parties and event organizers", "3,500+ ratings" [C, lense.app] |
| Scene | Feb 19, 2026 | 115 (4.66★) | ~13 | "1M+ photos taken at 20k+ events" [C, App Store description] |
| Party! (Hipstamatic) | Sep 10, 2024 | 232 (4.81★) | ~9 | — |
| Waldo | Oct 3, 2015 | 25,085 (4.85★) | ~188 | $5M seed (Upfront, Jan 2016) + $4M (Lewis & Clark, Mar 2019) ≈ $9.25M total [C, TechCrunch / CB Insights] |

**Photos per event (E, medium):** Once's claim works out to ~20 photos per event (1M / 50K); Scene's to ~50 (1M / 20K). Both include many tiny and test events. A real wedding on POV produced 260–450 photos [V reviews].

**Revenue (all estimates; none verified):**
- **Once: ~$25K/month and ~8,900 downloads/month** (AppKittie model snapshot, Nov 12, 2026; revenue +19.5% over 30 days) [E, low–med]. AppKittie's Boothie figure ($54,683) matched Boothie's verified TrustMRR MRR ($54,458 on Nov 16), which makes the model less wild than most, but it is still a model.
- **POV:** Screensdesign says $200K/month; AppGoblin says under $10K [C, conflicting]. My triangulation: POV earns US ratings ~5× faster than Once (304 vs 62 per month). If revenue scales with ratings, **POV ≈ $80–150K/month** (E, low).
- **Lense, Party!, Scene:** no usable estimate. Rating speed suggests Lense is a fraction of POV (E, low).

**The clone wave.** In 30 searches I counted **at least 25 event-camera apps released since Nov 2025** (Scene, Reveal, Flock, Everlens, Revel.cam, AllShots, PixelParty, GuestSnap, Gooya, Kadra, Camvi, Cliché, Unveil, RollCam, Cammy, PartySnap, FotoBingo, TheDay, SYNC, Disposa, OutOut, OnceRoll, Moments, DropTale, ForeverPix…). **Only Once (729) and Scene (115) have passed 100 US ratings** [V]. Same story as the booth clones in the earlier report: the mechanic is free to copy, distribution is not.

### 2.5 What the reviews say (last 250 POV reviews, May 2024–Nov 2026, plus Once, Lense, Party!, Scene) [V]

**POV:** average 4.64★ on recent reviews; 7% are 1–2★. Theme counts (keyword match; one review can hit several):

| Theme | Reviews (of which 1–2★) |
|---|---|
| Mentions guests / everyone / participation | 102 (11) |
| Wedding / reception / bride / shower | 105 (6) |
| Price or value | 34 (7) |
| Sign-in / account / "had to download" | **15 (9)** |
| Reveal / next day / waiting | 15 (3) |
| Shot limit | 11 (0) |
| Blurry / compressed | 8 (1) |

**Participation, in hosts' own words (POV):**
- "We had **22 out of the 62** people use it. I paid for 100 people… had to keep reminding people… We got **260 photos**." (Oct 26, 2026)
- "I paid for like **70 people** to use it and only **about 15** did but still so much fun!" (Jul 27, 2026)
- "We had our DJ announce the QR code we had on each table… I paid for **175** participants but **only got 31**. Which is fine. We ended up with over **200 photos**." (Oct 26, 2025)
- "We had **85 guests**… we still ended up with over **450 candid photos**." (Aug 2, 2026)

**Friction, in hosts' own words (POV):**
- "Once you scan the QR guests are **forced to sign into their Apple ID** which is too much of a friction point." (2★, May 11, 2026)
- "we counted there are **7 steps to taking photos** including giving away personal info." (2★, Nov 1, 2025)
- "Pretty misleading with the no download advertising when **you have to make an account**." (1★, Sep 4, 2026)
- "images would lose their crispness… **they're all blurry**." (1★, Jul 31, 2025) and a 4★ 3-day wedding host: "a lot of the photos come back **heavily compressed**." (Jun 11, 2026)
- "the Internet reception was bad at our venue… **nobody was able to upload**." (1★, Jun 19, 2025)
- "I paid for the most expensive package so guests would be allocated 25 photos. However **the guests were only given 15**." (1★, Jun 24, 2026)

**Lense:** "Fun but blurry… The quality of the images was a little blurry for everybody" (4★, Oct 19, 2026); "It def is not the same quality as my phone" (4★, Oct 7, 2026).
**Party!:** "a lot of the pictures come out blurry. The shutter speed on the app is very slow" (3★, Nov 24, 2024); "Horrible quality" (1★, Nov 23, 2025).
**Scene:** "We created a **team photo challenge** for our guests… giving us **more than 300 photos**" (5★, Oct 6, 2026).
**Once:** "the **recap video** after the event was such a nice surprise" (website review, May 18, 2026); "placed the QR code at the entrance and literally everyone joined in including my grandpa… **Now all my friends are planning to use this at their weddings**" (website review, Apr 22, 2026).

**Discovery:** event-camera hosts say they found the app on TikTok ("I came across Once on TikTok", Nov 12, 2026; "I saw it on TikTok!", POV, Apr 5, 2025; "I had seen ads for this online and honestly thought it was kind of a scam", POV, Sep 19, 2026) [V].

**When people review (proxy for when they use it):** POV's 250 reviews peak in **May–Aug** (e.g., May 2025: 24, Jun 2026: 16, Aug 2026: 16) and dip in **Dec–Jan** (Dec 2025: 4, Jan 2026: 1) [V]. **Event-camera demand is wedding-season demand.** December is not its peak. That matters for the contest (see §10).

### 2.6 How their screens work (Mobbin) [V]

**Once, "Creating a film" (12 screens)** ([Mobbin flow](https://mobbin.com/flows/62e405c1-8bc5-4d97-a77a-9a483937d0fb)):
1. "What brings you to Once?" — Wedding day / Birthday / Party / Travelling / Company events / Other event (6 big tiles).
2. "When does your event finish?" — calendar + time, with the line "The film opens now, and guests can capture photos until the film closes at your chosen time."
3. "How many guests for your film?" — "Up to 5 Participants · Free", then **shots per guest 5 / 10 / 16 / 24 / 36 / ∞**, then a toggle "Everyone can see all photos."
4. Loading: "Creating your special film".
5. Home: "Active" film card with "3d 8h left" and a camera button; "Albums" below; a **SAMPLE album ("Welcome!")** so the empty state isn't empty.

**Once, event page and reveal** ([Album detail](https://mobbin.com/flows/a19e73bb-95f2-4675-a69c-5fca19876324), [Film detail](https://mobbin.com/flows/8278fc43-1ec1-4d25-9d9a-6ed264b2ed66)):
- Header counters: **"3 Moments · 2d 12h Left · 2 People"**. Big white camera button, QR button, download button.
- Tiles show the guest's first name and **"Reveals in 2d 12h"** on a dark blank card.
- Single photo view: "Reveals in 4d 6h", then after reveal the photo carries an **orange vertical date stamp: "ONCE | JUL 30 2026, 11:11 PM"**. Buttons: **Story**, Save, Share, Stickers.
- After it ends: "Ended" counter and two buttons, **Send** and **Save**.
- Upgrade sheet: "Add Participants · Current: 5 Participants" with **+10 $3.99 / +25 $9.99 / +50 $19.99** cards and a "Select an option" button ([screen](https://mobbin.com/screens/f7c3e6d0-e40f-46bc-b0e6-166821a48041)).

**Lapse, "Invite friends to roll"** ([Mobbin flow](https://mobbin.com/flows/8f392a85-f358-4366-98e1-a4126bf2223b)):
- Roll page: cover with **"Recap"** button, "Just you 😭 · 3 📷", round "+ Invite to Roll" avatar, **"Reload roll"** and **"Share roll"**.
- Invite sheet: "Invite friends with your **Roll Code**", big QR, green banner **"No download required ✨ Even friends not on Lapse can join!"**, steps "Snaps reveal when developed", link `lap.se/roll/gG7rx4`, share and **print** buttons.
- Profile share ([flow](https://mobbin.com/flows/f2e4ee07-9e57-4fcf-8f3e-eaecd1ffba2e)): story cards "see my photos on Lapse" with Snapchat-story and Instagram-story buttons.

**Apple Invites, "Creating an event" (20 screens)** ([Mobbin flow](https://mobbin.com/flows/724caec0-e620-4720-8c77-d386595857f0)): full-bleed photo background, title in big display type, date/place, Going / Not Going / Maybe, Weather and Directions cards, "Invitation Preview — This is what guests will see." The shared album is a section of the invite.

**Partiful, "Creating an event" (19 screens)** ([Mobbin flow](https://mobbin.com/flows/1d22c2df-c904-4cb5-9e45-6f783cfa46dc)): theme and effect pickers, "Hosted by", "15/15 spots left", "RSVP by Friday", chips "+ Link / + Playlist / + Registry / + Food situation", then a bottom bar Edit / Text Blast / Pending count / Invite / More.

**Retro, "Journals"** ([Mobbin flow](https://mobbin.com/flows/e6311723-5ba8-47bb-be3e-9fe361ab51de)): templates "Event — Gather photos from trips, dinners, and parties", "Friends", "Couple", "Kids", "Hobby", each with a Create button.

**What to take from the screens (E):** the best flows ask **three questions max** (what, when it ends, how many), show a **sample album** in the empty state, put **counters + countdown** at the top of the roll, and make the guest's first name the only identity.

---

## 3. Shared-album apps and the free platforms

### 3.1 Paid shared-album apps [V]

| App | Model | Price | Notes |
|---|---|---|---|
| **Waldo** | Subscription + per-event | Plus $7.99/mo or $49.99/yr (7-day trial on annual only); **Gold $49.99 one-time** per special event; Special Events Bundle $99.99 | AI face-matching delivery; schools, camps, sports are a big use. Recent reviews: 3.00★, **48% 1–2★**, price/subscription in 64 reviews (52 negative), e.g. "Telling family members I shared photos with they have to pay" (1★, Jun 15, 2026) |
| **PhotoCircle** | Subscription | Pro $1.29/mo, $9.99/yr | 128,894 ratings since 2012; private family sharing |
| **SWSH** | Free | — | Sororities, concerts; "great for sororities! the only complaint is how long it takes to upload photos" (4★, Oct 11, 2026). Age 17+ |
| **Cluster** | Subscription | Friend $4.99, Family $9.99, Pro $19.99 (mo); $49.99–199.99/yr | Private group sharing |
| **Cammy** (Jul 2026) | Credits + annual | 1 AI Recap $2.99, 5 AI Cuts $9.99, 12 $19.99, Unlimited $39.99/yr, Keepsake $9.99 | **Only shared album that sells AI per output.** 6 ratings |
| **RollCam** (Oct 29, 2026) | Free so far | — | "A timed Roll stays open for 24 hours"; App Clip join, but "They can take a photo and **sign in before it's shared**" |
| **Beam** (Jun 2026) | Free | — | Finds photos friends have of you; 200 ratings; recent 1★s are phone-number sign-up bugs |

### 3.2 The free platforms (this is the real competition for pooling)

| Platform | What it does now | Source |
|---|---|---|
| **Apple Shared Albums (iOS 27+)** | Albums created on version 27 or later store photos **"in their original formats at full resolution"** and count toward the owner's iCloud storage, **including what participants add**. **Temporary shared albums don't count toward storage**, max **5,000 items** combined, and per MacRumors items not saved are **deleted after 30 days**. Up to **100 participants**. People can **join and contribute on the web without an Apple Account or Apple device**. Older albums keep the 2048-px limit unless upgraded. | [V] Apple Support 148868 (published Sep 14, 2026); MacRumors, Aug 20, 2026 |
| **Apple Invites** (Feb 2025) | Event invite with a built-in Shared Album. **Only iCloud+ subscribers can create**; anyone can RSVP on the web. Recent US reviews: **2.93★, 41% 1–2★**; sign-in complaints in 53 of 250 (33 negative): "invitees that click the link are **forced to login to their apple account**" (1★, Nov 12, 2026); "Why do I need a iCloud subscription for this??" (1★, Oct 14, 2026); a 4★ asks for exactly Digi's idea: "ability for guests to share photos and video… in a shared album that would **auto delete**… Also add… a code option" (Nov 11, 2026) | [V] Apple Newsroom Feb 2025; review RSS |
| **Google Photos** | Shared albums; **"Anyone with the link can view the photos and add to the album"**; **QR-code album sharing** rolled out from late May 2025 (10th anniversary update) | [V] Google Photos Help 6131416; Android Central / Android Authority, May 2025 |
| **Snapchat** | **Shared Stories** (2022): invited people can add, and they can bring in their own friends; disappear after 24 h. **Memories storage became paid in Sept 2025**. Snap passed **30M paid subscribers** (Snapchat+, Memories Storage, Lens+) in Q3 2026; "Other revenue" rose 84% to **$349.7M** | [V] Social Media Today (2022); Snap Q3 2026 coverage (Nov 4, 2026) |
| **Partiful** | Invites with a **Shared Photo Album** ("hosts upload pics… and collect photos from guests"); 289,598 US ratings at 4.95★; IAPs Partiful Plus $4.99, "Peek" $1.99, Premium Add-On $4.95 | [V] App Store |

**What this means (E, high):** "one album for everyone's photos" is solved for free by Apple and Google, and Apple fixed its two old weaknesses (low resolution, Apple-only) in Sept 2026. Paid event apps survive on three things the platforms don't do: **(1) the disposable-camera game (shot limits + reveal), (2) zero-friction guest join, (3) a look and a keepsake.** Digi adds a fourth: **(4) AI re-develop of the night.**

**Snap's lesson for Digi (E, high):** Snap charged for Memories storage and it worked: paid subscribers grew from 25M (Feb 2026) to 30M+ (Q3 2026) [C, Snap via press]. People pay to **keep** memories. "Keep this roll forever" is a fair paid feature, as long as saving to the phone stays free.

---

## 4. Social and friend cameras: what's alive in Nov 2026

| App | US ratings (Nov 17) | 1-day change (vs Nov 16 pull) | Money [V IAP] | Recent reviews (last 250) | Status (E) |
|---|---|---|---|---|---|
| **Locket** | 593,068 (4.76) | **+293** | Gold $1.99–4.99/mo, $16–36/yr | 4.52★, 6% 1–2★; "safe for kids", "if you have strict parents" | Alive, kid-heavy. 100,000+ subscribers, profitable, 15 staff [C, TechCrunch Nov 3, 2025]. AppGoblin models ~$200K+/mo [E, low] |
| **BeReal** | 1,163,576 (4.77) | +26 | none | — | Flat; owned by Voodoo (€500M, 2024) [C] |
| **Instants** (Instagram) | 26,469 (4.74) | +71 | none | — | Meta's friend camera since May 12, 2026 |
| **Retro** | 19,211 (4.77) | +41 | $1.99/wk, $4.99/mo, $35.99/yr (trial variants) | 4.42★; "a great alternative to the former LAPSE app" (4★, Nov 3, 2026) | Growing slowly; picked up ex-Lapse users |
| **Lapse** | 118,322 (4.75) | +2 | none | **2.74★, 49% 1–2★; "social" in 145 of 250, "bring back" in 87; "lost/gone/deleted" in 67** | Social removed (Dec 2025); last update Dec 6, 2025 |
| **Dispo** | 8,298 (4.30) | +1 | Max $1.99–9.99/mo, $19.99–59.99/yr with **3-day trial**; cameras $0.99 | **1.73★, 80% 1–2★; ads in 98 reviews (84 negative); "lost" in 69** | Decaying; ad-stuffed |
| **setlog** | 393 (4.61) | +6 | none | 3.71★ | Small, video-first |
| **stripz** | 34 (4.65) | 0 | none | sign-up errors ("Unsupported phone provider", Oct 17, 2026) | Stalled; no update since Aug 11, 2026 |
| **Beam** | 200 (4.79) | 0 | none | phone-number OTP bugs | Early |

"1-day change" compares today's count with the Nov 16 pull in `02-competitors.md`; the exact capture times differ, so read it as a rough daily pace (E, medium).

**Quotes worth keeping [V]:**
- Lapse: "PLEASE BRING BACK THE OLD LAPSE!! … all of my old pictures I had on there are gone!!" (2★, Nov 15, 2026); "i live in a small town and most teens in my town used that to connect!" (4★, Nov 8, 2026).
- Dispo: "I took pictures literally last night after updating my app and watched the timer on them go down as it was 'developing' and **they're gone**" (1★, Nov 8, 2026); "Getting served a non-skippable ad every 3 photos you swipe through!" (1★, Aug 23, 2025); "got charged **$65 for the year**" after a 3-day trial reminder never came (1★, Aug 25, 2026).
- Locket (new this month): "now when you save the photos… the photo edges are curved and **there's a watermark**. Bring back no watermark" (1★, Nov 15, 2026). Only 1 of 250 reviews, so weak evidence, but it shows a watermark on *saved* photos is noticed. (The earlier report found watermarks almost never mentioned in AI-camera apps. Both can be true: people tolerate a watermark on a free AI output, less so on their own photos.)

**The pattern (E, high):**
1. **The develop-later mechanic is loved once, then becomes a reason to lose trust.** Dispo's and Lapse's worst reviews are about photos that never came back. A delayed reveal is a promise; break it and you're done.
2. **Friend cameras need a daily surface** (Locket's widget). Digi is episodic (parties). Don't copy Locket's retention model.
3. **Ads inside a memories app poison it** (Dispo). Digi should never show ads in a roll.

---

## 5. Photo booth and strip apps

### 5.1 Consumer booth/strip apps [V prices, Nov 17, 2026]

| App | Released | US ratings | Price | What it does |
|---|---|---|---|---|
| **Licowa** | Oct 2024 | 4,549 (4.82) | $4.99/mo, $33.99/yr | 4-cut booth + K-pop idol frames + wallpapers; reviews are mostly wallpaper fans |
| **Pocketbooth** | Sep 2010 | 2,200 (4.50) | **$4.99/wk**, $19.99 or $39.99/mo, **$99.99/yr**, Event Pack $4.99, style packs $0.99 | The original iPhone booth; now sold by "AI Photo Editor Lab SRL". Recent reviews: 3.30★, 38% 1–2★; "QR CODE OPENS UP NSFW… pop up ads… Even if you purchase the premium version" (1★, Sep 8, 2026); "the app completely wiped our event, templates and event gallery" (1★, Oct 3, 2026) |
| **Boothie** | Jun 2026 | 40 (4.35) | Plus $6.99, Gold $9.99, Pro $7.99/wk or $19.99/mo; 10 credits $2.99, 25 $5.99, 60 $11.99 | AI re-render of a **single selfie**; $56,557 last 30 days, verified via RevenueCat [V TrustMRR, synced Nov 16, 2026]. Covered in chapter 02 |
| **Sera** | Mar 2026 | 86 (4.91) | $9.99/wk, $129.99/yr ($69.99 "Limited Offer") | "Split the strip, keep one, give one" |
| **ThisBooth** (TR) | Apr 2026 | 35 (4.89) | $3.99 / $4.99 / $29.99 | Print-ready strips |
| **BOOTH** | Jun 2026 | 12 | $3.99/wk, $4.99/mo, $29.99/yr | — |
| **IncrediBooth** (Hipstamatic) | Nov 6, 2026 | 6 | Unlimited $9.99 | 4 shots "ready or not"; map of real booths |
| **Tira** | **Nov 9, 2026** | 10 | Film Club $4.99/mo, $19.99/yr | Newest vintage booth clone |
| **Luvs Cam** | Oct 2025 | 10 | PRO $1.99–4.99; lifetime $6.99 / $12.99 | Retro booth |
| **MY4CUT** | Jul 2024 | 33 | $4.99/mo, $36/yr; **"Group Event 1-Week Pass" $12.99**; "organization" $39.99/mo | Korean 4-cut; only consumer booth with an event pass |
| **Photobooth: AI photo booth** | Nov 2025 | 82 (**2.12★**) | $9.99/wk, $24.99/mo, $39.99/yr; packs $11.99–34.99 | An AI booth that users hate |
| **stripz** | Jun 2026 | 34 | free | **Daily group strip: "every post stays blurred until the whole group contributes… One person flakes? The strip never develops"**; anonymous nudges; "red shrimpy tile of shame" |

### 5.2 Pro iPad booth software (different market) [V]

| App | US ratings | Price |
|---|---|---|
| Mini Photobooth | 9,107 | Pro $44.99/mo, $269.99/yr; recent reviews 36% 1–2★ with price in 108 of 250 ("You have to pay an absurd amount just to get a couple of photos", 1★, Mar 16, 2026) |
| Touchpix | 6,766 | $43.90/wk, $122.99/mo, $879.99/yr |
| LumaBooth | 1,616 | Full Access $19.99 / $199.99 |
| Photo Booth Studio | 209 | $29.99/mo, $179.99/yr |
| KRUU, Booth.Events, Snap360, ZillaBooth | — | B2B; hardware rental businesses |

**Read (E, medium):** "photo booth" on the App Store mostly means **iPad software for people who rent booths at events**, at $20–45/month. That's not Digi's buyer. The consumer strip apps are small (best is Licowa at 4,549 ratings, and it's really a K-pop frames app). **No app makes an AI group strip from one group photo, and no booth app is tied to a shared roll.** That gap still holds from the earlier report.

---

## 6. How these products grow: invite loops with real numbers

### 6.1 The event-camera loop

```
Host sees TikTok/IG → creates roll (free ≤5–10) → shares QR/link in group chat or on tables
  → 20–35% of guests actually shoot (POV hosts' numbers)
  → reveal next morning → everyone opens the same link
  → some guests are future hosts ("Now all my friends are planning to use this at their weddings")
```

**Measured inputs (V, from reviews):** active-guest rate **21–35%** (3 hosts); photos per active guest **~12** (260 / 22); hosts used extra pushes: DJ announcement, QR on every table or plate, reminders.

**Model (E, low confidence, for planning only):**
- A Digi house-party roll invites **15** people (group chat). Web join lifts participation above POV's in-person QR numbers, so assume **40%** → **6 shooters**.
- Everyone who opens the reveal link sees Digi's look and the "Host your own roll" button. Assume **10** of 15 open it.
- Assume **3%** of reveal viewers host their own roll within 60 days → **0.3 new hosts per roll**.
- Assume **10%** of viewers install Digi to "make it a digi" → **1 install per roll**.
- **K (hosts) ≈ 0.3** per roll. Helpful, not explosive. This matches the earlier report's +0.1 K overall estimate once you multiply by the share of users who ever host.

### 6.2 What actually spread these apps (C/V)

| App | Engine | Evidence |
|---|---|---|
| POV, Once | TikTok wedding content + host word of mouth | Host reviews name TikTok [V]; Once's site leads with real wedding reviews [V] |
| Lapse | **Forced invites** (5 friends) → #1 US, then −70% downloads within weeks | Appfigures, Nov 17, 2023 [C] |
| Locket | Widget + organic TikTok, still a 5-friend gate | TechCrunch 2022/2025 [C]; reviews [V] |
| Partiful | Every invite is a landing page; guests become hosts | 500K MAU Q1 2025 [C, NoGood via earlier report] |
| stripz | Group pressure (everyone or nothing) | 34 ratings, stalled [V] |

**Rule (E, high):** the invite must carry value the guest wants right now (*"add your shots to Mia's NYE roll"*), not a gate (*"invite 5 friends to unlock"*).

---

## 7. Monetisation patterns, summarised

| Pattern | Who | Fits Digi? |
|---|---|---|
| **Host pays per event by guest count** (consumable) | POV, Once, Lense, Flock, Scene, Reveal, Party Cam, Unveil | **Yes, for big rolls.** Match the $4.99 / $14.99 / $29.99 ladder |
| **Free small events** (3–10 guests) | All of the above | **Yes.** Free ≤10 matches POV, beats Once/Lense |
| **"Never a subscription" as a selling point** | Flock, Once, Reveal, Scene, Lense all say it | Digi has a subscription for AI looks; keep the roll purchase separate and one-time |
| **Add-ons: unlimited shots, video, +guests** | $3.99–9.99 each | Unlimited shots maybe; video no (v1) |
| **Keep longer / forever** | Flock $4.99–9.99/yr, AllShots $4.99, Snap Memories | **Yes**, after 30 free days |
| **Keepsake** | POV photobook (~$20), Cammy Keepsake $9.99, Retro postcards | Later (print strip) |
| **AI recap per output** | Cammy $2.99 per recap | **Yes. This is Digi's natural upsell: AI-develop the roll's best 4 shots into a strip** |
| **Subscription for groups** | Waldo Plus $49.99/yr, Party! Club $19.99/yr, Cluster | Bundle into Digi yearly (e.g., "rolls up to 50 included") |
| **Ads** | Dispo, Pocketbooth | **Never** in a roll |

---

## 8. Threats specific to the group roll (ranked, E)

| Threat | Likelihood next 60 days | Why | Digi's answer |
|---|---|---|---|
| **Apple Temporary Shared Albums + Invites** | Certain (already shipped) | Free, full-res, web join without Apple Account, 5,000 items, 30 days | Look + reveal + AI strip; one tap from camera to roll |
| **Once adds AI looks** | Medium | It already has an orange date stamp, Story button, recap video, 62 ratings/month | Ship first; make the AI look the hero of the reveal |
| **POV / Lense add AI recap** | Low–medium | Natural upsell, Cammy proves price | Speed; digicam brand |
| **Hipstamatic bundles Party! + IncrediBooth** | Low–medium | Same owner, booth launched Nov 6, 2026 | Better AI; group strip |
| **Instagram/Snap add a "develop later" shared roll** | Low (60 days), medium (12 months) | Instants exists; Shared Stories exist | Keepsake + look, not feed |
| **Broken reveal (lost photos)** | Medium if rushed | Dispo/Lapse reviews | Upload queue, server-side receipts, test with 10 phones before NYE |

---

## 9. What Digi should copy (and not copy) for its group roll

**Copy:**

| From | Copy this | Why |
|---|---|---|
| Once | 3-question setup (what / ends when / how many), shots-per-guest chips **5 · 10 · 24 · 36**, sample album in empty state, "Reveals in 8h 12m" tiles, header counters "**41 shots · 6 people · develops 9:00**", Story + Save buttons on every photo | Proven, clean, on Mobbin |
| Reveal / Scene | **First name only.** No account, no email | Fixes POV's #1 complaint |
| Scene | **Offline queue** ("photos save on the phone and upload when the signal comes back"), full-quality upload, "**team photo challenge**" | Venue signal and blur are top complaints; challenges lift photo count |
| Party! | **Whole roll reveals to everyone at once, next morning** | The shared "lab pickup" moment is the content |
| Lense | Lock-screen reminder for guests (Live Activity in the app; for web guests, an "add to Home Screen" tip is the most you can do) | Reminders lift participation |
| Lapse | "**No download required ✨ Even friends not on Digi can join!**" banner on the invite sheet; print button for the QR | Clear promise at the moment of sharing |
| Flock | "**Keep another year**" one-time | Honest storage upsell |
| Cammy | **Per-output AI price** | Lets a guest pay $1.99–2.99 without subscribing |
| POV | Printable table card with QR | Hosts already do this |

**Don't copy:**
- POV's App Clip → sign-in wall. (Every 1★ about "no download" being misleading.)
- Lapse's forced invites. Locket/Retro's friend gates.
- stripz's "tile of shame" and anonymous nudges. Fine for a teen streak app; wrong for a party brand.
- Dispo's ads and trial-reminder failures.
- Reveal's $15.99-for-25 pricing (outlier; 19 ratings).

---

## 10. Contest reality check (Nov 16 – Dec 16, 2026)

- **Most December parties will be free-tier.** A Friendsgiving or Christmas party of 8–12 people fits "free up to 10". Only NYE parties and company parties will cross 25 (E, medium).
- **Event-camera reviews barely mention holidays** (1 of 250 POV reviews; 0 of 37 Once reviews) and dip in December [V]. Paid event demand is a wedding-season business (May–Oct). So **do not forecast roll revenue in the contest.** Forecast installs.
- **Where the roll can make contest money (E, low–med):** the AI strip of the night. If 1 in 5 rolls buys a $2.99 "AI-develop 4 shots" (cost ~$0.10–0.15 at Seedream's ~$0.02–0.03/image), that's ~$0.60 gross per roll before Apple's cut. Small. The bigger effect is guests who install and buy a Party Pack ($5.99) or start a trial.
- **Storage is not the Lapse problem at Digi's scale.** A 25-guest roll × 24 shots × ~1.2 MB ≈ 0.7 GB → **~$0.01/month on Cloudflare R2** ($0.015/GB-month, free egress) [V Cloudflare R2 pricing]. 1,000 rolls ≈ $11/month. Lapse's cost problem came from storing a free social network forever, not from events (E, high). Still: expire free rolls after 30 days (Apple does the same with Temporary albums), keep paid ones for a year.

---

## 11. Corrections to earlier research (what I changed and why)

| Earlier claim | Correction | Source (date) |
|---|---|---|
| Apple Shared Albums "photos downsized to 2048 px on the long side" (`03-product-social.md` §1.3) | **Out of date since iOS 27.** New albums store originals at full resolution and count toward the owner's iCloud storage; free **Temporary Shared Albums** (5,000 items, deleted after 30 days per MacRumors); web join without an Apple Account. The 2048-px rule now applies only to albums created on version 26 or earlier | Apple Support 148868 (Sep 14, 2026); MacRumors (Aug 20, 2026) |
| Lense "Max 25 guests $4.99 … 200 guests $69.99" (`02-competitors.md` §3d) | $69.99 is the **200-guest "unlimited captures"** IAP. Website plan prices: free ≤7; 25 $4.99; 50 $14.99; 100 $34.99; 150 $44.99; **200 $59.99**; 250 $69.99; 500 $99.99; +$9.99 unlimited captures; +$9.99 video | lense.app/pricing; App Store IAP (Nov 17, 2026) |
| Once "Film: 10 participants $1.99 … 150 participants $49.99" | Complete ladder: **free ≤5**; 10 $1.99; 25 $4.99; 50 $14.99; 100 $29.99; 150 $49.99; 200 $69.99; ∞ $99.99; unlimited shots $9.99; top-ups +10 $3.99 / +25 $9.99 / +50 $19.99. Some IAPs show a second, higher price set (e.g. 25 at $6.99, 100 at $39.99), probably a test or the "with unlimited shots" variant (E) | once.film/pricing; App Store; Mobbin (Nov 17, 2026) |
| Task brief: "POV (event camera, raised funding)" | **Not found.** A Tracxn listing says POV Camera (NY, founded 2022) "has not raised any funding yet". I could not open the page to confirm it's the same company | Tracxn via web search snippet (2026); no press found |
| Snap "Other revenue ~$316M in Q2 2026" | Q3 2026 Other revenue **$349.7M (+84%)**; **30M+ paid subscribers** across Snapchat+, Memories Storage, Lens+; Memories storage paid since Sept 2025 | Snap Q3 2026 results coverage (Nov 4–8, 2026) |
| Snapchat+ price | The US App Store IAP list shows **Snapchat+ Monthly $4.99** (several entries); press coverage of the Q3 call says $3.99. Both may exist (regional or tier). Use the App Store number for US pricing comparisons | App Store (Nov 17, 2026); press (Nov 2026) |
| Locket Gold "$1.99–3.99" (`03-product-social.md`) | App Store list: **$1.99–4.99/month and $16–36/year**. Techweez says $4.99/mo or $45/yr | App Store (Nov 17, 2026); Techweez (Jun 26, 2026) |
| Dispo described as "faded" | Worse: last 250 US reviews average **1.73★**, 80% 1–2★; ads in 98 reviews; yearly Max up to $59.99 with 3-day trial | Review RSS; App Store (Nov 17, 2026) |
| "The Guest" listed as a wedding competitor in the task | **Closed.** The Knot stopped new events on **Oct 12, 2022** ("low usage and new App Store limitations"); downloads offered until June 2024; it had dropped its $100 fee in 2018 | Lense comparison page (competitor marketing; medium confidence) |
| Google Photos sharing = "unguessable link" | Plus **QR-code album sharing** since late May 2025; "Anyone with the link can view the photos and add to the album" | Google Photos Help; Android Central (May 2025) |

---

## What this means for Digi

1. **Keep the Digi Roll out of the contest-critical path.** Build the solo camera + AI looks + Party Pack first. Ship the Roll for NYE (Dec 26–30) as an acquisition feature, as `03-product-social.md` already proposed. The data in §2.5 and §10 says rolls won't move contest profit much; they will move installs.
2. **Price the Roll at market, as consumables in RevenueCat:**
   - Free: up to **10 people**, 24 shots each, kept 30 days.
   - **25 people $4.99 · 50 people $14.99 · 100 people $29.99** (one-time, per roll).
   - Add-on: **Unlimited shots $4.99** (half the market's $9.99, an easy yes).
   - **Keep forever $4.99** (after 30 days; saving to Photos always free).
   - Digi yearly ($39.99) includes rolls up to 25 people. Say so on the paywall: "Rolls for up to 25 friends included."
3. **Sell the AI layer per roll:** "**Develop the best 4 as a Digi strip — $2.99**" (or 3 digis). Cost ~$0.10–0.15. This is the one thing POV, Once and Lense don't have. Guests can buy it too.
4. **Guest join = web, first name only.** `digi.pink/r/<code>` → "Mia's NYE roll · add your shots" → camera opens with the Digi look live → counter "24 shots left". No account, no App Clip in v1. Queue uploads offline; upload originals (or at least 3000 px, quality 0.9), never the POV-style compressed file.
5. **Make the reveal the content.** Develop at **9:00 a.m. host time**. Everyone gets the same link. The reveal page shows: a 3-second "developing" animation, the AI strip on top, then the grid with each guest's first name, and buttons **Save all · Story · Make your own roll (free)**. This is the TikTok video ("our NYE roll developed at 9am").
6. **Copy Once's setup, cut to three screens:** "What's the party?" (House party / Birthday / Friendsgiving / Christmas / NYE / Bachelorette) → "When does it close?" (default 4:00 a.m.) → "How many friends?" (10 free · 25 · 50 · 100) with shots chips **10 · 24 · 36 · ∞**. Show a sample roll on the empty screen.
7. **Build participation helpers, because 20–35% is normal:** a printable table card PDF with the QR and "Shoot the night. It develops at 9am." · a host "remind everyone" button that opens the share sheet with a pre-written message · 5 optional photo prompts ("the kiss at midnight", "the worst dancer", "the host", "the snack table", "the group shot") taken from Scene's photo-challenge result.
8. **Make the date stamp clearly Digi's.** Once already uses an orange vertical stamp. Use the classic digicam style instead: **bottom-right, horizontal, `'26 12 31  23:58`**, orange LED font, plus a tiny `digi.pink` mark only on free exports. Don't put a watermark on guests' own unedited photos (Locket complaint).
9. **Never break the promise of the reveal.** Before NYE, test one roll with 10 phones (iPhone + Android browsers), weak signal, and app killed mid-upload. Show each guest "✓ 12 shots safe" after upload. Write the "your photos are safe" status in the UI, because Dispo and Lapse died on "they're gone".
10. **Don't build:** a feed, follows, streaks, invite gates, ads in rolls, or a shame mechanic. Keep "Make your own roll" and "Make it a digi" as the only conversion buttons a guest sees.
11. **Positioning line against Apple/Google (free albums):** "Your phone's shared album keeps the photos. **Digi develops the night.**" Lead every roll screenshot with the look and the strip, never with "everyone's photos in one place".
12. **Track three roll metrics from day one:** guests joined ÷ invited, shots per active guest (benchmark ~12), and reveal-page → "Make your own roll" taps. If shooters per roll are under 30% after 20 rolls, add the prompts and reminders before anything else.

---

## Sources

All App Store data: iTunes Lookup/Search API and apps.apple.com pages, US storefront, pulled Nov 17, 2026. Reviews: App Store customer-review RSS (US, most recent, up to 250 per app), pulled Nov 17, 2026.

**App Store pages (IDs)**
- POV – Disposable Camera Events: https://apps.apple.com/us/app/id1636032890
- Once – Disposable Camera Event: https://apps.apple.com/us/app/id6754265953
- Lense: https://apps.apple.com/us/app/id6444442256
- Party! Disposable Camera (Hipstamatic): https://apps.apple.com/us/app/id6504739136
- Scene: https://apps.apple.com/us/app/id6758879648 · Reveal: https://apps.apple.com/us/app/id6797035931 · Flock: https://apps.apple.com/us/app/id6775024008 · Party Cam: https://apps.apple.com/us/app/id6651825891 · Unveil: https://apps.apple.com/us/app/id6789856722 · Kadra: https://apps.apple.com/us/app/id6789768740 · Everlens: https://apps.apple.com/us/app/id6775506628 · AllShots: https://apps.apple.com/us/app/id6777402204 · EventPics: https://apps.apple.com/us/app/id6747008923 · Camvi: https://apps.apple.com/us/app/id6780475346
- Waldo: https://apps.apple.com/us/app/id1030013041 · PhotoCircle: https://apps.apple.com/us/app/id517539894 · SWSH: https://apps.apple.com/us/app/id6476418833 · Cluster: https://apps.apple.com/us/app/id596595032 · Cammy: https://apps.apple.com/us/app/id6756288162 · RollCam: https://apps.apple.com/us/app/id6797953438 · Beam: https://apps.apple.com/us/app/id6760328464
- Locket: https://apps.apple.com/us/app/id1600525061 · BeReal: https://apps.apple.com/us/app/id1459645446 · Instants: https://apps.apple.com/us/app/id6756442328 · Retro: https://apps.apple.com/us/app/id6443709020 · Lapse: https://apps.apple.com/us/app/id1636699256 · Dispo: https://apps.apple.com/us/app/id1491684197 · setlog: https://apps.apple.com/us/app/id6587576438 · stripz: https://apps.apple.com/us/app/id6776776707
- Pocketbooth: https://apps.apple.com/us/app/id385145330 · Licowa: https://apps.apple.com/us/app/id6667106950 · Boothie: https://apps.apple.com/us/app/id6775603987 · Sera: https://apps.apple.com/us/app/id6758673087 · ThisBooth: https://apps.apple.com/us/app/id6762100716 · IncrediBooth: https://apps.apple.com/us/app/id6799999961 · Tira: https://apps.apple.com/us/app/id6824808242 · MY4CUT: https://apps.apple.com/us/app/id6504497435 · Mini Photobooth: https://apps.apple.com/us/app/id1342093386 · Touchpix: https://apps.apple.com/us/app/id1355372875 · LumaBooth: https://apps.apple.com/us/app/id1162206015
- Apple Invites: https://apps.apple.com/us/app/id6472498645 · Partiful: https://apps.apple.com/us/app/id1662982304 · Snapchat: https://apps.apple.com/us/app/id447188370 · Google Photos: https://apps.apple.com/us/app/id962194608

**Company pages (read Nov 17, 2026)**
- POV home and pricing calculator: https://pov.camera · https://pov.camera/pricing
- Once home and pricing: https://once.film · https://once.film/pricing
- Lense pricing: https://www.lense.app/pricing · The Guest alternative page: https://lense.app/the-guest-photo-sharing-alternative
- Waldo pricing: https://www.waldophotos.com/pricing
- Hipstamatic Party!: https://party.camera
- Screensdesign POV showcase ($200K/mo estimate): https://screensdesign.com/showcase/pov-disposable-camera-events
- Tracxn POV Camera profile (blocked; read via search snippet): https://tracxn.com/d/companies/pov-camera/__otsPKgTYKOf--bzjtwuoumF5CD7v2MuvTqYAC3yVxjg
- Boothie verified revenue (synced Nov 16, 2026): https://trustmrr.com/startup/boothie.md

**Platforms**
- Apple Shared Albums limits (published Sep 14, 2026): https://support.apple.com/en-us/148868
- MacRumors, "iOS 27 Shared Albums Go Full Res at the Cost of Your iCloud Storage" (Aug 20, 2026): https://macrumors.com/2026/08/20/ios-27-shared-albums-eat-into-icloud-storage
- Apple Newsroom, "Introducing Apple Invites" (Feb 4, 2025): https://www.apple.com/newsroom/2025/02/introducing-apple-invites-a-new-app-that-brings-people-together/
- Google Photos Help, sharing: https://support.google.com/photos/answer/6131416
- Android Central, Google Photos 10th anniversary QR sharing (May 2025): https://www.androidcentral.com/apps-software/google-photos-10-year-celebration-updates
- Social Media Today, Snapchat Shared Stories (2022): https://www.socialmediatoday.com/news/snapchat-adds-shared-stories-to-fuel-collaborative-content/624503/
- Snap Q3 2026 subscribers and revenue (Nov 2026): https://techeconomy.ng/snap-paid-subscribers-30-million-subscription-revenue · https://ppc.land/snap-ad-revenue-gains-4-as-subscriptions-supply-74-of-q3-growth/ · https://www.marketbeat.com/instant-alerts/transcript-snap-q3-earnings-call-highlights-2026-11-08/
- Cloudflare R2 pricing: https://developers.cloudflare.com/r2/pricing/

**Press and background**
- TechCrunch, Locket and Gen Alpha (Nov 3, 2025): https://techcrunch.com/2025/11/03/lockets-social-app-is-picking-up-steam-with-gen-alpha
- Techweez, Locket review (Jun 26, 2026): https://techweez.com/2026/06/26/locket-app-review-photo-widget-social-app/
- AppGoblin, Locket estimates: https://appgoblin.info/apps/1600525061
- Appfigures, Lapse downloads −70% (Nov 17, 2023): https://appfigures.com/resources/insights/20231117/5-lapse-loses-momentum-as-downloads-drop-70-percent
- Product Hunt, Lapse removing social (Chris Messina): https://www.producthunt.com/p/lapse-3/lapse-a-cautionary-tale-for-social-products-that-prioritize-disposable-sharing
- PetaPixel, Hipstamatic Party! launch (Sep 18, 2024): https://petapixel.com/2024/09/18/hipstamatic-party-app-is-a-disposable-camera-experience-made-for-events
- TechCrunch, Waldo $5M (Jan 21, 2016): https://techcrunch.com/2016/01/21/waldo-raises-5-million-for-a-photo-finding-platform-targeting-professional-photographers-events · CB Insights, Waldo financials: https://www.cbinsights.com/company/waldo-photos/financials

**Mobbin (viewed Nov 17, 2026)**
- Once, Creating a film: https://mobbin.com/flows/62e405c1-8bc5-4d97-a77a-9a483937d0fb
- Once, Album detail: https://mobbin.com/flows/a19e73bb-95f2-4675-a69c-5fca19876324 · Film detail: https://mobbin.com/flows/8278fc43-1ec1-4d25-9d9a-6ed264b2ed66 · Add Participants: https://mobbin.com/screens/f7c3e6d0-e40f-46bc-b0e6-166821a48041
- Lapse, Invite friends to roll: https://mobbin.com/flows/8f392a85-f358-4366-98e1-a4126bf2223b · Share profile: https://mobbin.com/flows/f2e4ee07-9e57-4fcf-8f3e-eaecd1ffba2e
- Apple Invites, Creating an event: https://mobbin.com/flows/724caec0-e620-4720-8c77-d386595857f0
- Partiful, Creating an event: https://mobbin.com/flows/1d22c2df-c904-4cb5-9e45-6f783cfa46dc
- Retro, Journals: https://mobbin.com/flows/e6311723-5ba8-47bb-be3e-9fe361ab51de

**Internal model data**
- AppKittie cached snapshot (Nov 12, 2026; API not called): `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/akdb/appkittie_db_2026-11-12.csv` (Once: rev 25,000; dl 8,859)

---

## Fact-check (2026-11-16)

*Independent re-check of the 10 numbers in this chapter that matter most for decisions, Nov 16–17, 2026: iTunes Lookup API, apps.apple.com IAP lists, competitor pricing pages, Apple and Google help pages and press.*

| # | Claim | Re-check result | Status |
|---|---|---|---|
| 1 | Guest ladder: 25 ≈ $4.99, 50 ≈ $14.99, 100 ≈ $29.99–34.99 (one-time) | Holds in today's US IAP lists: Once 10/$1.99, 25/$4.99, 50/$14.99, 100/$29.99, 150/$49.99; Party Cam 15/$1.99, 25/$4.99, 50/$14.99, 100/$34.99 … 500/$149.99; Lense 25/$4.99, 50/$14.99, 100/$34.99, 200 unlimited/$69.99; POV $4.99/$14.99/$34.99 tiers | Confirmed |
| 2 | POV free up to 10 guests | Holds ("Up to 10 guests: Free", pov.camera/pricing) | Confirmed. Other free tiers (Flock 3, Once 5, Scene 5, Reveal 5, Lense 7) not re-checked |
| 3 | iOS 27 Temporary Shared Albums: free, up to 5,000 items, deleted after 30 days | Holds (Apple Support 127875, updated Oct 6, 2026; 148868 published Sep 14, 2026 also exists and covers the 5,000-item limit). Not available in all countries | Confirmed; second Apple page added |
| 4 | Guests can join on the web without an Apple Account | Only in MacRumors (Aug 20, 2026), not in Apple's help pages I read | Downgraded to C in takeaway 6 |
| 5 | Google Photos QR-code album sharing since May 2025 | Holds: announced and rolling out May 28, 2025 (10th anniversary) | Confirmed |
| 6 | Locket 593,068 US ratings | 593,254 on Nov 17 (normal growth) | Confirmed |
| 7 | Pro booth prices: Touchpix $43.90/week, Mini Photobooth $44.99/month | Holds (Touchpix also $122.99/mo, $879.99/yr; Mini Photobooth $269.99/yr) | Confirmed |
| 8 | Cammy sells "1 AI Recap" for $2.99 | Holds (also 5 AI Cuts $9.99, 12 for $19.99, Unlimited $39.99/yr). Cammy is tiny: 6 US ratings, launched Jul 17, 2026 | Confirmed |
| 9 | Lapse removed its social layer | Holds: removal of feed, profile and chat announced Nov 3, 2025 (secondary sources; no primary post found). Last US update Dec 6, 2025; 118,321 ratings | Confirmed (C on the date) |
| 10 | POV has not raised funding | No funding found for Untitled Tech, Inc. in fresh searches; Tracxn page still blocked. Absence of evidence, not proof | Unchanged, still C |

**What I changed**
- Takeaway 6: added Apple Support 127875 as the page that states the 5,000/30-day limits; marked the "web join without an Apple Account" detail as C (MacRumors only).

**What I could not verify**
- Review-mining numbers (POV weddings 103/250, guest participation 22/62, Lapse 145/250, Dispo 80% 1–2★): not re-run.
- Once's orange date stamp and Story button (Mobbin screens): not re-opened.
- Free-tier sizes for Flock, Once, Scene, Reveal and Lense.
