# 16 · Paid ads: what they cost, what competitors run, and whether they can pay back inside the contest

**Track:** paid user acquisition (UA) for photo apps, 2025–2026: Apple Ads, Meta, TikTok, Snapchat, Google App campaigns. Benchmarks for the US, the Gulf and Egypt; creatives in the niche; small-indie budgets; break-even maths at Digi's prices.
**Checked:** Nov 17, 2026. **Labels:** [V] I read it at the source in this session. [C] credible secondary source, or a sibling chapter that verified it. [E] my estimate, with confidence high/med/low.

---

## Key takeaways

1. **At Digi's planned funnel (free camera, AI behind a paywall), the break-even ad cost per install inside the contest is about $0.20–0.60.** Every major channel costs more in the US. The median Apple Ads install in Photo & Video costs **$2.79** (US, 2025) [V AppTweak]. The median Meta paying user costs **$64.93** (Q3 2026) [V Adapty]. Paid ads lose money in the window unless something changes the funnel.
2. **One yearly sale is worth about $31.60 to the contest** ($39.99 − Apple's 15% − ~7% expected refunds) [E, high]. A weekly buyer is worth $5.60–11.40, depending on how many renewals land before Dec 16. A Party Pack buyer is worth about $4.90 (≈$5.90 with repeat buys) [E, med].
3. **The cleanest comparison is cost per trial.** At Photo & Video's median 22.2% trial-to-paid [V RevenueCat], Digi can afford **~$7 per trial** (~$10.80 at the North America median of 34.2%). Meta campaigns optimized for Start Trial buy trials at a median **$20.28** [V Adapty, Q3 2026]. Apple Ads works out to roughly $19–39 per trial in the US [E, med]. Both are 2–5× too expensive.
4. **The median Meta advertiser gets back 39 cents per dollar in 7 days (US: 33 cents)** [V Adapty]. The contest needs at least **$1.25 gross per $1** to break even after Apple's fee and refunds [E, high]. Only three countries in Adapty's data reach that at the median: the **Netherlands, Norway and Portugal (122–133% D7 ROAS)** [V]. That is the one place a small test could plausibly pay inside 30 days [E, low].
5. **Competitors who can afford ads spend a small slice of revenue on them.** WayShot spent about **$29.7K on Meta in 30 days**, roughly 7% of its ~$417K estimated monthly revenue. It is speeding up for the holidays: **$12.1K in the last 7 days** (Nov 5–12) [C, AppKittie estimates]. Boothie and Pecra show **$0 Meta spend** [C]. Their biggest "organic" TikTok wins were partly boosted instead (Boothie's founder tutorial and Kapi Cam's 87.2M-view post carry TikTok's `isAd` flag) [V, ch. 14].
6. **Apple Ads is the only channel you can audit to the customer without user consent.** Apple's AdServices attribution needs no tracking prompt for its standard data (campaign, ad group, keyword); only the "detailed" data needs ATT consent [C, RevenueCat docs, re-checked Nov 17]. On iOS, Meta and TikTok report modelled, aggregated installs. The contest says customers "we can't trace to a real source get you disqualified" [V, contest rules via deep/09]. That makes Apple Ads the only paid channel worth touching in the window.
7. **Three things could make paid ads pay back:** (a) a **hard-paywall path for paid traffic only**, since hard-paywall apps earn $2.32 per install by day 14 against $0.27 for freemium [V RevenueCat]. Use Apple's attribution token to send Apple Ads installs straight into the Christmas-strip flow; (b) a **viral loop**: if each paid user brings in one friend through a shared roll, the effective CPI halves; (c) **cheap, high-ROAS countries** (NL, Nordics). None of them is proven for Digi yet.
8. **Timing kills late spend.** A 3-day-trial yearly sale started after **Dec 13** pays out after the window. Weekly buyers in the last week pay only once. **Any paid test belongs in Nov 24 – Dec 10 or not at all** [E, high].
9. **Recommendation: $0 of paid media by default; at most a $100 learning budget, all on Apple Ads exact match, and only if the first 7 days of organic data show ≥4% of US installs paying.** Build the real paid engine after Dec 16, when a yearly payer's 12-month value (not 30-day cash) is the yardstick.

---

## 0. Method, and what I could not get

- **Read in full this session [V]:** Adapty's Meta Ads benchmarks (Q3 2026) and Meta playbook page; AppTweak's Apple Ads benchmarks (2025 data, article Aug 2026); Mobile Action's Apple Ads 2026 executive summary; RevenueCat's State of Subscription Apps 2026 (SOSA, full public page text); Apple's custom product page docs; Apple Ads countries list and the Basic page; TikTok's budget and Spark Ads help pages; Google's App campaign help pages; SEM Nexus's 2026 TikTok-vs-Meta post.
- **Reused from sibling chapters (cited) [C/V]:** AppKittie cache of Meta ad-spend estimates (Nov 12, 2026); TikTok `isAd` flags on 30 niche posts (ch. 14); regional price lists (ch. 06); creator prices (ch. 14, 15); contest rules (deep/09).
- **Blocked, and not bypassed:**
  - **Meta Ad Library** returned HTTP 403 to automated reads.
  - **TikTok Creative Center** needs a login.
  - **SplitMetrics'** per-country and per-category dashboard sits behind an unlock gate. I stopped there.
  - **Business of Apps** returned 403.
  - **Adapty's** full 29-page report (P25–P75 ranges, categories, country CPMs) is behind a form.
- **Web search budget ran out** partway through this track. Every figure below comes from pages I fetched directly or from earlier chapters. Where I lacked a number (Egypt CPIs, Snapchat CPIs, TikTok Photo & Video CPI), I say so rather than fill the gap.
- **No verified Egypt-specific CPI exists anywhere in this research.** Treat any Egypt CPI you see quoted elsewhere as unverified.

---

## 1. The contest rules that decide the maths

From the contest rules (quoted in deep/09, [V]):

| Rule | Effect on paid ads |
|---|---|
| "Profit = money received − refunds − chargebacks − payment fees − ad spend" | Every ad dollar comes off 1:1. Apple's commission counts as a payment fee. |
| Ad spend includes "ads on any platform, sponsored posts, paid influencers or shoutouts, affiliate or referral payouts, bought placements" | Spark Ads boosts, paid creators, clippers and affiliate cuts all count. |
| "An annual plan paid up front counts in full" | A yearly sale is the only purchase big enough to cover a US install. |
| Refunds are subtracted "including ones issued after the hackathon ends but before winners are confirmed" | Paid traffic tends to refund more [E, med], and those refunds still hit you. |
| "Not subtracted: hosting, domains, software, AI or API costs" | AI cost from paid free users doesn't hurt the contest score. It does hurt your bank account. |
| "Keep receipts… Show which customers and revenue that spend brought in, beyond doubt"; untraceable customers can mean disqualification | Channels with per-user attribution (Apple Ads, your own UTM links) are safe. On iOS, Meta and TikTok rely on modelled numbers. |
| The verify.js tracker flags paid clicks (gclid, gbraid, wbraid, msclkid, ttclid) | Any web landing page from ads will be marked "paid". That's fine if you disclose it. |

**Window:** the app goes live around Nov 21–24, and the contest ends Dec 16. That leaves **~22–25 selling days.**

---

## 2. What one paying customer is worth to the contest

Assumptions [E]: Apple Small Business Program commission of 15%. Expected refunds: 7% on yearly sales (Photo & Video runs above the 3–4% all-category median; RevenueCat says P&V has "higher refund rate (including higher p75 & outlier)" [V SOSA]); 5% on weekly; 3% on packs. Weekly renewal chain: 45% → 70% → 80% (P&V median first weekly renewal is 45% [C, deep/05 citing RevenueCat]).

| Purchase | Price | Net per payment | Net contest value per buyer | Confidence |
|---|---|---|---|---|
| **Yearly** (3-day trial or direct) | $39.99 | $33.99 | **$31.61** | high |
| Weekly, bought with 25 days left | $6.99 | $5.94 | $11.38 (2.0 payments) | med |
| Weekly, bought with 14 days left | $6.99 | $5.94 | $8.18 (1.45 payments) | med |
| Weekly, bought in the last 7 days | $6.99 | $5.94 | $5.64 (1 payment) | high |
| Party Pack 25 digis | $5.99 | $5.09 | $4.94 (≈$5.93 with 20% repeat buys) | med |
| **Blended payer** (45% yearly / 25% weekly / 30% packs) | | | **≈ $18.40** | med |

The blended mix is my estimate. It sits between deep/08's S1 model and RevenueCat's North America plan mix: 40% of subscriptions sold there are yearly [V SOSA].

---

## 3. Channel benchmarks, 2025–2026

### 3.1 Apple Ads (formerly Search Ads)

| Metric | Value | Scope and date | Label | Source |
|---|---|---|---|---|
| CPT (cost per tap), median | **$1.61** | US, Photo & Video, search results, Jan–Dec 2025 | V | AppTweak |
| CPI, median | **$2.79** | same | V | AppTweak |
| Tap-to-install rate | **67.5%** (highest of any US category) | same | V | AppTweak |
| Tap-through rate (TTR) | **11.5%** | same | V | AppTweak |
| CPI, all categories | US **$4.06** · UK **$2.60** · Saudi Arabia **$1.29** · UAE **$1.38** | 2025, all categories | V | AppTweak |
| CPT, all categories | US $1.91 · UK $1.35 | 2025 | V | AppTweak |
| CPA (cost per install), all categories, global | **$2.51** (2024: $2.76) | 2025 | V | Mobile Action |
| CPT seasonality, all categories | Q2 low **$1.26** → Q4 **$1.88** (+49%) | 2025 | V | Mobile Action |
| GB CPT / CPA | $2.60 / $4.53 (highest market) | 2025 | V | Mobile Action |
| Egypt CPI/CPT | **Not published** in any source I could read | | | |
| Availability | Egypt, Saudi Arabia, UAE, Kuwait, Qatar, UK and US are all on Apple's list | Nov 2026 | V | ads.apple.com |
| Apple Ads Basic | Pay per install with a max CPI you set; Apple picks keywords; **$100 credit** for eligible new accounts | Nov 2026 | V | ads.apple.com/basic |
| Basic budget cap | $10,000 per app per month | 2026 | C | ch. 12 (verified there) |

**Notes:**
- The two UK sources disagree (AppTweak: CPI $2.60; Mobile Action: CPA $4.53). They use different advertiser samples. Use a range.
- The medians don't multiply out ($1.61 ÷ 0.675 = $2.39, not $2.79), because each one is a separate median across apps.
- **December is the expensive month.** Expect US Photo & Video CPIs around **$3.50–4.00** in December, not $2.79 [E, med: Q4 uplift applied to the 2025 median].
- **Custom product pages (CPPs) work with Apple Ads, and each can have its own keywords and deep link** [V Apple]. Up to 70 CPPs are allowed. They need review, but not an app update. The deep link fires when someone taps *Open* from the CPP, on iOS 18 or later [V]. For brand-new installs, use the attribution token (section 7.1) to route people instead.

### 3.2 Meta (Instagram + Facebook)

| Metric | Value | Scope and date | Label | Source |
|---|---|---|---|---|
| Median CPM | **$8.87** | 5K subscription apps, 45 countries, Jul–Sep 2026 | V | Adapty |
| Median cost per **trial** (trial-optimised) | **$20.28** | same | V | Adapty |
| Median cost per **paying user** | **$64.93** overall; by optimisation event: Subscribe **$42.77** · Start Trial **$57.32** · Purchase **$82.23** | same | V | Adapty |
| Median **D7 ROAS** | **39%** overall; Subscribe-optimised 75% · Start Trial 45% · Purchase 34% | same | V | Adapty |
| D7 ROAS by country | **US 33%** (26th of 27). **Netherlands, Norway, Portugal 122–133%** | same | V | Adapty |
| US CPM vs Argentina | 14× | same | V | Adapty |
| CPC by age band | $0.44–0.67 | same | V | Adapty |
| One-account creative example | Creative B: best CPI ($0.74) and CTR (2.1%), but CAC $103 and D30 ROAS 44%. Creative C: CPI $1.36, but CAC **$33** and D30 ROAS **116%** | Adapty playbook page, 2026 | V | Adapty |
| Worked max-CPI example | Target CAC $30 × 20% trial-to-paid × 8% install-to-trial = **max CPI $0.48** | same | V | Adapty |
| Creative fatigue | 3–6 weeks on Meta | 2026, agency view | C | SEM Nexus |
| Minimum practical budget | ~$50–100/day per ad set | 2026, agency view | C | SEM Nexus |

**What this means:**
- **Optimise for the event that pays you.** In Adapty's data, Subscribe-optimised campaigns cost less per payer than Start-Trial ones ($42.77 vs $57.32) and return about twice the D7 ROAS. Their creative example shows the same trap: the cheapest install was the worst ad.
- Even so, the best median ($42.77 per payer) is **$11 more than a yearly sale is worth to the contest**, and $24 more than a blended payer.

### 3.3 TikTok

| Metric | Value | Label | Source |
|---|---|---|---|
| Minimum budgets | Campaign daily **> $50**; ad group daily **> $20**; lifetime ad group = days × $20 | V | TikTok Ads help |
| Budget changes | ≤ 40% per change during learning, ≤ 30% after; no more often than every 2 days | V | TikTok Ads help |
| Spark Ads | Boosts an organic post (yours, or a creator's with an authorisation code). Supports the **App promotion** objective. Engagement counts toward the original post | V | TikTok Ads help |
| CPI by vertical (no Photo & Video row) | Fitness $1.50–3.50 · Marketplace $2.00–5.00 · Casual games $0.50–1.80 (directional, agency view, not split by iOS/US) | C, low | SEM Nexus, Jul 16, 2026 |
| US non-gaming iOS CPI | ~$1.50–4.31; vendor blogs conflict | C, low | deep/05 |
| Creative lifespan | **5–14 days**; 6–10 new assets a week at scale | C | SEM Nexus |
| Minimum practical budget | $100–150/day per campaign | C | SEM Nexus |
| Creator UGC | Median $7–9 per video (SideShift clients); freelancers $20–45 per video | C | ch. 14 |

**Notes:**
- The deep/05 plan of "$25/day Spark Ads" only works with the campaign budget left uncapped, because the $50 floor applies to campaign budgets [E, med]. Check this in Ads Manager before you rely on it.
- I found **no verified TikTok CPI for Photo & Video in the US.** My working range is **$1.50–4.00** [E, low]. A Spark boost on a post that is already going viral should come in at the low end, because you're paying to extend reach people already like [E, med].

### 3.4 Snapchat

- Snapchat is where Gen Z sends party photos, so the audience fits.
- **I could not verify a single Snapchat app-install CPI for 2025–26.** The help page I tried returned 404, and search was exhausted.
- Ch. 15 found AR Lens CPMs of about $13.80 and Sponsored Lens deals of $100K+ [C, low]. The free community Lens route from ch. 15 is the sensible Snap play.
- **Verdict: skip Snap ads in the window.** There is no benchmark and no per-user iOS attribution [E, med].

### 3.5 Google App campaigns (UAC) on iOS

- Google's own rules: budget **"at least 50 times the bid"** for target-CPI campaigns, and **10×** for target-CPA. Learning is fragile until **100 conversions** [V Google Ads help].
- At a $2.50 target CPI, that's **$125/day**. At a $30 target CPA, it's **$300/day**.
- iOS measurement on Google is modelled.
- **Verdict:** wrong scale for a 25-day, profit-scored contest [E, high].

---

## 4. US vs Gulf vs Egypt

| | **US** | **UK** | **Saudi / UAE** | **Egypt** |
|---|---|---|---|---|
| Apple Ads CPI (all categories, 2025) | $4.06 (P&V: $2.79) | $2.60 (AppTweak) to $4.53 (Mobile Action) | $1.29 / $1.38 | not published |
| Meta D7 ROAS (median, Q3 2026) | 33% | not shown | not shown | not shown |
| Download → trial (median) | **7.1%** (top quartile 15%) | Western Europe 5.0% | MEA 3.0–3.7% | MEA 3.0–3.7% |
| Trial → paid (median) | **34.2%** | — | MEA **19.5%** | MEA 19.5% |
| D35 download → paid | **2.8%** (top quartile 6.0%) | — | — | — |
| D14 revenue per install | **$0.38** | Western Europe $0.25 | MEA ~$0.10 | MEA ~$0.10 |
| Day-0 share of conversions | lowest | — | **63.5%** (fastest) | 63.5% |
| Plan mix sold | yearly 40% / monthly 36% | yearly 35% | **monthly 52–55%** | monthly 52–55% |
| Price level vs US | 100% | — | **at or above US** (Boothie weekly SAR 34.99 ≈ $9.33) | Apple's automatic prices are too high; ch. 06 proposes yearly EGP 999.99 ≈ **$13.87 net** |
| Contest-specific risk | none | none | none | **High.** Rules ban "friends, family… anyone you pay" buying; Egyptian buyers near the owner invite scrutiny (ch. 15) |

Sources: RevenueCat SOSA 2026 [V]; AppTweak [V]; Mobile Action [V]; Adapty [V]; ch. 06 price scrape [V]. MEA in RevenueCat covers Saudi Arabia, South Africa, UAE, Egypt, Nigeria, Kenya and Turkey [V].

**Read-across [E, med]:**
- **Gulf:** installs cost about a third of the US, but each one earns about a quarter as much and converts trials at 57% of the US rate. Break-even CPI for the Gulf ≈ 1% in-window payers × ~$29 net yearly (after Saudi 15% VAT) ≈ **$0.30**, against **$1.29–1.38**. It loses, about as badly as the US.
- **Egypt:** with no CPI data, a ~$0.10 revenue per install and an $11–14 net yearly, break-even is **under $0.15 per install**. Add the contest-integrity risk. **Don't target Egypt with paid ads.**
- **UK/Ireland:** similar to the US, with UK Apple Ads possibly cheaper (AppTweak) or dearer (Mobile Action). Christmas-party culture is strong (office parties, "Christmas jumper day"). It's a fair second market after the US, not a cheaper one.
- **Netherlands/Nordics:** the only place where median Meta ROAS clears the contest's 1.25× bar (section 6.4). English works there, but expect higher CPMs than Southern Europe.

---

## 5. What competitors actually spend, and the creatives they run

### 5.1 Spend (AppKittie estimates, cached Nov 12, 2026; C, med-low)

AppKittie estimates Meta spend from ad-library reach. It **does not** see Apple Ads or TikTok spend. Its "tiktok_ads" field counts ads, not dollars.

| App (released) | Est. revenue, 30 d | Meta spend 7 d / 30 d / 90 d | Meta ÷ revenue | Spend per 1K people reached (90 d) | TikTok ads counted |
|---|---|---|---|---|---|
| **WayShot** (Aug 2025), digicam leader | $417K | **$12.1K / $29.7K / $51.2K** | **7.1%** | $15.73 | — |
| Vixel (AI video) | $863K | $0 / $26.0K / $237K | 3.0% | $10.54 | 0 |
| OpusClip | $405K | $6.4K / $30.1K / $124K | 7.4% | $13.16 | — |
| DanceHit (AI dance) | $82K | $0 / $4.4K / $39.6K | 5.4% | $7.99 | 0 |
| Sundrop: Family Photos (Oct 2026, small indie) | $3.1K | $29 / $328 / $328 | 10.5% | $16.63 | — |
| **Boothie** (Jun 2026) | $54.7K | **$0** | 0% | — | — |
| **Pecra: G7X** (Jan 2026) | $88.5K | **$0** recorded | 0% | — | — |
| Zoombo (AI editor) | $125K | $0 | 0% | — | **181** |
| Recast AI (trend effects) | $76K | — | — | — | **125** |
| Photo Editor – Magic Eraser | $12K | $0 | 0% | — | **129** |
| DeeVid (AI video) | $316K | $0 | 0% | — | **94** |

**What this says [E, med]:**
- **WayShot is ramping into the holidays.** Its last 7 days ($12.1K) run at a **~$52K-per-30-days pace**, against $29.7K for the full 30 days and $51.2K over 90. Expect its ads in your audience's feeds through December.
- **Apps that buy Meta ads keep it at 3–7% of revenue.** They are funding ads from an existing subscriber base, not from first-month cash.
- **The digicam indies that are winning on a budget (Boothie, Pecra) skip Meta.** They boost organic TikTok posts instead.
- **AI-trend apps run TikTok as a volume game:** 94–181 live creatives each. That matches TikTok's 5–14-day creative lifespan. A solo founder in exam season cannot feed that.
- **A typical small indie Meta test is ~$10/day.** Sundrop spent $328 over its first month.

### 5.2 Paid creatives in the niche (from TikTok's own `isAd` flag; V, ch. 14)

I could not open the Meta Ad Library or TikTok Creative Center (section 0). These are real promoted posts, described from public page data:

| # | Advertiser | Creative | Length | Views | What it teaches |
|---|---|---|---|---|---|
| 1 | **Kapi Cam** (brand account) | First-person user voice: "I finally hunted down the holy grail of low-pixel photo apps…" over low-pixel photo results | 15 s | **87.2M**, 315K saves | A brand post written like a user, then boosted. It came after ~290 organic posts. Digi version: say "we", not a fake "I" |
| 2 | **WayShot** × 9.9M-follower creator | "Secrets to my photos @wayshot_app": creator reveals her photo method | 35 s | 4.2M (0.42 views per follower) | Big creators buy little reach per dollar |
| 3 | **WayShot** × 1.4M-follower creator | "@wayshot_app #promo" | 20 s | 239K (0.17 per follower) | Same |
| 4 | **WayShot** campaign (unflagged but labelled "ad") | "why get a digi cam when you can just use @wayshot_app"; "@wayshot_app ad". Two creators share one sound ("original sound – mldyht") | **6 s** | 30K–162K | A brief with a fixed sound and a one-line hook. Short |
| 5 | **Boothie** founder account | Reply-to-comment tutorial: "my own app Boothie… AI effects need a subscription" | 15 s | 1.3M | Honest pricing in the ad itself. Founder voice works, and it was boosted |
| 6 | **OldRoll** × creator | "the love I have for digi cams! … APP: OldRoll" | 24 s | 1.8M | Aesthetic photo dump, with the app name as the payoff |
| 7 | **Dazz** × creator | No caption, just the photos | 11 s | 880K | Results speak; no text needed |
| 8 | **EPIK** (TikTok ad, from a user review, Jul 2026) | Promised the "g7x filter"; the app asked for payment as soon as the filter was tapped | n/a | n/a | **Bait-and-paywall ads turn into 1-star reviews** quoting the ad. Don't promise "free" for a paid AI look |

**Patterns [E, med]:**
- The winners are **6–15 s, results first, no feature talk**. WayShot's one feature-led post ("first to bring Nano Banana Pro to life") got 77K views against 33.1M for a plain "make every pic aesthetic" post [V ch. 14].
- **Boosting a proven organic post** (Kapi Cam, Boothie) beats paying a big creator for a new one (WayShot's 0.15–0.42 views per follower).

### 5.3 Digi's ad creatives, ready to shoot (use only under the rules in section 8)

Each one is 6–12 s, vertical, real app output only, AI label on whenever an AI look appears, and "Paid partnership"/content disclosure switched on.

| ID | Hook text on screen (frame 1) | Body | End card | Use for |
|---|---|---|---|---|
| A1 | **"your party pics, but it's 2004"** | 3 normal iPhone party shots flip to Digi flash + orange date stamp, one per beat | "Digi · free digicam camera" | Spark boost; Apple Ads CPP "Digicam flash" |
| A2 | **"no photo booth at the party? we brought one"** | 4-pose strip prints frame by frame, then the group laughs at the phone | "Photo strips in Digi" | CPP "Christmas party strips" (Dec 1–14) |
| A3 | **"the photos drop at 9am"** | Night party clips → black screen "developing…" → morning, everyone's phone buzzes, the roll opens | "Shared party rolls · Digi" | Group-roll feature, after it ships |
| A4 | **"we made the low-pixel camera you kept asking about"** | Brand voice (the clean version of Kapi Cam), comment-reply format | "Digi on the App Store" | Brand account, boost if it wins organically |
| A5 | **"free camera. AI strips cost digis."** | Same before/after, with the price said out loud | "3 free digis to try" | Pre-empts the EPIK-style 1-star review |

**Copy rules:**
- No "free" on an AI look.
- No camera brand names (G7X, Polaroid, Kodak): trademark and App Review risk (ch. 12).
- No fake first-person testimonials from the brand (FTC; ch. 14).
- Ads that drive to the web go through `digi.pink/go/<id>`, which redirects to the matching CPP.

---

## 6. Break-even model: can ads pay back inside 30 days?

### 6.1 Break-even CPI = share of installs that pay in the window × net value per payer

| Share of installs paying in the window → | 1% | 2% | 3% | 5% | 8% | 10.7% |
|---|---|---|---|---|---|---|
| **Yearly only** ($31.61) | $0.32 | $0.63 | $0.95 | $1.58 | $2.53 | $3.38 |
| **Blended payer** ($18.40) | $0.18 | $0.37 | $0.55 | $0.92 | $1.47 | $1.97 |
| Packs only ($5.93) | $0.06 | $0.12 | $0.18 | $0.30 | $0.47 | $0.63 |

Reference points:
- RevenueCat's North America median D35 download-to-paid is **2.8%** (top quartile 6.0%) [V].
- Freemium apps reach **2.1%**; hard-paywall apps reach **10.7%** [V].
- deep/08 assumed ~3.4% payers per install for Digi, which is top-quartile freemium work.

**Against the US Photo & Video median CPI ($2.79):**
- With a blended payer, Digi needs **~15% of paid installs paying in-window.**
- With yearly sales only, it needs **~9%.**
- December pricing ($3.50) pushes those to **19% and 11%.**
- A freemium app will not get there [E, high].

### 6.2 The same answer from revenue per install

| Funnel type (RevenueCat D14 RPI, gross) | Break-even CPI in the contest (× 0.85 fee × ~0.94 refunds) |
|---|---|
| Freemium median, $0.27 | **$0.22** |
| North America median, all models, $0.38 | **$0.31** |
| Digi base model, $0.66–0.76 (deep/08, bible/06) | **$0.53–0.61** |
| **Hard paywall median, $2.32** | **$1.85** |
| Hard paywall top quartile, $4.50+ | **$3.60** |

**Only a hard-paywall funnel gets near a real CPI.** Even then it covers median Apple Ads only at the top quartile.

### 6.3 Cost per trial and cost per payer

| Metric | Digi can afford | Market median | Gap |
|---|---|---|---|
| Cost per trial | **$7.02** (P&V trial-to-paid 22.2%) · **$10.46** (P&V top quartile 33.1%) · $10.81 (NA 34.2%) | Meta **$20.28** [V]; Apple Ads ≈ $2.79 ÷ 7.1% D2T ≈ **$39**, or ≈ $19 at top-quartile 15% D2T [E, med] | 2–5× too expensive |
| Cost per payer | **$31.61** (yearly) · $18.40 (blended) | Meta $42.77 (Subscribe-opt.) to $82.23 (Purchase-opt.); $64.93 median [V] | Lose **$11–64 per payer** |

### 6.4 ROAS: what $1 of spend returns by Dec 16

- **Break-even gross ROAS is 1.25×** (1 ÷ (0.85 × 0.94)).
- For a yearly-led app, I assume 30-day revenue ≈ 1.25 × D7 revenue. Most yearly money lands by day 3–4 (end of trial), and the rest is late conversions and weekly renewals [E, med].

| Starting D7 ROAS | Est. 30-day gross ROAS | Contest result per $1 spent |
|---|---|---|
| 33% (US median, Meta) | 41% | **−$0.67** |
| 39% (all-country median) | 49% | −$0.61 |
| 75% (Subscribe-optimised median) | 94% | −$0.25 |
| 122% (NL/NO/PT median, lower end) | 152% | **+$0.22** |
| 133% (NL/NO/PT median, upper end) | 166% | +$0.33 |

**Caveat [E, low]:** the NL/NO/PT medians come from apps that chose to advertise there and probably localised for it. Digi untested in those markets could do far worse. If you ever test Meta in the window, test there, not the US.

### 6.5 What a $300 test would actually do (examples)

| Scenario [E] | CPI | Paying share | Installs | Payers | Net revenue | **Contest profit** |
|---|---|---|---|---|---|---|
| Apple Ads, US median | $2.79 | 3% | 108 | 3.2 | $59 | **−$241** |
| Apple Ads, cheap long-tail keywords | $1.60 | 5% | 188 | 9.4 | $172 | −$128 |
| Apple Ads, December pricing | $3.50 | 4% | 86 | 3.4 | $63 | −$237 |
| TikTok Spark, average post | $2.50 | 1.5% | 120 | 1.8 | $33 | −$267 |
| TikTok Spark on a post already going viral | $1.20 | 4% | 250 | 10 | $184 | −$116 |
| Meta, US, $1,000 | $2.50 | 2% | 400 | 8 | $147 | **−$853** |

**Every row loses money.** The test is worth running only for what it teaches (true conversion of paid traffic, keyword data) or for second-order effects (next section).

### 6.6 Three levers that could flip the answer

1. **A hard-paywall route for paid traffic only** [E, med].
   - On first launch, read Apple's AdServices attribution token (no tracking prompt needed) [C].
   - If the install came from the "Christmas strips" campaign, skip the free-camera tour. Open straight into "Make your Christmas strip" → one free preview with a watermark → paywall with yearly pre-selected.
   - Hard-paywall apps convert **10.7%** of downloads and earn **$2.32 per install by D14** [V]. At those rates, break-even CPI is about $1.85–3.38.
   - Cheap long-tail Apple Ads keywords can come in under that.
   - Keep the organic funnel freemium, so the viral loop isn't touched.
2. **The viral multiplier** [E, med].
   - Effective CPI = CPI ÷ (1 + k), where k is extra installs per paid install from shared rolls and watermarked shares.
   - At k = 1, a $2.79 install effectively costs $1.40.
   - Measure k before counting on it: invites sent per roll, and the install rate of invitees. Ch. 03 covers the loop design.
3. **Cheap, high-ROAS geographies** [E, low]. See NL/NO/PT above.

### 6.7 Calendar cut-offs inside the window

| Date | What changes for paid traffic |
|---|---|
| Nov 24 (approx. live) | Ads can start once RevenueCat, AdServices and the CPPs are live |
| **Dec 10** | Last sensible day to *start* a test: you need ~3 days of data plus trial lag |
| **Dec 13** | A yearly trial started after today converts after Dec 16. ch. 06 already switches the default to "yearly, no trial" from Dec 13 |
| Dec 13–16 | Paid installs can only bring direct purchases and packs. Each weekly buyer pays once. **Stop all paid by Dec 12** |
| Dec 17+ | Judge paid on 12-month value, not 30-day cash |

---

## 7. How to run paid if and when you do (practical setup)

### 7.1 Apple Ads (the only channel for the window)
- **Account:** register under the US LLC. Use **Advanced**, not Basic. Basic picks keywords for you and optimises for installs, not payers (ch. 12).
- **Campaigns** (US only, search results):
  - **Brand-defence (exact):** "digi photo booth", "digi camera app", "digi pink". Max CPT $0.50. Run only if someone else is bidding on these. Otherwise you pay for installs you'd get free.
  - **Christmas strips (exact):** "christmas photo booth", "photo booth app", "photo strip", "photo booth christmas". Point to the "Christmas party strips" CPP. Max CPT **$0.80**.
  - **Digicam (exact):** "digicam", "digital camera app", "y2k camera", "disposable camera". Point to the "Digicam flash" CPP. Max CPT **$0.80**.
  - **Discovery (search match, low bid $0.40):** to harvest terms. Add winners as exact, and add negatives.
- **Why a $0.80 max CPT?** At the P&V tap-to-install rate of 67.5%, a $0.80 tap is ≈ $1.19 per install. That is the zone where a 5% hard-path paying rate on yearly sales breaks even ($1.58) [E, med].
- **Kill rules:**
  - Cost per paying user > **$25** after 30 installs, or
  - zero yearly sales after **$40** spent.
- **Attribution:** connect RevenueCat's Apple Ads integration so revenue shows by campaign and keyword [C]. Export the Apple Ads invoices for the contest file.
- **The $100 Apple credit:** email the organisers first. If credit spend counts as ad spend, it's still a cheap way to buy keyword data. If it doesn't count, use it as above.

### 7.2 TikTok Spark (after the window, or one tiny test)
- Boost only a post that has beaten **3× the account's median views in 48 h** (ch. 15).
- Use a US ad account under the LLC, App promotion objective, iOS, US.
- Set the campaign budget to "no limit" and the ad group to **$20–25/day** (TikTok's $20 floor). Run 3 days.
- **Kill rule:** cost per install > **$2.00** on day 2.
- Use `ttclid` landing links only if you send traffic through digi.pink. The tracker will flag them as paid, which is correct.

### 7.3 Meta (after the window)
- Optimise for **Subscribe/purchase of the yearly**, not installs. Adapty's data shows Subscribe-optimised campaigns get about twice the ROAS.
- Expect to need ~50 conversion events a week per ad set before Meta's delivery stabilises. That's Meta's long-standing guidance; I could not re-read the help page this session [C].
- At $42.77 per payer, that's **~$2K/week**. Out of scope until revenue funds it.

### 7.4 Budgets that make sense by stage [E, med]

| Stage | Monthly paid budget | Channels | Gate to move up |
|---|---|---|---|
| Contest (Nov 24 – Dec 12) | **$0–100** | Apple Ads exact only | Paid cost per payer ≤ $25 |
| Jan–Feb 2027 | $300–600 | Apple Ads + Spark on winners | 12-month value per payer ≥ 1.5× cost per payer |
| MRR > $10K | **5–7% of revenue** (WayShot/OpusClip level) | + Meta Subscribe-optimised, NL/UK/US | Payback ≤ 6 months, refunds < 6% |

**After the contest, the yardstick changes:**
- A yearly payer's value becomes ~$34 net plus renewals. P&V's median annual first renewal is 23% [C, deep/05], so add ~$7.80 → **~$41.80 a year.**
- A weekly-first payer can reach $54.50 lifetime (ch. 06).
- **Break-even then rises to cost per payer ≈ $35–45.** Apple Ads at 5% paying ($2.79 ÷ 0.05 = $56) still fails.
- At hard-path rates (8–10%: $28–35 per payer), it works [E, med].

---

## 8. Measurement and contest compliance checklist

1. **Separate money:** one card used only for ads. Download every invoice (Apple Ads, TikTok, Meta) the day it's issued.
2. **Ledger:** date, channel, campaign, amount, and the installs and revenue attributed. Pull from RevenueCat (Apple Ads integration) and your link logs.
3. **Every external link** goes through `digi.pink/go/<channel>-<creative>` with UTM tags, then to the matching CPP. The contest tracker logs utm_source/medium [V via deep/09].
4. **Spark Ads and paid creators:** "Paid partnership" on, plus "#ad". Content-disclosure switched on for every Digi-run account (ch. 14).
5. **Don't run Meta or TikTok ads to iOS in the window.** Their iOS attribution is modelled, which can't show customers "beyond doubt."
6. **Never target Egypt**, and never ask anyone you know to buy (contest cheating clause).
7. **Refunds:** paid users who feel baited refund more [E]. Keep RevenueCat's refund handling on (deep/08). Show the AI price in the ad (creative A5).

---

## 9. Corrections and clarifications to prior work

| # | Prior claim (file) | Correction | Evidence |
|---|---|---|---|
| 1 | Break-even CPI "$0.26–0.52" (deep/08), "$0.20–0.61" (bible/06), and deep/05's suggestion that Apple Ads could break even at a ~$1.5 CPI with 9% install-to-paid | **One consistent range: $0.22–0.61 for the freemium funnel.** Up to ~$1.85 only with a hard-paywall path for paid traffic. deep/05's 9% install-to-paid is hard-paywall territory (10.7% median), not freemium (2.1%) | RevenueCat SOSA 2026 [V]; section 6 |
| 2 | "Every paid install loses ~$80–100 inside the window" (bible/12 §11) | That is the loss **per paying user**, not per install. Per paid install, the loss is ~**$2.20–2.50** ($2.79 CPI − $0.31–0.57 value) | Maths in section 6.2 |
| 3 | Meta "D7 ROAS 33%" quoted as the headline (deep/05) | 33% is the **US**. The all-country median is **39%**, and it varies by optimisation event (34–75%). NL/NO/PT reach **122–133%** | Adapty Q3 2026 [V] |
| 4 | "Spark Ads $25/day for 4 days" (deep/05) and "≤$25/day" (bible/15) | TikTok's floor is **> $50/day per campaign** and **> $20/day per ad group**. A $25/day test only works with the campaign budget uncapped | TikTok Ads help [V] |
| 5 | "Spark Ads $20–50/day minimum per ad group [C, sources conflict]" (deep/05) | Resolved: ad group **> $20**, campaign **> $50** | TikTok Ads help [V] |
| 6 | Apple Ads "UK CPT $2.60 / CPA $4.53 (highest market)" (deep/05) | That's Mobile Action's figure. AppTweak puts the UK **below** the US ($1.35 CPT, $2.60 CPI). Use a range | AppTweak and Mobile Action [V] |
| 7 | "Boothie… 'no money, no paid ads'" (deep/05) | Already corrected in ch. 14 (its tutorial is `isAd`). Adding: AppKittie shows Boothie at **$0 Meta**. "No paid ads" may be true of Meta and false of TikTok boosts | AppKittie [C]; ch. 14 [V] |
| 8 | Apple Ads Photo & Video "CPA $1.03 (lowest category)" (deep/05, from a search snippet) | Could not confirm on Mobile Action's page; it gives no P&V row. **Drop it.** Use AppTweak's US P&V CPI of $2.79 | Mobile Action page [V] |
| 9 | CPP deep links as a routing tool (bible/12) | Correct but limited: the deep link applies when people tap *Open* from the CPP, on iOS 18+. For new installs, use AdServices-based routing (section 6.6) | Apple developer docs [V] |

---

## What this means for Digi

1. **Plan the contest with $0 paid media.** Put the hours into organic posting, shareable rolls and ASO (ch. 12–15). Every scenario in section 6.5 loses $116–853.
2. **Optional $100 Apple Ads learning budget, only if both hold by ~Dec 1:**
   - (a) organic data show **≥4% of US installs paying**;
   - (b) the organisers confirm how Apple's $100 credit is treated.
   - Run Advanced, US, exact match. Two ad groups ("Christmas strips" → CPP, "Digicam" → CPP). **Max CPT $0.80.** **$10/day.** Start no later than **Dec 3**, stop **Dec 12**.
   - Kill if cost per paying user > **$25** after 30 installs.
3. **Build the "source-aware onboarding" in v1.1** (≈1 day of work):
   - Read the AdServices token on first launch.
   - Apple Ads installs from strip keywords go straight to the Christmas strip → watermarked preview → paywall (yearly pre-selected).
   - Everyone else keeps the free camera.
   - This is the only setup that makes paid search plausibly break even.
4. **No Meta, TikTok, Snap or Google ads to iOS before Dec 16.** Their iOS installs can't be traced per customer for the contest file, and median payback is 33–39 cents per dollar in 7 days.
5. **Never target Egypt with ads.** Revenue per install is ~$0.10, the net yearly price is ~$11–14, and buyers close to you are a cheating-rule risk.
6. **Pre-shoot creatives A1, A2 and A5 now** (6–12 s, real output, AI label on). Post them organically first. Any boost after Dec 16 goes only to the one that beat 3× median views.
7. **Copy WayShot's brief discipline, not its budget:** one fixed sound, a one-line hook, and 6-second edits. Don't pay big creators. In ch. 14's sample they returned 0.15–0.42 views per follower.
8. **Log everything from day 1:** dedicated ad card, invoices, a `digi.pink/go/` link per placement, and the RevenueCat Apple Ads integration switched on.
9. **After Dec 16, switch the yardstick to 12-month value:**
   - Target cost per payer ≤ **$30** (yearly-led) or ≤ $40 (if weekly-first wins the ch. 06 T2 test).
   - Scale paid to **5–7% of revenue** once MRR passes $10K.
   - Test NL/UK on Meta Subscribe-optimised before the US.
10. **Measure the viral factor k** (installs per paying user via shared rolls) in the first week. If k ≥ 1, re-run section 6.1 with CPI ÷ (1 + k). It is the only lever that could turn a median CPI profitable without a hard paywall.

---

## Sources

All accessed Nov 16–17, 2026 unless noted.

- Adapty, Meta Ads Benchmarks for subscription apps (Jul–Sep 2026 data; 5K apps, 45 countries): https://adapty.io/meta-ads-benchmarks/
- Adapty, Meta Ads playbook page (max-CPI worked example; creative A/B/C comparison): https://adapty.io/meta-ads-playbook/
- AppTweak, Apple Ads benchmarks (Jan–Dec 2025 data; article Aug 2026): https://www.apptweak.com/en/aso-blog/apple-ads-benchmarks
- Mobile Action, Apple Ads 2026 Benchmark Report, executive summary (2025 data): https://www.mobileaction.co/report/apple-ads-2026-benchmark-report/executive-summary/
- SplitMetrics, Apple Ads benchmarks 2026, by markets (figures gated; not bypassed): https://splitmetrics.com/apple-ads-search-results-benchmarks-2026/benchmarks-by-markets
- RevenueCat, State of Subscription Apps 2026 (published Mar 19, 2026): https://www.revenuecat.com/state-of-subscription-apps/ and https://www.revenuecat.com/blog/growth/subscription-app-trends-benchmarks-2026
- Apple, Apple Ads countries and regions: https://ads.apple.com/app-store/countries-and-regions
- Apple, Apple Ads Basic ($100 credit, pay per install): https://ads.apple.com/app-store/basic · Offer terms (effective Aug 14, 2026): https://ads.apple.com/app-store/promo-terms
- Apple, Custom product pages (70 pages, keywords, deep links on iOS 18+, Apple Ads support): https://developer.apple.com/app-store/custom-product-pages/
- TikTok Ads help, budgets: https://ads.tiktok.com/help/article/budget
- TikTok Ads help, Spark Ads: https://ads.tiktok.com/help/article/spark-ads
- Google Ads help, About App campaigns: https://support.google.com/google-ads/answer/6247380 · Best practices (50× / 10× budget rules): https://support.google.com/google-ads/answer/14104492
- SEM Nexus, "TikTok vs Meta for App User Acquisition: 2026 Performance Data" (Jul 16, 2026; directional): https://semnexus.com/tiktok-vs-meta-app-user-acquisition-2026-performance-data
- Nevo David (marketing brain): creator video pricing ($20–45/video) and B2C ads economics. Via the nevo knowledge base; original posts at https://x.com/wickedguro
- AppKittie cached export, Nov 12, 2026 (Meta spend and reach estimates, TikTok ad counts): local cache `scratchpad/akdb/` (API not called)
- Sibling chapters: `digi-bible-2026-11/06-monetization-packs.md` (regional prices), `12-aso.md` (Apple Ads basics, CPPs), `14-tiktok-organic.md` (`isAd` posts, creator prices), `15-instagram-snap-influencers.md` (creator fees, Snap), `02-competitors-retro-cams.md` (WayShot spend); prior `digi-deep-2026-11/05`, `08`, `09` (contest rules, models)
- Blocked and not bypassed: Meta Ad Library (403), TikTok Creative Center (login), Business of Apps (403), SplitMetrics dashboard (unlock gate), Adapty full report (form)

---

## Fact-check (2026-11-16)

Adversarial re-check on Nov 17, 2026 of the 12 numbers this chapter's go/no-go call on paid ads rests on.

**Checked and confirmed (no change)**
1. AppTweak, US Photo & Video, Jan–Dec 2025: median **CPT $1.61**, **CPI $2.79**. Confirmed on apptweak.com.
2. AppTweak all-category CPI: UK **$2.60**, Saudi Arabia **$1.29**, UAE **$1.38**; UK CPT $1.35; global median CPI $1.80. Egypt not listed. Confirmed.
3. Mobile Action 2026 report (2025 data): global CPA **$2.51** (2024: $2.76); CPT Q2 low $1.26 → Q4 $1.88; GB CPT $2.60 / CPA $4.53 (highest). Confirmed.
4. Adapty Meta Ads benchmarks (Jul–Sep 2026, 5K apps, 45 countries): median cost per paying user **$64.93**; D7 ROAS **39%** overall, **33%** US (26th of 27); Netherlands, Norway and Portugal **122–133%**. Confirmed.
5. Adapty: Start Trial optimization buys trials at **$20.28**. Confirmed (it is the cost for trial-optimized campaigns, not an all-campaign median; wording tightened).
6. RevenueCat SOSA 2026: Photo & Video trial-to-paid **22.2%**; North America trial-to-paid **34.2%** (Asia-Pacific 31.9%, Western Europe 29.7%). Confirmed.
7. RevenueCat SOSA 2026: D14 revenue per install, hard paywall **$2.32** vs freemium **$0.27**. Confirmed (the page labels the freemium group "low-priced freemium" in one chart, so the gap may be overstated for higher-priced freemium apps).
8. Apple Ads Basic: pay per install at a price you set; **$100 credit** for eligible new accounts. Confirmed on ads.apple.com/app-store/basic. The **$10,000 per app per month** cap is confirmed on Apple's Basic help pages (via chapter 12 and search results).
9. Apple custom product pages: up to **70** additional pages, can be assigned keywords, each keyword combination unique to one page. Confirmed on developer.apple.com.
10. AdServices attribution without ATT: confirmed for **standard** attribution; detailed data needs ATT consent. Wording made precise.

**Changed**
1. Key takeaway 3: "$20.28 median cost per trial" now says it is for trial-optimized Meta campaigns.
2. Key takeaway 6: AdServices "no tracking prompt" limited to standard attribution data.

**Could not verify**
- WayShot's Meta spend (~$29.7K in 30 days, $12.1K in 7 days) and revenue (~$417K/month): AppKittie estimates from a cached export; the API was not called and Meta Ad Library is closed to automated reads.
- SEM Nexus agency figures (creative fatigue 3–6 weeks, $50–100/day per ad set) are opinion, not data.
- The US-only download-to-trial (7.1%), D35 (2.8%) and D14 RPI ($0.38) and MEA figures (19.5%, 63.5% Day-0) were not each re-found on today's RevenueCat page; MEA 19.5% appears only as a contributor quote.
- The "~7% expected refunds" and "$31.60 per yearly sale" are the author's estimates (E).
