# Digi: monetization, pricing and paywall economics (Nov 16, 2026)

**Labels:** V = verified today (scraped or read at the URL), C = claimed by a third party or vendor marketing, E = my estimate.
**Raw data and scripts:** `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/digi/pricing/`
(`us_iap.txt`, `sf_iap.txt`, `scripts/model.py`, `model_out.json`, `scripts/sf.py`, `scripts/rev.py`).

---

## 0. The short version (blunt)

1. **Pre-select the annual plan for the contest. Weekly-first loses in-window cash.** An annual sale is paid upfront, so one sale is about $34 of contest profit inside the window. A weekly buyer pays $5.94 a week and 55% churn at the first renewal. At 10K installs my model puts in-window contest profit at **$5.2K annual-first vs $2.9K weekly-trial-first** (E, §4). Weekly-trial-first wins over 12 months ($10.6K vs $8.4K), so switch to it **after Dec 16**.
2. **Use a 3-day trial on annual, not 7.** With installs ramping up toward the end of the window, **21% of 3-day trial conversions and 43% of 7-day ones land after Dec 16** (E, model). From **Dec 13**, swap the default offering (a RevenueCat Offering change, no app update) to **annual with no trial**.
3. **The Party Pack is the right second product.** One-off, cash on the spot, low refund risk, and proven in this niche: Boothie sells 25 credits for $5.99 [V]. EPIK sells "AI Christmas" packs at $0.99–3.99 [V], and WayShot sells "30 film shots" for $9.99 [V].
4. **Christmas gifting is mostly outside the window.** The window ends Dec 16. Apple gift-card spending and new-phone setup happen Dec 25+. Offer codes are free codes, not cash. Sell in-window to **holiday parties, Friendsgiving and SantaCon**, not gifting.
5. **Don't buy ads.** Base-case contest profit is **~$0.52 per install** (low case $0.26). Any paid install above that loses contest money.
6. **The free tier is the biggest AI cost line.** 3 free digis × 1.3 tries × $0.04 = **$0.156 per active free user**. At 10K installs that is ~$1.1K, two-thirds of all AI cost. Keep it, but stop reinstall farming with DeviceCheck.
7. **Be honest on the paywall. It protects contest profit.** Photo & Video has the **highest trial refund rate of any App Store category (6.4%)** [V Adapty], and refunds subtract from contest profit. Recent 1–2★ reviews of WayShot, Esti, Visify and Shots are dominated by "charged me", "scam" and "trial" complaints [V, §5.3].

---

## 1. Benchmarks (Photo & Video, subscription apps)

