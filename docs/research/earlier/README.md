# Digi: the complete research and operating plan (Nov 16, 2026)

This is the summary and plan. The 12 detailed reports sit next to it (~90,000 words in total):
- [01 ICP and demand](01-icp-demand.md)
- [02 Competitors](02-competitors.md)
- [03 Product and social](03-product-social.md)
- [04 Tech, safety, legal](04-tech-safety-legal.md)
- [05 Marketing and Egypt operations](05-marketing-egypt-ops.md)
- [06 UI and screen flows](06-ui-flows.md)
- [07 Apple end to end](07-apple-end-to-end.md)
- [08 Pricing and paywall](08-pricing-paywall.md)
- [09 Contest rules and plan](09-contest-plan.md)
- [10 Looks and trends](10-looks-trends.md)
- [11 Web and SEO](11-web-seo.md)
- [12 Comps, peak MRR, exit](12-comps-exit.md)

**Labels:** V = checked directly on Nov 16, 2026; C = claim from someone else; E = estimate.

**Facts I re-checked myself today:**
- The live contest rules page.
- Boothie on TrustMRR: $54,458 MRR, 2,351 subscriptions, country TR.
- Photo charts: Boothie is #31 top-grossing in Turkey and outside the top 100 in the US, UK, Canada, Australia and Germany. US top-grossing: Tezza #19, WayShot #28, Esti #43.

> **Contest-safety note.** These are planning and research documents. Per the contest rules, the product is built **from scratch in a fresh repo after the owner accepts the rules**. Nothing from before Nov 16 13:00 UTC is reused: no old mockup PNG/HTML, no Nov 13 look test images, no old prompts. Designs and prompts in these docs are references and get recreated fresh.

---

## 1. Verdict
| Question | Answer |
|---|---|
| Is Digi a good contest pick? | **Still the best fit we have** for a 30-day profit window: quick to build, impulse buys, party season. But see the eligibility risk in section 2. |
| Is Digi a great long-term business? | **6/10** (was ~7). Photo-app hits usually fade 70–95% within months. Only 7.3% of new Photo & Video apps reach $10K/month within 2 years [V, RevenueCat]. |
| Contest outcome (E) | **Median ~$0.4–1.5K profit; top 10% ~$8–20K.** A top-3 finish probably needs $20–60K |
| 12-month peak MRR (E) | Median $1.5–4K; top 25% $5–15K; **top 10% $15–40K**; ~5–8% chance of reaching $30K MRR |
| Boothie proof | Real ($54.5K MRR, V), **but mostly from Turkey, not the US** (V). "Copy Boothie for the US" is unproven |

**Honest bottom line:** Digi is a reasonable lottery ticket with a modest median. It's worth doing well and fast, then deciding by early January whether to scale it or move to Kilma.

## 2. Contest rules that change everything (read on the live page today)
1. **Accept the rules in the dashboard before any work.** "Work done before accepting the rules does not qualify." Screenshot the time.
2. **"No earlier code, prototypes, designs, landing pages or other work on the business."**
   - We made a Digi UI mockup and AI look tests on Nov 13–14. That's an **eligibility risk**.
   - **Email the organisers** (crew@email.ship-or-die.com): disclose it and ask. The draft is in the chat.
   - If they say no, switch ideas. The rules allow switching businesses mid-contest; only the final business counts.
3. **The domain is fine** (bought Nov 16; earlier domains are allowed too).
4. **The contest's traffic tracker is mandatory** on digi.pink before any traffic or payment, and must be named in the privacy notice.
5. **Profit** = money received − refunds − chargebacks − payment fees − **all paid marketing**.
   - Paid marketing includes creators, affiliates and rev-share payouts.
   - **AI and hosting costs aren't subtracted**, but **selling below cost is cheating**, so every plan needs a cap.
   - Annual plans paid upfront count in full.
   - **Refunds count until winners are confirmed** (after Dec 16 too).
