# Digi: revenue comps, peak-MRR odds and exit math (Nov 16, 2026)

**Labels:** V = I checked the page myself today (Nov 16, 2026). C = a press, analytics or listing claim I read but can't audit. E = my estimate.
**TrustMRR caveat:** "verified" means TrustMRR is connected to the payment provider (RevenueCat, Stripe, Superwall, App Store). It doesn't audit the business. Search snippets of TrustMRR pages were often wrong (one showed Iris Pro at "$39K/30d"; the real page says $38). Every TrustMRR number below comes from the `.md` page itself.

---

## 0. Bottom line

1. **Boothie is still the best proof, and it's still growing** [V]. MRR is $54.4K from 2,343 subscriptions (+9.5% in 30 days). It's listed at $1.5M (2.2–2.3× run-rate) with 32 offers and is **still unsold after 38 days**.
2. **Boothie is the outlier, not the typical result.** The same playbook (TikTok slideshows, digicam/AI looks, 2026 launch) also produced these [V]:
   - Lenz AI: peaked at $8.9K a month, then fell 81% in two months.
   - An unnamed photography app: peaked at $32K, then fell 43%.
   - TaraSnap, a plain photo-strip app: $111 all-time.
3. **Base rate** [V, RevenueCat SOSA 2026]: only **7.3% of new Photo & Video apps reach $10K a month within 2 years**, and 21.4% reach $1K. Across all categories, the median app makes $72 a month one year after launch.
4. **Viral photo revenue usually decays 70–95% within 2–6 months.** Lensa, Epik, Lapse, Dispo, BeReal and the 2026 TrustMRR cohort all show it. The survivors (Remini, PhotoRoom, FaceApp, Photo Lab) had a lasting job to do or shipped new content on a steady schedule.
5. **Buyers price trend apps far below Boothie's asking price.** Comparable listings ask 0.6–1.6× revenue, or 1.3–3× profit (SDE). FE International puts subscription apps with weekly plans and one channel near 3.5× earnings. Weekly plans keep only 1.2% of subscribers after a year.
   - So $30K MRR is realistically worth **$350–650K**, and only after 6–12 steady months.
6. **Odds of reaching $30K MRR within 12 months: about 5–8% (E).** Odds of holding it for the 3–6 months needed to sell: about 3–5% (E).

---

## 1. Verified revenue comps

### 1a. TrustMRR (all V, fetched Nov 16, 2026 from `trustmrr.com/startup/<slug>.md`)

