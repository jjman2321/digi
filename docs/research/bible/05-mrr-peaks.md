# 05 · MRR peaks: how hit photo apps rise and fall, and what that means for Digi

*Digi bible, chapter 5. Written Nov 17, 2026. Track: revenue curves, peaks, decay and the realistic money curve for Digi from Nov 17, 2026 to Mar 31, 2027.*

**Labels used in this chapter**
- **V** = I read the primary page or pulled the data myself on Nov 16–17, 2026 (TrustMRR `.md` pages, iTunes Lookup, App Store review RSS, the cached AppKittie export, the Appfigures/Sensor Tower/RevenueCat/Adapty pages linked).
- **C** = a number from an analytics firm, the press or a seller that I read but can't audit. Analytics firms estimate. They often disagree by 2–4×.
- **E** = my estimate or model output. Each has a confidence: high / med / low.

**Net vs gross.** Appfigures quotes **net** revenue (after Apple/Google's cut). Sensor Tower, Apptopia and data.ai quote **gross** consumer spending. TrustMRR quotes **gross before Apple's commission, minus refunds**. A $1M "net" Appfigures day is about $1.4M gross. I say which one each number is.

**Working files** (so anyone can re-check): `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/bible/mrr/` holds the TrustMRR pages, `scripts/halflife.py` (decay maths), `scripts/rss.py` + `rss_out.json` (review-date counts), and `scripts/model.py` + `model_out.json` / `model_out2.json` (the Digi scenario model).

**What I couldn't get (not bypassed):** Sensor Tower and Appfigures per-app daily charts are behind paid accounts. Business of Apps and Statista returned 403. TrustMRR asks agents not to scrape its marketplace, so I used only public `.md` pages of known slugs. No historical revenue exists in public for Dazz, Huji, Gudak or the 2021 Dispo relaunch. Where I say "not found", I looked and it isn't public.

---

## Key takeaways

1. **Hit photo apps go from normal to peak in 7–21 days, then lose half their money every 3–5 weeks.** Measured half-lives: Lensa's AI-photo group 32 days, Lapse 16–22 days (downloads), Lenz AI 26 days, a 2026 TrustMRR photography app 29 days [E from V/C data, high on the method, med on the inputs]. Digi should plan for a 3–4 week half-life after any spike.
2. **Peaks are huge but short.** Lensa made **more than $2M net in one day** at its December 2022 peak and $37.5M net in about 60 days (Appfigures). Epik's daily net revenue went **$15K → $340K in about two weeks** (Oct 2023). Remini went **$90K → $567K net in one day** (Jul 2023). FaceApp went **65K → 1.8M new users a day** (Jul 2019) [C].
3. **What kept money coming after the spike was never the trend itself.** It was one of four things: a lasting job (Remini restores photos and now runs at **$93M a year net**, Appfigures Feb 2026), a steady stream of new looks (Photo Lab kept **40%** one-month retention after the yearbook trend), a cheap generous product people keep (Dazz, ~$0.5–0.9M a month on a $6.99/yr plan), or a seasonal job that comes back (the event photo app: $51.9K in June, $6.6K in December).
4. **Free AI tools steal trends from paid apps.** In the 2025 Ghibli wave, ChatGPT hit record downloads (46M in March 2025) and record weekly revenue. **Remini's downloads doubled but its revenue rose less than 1%** (Appfigures). Gemini's Nano Banana figurine trend gave it 22M extra downloads in 28 days, with little app-store spending (about $181K of extra gross spending, against ~$70M for ChatGPT's image launch; Appfigures, May 2026). A look that anyone can make with a free prompt will not sell.
5. **The 2026 digicam wave has not peaked.** In the 30–90 days to Nov 12, WayShot's revenue rose **+82%** and its ratings **+294%**; Boothie's ratings rose **+362%**, Pecra's +116% and Fimii's +513% [V, AppKittie cache]. Boothie's verified 30-day revenue is **$56,557, +19.8%** (TrustMRR, Nov 16). The Nov 17 sync shows **$54,654, +12.8%** (MRR $54,030, 2,335 subs), so it is still growing but more slowly. Digi launches into a rising market, not a fading one.
6. **Most indie photo apps stay small.** RevenueCat (SOSA 2026): the **median Photo & Video app makes $124 a month one year after launch; the top 10% make $3,600+**. Only 21.4% reach $1K a month and 7.3% reach $10K within two years. Adapty: the top 10% of Photo & Video apps take **94.6%** of the category's revenue.
7. **Digi scenario model (E, med-low).** Cash collected in the contest window, after refunds and before Apple's cut:
   - **Bear (the most likely, about the median): ~$400.**
   - **Base (good execution, about the top 15–20%): ~$6,100.**
   - **Bull (a hit, about the top 5–8%): ~$25,000.**
   - Peak RevenueCat MRR by March 2027: $370 / $3,200 / $12,400.
   - Monthly cash falls **about 65–70% from December to February** in every case.
8. **Timing inside the window matters more than people think.** In the base case, a viral post on **Dec 9 adds ~$2,200** to contest cash. The same post on **Dec 15 adds ~$400**, because trials and weekly renewals land after Dec 16. A 7-day App Review slip (live Dec 2 instead of Nov 25) costs about **25%** of base-case contest cash.
9. **The big unknown is revenue per 1,000 TikTok views.** Lenz AI's seller claims "60M views" and "$20K+ revenue" on the same playbook. That's about **$0.33–0.59 per 1,000 views**. At that rate the base case needs 10–18M views in three weeks. The earlier target of "5 installs per 1,000 views" would need only ~1.8M. Measure it in week 1. It decides which scenario you are in.

---

## 1. The hit-app ledger

One row per hit. "Peak" is the best number I could verify. "Half-life" is the time for revenue (or downloads, where noted) to halve after the peak, computed in `halflife.py` from the before/after numbers in the row.

| App (year) | Trigger | Time to peak | Peak | Decay | What kept revenue afterwards | Conf. |
|---|---|---|---|---|---|---|
| **Lensa, Magic Avatars (Nov–Dec 2022)** | New paid feature ($ per avatar pack) + TikTok/IG posting of avatars | ~3–4 weeks (late Nov launch → mid-Dec peak) | **>$2M net in one day**; **$37.5M net in ~60 days** (Appfigures, Jan 6 2023). Monthly: $8M (BoA) vs $30.7M (Statista) for Dec 2022, sources conflict | Group of AI photo apps: **$1.8M/day gross (mid-Dec) → $0.51M/day (~Feb 12)**, −72% (Apptopia via TechCrunch). **Half-life ~32 days.** "Under $600K/month by May 2024" (AppMagic via Statista, C) | Little. Lensa had a subscription editor before the spike, but the avatar money did not stay | Peak: med. Decay: med |
| **Epik AI Yearbook (Sep–Oct 2023)** | One-off feature in an update on Sep 17; TikTok | **17 days** (Sep 17 update → ~Oct 4 peak) | Daily net revenue **$15K → $340K**; downloads **90K → 600K/day**; **$1.7M net and 2.8M downloads in two weeks** (Appfigures, Oct 6 2023). Price $0.99–38.99 per pack (MobileAction) | "Did not last long" (MobileAction); rivals rebranded around the same trend within days. Now est. ~$500K/mo and 500K downloads/mo (Adapty, 2026, low) | Parent Snow kept shipping new AI photo themes (AI Profile, yearbook). Lasting value came from the next trend, not this one | Peak: med |
| **Photo Lab (same trend)** | Copied the yearbook look | Days | Not public | **40% one-month retention** (Sensor Tower) | **New themes every week** kept users after the trend | Med |
| **Remini, AI headshots (Jun–Jul 2023)** | TikTok "LinkedIn headshot" trend; plus ~300 Apple Search Ads keywords incl. rivals' names | ~1 week to #1 US | Daily net **$90K → $567K in one day**; **$2.3M net in about a week** (Appfigures, Jul 14 2023). Gross $3.73M in Jun 9–15, +1,055% WoW (data.ai via TechCrunch). **23M downloads in one month** (Appfigures) | Downloads fell back to ~7M/month "but revenue didn't come down" (Appfigures) | **A lasting job** (enhance/restore any photo) + a hard paywall under Bending Spoons. **$7.5M net in Jan 2026, $93M/yr net pace**: ~43% of its peak day, every day, 2.5 years later | High |
| **Remini, Ghibli wave (Mar–Apr 2025)** | Cartoon trend + ads on "ghibli" keywords | Days | **7.3M downloads Mar 29–Apr 8**, about double normal (Appfigures) | — | **Revenue rose less than 1%.** Downloads from Brazil, India, Indonesia, Turkey didn't pay | High |
| **ToonMe (Apr 2025)** | Ghibli / cartoon look | **10 days** | Downloads **<15K → ~600K/day** (~40×) (Insightrackr) | Still >400K/day in late April; then moved to action-figure and Simpsons looks, which "did not match earlier hits" | Chasing the next look | Med |
| **ChatGPT / GPT-4o images (Mar 2025)** | Free image model; Ghibli style | Days | **46M downloads in March 2025** (Appfigures); record downloads, WAU and IAP revenue in the week of Mar 24 (Sensor Tower); revenue +19% WoW over two weeks | Downloads >4M/day for about a month, dropped in early May | A general tool. It took the trend from the specialist apps | High |
| **Gemini Nano Banana (Sep 2025)** | Free 3D-figurine trend | ~3 weeks after Aug launch | **#1 US App Store on Sep 12**; 12.6M downloads in Sep to mid-month vs 8.7M in August; **22M extra downloads in 28 days** (Appfigures) | — | Downloads, not spending ("didn't turn that hook into app-store spending") | High |
| **FaceApp (Jul 2019)** | Old-age filter; celebrities | About a week | **65K → 1.8M new users/day** (26×); **63M+ installs in July 2019**, #1 non-game app worldwide (Sensor Tower). Revenue **>$1M in 10 days** (Forbes via AKIpress, C); ~$3.5M in July (Apptica, C) | Downloads 120M (2020) → 60M (2022) (BoA, C) | Annual revenue $10M (2018) → $25M (2019) (BoA citing AppMagic/Sensor Tower, C). A subscriber base from earlier spikes kept paying | Downloads: high. Revenue: low |
| **Prequel (Jan–Feb 2022)** | Cartoon-selfie effect | ~6 weeks | Downloads **~40K → 250K+/day** (Appfigures, Feb 11 2022). Revenue not public | Not public | **Kept shipping effects every week.** Today #23 US top-grossing Photo & Video (ch. 1). Seller-claimed "$26M/yr" (C, Boothie listing) | Peak: med |
| **Lapse (Sep–Oct 2023)** | Disposable camera + "invite friends to get in" wall | ~3 weeks | **8K → 210K/day** (late Sep), **218K/day** in October (Appfigures) | **63K/day by mid-Nov, −71%**. **Half-life 16–22 days** (exact Oct peak date unknown) | Nothing durable: no revenue model, social layer later cut. Last update Dec 6 2025; still **118,322 US ratings** [V] | High |
| **Dispo / "David's Disposable" (Dec 2019–Jan 2020; relaunch Mar 2021)** | YouTuber David Dobrik's audience; photos "develop" at 9 a.m. | ~3 weeks | **#1 free iPhone app overall on Jan 8, 2020**; #1 Photo & Video Jan 7–9 2020 (Sensor Tower via TechCrunch). "Well over a million" downloads by mid-Jan 2020 (The Verge) | The Mar 9, 2021 relaunch (waitlist dropped, $20M Series A) reached only **top 10 Photo & Video**. Investor exit after the Dobrik scandal (Mar 2021) | Little. Last 150 US reviews avg 1.84★ (ch. 2) | High on ranks |
| **Huji Cam (2017–2018)** | Celebrity posts (Selena Gomez), #hujicam | Weeks | #hujicam "nearly half a million posts in a couple of weeks" (iMore). Android ~45–46M installs lifetime (AppGoblin, C, low). Revenue not public (ads + $0.99) | Long, slow tail | One perfect look. **No update since Dec 11, 2024, still #26 free Photo in Japan** (ch. 2) | Low |
| **Gudak (Jul–Aug 2017)** | $0.99 paid app; 24 shots per roll, 3-day "development" | ~6 weeks | **#1 paid app in Korea** (Sports Khan, Aug 8 2017); "#1 in 9 Asian stores" (Platum, C) | Removed from US store now [V, Lookup returns nothing] | Nothing: no update path, no subscription | Low |
| **Dazz Cam (2018 → now)** | Steady TikTok/IG use, many cheap cameras | Slow build, no single spike found | **~$500K–900K a month, 1–2M downloads a month** (Adapty, Nov 7 2026, C); 118,170 US ratings [V] | No public decay; still #20–24 free Photo & Video US | **Cheap and generous**: Pro $6.99/yr or $19.99 once, cameras $0.99–2.99 each, a new camera every few weeks | Low–med |
| **2026 TrustMRR cohort** (verified gross) | TikTok slideshows | 2–4 months | Lenz **$8.9K (Aug)**; photography app **$32.2K (Aug)**; depuff **$152.4K (Jan)**; event app **$51.9K (Jun)** | Lenz −81% in 2 months (**half-life 26 days**); photography −52% in 1 month (**29 days**), then flat ~$15–18K; depuff −68% in 5 months (**92 days**); event app −67% in 4 months (**75 days**, seasonal) | Photography app: a floor at ~50% of peak. Depuff: a floor at ~30%. Lenz: none (its Superwall key expired Nov 10; $0 since) | High (V) |
| **Boothie (Jun 2026 → now)** | ~12 persona TikTok slideshow accounts (US, DE, TR) | **Still rising in month 5** | Jun $4.7K (one week) · Jul $27.3K · Aug $43.7K · Sep $43.4K · Oct $56.4K · Nov 1–16 $29.8K. **MRR $54,109, 2,336 subs; 30-day revenue $56,557 (+19.8%)**; all-time $205,377 [V, TrustMRR, synced Nov 16] | None yet | Many accounts posting daily (no single viral post), several countries, credits + weekly subs | High (V) |

### Lessons from the ledger

1. **Spikes come from one shareable output, not from the app.** An avatar pack, a yearbook photo, an old-age face, a cartoon selfie. Each was a single image people wanted to post. For Digi, the "posting unit" is the strip and the flash photo, not the camera.
2. **Speed to peak is 7–21 days.** Epik: 17 days. ToonMe: 10 days. Remini: about a week. Lapse: ~3 weeks. Lensa: ~3–4 weeks. If a Digi post takes off on Dec 5, the peak is around Dec 12–20. That's right at the contest edge.
3. **Half-life is 3–5 weeks for pure trend money.** It's 2.5–3 months for apps with a real job or a season (depuff, the event app).
4. **The floor depends on what's left when the trend leaves.** Remini kept ~43% of its peak day. The photography app kept ~50% of its peak month. Depuff kept ~30%. Lenz, Lapse, Gudak and Dispo kept close to nothing.
5. **Free general AI tools now take trends that used to go to photo apps** (ChatGPT for Ghibli, Gemini for figurines). Digi's paid looks must be things a free chatbot does badly: a 4-shot strip from one photo, a group, a burned-in date stamp, real faces kept.
6. **Downloads without the right countries don't pay.** Remini doubled downloads in 2025 and gained <1% revenue, because the extra users were in Brazil, India, Indonesia and Turkey. US, UK, CA and AU iPhone users are the ones who pay.
7. **Steady beats spiky.** Boothie never had a single Lensa moment. It runs about a dozen accounts and grew every month for five months. That's the shape to copy.

---

## 2. The current wave: who is rising right now (Nov 2026)

### 2a. 2025–26 camera and filter apps with real revenue (AppKittie cache, Nov 12, 2026)

AppKittie's "revenue" is a last-30-day estimate. For Boothie it was within 3% of TrustMRR's verified number (ch. 2). Treat the rest as **C, med-low**. The cache only covers apps released in 2025 or later that passed my earlier filters (≥$2–10K/month), so these are the survivors, not a random sample.

| App (released) | Est. revenue, last 30 d | Downloads, 30 d | Revenue change 30 d | Ratings change 90 d | Meta ads, 30 d | Notes |
|---|---|---|---|---|---|---|
| **WayShot** (Aug 10, 2025) | **$417K** | 348K | **+82%** | **+294%** | **~$29.7K** | Digicam leader in US (#11 free, #27 grossing, ch. 2). Growth bought partly with ads |
| Paji 相机 (May 2026) | $105K | 140K | — | — | — | Chinese-market camera |
| Gloam 相机 (Aug 2026) | $90K | 60K | — | — | — | Downloads +252% in 30 d |
| **Pecra: G7X** (Jan 17, 2026) | **$88.5K** | 111K | +18% | +116% | $0 | Hard paywall; review spike May–Jun 2026, second rise Sep [V, review RSS] |
| **Boothie** (Jun 23, 2026) | **$54.7K** (TrustMRR: $56.6K) | 40.7K | +14% | **+362%** | $0 | Organic slideshows |
| BerryFilm (Feb 2025) | $50K | 20K | — | — | — | Korean-style film cam |
| **Clicked** (Apr 20, 2026) | $41.7K | 31.7K | **+300%** | +38% | — | Pose-recreate camera + AI |
| **Once** (Nov 24, 2025) | **$25K** | 8.9K | +20% | +50% | — | **Disposable camera for events.** Closest to Digi's "party roll" |
| Fimii (Feb 2026) | $21.9K | 60K | +83% | **+513%** | — | Film presets |
| GlowCam Light (Jan 2025) | $13.2K | 10.4K | +16% | — | — | Selfie light camera |
| Kroma (Jul 30, 2026) | $5.3K | 18.4K | **+283%** | — | — | Develop-wait mechanic, "Develop now" $2.99 |

**What this says:**
- **The category is in a rising phase in autumn 2026.** All eight apps in this table with growth data grew in the last 30–90 days. This matches Google Trends: worldwide "digicam" searches hit a 5-year high in the week of Nov 1–7, 2026 (ch. 1).
- **There is room for several apps at $20–100K a month at once.** That's unusual. In the Lensa wave, the money went mostly to one app.
- **Revenue per download (30-day revenue ÷ 30-day downloads, E):** WayShot ~$1.20, Pecra ~$0.80, Boothie ~$1.34, Clicked ~$1.31, Once ~$2.82, Kroma ~$0.29. Those numbers include renewals from earlier months, so they are higher than first-month revenue per install. The best apps make **$1–1.40 per download per month** once renewals stack up.

### 2b. Review velocity as a timing signal [V]

I counted the dates of the most recent US written reviews (App Store RSS, up to 500 per app). It's a rough proxy for downloads, because written reviews are a small, steady share of users.

| App | Reviews in RSS | Monthly pattern |
|---|---|---|
| WayShot | 160 | 1–2/month until Mar 2026 → 8–10/month Apr–Aug → **24 (Sep), 49 (Oct), 33 (Nov 1–16)** |
| Pecra | 87 | **26 (May), 18 (Jun)** → 5–6 (Jul–Aug) → 15 (Sep), 11 (Oct) |
| ism (MWM) | 253 | Steady 9–16/month since Apr 2025 |

- WayShot's written reviews are running about **5× their spring rate**. Its wave is cresting right now.
- Pecra shows the classic shape: a spike (May–Jun), a fall of ~75% in two months, then a smaller second wave. That's what a one-look AI app does.
- ism shows what a steady app looks like: flat for 18 months.

---

## 3. What small indie camera apps actually earn

### 3a. The base rates

| Source | What it measures | Number | Date |
|---|---|---|---|
| RevenueCat SOSA 2026 [V] | Photo & Video, monthly revenue **1 year after launch** | **Median $124; top 10% $3,600+** | Apps launched 2024–25 |
| RevenueCat SOSA 2026 [V] | Photo & Video apps reaching a milestone **within 2 years** | **$1K/mo: 21.4%; $10K/mo: 7.3%** | same |
| RevenueCat SOSA 2026 [V] | All categories, revenue at 1 year | Median ~$72; top 25% $429+; top 10% $2,574+ | same |
| RevenueCat SOSA 2026 [V] | Photo & Video trial-to-paid | Median 22.2%; top 25% 33.1%+ | same |
| Adapty 2026 [V] | Photo & Video top 10% share of revenue | **94.6%** | 2025 data |
| Adapty 2026 [V] | Photo & Video install LTV (1 year, median) | **$0.82** | 2025 |
| Adapty 2026 [V] | Photo & Video revenue by plan | Weekly 51%, annual 8% | 2025 |
| TrustMRR, Marc Lou [V, prior ch. 09] | Last-30-day revenue of 10,646 startups (all kinds) | $0: 54.9% · <$1K: 35.2% · $1–10K: 7.7% · $10–100K: 2.0% · $100K+: 0.2% | Nov 2026 |
| Ship or Die cycle 1 [C, prior ch. 09] | Median product, all-time | $38.50 | Jun 2026 |
| App Store [V, prior README] | New photo apps launched in 2026 with 100+ US ratings | ~10 of 195 (~5%) | Nov 2026 |

### 3b. My distribution for an indie camera app that ships and markets daily (E, low-med)

This is for an app like Digi: launched, posting daily on TikTok, a working paywall. It isn't for apps that launch and are never marketed (they drag the RevenueCat median down).

| Percentile | MRR at month 3 | Peak MRR in first 12 months | MRR at month 12 | Real examples |
|---|---|---|---|---|
| Bottom 25% | <$50 | <$150 | ~$0 (abandoned) | TaraSnap ($111 all-time), most 2026 strip apps |
| **Median** | **$150–400** | **$300–1,000** | **$100–400** | RevenueCat P&V median $124 at 1 yr |
| Top 25% | $800–2,000 | $1.5–4K | $500–1.5K | AI Selfie Studio peaked ~$1.1K, Photo AI Studio $2–5K |
| **Top 10%** | $3–6K | **$5–12K** | $2–5K | Lenz AI ($8.9K peak), RevenueCat top 10% $3.6K at 1 yr |
| Top 5% | $8–15K | $15–35K | $6–15K | Photography app ($32K peak, ~$15K floor), Once (~$25K) |
| Top 1% | $25K+ | $50K+ | $30K+ | Boothie, Pecra, Clicked |

**Why it's shifted up from RevenueCat's numbers:** RevenueCat's median includes apps with no marketing. Daily posting plus a timely look moves an app up, but not by much. Of the 2026 TrustMRR photo apps with real revenue, one in six (Boothie) is still rising.

### 3c. MRR vs cash: read the right number

- **RevenueCat MRR counts each annual plan as 1/12 of its price every month for a year**, even if the person has already turned off renewal. So an annual-heavy app shows a steady MRR while its cash falls.
- **Weekly plans show up fast in MRR and churn fast.** Photo & Video weekly first renewal: median 45% (RevenueCat).
- **The contest counts cash received, not MRR.** A buyer later looks at trailing-12-month profit.
- Boothie today: MRR $54.1K ≈ 30-day revenue $56.6K. That only lines up because its money is mostly weekly and credits.

---

## 4. Seasonality for the next five months

| Window | What the data says | Source | Digi effect used in the model (E) |
|---|---|---|---|
| Nov 23–29 (Black Friday) | All subscription apps: +0.3% revenue that week; the median app's paywall views −5% | Adapty holiday report [V] | No lift; don't plan around it |
| Dec 14–20 | "Photo strip" searches peak (1.9–2.1× October) | Google Trends (ch. 1) [V] | — (inside the window, part of the ramp) |
| Week before Christmas | US Photo & Video app revenue peak (Snapchat $7.9M that week) | Sensor Tower Q4 2025 (ch. 1) [V] | ×1.15 installs Dec 17–24 |
| Dec 28–Jan 3 | "Photo dump" searches 3.2× October; NYE | Google Trends (ch. 1) | **×1.35 installs** Dec 25–Jan 3 |
| Jan 1–20 | Trials peak Jan 1 (+49%); first payments peak Jan 10 (+55%); conversion per paywall viewer 2.6% (Oct) → **3.34%** (Jan) | Adapty [V] | **×1.2 conversion** Jan 1–20 |
| New Year week | Top 10% of apps +163% vs October; bottom 10% −66%; median +5.8% | Adapty [V] | Shows how wide outcomes are |
| January (face/glow category) | Depuff: Dec $105.7K → **Jan $152.4K (+44%)** → Feb $98.8K | TrustMRR [V] | "New year, new me" helps glow looks more than party looks |
| Jan 11–31 | Party looks lose their reason | E | ×0.6 installs |
| Feb 7–14 | Valentine's / Galentine's | E | ×0.75 |
| Late Feb | Low point | E | ×0.5 |
| March | Spring break, birthdays | E | ×0.6 |
| Weekends, all year | **Boothie earns 1.47× more on Sat–Sun than on weekdays** (Oct 18–Nov 15) | TrustMRR daily [V] | ×1.3–1.4 on weekends |

---

## 5. Digi scenario curves (Nov 17, 2026 → Mar 31, 2027)

### 5a. How the model works

A daily model in `scripts/model.py`. Each day's installs make purchases, and each purchase is booked on the day the money arrives.

**Shared assumptions (all E):**
- **Paywall:** yearly $39.99 with a 3-day trial (pre-selected), weekly $6.99, Party Pack 25 digis $5.99. This is the "S1" structure from the earlier pricing chapter (08).
- **Purchases per install (base):**
  - yearly direct 0.2%;
  - yearly via trial 1.4%, paid 3 days after install;
  - weekly 0.8%;
  - Party Pack 1.0%, with 25% buying a second pack 5 days later.
  - Bear multiplies all of these by 0.6, bull by 1.15.
  - These sit between RevenueCat's median download-to-paid (2.0%; AI apps 2.4%) and Adapty's Photo & Video onboarding-paywall number (1.35% install-to-paid with a trial). Packs are on top.
- **Weekly renewals:** 45% → 70% → 80% → then 94% a week. The first number is RevenueCat's Photo & Video median.
- **Refunds:** yearly 6%, weekly 5%, packs 3%. Adapty's Photo & Video trial refund rate is 6.4%.
- **January:** conversion ×1.2 from Jan 1 to Jan 20 (Adapty: conversion per viewer +28% in January).
- **Season and weekend multipliers** as in section 4.
- **AI cost:** Seedream at $0.025 per image. 60% of installs use 2.5 free images. Yearly payers use 40 images in month 1, weekly payers 15 a week, packs 25 each.
- **"Cash"** = money received after refunds, **before** Apple's cut. Contest profit = cash × 0.85 (Small Business Program) or × 0.70 (if not enrolled in time). The contest doesn't subtract AI costs. Nothing is spent on ads.
- **Annual renewals** fall in Nov 2027, outside the horizon.

**Scenario inputs:**

| | **Bear** (most likely, ~P40–60) | **Base** (good execution, ~P80–85) | **Bull** (a hit, ~P93–95) |
|---|---|---|---|
| App Store live | **Dec 2** (review slow, one rejection) | **Nov 25** | **Nov 21** |
| Installs/day at live → on Dec 16 | 25 → 120 | 60 → 450 | 120 → 1,200 |
| Viral posts in the window | None | One, **Dec 9**, +3,000 installs over ~4 days | Two: **Dec 4 (+5,000)** and **Dec 12 (+10,000)** |
| After Dec 16: half-life of the content engine | 21 days (posting mostly stops in exams) | 30 days | 45 days (new looks weekly) |
| After Dec 16: long-run floor (share of Dec 16 rate) | 10% | 25% | 35% |
| Conversion multiplier | ×0.6 | ×1.0 | ×1.15 |
| Comparable real app | Median RevenueCat app; TaraSnap | Lenz AI in its good months | Boothie's months 1–2, squeezed into Dec |

### 5b. Results

**Contest window (Nov 16 → Dec 16):**

| | Bear | Base | Bull |
|---|---|---|---|
| Installs in window | 1,174 | 9,210 | 33,752 |
| Cash after refunds (before Apple) | **$406** | **$6,064** | **$25,069** |
| Cash per install | $0.35 | $0.66 | $0.74 |
| **Contest profit at 15% Apple fee** | **$345** | **$5,155** | **$21,309** |
| Contest profit at 30% Apple fee | $284 | $4,245 | $17,549 |
| AI cost in window (not deducted by the contest) | $63 | $592 | $2,306 |
| RevenueCat MRR on Dec 16 | $165 | $2,002 | $8,573 |

**Monthly cash (after refunds, before Apple):**

| Month | Bear | Base | Bull |
|---|---|---|---|
| Nov 2026 | $0 | $263 | $1,936 |
| **Dec 2026** | **$1,291** | **$12,127** | **$45,291** |
| Jan 2027 | $980 | $8,480 | $30,798 |
| Feb 2027 | $357 | $3,959 | $16,109 |
| Mar 2027 | $285 | $3,595 | $15,474 |
| **Total Nov 17 → Mar 31** | **$2,913** | **$28,423** | **$109,609** |
| Dec → Feb change | −72% | −67% | −64% |
| AI cost, whole period | $293 (10%) | $2,089 (7%) | $7,493 (7%) |

**RevenueCat-style MRR:**

| Date | Bear | Base | Bull |
|---|---|---|---|
| Dec 16 | $165 | $2,002 | $8,573 |
| Dec 31 | $332 | $2,855 | $10,488 |
| Jan 31 | $336 | $3,088 | $11,539 |
| Feb 28 | $324 | $3,114 | $11,914 |
| Mar 31 | $313 | $3,164 | $12,434 |

MRR stays flat or rises while cash falls by two-thirds. That's the annual-plan effect from section 3c: yearly plans sold in December count every month until November 2027. **Don't read a flat MRR as "it held up".** Read monthly cash.

**Weekly cash (week starting; cash / installs):**

| Week of | Bear | Base | Bull |
|---|---|---|---|
| Nov 17 | — | — | $129 / 603 |
| Nov 24 | — | $263 / 739 | $1,807 / 3,010 |
| Dec 1 | $62 / 281 | $1,051 / 1,794 | $6,377 / 10,056 |
| Dec 8 | $236 / 660 | **$3,780 / 5,761** | $9,607 / 16,787 |
| Dec 15 (contest ends Wed 16th) | $394 / 940 | $2,923 / 3,776 | **$14,988 / 11,364** |
| Dec 22 | $415 / 886 | $2,958 / 3,825 | $9,694 / 10,897 |
| Dec 29 (NYE) | $406 / 751 | $3,120 / 3,518 | $10,603 / 10,479 |
| Jan 5 | $325 / 452 | $2,698 / 2,302 | $9,526 / 7,160 |
| Jan 12 | $194 / 237 | $1,741 / 1,314 | $6,377 / 4,261 |
| Jan 26 | $113 / 168 | $1,136 / 1,085 | $4,409 / 3,776 |
| Feb 9 (Valentine's) | $103 / 152 | $1,142 / 1,125 | $4,651 / 4,140 |
| Feb 23 | $70 / 86 | $812 / 705 | $3,386 / 2,706 |
| Mar 16 | $63 / 78 | $805 / 710 | $3,488 / 2,835 |

### 5c. Sensitivities (what moves the contest number)

| Change (from base unless named) | Contest cash | vs base | Lesson |
|---|---|---|---|
| Base as modelled | $6,064 | — | |
| App live **Dec 2** instead of Nov 25 | $4,574 | **−25%** | Every review day costs ~$210 of contest cash in the base case. Submit early and small |
| **No** viral post | $3,904 | −36% | One good post is worth ~$2.2K |
| Same viral post on **Dec 15** instead of Dec 9 | $4,323 | −29% | A late spike mostly lands after Dec 16 (trials convert later, weekly renewals later). **Push hardest Dec 4–10** |
| Apple fee 30% instead of 15% | Profit $4,245 vs $5,155 | −18% profit | Check Small Business Program status today |
| Bull, live Dec 2 | $18,050 | bull −28% | Same lesson at scale |
| Conversion ×0.5 (median-app paywall) | ~$3,000 (E) | −50% | Paywall quality is worth as much as one viral post |

### 5d. How many views does each scenario need?

Two calibrations, and they disagree by 5–10×. That's the single biggest unknown in this chapter.

| Calibration | Revenue per 1,000 TikTok views | Views for bear ($406) | Views for base ($6.1K) | Views for bull ($25K) |
|---|---|---|---|---|
| **Lenz AI** (seller claims "60M views" with "$20K+" revenue; verified all-time $35.1K) [C/V] | **$0.33–0.59** | 0.7–1.2M | **10–18M** | 42–76M |
| Earlier target: 5 installs per 1,000 views × $0.66 per install [E, prior README] | $3.30 | 0.12M | **1.8M** | 7.6M |

- With ~3 slideshow accounts posting 2–3 times a day for 3 weeks, that's ~150–200 posts. Base needs an average of **10–120K views a post**, depending on which calibration is right.
- **Measure revenue per 1,000 views in week 1** (TikTok analytics ÷ RevenueCat). If it's near Lenz's $0.33–0.59, the base case needs Boothie-level posting volume (a dozen accounts), not three.

### 5e. How the scenarios compare to real curves

| Real curve | Digi scenario it resembles |
|---|---|
| Boothie: $4.7K first week → $27.3K first full month → $43.7K month 2 | Bull Dec ($45.3K), but Digi gets one month, not two |
| Lenz: $2.7K → $3.9K → $7.5K → $7.0K → $8.9K, then −81% in two months | Base (Dec $12.1K → Feb $4.0K) |
| Photography app: $32.2K peak → $15.6K → flat ~$15–18K | Bull's March floor ($15.5K/month) |
| RevenueCat median: $124/month at a year | Bear's March ($285/month) |

---

## 6. Corrections to the earlier research

| # | Earlier claim (file) | Correction | Source |
|---|---|---|---|
| 1 | "Median app makes **$72 a month** one year after launch; top 10% over **$2,574**" used as the Digi base rate (12, README) | That's all categories. For **Photo & Video the median is $124 and the top 10% is $3,600+**. Photo & Video has the highest median of any category | RevenueCat SOSA 2026 [V] |
| 2 | "Lensa 2022 revenue about $43M, over 50% of it in December" (12) | Not verifiable as one number. Sources conflict: December 2022 = **$8M** (Business of Apps, AppMagic/Appfigures) vs **$30.7M** (Statista). Best primary point: Appfigures, **$37.5M net in ~60 days, >$2M net on the peak day**, 91% from iPhone. Use "Lensa made tens of millions in ~6 weeks" | Appfigures Jan 6, 2023 [V]; search snippets [C] |
| 3 | "Remini: 23–26M downloads and about **$23M revenue in July 2023** (C)" (12) | Downloads hold: Appfigures says 23M in one month. **The $23M revenue figure isn't supported by anything I found.** Verified: daily net **$90K → $567K**, **$2.3M net in about a week** (Appfigures); $3.73M gross Jun 9–15 (data.ai). The $93M run-rate is **net of store fees** ($7.5M net in Jan 2026) | Appfigures Jul 14, 2023 and Feb 18, 2026 [V] |
| 4 | "Dispo (2021): $200M valuation… faded" listed as a 2021 spike (12) | **Dispo's peak was Jan 2020**, as "David's Disposable": **#1 free iPhone app on Jan 8, 2020**. The Mar 2021 relaunch reached only top 10 Photo & Video | TechCrunch citing Sensor Tower [V] |
| 5 | "Lapse: −70% in about 4 weeks" (12) | Direction right; the window is 4–6 weeks (October peak day not dated). **Half-life 16–22 days** | Appfigures Nov 17, 2023 [V] |
| 6 | The 2025 Ghibli wave was not covered | Added. Main lesson: **free AI tools took it**. Remini's downloads doubled (7.3M in 11 days) with **<1% revenue lift**; ChatGPT had 46M downloads in March 2025 | Appfigures, Sensor Tower [V] |
| 7 | Boothie "MRR $54.4K, 2,343 subs, +9.5%" (12) | Nov 16 sync: **MRR $54,109, 2,336 subs; 30-day revenue $56,557 (+19.8%); all-time $205,377**. Weekend days earn **1.47×** weekdays | TrustMRR [V] |
| 8 | KPI "installs per 1,000 views ≥ 5" (README) | Probably 5–10× too optimistic for slideshow content. Lenz's own claims imply **~$0.33–0.59 revenue per 1,000 views**. Use **revenue per 1,000 views** as the KPI and measure it in week 1 | TrustMRR Lenz page [V for revenue, C for views] |
| 9 | AI cost assumed at Nano Banana ~$0.04/image; group rules built on Google's "4 faces" guidance (README, 09) | Google and OpenAI models are blocked on this key. **Seedream at ~$0.02–0.03/image** roughly halves AI cost (7–10% of cash in my model). The 4-face rule came from Google's docs and must be re-tested on Seedream | Task brief; model output [E] |
| 10 | "Viral photo revenue usually decays 70–95% within 2–6 months" (12) | Right, and now measured: **half-life 3–5 weeks** for trend money, **2.5–3 months** for apps with a real job or season. Some apps keep a floor of 30–50% of peak | `halflife.py` [E from V/C] |
| 11 | Contest-window median cash "$400–1,500" (12) | Consistent with my bear case ($406). The model says **base-level ($6K) needs a viral post by ~Dec 10 and a live app by ~Nov 25**. Without both, plan on bear | Model [E] |

---

## What this means for Digi

1. **Submit the smallest working iOS build by Nov 18–19.** In the base case every day of review delay costs about $210 of contest cash. A slip from Nov 25 to Dec 2 cuts contest cash by about 25%. Ship strips, share links and roll features as updates.
2. **Aim the biggest content push at Dec 4–10, not Dec 14–16.** A viral post on Dec 9 is worth ~$2,200 of contest cash in the base case; the same post on Dec 15 is worth ~$400. Queue the best hooks (Christmas party strip, "your group as a 2004 digicam") for Dec 4–10.
3. **Switch the default paywall to "yearly, no trial" on Dec 12–13.** Trial conversions after Dec 16 earn $0 for the contest. Turn the trial back on Dec 17 for the New Year peak.
4. **Track one number from day 1: revenue per 1,000 TikTok views.** Below $0.60, the slideshow plan can't reach base with 3 accounts: add accounts (Boothie runs ~12) or change formats. Above $2, you're on the base-to-bull path. Check it every evening in the daily log.
5. **Post more on weekends and schedule pushes Fri–Sun.** Boothie earns 1.47× more on weekend days. Book the Party Pack pushes and new look drops for Fri Dec 4 and Fri Dec 11.
6. **Build for a 3–4 week half-life after any spike.** If something goes viral, the next look must ship within 7–10 days (Photo Lab's lesson: 40% one-month retention from new themes). Keep 4 holiday looks ready behind remote config (Christmas party, ugly sweater, NYE glitter, "2026 photo dump") and 2 January looks ("new year, new me" glow, Galentine's).
7. **Only sell AI looks a free chatbot does badly.** A 4-shot strip from one photo, groups, real faces kept, the burned-in date stamp, the shared party roll. Ghibli and Nano Banana show that a style anyone can prompt for free makes downloads, not money.
8. **Sell in the US, UK, CA and AU only at the start.** Remini doubled its downloads and gained <1% revenue from the wrong countries. Point persona accounts and posting times at those four markets.
9. **Plan the money as bear; work for base.** Bear is ~$400 contest cash and ~$300/month by March. Base is ~$6K and ~$3.6K/month by March. Bull is ~$25K and ~$15K/month. Don't promise yourself base or bull, and don't spend on ads (every dollar comes off contest profit and break-even CPI is ~$0.52).
10. **Read monthly cash, not MRR.** Expect monthly cash to fall about two-thirds from December to February in every scenario, while RevenueCat MRR looks flat because of yearly plans. Decide in mid-January from January's cash, not from MRR.
11. **Give Digi a second season before February.** Once ($25K/month, event disposable camera) and the TrustMRR event app ($51.9K in June) show the event/wedding use peaks Apr–Sep. Start a "Digi Roll for events" page and SEO in January, so March isn't the low point of a dying trend.
12. **Confirm the Small Business Program today.** 15% vs 30% Apple fee moves base-case contest profit from $5,155 to $4,245.
13. **Keep TrustMRR connected without a break.** Lenz's Superwall key expired on Nov 10 and its public record now shows $0 a day. A verified, unbroken history is what makes a later sale possible.
14. **Re-run the model weekly with real numbers.** Replace the assumed installs and conversion rates in `scripts/model.py` with the real ones from RevenueCat every Sunday. It takes 5 minutes and tells you which scenario you're in.

---

## Sources

**Primary data pulled Nov 16–17, 2026 [V]**
- TrustMRR public pages: https://trustmrr.com/startup/boothie.md · https://trustmrr.com/startup/lenz-ai-digital-camera-effect.md · https://trustmrr.com/startup/anonymous-startup-43.md · https://trustmrr.com/startup/depuff-ai.md · https://trustmrr.com/startup/photo-sharing.md · TrustMRR agent guide https://trustmrr.com/llms.txt
- iTunes Lookup (ratings, release dates, sellers): https://itunes.apple.com/lookup?id=6749303003,6757448890,6775603987,6761549035,6791587711,1580668065,1422471180,781383622,1491684197,1636699256,1577705074,1470373330,1450480287&country=us · Lenz search: https://itunes.apple.com/search?term=lenz+ai+digital+camera&country=us&entity=software
- App Store review RSS (date counts): https://itunes.apple.com/us/rss/customerreviews/page=1/id=6749303003/sortby=mostrecent/json (and ids 6757448890, 1580668065, 6775603987, 6761549035, 6791587711, 6760906614, 6781998623)
- AppKittie export cached Nov 12, 2026 (API out of credits; not called): `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/akdb/appkittie_db_2026-11-12.csv` and `G_tiktok_nogames.json`

**Benchmarks [V]**
- RevenueCat, State of Subscription Apps 2026: https://www.revenuecat.com/state-of-subscription-apps-2026/
- Adapty, Photo & Video benchmarks (updated Jun 29, 2026): https://adapty.io/blog/photo-video-app-subscription-benchmarks/
- Adapty, holidays for subscription apps (Oct 2025–Jan 2026): https://adapty.io/blog/state-of-holidays-for-subscription-apps/
- Adapty paywall library, Dazz Cam (updated Nov 7, 2026): https://adapty.io/paywall-library/dazz-cam-vintage-camera/

**Hit-app histories**
- Lensa: Appfigures, Jan 6, 2023: https://appfigures.com/resources/insights/20230106?f=5 · TechCrunch, Feb 13, 2023 (Apptopia group data): https://techcrunch.com/2023/02/13/the-ai-photo-app-trend-has-already-fizzled-new-data-shows · TechCrunch, Dec 1, 2022: https://techcrunch.com/2022/12/01/lensa-ai-climbs-the-app-store-charts-as-its-magic-avatars-go-viral · Business of Apps (403 to me; figures via search snippet, C): https://www.businessofapps.com/data/lensa-ai-statistics · Statista (403; snippet, C): https://statista.com/statistics/1350980/lensa-ai-in-app-revenue-worldwide
- Epik: Appfigures, Oct 6, 2023: https://appfigures.com/resources/insights/20231006?f=5 · TechCrunch, Oct 6, 2023: https://techcrunch.com/2023/10/06/ai-app-epik-hits-no-1-on-the-app-store-for-its-viral-yearbook-photo-feature · MobileAction: https://www.mobileaction.co/blog/epik-apps-epic-win-breaking-the-social-media-with-ai-yearbook/ · Daum/JoongAng (Snow finances): https://v.daum.net/v/20231019184410673 · Adapty Epik page (C): https://adapty.io/paywall-library/epik-ai-photo-video-editor
- Remini: Appfigures, Jul 14, 2023: https://appfigures.com/resources/insights/20230714?f=2 · Appfigures, Apr 4, 2025 (Ghibli): https://appfigures.com/resources/insights/20250404?f=4 · Appfigures, Feb 18, 2026 (Bending Spoons): https://appfigures.com/resources/insights/the-company-squeezing-money-from-apps-you-used-to-love · Sensor Tower, AI photo & video apps: https://sensortower.com/blog/rapid-growth-and-competitive-dynamics-the-state-of-ai-photo-and-video-apps
- Ghibli / Nano Banana: Sensor Tower: https://sensortower.com/blog/mmm-the-ai-ghibli-effect-propels-chatgpt-usage-and-revenue · Insightrackr: https://blog.insightrackr.com/en/docs/AI-Image-Apps-Drove-Viral-Growth-with-Ghibli-Style-Trends · Business Today (Appfigures March 2025 downloads): https://www.businesstoday.in/technology/news/story/chatgpt-beats-instagram-tiktok-becoming-most-downloaded-app-globally-in-march-all-thanks-to-ghibli-trend-471813-2025-04-12 · Appfigures image-model downloads: https://app.appfigures.com/resources/insights/image-model-updates-drive-more-ai-app-downloads · eMarketer: https://www.emarketer.com/content/nano-banana-propels-gemini-top-of-ios-app-store-downloads · Android Authority: https://www.androidauthority.com/openai-chatgpt-ghibli-viral-trends-more-revenue-gemini-nano-banana-3663450/
- FaceApp: Sensor Tower, July 2019: https://sensortower.com/blog/top-apps-worldwide-july-2019-downloads · Business Insider India: https://businessinsider.in/since-going-viral-again-for-making-people-look-old-faceapp-has-been-downloaded-by-12-7-million-new-users/amp_articleshow/70280757.cms · AKIpress (Forbes, C): https://akipress.com/news:622361:FaceApp_application_in_10_days_earned_more_than_$_1_million__Forbes/ · Apptica (C): https://apptica.com/blog/faceapp-revenue-reached-3-5-million-dollar/ · Business of Apps (C): https://www.businessofapps.com/?p=52461
- Prequel: Appfigures, Feb 11, 2022: https://appfigures.com/resources/insights/20220211?f=5
- Lapse: Appfigures, Nov 17, 2023: https://appfigures.com/resources/insights/20231117?f=5
- Dispo: TechCrunch (Sensor Tower ranks): https://techcrunch.com/?p=2163185 · TechCrunch, Mar 27, 2021: https://techcrunch.com/2021/03/27/this-week-in-apps-app-store-bills-gets-ghosted-dispo-drama-facebooks-clubhouse-clone · Wikipedia: https://en.wikipedia.org/wiki/Dispo · The Verge mirror (Jan 2020): https://thevergetoday.pages.dev/2020/1/9/21058399/david-dobrik-disposable-camera-app-downloads-tiktok-instagram-youtube
- Huji: iMore: https://imore.com/huji-cam-super-popular-new-app-turns-your-photos-1990s-film · Who What Wear: https://www.whowhatwear.com/huji-cam-instagram-app · AppGoblin (C, low): https://appgoblin.info/apps/kr.co.manhole.hujicam
- Gudak: Sports Khan, Aug 8, 2017: https://sports.khan.co.kr/article/201708081717003 · Product Hunt: https://hunted.space/dashboard/104008
- Hypic (context on 2025 photo-editor spending): https://assets.appfigures.com/resources/insights/20251219?f=3

**Earlier Digi files used and corrected**
- `/home/user/MMTEST/research/digi-deep-2026-11/12-comps-exit.md`, `09-contest-plan.md`, `08-pricing-paywall.md`, `05-marketing-egypt-ops.md`, `README.md`
- Sibling bible chapters: `/home/user/MMTEST/research/digi-bible-2026-11/01-market-trend.md` (seasonality, Google Trends), `02-competitors-retro-cams.md` (prices, chart ranks)

---

## Fact-check (2026-11-16)

*Independent re-check of the 10 numbers in this chapter that matter most for decisions, Nov 16–17, 2026, against the original Appfigures, Sensor Tower, RevenueCat, Adapty and TrustMRR pages.*

| # | Claim | Re-check result | Status |
|---|---|---|---|
| 1 | Lensa: >$2M net in one day; $37.5M net in ~60 days | Holds: Appfigures (Jan 6, 2023) says "$37,500,000 over the last 60 days" and "more than $2M in a single day" (no exact peak day given) | Confirmed (E, Appfigures) |
| 2 | Epik: $15K → $340K daily net in about two weeks (Oct 2023) | Holds (Appfigures Oct 6, 2023; 2.8M downloads, $1.7M net in two weeks) | Confirmed |
| 3 | Remini: $90K → $567K net in one day (Jul 2023); $2.3M net in about a week | Holds. Business2Community rounds the day to "close to $600,000" | Confirmed (E, Appfigures Jul 14, 2023) |
| 4 | Remini runs at $93M/yr net; $7.5M net in Jan 2026 | Holds: Appfigures "The Company Squeezing Money From Apps You Used to Love", Feb 18, 2026 | Confirmed (E) |
| 5 | FaceApp 65K → 1.8M new users/day (Jul 2019); 63M+ installs in July | Holds (Sensor Tower via Business Insider; Sensor Tower's own July 2019 post for 63M) | Confirmed (C) |
| 6 | ChatGPT 46M downloads in March 2025 | Holds (Appfigures: 46M, 13M iOS + 33M Android, just ahead of Instagram) | Confirmed |
| 7 | Gemini/Nano Banana: 22M extra downloads in 28 days, little spending | Holds. Appfigures (May 2026) puts the spending lift at only ~$181K gross vs ~$70M for ChatGPT's GPT-4o image launch. The 28 days run from the late-Aug 2025 launch | Confirmed; spending number added to takeaway 4 |
| 8 | RevenueCat SOSA 2026 (Photo & Video): median $124/month at 1 year; top 10% $3,600+; 21.4% reach $1K/month and 7.3% reach $10K within 2 years; trial-to-paid median 22.2% | All hold on RevenueCat's report page | Confirmed |
| 9 | Adapty: top 10% of Photo & Video apps take 94.6% of revenue | Holds (Adapty SOIS 2026 Photo & Video benchmarks; all-category average 94.5%) | Confirmed |
| 10 | Boothie: 30-day revenue $56,557 (+19.8%), MRR $54,109, 2,336 subs | That was the Nov 16 sync. Nov 17 sync: $54,654 (**+12.8%**), MRR $54,030, 2,335 subs, all-time $206,046 | Timing difference; newer numbers added to takeaway 5 |

**What I changed**
- Takeaway 4: added Appfigures' $181K vs $70M spending comparison (makes the "free AI steals trends" point with a number).
- Takeaway 5: added Boothie's Nov 17 sync. Growth is slowing (+19.8% → +12.8% on a rolling 30 days), which slightly weakens "has not peaked"; the rest of that takeaway rests on AppKittie data I could not re-check.

**What I could not verify**
- AppKittie cache numbers (WayShot revenue +82%, ratings +294%; Boothie +362%; Pecra +116%; Fimii +513%): cached paid tool.
- Half-life maths (§ decay) and the Digi scenario model ($400 / $6,100 / $25,000): these are the author's own model outputs (E) and depend on inputs above; not re-run.
- Lenz AI seller claims ("60M views", "$20K+"): seller claims, C.
- FaceApp revenue ">$1M in 10 days" (Forbes via AKIpress) and Apptica's ~$3.5M July 2019: not re-checked.