6. **Purchases by friends, family or other entrants mean disqualification.** Don't promote to classmates or family.
7. **One active product. Solo only. Age 18+.**
8. **TrustMRR must be connected for the whole period** (Anonymous mode is allowed, which hides the brand from copycats).
9. **Requirements for native apps are "to be announced".** Keep store, acquisition and payment records.
10. **Open question:** does Apple's 15–30% commission count as a "payment fee"? Probably yes. Ask.

## 3. Who it's for (ICP)
| Persona | Why | Pay |
|---|---|---|
| **US women 18–30 on iPhone** (core) | Post photo dumps and stories on Instagram; find apps on TikTok | Weekly/yearly |
| College women 18–22 | Volume and sharing | Low–medium |
| Working women 22–30 | Best subscribers | Medium–high |
| **Bachelorette and bridal groups** | Highest one-off spend (peaks Mar–Oct) | A ~$14.99 "Bach Pass" one-off |
| **Friends who live apart** | Viral loop ("long distance photobooth" is a real search, V) | Group strip |

- **18+ only, firm.**
  - **Google's terms** (which apply to Nano Banana via OpenRouter) ban apps "likely to be accessed by" under-18s [V].
  - The contest requires 18+ entrants, and AI edits of minors carry CSAM risk.
  - Texas, Utah and Louisiana have new app age laws [C].
  - So: age gate (`expo-age-range`), 18+ rating, 18+ marketing, no prom-for-teens; "Formal Night" for adults instead.
- **Markets:** launch **US-only first** (avoids the EU AI Act and UK Online Safety Act at the start). Add UK, CA and AU after legal checks; they have high iPhone shares (CA 65%, AU 62%) [V].

## 4. Competition and positioning
- **US money today:** Tezza #19, WayShot #28, Esti #43 top-grossing Photo [V]. These are aesthetic editors and filter apps.
  - WayShot's recent reviews average ~2.25★: **19–67% complain about changed faces and trial charges** [V].
  - Pecra averages ~1.2★.
- **Group and party features already exist in small apps:**
  - POV (event cameras, 4.9★, hosts pay by guest count $4.99–89.99);
  - Once (reveal-later event films);
  - Lapse;
  - stripz (group strip);
  - 2AM CAM;
  - web long-distance strip tools.
