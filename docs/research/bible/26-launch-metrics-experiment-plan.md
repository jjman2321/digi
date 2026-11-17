# 26. Launch metrics, decision rules and the pricing/paywall experiment plan for the 30-day contest

Written Tue Nov 17, 2026. All times are Cairo time (UTC+2) unless marked. Contest window: Mon Nov 16 → **Wed Dec 16, 15:00 Cairo (13:00 UTC)**. Digi's target App Store launch: Nov 24–26, US storefront only.

**Labels:** **V** = I read it myself today on the primary page, API or a saved copy of the primary page (link given). **C** = a third-party or company claim I could not audit, or an Apple/vendor rule I saw only through a search summary. **E** = my estimate or model output, with a confidence of high, med or low.

**Working files:** `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/bible/m26/` (`funnel.py` = the reconciled funnel model; `ss.py` = the sample-size maths). RevenueCat's SOSA 2026 text was read from the saved copy in `bible/ads16/rc_sosa.txt` (saved Nov 17).

**Limits of this chapter:** my web-search allowance ran out partway through. I could still open known pages, but I could not run new searches for TikTok's own analytics help pages or for fresh indie "views to revenue" case studies. Where that matters I say so and lean on chapters 05, 14 and 15.

---

## Key takeaways

1. **One funnel now replaces five.** Per 1,000 US installs inside the window, the reconciled model gives **Low $214 / Base $468 / High $946** of contest profit at Apple's 30% fee ($260 / $568 / $1,149 at 15%). Low is about the category median. Base is good execution. High is top quartile. Chapter 05's bear/base, 06's base and 21's base all fit inside this one table once the labels are fixed (§1). [E, med]
2. **"2.0–2.4% download-to-paid" was half right.** RevenueCat's global median (all categories, day 35) is **2.0%**. The "2.4%" is the **Asia-Pacific** median, not an AI-app figure. The number that matters for Digi is **North America: 2.8% median, top quartile above 6.0%**. Freemium apps: 2.1% (top quartile 4.5%). [V, RevenueCat SOSA 2026]
3. **Digi will not have enough traffic for normal A/B tests.** To see a 20% lift on a 3% conversion rate you need about **13,900 users per arm** at the usual 95% standard, or **~5,000 per arm** at a looser 80% standard. Revenue per install is noisier still: **~15,500 per arm** for a 20% lift. At 2,000–10,000 installs in three weeks, only big effects (50–100%) on high-traffic screens are readable. [V maths, E inputs]
4. **Run at most three tests, and only one on the money screens at a time.** (E1) pack-first vs Plus-first on the "out of digis" sheet, Nov 25 → Dec 9. (E2) yearly $39.99 vs $49.99, only if Digi averages ≥250 US installs a day by Dec 1, run Dec 2 → Dec 12 as a "do no harm" check. (E3) Apple's own product-page test of the first screenshot. Everything else on the list (weekly-first, 3 vs 2 free digis, offer on/off, trial on/off) becomes a **dated rule**, not a test. [E, med]
5. **RevenueCat Experiments is free for Digi and is the right tool.** The current "Pro" plan costs $0 under $2.5K monthly tracked revenue and includes Experiments. It enrolls new customers at first app open, splits them evenly, supports up to 4 variants, targets by country and app version, and reports a **"chance to win"** with 95% credible intervals. Superwall adds nothing Digi needs in the window and its "transaction abandon" offers carry App Review risk. [V, RevenueCat docs; C, Superwall]
6. **The launch-week $29.99 offer and the 3-day trial cannot live on the same yearly product.** Apple allows **one current introductory offer per product per storefront**, and each customer gets **one intro offer per subscription group**. Make a second yearly product for the offer, and accept that anyone who already started a trial can't get it. [C, Apple help via search]
7. **Attribution without ads = one campaign link per account + one tap "where did you hear about us" + RevenueCat cash.** Apple's campaign links credit a first-time download only if it happens **within 24 hours** of the tap, and show a campaign only after **5 first-time downloads**. That is enough to show the organisers which owned accounts drove installs. It can't show which single post did. [V, Apple campaign-link help]
8. **Revenue per 1,000 views is still the deciding number, but it needs a fixed definition.** Use: 7-day RevenueCat gross (after refunds) ÷ 7-day total views across Digi's own accounts × 1,000. Green ≥ $1.00, amber $0.40–1.00, red < $0.40. The only real anchor (Lenz AI) sits at **$0.33–0.59**, which is red. [E, med; C anchor]
9. **Two earlier rules were wrong for the contest.** "Cut free digis to 2 if conversion is under 4%" would fire even in the base case, and the AI cost it saves is not deducted by the contest. "Buy Apple Ads if ≥4% of installs pay in week 1" still loses money: at 4% paying, the break-even cost per install is about $0.55–0.95, against a $2.79 US median. Both are replaced in §5. [E, high]
10. **Since March 25, 2026, App Store Connect shows Digi's download-to-paid conversion and proceeds per download against a peer group.** Use it as the third benchmark (after RevenueCat and Adapty) from week 2, and screenshot it for the verification call. [V, Apple developer news]

---

## 0. What I corrected from earlier chapters

| Earlier claim | Where | What's true now | Label |
|---|---|---|---|
| "The median download-to-paid is ~2.0–2.4% (RevenueCat)" | ch. 12 takeaway 8, §11 | Global all-category D35 median is **2.0%**. **2.4% is the Asia-Pacific median.** North America is **2.8%** (top quartile >6.0%, top 10% 10.9%). Ch. 12's own fact-check already flagged 2.4% as unfound; this is where it came from. Use 2.8% for US maths. | V |
| Base model = $0.76 gross per install, $505 contest profit per 1,000 installs at 30% | ch. 06 §8 | The structure holds. Reconciled base: **$0.70 gross / $0.67 after refunds per install, $468 per 1,000 at 30%**. Ch. 06 already said its base "assumes top-quartile work". It sits between my base and high. I relabel the cases: Low ≈ median, Base = good, High = top quartile. | E, med |
| Base case = 59 payers per 1,000 installs, ~$902 net | ch. 21 §9.3 | That case assumes **40% trial→paid**, above the Photo & Video top quartile (33.1%), plus 2% pack buyers and 1.5% weekly. It matches my **High** case (67 payers, $946 at 30%). Base is **34 payers per 1,000**. Ch. 21's AI-cost conclusions still hold, because AI cost rises with payers. | E, med (V for 33.1%) |
| "Cut free digis from 3 to 2 if conversion is under ~4%" | ch. 21 §9.3 | Base conversion (all payers, including packs) is **3.4%**, so this rule would fire in a good outcome. The 3rd free digi costs about **$0.017 per install** (1 × $0.0244 × 70% usage), and the contest doesn't subtract AI cost. Replaced with cost and abuse triggers (§5, rule R9). | E, high |
| "Only buy Apple Ads if ≥4% of US installs pay in week 1" | ch. 16 takeaway 9 | At 4% paying, net value per install is about $0.55–0.95, so the break-even CPI is under $1. The US Photo & Video median CPI is $2.79 (ch. 16). The test is a learning cost, not a profit move. **Move it to Dec 17+** unless D7 cash per install tops $2.50 (rule R12). | E, high |
| "Revenue per 1,000 TikTok views ($0.33–0.59) decides the scenario" | ch. 05 §5d | Agree, but the Lenz anchor is **lifetime** revenue over months against **lifetime** views. In-window revenue per view will read lower for the same funnel. Fixed definition and thresholds in §6. | E, med |
| "RevenueCat Experiments is included in the standard suite" | ch. 06 §5.5 | Docs say "Experiments is available to Pro & Enterprise customers". The current free tier **is** called Pro ($0 under $2.5K MTR), so Digi has it. Legacy plans (Starter, Build, Analyze, Grow) must move to the new Pro. | V |
| "20% lift on 3% needs ~13K installs per arm" | ch. 06 §5.5, deep/08 | Confirmed: **13,911 per arm** at 95% confidence and 80% power. At an 80% one-sided standard it's 5,022. | V maths |
| Launch-week $29.99 first year **and** a 3-day trial on the yearly | ch. 06 §7.2–7.3 | One current intro offer per product per storefront, one intro offer per customer per subscription group. Needs a second yearly product (`digi_plus_yearly_launch`). People who started a trial can't redeem it. | C (Apple help, via search) |
| Launch offer Nov 24–Dec 1 (ch. 06) vs Black Friday offer Nov 27–30 (ch. 23) | ch. 06 §7.3, ch. 23 §5 | **One offer, one end date:** live from launch to **Mon Nov 30, 23:59 PT** (Tue Dec 1, 09:59 Cairo). Shown at the next app open to people who closed the paywall (ch. 08), plus a crossed-out price on the main paywall Nov 27–30. Two overlapping offers would confuse users and the data. | E, high |
| Price test T1 "launch → Dec 16, the only in-window test" | ch. 06 §9 | It overlaps the launch offer (Nov 24–30) and the Dec 13 trial switch. Moved to **Dec 2 → Dec 12**, and only if traffic allows (E2). | E, high |
| Campaign links "give each install source a name" | ch. 23 §6d | True, with limits: a first-time download counts only if it happens **within 24 h of the tap**; a campaign appears only after **5 first-time downloads**; data shows after **24 h**; last link tapped wins. | V |
| "Copy A/B tests rarely pay; use variants for moments" | ch. 18 §8.2 | Agree, and the sample sizes in §3 make it stronger: a copy change typically moves conversion by well under 20%, which Digi can't detect. Note Adapty's 34.6% is the **share of tests that won**, not the size of the win. | V (Adapty), E |
| Daily KPI targets "D1 ≥ 25%, D7 ≥ 10%" | deep/03 §8.2 | Already corrected in ch. 23 (category D1 11.6%, D7 3.4%). I use ch. 23's floors in the checklist. | C |

