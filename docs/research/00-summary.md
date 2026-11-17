# Digi: the niche bible

*Master report for Digi (digi.pink), an iOS party camera. Written Nov 17, 2026 for the Ship or Die contest (Nov 16 – Dec 16, 2026, ranked by profit). It sums up 26 fact-checked chapters in this folder. Where a chapter's fact-check differs from its body, the fact-check wins. Labels: **V** = checked against the source, **C** = reported by someone else, **E** = our estimate. Every estimate carries a confidence (high/med/low).*

**Key takeaways**

- **The look is real; the money is thin.** US "digicam" searches are +37% on last year and "photo strip" +77–80%, but US money goes to a few preset editors and one digicam app (WayShot). The best AI booth proof, Boothie ($54.7K in 30 days), earns mostly in Turkey.
- **Plan on Apple taking 30% for nearly the whole contest.** At 30%, one $39.99 yearly sale is worth **$26.31** after refunds, not the $31–34 some chapters used.
- **One funnel:** contest profit per 1,000 US installs is **$214 (median app) / $468 (good work) / $946 (top quartile)**. $5K of profit needs ~10,700 installs at "good work"; $20K needs ~43,000.
- **Paid ads lose money in the window.** Break-even cost per install is $0.21–0.95; the US Photo & Video median on Apple Ads is $2.79. Cash marketing budget: **$0 by default, $297 at most.**
- **The best free win is in the App Store.** For "photo booth" the #1 app has 82 ratings and 2.1★. Put it in the name; add an In-App Event and Custom Product Pages the day v1 is approved.
- **Lead with yearly, sell packs on impulse, never surprise anyone.** Trial/charge/refund/"scam" reviews average 1.39★. $39.99/year must be the biggest price, with a real charge date and a reminder that fires.
- **Ship small and early.** Each day of review delay costs ~$210 of contest cash (base). Submit v1.0 by **Fri Nov 20**; shared rolls follow in v1.1 on **Nov 26**.
- **Rolls bring installs, not profit.** Apple's free iOS 27 albums and 7+ event apps already pool photos. Digi wins only on the look, the AI group strip and the 10 a.m. reveal.
- **Verdict:** a good-fit entry with a modest expected result: a few hundred dollars most likely, ~$4K with good execution, and a top-3 finish only with a hit.

---

## 1. Executive summary

### 1.1 The verdict on one page

| Question | Answer |
|---|---|
| Is Digi a sensible contest entry? | **Yes: 6/10 as a pick.** Cheap to build, impulse purchases, party season inside the window, and an App Store search term ("photo booth") that is still wide open. Against it: a late start (live ~Nov 24 at best), a 30% Apple cut for most of the window, exams from Dec 5, and the lowest trial-to-paid rate of any app category (22.2%). |
| Can it win? | **Unlikely.** Top 3 probably needs $20–60K of profit (E, low). That needs ~43K–130K installs at "good work" rates in about three weeks. Odds of a top-3 finish: roughly **3–8%** (E, low). The field had 4,345 entrants on Nov 17; the leader had $198 (V, [ch. 23](23-retention-season-contest.md)). |
| Expected contest profit (Apple 30%) | **Most likely (bear): ~$280–430. Good execution (base): ~$4.2K. Hit (bull): ~$14–18K.** (E, low–med; [ch. 05](05-mrr-peaks.md) volumes × [ch. 26](26-launch-metrics-experiment-plan.md) funnel) |
| Is Digi a good business after the contest? | **5.5/10** (the earlier research said 6). Down because: Apple now gives away full-resolution event albums (iOS 27); AI photo trends fade 70–80% within 2–6 weeks; about 30 new digicam/booth apps launch a month; and the audience partly rejects AI "slop". Up because: the event/wedding season (Apr–Sep) gives a second season, "photo booth" ASO is open, and yearly plans keep MRR flat through spring. |
| Realistic money by March 2027 | Bear ~$300/month cash; base ~$3.6K/month; bull ~$15K/month (E, low; [ch. 05](05-mrr-peaks.md)). Monthly cash falls about two-thirds from December to February in every case. |
| What decides the result | (1) Getting live by ~Nov 24. (2) One or two posts passing 1M views between **Dec 4 and Dec 10** (a viral post on Dec 9 is worth ~$2.2K of contest cash in the base case; the same post on Dec 15 is worth ~$400). (3) A paywall that converts at least at the median without refunds. |

**The plan in six lines.**
1. **Today:** Small Business Program, Paid Apps agreement, all products in App Store Connect, email the organisers five questions (§16).
2. **Fri Nov 20:** submit v1.0, US only: free camera + 6 looks + orange date stamp + strip + 3 free AI digis + paywall (yearly $39.99 with 3-day trial, weekly $6.99, Party Pack $5.99).
3. **Nov 24–30:** launch, In-App Event, 3 Custom Product Pages, launch-week $29.99 offer to people who closed the paywall, 2 posts a day per English account.
4. **Nov 26:** v1.1 with shared rolls, web guest join and the Roll Pass. **Dec 2:** v1.2, the last build before exams, with all holiday looks inside.
5. **Dec 5–16 (exams):** config only. 15 minutes a day. Sun Dec 13 at 15:00 Cairo, switch to "Yearly, pay now" only if Digi is in the running.
6. **$0 on ads.** Gift codes and 30% revenue share for creators. Log every gift.

### 1.2 Where the chapters disagreed, and the ruling

The critic found 11 contradictions; I found 9 more. The rest of this README follows these rulings.

