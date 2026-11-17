# 12 · App Store Optimization (ASO) for Digi

*Track 12 of the Digi niche bible. Data pulled Nov 17, 2026 (US, UK, UAE, Saudi Arabia, Egypt App Stores). Written for the founder, not for an ASO specialist.*

**Labels used in this chapter**
- **V** = I checked it myself today (iTunes Search API, Apple's search autocomplete, App Store web pages, or Apple's own docs).
- **C** = someone else's claim (vendor blog, tool estimate, prior research).
- **E** = my estimate, with a confidence level (high / med / low).

**One big caveat on the ranking data.** I used Apple's public iTunes Search API to see the top results for 70 US queries and 25-35 queries in each of four other stores. Its order is close to, but not always the same as, what the App Store app shows on an iPhone (E, med). Use it to judge *who you compete with*, not as an exact rank tracker. Raw data: `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/bible/aso12/data/`.

---

## Key takeaways

1. **"Photo booth" is the best big keyword Digi can actually win.** It is a top App Store search (AppKittie popularity 81/100, C). Apple's own autocomplete puts "photo booth" **first** when you type "photo b" (V). Yet the #1 US result has only **81 ratings**, averaging **2.1★** (a weak, beatable leader), and the top 10 has **zero** apps with 10,000+ ratings (V). Put "Photo Booth" in the app name.
2. **The big "camera" words are locked.** "film camera", "disposable camera", "vintage camera", "retro camera" and "camera filter" have top-10 medians of 9,000-27,000 ratings, led by Dazz Cam (118,170) and Lapse (118,322) (V). Put them in the keyword field for long-tail combos, but don't build the name around them.
3. **The easy wins are "photo strip", "booth strip", "y2k camera", "party camera", "event camera", "christmas ai" and "4 cut".** Their US top 10s have median ratings of **1 to 36** (V). They are low-volume, but a new app with a few dozen ratings can reach the top 3.
4. **The exact phrase in the app name beats ratings.** "Photobooth: AI photo booth" (81 ratings) outranks Mini Photobooth (9,107) for "photo booth". "Inbetween: Photo Booth Strips" ranks #1 for "booth strip" with **0 ratings** (V). For a new app, the name is the strongest lever you have on day one.
5. **"Digi" alone is not a findable brand yet.** A US search for "digi" returns telecom apps (CelcomDigi, Mi DIGI, DIGI.ro, My DIGI). All of them are weak (median 95 ratings), so Digi should own its own name within weeks. But it needs a descriptive phrase after "Digi:" (V).
6. **Christmas demand in the App Store is real but modest, and served by 2014-2017 frame apps.** Typing "christmas" autocompletes to lists, countdowns and games, not photos (V). Win Christmas with an **In-App Event + custom product page + "christmas" in the keyword field**, not in the name.
7. **Small competitors already run holiday In-App Events this week.** ism ("Grateful Digicam Memories", Nov 14-29), JemBooth ("Thanksgiving Photo Strips"), Photoautomat ("It's Holiday Season!", to Dec 13), TogetherLens ("Friendsgiving Photo Relay") (V). Digi needs its events approved by about **Nov 24** to get the Christmas run.
8. **Apple Ads lose money inside the contest window.** The US Photo & Video median CPI is **$2.79** (AppTweak 2025, C). The median download-to-paid is ~2.0-2.4% (RevenueCat, C). That puts the cost per payer at **~$115-140**, against ~$34 net from a yearly sale. Spend $0, or use only Apple's $100 new-account credit if the organisers confirm it isn't a deductible cost.
9. **Arabic search demand for this niche is close to zero.** Apple autocomplete returned **no suggestions** for كاميرا قديمة, كاميرا رقمية, كاميرا فيلم or فوتو بوث in the UAE and Saudi stores (V). Gulf and Egyptian users search in English. If you expand there, an **English (U.K.)** localization matters more than Arabic.
10. **Recommended metadata (Option A, 8.5/10):** name **"Digi: Photo Booth & Digicam"**, subtitle **"Y2K Flash Camera, Party Strips"**, plus a 98-byte keyword field (section 9).

---

## 1. How App Store search works, from Apple's own docs (V)

Apple publishes only a little about ranking. Here is what it says, then the practitioner rules that sit on top.

**Fields and limits**

| Field | Limit | Indexed for search? | Can change without a new app version? | Source |
|---|---|---|---|---|
| App name | 30 characters | **Yes (strongest)** | No | Apple product page doc |
| Subtitle | 30 characters | Yes | No | Apple product page doc |
| Keyword field | **100 bytes**; each keyword **longer than 2 characters** | Yes | No | App Store Connect help |
| Developer / company name | n/a | Yes ("your app is searchable by app name and company name") | No | App Store Connect help |
| Primary + secondary category | n/a | Yes | No | Apple search doc |
| Promotional text | 170 characters | **No** ("doesn't affect your app's search ranking") | **Yes** | Apple search doc |
| Description | 4,000 characters | No (practitioners agree, C) | No | App Store Connect help |
| Screenshot caption text | n/a | **Unconfirmed.** Appfigures claimed in June 2025 that Apple reads caption text (C). Apple has never said so. | No | Appfigures |

**What Apple says ranks you** (quote, V): *"Search results are based on a number of factors, including text relevance (matches for your app's title, subtitle, keywords, and primary category), as well as user behavior (downloads, ratings and reviews, and more)."*

**Keyword field rules from Apple** (V):
- Commas, no spaces after commas. Spaces inside a phrase are fine.
- Don't repeat words already in the name, subtitle or category.
- Plurals of words you already have count as duplicates.
- No "app", no filler words, no competitor names, no trademarks, no celebrity names.
- **100 bytes, not 100 characters.** Arabic letters take 2 bytes each in UTF-8, so an Arabic keyword field holds only ~45-50 letters.
- **Each keyword must be longer than 2 characters.** So "ai" cannot sit alone in the keyword field. Put "AI" in the name or subtitle if you want it.

**Apple's own warning about seasonal words** (V): *"Popular, functional terms ... and trending or seasonal terms, such as 'Christmas' or 'summer' may drive a lot of traffic, but are highly competitive – especially if you are a newer or smaller app."* My data says the Christmas photo results are *old* rather than *strong* (section 4). Apple's warning still holds for the head term "christmas", which autocompletes to lists and games.

**Practitioner rules (C, widely repeated, not confirmed by Apple):**
- Words combine across the name, subtitle and keyword field **within one localization**. "Photo" in the name plus "strip" in the keyword field can rank you for "photo strip".
- The name carries the most weight, then the subtitle, then the keyword field.
- Repeating a word across fields adds nothing. Use the space for new words.
- New apps get a short "honeymoon" visibility boost in their first days (C, low confidence). Another reason to have keywords and screenshots right **at launch**, not in v1.1.

---

## 2. Method (what I actually ran)

- **iTunes Search API**, `entity=software`, `limit=50`:
  - **US:** 70 queries.
  - **UK:** 25 core English queries.
  - **UAE and Saudi Arabia:** the same 25 plus 10 Arabic queries each.
  - **Egypt:** the first 11 queries only. The scratch disk filled up mid-run, so the Egypt data is partial.
- **For each query** I recorded the top 10 (name, seller, ratings count, average rating, release date, last update) and counted three things:
  - how many have under 100 ratings ("weak");
  - how many launched in the last 12 months;
  - how many have 10,000+ ratings ("big").
- **Apple's search autocomplete** (the `MZSearchHints` endpoint the App Store uses):
  - the suggestions for every query;
  - the suggestions for **85 short prefixes** (US), e.g. what Apple suggests after "photo b".
  - Apple orders suggestions by popularity. A suggestion high up for a short prefix is the best free volume signal there is (E, med).