| Metric | Number | Source |
|---|---|---|
| Trial → paid, Photo & Video median | **22.2%** (lowest category; top quartile >33.1%) | V RevenueCat SOSA 2026 https://www.revenuecat.com/state-of-subscription-apps |
| Trial → paid, North America (all cats) | 34.2% | V same |
| Trial → paid by length | ≤4 days 25.5%; 5–9 d 37.4%; 17–32 d 42.5% | V same |
| P&V share of trials ≤4 days | 68.2% | V same |
| 3-day trial cancels on Day 0 | 55.4% (84% by Day 1) | V same + https://www.revenuecat.com/blog/growth/subscription-app-trends-benchmarks-2026 |
| Download → trial (D30), North America | 7.1% | V RevenueCat SOSA 2026 |
| Download → paid (D35), all apps | median **2.0%**; freemium 2.1% (top quartile 4.5%); hard paywall 10.7% (TQ 20%) | V same |
| Revenue per install, D14 / D60 | median $0.23 / $0.34; North America D60 $0.55; hard paywall $2.32 / $3.09 | V same |
| RPI by dominant plan, D14 | yearly **$0.36**, weekly $0.19, monthly $0.18 | V same |
| Weekly plans on P&V paywalls | 33% (highest category); P&V has lowest monthly | V same |
| P&V lifetime + subscription combos | 33.0% (highest category) | V same |
| Median prices (all apps) | weekly ~$5.99; yearly $34.80; North America yearly $39.99 | V same |
| AI apps vs non-AI | +41% Y1 LTV/payer ($30.16 vs $21.37), churn ~30% faster | V https://www.revenuecat.com/blog/growth/ai-app-retention-study.md |
| AI app 1-year retention, weekly plans | low 0.2% / mid 1.1% / high 3.1% | V same |
| P&V first-renewal medians | **weekly 45%**, monthly 48%, **annual 23%** | V https://www.revenuecat.com/blog/growth/average-subscription-renewal-rates-by-app-category.md |
| Weekly 2nd / 3rd renewal (all cats) | 67–75% / 74–91% | V same |
| Adapty P&V weekly-trial funnel | install→trial **14.0%**, trial→paid **30.5%**, first renewal 54.9%, refund 7.5% | V https://adapty.io/blog/photo-video-app-subscription-benchmarks/ |
| P&V trial refund rate | **6.4% global (highest category)**, 14.1% APAC; all-cat 8.3% (Adapty's own wording conflicts) | V same |
| P&V trial starts on Day 0 | **91.2%** | V same |
| P&V install → paid by paywall placement | onboarding + trial **1.35%** vs in-app + trial 0.89% | V same |
| P&V annual 12-mo LTV | $42.4; high-priced annual $52 vs low-priced $19.5 (2.7×) | V same |
| P&V revenue mix | weekly 51%, annual 8% (chart value; looks low, treat with care) | V same |
| Weekly + 3-day trial 12-mo LTV | $49.27 (text) / $54.50 (chart); weekly no trial $7.40; annual + trial $36.51 | V https://adapty.io/blog/weekly-monthly-annual-subscription-plan/ |
| Day-380 retention | annual trial 19.9%, monthly 14.2%, **weekly 5.5%** | V https://adapty.io/state-of-in-app-subscriptions/ |
| Weekly first renewal by price tier | 74–81% (Adapty, all cats; differs from RevenueCat's 45%, so use RC for P&V) | V Adapty weekly-vs-annual |
| US average weekly price | $9.99; UK $13.43 (highest) | V https://adapty.io/state-of-in-app-subscriptions/ |
| Refund median (US iOS, all cats) | 2.71%; annual plans highest (6–7.6%); weekly "most resilient" | V Adapty refund guide https://uploads.adapty.io/the_guide_on_managing_refunds_for_subscription_apps.pdf |
| Paywall default | weekly pre-selected → 90% of buyers pick weekly; annual pre-selected → 46% pick annual, and **pre-selecting annual does not lower conversion** | V https://adapty.io/state-of-paywalls/report/ |
| First-view purchase | 60% all apps; **P&V only 44%** (a quarter need 5+ views) | V same |
| Hard vs soft paywall | hard +48% trial starts, −33% direct buys; wins combined in 57% of apps | V same |
| Discount depth | ≤30% off keeps 90% of 6-month revenue; >60% keeps 46% | V same |
| Annual-first layouts | +25–40% ARPU in winning tests | C Adapty State of Paywalls (vendor-reported) |
| Holiday | Christmas: apps with promos got 11% fewer new payers vs autumn baseline (22% fewer without); New Year bump is brief | V https://www.revenuecat.com/blog/growth/holiday-offers-subscription-apps |
| Proof in niche | Boothie: $55.8K last 30 days, MRR $54.4K, 2,343 active subs ≈ $23.2/sub/month; Oct $56.4K | V https://trustmrr.com/startup/boothie.md (synced Nov 16) |

**What the benchmarks say for Digi:**
- Photo & Video is a **weekly, short-trial, high-refund, fast-churn** category.
- Weekly wins on 12-month LTV. **Annual wins on cash collected now** (RevenueCat D14 RPI yearly $0.36 vs weekly $0.19).
- That is exactly the contest's scoring rule.

Not found: Superwall and Purchasely publish no public P&V numbers. Business of Apps pages are secondary rehashes, so I didn't use them.

---

## 2. Competitor prices, US App Store (scraped today)

Method: `apps.apple.com/us/app/id{ID}?l=en`, parsed from the "In-App Purchases" JSON. Apple shows at most the top 10 IAPs, ordered by popularity. Several apps run price tests, so the same name appears at several prices. All V, Nov 16, 2026.

| App (ratings) | Weekly | Monthly | Annual | Credits / one-time |
|---|---|---|---|---|
| **Boothie** (40) | Plus $6.99, Pro $7.99, Gold $9.99 | $19.99 | (none listed) | 10 for $2.99, **25 for $5.99**, 60 for $11.99 |
| **WayShot** (5,463) | $9.99 | (none) | **$69.99 (top IAP)**, $59.99 | 1,500 coins $9.99, 10,000 coins $49.99, **30 film shots $9.99** |
| Esti (20,146) | $4.99–6.99 | (none listed) | $39.99; "Yearly Trial" $14.99 | (none) |
| Tezza (47,852) | $4.99 | $3.99–9.99 | $19.99–59.99 | (none) |
| Dazz Cam (118,135) | (none) | (none) | Pro $6.99 | lifetime $19.99; cameras $0.99–2.99 |
| Huji (12,002) | (none) | (none) | (none) | $0.99 one-time |
| Remini (359,868) | Pro $9.99, Lite $4.99–7.99 | $9.99 | (none listed) | (none) |
| Lensa (418,216) | $2.99–4.99 | (none) | $29.99–49.99 | Magic Avatars packs $3.99–11.99 |
| Visify (39,230) | $5.99–11.99 | (none) | $49.99 | (none) |
| EasyGlam (34,411) | $6.99–9.99 | $14.49–24.99 | $19.99, $49.99 | (none) |
| AI Mirror (50,369) | $4.99–9.99 | (none) | $29.99–39.99 | AI Video $1.99–5.99 |
| EPIK (54,985) | $3.49 | $11.99 | $51.99 | **AI Christmas Early Bird $3.99, AI Christmas LE $0.99**, Yearbook $3.99–9.99 |
| Photoroom (231,754) | $5.99 | $9.99–15.99 | $89.99 | (none) |
| GIO (36,130) | $5.99–11.99 | (none) | $29.99–39.99 | coins $1.99–3.99, 30 photos $5.99 |
| Shots (18,674) | $6.99–12.99 | (none) | (none) | coin packs $9.99–34.99 |
| Photoleap (138,310) | $6.99–8.99 | (none) | $35.99–59.99 | (none) |
| SNOW (36,794) | (none) | $8.99–9.99 | $39.99–59.99 | coins $1.49–5.99 |
| Pecra: G7X (1,310) | $8.99 | (none) | $89.99 | $14.99 |
| CastShot digicam (14) | $4.99–9.99 | $15.99 | $29.99–69.99 | 5 edits $2.99, 15 $6.99, 40 digicam $12.99, 100 $24.99 |
| flag7x (203) | $4.99 | (none) | $19.99 | lifetime $24.99 |
| Sera photobooth (84) | $9.99 | (none) | $129.99; "Limited" $69.99 | (none) |
| ThisBooth (35) | $3.99–4.99 | (none) | $29.99 | (none) |
| Photobooth: AI (82) | $9.99 | $24.99 | $39.99 | packs $11.99 / $22.99 / $34.99 |
| Pocketbooth (2,200) | $4.99 | $19.99–39.99 | $99.99 | Event Pack $4.99, packs $0.99 |
| Dispo (8,297) | (none) | $9.99 | $19.99–59.99 (3 days free) | cams $0.99 |
| POV events (15,683) | (none) | (none) | (none) | per-event $4.99–89.99 ("More Participants") |
| 1998 Cam / OldRoll | (none) | $1.99–5.99 | $12.99–29.99 | lifetime $17.99–39.99 |

There is no "Glam AI" listed in the US store under that name today. The nearest apps are EasyGlam and Glam Up.

**What the prices show:**
- **AI apps price weekly at $5.99–9.99 and annual at $30–70.**
- Credits run **$0.20–0.60 per AI image**: Boothie $0.20–0.30, CastShot $0.25–0.60, GIO $0.20, WayShot film shots $0.33.
- Digi at **$6.99/wk, $39.99/yr and $5.99 for 25 ($0.24 each)** is mid-market and defensible.
- **$39.99 is at the low end for annual**: WayShot $69.99, Pecra $89.99, Sera $69.99, Photoroom $89.99. That makes annual price the first A/B test.
- Pure filter apps (Dazz, 1998 Cam, OldRoll, flag7x) sell **lifetime** because they have no per-use cost. Digi must not: AI cost has no ceiling.
- Event apps (POV) charge **per event**, which supports "Digi Roll host pays" later.

---

## 3. Credits economics

### 3.1 How competitors package and cap credits
- **Weekly plans with daily credits:** Boothie [V https://trustmrr.com/startup/boothie.md].
- **Credits that reset each billing cycle:** Photoroom [V https://help.photoroom.com/en/articles/15284787-ai-credits].
- **Hard weekly and daily caps** behind "unlimited": Imagine.art at 1,050 per week and 150 per day [V https://help.imagine.art/en/articles/9921113-daily-limits]; Dzine's fair-use wording [V https://www.dzine.ai/fair-use-policy].
- **Scarcity packs:** WayShot "30 film shots" [V].
- **Seasonal one-time packs:** EPIK "AI Christmas" [V].
- **Rule:** never sell "unlimited". State a number, and use the same unit everywhere ("digis").

### 3.2 Unit cost
- One kept digi costs $0.04 × 1.3 tries = **$0.052**.
- A raw generation costs $0.04. Credits should be charged per **generation**, with one free "redo" per digi, so cost per kept image stays at about $0.052.
- **Photo strip:** generate it as **one 4-panel image** (1 call = $0.04) if quality holds. That costs a quarter of 4 separate calls ($0.16).
  - Charge 1 digi for a 1-call strip, or 4 digis for a 4-call strip. Never sell a 4-call strip for 1 digi.

### 3.3 Margin per plan, after Apple's 15% (Small Business Program)
Apple's 15% rate: V https://developer.apple.com/app-store/small-business-program/.

| Plan | Net to you | Typical AI use (E) | Typical AI cost | Margin | Worst case at cap | Worst-case margin |
|---|---|---|---|---|---|---|
| Weekly $6.99 | $5.94 | 15 gens/week | $0.60 | **90%** | 40/week cap = $1.60 | 73% |
| Annual $39.99 | $33.99 | 60 gens/year (30 in month 1, then decaying ×0.6/month) | $2.40 | **93%** | 40/week all year = $83 | −145% (rare power user) |
| Annual, blended (5% power users at 25/week) | $33.99 | (blended) | $4.88 | **86%** | (n/a) | (n/a) |
| Party Pack $5.99 (25) | $5.09 | 25 gens (+30% free redos) | $1.00–1.30 | **74–80%** | (n/a) | (n/a) |
| Group Pack $11.99 (60), optional | $10.19 | 60 × 1.3 | $3.12 | 69% | (n/a) | (n/a) |
| Free user | $0 | 3 × 1.3 | $0.156 | (n/a) | (n/a) | (n/a) |
| Trial user (3 days) | $0 | cap 10 digis | ≤ $0.40 | (n/a) | (n/a) | (n/a) |

Maths: weekly (5.94 − 0.60) / 5.94 = 89.9%. Annual typical gens = 30 + Σ(m=1..11) 20 × 0.6^m = 59.9, so 59.9 × 0.04 = $2.40 and (33.99 − 2.40) / 33.99 = 92.9%.

**Caps to ship:**
- Weekly and annual Plus: **40 digis/week, max 15/day** (same allowance on both plans, which is simpler and feels fair).
- Trial: **10 digis**, so trials can't be used to farm images and cancel.
- Party Pack: credits never reset; they expire after 12 months.
- Free: 3 digis per device. Use **DeviceCheck** (Apple's 2 bits per device) so reinstalling doesn't refill them.
- Show "Digis left: 32 this week" in the app.
- At these caps the AI cost target ("<15% of revenue") holds easily: paid plans run at 7–26%.

---

## 4. Contest model (maximise cash Nov 16 – Dec 16)

### 4.1 Assumptions (all E, anchored on §1)
- **Live window:** Nov 23 → Dec 16 = 24 days.
- **Install ramp:** linear from 1× to 3× (organic TikTok build-up). This back-loads installs, which is conservative for the window.
- **Purchase timing:** 85% on Day 0, 15% over days 1–7 (benchmark: P&V 91% of trials on Day 0).
- **Weekly renewal chain:** first 45% (55% after a trial), then 70%, 80%, then 94% per week (≈1.3% alive at week 52, in line with AI weekly 1.1–3.1%). That gives **5.8 payments per year (direct) or 6.8 (trial)**.
- **Refunds:** annual-from-trial 8%, annual direct 5%, weekly 5%, packs 3%. All are counted, even ones that would arrive after the window.
- **Fees:** Apple 15%, reversed on refunds.
- **Contest profit** = (gross − refunds) × 0.85 − $0 ads. **True profit** also subtracts AI cost, including free and trial users.
- **Per-install rates (base):**

| Structure | Annual | Weekly | Party Pack | Total payers |
|---|---|---|---|---|
| **S1 annual + 3-day trial pre-selected**, weekly no trial, pack | 5% start trial × 28% = 1.4%, + 0.2% direct | 0.8% direct | 1.0% (+25% buy a 2nd within 7 days) | ~3.4% |
| **S2 weekly + 3-day trial pre-selected**, annual no trial, pack | 0.3% direct | 7% trial × 30.5% + 0.2% direct | 1.0% | ~3.4% |
| **S3 no trials**, annual pre-selected | 0.7% | 0.9% | 1.1% | ~2.7% |

**Calibration warning:**
- Base-case in-window gross per install is **$0.66**, about 2–3× RevenueCat's median D14 RPI ($0.23). Base therefore assumes **top-quartile freemium execution**.
- The **low case (×0.5) is the median-app outcome. Plan your stake on the low case.**
- Trial lift vs direct (1.4% vs 0.7%) is consistent with Adapty's P&V onboarding paywall: 1.35% with a trial vs 0.82% without.

### 4.2 Results (USD)
"Contest" = contest profit. "True" = after AI cost. "12-month" is the in-window install cohort over 12 months, excluding the year-2 annual renewal.

| Structure | Installs | In-window gross | In-window contest | In-window AI | In-window true | 12-month gross | 12-month contest | 12-month true |
|---|---|---|---|---|---|---|---|---|
| **S1 annual + trial** | 2K | 1,315 | **1,042** | 322 | 720 | 2,117 | 1,684 | 1,260 |
| **S1** | 10K | 6,574 | **5,208** | 1,609 | 3,599 | 10,586 | 8,422 | 6,301 |
| **S1** | 50K | 32,872 | **26,039** | 8,045 | 17,994 | 52,929 | 42,108 | 31,505 |
| S2 weekly + trial | 2K | 726 | 588 | 328 | 260 | 2,633 | 2,129 | 1,621 |
| S2 | 10K | 3,629 | 2,942 | 1,642 | 1,300 | 13,163 | **10,645** | **8,105** |
| S2 | 50K | 18,146 | 14,709 | 8,210 | 6,499 | 65,815 | **53,227** | **40,525** |
| S3 no trials | 2K | 852 | 691 | 281 | 410 | 1,497 | 1,213 | 853 |
| S3 | 10K | 4,262 | 3,454 | 1,403 | 2,051 | 7,486 | 6,063 | 4,263 |
| S3 | 50K | 21,311 | 17,271 | 7,014 | 10,257 | 37,431 | 30,315 | 21,313 |

**Sensitivity, S1 at 10K installs:**
- Low conversion (×0.5): in-window contest profit **$2.6K** (true $1.3K).
- Base: $5.2K.
- High (×1.6): $8.3K.
- Annual renewal at the P&V median of 23% would later add about 0.23 × $34 ≈ $7.8 per annual payer (not in the table).

### 4.3 What the model says
- **S1 wins the contest at every scale** (~1.8× S2 in-window). An upfront annual sale counts fully, and the weekly tail mostly falls after Dec 16.
- **S2 wins the 12 months** (+26% contest profit at 10K). Run S1 until Dec 16, then A/B test S2 against S1 for the exit story.
- **Trial leak:** 21.4% of 3-day annual-trial conversions land after Dec 16 (7-day: 42.7%).
  - From **Dec 13**, switch the default offering to "annual, no trial" plus weekly plus pack.
  - Contest gain at 10K is about +$430 (~18% of installs fall in the last 3 days × 0.7% × $34).
  - Small but free to do. It trades ~$1K of post-window trial revenue.
- **AI cost is about 25–30% of contest profit**, driven by free users. Contest profit ignores it; your bank account doesn't.
- **Break-even CPI is about $0.52** (low case $0.26), so paid ads lose money in-window. Keep "no ads".
- **Party Pack** gives about 10–12% of S1 in-window gross. Its value is catching people who would never subscribe, plus near-zero refunds.
  - Push it hard around **Thanksgiving/Friendsgiving (Nov 26), the first holiday-party weekends (Dec 5–6, 12–13) and SantaCon (Sat Dec 12, NYC, E date)**.
  - Rename it seasonally: "Holiday Party Pack", "Ugly Sweater Pack".

### 4.4 Gifting, codes and web checkout
- **Gifting IAPs:** Apple doesn't support it. **Offer codes** work for subscriptions and, since 2025, for consumables: 1M codes per app per quarter, 10 active offers, one redemption per customer per offer, expire within 6 months [V https://developer.apple.com/help/app-store-connect/manage-in-app-purchases/create-offer-codes-for-in-app-purchases].
  - They are free or discount codes, so they bring **no cash in the window**.
  - Use them for growth: "your friend gave you 5 free digis" in the Digi Roll invite. Each redemption costs ~$0.26 in AI.
- **Web checkout via Stripe (US):**
  - The Ninth Circuit (Dec 2025) let Apple charge only "necessary cost" commissions on link-outs.
  - Apple proposed 15%, or 5% for Small Business Program apps (Aug 2026). The rate is still pending, so **0% is in effect now** [V https://appleinsider.com/articles/26/08/13/apples-latest-commission-rates-for-external-app-store-purchases-havent-satisfied-epic].
  - A $39.99 annual on Stripe nets ~$38.53 (2.9% + 30¢) vs $33.99 via Apple: **+$4.54 per annual sale**. Stripe counts in the contest.
  - The checkout friction costs conversion, and it is 1–2 days of work (RevenueCat Web Billing or Stripe plus entitlement sync).
  - **Skip for launch.** Consider a "Gift a Party Pack" web page on digi.pink in v1.1. Apple guideline 3.1.3(b) allows web-bought items in the app if they are also sold as an IAP.
- **Refund defence:** turn on RevenueCat's automatic Apple refund-request handling (it sends consumption info to Apple).
  - Dipsea: 3% → 1.9% [C https://www.revenuecat.com/blog/company/handle-apple-refund-requests-automatically].
  - MyMood AI: −50% [C RevenueCat case study].
  - For credits, the consumption data ("24 of 25 used") is strong evidence against a refund.
  - Open question: whether refunds that arrive after Dec 16 count in the contest. Ask the organisers.

---

## 5. Paywall design

### 5.1 Evidence
- **Placement:** onboarding paywalls convert about 4× later paywalls (0.85% vs 0.23% of views) and drive 53% of revenue. 93% of first purchases happen on Day 0 [V Adapty State of Paywalls].
  - Placing it after the first result (value first) matches the P&V onboarding-plus-trial number of 1.35% [V].
- **Re-showing:** only 44% of P&V buyers buy on the first view [V], so re-show the paywall at natural moments rather than nagging.
- **Default plan:** annual pre-selected doesn't lower conversion; weekly pre-selected → 90% pick weekly [V Adapty].
- **Plan count:** 62% of paywalls show 2 plans; more products win only 53% of tests [V]. Show **2 subscription cards plus a pack link**.
- **Images:** paywalls without a trial use an image twice as often [V]. Photoroom and Art Selfie put the result front and centre [V Mobbin, in the competitor file].
  - Best possible hero: **the user's own result**, before/after.
- **Trial reminder:** a Blinkist-style trial timeline plus reminder was reported at **+23% trial starts and −55% complaints** [C, secondary sources, no primary: https://b2bpricinginsights.substack.com/p/4-min-read-how-blinkists-new-paywall]. A replication reported +23–25% [C].
- **Delayed close button:** 22% of apps delay the X by 3–5 s [V]. Don't. Apple 3.1.2 and 5.6 risk, and it feeds the 1★ "forced purchases" reviews.

### 5.2 What triggers refunds and 1★ reviews
Sample: most recent US reviews via iTunes RSS (up to 250 per app), counting money keywords in 1–2★ reviews (V, `scripts/rev.py`). The most-recent sample skews negative, so compare between apps, not against the star average.

| App | Recent reviews | 1–2★ | Money-related 1–2★ themes |
|---|---|---|---|
| WayShot (4.72★ overall) | 159 | 65% | subscription/charged 30, paywall/trial 34, scam 20, refund 8. Quote: "charged me $70 when i did not sign up" |
| Esti | 212 | 63% | charged 40, paywall 34, scam 8. Quote: "tried to cancel and they kept charging me" |
| Visify | 250 | 21% | charged 15, scam 9. Quote: "cancelled the free trial… two days later i was charged for the week" |
| Shots | 200 | 96% | charged 65, credits 60, scam 51, refund 20 |
| Remini | 250 | 34% | charged 12, "$10 a week? get lost" |

**Pattern:**
- **A surprise annual charge after a "free" trial** (WayShot's $69.99), which matches Adapty's finding that annual refunds run highest at 6–7.6%.
- **Weekly renewals people didn't notice.**
- **Paywall before any value** ("can't even try it out": CastShot).
- **Credits eaten by bad results** (Shots).
- Fixes: a visible timeline and reminder, price as large as "free", a value-first flow, and a free redo on bad results.

### 5.3 Exact paywall spec (onboarding, after the first result)
1. **Top bar:** ✕ (top-left, visible at once, 44 pt) · "Restore" (top-right).
2. **Hero (~40% of the screen):** the user's own result as a before/after swipe (falls back to a sample strip). Small caption: "Your digi. No watermark with Plus."
3. **Headline:** "Unlock every look". No "free" in the headline.
4. **Three benefit rows, no more:**
   - "40 AI digis every week"
   - "All looks + new Christmas & NYE drops"
   - "No watermark · host a Digi Roll"
5. **Plan cards, stacked:**
   - **Yearly, pre-selected.** "$39.99/year · $0.77/week". Badge **"Best value: save 89%"** (6.99 × 52 = $363.48; 39.99 / 363.48 = 11%, so save 89%). Line: "3 days free, then $39.99/year".
   - **Weekly.** "$6.99/week". No trial.
   - No "Most popular" badge until real data says so. Use the factual "Best value".
6. **Trial timeline (only while yearly is selected):** "Today: full access → Day 2: we remind you → Day 3: $39.99, unless you cancel".
   - Schedule a local notification at 48 h.
   - Ask for notification permission here ("so we can remind you"). Blinkist reported opt-in going from 6% to 74%.
7. **CTA:** "Start 3-day free trial" (yearly) or "Continue: $6.99/week" (weekly).
   - Under it, in ≥13 pt type: "Renews automatically. Cancel anytime in Settings."
8. **Secondary link:** "Just one party? **Party Pack: 25 digis, $5.99 one-time** →" opens a sheet (optional second pack: Group Pack, 60 for $11.99).
9. **Footer:** Terms · Privacy (guideline 3.1.2).

**Other triggers:**
- **Free digis used up:** show the same paywall with the Party Pack card shown first ("You're out of free digis").
- **Locked seasonal look:** same paywall, hero showing that look.
- **Digi Roll host:** Plus required.

**Never:** a fake countdown, "Limited offer" without a real end date, a weekly trial pre-selected, or a hidden or delayed ✕.

**From Dec 13:** remote-switch the offering to yearly with no trial: "$39.99/year: pay once, holiday looks all year". RevenueCat Offerings can do this; the app must read paywall products from Offerings, not hard-coded IDs.

### 5.4 Three A/B tests (RevenueCat Experiments)
- **Power warning:** detecting a 20% lift on a 3% conversion rate needs ~13K installs per arm (n ≈ 16 · p(1−p) / Δ²). At 2–10K installs, **run only Test 1 during the window**. Judge it on **revenue per install at 7 days**, not conversion. Check that your RevenueCat plan includes Experiments.

| # | Test | Variants | Primary metric | When |
|---|---|---|---|---|
| 1 | **Annual price** | $39.99 vs **$49.99** (both with 3-day trial, weekly $6.99) | 7-day realized revenue per install, net of refunds | Launch → Dec 16 |
| 2 | **Lead plan** | S1 (annual + trial pre-selected) vs S2 (weekly + 3-day trial pre-selected) | 30-day and 90-day revenue per install | From Dec 17 (it's the 12-month question) |
| 3 | **Pack ladder** | Party Pack $5.99/25 alone vs + Group Pack $11.99/60 vs + Mini $2.99/10 | Pack revenue per paywall view, plus subscription cannibalisation | Dec 17 → Jan (NYE / Valentine's) |

Test 1 rationale: P&V high-priced annual LTV is 2.7× low-priced [V Adapty], and competitors charge $59.99–89.99.

---

## 6. Prices by storefront and Apple's price tiers

**How Apple pricing works [V]:**
- About 900 price points per currency.
- You pick a base storefront (the US), and Apple auto-equalises the others for exchange rates and taxes. You can override any storefront manually.
- Outside the US and Canada, prices include VAT/GST, and Apple pays you on the ex-VAT price.
- [V https://developer.apple.com/help/app-store-connect/reference/pricing-and-availability/in-app-purchase-and-subscriptions-pricing-and-availability]

**Competitors' local prices (V, scraped, `sf_iap.txt`):**
- Boothie Plus $6.99 → £6.99 / A$12.99 / C$8.99 / €8.99 / AED 24.99 / SAR 34.99.
- WayShot weekly $9.99 → £9.99 / A$14.99 / €9.99 / AED 39.99 / SAR 39.99.
- Photobooth AI annual $39.99 → £39.99 / A$59.99 / C$49.99 / €44.99 / AED 149.99 / SAR 179.99.

Recommended local prices and what you actually receive. FX is from open.er-api.com, Nov 16, 2026: GBP 0.7566, EUR 0.9066, AUD 1.4756, CAD 1.4266, AED 3.6725 (peg), SAR 3.75 (peg). VAT: UK 20%, DE 19%, AU 10%, UAE 5%, KSA 15%; US and CA are tax-exclusive.

| Storefront | Weekly | Annual | Party Pack | Net per weekly | Net per annual | Net per pack | Annual vs US |
|---|---|---|---|---|---|---|---|
| US | $6.99 | $39.99 | $5.99 | $5.94 | $33.99 | $5.09 | 100% |
| UK | £6.99 | £39.99 | £5.99 | $6.54 | $37.44 | $5.61 | 110% |
| EU (DE) | €7.99 | €44.99 | €6.99 | $6.29 | $35.45 | $5.51 | 104% |
| Australia | A$11.99 | A$64.99 | A$9.99 | $6.28 | $34.03 | $5.23 | 100% |
| Canada | C$9.99 | C$54.99 | C$8.99 | $5.95 | $32.76 | $5.35 | 96% |
| UAE | AED 27.99 | AED 149.99 | AED 22.99 | $6.17 | $33.06 | $5.07 | 97% |
| Saudi Arabia | SAR 29.99 | **SAR 169.99** | SAR 24.99 | $5.91 | $33.50 | $4.93 | 99% |

Maths: net = local price / (1 + VAT) / FX × 0.85. Example, UK annual: 39.99 / 1.2 / 0.7566 × 0.85 = $37.44.

- **UK:** keep £6.99/£39.99. The UK has the highest average weekly price (Adapty: $13.43), and these nets are above the US.
- **AU:** don't copy Boothie's A$12.99 for a $6.99 plan; A$11.99 matches the US net.
- **KSA:** set annual to SAR 169.99. SAR 149.99 nets only 87% of the US.
- **Elsewhere:** let Apple equalise from the US base, then check each figure in App Store Connect's price-point list before launch.

---

## 7. Final recommendation

| Item | Decision |
|---|---|
| Free | Live camera free forever. **3 AI digis per device** (DeviceCheck), small watermark |
| **Digi Plus yearly** | **$39.99, pre-selected, 3-day free trial with reminder**; becomes no-trial from Dec 13 |
| Digi Plus weekly | $6.99, no trial |
| Plus allowance | 40 digis/week, max 15/day, both plans. Trial: 10 digis |
| **Party Pack** | **$5.99 one-time, 25 digis**, seasonal names; shown first when free digis run out |
| Optional | Group Pack $11.99/60 (Test 3) |
| Not offered | Monthly (P&V's weakest), lifetime (unbounded AI cost), weekly trial (refund magnet) during the contest |
| Ads | None during the window (break-even CPI ≈ $0.26–0.52) |
| Day-one setup | RevenueCat Offerings (remote), Experiments Test 1, refund-request handling on, App Store Server Notifications v2 |

**Expected contest profit (E, S1):**
- Median-app execution: about **$0.26 per install**, i.e. $520 / $2.6K / $13K at 2K / 10K / 50K installs.
- Top-quartile execution: about **$0.52 per install**, i.e. $1.0K / $5.2K / $26K.
- Installs, not pricing, are the variable that matters.
