# 06 · Monetisation, plans and packs: how photo and AI camera apps make money, and Digi's exact packaging

*Digi bible, chapter 6. Written Nov 17, 2026. Track: weekly vs yearly vs monthly, trials, hard vs soft paywalls, credits, one-time packs, lifetime, per-party passes, gifting, group plans, Apple fees, regional prices, price tests and unit economics. It ends with Digi's exact packaging and three alternatives to test.*

**Labels**
- **V** = I read the primary page or pulled the data myself on Nov 16–17, 2026 (App Store pages, iTunes Lookup, OpenRouter's public model API, RevenueCat / Adapty / Superwall / Apple pages, TrustMRR `.md` pages).
- **C** = a number someone else claims (vendor case study, press, analytics estimate) that I could not audit.
- **E** = my estimate or model output, always with a confidence: high / med / low.

**Working files.** Everything is in `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/bible/mon/`:
- `us_iap_nov17.txt`: 30 US price lists.
- `sf_iap_nov17.txt`: Egypt, Saudi and UAE price lists for 7 apps.
- `raw/or_img.json`: OpenRouter image model list.
- `raw/rc_pv.txt`: RevenueCat SOSA 2026 text.
- `raw/rc_holiday.md` and `raw/rc_renew.md`: RevenueCat holiday and renewal posts.
- `scripts/model.py`: the contest model.

**Builds on** `digi-deep-2026-11/08-pricing-paywall.md` (Nov 16). I keep what still holds, correct what doesn't (section 0), and add what was missing: per-party pricing, live AI costs, Egypt prices, the Apple fee timing and the holiday data.

---

## Key takeaways

1. **The contest rewards cash collected now, so lead with a yearly plan.** The rules say "An annual plan paid up front counts in full" [V, contest rules]. Apps whose main plan is yearly earn **$0.36 per install by day 14**, against $0.19 for weekly-led and $0.18 for monthly-led apps (RevenueCat SOSA 2026) [V]. In my model, yearly-first earns **about 1.6× as much contest profit** inside the window as weekly-trial-first (section 8) [E, med].
2. **Apple's cut may be 30%, not 15%, for most of the contest. Fix this today.** The Small Business Program rate starts "fifteen (15) days after the end of the fiscal calendar month in which your enrollment is approved" [V, Apple]. Apple's November fiscal month is estimated to end Nov 28 [C; two third-party calendars agree, Apple's own calendar is only in App Store Connect], so an enrolment approved now starts **around Dec 13**. The contest subtracts "payment fees", and Apple is the payment provider. If the Grasp Labs developer account is not already enrolled, most contest sales pay 30%.
3. **AI is cheaper than the old plan assumed.** OpenRouter's live price for Seedream 5.5 is **$0.02 per output image plus $0.008 per input photo**. A one-selfie re-light costs **$0.028**. Seedream 5.0 Flash is **$0.018 with free input photos**, which suits 4-friend strips [V, OpenRouter API, Nov 17]. The old chapter used $0.04. With a 20% redo allowance, budget **$0.034 per digi**.
4. **"Unlimited" is both a contest risk and a review risk. State one number.** The contest bans "selling at a loss… charging less than each sale costs you to deliver" [V]. Each plan's maximum AI cost must stay under what Apple pays you at 30%. The yearly plan should therefore give **60 digis a month, not 40 a week** (40 a week could cost $70 a year against $28 net). Clicked already does this openly: "30 a month on monthly and yearly plans, 10 a week on weekly" [V].
5. **Party apps already sell "per party" and hosts pay.** Real US price ladders [V, Nov 17]:
   - Once: 10 guests $1.99, 25 $4.99, 50 $14.99, 100 $29.99.
   - Party Cam: 15 guests $1.99 up to 500 for $149.99.
   - Lense: 25 guests $4.99 up to 200 for $69.99.
   - Scene: free up to 5 guests for your first 10 events.
   - A TrustMRR "photo sharing app for events" made **$10,912 in 30 days with $0 MRR** and **$60.74 revenue per visitor** [V].
   - Digi should sell a **Roll Pass ($4.99, one party, up to 30 friends)**. The old plan left this for "later".
6. **Credits cost $0.20–0.60 per AI image across the niche. Digi's $0.24 is right.** Sparkle and GIO charge $0.20, Boothie $0.20–0.30, Clicked $0.30, WayShot film shots $0.33 and CastShot $0.25–0.60 [V]. Selling in bulk lowers the price per image, and that works.
7. **Black Friday (Nov 27) falls inside the window. A Christmas-only discount does nothing.**
   - Apps running Black Friday promos got **+20% new payers a day (peak +49% on Black Friday)**, while apps without one got −16%.
   - The yearly share of first purchases rose from **41% to 49%**.
   - 30-day refunds on yearly plans fell from **4% to 2.7%**.
   - Christmas-only offers: **−24% vs −22%** without, so no gain.
   - Source: RevenueCat, 5,000 apps, 2025–26 season [V]. The old chapter's "11% fewer with promos" figure came mostly from apps that also ran Black Friday deals.
8. **Egypt needs its own prices.** Apple's automatic Egypt prices are at full exchange-rate parity plus 14% VAT: Kroma's $4.99 weekly is EGP 299.99, about $5.58 [V]. Apps that sell well in Egypt cut deep:
   - Clicked charges about **37% of its US price**.
   - Esti charges 53–70%.
   - Dazz charges 22%.
   - Gulf prices sit **at or above** US levels: Boothie's weekly is SAR 34.99, about $9.33, or 133% of US [V].
9. **Expected contest profit is about $0.20–0.61 per install** (low to base), so paid ads lose money at almost any US cost per install [E, med]. Installs decide the result far more than any price change.

---

## 0. What I corrected from earlier work

| # | Earlier claim (08-pricing-paywall) | What is true | Source |
|---|---|---|---|
| 1 | AI cost $0.04 per generation; a kept digi costs $0.052 | Seedream 5.5 costs $0.02 per output image + $0.008 per input image, so **$0.028** for a one-selfie edit. Seedream 5.0 Flash is $0.018 flat, with up to 14 free input photos. Seedream 4.5 is $0.04. Budget $0.034 per digi including redos | OpenRouter `/api/v1/images/models/{id}/endpoints`, Nov 17 [V] |
| 2 | Contest maths used Apple's 15% | 15% only applies from ~15 days after the end of the fiscal month of approval. New enrolment now → ~Dec 13. Until then, **30%** | Apple SBP page [V]; Apple fiscal Nov = Nov 1–28 [C, aso.dev estimate] |
| 3 | "Check your RevenueCat plan includes Experiments" | RevenueCat says "Our entire suite of features comes standard". It's free up to $2.5K monthly tracked revenue, then 1% | revenuecat.com/pricing [V] |
| 4 | Christmas: "apps with promos got 11% fewer new payers vs 22% without" | True, but most of that gap comes from apps that also ran Black Friday deals. **Christmas-only offers: −24% vs −22%, so no gain.** Black Friday week: +20% vs −16% | RevenueCat holiday study [V] |
| 5 | Plus allowance "40 digis/week, max 15/day" on yearly | Worst case 2,080 digis a year × $0.034 = $70.72, against $27.99 net at 30%. That breaks the contest's selling-at-a-loss rule. Use **60/month on yearly, 30/week on weekly** | Contest rules §7 [V] + my maths [E, high] |
| 6 | "Weekly plans on P&V paywalls: 33% (highest)" | RevenueCat's chart gives a 10–33% range, highest of any category. It counts plans shown on paywalls, not sales | SOSA 2026 [V] |
| 7 | Event/per-party pricing "later" | It's a proven, live price ladder in 6+ US apps, and hosts pay without a subscription. It belongs in the launch | Section 3.3 [V] |
| 8 | Egypt not priced | Egypt prices table added. Apple's automatic parity price is too high for the market | Section 5.4 [V] |
| 9 | "Party Pack 25 for $5.99 nets $5.09" | Only at 15%. At 30% it nets **$4.19** | Maths [V] |

What still holds from the earlier chapter:
- Yearly pre-selected.
- A 3-day trial on yearly only, switched off around Dec 13.
- A $5.99 Party Pack.
- No monthly plan and no lifetime plan during the contest.
- No delayed close button.
- No fake countdowns.

---

## 1. The contest money rules, in one place

From the Ship or Die rules page, read Nov 16 [V]:

- **Profit = money received − refunds − chargebacks − payment fees − ad spend.**
- "Money received" means payments that landed during the hackathon "as shown by TrustMRR". **"An annual plan paid up front counts in full."**
- Refunds count **"including ones issued after the hackathon ends but before winners are confirmed."**
- AI, hosting and software costs are *not* subtracted. But: "each sale must cover what it costs you to deliver… like reselling AI credits or generations for less than you pay for them."
- TrustMRR counts App Store revenue "before Apple's commission, minus refunds" [V, TrustMRR FAQ]. The commission then comes off as a payment fee. Whether Apple's cut counts as a "payment fee" is still an open question for the organisers (chapter 09). **Plan for it being counted.**

What this means for packaging:

| Rule | Packaging consequence |
|---|---|
| Yearly paid up front counts in full | Yearly first. One yearly sale ≈ 6 weekly payments, and most weekly renewals land after Dec 16 |
| Refunds after the window still count | No packaging that breeds "I didn't know I'd be charged" refunds. A visible trial timeline and a reminder |
| Payment fees count | Get the 15% rate live as early as possible. Consider web checkout only if you are stuck at 30% (section 5.3) |
| No selling at a loss | Every plan has a stated digi allowance whose *maximum* AI cost is below the 30% net price |
| AI cost not deducted | Generous free digis are "free" for the score but still real money for you. Keep them small (3) |

---

## 2. Benchmarks: what the 2026 reports say for Photo & Video and AI apps

### 2.1 Weekly vs yearly vs monthly

| Metric | Weekly | Monthly | Yearly | Source |
|---|---|---|---|---|
| RPI by day 14, apps grouped by main plan (all categories) | $0.19 | $0.18 | **$0.36** | RevenueCat SOSA 2026 [V] |
| RPI by day 60, same grouping | $0.32 | $0.29 | **$0.46** | same [V] |
| P&V first renewal (median) | 45% | 48% | 23% | RevenueCat renewal post, SOSA 2026 data [V] |
| P&V 2nd / 3rd renewal | 53% / (not given) | 59% | 35% | same. For weekly, P&V's three numbers are 31% (bottom quartile) / 45% (median) / 53% (top quartile) for the first renewal |
| All categories, weekly 2nd → 3rd renewal | 67–75% → 74–91% | | | same [V] |
| P&V revenue mix 2025 | **51%** (49% in 2023) | (not given) | 8% | Adapty P&V page, Jun 29 2026 [V] |
| All categories revenue mix 2025 | 55.6% (43.3% in 2023) | | | Adapty [V] |
| P&V 12-month LTV | weekly + trial ≈ $46 | | $42.4 | Adapty [V] |
| 12-month LTV by setup (all categories) | weekly no trial $7.40 → weekly + 3-day trial $54.50 | | yearly + trial $36.51 (earlier report) | Adapty "high-performing paywall 2026" [V] |
| AI apps, yearly + trial, one-year LTV | | | **$66.70 vs $49.92** for average apps | Adapty [V] |

**How to read it:**
- Over a year, weekly-with-trial wins on LTV.
- Inside a 30-day window, yearly wins, because the money arrives on day 0 (or day 3 after a trial).
- P&V yearly first renewal is only **23%**: people buy for a party season and leave.
- Adapty's own advice for AI apps is "higher price points, annual-first, trial on annual only" [V].

### 2.2 Trials

| Metric | Number | Source |
|---|---|---|
| P&V trial → paid, median | **22.2%** (lowest of all categories; top quartile >33.1%) | SOSA 2026 [V] |
| Trial → paid by trial length (all categories) | ≤4 days 25.5% · 5–9 days 37.4% · 10–16 days 35.4% · 17–32 days 42.5% | same [V] |
| Share of P&V trials that are ≤4 days | 68.2% | same [V] |
| 3-day trial cancels on Day 0 | 55.4% (84% by Day 1) | same [V] |
| Trial → paid by region | North America 34.2% · Middle East & Africa **19.5%** | same [V] |
| P&V apps offering trials | 70.7% (2024) → 62.3% (2025), the steepest fall of any category | Adapty [V] |
| P&V weekly-trial funnel | install → trial 14.0% · trial → paid 30.5% · first renewal 54.9% · refunds 7.5% | Adapty [V] |
| AI apps vs average, install → trial | **5.31% vs 10.92%**, but 14% more direct buys | Adapty [V] |
| P&V trial starts on Day 0 | 91.2% | Adapty [V] |
| Onboarding paywall with trial vs in-app with trial (P&V, install → paid) | 1.35% vs 0.89% | Adapty [V] |

Two things matter for Digi:
- **AI-app users start trials at half the normal rate but buy directly more often.** So always show a "pay now" yearly option next to the trial, and don't force the trial.
- **In the Middle East and Africa, only about 1 in 5 trials converts.** For Egyptian and Gulf traffic, a trial is weaker than a cheap pack.

### 2.3 Hard vs soft paywall

| Metric | Hard paywall | Freemium / soft | Source |
|---|---|---|---|
| Download → paid by day 35 | 10.7% (top quartile 20%) | 2.1% (top quartile 4.5%) | SOSA 2026 [V] |
| RPI day 14 / day 60 | $2.32 / $3.09 | $0.27 / $0.38 | same [V] |
| Year-one retention | "nearly identical" | | same [V] |
| P&V median one-year LTV | $24.0 | $20.0 | Adapty [V] |
| Refund rate median | 2.5% | 2.9% ("probably just noise") | SOSA 2026 [V] |

Digi is freemium on purpose:
- The free camera is the marketing.
- Every shared photo carries the watermark.
- Rolls need free friends to join.
- The RevenueCat panel's own advice: freemium is right "when free users drive word of mouth, network effects, or long-term brand scale" [V]. That describes Digi.

Digi does put a **hard gate on AI**: 3 free digis, then pay. Hard paywalls earn about 9× more per install, but Digi would lose the viral loop. Don't do it.

### 2.4 Refunds

| Slice | Median refund rate | Source |
|---|---|---|
| All apps by category | most 3–4%; Productivity highest 4.7%; P&V "higher p75 and outliers" | SOSA 2026 [V] |
| North America | 3.4% (max 14.2%) | same [V] |
| India / SE Asia | 7.7%; MEA outliers "in the 30s" | same [V] |
| Low / mid / high price tier | 2.7% / 3.9% / 4.5% | same [V] |
| AI vs non-AI apps | 4.2% vs 3.5% | SOSA 2026 via secondary write-up [C] |
| P&V trial refunds | 6.4% global, 14.1% APAC (Adapty's threshold to act: >6%) | Adapty [V] |
| Yearly bought in Black Friday week, refund within 30 days | 2.7% (vs 4% normally) | RevenueCat holiday study [V] |

**Model inputs I use:**
- Yearly from trial: 6.4%.
- Yearly direct: 4%.
- Weekly: 4%. The weekly-after-trial path uses 7.5%.
- Packs: 2%. This is an estimate (med): consumables carry Apple's consumption data, which supports a refund decline.

### 2.5 Price medians (all categories)

| | Weekly | Monthly | Yearly | Source |
|---|---|---|---|---|
| Global median, 2025 | $5.99 | $10 | **$34.80** (up from $31.60) | SOSA 2026 [V] |
| North America median | $6.99 | $9.99 | **$39.99** | same [V] |
| MEA App Store yearly median | | | **$27.22** (Play $18.85) | same [V] |
| Adapty global medians 2025 | $7.48 | $12.99 | $38.42 | Adapty [V] |
| "Template" pricing | $4.99–6.99 | $7.99–9.99 | $29.99–39.99 | SOSA 2026 [V] |

### 2.6 Regional plan mix

From SOSA 2026 [V]:
- North America sales split **36% monthly / 40% yearly**.
- MEA: **52–55% monthly**, yearly 19% (the lowest anywhere). RevenueCat calls it a "pay-as-you-go preference".
- MEA's median trial → paid is 19.5%, and **63.5% of MEA conversions happen on Day 0**, the highest of any region.
- North America's D60 revenue per install is $0.55. Latin America, MEA and the rest of the world cluster around **$0.10**.

Egyptian and Gulf users therefore buy fast, prefer short commitments, and are worth much less per install than US users, except the Gulf on price (section 5.4).

### 2.7 Holiday season (RevenueCat, 5,000 apps, 2025–26) [V]

| Window | Apps with a promo | Apps without | Notes |
|---|---|---|---|
| Black Friday week (Nov 24–Dec 1, 2025) | **+20%** new payers/day vs autumn baseline | −16% | Peak **+49% on Black Friday**, ≥+25% through Cyber Monday. Yearly share of first buys 41% → 49%. Buyers worth 8% less each, but 60% of apps came out ahead. About half the gain came from users installed 3+ months earlier |
| Christmas (Dec 15–25) | −24% (Christmas-only offers) | −22% | No gain from a Christmas-only discount |
| Dec 26–Jan 4 | **+24%** | −4% | Strongest stretch. January buyers are worth 10% more over 6 months than Black Friday buyers |
| Paywall style | 61% of Black Friday paywalls show a % off (8% normally). Lifetime shows on 35–38% (17% normally). A single-plan layout on 30–36% (20%) | | |

The Meta ad prices cited by RevenueCat rise from Black Friday and **peak mid-December**, then drop below October levels in January. That's one more reason not to buy ads in the window.

Black Friday 2026 is **Fri Nov 27**. Cyber Monday is Nov 30.

### 2.8 Experiments: what tends to win

From Adapty's 2026 data across thousands of tests [V]:

| Test type | Share of tests that lifted LTV | Share that lifted conversion |
|---|---|---|
| Localisation | 62.3% | 44.9% |
| Trial changes | 59.6% | 39.9% |
| Plan duration | 58.7% | 37.8% |
| Number of plans | 57.1% | 46.1% |
| Price changes | 45.5% | 28.3% |
| Visual / copy only | 34.6% | 31.4% |

- Price rises rarely raise conversion, but they raise LTV about half the time.
- Showing a 24-hour offer only to people who closed the paywall "typically" adds 10–15% ARPU [C, Adapty].

### 2.9 Real money in this exact niche

| App | Verified or estimated money | Model | Source |
|---|---|---|---|
| **Boothie** (AI digicam/booth looks, solo dev, TR) | **$56,557** last 30 days (+19.8%); MRR $54,109; 2,336 active subs (≈ $23.16 MRR per sub); 30-day profit margin 55%; Oct $56,432, Sep $43,416 | Weekly Plus $6.99 / Pro $7.99 / Gold $9.99 with **daily credits** + packs 10/25/60 | TrustMRR (RevenueCat API), synced Nov 16 [V] |
| Boothie daily pattern | Sat/Sun ≈ $2,440–2,700 vs weekdays ≈ $1,330–1,920 (about +45% at weekends) | | same, daily table [V] |
| Lenz AI (digicam effect) | $912 last 30 days (−47.9%); MRR $2,200; 289 subs | $14.99/week or $69.99/year | TrustMRR [V] |
| Stealth "photo sharing app for events" | **$10,912** last 30 days, **MRR $0**, $60.74 revenue per visitor | Pay per event | TrustMRR [V] |
| WayShot | ~$417K/month, 348K downloads → **$1.20 per download** | Weekly $9.99, yearly $59.99–69.99, coins, film shots | AppKittie cache, Nov 12 [E, low-med] |
| Boothie (cross-check) | $54.7K, 40.7K downloads → $1.34 per download | | AppKittie [E, med]; within 3% of TrustMRR |
| Clicked | $41.7K, 31.7K downloads → $1.31 per download | | AppKittie [E, med] |
| Pecra: G7X | $88.5K, 111K downloads → $0.80 per download | Hard paywall | AppKittie [E, med] |

"Revenue per download" here is monthly revenue divided by monthly downloads, so it includes renewals from older users. For a new app's first month it is a ceiling, not a target.

---

## 3. Real price lists (US App Store, scraped Nov 17, 2026)

**Method.** I read `apps.apple.com/us/app/id{ID}` and parsed the "In-App Purchases" block.
- Apple shows the **top 10 IAPs by popularity**, so long lists are cut off.
- Repeated names at different prices usually mean live price tests.
- Ratings come from the iTunes Lookup API on the same day.
- All rows are [V]. Raw output: `us_iap_nov17.txt`.

### 3.1 Digicam / AI-look cameras (Digi's direct field)

| App (US ratings, launched) | Weekly | Monthly | Yearly | Credits / one-time | What the plan includes |
|---|---|---|---|---|---|
| **Boothie** (40, Jun 2026) | Plus $6.99 · Pro $7.99 · Gold $9.99 | Pro $19.99 | (none listed) | 10 credits $2.99 · **25 $5.99** · 60 $11.99 | "Plus and Gold include daily credits" (TrustMRR) |
| **WayShot** (5,522, Aug 2025) | $9.99 | (none) | **$69.99** (top seller) · $59.99 | 1,500 coins $9.99 · 10,000 coins $49.99 · **30 film shots $9.99** | Coins per generation (rate not public) |
| **Kroma** (284, Jul 2026) | $4.99 | (none) | $39.99 · Premium $49.99 / $7.99 · Pro $9.99 | 200 coins $2.99 · 600 $6.99 · 1,500 $14.99 · **Develop now 12 h $2.99 · 24 h $4.99** | Pays to skip a wait. Coins buy skins, rolls and stickers |
| **Clicked** (41, Apr 2026) | $4.99 / $6.99 | $7.99 / $9.99 | $39.99 / $59.99 | 10 Magic Credits $2.99 | **"30 a month on monthly and yearly plans, 10 a week on weekly"** (listing) |
| **Sparkle** (11, Nov 10 2026) | $7.99 | (none) | $59.99 | **25 More Photos $4.99** | "First camera-look photo is free… unlimited (fair use applies)" |
| **Esti** (20,165) | $4.99 / $5.99 / $6.99 | (none) | $39.99 · "Yearly Trial" $14.99 | (none) | Prequel Inc. Heavy price testing |
| **Dazz Cam** (118,170) | (none) | (none) | Pro **$6.99** | Pro lifetime $19.99 · cameras $0.99–2.99 | No AI, so lifetime is safe |
| **101cam** (616, SNOW) | (none) | $4.99 | **$13.99** | (none) | No AI. #4 free in Korea (chapter 02) |
| CastShot (14) | $9.99 | $15.99 | $69.99 · "Pro" $4.99 / $29.99 | 5 edits $2.99 · 15 $6.99 · 40 digicam $12.99 · 50 $19.99 · 100 $24.99 | Most aggressive per-image ladder |
| Pecra: G7X (1,313) | (no IAP block shown Nov 17) | | | | Earlier scrape (Nov 16): $8.99/wk, $89.99/yr, $14.99 |

### 3.2 AI photo apps (the price anchors users already know)

| App (US ratings) | Weekly | Yearly | Other |
|---|---|---|---|
| Remini (359,948) | Pro $9.99 · Lite $4.99–7.99 | (not in top 10) | "1 Month" $9.99 (non-renewing) |
| Lensa (418,227) | $2.99 / $4.99 | $29.99 / $35.99 / $39.99 / $49.99 | Magic Avatars packs $3.99 / $5.99 / $7.99 / $11.99 |
| EPIK (54,991, SNOW) | $3.49 | $51.99 | **AI Christmas Early Bird $3.99 · AI Christmas Limited Edition $0.99** · Yearbook $3.99–9.99 |
| AI Mirror (50,369) | $4.99 / $6.99 / $9.99 | $29.99 / $39.99 | AI Video $1.99 / $4.99 / $5.99 |
| Retake AI (53,475) | **$4.99 → $14.99, 7 price arms** | $59.99 | (none) |
| FaceApp (1.79M) | (none) | $60 · $100 | $10 / $20 (rounded "$X.00" prices) |
| Visify (39,232) | $5.99 → $11.99, 9 arms | "Unlimited Access" $49.99 | (none) |
| GIO (36,140, Prequel) | $5.99 → $11.99 | $29.99 / $39.99 | Coins $1.99 / $3.99 · **30 Photos $5.99** |

Retake runs **7 weekly price arms from $4.99 to $14.99** at the same time, and Visify runs 9. Big AI photo apps test weekly price heavily. Nobody publishes the results.

### 3.3 Party / event cameras: the per-party ladder

| App (US ratings) | Free tier | Paid tiers (one-time per event) | Model notes |
|---|---|---|---|
| **Once** (729, Nov 2025) | (not stated) | 10 participants **$1.99** · 25 **$4.99** (also $6.99 arm) · 50 $14.99 / $19.99 · 100 $29.99 / $39.99 · 150 $49.99 · add 10 $3.99 · add 50 $19.99 | App Clip join, limited shots, delayed reveal |
| **Party Cam** (68) | (not stated) | 15 guests **$1.99** · 25 $4.99 · 50 $14.99 · 100 $34.99 · 175 $64.99 · 250 $89.99 · 500 $149.99 | "Guest capacity is a one-time purchase per event. There is no subscription and nothing auto-renews." |
| **Lense** (1,545) | (not stated) | 25 guests $4.99 (unlimited shots $14.99) · 50 $14.99 / $24.99 · 100 $34.99 / $44.99 · 150 $44.99 / $54.99 · 200 unlimited $69.99 · video $9.99 | Two axes: guests × unlimited shots |
| **Scene** (115, Feb 2026) | **"Events with up to 5 guests are free for your first 10 events"** | 10 $2.99 · 25 $9.99 · 50 $19.99 · 100 $39.99 · +video / +unlimited shots $9.99 each · bundles $59.99 / $69.99 | "never a subscription" |
| **POV** (15,701) | "Up to 10 guests: Free" (pov.camera calculator) | "More Participants" $4.99 → $89.99 · Gold $54.99 | The category leader at 4.92★ |
| **Party!** (Hipstamatic, 232) | (not stated) | **Party! Pass $1.00** · Deluxe Camera $2 / $5 / $10 · Premium $49 · Premium Max $99 · Camera Roll Boost $2 · **Club $19.99/yr** | Only one here with a yearly club |
| Waldo shared albums (25,085) | (not stated) | Plus $7.99/mo or $49.99/yr · **Gold Special Event $49.99** · Special Events Bundle $99.99 | Subscription plus event upsell |
| Lapse (118,322) | Free | No IAP shown | Social disposable camera, no paywall |

**Patterns:**
1. **The entry ticket is $1.99–4.99.** Once's 10-person tier is $1.99, the same price as Party Cam's 15-person tier. **$4.99 for about 25 people** is the most common middle price (Once, Party Cam, Lense).
2. **Hosts pay; guests never do.** Every app offers a free or "no download" guest join.
3. **A free tier for tiny groups** (5–10 people) is standard. It lets a friend group try it, and the paid step comes when the party gets bigger.
4. **Nobody here sells AI.** Digi can sell rolls *plus* an AI group strip as one party product. None of these apps can.

### 3.4 Booth apps

| App | Prices |
|---|---|
| Mini Photobooth (9,107) | Pro $44.99/month · $269.99/year (event professionals) |
| Pocketbooth (2,200) | $4.99/wk · $19.99–39.99/mo · $99.99/yr · **Event Pack $4.99** · filter packs $0.99 |
| Sera (86) | $9.99/wk · $129.99/yr · "Limited Offer" $69.99/yr |

### 3.5 Price per AI image (US, Nov 17) [V prices; per-image maths mine]

| Offer | Price | Images | Per image |
|---|---|---|---|
| Sparkle 25 More Photos | $4.99 | 25 | **$0.20** |
| GIO 30 Photos | $5.99 | 30 | $0.20 |
| Boothie 60 / 25 / 10 credits | $11.99 / $5.99 / $2.99 | 60 / 25 / 10 | $0.20 / **$0.24** / $0.30 |
| Clicked 10 Magic Credits | $2.99 | 10 | $0.30 |
| WayShot 30 film shots | $9.99 | 30 | $0.33 |
| CastShot 100 / 40 / 15 / 5 | $24.99 / $12.99 / $6.99 / $2.99 | | $0.25 / $0.32 / $0.47 / $0.60 |
| Lensa Magic Avatars (Dec 2022) | $7.99 (non-subscribers) / $3.99 (subscribers) | 50 | $0.16 / $0.08 [C, AppleInsider, CNBC] |

The Lensa row shows another pattern: **packs are cheaper for subscribers.** Subscribing earns a pack discount.

---

## 4. Each money tool, and how it fits Digi

### 4.1 Free trials

**Use:** a 3-day trial on yearly only, with a reminder at 48 h. Switch it off from Dec 13.

**Why:**
- Trials help: the P&V onboarding paywall converts 1.35% of installs with a trial vs 0.82% without (Adapty, all-category figure) [V].
- A 3-day trial delays cash by 3 days. Trials started on Dec 14–16 pay after the window.
- In the model, the trial costs about **10 digis of AI each** ($0.34) [E, high].

**Trial cap:** 10 digis during the trial. A trial user who burns 10 digis and cancels costs $0.34, not $3.

**Don't:**
- Trial the weekly plan during the contest. Weekly-after-trial refunds run 7.5% [V Adapty], and most of the renewal chain lands after Dec 16.
- Use a 7-day trial. 43% of its conversions would land after the window (earlier model) [E, med].

**Paid intro option (to test after the contest):** Apple lets you offer "pay as you go" or "pay up front" intro prices instead of a free trial [V, Apple subscriptions docs]. RevenueCat's panel says a low entry price "filters out users who just want a free sample" [V, SOSA 2026]. Example: "$1.99 for your first week, then $6.99/week".

### 4.2 Weekly plan

**Use:** $6.99/week, no trial, shown as the second card.

**Why:**
- P&V weekly first renewal is 45% (median) [V], so a weekly buyer pays about 1.5–1.8 times inside the window.
- It catches people who won't commit $39.99.
- It is mid-market: the AI weekly range is $2.99–14.99 and the North America median is $6.99 [V].

**Allowance:** **30 digis a week.** Maximum AI cost $1.02, against $4.89 net at 30%.

### 4.3 Yearly plan

**Use:** $39.99, pre-selected, 3-day trial until Dec 12, then no trial.

**Allowance:** **60 digis a month** (720 a year). Maximum AI cost $24.48, against $27.99 net at 30%. That passes the loss test even if one person maxes it every month. Typical use is about 100 digis in the first year (40 in month 1, then fading), about $3.40 [E, med].

**Why $39.99 and not $49.99:**
- $39.99 is the North America median and Esti, Kroma and Clicked's lower arm [V].
- But WayShot's top seller is $69.99, Sparkle and Clicked's higher arm are $59.99, and Adapty finds high-priced P&V yearlies earn 2.7× the LTV of low-priced ones [V].
- **$49.99 is the first price test** (section 9).

### 4.4 Monthly

**Not at launch.**
- P&V has the weakest monthly use, and a third card lowers yearly take [V, SOSA: "number of plans" wins 57% of tests].
- **Exception to test after Dec 16:** MEA buyers prefer monthly (52–55% of MEA sales) [V]. Test a $9.99 monthly plan for UAE, Saudi and Egypt only, using RevenueCat country targeting.

### 4.5 Credits and consumables (the Party Pack)

| | Recommendation | Why |
|---|---|---|
| Unit name | "digis", one unit everywhere | Mixed units ("coins" + "shots" + "credits") show up in 1★ reviews (chapter 03: Shots, MePic) |
| What 1 digi buys | 1 AI re-light of one photo | One Seedream call at $0.028 |
| AI group strip | **2 digis** | One 4-panel call on Seedream 5.0 Flash ($0.018) or 5.5 with 4 input photos ($0.052) |
| Free redo | 1 free redo when the user taps "this doesn't look like me" | Shots' 1★ reviews say "you lose all your points" when the result is wrong [chapter 03]. Budgeted as +20% |
| Packs | **Party Pack 25 digis $5.99** ($0.24 each) · **Big Night 60 digis $11.99** ($0.20 each) | Boothie's exact ladder, proven at $56K/month [V] |
| Expiry | Packs never expire while the account exists (or 12 months) | Fewer refund fights. CapCut uses "valid for 2 years and cannot be refunded" [V, Mobbin] |
| Subscribers | Packs stack on top of the plan allowance | Lensa pattern. Never make a subscriber buy packs for normal use. "Not only do they want a weekly sub but you then have to buy coins" is a top complaint [chapter 03] |
| Family Sharing | Consumables can never be family-shared [C, Apple Community / Adapty] | Nothing to set |

**Show the counter everywhere.** Under the shutter: "12 digis left". Canva puts "Use 1 of 500 credits. Refreshes 12/1/24" under its generate button [V, Mobbin]. Hidden caps are the hated pattern; visible counters are fine (chapters 02 and 03).

### 4.6 One-time seasonal packs

EPIK sells **"AI Christmas Early Bird" $3.99 and "AI Christmas Limited Edition" $0.99** right now [V].

**For Digi:**
- Rename the Party Pack seasonally ("Holiday Party Pack", "NYE Pack").
- Do **not** create cheaper seasonal SKUs during the contest. Christmas-only discounts don't raise new payers (−24% vs −22%) [V].

**Allowed:** a seasonal *look* drop (new looks, same prices). It gives a reason to post and a reason to come back.

### 4.7 Lifetime

**Not with AI.** Lifetime + AI has no cost ceiling and could break the loss rule.

The facts on lifetime:
- P&V has the highest "subscription + lifetime" use of any category: **33.0%** [V SOSA].
- Holiday paywalls show lifetime twice as often (35–38% vs 17%) [V].
- But every lifetime seller in this niche is a **no-AI** camera: Dazz $19.99, mood.camera $24.99, Kapi $149, flag7x $24.99 [V, chapter 02].

**Possible later:** "Digi Camera Lifetime $19.99". It would give no AI digis, only premium non-AI cameras and no watermark. That only makes sense if some on-device looks become paid, which conflicts with "free on-device looks". Park it until after the contest.

### 4.8 Per-party pass: the **Roll Pass**

The rolls feature already has a price ladder people accept (section 3.3).

**Free rolls:** up to **8 friends**, always. A small friend group should never hit a paywall. Scene is free to 5, POV to 10.

**Roll Pass $4.99** (consumable, one party). The host buys it, never guests. It includes:
- up to **30 friends**,
- 48 hours of shooting,
- next-morning develop for everyone,
- **1 AI group strip for every guest who joins (2 digis each, paid by the pass)**,
- 10 digis for the host.

**Big Roll $14.99** (one party): up to 100 friends, the same AI gift. For house parties, weddings and NYE.

**Plus subscribers:** rolls up to 30 included. They pay only for Big Roll.

Cost check:
- Storage: 30 guests × 24 photos × 3 MB ≈ 2.2 GB, a few cents on R2.
- AI: host 10 digis = $0.34; guest strips, worst case 30 × $0.052 = $1.56.
- Maximum ≈ $1.95 vs $3.49 net at 30%. **Passes the loss test.**
- Cap guest strips at one per guest per pass.

Big Roll check: 100 guest strips × $0.052 = $5.20 + host $0.34 ≈ $5.54 vs $10.49 net at 30%. Passes.

Hosts are also the best channel there is. Every guest gets the app, an AI strip and a reason to post.

### 4.9 Gifting

- **Apple has no "gift this in-app purchase" button.**
- **Offer codes** work for in-app purchases and non-renewing subscriptions [V Apple]:
  - up to 10 active offers,
  - 1M codes per app per quarter,
  - one-time codes in batches of 500–25,000,
  - expiry up to 6 months,
  - "Paid Offer" or "Free Offer",
  - redemption needs iOS 16.3+.
- Codes are promotions, so **they bring no cash**. Use them for influencers and the "your friend gifted you 5 digis" Roll invite. Each 5-digi gift costs about $0.17 of AI.
- **A paid gift is possible on the web.** Apple guideline 3.1.3(b) lets an app unlock items bought elsewhere if the same items are also sold in-app [V Apple guidelines; my reading, conf. med]. A "Gift a Party Pack" page on digi.pink, through Polar, would add digis to the friend's account by email or code. It earns cash in the window. Build it in v1.1, not before launch.

### 4.10 Family and group plans

- **Family Sharing** can be switched on for subscriptions and non-consumables, never for consumables [C, Apple Community / Adapty table]. It covers family, not friends, so it doesn't help a party app.
- **A "squad" subscription** (one person pays for five friends) has no Apple mechanism. You would have to build it on your own backend. It isn't worth it in the window.
- **The Roll Pass is Digi's group plan:** one host pays, everyone gets something. It is simpler and already proven (section 3.3).

---

## 5. Apple fees, web checkout, regional prices and price tests

### 5.1 Commission

| Situation | Apple's cut | Source |
|---|---|---|
| Small Business Program (≤$1M proceeds last calendar year, all associated accounts) | 15% on paid apps and IAP | Apple SBP page [V] |
| Before SBP takes effect, or over $1M | 30% | same |
| Subscriptions after a subscriber's first paid year | 15% (standard terms). Apple's SBP page also mentions 10% for EU alternative terms | Apple [V] |
| When SBP starts | "fifteen (15) days after the end of the fiscal calendar month in which your enrollment is approved". Apple's example: approved Feb 10 → adjusted from Mar 14 | Apple [V] |
| Apple's November 2026 fiscal month | Nov 1–28 (payment ~Dec 31) | aso.dev estimate [C, med]. Matches Apple's 4-4-5 week pattern |

**So:**
- Approved by Nov 28 → 15% from about **Dec 13**.
- Approved Nov 29 or later → fiscal December (ends ~Dec 26) → 15% from about **Jan 10**. The whole contest would run at 30%.

The gap at 10K installs, base case: about **$1,100 of contest profit** ($505 vs $613 per 1,000 installs) [E, model].

### 5.2 RevenueCat cost

Free until $2.5K monthly tracked revenue, then **1%** [V].
- At $10K of December revenue: about $100.
- Whether it counts as a "payment fee" is unclear. Assume it does (small either way).

### 5.3 Web checkout (US only)

**The rules:**
- Since the Oct 16, 2026 guidelines, US storefront apps may include "buttons, external links, or other calls to action" to pay on the web [V, chapter 09].
- Apple currently collects 0% on these purchases while its proposed fee is in court (Supreme Court hearing Jan 11, 2027) [C, chapter 09].

**Net per $39.99 yearly:**

| Route | Net to you |
|---|---|
| Apple at 30% | $27.99 |
| Apple at 15% | $33.99 |
| Polar Starter (5% + 50¢) | **$37.49** |
| Polar Early Member (4% + 40¢ + 0.5% on subscriptions) | $37.59 |

Polar figures from polar.sh/resources/pricing [V]. Polar adds 1.5% for non-US cards.

**The catch:**
- Superwall (50+ app-to-web tests): web checkout can **cut initial conversion up to 37%**, lifts ARPU 11–27%, and is "roughly break-even" at 15%. Advice: "wait until they reach the 30% tier" [V, Superwall, May 2026].
- Adapty: in-app paywalls convert 1.60% vs web 1.10% [V].

**Break-even maths:**
- At 30%, web wins if it keeps more than 75% of in-app buyers (27.99 / 37.49).
- At 15%, it must keep more than 91%.

**Verdict:**
- If SBP isn't live before launch, a "Pay on web" link for **yearly only** is worth testing in the US.
- Show it as a secondary option ("Or pay on digi.pink"), never as the only one.
- It's roughly a day of work: Polar checkout → webhook → grant the RevenueCat entitlement.
- With the Dec 5 exams, I'd do it only if launch slips past Nov 28 *and* SBP is confirmed at 30% [E, med].

### 5.4 Regional prices

**How Apple does it** [V, Apple pricing docs]:
- You pick a base country (the US). Apple sets ~175 storefronts automatically from exchange rates and taxes.
- You can override any storefront.
- Outside the US and Canada, prices include VAT, and you're paid on the price without VAT.
- Egypt prices in EGP, and Apple added 14% VAT on Egypt in 2023 [C, Nairametrics / techinafrica].

**Competitors in Egypt, Saudi Arabia and the UAE** (scraped Nov 17) [V]. FX from open.er-api.com, Nov 16: 53.74 EGP, 3.75 SAR and 3.6725 AED to the dollar.

| App · product | US | Egypt | = USD (% of US) | Saudi | = USD (% of US) | UAE |
|---|---|---|---|---|---|---|
| Boothie Plus weekly | $6.99 | EGP 249.99 | $4.65 (67%) | SAR 34.99 | $9.33 (133%) | AED 24.99 |
| Boothie 25 credits | $5.99 | EGP 299.99 | $5.58 (93%) | SAR 24.99 | $6.66 (111%) | AED 22.99 |
| WayShot weekly | $9.99 | EGP 499.99 | $9.30 (93%) | SAR 39.99 | $10.66 (107%) | (not listed) |
| WayShot yearly | $69.99 | EGP 3,999.99 | $74.43 (106%) | SAR 299.99 | $80.00 (114%) | (not listed) |
| Esti weekly | $4.99–6.99 | EGP 179.99–199.99 | $3.35–3.72 (53%) | SAR 17.99–29.99 | | AED 14.99–24.99 |
| Esti yearly | $39.99 | EGP 1,499.99 | $27.91 (70%) | SAR 129.99 | $34.66 (87%) | AED 59.99–119.99 |
| Kroma weekly | $4.99 | EGP 299.99 | $5.58 (112%) | SAR 24.99 | | AED 22.99 |
| Kroma yearly | $39.99 | EGP 2,499.99 | $46.52 (116%) | SAR 199.99 | $53.33 (133%) | AED 199.99 |
| Clicked weekly | $4.99–6.99 | EGP 98.99–139 | $1.84–2.59 (37%) | SAR 8.99–12.49 | $3.33 (48%) | AED 11.49–16.49 |
| Clicked yearly | $39.99–59.99 | EGP 789–1,179.99 | $14.68–21.96 (37%) | SAR 70–104.99 | $28.00 (47%) | AED 93–139.99 |
| Dazz Pro yearly | $6.99 | EGP 82.99 | $1.54 (22%) | SAR 20.99 | $5.60 (80%) | AED 22.99 |
| Remini Pro weekly | $9.99 | EGP 189.99–299.99 | $3.54–5.58 (35–56%) | SAR 39.99–42.99 | | AED 37.99–39.99 |

**What the table shows:**
- Kroma's Egypt price (EGP 299.99 for a $4.99 weekly) equals FX + 14% VAT: 4.99 × 53.74 × 1.14 ≈ 306. That's Apple's automatic price, and it's too high for Egypt.
- Apps chasing Egyptian volume set it by hand at 22–70% of US.
- Gulf prices are left at or above parity. Gulf users pay.
- WayShot sells **different SKUs** in Egypt and Saudi ("200 film shots", "600 film shots") that the US list doesn't show. Packs can differ by storefront.

**Digi's regional prices (proposal)**

Net = price ÷ (1 + VAT) ÷ FX × (1 − Apple fee).

| Storefront | Weekly | Yearly | Party Pack | Roll Pass | Net yearly at 15% / 30% | Allowance change |
|---|---|---|---|---|---|---|
| US | $6.99 | $39.99 | $5.99 | $4.99 | $33.99 / $27.99 | (none) |
| **Egypt** | **EGP 149.99** | **EGP 999.99** | **EGP 149.99** | EGP 199.99 (EGP 99.99 would fail the loss test: $1.14 net vs $1.90 max AI cost) | $13.87 / $11.43 | Yearly **25 digis/month**, weekly 20/week (keeps max AI cost under net) |
| Saudi Arabia | SAR 29.99 | SAR 169.99 | SAR 24.99 | SAR 19.99 | $33.51 / $27.59 | (none) |
| UAE | AED 27.99 | AED 149.99 | AED 22.99 | AED 18.99 | $33.06 / $27.23 | (none) |
| UK / EU / AU / CA | as in the earlier chapter (£6.99/£39.99; €7.99/€44.99; A$11.99/A$64.99; C$9.99/C$54.99) | | | | ≈ US net | (none) |

**Egypt reasoning:**
- EGP 999.99 a year is about $18.6, roughly half of US. It sits between Clicked (37%) and Esti (70%).
- The weekly price of EGP 149.99 (about $2.79) undercuts Esti and Boothie.
- Egyptian installs will earn little per head (MEA D60 RPI ≈ $0.10) [V SOSA]. The point is to convert the friends who see the owner's content, without breaking the loss rule.
- Loss check for the Egypt yearly: 300 digis × $0.034 = $10.20 < $11.43 at 30%. Passes.

### 5.5 Price tests: the mechanics

- **RevenueCat Experiments** split new users between two "Offerings" (sets of products), and you compare revenue per user. It's included in the standard suite [V pricing page].
- Put every yearly price (for example $39.99 and $49.99) as **separate products in the same subscription group**, so users can move between them.
- **The app must read products from Offerings**, never hard-coded IDs. This also allows the Dec 13 "trial off" switch without an app update.
- **Price rises on existing subscribers:** Apple lets you raise a price without the subscriber opting in only once a year, and only up to US$5 and 50% (or US$50 and 50% for yearly) [C, AppleInsider / TechCrunch, May 2022]. Above that, they must opt in. **Test prices on new users only.**

**Sample sizes:**
- Detecting a 20% lift on a 3% purchase rate needs about 13K installs per arm (earlier chapter's formula) [E, high].
- At 2–10K installs in the window, run **one** test and judge it on 7-day revenue per install after refunds. Act only on big gaps (more than 30%).

---

## 6. AI cost per image (live prices)

OpenRouter image models endpoint, read Nov 17, 2026 [V]. Google and OpenAI are blocked on the owner's key, so only these matter.

| Model (OpenRouter id) | Output price | Input photo price | Max refs | Cost for Digi's jobs |
|---|---|---|---|---|
| **Seedream 5.5** `bytedance-seed/seedream-5-5` (Nov 12, 2026) | **$0.02** (high-res $0.035) | **$0.008 each** | 10 | Selfie re-light (1 ref): **$0.028** · 4-friend strip: $0.052 |
| **Seedream 5.0 Flash** `bytedance-seed/seedream-5-0-flash` | **$0.018** | free | 14 | Re-light $0.018 · **4-friend strip $0.018** |
| Seedream 5.0 Lite | $0.035 | free | 14 | $0.035 |
| Seedream 5.0 Pro | $0.045 (high-res $0.09) | $0.003 | 14 | $0.048 |
| Seedream 4.5 | $0.04 | free | 14 | $0.04 (the old chapter's number) |
| Qwen Image 2.1 Turbo | $0.0184 | free | 10 | Untested for faces |
| FLUX 3 Klein | $0.009 (1K) | not listed | 10 | Too weak for faces (chapter 04) [E] |

**Cost per digi I use: $0.034.** That's 0.028 × 1.2 (redos) + $0.0004 (safety check, storage).
- If Seedream 5.0 Flash passes the face test, the cost falls to about **$0.022**.
- Not deducted in the contest, but it's your money, and it sets the loss-rule limits.

### 6.1 Unit economics per product

Typical use is my estimate (med). Maximum use = every allowance spent.

| Product | Price | Net at 15% | Net at 30% | Digis | Typical AI cost | Max AI cost | Margin at 30%, typical | **Loss test at 30% (max cost < net)** |
|---|---|---|---|---|---|---|---|---|
| Free user | $0 | | | 3 once | $0.07 (70% use them) | $0.10 | (n/a) | (n/a) |
| Trial (3 days) | $0 | | | cap 10 | $0.27 | $0.34 | (n/a) | (n/a) |
| Weekly $6.99 | $6.99 | $5.94 | $4.89 | 30/week | $0.68 (20 used) | $1.02 | 86% | **Pass** |
| Yearly $39.99 | $39.99 | $33.99 | $27.99 | 60/month | $3.40 (≈100/yr) | $24.48 | 88% | **Pass** (12% buffer at max) |
| Yearly $49.99 (test) | $49.99 | $42.49 | $34.99 | 60/month | $3.40 | $24.48 | 90% | Pass |
| Party Pack | $5.99 | $5.09 | $4.19 | 25 | $0.77 (90% used) | $0.85 | 82% | **Pass** |
| Big Night | $11.99 | $10.19 | $8.39 | 60 | $1.84 | $2.04 | 78% | **Pass** |
| Mini (test) | $2.99 | $2.54 | $2.09 | 10 | $0.31 | $0.34 | 85% | Pass |
| Roll Pass | $4.99 | $4.24 | $3.49 | host 10 + 1 strip per guest (≤30) | $0.80 | $1.95 | 77% | **Pass** |
| Big Roll | $14.99 | $12.74 | $10.49 | host 10 + ≤100 guest strips | $2.00 | $5.54 | 81% | **Pass** |
| Egypt yearly | EGP 999.99 | $13.87 | $11.43 | 25/month | $1.70 | $10.20 | 85% | Pass |
| Egypt Party Pack | EGP 149.99 | $2.08 | $1.71 | 25 | $0.77 | $0.85 | 55% | Pass |
| Egypt Roll Pass | EGP 199.99 | $2.77 | $2.29 | host 10 + ≤30 guest strips | $0.80 | $1.90 | 65% | Pass (at EGP 99.99 it would fail) |

Boothie's 30-day profit margin is **55%** on TrustMRR [V]. That figure probably includes ads and other costs, but it shows that AI-look apps with credits stay well in profit.

---

## 7. Digi's packaging (recommended: "Package A")

### 7.1 What is free, forever
- The live camera with every on-device look (digicam, flash, film, Y2K) and the orange date stamp.
- Non-AI booth strips.
- Joining any roll, and hosting rolls up to 8 friends.
- Sharing to IG Story, Snap and TikTok with the small digi.pink watermark.
- **3 AI digis** per device, once only. Use DeviceCheck so reinstalling doesn't refill them (earlier chapter).

### 7.2 What is paid

| Product | Type | US price | What the user gets (exact paywall wording) |
|---|---|---|---|
| **Digi Plus Yearly** (pre-selected) | Auto-renew, 1 year | **$39.99** | "60 AI digis every month · every look · no watermark · rolls up to 30 friends". Until Dec 12: "3 days free, then $39.99/year" |
| Digi Plus Weekly | Auto-renew, 1 week | $6.99 | "30 AI digis every week · every look · no watermark" |
| **Party Pack** | Consumable | **$5.99** | "25 AI digis. Pay once. They don't expire." |
| Big Night Pack | Consumable | $11.99 | "60 AI digis. Best for the whole night." |
| **Roll Pass** | Consumable (one party) | **$4.99** | "Host one party for up to 30 friends. Everyone gets an AI group strip." |
| Big Roll | Consumable (one party) | $14.99 | "Up to 100 friends. Everyone gets an AI group strip." |

**Not offered in the window:** monthly, lifetime, a weekly trial, a Christmas discount SKU, "unlimited".

### 7.3 Where each offer appears

| Moment | What shows first | Second option |
|---|---|---|
| After the first AI result in onboarding | Yearly (pre-selected, trial until Dec 12) + Weekly | Link: "Just tonight? Party Pack $5.99" |
| Out of free digis | **Party Pack first** ("You're out of free digis") | "Or get Plus: 60 a month" |
| Starting a roll with a 9th friend | **Roll Pass $4.99** | "Plus includes rolls up to 30" |
| A subscriber at 0 digis left | Big Night / Party Pack ("top up") | Never a "buy Plus" screen for someone who already pays |
| Closed the onboarding paywall, Nov 24–Dec 1 only | One-time **"Launch week: first year $29.99"** sheet, 24 h, real end time (Apple pay-up-front intro offer) | (none) |

**Notes on the launch-week offer:**
- RevenueCat: Black Friday promos +20% new payers; ≤30% off keeps ~90% of 6-month revenue (Adapty) [V].
- It is shown only to people who said no, which is the Adapty "non-converters" pattern.
- It runs until Dec 1, a real date, so it isn't a fake countdown.

### 7.4 The switches (no app update needed, all in RevenueCat Offerings)

| Date | Change |
|---|---|
| Launch (target Nov 24–25) | Package A. Yearly + 3-day trial pre-selected. Launch-week non-converter offer on |
| **Dec 2** | Launch-week offer off |
| Fri–Sun, Dec 4–6 and Dec 11–13 | Rename the Party Pack in the paywall copy to "Holiday Party Pack". Push the Roll Pass in-app on Fridays. Boothie earns ~45% more on weekends [V] |
| **Dec 13** | Yearly trial off: "$39.99/year: holiday looks all year" |
| Dec 17 | Start test B (weekly + trial) against A for the 12-month answer (section 9) |
| Dec 26–Jan 4 | A real New Year offer (RevenueCat: +24% new payers with an offer) [V], e.g. "New Year: first year $29.99" for non-converters |

---

## 8. Model: contest profit per 1,000 installs

`scripts/model.py` [E, med on structure, low-med on rates].

**Assumptions:**
- Installs Nov 24 → Dec 16, rising from 1× to 3× (back-loaded).
- 70% of installs use their 3 free digis.

**Rates per install, base case:**

| Package | Rates |
|---|---|
| A | trial start 5% (AI-app rate 5.31% [V]) × 25% to paid (≤4-day median 25.5% [V]) · yearly direct 0.3% · after Dec 13, yearly without trial 0.9% · weekly 0.6% · Party Pack 1.0% (×1.2 for repeat buys) · Big Night 0.2% · Roll Pass 0.4% |
| B | weekly trial start 10% × 30.5% · first renewal 54.9% (Adapty P&V [V]) · yearly $49.99 direct 0.3% · same packs and passes |
| C | packs and passes only (Mini 0.8%, Party 2.2%, Big Night 0.5%, Roll 0.6%; ×1.3 repeat) |

**Other inputs:**
- Refunds: 6.4% trial-yearly, 4% direct, 7.5% weekly-after-trial, 2% packs.
- Low case = rates × 0.4. High = × 1.6.

**Results** ($ per 1,000 installs, inside the window; "contest" = after refunds and Apple's fee; "true" also subtracts AI cost):

| Package | Apple fee | Low (×0.4) | **Base** | High (×1.6) | AI cost (base) | True profit (base) |
|---|---|---|---|---|---|---|
| **A: yearly-first + packs + Roll Pass** | 30% | $202 | **$505** | $807 | $121 | $383 |
| A | 15% | $245 | **$613** | $980 | $121 | $491 |
| B: weekly-trial-first | 30% | $127 | $317 | $508 | $136 | $181 |
| B | 15% | $154 | $385 | $616 | $136 | $249 |
| C: packs + passes only | 30% | $88 | $219 | $350 | $111 | $108 |
| C | 15% | $106 | $266 | $426 | $111 | $155 |

**Reading:**
- **A wins the window by 1.6× over B and 2.3× over C.** At 10K installs, base case: about **$5.1–6.1K** of contest profit. Median-app execution (low): **$2.0–2.5K**.
- The earlier chapter's figures were $5.2K base and $2.6K low at 10K installs. These agree within about 5–20%, though the inputs changed (cheaper AI, the Roll Pass, the 30% fee).
- **C loses less than you'd think and refunds almost nothing.** It is the safe fallback if App Review rejects the subscriptions (section 9).
- **Break-even ad cost per install is $0.20–0.61.** US TikTok and Meta installs cost more than that (chapter 05). No ads in the window.
- Calibration against benchmarks:
  - A base = $0.76 gross per install. North America median D14 RPI is $0.38 and yearly-led apps' median is $0.36 [V]. **Base assumes top-quartile work.**
  - Boothie and WayShot earn $1.20–1.34 a month per download, but that includes months of renewals [E].

---

## 9. Three alternatives to A/B test

| # | Test | Arm 1 | Arm 2 | When | Judge on | Why it might win |
|---|---|---|---|---|---|---|
| **T1** | **Yearly price** | A with yearly $39.99 | A with yearly **$49.99** (weekly stays $6.99) | Launch → Dec 16 (the only in-window test) | 7-day revenue per install after refunds | High-priced P&V yearly LTV is 2.7× low-priced [V]. Competitors sell $59.99–69.99 [V]. Risk: refunds rise about 1 point per price tier [V] |
| **T2** | **Lead plan (Package B)** | A (yearly + trial pre-selected) | **B**: weekly $6.99 + 3-day trial pre-selected, yearly $49.99 no trial | Dec 17 → Jan 31 | 30- and 90-day revenue per install | Weekly + 3-day trial is the top LTV setup ($54.50) [V]. Weekly is 51% of P&V revenue [V]. It loses the contest but may win the year |
| **T3** | **Packs-first in MEA (Package C-lite)** | A in Egypt, Saudi Arabia and the UAE | Packs and Roll Pass shown first; Plus yearly behind "More options"; add **Monthly $9.99** | Dec 17 → Jan | Revenue per install in those countries | MEA: trial → paid 19.5%, 52–55% monthly, 63.5% buy on Day 0 [V]. Pay-as-you-go suits that |

**Optional T4 (pack ladder, after the contest):** Party Pack alone vs + Mini $2.99/10 vs + Big Night $11.99/60. Judge on pack revenue per paywall view and whether packs cannibalise subscriptions.

**Fallback if App Review pushes back on subscriptions:** ship Package C (packs + Roll Pass only) and add Plus in an update. Consumables don't need the subscription disclosures, so review risk is lower [E, med].

---

## 10. Exact copy for the money screens

Short, plain and honest. Every number is visible. No "free" in headlines.

**Onboarding paywall (after the first AI result)**
- Headline: **"Keep the flash going"**
- Rows:
  - "60 AI digis every month"
  - "Every look, new drops for the holidays"
  - "No watermark · rolls up to 30 friends"
- Yearly card: **"Yearly · $39.99 · $0.77/week"**. Badge: "Best value". Line under it: "3 days free, then $39.99/year".
- Weekly card: **"Weekly · $6.99"** · "30 AI digis every week".
- Timeline (yearly selected): "Today: full access · Day 2: we remind you · Day 3: $39.99 unless you cancel".
- Button: **"Start 3 days free"**, or on weekly **"Continue · $6.99/week"**.
- Under the button: "Renews automatically. Cancel anytime in Settings."
- Link: **"Just tonight? Party Pack · 25 digis · $5.99 →"**

**Out of free digis (sheet)**
- "You're out of free digis"
- Party Pack card: "25 AI digis · $5.99 · pay once, no subscription"
- Big Night card: "60 AI digis · $11.99 · $0.20 each"
- Link: "Or get Plus: 60 digis every month"

**Roll Pass (host adds a 9th friend)**
- "Bigger party?"
- "Roll Pass · $4.99 · one party"
- "Up to 30 friends · photos develop for everyone tomorrow morning · everyone gets an AI group strip"
- "Plus members: included"

**Counter under the shutter:** "12 digis left · refills Dec 1" (Plus) or "3 free digis left" (free).

**Launch-week sheet (non-converters, Nov 24–Dec 1):** "Launch week · first year $29.99 (then $39.99) · ends Dec 1". No timer animation, just the date.

---

## What this means for Digi

1. **Today: check whether the Grasp Labs LLC developer account is in the Small Business Program.**
   - If not, apply now (App Store Connect → Agreements → Small Business Program) and list any associated accounts.
   - Approval by Nov 28 means 15% from about Dec 13. Later means 30% for the whole contest.
   - Ask the organisers whether Apple's commission counts as a "payment fee" (chapter 09, Q1).
2. **Build all money screens on RevenueCat Offerings, not hard-coded product IDs.** Create in App Store Connect:
   - one subscription group "Digi Plus" with yearly $39.99, yearly $49.99 (test arm) and weekly $6.99;
   - an intro offer of a 3-day free trial on both yearlies;
   - a pay-up-front intro offer of $29.99 for the first year, for the launch-week sheet;
   - consumables: Party Pack $5.99, Big Night $11.99, Roll Pass $4.99, Big Roll $14.99 (and Mini $2.99, unused at launch).
3. **Run AI on Seedream 5.5 for selfie re-lights ($0.028) and test Seedream 5.0 Flash for 4-friend strips ($0.018, free input photos).** Log cost per job. If 5.0 Flash passes the 20-photo face test, use it for everything and the cost per digi drops to ~$0.022.
4. **Set allowances server-side and show them on the paywall:**
   - yearly 60 digis/month (Egypt 25),
   - weekly 30/week (Egypt 20),
   - trial cap 10,
   - free 3 once (DeviceCheck),
   - 1 free redo per digi,
   - a group strip costs 2 digis.
   - Keep the counter visible under the shutter.
5. **Ship the Roll Pass in v1.** Free rolls up to 8 friends. $4.99 for up to 30, $14.99 for up to 100. Each guest gets one AI group strip, paid by the host's pass. Push it on Friday afternoons (Dec 4, Dec 11) and before NYE.
6. **Set storefront prices by hand before launch:**
   - Egypt EGP 149.99 / 999.99 / 149.99 / 199.99.
   - Saudi Arabia SAR 29.99 / 169.99 / 24.99 / 19.99.
   - UAE AED 27.99 / 149.99 / 22.99 / 18.99.
   - UK, EU, Australia and Canada as in the earlier chapter.
   - Leave the rest on Apple's automatic prices, then spot-check India, Brazil and Turkey in App Store Connect.
7. **Turn on the launch-week non-converter offer (first year $29.99) from launch to Dec 1 only.** Real end date, no fake timer. Don't run a Christmas discount (no measured gain).
8. **Dec 13: switch the yearly offering to no trial** ("$39.99/year: holiday looks all year").
9. **Run only test T1 ($39.99 vs $49.99) during the window.** Judge on 7-day revenue per install after refunds. Start T2 (weekly-trial-first) and T3 (packs-first in MEA) on Dec 17.
10. **Turn on RevenueCat's Apple refund-request handling** and App Store Server Notifications v2 from day one. Add one line to the Terms consenting to consumption data being shared with Apple. Refunds count even after Dec 16.
11. **No paid ads in the window.** Break-even cost per install is $0.20–0.61. Gift digis to creators with offer codes instead: they're free, and 5 digis cost you ~$0.17.
12. **Only if SBP is stuck at 30% and launch is on time:** add a US-only "Or pay on digi.pink" link for yearly through Polar ($37.49 net vs $27.99 in-app). Otherwise park web checkout and the "Gift a Party Pack" page for v1.1.

---

## Sources

All read Nov 16–17, 2026 unless noted.

**Contest and Apple**
- Ship or Die rules: https://www.ship-or-die.com/100k-hackathon/rules (saved copy in `scratchpad/digi/contest/raw/rules.txt`)
- TrustMRR FAQ: https://trustmrr.com/faq
- Apple Small Business Program: https://developer.apple.com/app-store/small-business-program/
- Apple offer codes for in-app purchases: https://developer.apple.com/help/app-store-connect/manage-in-app-purchases/create-offer-codes-for-in-app-purchases
- Apple pricing and availability: https://developer.apple.com/help/app-store-connect/reference/pricing-and-availability/in-app-purchase-and-subscriptions-pricing-and-availability
- Apple subscriptions overview (intro offers): https://developer.apple.com/app-store/subscriptions/
- Apple App Review Guidelines 3.1.1(a), 3.1.3(b): https://developer.apple.com/app-store/review/guidelines/
- Apple November 2026 fiscal month estimate: https://aso.dev/zh/app-store-connect/apple-fiscal-calendar/ ; RevenueCat fiscal calendar: https://www.revenuecat.com/blog/app-store-fiscal-calendar-and-payment-dates
- Subscription price-increase rule (May 2022): https://appleinsider.com/articles/22/05/16/app-developers-can-automatically-increase-subscription-prices-in-some-cases ; https://techcrunch.com/2022/05/17/psa-apples-new-rules-let-apps-raise-subscription-prices-automatically
- Family Sharing and consumables: https://discussions.apple.com/thread/253935689 ; https://adapty.io/blog/markdown/app-purchases-family-sharing.md
- Egypt local currency and VAT: https://www.macrumors.com/2016/12/02/apple-app-store-us-pricing-regional-currencies/ ; https://nairametrics.com/2023/07/11/apple-announces-price-adjustments-for-in-app-purchases-in-nigeria-egypt-others ; https://www.techinafrica.com/apple-announces-app-price-adjustments-in-egypt-tanzania-and-nigeria-from-july-25-2023-due-to-tax-law-and-currency-exchange-rate-changes/

**Benchmarks**
- RevenueCat State of Subscription Apps 2026 (2025 data): https://www.revenuecat.com/state-of-subscription-apps/ and the Photo & Video breakout https://www.revenuecat.com/state-of-subscription-apps-2026-photo-and-video
- RevenueCat renewal rates by category: https://www.revenuecat.com/blog/growth/average-subscription-renewal-rates-by-app-category
- RevenueCat holiday offers study (2025–26 season): https://www.revenuecat.com/blog/growth/holiday-offers-subscription-apps
- RevenueCat AI hybrid monetisation: https://www.revenuecat.com/blog/growth/ai-hybrid-monetization
- RevenueCat pricing: https://www.revenuecat.com/pricing/
- Adapty Photo & Video benchmarks (Jun 29, 2026): https://adapty.io/blog/photo-video-app-subscription-benchmarks/
- Adapty high-performing paywall 2026: https://adapty.io/blog/high-performing-paywall-2026/
- Adapty State of In-App Subscriptions 2026: https://adapty.io/state-of-in-app-subscriptions/
- Superwall, "Three Monetization Bets to Make or Break Your 2026" (May 22, 2026): https://superwall.dev/blog/three-monetization-bets-to-make-or-break-your-2026

**Revenue proof**
- Boothie: https://trustmrr.com/startup/boothie.md (synced Nov 16, 2026)
- Lenz AI, stealth photography and event photo-sharing apps: TrustMRR `.md` pages saved in `scratchpad/bible/mrr/` (chapter 05)
- AppKittie cache, Nov 12, 2026: `scratchpad/akdb/appkittie_db_2026-11-12.csv`

**Price lists**
- App Store pages `https://apps.apple.com/{us,eg,sa,ae}/app/id{ID}` for 30 apps (IDs in `scratchpad/bible/mon/ids.txt`); iTunes Lookup API `https://itunes.apple.com/lookup?id=…&country=us`
- POV pricing calculator: https://www.pov.camera/pricing
- Lensa Magic Avatars 2022 prices: https://www.cnbc.com/2022/12/07/lensa-app-turns-selfies-into-avatars-with-artificial-intelligence.html ; https://appleinsider.com/inside/iphone/tips/how-to-use-lensa-and-its-ai-art-features-on-iphone

**Costs and FX**
- OpenRouter image models: https://openrouter.ai/api/v1/images/models and `/api/v1/images/models/{id}/endpoints`
- Polar fees: https://polar.sh/resources/pricing
- FX rates (Nov 16, 2026): https://open.er-api.com/v6/latest/USD

**Paywall screens (Mobbin)**
- CapCut credit balance: https://mobbin.com/screens/c562545d-32ff-43fd-9093-9d47f9dcc20b
- Canva credits counter: https://mobbin.com/screens/6ffc56f2-bb17-4049-898d-1080a04e46bd
- Replika packs vs subscription: https://mobbin.com/screens/7f976de3-1ae2-49b4-83b9-aa546553fe07
- Bevel credit cost table: https://mobbin.com/screens/3a490fbe-1004-4757-826a-3d753cd84d71

**Earlier Digi chapters used**
- `digi-deep-2026-11/08-pricing-paywall.md`, `09-contest-plan.md`, `04-tech-safety-legal.md`
- `digi-bible-2026-11/02-competitors-retro-cams.md`, `03-competitors-ai-photo.md`, `05-mrr-peaks.md`

---

## Fact-check (2026-11-16)

*Independent re-check of the 10 numbers in this chapter that matter most for decisions, Nov 16–17, 2026: RevenueCat's report and blog (raw `.md`), OpenRouter's public model API, apps.apple.com IAP lists in the US, Egypt and Saudi stores, and the iTunes Lookup API.*

| # | Claim | Re-check result | Status |
|---|---|---|---|
| 1 | RevenueCat SOSA 2026: revenue per install by day 14 = $0.36 yearly-led, $0.19 weekly-led, $0.18 monthly-led | Holds (all categories; there is no Photo & Video split) | Confirmed |
| 2 | Apple SBP 15% starts 15 days after the end of the fiscal month of approval; fiscal November ends Nov 28 → ~Dec 13 | Rule text is Apple's. Nov 1–28 is confirmed by a second third-party fiscal calendar (payment ~Dec 31); Apple's own calendar sits behind App Store Connect login | Rule confirmed; date stays C (med-high) |
| 3 | OpenRouter: Seedream 5.5 = $0.02 per output image + $0.008 per input photo; Seedream 5.0 Flash ≈ $0.018 with free input | Holds: API lists Seedream 5.5 image input $0.008 and output 4.79e-6 per image token (≈ $0.02 for a standard image); 5.0 Flash input $0, output 4.31e-6 per token (≈ $0.018) | Confirmed |
| 4 | Clicked: "30 a month on monthly and yearly plans, 10 a week on weekly" | Holds, word for word, in Clicked's App Store description | Confirmed |
| 5 | Party price ladders: Once 10/$1.99 … 100/$29.99; Party Cam 15/$1.99 … 500/$149.99; Lense 25/$4.99 … 200/$69.99 | All hold in today's US IAP lists | Confirmed |
| 6 | Credits per AI image: Sparkle and GIO $0.20, Boothie $0.20–0.30, Clicked $0.30, WayShot film shots $0.33 | Hold: Sparkle 25/$4.99; GIO 30 Photos/$5.99; Boothie 10/$2.99, 25/$5.99, 60/$11.99; Clicked 10 Magic Credits/$2.99; WayShot 30 film shots/$9.99. CastShot not re-checked | Confirmed |
| 7 | RevenueCat holiday study (≈5,000 apps, 2025–26): Black Friday promos +20% new payers/day vs −16% without, peak +49% on Black Friday; annual share 41% → 49%; 30-day refunds on annual 4% → 2.7%; Christmas-only −24% vs −22% | Every figure holds in RevenueCat's post | Confirmed |
| 8 | Black Friday 2026 is Nov 27 | Holds (Thanksgiving is Thu Nov 26, 2026) | Confirmed |
| 9 | Egypt: Kroma's $4.99 weekly = EGP 299.99; Boothie Plus weekly SAR 34.99 ≈ 133% of the US $6.99 | Hold: Kroma Pro Weekly EGP 299.99 (eg store); Boothie Plus SAR 34.99 (sa store), Boothie Plus EGP 249.99 | Confirmed |
| 10 | The contest rules quotes ("An annual plan paid up front counts in full", "selling at a loss…") | Internal contest document; nothing public to check against | Not verifiable here |

**What I changed**
- Takeaway 2: noted that the Nov 28 fiscal-month end is backed by two third-party calendars, not Apple directly.

**What I could not verify**
- The contest rules wording (internal).
- Esti/Dazz/Clicked Egypt discount ratios (37%, 53–70%, 22%) beyond the Kroma and Boothie rows above: not re-pulled.
- The contest model outputs ($0.20–0.61 profit per install; yearly-first ≈ 1.6× weekly-first): author's model (E); not re-run.
- TrustMRR "photo sharing app for events" $10,912 / $60.74 per visitor: slug not re-fetched.