- **App Store web pages** (apps.apple.com) for **143 apps**: subtitle, in-app purchase list, live In-App Events and screenshot set.
- **Screenshots and icons:** I looked at the first 5 screenshots of 15 competitors, plus their real icons (via Lookup).
- **AppKittie keyword popularity and difficulty:** cached Nov 12 (C, tool estimate). The AppKittie API is out of credits; I did not call it.
- **Apple docs** and vendor benchmarks (AppTweak, Appfigures, Phiture) for the rules and costs.

---

## 3. The keyword map: demand vs. difficulty (US, Nov 17, 2026)

**How to read this table:**
- **Popularity** = AppKittie 0-100 (C). "-" = not measured.
- **Autocomplete** = where Apple suggests the term after a short prefix (V). For example, "#1 at 'photo b'" means it is the first suggestion after typing "photo b". "None" means it does not appear in the top 10 suggestions for its prefix.
- **Top-10 median** = median US ratings count of the top 10 results (V). Lower = easier.
- **Weak / New** = how many of the top 10 have under 100 ratings / launched since Nov 2025 (V).

### 3a. Head terms (high demand)

| Keyword | Popularity (C) | Autocomplete (V) | Top-10 median (V) | Weak / New | #1 today (ratings) | Verdict |
|---|---|---|---|---|---|---|
| **photo booth** | **81** | **#1 at "photo b"** | **1,202** | 3 / 3 | Photobooth: AI photo booth (81) | **Go for it. In the name.** |
| photobooth (one word) | - | #1 at "photob" | 1,908 | 3 / 3 | Sera - Vintage Photobooth (86) | Go. Keyword field |
| film camera | 84 | #2 at "film" | 12,136 | 0 / 1 | Dazz Cam (118,170) | Too hard. Keyword field for combos |
| disposable camera | 62 | #6 at "disp" | 13,974 | 0 / 1 | Dispo (8,297) | Too hard for now |
| retro camera | 56 | "retro" autocompletes to games | 9,211 | 1 / 1 | Dazz Cam | Too hard |
| vintage camera | - | #3 at "vintage" | 12,134 | 0 / 0 | Dazz Cam | Too hard |
| digital camera | 33 | **#2 at "dig"** | 25,900 | 0 / 0 | flag7x (203) | Hard, but #1 has 203 ratings. Keyword field |
| camera filter(s) | - | #1 at "camera f" | 27,479 | 0 / 0 | Dazz Cam | Too hard |
| aesthetic photo editor | - | #3 at "aest" | 44,157 | 0 / 0 | Prequel (347,601) | No |
| ai photo editor | - | #1 at "ai p" | 325,001 | 0 / 0 | Grok (1.6M) | No |

### 3b. Mid terms (real but smaller demand)

| Keyword | Popularity (C) | Autocomplete (V) | Top-10 median (V) | Weak / New | #1 today (ratings) | Verdict |
|---|---|---|---|---|---|---|
| **digicam** | 25 | #2 at "digic" (after "digicel") | 5,565 | 2 / 1 | Dazz Cam | **Name or subtitle.** It's the niche word and fits the brand |
| **y2k camera** | 33 | #5 at "y2" | **13.5** | 6 / 6 | y2k: 2000s photo editor (13,208) | **Easy. Subtitle** |
| y2k | - | #1 at "y2" | 166 | 5 / 5 | y2k (13,248) | Covered by "y2k camera" |
| **flash camera** | 25 | #7 at "flash c" | 4,040 | 3 / 3 | flag7x (203) | **Subtitle.** Medium difficulty |
| **photo strip** | 39 | not in top 10 at "photo s" | **3.5** | 9 / 8 | Pocketbooth (2,200) | **Easy.** "strips" in subtitle |
| photo dump | 36 | weak ("dump" → games) | 3,962 | 4 / 3 | SCRL (128,664) | Keyword field only |
| ccd camera | 31 | #2 at "ccd" | 1,609 | 3 / 3 | CCD CAM (950) | Keyword field |
| **party camera** | 27 | none at "party c" | **36** | 6 / 4 | POV (15,701) | **Easy.** "Party" in subtitle |
| ai digicam | 28 | 2 app-name hints only | 3,608 | 3 / 2 | Sunva (1) | Comes free with "AI" + "digicam" |
| ai photo booth | - | none at "ai photo b" | 2,938 | 4 / 4 | Pocketbooth (2,200) | Medium. Comes with "photo booth" if "AI" is anywhere |
| point and shoot | - | - | 1,133 | 4 / 3 | NOMO CAM (48,154) | Skip |
| 2000s camera | - | - | 177 | 5 / 5 | 0.3MP Camera (10,133) | Keyword field ("2000s") |
| g7x | - | - | 3,023 | 3 / 3 | flag7x (203) | **Don't use.** Canon model name; trademark risk |

### 3c. Long-tail and party terms (low demand, easy)

| Keyword | Top-10 median (V) | Weak / New | #1 today | Verdict |
|---|---|---|---|---|
| booth strip | **1** | 9 / 9 | Inbetween: Photo Booth Strips (0) | Free win via "booth" + "strips" |
| photobooth strip | 53.5 | 7 / 6 | Sera (86) | Free win |
| event camera | 6 | 6 / 6 | POV (15,701) | Keyword field ("event") if the group roll is live |
| wedding camera | 91.5 | 5 / 5 | POV | Not Digi's audience (yet) |
| group photo | 3.5 | 6 / 2 | PhotoCircle (128,894) | Keyword field ("group") |
| ai group photo | 3,157 | 2 / 1 | Meitu (80,438) | Comes with "AI" + "group" |
| **christmas ai** | **1** | 9 / 7 | Christmas AI - Photo Maker (1) | **Easy in December.** Keyword field + event |
| christmas photo | 746 | 3 / 0 | Christmas Photo Frames (5,770, from 2014) | Winnable in Dec. Keyword field + CPP |
| christmas photo booth | 165.5 | 5 / 0 | Christmas Photo frame Editor (10) | Comes with "christmas" + "photo booth" |
| ugly sweater | 2 | 8 / 3 | My Ugly Sweater (2) | Tiny. Event name only |
| new years eve | 17 | 6 / 1 | Countdown apps | Intent is countdowns. Event only |
| friendsgiving | 8,286 | 1 / 1 | Friend-finder apps | Wrong intent. Skip |
| paparazzi | 9 | 7 / 3 | Paparazzi jewellery apps | Wrong intent. Skip |
| date stamp camera | 311.5 | 5 / 4 | Timestamp Camera Basic (34,060) | **Wrong intent** (proof-of-work photos). Skip |
| 4 cut | 0.5 | 9 / 3 | 4Cut - Korean Photo Strips (0) | Korean-strip niche. Optional |
| bachelorette | 61 | 6 / 3 | Batch: Let's Party (21,902) | Spring/summer, not now |
| relight | 1,875.5 | 3 / 1 | Relight Photo Lighting Editor (201) | Skip. Pro editors |
| digi | 95.5 | 5 / 0 | CelcomDigi (187) | Brand. Owned via the name |