| App (slug) | Category | MRR now | Revenue by month (2026 unless noted) | Age | Growth | Team | Channel | Listing / multiple |
|---|---|---|---|---|---|---|---|---|
| **Boothie** (boothie) | AI digicam/film looks, iOS | **$54,351** (2,343 subs, about $23.2/sub/mo) | Jun $4.7K (1 wk) · Jul $27.3K · Aug $43.7K · Sep $43.4K · Oct $56.4K · Nov $29.0K by the 16th (about $55K pace). All-time $204.6K | Launched Jun 23, 2026 (5 mo) | 30d revenue +18.1%, MRR +9.5% | Solo (Keremcan Şeker); profile shows 2 users | TikTok (persona slideshows, C) | **$1.5M ask, 2.2×**, listed Oct 9, 32 offers, **not sold**. Margin 55% |
| **Lenz AI: Digital Camera Effect** (lenz-ai-digital-camera-effect) | AI digicam effect (Nano Banana), iOS | $2,200 (289 subs) | Apr $2.7K · May $3.9K · Jun $7.5K · Jul $7.0K · **Aug $8.9K (peak)** · Sep $3.2K · Oct $1.7K · Nov $0.3K (Superwall key expired Nov 10) | Mar 2026 (8 mo) | **−81% peak to Oct** | Solo | TikTok slideshows ("60M views") | $69K ask, 4.4× (unrealistic for a decaying app). Margin 80% |
| Stealth "Photography app" (anonymous-startup-43) | Photo app (unnamed) | $7,480 (1,372 subs) | Apr $2.3K · May $12.0K · Jun $27.1K · Jul $20.3K · **Aug $32.2K** · Sep $15.6K · Oct $18.2K | Apr 2026 | −43% peak to Oct; MRR +7.7% 30d | n/a | n/a | Not for sale. Margin 95% |
| Stealth "depuff-ai" | Face/looks app, React Native + RevenueCat | $58,762 (15,127 subs) | Dec '25 $105.7K · **Jan $152.4K** · Feb $98.8K · Mar $91.5K · Apr $71.1K · May $62.8K · Jun $48.8K · Jul $51.0K · Aug $38.8K · Sep $37.9K · Oct $48.3K | Jun 2025 | −75% peak to trough, then flat at about $40–50K | n/a | TikTok | Not for sale. Margin 60% |
| Stealth "mobileapp" | Consumer AI image create/edit, iOS | $460,966 (13,582 subs) | Jan $120K · Mar $224K · Jun $133K · Sep $903K · **Oct $1.22M** · Nov $325K (partial) | Dec 2025 | 30d revenue −22.6%; very spiky | 6–10 | Meta Ads, Instagram (paid) | **$4M ask, about 0.4–0.7× revenue.** Margin 32% |
| Stealth "photo-sharing" | **Event photo-sharing app** (weddings/events) | $0 (pay per event) | Dec '25 $6.6K · Mar $14.3K · Apr $28.4K · May $38.0K · **Jun $51.9K** · Jul $46.1K · Aug $45.7K · Sep $38.0K · Oct $16.9K | Apr 2024 | −67% peak to Oct (seasonal) | n/a | Google Ads, SEO, Instagram | $1.5M ask, 11.5× (ask only). All-time $562.5K. Margin 45% |
| Photo AI Studio (photo-ai-studio) | AI photoshoots, web | $3,631 (192 subs) | Flat at $2.1–4.7K/mo, Dec '25 to Oct '26 | Dec 2023 | Flat | 3 founders | Google Ads | $150K ask, 3.1× (a steady web app gets a higher multiple). Margin 95% |
| **Liinks** (liinks) | Link-in-bio | $31,724 | $27.8–37.1K/mo, very steady | May 2020 | Flat ±10% | **1 person** | n/a | Not for sale. All-time $1.81M |
| TaraSnap (photo-booth-app-tarasnap) | **Non-AI photo-strip booth**, iOS/Flutter | $13.66 | $5–39/mo | 2026 | — | n/a | n/a | Not for sale. **All-time $111** |
| AI Selfie Studio (ai-selfie-studio) | AI profile photos, web | $0 | Nov '25 $1.1K → about $70/mo | Nov 2025 | −94% | Solo | n/a | $20K ask, 1 offer |
| Restore Photos App | AI restore, web, SEO | $0 | Peak $670/mo (Oct) | Jan 2026 | — | n/a | Organic search (C) | Not for sale |
| Caricature Maker / True Moments / Iris Pro / FlashEdit | Small AI photo tools | $0–$29 | $0–$250/mo | 2025–26 | — | Solo | — | $600–$5K asks |

**What this cohort says:**
- Of the six 2025–26 consumer photo apps with real revenue, **one (Boothie) is still rising**. Four peaked and then lost 43–81%.
- The rest of the cohort never got past a few hundred dollars a month.
- The format alone doesn't sell. A photo strip without AI looks and without distribution made $111 all-time (TaraSnap).

### 1b. Marketplace listings (V = page fetched; asking prices, not closed deals)

| Listing | What | Revenue | Profit | Ask | Multiple | Notes |
|---|---|---|---|---|---|---|
| Acquire: "viral consumer AI photo-to-video iOS app" [V] | AI photo → prank video | TTM $580.4K; last month $53.1K | TTM $291.6K | **$495K** | **1.7× profit, about 0.85× revenue** | Launched Nov 2025, organic TikTok/IG/ASO, 278K downloads, 5% DAU/MAU, about 1,700 paying users. **The closest real price signal to Boothie: similar monthly revenue, one-third of the ask.** |
| Acquire: two AI-photo apps (dating + headshots) [V] | Web/Stripe, paid + UGC | TTM $1.22M; MRR about $65K; peak about $198K/mo | SDE $278K | $800K | 2.9× SDE, about 0.65× revenue | **12.8% monthly churn.** 4 years of filed accounts. Owners work under 4 h/week |
| Flippa: Visio AI face editor [V] | iOS + Android | $73K in year 1; last quarter $8.6K | about $6.7K/qtr | $42K (cut from $48K) | 1.4× profit, 0.6× revenue | Decayed. 80% of revenue from renewals |
| Flippa: Remo AI Aesthetic Photos [V] | iOS/Android/web | about $1.3K MRR | $1.27K/mo | $20K | 1.3× profit, 0.8× revenue | 2 years old |
| Flippa: Stunna Photo Editor (flash looks) [V] | iOS/Android | Jul $4.3K → Aug $9.4K, then about $2.3K/mo implied | $1.7K/mo | $44.5K | 2.2× profit, 1.6× revenue | Launched mid-2026, 0 reviews. Same decay pattern |
| Flippa #12733297 AI art app [V] | iOS/Android | TTM $1.41M gross | about $49K/mo | Hidden; **ended** | 3.4× profit / 1.9× revenue | "100% organic", 14.8M users |
| Acquire: AI art/video gen (iOS/Android/web) [C, snippet] | — | TTM $942K | $806K | $1.9M | about 2.4× profit | 100% organic, 50M downloads |
| Acquire: AI creative app (photo + video effects) [C, snippet] | — | TTM $25.5K | $14.7K | $62K | 4.2× profit | Small |
| Acquire: disposable-camera event app [C, snippet] | — | TTM $35.4K | — | $153.4K | about 4.3× revenue | Event niche |

