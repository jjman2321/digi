# Digi: ICP, demand and trends (deep study, slice 1, Nov 16, 2026)

**Labels:**
- **V** = checked directly today (Google autocomplete, Apple search hints, iTunes API, StatCounter, TrustMRR, a primary page I read).
- **C** = secondary claim (press, vendor or law-firm summary). I read the summary, not the primary data.
- **E** = my estimate, with the assumptions shown.

**Raw data:** `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/digi/icp/`
- `ac*/`: Google autocomplete JSON.
- `apple/`: App Store search-hint plists.
- `itunes/`, `lookup/`: iTunes Search and Lookup JSON.
- `scripts/`: the scripts that fetched and parsed them.

**Blocked, not bypassed:**
- TikTok Creative Center: login wall, no data.
- Google Trends: HTTP 429.
- Piper Sandler's own page: 403.
- Statista: 403.

---

## 0. The blunt version (decision-relevant)

1. **The ICP is women aged 18–30 in the US, on iPhone.** They post photo dumps and stories to Instagram and use TikTok for discovery. The best-paying sub-groups are:
   - **post-grad women aged 22–30**, who have their own card;
   - **bachelorette and bridal groups**, who already spend about $1,300 per attendee.

   College women aged 18–22 are the volume and viral engine, but they pay less per person.
2. **Target 18+ only.** Boothie's "16–40" is a liability you shouldn't copy. US state app-store age laws are now in force, the TAKE IT DOWN Act is in force, Australia bans under-16s from social media, and AI re-styling of minors carries real CSAM risk. Excluding teens costs some volume (87% of US teens own an iPhone, C), but it removes the worst tail risk. Full reasoning in §3.
3. **Correction to the existing files:** "nobody owns group or party photos" is wrong. Shared party cameras, group strips and long-distance photobooths all exist (§2.3).
   - Shared party cameras: POV (15.7K US ratings), Lense, Once, Party! by Hipstamatic, Afters, Sealed ("blind party camera").
   - Group strips: **stripz**, a "group photo strip that develops when everyone posts", launched Jun 2026.
   - Long-distance photobooth web tools: M.Booth, LensBooth, TogetherLens.
   - Lapse (118K ratings) is the friends' disposable camera.

   What is still open is **AI re-styling plus a group strip** (the 4-pose strip from one group photo, and "everyone looks good"). Sell the AI, not the shared roll.
4. **The photo-strip App Store niche is flooded.** At least 13 strip apps launched in 2026 have 0–35 ratings each. One is even called "Boothie: Photo Strip Maker", from a different developer. Strips alone don't grow. The AI look is the product.
5. **"ai photobooth" and "photo booth app" are the wrong SEO targets.**
   - Google suggestions for "ai photobooth" are B2B: rental, machine, software, price, Malaysia, Singapore, Jakarta.
   - "photo booth app" means Apple's own Mac/iPad Photo Booth.

   The right consumer words are: digicam filter, y2k filter website, photobooth poses, photo strip template, long distance photobooth, christmas photo filter trend.
6. **Timing correction.** The contest window (Nov 16–Dec 16) misses the two biggest moments in the pitch: "friends apart at Christmas" (Dec 19–Jan 2) and NYE (Dec 31).
   - Revenue inside the window has to come from: Friendsgiving (Nov 20–22), Blackout Wednesday (Nov 25), Thanksgiving (Nov 26), and holiday, ugly-sweater, office and sorority parties (Dec 1–16).
   - The Lensa precedent helps: AI photo apps took off around Thanksgiving 2022 and peaked in mid-December (C, Apptopia/TechCrunch).
7. **The biggest demand threat is free general AI, not other apps.** Autocomplete is full of "christmas ai trend **prompt**", "ai christmas photo prompt", "ai polaroid prompt" and "ai group photo prompt" (V). People go to Gemini or ChatGPT with copy-paste prompts. Digi only wins with:
   - one tap;
   - consistent faces across a group;
   - the strip format;
   - better taste than a prompt.
8. **Geos:**
   - US first.
   - **Canada (iOS 65%) and Australia (iOS 62%)** are better iOS markets than the US (52%) or the UK (50%) (V, StatCounter Oct 2026). They come almost free with English metadata.
   - Gulf, Brazil and the Philippines are Android-heavy or a cultural mismatch. Skip.
   - Korea's "4-cut" booth culture is big at home (₩319.6B in 2024) but small in the US (Life4Cuts has 9 US stores, V). Use it for vocabulary and content ("4-cut", poses), not as a market.

---

## 1. Who actually uses digicam / photobooth / photo-dump / aesthetic camera apps