---

## 1. The reconciled funnel (deliverable a)

### 1a. Benchmarks for each step (US, Photo & Video and AI apps, 2025–2026)

| Step | Median | Top quartile / good | Source, date | Label |
|---|---|---|---|---|
| Install → opens camera and takes a first shot | No public benchmark | ch. 09 target ≥70% | — | E, low |
| Install → first AI result | No public benchmark | deep/03 target ≥55% within 24 h | — | E, low |
| Install → first paywall view | No public benchmark for freemium camera apps | — | — | — |
| Paywall view → paid within 30 days (all paywalls) | **US 2.75%** (Europe 1.38%) | — | Adapty State of Paywalls 2026, FY Oct 2025–Sep 2026, 78,000+ paywalls | V |
| …by placement | Onboarding **0.85%**, later in app **0.23%**; **$170 vs $40 per 1,000 views** | — | same | V |
| Download → trial (D30) | All categories mostly **5–6%**; **North America 7.1%** | NA top quartile >15.0% | RevenueCat SOSA 2026 (2025 data) | V |
| Download → trial, AI apps vs average | **5.31% vs 10.92%**, but 14% more direct buys | — | Adapty (via ch. 06) | C→V in ch. 06 |
| Download → trial, P&V weekly-trial funnel | **14.0%** | — | Adapty P&V benchmarks, updated Jun 29, 2026 | V |
| Trial → paid, Photo & Video | **22.2%** (lowest category) | **>33.1%** | RevenueCat SOSA 2026 | V |
| Trial → paid, North America (all) | **34.2%** | — | same | V |
| Trial → paid, trials of ≤4 days | **25.5%** | — | same | V |
| 3-day trials cancelled on Day 0 | **55.4%** (84% of cancels by Day 1) | — | same | V |
| Download → paid by D35, global / **North America** | 2.0% / **2.8%** | NA >6.0%; NA top 10% 10.9% | same | V |
| …freemium vs hard paywall | **2.1%** vs 10.7% | 4.5% vs 20.0% | same | V |
| …by price tier | low 1.4%, mid 2.0%, high 2.8% | high >6.1% | same | V |
| P&V onboarding paywall with trial, install → paid | **1.35%** (in-app with trial 0.89%) | — | Adapty P&V, Jun 29, 2026 | V |
| Share of purchases made on Day 0 | all categories 44.5% (Adapty); 50.6% of conversions (RevenueCat) | — | Adapty; SOSA | V |
| Freemium: when conversions happen | 1/3 on Day 0, 60%+ in week 1, **23% after week 6** | — | SOSA | V |
| Pack (consumable) purchase rate | **No public benchmark.** Only ~10% of apps run true hybrid models; P&V has the highest "lifetime combo" use (33.0%) | — | SOSA | V (context only) |
| Weekly plan, first renewal, P&V | **45%** (bottom quartile 31%, top quartile 53%) | 53% | RevenueCat renewal post (via ch. 06) | V in ch. 06 |
| Weekly first renewal, P&V trial funnel | **54.9%** | — | Adapty P&V | V |
| D1 / D7 open, P&V | **11.6% / 3.4%** | ch. 23 "great": 30% / 12% | AppsFlyer via Spreadcast (via ch. 23) | C, med |
| Refund rate | North America **3.4%**; P&V trial **6.4%**; Black Friday yearly **2.7%** | — | SOSA; Adapty; RevenueCat holiday study | V |
| Revenue per install, D14 | All categories **$0.23**; **North America $0.38**; yearly-led apps $0.36; freemium $0.27; hard $2.32 | — | SOSA | V |
| Revenue per install, D60 | All $0.34; **North America $0.55** | NA top quartile **>$1.39** | SOSA | V |
| P&V one-year LTV per install | **$0.82** (global) | NA "roughly 2×" global | Adapty P&V | V |

**Two things to keep in mind.**
- RevenueCat's medians are medians **of apps**, not of users. A median app is an average app. A first app built in a week is usually below it. [E, high]
- None of these sources measures "first AI result" or "pack purchase". Digi's own week 1 will be the first real number for those. [V: absence]

### 1b. The one table: Low / Base / High per 1,000 US installs, Nov 25 → Dec 16 [E, med on structure, low–med on rates]

Model assumptions (in `funnel.py`):
- Installs grow from 1× to 3× across the window (back-loaded, as in ch. 05).
- Yearly 3-day trial on until Sun Dec 13. A trial counts only if it converts by Dec 16 (≥3 days left).
- After Dec 13, "pay now" yearly replaces the trial (rate shown in the table).
- Launch offer $29.99 first year Nov 25 → Nov 30 lifts direct yearly buys by 30% (E, low).
- Weekly renewals: first renewal as shown, then 70%, then 80%.
- Party Pack repeat buy: 20% within 5 days.
- Roll Pass from Dec 1 (v1.1).

| Step | **Low** (≈ median app) | **Base** (good execution) | **High** (top quartile) | Benchmark it's tied to |
|---|---|---|---|---|
| Install → first shot | 55% | 70% | 85% | ch. 09 target (E) |
| Install → first AI result | 40% | 55% | 70% | deep/03 target (E) |
| Install → onboarding paywall view | 40% | 55% | 70% | shown after the first AI result |
| Install → yearly trial start | 3% | 5% | 8% | AI apps 5.31%; NA all 7.1% |
| Trial → paid | 18% | 25% | 33% | P&V 22.2% median / 33.1% top quartile; ≤4-day 25.5% |
| Install → yearly direct (trial on) | 0.15% | 0.3% | 0.6% | ch. 05/06 |
| Install → yearly direct (trial off, Dec 13–16) | 0.4% | 0.8% | 1.4% | ch. 06 used 0.9% (E) |
| Install → weekly | 0.3% | 0.6% | 1.0% | ch. 05 0.8%, ch. 06 0.6%, ch. 21 1.5% |
| Weekly first renewal | 31% | 45% | 55% | P&V quartiles |
| Install → Party Pack | 0.5% | 1.0% | 2.0% | ch. 05/06 1.0%, ch. 21 2.0% |
| Install → Big Night | 0.1% | 0.2% | 0.4% | ch. 06 |
| Install → Roll Pass (from Dec 1) | 0.15% | 0.3% | 0.6% | ch. 06 0.4% |
| Refunds: yearly via trial / weekly / packs | 7% / 7% / 3% | 6% / 6% / 2% | 5% / 5% / 2% | P&V trial 6.4%; NA 3.4% |
| **Payers per 1,000 installs** (all products) | **16.5** | **34.2** | **67.0** | |
| …of which subscribers | 9.2 (0.9%) | 19.7 (2.0%) | 38.0 (3.8%) | NA D35 2.8% median, 6.0% top quartile (in-window is shorter than 35 days) |
| **Gross per install, in window** | $0.32 | **$0.70** | $1.41 | NA D14 RPI $0.38 median |
| After refunds, per install | $0.31 | $0.67 | $1.35 | |
| **Contest profit per 1,000 installs, Apple 30%** | **$214** | **$468** | **$946** | |
| Contest profit per 1,000 installs, Apple 15% | $260 | $568 | $1,149 | |
| Break-even ad cost per install (30%) | $0.21 | $0.47 | $0.95 | US P&V median CPI $2.79 (ch. 16) |