### 1c. Larger reference points (C)
- **PhotoAI.com** (Pieter Levels): about $132K a month (May 2025, self-reported). About half its traffic is SEO. It took 2+ years. https://ppc.land/how-one-photo-ai-app-generates-132k-monthly-after-70-failed-startups/
- **SlidesTok** (a tool that makes TikTok slideshows for apps): about $66K MRR on TrustMRR (C, snippet). **The persona-slideshow playbook is now sold as a tool, so many competitors run the same formula.**

---

## 2. Category history: how viral photo apps rise and fall

| App / trend | Peak | How fast it decayed | What happened next | Source |
|---|---|---|---|---|
| **Lensa Magic Avatars (Dec 2022)** | 2022 revenue about $43M, **over 50% of it in December** (C); 12.6M installs Dec 1–11 (C) | AI photo app group: daily revenue **−72% from mid-Dec to Feb 12** (Apptopia); 2023 $18M (−58%) | **Under $600K/month by May 2024** (AppMagic via Statista), about −95% from peak month; staff 92 → 56 | [TechCrunch](https://techcrunch.com/2023/02/13/the-ai-photo-app-trend-has-already-fizzled-new-data-shows), [BusinessOfApps](https://www.businessofapps.com/data/lensa-ai-statistics), [Statista](https://statista.com/statistics/1350980/lensa-ai-in-app-revenue-worldwide) |
| **Remini (AI headshots, Jul 2023)** | 23–26M downloads and about $23M revenue in July 2023 (C) | Downloads fell back to about 7M a month | **Revenue held and grew** to about $93M/yr run-rate (Appfigures, Feb 2026). It has a lasting job (enhance and restore photos) plus hard-paywall pricing under Bending Spoons | [Appfigures](https://appfigures.com/resources/insights/the-company-squeezing-money-from-apps-you-used-to-love), [Sensor Tower](https://sensortower.com/blog/rapid-growth-and-competitive-dynamics-the-state-of-ai-photo-and-video-apps) |
| **Epik AI Yearbook (Oct 2023)** | Daily net revenue **$15K → $340K**; $1.7M net in 2 weeks (Appfigures) | Apptopia called it short-lived | Snow/Epik's parent rode a run of trends (AI Profile +1400% YoY in 2023); Snow made about $20M lifetime, 90% of it in 2023 | [TechCrunch](https://techcrunch.com/2023/10/06/ai-app-epik-hits-no-1-on-the-app-store-for-its-viral-yearbook-photo-feature), [Appfigures](https://appfigures.com/resources/insights/20231006?f=5), [Daum/JoongAng](https://v.daum.net/v/20230911175220093?f=p) |
| **Photo Lab (same yearbook trend)** | — | **Kept 40% one-month retention** by adding new themes | It survived by shipping looks on a steady schedule | Sensor Tower (above) |
| **Lapse (disposable camera, Oct 2023)** | 218K downloads a day | **−70% in about 4 weeks** | Nov 2025: "close down completely or simplify", went back to a plain disposable camera | [Appfigures](https://appfigures.com/resources/insights/20231117?f=5), [Yahoo/TC](https://news.yahoo.com/lapse-photo-app-forced-users-172405122.html) |
| **Dispo (2021)** | $200M valuation | Spark pulled its funding; about 800 downloads a day by late 2023 | Zombie | [PetaPixel](https://petapixel.com/tag/dispo/) |
| **Poparazzi** | 5M+ downloads | — | Shut down in 2023 | Same |
| **BeReal (2022)** | About 15M DAU in Oct 2022 | DAU −61% by March 2023 (Sensor Tower via NYT) | Sold to Voodoo for about €500M in June 2024 while short of cash; ads added | [Engadget](https://www.engadget.com/bereal-the-buzziest-app-of-2022-has-been-bought-by-a-mobile-game-publisher-175016152.html), [Sherwood](https://sherwood.news/snacks/tech/unfiltered-social-app-bereal-is-sold-after-pandemic-growth-didnt-turn-into/) |
| **FaceApp (2017, 2019)** | 2019: 65K → 1.8M new users a day (26×) | Downloads 120M (2020) → 60M (2022) | Estimated revenue **kept rising**, $25M (2019) → $80M (2022), because the subscription base kept paying after each spike (E-grade data) | [BusinessOfApps](https://www.businessofapps.com/?p=52461), [Sensor Tower](https://sensortower.com/blog/top-apps-worldwide-july-2019-downloads) |
| **Prisma (2016)** | — | — | No verified numbers found. The company became Prisma Labs, which later made Lensa | — |
| **PhotoRoom (steady)** | Downloads +238%, revenue +124% in 2023 (Sensor Tower); ARR about $65M (Mar 2024) → about $94M (end 2024, Sacra E) | No decay | A work tool for sellers: utility, not a trend. $500M valuation | [Sacra](https://sacra.com/c/photoroom), [TechCrunch](https://techcrunch.com/2024/01/09/sources-photoroom-the-ai-photo-editing-app-is-raising-50m-60m-at-a-500m-600m-valuation) |
| **2026 TrustMRR cohort** | Lenz $8.9K, photography app $32K, depuff $152K, Visio about $6K/mo | −43% to −81% within 2–7 months | Depuff settled at about 30% of its peak | §1a |

**Lessons for Digi:**
1. **Expect a 70–80% drop within 2–3 months after any spike.** Peak MRR and the MRR you can sell are two different numbers.
2. **The survivors had one of three things:**
   - a lasting job: Remini restores photos, PhotoRoom sells products;
   - new themes every week: Photo Lab, Snow/Epik;
   - a big base of subscribers who were still paying before the next spike: FaceApp.
   - Digi's lasting job is the party/event/group photo. That's a real but seasonal use.
3. **Christmas looks lose demand on Dec 26. NYE looks lose demand on Jan 2.** Lensa's December was over half its year.
4. **Socially forced mechanics fade fastest** (Lapse's invite wall, BeReal's daily notification). Digi's share links should reward sharing, never require it.

### Seasonality (what to expect)
- Adapty holiday report, all US subscription apps, Oct 2025 to Jan 2026 [V]:
  - The market peaked in the first week of January at +26% over an October week, but the **median app gained only 5.8%**.
  - Trials peaked on Jan 1 (+49%) and first payments on Jan 10 (+55%).
  - Black Friday did almost nothing (+0.3%).
  - https://adapty.io/blog/state-of-holidays-for-subscription-apps/
- Photo editing installs peak on **Christmas Day** (Adjust, 2023, C).
- **For Digi (E):**
  - Strongest weeks: Dec 15–Jan 1. Party, NYE and "Christmas digi dump" looks peak.
  - Jan 2–20: −30 to −50% for party looks. Generic "new year, new me" looks hold up better.
  - Smaller bumps: Valentine's (Feb 7–14), spring break (March), prom (Apr–May), graduation (May–Jun), summer, Halloween (Oct 15–31), back to December.
  - Event/wedding revenue peaks Apr–Sep (the event app: Jun $52K vs Dec $6.6K).

---

## 3. Who buys photo/AI apps, and at what multiple

### Buyer types
| Buyer | Recent photo/app deals | Will they buy a Digi-size app? |
|---|---|---|
| **Bending Spoons** | Splice (2018, from GoPro), **Remini (2021)**, Filmic (2022, staff cut Dec 2023), Evernote, WeTransfer, Vimeo, AOL, Eventbrite [C] | **No.** They buy known brands past their peak at $10M+ revenue, then raise prices ([Appfigures](https://appfigures.com/resources/insights/the-company-squeezing-money-from-apps-you-used-to-love)) |
| **Canva / Adobe / Apple** | Canva: Affinity (about $380M, 2024), Leonardo, Cavalry, MangoAI (2026). Adobe: Topaz Labs (Jun 2026). Apple: Pixelmator (2024), Color.io (2026, C) | **No.** They buy technology and teams, not trend apps |
| **Picsart** | D'efekt (2020), DeepCraft (2021, 7-figure) | Tech tuck-ins only |
| **MWM (French app studio)** | Swipewipe (2024), Sincerely, **Picnic** (2026, €4M ARR, profitable), on a "shopping spree in the photo segment" [V, Maddyness] | **Yes, the most realistic strategic buyer**, but only at about €1M+ ARR with steady revenue |
| **Turkish/EU app studios** (HubX unicorn, FERASET $4.5M seed, Codeway, etc.) | Funded to build AI consumer apps. No verified purchases of indie apps found | Possible. They know the TikTok playbook and can run it, so they pay for the brand, subscribers and accounts, not the know-how |
| **Financial buyers on Acquire.com / Flippa / TrustMRR / Microns** | The listings in §1b | **Yes, the most likely route.** They pay 1.5–3.5× SDE and use earnouts for growth they can't yet trust |
| **Brokers (FE International, Quiet Light)** | 1,500+ closed deals (FE) | Worth it above about $1M price |

### Multiples (evidence)
- **FE International, Sep 30 2026** [V] (https://www.feinternational.com/blog/how-to-sell-a-mobile-app):
  - Subscription apps with real retention: **3.5–6.0× adjusted earnings**. Ad-supported or single-platform utility apps: 1.8–3.5×.
  - **The same $220K of earnings is worth about 5–5.5× on annual plans, but about 3.5× on weekly plans with one paid channel.**
  - Year-one retention: **annual plans 28%, monthly 8%, weekly 1.2%.**
  - Discounts for: iOS-only, one social channel driving most installs, dependence on a third-party API, an owner who has to work on it daily.
  - Earnouts over 1–3 years for fast growers. Escrow 5–15%.
- **Flippa median profit multiples** [C]: 1.68× ($10–100K deals), 1.96× ($100–500K), 2.18× ($500K–1M), 2.43× ($1M+).
- **Acquire.com** prices on profit; medians are about 3.9–4.3× profit across all deal types (C, mostly SaaS). Mobile apps sit lower.
- **Real photo-app asks** (§1b): **0.6–1.6× revenue, or 1.3–3× profit**, for anything showing decay. Even a $461K-MRR AI image app asks only about 0.4–0.7× revenue.
- **Boothie at 2.2–2.3× run-rate (and about 7× its trailing revenue)** sits at the top of this range. 32 offers in 5 weeks with no sale suggests the offers are below the ask (E).

### What moves the multiple, roughly in order
1. **Trailing-twelve-month (TTM) stability.** Buyers pay on TTM profit, not on the December run-rate. A Christmas spike in TTM is discounted as a one-off.
2. **Plan mix and renewal curves.** Weekly-heavy revenue (51% of Photo & Video revenue, per Adapty) is the worst case. Annual plans get a premium.
3. **Organic share and how many channels.** "TikTok personas only" counts as one channel. Add ASO, web/SEO and owned email.
4. **Churn and refunds.** Photo & Video trial refunds run 6.4–7.5% (Adapty [V]). Staying below that is a selling point.
5. **Platform and model risk.** iOS-only, a single AI model (Nano Banana via OpenRouter), OpenRouter pricing, and the TikTok algorithm.
6. **Owner hours.** Under 5–10 hours a week can transfer to a buyer. Above that, buyers price it as a job.
7. **Transferability.** App Store transfer works. Sign in with Apple, iCloud, or personal social accounts block or complicate it.

---

## 4. Peak-MRR outcomes for Digi (E, with reasoning)

**Starting points:**
- RevenueCat base rate [V]: 7.3% of new Photo & Video apps reach $10K a month within 2 years; 21.4% reach $1K; the median app makes $72 a month at one year; the top 10% make over $2,574.
- Adapty [V]: the top 10% of Photo & Video apps earn 94.6% of the category's revenue.

**Adjustments upward:**
- A proven playbook, a proven look category, and 3–5 posting accounts from day 1.
- A December launch, which is the best possible timing for party looks.
- Shareable links that work as a growth loop.

**Adjustments downward:**
- A solo founder with exams from Dec 5.
- Apple review takes ~4–7 days, so revenue may only start around Nov 25–Dec 1.
- The look category now has many copycats (SlidesTok, Lenz, Stunna, Boothie).
- Christmas looks have a hard expiry.

### (a) Contest window, Nov 16 to Dec 16: cash collected and MRR on Dec 16 (E)
| Percentile | Cash in window | MRR on Dec 16 | What it takes |
|---|---|---|---|
| Bottom 25% | $0–150 | <$150 | Approval slips past about Dec 5, or no slideshow breaks 50K views |
| **Median** | **$400–1,500** | **$400–1,200** | 1–2 posts reach 100–300K views; paywall converts about 1–2% of installs |
| Top 25% | $2–5K | $2–4K | Repeated 300K+ posts; about 100–200 weekly subscribers |
| Top 10% | $8–20K | $6–15K | One post reaches 1M+ around Dec 10–16, plus steady posting |
| Top 1% | $30–60K | $25–50K | A Boothie-style month 2, compressed into 3 weeks |

This is lower than the "median $1–4K" in DIGI-VS-STEP. The cut reflects the 2–3 weeks of selling time after review, and Lenz's first full month of $2.7K with the same playbook.

### (b) 3 months, to about Feb 16, 2027: peak MRR reached (E)
| Percentile | Peak MRR | MRR on Feb 16 |
|---|---|---|
| Bottom 25% | <$300 | <$150 |
| **Median** | **$1–3K** | **$0.5–1.5K** (the January drop) |
| Top 25% | $4–8K | $2–5K |
| Top 10% | $12–25K | $6–15K |
| Top 1% | $50K+ | $30K+ |

### (c) 12 months, to Nov 2027: peak MRR at any point, and MRR at month 12 (E)
| Percentile | Peak MRR | MRR at month 12 |
|---|---|---|
| Bottom 25% | <$500 | about $0–200 (abandoned) |
| **Median** | **$1.5–4K** | **$0.5–2K** |
| Top 25% | $6–12K | $3–6K |
| Top 10% | $15–40K | $8–20K |
| Top 1% | $100K+ | $50K+ |

**Probability of $30K MRR at any point in 12 months: about 5–8%. Probability of holding $30K+ for 3+ months: about 3–5%.**
- Base: about 2–3% of Photo & Video apps reach $30K, taken as about a third of the 7.3% that reach $10K.
- The playbook and timing roughly double that.
- Comparison: Boothie is one hit among many 2026 attempts, most of which looked like Lenz, Stunna or TaraSnap.

**What moves Digi up the distribution:**
- A new look every week, as Photo Lab did.
- An annual plan offered prominently.
- A group strip that brings in installs from friends.
- An event mode that sells outside December.
- Persona posting that keeps running through exam season.

---

## 5. Expansion paths that raise the ceiling (E unless marked)

| Path | Evidence | Size for Digi (E) | Notes |
|---|---|---|---|
| **Events/weddings: hosted event camera with QR, pay per event (POV-style)** | TrustMRR event app [V]: $562K all-time; peak $51.9K/mo in June, $6.6K in December; channels Google Ads + SEO. POV in-app purchases $4.99–$89.99 (C); about $25–50 per event (competitor claim). US weddings about 2.2–2.4M a year (C, vendor) | **$5–30K/mo in season** after 6–12 months of SEO and ads; low in winter | **The best counter-season to December.** It's a different channel (Google, planners). Each guest is also an install. Revenue is one-off per event, not MRR, so buyers value it differently; add an annual plan for planners |
| **B2B brand activations / virtual AI photobooth for agencies** | AI booth rentals $800–2,500 per event; brand activations $1,500–5,000; software licences $50–500 per event (all C, vendor pages). US booth rental market about $101M (IBISWorld, C) | $3–20K MRR from 20–100 operators/agencies at $99–299/mo, 12–24 months out | **Banned during the contest** (no "services"); start after Dec 16. Lower churn makes it SaaS-like and lifts the multiple, but it needs sales calls, invoices and support. Risk of distraction |
| **Web app (digi.pink) with Stripe checkout** | The AI-photo portfolio takes 99.9% of revenue through Stripe [V]. US apps may link to web checkout since the 2025 Epic ruling (C) | +10–15 margin points; +10–30% reach through SEO and the free strip maker | Web revenue has no Apple fee. Free browser tools pull in organic traffic |
| **Android** | Photo & Video annual LTV: Android $35.2 vs iOS $38.3 (Adapty [V]). About a third of Google Play cancellations are billing failures (FE) | +15–35% revenue | Removes the iOS-only discount. 14-day closed test with 12 testers first |
| **English-speaking markets (UK/AU/CA)** | Photo & Video weekly prices: UK 1.5× the US (Adapty [V]) | +20–40% | Almost free: just local-time posting accounts |
| **DE/FR/ES/IT localisation** | Boothie runs German personas (C). Europe prices 29–39% higher than North America (Adapty [V]) | +10–30% | Translate looks and paywall; add 1 persona account per market |
| **Gulf (KSA/UAE)** | High ARPU, but party/NYE looks conflict with local norms | +3–10% | Weddings, Eid and graduation looks fit; check content rules |
| **Brazil** | High volume, low price | +5–15% revenue, more installs | Needs local pricing |
| **Japan / Korea** | Purikura: about 10K machines; Furyu sold $219M of machines and supplies in FY2017 (C). Korea had 3,000+ four-cut booth stores in 2024, now oversupplied (C). Snow made 90% of its lifetime revenue in 2023 | Hard: +0–10% | The strip culture fits Digi exactly, but Snow, Ulike and Meitu own the market. Only with a native-quality brand and local looks |
| **Creator link-in-bio (digi.pink/@name)** | **Liinks: $31.7K MRR, steady for 5+ years, 1 person, $1.81M all-time** [V]. pawr: about $2.5K/30d [V] | As a growth loop: big. As paid Pro themes: +$1–5K MRR | Durable and low-churn. Linktree dominates, so it works as a free feature that advertises Digi, not as a separate product |

**Ceiling if things go well (E):** consumer core at $20–40K MRR, plus events at $10–20K a month in season, plus web and Android at +30%. That puts a top-decile 24-month outcome at **$40–70K MRR**, with much less seasonal swing than a December-only app.

---

## 6. Exit math (E)

**Assumptions:**
- MRR is RevenueCat gross.
- Costs:
  - Apple fee 15% (Small Business Program);
  - AI cost 12–18%;
  - refunds 5–7%;
  - tools/infra 3–5%;
  - optional paid content 0–10%.
- That leaves an **SDE margin of 50–65%** before owner time (Boothie 55%, Lenz 80%, the photography app 95%).
- Buyers price on **TTM SDE**, discounted for weekly plans, one channel, iOS-only and the AI-model dependency.

| MRR held for 6–12 months | Annual revenue | SDE (50–65%) | Range at 1.5–3.5× SDE | **Realistic sale (E)** | Revenue multiple |
|---|---|---|---|---|---|
| $10K | $120K | $60–78K | $90–270K | **$100–180K** | about 0.8–1.5× |
| $30K | $360K | $180–234K | $270–820K | **$350–650K** | about 1.0–1.8× |
| $60K | $720K | $360–468K | $540K–1.64M | **$0.8–1.3M** (more with an earnout) | about 1.1–1.8× |

- **If revenue is declining when listed:** expect 0.6–1× revenue, as Visio, Remo and the AI-photo portfolio show.
- **If revenue is rising with mostly annual plans and two or more channels:** 3–4.5× SDE is possible, plus an earnout.
- **Boothie's $1.5M ask at $54K MRR** sits at the top of this band, and it hasn't cleared.

**At a ~5% chance of a $30K hit:** the expected value of the exit is low, about $20–40K. Digi is worth doing for the cash and the learning, with the exit as a bonus.

### How to prepare for a sale (start on day 1)
1. **Verified history:** RevenueCat from day 1, connected to TrustMRR from day 1. Verified monthly revenue is what made Boothie credible. Keep the API key from expiring; Lenz's expired and its record now shows $0.
2. **Plan mix:** offer the annual plan prominently. Aim for 25%+ of revenue from annual or monthly plans.
3. **Low refunds:** keep refunds under 5% (category 6.4–7.5%). Use clear trial terms, no dark patterns, and a "restore purchases" button.
4. **Channels the buyer can own:**
   - TikTok/IG persona accounts on brand email addresses, under the LLC;
   - a written posting playbook and a prompt library;
   - the email list from share links;
   - ASO rankings;
   - SEO traffic to digi.pink.
5. **Documented operations:** a runbook for posting, look releases, moderation and support. AI cost per output tracked. A backup AI model configured. Owner time under 5 hours a week.
6. **Transfer-ready:**
   - no Sign in with Apple and no iCloud/CloudKit;
   - everything under one LLC with separate books;
   - domain, Cloudflare and R2 in transferable accounts;
   - RevenueCat project and shared secret documented.
7. **Timing:** list after 6–12 steady months, including a January. Avoid listing right after December, because buyers will see the January drop in the trailing figures.
8. **Venues:** TrustMRR listing plus Acquire.com. A broker (FE International, Quiet Light) only above about $1M. Approach MWM-type studios directly once revenue passes about €1M ARR.

---

## Sources (fetched or read Nov 16, 2026)
- TrustMRR (V): https://trustmrr.com/startup/boothie.md · /lenz-ai-digital-camera-effect.md · /anonymous-startup-43.md · /depuff-ai.md · /mobileapp.md · /photo-sharing.md · /photo-ai-studio.md · /liinks.md · /photo-booth-app-tarasnap.md · /ai-selfie-studio.md · /restore-photos-app.md · /caricature-maker.md · /true-moments.md · /iris-pro.md · /flashedit-ai.md · https://trustmrr.com/category/mobile-apps · https://trustmrr.com/api/ai/discovery
- Boothie App Store (V): https://apps.apple.com/us/app/id6775603987. 4.3★ from 40 ratings. In-app purchases: Plus $6.99, Gold $9.99, Pro Weekly $7.99, Pro Monthly $19.99, credit packs $2.99–$11.99
- Acquire (V): https://app.acquire.com/public/w6bhsg6cws-profitable-viral-consumer-ai-photo-to-video-ios-app-580k-revenue-278k-downloads · https://app.acquire.com/startup/i0hnyf5gpw-ai-photo-app-portfolio-1-56m-revenue-357k-profit-88-margins-runs-itself
- Flippa (V): https://flippa.com/12792406-visio-ai-photo-face-editor · https://flippa.com/13899902-remo-ai-aesthetic-photos · https://flippa.com/14179782-stunna-photo-editor-flash · https://flippa.com/12733297-ai-art-and-image-app-with-1-41m-ttm-gross-revenue-14-8m-registered-users-google-play-app-of-the-year-100-organic-zero-paid-acquisition
- FE International (V): https://www.feinternational.com/blog/how-to-sell-a-mobile-app
- RevenueCat SOSA 2026 (V): https://www.revenuecat.com/state-of-subscription-apps-2026/ · TechCrunch on AI retention: https://techcrunch.com/2026/03/10/ai-powered-apps-struggle-with-long-term-retention-new-report-shows
- Adapty (V): https://adapty.io/blog/photo-video-app-subscription-benchmarks/ · https://adapty.io/blog/state-of-holidays-for-subscription-apps/
- Flippa multiples (C): https://flippa.com/blog/mobile-app-valuation-key-methods-metrics-and-multiples-for-2025/
- Category history (C): TechCrunch Lensa fizzle (V-read) https://techcrunch.com/2023/02/13/the-ai-photo-app-trend-has-already-fizzled-new-data-shows · Sensor Tower AI photo/video state (V-read) https://sensortower.com/blog/rapid-growth-and-competitive-dynamics-the-state-of-ai-photo-and-video-apps · Appfigures Bending Spoons (V-read) https://appfigures.com/resources/insights/the-company-squeezing-money-from-apps-you-used-to-love · Appfigures Epik https://appfigures.com/resources/insights/20231006?f=5 · Appfigures Lapse https://appfigures.com/resources/insights/20231117?f=5 · BusinessOfApps Lensa https://www.businessofapps.com/data/lensa-ai-statistics · Statista Lensa https://statista.com/statistics/1350980/lensa-ai-in-app-revenue-worldwide · Engadget BeReal https://www.engadget.com/bereal-the-buzziest-app-of-2022-has-been-bought-by-a-mobile-game-publisher-175016152.html · Sacra PhotoRoom https://sacra.com/c/photoroom · Snow https://v.daum.net/v/20230911175220093?f=p · PhotoAI https://ppc.land/how-one-photo-ai-app-generates-132k-monthly-after-70-failed-startups/
- Acquirers (C; Maddyness V-read): https://www.maddyness.com/uk/2026/04/09/after-two-acquisitions-in-the-united-states-mwm-snaps-up-london-startup-picnic/ · Bending Spoons https://techcrunch.com/2026/07/05/what-is-bending-spoons-everything-to-know-about-aols-acquirer/ · Canva/Affinity https://www.businesswire.com/news/home/20240325965656/en/ · Adobe/Topaz https://www.morningstar.com/news/dow-jones/202606255459/adobe-to-acquire-topaz-labs-as-demand-for-ai-tools-increases · HubX https://f.invest.gov.tr/en/news/news-from-turkey/pages/hubx-becomes-turkiyes-first-app-studio-unicorn.aspx
- Events/B2B (C): https://pov.camera/pricing · https://knipsmig.com/pov-camera-pricing · https://aiphotobooth-landing.pages.dev/blog/en/ai-photo-booth-pricing · https://www.ibisworld.com/united-states/market-size/photo-booth-rental/6370/ · Korea four-cut https://www.bizhankook.com/bk/article/29706 · Purikura https://www.thejakartapost.com/life/2020/07/30/surviving-selfies-japans-purikura-photo-booths-cling-on.html
- Working files: `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/digi/comps/exit_math.py`