- **"Photo strip" apps are flooding in:** ~13 launched in 2026 with 0–35 ratings each, and 195 new photo apps in 2026, of which only ~10 have 100+ ratings [V].
- **Instagram copied the friend camera** ("Instants", #7 free Social) [V]. Meta clones casual formats fast.
- **Free AI is the hidden rival:** people paste "Christmas AI trend prompts" into Gemini or ChatGPT.
- **The gap Digi can own (E):** **AI party looks that keep everyone's *real* face, across a whole group of up to 4, with honest pricing**, plus a 4-pose strip from one photo.
  - **Promise:** "Your real faces. Party-ready in 20 seconds."
  - **Trust as a feature:**
    - a sample before signup;
    - a visible "faces kept" check;
    - plain photo counts;
    - honest trials;
    - a visible close button;
    - no spin wheels or fake countdowns.

## 5. The product
**v1 (contest launch, build Nov 16–19):**
- **The camera is the home screen** (no tab bar):
  - one swipe row of looks: free on-device ones plus AI looks marked with a ✦ badge;
  - strip mode as a camera mode;
  - the system photo picker (no permission needed).
- **Free on-device digicam filter:** Skia shader with colour LUT, flash look, grain, and an **orange date stamp drawn on the phone** (the AI garbles dates).
- **~6–8 AI looks at launch**, from fixed presets (**no free-text prompt box**):
  - Digicam Flash, Photobooth Strip (4 poses), Paparazzi Night, Holiday Party, NYE Glitter, Y2K/Indie Sleaze, Friendsgiving (Nov 26).
  - More arrive weekly, unlocked remotely.
- **Group rules:**
  - 1–4 people: full looks and 4-pose strip.
  - 5–6 people: expression-only strip.
  - 7+ people: free filter only.
  - Reason: Google says Nano Banana keeps at most 4 faces recognisable [V].
- **Consent per photo** ("everyone in this photo is 18+ and agreed").
- **Apple's third-party-AI consent screen**, shown before any upload and naming the provider [V 5.1.2(i)].
- **Result screen:** save, share link, redo, "try another look"; small watermark on free.
- **Honest progress** ("usually ~20 s"). After 45 s: "we'll ping you". A failed generation gives the digi back automatically.
- **Share pages** at digi.pink/s/<id>:
  - 1200×630 preview image;
  - noindex, but not blocked in robots.txt;
  - expire after 30 days; the owner can delete any time;
  - a report button.
- **Safety:**
  - OpenAI moderation (free) on inputs and outputs, plus a cheap vision check for nudity and minors;
  - zero-tolerance Terms;
  - a procedure for reporting CSAM to NCMEC;
  - a 48-hour removal form;
  - photos deleted within 24 hours;
  - no stored face templates;
  - a written biometric policy (Illinois BIPA risk).
- Settings: restore purchases, delete account, privacy, contact.

**v1.1 (~Nov 25–28, as an update):**
- **"Digi Party" group strip:** friends add their own selfie from a web page, so each person gives consent themselves.
- "Try this look" from share pages, via:
  - Custom Product Pages per look;
  - Apple's Safari install banner;
  - a paste button;
  - short look codes.
- Christmas looks hidden behind remote dates (unlock Dec 8–10).

**v2 (after Dec 16):**
- **Digi Roll** for NYE: a shared party roll, priced by size like POV.
- App Clip, widget, "on this day" memories.
- Wedding/event mode (summer peak).
- Android, web app.

## 6. UI (from 52 real apps on Mobbin; full specs in 06)
- **About 45 screens**, each with empty, loading, error and success states and its wording. There are 17 friendly error messages.
- **Onboarding: 11 screens before the paywall:**
  1. Welcome.
  2. **18+ age gate.**
  3. Vibe.
  4. Who you shoot with.
  5. Occasion.
  6. **A sample photo transforming (no upload needed).**
  7. Pick your photo.
  8. **Consent ("everyone said yes").**
  9. AI-provider consent.
  10. First result.
  11. Notification prompt.
- **Native feel:**
  - 44pt tap targets, Dynamic Type, VoiceOver labels, reduced motion, haptics, safe areas;
  - support the iPhone 16 Camera Control button.
- **Design fixes:**
  - white text on #FF4FA3 pink only passes at 17pt bold or heavier;
  - deeper pink #D6197F when Increase Contrast is on;
  - labels ≥ 12–13pt;
  - icons ≥ 44pt.
- **Paywall:**
  - the user's own before/after;
  - 3 benefits;
  - yearly card above weekly;
  - the button names the plan ("Get Yearly · $39.99/yr");
  - Terms, Privacy and Restore links;
  - the billed price is the biggest price on screen;
  - **"BEST VALUE"** badge (my pick over "SAVE 89%").

## 7. Looks and trends (full library of 30 + prompts in 10)
- **Rising:**
  - digicam and direct flash (Canon PowerShot sales ~7× from 2022 to 2025, C);
  - indie sleaze; photobooth strips; 2016 nostalgia;
  - from Pinterest 2026: Glitchy Glam, Vamp Romantic, Opera (red curtains, masquerade) and Cool Blue (frosted makeup).
- **Fading:** clean girl, mob wife, coquette, office siren.
- Pinterest Predicts 2027 lands ~Dec 8–10. React fast.
- **From Korean booths:** limited-edition frames (weekly drops), double strips, a "making-of" clip, pose cards.
- **Avoid:** skin brightening and big eyes.
- **Prompt rules:**
  - every prompt is built as CAST + LOOK + LOCK + FAIR_LIGHT + GUARD;
  - strips are 4 separate edits (or one 1:4 call at $0.077);
  - **no face or body reshaping**;
  - **no camera or film brand names** in look names.
- **Fairness gate:** a 2026 study found 62–75% of AI portrait edits lighten skin. Run a 48-photo, skin-tone-labelled QA set; the gap between the darkest and lightest skin-tone bands must be ≤ 5 points before a look ships.

## 8. Tech and costs (full in 04)
- **Models:**
  - **primary: Nano Banana 2.1** ($0.0336 at 1K, $0.0504 at 2K) [V];
  - backups to test: **Seedream 5.5** (~$0.02–0.028) and **GPT Image 2.6 Flare**;
  - cheap wildcard: MAI-Image-2.6-Flash.
- **Cost (E):**
  - **~$0.054 per kept digi** (1.3 tries + OpenRouter fee);
  - a strip costs $0.077 as one call or $0.215 as 4 calls;
  - free tier ~$0.16 per free user, which is **the biggest AI cost**.
- **Infra:**
  - an Expo dev build (SDK 58), Cloudflare Worker (the API key stays on the server, with per-user caps and an OpenRouter spend limit), R2 storage, RevenueCat;
  - a Stripe web checkout as the backup and the US link-out;
  - Astro on Cloudflare for the site.
  - **Storage and hosting are trivial** (a few dollars a month).

## 9. Apple (full in 07)
- **Do today** (you, as Account Holder in App Store Connect):
  - accept the updated developer agreement and the Paid Apps Agreement;
  - finish tax and banking;
  - **enrol in the Small Business Program** (15% starts ~15 days after the fiscal month you're approved in, so ~Dec 13 if approved by ~Nov 28);
  - file the "App Launch" featuring nomination;
  - finish EU trader verification (or skip the EU).
- **Review takes up to ~48 hours** for 90% of submissions [V]. **Submit v1.0 + 3 in-app purchases by Thu Nov 19** with manual release; that leaves room for one rejection before Thanksgiving.
- **Treat Dec 18 as the last safe submission date** before the holiday slowdown.
- **Rejection traps:**
  - the AI consent screen (5.1.2(i));
  - user-content rules for AI apps (1.2: filter, report, block, contact);
  - Party Pack credits must never expire;
  - no forced sign-in, plus in-app account deletion;
  - paywall disclosure;
  - no trademarked style names, no "Free" or competitor names;
  - 4.3 spam risk.
- **Store tools:**
  - In-App Events (Christmas Dec 1–25, NYE Dec 26–Jan 1);
  - Custom Product Pages (up to 70);
  - offer codes (now for consumables too);
  - Apple Ads Basic ($100 credit for eligible new advertisers);
  - TestFlight (100 internal testers, no review).

## 10. Pricing (full in 08)
| Plan | US price | Caps (no "unlimited") |
|---|---|---|
| Free | $0 | 3 AI digis per device (DeviceCheck) + free camera |
| **Yearly (pre-selected)** | **$39.99** with a **3-day trial and a reminder**; **no trial from Dec 13** | 40/week, 15/day; 10 during the trial |
| Weekly | $6.99 | 40/week, 15/day |
| **Party Pack** | **$5.99 for 25** (also unlocks hosting one group strip) | Credits never expire |
| Bach Pass (v1.1+) | ~$14.99 one-off | Group pack |

- **Why yearly first:** in the model, ~$5.2K profit at 10K installs vs ~$2.9K for weekly-first. A median app gets about half.
- **Margins** after Apple's 15%: ~74–93%.
- **Refund risk:** Photo & Video has **the highest trial refund rate on the App Store (6.4%)** [V]. So: honest timelines, RevenueCat's refund handling, no tricks.
- **A/B tests:**
  - in the window: yearly $39.99 vs $49.99;
  - after Dec 16: yearly-first vs weekly-trial-first;
  - later: a pack ladder.
- **Web (Stripe) checkout:**
  - ~4% fees vs Apple's 15–30%;
  - linking out from the app is allowed on the US storefront [V];
  - build it as the backup / v1.1.
- Other storefronts: £6.99/£39.99, €7.99/€44.99, A$11.99/A$64.99, C$9.99/C$54.99.

## 11. Marketing (full in 05 and 11)
- **Organic is the plan. Paid ads lose money in a 30-day profit window:**
  - US Apple Ads Photo & Video CPI ~$2.79 [V];
  - break-even is ~$0.26–0.52 per install [E];
  - if testing at all, hard-cap it at **$250** with kill rules.
- **The Egypt → US problem:** TikTok shows Egyptian posts to MENA audiences.
  - **Don't buy US accounts or fake your location with a VPN** (account transfers are banned in TikTok's terms; location-faking counts as inauthentic) [V/C].
  - **Clean options:**
    1. **US micro-creators** (~$100–186 per video; counts as ad spend);
    2. a **US part-time posting assistant** on Digi's brand account via TikTok Business Center (~$200/month; probably counts as marketing spend, so ask the organisers);
    3. **Instagram, Pinterest and YouTube Shorts** (less tied to location);
    4. boost posts that already win (Spark Ads).
- **Content:**
  - **TikTok/IG photo carousels from brand persona accounts** (AI-made fictional people only, labelled; **never fake customers, fake reviews or fake "reactions"**);
  - 20 ready ideas in file 05;
  - **80 carousels + 20 videos scheduled by Dec 4**, before exams.
- **App Store listing:**
  - title **"Digi: Photo Booth & Digicam"**;
  - subtitle "AI Group Strips & Flash Pics";
  - a 98-character keyword field with no trademarks;
  - a 7-screenshot storyboard.
  - Note: "photo booth" and "photo strip" are weakly contested, "digicam" is crowded, and "stripz" exists.
- **Web/SEO (digi.pink):**
  - **free browser tools:** photo strip maker, digicam filter + date stamp, webcam 4-cut booth, polaroid frames, photo-dump planner (1–3 days each);
  - **prompt pages** ("photobooth strip ai prompt", "christmas photo gemini prompt"), honest and useful, to show up in AI answers;
  - free PNG templates and frames;
  - the Pinterest plan (661M users, 57% Gen Z);
  - every App Store button goes through `/go/` with a campaign tag;
  - Google no longer shows FAQ/HowTo rich results, so don't count on them.
- **Free PR:** Product Hunt, the subreddits that allow promotion, press angles (the digicam revival, "long-distance group strips").
- **Never** promote it to friends or family (contest rule).

## 12. Running it from Egypt (not legal or tax advice)
- **Banking for the US LLC:**
  - **Wise Business** works with Egypt [V].
  - Mercury might, but it wants "planned US operations" and can close accounts [C].
  - Relay won't work [C].
- **US filings:**
  - **Form 5472 + pro-forma 1120 by Apr 15, 2027** ($25K penalty for missing it) [C].
  - BOI reporting is no longer required for US LLCs [C].
  - Get a US CPA to confirm there's no US income tax, and an **Egyptian accountant** for your Egyptian tax position.
- **Paying US creators or assistants:** Wise/Payoneer/Deel, with written terms and receipts (the contest needs proof of attribution).
- **Apple:** confirm the developer account is enrolled as the organisation, and finish DSA trader verification (it can take weeks).
- **Workflow during exams:**
  - everything scheduled by Dec 4;
  - 15 minutes a day checking the numbers;
  - looks unlocked remotely;
  - canned support replies.

## 13. Timeline (Cairo time; full day-by-day in 09)
| When | What |
|---|---|
| **Mon Nov 16 (today)** | **Accept the rules (screenshot)** → email the organisers → App Store Connect agreements, Small Business Program, featuring nomination, DSA → fresh `digi` repo → app record, RevenueCat → contest tracker on digi.pink |
| Tue Nov 17 | Worker + caps; tune 6 looks **fresh**; web flow (upload → consent → result → Stripe) with the tracker installed |
| **Wed Nov 18 – Thu Nov 19** | Minimal iOS v1 (camera, looks, consent, paywall, restore, deletion, report, filter) → TestFlight → **submit + in-app purchases** |
| Nov 19–22 | Brand persona accounts; batch 40 carousels; strip + share links on the web |
| Nov 23–25 | Release iOS; App Store listing; update 1.1 (group strip, try-this-look) |
| **Thu Nov 26** | Friendsgiving look drop |
| **Nov 27–30** | One honest Black Friday deal on yearly (e.g. $29.99), ends Nov 30 |
| Dec 1–2 | Christmas/party looks built and hidden; **last pre-exam iOS build by Dec 2** |
| Dec 3–4 | Schedule 12 days of posts; turn on refund handling; support auto-replies; **build the verification pack** (rules-acceptance screenshot, first commit, domain receipt, payment history, $0 ad ledger) |
| Dec 5–16 | Exams. Autopilot, 15 min/day. Holiday looks unlock Dec 8–10; Party Pack push on Christmas-party weekends |
| Dec 17+ | Digi Roll for NYE; A/B tests; decide Digi vs Kilma in early January |

**If App Review stalls:** the web app with Stripe becomes the main product, and all traffic goes to digi.pink.

## 14. Numbers to watch daily (full in 03)
- **North Star:** "shared digis opened by someone else per week", next to daily profit.
- **The 4 that decide profit:**
  1. **first-digi rate**;
  2. **paywall → purchase**;
  3. **refund rate** (keep < 5%);
  4. **AI cost as a share of revenue** (≤ 15%).
- **Also watch:**
  - share rate;
  - invite acceptance;
  - D1/D7 retention;
  - installs per 1,000 views (≥ 5);
  - free-tier AI cost.

## 15. Peak MRR and exit (full in 12)
| Horizon | Bottom 50% | Median | Top 25% | Top 10% | Top 1% |
|---|---|---|---|---|---|
| Contest window (profit) | <$400 | $0.4–1.5K | $2–8K | $8–20K | $30K+ |
| 3 months (MRR) | <$1K | $1–3K | $4–10K | $12–30K | $50K+ |
| 12 months (peak MRR) | <$1.5K | $1.5–4K | $5–15K | **$15–40K** | $60K+ (Boothie level) |

All estimates.

- **What sustains photo apps:** a lasting job to do (Remini, PhotoRoom), weekly new looks (Photo Lab), or a ritual (Locket's widget).
  - Lenz AI, same playbook, peaked at $8.9K/month and was **down 81%** within two months [V].
- **Exit values (E):**

  | MRR | Sale value |
  |---|---|
  | $10K | ~$100–180K |
  | $30K | ~$350–650K |
  | $60K | ~$0.8–1.3M |

  Each needs 6–12 steady months first.
  - Buyers: Acquire.com, Flippa and TrustMRR buyers; MWM once revenue passes ~€1M a year.
  - Weekly-heavy, single-channel, iPhone-only apps sell for less.
- **What raises the ceiling:** wedding/event mode (summer), web + Android, UK/CA/AU, link-in-bio pages (Liinks, run by one person, has held ~$32K MRR for years).
- **To prepare for a sale:**
  - TrustMRR connected from day 1 (keep the key valid);
  - push yearly plans;
  - refunds < 5%;
  - social accounts owned by the LLC;
  - documented operations and a backup model;
  - < 5 h/week of owner time.

## 16. Top risks
1. **Contest eligibility** (pre-launch mockup and tests). Disclose now.
2. **App Review delays.** The web backup handles this.
3. **Reaching US users from Egypt.** Clean channels only; budget for US creators as ad spend.
4. **Refunds** (category-high), and **fade** after the holiday spike.
5. **Copycats** (Instagram, CapCut, Boothie's buyer) and free Gemini prompts.
6. **Legal:** under-18s, Illinois BIPA, non-consensual edits. 18+, consent, deletion, moderation, US-only.
7. **AI quality:** changed faces, skin lightening. The QA gate and "real faces" promise handle this.

## 17. Decisions for the owner
1. **Accept the contest rules now** and send the eligibility email.
2. OK to create the **fresh private repo "digi"** and spend **~$2–3 of OpenRouter** on tuning (after acceptance).
3. Small budget for **US creators or a US posting assistant**? These count as ad spend.
4. Yearly badge: **"BEST VALUE"** (recommended) vs "SAVE 89%".
5. **By early January:** scale Digi, or move to Kilma.
