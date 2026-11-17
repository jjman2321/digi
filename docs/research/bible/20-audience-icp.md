# 20. Audience and ICP: who Digi is for, what they celebrate, how they share, what they pay for

*Digi bible, track 20. Written Nov 17, 2026. Builds on `digi-deep-2026-11/01-icp-demand.md` (Nov 16) and `digi-bible-2026-11/01-market-trend.md`. It does not repeat them. It adds new data, corrects what was wrong, and ends with three personas and a pick for the contest.*

**Labels**
- **[V]** I pulled or read the primary data myself on Nov 17, 2026.
- **[C]** Someone else's claim (press, vendor, survey summary). I read the summary, not the raw data.
- **[E]** My estimate. Confidence is given as high / med / low.

**New data I collected for this chapter**
- **Rating counts in 14 App Store countries for 19 comparable apps** (iTunes Lookup API, Nov 17) [V]. File: `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/bible/icp20/geo_ratings.json`.
- **Occasion and payer analysis of 2,628 US App Store reviews** across 23 party-camera, booth, friends-camera and album apps (the most recent ~250 per app, mostly 2024–Nov 2026) [V]. Script: `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/bible/icp20/scripts/occ.py`.
- **Top-grossing Photo & Video charts** for the US, UK, Turkey, Saudi Arabia, UAE, Egypt and Germany (Apple RSS, Nov 17) [V].
- **StatCounter mobile OS share, Oct 2026**, for 9 countries [V].
- **NapoleonCat Instagram audience by gender and age, Oct 2026**, for the US, UK, Saudi Arabia, UAE and Egypt [C, ad-audience estimates].
- **Pew Research social media fact sheet, 2026 wave** (Jan 30–Jun 18, 2026) [V].
- **Google autocomplete** in Arabic and English for Egypt, Saudi Arabia, UAE, UK, US and AU (49 seeds) [V]. Files: `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/bible/icp20/ac/`.
- **49 public TikTok posts about digicam/booth apps** (from track 14's cache), re-read for upload country and topic [V].

**What I could not get (not bypassed)**
- **Reddit.** Reddit returned HTTP 403 to my client, and the search tool refuses reddit.com. I have **no Reddit quotes** in this chapter. App Store reviews stand in for user voice.
- **TikTok comments.** Comments load behind a login, so I have none. I have post captions, countries and view counts only.
- **App-level demographics** (Sensor Tower, Appfigures, data.ai audience pages) are paywalled. No age or gender split for any Digi comparable is public, except Lapse's 2021 team figure.
- **Piper Sandler Fall 2026** iPhone and favourite-app figures: the public page still shows Fall 2025 [C, roic.ai Oct 13, 2026].

---

## Key takeaways

1. **The core user is a woman aged 18–30 on iPhone, but the paying proof for AI booth looks is in Turkey, not the US.** Boothie's ratings are **71% Turkish and 10% US** (274 vs 40, Nov 17) [V]. It ranks **#34–36 top-grossing Photo & Video in Turkey** (#36 on the Nov 16 re-check) and is outside the top 100 in the US [V]. The US money in this category goes to **aesthetic and digicam editors**: Tezza #20, WayShot #30–32 [V]. So "US women pay for AI party looks" is still a guess. "US women pay for a digicam/aesthetic look" is proven.
2. **Women use every relevant platform more than men in the US.** Pew 2026: Instagram 56% vs 45%, TikTok 43% vs 31%, Snapchat 30% vs 21%. Among 18–29s: Instagram 79%, TikTok 65%, Snapchat 56% [V].
3. **Weddings own the "party camera" category. Christmas and NYE barely show up.** In 330 recent reviews of event-camera apps, **40% mention a wedding** and 2% a bachelorette, but **under 1% mention Christmas, holidays or NYE** [V]. Christmas is a content hook for Digi, not a proven buying occasion for these apps.
4. **The person who pays for a group product is the host, and hosts compare against real-world costs.** Reviewers measure these apps against disposable cameras ("literally 10 times as expensive"), photographers ("way less than paying a photographer") and photo-booth rentals. One host "paid for like 70 people" [V, POV/Once reviews]. A host-paid **Party Pack** fits this behaviour better than asking each guest to subscribe.
5. **Weekly subscriptions on simple booth apps get punished.** 26% of 599 booth-app reviews mention price or payment, the highest of any group [V]. Typical lines: "**$5 PER WEEK?!** ... DELETED" (Pocketbooth, Jan 2026) and "Holiday Offer of $0.99 first month ... they charged me $39.99" (Mini Photobooth, Dec 2024) [V].
6. **The Gulf is not "no". It is "no for party mechanics, yes for private friend photos".** Saudi Arabia has **304,389 Locket ratings**, more than half the US count (593,254), and nearly twice as many Dazz ratings as the UK [V]. But Saudi Arabia has **19 Partiful ratings** and **36 POV ratings** [V]. Snapchat is the #1 grossing Photo & Video app in Saudi Arabia, and "Private Photo Vault" is #20 [V]. Saudis share privately, with close friends, on Snapchat.
7. **Egypt is a build base, not a market for the contest.** iOS is 17.85% of mobile traffic (Oct 2026) [V]. Apple's automatic Egypt prices sit at full dollar parity, so a $39.99 yearly plan costs roughly **a third of a month's private-sector minimum wage** (EGP 7,000) [E, high]. Contest rules also ban purchases by the founder's friends and family. Egyptians who do pay buy **face AI** (FaceApp #5, Remini #8, Retake AI #16 top-grossing in Egypt) [V].
8. **Digicam content on TikTok is about everyday looks, beaches and holidays, not parties.** Of the 25 most-viewed posts in our 49-post sample, the captions talk about "aesthetic", "vacay", "beach", "that friend" and "girls". None is a party video [V]. The hook that brings users in is "make my photos look like a digicam". Party looks are what you sell them next.
9. **Three personas:** (P1) the **"digicam girl"**, 18–26, US/CA/AU/UK, who wants the look on everything; (P2) **"the host"**, 22–34, who organises birthdays, Friendsgiving, holiday house parties, Galentine's and later bachelorettes; (P3) the **"close-friends sharer"** in Saudi Arabia and Kuwait, 18–30, Snapchat-first and private. **For the contest, acquire P1 and monetise P2 on the Dec 5–6 and Dec 12–13 weekends. P3 waits until January.**

---

## 0. Corrections to the earlier files

| # | Earlier claim | What the new data says | Source |
|---|---|---|---|
| 1 | "Boothie ratings by country US 40 · UK 9 · CA 7 · AU 2. About 69% US among the English four, so the money is US-led" (`01-icp-demand` §1.1) | Wrong conclusion. Looking at 14 countries, **Turkey has 274 Boothie ratings (71%)**, the US 40 (10%), Germany 21, the Philippines 19. Boothie is #34 top-grossing Photo & Video in Turkey and not in the US top 100. The US-led claim came from only looking at English countries. The README already flagged Turkey; this confirms it with ratings and today's chart | [V] iTunes Lookup and Apple RSS, Nov 17 |
| 2 | Gulf: "**No.** At most one tasteful Eid strip" (`01` §7) | Too blunt. Saudi Arabia is a top market for **private friend-photo apps** (Locket 304K ratings, 31% of Locket's 14-country total is the Gulf; Dazz SA 27.5K vs UK 11.9K). Saudi iOS share is 42%. But party and event apps fail there (POV 0.5% Gulf, Partiful ~0). Verdict: **no for the party roll as sold in the US; a real later test for a private "girls-only roll" in Arabic** | [V] Lookup; StatCounter Oct 2026 |
| 3 | Pew 2025: Instagram women 55% vs men 44%; 80% of 18–29 | Pew's 2026 wave is out: Instagram **56% vs 45%**, **79%** of 18–29s; TikTok 43% vs 31%; Snapchat 30% vs 21% | [V] Pew fact sheet, fieldwork Jan 30–Jun 18, 2026 |
| 4 | P2 "office holiday parties: 82% of full-time workers planned to attend" (ezCater) | True for all workers, misleading for Gen Z. Harris Poll (Nov 2024): only **37% of Gen Z** were "very likely" to attend, while 74% of all workers said they look forward to holiday parties (two different questions, so not a like-for-like gap). UK: 78% would rather have a cash bonus (Jukebox, Dec 2025). **Don't build looks around the office party.** Friend-hosted parties matter more | [C] Harris Poll PDF; Workplace Journal |
| 5 | "Christmas parties (office, friends, sorority formals...) score 9.5" as the top occasion (`01` §5) | As a *search and content* moment, yes. As a *buying occasion for camera apps*, there is no proof: under 1% of 2,628 reviews mention Christmas, holidays or NYE. Keep it as the December content theme, but don't forecast Party Pack sales from it | [V] review analysis |
| 6 | "~$1,300 per bachelorette attendee" quoted as current | That is **The Knot's 2023 Bach Study** (~500 respondents). I found no 2026 Knot bach study. A $1,900 "2026" figure circulating online could not be traced to The Knot. Use $1,300 and say "2023" | [C] The Knot |
| 7 | Lapse "79% female, 71% under 24" used as a category proxy | It is a **2021** team figure. Lapse has since removed its social feed and its recent reviews are complaints ("Bring back social!!!!", Nov 15, 2026). It is also unavailable in most of the 14 storefronts I checked (Lookup returns nothing for AU, TR, SA, AE, EG). Use it as a weak signal only | [V] reviews and Lookup |
| 8 | Egypt "82% Android" | Confirmed: **Android 82.13%, iOS 17.85%**, Oct 2026. Some secondary pages quote 9–11% iOS for mid-2026; today's StatCounter page says 17.85% | [V] StatCounter |
| 9 | Persona list puts "friends apart / long-distance" as the viral engine (`01` P4) | The only long-distance strip app with ratings, stripz, has 34 US ratings and **zero in every other country I checked**. Its reviews are about daily check-ins with friends and family, not parties. The long-distance strip is a feature, not a persona | [V] Lookup, reviews |

---

## 1. Who uses these apps: the numbers

### 1.1 Platforms by gender and age (US, Pew 2026) [V]

| Platform | Women | Men | Ages 18–29 | Ages 30–49 |
|---|---|---|---|---|
| Instagram | **56%** | 45% | **79%** | 64% |
| TikTok | **43%** | 31% | 65% | 45% |
| Snapchat | **30%** | 21% | 56% | 33% |
| Facebook | 77% | 63% | 69% | 78% |
| YouTube | 83% | 85% | 95% | 91% |

Source: Pew Research Center, Social Media Fact Sheet, fieldwork Jan 30–Jun 18, 2026.

What it means:
- Women lead on every image-first platform. The gap is biggest on TikTok (+12 points) and Instagram (+11).
- Snapchat use drops by almost half after 29 (56% → 33%). A Snapchat-shaped product is a young product.
- Pew has no Pinterest or BeReal split for 2026.

### 1.2 Instagram audience by country (NapoleonCat, Oct 2026) [C]

| Country | IG users | Women | Largest age group | Women 18–24 / 25–34 (share of all IG users) |
|---|---|---|---|---|
| US | 190.8M | **55.0%** | 25–34 (30.0%) | 10.3% / 15.6% |
| UK | 40.0M | **54.8%** (page also says 54.3%) | 25–34 (30.5%) | not cleanly readable |
| Egypt | 24.7M | 47.4% | **18–24 (36.0%)** | 17.4% / 16.2% |
| Saudi Arabia | 21.8M | **40.2%** | 25–34 (46.8%) | 9.6% / 18.4% |
| UAE | 13.6M | **34.2%** | 25–34 (43.3%) | 6.2% / 13.9% |

Sources: napoleoncat.com/stats/instagram-users-in-{country}/ (Oct 2026).

**Caution.** These are ad-audience counts, not people. The US figure implies ~49M women aged 18–34 on Instagram. The US census has only about 37M women in that age band. So use the **shares**, not the totals [E, high].

What it means:
- In the US and UK, Instagram's audience is majority female. That matches Digi's buyer.
- In Saudi Arabia and the UAE, women are a minority of the *visible* Instagram audience. Saudi women are on Snapchat and in private channels (§3).
- Egypt's Instagram is young (36% aged 18–24) and close to gender-balanced.

### 1.3 iPhone share (StatCounter mobile OS, Oct 2026) [V]

| Country | iOS | Android | Note |
|---|---|---|---|
| Canada | **64.7%** | 35.3% | |
| Australia | **62.1%** | 37.9% | |
| US | 52.0% | 48.0% | Young people skew iPhone. Piper Sandler: 87–88% of US teens own one [C, Spring/Fall 2025] |
| UK | 50.1% | 49.9% | |
| Saudi Arabia | **42.0%** | 58.0% | |
| Kuwait | 38.5% | 61.5% | |
| UAE | 19.3% | 80.7% | Web traffic includes a large migrant-worker population on cheap Android phones. Probably understates Emirati nationals [E, med] |
| Qatar | 18.9% | 81.1% | Same caveat as the UAE |
| Egypt | 17.9% | 82.1% | |

No public 2025–26 survey splits US iPhone ownership by age *and* gender. Mintel's 2025 US smartphone report has the chart but it is paywalled [C]. My estimate stays at **60–75% iPhone among US women aged 18–29** [E, med].

### 1.4 Where comparable apps' users actually live (rating share, 14 countries, Nov 17) [V]

Ratings are only a rough proxy. Some apps prompt for ratings more than others, and some are not sold in every country. But the *pattern across apps* is clear.

| App (type) | Total ratings, 14 countries | US | UK | CA+AU | Turkey | Gulf (SA, AE, KW, QA) | Egypt | PH+BR |
|---|---|---|---|---|---|---|---|---|
| **Boothie** (AI booth) | 388 | 10% | 2% | 2% | **71%** | 1% | 1% | 5% |
| **WayShot** (digicam AI editor) | 8,112 | **69%** | 5% | 8% | 2% | 2% | 2% | 7% |
| **POV** (event camera) | 24,825 | 63% | 12% | 15% | 0% | **0.5%** | 0.2% | 3% |
| Lense (event camera) | 2,667 | 58% | **19%** | 13% | 0% | 0% | 0% | 1% |
| Partiful (party invites) | 303,976 | **95%** | 1% | 3% | 0% | 0% | 0% | 0% |
| Mini Photobooth (booth) | 10,289 | 89% | 2% | 6% | 0% | 0% | 0% | 0% |
| Tezza (aesthetic editor) | 74,299 | 64% | 3% | 7% | 10% | 1% | 0.1% | 11% |
| ism (retro camera) | 14,846 | 84% | 2% | 6% | 0% | 0% | 0.1% | 6% |
| Dazz (retro camera) | 427,253 | 28% | 3% | 5% | 5% | **8%** | **4%** | **44%** |
| Kapi Cam (Y2K/CCD) | 6,381 | 26% | 2% | 5% | 2% | 3% | 0.3% | **59%** |
| **Locket** (friends photo widget) | 1,102,550 | 54% | 3% | 3% | 1% | **31%** | 0.3% | 3% |

Raw counts that matter:
- **Locket:** US 593,254 · **Saudi Arabia 304,389** · UAE 27,858 · Kuwait 9,928 · UK 32,083 · Egypt 3,799.
- **Dazz:** Saudi Arabia 27,499 · Egypt 15,637 · UK 11,859 · Brazil 133,278 · Philippines 54,131.
- **WayShot:** US 5,590 · UK 441 · Egypt 144 · UAE 102 · Saudi Arabia 78.

**How to read it**
1. **US-built party and booth apps stay American.** Partiful (95% US), Mini Photobooth (89%), POV (63%, with most of the rest in other English countries and Germany). Party tooling does not travel to the Gulf or Egypt.
2. **Digicam *looks* travel, but mostly to low-paying markets.** Dazz and Kapi get 44–59% of their ratings from the Philippines and Brazil, where people resell Dazz access for ₱39 on TikTok [V, @makimoshi post, Jun 2025]. The look spreads. The money doesn't follow.
3. **WayShot is the closest proof for Digi's free camera.** 69% US, plus UK, CA and AU. It is #30 top-grossing Photo & Video in the US and #54 in the UK [V].
4. **The AI booth's proof is Turkish.** Boothie's paid growth came from Turkish-language TikTok (track 14 found its Turkish account made 77% of its views). Digi copying Boothie *in the US* is a new bet, not a copy of a proven one.
5. **Saudi Arabia loves private friend-photo apps.** Locket's Saudi count is 9.5× the UK's. Appfigures said in 2022 that Saudi Arabia was second only to the US in downloads of viral widget apps [C], and Sensor Tower had Locket in Saudi Arabia's top 5 social apps in Q2 2023 [C].

### 1.5 Who earns where (top-grossing Photo & Video, Nov 17, 2026) [V]

| Country | Digi-relevant apps in the top 100 | What tops the chart |
|---|---|---|
| US | Tezza #20 · WayShot #30 · ism #67 | Aesthetic and digicam editors earn |
| UK | Tezza #29 · WayShot #54 · ism #95 | Same as the US, lower |
| Turkey | **Boothie #34** · Tezza #42 · Dazz #54 · WayShot #75 | Booth and digicam both earn |
| UAE | Tezza #45 · WayShot #89 | Weak |
| Egypt | Tezza #67 · Dazz #86 · WayShot #88 | FaceApp #5, Remini #8, Retake AI #16, Persona #21: **face-beauty AI earns** |
| Saudi Arabia | None in the top 100 | Snapchat #1, FaceApp #6, Remini #12, Facetune #15, **Private Photo Vault #20** |
| Germany | Tezza #44 | Weak |

So in Egypt and Saudi Arabia, people pay for **making faces look better** and for **privacy**, not for retro looks. That matters for P3 (§6).

### 1.6 Age

The earlier files already set Digi at 18+ for legal and safety reasons. Nothing in the new data changes that. Two new points:
- Teens are visible in the review data. Lapse reviewers say things like "I can't have Snapchat so this was a safe and fun way" (Nov 3, 2026), which reads like a minor. POV has a "Sweet 16" review. **Any shared-roll feature will attract under-18s at family events.** The age gate needs to cover guests who join a roll, not only the buyer.
- Snapchat use halves after age 29 (Pew 2026). A Snapchat-heavy loop skews young.

---

## 2. Occasions: what the evidence actually says

### 2.1 What 2,628 US App Store reviews mention [V]

Groups:
- **Event cams** = POV, Once, Lense, Party!, Scene, Party Cam, EventPics (n=330).
- **Booth and strip** = Pocketbooth, Mini Photobooth, Licowa, Sera, stripz, Boothie, 2AM CAM (n=599).
- **Friend cams** = Lapse, Dispo, Retro, setlog, Beam, Locket (n=1,131).
- **Albums and invites** = Waldo, SWSH, Apple Invites (n=568).

Share of reviews mentioning each word group (a review can hit several):

| Mention | Event cams | Booth / strip | Friend cams | Albums / invites |
|---|---|---|---|---|
| **Wedding / bride / reception** | **40%** | 4% | 0.4% | 0.4% |
| Party (generic) | 12% | **13%** | 0.3% | 7% |
| Birthday | 4% | 4% | 0.4% | 3% |
| Family / reunion | 6% | 3% | 3% | 3% |
| Trip / vacation | 3% | 0.2% | 1% | 2% |
| Bachelorette / hen | 2% | 0.3% | 0% | 0% |
| Graduation | 1% | 1% | 0% | 1% |
| Baby shower / gender reveal | 1% | 1% | 0% | 1% |
| Sorority / frat / college / formal | 1% | 0.3% | 0.4% | 1% |
| Christmas / holiday | 0.3% | 2% | 0.3% | 0.4% |
| NYE | 0% | 0.5% | 0.1% | 0% |
| Halloween | 0% | 1% | 0.1% | 0% |
| Friendsgiving / Thanksgiving | 0.3% | 0% | 0% | 0% |
| Girls night / night out / Galentine's | 0.3% | 0.2% | 0.4% | 0% |
| "Friends" | 10% | 5% | **31%** | 8% |
| "Guests" | **19%** | 5% | 0% | 11% |
| "My kids / daughter / son" | 3% | 2% | 0.3% | **11%** |
| **Mentions price / paying / subscription** | 12% | **26%** | 13% | 13% |
| "Worth it" | 4% | 3% | 1% | 1% |

**What this says**
1. **Event cameras are wedding products.** 40% of reviews name a wedding, and "guests" shows up in 19%. The buyer is a couple or a parent ("my daughter's wedding", "my nephew's wedding").
2. **Booth apps are bought for one-off parties at home**: kids' birthdays, grad parties, a 60th, a Christmas party, a Halloween party. Many reviewers are parents setting up an iPad on a tripod. That is *not* Digi's 18–30 woman.
3. **Friend cams are about friends, every day.** "Friends" is in 31% of reviews, occasions in almost none. Lapse and Locket users want a running feed with their close friends.
4. **Christmas, NYE, Friendsgiving and girls' nights are almost absent.** These are real parties, but nobody reviews a camera app about them. Either people don't use these apps for them, or they use the phone camera and Instagram. I can't tell which from reviews alone.
5. **The 18–30 night-out user is not well served by any of these groups.** That is the gap. It is also a warning: no app has proved that this group pays for a party-specific camera.

### 2.2 Real review lines, by occasion [V]

| Occasion | Quote (app, stars, date) |
|---|---|
| Wedding | "This was the absolute best decision we could have made for our wedding day." (POV, 5★, Oct 9, 2026) |
| Wedding, found via TikTok | "I came across Once on TikTok while looking for something our guests could use to capture our wedding from their own perspective." (Once, 5★, Nov 12, 2026) |
| Bachelorette | "We used it on my bachelorette trip and it was such a hit with all the girls 💕" (POV, 5★, Oct 11, 2026) |
| Bachelorette vs disposables | "Way more affordable than buying everyone disposable cameras & getting them developed" (Once, 5★, Aug 17, 2026) |
| Milestone birthday | "walking into 50s ... way less than paying a photographer ... a surprise to release the photos the day after" (Once, 5★, Oct 9, 2026) |
| Daughter's 30th | "This was a great way to capture my daughters 30th birthday!" (POV, 5★, Apr 27, 2025) |
| Halloween party | "My Halloween party photos are spectacular." (2AM CAM, 5★, Nov 1, 2026) |
| Halloween, unmet need | "I downloaded this for a Halloween party ... no premade themes for Halloween. I would not pay for this" (Pocketbooth, 1★, Oct 31, 2026) |
| Christmas party | "Our Christmas party was so much more fun with the photos we took from Pocketbooth!" (Pocketbooth, 5★, Dec 17, 2022) |
| Friends far apart | "I love getting to see a glimpse of my friends' days, especially those that are far away." (stripz, 5★, Jul 23, 2026) |

Note the Pocketbooth Halloween review. The user arrived on the day of the party, wanted a **ready-made themed strip**, didn't find one, and left. That is the exact moment Digi's occasion looks are for. **Themed looks must be live before the date, not on it.**

### 2.3 Occasion search signals (Google autocomplete, Nov 17) [V]

| Seed (country) | What Google suggests | Read for Digi |
|---|---|---|
| "21st birthday pics" (US) | girl · boy · ideas · **pinterest** · captions · collage | Milestone birthday is a pose-and-caption search |
| "30th birthday photoshoot" (US) | ideas · **for her** · black girl · at home · outfit ideas · black woman · studio | Post-grad women plan a "shoot" for their 30th. A strong P2 moment |
| "birthday photo dump" (US, UK) | captions · for instagram · template · ideas · **capcut template** · captions with friends | The dump is the output format. CapCut competes |
| "digicam pics" (US) | aesthetic · caption · **picsart digicam** · pinterest · **blurry** | Blur is wanted. Picsart competes |
| "christmas party photo booth" (US) | ideas · props · **template** · backdrop · frame · layout | Template and frame intent: a free web tool can catch it |
| "christmas party pics" (US, UK, AU) | funny · free · clip art · cartoon · kids | Mostly clip-art intent, **not** "my photos". Weak |
| "work christmas party" (US) | ideas · dress · outfit · activities · games | Outfit and games, not photos |
| "galentines photo" (US) | photoshoot · backdrop · ideas · props · **photo booth** · wall · caption | Good Feb moment for P2 |
| "bachelorette pics" (US) | ideas · party pics · inspo · group pics · beach · **boat** · promo | P2's summer moment |
| "engagement party photo booth" (US) | props · template · frame · ideas · backdrop | Host intent |
| "flash photos party" (US) | flash party photo booth (rental, reviews, DFW) | "Flash party" is a rental brand term. Avoid as SEO |
| "hen do photo" (UK) | album · props · book · **challenge** · frame · scavenger hunt · bingo | UK P2 summer |
| "nye dubai" (UAE) | 2026 · 2027 · events · fireworks · restaurant · marina · tickets | NYE is a big Dubai night, but searches are about events, not photos |
| "فوتو بوث" (photo booth, EG and SA) | for sale · mirror booth · 360 · Jeddah · **National Day** · Red Sea · rental · online · Mecca · **ai** | Arabic "photo booth" is a B2B rental word. "AI" and "online" appear |
| "تصوير حفلة" (filming a party, SA) | **engagement** party · **graduation** party · **birthday** party | The Saudi occasion list: engagement, graduation, birthday |
| "صور خطوبة" (engagement photos, EG) | real · at home · **without touching** · profile · 2026 | Egyptian engagement photos must respect modesty ("without touching") |
| "photo booth" (EG) | egypt · alexandria · **mall of egypt** · cairo · maadi · machine price | Physical mall booths exist in Cairo and Alexandria |
| "photobooth" (EG) | egypt · **online** · cairo · **website** · maadi · **webcam** | Web-booth intent exists in Egypt too |

### 2.4 Occasion map by country (what to theme, and when)

Scores are fit with Digi's 18–30 adult woman × reachable in the next 60 days, out of 10 [E, med].

| Occasion | US | UK | Saudi / Gulf | Egypt | In the contest window? |
|---|---|---|---|---|---|
| Girls' night out / going-out pics | 9 | 9 | 3 (mixed nightlife is new and limited) | 4 (Cairo AB class only) | Every weekend |
| Friend-hosted house party / holiday party | 8 | 8 ("Christmas do") | 2 | 3 | Dec 5–6, 12–13 |
| Birthdays (21st, 25th, 30th) | 9 | 8 | 7 (women-only gatherings, private) | 7 | All year |
| Friendsgiving | 7 | 1 | 0 | 0 | Nov 20–22 (launch is too late for most) |
| Galentine's (Feb 13) | 8 | 7 | 2 | 2 | No (Feb) |
| Bachelorette / hen | 8 | 8 | 0 | 0 | No (Mar–Oct) |
| Wedding guest | 5 (event cams own it) | 5 | 2 (phones often banned in women's halls) | 6 (engagement, katb el-ketab, henna) | Low season |
| Graduation | 6 | 5 | **8** (huge women-only graduation parties) | 6 | No (May–Jun) |
| Office party | 3 | 3 | 1 | 1 | Dec |
| NYE | 8 | 8 | 3 (UAE 6) | 5 (Cairo, Sahel) | **No** (Dec 31) |
| Eid | 0 | 0 | 6 (family visits, new outfits; Eid al-Fitr ≈ Mar 9–10, 2027, projected) | 6 | No |
| Saudi National Day (Sep 23) | 0 | 0 | 5 ("photo booth National Day" is a real search) | 0 | No |

Sources for non-search facts:
- Saudi women's sections at weddings and graduations often ban camera phones, and Saudi legal experts describe filming brides at women-only parties as a privacy crime [C, Saudi Gazette via Siasat; Daily Tribune Bahrain; both pre-2016, so practice may have relaxed].
- Riyadh Season 2025 passed **11 million visits** by late December 2025 [C, Arabian Business, Zawya]. No age or gender split was published.
- Egypt registered **936,739 marriage contracts in 2024** (−2.5% YoY). The most common bride age band is 20–25 [C, CAPMAS via Cairo Scene, Dec 2025].
- UK hen dos: about 13–15 people and £187–207 per person (2024–25) [C, GoHen and Partyhouses industry data, not independent surveys].

---

## 3. How they share

### 3.1 The US/UK/CA/AU pattern
- **Instagram Stories first, feed second.** YPulse (2025 behavioural report, n=1,500 aged 13–39, US/CA) says young adults are more likely to post a photo to their Stories than their main feed [C].
- **The photo dump is the feed format.** Instagram allows 20 items per carousel (since Aug 2024). 90%+ of US "photo dump" searches are about captions (track 01) [V]. "Birthday photo dump captions" and "capcut template" are common suggestions (§2.3).
- **Snapchat for the raw, blurry version.** Snap says Lenses with "blurry" in the name were viewed **over 3.2 billion times in 2024** [C, Snap newsroom, Jun 11, 2025]. Blur is a wanted look, not a flaw.
- **The group chat decides.** Snap's December 2025 data: **68% of Gen Z share gift ideas through messaging apps** or by circulating posts [C, Marketing Beat, Dec 9, 2025; no sample given]. The same habit applies to photos. Digi's share sheet must put **iMessage and WhatsApp first** for the "send to the group" step, and IG Story first for the "show everyone" step.
- **TikTok is discovery, not sharing.** In 49 public TikTok posts about digicam/booth apps (track 14 cache), upload countries were US 13, PH 8, NL 7, TR 4, GB 2, CA 2 and others [V]. Captions talk about "aesthetic", "beach", "vacay", "that friend", "girls", "why get a digicam when you can just use @wayshot_app" (GB poster, 30.4K views). People find the app on TikTok and post the result on Instagram.
- **Hosts find event apps on TikTok too:** "I came across Once on TikTok while looking for something our guests could use" (Once review, Nov 12, 2026) [V].

### 3.2 The Gulf pattern
- **Snapchat is the main photo channel.** Snap's Saudi GM said in Feb 2025 that Snapchat has **25M+ monthly users in Saudi Arabia**, with **90% aged 13–34** and **70 minutes a day** of use [C, Gulf News, Feb 22, 2025]. Snapchat is the #1 top-grossing Photo & Video app in Saudi Arabia today [V].
- **Women are a minority of the visible Instagram audience** (40% in Saudi Arabia, 34% in the UAE) [C, NapoleonCat].
- **Privacy is a feature.** "Private Photo Vault" is #20 top-grossing in Saudi Photo & Video [V]. Women-only events are often photo-free [C]. Locket (photos that only close friends see, on the home screen) has 304K Saudi ratings [V].
- **Implication:** a Gulf version of Digi would sell **"only the girls who were there see these"**, not "post it to your story".

### 3.3 The Egypt pattern
- **Facebook is still the biggest network** (60.2M users, 50% of the population) and Instagram has ~24.7M, young and nearly gender-balanced [C, NapoleonCat Sep–Oct 2026].
- Engagement and katb el-ketab photos are a big search topic, with modesty filters ("without touching") [V].
- Physical photo booths exist in Cairo malls (Mall of Egypt, Maadi) and Alexandria [V, autocomplete].

---

## 4. What they pay for

### 4.1 Evidence from reviews [V]

| Pattern | Quote | App, date |
|---|---|---|
| Host pays per event, judged against disposables | "Disposables are literally 10 times as expensive. Everyone loved using POV. No brainer for your event!!" | POV, Feb 1, 2026 |
| Host pays for many guests | "I'm a little bummed more of our guests didn't use it because I paid for like 70 pe[ople]" | POV, Jul 27, 2026 |
| Upsell of a physical keepsake works | "We even opted to get the surprise book for like $20ish and it was so much fun" | POV, Jul 27, 2026 |
| Judged against a photographer | "way less than paying a photographer" | Once, Oct 9, 2026 |
| Judged against a booth rental | "Spent so much money on a photobooth, but our guests had way more fun with POV" | POV, Feb 1, 2026 |
| Price fits big events, not small ones | "worth it for such a large event but it's pretty pricy for smaller events like our gender reveal and baby shower" | Mini Photobooth, Jun 6, 2024 |
| Weekly sub on a simple tool = backlash | "$5 PER WEEK?! ... DELETED." | Pocketbooth, Jan 9, 2026 |
| Surprise paywall = 1★ | "idk why u would wait until the very last second to tell someone you have to pay" | Scene, Jul 3, 2026 |
| Intro-offer confusion = "scam" | "Holiday Offer of $0.99 first month and then $39.99 ... they charged me $39.99 the first month anyways" | Mini Photobooth, Dec 29, 2024 |
| One-off price nostalgia | "Best .99 I ever spent!" | Pocketbooth, Feb 27, 2015 |
| Paid tier fails to deliver | "I paid for the most expensive package so guests would be allocated 25 photos. However the guests were only given 15" | POV, Jun 24, 2026 |

**Rules that come out of this**
1. **A group product is bought by one person.** Price it per party, show the per-guest maths ("$5.99 for 8 friends = 75¢ each"), and compare to a real-world cost (a disposable camera, a booth rental).
2. **Say the price before the user invests effort.** Scene got a 1★ for showing the paywall at the last step.
3. **Weekly is fine for an "aesthetic" product people use daily (WayShot, Tezza) but reads as greedy on a party tool used twice a month.** Keep the weekly plan off the Party Pack screen.
4. **Physical keepsakes sell.** POV's ~$20 photo book is a natural later upsell for strips (prints, a mini zine).

### 4.2 Category money signals
- **US:** aesthetic subscriptions earn (Tezza #20, WayShot #30–32). North America trial-to-paid median is 34.2%; MEA is 19.5% (RevenueCat, used in bible chapter 06) [V there].
- **Turkey:** AI booth earns (Boothie #34).
- **Egypt and Saudi Arabia:** face-beauty AI earns (FaceApp, Remini, Retake, Facetune, Persona) [V]. Digi's "re-light" look is closer to this than to a retro filter. That's useful later.
- **Generic AI apps skew male** (US ChatGPT users ~70% male, Sensor Tower State of AI Apps 2025) [C]. So "AI" is not a selling word for this audience. Sell the result ("everyone looks good in the flash pic"), not the tech. Track 01's "market reacts against AI" point stands.

### 4.3 What it costs a buyer in each country [V prices, E maths]

| | US | UK | Saudi Arabia | Egypt |
|---|---|---|---|---|
| Apple's automatic price for a $5.99 item | $5.99 | £5.99 | SAR 24.99 (≈ $6.66 incl. 15% VAT) | EGP 299.99 (≈ $5.59 at EGP 53.7) |
| A $39.99 yearly plan, automatic price | $39.99 | ~£39.99 | ~SAR 169.99 | ~EGP 2,400 [E, from the 60× ratio of $4.99 → EGP 299.99] |
| Yearly plan vs the private-sector monthly minimum wage | — | — | — | **~34% of EGP 7,000** |

Sources: iTunes Lookup local prices for 2AM CAM and Procreate Pocket (Nov 17) [V]; EGP ≈ 53.4–53.7 per USD (Arab Finance, Nov 12–15, 2026) [C]; Egypt private-sector minimum wage EGP 7,000 since Mar 2025, public sector EGP 8,000 from Jul 2026 [C, Cairo Scene; Egyptian Streets]. Chapter 06 already proposes custom Egypt prices (EGP 149.99 weekly / 999.99 yearly).

---

## 5. Country verdicts

| | US | UK | CA + AU | Saudi Arabia | UAE | Egypt | Turkey (for reference) |
|---|---|---|---|---|---|---|---|
| iOS share | 52% | 50% | 65% / 62% | 42% | 19% (undercounted) | 18% | not checked |
| Women on IG | 55% | 55% | n/a | 40% | 34% | 47% | n/a |
| Proof people pay for digicam looks | **Yes** (WayShot #30, Tezza #20) | Yes (#54, #29) | Yes (ratings) | No (none in top 100) | Weak | Weak (Dazz #86, WayShot #88) | Yes |
| Proof people pay for AI booth looks | **Not yet** | No | No | No | No | No | **Yes** (Boothie #34) |
| Party/event app adoption | High | Medium | Medium | ~0 | ~0 | ~0 | ~0 |
| Private friend-photo adoption | High | Low | Low | **Very high** | Medium | Low | Low |
| Founder can create native content | Only with US creators (track 14) | Same | Same | **Yes, Arabic** (Gulf dialect needs care) | Yes | **Yes** | No |
| Contest fit (to Dec 16) | **9** | 7 | 7 | 3 | 3 | 1 | n/a |
| Year-1 fit | 9 | 7 | 7.5 | **6** | 4 | 3 | (5 if a Turkish creator partner appears) |

Notes:
- The earlier README recommends launching **US-only first** for legal reasons (EU AI Act, UK Online Safety Act). UK, CA and AU follow after a legal check. Nothing here changes that.
- **Egypt's score is 1 for the contest** because (a) contest rules disqualify purchases by friends, family and other entrants, so the founder's own network is off-limits; (b) prices are high in local terms; (c) iOS share is low. Egypt is useful for **testing looks on Egyptian faces and skin tones** with paid, consenting models, not for revenue.

---

## 6. The three personas

### P1. "The digicam girl" (acquire first)

**Who**
- Women aged 18–26 in the US first, then CA, AU and the UK. College students and first-job women.
- Owns an iPhone, posts Stories most days and a dump every few weeks.
- Wants the 2000s digicam look (flash, blur, grain, date stamp) on everything: nights out, beach days, trips, friends at home.
- Has probably looked at a Canon G7X or Kodak PixPro price and winced.

**Evidence**
- WayShot: 69% US ratings, #30 US top-grossing; its TikTok bio is "The #1 viral digicam app on TikTok" [V].
- TikTok captions: "why get a digi cam when you can just use @wayshot_app" (GB); "how to make ur photo look like it was taken on a digicam #flasheffect #beachphotos" (US, 231.6K views); "in love with this effect (boothie) #sunsetbeach #digicamlove" (US, 1.0M views) [V].
- Autocomplete: "digicam pics aesthetic / blurry / caption", "picsart digicam filter" [V]; "digicam filter app / online free / website" (track 01) [V].
- Pew 2026: 79% of 18–29s use Instagram, 65% TikTok, 56% Snapchat; women lead on all three [V].
- Snap: "blurry" Lenses viewed 3.2B times in 2024 [C].
- Search interest: US "digicam" +37% YoY (autumn 2026), worldwide 5-year high in early Nov 2026 (track 01) [V].

**Occasions**
- Every weekend night out, trips, the beach, birthdays.
- In the contest window: Friendsgiving weekend (Nov 20–22), Thanksgiving break, December holiday parties, "home for the holidays" pics.
- After the window: NYE and the Dec 28–Jan 3 "year dump" peak.

**How she shares**
- IG Story the same night. Close Friends for the messy ones. The dump later. Snapchat for the blurry raw version.

**What she pays for, and how much**
- A yearly aesthetic plan if the free camera already earns a place on her home screen. North America median yearly price is $39.99 (chapter 06) [V].
- Weekly only if she uses it daily.
- She does **not** want to see "AI" in the copy. She wants "looks like a real flash photo".
- WTP [E, med]: $39.99/year after a 3-day trial; a $5.99 one-off pack for a special night.

**Hooks that fit her (exact copy to test)**
- "Your iPhone, but 2006."
- "The digicam look. No digicam."
- "Skip the $750 G7X." (Canon list price per bible track 01; show the source on screen)
- "Flash on. Date stamp on. Post it."

**What Digi must have for her on day 1**
- A free camera that looks right in one tap (flash, CCD colour, date stamp).
- One-tap IG Story export at 9:16 and a 4:5 dump export.
- A short look library with names she'd say out loud ("Flash 05", "Mall Booth", "Y2K Party").

**Risk:** she is the most copied target in the category (WayShot, Kapi, Dazz, 1998 Cam, Picsart, CapCut). Digi's edge must be the **group** layer (P2), not the filter.

**Score:** reach 9 · pays 7 · fits Digi 8 · contest timing 9 → **8.3/10**

### P2. "The host" (monetise in December, grow after)

**Who**
- Women aged 22–34 in the US (later UK) who organise things. The friend who books the dinner, makes the Partiful, buys the props, plans the 30th and later the bachelorette.
- Has her own card. Thinks in "per head" costs.

**Evidence**
- **Partiful has 290,015 US ratings, 95% of its total** [V]. Hosting a party with a digital invite is a mainstream US habit.
- Event-camera reviews: host pays, judges against disposables, photographers and booths (§4.1) [V].
- "30th birthday photoshoot ideas **for her**", "galentines photo booth", "engagement party photo booth template", "bachelorette group pics" (§2.3) [V].
- Bachelorette: ~$1,300 per attendee, about 2 days (The Knot 2023 Bach Study) [C]. UK hens: 13–15 people (industry data) [C].
- Gen Z is lukewarm on *office* parties (Harris 2024: 37% very likely to attend) [C], which pushes the action to friend-hosted parties.

**Occasions (ranked for her)**
1. Milestone birthdays (21st, 25th, 30th). All year.
2. Holiday house party / "Friendsmas" / ugly sweater party. Dec 5–6 and 12–13 are the in-window weekends.
3. Galentine's (Feb 13).
4. Bachelorette / hen weekend (Mar–Oct).
5. Engagement party.

**How she shares**
- She sends the strip to the group chat the morning after, then everyone posts it to their Story. She is the person who makes 8–12 other people open Digi.

**What she pays for**
- **A one-off pass for one party.** Reviews show hosts pay happily per event and resent a weekly plan for occasional use.
- A physical extra later (prints, a mini book; POV sells a ~$20 book) [V].
- WTP [E, med]: **$5.99 Party Pack** for one night (8–12 people); **$14.99–19.99 weekend pass** for a bachelorette; yearly if she hosts often.

**Hooks (exact copy to test)**
- "One strip. Everyone looks good."
- "Your party's photobooth, for $5.99. Cheaper than one disposable camera."
- "Photos develop at 9 a.m. for everyone who was there."
- "Send it to the group chat before brunch."

**What Digi must have for her**
- A Party Pack bought by one person, with guests joining free from a link (no download for guests is the norm in event apps: POV, Scene and Lense all advertise it) [V, reviews and listings].
- The price shown **before** she sets up the party.
- Themed strips ready **before** the date (the Pocketbooth Halloween lesson, §2.2).
- Event name and date in the stamp ("EMMA'S 30TH · 12.05.26").

**Risk:**
- Weddings are owned by POV (15.7K US ratings), Lense, Once and Scene. Don't fight for weddings.
- Her guests include under-18s at family events. Gate AI processing on every face, not just the host's.
- Her big buying season (bachelorettes) is Mar–Oct, after the contest.

**Score:** reach 6 · pays 8 · fits Digi 9 · contest timing 6 → **7.3/10**

### P3. "The close-friends sharer" in the Gulf (test in 2027)

**Who**
- Saudi (and Kuwaiti) women aged 18–30, on iPhone more than average for the region.
- Snapchat-first. Shares with a small, trusted circle.
- Celebrates at women-only gatherings: engagements, graduations, birthdays, Eid visits.
- Cares about privacy (who sees her face, without hijab, at a women-only event).

**Evidence**
- Locket: **304,389 Saudi ratings** vs 32,083 UK [V]. Dazz: 27,499 Saudi vs 11,859 UK [V].
- Snapchat: 25M+ monthly users in Saudi Arabia, 90% aged 13–34, 70 min/day [C, Feb 2025]; #1 top-grossing Photo & Video in Saudi Arabia [V].
- Private Photo Vault #20 top-grossing in Saudi Photo & Video [V].
- Saudi Instagram is only 40% women [C].
- Search: "تصوير حفلة خطوبة / تخرج / عيد ميلاد" (filming an engagement / graduation / birthday party), "فوتو بوث اليوم الوطني" (National Day photo booth), "فوتو بوث ai" [V].
- Saudi iOS share 42% [V].
- Party and event apps don't work there: POV 36 Saudi ratings, Partiful 19 [V].

**What she wants**
- Beautiful photos of a women-only night that **only the women who were there** can see.
- Faces that look good (FaceApp, Remini and Facetune are top-grossing there) [V].
- No public posting by default.

**What she pays**
- Unknown. MEA trial-to-paid is 19.5% vs 34.2% in North America, and MEA buyers prefer monthly plans (chapter 06) [V there]. Saudi prices are at full parity (SAR 24.99 for a $5.99 item) and Saudi spending power can carry that [E, med].

**Hooks (draft Arabic copy; needs a native Gulf-dialect speaker to check before use)**
- "صور القعدة… للبنات اللي كانوا موجودين بس" ("The gathering's photos… only for the girls who were there.")
- "فلاش، وتاريخ، وكأنها من كاميرا ديجيتال" ("Flash, a date stamp, like it came from a digital camera.")
- "ألبوم الحفلة يتحمّض الصبح" ("The party album develops in the morning.")

**What Digi would need for her**
- Private rolls by default, with no share-to-public prompts.
- Clear on-screen consent from every person in an AI-edited photo.
- Looks that work with hijab and modest dress, and that never alter clothing.
- An Arabic, right-to-left interface.
- Region-specific age and content rules (legal check first).

**Risks**
- Women-only event photos are legally sensitive in Saudi Arabia [C]. One leaked roll is a brand-ending event.
- AI editing of women's faces may meet more resistance than in the US.
- Payments, VAT and local law need a check before launch.

**Score:** reach 5 · pays 6 · fits Digi 6 · contest timing 1 → **4.5/10 now, ~6.5/10 for a 2027 test**

### 6.4 Side by side

| | P1 Digicam girl | P2 The host | P3 Close-friends sharer (Gulf) |
|---|---|---|---|
| Age | 18–26 | 22–34 | 18–30 |
| Where | US, then CA, AU, UK | US, then UK | Saudi Arabia, Kuwait |
| Main channel | TikTok to find, IG to post | Group chat, IG Story, Partiful | Snapchat, private |
| Use frequency | Weekly or daily | 1–3 parties a month | Events, Eid, weekends |
| Best product | Free digicam camera + yearly AI looks | Party Pack, group strip, 9 a.m. roll | Private roll + face-flattering looks |
| Price that fits [E] | $39.99/yr | $5.99/party; $14.99–19.99/weekend | SAR monthly plan (test) |
| Proof she pays | Strong (WayShot, Tezza in the US) | Medium (event cams, US) | Weak to medium (face AI and Snapchat in SA) |
| Viral effect | Posts results; "what app?" comments | Brings 8–12 people per party | Brings a closed circle |
| Contest fit | **High** | Medium (Dec weekends only) | None |
| Score | **8.3** | **7.3** | 4.5 (now) |

---

## 7. Which persona first, and why

**Pick for the contest: acquire P1, monetise P1 and P2.**

1. **Acquisition goes to P1** because it is the only one with proof that US women *pay* (WayShot, Tezza) and a search trend that is still rising. Content about "the digicam look on your iPhone" travels on TikTok without needing a party, a venue or anyone's consent.
2. **Revenue comes from two places.**
   - P1 yearly plans, which count in full in the contest when paid upfront.
   - P2 Party Packs on the two December weekends inside the window (Dec 5–6, 12–13). Every Party Pack brings 8–12 new users, who are mostly P1s.
3. **Hold P3** until after Dec 16. It needs Arabic UI, privacy features, a legal check and a native-dialect copy check. None of that fits a 30-day build.

**What would change my mind**
- If the first 7 days show Party Pack conversion above the yearly plan's, flip the paywall order: lead with the pack.
- If the RevenueCat country split shows more than 20% of revenue from non-English storefronts, look at that market's language before P3.
- If Turkish users show up organically (Boothie's market), do **not** chase them without a Turkish creator. The founder can't make native content there.

---

## 8. Open questions I could not close

1. **Gender and age of payers for any comparable app.** No public data. Measure it yourself with an optional one-tap onboarding question ("Who are you making photos with?": friends / partner / family / my event's guests) and Apple's Declared Age Range.
2. **Reddit and TikTok comment themes.** Blocked to my tools. The owner can spend 20 minutes on r/digicam, r/bachelorette and r/weddingplanning and paste 10 representative lines into `docs/` (no usernames).
3. **Do 18–30 US women buy party-specific camera products at Christmas?** The review data says "not that we can see". The first two December weekends will answer it.
4. **Saudi women's willingness to have AI edit their photos.** No data. Needs interviews with real users, not desk research.
5. **TikTok Creative Center hashtag counts** (#digicam, #photobooth, #photodump, US/UK, 120 days). The owner can screenshot these with a free business login (track 01 already asks for this).

---

## What this means for Digi

1. **Write the App Store subtitle and first screenshot for P1, not P2.** Draft subtitle: "Digicam flash camera & booth" (fits the 30-character limit). First screenshot headline: **"Your iPhone, but 2006."** The party and strip features go in screenshots 2–4.
2. **Remove "AI" from the hero copy.** Say "re-light", "flash", "everyone looks good". Keep "AI" in the consent screen and the App Store description, where Apple's rules require clarity.
3. **Ship two themed strip packs before Nov 20 and two before Dec 4.**
   - By Nov 20: "Friendsgiving" and "Home for the holidays".
   - By Dec 4: "Holiday party" (ugly sweater / Friendsmas) and "Galentine's" (pre-loaded for Feb, so it is ready when people search in late January).
   - Each needs an editable event name and date in the stamp: "EMMA'S 30TH · 12.05.26".
4. **Show the Party Pack price on the "Start a party" screen before setup**, with the per-guest maths: "$5.99 for up to 12 friends (50¢ each)". Never reveal it at the last step (the Scene 1★ lesson).
5. **Keep the weekly plan off the Party Pack flow.** Weekly appears only in the main paywall, next to the pre-selected yearly plan.
6. **Run the age gate on every face in a group photo, not just the buyer.** Reviews show family events and a "Sweet 16" on POV. Refuse AI on any face that looks under 18, and say why in plain words.
7. **Make the share sheet two-step:** (a) "Send to the group" (iMessage, WhatsApp) right after the roll develops; (b) "Post to Story" (IG first, Snapchat second), with 9:16 and 4:5 exports and a dump export of up to 20 images.
8. **Add one onboarding question to learn who your users are:** "What are you shooting first?": a night out / a party I'm hosting / a trip / just my everyday. Log it with the country and the purchase in RevenueCat. Review the split on Nov 30 and Dec 10.
9. **Spend the content budget on P1 formats** (before→after digicam, "skip the G7X", "how to make photos look like a digicam") and on **two host videos per December weekend**. The host videos show one strip of 6–8 consenting friends with the event name stamped, posted Friday morning before the party.
10. **Do not market in Egypt during the contest.** Use Egypt only for look testing with paid, consenting adult models. Never sell to friends or family (contest rule).
11. **Write a one-page P3 brief for January:** Arabic interface, private roll by default, hijab-safe looks, a Saudi legal check, and a Gulf-dialect copy review. Decide by Jan 15 whether to test it.
12. **Keep using the 18–30 woman as the core but stop calling the AI booth "proven in the US".** In every pitch and judges' update, say: "the digicam look is proven in the US (WayShot, Tezza); the AI booth is proven in Turkey (Boothie); Digi is testing whether US women pay for the group version."

---

## Sources

**Primary data I pulled (Nov 17, 2026) [V]**
- iTunes Lookup API, 14 storefronts: https://itunes.apple.com/lookup?id=6775603987,6749303003,1636032890,6754265953,6444442256,1636699256,1422471180,6740760807,1393061654,1450480287,781383622,1600525061,1662982304,385145330,1342093386,6667106950,6776776707,1580668065,6443709020&country={us,gb,ca,au,tr,de,fr,sa,ae,kw,qa,eg,ph,br}
- Local price check: https://itunes.apple.com/lookup?id=6793744610,916366645&country={us,eg,sa,ae,gb,tr}
- Apple top-grossing Photo & Video RSS: https://itunes.apple.com/{us,gb,tr,sa,ae,eg,de}/rss/topgrossingapplications/limit=200/genre=6008/json
- App Store customer reviews (US), cached Nov 17 by bible track 04 and reused here: https://itunes.apple.com/us/rss/customerreviews/id={APPID}/json
- StatCounter mobile OS share, Oct 2026: https://gs.statcounter.com/os-market-share/mobile/{egypt,saudi-arabia,united-arab-emirates,united-kingdom,united-states-of-america,kuwait,qatar,canada,australia}
- Google autocomplete: https://suggestqueries.google.com/complete/search?client=firefox&hl={en,ar}&gl={us,gb,au,eg,sa,ae}&q=...
- Pew Research Center, Social Media Fact Sheet (fieldwork Jan 30–Jun 18, 2026): https://www.pewresearch.org/internet/fact-sheet/social-media/
- Pew, Americans' Social Media Use 2025 (Nov 20, 2025): https://www.pewresearch.org/internet/2025/11/20/americans-social-media-use-2025/
- TikTok public post data (cached by bible track 14): `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/bible/tt/all.jsonl`

**Secondary [C]**
- NapoleonCat Instagram audience, Oct 2026: https://napoleoncat.com/stats/instagram-users-in-united_states_of_america/ · https://napoleoncat.com/stats/instagram-users-in-united_kingdom/ · https://napoleoncat.com/stats/instagram-users-in-saudi_arabia/ · https://napoleoncat.com/stats/instagram-users-in-united_arab_emirates/ · https://napoleoncat.com/stats/instagram-users-in-egypt/
- Snapchat in Saudi Arabia (Feb 22, 2025): https://gulfnews.com/amp/story/world%2Fgulf%2Fsaudi%2Fsnapchat-dominates-among-saudi-youth-with-90-of-users-aged-13-34-1.500043687 · https://www.arabnews.pk/node/2548521
- Snap "Snapchat Generation" report (Jun 11, 2025): https://newsroom.snap.com/snapchat-generation-report
- Snap Christmas group-chat data (Dec 9, 2025): https://www.marketing-beat.co.uk/2025/12/09/gen-z-turn-to-group-chats-for-christmas-inspiration-says-snapchat-data
- Piper Sandler teen survey (Fall 2025 / 2026 coverage): https://www.mactech.com/2025/10/09/survey-eighty-seven-percent-of-teens-report-they-own-an-iphone · https://www.decadirect.org/articles/unpacking-teen-trends-fall-2026-taking-stock-with-teens-survey · https://www.roic.ai/news/piper-sandler-teen-survey-tiktok-roblox-and-beauty-lead-as-snapchat-and-netflix-lag-10-13-2026
- Locket in Saudi Arabia: https://sensortower.com/blog/2023-q2-unified-top-5-social%20networking-units-sa-600b30a6241bc16eb80bb51d · https://appfigures.com/resources/insights/20220415/3-whats-with-these-widgets-going-viral
- Sensor Tower, State of AI Apps 2025 (gender skew): https://appdevelopermagazine.com/state-of-ai-apps-2025-report/
- YPulse (Stories vs feed, photo editing): https://www.ypulse.com/report/2025/11/05/mobile-app-behavior-report-5/ · https://www.ypulse.com/article/2022/10/12/social-media-has-made-photo-editing-standard-for-young-females/
- Harris Poll, State of Work Holiday Parties (Dec 2024): https://theharrispoll.com/wp-content/uploads/2024/12/State-of-Work-Holiday-Parties-December-2024.pdf
- UK workers prefer a cash bonus (Dec 2025): https://workplacejournal.co.uk/2025/12/60-of-workers-dislike-secret-santa-finds-jukebox-marketing/
- The Knot bachelorette cost (2023 study): https://www.theknot.com/content/bachelorette-party-weekend-cost · https://www.theknot.com/content/bachelorette-party-statistics
- UK hen dos: https://www.gohen.com/blog/hen-party-statistics-2025-2026/ · https://partyhouses.co.uk/hen-party-statistics/ · https://www.aviva.com/newsroom/news-releases/2023/06/guests-face-four-figure-bills-for-stag-and-hen-dos/
- Saudi wedding photo privacy (older reports): https://archive.siasat.com/news/end-camera-phone-ban-weddings-saudi-women-284910 · https://www.newsofbahrain.com/world/18086.html · https://arabnews.com/node/644071
- Riyadh Season 2025 visits: https://www.arabianbusiness.com/industries/travel-hospitality/riyadh-season-2025-draws-11-million-visitors · https://www.zawya.com/en/business/travel-and-tourism/visitors-to-riyadh-season-2025-surpass-11mln-fmefzd5h
- Egypt marriages 2024 (CAPMAS): https://cairoscene.com/Buzz/Egypt-Records-Decline-in-Marriages-Uptick-in-Divorces-in-2024
- Egypt social media: https://datareportal.com/reports/digital-2026-egypt
- EGP/USD (Nov 12–15, 2026): https://www.arabfinance.com/en/news/newdetails/usd-egp-exchange-rate-on-november-15-2026 · https://www.arabfinance.com/en/news/newdetails/usd-egp-exchange-rates-hold-steady-at-egyptian-banks-on-november-12
- Egypt minimum wage: https://cairoscene.com/buzz/minimum-wage-for-private-sector-in-egypt-raised-to-egp-7-000 · https://egyptianstreets.com/2026/04/02/egypt-raises-minimum-wage-to-8000-egp-from-july-2026/
- Partiful growth (social-listening estimate): https://www.meltwater.com/en/blog/in-person-events-trend-2025-brand-marketing-insights
- BeReal demographics (2022 comScore via Statista, dated): https://statista.com/statistics/1341126/bereal-us-unique-users-by-age-and-gender

**Earlier Digi files this chapter builds on**
- `/home/user/MMTEST/research/digi-deep-2026-11/01-icp-demand.md` · `/home/user/MMTEST/research/digi-deep-2026-11/README.md`
- `/home/user/MMTEST/research/digi-bible-2026-11/01-market-trend.md` · `06-monetization-packs.md` · `14-tiktok-organic.md`

---

## Fact-check (2026-11-16)

An adversarial re-check of the 10 numbers in this chapter that matter most for picking the audience. I used the iTunes Lookup API (US, SA, TR, GB), Apple's top-grossing RSS (US, TR, EG, SA), Pew, StatCounter and fresh searches.

| # | Claim | Re-check result | Action |
|---|---|---|---|
| 1 | Boothie ratings: Turkey 274, US 40 | Confirmed (TR 274, US 40, GB 9, SA 0). | None |
| 2 | Boothie #34 top-grossing Photo & Video in Turkey, not in the US top 100 | Today it is **#36** in Turkey and still not in the US top 100. Charts move daily. | **Changed** to "#34–36" |
| 3 | US top-grossing: Tezza #20, WayShot #30 | Today: Tezza #20, WayShot **#32**. | **Changed** to "#30–32" |
| 4 | Locket SA 304,389 vs US 593,254; Dazz SA 27.5K vs UK 11.9K; Partiful SA 19; POV SA 36 | All confirmed exactly (Dazz SA 27,499, UK 11,859). | None |
| 5 | Saudi top-grossing: Snapchat #1, Private Photo Vault #20. Egypt: FaceApp #5, Remini #8, Retake #16 | All confirmed on today's chart. | None |
| 6 | Pew 2026: Instagram women 56% vs men 45%, TikTok 43% vs 31%, Snapchat 30% vs 21%; 18–29s 79% / 65% / 56%; fieldwork Jan 30–Jun 18, 2026 | All confirmed on Pew's social media fact sheet. | None |
| 7 | Egypt mobile OS, Oct 2026: Android 82.13%, iOS 17.85% | Confirmed on StatCounter. | None |
| 8 | Egypt private-sector minimum wage EGP 7,000 | Confirmed (since Mar 1, 2025). The **public-sector** minimum rises to EGP 8,000 from Jul 2026. A private-sector rise is expected but not announced. | None; watch it |
| 9 | Harris Poll: 37% of Gen Z "very likely" to attend vs 74% of all workers | 37% is right, but **74% is the share who "look forward to" holiday parties**, a different question (Harris, fielded Nov 21–23, 2024; 1,238 employed adults). | **Changed** in correction row 4 |
| 10 | The Knot 2023 Bach Study: ~$1,300 per bachelorette attendee | Confirmed on The Knot's page ($1,300, +$600 since 2019; flyers ~$2,000, drivers ~$900). | None |

**Could not verify:** Saudi iOS share of 42% (StatCounter page not re-opened); NapoleonCat Instagram audience splits (ad-audience estimates, C); the review-occasion counts (40% wedding, under 1% Christmas/NYE) were not re-run here; the TikTok 49-post sample. Reddit and TikTok comments remain unavailable, as the chapter says.
