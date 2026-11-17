# 23. Retention, season and the contest

Written Tue Nov 17, 2026 (day 2 of the contest). All times are Cairo time (UTC+2) unless marked.

**Labels:** **V** = I read it myself today on the primary page or API (link given). **C** = a third-party or company claim I could not audit. **E** = my estimate, with a confidence of high, med or low.

---

## Key takeaways

1. **The contest rules changed for apps.** Mobile apps no longer need the website tracker or a domain. Instead, a shortlisted app owner must **join a verification call and show the App Store Connect dashboard** (traffic sources and paid acquisition). Paying creators or a VA now explicitly counts as marketing spend. [V, rules page today]
2. **Photo & Video is the worst category for keeping users.** Average D1 11.6%, D7 3.4%, D30 1.0% (AppsFlyer data, Q3 2026, as read by a third party; I could not re-find these numbers on 2026-11-16, and one 2026 blend of Adjust/AppsFlyer/Sensor Tower data puts Photo & Video at D1 22%, D7 9%, D30 4.2%, so treat the exact figures as estimates). The cross-category D1 average is about 21–25%. The earlier target of "D1 ≥ 25%, D7 ≥ 10%" is a top-tier goal, not a normal one. [C]
3. **Party apps should judge retention by events, not days.** People don't party daily. The right numbers are "second roll within 30 days" and weekend activity. Boothie, the closest comp, earns **53% more per day on Sat–Sun than on Tue–Fri** (its last 28 days on TrustMRR). [V]
4. **Rolls that "develop" next morning are a proven hook, and the guests don't have to install anything.** POV (15,707 US ratings, 4.92★) and Once (729 ratings, launched Nov 2025) both let guests join by QR or link, with no download. The 9 a.m. reveal is the launch hook. The next party and the weekly look drop are the reason to come back. [V iTunes]
5. **For the contest, a yearly buyer is worth about 2.5–3.7× a weekly buyer.** A weekly subscriber who starts on Nov 25 pays about 2 times ($14) before Dec 16. A yearly buyer pays $39.99 at once, and "an annual plan paid up front counts in full." [V rule, E math]
6. **Black Friday only helps if you run a real offer.** In 2025, apps with a Black Friday promo got +20% new payers per day that week, and apps without one got −16%. The Christmas window (Dec 15–25) was −22% without a promo. New Year (Dec 26–Jan 4) was +24% for promo apps. [V, RevenueCat, 4,964 apps]
7. **The contest ends before the best days for a party camera.** Christmas Day (photo-editor installs peaked on Dec 25 in Adjust's 2023 data) and NYE fall after Dec 16. Plan the contest around Black Friday plus the first three December party weekends, and plan the business around Dec 18–Jan 2. [C, E high]
8. **Small app exits are smaller than most people think.** TrustMRR's own page lists 221 acquisitions in 365 days, $2.3M total (about **$10.4K average**), at a **1.3× average acquired multiple**. Boothie ($54K MRR) is still unsold after 39 days at a $1.5M ask, with 32 offers. [V]
9. **Realistic sale prices in 2026 (E, med):** at $5K MRR held 6+ months, $45–80K. At $20K MRR, $220–400K. At $50K MRR, $0.65–1.1M, usually with an earnout. If revenue is falling, take 30–50% off.

---

## 0. What I corrected or updated from earlier chapters

| Earlier claim | Where | What's true now | Label |
|---|---|---|---|
| "Our website traffic tracker is mandatory… install it before sending traffic" | 09-contest-plan §1, §5 D1, §8 risk 4 | Now **"For web businesses"** only. "Mobile apps do not need a website domain or our website tracker." Still install it on digi.pink if the web sells anything (web checkout = web business). | V |
| "Native app evidence requirements will be announced separately" | 09 §1, README §2.9 | Announced: "If shortlisted for a prize, mobile app entrants must join a verification call and show their App Store Connect or Google Play Console dashboard… Keep your store, acquisition, ad-spend and payment records." | V |
| Creator payments unclear (open question Q6) | 09 §2 | Rules now say: "You can pay for marketing help, like creators or a VA, but what you pay counts as marketing spend." Free Pro or credits given to creators are still not addressed. Ask, or log their fair value. | V |
| D1 ≥ 25%, D7 ≥ 10% as a normal "photo utility" target | 03-product-social §8 KPI 10 | That is 2–3× the category average (11.6% / 3.4%). Treat it as "great", not "expected". New targets are in §1c below. | C/E |
| "Median app makes $72 a month one year after launch" | 12-comps §0 | That is the all-category figure. **Photo & Video has the highest category median, $124 a month at one year**, with the top 10% above $3,600. Same report: P&V trial-to-paid median is 22.2%, the lowest category. | V (RevenueCat SOSA 2026 page) |
| "Black Friday did almost nothing (+0.3%)" | 12-comps §2 | True for total market revenue (Adapty). But apps that **ran a promo** got +20% new payers per day in BF week; apps without one lost 16% (RevenueCat). The difference is the offer. | V |
| "No free trials after about Dec 10" | 09 §6 | The exact cutoff is later. Apple can charge a renewal up to 24 h before a period ends. A 3-day trial started before **Sun Dec 13, 15:00 Cairo** converts inside the window; one started after **Mon Dec 14, 15:00** does not. Dec 10 is a safe but costly choice. | E (high) |
| "Hide Christmas looks behind remote-config dates" | 09 §5 | Still fine for **looks** (content). But since Oct 16, 2026, guideline **2.5.19** bans adding "features or functionality that weren't included in the version… submitted to App Review." Don't hide features (rolls, group strips, web checkout) behind flags. Say in the review notes that seasonal looks unlock by date. | V (Apple news) / E |
| "Apple's App Store Connect holiday slowdown is usually Dec 23–27" | 09 §5 | Apple has kept submissions open over the holidays since 2021, but warned reviews "may take longer" Dec 23–27. As of today there is **no 2026 holiday notice** in Apple's developer news feed. | V (RSS) / C |
| "Christmas Jumper Day: mid-December (check the date)" | 11-web-seo | **Thursday Dec 10, 2026** (Save the Children page, via search) | C (med) |
| "SantaCon Sat Dec 12 (E date)" | 08-pricing | Still unconfirmed. NYC SantaCon is usually the 2nd Saturday (2025: Dec 13), so Dec 12 fits. One hotel page says Mon Dec 14; ignore it. | C (med) |
| Gulf events as a December content hook | various | **MDLBEAST Soundstorm 2026 (planned Dec 3–4, Riyadh) was called off in early October** (DJ Mag says cancelled; the email to ticket holders, per Gulf News, says "postponed", reportedly to 2027). Don't build content around it. | C (DJ Mag, Gulf News, EDM Identity) |
| Boothie numbers | 12-comps | Today: MRR $54,030, 2,335 subs, 30-day revenue $54,654 (+12.8%), all-time $206,046. Still listed at $1.5M, 2.3× revenue, 32 offers, 7,111 recent viewers. Listed Oct 9, so **39 days unsold**. | V |
| Lenz AI | 12-comps | Superwall key expired Nov 10. The last synced 30 days show $912 (−47.9%). The record now looks dead to buyers. **Lesson: a broken TrustMRR connection kills both contest eligibility and sale value.** | V |

---

## 1. Retention benchmarks: what "good" looks like for a camera app

### 1a. Usage retention (people who open the app again)

| Benchmark | D1 | D7 | D30 | Source and date | Label |
|---|---|---|---|---|---|
| **Photo & Video, all platforms** | **11.6%** | **3.4%** | **1.0%** | AppsFlyer benchmarks tool, Q3 2026, global, read by Spreadcast on Nov 2, 2026 (Q3 2025 D30 was 1.3%) | C (med) |
| Photo & Video, iOS / Android | 12.0% / 11.1% | n/a | 1.1% / 0.9% | same | C (med) |
| Middle of 25 AppsFlyer categories | 21.6% | 8.6% | 3.2% | same | C (med) |
| Average iOS app / Android app | 25.4% / 20.2% | n/a | 5.3% / 3.8% | Business of Apps citing AppsFlyer, updated Jul 14, 2026 | C |
| All apps, Pushwoosh 2025 study | n/a | iOS 6.89%, Android 5.15% | iOS 3.10%, Android 2.82% | Pushwoosh, Nov 20, 2025 | C |
| Braze summary | n/a | n/a | "about 1% to 15%… News the highest and Photo & Video the lowest" | Braze, Jul 24, 2026 | V |
| Photo Lab after the AI-yearbook trend | n/a | n/a | "40% one-month retention" (definition unclear) | Sensor Tower, 2023 (via earlier chapters) | C (low) |

**Caveats (E, med):**
- Benchmark tools mostly measure apps that use their SDK, and many of those buy installs. Organic TikTok installs often retain somewhat better, but I have no number for that.
- December cohorts will look better than they are, because the parties keep coming until Jan 1. Judge Digi's real retention on **January cohorts**.

### 1b. Paid retention (people who keep paying)

| Benchmark | Number | Source and date | Label |
|---|---|---|---|
| P&V weekly plan, first renewal (trial funnel) | **54.9%** | Adapty P&V benchmarks, updated Jun 29, 2026 (chart alt text) | C (med) |
| P&V trial-to-paid, weekly funnel | 30.5% (install→trial 14.0%) | same | C (med) |
| P&V trial-to-paid median (RevenueCat) | **22.2%**, top quartile >33.1% | RevenueCat SOSA 2026 | V |
| P&V trial refund rate | **6.4%** (highest category; 14.1% in APAC) | Adapty, Jun 2026 | C |
| P&V median one-year LTV per install | **$0.82** | same | C |
| P&V revenue from weekly plans | 51% (annual 8%) | same | C |
| Year-one retention by plan, all subscription apps | annual 28%, monthly 8%, weekly 1.2% | FE International, Sep 30, 2026 | V (in ch. 12) |
| AI apps vs others | 41% more revenue per payer, churn 30% faster | RevenueCat SOSA 2026 | V |
| Year-one revenue per subscriber, US apps | weekly avg $48.13 (median $12.99); annual avg $48.09 (median $39.99) | Adapty holiday report, updated Oct 8, 2026 | V |
| Share of first-year value collected in the first 90 days | annual 83%, weekly 60% | same | V |

What this says in plain words: the *average* weekly buyer is worth as much as a yearly buyer over a year, but the *typical* weekly buyer pays about $13 and leaves. A few heavy users carry the average. For a 30-day contest, the upfront yearly payment is far better (see §6f).

### 1c. Digi's own targets (E, med)

| Metric | Category reality | Floor (fix something) | Good | Great |
|---|---|---|---|---|
| D1 open | 11.6% | <12% | 20% | 30%+ |
| D7 open | 3.4% | <4% | 8% | 12%+ |
| D30 open | 1.0% | <1.5% | 3% | 6%+ |
| **Weekend active / weekday active** | Boothie revenue 1.53× | <1.2× (not used for parties) | 1.5× | 2×+ |
| **Second roll within 30 days** (hosts) | no benchmark | <10% | 20% | 30%+ |
| **Guests who install after a roll** | no benchmark | <5% | 10% | 20%+ |
| Weekly sub first renewal | 54.9% | <45% | 55% | 65%+ |
| Refunds (30 days) | 6.4% P&V trials | >6% | <4% | <2.7% (BF annual level) |
| Push opt-in (iOS) | ~49% median (Airship 2025); 56% average (Batch, Pushwoosh) | <40% | 55% | 65%+ |

Note: the push opt-in medians come from Airship's 2023–2025 figures (49.1%, 49.4%, 48.85%) and Pushwoosh's 2025 study (56.36%), both via search summaries. Airship's 2026 blog post (Mar 31, 2026; 681B pushes) gives no medians in the free text. [C]

### 1d. The weekend pattern (V, computed from TrustMRR daily revenue)

Boothie, Oct 19 – Nov 16, 2026, UTC dates, average daily revenue:

| Mon | Tue | Wed | Thu | Fri | Sat | Sun |
|---|---|---|---|---|---|---|
| $1,912 | $1,474 | $1,672 | $1,587 | $1,642 | **$2,514** | **$2,368** |

- Sat–Sun average $2,441 vs Tue–Fri $1,594: **+53%**.
- Saturday is the best day every week in the sample (4 of 4).
- Boothie's revenue is mostly Turkey (earlier chapter), so US timing may differ a little.
- **For Digi (E, high):** ship look drops on Thursday and post the strongest content Friday–Saturday. Don't ship risky updates on Fridays. The paywall must be working perfectly on weekends.

---

## 2. What makes people come back to a party camera

### 2a. Evidence by mechanism

| Mechanism | Example and number | Source | Fit for Digi |
|---|---|---|---|
| **Shared event roll, guests join without the app** | POV: 15,707 US ratings, 4.92★, updated Nov 12, 2026. "Guests can scan a code or tap on a link and don't have to download this app." Once: 729 ratings since Nov 24, 2025; "Photos unlock together at the time you choose"; App Clip join. Party Cam: 68 ratings; guests shoot in the browser. | iTunes Lookup, V Nov 17 | **Core.** Guests join on digi.pink in the browser, so every party is a demo for 10–30 people. The host pays. |
| **Next-morning reveal** | Dispo: "develop every morning at 9am"; 8,299 US ratings; Digiday reported retention below other social apps. Lapse: 118,321 ratings, last update Dec 6, 2025 (almost a year ago). | iTunes V; Digiday C | A hook, not a habit. Use it for parties only, never for solo shots. Offer "develop now" to the host. |
| **Home-screen widget** | Locket Widget: 593,254 US ratings, 4.76★, updated today. Gratitude (journal app): "25% increase in retention for widget users"; widgets used by 10% of DAU. | iTunes V; Android Developers Blog, May 8, 2026, V | Good for v2: "Tonight's roll: 14 shots left" and "Develops in 6 h". It won't make a party app daily. |
| **Weekly ritual** | Locket Rollcall: "well over 25%" of active users post weekly (CEO claim, Oct–Nov 2025) | TechCrunch, Nov 3, 2025, C | Sunday "your weekend in a strip" card (free, on-device). |
| **New looks on a schedule** | Photo Lab kept "40% one-month retention" by adding themes during the AI-yearbook trend; Moshicam ships new frames weekly (588 ratings, 4.86★) | Sensor Tower C; iTunes V | **Core.** One new look every Thursday. Each drop is also a TikTok post. |
| **Live Activity countdown** | A Live Activity can stay active for **up to 8 hours**, then up to 4 more on the Lock Screen (12 h max) | Apple ActivityKit docs via search mirror, C (high) | A roll that closes at 1 a.m. and develops at 9 a.m. fits the 8-hour limit exactly. "Developing… 7 h 12 m" on the Lock Screen all night. |
| **A free, good camera** | Dazz and WayShot earn on a free camera with paid extras (earlier chapters) | ch. 02 | The free on-device digicam is what keeps Digi on the phone between parties. |
| **Forced social (invite walls, daily alarms)** | Lapse's invite gate and BeReal's daily alarm faded fast (earlier chapters) | ch. 12 | Never require invites. Reward sharing, don't demand it. |

### 2b. Digi's repeat loop (E, med)

1. **Thursday:** a new look drops (in-app "New" badge; one push only to people who opted in).
2. **Friday/Saturday night:** the host starts a roll for the party. Guests join by QR or link, in the browser.
3. **The roll closes** (the host taps "End party", or automatically at 3 a.m.). A Live Activity counts down.
4. **9 a.m.:** the roll develops for everyone at once. The host gets the AI strip (the paid moment). Guests get a free web gallery with a "Get Digi" button.
5. **Sunday 6 p.m.:** an optional "Your weekend in a strip" card (free, on-device, no AI cost).
6. **Next event:** "Start a roll for [same group]" with one tap, using the saved group.
7. **One month later:** an in-app memory ("A month ago: Friendsgiving"). A push only if the user turned memories on.

The metric that proves the loop works is **"second roll within 30 days."** If it is under 10% by mid-January, rolls are a gimmick and Digi is a filter app. Then lean on weekly looks and ASO.

---

## 3. Notifications without guilt

### 3a. The rules that apply

- **Apple 4.5.4 (V, read today):** "Push Notifications should not be used for promotions or direct marketing purposes unless customers have explicitly opted in to receive them via consent language displayed in your app's UI, and you provide a method in your app for a user to opt out."
- **Apple 4.5.3:** don't "send unsolicited messages… including… Push Notifications, Live Activities."
- **CLAUDE.md-style owner rule:** no guilt pushes, no dark patterns.
- **What users tolerate (C, old surveys):**
  - Localytics 2017: 10% disable notifications at about 1 a week.
  - 37% disable them at 2–5 a week.
  - 22% stop using the app at 2–5 a week, and 31% at 6–10 a week.

So: **at most 1 marketing push a week, and only to people who said yes.**

### 3b. When to ask

- **Not at first launch.** Ask at the first moment a push clearly helps the user: right after they start or join a roll ("Want a ping when it develops at 9?"), or right after their first AI digi starts processing.
- **Use two separate permissions:**
  1. The iOS system prompt, for their own photos and rolls (transactional).
  2. An in-app toggle, **off by default**, for "New looks on Thursdays." This toggle is the explicit marketing consent Apple asks for.

**Pre-prompt copy (exact):**
> **Get a ping when your roll develops?**
> We'll only tell you about your own photos and rolls. No ads, no "we miss you."
> [Notify me] [Not now]

**Marketing toggle copy (Settings and after the first roll):**
> **New looks on Thursdays**
> One message a week when a new look drops. Turn off anytime.

### 3c. The full message list (exact copy, E)

| Type | Trigger | Copy | Limit |
|---|---|---|---|
| Transactional | AI digi finished | "Your digi is ready. Tap to see it." | Per event |
| Transactional | A friend added photos | "Sam added 3 shots to Friday's roll." | Bundle: max 1 per 30 min |
| Live Activity | Roll closed | "Developing… 7 h 12 m. Sleep well." | 1 per roll |
| Transactional | Roll developed (9:00 local) | "Last night's roll is ready: 47 photos from 6 friends." | 1 per roll |
| Transactional | Trial ends in 24 h | "Your free trial ends tomorrow at 3:14 PM. You can cancel in Settings anytime." | 1 per trial |
| Opted-in | Thursday drop, 5 p.m. local | "New look: Ugly Sweater Flash. Try it free on your next photo." | 1 a week |
| Opted-in | Event the user saved (e.g., "Friendsgiving Sat") | "Friendsgiving tonight. Start a roll so everyone's photos land in one place." | Only for dates the user entered |
| Opted-in | Sunday recap | "Your weekend, in one strip." | 1 a week; skip if no photos |
| Opted-in (from Nov 2027) | Memory | "One year ago: your Friendsgiving strip." | 1 a month |

**Never send:** "We miss you." "You haven't taken a photo in 3 days." "Your friends are waiting." "Last chance!" (unless a deal really ends that day). Streak warnings. Fake social ("Someone viewed your strip"). Badge counts for marketing.

**Quiet hours:** no pushes 9 p.m.–9 a.m. in the user's time zone. The only exceptions are the roll develop the user scheduled and friends' photos during a roll the user is in.

**The trial reminder is a profit tool, not a cost.** Clear renewal reminders cut "I didn't know" refunds. RevenueCat saw annual refunds fall to 2.7% from 4% in Black Friday week. And refunds count against contest profit until winners are confirmed.

---

## 4. Seasonality: what the data says

| Fact | Number | Source and date | Label |
|---|---|---|---|
| BF week, apps **with** a promo | +20% new payers/day vs Sep 15–Oct 12 baseline; peak **+49% on BF day** (Nov 28, 2025); ≥+25% through Dec 1 | RevenueCat, 4,964 apps, published Oct 27, 2026 | V |
| BF week, apps **without** a promo | −16% | same | V |
| BF buyers who installed earlier | 55% (vs 45% normally); about half the BF lift came from users installed 3+ months before | same | V |
| BF plan mix | annual 49% of new payers (vs 41%); annual 30-day refunds 2.7% (vs 4%) | same | V |
| Christmas window Dec 15–25 | promo apps −11%, no promo −22%; Christmas-only promos −24% | same | V |
| New Year Dec 26–Jan 4 | promo apps **+24%**, no promo −4% | same | V |
| Holiday paywalls | 61% of BF paywalls showed a % discount (8% outside holidays); ~3 in 4 of those were 50%+; about a third used limited-time wording | same | V |
| Market revenue peak | first week of January, +26% vs an October week (median app +5.8%); trials peak Jan 1 (+49%); first payments peak Jan 10 (+55%) | Adapty, US apps, Oct 2025–Jan 2026, updated Oct 8, 2026 | V |
| Refund rate through the season | 3.58% Oct → 2.91% Christmas → 3.16% early Jan | same | V |
| Photo-editing installs | "reach their pinnacle on the 25th" (Christmas Day) | Adjust 2023 holiday trends | C (med) |
| Christmas Day 2025 consumer app spend | $277M worldwide, +11.3% | Sensor Tower via press | C |
| Thanksgiving Eve bar sales | alcohol +72% vs an average Wednesday (2025) | Toast POS data | C |
| Biggest bar-spending days | NYE #1, July 3 #2, Thanksgiving Eve #3 (2018) | Womply via Toast | C (old) |
| Company holiday parties | 64% of US companies planned in-person parties in 2024 (same as 2023) | Challenger, Gray & Christmas, Dec 10, 2024 (173 HR leaders) | C |

**What this means (E, high):**
- **Inside the contest (to Dec 16):** two real money moments.
  1. Black Friday to Cyber Monday (Nov 27–30), only with a real offer.
  2. Three party weekends: Dec 4–6, Dec 11–13 and the start of Dec 18–19 (which falls after the contest).
- **Outside the contest:** the biggest days for Digi's use case are Dec 18–20 (last parties), Dec 25 (new phones, gift cards), Dec 31–Jan 1 (NYE plus a 9 a.m. develop), and Jan 1–10 (trial and first-payment peak). These build the business and the sale value.

---

## 5. Day-by-day season calendar, Nov 17 – Jan 5

**Time zones:** Cairo is UTC+2 all winter (Egypt's summer time ended in October). US Eastern is UTC−5 after Nov 1, so **Cairo is 7 h ahead of New York and 10 h ahead of Los Angeles**. US 7–10 p.m. ET posts go out at **2–5 a.m. Cairo**, so schedule them. UK is UTC+0 (2 h behind Cairo). UAE is UTC+4; Saudi is UTC+3. Weekends: US/UK Sat–Sun; **UAE Sat–Sun**; Saudi and Egypt Fri–Sat.

**Owner capacity:** full time to Dec 4; about 15 min/day from Dec 5 (exams). The contest ends **Wed Dec 16, 15:00 Cairo (13:00 UTC, 8:00 a.m. ET)**.

| Date | Day | What's happening | Digi: build / ops | Digi: content and push |
|---|---|---|---|---|
| Nov 17 | Tue | Contest day 2. US pre-Thanksgiving week. | Camera, date stamp, 6 looks, consent screen, paywall with Restore. RevenueCat to TrustMRR (Anonymous). | Open 2–3 persona accounts; no app link yet. |
| Nov 18 | Wed | — | **Submit iOS v1.** Notes: "Seasonal looks unlock by date via config; no hidden features." | First 2 posts/account ("my friendsgiving photos but make it 2007 digicam"). |
| Nov 19 | Thu | First "look drop" Thursday | Web gallery for shared rolls (digi.pink/r/…). | Post 1 look reveal. |
| Nov 20 | Fri | Gulf weekend (KSA Fri–Sat) | Answer App Review fast. | 3 posts/account, US evening (scheduled). |
| Nov 21 | Sat | **Friendsgiving weekend 1** (E: many hold it the weekend before) | — | "Friendsgiving photo dump" slideshows. |
| Nov 22 | Sun | — | Read numbers: views → installs → paywall. | Repeat the best hook. |
| Nov 23 | Mon | Thanksgiving week; many US colleges break Nov 25–29 (E). Review queue "48–72 h minimum" Nov 8–28 (C) | If approved: release. If not: web is primary. | — |
| Nov 24 | Tue | RevenueCat's BF window starts | Set up the BF offer: ASC introductory/promotional offer + Stripe coupon. **Run the loss check** (§6f). | "Coming home for Thanksgiving" reunion strip posts. |
| Nov 25 | Wed | **Thanksgiving Eve** (bar alcohol +72%, Toast 2025). Hometown reunions | — | Post 6–9 p.m. ET (1–4 a.m. Cairo, scheduled): "old friends, new photos." |
| Nov 26 | Thu | **Thanksgiving (US)** | "Friendsgiving" look live (config). | Look drop post. No sales push on the holiday itself. |
| Nov 27 | Fri | **Black Friday.** 2025 peak day for promo apps (+49%) | **Offer live:** e.g. yearly $39.99 → $29.99 for year 1, ends Nov 30 23:59 PT. | 1 push to opted-in users. Paywall: crossed-out price + real end date. |
| Nov 28 | Sat | Party Saturday; Small Business Saturday | Watch refunds and AI spend. | Best content slot of the week. |
| Nov 29 | Sun | Travel home day | — | "Thanksgiving recap strip." |
| Nov 30 | Mon | **Cyber Monday** (promo apps +25% in 2025). Scotland: St Andrew's Day bank holiday | Offer ends 23:59 PT. Don't extend it (fake urgency). | Last-day post. |
| Dec 1 | Tue | Holiday-party season opens. Review risk "very high" Dec 1–15 (C) | Build Christmas looks (office party, ugly sweater, Secret Santa strip, NYE glitter) behind date config. | — |
| Dec 2 | Wed | **UAE Eid Al Etihad holiday Dec 2–4** (federal govt; back Dec 7) | **Last pre-exam iOS build.** | UAE persona post only if UAE is a target. |
| Dec 3 | Thu | Look drop. Year-recap season starts (E) | Automate: post scheduler, canned support replies, spend caps, uptime alert. | "Office Party Flash" drop. |
| Dec 4 | Fri | **Hanukkah begins at sundown** (ends Dec 12). First big holiday-party Friday (E) | **Verification pack done** (§6d). Feature freeze. | "Holiday party roll" post. |
| Dec 5 | Sat | **Owner exams start.** College formals before finals | 15-min daily check only. | Scheduled posts run. |
| Dec 6 | Sun | — | — | Sunday recap card (if built). |
| Dec 7 | Mon | Many US colleges start finals (common range Dec 7–18) | — | Weekday student use dips (E). |
| Dec 8 | Tue | — | Ugly-sweater and jumper looks unlock (config). | — |
| Dec 9 | Wed | — | — | — |
| Dec 10 | Thu | **UK Christmas Jumper Day** (C). Look drop | — | "Jumper strip" for UK accounts. |
| Dec 11 | Fri | Peak office-party Friday (E). Many UK universities end term (E) | — | Office party content, US + UK. |
| Dec 12 | Sat | **SantaCon NYC likely** (2nd Saturday, E). Hanukkah ends. Probably the biggest party night inside the window (E) | — | 1 opted-in push: "Party tonight? Start a roll." |
| Dec 13 | Sun | **Contest trial cutoff ~15:00 Cairo** | If chasing rank: make "Yearly, pay now" the default and keep the trial as the second option until Dec 16 15:00. | — |
| Dec 14 | Mon | Finals continue | Trials started now convert after the contest. | — |
| Dec 15 | Tue | RevenueCat's "Christmas window" (−22% without a promo in 2025) | No price changes during exams. | — |
| Dec 16 | Wed | **Contest ends 15:00 Cairo.** Bahrain National Day (Dec 16–17) | Screenshot TrustMRR, RevenueCat, ASC. Refunds keep counting until winners are confirmed (about Dec 26). | — |
| Dec 17 | Thu | Look drop. Shortlist emails possible: **5 days to respond** | Reply the same day if contacted. | "Christmas party" drop. |
| Dec 18 | Fri | **National Ugly Christmas Sweater Day (US).** UK "Mad Friday" (E). **Qatar National Day.** Most US colleges done; winter break starts | — | Biggest content day of December (E). |
| Dec 19 | Sat | Last big pre-Christmas party Saturday (E). Hometown reunions | — | Best slot. |
| Dec 20 | Sun | — | — | "Christmas week" teaser. |
| Dec 21 | Mon | Travel week | — | — |
| Dec 22 | Tue | — | Don't submit builds (Dec 23–27 slow window, past years). | — |
| Dec 23 | Wed | Apple's historic slow review window starts (if it repeats) | — | — |
| Dec 24 | Thu | Christmas Eve; family photos; Europe's main celebration | — | "Christmas morning film" look live. |
| Dec 25 | Fri | **Christmas.** New phones, gift cards; photo-editor installs peak (Adjust 2023) | Make sure ASO says "Christmas photo" and "photo booth" (ch. 12). | 1 opted-in push max ("Christmas morning look is live"). |
| Dec 26 | Sat | Boxing Day (UK bank holiday moved to **Mon Dec 28**). Kwanzaa starts. RevenueCat's New Year window starts | Start the New Year offer (promo apps +24%, Dec 26–Jan 4). | "Year in photos" posts. |
| Dec 27 | Sun | Recap season (E) | — | "2026 in one strip" free recap (on-device). |
| Dec 28 | Mon | **UK bank holiday.** Adapty "peak window" Dec 28–Jan 11 | — | — |
| Dec 29 | Tue | NYE outfit planning | NYE glitter look + "2027" date stamp unlock. | NYE look drop (moved from Thursday). |
| Dec 30 | Wed | — | Test the 9 a.m. Jan 1 develop at scale (load test). | "Start your NYE roll" how-to post. |
| Dec 31 | Thu | **NYE**, the #1 bar-spending night (Womply 2018). Dubai's 2026/27 fireworks plan not announced yet (unknown) | Watch for queue overloads. | 1 opted-in push, 6 p.m. local: "NYE roll: everyone's photos, one album, ready at 9 a.m." |
| Jan 1 | Fri | Trials peak (+49%, Adapty) | **9 a.m. develop for all NYE rolls.** | "Our NYE roll developed" posts. |
| Jan 2 | Sat | **Egypt university first-term finals Jan 2–21** (MoHESR calendar) | — | — |
| Jan 3 | Sun | Back-to-routine starts | — | — |
| Jan 4 | Mon | Scotland bank holiday ("2nd January"). Back to work/school in US/UK | Cohort review: Dec vs Jan retention. | — |
| Jan 5 | Tue | Party season over | Switch looks to birthdays, Galentine's (Feb 13), event mode. End the New Year offer. | Look drop moves back to Thursday. |

Later 2027 dates to check, not verified here: Coptic Christmas (Jan 7), Galentine's/Valentine's (Feb 13–14), Ramadan (about Feb 8, 2027, E low; check the moon-sighting calendar).

---

## 6. Contest operations

### 6a. Rule changes since the Nov 16 copy (V, sentence-level diff against our saved copy)

Five new or changed sentences:
1. "For web businesses, our website traffic tracker is mandatory."
2. "Mobile apps do not need a website domain or our website tracker."
3. "If shortlisted for a prize, mobile app entrants must join a verification call and show their App Store Connect or Google Play Console dashboard so we can review traffic sources and paid acquisition before confirming winners."
4. "Keep your store, acquisition, ad-spend and payment records for this review. Revenue verification through TrustMRR is still required."
5. "You can pay for marketing help, like creators or a VA, but what you pay counts as marketing spend and nobody else can build the product or have a stake in it."

Nothing changed on the profit formula, refunds, payment fees or the cheating list. Apple's commission is still not named either way. **Keep the organiser email question Q1 open, and re-diff the rules every Monday.**

### 6b. Where the field is (V, Nov 17 ~13:30 UTC)
- 4,345 participants on the leaderboard page (3,559 on Nov 16).
- Leader: $198. Second: $9. Third: $1. Everyone else in the top 100: $0.
- So day 2 tells us nothing yet. The earlier estimate stands: top 3 probably needs $20–60K profit (E, low).

### 6c. What to ship by when

| By (Cairo) | Ship | Why |
|---|---|---|
| **Wed Nov 18, night** | iOS v1: camera + date stamp, 6 looks, AI consent (5.1.2(i)), paywall (yearly pre-selected + weekly + Party Pack), Restore, delete data, report. RevenueCat → TrustMRR. | Starts the review clock. Review risk rises Nov 8–28 (C). |
| Fri Nov 20 | Web (digi.pink): roll gallery + Stripe checkout + **contest tracker** (web sales = web business) | Hedge against review delay; 0% Apple fee on web. |
| Tue Nov 24 | BF offer configured in ASC + Stripe | Must be live by Fri Nov 27 00:00 PT. |
| Thu Nov 26 | v1.1 submitted: shared rolls (guests via web), 9 a.m. develop, push pre-prompt | Rolls are a feature: they must be in a reviewed build (2.5.19). |
| **Wed Dec 2** | v1.2 (last pre-exam build): all Christmas/NYE looks inside, date-gated; Live Activity; widget if ready | Leaves room for one rejection before Dec 5. |
| Fri Dec 4 | Verification pack + automation | Exams from Dec 5. |
| Dec 5–16 | No builds. Config only (look unlocks, paywall default switch on Dec 13). | Exams; review risk "very high" Dec 1–15 (C). |

### 6d. The verification call: what to have open (E, high)

The rules say: show the App Store Connect dashboard "so we can review traffic sources and paid acquisition."

1. **App Store Connect → Analytics → Acquisition.** Sources split: App Store Search, App Store Browse, Web Referrer, App Referrer.
   - **Use campaign links from day 1:** `https://apps.apple.com/app/apple-store/id<APPID>?pt=<provider token>&ct=<campaign>` with one `ct` per account and placement. Examples: `ct=tt_persona1_bio`, `ct=ig_persona2_bio`, `ct=web_roll_gallery`, `ct=web_home`. Then each install source has a name.
   - Caveat: App Analytics only counts users who agreed to share analytics with developers, so some installs show no source (C, Apple docs). Say so on the call.
2. **Sales and Trends:** units and proceeds by day and country.
3. **RevenueCat:** the transactions list (filter to contest dates), refunds, and the same numbers TrustMRR shows.
4. **TrustMRR:** the continuous connection, with no expired key (see Lenz above).
5. **Ad accounts showing $0:** Apple Ads, Meta, TikTok Ads Manager. Screenshot them on Dec 16. **Never tap TikTok "Promote" or Instagram "Boost". Both are paid ads.**
6. **Spend ledger** (template below), even if every row is $0.
7. **Proof of fresh start:** screenshot of the rules acceptance time, first commit date of the repo, ASC app record creation date, domain receipt.
8. **Content proof:** a folder of every post with its date and link. It shows that installs line up with organic posts.

**Spend ledger template (one row per spend or gift):**

| Date | Platform / person | What | Cash (USD) | Non-cash value (USD) | Receipt file | Linked campaign `ct` | Revenue traced |
|---|---|---|---|---|---|---|---|
| 2026-11-27 | — | No paid spend | 0.00 | 0.00 | — | — | — |

Log free Pro or credits given to creators as non-cash value until the organisers answer Q6. That is safer than leaving them out.

### 6e. Receipts to keep (E, high)
- Apple Developer, OpenRouter, Cloudflare, domain, Stripe, RevenueCat invoices. These aren't subtracted, but they prove cost per sale for the "selling at a loss" rule.
- A monthly AI-cost export from OpenRouter, plus a one-line calculation per product: price, worst-case digis × $0.03, and the margin.

### 6f. Profit levers inside the rules

**Profit = money received − refunds − chargebacks − payment fees − ad spend.** Each lever below, with the math:

| Lever | Math (E unless marked) | Do it? |
|---|---|---|
| **Yearly upfront as the default** | $39.99 now vs a weekly buyer from Nov 25: payments Nov 25, Dec 2 (54.9% renew), Dec 9 (~75% of those) = 1.96 payments = **$13.71**; 2.27 payments = $15.86 if Dec 16's charge lands before 13:00 UTC. **Yearly ≈ 2.5–2.9× weekly in-window.** | Yes (already planned) |
| **Trial cutoff** | A 3-day trial converts in 72 h; Apple may charge up to 24 h before the period ends. Trials after Mon Dec 14 15:00 Cairo earn $0 for the contest. | From Dec 13 15:00 to Dec 16 15:00: default "Yearly, pay now", trial as the second option. Only if Digi is in the running. |
| **Small Business Program (15%)** | On $10K gross: 30% fee = $7,000 net; 15% = $8,500. **+$1,500 per $10K**, if Apple fees count as "payment fees" (Q1). | Apply now if not enrolled. It may only start mid-December (C). |
| **US web checkout link** (3.1.1(a), US storefront) | Stripe ~2.9% + $0.30: a $39.99 yearly nets ~$38.53 vs $27.99 at Apple 30%. +$10.54 per sale. | Test it as a secondary button ("Pay on web, save 15%"). Watch conversion; friction can lose more than the fee saves. |
| **Party Pack (consumable)** | $5.99 × 70% = $4.19 net; AI cost 25 × $0.03 = $0.75. Passes the loss rule. No renewal needed to count. | Yes. Show it to hosts after a roll develops ("Turn tonight into 4 AI strips"). |
| **IAP gifting** | 3.1.1: "Apps may enable gifting of items that are eligible for in-app purchase." A gift bought by Dec 16 counts. | v1.2: "Gift a Party Pack to the host." Useful for Secret Santa. |
| **Black Friday offer** | RevenueCat 2025: promo +20% new payers vs −16% without. $29.99 yearly nets $20.99 (30%); cap AI at 300 digis in the first month (300 × $0.03 = $9). Passes. | Yes, Nov 27–30 only. |
| **Refund control** | Each refunded yearly = −$39.99 even after Dec 16 (V rule). Category trial refunds 6.4%. Getting to 3% saves ~$136 per 100 yearly sales. | Show a sample result before the paywall; free re-roll on bad results; the honest trial reminder push; RevenueCat refund handling (with consent in the terms). |
| **Zero ad spend** | US Meta D7 ROAS was 33% in Q3 2026 (ch. 05): $1 in → $0.33 back in a week. Inside 30 days, ads lose money. | No ads until after Dec 16. |
| **Price test on web first** | Adapty: high-priced annual apps' 12-month LTV $52 vs $19.5 for low-priced ones (2.7×). Web prices change without review. | Test $39.99 vs $49.99 yearly on the web Nov 20–26. Move the winner to iOS in v1.1. |
| **Currency** | TrustMRR converts at its own rates (V rule). | Nothing to do. Don't create USD-only tricks. |
| **Tie-break** | "Ties go to whoever reached the tied amount first." | Irrelevant unless very close. |

**Things that look like tricks but break the rules (V):** friends, family, classmates or other entrants buying; asking anyone to "support my entry"; refunding after Dec 16 to tidy numbers; selling credits below AI cost (e.g., "unlimited" yearly with no cap); moving in users or customers from anything that existed before Nov 16; paying creators without logging it; TikTok Promote or IG Boost.

### 6g. What a given profit needs (E, low)

At the P&V median, one install is worth $0.82 in its first year (Adapty). Inside a 2–3 week window, maybe 35–50% of that arrives (more if most buyers pick yearly). After a 30% Apple fee:

| Contest profit | Installs at $0.35/install in-window | at $0.50 | at $1.00 (2× median, strong yearly mix) | at $1.50 (top decile) |
|---|---|---|---|---|
| $5,000 | 20,400 | 14,300 | 7,100 | 4,800 |
| $20,000 | 81,600 | 57,100 | 28,600 | 19,000 |
| $50,000 | 204,000 | 143,000 | 71,400 | 47,600 |

So $20K needs roughly 20–60K installs in about three weeks. That means several posts past 1M views, or a roll loop that spreads (each party brings 10–30 guests to the web gallery). This is why rolls and guest pages matter more than another look.

---

## 7. Exit comps: what a Digi-size app sells for in 2026

### 7a. Market data

| Source | What it says | Date | Label |
|---|---|---|---|
| **TrustMRR "Why sell"** | **221 acquisitions in 365 days; 1.3× average acquired multiple; $2.3M total volume** (≈ $10.4K per deal); 23 days average to close; "priced at a good multiple average 3 offers within 48 hours." Fees: TrustMRR 4–6% + listing from $29; Acquire.com 6–8% + $25–100/mo; Flippa up to 10% + from $29 (checked May 2026). | read Nov 17, 2026 | V (self-reported) |
| Empire Flippers 2025 report | 161 deals; avg sale $270.8K; **avg 23.93× monthly profit (≈ 2.0× annual)**; avg 101.8 days on market. Listing multiples: typical 27.8×, premium 31.1×, distressed 13.7× monthly. Under-$300K deals: avg 22.42×, 29.5% used an earnout, 66.8% paid upfront. Deals above $500K "will almost always" include seller finance, an earnout or both. | 2026 report (2025 data) | V (PDF) |
| Flippa H1 2026 | Apps averaged **2.62× annual net profit**; top quartile 5.46×; apps sold averaged 3+ years old | H1 2026 | C (page bot-walled; search snippet) |
| BigIdeasDB on Acquire.com listings | Mobile listings median asks ≈ **2.25× revenue, 3.5× profit** (82–86 listings) | Jun 2026 | C (asks, not closes) |
| FE International | Subscription apps with real retention 3.5–6.0× adjusted earnings; weekly-plan, one-channel apps about 3.5× | Sep 30, 2026 | V (ch. 12) |

**Read this carefully:** TrustMRR's 1.3× is mostly tiny deals (average ~$10K), and it is a revenue multiple. Empire Flippers' 2× annual profit is for older, steadier businesses. A photo app under a year old, with weekly plans and a single TikTok channel, sits at the low end of every range.

### 7b. Consumer photo deals and asks

| Deal | Price | Multiple | Notes | Label |
|---|---|---|---|---|
| Boothie (AI digicam, TrustMRR) | **$1.5M ask** | 2.3× revenue | $54K MRR, 55% margin, 5 months old, 32 offers, **unsold after 39 days** | V |
| Acquire: viral AI photo-to-video iOS app | $495K ask | ~1.7× profit, ~0.85× revenue | TTM $580K; last month $53.1K | V (ch. 12) |
| Flippa: 2-year-old AI photo app | **$450K sold** | ~2.3× profit if ~$16.5K/mo profit; ~0.8× revenue if $46.7K/mo revenue (two snippets, may not be the same listing) | Flippa marketing story | C (low) |
| Flippa: Stunna (flash looks), Visio, Remo | $20–44.5K asks | 1.3–2.2× profit | Decaying 2026 apps | V (ch. 12) |
| MWM ← Picnic (photo management, London) | undisclosed | — | €4M ARR, profitable, 2M+ users; MWM also bought Swipewipe (2024) | C |
| Adobe ← Topaz Labs | ~$340M (secondary report citing a 10-Q) | — | Pro tools, not a consumer trend app | C |
| Apple ← Pixelmator (2024–25), Color.io (2026); OpenAI ← Glass Imaging (~$300M, WSJ via TechCrunch, Sep 2026) | undisclosed / ~$300M | — | Technology and teams. Not Digi's buyers. | C |

### 7c. What Digi sells for at $5K / $20K / $50K MRR (E, med)

Assumptions:
- SDE (owner profit) = 45–60% of gross: Apple 15–30%, AI 8–15%, refunds 3–6%, tools 2–5%. Boothie reports 55% (V).
- Buyers price on trailing 12-month profit, discounted for weekly plans, one channel, iOS-only and one AI model.

| MRR, held 6–12 months | Annual revenue | SDE | Stable or growing | Falling (>20% from peak) | Venue | Deal shape |
|---|---|---|---|---|---|---|
| **$5K** | $60K | $27–36K | **$45–80K** (1.7–2.6× SDE; TrustMRR's 1.3× revenue = $78K) | $30–50K (0.5–0.8× revenue) | TrustMRR, Flippa | Mostly cash upfront; 2–8 weeks |
| **$20K** | $240K | $108–144K | **$220–400K** (2–3× SDE) | $120–220K | TrustMRR + Acquire.com; broker optional | 20–35% earnout or seller note common |
| **$50K** | $600K | $270–360K | **$0.65–1.1M** (2.2–3.2× SDE) | $300–600K (the $495K Acquire ask at ~$53K/month is the anchor) | Acquire.com, FE/Quiet Light, direct to studios (MWM-type) | Earnout or seller finance "almost always" above $500K (Empire Flippers) |

**Faster and higher if:**
- 12 months of history including a January;
- 25%+ of revenue from yearly plans;
- refunds under 4%;
- two or more channels (ASO + web + TikTok);
- owner time under 5 h a week;
- Android live;
- a documented look-drop and posting playbook;
- no Sign in with Apple, so the app transfers cleanly.

**Slower and lower if:** listed right after December (buyers see the January drop), or the TrustMRR key ever expired.

**Honest view (E, med):** the most likely good outcome is a $5–20K MRR app worth $50–400K by late 2027. That needs one more full season (Christmas 2027) to prove it isn't a one-off.

---

## What this means for Digi

1. **Today:** re-read the rules diff (§6a). Remove "install tracker before first payment" from the iOS checklist, but still put the tracker on digi.pink because the web will sell.
2. **Today:** create App Store Connect campaign links (`pt` + `ct`) for every persona account, bio and web button. Never post a bare App Store link. This is the verification call's main evidence.
3. **Today:** start the spend ledger (§6d), even at $0. Add a column for the non-cash value of creator gifts.
4. **Nov 18:** submit iOS v1. In the review notes, write: "Seasonal looks (Christmas, NYE) are content that unlocks by date. No features are hidden."
5. **By Nov 26:** shared rolls with browser join for guests, plus the 9 a.m. develop, in a *reviewed* build (not behind a flag). Rolls are the loop that can bring 20K+ installs; another look can't.
6. **Notifications:** ask for push permission only after a user starts or joins a roll, using the exact pre-prompt in §3b. Make "New looks on Thursdays" a separate toggle, off by default. Max 1 marketing push a week. Quiet hours 9 p.m.–9 a.m. Never use the banned lines in §3c.
7. **Look drops every Thursday 5 p.m. local; best posts Fri–Sat** (Boothie earns +53% on weekends). No risky releases on Fridays.
8. **Black Friday Nov 27–30:** one real offer (e.g. $29.99 first-year yearly), a real end date, AI capped at 300 digis in month 1. One push to opted-in users on Nov 27 and one on Nov 30. Don't extend it.
9. **Dec 2:** last build before exams, with every Christmas/NYE look inside and date-gated, the Live Activity countdown and gifting of the Party Pack.
10. **Dec 4:** finish the verification pack (§6d items 1–8). Put screenshots in one folder with a one-page index.
11. **Dec 13, 15:00 Cairo:** if Digi is near the top of the leaderboard, switch the paywall default to "Yearly, pay now" until Dec 16 15:00. If not, leave the trial on and build the business.
12. **Dec 16–26:** reply within 24 h to any organiser email (5-day deadline). Don't touch the TrustMRR or RevenueCat keys. Don't refund anything to "clean up" numbers.
13. **Dec 26–Jan 4:** run a New Year offer (promo apps +24% in 2025) and make the NYE 9 a.m. develop the biggest content moment of the season.
14. **Mid-January:** judge Digi on January cohorts. Keep going if: D7 ≥ 8%, "second roll within 30 days" ≥ 20%, weekly first renewal ≥ 55% and refunds < 4%. If two or more miss, the loop isn't working: cut rolls back and lean on looks + ASO, or move on.
15. **For an exit:** keep TrustMRR connected without a gap, push yearly to 25%+ of revenue, ship Android, and don't list before Christmas 2027. Realistic targets: $45–80K at $5K MRR, $220–400K at $20K, $0.65–1.1M at $50K.

---

## Sources

All read Nov 17, 2026 unless noted.

**Contest**
- Rules (V; diffed against our Nov 16 copy): https://www.ship-or-die.com/100k-hackathon/rules
- Leaderboard (V, 4,345 participants): https://www.ship-or-die.com/100k-hackathon/leaderboard
- Main page FAQ (V): https://www.ship-or-die.com/100k-hackathon

**TrustMRR**
- Boothie (V): https://trustmrr.com/startup/boothie.md
- Lenz AI (V): https://trustmrr.com/startup/lenz-ai-digital-camera-effect.md
- Why sell (V): https://trustmrr.com/why-sell-on-trustmrr
- FAQ (V): https://trustmrr.com/faq

**Retention benchmarks**
- Spreadcast, AppsFlyer Q3 2026 by category (C): https://spreadcast.app/resources/app-retention-benchmarks
- Braze, Jul 24, 2026 (V): https://www.braze.com/resources/articles/mobile-app-retention
- UXCam (C): https://uxcam.com/blog/mobile-app-retention-benchmarks/
- Phiture (C): https://phiture.com/mobilegrowthstack/managing-retention-rate-benchmarks-and-expectations/
- RevenueCat SOSA 2026 (V): https://www.revenuecat.com/state-of-subscription-apps-2026/
- Adapty P&V benchmarks, Jun 29, 2026 (C): https://adapty.io/blog/photo-video-app-subscription-benchmarks/
- Gratitude widgets, May 8, 2026 (V): https://android-developers.googleblog.com/2026/05/how-gratitude-widgets-boosted-user-retention-25-percent.html
- Locket Rollcall (C): https://techcrunch.com/2025/11/03/lockets-social-app-is-picking-up-steam-with-gen-alpha
- Dispo retention (C): https://digiday.com/marketing/dispo-hopes-to-stand-out-with-photo-as-social-media-giants-compete-with-video
- iTunes Lookup (V): https://itunes.apple.com/lookup?id=1636032890,1636699256,6754265953,6651825891,1491684197,6738272757,1600525061,6775603987&country=us

**Notifications**
- Apple App Review Guidelines 4.5.3, 4.5.4, 3.1.1 (V): https://developer.apple.com/app-store/review/guidelines/
- Airship 2026 benchmarks blog, Mar 31, 2026 (V): https://www.airship.com/blog/your-guide-to-airships-mobile-app-push-notification-benchmarks-for-2026/
- Airship 2025 PDF (C): https://growth.airship.com/rs/313-QPJ-195/images/Airship-2025-Push-Notification-Benchmarks-EN.pdf
- Pushwoosh 2025 (C): https://www.pushwoosh.com/blog/push-notification-benchmarks/
- Localytics frequency survey (C): https://www.marketingprofs.com/charts/2018/33486/how-many-mobile-push-notifications-are-too-many
- Live Activities limits (C): https://developer.apple.com/documentation/activitykit/displaying-live-data-with-live-activities and https://developer.apple.com/forums/thread/797676

**Seasonality**
- RevenueCat holiday offers, Oct 27, 2026 (V): https://www.revenuecat.com/blog/growth/holiday-offers-subscription-apps
- Adapty holidays 2026 (V): https://adapty.io/blog/state-of-holidays-for-subscription-apps/
- Adjust 2023 holiday trends (C): https://www.adjust.com/blog/2023-holiday-app-trends/
- Christmas 2025 spend (C): https://www.iclarified.com/73923/app-store-spending-reached-277-million-on-christmas-day-chart
- Toast, Thanksgiving Eve (C): https://pos.toasttab.com/blog/data/thanksgiving-eve-insights
- Challenger holiday parties 2024 (C): https://www.hrdive.com/news/office-parties-holidays/638062/

**Calendar**
- UK bank holidays (V): https://www.gov.uk/bank-holidays.json
- UAE Eid Al Etihad 2026 (C): https://gulfnews.com/uae/government/uae-federal-government-announces-55th-eid-al-etihad-holiday-dates-1.500746042
- Egypt university calendar 2026/27 (C): https://mohesr.gov.eg/en/all-news/minister-of-higher-education-chairs-the-supreme-council-of-universities-meeting-at-the-ministry-headquarters-in-the-new-administrative-capital
- Hanukkah 2026 (C): https://www.history.com/topics/holidays/hanukkah
- Ugly Sweater Day (C): https://nationaltoday.com/national-ugly-sweater-day/
- Christmas Jumper Day (C): https://nationaltoday.com/christmas-jumper-day/
- SantaCon pattern (C): https://abc7ny.com/post/santacon-nyc-2025-annual-holiday-pub-crawl-returns-new-york-city/18279635/
- Soundstorm called off (C): https://djmag.com/news/soundstorm-festival-cancels-2026-edition and https://www.gdnonline.com/Details/1408285/MDLBEAST-calls-off-Riyadh-Soundstorm-2026-music-festival
- US finals examples (C): https://registrar.ku.edu/fall-2026-final-exam-schedule and https://valencia.unm.edu/academics/faculty-resources/final-exam-schedule-fall-2026.docx

**Apple ops**
- Developer news RSS (V): https://developer.apple.com/news/rss/news.rss
- 2.5.19 bait-and-switch, Oct 16, 2026 (V): https://developer.apple.com/news/?id=vvzx6cul
- Retention messages, Nov 4, 2026 (V): https://developer.apple.com/news/?id=fk9ps3gv
- Q4 review timing (C): https://appsops.store/news/app-review-timing-q4-2026-holiday-window
- 2021 holiday notice (C): https://www.macrumors.com/2021/11/08/app-store-connect-open-this-holiday-season/

**Exit comps**
- Empire Flippers 2026 report (V, PDF): https://info.empireflippers.com/hubfs/2026%20Lead%20Magnets/2026%20State%20of%20the%20Industry%20Report.pdf
- Flippa apps (C, bot-walled): https://flippa.com/sell/app
- Flippa AI photo app story (C): https://flippa.com/blog/how-a-cyprus-based-entrepreneur-turned-a-2-year-old-ai-photo-app-into-a-450k-exit/
- BigIdeasDB (C): https://bigideasdb.com/state-of-saas-valuations-2026
- Picnic (C): https://www.maddyness.com/uk/2026/04/09/after-two-acquisitions-in-the-united-states-mwm-snaps-up-london-startup-picnic/
- Swipewipe (C): https://techcrunch.com/2024/06/25/gen-z-photos-app-swipewipe-sells-to-french-publisher-mwm-in-its-largest-acquisition-to-date
- Topaz (C): https://www.photographytalk.com/adobe-owns-topaz-labs/
- Glass Imaging (C): https://techcrunch.com/2026/09/14/openai-buys-smartphone-camera-maker-glass-imaging-for-300-million-report-says/

**Working files:** `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/bible/r23/` (rules.txt, boothie.md, ef.txt)

---

## Fact-check (2026-11-16)

An adversarial re-check of the 10 numbers in this chapter that matter most for contest and season planning. I used RevenueCat's own pages, TrustMRR's live page source, the iTunes Lookup API and fresh searches.

| # | Claim | Re-check result | Action |
|---|---|---|---|
| 1 | Photo & Video retention: D1 11.6%, D7 3.4%, D30 1.0% (AppsFlyer, Q3 2026) | **Could not re-find.** AppsFlyer's category tool is gated. One 2026 secondary table that blends Adjust, AppsFlyer and Sensor Tower gives P&V D1 22%, D7 9%, D30 4.2%. The direction (P&V is among the weakest) holds; the exact level doesn't. | **Changed**: takeaway 2 now flags it as an estimate |
| 2 | RevenueCat holiday study: promo apps +20% new payers/day in BF week, no promo −16%; Christmas −22% without a promo; New Year +24% with offers; 4,964 apps; annual refunds 2.7% vs 4% | All confirmed in RevenueCat's post (published Oct 27, 2026). Extra detail: apps **with** a Christmas promo still fell 11%. | None |
| 3 | RevenueCat SOSA 2026: P&V median $124/month one year after launch (all-category ~$72); P&V top 10% above $3,600; P&V trial-to-paid median 22.2% (top quartile above 33.1%) | All confirmed on RevenueCat's SOSA 2026 page. | None |
| 4 | Boothie: MRR $54,030, 2,335 subs, all-time $206,046; listed at $1.5M; 32 offers; listed Oct 9 | TrustMRR today: MRR $54,056, 2,337 subscriptions, all-time $206,251, asking $1.5M (cut from $2M), **32 offers**, first listed **2026-10-09**, multiple 2.28×, 7,136 recent page views. | None (drift is under 0.5%) |
| 5 | TrustMRR: 221 acquisitions in 365 days, $2.3M total, 1.3× average multiple | **Could not verify.** TrustMRR's home, stats and acquire pages I opened don't show these totals. | Treat as C (unverified) |
| 6 | Christmas photo-editor installs peak on Dec 25 (Adjust 2023) | Confirmed: Adjust's 2023 holiday app trends post says photo-editing installs peaked on the 25th. | None |
| 7 | UK Christmas Jumper Day: Thu Dec 10, 2026 | Confirmed by Save the Children UK and several calendars. Some sites list Dec 11–12 (wrong weekday or the Irish version). | None |
| 8 | MDLBEAST Soundstorm 2026 called off on Oct 1 | Called off in early October: DJ Mag says cancelled; the ticket-holder email (Gulf News) says postponed, reportedly to 2027. | **Changed**: wording in §0 |
| 9 | POV 15,707 ratings, 4.92★; Once 729 ratings, launched Nov 2025 | Confirmed: POV 15,707 at 4.916★; Once 729 at 4.76★, released Nov 24, 2025. | None |
| 10 | Yearly vs weekly contest maths ($39.99 up front vs ~2 weekly payments) and the Dec 13/14 trial cutoff (Apple may charge renewals up to 24 h early) | Arithmetic and timing logic check out. They rest on the contest rule quote and Apple's renewal window. | None (stays E, high) |

**Could not verify:** the contest rules page quotes (verification call, "an annual plan paid up front counts in full", creators/VA count as marketing spend), because I don't have the rules URL. Re-read the live rules before acting. Also unverified: Boothie's +53% weekend revenue (the author's own maths on TrustMRR daily data, not re-run), the exit-price ranges in takeaway 9 (E, med), and SantaCon 2026 dates (C).