### 3d. What the table means
- **There is no "digicam party" keyword with real volume.** People search for the *tool* ("photo booth", "digital camera", "y2k camera"), not the *occasion* ("party camera" doesn't autocomplete). Lead with the tool words. Use the occasion words in screenshots, events and CPPs.
- **"Photo booth" is the outlier:** top-3 demand with a weak top 10. Its #1 app (81 ratings, launched Nov 2025, subtitle just "Photobooth") wins by having the exact phrase in its name. In the "photo strip" top 10, only 2 of 10 apps have the two-word phrase "Photo Booth" in their name (Pocketbooth, Inbetween); the 2026 launches mostly use "photobooth", "booth" or "strip" instead (V). **That is Digi's opening.**
- **"Digital camera" is the second-best signal:** #2 autocomplete after only three letters. The #1 result (flag7x) has just 203 ratings but is very relevant. Put "digital" in the keyword field. Over time, behaviour (downloads and ratings) can carry Digi up.

### 3e. Autocomplete suggestions worth knowing (US, V)
- After **"digicam"**:
  - generic: "digicam filter", "digicam free";
  - app names: "molly: digicam photo filters", "halfpress: digicam camera", "jellybooth - digicam & booth".
  - Note **"jellybooth - digicam & booth"**: a direct name-pattern rival to Digi.
- After **"photo booth"**: "photo booth free", "photo booth app for events", "photo booth template", "photo booth collage", "photo booth filter", "photo booth editor".
- After **"photo strip"**: "photo strips" plus nine app names (thisbooth, 4cut, afterglow, boothkin, boothly, pomori, **stripz: group photo strips**…).
- After **"party camera"**: only app names ("afters - shared party camera", "everlens: guest party camera", "memrly: private party camera", "sealed: blind party camera", "then: event & party camera").
- After **"christmas p"**: "christmas photo frames" (#4) and "christmas photo booth 2017" (#8). These are 9-year-old apps that still get searched by name.

---

## 4. Other countries (V, Nov 17, 2026)

**Ratings counts are per store.** So every store outside the US is far easier.

| Keyword | US top-10 median | UK | UAE | Saudi | Egypt (partial) |
|---|---|---|---|---|---|
| photo booth | 1,202 | 130.5 | 34.5 | 9.5 | **1** |
| photobooth | 1,908 | 216.5 | n/a | 2 | 0 |
| digicam | 5,565 | 299.5 | 157.5 | 193.5 | 39 |
| digital camera | 25,900 | 1,108.5 | 254 | 200 | 207.5 |
| y2k camera | 13.5 | 76 | 8.5 | 0.5 | 3.5 |
| photo strip | 3.5 | 1 | 1.5 | 0 | n/a |
| party camera | 36 | 34.5 | 8.5 | 1,262.5 | n/a |
| christmas photo | 746 | 14 | 0 | 0.5 | n/a |
| digi | 95.5 | 3 | 5 | 26 | n/a |

**Arabic queries (UAE and Saudi):**
- Apple returned **no autocomplete suggestions** for:
  - كاميرا قديمة (old camera);
  - كاميرا رقمية (digital camera);
  - كاميرا ديجيتال (digital camera, transliterated);
  - كاميرا فيلم (film camera);
  - كاميرا فلاش (flash camera);
  - صور الكريسماس (Christmas photos);
  - فوتو بوث (photo booth; one suggestion in Saudi only).
- Only the broad words فلاتر (filters) and تصوير (photography) had suggestions.
- The results for Arabic queries are mostly the same English-titled apps (Dazz Cam, 0.3MP Camera, ThisBooth).
- **Conclusion (E, high):** in the Gulf, this niche is searched in English.

**Which language each store reads** (Apple's localization table, V):

| Store | Default language | Extra languages Apple lists for that store |
|---|---|---|
| United States | English (US) | Arabic, Chinese (Simplified), Chinese (Traditional), French, Korean, Portuguese (Brazil), Russian, Spanish (Mexico), Vietnamese |
| United Kingdom | **English (U.K.)** | none |
| UAE | **English (U.K.)** | Arabic |
| Saudi Arabia | **English (U.K.)** | Arabic |
| Egypt | **English (U.K.)** | Arabic, French |

**What this means:**
- UK, UAE, Saudi Arabia and Egypt all read **English (U.K.)** first.
- If Digi only fills English (US), those stores fall back to it. But adding an English (U.K.) localization gives Digi **a second, separate 100-byte keyword field** that covers four stores at once.
- Practitioners report that the US store also indexes the extra languages Apple lists for it (C, med). Some ASO teams use a Spanish (Mexico) keyword field to add English long-tail words for the US. That is a grey-area trick; I would not risk it during review in the contest month.

**Contest note.**
- The owner can post content from Egypt, and Digi would rank fast in the Egyptian store (top-10 medians of 0-40).
- But **purchases by friends or family disqualify the entry** (prior research, 09-contest-plan).
- Egypt downloads also earn little: Egypt is a low-price App Store tier, so the same yearly plan brings in less (E, med).
- Keep the launch **US-first**, as the prior plan says. Add the UK English localization when the UK is switched on.

---

## 5. Who is in the way: the top 15 competitors' metadata (US, V)

Subtitles and prices are from the US App Store pages, Nov 17, 2026. Ratings are US-only.

| App | Name (30) | Subtitle (30) | US ratings | Released | Money model seen on the page |
|---|---|---|---|---|---|
| Dazz Cam | Dazz Cam - Vintage Camera | Photo filters & Video effects | 118,170 | 2018-08 | Pro $6.99, lifetime $19.99, $0.99-2.99 camera unlocks |
| Lapse | Lapse - Disposable Camera | For capturing real life | 118,322 | 2022-07 | No IAPs listed |
| NOMO CAM | NOMO CAM - Point and Shoot | Minimalistic Analog Camera | 48,154 | 2018-04 | Pro $24.99/yr, cameras $0.99-1.99 |
| Tezza | Tezza: Aesthetic Photo Editor | Presets & Filters for Pictures | 47,860 | 2018-07 | Weekly $4.99, Pro yearly $39.99, Luxe $59.99 |
| 1998 Cam | 1998 Cam - Vintage Camera | Photo & Video Film Filters | 40,454 | 2019-02 | Yearly $15.99-29.99, lifetime $39.99 |
| radcam | radcam: digital camera | vintage, retro, film, edits | 39,529 | 2016-02 | Weekly $3.99-4.99, yearly $29.99-39.99, **10 credits $2.99, 30 credits $8.99** |
| Retrica | Retrica: Digicam Filter Camera | Y2K CCD Vintage Retro Film | 33,787 | 2012-11 | Weekly $5.99, yearly $59.99, "Limited Offer" yearly $29.99 |
| y2k | y2k: 2000s photo editor | filters, stickers, & collages | 13,248 | 2025-10 | Weekly $3.99, yearly $24.99 |
| ism | ism: Retro Camera & Vintage | Disposable Film & 90s Editor | 12,409 | 2021-11 | Weekly $3.99-7.99, yearly $19.99-29.99 |
| Huji Cam | Huji Cam | Just Like The Year 1998 | 12,001 | 2017-09 | $0.99 one-off |
| POV | POV – Disposable Camera Events | Guest photos: wedding & party | 15,701 | 2022-08 | Per-event tiers $4.99-89.99 |
| Mini Photobooth | Mini Photobooth: Photo Booth | Custom party photo booth | 9,107 | 2018-05 | Pro $44.99/mo, $269.99/yr (event pros) |
| Dispo | Dispo: Retro Disposable Camera | Vintage Camera & Photo Editing | 8,298 | 2019-12 | Max yearly $19.99-59.99, 3-day trial |
| WayShot | WayShot:Aesthetic Photo Editor | Digicam Filters & Hair Volume | 5,522 | 2025-08 | Weekly $9.99, yearly $59.99-69.99, coins $9.99-49.99 |
| Kapi Cam | Kapi Cam - Y2K & CCD Camera | Vintage filters, film & VHS | 1,660 | 2025-03 | Weekly $4.99, yearly $69.99-89.99, lifetime $149 |
| Boothie (TR) | Boothie: AI Photo Editor | Digicam Flash & AI Filters | 40 | 2026-06 | Weekly $7.99, monthly $19.99, **25 credits $5.99**, 60 credits $11.99 |
| Sera | Sera - Vintage Photobooth | Vintage photo camera | 86 | 2026-03 | 3 IAPs |

**Patterns in names and subtitles:**
1. **Brand + dash/colon + category phrase** is the norm: "Dazz Cam - Vintage Camera", "Kapi Cam - Y2K & CCD Camera".
   - The category phrase is almost always a **camera noun** (Vintage Camera, Disposable Camera, Digital Camera).
   - Only Mini Photobooth and Sera use "photo booth".
2. **Subtitles stack keywords with "&" or commas.** Examples: "Y2K CCD Vintage Retro Film" (Retrica), "Vintage filters, film & VHS" (Kapi).
   - Only Lapse ("For capturing real life") and Huji ("Just Like The Year 1998") use the subtitle as a brand line. Both are 2017-2022 apps with 12K-118K ratings: they can afford it. **A new app can't.**
3. **Boothie, the Turkish money leader, uses "Digicam Flash & AI Filters".** That is almost exactly Digi's free + paid split. Expect Digi to show up next to Boothie for "digicam" and "ai digicam".
4. **Trademarks in metadata are common but risky.**
   - "Boothie: Photo Strip Maker" (a different, 0-rating app) uses "Polaroid" in its subtitle.
   - "flag7x" and "Flash7x" use "G7X" (a Canon model).
   - Kapi's screenshots label filters "Kodak 5207" and "Fuji-NC".
   - Apple says trademarked terms are *"a common reason for App Store rejections"* (V). **Digi should not copy this.** Use "instant", "2000s", "point-and-shoot" instead of brand names.
5. **Price signals:**
   - Credit packs at the exact Party Pack price already exist: Boothie's **25 credits for $5.99**, radcam's $2.99/$8.99 credit packs.
   - Yearly prices in the niche run **$19.99-$89.99**.
   - Digi's $39.99 yearly sits in the middle, the same as Tezza Pro and radcam (V).

---

## 6. Screenshots and icons of the top 15 (V, my own read of their first 5 screenshots)

### 6a. Screenshot styles I saw

| Style | Who uses it | What it does well | Risk for Digi |
|---|---|---|---|
| **Big caption on top, phone frame below** | Boothie, Kapi, POV, Mini Photobooth, OldRoll, ism, Tezza, y2k | Readable in search results at thumbnail size | Generic; looks like the 195 clones |
| **Full-bleed photo, caption over it** | Lapse, Retrica, Dazz (shots 2-5) | Feels like a lifestyle brand; the photo *is* the product | Captions get hard to read |
| **Before/after split on screenshot 1** | WayShot (after on top, before below), Boothie (slider), Kapi (slider), ism (shot 4) | Shows the transformation in under 1 second | Must be **real** output from the build (2.3.3) |
| **Skeuomorphic camera body** | NOMO CAM, OldRoll shot 1, 1998 Cam UI | Instantly says "camera app" | Not Digi's party story |
| **Social proof inside the screenshot** | POV ("4.9★ worldwide · 25,000+ ratings", "Paid $5k for a photographer, got better photos with POV"), ism ("4.8 rating" laurels) | Trust for paying users | New app has no proof yet; **never fake it** |
| **Retro OS UI as the frame** | y2k (Windows-98 blue title bars, teal checker background, pixel font) | Unmistakable brand; 13K ratings in 13 months | Copying it would look derivative |

**Caption copy examples (verbatim, V):**
- **WayShot** (all caps, slang, problem then promise):
  - "DIGI CAM IT!" / "Photo didn't hit?"
  - "POST IT RAW" / "Zero edits needed"
  - "WE GOT YOU" / "Lighting too dark?"
- **Lapse** (lowercase serif italic): "the disposable camera for capturing life", "real film aesthetic", "live life unedited".
- **POV:**
  - "Guests get a disposable camera on their phone"
  - "No app download required"
  - "Photos reveal in a gallery the next day"
- **Boothie:**
  - shot 1: "your camera roll's glow-up era"
  - later shots: "AI FLASH, DIGICAM SHOT, GOLDEN HOUR AND MORE", "2000'S DIGITAL CAMERA FLASH ON YOUR PHOTOS"
- **1998 Cam** (shot 4): "Strike a pose. Stack the strip." **1998 Cam already ships a 4-photo strip** with four layouts (Classic Strip, 2x2 Grid, Filmstrip, Instant Duo).
- **Kapi Cam:** "Vintage vibes in one tap", "Filters adapt to scene: AI understands the scene's mood".

**What nobody does well (Digi's screenshot gap, E, med):**
1. **Nobody makes the group the hero.**
   - Most first screenshots show **one woman, solo**: WayShot, Boothie, Retrica, Kapi, ism.
   - Groups appear only in Tezza (two friends at dinner), Lapse (two friends), Retrica shot 3 (three friends) and POV (a wedding crowd).
   - **A first screenshot of 4 friends with flash and the orange date stamp would stand out in a row of solo selfies.**
2. **The orange date stamp is shown by only two apps** (1998 Cam shot 1: `'98 09 29`; Lapse shot 4). It is Digi's signature. Put it on every screenshot.
3. **Nobody shows the "develops tomorrow morning" moment as a screenshot**, except POV ("Photos reveal in a gallery the next day"). That is Digi's group-roll hook.

### 6b. Icons (real icons via Apple's Lookup API, V)

| Icon type | Apps |
|---|---|
| Wordmark on a flat colour | HUJI (white with a rainbow bar), NOMO CAM (black), ism (lime on black), OldRoll (orange on black) |
| Camera lens / camera front | 1998 Cam (lens + orange "1998" LCD digits), radcam (lens + rainbow stripes), flag7x (lens), POV (shutter ring) |
| Single letter | Retrica ("R" on orange), Boothie ("b." on pink gradient) |
| Abstract shape | Dazz (rainbow ribbons on black), WayShot (pink-red blur), Kapi (orange "Z" ribbon) |
| Illustration | Tezza (painted face), Sera (line-drawn instant camera), y2k (pixel window), Lapse (orange smiley) |
| Character | Mini Photobooth (moustache prop) |

**Colour crowding:** orange (Lapse, Retrica, OldRoll), black (NOMO, ism, Dazz, OldRoll) and pink gradients (Boothie, WayShot) are taken.

**Digi icon brief (E):**
- Hot pink (digi.pink), matching the brand.
- **One** element: the orange 7-segment date digits (e.g. `'26`) or a flash starburst.
- No camera lens (four apps already use one) and no rainbow stripe (radcam and Huji already use one).
- Plan two alternates inside the binary so you can run a Product Page Optimization test later (Apple requires alternate icons to be in the binary, V prior doc 07).

---

## 7. In-App Events: what competitors run right now, and Digi's plan

**Apple's rules (V, developer.apple.com/app-store/in-app-events):**
- Name ≤ **30** characters, title case.
- Short description ≤ **50**, sentence case.
- Long description ≤ **120**.
- Up to **31 days** long, promoted up to **14 days before** it starts.
- Up to **15 approved** and **10 published** at once.
- Card image 16:9 (1920×1080 minimum); detail image 9:16 (1080×1920 minimum).
- A deep link is required (universal link recommended).
- **No prices**, no "#1"/"best", no all caps.
- *"Price promotions that don't introduce any new content"* are not allowed.
- Badges: Challenge, Competition, Live Event, Major Update, New Season, Premiere, Special Event.
- Events show on the product page, **in search results**, and in editorial picks.

*Correction to prior research (07-apple-end-to-end):* it listed the 15-approved limit but missed the **10-published-at-once** limit. That doesn't matter for Digi's 2-3 events, but it's the rule.

**Events live in the niche today (V, scraped Nov 17):**

| App | Badge | Event name | Dates | Short description (verbatim) |
|---|---|---|---|---|
| ism | Special Event | Grateful Digicam Memories | Nov 14 - Nov 29 | "Add photo filters to moments you're thankful for" |
| JemBooth (0 ratings) | Special Event | Thanksgiving Photo Strips | Nov 14 - Dec 1 | "12 cozy strips for Thanksgiving and Friendsgiving" |
| Photoautomat (22 ratings) | New Season | It's Holiday Season! | Nov 14 - Dec 13 | "Special photo booths in festive decoration." |
| TogetherLens (3 ratings) | Challenge | Friendsgiving Photo Relay | Nov 16 - Nov 29 | "Pass one permissioned portrait invite along" |
| FestivAI (118 ratings) | New Season | Winter Wonderland | Dec 1 - Dec 31 | "Magical new snowy AI photo styles" |
| ProCCD | Major Update | Fall on Film \| GOLD | Nov 9 - Dec 9 | "Capture fall in golden film tones." |
| WayShot | Major Update | Airy Strands Debut | Oct 24 - Nov 24 | "Draw airy strands for a windblown look." |

**Lessons:**
1. **Even 0-rating apps get events approved.** You don't need an audience first.
2. The approved formula is **"new content + the occasion"**: 12 new strips, new snowy styles, festive booths.
3. Only 11 of the 143 app pages I scraped had a live event. Most competitors don't bother. **This is cheap visibility** (E, med).
4. **Lift (C):** Phiture reports ~50% more impressions and higher first-time downloads during an event's live window, falling back afterwards. It saw a much smaller spike on a second event. This is vendor data, not an independent study.

**Digi's event copy (lengths checked):**

| # | Event name (≤30) | Badge | Dates (US) | Short (≤50) | Long (≤120) |
|---|---|---|---|---|---|
| 1 | **Holiday Party Digis** (19) | New Season | Dec 1 - Dec 25 (promote from Nov 17 if approved) | "Flash looks for office and friend parties" (41) | "Tinsel flash, ugly-sweater booth and snowy digicam looks for your group pics, plus a holiday booth strip." (~104) |
| 2 | **Ugly Sweater Booth** (18) | Challenge | Dec 8 - Dec 20 | "A 4-pose sweater strip for your whole crew" (42) | "Line up in your worst sweaters. One photo becomes a 4-pose booth strip with a burned-in date stamp." (99) |
| 3 | **New Year's Eve Digis** (20) | Special Event | Dec 26 - Jan 2 (promote from Dec 12) | "Countdown flash looks and a midnight strip" (42) | "Glitter flash, confetti date stamps and a 4-pose midnight strip. Shoot all night; the roll develops Jan 1." (106) |

**Deep links:**
- `https://digi.pink/e/holiday`, `/e/sweater`, `/e/nye`.
- Each opens the camera with that look pack selected.
- Each event **must ship real new looks**; otherwise it gets rejected as a promo.

**Timing (E, med):**
- Events can only go live on a released app. If v1 is approved around Nov 20-23, submit Event 1 the same day.
- Event review usually runs alongside app review (prior doc 07: events and CPPs can be reviewed separately from versions, V).
- **Don't plan a Friendsgiving event.** Thanksgiving is Thu Nov 26, 2026, and there's no time.

---

## 8. Custom Product Pages (CPPs): the bridge from TikTok to the store

**Apple's rules (V, developer.apple.com/app-store/custom-product-pages):**
- Up to **70** extra product pages.
- Each can change its screenshots, app previews and promotional text, and has its own URL.
- *"You can also assign keywords to your custom product page ... This lets your custom product page appear in search results for those selected keywords, rather than your default product page."*
- Rule: *"each keyword combination is unique to a single product page."*
- Deep links to a specific in-app screen work on iOS 18+.
- CPPs are reviewed **independently of an app update**.
- **Apple's own number:** pages reached through a CPP convert **2.5 percentage points** better on average, a **156%** increase over the **1.6%** average conversion rate of default pages (V, Apple's claim).
- Third parties say CPP keywords must come from your existing keyword field and don't add new indexing (C, med). Plan the keyword field with the CPPs in mind.

**Digi CPP plan for the contest (replaces the "Cartoon yourself" page in prior doc 07, which is not a Digi feature):**

| CPP | Used by | Screenshot 1 | Assigned keywords (from the keyword field) | Deep link |
|---|---|---|---|---|
| **Christmas party** | TikTok/IG Christmas content; Pinterest | 4 friends in sweaters, flash, `'26 12 19` date stamp | christmas, xmas | `/e/holiday` |
| **Photo strip** | "booth strip" videos | 4-pose strip of a group | strip, photobooth | strip mode |
| **Digicam flash** (default look) | "digicam" / "y2k" creators | Before/after flash on a night-out photo | digital, ccd, 2000s | camera |
| **Group roll** | "develops tomorrow" videos | Roll grid "Develops at 9:00" | group, friends, event | create roll |
| **NYE** (from Dec 20) | NYE content | Glitter flash midnight strip | nye | `/e/nye` |

Send every creator and every web link through `digi.pink/go/<placement>` to the matching CPP URL (prior doc 11 already set up this redirect).

---

## 9. Three complete metadata options for Digi (scored)

All three are checked against Apple's limits:
- name ≤ 30 characters;
- subtitle ≤ 30 characters;
- keyword field ≤ 100 bytes, with no word repeated from the name or subtitle;
- no keyword of 2 characters or less;
- no trademarks.

Counts were made with a script.

### Option A: "Booth-first" (recommended) · **8.5/10**

| Field | Text | Length |
|---|---|---|
| **Name** | `Digi: Photo Booth & Digicam` | 27 |
| **Subtitle** | `Y2K Flash Camera, Party Strips` | 30 |
| **Keyword field** | `digital,film,disposable,retro,vintage,ccd,christmas,photobooth,group,friends,dump,2000s,selfie,nye` | 98 bytes |
| **Promotional text** (170, not indexed, change any time) | `Your party pics, but 2004. Digicam flash with an orange date stamp, AI party looks for your whole group, and 4-pose booth strips. New holiday looks every week.` | ~150 |

**Description, first 3 lines** (the first sentence is the only part people see without tapping "more", V):
> Digi turns any night out into 2004: hard flash, soft grain and an orange date stamp burned into the corner.
> Shoot for free with on-device digicam, film and Y2K looks. Add AI party looks that keep everyone's real face, for up to 4 friends in one shot.
> Make 4-pose booth strips, start a shared roll for the party, and wake up to everyone's photos developed the next morning.

**Screenshot captions** (1-3 matter most; Apple shows the first 1-3 in search results, V):
1. **Your party pics, but 2004** (group of 4, flash, orange date stamp)
2. **One photo. Four poses.** (booth strip)
3. **Everyone's real face, party-ready** (before/after AI look on a group)
4. **Free digicam flash, right on your phone** (camera screen with the look row)
5. **Shoot all night. It develops at 9 AM.** (shared roll)
6. **Christmas, NYE and new looks every week** (look grid)
7. **Share to Stories in one tap** (IG Story frame with the digi.pink watermark)
8. **Made on your phone. Nothing posted unless you share.** (privacy and trust)

**Search coverage (E, med):**
- **In the name:** photo booth, digicam.
- **From name + subtitle combos:** y2k camera, flash camera, party camera, photo strips, booth strips, y2k flash.
- **Through the keyword field:**
  - digital camera, film camera, disposable camera, retro camera, vintage camera, ccd camera;
  - photobooth, christmas photo, christmas photo booth, group photo, photo dump, 2000s camera, selfie camera, nye photo booth.

**Why 8.5:**
- \+ It leads with the strongest winnable term (photo booth) and the niche word (digicam).
- \+ It covers the five easy terms.
- \+ It's honest: the free core is a camera and booth.
- − "AI" isn't in the name or subtitle, so "ai digicam" and "ai photo booth" need behaviour signals.
- − "Party" is spent on a weak-volume word.

### Option B: "AI-first" · **7/10**

| Field | Text | Length |
|---|---|---|
| **Name** | `Digi: AI Party Photo Booth` | 26 |
| **Subtitle** | `Digicam Flash & Y2K Camera` | 26 |
| **Keyword field** | `strip,digital,film,disposable,retro,vintage,ccd,christmas,friends,group,dump,photobooth,2000s,cam` | 97 bytes |
| **Promotional text** | `AI party looks that keep everyone's real face. Up to 4 friends, one photo, about 20 seconds. Plus free digicam flash with the orange date stamp. Holiday looks are live.` | ~165 |

**Description, first 3 lines:**
> Digi gives your group photo the party look: flash, glitter, holiday lights, Y2K, without changing anyone's face.
> Pick a look, snap or import a photo of up to 4 friends, and get a party-ready version in about 20 seconds.
> Every photo also gets the free on-device digicam flash and an orange date stamp, plus 4-pose booth strips.

**Screenshot captions:**
1. **Your group, party-ready in 20 seconds**
2. **Real faces. Party lights.**
3. **One photo. Four poses.**
4. **Holiday looks for the whole crew**
5. **Free digicam flash + date stamp**
6. **Shared roll: develops at 9 AM**
7. **Share to Stories in one tap**
8. **You see the price before you pay**

**Why 7:**
- \+ "AI" + "photo booth" + "party" in the name match the paid feature that earns the money.
- \+ It reaches "ai photo booth", "ai digicam" and "party camera".
- − "AI" in the name invites the "changed my face" scepticism seen in WayShot reviews (prior doc 02).
- − The free on-device camera is undersold.
- − The AI search terms are dominated by giant apps (Lensa, Picsart).
- − The "20 seconds" claim must stay true or it breaks guideline 2.3.

### Option C: "Digicam-first" · **6.5/10**

| Field | Text | Length |
|---|---|---|
| **Name** | `Digi Cam: Y2K Flash Camera` | 26 |
| **Subtitle** | `Party Photo Booth & Strips` | 26 |
| **Keyword field** | `digicam,digital,film,disposable,retro,vintage,ccd,christmas,friends,group,dump,photobooth,selfie` | 96 bytes |
| **Promotional text** | `The 2004 digicam look, free on your phone: flash, grain and an orange date stamp. Turn party pics into 4-pose booth strips. New holiday looks this week.` | ~152 |

**Description, first 3 lines:**
> Digi Cam brings back the 2000s point-and-shoot: hard flash, soft grain and an orange date stamp in the corner.
> Shoot or import, pick a look, and your photo looks like it came off a 2004 memory card.
> Make 4-pose booth strips for parties, and add AI looks when you want something extra.

**Screenshot captions:**
1. **The 2004 digicam, on your phone**
2. **Flash. Grain. Date stamp.**
3. **Party pics that look like 2004**
4. **4-pose booth strips**
5. **AI party looks for your group**
6. **Christmas and NYE looks**

**Why 6.5:**
- \+ "y2k camera" and "flash camera" in the name are easy terms.
- − "Digi Cam" puts Digi among dozens of "Digicam/Digi Cam" clones (V: CastShot, "Digicam: Photo Editor, Filters", "Y2K Cam 2003", "2000s Camera - Y2K Digicam"), which raises the guideline 4.3 spam risk.
- − "photo booth", the biggest winnable term, drops to the subtitle.
- − It positions Digi as a filter app competing with Dazz (118K ratings).

### Side by side

| | A: Booth-first | B: AI-first | C: Digicam-first |
|---|---|---|---|
| Biggest winnable term in name | ✅ photo booth | ✅ photo booth | ❌ (subtitle) |
| Niche word (digicam) | ✅ name | subtitle | ✅ name |
| Easy terms covered (y2k, strip, party, flash) | 4/4 | 3/4 (strip in keywords) | 4/4 |
| Matches the paid feature | partly | ✅ | weak |
| Looks unique next to clones | ✅ | ✅ | ❌ |
| Review risk (2.3 / 4.3) | low | medium (AI claims) | medium (clone look) |
| **Score** | **8.5** | **7** | **6.5** |

**Pick A for launch.**
- Keep B's screenshot 1 ("Your group, party-ready") as the **Christmas CPP's** first screenshot. Paid TikTok-style traffic can then see the AI promise without changing the indexed name.
- After the contest, run a Product Page Optimization test of A vs. a B-style first screenshot once there are ~1-2K product page views a day (prior doc 07, E).

### Seasonal keyword rotation (needs a new version, so batch it with bug-fix builds)

| Build | Swap out | Swap in | Why |
|---|---|---|---|
| v1.0 (launch, ~Nov 20-23) | — | christmas, nye already in | Christmas ramps from early Dec |
| v1.2 (~Dec 10) | selfie | xmas | Christmas peak week |
| Early Jan | christmas, nye | galentines, formal | Galentine's (Feb 13) and spring formals; "galentines" top-10 median is 2 ratings (V) |

### English (U.K.) keyword field (when UK/UAE/KSA are switched on)
- `digital,film,disposable,retro,vintage,ccd,christmas,photobooth,group,friends,dump,2000s,selfie,hen` (98 bytes).
- "hen" is for UK hen parties. Keep the same name and subtitle.

---

## 10. Ratings: when to ask, and how many you need

**Apple's rules (V):**
- Ask with the system prompt (`SKStoreReviewController`; in Expo, `expo-store-review`'s `StoreReview.requestReview()`).
- Apple shows it **at most 3 times in 365 days** per user, and decides itself whether it appears.
- Guideline 5.6.1: use the provided API; **custom review prompts are not allowed**.
- **Review gating** (asking "Do you like Digi?" and only sending happy users to the prompt) is against the rules and can get the app rejected (C, multiple sources; consistent with 5.6.1).
- You can reset the summary rating with a new version. Apple advises using this sparingly, and written reviews stay.
- Reply to reviews in App Store Connect. The reviewer is notified and can update their rating.

**When Digi should ask (E, med; no controlled public study exists, C):**

| Moment | Ask? | Why |
|---|---|---|
| First app open, onboarding, paywall close | **Never** | No value yet; Apple says don't interrupt |
| After the **3rd photo saved or shared** with a free look | **Yes (prompt #1)** | A clear success moment, no money involved |
| After the user opens a **developed group roll** and taps "Save all" | **Yes (prompt #2)** | The strongest emotional moment in the product |
| After an AI look **succeeds** and is shared | Yes (prompt #3, only if #1/#2 didn't fire) | Success, and the buyer is invested |
| After an AI look **fails or is refunded in digis** | **Never** | You'd collect 1-star reviews |
| Within 24 h of a purchase | No | Buyer's-remorse window; trial-charge complaints dominate niche reviews (prior doc 02) |

**How many ratings matter (V for competitors, E for targets):**
- "photo booth" #1 has **81** US ratings; "photobooth" #1 has **86**.
- Most "photo strip" and "booth strip" top-10 apps have **0-35**.
- **Target (E, med):** 50+ US ratings at a 4.6+ average by Dec 5 gives Digi a fair shot at the top 5 for "photo booth" and the top 3 for the strip, y2k and party terms. This assumes the name match (Option A) and decent download velocity.
- **Velocity benchmarks:**
  - y2k: 2000s photo editor earned ~**1,020 ratings/month** in its first year;
  - WayShot ~360/month;
  - Pecra ~130/month;
  - SNOW's 101cam ~140/month (prior doc 01, V).
- An indie with viral TikTok can do 30+/day; a quiet launch does 1-3/day (E, low).

**Reply policy:**
- Answer every 1-3★ review within 24 hours, in plain English.
- Fix trial or charge complaints first; Apple suggests prioritising low-star and bug reviews (V).
- Never offer free digis for a rating change. That is incentivised reviewing.

---

## 11. Apple Ads (formerly Search Ads): basics and contest maths

**Two products (V, ads.apple.com):**

| | Basic | Advanced |
|---|---|---|
| You pay | **Per install** (you set a max CPI) | **Per tap** (you set a max CPT) |
| Where | App Store search results only | Search results, Search tab, Today tab, other product pages |
| Keywords | **None.** Apple picks | You pick (exact / broad match, negatives) |
| CPPs in ads | No | Yes |
| Budget cap | **$10,000 per app per month** | Unlimited |
| New-account credit | **$100** for eligible developers (terms apply) | same account offer |
| Available in | US, UK, UAE, Saudi Arabia, Egypt (all listed) | same |

**Costs in the niche (C, AppTweak 2025 benchmarks, US search results, Photo & Video):**
- median **CPT $1.61**;
- median **CPI $2.79**;
- tap-to-install **67.5%**;
- tap-through rate **11.5%**.
- The all-category global median CPI is $1.80.

**Contest maths (E, med):**
- All paid marketing is deducted from contest profit (prior doc 09, V).
- Net from one yearly sale after Apple's 15% ≈ **$34**.
- Median download-to-paid: **2.0%** (non-AI) / **2.4%** (AI apps) (RevenueCat 2026, C).
- Cost per paying user = $2.79 ÷ 0.024 ≈ **$116** (at 2.0%, ≈ $140).
- **Every paid install loses ~$80-100 inside the window.**
- Break-even needs ~8% of installs to buy the yearly plan up front, or 15% when you count what a payer is actually worth in 30 days (prior doc 09). Neither is realistic for a new photo app.

**What to do:**
1. **Contest window: $0 of your own money.**
2. Ask the organisers whether Apple's $100 new-account credit counts as marketing spend.
   - If it doesn't: run **Advanced**, exact match only, on your brand ("digi photo booth", "digi app", "digi cam") plus 3-5 easy terms ("photo strip", "booth strip", "y2k camera").
   - Cap max CPT at **$0.50**, pointing at the matching CPP.
   - Treat it as a **keyword research tool** (it shows real search terms and impression share), not a growth channel.
3. **Never run Basic in the contest.** You can't choose keywords, and Apple optimises for installs, not payers.
4. **After Dec 16:** test Advanced at $10-20/day once you know your real install-to-paid rate. Keep it only if cost per payer is below ~60% of first-year net revenue (E).

---

## 12. Corrections to prior research (what changed and why)

| Prior claim (file) | Correction | Evidence |
|---|---|---|
| "digicam" is the core ASO term; "ASO terms: photobooth, photo strip, digicam" (09-contest-plan) | **"photo booth" (two words) is the lead term.** It autocompletes #1 at "photo b" with a weak top 10. "photo strip" doesn't even appear in autocomplete at "photo s"; it is an easy but small term. | V: autocomplete + top-10 medians |
| Example name "Digi: AI Photobooth" (07-apple-end-to-end) | "Photobooth" (one word) and "photo booth" (two words) give **different** top 10s. The two-word form matches the bigger query. Use "Photo Booth" in the name and "photobooth" in the keyword field. | V: different result sets |
| Keyword limit "100 bytes [E]" (07) | Confirmed **100 bytes**, plus a rule the prior doc missed: **each keyword must be longer than 2 characters**, so "AI" can't stand alone in the keyword field. | V: App Store Connect help |
| Apple Ads Basic "$10k cap [E]" and "$100 credit" (07) | Both now **verified** on ads.apple.com. Added: Basic has **no keyword control**, so it's useless for contest targeting. | V |
| In-App Events "up to 15 approved" (07) | Correct, but also **max 10 published at once**. | V |
| CPP list included "Cartoon yourself" (07) | Not a Digi feature in the current product spec. Replaced with Christmas / Strip / Digicam / Group roll / NYE CPPs. | Product spec |
| "No iOS app named plainly 'Digi'" (02-competitors) | True for photo apps, but the US search "digi" is filled by **telecom apps** (CelcomDigi, Mi DIGI, DIGI.ro, My DIGI). "Digi" must always carry a descriptor. | V |
| "digicam is weak (25), put it in subtitle or keywords" (01, §9.5) | Partly agree. Autocomplete shows "digicam" is #2 at "digic" and "digital camera" is #2 at "dig", so the *digital camera* family is stronger than the tool score suggests. Keeping "Digicam" in the name (Option A) is fine because it costs only 7 characters. | V |
| Implied: Gulf/Egypt need Arabic metadata (05-marketing-egypt-ops) | For search, **English (U.K.)** is what matters. Apple autocomplete has no Arabic suggestions for these camera terms. Arabic localization helps the product page read well; it adds almost no search traffic. | V |

---

## What this means for Digi

1. **Use Option A at launch:**
   - Name `Digi: Photo Booth & Digicam`
   - Subtitle `Y2K Flash Camera, Party Strips`
   - Keyword field `digital,film,disposable,retro,vintage,ccd,christmas,photobooth,group,friends,dump,2000s,selfie,nye`
   - Category: Photo & Video (primary). Use no secondary category, or Lifestyle only if Apple's category rules fit (E). An irrelevant category is grounds for rejection (V).
2. **Get the metadata right in v1.0,** not v1.1. Name, subtitle and keywords need a new version to change, and the first days may carry a new-app boost (C).
3. **Shoot screenshot 1 as a group of 4 with flash and the orange date stamp,** captioned "Your party pics, but 2004". Make screenshots 2 and 3 the 4-pose strip and the real-faces before/after. Use real outputs from the build only (guideline 2.3.3). No prices, no "Free", no brand names (Polaroid, Kodak, G7X).
4. **Icon:** hot pink with the orange 7-segment date digits. No lens, no rainbow stripe. Put 2 alternate icons in the binary for a later PPO test.
5. **Submit In-App Event 1 "Holiday Party Digis" the day v1 is approved** (target by Nov 24), with real new looks and a deep link. Queue "Ugly Sweater Booth" (Dec 8-20) and "New Year's Eve Digis" (Dec 26-Jan 2, promoted from Dec 12). Never put a price in event text.
6. **Publish 3 CPPs with launch week** (Christmas party, Photo strip, Digicam flash), each with its own keywords and deep link. Add Group roll when that feature ships and NYE on ~Dec 20. Route every TikTok/IG/creator link through `digi.pink/go/<placement>` to the matching CPP.
7. **Wire the ratings prompt** to three success moments only:
   - the 3rd saved or shared free photo;
   - "Save all" on a developed roll;
   - a successful, shared AI look.
   - Never after a failure or a purchase. No custom pre-prompt.
   - Target **50+ US ratings at 4.6+ by Dec 5**.
8. **Answer every 1-3★ review within 24 h**, starting with charge or trial complaints.
9. **Apple Ads: $0 during the contest.** Email the organisers about whether the $100 Apple credit counts. If it doesn't, use it on exact-match brand + strip/y2k terms at ≤ $0.50 CPT as keyword research.
10. **Rotate seasonal keywords with bug-fix builds:** add "xmas" ~Dec 10. In January swap "christmas, nye" for "galentines, formal".
11. **Update the promotional text weekly** (no review needed): Friendsgiving week, then Christmas parties, then NYE. It isn't indexed, so write it for humans.
12. **When UK/UAE/KSA open, add an English (U.K.) localization** with its own keyword field (add "hen" for hen parties). Skip an Arabic keyword field for search; translate the product page later for readers.
13. **Re-run this keyword scan on Dec 1 and Dec 10** (scripts in the scratch folder) to see where Digi ranks for the 12 target terms. Move the name/subtitle only if Digi isn't top 10 for "photo booth" by Dec 10.

---

## Sources

**Apple (V, read Nov 17, 2026)**
- Product page (name, subtitle, promo text, screenshots, previews, icon): https://developer.apple.com/app-store/product-page/
- Search (keyword rules, ranking factors, seasonal warning, promo text not indexed): https://developer.apple.com/app-store/search/
- App Store Connect, platform version info (100 bytes, >2 characters, searchable by app and company name): https://developer.apple.com/help/app-store-connect/reference/app-information/platform-version-information
- App Store localizations by storefront: https://developer.apple.com/help/app-store-connect/reference/app-store-localizations/
- Custom product pages (70 pages, keywords, 2.5 pp / 156% / 1.6%): https://developer.apple.com/app-store/custom-product-pages/
- In-App Events (limits, badges, image specs, no prices): https://developer.apple.com/app-store/in-app-events/
- Ratings and reviews (3 prompts per 365 days, reset, responses): https://developer.apple.com/app-store/ratings-and-reviews/
- App Review Guidelines (2.3.3, 2.3.7, 4.3, 5.6.1): https://developer.apple.com/app-store/review/guidelines/
- Apple Ads Basic ($100 credit, CPI): https://ads.apple.com/app-store/basic
- Apple Ads Basic vs Advanced ($10k cap, no keywords): https://ads.apple.com/app-store/help/apple-ads-basic/0001-compare-apple-ads-solutions
- Apple Ads countries and regions: https://ads.apple.com/app-store/countries-and-regions

**Data I collected (V, Nov 17, 2026)**
- iTunes Search API: `https://itunes.apple.com/search?term=<kw>&country=<us|gb|ae|sa|eg>&entity=software&limit=50`
- iTunes Lookup API (icons, ratings): `https://itunes.apple.com/lookup?id=<ids>&country=us`
- App Store autocomplete: `https://search.itunes.apple.com/WebObjects/MZSearchHints.woa/wa/hints?clientApplication=Software&term=<prefix>` (storefront header 143441 US, 143444 UK, 143481 UAE, 143479 KSA, 143516 EG)
- App Store pages (subtitles, IAP lists, events, screenshots): `https://apps.apple.com/us/app/id<id>` for 143 apps.
- Raw files: `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/bible/aso12/data/` (search_us.json, search_gb.json, search_ae.json, search_sa.json, search_eg.json partial, prefix_us.json) and `.../aso12/pages/pages.json`.

**Third parties (C)**
- AppTweak, Apple Ads benchmarks 2025/2026 (Photo & Video US: CPT $1.61, CPI $2.79, CR 67.5%, TTR 11.5%; global median CPI $1.80): https://www.apptweak.com/en/aso-blog/apple-ads-benchmarks
- Appfigures, "The Biggest App Store Algorithm Change" (June 2025, screenshot caption indexing claim): https://appfigures.com/resources/guides/app-store-algorithm-update-2025
- Phiture, In-App Events (impression and download lift during events): https://phiture.com/asostack/in-app-events/ and https://phiture.com/mobilegrowthstack/in-app-events-how-to-get-approved/
- AppTweak, In-App Events and ASO (event cards in search): https://www.apptweak.com/en/aso-blog/what-are-in-app-events-how-do-they-impact-aso
- Practitioner keyword-field rules (cross-field combining, title weight): https://asodesk.com/blog/13-rules-for-working-with-app-metadata-in-the-app-store-and-google-play/ and https://www.mobileaction.co/guide/ios-appstore-aso-guide/
- CPP keywords from the keyword field (third-party reading): https://phiture.com/blog/keyword-based-custom-product-pages-cpps-arrive-in-app-store-connect/ and https://www.mobileaction.co/blog/custom-product-pages-meet-organic-search/
- AppKittie keyword popularity/difficulty (cached Nov 12, 2026, tool estimate): `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/akdb/kd_fs.json`, `kd_a.json`, `kd_b.json`
- RevenueCat State of Subscription Apps 2026 (download-to-paid 2.0% / 2.4% AI), via prior chapters 05/06/08: https://www.revenuecat.com/state-of-subscription-apps/
- Prior research used and corrected: `/home/user/MMTEST/research/digi-deep-2026-11/` (02, 07, 09, 11) and `/home/user/MMTEST/research/digi-bible-2026-11/01-market-trend.md`.

---

## Fact-check (2026-11-16)

Adversarial re-check on Nov 17, 2026 of the 12 numbers and rules this chapter's metadata and ads decisions rest on. Apple's iTunes **Search** endpoint returned HTTP 403 to this session after a few calls, so search *order* could not be re-pulled; the apps behind it were re-checked with the Lookup endpoint.

**Checked and confirmed (no change)**
1. "photo booth" US top 10 (author's raw pull, re-looked-up today): #1 "Photobooth: AI photo booth" **82 ratings**; the biggest app in the top 10 is Mini Photobooth with **9,109**. So **zero** apps with 10,000+ ratings. Confirmed. New detail: the #1 app averages **2.12★** and sits in Graphics & Design, which makes it even weaker than the chapter said (added to takeaway 1).
2. "Inbetween: Photo Booth Strips" has **0 ratings** (Lookup today). Confirmed; its #1 rank for "booth strip" is from the author's Nov 17 pull and could not be re-ranked.
3. Dazz Cam ~118,200 ratings, Lapse 118,321, Huji 12,004, 1998 Cam 40,452. Confirmed (Lookup/Search today, before the 403).
4. App Store Connect: keywords "each greater than two characters", **100 bytes**; promotional text **170** characters; description **4,000** characters; app and company name are searchable. Confirmed on Apple's help page.
5. In-App Events: up to **31 days** long, promoted up to **14 days before** the start, up to 10 published and 15 approved at a time. Confirmed on developer.apple.com.
6. Custom product pages: keywords can be assigned so the CPP shows in search; "each keyword combination is unique to a single product page"; up to **70** extra pages. Confirmed.
7. AppTweak (Jan–Dec 2025 data): US Photo & Video median **CPT $1.61**, **CPI $2.79**; global median CPI $1.80. Confirmed.
8. RevenueCat SOSA 2026 global median download-to-paid **2.0%**. Confirmed. The upper "2.4%" in "2.0–2.4%" was not found on today's page; treat 2.0% as the sourced figure.
9. Apple Ads Basic: pay per install, **$10,000 per app per month** cap, **$100 credit** for eligible new accounts. Confirmed (Apple Basic page and help pages).
10. Rating prompt shown at most **3 times in 365 days** per user (Apple's StoreKit rule). Consistent with Apple docs; not re-fetched today.

**Changed**
1. Key takeaway 1: added the #1 "photo booth" app's 2.1★ average.

**Could not verify**
- Current search *rank order* for all 70 US queries (Search API 403 today).
- AppKittie popularity scores (81/100 etc.): tool estimates from a Nov 12 cache.
- "Digi needs its events approved by about Nov 24": Apple gives no review lead time on the In-App Events page; this is the author's estimate (E).
- Apple autocomplete results for Arabic queries were not re-run.