**Contest profit by installs and funnel quality (30% fee):**

| Installs in window | Low | Base | High |
|---|---|---|---|
| 2,000 (ch. 05 "bear" volume) | $428 | $936 | $1,892 |
| 9,000 (ch. 05 "base" volume) | $1,926 | $4,212 | $8,514 |
| 30,000 (ch. 05 "bull" volume) | $6,420 | $14,040 | $28,380 |

**Installs needed:** $5K profit needs ~23K / ~10.7K / ~5.3K installs (low / base / high). $20K needs ~93K / ~43K / ~21K.

### 1c. Why the chapters disagreed, one line each

| Chapter | Its number | What it really was | Where it sits now |
|---|---|---|---|
| 05 | Base $6,064 cash for 9,210 installs = **$0.66** per install; bear $0.35 | Same funnel shape, before Apple's cut | ≈ my Base ($0.67) and Low ($0.31). Consistent. |
| 06 | **$0.76** gross per install, $505 per 1,000 at 30% | Top-quartile rates labelled "base" | Between Base and High |
| 12 | 2.0–2.4% download-to-paid | Global median + an Asia-Pacific number | Use NA 2.8% for subscriptions; Digi Base 2.0% subs in-window, 3.4% incl. packs |
| 16 | "≥4% paying in week 1" gate for ads | A conversion gate with no CPI check | 4% ≈ Base-to-High; still below break-even CPI. Gate replaced (R12) |
| 21 | 59 payers, $902 net per 1,000 | 40% trial→paid, above top quartile | = High case |

---

## 2. Small-sample statistics in plain words

### 2a. The maths

To compare two versions, you need enough people in each group that random luck can't explain the gap. The standard formula for a yes/no outcome (bought or didn't):

> people per group ≈ (z-number)² × [p₁(1−p₁) + p₂(1−p₂)] ÷ (p₂ − p₁)²

The z-number is 2.80 for "95% sure, catch a real effect 80% of the time" (the textbook standard) and 1.68 for "80% sure, catch it 80% of the time" (a looser standard that fits a reversible business call). Evan Miller's shortcut is n ≈ 16·p(1−p)/δ², which gives about the same answer. [V, Evan Miller]

**People needed in each group** (computed in `ss.py`) [V maths]:

| Starting rate | What it is in Digi | Lift to detect | Strict (95% two-sided, 80% power) | Loose (80% one-sided, 80% power) |
|---|---|---|---|---|
| 3% | install → any payment | +20% | 13,911 | 5,022 |
| | | +50% | 2,514 | 908 |
| | | +100% | 746 | 269 |
| 5% | onboarding paywall view → trial/purchase | +20% | 8,155 | 2,944 |
| | | +50% | 1,468 | 530 |
| | | +100% | 432 | 156 |
| 8% | out-of-digis sheet → purchase | +20% | 4,917 | 1,775 |
| | | +50% | 879 | 317 |
| | | +100% | 255 | 92 |
| 25% | trial → paid | +20% | 1,248 trials | 450 trials |
| — | **revenue per install** (most pay $0, a few pay $40) | +20% | **15,524** | 5,604 |
| | | +50% | 2,484 | 897 |
| | | +100% | 621 | 224 |

Revenue per install is the right goal but the hardest to measure. In the Base mix its spread is about **6× its average** (mean $0.81, standard deviation $5.09 per install, before refunds). That's why it needs as many people as a 3% conversion test. [E, med]

### 2b. What this means at Digi's volume

| Total US installs in the window | People per group (50/50) | Smallest lift you can read on install→paid (loose standard) |
|---|---|---|
| 2,000 | 1,000 | about +80% |
| 5,000 | 2,500 | about +45% |
| 10,000 | 5,000 | about +30% |
| 20,000 | 10,000 | about +20% |

Most real paywall changes move conversion by 5–20%. **So at 2,000–10,000 installs, a test on the main paywall will usually end "not sure".** Tests are only worth it where (a) the screen gets heavy traffic relative to its base rate, and (b) the two versions are very different, so a 50–100% gap is plausible. [E, high]

### 2c. Bayesian "chance to win" vs fixed-sample tests