| # | Conflict | Ruling (and why) |
|---|---|---|
| 1 | **Apple's cut.** ch. 06/21 warn 30%; ch. 16 ($31.60 per yearly), ch. 12 (~$34) and ch. 05's headline ($5,155) use 15%. | **Plan at 30% all window; 15% is upside.** SBP approval by Nov 28 gives 15% only from ~Dec 13 (V rule, C date), and nobody has confirmed Apple's cut is a "payment fee". Yearly sale = $39.99 × 0.70 × 0.94 = **$26.31** (15%: $31.95). ch. 05's base becomes **$4,245**. |
| 2 | **Per-install economics** disagree (ch. 06 $505/1,000; ch. 21 $902 and 59 payers; ch. 12 2.0–2.4%; ch. 23 $0.82; break-even CPI $0.20–0.90). | **Use ch. 26 only: $214 / $468 / $946 per 1,000 installs at 30%; break-even CPI $0.21 / $0.47 / $0.95.** ch. 06's "base" used top-quartile rates; ch. 21's 59 payers assumed 40% trial-to-paid and is net revenue, not profit; "2.4%" is the Asia-Pacific median (US is 2.8%); $0.82 is a 12-month value. |
| 3 | **Launch / Black Friday offer:** Nov 24–Dec 1 to non-converters (ch. 06/24) vs Nov 27–30 with a 300-digi cap (ch. 23). | **One offer:** product `digi_plus_yearly_launch`, $29.99 first year then $39.99, shown at the **next app open** after a paywall close, launch → **Mon Nov 30, 23:59 PT**; Nov 27–30 also a banner on the main paywall ("was $39.99"). **Normal 60/month allowance.** Hidden from anyone who used the trial (one intro offer per subscription group). |
| 4 | **Yearly allowance:** 60/month (ch. 06/24) vs too thin on Seedream 5.5 (ch. 21). | **Keep "60 AI digis every month".** Default looks run on Seedream 5.0 Flash (1 digi); studio looks on 5.5 cost **2 digis**, like strips. Worst case 720 × $0.0244 = **$17.57**, under $20.99 (launch offer net at 30%) and $27.99. Passes the "no selling below cost" rule. |
| 5 | **Launch timing:** submit Nov 19 (ch. 22) vs in review Nov 22 (ch. 21) vs live Nov 25 (ch. 05). | **Submit v1.0 by Fri Nov 20 (Cairo night), hard stop Sat Nov 21; no rolls in v1.0.** Review takes 2–7 days plus 1–3 per rejection (E, med). ch. 21 calls Nov 17 a Monday; it is a **Tuesday**, so its day labels are one day off. |
| 6 | **Marketing cash:** ~$450 (ch. 15) vs $0 + optional $100 Apple Ads (ch. 16) vs no ads (ch. 06/23). | **$0 default; hard cap $297.** One Billo UGC video ($99) on Nov 20; two more only if its best cut beats the account median by Dec 1. No boosts or student gigs. Creators: gift codes + 30% rev-share. Apple Ads only under rule R12. Creator and VA payments count as marketing spend under the updated rules. |
| 7 | **Storefronts:** US only (ch. 15/20/22) vs US/CA/AU/UK (ch. 01/20) vs NL/NO/PT tests (ch. 16) vs Egypt/Saudi prices (ch. 06) vs U.K. English (ch. 12). | **v1.0 US only. Canada next** (~Dec 2, after a 1-hour privacy check; 64.7% iOS, "photo strip" +326%). **Australia after the contest** (Apple blocks 18+ apps for unconfirmed adults there). **UK/EU in January** after a legal check. **Egypt not before a data-law check.** Set local prices and a U.K. English localisation only when those stores open. |
| 8 | **Reveal time:** 9 a.m. (ch. 04/17/23) vs 10 a.m. (ch. 09/18/21/22/24). | **10:00 AM host time, editable.** A 2 a.m. party end still fits the 8-hour Live Activity limit; most copy already says 10. |
| 9 | **Stamp vs brand:** brand inside the stamp (ch. 11/17); "no watermark" as a Plus perk (ch. 06/24); stamp must be free to remove (ch. 19). | **Two marks, same orange font.** Date `11 17 '26` (bottom right) is free to edit or turn off. `digi.pink` (bottom left) stays on free shared/saved images; Plus removes it; never on guests' roll originals. Disclosed from day one (Locket's late-watermark backlash, Nov 15, 2026). |
| 10 | **Rolls in v1:** Roll Pass and guest page in v1 (ch. 06/24) vs cut to v1.1 (ch. 21) vs guest join = v2 App Clip (ch. 17). | **Rolls in v1.1 (submit Thu Nov 26) with a web guest page** (`digi.pink/r/<code>`, first name, browser camera upload). Roll Pass and Big Roll attach to v1.1. Free up to **8 friends** (12 if the 9th-friend sheet converts < 2%). "No app needed" only once web upload works. App Clip in January. |
| 11 | **Trial end:** "until Dec 12" (ch. 06) vs "after Dec 13 pays after the window" (ch. 16). | **One switch: Sun Dec 13, 15:00 Cairo, only if Digi is top 10 or within 3× of 3rd (R10)**: "Yearly, pay now" first until Dec 16, 15:00. Trials started after ~Dec 14 15:00 convert too late; this leaves a 24-hour margin. Not in the running: keep the trial. |
| 12 | **App name:** "Digi: Photo Booth & Digicam" (ch. 12) vs "Digi: Party Camera" (ch. 22). | **"Digi: Photo Booth & Digicam".** Best winnable keyword in the name; still a descriptor after "Digi:" with no "DigiBooth" compound. |
| 13 | **Plan name:** Digi Pro (ch. 19/22) vs Digi Plus (6 chapters). | **Digi Plus.** Fix ch. 22's review notes. |
| 14 | **Trial reminder:** 24 h before end (ch. 03/19/22/23) vs +48 h (ch. 07/19). | **Trial start + 40 h, plus an in-app banner from hour 36.** Apple starts renewing in the last 24 h (V). |
| 15 | **Age check:** at launch (ch. 21/22) vs at first AI look (ch. 09/24). | **At the first AI look or roll creation**, Declared Age Range first, blank month/year fallback. Update the review notes. |
| 16 | **"AI" in the hero:** drop it (ch. 20) vs say it everywhere (ch. 18). | **Hero and first screenshot lead with the free camera; every AI surface says "AI look ✦".** |
| 17 | **Free looks at launch:** 10 (ch. 01) vs 6 (ch. 19/23). | **6 at launch, 10 by Dec 2, never removed.** |
| 18 | **Paid "develop now"** (ch. 02) vs never charge to see your own photos (ch. 19). | **Free host "develop now"; no paid skip.** |
| 19 | **Retention benchmark** D1 11.6% / D7 3.4% (ch. 23). | **Unverified** (ch. 23's own fact-check); a 2026 blend shows 22% / 9%. Use Digi's week-1 data. |
| 20 | **Old gates:** cut free digis if conversion < 4% (ch. 21); Apple Ads if ≥ 4% pay (ch. 16). | **Replaced by ch. 26 rules R9 (AI cost share, abuse) and R12 (D7 cash per install ≥ $2.50).** |

---

## 2. The 25 numbers that matter

| # | Number | So what | Source (date of the number) | Conf. |
|---|---|---|---|---|
| 1 | US "digicam" searches **+37%** YoY (+135% the year before) | Rising, slowing; plateau likely in 2027 (E) | Google Trends, Sep 1–Nov 8, 2026 ([ch. 01](01-market-trend.md)) | High |
| 2 | "Photo strip" searches US **+77–80%**, CA +326%, UK +86%, AU +171% | Strips grow faster than the camera | Google Trends, Sep–Nov 2026 ([ch. 01](01-market-trend.md)) | Med |
| 3 | US point-and-shoot units **+93%** in 2025, driven by models under $200 | The physical trend is real and cheap | [Circana, Feb 25, 2026](https://www.circana.com/post/wired-headphones-growth-is-a-throwback-to-2016) | High |
| 4 | Boothie: **$54,654** revenue in 30 days, MRR $54,030 | AI booth looks sell | [TrustMRR, Nov 17, 2026](https://trustmrr.com/startup/boothie.md) | High |
| 5 | Boothie ratings: **71% Turkey, 10% US** | That proof is not American | iTunes Lookup, Nov 17, 2026 ([ch. 20](20-audience-icp.md)) | High |
| 6 | WayShot **#27–32** US Photo & Video top grossing; ~$29.7K/month Meta ads (E) | US digicam money exists; the leader buys growth | Apple RSS, Nov 16–17; AppKittie cache ([ch. 02](02-competitors-retro-cams.md)) | High / low–med |
| 7 | "Photo booth": **#1 app has 82 ratings (2.12★)**; no top-10 app has 10K+ | The big keyword a new app can win | iTunes Search + Lookup, Nov 17, 2026 ([ch. 12](12-aso.md)) | High |
| 8 | Photo & Video trial-to-paid **22.2%** (top quartile >33.1%) | ~1 in 4–5 trials pays | [RevenueCat SOSA 2026](https://www.revenuecat.com/state-of-subscription-apps/) | High |
| 9 | North America download-to-paid by day 35: **2.8%** (freemium 2.1%) | The US subscription rate to plan with | [RevenueCat SOSA 2026](https://www.revenuecat.com/state-of-subscription-apps/) | High |
| 10 | Revenue per install at day 14: yearly-led **$0.36**, weekly-led $0.19 | Lead with yearly | [RevenueCat SOSA 2026](https://www.revenuecat.com/state-of-subscription-apps/) | High |
| 11 | P&V median **$124/month** a year after launch; top 10% $3,600+ | The base rate is small | [RevenueCat SOSA 2026](https://www.revenuecat.com/state-of-subscription-apps/) | High |
| 12 | **55.4%** of 3-day-trial cancellations happen on install day | Honesty beats trial length | [RevenueCat SOSA 2026](https://www.revenuecat.com/state-of-subscription-apps/) | High |
| 13 | Black Friday promo **+20%** new payers/day (no promo −16%); Christmas-only promo: no gain | Run a BF offer; skip a Christmas discount | [RevenueCat, Oct 27, 2026](https://www.revenuecat.com/blog/growth/holiday-offers-subscription-apps) (2025 season) | High |
| 14 | Apple Ads US P&V median **CPI $2.79** | 3–13× Digi's break-even | [AppTweak](https://www.apptweak.com/en/aso-blog/apple-ads-benchmarks) (2025) | High |
| 15 | Meta median 7-day ROAS, US: **33%** | No Meta ads in the window | [Adapty](https://adapty.io/meta-ads-benchmarks/) (Jul–Sep 2026) | High |
| 16 | Seedream 5.0 Flash **$0.018**/image; Seedream 5.5 $0.028 | AI costs cents | [OpenRouter API](https://openrouter.ai/api/v1/images/models), Nov 17, 2026 | High |
| 17 | Fully loaded cost per kept digi (Flash): **$0.0244** | A $5.99 pack costs ~$0.61 of AI | [ch. 21](21-tech-ai-cost.md) (E from V prices) | High |
| 18 | Contest profit per 1,000 US installs at 30%: **$214 / $468 / $946** | The only funnel to plan with | [ch. 26](26-launch-metrics-experiment-plan.md) model | Med / low–med |
| 19 | Break-even cost per install: **$0.21 / $0.47 / $0.95** | Every paid channel costs more | [ch. 26](26-launch-metrics-experiment-plan.md) | Med |
| 20 | One yearly sale at Apple 30% after ~6% refunds: **$26.31** (15%: $31.95) | Corrects $31.61 (ch. 16) and $34 (ch. 12) | Arithmetic ([ch. 06](06-monetization-packs.md)) | High |
| 21 | Trial/charge/refund/scam reviews: **1.39★**, 82% one-star (n=249) | The niche's most damaging theme | US reviews, 30 apps, 2026 ([ch. 19](19-review-mining.md)) | Med–high |
| 22 | Apple rejected **23.0%** of 9.1M submissions in 2025; 64.7% of rejections were Performance | Build quality is the main review risk | [Apple Transparency Report 2025](https://www.apple.com/legal/app-store/transparency/2025/) | High |
| 23 | Free-trial toggles rejected under 3.1.2 since **mid-Jan 2026** | No toggle anywhere | [RevenueCat, Feb 9, 2026](https://www.revenuecat.com/blog/growth/rip-toggle-paywall) | High (C) |
| 24 | US 18–29s: Instagram **79%**, TikTok 65%, Snapchat 56% | Instagram reaches more buyers | [Pew, Oct 19, 2026](https://www.pewresearch.org/internet/fact-sheet/social-media/) | High |
| 25 | Event cameras: only **~21–35%** of invited guests shoot | Plan rolls for 3–8 real shooters | POV US reviews, 2026 ([ch. 04](04-competitors-booth-social.md)) | Med |

---

## 3. The niche in plain English

**What is happening.** Young women on iPhone want party photos that look like a 2004 compact: hard flash, a bit of grain, blown highlights and an orange date in the corner. Cheap real compacts sell out (CIPA compacts +29.6% in 2025). The look spreads on TikTok as 10–15-second before→after videos. Part of the appeal is anti-AI: "genuine", not "slop". Gadgets fade while the look stays (Kodak Charmera searches −55% after its Christmas 2025 peak; Camp Snap +123%). Gift searches peak Black Friday week and Dec 21–27; "photo dump" and "photobooth" peak Dec 28–Jan 10, so the contest catches the run-up, not the peak. ([ch. 01](01-market-trend.md))

**Who pays, and for what.**

| Who | Buys | Evidence |
|---|---|---|
| **P1 "digicam girl"** (18–26, US first) | A cheap, ad-free camera with good free looks; small or one-time payments | Dazz charges $6.99/yr or $19.99 once and is a top earner worldwide (est. $0.5–0.9M/month, low–med). Users' own fair prices: "$1.99/yr", "$10 one-time", "$5/yr or $25 lifetime" ([ch. 02](02-competitors-retro-cams.md), [ch. 19](19-review-mining.md)) |
| **P2 "the host"** (22–34, birthdays, house parties, bachelorettes) | One payment per party, compared with a photographer or booth rental | Event apps all sell 25 guests ~$4.99, 50 ~$14.99, 100 ~$29.99–34.99; but 41% of POV's recent reviews mention weddings and one mentions a holiday party ([ch. 04](04-competitors-booth-social.md)) |
| "Fix my face" buyers | Retouch, relight, headshots on weekly plans | Facetune #7, FaceApp #8–9, Remini #21–22 in US top grossing; recent reviews ~1.5–2.5★ on billing ([ch. 03](03-competitors-ai-photo.md)) |

**Why the paid part must be specific.** Gemini gives ~20 free image edits a day; in the 2025 Ghibli wave Remini's downloads doubled but revenue rose under 1%. Digi charges only for what a chatbot does badly: a 4-pose strip from one photo, groups with real faces kept, the burned-in stamp, the shared roll. ([ch. 05](05-mrr-peaks.md))

**What users punish:** switching paid users to subscriptions, gating saves of your own photos, lost photos (32% of social-camera 1–2★), ads, face-changing AI (1.72★) and surprise charges (1.39★). Almost all are company choices. ([ch. 19](19-review-mining.md))

---

## 4. Competitor map and the gap Digi fills

| App (type) | Price (US) | Size signal | Threat | Digi's answer |
|---|---|---|---|---|
| **WayShot** (digicam editor) | Subscription; 30 film shots $9.99 | #27–32 US grossing; est. $200–420K/month | **High** | Win "photo booth" search, strips and honesty, not ad spend |
| **Dazz Cam** (retro camera) | $6.99/yr, $19.99 once | 118K US ratings, 4.75★ | High | A free camera at least as good; never gate saves |
| **Tezza, VSCO, Esti** (preset editors) | VSCO Plus $39.99/yr | Tezza #20, VSCO #19 | Med | Digi is a camera first |
| **Kroma** (no-preview roll) | $39.99/yr; "Develop now" $2.99–4.99 | ~$5K/month (E); ratings +254% in 30 days | Med | No paid skip; group rolls + AI strip |
| **101cam (SNOW), Meitu "Digicam"** | 101cam $13.99/yr | #4 free in Korea; Meitu #9 in Japan | Med (US low) | US-first English ASO |
| **Boothie** (AI booth) | 25 credits $5.99, 60 $11.99 | $54.7K/30 days, mostly Turkey | Med | Same pack ladder; real faces; groups |
| **Sparkle, Pecra, flag7x, EPIK** (AI G7X) | Sparkle 25/$4.99, $7.99/wk | Pecra's last 87 reviews 1.20★; EPIK runs "g7x filter" ads | Med | Auto-refunds, "Not my face" redo, AI labels, faster looks |
| **Facetune, Remini, Retake, Airbrush** | Weekly-led | US top 25 grossing | Low (other job) | Never "Pro but limited" |
| **POV, Once, Lense, Party Cam, Scene** (event cameras) | 25 guests $4.99 … 100 $29.99–34.99; 5–10 free | POV 15,707 ratings, 4.92★ | Med | Match the ladder; add the look and AI strip |
| **Locket, BeReal** (friend cameras) | Locket Gold $1.99–4.99/mo | Locket 593K US ratings | Low | No feed, streaks or gates |
| **Apple Shared Albums (iOS 27), Google Photos QR, Instagram Frames + Restyle** | Free | Built in | **High for rolls** | "Your phone keeps the photos. Digi develops the night." |
| **Web booths (PicaPica, photobooth-io)** | Free | New sites rank in weeks | Low–med | Free web booth on digi.pink as a funnel |

**The gap.** No app combines (1) a free, ad-free on-device digicam camera with the orange stamp, (2) AI group looks and a 4-pose strip that keep real faces, (3) a shared roll that develops for everyone next morning with no guest download, and (4) money screens that read like a receipt. Each part exists somewhere (Once has an orange stamp; Cammy sells a $2.99 "AI Recap"; Kroma has no-preview rolls). The combination is the moat, and it is thin. ([ch. 02](02-competitors-retro-cams.md), [ch. 04](04-competitors-booth-social.md))

---

## 5. Monetisation

### 5.1 Packaging (Package A, final)

**Free forever:** the camera with every on-device look, the date stamp, non-AI booth strips, joining any roll, hosting rolls up to 8 friends, sharing with the small `digi.pink` mark, and **3 AI digis per device, once** (App Attest/DeviceCheck so a reinstall doesn't refill them).

| Product | Type | US price | Exact wording | Ships in |
|---|---|---|---|---|
| **Digi Plus Yearly** (pre-selected) | Auto-renew | **$39.99** | "60 AI digis every month · every look · no watermark · rolls up to 30 friends" + "3 days free, then $39.99/year" | v1.0 |
| Digi Plus Yearly (launch) | Auto-renew, pay-up-front intro offer | **$29.99** first year, then $39.99 | "Launch week · first year $29.99, then $39.99/year · ends Mon, Nov 30" | v1.0 |
| Digi Plus Yearly $49.99 | Auto-renew | $49.99 | Test arm only (E2) | v1.0 (dormant) |
| Digi Plus Weekly | Auto-renew | $6.99 | "30 AI digis every week · every look · no watermark" (no trial) | v1.0 |
| **Party Pack** | Consumable | **$5.99** | "25 AI digis. Pay once. They don't expire." | v1.0 |
| Big Night | Consumable | $11.99 | "60 AI digis. Best for the whole night." | v1.0 |
| **Roll Pass** | Consumable | $4.99 | "Host one party for up to 30 friends. Everyone gets an AI group strip." | v1.1 |
| Big Roll | Consumable | $14.99 | "Up to 100 friends. Everyone gets an AI group strip." | v1.1 |

**Not offered in the window:** monthly, lifetime, a weekly trial, a Christmas discount product, anything "unlimited", a paid "develop now".

**Digi pricing rules:** plain looks = 1 digi; studio looks (Seedream 5.5, 1–3 people) = 2 digis; AI strip = 2 digis; allowance digis are spent before pack digis; pack digis never expire; a failed or blocked job refunds automatically; one free redo per digi; trial cap 10 digis.

**Where each offer appears** ([ch. 06](06-monetization-packs.md) §7.3): yearly + weekly after the first AI result in onboarding (with a "Just tonight? Party Pack $5.99" link); **Party Pack first** when free digis run out; Roll Pass when a host adds a 9th friend; Big Night or Party Pack as a top-up for subscribers at 0 (never "buy Plus" to someone who already pays); the launch card at the next open after a close, until Nov 30.

### 5.2 Unit economics (Apple 30% unless noted)

| Product | Gross | Net to Digi | Worst-case AI at cap | Passes "no selling below cost"? |
|---|---|---|---|---|
| Yearly $39.99 | $39.99 | $27.99 (15%: $33.99) | 720 × $0.0244 = $17.57 | Yes |
| Launch yearly $29.99 | $29.99 | $20.99 | $17.57 | Yes (margin $3.42) |
| Yearly $49.99 (test) | $49.99 | $34.99 | $17.57 | Yes |
| Weekly $6.99 | $6.99 | $4.89 | 30 × $0.0244 = $0.73 | Yes |
| Party Pack $5.99 | $5.99 | $4.19 | $0.61 | Yes |
| Big Night $11.99 | $11.99 | $8.39 | $1.46 | Yes |
| Roll Pass $4.99 | $4.99 | $3.49 | ~$0.40 (strips + storage) | Yes |
| Trial (3 days) | $0 if cancelled | — | 10 × $0.0244 = $0.24 | Marketing cost |
| Free user | $0 | — | 3 × $0.0244 = $0.07 | Device-bound |

**In-window value of one buyer** ([ch. 23](23-retention-season-contest.md), [ch. 26](26-launch-metrics-experiment-plan.md)): a yearly buyer is worth **2.5–2.9×** a weekly buyer who starts Nov 25 (weekly earns ~1.96–2.27 payments, $13.71–15.86 gross, before Dec 16). Blended contest profit per payer at "good work": **~$13.70**.

**The reconciled funnel (per 1,000 US installs, Nov 25 → Dec 16)** — use this everywhere ([ch. 26](26-launch-metrics-experiment-plan.md) §1b):

| Step | Low (median app) | **Base (good work)** | High (top quartile) |
|---|---|---|---|
| Install → first AI result | 40% | 55% | 70% |
| Install → yearly trial | 3% | 5% | 8% |
| Trial → paid | 18% | 25% | 33% |
| Install → weekly | 0.3% | 0.6% | 1.0% |
| Install → Party Pack | 0.5% | 1.0% | 2.0% |
| Payers per 1,000 | 16.5 | **34.2** | 67.0 |
| Gross per install | $0.32 | **$0.70** | $1.41 |
| **Contest profit per 1,000 at 30%** | **$214** | **$468** | **$946** |
| Contest profit per 1,000 at 15% | $260 | $568 | $1,149 |
| Break-even CPI | $0.21 | $0.47 | $0.95 |

AI cost in the window is about **$95 per 1,000 installs** on a Flash-led mix, half of it the free digis. The contest doesn't deduct it. ([ch. 21](21-tech-ai-cost.md))

### 5.3 Switches by date (no app update; all in RevenueCat)

| When | Change |
|---|---|
| Launch (~Nov 24) | Package A, yearly + 3-day trial pre-selected, launch card at next open |
| Fri Nov 27 – Mon Nov 30 | Launch offer also shown on the main paywall ("was $39.99"); 1 push to opted-in users Nov 27 and Nov 30 |
| Tue Dec 1, 10:00 Cairo | Launch offer off everywhere |
| Fri Dec 4 and Fri Dec 11 | Party Pack renamed "Holiday Party Pack" in copy for the weekend; Roll Pass banner Fri–Sat evening (if rule R11 holds) |
| **Sun Dec 13, 15:00 Cairo** | Only if in the running: Variant C, "Yearly, pay now" first (R10) |
| Wed Dec 16, 15:00 Cairo | Trial back on |
| Dec 26 – Jan 4 | New Year offer for non-converters (promo apps +24% in 2025) |

### 5.4 The tests to run (at most three in the window)

At 2–10K installs only big effects are readable: a +20% lift on a 3% rate needs 13,911 users per arm. ([ch. 26](26-launch-metrics-experiment-plan.md) §2)

| Test | Arms | Dates | Decide |
|---|---|---|---|
| **E1** Out-of-digis sheet | Party Pack first vs Plus first | Launch → stop enrolling Wed Dec 9; read Sun Dec 13 | Roll out at ≥80% chance to win on Realized LTV per customer; otherwise keep Pack first |
| **E2** Yearly price | $39.99 vs $49.99 (do-no-harm check) | Dec 2–12, **only if** Nov 27–30 averaged ≥250 US installs a day; else Dec 17 → Jan 31 | Use $49.99 after the contest if ≥50% chance to win or a loss >15% is ruled out |
| **E3** App Store first screenshot | Booth strip (original) vs flash before/after vs Christmas party strip | From approval of treatments (~Nov 27) to 90% confidence or Dec 16 | Apply only at Apple's 90% confidence |

**Rules, not tests:** yearly-first in the window; launch offer for everyone (no holdout); no copy tests (copy matched to moments, §11); trial switch by rule R10. **After Dec 16:** weekly + 3-day trial first (Package B) vs A; packs-first with a $9.99 monthly for the Middle East (Package C-lite); pack ladder with a $2.99 Mini. ([ch. 06](06-monetization-packs.md) §9)

**If App Review blocks subscriptions:** ship packs and passes only (Package C, $219/1,000 at 30% in ch. 06's model) and add Plus in an update.

---

## 6. MRR expectations

### 6.1 What peaks look like in this niche

| App | Normal → peak | Size of the peak | What happened next |
|---|---|---|---|
| Lensa (Dec 2022) | ~3–4 weeks | >$2M net in one day; $37.5M net in ~60 days | Its AI photo app group fell 72% in spending by Feb 12, 2023 (half-life ~32 days) |
| Epik yearbook (Oct 2023) | 17 days | $15K → $340K daily net; $1.7M net in 2 weeks | Spike lasted ~2–3 weeks |
| Remini headshots (Jul 2023) | ~1 week | $90K → $567K net in one day | Kept ~43% of peak day 2.5 years later ($93M/yr net pace): a real job |
| Lapse (Oct 2023) | ~3 weeks | 8K → 218K downloads a day | −70% within a month; cut its social layer in Nov 2025 |
| Lenz AI (digicam effect, 2026) | months | $8,867 in Aug 2026 | −81% by Oct (half-life 26 days) |
| Boothie (2026) | weeks | $4.7K first week → $27.3K month 1 → $43.7K month 2 | Still growing, slowing (+19.8% → +12.8% rolling 30 days) |

Sources: Appfigures, Apptopia, TrustMRR via [ch. 05](05-mrr-peaks.md) (med–high). **Rule of thumb:** trend money halves every 3–5 weeks; apps with a job or a season (event app half-life 75 days) decay more slowly.

### 6.2 Digi's three curves (Nov 17, 2026 → Mar 31, 2027)

Model: [ch. 05](05-mrr-peaks.md) `scripts/model.py` (E, low–med). Its base sits on ch. 26's Base funnel ($0.66 cash per install before Apple vs $0.67). **Cash** = money received after refunds, **before** Apple. Contest profit at 30% = cash × 0.70.

| | **Bear** (most likely, ~P40–60) | **Base** (good execution, ~P80–85) | **Bull** (a hit, ~P93–95) |
|---|---|---|---|
| Live on | Dec 2 (slow review, one rejection) | Nov 25 | Nov 21 |
| Installs a day, at launch → Dec 16 | 25 → 120 | 60 → 450 | 120 → 1,200 |
| Viral posts in the window | None | One on Dec 9 (+3,000 installs) | Dec 4 (+5,000) and Dec 12 (+10,000) |
| Installs in window | 1,174 | 9,210 | 33,752 |
| Cash in window (before Apple) | $406 | $6,064 | $25,069 |
| **Contest profit at 30%** | **$284** | **$4,245** | **$17,549** |
| Contest profit at 15% (upside) | $345 | $5,155 | $21,309 |
| AI cost in window (not deducted) | $63 | $592 | $2,306 |
| RevenueCat MRR on Dec 16 | $165 | $2,002 | $8,573 |

**Monthly cash (after refunds, before Apple):**

| Month | Bear | Base | Bull |
|---|---|---|---|
| Nov 2026 | $0 | $263 | $1,936 |
| **Dec 2026** | **$1,291** | **$12,127** | **$45,291** |
| Jan 2027 | $980 | $8,480 | $30,798 |
| Feb 2027 | $357 | $3,959 | $16,109 |
| Mar 2027 | $285 | $3,595 | $15,474 |
| Dec → Feb | −72% | −67% | −64% |

**MRR (RevenueCat style):** base $2,002 (Dec 16) → $2,855 (Dec 31) → $3,088 (Jan 31) → $3,164 (Mar 31). MRR stays flat while cash falls by two-thirds, because December's yearly plans count every month until November 2027. **Judge Digi in mid-January on monthly cash, not MRR.**

**Weekly cash in the base case:** week of Nov 24 $263 · Dec 1 $1,051 · **Dec 8 $3,780** · Dec 15 $2,923 · Dec 29 (NYE) $3,120 · Jan 12 $1,741 · Feb 23 $812.

### 6.3 What moves the contest number (base case, cash before Apple)

| Change | Contest cash | vs base |
|---|---|---|
| Live **Dec 2** instead of Nov 25 | $4,574 | **−25%** (~$210 per day of delay) |
| No viral post | $3,904 | −36% |
| Same viral post on **Dec 15** instead of Dec 9 | $4,323 | −29% |
| Paywall converts like a median app (×0.5) | ~$3,000 | −50% |

**The biggest unknown is revenue per 1,000 views.** Lenz AI implies $0.33–0.59; the earlier target was $3.30. At Lenz's rate, base needs 10–18M views (a dozen accounts); at $3.30 it needs 1.8M. Measure it from day 1 with ch. 26's 7-day definition: **green ≥ $1.00, amber $0.40–1.00, red < $0.40** per 1,000 views.

---

## 7. Marketing playbook

### 7.1 The rules that shape it

- **Profit = money received − refunds − chargebacks − payment fees − all marketing spend.** Creators, VAs, rev-share and affiliate payouts all count. AI and hosting don't. Selling below AI cost is cheating. Friends, family, classmates and other entrants must not buy. Refunds count until winners are confirmed (~Dec 26). ([ch. 23](23-retention-season-contest.md) §6)
- **The rules changed on Nov 16:** mobile apps no longer need the website tracker; shortlisted apps must show App Store Connect on a **verification call** (traffic sources, paid acquisition). So **every link Digi posts must be an App Store campaign link** (`?pt=…&ct=<account_placement>`) or a `digi.pink/go/<placement>` redirect to one.
- **TikTok:** turn on the content-disclosure setting ("promoting your own business") on every post from every Digi account; label AI people and AI re-lights; use only the Commercial Music Library on business accounts; no automation scripts; **no VPN or fake location** (it breaks TikTok's rules and the contest's traceability). ([ch. 14](14-tiktok-organic.md))
- **No personas.** Company-run "just a girl who loves digicams" accounts (Boothie, Pecra) break the FTC's 2024 fake/insider-testimonial rule. Digi runs openly branded accounts only.

### 7.2 Accounts and formats

| Account | Platform | Voice | Posts |
|---|---|---|---|
| @digi.pink | TikTok, Instagram, Pinterest, Snapchat public profile | Brand, plain | 2/day TikTok in launch week, 1 carousel + 1 Reel/day on IG |
| @digi.tips | TikTok | Tutorials and poses, "from the Digi team" | 1–2/day |
| Founder account | TikTok + IG | "Med student building a party camera between exams" | 1/day to Dec 4 |
| @digi.arabic | TikTok | Arabic | **Paused** until the Gulf storefront opens (Arabic viewers can't install a US-only app) |

**Formats, ranked** ([ch. 14](14-tiktok-organic.md)): (1) beat-drop before→after video, 10–14 s (WayShot 33.1M views, Boothie 2.3M) · (2) correction hook "stop posting your christmas party pics like this" · (3) credited repost of a real user, with written permission (after launch) · (4) "Posted / Deleted" carousel · (5) strip-build screen recording, 8–12 s · (6) the **morning reveal** "our roll developed at 10 a.m." (the only good roll video; never an explainer) · (7) reply-to-comment tutorial (only for real comments) · (8) rating looks /10 carousel · (9) founder build-in-public · (10) holiday save-bait carousel. On Instagram, build **send-bait**: first slide names a person ("send this to whoever's hosting NYE"), because sends weigh most for reaching non-followers ([ch. 15](15-instagram-snap-influencers.md)).

**The Egypt angle.** Use Egypt for production and testing, not reach. Cairo is 7 h ahead of New York, so US 7–10 p.m. posts go out at 2–5 a.m. Cairo: schedule them. A TikTok account posting from Cairo will probably reach Egypt and the Gulf first (E, med). Check "viewers by country" on day 3; if under 30% US, shift effort to Instagram Reels, Pinterest and US creators with gift codes, which depend less on upload location. Never sell or promote to friends, family or classmates (contest rule). Egyptian influencers can't help: their audience can't install a US-only app.

### 7.3 Day by day, Nov 17 → Dec 16

Owner: full time to Dec 4; ~15 minutes a day from Dec 5. Times are Cairo unless marked.

| Date | Build / App Store | Content | Money / ops |
|---|---|---|---|
| **Tue Nov 17** | Day 0 admin (§13.3). Featuring nomination (App Launch type). | Open @digi.pink, @digi.tips, founder accounts as Business; 15 min warm-up each. Claim Pinterest domain. | Spend ledger started at $0. Email organisers (§16 #2). |
| Wed Nov 18 | Camera, Skia develop, date stamp, first looks. | Founder post #1 ("building a party camera between exams. day 1"). Build a 20-track Commercial Music Library shortlist + Digi's 2-second shutter-pop sound. Disclosure on by default. | Search Console, Bing, IndexNow for digi.pink. |
| Thu Nov 19 | AI backend, moderation, consent, paywall. | First beat-drop videos from real dev-build output (hooks "no digicam at the party? no problem", "december 2026, but make it look like 2006"). | Create campaign links per account. |
| **Fri Nov 20** | **Submit v1.0** (US only, manual release). | 2 posts/account. | Order **one** Billo video ($99) if you accept the exception (§7.5). First 20 creator DMs (gift code + 30% rev-share). |
| Sat Nov 21 | Answer review same day. Apply to Snap Kit (Creative Kit) with a TestFlight demo; ask for URL attachments (pre-approved use only; may be refused). | IG Add Yours #1: "your best flash pic from last night 📸". Friendsgiving slideshows. | — |
| Sun Nov 22 | Build rolls + web guest page. | Repeat the best hook with new photos. | `digi.pink` home + `/photo-booth` live (§9). Week-0 numbers. |
| Mon Nov 23 | If approved: set release for Tue 9 a.m. ET (16:00 Cairo). Submit In-App Event 1, 3 CPPs, E3 treatments the same day. | — | `/photo-booth/templates` + Christmas templates; pin them. |
| **Tue Nov 24** | **Target launch.** E1 starts. Launch card on. | 3 posts per account in the first 6 hours; every slide ends on a stamped image. | Daily 15-min routine starts (§14.3). |
| Wed Nov 25 | — | Thanksgiving Eve reunion strips, scheduled for 6–9 p.m. ET. | `/party` page live. |
| **Thu Nov 26** | **Submit v1.1** (rolls, web join, Roll Pass, referral 5+5 if organisers OK it). | Thanksgiving: look drop only, no sales push. IG Add Yours #2: "friendsgiving table, digicam edition". | — |
| **Fri Nov 27** | Black Friday banner on the paywall. | Best content slot; strip-build videos. | 1 push to opted-in users. Watch refunds and AI spend. |
| Sat Nov 28 | Rules R1–R3 checks. | Friendsgiving reveals. | `/camera-filter`, `/looks` live. |
| Sun Nov 29 | — | "Thanksgiving recap strip". | Weekly review: saves per view ≥ 2%, revenue per 1,000 views. |
| **Mon Nov 30** | Decide E2 (≥250 US installs/day Nov 27–30?). | Last-day offer post. | Offer ends 23:59 PT. Verification screenshots. Decide whether to order 2 more Billo videos. |
| Tue Dec 1 | Launch offer off (R5). In-App Event "Holiday Party Digis" live (Dec 1–25). | **Batch 60 videos** (formats 1, 3, 5, 8) for Dec 5–24; schedule in TikTok Studio (videos only) and Meta Business Suite; Pinterest 3 pins/day to Dec 31. | Week-1 review (R6). |
| **Wed Dec 2** | **Submit v1.2:** all Christmas/NYE looks date-gated, 10 free looks, Snap share if approved. E2 starts if allowed. Add Canada storefront if the check is clean. | "Office Party Flash" teaser. | NYE templates, `/captions/photo-dump`, `/ideas/photo-booth-poses`. |
| Thu Dec 3 | Automation: canned replies, spend caps, uptime alert. | Look drop: Office Party Flash. | — |
| **Fri Dec 4** | **Feature freeze.** Verification pack done (§14.4). | Two host videos (6–8 consenting friends, event name in the stamp). "Holiday party roll" post. | Roll Pass banner (R11). |
| Sat Dec 5 | **Exams start.** Config only from here. | Scheduled posts run. | 15-min routine (8 min on exam days). |
| Sun Dec 6 | — | Scheduled. | — |
| Mon Dec 7 | — | Scheduled. | Weekly screenshots. Stop cash if <8 paying users trace to the Billo assets. |
| Tue Dec 8 | Ugly-sweater looks open (config). "Ugly Sweater Booth" event live (Dec 8–20). | Scheduled sweater carousels. | — |
| Wed Dec 9 | E1 stops enrolling. Leaderboard check (R17). | Peak window for a viral post: repost the best format 3× a day across accounts (R7). | — |
| **Thu Dec 10** | Last day to start anything new. Submit "New Year's Eve Digis" event + New Content featuring nomination. Last contest-critical update. | UK Christmas Jumper Day post. | — |
| Fri Dec 11 | — | Peak office-party Friday content. | Roll Pass banner. |
| Sat Dec 12 | E2 stops enrolling. NYE event promoted from today. | IG Add Yours: "christmas party, but make it 2006". | 1 push: "Party tonight? Start a roll." |
| **Sun Dec 13** | **15:00: rule R10** (switch to "Yearly, pay now" only if in the running). Read E1. | — | — |
| Mon Dec 14 | Submit the NYE update if one is needed. | Scheduled. | Weekly screenshots. |
| Tue Dec 15 | Nothing new. | Scheduled. | — |
| **Wed Dec 16** | **15:00 Cairo: contest ends.** Trial back on. | — | Screenshot RevenueCat, App Store Connect, TrustMRR, ad accounts at $0. Keep keys connected. |

### 7.4 Ads: yes or no

**No paid ads in the window.** Break-even CPI is $0.21 / $0.47 / $0.95 (Low / Base / High).

| Channel | Typical US cost | vs break-even | Traceable per buyer for the verification call? | Verdict |
|---|---|---|---|---|
| Apple Ads | CPI $2.79 (P&V median) | 3–13× too expensive | Yes (AdServices) | Only if R12 fires: D7 cash per US install ≥ $2.50 → $100 exact-match test, max $0.80 per tap, $10/day, kill if a payer costs > $25. Otherwise start Dec 17 with the Christmas strip CPP |
| Meta | Cost per paying user $64.93; US D7 ROAS 33% | Loses ~$0.67 per $1 in week 1 | Modelled only | No (until after Dec 16; test NL/UK first, 2027) |
| TikTok ads / Promote / Spark | Min $50/day campaign | Same problem | Modelled only | No. Never tap "Promote" or IG "Boost": both are ads |
| Clippers (Content Rewards) | ~$1.09 per 1,000 views + 10% fee | Profitable only if revenue per 1,000 views ≥ ~$1.20 | Partly (codes) | No in the window |
| Flat-fee influencers | $134–417 per post | A $150 post needs ~11 paying users at Base | Codes | No; rev-share only |

**After Dec 16:** judge paid on 12-month value; target cost per payer ≤ $30 on yearly-led; scale to 5–7% of revenue once MRR passes $10K. ([ch. 16](16-paid-ads.md))

### 7.5 Budget

| Line | When | Cash | Counts as marketing spend? | Kill rule |
|---|---|---|---|---|
| Own accounts, Pinterest, Snap Lens, Add Yours chains | from Nov 17 | $0 | No | — |
| Gift codes to ~15 creators (offer codes) | Nov 20 – Dec 4 | $0 cash (log the retail value as non-cash) | Ask organisers; log it anyway | Drop creators with no post in 10 days |
| Rev-share: 30% of first payments by code | paid ~Jan 5 | variable (always < revenue) | Yes | — |
| Billo UGC video #1 (full rights, re-cut into 5 hooks) | order Nov 20 | **$99** | Yes | If all 5 cuts fall below the account median, stop |
| Billo videos #2–3 | order Nov 30, only if #1's best cut beat the median | $198 | Yes | Stop all cash if < 8 traced payers by Dec 7 |
| Apple Ads | only if R12 | $0 (max $100) | Yes | Payer cost > $25 |
| Paid editor / VA | — | $0 | Yes (VA counts per the rules) | — |
| **Total cash** | | **$0 default · $99 likely · $297 max (+$100 if R12)** | | |

---

## 8. ASO: the chosen metadata

**Name:** `Digi: Photo Booth & Digicam` (27) · **Subtitle:** `Y2K Flash Camera, Party Strips` (30) · **Keywords** (98 bytes): `digital,film,disposable,retro,vintage,ccd,christmas,photobooth,group,friends,dump,2000s,selfie,nye` · **Category:** Photo & Video. ([ch. 12](12-aso.md), Option A, 8.5/10)

**Promotional text** (not indexed; change weekly): "Your party pics, but 2004. Digicam flash with an orange date stamp, AI party looks for your whole group, and 4-pose booth strips. New holiday looks every week."

**Description, first lines** (AI search quotes these, so say plainly what is free and what is paid):
> Digi turns any night out into 2004: hard flash, soft grain and an orange date stamp burned into the corner.
> The camera and every film look are free, with no ads. AI looks ✦ use digis: get them with Digi Plus or a Party Pack.
> Make 4-pose booth strips and add AI party looks that keep everyone's real face.

Add the roll line ("…wake up to everyone's photos at 10 a.m.") with v1.1, not before.

**Screenshot captions** (real build output; released adults; no drinks, prices, "Free" or brands): 1 **Your party pics, but 2004** (group of 4, flash, stamp) · 2 **One photo. Four poses.** (strip) · 3 **Everyone's real face, party-ready** (AI before/after, labelled) · 4 **Free digicam flash, right on your phone** (camera) · 5 **Christmas, NYE and new looks every week** · 6 **Share to Stories in one tap** · 7 **Made on your phone. Nothing posted unless you share.** · with v1.1, insert **Shoot all night. It develops at 10 AM.** (roll) as #5.

**Icon:** hot pink with orange 7-segment date digits; no lens. Two alternate icons in the binary for a later test.

**In-App Events** (no prices; real new looks; deep link to `digi.pink/e/…`):

| Event (≤30) | Badge | Dates | Short (≤50) |
|---|---|---|---|
| Holiday Party Digis | New Season | Dec 1–25 (submit when v1 is approved) | Flash looks for office and friend parties |
| Ugly Sweater Booth | Challenge | Dec 8–20 | A 4-pose sweater strip for your whole crew |
| New Year's Eve Digis | Special Event | Dec 26–Jan 2 (promote from Dec 12; submit by Dec 10) | Countdown flash looks and a midnight strip |

Only 11 of 143 niche app pages had a live event; apps with 0 ratings got theirs approved (V).

**Custom Product Pages:** Christmas party, Photo strip, Digicam flash at launch; Group roll with v1.1; NYE ~Dec 20. Every social link goes `digi.pink/go/<placement>` → matching CPP with a campaign token.

**Ratings:** Apple's prompt only, after the 3rd saved/shared photo, "Save all" on a roll, or a shared AI result; never after a failure, purchase or paywall. Target **50+ US ratings at 4.6★+ by Dec 5**; reply to every 1–3★ within 24 h. **Rotation:** add "xmas" ~Dec 10; in January swap "christmas, nye" for "galentines, formal". Re-scan rankings Dec 1 and Dec 10.

---

## 9. SEO and web plan

**Expectation:** near-zero Google traffic before Dec 16 (E, low; 0–1,500 visits). In the window, the web earns through share pages, Pinterest, brand search, the `/party` landing page and `/go/` redirects. SEO pays after the contest. ([ch. 13](13-seo-web.md))

**Where the demand is (US, monthly, med):** online photo booth 2,900 · photo booth template 2,400 · photo strip template 1,900 · vintage filter camera 2,900 · photo dump captions 6,600 · photo booth poses 2,400. "Digicam filter" and "photo strip maker" get only ~140 each.

| By | Page | Notes |
|---|---|---|
| Nov 18 | `/privacy`, `/terms`, `/biometric`, `/remove`, `/help` | Required for App Review and the 48-hour removal duty. Privacy names OpenRouter (USA) and ByteDance/BytePlus (Singapore). |
| Nov 22 | `/` and `/photo-booth` | Free webcam booth, vintage by default, 3–4 shots, un-mirror toggle, 10 frames incl. Christmas and NYE, 4×6 print sheet, **nothing uploaded**, app button via `/go/web-booth`. |
| Nov 24 | `/photo-booth/templates`, `/photo-booth/templates/christmas` | 3 free transparent PNG strip frames each (2×6, 4×6). Pin them the same day. |
| Nov 26 | `/party` | Answers "disposable camera app for parties" plainly. Landing page for bio links. |
| Nov 28 | `/camera-filter`, `/looks`, `/looks/2000s-party-flash` | Date-stamp switch; ≥3 AI before/afters, labelled. |
| Dec 2–4 | NYE templates, `/captions/photo-dump`, `/ideas/photo-booth-poses`, `/guides/digicam-look-on-iphone`, `/guides/photo-strip-size` | Then schedule `/best/disposable-camera-apps-for-parties`. |
| v1.1 | `/r/<code>` guest pages, share pages | `noindex`. |
| After Dec 16 | Galentine's templates (by Jan 10), `/polaroid-frame`, Arabic `/ar` pages for the Gulf, prom templates (by Feb 15; "photo strip" peaks mid-April) | — |

**Pinterest:** 8 keyword-named boards; 3 pins a day through Dec 31; ~75% templates, poses and layouts, ~25% AI before/afters (Pinterest labels AI pins). **Free links:** AlternativeTo, Product Hunt, Peerlist, and "free online photo booth" list owners. No paid links. **Never build:** city pages, "[camera brand] filter" pages, auto-translated copies, or a prompt page for a trend that has already peaked.

---

## 10. The 25 best secrets and tricks, ranked

Ranked by effect on contest profit × cheapness for a solo founder × low risk (E, med).

| # | Trick | Why | Ship | Ch. |
|---|---|---|---|---|
| 1 | `digi.pink` on every free shared image, in the stamp's orange font | Instagram's Story API carries no link; the pixels are the ad | v1.0 | [17](17-viral-loops-tricks.md) |
| 2 | "Photo Booth" in the app name | #1 app for the term has 82 ratings | v1.0 | [12](12-aso.md) |
| 3 | Paywall right after the user's **own** first AI result, ✕ visible at 0 s | Onboarding paywalls convert 0.85% of views vs 0.23% later | v1.0 | [10](10-onboarding-viral-consumer.md) |
| 4 | Yearly pre-selected, then the Dec 13 trial switch | Yearly-led apps earn ~2× by day 14; late trials pay too late | v1.0 | [06](06-monetization-packs.md) |
| 5 | One App Store campaign link per account, via `digi.pink/go/` to a CPP | Verification-call evidence and better conversion | Day 0 | [26](26-launch-metrics-experiment-plan.md) |
| 6 | In-App Event the day v1 is approved | Free search placement; few rivals bother | ~Nov 23 | [12](12-aso.md) |
| 7 | $29.99 launch offer at the **next open**, separate product | +20% payers in BF week; avoids instant-decline scrutiny | v1.0 | [26](26-launch-metrics-experiment-plan.md) |
| 8 | Beat-drop before→after video as the daily workhorse | All 11 sampled 1M+ niche posts were short videos | Nov 19 | [14](14-tiktok-organic.md) |
| 9 | Share row: IG Story · TikTok · Snap · Messages · Save, with a ready 9:16 card | 2–3 fewer taps per share | v1.0 | [17](17-viral-loops-tricks.md) |
| 10 | Rating prompt after the 3rd save/share or "Save all" | 50 good ratings can rank "photo booth" | v1.0 | [12](12-aso.md) |
| 11 | Auto-refund failed jobs; "Not my face" free redo | Failures and face changes = 33% of AI-app 1–2★ | v1.0 | [19](19-review-mining.md) |
| 12 | Reminder at trial start + 40 h + banner; "You won't be charged until {date}" | Surprise charges are the 1.39★ theme | v1.0 | [25](25-refunds-support-review-ops.md) |
| 13 | RevenueCat Refund Control with consent; Family Sharing off | Refunds −30% (E) | Nov 21 | [25](25-refunds-support-review-ops.md) |
| 14 | Out-of-digis sheet shows the Party Pack first | Impulse buy; ~2% refunds vs 6.4% for trials | v1.0 | [06](06-monetization-packs.md) |
| 15 | Web roll: no download for guests, 24 shots each, one 10 a.m. reveal | Guests meet the look; some become hosts | v1.1 | [04](04-competitors-booth-social.md) |
| 16 | Thursday look drops; best posts Fri–Sat; Roll Pass pushes on Fridays | Boothie earns +53% on weekends | Nov 26 | [23](23-retention-season-contest.md) |
| 17 | Send-bait carousels ("send this to whoever's hosting NYE") | Sends weigh most for non-followers | Nov 18 | [15](15-instagram-snap-influencers.md) |
| 18 | Instagram Add Yours chains (Nov 21, Nov 26, Dec 12, Dec 31) | Free, participatory | dates | [15](15-instagram-snap-influencers.md) |
| 19 | Creators: own gift code + 30% rev-share, never flat fees, never buying | Can't lose money; traceable; avoids the cheating rule | Nov 20 | [15](15-instagram-snap-influencers.md) |
| 20 | "DM HOST" Host Pack: 25 free digis + a printable QR card | Seeds real parties at $0 cash | Nov 26 | [15](15-instagram-snap-influencers.md) |
| 21 | Free web photo booth at `/photo-booth`, nothing uploaded | ~7,000 US searches a month in its family | Nov 22 | [13](13-seo-web.md) |
| 22 | App Store description written as the answer AI search quotes | 17 of 18 links for a "best app" query were App Store pages | v1.0 | [13](13-seo-web.md) |
| 23 | Referral: 5 + 5 digis when the friend's first AI digi succeeds, capped | ~$0.25 of AI; not cash (confirm with organisers) | v1.1 | [17](17-viral-loops-tricks.md) |
| 24 | Free Snapchat Lens "digi cam '06" | $0 side channel; Egypt eligible for Lens rewards | Nov 28 | [15](15-instagram-snap-influencers.md) |
| 25 | 4 holiday looks ready in remote config; a new look within 7–10 days of any spike | Spikes halve in 3–5 weeks; weekly themes held Photo Lab at 40% | Dec 2 | [05](05-mrr-peaks.md) |

**Clever but against the rules:** company-run personas, VPN/fake location, invite gates, contact uploads, fake "someone viewed" pushes, rating gating, fake timers or strike-throughs, trial toggles, a delayed ✕, and asking anyone to "support my entry".

---

## 11. Wording kit highlights

Full EN/AR deck: [ch. 18](18-wording-copy.md). **Voice:** a friend with a good camera who tells you the price before you ask.

**Glossary:** *Digi* = the app · *digi* = one AI credit · *shots* = photos in a roll or gallery (never "digis") · *AI look ✦* = a server look that uses digis · *look* = a free on-device style · *strip* = 4 frames · *roll* = a shared camera that develops later · *Digi Plus* = the subscription. ✦ means AI, nothing else.

**Main paywall (Variant A):** "Keep the flash going" · "60 AI digis every month" (weekly: "30 AI digis every week") · "Every look, plus new holiday drops" · "No watermark · Rolls up to 30 friends" · **$39.99 / year** · Best value · 3 days free · *$0.77 a week* (small, grey) · timeline Today / {day 2} "We remind you." / {day 3} "$39.99 for the year, unless you cancel before." · CTA **"Start my 3 free days"** · "Then $39.99/year. You won't be charged until {date}. Cancel anytime in Settings." · "Just tonight? Party Pack · 25 digis · $5.99 →" · Restore · Terms · Privacy · Redeem code. **Variant B** "Party tonight?" (packs first) for out-of-digis and weekend evenings. **Variant C** "One price, every party" (no trial) only if R10 fires.

**AI consent** (first AI tap; unticked; button disabled until ticked): "To make this look, we send this one photo through OpenRouter (USA) to ByteDance's Seedream, run by BytePlus (Singapore). It's deleted from their servers and ours within {24 hours}. It's not used to train AI. ☐ I'm 18+ and everyone in this photo said yes." Confirm names and retention times in the backend first.

**Stamps:** `11 17 '26` (bottom right) · `digi.pink` (bottom left, free shares) · story frame `11 17 '26 · digi.pink` · AI shares `AI look ✦ · digi.pink`. **Invite** (once web join works): "I started a digi roll for tonight 📸 Tap to add your pics, no app needed: {link} · it develops tomorrow at 10". **Trial started:** "You're in. 3 free days start now. We'll remind you on {date}, the day before you're charged." **Failure:** "Didn't work. Your digi is back."

**Hooks to test first:** "stop posting your christmas party pics like this" · "posted / deleted" · "no digicam at the party? no problem" · "december 2026, but make it look like 2006" · "rating every party camera look out of 10 (honestly)" · "med student. building a party camera between exams. day 1".

**Never write:** unlimited · "free" alone beside a trial · magic, perfect, studio-quality · "filter" for AI · "looks exactly like you" · #1, best, viral · G7X, Canon, Kodak, Polaroid, Fuji, Instax · competitor names in metadata · "limited time" without a real end · confirmshaming · bestie, slay, it's giving · credits, coins, tokens · drink words, "teen", "prom". Search every strings file for these before each submission.

---

## 12. UI summary and the next design round

**Keep:** the camera body, text tabs, big viewfinder and roll pill (the owner's favourite). **Fix:** the flow shows 11 screens before the paywall and never lets the user take a free photo first; the paywall's biggest price is "$0.77" (16 px bold) while "$39.99/year" is 13 px grey; three onboarding screens break Apple or FTC rules. ([ch. 24](24-ui-design.md))

**Flow:** Welcome → Pick your camera (demo shutter on a sample party photo) → Occasion (1 tap) → How did you find Digi (1 tap, saved to RevenueCat) → camera (system alert fires directly) → first real shot develops → "✦ Re-light it with AI · free" → Age → Consent → Developing (with a "Ping me when it's ready" toggle) → Result → paywall once, ✕ at 0 s. About 7 taps and 25–35 s to the first real digi.

**P0, before the first review build:**
1. Paywall: $39.99/year biggest; "Best value" instead of "SAVE 89%"; 60/month and 30/week; "Rolls up to 30 friends"; dated timeline; price-and-date line under the CTA.
2. Consent: unticked box, disabled button, named AI partner and deletion time, "Free digi 1 of 3".
3. Age: blank and neutral, at the first AI tap; under-18 block screen.
4. Permission: camera only, one "Continue"; a camera-denied state ("Pick a photo" / "Use a sample").
5. Drop the standalone Notify screen; put the "Ping me" toggle on Developing.
6. Camera: flip button, digis counter under the shutter, "Just me ⌄ / Sara's birthday · 18 left" pill, look swatch, "✦ AI" as the last tab, Settings top-left.
7. Looks: "PRO" → "✦ 1" (studio looks "✦ 2").
8. Result: "Flash Re-light ✦" (never a free look's name), Before chip, Share primary, "Make it a strip · ✦ 2".
9. Money set: Out of digis, Party Pack, Trial started, success and purchase states, reminder banner.
10. Settings + Plus hub ("43 digis left this month · refills Dec 1"), Restore, Help with an email.
11. Errors: offline, AI failed (auto-refund), busy, moderation block, no faces, crowd, small photo, save denied.

**P1, before Dec 4:** roll screens (start, Sign in with Apple, invite QR, header, hold to develop, Report / Remove / Block, Delete account), guest web join, booth frames, story templates, gallery with shooter names ("shots", never "digis"), locked-look and Roll Pass sheets, launch card. **P2, after Dec 16:** Live Activity, widget, App Clip, Arabic RTL.

**Visual rules:** #1A0010 labels on pink #FF4FA3 (6.56:1); never white on pink at body size (3.04:1), grey #55555F on the dark background (2.67:1) or pink text on the camera body (1.86:1); body copy 16 pt; every screen holds a real photo or a physical object. Test on an iPhone SE and a Pro Max with Larger Text and Reduce Motion on.

---

## 13. Build plan and tech / AI cost

### 13.1 Stack ([ch. 21](21-tech-ai-cost.md))

Expo (SDK 58, TypeScript) · `expo-camera` + Skia "develop" pass with a fake-live preview overlay (VisionCamera 5 waits for v1.1) · Supabase Pro ($25/month: anonymous auth, Postgres + RLS, Storage, Edge Functions, `pg_cron` for roll develop times, Realtime) · RevenueCat with In-App Currency `DIGI` as the only balance (idempotent spend and refund keyed on the job ID) · Expo push (free) · OpenRouter **`/api/v1/images` only**, with `resolution` set (the chat endpoint billed $0.043 instead of $0.028) · Sentry + PostHog without photo data.

**AI routing:** Seedream 5.0 Flash = default for groups up to 6 and all strips (one call returns a 4-frame 1152×2048 strip in ~13.6 s for $0.018; re-compose it in Skia with the stamp) · Seedream 5.5 = studio looks for 1–3 people (✦2) · fallbacks FLUX.3 Klein → MAI Flash · 7+ people = free looks only · never Seedream 5.0 Pro (166 s), Krea K3, MiniMax H3 or Grok. **Safety:** input Llama Guard 4 + Nova Lite JSON verdict (people count, possibly under 18, nudity) in parallel (~$0.0003, ~2 s); output Llama Guard 4; block possible minors with an automatic refund; 3 strikes = ban; delete inputs after each job. OpenRouter marks these image models unmoderated, so Digi's checks are the only filter.

### 13.2 Cost

| Item | Cost |
|---|---|
| Per kept digi (incl. 5.5% fee, screening, 25% redos) | Flash $0.0244 · Seedream 5.5 $0.0376 · Klein $0.0125 |
| AI per 1,000 installs in the window (base) | ~$95 Flash-led (~$131 if 5.5-led); about half is the 3 free digis |
| AI at 10,000 installs | ~$954 vs ~$9,020 net revenue at 30% (11%) |
| Fixed monthly | Supabase $25, Expo Starter $19, Cloudflare $0–5, RevenueCat $0 under $2.5K MTR, Apple $99/yr |
| OpenRouter key | "digi-prod", $100 credit limit, stored only as a Supabase secret; hourly spend alarm |

### 13.3 Day-by-day (corrected weekdays)

| Day | Date | Work | Done when |
|---|---|---|---|
| D0 | **Tue Nov 17** | Paid Apps agreement + tax + bank (start first), Small Business Program, app record (`pink.digi.app`), all products (§5.1) incl. the launch product and the $49.99 arm, RevenueCat project + `DIGI` currency, Supabase Pro (anonymous sign-in, Turnstile), OpenRouter key, Meta developer app (IG Stories App ID), Expo account, digi.pink on Cloudflare, @digi.pink handles | All accounts exist; nothing pasted in chat |
| D1 | Wed Nov 18 | Camera home, flash, front/back, ultra-wide, shutter haptic; Skia develop (LUT + grain + vignette + stamp); save add-only; picker import; 6 looks | Night flash photo → orange-dated digicam photo in Photos in < 2 s |
| D2 | Thu Nov 19 | Migrations + RLS; `generate` Edge Function (screen → OpenRouter → check → Realtime → refund on failure → cost log); paywall; IAC spend/refund; 3 free digis with App Attest; consent; result screen | Sandbox: buy pack → 25 → 2 looks + 1 strip → 21 → forced failure refunds |
| D3 | **Fri Nov 20** | Onboarding (§12), strip mode, share row + IG Stories, Settings (Restore, delete my data, privacy, contact, report), legal pages, screenshots, 20-photo face bake-off (~$3), smoke test on 2 phones → **submit** | v1.0 in review |
| D4–7 | Nov 21–24 | Fix rejections same day; rolls + `pg_cron` develop + web guest page; Refund Control set-up; In-App Event + CPPs on approval | Two phones join one roll and both get the 10 a.m. push |
| — | Thu Nov 26 | Submit v1.1 (rolls, Roll Pass, referral) | — |
| — | Wed Dec 2 | Submit v1.2 (holiday looks date-gated, 10 free looks, Snap share if approved) | Last build before exams |

**Cut order if late:** rolls (already v1.1) → light leaks and fringe → custom paywall (use RevenueCat's template, with the same copy) → native IG share (share sheet only). **Never cut:** age gate, consent, moderation, auto-refunds, delete-my-data, Restore.

**v2 (January):** App Clip for guests, Live Activity countdown (start at "End party", ≤ 8 h before the reveal; `expo-widgets` is stable since SDK 56), widget, Android.

---

## 14. Legal and App Store checklist

### 14.1 Before pressing Submit ([ch. 22](22-legal-appstore.md) §10)

- [ ] Latest Developer Program License Agreement accepted; Paid Apps active; Small Business Program submitted.
- [ ] Name/subtitle/keywords without brands, "#1", "best", "free" or competitor names.
- [ ] Screenshots: app in use; faces are the owner, released adults or AI-made; no drinks; 4+-safe.
- [ ] Description says what costs money ("The camera and film looks are free. AI looks use digis: Digi Plus or a Party Pack.") and links Terms; Privacy and Support URLs live.
- [ ] **Availability: US only.** Category Photo & Video.
- [ ] Age questionnaire incl. the new Shared Location and Dating questions (required from Nov 16, 2026); Age Assurance = Yes; UGC = Yes; **override to 18+** to match the terms.
- [ ] Privacy label matches every SDK; Tracking = None; no ad SDK in the binary.
- [ ] Consent screen before any upload; **no network call before the user agrees**; nothing pre-ticked; Settings › Privacy has an AI toggle and "Delete my photos and data"; EXIF GPS stripped.
- [ ] Input and output moderation live; likely-minor photos blocked with a refund; no free-text prompts anywhere.
- [ ] Any Seedream "AI generated" mark left visible (BytePlus terms forbid covering AI labels); test today whether outputs carry one and move the stamp if they do.
- [ ] Report on every roll photo and share page; Remove and block; zero-tolerance terms accepted before the first roll post; `digi.pink/remove` live with a written 48-hour process; CSAM procedure written; NCMEC registration started.
- [ ] Paywall: billed price biggest; trial length and price stated; no toggle; ✕ visible; Terms · Privacy · Restore; all products attached to the version.
- [ ] Sandbox purchase, restore and refund tested on a real iPhone; camera denied, offline and slow network tested; server keys and credit limits live for review; no placeholders, no hidden features (2.5.19).
- [ ] Review notes from ch. 22 §10H, edited: "Digi Plus", "10 a.m.", "age check at the first AI look or roll".

### 14.2 Refund defences (by Mon Nov 23, [ch. 25](25-refunds-support-review-ops.md))

Server notifications v2 → RevenueCat; In-App Purchase key uploaded; Terms "Refunds" section + Settings toggle "Help Apple review refund requests"; Refund Control: *Do not respond* (no consent) / *Prefer no refund* (≥2 prior Apple refunds) / *Send consumption data only* (default); Family Sharing **off** on both subscriptions (it can't be turned off later); webhook → `refund_log`; Settings › Subscription (next charge, digis left, Manage, Restore); Help › "I was charged and didn't mean to". Expected refund cost per 1,000 installs: ~$17 with all of this vs ~$36 with nothing vs ~$62 with surprise trials and no re-credits (E, med).

### 14.3 The daily 15 minutes (8:30 p.m. Cairo)

Removal requests first (nothing older than 24 h; hide first, review second) → money check (refunds, reasons) → AI health (zero un-credited failures, fail rate < 5%) → inbox (billing and AI tickets first) → reply to new 1–3★ reviews → one log line. On exam days: steps 1, 2 and 4 only.

### 14.4 Verification pack (by Fri Dec 4; refresh every Monday and at 15:00 Dec 16)

App Store Connect Acquisition by source and campaign; Sales and Trends by day and country; RevenueCat transactions and refunds; TrustMRR with no gap in the connection; Apple Ads, Meta and TikTok Ads at $0; the spend ledger (cash and non-cash); proof of a fresh start (rules acceptance time, first commit, app record date, domain receipt); a folder of every post with date and link.

---

## 15. Risks and how to handle each

| Risk | Likelihood | Impact | Handling |
|---|---|---|---|
| **Eligibility: the Nov 13–14 mockups and AI look tests predate the rules** | Med | Disqualification | Disclose and ask the organisers in writing today; rebuild everything fresh in a new repo; keep the reply |
| App Review rejection or a slow first review | Med–high | ~$210 of contest cash per day (base) | Submit Nov 20; ship small; test Performance items (#1 rejection cause); reply the same day; fallback Package C (packs only) |
| Apple's cut counted at 30% all window | High | −18% profit vs 15% | Apply to SBP today; plan at 30% |
| Revenue per 1,000 views in the red (< $0.40) | Med | Base out of reach | Rule R6: keep the 2 best formats by installs per 1,000 views; shift to IG/Pinterest/creators |
| TikTok reach stays in Egypt/Gulf | Med (E) | Views that can't install | Check viewers by country on day 3; no VPN; lean on IG, Pinterest and US creators |
| Surprise-charge refunds and 1★ reviews | Med | Profit and rank | Dated paywall, +40 h reminder, banner, Refund Control, same-day replies |
| AI changes faces or fails | Med | 1.72★ reviews, refunds | 20-photo bake-off; per-look people caps; auto-refund; "Not my face" redo |
| Seedream outputs carry an "AI generated" mark | Unknown | Clash with the stamp | Test today; never crop it; move the stamp |
| Minors or intimate imagery uploaded | Low–med | Legal (TAKE IT DOWN: up to $53,088 per violation), store removal | 18+ rating, age check, input/output screening, 48-hour removal, CSAM procedure |
| Credit abuse (reinstall farming, buy-spend-refund) | Med | AI cost | App Attest; allowance first; refund counts per account; R9 cut of free digis for new devices |
| A trend spike after Dec 16 | Med | Little contest value | Push hardest Dec 4–10 |
| Free platforms copy the roll (Apple, Google, Instagram) | High | Rolls lose novelty | Sell the look, the AI strip and the reveal; never "photos in one place" |
| WayShot or Dazz ship a party/strip camera | Med | Search and creator share | Weekly competitor watch (Mondays); lean on rolls and honesty within 48 h |
| Owner burnout in exams | High | Missed replies, broken config | Feature freeze Dec 4; config-only rules; 15-minute routine; auto-reply |
| Trademark ("DIGI" crowded: 4,994 USPTO records) | Low | Forced rename | Use "Digi:" + descriptor; no DigiBooth/DigiFilm; one lawyer hour on filing DIGI.PINK after launch |
| Egypt data law (enforceable ~Nov 1, 2026) | Low for users, med for owner | Owner liability | No Egypt storefront; keep user data out of Egypt; ask a lawyer before handling it there |

---

## 16. Decisions the owner must make now

| # | Decision | Recommendation |
|---|---|---|
| 1 | Apply to the Small Business Program today? | **Yes, now.** Worth +$1,500 per $10K gross for the days it applies. |
| 2 | Email the organisers today? | **Yes, one email, five questions:** (a) the Nov 13–14 mockups/look tests and eligibility; (b) does Apple's commission count as a "payment fee"; (c) are gift codes to creators and in-app digi referral rewards "paid marketing"; (d) does Apple's $100 Ads credit count; (e) is a paid editor or VA marketing spend (the rules suggest yes). |
| 3 | Ship v1.0 without rolls by Nov 20? | **Yes.** Rolls in v1.1 on Nov 26. |
| 4 | Storefronts at launch? | **US only.** Canada after a 1-hour check (~Dec 2). Australia, UK, EU, Gulf after the contest. Egypt not before a data-law check. |
| 5 | App name? | **"Digi: Photo Booth & Digicam"** with subtitle "Y2K Flash Camera, Party Strips". |
| 6 | Prices? | Yearly $39.99 + 3-day trial (pre-selected), weekly $6.99, Party Pack $5.99, Big Night $11.99, Roll Pass $4.99, Big Roll $14.99, launch first year $29.99 to Nov 30. |
| 7 | AI allowance and routing? | 60 digis a month (yearly), 30 a week (weekly), trial 10, free 3 once. Flash looks 1 digi; studio looks and strips 2 digis. |
| 8 | Marketing cash? | **$0 default.** Optional $99 Billo video on Nov 20; $297 hard cap. No boosts. Creators on gift codes + 30% rev-share. |
| 9 | Web checkout (US link-out, ~$10.54 more per yearly)? | **Not in the window.** It adds a web business (tracker), build time and friction. Revisit in January. |
| 10 | Reveal time? | **10:00 AM host time**, editable; free host "develop now". |
| 11 | Watermark policy? | Date stamp free to edit/remove; small `digi.pink` on free shares; Plus removes it; never on guests' originals; stated on day one. |
| 12 | Age rating? | **18+ override** matching the terms; age check at the first AI look or roll. |
| 13 | Trial switch on Dec 13? | Only if Digi is in the top 10 or within 3× of 3rd place (R10). Otherwise keep the trial. |
| 14 | Price test $39.99 vs $49.99? | Only if Nov 27–30 averages ≥250 US installs a day; otherwise after Dec 16. |
| 15 | Arabic account and Arabic UI? | Pause @digi.arabic; Arabic UI after Dec 16 for a Gulf test brief (decide by Jan 15). |
| 16 | Keep going after the contest? | Decide mid-January on January cohorts: keep going if D7 ≥ 8%, second roll within 30 days ≥ 20%, weekly first renewal ≥ 55% and refunds < 4%. If two or more miss, cut rolls back to looks + ASO, or move on. |

---

## 17. Chapter index

| Ch. | One line |
|---|---|
| [01](01-market-trend.md) | Market: digicam search still rising but slowing; strips grow fastest; US ≈ 80% of English demand. |
| [02](02-competitors-retro-cams.md) | Retro cameras: Dazz, WayShot, Kroma and 50+ apps; what reviews punish. |
| [03](03-competitors-ai-photo.md) | AI photo apps: utility AI earns, trends fade in weeks, face changes and billing drive 1★. |
| [04](04-competitors-booth-social.md) | Event and friend cameras: price ladders, low guest participation, Apple's free albums. |
| [05](05-mrr-peaks.md) | How hits rise and decay; Digi's bear/base/bull curves to March 2027. |
| [06](06-monetization-packs.md) | Package A, AI cost, allowances, regional prices, Black Friday data. |
| [07](07-paywalls-mobbin-photo.md) | 23 photo paywalls on Mobbin: templates to copy, patterns to avoid. |
| [08](08-paywalls-best-converting.md) | 14 top paywalls: dated timelines, toggle and close-button lessons. |
| [09](09-onboarding-mobbin-photo.md) | Photo onboarding: shoot first, account last, HIG pre-alert rules. |
| [10](10-onboarding-viral-consumer.md) | Viral onboarding: wow first, price second, attribution question. |
| [11](11-ui-patterns-mobbin.md) | Camera layout, look naming, AI waiting screens, reveal patterns. |
| [12](12-aso.md) | ASO: "photo booth" is open; metadata, events, CPPs, Apple Ads maths. |
| [13](13-seo-web.md) | SEO: real volumes, free web booth, site map, Pinterest. |
| [14](14-tiktok-organic.md) | TikTok: formats that hit 1M+, hooks, disclosure, restrictions. |
| [15](15-instagram-snap-influencers.md) | Instagram, Snap, creators: where buyers are, costs, Host Pack. |
| [16](16-paid-ads.md) | Paid ads: every channel loses money in the window. |
| [17](17-viral-loops-tricks.md) | 52 growth tricks, Apple promotion deadlines, platform limits. |
| [18](18-wording-copy.md) | Copy that converts vs copy that reads as a scam; EN/AR deck; banned list. |
| [19](19-review-mining.md) | 3,708 reviews coded; 15 product decisions; fair-price quotes. |
| [20](20-audience-icp.md) | Personas; Boothie's Turkish proof; Gulf and Egypt verdicts. |
| [21](21-tech-ai-cost.md) | Stack, model tests, routing, moderation, costs, build plan. |
| [22](22-legal-appstore.md) | Guidelines, consent, 18+, TAKE IT DOWN, trademark, review timing. |
| [23](23-retention-season-contest.md) | Contest rules, verification call, season calendar, exit comps. |
| [24](24-ui-design.md) | Critique of the 18 current screens; missing screens; fix list. |
| [25](25-refunds-support-review-ops.md) | Apple refunds, Refund Control, support macros, daily routine. |
| [26](26-launch-metrics-experiment-plan.md) | Reconciled funnel, three experiments, 18 decision rules, dashboard. |

---

## What this means for Digi (the next 72 hours)

1. **Tue Nov 17:** Small Business Program, Paid Apps + tax + bank, the 6 v1.0 products (create Roll Pass and Big Roll too, but attach them to v1.1), RevenueCat, Supabase, OpenRouter key ($100 limit), Meta App ID. Send the organiser email (§16 #2). Screenshot the rules acceptance time.
2. **Tue Nov 17:** test whether Seedream outputs carry a visible AI mark, and whether `data_collection: "deny"` still routes to Seed. Write the answers into the consent and privacy copy.
3. **Wed Nov 18:** camera, Skia develop, stamp (`11 17 '26` + `digi.pink`), 6 looks. Open three branded accounts with disclosure on. First founder post.
4. **Thu Nov 19:** AI backend with moderation and auto-refunds, consent, paywall (§11 copy), 3 free digis.
5. **Fri Nov 20:** onboarding, strip, share row, Settings, legal pages, screenshots, the 20-photo face test, then **submit v1.0, US only, manual release**.
6. Update every string, hook and push that says "9 a.m." to **10 AM**, every "Digi Pro" to **Digi Plus**, and every reminder to **trial start + 40 h**.

## Sources

The 26 chapters in this folder carry the full source lists with dates. Key primary sources used above:
- RevenueCat, State of Subscription Apps 2026: https://www.revenuecat.com/state-of-subscription-apps/
- RevenueCat, holiday offers study (Oct 27, 2026): https://www.revenuecat.com/blog/growth/holiday-offers-subscription-apps
- RevenueCat, free-trial toggle rejections (Feb 9, 2026; upd. Apr 23): https://www.revenuecat.com/blog/growth/rip-toggle-paywall
- RevenueCat, Refund Control docs: https://www.revenuecat.com/docs/customers/refund-control
- Adapty, Photo & Video benchmarks (Jun 29, 2026): https://adapty.io/blog/photo-video-app-subscription-benchmarks/
- Adapty, State of Paywalls 2026: https://adapty.io/state-of-paywalls/report/
- Adapty, Meta Ads benchmarks (Jul–Sep 2026): https://adapty.io/meta-ads-benchmarks/
- AppTweak, Apple Ads benchmarks (2025 data): https://www.apptweak.com/en/aso-blog/apple-ads-benchmarks
- Apple App Review Guidelines (Oct 16, 2026): https://developer.apple.com/app-store/review/guidelines/
- Apple Small Business Program: https://developer.apple.com/app-store/small-business-program/
- Apple In-App Events: https://developer.apple.com/app-store/in-app-events/
- Apple Custom Product Pages: https://developer.apple.com/app-store/custom-product-pages/
- Apple App Store Transparency Report 2025: https://www.apple.com/legal/app-store/transparency/2025/
- Apple App Review times: https://developer.apple.com/distribute/app-review/
- Apple ActivityKit (Live Activity limits): https://developer.apple.com/documentation/activitykit/displaying-live-data-with-live-activities
- OpenRouter image models API (Nov 17, 2026): https://openrouter.ai/api/v1/images/models
- TrustMRR, Boothie (Nov 17, 2026): https://trustmrr.com/startup/boothie.md
- Pew Research, social media fact sheet (Oct 19, 2026): https://www.pewresearch.org/internet/fact-sheet/social-media/
- Circana, point-and-shoot sales (Feb 25, 2026): https://www.circana.com/post/wired-headphones-growth-is-a-throwback-to-2016
- CIPA statistics: https://www.cipa.jp/e/stats/dc.html
- StatCounter, Egypt mobile OS (Oct 2026): https://gs.statcounter.com/os-market-share/mobile/egypt
- Appfigures, Remini in the Ghibli wave (Apr 4, 2025): https://appfigures.com/resources/insights/20250404/4-remini-rides-the-ai-cartoon-wave-and-the-downloads-double-but-somethings-missing
- Appfigures, Lapse down 70% (Nov 17, 2023): https://appfigures.com/resources/insights/20231117/5-lapse-loses-momentum-as-downloads-drop-70-percent
- Meta, Sharing to Instagram Stories: https://developers.facebook.com/docs/instagram-platform/sharing-to-stories
- Snap Kit review: https://developers.snap.com/snap-kit/app-review/submission-and-review
- TikTok Community Guidelines: https://www.tiktok.com/community-guidelines/en/fyf-standards
- FTC, fake reviews and testimonials rule (Aug 14, 2024): https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials
- FTC, TAKE IT DOWN Act enforcement (May 2026): https://www.ftc.gov/news-events/news/press-releases/2026/05/ftc-begins-enforcing-take-it-down-act
- Google Trends (pulled Nov 16–17, 2026): https://trends.google.com/trends/