### 1.1 Evidence table
| Signal | Finding | Label | Source |
|---|---|---|---|
| Boothie (closest comparable) | $54,351 MRR, 2,343 active subs (up from $53.0K/2,280 on Nov 13). Monthly: Jun $4.7K → Jul $27.3K → Aug $43.7K → Sep $43.4K → **Oct $56.4K** → Nov (to the 15th) $29.0K. Daily Oct 18–Nov 15: $1.3–2.7K | V | https://trustmrr.com/startup/boothie.md |
| Boothie audience | "Women 16–40 posting on TikTok and Instagram" (founder's words). No verified age, gender or country split | C | same |
| Boothie ratings by country | US 40 · UK 9 · CA 7 · AU 2. About 69% US among the English four, so the money is US-led. Ratings massively undercount payers (40 ratings vs 2,343 subs) | V | iTunes Lookup id6775603987 |
| English-geo split of comparables | WayShot US 5,463 / UK 433 / CA 461 / AU 186 (about 84% US). Esti 20,146 / 1,893 / 2,142 / 1,107 (80% US). POV 15,683 / 3,069 / 2,486 / 1,344 (70% US) | V | iTunes Lookup |
| Lapse (friends' disposable camera) | 79% female, 71% under 24 (team figure, 2021) | C | https://thred.com/tech/lapse-emerges-as-the-latest-gen-z-photo-sharing-platform/ |
| Instagram, US adults | 50% overall; **80% of 18–29**; women 55% vs men 44% (n=5,022, Feb–Jun 2025) | V (read Pew page) | https://www.pewresearch.org/internet/2025/11/20/americans-social-media-use-2025/ |
| US teens (13–17) | Instagram used by 75% of 15–17s vs 44% of 13–14s. Snapchat girls 61% vs boys 49%. "Almost constantly": TikTok 21%, Instagram 12%, Snapchat 12% (n=1,458, Sep 25–Oct 9, 2025) | V | https://www.pewresearch.org/internet/2025/12/09/teens-social-media-and-ai-chatbots-2025/ |
| US teens, iPhone | **87%** own an iPhone. Favourite app: TikTok 46%, Instagram 31%, Snapchat 14% (Piper Sandler Fall 2025) | C | https://www.mactech.com/2025/10/09/survey-eighty-seven-percent-of-teens-report-they-own-an-iphone |
| US teens, spending | Fall 2026 (now annual): about 9,000 teens aged 13–19; spending +6% YoY, higher-income +11%; girls' beauty a record 23% of wallet | C | https://retaildive.com/news/teen-spending-grows-trade-athletic-apparel-fashion-piper-sandler/833565 |
| Digicam revival is real, not just TikTok | Canon: PowerShot sales up nearly 7× from 2022 to 2025. Camp Snap sales more than doubled in a year; buyers are "Gen Z, millennial", "way beyond kids at summer camp". Users: a 16-year-old, a 24-year-old ("blur and grain… very flattering"), a 34-year-old wedding photographer | C (company claims via NPR, Jul 18, 2026) | https://www.gpb.org/news/2026/07/18/the-2000s-called-they-want-their-digital-camera-back |
| Purchase demand (autocomplete) | "digital camera for **teens**", "best digital camera for **instagram pictures**", "best digital camera for **vintage look**", "digital camera **pink**", "digital camera that looks like film", "canon g7x **dupe**", "canon g7x **target**", "kodak **charmera**", "kodak pixpro fz55", "fujifilm x half" | V | Google autocomplete, US |
| TikTok hashtags | #digitalcamera: about 124–130M views (2022); about 1.1B (Finnish report, undated). #vintagedigitalcamera: 200M+ (Canon Europe). #photobooth: 1M+ posts (undated). **No current #digicam or #photodump figure found; Creative Center needs a login** | C, stale | https://petapixel.com/2022/10/26/gen-z-is-bringing-back-digital-cameras-of-the-early-2000s · https://canon-europe.com/view/vintage-digital-camera-tiktok-trend · https://corq.studio/insights/rise-of-the-liftie-how-casual-elevator-selfies-have-led-to-the-re-imagining-of-photo-booth-activations/ |
| Photo dumps | Instagram's 2024 Trend Talk (US, UK, BR, IN, KR Gen Z, with WGSN): adding a crush to your photo dump is a top "flirting" behaviour. No % given | C | https://about.instagram.com/blog/announcements/instagram-trend-talk/ |
| Korean booths, age | 20s–30s made **over 90%** of photo-studio payments in Seoul's main districts (Finda/Openup, 2023) | C | https://www.asiae.co.kr/en/article/2026021709433718191 |

### 1.2 What the data says (blunt)
- **Gender:** overwhelmingly women.
  - Every signal points one way: Boothie's stated audience, Lapse's 79% female, Pew's female skew on Instagram, Snapchat and TikTok, and the autocomplete language ("girls night out", "galentines", "clean girl").
  - Men show up as boyfriends in couple strips, not as buyers.
- **Age:**
  - Core 18–30.
  - Teens are heavy users of the category: digicams "for teens", purikura and Korean booth culture, Pew's TikTok and Snapchat numbers.
  - Lapse's users were 71% under 24.
  - Boothie deliberately includes 16–17.
- **Country:**
  - The US is the money: 70–84% of English-geo ratings for every comparable (V).
  - **CA and AU over-index on iPhone** (65% and 62%) vs the US (52%) and UK (50%) (V, StatCounter Oct 2026, web-traffic based).
  - Young US users are much more iPhone-heavy than the national average (87% of teens, C). I found no Pew iPhone split for ages 18–29. My estimate: **60–75% iPhone among US women aged 18–29** (E).
- **Income signals:**
  - Teens spend about $2,350 a year, and girls' beauty is a record 23% of wallet (C), but teens mostly pay through a parent's Apple account.
  - College students are price-sensitive but group-pooling.
  - Post-grads and bridal groups have real money: about $1,300 per bachelorette attendee (C).
- **Behaviours:**
  - Monthly or event "photo dumps" on Instagram (carousels).
  - Story posts and Close Friends.
  - TikTok carousels for discovery.
  - Buying physical digicams (G7X, Kodak PixPro, Coolpix) or faking the look.
  - "How to make photos look like **digicam / 2000s / disposable / photobooth**" (V autocomplete).
  - Pose culture: "photobooth poses **friends / duo / trio / couple / solo**" (V).
- **What they want:** looking good but "real" (grain, flash, blur = flattering, C NPR), a nostalgic, low-effort aesthetic, and memories with *the group*, not a glam solo portrait.

---

## 2. Personas (ranked by value to Digi)

### P1. "The group-chat photographer": US college women, 18–22 (volume + virality)
- **Who:**
  - About 16.2M US undergrads; women are about 54–58% (C, NSC fall 2025, sources conflict).
  - Sororities, dorm friend groups, formals and date parties.
  - Friendsgiving: about 25% of 18–24s (C, CivicScience).
- **What they want:**
  - Everyone in the group looking good in one shot.
  - A strip or dump for Instagram the morning after.
  - Themed looks for formals, Friendsgiving, ugly-sweater parties, SantaCon, darties.
- **When:**
  - Thu–Sat nights; formal season (Nov–Dec, Mar–Apr); Halloween weekend.
  - Back to school (late Aug–Sep); spring break (Mar).
  - Leaves campus about Dec 12–20.
- **Where they hang out:** TikTok (discovery), Instagram (posting, photo dumps, Close Friends), Pinterest ("night out pics pinterest", V), Snapchat, iMessage group chats.
- **Willingness to pay:**
  - Low to medium per person: a weekly plan feels expensive, a one-off $3–6 pack doesn't.
  - "Host pays" works: one person buys for the group.
  - WTP: **$3–6 per night**, or $4.99–6.99/week during formal season (E).
- **What makes them share:**
  - A strip where *everyone* is tagged and looks good.
  - A date stamp with the event name ("Sigma Kappa Winter Formal 12.05.26").
  - The morning-after "develop" reveal, and a "who looked best" moment.
- **Risk:** some are 17 (freshmen) and alcohol is everywhere in the content. Keep the looks about party, not alcohol, in imagery (age-rating questionnaire).

### P2. "Post-grad going-out girl": women 22–30, working (best subscriber)
- **Who:**
  - Own card, city nightlife, birthdays, Galentine's.
  - Office holiday parties: 82% of full-time workers planned to attend in 2025 (C, ezCater).
  - NYE.
- **What they want:**
  - The digicam/paparazzi night-out look without carrying a G7X.
  - Christmas party and NYE glitter looks.
  - Monthly photo dumps.
- **When:** every weekend; Dec 1–Jan 1 peak; Feb 13 (Galentine's); birthdays all year; summer travel.
- **Where:** Instagram (the main posting surface), TikTok, Pinterest.
- **Willingness to pay:** highest for a subscription. Boothie's $23 per sub per month (weekly plans) is probably mostly this persona (E). $39.99/year is an easy buy if the looks are good.
- **What makes them share:** "real-looking" flash photos that are flattering; the "paparazzi" look for birthdays; strips for the IG story.

### P3. "Maid of honour / bach planner": bridal and bachelorette groups, 24–34 (highest one-off WTP)
- **Who:**
  - About 2.01M US weddings in 2025 (C, The Wedding Report; The Knot also says about 2M).
  - About 10 people per bachelorette, about $1,300 spend per attendee (C, The Knot 2023).
  - UK: "hen do photo props / challenge / bingo / scavenger hunt" (V autocomplete); "bachelorette photo booth / photo ideas / scavenger hunt / challenge" (V).
- **What they want:**
  - A themed strip with the bride's name and date ("Last Disco", "Nashville Bach").
  - Matching looks for the whole group.
  - A shared roll for the weekend.
- **When:** Mar–Oct peak (wedding season May–Oct, bachelorettes 1–3 months before); engagement season Dec–Feb (proposals at Christmas, then planning).
- **Where:** Pinterest (planning), Instagram, TikTok, Etsy (they buy bach merch and templates), group chats.
- **Willingness to pay:** **high.** A $9.99–19.99 one-off "Bach Pass" for the weekend is trivial against $1,300 (E).
- **What makes them share:** the bride's custom strip; everyone posts the same frame. Each bach reaches about 10 people, and each wedding reaches 117 guests (C, The Knot average).
- **Competition:** POV (15.7K ratings), Lense, Once, "disposable camera wedding app" (V). They own the shared-roll part of weddings, so Digi should own the AI look part.
- **Contest window relevance:** low. This is a Mar–Oct engine.

### P4. "Friends apart / long-distance": friends after college, couples (viral loop, low WTP)
- **Who:** best-friend groups split across cities; LDR couples.
- **Evidence:** autocomplete "long distance photobooth **website / online / free / app / couple / friendship**", "photobooth online **long distance / with friends**", "long distance friendship apps" (V).
- **What they want:** one strip of all of us, even though we're apart. Christmas and birthdays.
- **When:** winter break (Dec 19–Jan 2: **after** the contest ends); Valentine's; birthdays; after graduation (May–Jun).
- **Where:** iMessage and WhatsApp groups, Instagram DMs, TikTok.
- **Willingness to pay:** low per person but strong "host pays" (one friend buys for the group). Every invite is a new user, so this is the acquisition engine.
- **Competition:** M.Booth, LensBooth, TogetherLens (web) and stripz (app) (C/V). None is clearly AI re-styling the merged photos into one consistent look. Digi's AI "same lighting, same booth" merge is the real edge if the faces hold.

### P5 (excluded). High-school teens 13–17: prom, homecoming, Schoolies
- **Evidence of demand:** "prom photo booth", "homecoming photo ideas with friends", "christmas party ideas for teens", "new year's eve party ideas for teens", "digital camera for teens" (V). 87% iPhone (C). Purikura's core users are Japanese high-school girls (C).
- **Recommendation: do not target. Rate the app and gate it 18+.** See §3.

### P6 (excluded by the safety rule). Family Christmas cards
- **Demand is huge:** "christmas card photo ideas / outfits / photographer", "matching christmas pajamas family" (V).
- **But** it requires AI edits of children, which the plan already bans. Say this out loud: Digi gives up the biggest Christmas photo segment on purpose. Adults-only family shots ("matching christmas pajamas for couples / adults", V) are still allowed.

---

## 3. Minors: legal and safety. Recommendation: 18+

| Issue | Status (Nov 2026) | Label | Source |
|---|---|---|---|
| Apple age ratings | New 13+/16+/18+ tiers. Developers had to answer the new questionnaire by Jan 31, 2026 | C | https://www.iphoneincanada.ca/2025/07/25/updated-app-store-age-ratings/ |
| Texas App Store Accountability Act (SB 2420) | Enforced since **Jun 4, 2026**, after the injunction was lifted. Verified parental consent is needed before under-18s download or buy in-app. Developers use Apple's Declared Age Range API; parents can revoke consent | C | https://www.biometricupdate.com/202606/apple-begins-age-verification-for-texas-app-store-users · https://www.macrumors.com/2025/11/04/ios-26-2-texas-age-verification-law/ |
| Utah / Louisiana equivalents | In effect since May 7 and Jul 1, 2026 | C | https://www.bakerlaw.com/insights/an-app-developers-guide-to-app-store-age-assurance-laws/ |
| TAKE IT DOWN Act | Platform duties live since **May 19, 2026**: remove reported non-consensual intimate images, **including AI forgeries**, within 48 h; FTC fines about $53K per violation | C | https://www.wilmerhale.com/en/insights/client-alerts/20260615-the-take-it-down-act-goes-live |
| AI CSAM | NCMEC: about 1.5M GenAI-flagged reports in 2025 (1.1M from one company, mostly not actionable). More than 158K AI-generated items, Jan 2023–Dec 2025 | C | https://www.missingkids.org/blog/2026/the-work-never-stops-first-look-at-ncmecs-2025-data · https://cyberlaw.stanford.edu/letter-to-ncmec-about-ai-csam-report-statistics |
| Apple 5.1.2(i) | Since Nov 2025: explicit consent before sending personal data (photos) to third-party AI | C | https://9to5mac.com/2025/11/13/apple-tightens-app-review-guidelines-to-crack-down-on-copycat-apps/ |
| Australia | Under-16 social-media ban since Dec 10, 2025, on a "dynamic list". A public feed or profile layer (the digi.pink/@name idea) could drift into scope | C | https://www.biometricupdate.com/202510/big-social-media-platforms-all-covered-by-australian-social-ban-esafety-commissioner |

**Why 18+ (blunt):**
1. Glam, party, "paparazzi" and NYE-glitter restyles of a 15-year-old are exactly the edge cases where image models drift into sexualised output. Your brand, your Apple account and your LLC carry that risk. One incident ends the app and an exit.
2. With minors, the parental-consent laws in TX, UT and LA add friction to every purchase, and refunds and revocations land on you. Teens pay through parents anyway.
3. The best payers (P2, P3) are adults. Teens are mostly free users who share.
4. Buyers doing due diligence on an exit will ask about it.

**How (E, practical):**
- Set the App Store rating to **18+**. Party themes and frequent alcohol imagery would likely land at 16+ anyway.
- Call Declared Age Range; if under 18, block the AI features.
- Use 18+ language in onboarding and the consent screen.
- Run a face age-estimate on uploads and **refuse AI processing if anyone looks under 18**. It will over-block some 19-year-olds; accept that.
- Keep the 24 h upload deletion.
- Add a TAKE IT DOWN-style report-and-remove flow on digi.pink share pages, with a 48 h SLA.
- Skip any public profile or feed, which also keeps you out of Australia's social-media scope.

**Cost of excluding teens (E):** maybe 20–35% fewer installs. A much smaller share of revenue (≤10–15%), because teens convert worse and pay through parents.

---

## 4. Demand signals

### 4.1 Google autocomplete (US unless noted, V, Nov 16, 2026)
| Seed | What Google suggests | Read |
|---|---|---|
| digicam filter | app · **online free** · iphone · **website** · free · editor · video · camera · capcut (UK and AU: same, "website" ranks higher) | Strong. Free-web intent confirms the SEO plan; CapCut competes |
| digicam trend | reddit · 2025 · **2026** · tiktok; "digital camera trend among young people", "old digital camera trend" | The trend is still being searched in 2026 |
| y2k filter / y2k camera | **website** · app · online free · camera · instagram / filter website · camera website · app · effect | Web intent again |
| how to make photos look like | film · polaroids · **digicam** · film on iphone · **2000s** · **disposable camera** · **photobooth** | Content pages confirmed |
| photo strip maker | online · **app** · horizontal · **canva** · "photo booth maker online / free" | Canva competes on web |
| photobooth strip | frame · **template** · album · size · printer · maker · png | Template intent (free web tool) |
| photobooth poses | **couple · friends · solo · for 2 · ideas · duo · trio** · for men | Strong. A "pose ideas" content and in-app feature |
| photo booth pictures | template · near me · called · couples · online · "photo booth pictures **obsession**" | Culture signal |
| photo booth app / photobooth app | **for ipad · for mac · apple** · for iphone · for events · android | **Navigational to Apple's Photo Booth. Don't target** |
| ai photobooth / ai photo booth | **rental · machine · software · for sale · near me · price · Malaysia · Singapore · Jakarta · Orlando** | **B2B event-rental intent. Wrong audience** |
| ai group photo | **generator · prompt** · editor · maker · free · mixer | Consumer intent, but DIY prompts |
| ai christmas photo | trend · generator · **prompt** · free · editor · background · photoshoot | People go to free general AI |
| christmas ai trend | **prompt** · facebook · generator · photo · free · "80s christmas ai trend" · "christmas lollipop ai trend" · "christmas tree ai trend" | Trend-hopping, prompt-driven. Ride named trends fast |
| christmas photo filter | **trend** · free · **app** · online free · **trend instagram** · facebook · iphone | Good consumer intent |
| christmas photo booth | ideas · props · backdrop · rental · design · **frame** · hire (UK) · **template** | Free web template tool for Dec |
| ai polaroid / ai yearbook | generator · **trend** · prompt / trend · app · meme | Named-trend demand (look ideas) |
| ai couple photo | maker · free · prompt · generator · app · realistic | Couples are a real segment |
| photo dump | **captions** · meaning · instagram captions · caption ideas · **app** · template | Captions page confirmed |
| photo dump app | free · **for friends** · **for events** · for instagram · **for wedding** · best | Shared-roll intent exists (competitors serve it) |
| disposable camera app | **for wedding** · free · **for events** · **for party** · reviews | Event mode is real but contested (POV etc.) |
| long distance photobooth | **website · online · free · app** · ideas · relationship · **couple · friendship** | Validates the "group strip from far away" idea |
| bachelorette photo | album · **scavenger hunt** · book · ideas · photoshoot · captions · **photo booth** · challenge | P3 confirmed |
| hen do photo (UK) | album · props · book · **challenge** · frame · scavenger hunt · bingo | UK P3 |
| friendsgiving photo | backdrop · **photo booth** · props · ideas · **photo booth template** · frame | In the contest window |
| ugly sweater photo / party | photoshoot · **photo booth** · backdrop / ideas · invitation · **2026** | In the contest window |
| new years eve photo / nye outfit | photo booth props · ideas · backdrop · photoshoot / women · ideas · **inspo · 2026** | NYE look, after the window |
| korean photo booth | near me · **nyc · los angeles · dallas · seattle · chicago · atlanta** (AU: Melbourne, Brisbane, Sydney, Perth, Canberra, Gold Coast; UK: London plus many Indian cities) | Real but city-cluster demand |
| life4cuts / photoism | photo booth · near me · american dream mall · nyc · valley fair · the source · seattle / near me · locations usa · carrollton · nyc · LA · chicago · northridge · SF | US footprint is real but small |
| purikura | photo booth · meaning · **online · app · filter** | Small web-filter niche |
| night out pics | with friends · **pinterest** · going out pics | Pinterest matters |
| schoolies photo (AU) | photo ID · gallery · 2025 · album | Minors (17–18). Avoid |

### 4.2 Apple App Store search hints (US storefront, V)
| Term | Hints | Read |
|---|---|---|
| digicam | digicamfx · digicam filter · **molly: digicam photo filters · halfpress: digicam camera · jellybooth - digicam & booth · digicam wayshot** | Crowded. "Digicam + booth" is already claimed (jellybooth) |
| photo strip(s) | **thisbooth · 4cut - korean photo strips · afterglow · boothkin · boothly · photobooth: retro photo strips · pomori · stripz: group photo strips** · veduta | Strip niche flooded |
| party camera | party! camera · **afters - shared party camera · everlens · memrly: private party camera · sealed: blind party camera** · then: event & party camera | Shared-roll ("Digi Roll") niche crowded |
| photo dump | toneset · photo dump ai · **photo dump: shared camera** · capart · dumplin · dumpy | Crowded |
| group photo | blinkfree · koukou: hourly group photos · dropshot · **group photo ai nano pro** · allsmiles · bettertake | AI group-photo fixers exist |
| ai christmas / christmas ai | **ai christmas photo booth** · christmas ai photo maker · flurry · christmas ai avatar maker · christmas ai studio | Seasonal clones appear every year; most have 0–2 ratings (iTunes), except JibJab (262K ratings) and FestivAI (118) |
| dispo / disposable | disposable camera events · disposable camera wedding · **pov – disposable camera events** · rollito | Event camera category is established |

### 4.3 App Store competitors relevant to the ICP (iTunes API, US ratings, V)
| App | US ratings | Released | Age | Note |
|---|---|---|---|---|
| Dazz Cam | 118,135 | 2018 | 4+ | Old-guard vintage camera |
| Lapse | 118,321 | 2022 | 12+ | Friends' disposable camera |
| Tezza | 47,852 | 2018 | 4+ | Aesthetic presets |
| 1998 Cam | 40,451 | 2019 | 4+ | |
| BeautyCam "Digicam" | 22,757 | 2013 | 12+ | Meitu now markets "Digicam" |
| Esti | 20,146 | 2023 | 12+ | Prequel Inc. |
| POV – Disposable Camera Events | 15,683 | 2022 | 12+ | Events and weddings |
| ism / Huji / Daze / 0.3MP | 10–12K each | | | |
| WayShot | 5,463 | Aug 2025 | 12+ | "#1 viral digicam app on TikTok" |
| Kapi Cam – Y2K & CCD | 1,660 | Mar 2025 | 4+ | |
| Lense (event camera) | 1,543 | 2023 | 4+ | |
| Once (event camera) | 726 | Nov 2025 | 4+ | |
| Boothie (AI) | 40 | Jun 2026 | 12+ | $54K MRR. **Ratings are not a revenue proxy** |
| ThisBooth / stripz / Sera | 35 / 34 / 84 | 2026 | 4+ / 12+ | New 2026 strip apps |
| About 10 more 2026 strip apps | 0–6 | 2026 | | Boothly (×2), Boothkin, LemonBooth, Veduta, BoothBop, FRAMED, fopic, Kkumi, Cabine, "Boothie: Photo Strip Maker" (different developer) |

**Note:** Boothie is rated 12+ while marketing to 16–40. Digi should be stricter (§3).

---

## 5. Seasonality calendar (next 12 months, US/UK/AU, ranked for Digi)

Score = demand × fit with Digi's looks × payer quality × reachable now (/10, E).

| When (2026–27) | Moment | Geo | Persona | Look to ship | Score |
|---|---|---|---|---|---|
| **Dec 1–24** | Christmas parties (office, friends, sorority formals, ugly sweater, SantaCon on Saturdays such as Dec 12/19) | US/UK/AU | P1, P2 | Christmas party flash, ugly-sweater strip, "Christmas booth" frame | **9.5** (in the window) |
| **Dec 26–Jan 1** | NYE + year-end photo dump ("2026 dump") | All | P1, P2, P4 | NYE glitter, paparazzi night, year-recap strip | **9** (after the window; ship by Dec 10 so content runs ahead) |
| **Dec 19–Jan 2** | Friends home for the holidays / apart at Christmas | US/UK | P4 | Group strip from far away | **8.5** (after the window; the main viral loop) |
| **Nov 20–29** | Friendsgiving (weekend of Nov 20–22), Blackout Wednesday (Nov 25), Thanksgiving (Nov 26) | US | P1, P2 | Friendsgiving strip, "home for the holidays" digicam | **8** (in the window, but launch day is about Nov 20) |
| Mar–Oct (peak May–Sep) | Bachelorettes / hen dos / weddings | US/UK/AU | P3 | Bach strip with name and date, "Last Disco", disco/cowgirl looks, event pass | **8.5** (best one-off WTP) |
| Feb 13–14 | Galentine's / Valentine's | US/UK/AU | P2, P4 (couples) | Galentine's strip, couple booth, long-distance couple strip | **8** |
| Oct 24–31 | Halloween (costume group shots) | US/UK/CA | P1, P2 | Costume group strip, "Halloween flash" | **7.5** |
| May–Jun | College graduation | US/UK | P1, P4 | Grad strip, "last night out" | **7** |
| Mar (mid) | Spring break ("spring break photo dump captions", V) | US | P1 | Beach flash, vacation dump | **7** |
| Jun–Aug | Summer, festivals, travel dumps | All | P2 | Summer flash, festival strip | **6.5** |
| Late Aug–Sep | Back to school / freshers (UK) | US/UK | P1 | Dorm-friends strip (careful: freshmen can be 17) | **6** |
| Sep–Oct | Homecoming / formals | US | P1 (college ok, high-school no) | Formal strip | **5** (high-school part excluded) |
| Apr–May | Prom | US | Minors | — | **2** (excluded) |
| Late Nov–early Dec | Schoolies | AU | Mostly 17–18 | — | **2** (excluded) |
| Dec (AU) | Christmas in summer | AU | P1, P2 | Beach-Christmas variant of the looks | +0.5 bonus to Dec |
| Feb 8–Mar 9, 2027 | Ramadan; Eid al-Fitr about Mar 9–10; Eid al-Adha about May 16–17 (projected) | Gulf | — | A tasteful Eid strip at most | **3** (see §7) |

**The Lensa pattern (C):** a cohort of AI photo apps started taking off around Thanksgiving 2022. They peaked in mid-December at about 4.3M daily downloads and $1.8M a day in IAP. By Feb 12, 2023 they were down to about 0.95M downloads and $0.5M a day. Lensa made over 50% of its 2022 revenue in December.

What this means for Digi:
- December is the year's best month for AI photo spending, and the contest window catches the build-up to it.
- It also means a cliff in January. That is why the plan needs Valentine's (Feb) and bachelorette season (Mar+) to show buyers steady month-on-month revenue.

Sources:
- https://techcrunch.com/2023/02/13/the-ai-photo-app-trend-has-already-fizzled-new-data-shows/
- https://www.businessofapps.com/data/lensa-ai-statistics

---

## 6. Market size (all E unless noted)

**Anchors:**
- US app consumer spending was about $55.5B in 2025, +18% YoY (C, Appfigures via MediaPost).
- GenAI app IAP added about $3.5B worldwide in 2025 (C, Sensor Tower State of Mobile 2026, secondary).
- Lensa's peak month was about $20M+ worldwide (C).
- Boothie runs at about $650K ARR (V).
- WayShot's third-party estimates range from <$10K to about $100K a month (C, unreliable).

**Bottom-up (US + UK + CA + AU), with assumptions:**
1. Women aged 18–34: US about 37M, UK about 7M, CA about 4.3M, AU about 3.2M, so about **51M** (E, census-order magnitudes).
2. On iPhone: US 60–70% (young skew), UK 50–55%, CA 65%, AU 62%. That gives about **31–34M**.
3. Use any aesthetic/digicam/filter camera app in a year: 20–30%, about **7–10M**.
4. Pay for any AI photo look in a year: 4–8% of the iPhone base, about **1.3–2.7M payers**.
5. Average spend per payer per year: $15–30.
6. **Paid AI photo-look spend in these 4 geos (this demographic): about $20–80M a year.** This is consistent with one breakout app (Lensa) doing about $20M in a peak month globally.

**Share that is "party / group / photobooth":**
- Assume 20–35% of AI look spend is tied to occasions with other people (nights out, holidays, bachelorettes, couples).
- That gives a **SAM of about $5–25M a year**, with December worth about 2–3× an average month.

**SOM for Digi (E):**
| Period | Estimate | Basis |
|---|---|---|
| Contest window (Nov 16–Dec 16) | **$1–8K gross** (median low single-digit thousands) | Boothie's week 1 was $4.7K with a proven content engine; Digi launches about Nov 20 and Apple's cut is taken from gross |
| Year 1 | $100–600K | 1–3% of SAM, if the TikTok engine works |
| Boothie-level ($55K MRR, about $650K ARR) | Possible | It would mean about 3–10% of the SAM. Top-decile outcome, not the base case |

**The existing files' "$3–8K in the contest month" is plausible but optimistic at the top end, given:**
- launch about Nov 20;
- Apple review time;
- no ads;
- persona accounts that need 1–2 weeks to warm up.

---

## 7. Other geos

| Geo | iOS share (StatCounter, Oct 2026, V) | Fit | Verdict |
|---|---|---|---|
| **Canada** | 64.7% | Same holidays (Thanksgiving is in Oct), same culture | **Yes**: en-CA comes free. Ship US looks. Score 8 |
| **Australia** | 62.1% | Christmas is summer (beach looks); Schoolies (minors); hens; Korean booths in all big cities (V) | **Yes**: add an "Aussie summer Christmas" variant. Score 7.5 |
| **UK** | 50.1% | Christmas jumper day, works dos, hen dos, freshers; Korean booths in London | **Yes**: en-GB keywords ("hen do", "christmas jumper", "photo booth hire" ≠ app). Score 7 |
| Japan | 53.8% | Purikura is a teen-girl culture (core users high-school girls, C); about 10K machines in 2020, down from a 50K peak (C); Furyu dominant. Needs Japanese and local taste | No for the contest. Maybe a localisation test later. Score 4 |
| Korea | (page needs JS) | Home of "life four cuts": tax-base sales of **₩134.4B (2020) → ₩319.6B (2024)**, 2.4×; **closures 611 in 2024, about 3.5× 2020**, so saturated; 20s–30s over 90% of payers (C, Asia Business Daily from NTS data). Local apps (SNOW, Photoism's own) dominate | No market for us. **Borrow the vocabulary** ("4-cut", frames, pose memes). Score 3 |
| Korean booths in the US | — | Life4Cuts lists **9 US locations** (Rowland Heights, Arcadia, San Jose, Santa Clara CA; Lincoln NE; Vernon Hills IL; Duluth GA; East Rutherford NJ; East Village NYC) (V). Photoism is in LA Koreatown, NYC, Chicago, SF, Northridge, Carrollton (V autocomplete, count unknown). H Mart booths in NY (C) | **It travels to K-culture and Asian-American hubs and big malls, not mass-market yet.** Good for content ("4-cut at home"), not a channel |
| Gulf (KSA/UAE) | KSA 42.0%, UAE 19.3% (web-traffic based; UAE looks undercounted) | Women's weddings often ban phones and photos for privacy (C, Arab News); "party / NYE glitter / bach" don't fit Ramadan; Eid has potential | **No.** At most one tasteful Eid strip for content. The "Eid" drop in the existing plan doesn't fit a US party app. Score 3 |
| Brazil | 26.2% | Huge photo culture, but Android and price-sensitive | No for iOS paid. Score 2.5 |
| Philippines | 13.7% | Massive "self-photo studio" mall culture (SM Supermalls lists 5 studios, C), Life Four Cuts at SM Mall of Asia (C); Android-dominant | No. Score 2 |
| India / SE Asia | — | The Nano Banana trends (saree, AI polaroid) exploded there; Google said the retro trend started in Thailand and India led usage (C, TechCrunch) | **Watch for look ideas, don't sell there**: low ARPU, free Gemini. Score 2 |

---

## 8. Contradictions and corrections to the existing Digi files

1. **"Nobody owns group/party photos: no group photo strips; no shared party roll; no 'friends who weren't there' strip"** (HOW-COMPETITORS §1). **Wrong.**
   - Group strip: stripz (daily group strip that "develops" when everyone posts).
   - Shared party roll: POV, Lense, Once, Party! (Hipstamatic), Afters, Sealed, Memrly, Everlens, Then, Photo Dump: Shared Camera, Lapse.
   - Long-distance strip: M.Booth, LensBooth, TogetherLens.
   - "Digi Roll develops at 9 a.m." is a known mechanic (Dispo, POV, Sealed).
   - **Fix:** the defensible part is the *AI look applied consistently to a group*: the 4-pose strip from one group photo, a merged far-away strip in one lighting, themed occasion looks. Lead with that and treat Digi Roll as a v2 feature, not the hero.
2. **The strip as the differentiator** (PHOTOBOOTH-PLAN §2). The App Store has 13+ new strip apps in 2026 with almost no ratings. Strips are table stakes. The "4-pose AI strip from ONE photo" is the differentiator; keep the copy precise about that.
3. **SEO targets "ai photobooth" / "photo booth app"** (implied in the plan's App Store terms "photobooth"). Google intent for these is B2B rental or Apple's Mac app.
   - **Fix:** go after "digicam filter app", "photobooth poses", "photo strip template", "long distance photobooth", "christmas photo filter", "y2k filter".
   - "photobooth" is still fine in the App Store title, because App Store intent differs from Google intent.
4. **Audience age.**
   - The plan copies Boothie's 16–40 framing implicitly, and "age 16+" appears for the link-in-bio page.
   - **Fix:** 18+ everywhere. App Store rating 18+, Declared Age Range check, an under-18 face check before AI.
5. **Seasonal drop "Eid"** (HOW-COMPETITORS §2). It doesn't fit the persona and the Gulf is Android-heavy and photo-private. Replace it with **Galentine's (Feb 13)** and **bachelorette season (Mar+)**.
6. **The contest timing story.** "Christmas apart" and NYE fall after Dec 16. Inside the window the money is Friendsgiving, Thanksgiving and early-December parties. Ship those looks first and pre-load NYE content by about Dec 10.
7. **Boothie numbers updated:** $54.4K MRR, 2,343 subs (Nov 16). October was $56.4K, the best month, so no fade yet. 40 US ratings. The developer is listed as "KEREMCAN SEKER".
8. **The free-AI threat is understated.** Autocomplete shows people actively looking for *prompts* (Christmas, polaroid, group, couple). Digi's paywall has to beat "free Gemini plus a prompt". That argues for:
   - consistent group faces;
   - the strip layout;
   - date-stamp and branding polish;
   - zero prompting;
   - speed.
9. **The SEO plan is confirmed on "free website" intent**, with one addition: Canva ("photo strip maker canva", "photobooth filter canva") and CapCut ("digicam filter capcut") are the real web competitors.

---

## 9. What to do with this (E)
1. **Positioning copy:** "The photobooth for your group chat. 18+."
   - Hero use: night out → strip the next morning.
   - Hero looks for the window: Christmas party flash, ugly-sweater strip, Friendsgiving strip, paparazzi night.
2. **Persona accounts:** 3 accounts, one per persona.
   - P1 college ("POV: the group chat after formal").
   - P2 post-grad ("my digicam era without the digicam").
   - P3 bach, starting in Feb, when engagement season kicks off planning.
3. **Pricing:** keep weekly/yearly for P2. Add a **$4.99 "Party Pack"** (one night, the host shares the strip) for P1, and plan a **$14.99 "Bach Pass"** (weekend, up to 12 people) for P3 in Mar.
4. **Free web tools on digi.pink:**
   - digicam filter;
   - strip template;
   - **long-distance photobooth** (the web join flow for the far-away strip; it doubles as SEO for a V-checked query);
   - photobooth poses (duo/trio/friends);
   - photo-dump captions.
5. **Geos:** submit en-US plus en-GB, en-CA and en-AU metadata on day 1 (cheap). No other languages before January.
6. **Measure:** the share of buyers by country and age range (Declared Age Range) in week 1, to test the US-led and adult-payer assumptions.

---

## Sources (all accessed Nov 16, 2026)

**Primary data I pulled myself (V):**
- Google autocomplete via https://suggestqueries.google.com/complete/search (client=firefox, hl=en, gl=us/gb/au); raw files in `icp/ac*/`.
- Apple search hints via https://search.itunes.apple.com/WebObjects/MZSearchHints.woa/wa/hints (US storefront); `icp/apple/`.
- iTunes Search and Lookup API: https://itunes.apple.com/search, https://itunes.apple.com/lookup; `icp/itunes/`, `icp/lookup/`.
- StatCounter mobile OS share, Oct 2026: https://gs.statcounter.com/os-market-share/mobile/ (united-states-of-america, united-kingdom, australia, canada, japan, saudi-arabia, united-arab-emirates, brazil, philippines).
- Boothie on TrustMRR: https://trustmrr.com/startup/boothie.md
- Pew: https://www.pewresearch.org/internet/2025/11/20/americans-social-media-use-2025/ · https://www.pewresearch.org/internet/2025/12/09/teens-social-media-and-ai-chatbots-2025/
- Life4Cuts US locations: https://life4cutsusa.com/locations-1

**Secondary (C):**
- **Teen spending and iPhone:** Piper Sandler via MacTech (https://www.mactech.com/2025/10/09/survey-eighty-seven-percent-of-teens-report-they-own-an-iphone) · Retail Dive (https://retaildive.com/news/teen-spending-grows-trade-athletic-apparel-fashion-piper-sandler/833565)
- **Digicam trend:** NPR via GPB (https://www.gpb.org/news/2026/07/18/the-2000s-called-they-want-their-digital-camera-back) · PetaPixel (https://petapixel.com/2022/10/26/gen-z-is-bringing-back-digital-cameras-of-the-early-2000s) · Canon Europe (https://canon-europe.com/view/vintage-digital-camera-tiktok-trend)
- **Lensa and AI photo spike:** https://techcrunch.com/2023/02/13/the-ai-photo-app-trend-has-already-fizzled-new-data-shows/ · https://www.businessofapps.com/data/lensa-ai-statistics · https://sensortower.com/blog/rapid-growth-and-competitive-dynamics-the-state-of-ai-photo-and-video-apps
- **App spending:** https://sensortower.com/blog/state-of-mobile-2026 · https://www.mediapost.com/publications/article/412069/
- **Nano Banana trends:** https://techcrunch.com/2025/09/17/india-leads-the-way-on-googles-nano-banana-with-a-local-creative-twist
- **Korea booths:** https://www.asiae.co.kr/en/article/2026021709433718191 · https://www.bizhankook.com/bk/article/29706
- **US K-booths:** https://en.koreadaily.com/?p=36275 · https://columbianewsservice.com/2026/01/16/retro-reimagined-the-photo-booths-newest-upgrade-in-the-digital-age/ · https://petapixel.com/2025/04/30/this-high-angle-photo-booth-is-the-latest-gen-z-trend-in-los-angeles
- **Purikura:** https://english.adnkronos.com/2025/09/24/purikura-photo-sticker-machines-evolving-30-years-on/ · https://www.malaymail.com/news/life/2020/07/30/surviving-selfies-japans-purikura-photo-booths-cling-on/1889639
- **Weddings and bachelorettes:** https://wedding.report/index.cfm/action/wedding_statistics/view/market/ · https://www.theknotww.com/press-releases/the-knot-worldwide-unveils-2026-real-weddings-study · https://www.theknot.com/content/bachelorette-party-statistics
- **Friendsgiving:** https://civicscience.com/?p=41115 · https://www.ypulse.com/article/2025/11/26/is-gen-z-celebrating-friendsgiving-this-year/
- **Office parties:** https://www.businesswire.com/news/home/20251112228610/en/
- **Blackout Wednesday:** https://en.wikipedia.org/wiki/Blackout_Wednesday
- **College enrollment:** https://www.studentclearinghouse.org/news/fall-undergraduate-enrollment-shows-overall-growth-despite-decline-at-private-colleges/
- **Lapse demographics:** https://thred.com/tech/lapse-emerges-as-the-latest-gen-z-photo-sharing-platform/ · https://appfigures.com/resources/insights/20231117/5-lapse-loses-momentum-as-downloads-drop-70-percent
- **Long-distance booths:** https://contra.com/p/XRXUL3Z6-mbooth-turns-two-peoples-photos · https://peerlist.io/kishannaik/project/lensbooth--virtual-photo-booth · https://www.producthunt.com/products/togetherlens
- **Legal:** https://www.biometricupdate.com/202606/apple-begins-age-verification-for-texas-app-store-users · https://www.macrumors.com/2025/11/04/ios-26-2-texas-age-verification-law/ · https://www.bakerlaw.com/insights/an-app-developers-guide-to-app-store-age-assurance-laws/ · https://www.iphoneincanada.ca/2025/07/25/updated-app-store-age-ratings/ · https://www.wilmerhale.com/en/insights/client-alerts/20260615-the-take-it-down-act-goes-live · https://www.missingkids.org/blog/2026/the-work-never-stops-first-look-at-ncmecs-2025-data · https://cyberlaw.stanford.edu/letter-to-ncmec-about-ai-csam-report-statistics · https://9to5mac.com/2025/11/13/apple-tightens-app-review-guidelines-to-crack-down-on-copycat-apps/ · https://www.biometricupdate.com/202510/big-social-media-platforms-all-covered-by-australian-social-ban-esafety-commissioner
- **Gulf:** https://arabnews.com/node/644071 · https://www.thenationalnews.com/news/uae/2026/09/09/ramadan-2027-dates-eid-al-fitr-holiday/
- **Instagram Trend Talk:** https://about.instagram.com/blog/announcements/instagram-trend-talk/