- **RevenueCat shows "chance to win"** (the probability a variant beats the control) and **95% credible intervals**. Its docs say "many developers consider 95% Chance to Win sufficient", and that the right threshold "depends on the test and your risk tolerance". [V]
- **Peeking is the trap.** If you check a classic test every day and stop the first time it looks significant, your false-alarm rate climbs. Evan Miller's table: to keep a true 5% error rate with **5 peeks** you must demand 1.4%; with **10 peeks**, 1.0%. In his worst case (checking after every user), a nominal 5% becomes **26.1%**. [V]
- **What Digi should do (E, high):**
  1. Write the stop date and the minimum sample **before** starting. Don't stop early because a number looks good.
  2. Read the result once at the planned end. Use **80% chance to win** as the bar for a cheap, reversible change (which box is shown first), and **95%** for anything hard to undo (a price that existing subscribers keep).
  3. Allow one early stop only for harm: if a variant is at **≤10% chance to win** after half the planned sample, stop it. This protects contest money.
  4. Use **Realized LTV per customer** (RevenueCat's revenue minus refunds, per enrolled customer) as the main metric. RevenueCat says it "should frequently be your primary success metric". [V]

### 2d. Holdouts and calendar traps

- **Black Friday Nov 27 and Cyber Monday Nov 30** change buying behaviour. In 2025, apps running a promo saw **+49% new payers on Black Friday** and at least +25% through Cyber Monday. Apps without one saw −16% for the week. [V, RevenueCat holiday study, via ch. 06]
- **Weekends.** Boothie earns **53% more per day on Sat–Sun than Tue–Fri**. [V, TrustMRR, via ch. 23]
- **Consequence:** never judge a change by "before vs after". If you change the paywall on Thursday and Friday is better, the weekend did it. A randomised test with both arms running on the same days cancels these effects out. [E, high]
- **Run every test in whole weeks** (7 or 14 days), so each arm sees the same mix of weekdays and weekend nights.
- **Holdouts** (a slice of users who never see a change) answer "did the whole thing help?" Digi can't afford them in the window. A 10% holdout of 5,000 installs is 500 people, too few to read anything (§2b). Use one after Dec 16 for the push and win-back programme. [E, med]
- **Trial lag.** Trial conversions arrive 3 days after the start. RevenueCat warns that early trial-conversion numbers look low until that lag passes. Read any test at least **4 days after its last enrolment**. [V]

---

## 3. Which experiments are worth running in the window (deliverable d)

### 3a. Every candidate, ranked

"Value" = expected change in contest profit if the better arm is found and rolled out. "Readable?" = can the test reach a usable answer at 5,000 installs?

| # | Candidate | Expected profit impact (E) | Readable at 5K installs? | Tool | App Review risk | Contest risk | Verdict |
|---|---|---|---|---|---|---|---|
| 1 | **Out-of-digis sheet: Party Pack first vs Plus first** | ±10–25% of sheet revenue (~5–10% of total) | **Yes** for a 50%+ gap: ~1,750 sheet views → 875 per arm | RevenueCat Experiments (placement `out_of_digis`) | Low. Same products, different order | None | **Run (E1)** |
| 2 | Yearly $39.99 vs $49.99 | −15% to +20% of yearly revenue | Only a disaster is readable | RevenueCat Experiments | Low (price per product, normal) | $49.99 must stay above AI cost (it does) | **Run only if volume allows (E2)** |
| 3 | First screenshot on the default store page | +10–40% installs from search/browse traffic | Maybe, Apple decides | **Apple Product Page Optimization** | Treatments are reviewed; no app update unless the icon changes | None | **Run (E3)** |
| 4 | Yearly-first (A) vs weekly-trial-first (B) | B loses ~37% of in-window profit (ch. 06 §8) | Yes, but the loss is known | RevenueCat | Low | Costs money in the window | **Rule: A in window; test Dec 17 → Jan 31** |
| 5 | 3 vs 2 free digis | ~$17 per 1,000 installs saved, unknown conversion loss | No (effect too small) | Remote config | None | AI cost isn't deducted | **Rule R9, not a test** |
| 6 | Launch-week $29.99 offer on/off | +20% new payers in BF week (RevenueCat) | No (one week, small n) | — | **Instant decline offers draw scrutiny.** Show at next app open only (ch. 08) | $29.99 nets $20.99 at 30%; 300-digi cap keeps AI ≤ $9 | **Rule: run it for everyone, no holdout** |
| 7 | Trial on/off after Dec 12 | Trials started after ~Dec 13 15:00 earn $0 in-window | No need, it's arithmetic | RevenueCat offering swap | Low | None | **Rule R10** |
| 8 | Party Pack $5.99 vs $4.99 | $4.99 needs +20% more buyers just to break even | No (~2,900 views per arm at the loose standard) | RevenueCat | Low | $4.99 nets $3.49; 25 digis cost ~$0.61–0.94 (ch. 21). Passes | **Don't test in window** |
| 9 | Paywall copy or visuals | Usually <10% | No | RevenueCat metadata | Low | None | **Don't (ch. 18)** |

Why only three: the main paywall can carry one test at a time without slicing traffic further, and the out-of-digis sheet and the App Store page are separate traffic. [E, high]

### 3b. E1: Out-of-digis sheet, Pack first vs Plus first

**Question:** when someone uses their 3rd free digi and taps another AI look, which box should come first?

| | Control (A): "Plus first" | Treatment (B): "Pack first" (ch. 06 default) |
|---|---|---|
| Top card | Digi Plus Yearly, $39.99 (trial until Dec 12) | **Party Pack, $5.99, 25 AI digis** |
| Second | "Just tonight? Party Pack $5.99" | "Or get Plus: 60 a month" |
| Copy | ch. 18 Variant A | ch. 18 Variant B ("Party tonight?") |

- **Primary metric:** Realized LTV per customer (in-window revenue minus refunds, per person who saw the sheet). **Secondary:** sheet view → any purchase.
- **Audience:** US, iOS, new customers, app version ≥ the first build that sends `out_of_digis` paywall impressions. 100% of eligible users, 50/50.
- **Start:** the day v1 goes live (target Wed Nov 25). **Stop:** Wed Dec 9, 23:59 PT (two full weeks, covers Black Friday and two weekends in both arms). **Read:** Sun Dec 13.
- **Minimum sample:** 600 sheet viewers per arm. Below that, keep "Pack first" (ch. 06's choice) and stop.
- **Decision:** roll out the arm with **≥80% chance to win** on Realized LTV per customer. If neither reaches 80%, keep Pack first: it refunds less (packs ~2% vs trials 6.4%) and is better for MEA traffic after the contest.
- **Expected traffic (E, med):** 70% of installs use free digis; about half of those tap again after the 3rd → ~35% of installs see the sheet. At 5,000 installs, ~1,750 views, ~875 per arm.
- **What it can find:** a 50% gap in purchase rate at the loose standard (§2a: 317 per arm at 8%). A gap in revenue per view needs about 900 per arm for +50%.

### 3c. E2: Yearly $39.99 vs $49.99 (conditional)

**Start condition:** average ≥ **250 US installs a day over Fri Nov 27 → Mon Nov 30.** If not, don't run it in the window. Run it Dec 17 → Jan 31 instead.

- **Why the condition:** at 250 a day for 11 days, ~2,750 installs → ~1,375 per arm. That's enough to spot a **disaster** (revenue per install down 50%+), not a modest win.
- **Framing:** a "do no harm" test. The question is "can we charge $49.99 after Dec 16 without hurting conversion badly?", not "which earns more this week".
- **Arms:** Offering `yearly39` (control) vs `yearly49`. Same weekly ($6.99), same packs, same 3-day trial, same copy. Only the yearly product changes.
- **Start:** Wed Dec 2, 00:00 PT (after the launch offer ends). **Stop enrolling:** Sat Dec 12, 23:59 PT (before the Dec 13 trial switch, which would mix two changes). **Read:** Wed Dec 16 morning (trials started Dec 12 have converted).
- **Early harm stop:** if `yearly49` is at ≤10% chance to win on Realized LTV per customer after 600 enrolled per arm, stop it.
- **Decision after Dec 16:** if `yearly49` is at ≥50% chance to win, or its credible interval rules out a loss bigger than 15%, make $49.99 the post-contest price and re-test with a proper sample in January.
- **Contest check:** $49.99 × 70% = $34.99 net, against 60 digis/month × 12 at ~$0.0244 (5.0 Flash-led) = $17.57 worst case (ch. 21). Passes the "no selling below cost" rule.
- **Existing subscribers:** never move. Price tests apply to new customers only (ch. 06 §5.5).

### 3d. E3: Apple Product Page Optimization (store page, not the paywall)

- **What Apple allows:** up to **3 treatments** against the original page; up to **90 days**; one test at a time; can't edit a running test; you choose the share of traffic and it's split evenly; each person sees the same version throughout; treatments are shown on iOS/iPadOS 15+; new metadata must pass App Review; treatments without new icons don't need a new app version. Apple recommends waiting for **90% confidence** before applying. [V, Apple PPO page]
- **Caveat:** it tests the **default** product page. TikTok bio links should land on Custom Product Pages (ch. 12 §8), so E3 mainly measures **search and browse** visitors. [V for "original page"; E for traffic share]
- **Test:** first screenshot only. Original: ch. 12 Option A "booth strip" frame. Treatment 1: "digicam flash before/after". Treatment 2: "Christmas party strip with date stamp `'26 12 19`".
- **Traffic:** 75% in the test (25% per treatment, 25% original).
- **Start:** as soon as the treatments are approved (submit with or right after v1; target Fri Nov 27). **Stop:** at 90% confidence or Wed Dec 16, whichever is first. Apply the winner only if it's at ≥90%.
- **Metric:** conversion rate (first-time downloads ÷ unique impressions) in App Analytics.

### 3e. Setup steps in App Store Connect and RevenueCat (do these before submitting v1)

**App Store Connect (one subscription group "Digi Plus"):**
1. `digi_plus_yearly_39`: $39.99/year, intro offer = **3-day free trial** (US).
2. `digi_plus_yearly_49`: $49.99/year, intro offer = 3-day free trial. (For E2; it costs nothing to exist.)
3. `digi_plus_yearly_launch`: $39.99/year, intro offer = **pay up front $29.99 for 1 year** (US), for the launch/Black Friday offer.
4. `digi_plus_weekly`: $6.99/week, no intro offer.
5. Consumables: `party_pack_25` $5.99, `big_night_60` $11.99, `roll_pass_30` $4.99.
6. Submit **all** products with the v1 build. First-time in-app purchases are reviewed together with an app version, so a product added later waits for the next build. [E, high; matches Apple's normal flow]

**RevenueCat:**
1. Offerings:
   - `main_yearly39` (default): yearly_39, weekly, party_pack_25. Metadata `{"layout":"plus_first","variant":"A"}`.
   - `main_yearly49`: same, with yearly_49.
   - `ood_plus_first` and `ood_pack_first`: same products, metadata `{"layout":"plus_first"}` / `{"layout":"pack_first"}`.
   - `launch_offer`: yearly_launch only.
   - `main_no_trial` (for Dec 13): yearly_39 shown as "pay now" (the product keeps its trial; switch to a no-trial yearly product if you want to remove the trial completely, see rule R10).
2. Placements: `onboarding`, `out_of_digis`, `roll_9th_friend`, `next_open_offer`, `settings`. The app asks RevenueCat for the offering **by placement**, never by hard-coded product ID.
3. Custom paywall: call `trackCustomPaywallImpression` every time a paywall shows. Without it, RevenueCat counts users as "never saw a paywall" and may drop them from results. Needs iOS SDK **5.66.0+** for the newer enrolment options. [V, RevenueCat docs]
4. Experiments → New: name, Offering A and B, audience (Country = US, Platform = iOS, "new customers", app version ≥ 1.0.0), audience % = 100, primary metric = **Realized LTV per customer**. Note the estimated sample and duration RevenueCat gives, then press Start.
5. When done: **"Set as default offering"** or **"Create targeting rule"** for the winner. Pause stops new enrolment and keeps people in their arm; Stop is permanent. [V]

**Eligibility check for the launch offer:** use the SDK's intro-offer eligibility check before showing the $29.99 sheet. Someone who already started the 3-day trial on `yearly_39` is **not eligible** for another intro offer in the same group, and would see $39.99 at Apple's sheet. Don't show them the $29.99 sheet. [C, Apple help via search]

---

## 4. Attribution without paid ads (what each method proves)

### 4a. The methods

| Method | What it gives | Limits | Proves on the verification call |
|---|---|---|---|
| **App Store Connect → Analytics → Acquisition** | Installs and sales by source type (App Store Search, Browse, App Referrer, Web Referrer) | Counts only users who share analytics with developers; some installs show no source (ch. 23) | The **mix**: mostly web referrer (TikTok/IG links) and search, no paid line |
| **Campaign links** (`?pt=…&ct=…`), one per account and placement | Impressions, product page views, first-time downloads, usage, sales and subscriptions per `ct` | A download counts only **within 24 h** of the tap; last link tapped wins; a campaign appears only after **5 first-time downloads**; data after **24 h**; tokens up to 30 characters [V] | **Which owned account** drove installs and sales |
| **Custom Product Pages** (up to 70) | Per-page impressions, downloads, conversion | Default page traffic not split; deep links on iOS 18+ only (ch. 12/16) | Which **theme** (Christmas, strip, roll) converts |
| **"Where did you hear about Digi?"** one-tap screen | Self-reported source per user, joined to purchases in PostHog/RevenueCat | People misremember; "a friend" often means "a TikTok a friend sent" | Supporting evidence only |
| **digi.pink/go/… redirects with UTM tags** | Clicks per post, per account, per creator (Cloudflare logs or the contest tracker) | Clicks, not installs; TikTok in-app browser hides some referrers | That each post produced **traffic**, with timestamps |
| **Offer codes per creator** | Redemptions per code in App Store Connect | One code per offer per customer; codes expire in ≤6 months; 1M codes per quarter per app [C]. Since late 2025 offer codes also work for consumables (C, Mactrast Oct 2025) | That a named creator's audience **bought**. Any code you hand out must be logged as marketing (ch. 23 Q6) |
| **Apple AdServices token** | Campaign, ad group and keyword for **Apple Ads** installs only, no ATT prompt needed for the standard data (ch. 16) | Says nothing about organic traffic | That paid installs are **$0** (or exactly the $100 test, after Dec 16) |
| **App Store Connect peer benchmarks** (since Mar 25, 2026) | Your download-to-paid and proceeds per download vs a peer group, plus cohorts by download source and offer start date | Peer group method not fully documented; differential privacy adds noise [V/C] | That conversion is normal for organic traffic (no bought installs) |

### 4b. The link plan

One campaign token per account and placement, all lowercase, ≤30 characters:

| Placement | Redirect | App Store link token `ct=` |
|---|---|---|
| TikTok account 1 bio | `digi.pink/go/tt1` | `tt1_bio` |
| TikTok account 2 bio | `digi.pink/go/tt2` | `tt2_bio` |
| TikTok account 3 bio | `digi.pink/go/tt3` | `tt3_bio` |
| Instagram bio | `digi.pink/go/ig` | `ig_bio` |
| Instagram Story link sticker (per week) | `digi.pink/go/igs-w48` | `igs_w48` |
| Shared photo page | `digi.pink/s/<id>` banner | `web_share` |
| Roll guest page | `digi.pink/r/<id>` banner | `web_roll` |
| digi.pink home / SEO pages | Smart App Banner with `affiliate-data` | `web_home`, `web_seo` |
| Creator X (if any) | `digi.pink/go/cx-name` | `cr_name` |

- Point each `/go/` link at the matching **CPP URL with the `ct` added**. [E, med: CPP URLs are ordinary App Store URLs with a page ID; check in ASC that the token sticks]
- Log every redirect hit (time, path, UTM, user agent family) in Cloudflare or the contest tracker. Never log IP addresses or names.

### 4c. The "where did you hear about Digi?" screen

- **When:** after the first saved photo, never before the camera (ch. 09 tap budget). One screen, one tap, a visible "Skip".
- **Copy (E):** title "Quick one: how did you find Digi?" Buttons: "TikTok" · "Instagram" · "Snapchat" · "A friend sent me a photo or roll" · "App Store search" · "Somewhere else". Small text: "Helps us make more of what you like."
- **Event:** `attribution_answer {answer, skipped}`. Store the answer as a person property, so every later purchase carries it.
- **Use:** weekly, compare "TikTok" answers with ASC web-referrer installs. If they disagree by more than 2×, trust ASC.

### 4d. What can't be proven, said plainly

- **No method links a single TikTok post to a single buyer.** Apple doesn't pass the campaign token into the app, and there's no install referrer on iOS. Per-post numbers are estimates from timing (installs in the 48 h after a post vs the days before). [E, high]
- On the call, say: "Each account has its own App Store campaign link. Here are installs and sales per link. Here are our posts with dates. Here are our ad accounts at $0."

---

## 5. Decision rules: if X by date Y, then do Z (deliverable c)

All changes below are remote (RevenueCat offerings, remote config or content). None needs a new build, so they don't touch guideline 2.5.19.

| # | Check on | If | Then | Why |
|---|---|---|---|---|
| R1 | Launch day +2 (≈ Fri Nov 27), then daily | Install → first AI result **< 40%** (≥200 installs) | Look at the onboarding step funnel. Usual causes: camera permission denied, consent screen exit, AI wait > 30 s. Fix the copy or model routing that day | Activation caps everything below it |
| R2 | Daily | Median AI result time **> 30 s** or failure rate **> 5%** | Switch the look to the backup model ID in the `looks` table (ch. 21 §4.4) | Slow or failed results cause refunds |
| R3 | Sat Nov 28 (≥300 onboarding paywall views) | Onboarding view → trial or purchase **< 5%** | Make "Yearly, pay now" a visible second button next to the trial (AI-app users start trials at half the normal rate but buy directly 14% more); check the result image shows above the price | Adapty AI-app pattern |
| R4 | Mon Nov 30 (cohort Nov 25–26, D4) | Trial → paid **< 18%** | Cap trial digis at 5; turn on the 24 h "trial ends tomorrow" push; check result quality on 20 random outputs | Below the P&V lower range |
| R5 | Tue Dec 1, 10:00 | Launch offer | Turn off `next_open_offer`; remove the crossed-out price | Real end date (no fake urgency) |
| R6 | Tue Dec 1 (week 1 review) | Revenue per 1,000 views **< $0.40** and views > 500K | Content is reaching people who don't buy. Shift to the 2 formats with the best installs per 1,000 views; cut the rest. Don't add accounts yet | Volume won't fix a weak format |
| R7 | Every Mon and Thu | A format has **2 of its last 3 posts ≥ 2× the account's median views** and its campaign link shows installs rising | Double down: 3 variants a day of that format across accounts for 4 days, same hook structure, new photos | Ch. 14 hook formula |
| R8 | Within 2 h of any post passing 300K views | — | (a) Raise OpenRouter spend cap; (b) check paywall and purchases on a real device; (c) post 2 follow-ups in the same format within 24 h; (d) pin the post | A spike lasts 2–4 days (ch. 05) |
| R9 | Daily | AI cost **> 25% of net revenue** for 3 days in a row, **or** > 5% of AI jobs come from devices that fail App Attest, **or** more than 30% of free digis go to accounts created in the last hour on the same network | Cut free digis 3 → 2 (remote config), only for new devices | Replaces ch. 21's "< 4% conversion" rule |
| R10 | **Sun Dec 13, 15:00 Cairo** | Digi is in the top 10 by profit, or within 3× of 3rd place | Switch `onboarding` to `main_no_trial`: yearly "pay now" first, trial second. Keep it until Dec 16, 15:00, then switch back | A 3-day trial started after ~Mon Dec 14, 15:00 converts after the contest ends (ch. 23) |
| R10b | Sun Dec 13 | Digi is **not** in the running | Keep the trial (better 12-month value) | Don't trade LTV for contest money you can't win |
| R11 | Fri Dec 4 and Fri Dec 11, 12:00 ET | Rolls are live and **≥ 50 rolls created** in the past week, and the 9th-friend sheet converts **≥ 5%** | Push the Roll Pass: in-app banner on the camera screen Fri–Sat evening; one push to opted-in users: "Party tonight? Start a roll for everyone." | Weekends earn +53% (Boothie) |
| R11b | Same | 9th-friend sheet converts **< 2%** after 100 views | Raise the free roll limit to 12 friends and put the Roll Pass behind "More friends" | Don't push a product nobody buys |
| R12 | Any time before Dec 16 | Only if D7 cash per US install **≥ $2.50** (hard-paywall territory) | Open a **$100 Apple Ads** exact-match test on 10 long-tail keywords. Otherwise **open it Thu Dec 17** with the Christmas strip CPP | Break-even CPI at High is $0.95; median CPI $2.79 |
| R13 | Daily | Refunds **> 6%** of purchases (7-day rolling, ≥ 30 purchases) | Read every refund reason; add "free re-roll on a bad result"; make sure the price line is the biggest price on the paywall | P&V trial refunds 6.4% |
| R14 | Daily | TrustMRR not synced | Reconnect the same day; screenshot before and after | Lenz lesson (ch. 23) |
| R15 | Wed Dec 9 | E1 result at ≥ 80% chance to win | Roll out the winner on `out_of_digis` | §3b |
| R16 | Thu Dec 10 | — | Last day to start anything new (tests, offers, accounts) | Results wouldn't land by Dec 16 |
| R17 | Wed Dec 9 (leaderboard) | Digi's profit < 1/3 of 3rd place | Switch to long-term mode: keep trial on Dec 13, stop E2, plan Package B test for Dec 17 | Same logic as R10b |
| R18 | Daily | Weekly plan > 30% of new subscriptions | Check that Yearly is pre-selected and the weekly card is visually second | Yearly is worth ~2.5–3× weekly in-window (ch. 23) |

---

## 6. Content metrics: from views to paid

### 6a. The chain and where each number comes from

| Step | Where to read it | Account type needed | Label |
|---|---|---|---|
| Views per post | TikTok analytics / Instagram Insights | TikTok: analytics in TikTok Studio (business accounts certainly; I couldn't re-check personal accounts). Instagram: professional (creator or business) accounts only | C |
| Profile views | TikTok analytics (account level, not per post) | Same | C |
| Link taps | Your `digi.pink/go/` logs; Instagram shows link-sticker taps in Story insights | Bio links: business accounts get one; personal accounts are widely reported to need 1,000 followers, but vendors disagree on whether that rule still applies in 2026 | C (vendor blogs, Nov 2026) |
| Store page views | ASC → campaign `ct` → product page views | — | V |
| Installs | ASC → campaign first-time downloads (24 h window) | — | V |
| Paid | ASC campaign sales and subscriptions; RevenueCat by `attribution_answer` | — | V / E |

Set every Digi account up as a **business account** (ch. 14) so the bio link and analytics are available from day one.

### 6b. Revenue per 1,000 views: what the case studies say

| Case | Numbers | Revenue per 1,000 views | Grade |
|---|---|---|---|
| **Lenz AI** (digicam effect, TrustMRR listing) | Seller claims "60M views" and "$20K+"; TrustMRR verified all-time $35.1K | **$0.33–0.59** (lifetime revenue ÷ lifetime views) | C views, V revenue (ch. 05). **Best anchor in the niche** |
| **Oliver Henry's "Larry" agent** (Snugly/Liply, slideshows) | ~500K views in under a week; 108 paying subscribers; $588 MRR | ~0.22 payers per 1,000 views; ~$1.18 of MRR per 1,000 views | C (Postiz blog, Apr 16, 2026, via ch. 14). Different niche (rooms/home), and subscribers may include other sources |
| Earlier target (deep README) | 5 installs per 1,000 views × $0.66 | $3.30 | E, prior. Ch. 05 called it 5–10× too optimistic |
| Ch. 14 clipping maths | Half of Larry's rate × ~$25 per payer | $2.80 | E, low |
| Ch. 15 creator maths | 0.2 payers per 1,000 views × ~$19 | ~$3.80 | E, low |
| **This chapter, Base funnel** | 0.5 / 1.5 / 4 installs per 1,000 views × $0.70 gross | **$0.35 / $1.05 / $2.80** | E, med |

**Views needed for $5K contest profit at the Base funnel:** 21M views at 0.5 installs per 1,000; 7.1M at 1.5; 2.7M at 4. [E, med]

### 6c. Thresholds (7-day trailing, all owned accounts together)

- **Revenue per 1,000 views** = RevenueCat gross after refunds (last 7 days) ÷ total views of posts published in the last 7 days × 1,000.
- **Green ≥ $1.00** (on track for Base). **Amber $0.40–1.00.** **Red < $0.40** (Lenz-like; Base then needs a dozen accounts, ch. 05).
- **Installs per 1,000 views** = ASC first-time downloads from all `tt*`/`ig*` campaigns ÷ views × 1,000. Green ≥ 1.5, amber 0.5–1.5, red < 0.5.
- Per account, weekly: fill the table below on Mondays.

| Week | Account | Posts | Views | Profile views | Link taps (/go/) | ASC page views (ct) | ASC installs (ct) | ASC sales (ct) | Installs per 1K views | Best post (link) |
|---|---|---|---|---|---|---|---|---|---|---|

---

## 7. The event schema and the one-screen dashboard (deliverable e)

### 7a. Rules
- Tool: PostHog (or similar) in the app, RevenueCat webhooks for money. **Money events come from RevenueCat, not the phone** (the phone misses refunds, renewals and trial conversions).
- No names, emails, photos or precise location in any event. Users are anonymous IDs (the RevenueCat app user ID).
- Every event carries: `app_version`, `storefront` (e.g. USA), `cohort_date` (install day, PT), `days_since_install`, `heard_from` (if answered), `offering_id` and `experiment_variant` (when a paywall has been fetched), `is_subscriber`.

### 7b. Events (extends ch. 09 §7 and deep/03)

| Event | When | Properties |
|---|---|---|
| `app_first_open` | First launch | `link_path` (if opened from a digi.pink universal link: `s`, `r`, `l`), `locale` |
| `onboarding_step` | Each onboarding screen | `step`, `step_index` |
| `perm_camera` | Camera prompt answered | `result`: granted / denied |
| `first_shot` | First shutter tap | `look_id`, `seconds_since_open` |
| `photo_saved` | Any save | `look_id`, `is_ai`, `is_strip` |
| `attribution_answer` | "Where did you hear" | `answer`, `skipped` |
| `ai_consent` | AI consent screen | `result`: accepted / declined |
| `ai_request` | AI look tapped and sent | `look_id`, `model`, `digi_source`: free / allowance / pack / trial |
| `ai_result` | Result shown | `look_id`, `model`, `seconds`, `success`, `retry_count` |
| `ai_job_cost` | **Server**, per job | `model`, `cost_usd`, `moderation_cost_usd`, `success` |
| `out_of_digis` | User has 0 digis and taps an AI look | `digi_source_last` |
| `paywall_view` | Any paywall or sheet shows | `placement`: onboarding / out_of_digis / roll_9th_friend / next_open_offer / settings; `offering_id` |
| `paywall_close` | Closed without buying | `placement`, `seconds_on_screen` |
| `package_tap` | User taps a plan card | `package_id` |
| `purchase_start` | Apple sheet opened | `product_id`, `placement` |
| `purchase_sheet_cancel` | User cancels Apple's sheet | `product_id` |
| `trial_started` / `trial_converted` / `trial_cancelled` | **RevenueCat webhook** | `product_id`, `price_usd` |
| `purchase` | **RevenueCat webhook** (initial purchase or consumable) | `product_id`, `price_usd`, `is_intro_offer`, `offering_id` |
| `renewal` / `refund` / `billing_issue` | **RevenueCat webhook** | `product_id`, `price_usd` |
| `share_tap` | Share target chosen | `target`: ig_story / snap / tiktok / messages / save / other; `has_watermark` |
| `share_link_created` | `/s/` or `/r/` link made | `kind`: photo / strip / roll |
| `share_page_view` | **Worker**, web | `kind`, `utm_source` |
| `roll_created` | Host starts a roll | `guest_limit` |
| `roll_invite_sent` | Invite shared | `channel` |
| `roll_join_view` / `roll_join_done` | **Web** guest page | `roll_id_hash` |
| `roll_developed` | 9 a.m. reveal | `photos`, `guests` |
| `perm_notif` | Push prompt answered | `result` |
| `review_prompt` | Apple rating prompt requested | `trigger` |
| `report_submitted` | Content report | `reason` |

### 7c. Funnels to save in PostHog
1. `app_first_open` → `first_shot` → `ai_result` → `paywall_view (onboarding)` → `trial_started` or `purchase` (window: 24 h).
2. `out_of_digis` → `paywall_view (out_of_digis)` → `purchase` (window: 1 h), broken down by `experiment_variant`.
3. `roll_created` → `roll_invite_sent` → `roll_join_done` → `roll_developed`.
4. `share_tap` → `share_page_view` (by `kind`).

### 7d. The one-screen daily dashboard

Pin these tiles in one PostHog dashboard, ordered as below. Read top-left to bottom-right in 5 minutes.

| Row | Tile 1 | Tile 2 | Tile 3 | Tile 4 |
|---|---|---|---|---|
| **Money** | Yesterday's gross, refunds, net (RevenueCat Overview) | Cash per install, 7-day cohort (RC revenue ÷ new customers) | Payers by product (yearly / weekly / packs / roll) | Refund rate, 7-day |
| **Funnel** | Install → first shot → AI result (funnel 1) | Onboarding paywall view → trial/purchase | Trial → paid (cohorts 4+ days old) | Out-of-digis view → purchase, by E1 arm |
| **Growth** | US installs per day (ASC; RC "new customers" as the same-day proxy) | Installs by `ct` campaign (ASC, 24 h lag) | Revenue per 1,000 views (from the daily sheet) | `heard_from` split |
| **Health** | AI cost ÷ net revenue | AI failures and median seconds | Crash-free sessions (Sentry) | TrustMRR synced? Ad spend = $0? |

**RevenueCat charts to check (C, names as RevenueCat uses them):** Revenue, New Customers, Active Trials, Trial Conversion, Initial Conversion, Conversion to Paying, Realized LTV per Customer, Refund Rate, Active Subscriptions. Experiments page for E1/E2.

**App Store Connect reports:** Analytics → Overview (impressions, product page views, conversion rate, downloads, proceeds); Acquisition → Sources, Campaigns, Custom Product Pages; the monetization benchmarks (download-to-paid, proceeds per download vs peers); Sales and Trends (units and proceeds by day and country); Product Page Optimization results for E3.

**The daily sheet** (Google Sheet, one row a day): date · US installs · gross · refunds · net · payers (Y/W/P/R) · paywall conv. · trial→paid · AI cost · views (all accounts) · revenue per 1K views · posts published · notes. This doubles as verification evidence (deep/09).

---

## 8. Daily and weekly metrics checklist, Nov 24 → Dec 16 (deliverable b)

### 8a. Daily (10 minutes; from Dec 5, 10 minutes at night after study)

| # | Metric | Green | Amber | Red → action |
|---|---|---|---|---|
| 1 | TrustMRR synced and matches RevenueCat | Yes | Lag < 24 h | Not synced → R14 |
| 2 | Ad spend ledger | $0 | — | Anything ≠ $0 that isn't logged → log it today |
| 3 | US installs per day (wk 1 Nov 25–Dec 1 / wk 2 Dec 2–8 / wk 3 Dec 9–16) | ≥100 / ≥250 / ≥450 | 50–99 / 120–249 / 200–449 | Below → more posts in the best format (R6, R7) |
| 4 | Install → first shot | ≥70% | 55–70% | < 55% → camera permission or onboarding (R1) |
| 5 | Install → first AI result (24 h) | ≥55% | 40–55% | < 40% → R1 |
| 6 | Onboarding paywall view → trial or purchase | ≥8% | 5–8% | < 5% → R3 |
| 7 | Trial → paid (cohorts ≥ 4 days old) | ≥30% | 20–30% | < 20% → R4 (P&V median 22.2%) |
| 8 | Out-of-digis view → purchase | ≥8% | 4–8% | < 4% → check pack copy and price display |
| 9 | Cash per install, 7-day cohort (gross after refunds) | ≥$0.70 | $0.35–0.70 | < $0.35 → median-app funnel; fix 5–8 first |
| 10 | Refunds, 7-day (≥30 purchases) | ≤3.4% | 3.4–6% | > 6% → R13 |
| 11 | AI cost ÷ net revenue | ≤15% | 15–25% | > 25% for 3 days → R9 |
| 12 | AI failures / median wait | <2% / <15 s | 2–5% / 15–30 s | > 5% / > 30 s → R2 |
| 13 | Crash-free sessions | ≥99.5% | 99–99.5% | < 99% → hotfix via OTA if JS-only |
| 14 | Unanswered support emails > 24 h | 0 | 1–5 | > 5 → canned replies |

### 8b. Weekly (Mondays: Nov 30, Dec 7, Dec 14)

| # | Metric | Green | Amber | Red → action |
|---|---|---|---|---|
| 1 | Revenue per 1,000 views (7-day) | ≥$1.00 | $0.40–1.00 | < $0.40 → R6 |
| 2 | Installs per 1,000 views | ≥1.5 | 0.5–1.5 | < 0.5 → hooks are reaching the wrong viewers |
| 3 | Share rate (users who share ÷ users with a result) | ≥25% | 15–25% | < 15% → check watermark size and share sheet |
| 4 | Weekly plan first renewal (from Dec 2) | ≥55% | 45–55% | < 45% → weekly users aren't getting value; check digi allowance |
| 5 | D1 / D7 open | ≥20% / ≥8% | 12–20% / 4–8% | < 12% / < 4% (ch. 23 floors) |
| 6 | Yearly share of new subscriptions | ≥60% | 40–60% | < 40% → R18 |
| 7 | ASC download-to-paid vs peer group | Above median | Near median | Below 25th percentile (if shown) → paywall work beats content work |
| 8 | Leaderboard position vs 3rd place | Within 2× | 2–3× | > 3× by Dec 9 → R17 |
| 9 | Experiments | E1 on track for 600 per arm by Dec 9 | Behind | Far behind → extend to Dec 13, no later |
| 10 | Screenshots for the verification folder taken | All | Some | None → take them today (§9) |

### 8c. Key dates on one line each

- **Tue Nov 24 / Wed Nov 25:** launch. E1 starts. Launch offer on (next app open only).
- **Fri Nov 27:** Black Friday. Crossed-out $29.99 on the main paywall. E3 treatments live if approved.
- **Mon Nov 30, 23:59 PT:** offer ends. First weekly review.
- **Tue Dec 1:** R5, R6. Decide E2 (needs ≥250/day over Nov 27–30).
- **Wed Dec 2:** E2 starts (if go). v1.2 submitted (ch. 23).
- **Fri Dec 4:** verification folder built (§9). R11. Exams start Dec 5.
- **Wed Dec 9:** E1 stops enrolling. R17 leaderboard check.
- **Thu Dec 10:** R16, last day to start anything.
- **Fri Dec 11:** R11 second Roll Pass weekend.
- **Sat Dec 12, 23:59 PT:** E2 stops enrolling.
- **Sun Dec 13, 15:00 Cairo:** R10 trial switch (if in the running).
- **Wed Dec 16, 15:00 Cairo:** contest ends. Switch the trial back. Take the end-of-contest screenshots. Read E2.

---

## 9. What to screenshot and keep for the verification call (deliverable f)

The rules: shortlisted app entrants "must join a verification call and show their App Store Connect or Google Play Console dashboard so we can review traffic sources and paid acquisition", and "Keep your store, acquisition, ad-spend and payment records". [V via ch. 23]

**Weekly (Mondays) and on Dec 16 at 15:00 Cairo, save as PDF or PNG with the date in the file name:**
1. ASC → Analytics → Acquisition → **Sources** (date range Nov 16 → today).
2. ASC → Acquisition → **Campaigns** (every `ct`), with downloads and sales.
3. ASC → **Custom Product Pages** metrics.
4. ASC → **monetization benchmarks** (download-to-paid, proceeds per download vs peers).
5. ASC → **Sales and Trends**, units and proceeds by day, US.
6. RevenueCat → **Overview** and **Revenue** chart for the window; **Refund Rate**; the transactions list filtered to Nov 16 → Dec 16.
7. TrustMRR listing page showing continuous sync.
8. **Apple Ads, Meta Ads Manager, TikTok Ads Manager:** billing pages showing $0 (or the logged amount). Screenshot TikTok "Promote" and Instagram "Boost" histories showing nothing.
9. The **spend ledger** (ch. 23 template), even if every row is $0, and the creator/offer-code log.
10. The **content folder**: one row per post (date, account, link, views on day 2 and day 7), with screenshots of each account's analytics overview.
11. The **daily sheet** (§7d) exported as CSV.
12. RevenueCat **Experiments** pages for E1/E2 and ASC's PPO page for E3 (shows the tests were split traffic, not bought traffic).
13. One-off proofs (from ch. 23 §6d): rules acceptance time, repo first commit date, ASC app record creation date, domain receipt.

**On the call (E, high):** open ASC Sources first (no paid line), then Campaigns (each owned account), then RevenueCat revenue and refunds, then the ad accounts at $0, then the content folder. Say up front that some installs have no source because Apple only counts users who share analytics.

---

## What this means for Digi

1. **Today (Nov 17–18):** create the 7 products in §3e, including `digi_plus_yearly_49` and `digi_plus_yearly_launch` ($29.99 first-year intro offer), and submit them with v1. A product added later waits for the next build.
2. **Before submitting v1:** read offerings **by placement** (`onboarding`, `out_of_digis`, `roll_9th_friend`, `next_open_offer`, `settings`) and call `trackCustomPaywallImpression` on every paywall. Use RevenueCat iOS SDK 5.66.0 or newer.
3. **Add the 34 events in §7b**, with money events from RevenueCat webhooks. Add the one-tap "how did you find Digi?" screen after the first saved photo.
4. **Make one App Store campaign link per account and placement** (§4b) and point each `digi.pink/go/` redirect at the matching CPP. Set all social accounts up as business accounts.
5. **Start E1 (Pack first vs Plus first) on launch day**, stop enrolling Wed Dec 9, read it Sun Dec 13, roll out only at ≥80% chance to win; otherwise keep Pack first.
6. **Run the launch offer once:** launch → Mon Nov 30, 23:59 PT, at the next app open only, plus the crossed-out price Nov 27–30. Check intro-offer eligibility first. No holdout.
7. **Decide E2 on Tue Dec 1:** run $39.99 vs $49.99 Dec 2–12 only if Digi averaged ≥250 US installs a day over Nov 27–30. Otherwise run it Dec 17 → Jan 31.
8. **Submit E3** (three first screenshots) right after v1 is approved. Apply a winner only at Apple's 90% confidence.
9. **Use the reconciled funnel in §1b in every model from now on.** Low $214 / Base $468 / High $946 per 1,000 installs at 30%. Stop quoting 2.4% or 59 payers as "base".
10. **Follow the decision table (§5) instead of judging by feel.** In particular: no free-digi cut unless R9 fires; no Apple Ads in the window unless D7 cash per install tops $2.50; trial switch at Sun Dec 13, 15:00 only if Digi is in the running.
11. **Keep the daily sheet from day 1** and take the 13 verification screenshots every Monday and at 15:00 on Dec 16.
12. **Do not change paywall copy for testing** during the contest. Use ch. 18's three variants for three moments.

---

## Sources

All accessed Tue Nov 17, 2026 unless noted.

**Benchmarks**
- RevenueCat, State of Subscription Apps 2026 (2025 data; saved copy read Nov 17): https://www.revenuecat.com/state-of-subscription-apps-2026/ [V]
- Adapty, Photo & Video app subscription benchmarks (updated Jun 29, 2026): https://adapty.io/blog/photo-video-app-subscription-benchmarks/ [V]
- Adapty, State of Paywalls 2026 report (FY Oct 2025–Sep 2026): https://adapty.io/state-of-paywalls/report/ [V]
- RevenueCat holiday study 2025–26, via ch. 06 (`bible/mon/raw/rc_holiday.md`) [V in ch. 06]
- AppsFlyer Photo & Video retention via Spreadcast, Nov 2, 2026, via ch. 23 [C]
- TrustMRR Boothie daily revenue, Oct 19–Nov 16, 2026, via ch. 23 [V in ch. 23]
- TrustMRR Lenz AI listing, via ch. 05 [V revenue, C views]
- Postiz blog on Oliver Henry's "Larry" (Apr 16, 2026), via ch. 14 [C]

**Tools and rules**
- RevenueCat Experiments overview: https://www.revenuecat.com/docs/tools/experiments-v1 [V]
- RevenueCat, configuring experiments: https://www.revenuecat.com/docs/tools/experiments-v1/configuring-experiments-v1 [V]
- RevenueCat, experiment results: https://www.revenuecat.com/docs/tools/experiments-v1/experiments-results-v1 [V]
- RevenueCat pricing: https://www.revenuecat.com/pricing/ [V]
- Superwall pricing: https://superwall.com/pricing [V for free-tier wording; plan names via search, C]
- Superwall transaction-abandon case study (Aug 6, 2024), via ch. 08: https://superwall.com/blog/17-revenue-boost-with-transaction-abandon-paywalls-a-case-study [V in ch. 08]
- Apple, Product Page Optimization: https://developer.apple.com/app-store/product-page-optimization/ [V]
- Apple, campaign links help: https://developer.apple.com/help/app-store-connect-analytics/acquisition/campaign-links/ [V]
- Apple developer news, "New In-App Purchase and subscription data now available in Analytics" (Mar 25, 2026): https://developer.apple.com/news/?id=hh6v4b55 [V]
- Apple, introductory offers help: https://developer.apple.com/help/app-store-connect/manage-subscriptions/set-up-introductory-offers-for-auto-renewable-subscriptions [C, quoted in search results]
- Apple, offer codes for in-app purchases: https://developer.apple.com/help/app-store-connect/manage-in-app-purchases/create-offer-codes-for-in-app-purchases [C, via search]; Mactrast, Oct 2025: https://www.mactrast.com/2025/10/apple-announces-new-features-for-app-store-developers/amp/ [C]
- Apple Custom Product Pages, via ch. 12: https://developer.apple.com/app-store/custom-product-pages/ [V in ch. 12]
- Evan Miller, "How Not To Run an A/B Test": https://www.evanmiller.org/how-not-to-run-an-ab-test.html [V]
- TikTok bio-link requirements (vendor guides, disagree): https://stan.store/blog/tiktok-link-bio-requirements-2026-guide/ · https://www.unilink.us/blog/tiktok-link-in-bio-requirements-2026 [C]

**Earlier chapters reconciled:** 05 §5, 06 §2/§5.5/§7–9, 08 takeaway 6, 09 §7, 12 §8/§11, 14 §8, 15, 16 §2/§6, 18 §8.2, 21 §9, 22 §2, 23 §1/§6; deep/03 §8.2, deep/08, deep/09 §7.

---

## Fact-check (2026-11-17)

| # | Claim | Check | Result |
|---|---|---|---|
| 1 | NA D35 download-to-paid median 2.8%, top quartile >6.0%; global 2.0%; Asia-Pacific 2.4% | Saved SOSA 2026 text, "Day 35 download-to-paid by geography" | Confirmed. The same report also gives NA 2.6% / 2.56% in its **developer-HQ** cut; I use the user-geography figure (2.8%) |
| 2 | Freemium 2.1% vs hard 10.7% D35 | Same | Confirmed |
| 3 | P&V trial→paid 22.2%, top quartile >33.1% | Same | Confirmed |
| 4 | NA download→trial 7.1% (top quartile >15.0%) | Same | Confirmed |
| 5 | D14 RPI: all $0.23, NA $0.38; D60 NA $0.55 (top quartile >$1.39) | Same | Confirmed |
| 6 | 3-day trials: 55.4% cancel on Day 0 | Same | Confirmed |
| 7 | Adapty State of Paywalls: US 2.75% view→paid (30 d); onboarding 0.85% vs 0.23%; $170 vs $40 per 1,000 views | Adapty report page | Confirmed. No Photo & Video figure in the page text |
| 8 | Adapty P&V: install→trial 14.0%, trial→paid 30.5%, first renewal 54.9%, refunds 7.5%; onboarding with trial 1.35% | Adapty P&V page (Jun 29, 2026) | Confirmed |
| 9 | RevenueCat Experiments: Pro & Enterprise; new-customer enrolment at first open; min 10% audience; up to 4 variants; chance to win; 95% credible intervals; 400-day tracking after stop | Three RevenueCat doc pages | Confirmed. Docs don't name the statistical method |
| 10 | RevenueCat Pro = $0 under $2.5K MTR, then 1% | Pricing page | Confirmed |
| 11 | Apple PPO: 3 treatments, 90 days, 90% confidence recommended, iOS 15+ | Apple page | Confirmed |
| 12 | Campaign links: 24 h window, ≥5 first-time downloads, 24 h delay | Apple help | Confirmed |
| 13 | ASC peer benchmarks (download-to-paid, proceeds per download), Mar 25, 2026 | Apple news page | Confirmed. Percentile bands not confirmed |
| 14 | One intro offer per subscription group per customer; one current intro offer per product per storefront | Apple help quoted in search results; page not opened | **Plausible, not opened directly.** Check in ASC when creating the offer |
| 15 | Offer codes for consumables; 1M codes per quarter; ≤6-month expiry | Search summaries of Apple help and Mactrast | **Not opened directly** (C) |
| 16 | Sample sizes in §2 | Recomputed in `ss.py` with Python's `statistics.NormalDist` | Matches the textbook formula; 13,911 per arm at 3% / +20% |
| 17 | Peeking: 10 peeks need 1.0% for a true 5%; worst case 26.1% | Evan Miller page | Confirmed |
| 18 | TikTok analytics by account type; personal-account bio-link rule | Could not open TikTok's help pages (empty fetch) and search allowance ran out | **Unverified.** Check in the app |
| 19 | Funnel model outputs (§1b) | `funnel.py` run Nov 17 | Reproducible; all inputs are estimates |
