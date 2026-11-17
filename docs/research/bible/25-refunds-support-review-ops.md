# 25 · Refunds, support and review replies: protecting contest profit after the sale

**Date:** Tue Nov 17, 2026. **Track:** 25-refunds-support-review-ops.
**Builds on:** chapters 06 (refund inputs), 16 (value of a sale), 19 (review mining), 21 (AI cost, digi re-credit), 22 (legal, TAKE IT DOWN), 23 (contest ops), and `digi-deep-2026-11/08` and `/09`. This chapter reads Apple's and RevenueCat's own documentation today, line by line, and turns it into settings, scripts and a daily routine.

**Labels**
- **[V]** = I read it today (Nov 17, 2026) on the primary page: Apple developer docs (via Apple's documentation JSON), Apple Support, App Review Guidelines, RevenueCat docs and blog, the RevenueCat SDK source on GitHub.
- **[C]** = a vendor or third party claim I could not audit (case studies, tool vendors, press).
- **[E]** = my estimate, with a confidence (high / med / low).

**Limits of this chapter.** My web search budget ran out partway through, so a few items stay unverified and are marked as such: Apple's exact refund-request deadline, a primary source for Google's "+0.7 stars" reply claim, and typical support response-time benchmarks. I did not open any login-walled page.

---

## Key takeaways

1. **Apple decides every App Store refund, not you.** Digi cannot issue or block an Apple refund. Apple tells the customer to "Wait 24 to 48 hours for an update on your request" [V, Apple Support 118223, published Sep 17, 2026]. What Digi controls is (a) how many people want a refund and (b) the information Apple sees when they ask.
2. **When someone asks Apple for a refund, Apple asks you for data, and you get 12 hours to answer.** The notification is `CONSUMPTION_REQUEST`; the reply goes to "Send Consumption Information". Apple: "Respond within 12 hours" and "The App Store uses the consumption information you provide to inform its refund decisions" [V, Apple docs]. Your "refund preference" is advisory only [V].
3. **RevenueCat answers for you, but it sends less than earlier chapters assumed.** Today's RevenueCat "Refund Control" sends four things: `customerConsented: true`, `deliveryStatus` (DELIVERED if the transaction exists), `sampleContentProvided: true`, and your preference. "RevenueCat doesn't currently collect or send consumption percentages" [V]. So "24 of 25 digis used" is **not** sent. This corrects chapter 06 and deep/08.
4. **Vendor case studies say answering Apple cuts refunds by 36–50%.** Dipsea fell from 3% to 1.9% in 15 days with neutral data only [C, RevenueCat, Nov 14, 2024]; MyMood AI "dropped by 50%" [C, RevenueCat feature page]; Adapty claims 40–50% and "up to 80% of disputes" won [C]. These are hand-picked wins. I plan on **−30%** [E, med-low].
5. **"Always decline" is gone, on purpose.** RevenueCat removed it on Jun 17, 2026 because Apple "start[s] to discount" blanket declines and refused refunds can turn into chargebacks [V, RevenueCat blog]. Use "Send consumption data only" as the default and "Prefer no refund" only for a narrow group (repeat refunders).
6. **Category baseline: Photo & Video trial refunds 6.4%** [C, Adapty, Apr 17, 2026], all-app annual plans 4.2%, weekly 2.6% [C, Adapty, Feb 2026]. With Digi's plan mix, doing nothing costs about **$36 of contest profit per 1,000 installs** (15% fee); doing the three cheap things in this chapter cuts that to about **$17** [E, med]. Real money, but small next to the cost of 1★ billing reviews, which average **1.39★** in this niche [V data, ch. 19].
7. **The "24 hours before" trial reminder in chapters 03, 19, 22 and 23 is timed too late.** Apple: "During the 24-hour period before the subscription expires, the App Store starts trying to renew it automatically" [V]. A reminder sent 24 h before the end can land after the charge. Send it **about 40 hours after the trial starts** (≥ 30 h before the end).
8. **Refunds keep landing after Dec 16 and RevenueCat moves them back in time.** RevenueCat books a refund on the **original purchase date**, so past days' revenue drops after the fact; Apple's financial reports book it in the month the refund happens [V, RevenueCat docs]. Expect the contest number to shrink a little between Dec 16 and winner confirmation (about Dec 26, ch. 23). Screenshot both dates.
9. **Replying to reviews is cheap and Apple notifies the reviewer.** "When you respond, the reviewer is notified and has the option to update their review" [V, Apple]. Replies can take "up to 24 hours to appear" [V]. Evidence that replies lift ratings is real but modest: AppFollow puts closing a 10-point reply-rate gap at about +0.3 to +0.5 stars [C, vendor, 2026].
10. **A goodwill digi costs cents; a refunded yearly costs $33.99.** At $0.018–0.038 AI cost per digi [V ch. 21], 10 bonus digis cost at most $0.38. A refunded yearly loses $33.99 at the 15% fee ($27.99 at 30%). Re-crediting is worth it if it prevents a refund even 1 time in 90 [E, high on the math].

---

## 0. What I corrected from earlier chapters

| # | Earlier claim | Where | What's true now | Label |
|---|---|---|---|---|
| 1 | "For credits, the consumption data ('24 of 25 used') is strong evidence against a refund" | deep/08 §4 | RevenueCat sends no consumption percentage for any product: "RevenueCat doesn't currently collect or send consumption percentages or usage events for individual Transactions." Only a custom server could send it. Not worth building in the window. Same flaw in ch. 06's reason for a 2% pack refund rate. | V / E high |
| 2 | "Turn on RevenueCat's Apple refund-request handling" (a per-app setting with "Always prefer declining") | 06 §10, 16 §7, deep/08, deep/09 | Now **Refund Control** at **Lifecycle → Refund Control**, project-wide and policy-based. "Always decline" was removed Jun 17, 2026. Options: Prefer full refund / Prefer no refund / Send consumption data only / Do not respond. | V |
| 3 | "Turn on refund handling on Thu Dec 3" | deep/09 D18 | Too late. The first trials convert around Nov 27–28. Turn it on **before launch** (Nov 23) and test it in sandbox. | E high |
| 4 | "If developers don't respond quickly, Apple often grants the refund by default" | RevenueCat blog, repeated in deep/09 | Apple's own engineer (developer forums, Jun 2024): "Whether you call the endpoint… or not, the refund may be granted or denied. However any data you provide… will be considered." Treat "default grant" as a vendor claim. | V (Apple forum) / C |
| 5 | "Vendor reports refunds down about 33–50%" | deep/09 | Exact vendor numbers: Dipsea −36% (3.0% → 1.9% in 15 days), MyMood AI −50%, Adapty Fotorama −40%, Adapty "4% to 2.3%". All vendor case studies. | C |
| 6 | Adapty: Photo & Video "leads all categories in trial refund rate at 6.4%" | 06, 08, 23, README | The same Adapty page also refers to "trial refund rates above the 8.3% global average". Both can't be right. Treat 6.4% as a rough marker, not a precise figure. | V (page text) / C |
| 7 | Trial reminder "24 hours before" | 03 (Facetune section), deep/06 | Apple starts renewal attempts inside the last 24 hours. Send at **trial start + 40 h** (details §4c; same fix for 19, 22, 23 in §9). | V / E high |
| 8 | Customer Center is simply part of RevenueCat | (implied, deep/06) | RevenueCat's Customer Center doc says "available on Pro and Enterprise plans" (with a legacy-plan note), while its pricing page says "All features included". Check in the dashboard before relying on it. | V (both pages) |

Corrections that touch chapters 06, 16, 19, 21, 22 and 23 (including the "2.7% proves reminders work" mix-up, the ~7% yearly refund guess and the review-reply timing) are in §9, with fixes.

---

## 1. How an Apple refund actually works (Nov 2026)

### 1a. The customer's side [V]

Apple Support page 118223 (published Sep 17, 2026) gives four steps:
1. "Sign in to reportaproblem.apple.com."
2. "Tap or click "I'd like to," then choose "Request a refund.""
3. "Choose the reason why you want a refund, then choose Next."
4. "Choose the app, subscription, or other item, then choose Submit."

Then: "Wait 24 to 48 hours for an update on your request." Money can take longer to reach the card.

Apple's developer docs list three refund routes: Apple Support, reportaproblem.apple.com, and "Asking their payment method issuer for a refund" [V, "Handling refund notifications"]. That third route is a chargeback. Because Apple is the seller of record, a card dispute reaches Digi the same way a refund does: as a `REFUND` notification. I found no Apple page that charges developers a separate chargeback fee [E, med].

**Refund deadline:** Apple's support page names no time limit. I could not verify the window today. Plan as if any purchase made in the contest can be refunded until winners are confirmed.

### 1b. What Digi's server sees [V, Apple App Store Server Notifications v2]

| Notification | When | What Digi should do |
|---|---|---|
| `CONSUMPTION_REQUEST` | A customer asked for a refund on a consumable or auto-renewable subscription. Reason codes: `UNINTENDED_PURCHASE`, `FULFILLMENT_ISSUE`, `UNSATISFIED_WITH_PURCHASE`, `LEGAL`, `OTHER` | Reply within 12 h with consumption data (RevenueCat does this in milliseconds) |
| `REFUND` | "The App Store successfully refunded a transaction". Carries `revocationDate` and `revocationReason` (0 = "other reasons, for example, an accidental purchase"; 1 = "an actual or perceived issue within your app") | Remove the digis that purchase granted; log it; count it in the daily report |
| `REFUND_DECLINED` | "The App Store declined a refund request" | Nothing. Log it (it's your best evidence the setup works) |
| `REFUND_REVERSED` | Apple "reversed a previously granted refund due to a dispute that the customer raised. If your app revoked content or services… it needs to reinstate them" | Give the digis back |
| `REVOKE` | Family Sharing access ended | Only matters if Family Sharing is on. Keep it off (§5d) |

**The `revocationReason` tells you why.** Code 1 means Apple thinks the app failed. If you see code 1 more than once or twice a week, look at failed AI jobs first.

### 1c. The 12-hour reply: what Apple asks for today [V]

The current endpoint is `PUT /inApps/v2/transactions/consumption/{transactionId}` with the `ConsumptionRequest` body. The older V1 body (account tenure, play time, lifetime dollars) now applies only to the Advanced Commerce API. The fields:

| Field | Required | Values | What it means for Digi |
|---|---|---|---|
| `customerConsented` | Yes | must be `true` | Apple rejects anything else with HTTP 400 |
| `deliveryStatus` | Yes | `DELIVERED`, `UNDELIVERED_QUALITY_ISSUE`, `UNDELIVERED_WRONG_ITEM`, `UNDELIVERED_SERVER_OUTAGE`, `UNDELIVERED_OTHER` | RevenueCat always sends `DELIVERED` if it has the transaction. So make sure failed AI jobs are re-credited, so "delivered" stays true |
| `sampleContentProvided` | Yes | true / false | "true if you provided… a free sample or free trial… or information about the content and how it works". Digi's free camera, 3 free digis and the before/after on the paywall make this honestly `true` |
| `consumptionPercentage` | No | 0–100000 (milliunits) | Not allowed for auto-renewing subscriptions (Apple computes it from elapsed time). RevenueCat doesn't send it for packs either |
| `refundPreference` | No | `DECLINE`, `GRANT_FULL`, `GRANT_PRORATED` | "one of a variety of factors that the App Store uses" |

**Consent rule (Apple, exact):** "You must obtain valid consent from the customer before sharing their personal data with Apple in the Send Consumption Information API." Apple's guidance: consent should be "freely given, specific, informed, and unambiguous"; "Opt-in consent is a higher standard for consent than offering an opt-out"; "Don't use the AppTrackingTransparency prompt to obtain consent". If a user later withdraws consent, stop sending their data. If a user asks to see or delete that data, Apple says to send them to privacy.apple.com.

### 1d. When refunds show up, and why that matters for Dec 16

| Place | How refunds are dated | Effect on the contest |
|---|---|---|
| **RevenueCat charts** | Refunds are subtracted from the **original transaction date**. "you should expect to see changes in prior periods when refunds occur" [V] | A refund on Dec 22 of a Nov 28 yearly lowers Nov 28 revenue after the fact |
| **Apple financial reports** | "attribute refunds to the date when they occur, deducting refunded revenue from the overall payout for that fiscal month" [V, RevenueCat reconciliation doc] | A December refund comes out of the December payout |
| **App Store Connect Sales and Trends** | I could not verify the exact dating today | Screenshot it on Dec 16 and again on the verification day |
| **TrustMRR** | Counts App Store revenue "before Apple's commission, minus refunds" [V in ch. 06] | The leaderboard figure can fall between Dec 16 and confirmation |
| **Contest rule** | Refunds and chargebacks count "including ones issued after the hackathon ends but before winners are confirmed"; "refunding after Dec 16 to tidy numbers" is banned [V in ch. 06/09/23] | Digi can't issue Apple refunds anyway. The rule mainly bites web sales. Don't sell on the web in the window unless you accept that |

**One more trap:** a refunded subscription can keep auto-renewing. RevenueCat: "In the case of refunds, a subscription's auto-renewal setting may still be active" [V, webhooks doc]. So someone refunded on Dec 1 may be charged again next year. Tell refunded users how to cancel too (macro M1).

---

## 2. RevenueCat Refund Control: what it is, what it does, how to set it up

### 2a. What changed in 2026 [V]

- **Nov 14, 2024:** RevenueCat launched automatic answers to Apple refund requests with four options, including "Always prefer declining refunds". Dipsea case: 3% → 1.9% in 15 days with "let Apple decide".
- **Jun 17, 2026:** "Always decline" removed. RevenueCat's reasons, quoted: refund preferences are "signals, not instructions"; blanket declines mean "Apple's systems start to discount it"; "When a legitimate refund request is declined, some users go straight to their bank and issue a chargeback instead… a high chargeback rate puts your developer account at risk" (the last part is RevenueCat's claim; I found no Apple text on it) [V blog / C claim].
- **Now:** "Refund Control" at **Lifecycle → Refund Control**, with policies evaluated top to bottom. It also covers Google Play (useful when Android comes). RevenueCat charges nothing extra for it.

### 2b. Exactly what RevenueCat sends to Apple [V]

| Property | What RevenueCat sends |
|---|---|
| `customerConsented` | `true`. "Enabling consumption data sharing confirms that you obtained consent from your Customers." |
| `deliveryStatus` | `DELIVERED` when the transaction exists in RevenueCat, otherwise `UNDELIVERED_OTHER` |
| `sampleContentProvided` | `true` |
| `refundPreference` | From the `$appleRefundHandlingPreference` attribute if set, else from the first matching policy |

That is thin data. It still helped Dipsea, probably because "the developer answered, delivered, and offered a sample" is better than silence [E, med]. Don't expect miracles for weekly plans or packs.

### 2c. The settings for Digi (do these on Nov 22–23)

**Before you start:** RevenueCat requires App Store Server Notifications for every Apple app in the project, and you must have the consent wording live.

1. **RevenueCat → Apps → Digi (App Store) → "Apple Server to Server notification settings" → click "Apply in App Store Connect".** This writes RevenueCat's URL into both Production and Sandbox in App Store Connect [V]. Choose Version 2.
   - Manual route: App Store Connect → your app → **App Information → App Store Server Notifications** → paste the RevenueCat URL in both fields [V].
2. **Upload the In-App Purchase Key** to RevenueCat. Without it, "Consumable refunds" may not be detected, so refunded Party Packs would keep their digis [V, RevenueCat refunds doc].
3. **Lifecycle → Refund Control.** Build three policies, top to bottom:

| Order | Policy name | Condition | Preference | Why |
|---|---|---|---|---|
| 1 | No consent | Customer attribute `refund_data_consent` = `no` | **Do not respond to refund requests** | Apple's consent rule. Users who switch off the toggle in Settings land here |
| 2 | Repeat refunders | Customer attribute `apple_refunds_count` ≥ 2 | **Prefer no refund** | Narrow, fair, and what RevenueCat itself recommends ("Apply no-refund preferences narrowly") |
| Default | Everyone else | (none) | **Send consumption data only** | The Dipsea setup. Neutral. Doesn't burn trust with Apple |

   Each preference can be used by only one policy [V]. If the policy editor can't filter on your custom attributes (the doc says "Any other property available in the policy editor, including properties used in Customer audiences"; I couldn't log in to confirm custom attributes appear), use the legacy per-customer attribute instead: set `$appleRefundHandlingPreference` to `DO_NOT_HANDLE` (no consent) or `DECLINE_REFUND` (repeat refunder) from your server [V, still documented].
4. **Save changes.** "Changes don't affect refund-review requests until you save them" [V].
5. **Do NOT pick "Prefer full refund" as a default.** It hands Apple a reason to approve every request.
6. **Test in sandbox (30 minutes, on a real iPhone):**
   - Buy a Party Pack with a sandbox account → open the refund sheet (see §5c) → pick any reason → submit. Apple's sandbox approves automatically and sends `REFUND`. Check that the 25 digis disappear.
   - Repeat, but under Issue choose **Other**, type `DECLINE`, submit → you should get `REFUND_DECLINED`.
   - Type `GRANT_PRORATED` → a prorated refund; for consumables the sandbox uses 50% [V, Apple "Testing refund requests"].
   - Check RevenueCat's **Refund Requests Outcomes** chart shows the requests.

### 2d. Consent: wording, toggle, privacy label

Apple wants consent that is real. RevenueCat's template puts it in the terms. The safer route for Digi is **terms + a visible toggle** [E, med; not legal advice, ch. 22's lawyer hour should check it].

**Terms (section "Refunds"), plain English:**
> Refunds for App Store purchases are decided by Apple. If you ask Apple for a refund, we may tell Apple whether your purchase was delivered and that you had free digis to try first. We share this only to help Apple decide your refund request. You can turn this off any time in Digi › Settings › Privacy. To see or delete what Apple holds, visit privacy.apple.com.

**Settings › Privacy toggle (on by default, clearly labelled):**
> **Help Apple review refund requests**
> If you ask Apple for a refund, we tell Apple whether your purchase was delivered. Nothing else. [On/Off]

When it's switched off, set the RevenueCat attribute `refund_data_consent = no` (and `$appleRefundHandlingPreference = DO_NOT_HANDLE` as a backup) with `Purchases.setAttributes(...)` [V, the react-native-purchases SDK exposes `setAttributes`].

**Privacy label:** Apple says if you adopt the API, "answer the app privacy questions to disclose in your labels any data you collect from your customers and what you're using it for" [V]. Digi already declares Purchases (RevenueCat). Add the purpose "App Functionality" for purchase history if it isn't there [E, med].

**Privacy policy line:** "When you request a refund from Apple, we may share whether your purchase was delivered with Apple, under Apple's privacy policy. Apple keeps it only as long as needed to review the request."

---

## 3. Refund benchmarks, and which choices move them

### 3a. The numbers that exist (with their weaknesses)

| Slice | Refund rate | Source and date | Label |
|---|---|---|---|
| Photo & Video, **trial** refunds | 6.4% global, 14.1% APAC ("leads all categories") | Adapty P&V benchmarks, Apr 17, 2026 | C (page contradicts itself with an "8.3% global average") |
| P&V weekly-trial funnel | refund 7.5% | same | C |
| All apps by plan length | weekly 2.6%, monthly 3.0–3.5%, **annual 4.2%** | Adapty refund benchmarking, updated Feb 10, 2026 | C |
| Hard paywall vs freemium | 5.8% vs 3.4% | same | C |
| Low-price plans | ~2.2% | same | C |
| US refunds | "Above 3%" | same | C |
| Annual buyers in BF week (promo apps) requesting a refund within 30 days | 2.7% vs 4% in Sep–Oct | RevenueCat holiday study, Oct 27, 2026 | V |
| Season refund rate | 3.58% Oct → 2.91% Christmas → 3.16% early Jan | Adapty holidays 2026, via ch. 23 | V in ch. 23 |
| SOSA 2026 median | 2.5% / 2.9%; North America 3.4%; price tiers 2.7% / 3.9% / 4.5% | RevenueCat SOSA 2026, via ch. 06 | V in ch. 06 |
| Consumables / credit packs | **No public benchmark found** | — | — |
| Store penalties | "above 10% may face warnings… exceeding 30% can be removed" | Adapty, no Apple source given | C (low) |

Apple's own rule is vaguer and still matters: guideline **5.6.4** lists "excessive refund requests" and "negative customer reviews" as signs an app isn't meeting quality expectations [V].

### 3b. What lowers refunds, ranked by evidence

| Lever | Evidence | Strength | For Digi |
|---|---|---|---|
| Answer Apple's consumption request | Dipsea −36%, MyMood −50%, Adapty −40–50% | C, vendor | Do it (§2) |
| Short trial, clear charge date at opt-in | Adapty: "Users who are surprised by a charge are the ones who refund. Make the billing date and amount visible at the moment of trial opt-in." | C | Already 3 days; show the date |
| Freemium over hard paywall | 3.4% vs 5.8% | C | Digi is freemium (free camera) |
| Low price | ~2.2% for low tiers; RevenueCat price-tier 2.7% vs 4.5% | C / V | Packs and weekly are low; yearly is mid |
| Reminder before the charge | Review evidence: "they don't remind you" is a top Facetune complaint (ch. 03) | E | Do it, timed right (§4c) |
| Easy cancel inside the app | No number found | E, med | `showManageSubscriptions()` in Settings |
| Show results before payment | Ch. 19: AI face complaints are a top 1★ theme | E | 3 free digis before any paywall |
| Auto re-credit failed AI jobs | Apple's `revocationReason 1` = "issue within your app" | E | Already planned (ch. 21) |

### 3c. Expected refund rate and dollar impact per 1,000 installs

Model: `scratchpad/bible/r25/scripts/refund_model.py`. Plan mix = chapter 06 package A, base case, per 1,000 installs in the window: 12.5 yearly from trial, 3 yearly direct, 12 weekly payments, 12 Party Packs, 2 Big Nights, 4 Roll Passes. Gross ≈ **$820**. The multipliers for each protection are my estimates [E, med-low]; the arithmetic is exact.

| Scenario | Effective trial-yearly rate | Refunded sales | Refunded $ (gross) | Blended rate | Contest profit lost @15% fee | @30% fee |
|---|---|---|---|---|---|---|
| A. Nothing done: surprise trial, failed AI jobs not re-credited (×1.5–2) | 11.2% | 3.0 | $72.85 | 8.9% | **$61.92** | $50.99 |
| B. Category average, no special effort | 6.4% | 1.8 | $42.46 | 5.2% | **$36.09** | $29.72 |
| C. B + Refund Control on (×0.70) | 4.5% | 1.2 | $29.72 | 3.6% | $25.27 | $20.81 |
| D. B + honest timeline + 40 h reminder + in-app cancel (×0.75 trial, ×0.85 subs) | 4.8% | 1.5 | $33.24 | 4.1% | $28.26 | $23.27 |
| E. B + AI quality guard: auto re-credit, free redo (×0.80–0.90) | 5.8% | 1.5 | $37.58 | 4.6% | $31.94 | $26.30 |
| **F. C + D + E together** | **3.0%** | **0.9** | **$20.54** | **2.5%** | **$17.46** | **$14.38** |

How to read it:
- **Going from A to F saves about $44 per 1,000 installs** at the 15% fee. At 10,000 installs, about **$445** of contest profit [E, med].
- Contest profit loss = refunded gross × (1 − Apple's fee), because Apple's commission is reversed on a refund [E, high]. AI cost already spent is lost too, but that only hits "true" profit, not the contest number.
- The bigger hidden cost is **reviews**: a billing 1★ averages 1.39★ (ch. 19). F's 2.5% blended rate is near RevenueCat's Black Friday annual figure (2.7%), so it is reachable, not heroic.
- If App Review forces the 30% fee (no Small Business Program yet), each refund hurts a bit less in profit terms but everything else hurts more.

---

## 4. Product and copy choices that prevent refunds

### 4a. The paywall line (already in ch. 22; one fix)

Keep chapter 22's paywall text. Add the **real date**, worked out on the device, under the button:

> **Free until Thu, Nov 27. Then $39.99/year.**
> Cancel in Settings › [your name] › Subscriptions before Nov 26 and you pay nothing.

Why the day before: Apple's support page says to cancel "at least 24 hours before the trial ends" [V, Apple 118428]. The paywall should match Apple's own advice.

### 4b. Trial digi cap, stated

Chapter 22 suggests capping AI digis in the trial (for example 5) and saying so. Keep it. It protects AI cost from trial-and-cancel users, and stating the number keeps it honest: "Trial includes 5 AI digis. 60 a month after that." [E, high]

### 4c. The reminder, timed for Apple's renewal window

- **When:** trial start **+ 40 hours** (a 72 h trial; Apple may charge any time in the last 24 h). If +40 h falls in quiet hours (9 p.m.–9 a.m., ch. 23), send it at 8:30 p.m. the evening before instead.
- **How:** a local notification scheduled on the phone right after purchase (`expo-notifications`). No server needed. Cancel it if RevenueCat shows the trial was cancelled.
- **Copy (local push):**
  > Your Digi Plus trial ends Thu at 3:14 PM. After that it's $39.99 a year. Keep it or cancel in Settings, no hard feelings.
- **Fallback for people who block notifications:** an in-app banner on any app open from hour 36: "Trial ends Thu 3:14 PM · $39.99/yr after · Manage". The "Manage" button opens Apple's subscription sheet.
- **Paywall promise:** say "We'll remind you on day 2 if notifications are on." Don't promise a reminder you can't deliver to someone who said no to notifications.

### 4d. Cancel and manage inside the app

- Settings › **Subscription** shows: plan, next charge date and price, digis left ("12 monthly · 25 pack"), and two buttons:
  - **Manage or cancel** → `Purchases.showManageSubscriptions()` [V, in the react-native-purchases SDK]. This opens Apple's own sheet.
  - **Restore purchases**.
- Since Nov 4, 2026, Apple lets you add **retention messages** to its cancel flow, configured in App Store Connect [V, Apple news]. Skip during the contest. If used later, keep them factual ("Your 60 digis for December stay until Dec 31"), never guilt.

### 4e. Should Digi offer an in-app "Request a refund" button?

Apple provides `beginRefundRequest`, and RevenueCat wraps it (`beginRefundRequestForActiveEntitlement`, `beginRefundRequestForProduct`) [V, SDK source]. RevenueCat's Customer Center has a "Refund Request (iOS only)" path and hides it during a free trial and for Family Sharing users [V]. Apple does not require it.

**Recommendation [E, med]:** don't put a refund button in the main UI. Put it one level down, in **Help › "I was charged and didn't mean to"**, with a plain choice:
- **Cancel so it doesn't renew** (Apple sheet), and
- **Ask Apple for a refund** (opens Apple's in-app refund sheet).

This is honest and not a dark pattern: the option is there, labelled, two taps away. It also keeps the request inside the app, so the person isn't hunting for a website while angry, and is less likely to write a 1★ review first [E, low-med]. Don't add a retention discount in front of the refund sheet.

---

## 5. Fraud and abuse with credits

### 5a. The pattern

"Buy credits, use them, ask for a refund" is the classic abuse for consumables. Apple's docs say to "Reduce refund abuse and identify repeated refunded purchases by mapping REFUND notifications to the player accounts on your server" and that you are "responsible to store, monitor, and take appropriate action for each refunded transaction" [V]. Clawing back unspent currency is expected, and Apple asks you to "Inform customers by presenting contextual messaging in the app for any actions you take" [V].

### 5b. What RevenueCat In-App Currency does on a refund [V]

- **One-time purchase refunded:** "RevenueCat removes the full amount of currency originally granted by the purchase."
- **Subscription refunded:** "RevenueCat removes a prorated amount… based on the refund amount", rounded up.
- **Floor:** "customer balances cannot go below 0." There are no negative balances.
- A webhook `VIRTUAL_CURRENCY_TRANSACTION` fires on purchases and refunds; refunds also send `CANCELLATION` with reason `CUSTOMER_SUPPORT`, and `REFUND_REVERSED` exists [V].

**What that means:** if someone buys 25 digis, spends all 25, then gets a refund, RevenueCat sets the balance to 0 and Digi eats the AI cost: 25 × $0.018–0.038 = **$0.45–0.95** plus the lost sale [E, high]. Not a disaster, but it adds up if a trick spreads on TikTok.

### 5c. Cheap defences, in order

1. **Spend order: monthly allowance first, pack digis second** (already in ch. 22). Unspent pack digis are the ones a refund can still claw back.
2. **Count refunds per account.** On each `CANCELLATION`/`CUSTOMER_SUPPORT` webhook, add 1 to `apple_refunds_count` (Supabase) and copy it to RevenueCat with `setAttributes` or the REST API. At 2+, the "Repeat refunders" policy kicks in.
3. **Stop free digis for repeat refunders.** App Attest already limits 3 free digis per device (ch. 21). Add: no goodwill credits after 2 refunds.
4. **Tell them, briefly.** On next open after a refund: "Apple refunded your Party Pack, so its 25 digis were removed. Your photos stay yours." No accusation.
5. **On `REFUND_REVERSED`:** re-grant the digis. Check whether RevenueCat does it automatically; its docs don't say. If not, re-grant from the webhook [open question].
6. **Never** block someone's own photos or rolls because of a refund. Only AI credits are tied to payment.

### 5d. Family Sharing: leave it off

Apple: Family Sharing applies to "auto-renewable subscriptions or non-consumables" and "After you enable Family Sharing for an Apple In-App Purchase, you can't turn it off" [V]. If Digi Plus were shared, up to five family members could each pull a monthly digi allowance from one $39.99 purchase. Leave the Family Sharing switch **off** on both subscriptions. Party Packs are consumables and can't be shared anyway.

### 5e. Restore and lost digis: test this before launch

RevenueCat's currency balance lives on the RevenueCat customer (App User ID). If Digi uses anonymous IDs and someone deletes the app, "Restore purchases" brings back the subscription, but I could not confirm from the docs whether the pack balance follows. Run this test in sandbox: buy a pack → spend 3 → delete app → reinstall → restore → check balance = 22. If it doesn't, ask for Sign in with Apple before the first pack purchase, or move the balance in your own backend. This is the source of most "my digis are missing" tickets in credit apps (ch. 19 "credits/limits" theme) [E, med].

---

## 6. Customer support for one busy person

### 6a. What Apple requires [V]

- **1.5 Developer Information:** "Make sure your app and its Support URL include an easy way to contact you."
- **1.2 (user-generated content, which includes "AI content creation apps"):** "A mechanism to report offensive content and timely responses" and "Published contact information" (ch. 22).
- **5.1.1(v):** "If your app supports account creation, you must also offer account deletion within the app."
- **5.6:** "Please treat everyone with respect, whether in your responses to App Store reviews, customer support requests…"
- **TAKE IT DOWN Act:** remove qualifying intimate images within 48 hours of a valid request (ch. 22, FTC [V there]).

### 6b. The cheapest setup that works [E, high]

| Piece | Tool | Cost | Setup time |
|---|---|---|---|
| `support@digi.pink` and `remove@digi.pink` | Cloudflare Email Routing → owner's Gmail. Cloudflare: Email Routing "forwards them to destination addresses" and is on the Free plan [V] | $0 | 15 min |
| Reply as support@ | Gmail "Send mail as" (needs an SMTP sender) or reply from a Gmail address that says "Digi support" | $0 | 20 min |
| Canned replies | Gmail Templates (Settings › Advanced › Templates) holding the 10 macros below | $0 | 30 min |
| Auto-reply | Gmail filter on `to:support@digi.pink` + template reply | $0 | 10 min |
| In-app **Report a problem** | Opens the mail app with a pre-filled body: app version, iOS version, App User ID, last job ID, roll ID. Also a "Report this photo" button on every roll photo | $0 | 1–2 h of build |
| Help page | digi.pink/help: 10 short answers that match the macros | $0 | 1 h |
| Removal form | digi.pink/remove → Supabase table `removal_requests` (photo link, reason, email, `created_at`) + email alert | $0 | 1–2 h |
| Review alerts | App Store review RSS (`itunes.apple.com/us/rss/customerreviews/...json`) checked by a tiny daily Supabase cron that emails new 1–3★ reviews | $0 | 1 h (optional) |

**Don't copy the "support only for paying users" trick.** One founder in the TrustMRR world made support "$1 minimum" to cut noise (via Nevo David's X feed, Mar 21, 2026) [C]. It doesn't fit Digi: Apple requires reachable contact info, and removal requests come from people who never installed the app.

**Auto-reply (exact):**
> Got it, thanks. I'm one person building Digi, so replies take up to a day (two during exam weeks in December).
> Quick fixes while you wait:
> • Missing digis or Plus? Settings › Restore purchases.
> • Cancel? Settings › Subscription › Manage or cancel.
> • A photo of you you want removed? digi.pink/remove (we act within 48 hours).
> — Digi

### 6c. Response targets [E, med; I found no reliable public benchmark]

| Ticket type | First reply | Fix |
|---|---|---|
| Removal / TAKE IT DOWN / photo of a minor | **Hide the photo within 12 h of seeing it; final decision within 48 h** | Same day |
| Billing ("charged", "refund", "cancel") | 24 h | Same reply |
| AI job failed / digis missing | 24 h | Re-credit on the spot if the log confirms |
| Roll / guest / bug | 24–48 h | Next build if needed |

**The 48-hour removal routine:** "hide first, review second". When a removal request arrives, set the photo to hidden for everyone immediately (one SQL update or an admin button), then review. If it's valid, delete it and its hash-matched copies (ch. 22). If not valid, unhide and reply. This keeps the 48-hour clock safe even when the owner is in an exam.

### 6d. The 10 support macros

Rules for all of them: say what happened, what we did, and what they can do. No promises about Apple's decisions. No "we're so sorry for any inconvenience". Sign "— Digi" (or the owner's first name if he prefers).

**M1. Charged after the free trial**
> Hi! The free trial turned into Digi Plus Yearly ($39.99) when it ended. That's on us if it wasn't clear enough.
> If you'd like to stop it: Settings › tap your name › Subscriptions › Digi › Cancel. You keep Plus until the end of the year you paid for.
> If you want your money back, Apple handles all App Store refunds: reportaproblem.apple.com › "Request a refund". They usually answer within 24–48 hours. If you get a refund, please cancel too, or it can renew next year.
> If you'd rather keep Plus, reply and I'll add 10 bonus digis to say thanks for sticking around.

**M2. "AI changed my face"**
> Hi! Sorry, that look missed. Some looks change faces more than others, especially with lots of people in the shot or low light.
> I've put {N} digis back on your account. Two things that help: try "Soft flash" or "Film" (they change faces the least), and use a photo where faces are bigger than a thumbnail.
> If it keeps happening, reply with the job ID (Settings › Help › Recent jobs) and I'll look at it myself.

**M3. AI job stuck or failed**
> Hi! That job didn't finish. Digi returns digis automatically when a job fails or takes longer than 2 minutes, and I can see {N} digis went back to you at {time}. You don't need to do anything.
> If your balance still looks wrong, pull down on the digi counter to refresh, then try Settings › Restore purchases.

*(If the log shows no automatic re-credit, re-credit by hand with key `goodwill:{ticketId}` and change the second line to "I've just put them back myself.")*

**M4. Lost roll photos**
> Hi! Let's find them. Roll photos develop at 9 a.m. the morning after the roll closes. Open Rolls › {roll name}. If it says "Developing", they're still on their way.
> If the roll shows fewer photos than you took, the most common cause is a phone that lost signal; those photos upload next time the app opens on that phone. Ask that friend to open Digi once on Wi-Fi.
> If they still don't show by tonight, reply with the roll name and I'll check the server myself.

*(Only promise a server check if the owner can actually look it up in Supabase. If photos were never uploaded, say so plainly.)*

**M5. Restore purchases / Plus missing on a new phone**
> Hi! Open Digi › Settings › Restore purchases while signed in to the same Apple account you bought with. Plus comes back straight away.
> Pack digis are tied to your Digi account. If they don't come back after a restore, reply with the email of your Apple account's receipt (no card details needed) and I'll move them over.

**M6. Delete my data / account**
> Hi! You can delete everything yourself: Settings › Account › Delete account. That removes your photos, rolls you host, and your digi balance from our servers within 30 days (backups included).
> Two things it can't do: it doesn't cancel an Apple subscription (Settings › your name › Subscriptions), and photos you added to a friend's roll stay in their roll unless you remove them first or they do.
> If you can't open the app, reply from the email linked to your account and I'll delete it for you.

*(Check the 30-day backup number against the real Supabase setup before using it.)*

**M7. Remove a photo of me (including TAKE IT DOWN)**
> Hi, thanks for telling us. I've hidden the photo you reported while I review it. You don't need a Digi account for this.
> I'll confirm within 48 hours. If it's an intimate image shared without consent, it comes down and we remove copies we can find.
> If you have other links, send them here or at digi.pink/remove.

*(Never ask the person to send the image itself. If a minor may be involved, follow the CSAM procedure in ch. 22: don't view or forward it, preserve, report to NCMEC.)*

**M8. Guest can't join the roll**
> Hi! Three quick checks:
> 1. The roll is still open (the host can see "Open until…" on the roll).
> 2. The roll isn't full (up to 30 friends with a Roll Pass, {free limit} without).
> 3. The link opens in Safari or the camera, not inside Instagram's browser. Long-press the link › Open in Safari.
> If it still won't join, reply with the roll name and what the screen says, and I'll look.

**M9. Digis missing**
> Hi! Digis usually "vanish" for one of four reasons:
> • Monthly Plus digis reset on your renewal day (pack digis never expire).
> • A refund from Apple removes the digis from that purchase.
> • A new phone or reinstall: tap Settings › Restore purchases.
> • A job that failed: those come back automatically within 2 minutes.
> I checked your account: {what you found}. {Fix, or "I've added {N} back."}

**M10. How do I cancel?**
> Hi! Settings › tap your name › Subscriptions › Digi › Cancel Subscription. Or in Digi: Settings › Subscription › Manage or cancel.
> You keep Plus and any digis until the end of the period you paid for, and pack digis stay yours.

---

## 7. App Store review replies

### 7a. Apple's rules and mechanics [V]

- **Who can reply:** Account Holder, Admin or Customer Support role.
- **Where:** App Store Connect › Apps › Digi › **Ratings and Reviews** › Reply. Also through the App Store Connect API.
- **One reply per review**, editable and deletable any time; "Edited responses will have notations indicating that they've been edited."
- **Delay:** "Responses may take up to 24 hours to appear on the App Store. Until then, they'll show as pending."
- **Notification:** "When you respond, the reviewer is notified and has the option to update their review."
- **Content rule (5.6.1):** "Keep your responses targeted to the user's comments and do not include personal information, spam, or marketing in your response."
- **Apple's own advice:** prioritise "reviews with the lowest star ratings or those mentioning technical issues"; "we recommend personalizing your responses rather than using generic responses".
- **Length:** Apple states no limit. Third parties quote 5,970 or 10,240 characters [C, conflicting]. Keep replies under 350 characters anyway, so the same text works on Google Play later (350 is Google's cap) [C].
- **Asking for ratings:** only with Apple's API, "up to three times in a 365-day period" [V]. Custom review prompts are disallowed (5.6.1).

### 7b. Does replying help? (honest version)

| Claim | Number | Source | Label |
|---|---|---|---|
| Reviewers get a notification and can update | — | Apple | V |
| Reply rate across 92.9M reviews, Jul 2025–Jul 2026 | 24.2% overall; Entertainment 15% (avg reply 76 h) | AppFollow benchmarks 2026 | C |
| Closing a 10-point reply-rate gap | about +0.3 to +0.5 stars | AppFollow client data | C (vendor; their own caveat: not proof of cause) |
| Responding makes a rating increase about 6× more likely | Google Play study, Hassan et al., Empirical Software Engineering, 2017 | via secondary summaries; I could not open the paper | C |
| "+0.7 stars on average when developers respond" | attributed to Google by Appbot (Aug 7, 2022) | primary Google source not found | C (low) |

So: replies help a little, cost a few minutes, and are mostly read by **future buyers** scrolling reviews. That's the real reason to do it in a launch month.

### 7c. Six reply templates (Digi voice: a friend with a good camera who tells you the price before you ask)

Change one detail per reply (the look name, the day, the roll) so it doesn't read as a bot. Never include the person's name, email or purchase details.

**R1. 1★ "charged after trial / scam"**
> That charge was the yearly plan starting after the 3-day trial. Fair to be annoyed if you didn't see it coming. Cancel: Settings › your name › Subscriptions. Apple handles refunds at reportaproblem.apple.com. We've made the trial end date bigger on the paywall.

*(Only keep the last sentence if it's true by the time you reply.)*

**R2. 1–2★ "too expensive / everything costs money"**
> The camera, the looks and rolls are free, no ads. AI looks cost digis because each one costs us real money to make. 3 are free so you can try before paying. Thanks for being straight about it.

**R3. 1–2★ "AI changed my face / looks fake"**
> Sorry, that look missed. Group shots and low light make faces drift more. If you email support@digi.pink with the job ID (Settings › Help) we'll put the digis back. Film and Soft flash change faces the least.

**R4. 1–2★ "AI didn't work / digis disappeared"**
> Failed jobs should return digis automatically within 2 minutes. If yours didn't, that's a bug on our side. Email support@digi.pink and we'll fix your balance the same day.

*("Same day" only during launch week. From Dec 5, say "within a day".)*

**R5. 1–2★ "lost photos / friends couldn't join the roll"**
> Losing party photos is the worst, sorry. Photos from phones that dropped signal upload the next time Digi opens on that phone. If they don't show, email support@digi.pink with the roll name and we'll check the server.

**R6. 3★ "good but…" (feature request or bug)**
> Thanks for this. {The thing} is on the list. No date yet, so we won't promise one. The flash look you mentioned is our favourite too.

**Never write:** "We're sorry for any inconvenience", "Please contact us so we can make it right" (with no content), anything that blames the user, discount codes (that's marketing under 5.6.1), or a promise of a fix date you don't have.

### 7d. How fast, and which ones

- **Launch week (Nov 24 – Dec 1):** reply to every 1–3★ review the same day. Expect a handful a day at most at this size [E].
- **Dec 2–16:** reply to every 1–2★ and any 3★ that mentions billing or AI faces, within 24 h.
- **Weekly:** count 1–2★ reviews by theme (billing / AI face / lost photos / price). If billing is above 10% of 1–2★, change the paywall that week (ch. 19 rule 15).
- **Don't reset the rating** in the contest. Apple: "having few ratings may discourage potential users" [V].

---

## 8. The goodwill policy (contest edition)

### 8a. The math [E, high on arithmetic; AI cost from ch. 21, V there]

| Item | Price | Net after Apple 15% | Net after 30% | Cost if refunded (contest) | Goodwill alternative | Max cost of goodwill | Break-even: goodwill must prevent a refund in at least |
|---|---|---|---|---|---|---|---|
| Digi Plus Yearly | $39.99 | $33.99 | $27.99 | −$33.99 / −$27.99 | 10 bonus digis | 10 × $0.038 = $0.38 | 1 in 89 (15%) / 1 in 74 (30%) |
| Launch offer yearly | $29.99 | $25.49 | $20.99 | −$25.49 / −$20.99 | 10 bonus digis | $0.38 | 1 in 67 / 1 in 55 |
| Weekly (one payment) | $6.99 | $5.94 | $4.89 | −$5.94 / −$4.89 | 5 digis | $0.19 | 1 in 31 / 1 in 26 |
| Party Pack | $5.99 | $5.09 | $4.19 | −$5.09 / −$4.19 | 5 digis | $0.19 | 1 in 27 / 1 in 22 |
| Big Night | $11.99 | $10.19 | $8.39 | −$10.19 / −$8.39 | 8 digis | $0.30 | 1 in 34 / 1 in 28 |

The $0.038 uses chapter 21's fully loaded Seedream 5.5 cost per kept digi; at Seedream 5.0 Flash ($0.018) the goodwill cost halves. Bonus digis only cost money if they're used, and many won't be.

**Contest rules check:** goodwill digis are not a sale and not a refund, so they don't touch the "no selling at a loss" or "no refunds after Dec 16" rules [E, med]. Log each one (date, account, digis, reason) so the verification call can see it.

### 8b. The rules

| Situation | What Digi does | What Digi does NOT do |
|---|---|---|
| AI job failed or timed out | Automatic re-credit, banner "Didn't work. Your 2 digis are back." | Ask the user to email |
| Result is bad ("not my face") | One free redo per result, in-app; or re-credit on request (M2) | Argue about whether it looks like them |
| Charged after trial, asks for money back | Give cancel steps and Apple's refund route first (M1). Offer 10 bonus digis only as an alternative if they want to keep Plus | Hide the refund route, or make the bonus a condition of not refunding |
| Charged after trial, angry review, no email | R1 reply | Reply with a discount code |
| Pack bought, digis spent, asks for refund | Point to Apple, plainly. Refund Control sends neutral data | Promise a refund, or claim Apple will refuse |
| Two or more Apple refunds on one account | "Prefer no refund" policy; no more free or goodwill digis | Accuse them in public or in-app |
| Outage (Seedream down on a party night) | Re-credit everyone affected + 2 extra digis, one in-app message | Wait for complaints |
| Anyone asks for a cash refund on a web purchase (if web checkout ever ships) | Refund it before Dec 16 if fair. After Dec 16, **don't refund to tidy numbers**; handle normal requests normally and keep the paper trail | Refund in bulk after Dec 16 |

---

## 9. Contradictions with chapters 06, 16, 19, 21, 22 and 23

| Ch. | Their text | The problem | Fix |
|---|---|---|---|
| 06 §2.4 | Packs refund 2% because "consumables carry Apple's consumption data, which supports a refund decline" | RevenueCat sends no consumption percentage (§2b) | Keep 2% as E (low-med); remove the reason |
| 06 §10 | "Turn on RevenueCat's Apple refund-request handling… Add one line to the Terms" | Product renamed and re-built (Refund Control, policies); Apple prefers opt-in consent | Use §2c policies and the §2d terms + toggle |
| 06 §2.4, 23 §3c, 23 §4 | "30-day refunds on yearly plans fell from 4% to 2.7%" | It's the share **requesting** a refund within 30 days, among BF annual buyers in apps with promos. Not caused by reminders | Cite it only as "deliberate discount buyers refund less" |
| 16 takeaways, §2 | "~7% expected refunds" on yearly; yearly sale worth $31.60 | Inconsistent with ch. 06 (6.4% / 4%) and ignores protections | Use 5.2% blended with no effort, ~2.5% with §2–§4 done; yearly ≈ $32.97 at 15% |
| 16 §7 | "Keep RevenueCat's refund handling on (deep/08)" | Same rename; and "always decline" no longer exists | §2c |
| 19 §11 rule 3 | Paywall: "We'll remind you 24 hours before." | Too late (Apple renews in the last 24 h) and a promise not kept for users without notifications | "We'll remind you on day 2 if notifications are on." Send at +40 h |
| 19 §11 rule 14 | "Offer a refund route for trial complaints: 'Request a refund at reportaproblem.apple.com. We're sorry.'" | Fine in support emails. In public replies, a refund link as the whole answer reads like an admission and skips the cancel step, which matters because refunded subs can still renew | R1: explain the charge, give cancel steps, then the refund route |
| 19 §11 rule 6, 21 §6 | Digis "refund" automatically | The word "refund" means Apple money elsewhere. Users and the owner will confuse the two in support | Call it **"digis back"** in the UI and `recredit` in code. Keep "refund" for Apple only |
| 21 §8, task brief | AI cost "$0.018–0.028 per digi" | Chapter 21's own fully loaded figure for Seedream 5.5 is $0.0376 per kept digi | Goodwill math in §8 uses the $0.038 ceiling |
| 22 §2.3 | "Send a push 24 hours before the trial converts" | Timing (above) | +40 h local notification + in-app banner |
| 22 §2.2 | "Cancel any time in Settings › Apple Account › Subscriptions" | Apple's own steps say "In Settings, tap your name… Tap Subscriptions" [V, Sep 29, 2026] | Use Apple's wording: "Settings › your name › Subscriptions" |
| 23 §3c | "Trial ends in 24 h" push with quiet hours 9 p.m.–9 a.m. | A 24 h push can land after the charge; quiet hours can delay it further | Schedule at +40 h; if in quiet hours, move earlier, never later |
| 23 §6d | Verification call: show ASC and RevenueCat | Doesn't mention that RevenueCat moves refunds back to the purchase date, so the numbers shift after Dec 16 | Screenshot RevenueCat, ASC and TrustMRR on Dec 16 and on call day; explain the difference if asked |
| deep/09 D18 | Refund handling switched on Dec 3 | Trials convert from ~Nov 27 | On before launch |

---

## What this means for Digi

**(a) Refund-defence checklist: finish by Mon Nov 23 (one page)**

1. [ ] RevenueCat › Apps › Digi › "Apply in App Store Connect" for server notifications (V2, Production + Sandbox).
2. [ ] In-App Purchase Key uploaded to RevenueCat.
3. [ ] Terms "Refunds" section and privacy policy line (§2d) live on digi.pink.
4. [ ] Settings › Privacy toggle "Help Apple review refund requests" sets `refund_data_consent`.
5. [ ] RevenueCat › Lifecycle › Refund Control: 3 policies (§2c), saved.
6. [ ] Sandbox test: approved refund removes 25 digis; "DECLINE" gives `REFUND_DECLINED`; both show in the Refund Requests Outcomes chart.
7. [ ] Webhook → Supabase `refund_log` (CANCELLATION with `CUSTOMER_SUPPORT`, `REFUND_REVERSED`, `VIRTUAL_CURRENCY_TRANSACTION`), and `apple_refunds_count` copied to RevenueCat.
8. [ ] Family Sharing OFF on both subscriptions (irreversible if turned on).
9. [ ] Paywall shows the real end date and "cancel before {day}" line.
10. [ ] Local reminder at +40 h; in-app banner from hour 36.
11. [ ] Settings › Subscription: next charge, digis left, Manage or cancel, Restore.
12. [ ] Help › "I was charged and didn't mean to" (cancel + Apple refund sheet).
13. [ ] Failed jobs re-credit automatically (ch. 21); banner says "digis back".
14. [ ] Restore test for pack digis after reinstall (§5e).
15. [ ] support@ and remove@ forwarding, auto-reply, 10 Gmail templates, digi.pink/help, digi.pink/remove with "hide first".

**(b) Exact settings**

| Where | Setting | Value |
|---|---|---|
| App Store Connect › App Information | App Store Server Notifications | RevenueCat URL, Version 2, Production and Sandbox |
| App Store Connect › each subscription | Family Sharing | Off |
| App Store Connect › App Information | Support URL | https://digi.pink/help (with support@digi.pink on it) |
| App Store Connect › Users and Access | Integrations › In-App Purchase key | Create, download, upload to RevenueCat |
| RevenueCat › App settings | In-App Purchase Key | Uploaded |
| RevenueCat › Lifecycle › Refund Control | Policy 1 / 2 / default | Do not respond (no consent) / Prefer no refund (≥2 refunds) / Send consumption data only |
| RevenueCat › Integrations › Webhooks | URL | Supabase Edge Function `rc-webhook`, with an auth header |
| RevenueCat › Charts | Pin | Refund Rate, Refunds, Refund Requests Outcomes |

**(c) Macros and templates:** the 10 macros (M1–M10) in §6d and the 6 review replies (R1–R6) in §7c. Paste them into Gmail Templates and a note in App Store Connect today.

**(d) The daily 15-minute routine (launch week and Dec 1–16)**

Do it at the same time daily (suggested 8:30 p.m. Cairo = 1:30 p.m. US Eastern, after the US morning).

| Min | Step | Where | Done when |
|---|---|---|---|
| 0–2 | **Removal queue first.** Any request older than 24 h? Decide it now | Supabase `removal_requests` | Nothing older than 24 h open |
| 2–4 | **Money check.** New refunds, declined, reversed; any `revocationReason 1` (app issue) | RevenueCat Refund Control panel + `refund_log` | You know yesterday's refund count and why |
| 4–5 | **AI health.** Failed jobs not re-credited = 0? Fail rate under 5%? | Supabase `jobs` view | Zero un-credited failures |
| 5–11 | **Inbox.** Billing and AI tickets first, using M1–M10. Re-credit with key `goodwill:{ticketId}` | Gmail | Nothing older than 24 h (48 h from Dec 5) |
| 11–14 | **Reviews.** Reply to new 1–3★ with R1–R6, one personal detail each | App Store Connect › Ratings and Reviews | All new 1–2★ answered |
| 14–15 | **Log.** One line: date, refunds (#, $), tickets, goodwill digis given, 1–2★ count, billing share | A sheet | Saved |

On exam days (from Dec 5), shrink it to steps 1, 2 and 4 (8 minutes) and let the auto-reply carry the inbox for up to 48 h. Never skip step 1.

**(e) The numbers to expect:** see the table in §3c. With everything done: about 2.5% of sales refunded, about **$17 of contest profit lost per 1,000 installs** (15% fee), versus about $36 with no effort and about $62 if trials surprise people and failed jobs aren't re-credited [E, med].

**(f) Contradictions:** see §0 and §9. Fix the copy in chapters 19, 22 and 23 that promises a 24-hour-before reminder.

**Numbered actions, with dates**

1. **Nov 18–19:** write the Terms "Refunds" section, privacy line and the Settings toggle (§2d). 1 hour.
2. **Nov 19–20:** build the RevenueCat webhook → Supabase `refund_log` + `apple_refunds_count`. 2 hours with Claude Code.
3. **Nov 21:** Family Sharing off; server notifications on; IAP key uploaded; Refund Control policies saved. 30 minutes.
4. **Nov 21–22:** paywall date line; +40 h local reminder; in-app banner; Settings › Subscription screen with `showManageSubscriptions()`. 3 hours.
5. **Nov 22:** sandbox refund tests (§2c step 6) and the restore test (§5e). Screenshot results for the verification folder. 45 minutes.
6. **Nov 22:** email forwarding, auto-reply, 10 templates, digi.pink/help, digi.pink/remove with "hide first". 2 hours.
7. **Nov 24 – Dec 1:** daily 15-minute routine; reply to every 1–3★ the same day.
8. **Every Monday:** compare refund rate to the §3c table. If above 4%, read the `revocationReason` split and the 1–2★ themes before changing anything else.
9. **Dec 16 (15:00 Cairo):** screenshot RevenueCat (Revenue, Refunds, Refund Requests Outcomes), App Store Connect and TrustMRR. Keep the routine running.
10. **Dec 16 → confirmation (~Dec 26):** don't touch keys or prices; answer refund-related tickets normally; screenshot again on call day and be ready to explain that RevenueCat books refunds on the purchase date.

---

## Sources

All accessed **Nov 17, 2026** unless noted.

**Apple (primary)**
- Request a refund, Apple Support 118223 (published Sep 17, 2026): https://support.apple.com/en-us/118223 [V]
- Cancel a subscription, Apple Support 118428 (published Sep 29, 2026): https://support.apple.com/en-us/118428 [V]
- Send Consumption Information: https://developer.apple.com/documentation/appstoreserverapi/send-consumption-information [V]
- ConsumptionRequest (fields, constraints): https://developer.apple.com/documentation/appstoreserverapi/consumptionrequest [V]
- ConsumptionRequestV1 (legacy, Advanced Commerce): https://developer.apple.com/documentation/appstoreserverapi/consumptionrequestv1 [V]
- deliveryStatus, refundPreference, consumptionPercentage, sampleContentProvided: https://developer.apple.com/documentation/appstoreserverapi/deliverystatus · /refundpreference · /consumptionpercentage · /samplecontentprovided [V]
- notificationType (REFUND, REFUND_DECLINED, REFUND_REVERSED, CONSUMPTION_REQUEST, REVOKE): https://developer.apple.com/documentation/appstoreservernotifications/notificationtype [V]
- consumptionRequestReason: https://developer.apple.com/documentation/appstoreservernotifications/consumptionrequestreason [V]
- revocationReason: https://developer.apple.com/documentation/appstoreservernotifications/revocationreason [V]
- Handling refund notifications: https://developer.apple.com/documentation/storekit/handling-refund-notifications [V]
- Get Refund History: https://developer.apple.com/documentation/appstoreserverapi/get-refund-history [V]
- Testing refund requests (sandbox DECLINE / GRANT_PRORATED): https://developer.apple.com/documentation/storekit/testing-refund-requests [V]
- Handling subscriptions billing ("During the 24-hour period before the subscription expires…"): https://developer.apple.com/documentation/storekit/handling-subscriptions-billing [V]
- Supporting Family Sharing ("you can't turn it off"): https://developer.apple.com/documentation/storekit/supporting-family-sharing-in-your-app [V]
- App Review Guidelines 1.5, 3.1.1, 5.1.1(v), 5.6, 5.6.1, 5.6.4: https://developer.apple.com/app-store/review/guidelines/ [V]
- Ratings, reviews, and responses: https://developer.apple.com/app-store/ratings-and-reviews/ [V]
- Respond to reviews (ASC Help): https://developer.apple.com/help/app-store-connect/monitor-ratings-and-reviews/respond-to-reviews [V]
- Retention messages, Nov 4, 2026: https://developer.apple.com/news/?id=fk9ps3gv [V]
- Developer forums thread 758021 (Apple engineer on CONSUMPTION_REQUEST, Jun 2024): https://developer.apple.com/forums/thread/758021 [V]

**RevenueCat (primary for its own product)**
- Refund Control: https://www.revenuecat.com/docs/customers/refund-control [V]
- Configure refund policies (incl. consent template): https://www.revenuecat.com/docs/customers/refund-control/configure-refund-policies [V]
- Troubleshooting Refund Control: https://www.revenuecat.com/docs/customers/refund-control/troubleshooting [V]
- Handling Refunds: https://www.revenuecat.com/docs/subscription-guidance/refunds [V]
- In-App Currency refunds: https://www.revenuecat.com/docs/offerings/in-app-currency/refunds [V]
- Apple server notifications setup and forwarding: https://www.revenuecat.com/docs/platform-resources/server-notifications/apple-server-notifications [V]
- Webhook event types (CANCELLATION, REFUND_REVERSED, VIRTUAL_CURRENCY_TRANSACTION): https://www.revenuecat.com/docs/integrations/webhooks/event-types-and-fields [V]
- Reconciling with financial reports (refund attribution): https://www.revenuecat.com/docs/dashboard-and-metrics/reconciling-with-financial-reports [V]
- Refund Rate chart: https://www.revenuecat.com/docs/dashboard-and-metrics/charts/refund-rate-chart [V]
- Customer Center and configuration: https://www.revenuecat.com/docs/tools/customer-center · https://www.revenuecat.com/docs/tools/customer-center/customer-center-configuration [V]
- Pricing page ("All features included"): https://www.revenuecat.com/pricing [V]
- Refund Control feature page (Dipsea 36%, MyMood AI 50%): https://www.revenuecat.com/feature/refund-control [V page / C claims]
- "We now handle Apple refund requests automatically" (Nov 14, 2024): https://www.revenuecat.com/blog/company/handle-apple-refund-requests-automatically [V page / C claim]
- "Why we removed 'always decline'" (Jun 17, 2026): https://www.revenuecat.com/blog/company/why-we-removed-always-decline-refund-preference [V]
- Holiday offers study (Oct 27, 2026): https://www.revenuecat.com/blog/growth/holiday-offers-subscription-apps [V]
- react-native-purchases SDK source (beginRefundRequest*, showManageSubscriptions, setAttributes, getVirtualCurrencies): https://github.com/RevenueCat/react-native-purchases/blob/main/src/purchases.ts [V]

**Other vendors and research (secondary)**
- Adapty, Photo & Video benchmarks (Apr 17, 2026): https://adapty.io/blog/photo-video-app-subscription-benchmarks/ [C]
- Adapty, Refund rate benchmarking (updated Feb 10, 2026): https://adapty.io/blog/refund-rate-metrics-and-benchmarking/ [C]
- Adapty, Cut refund rate 40% in 15 days (Dec 5, 2024): https://adapty.io/blog/how-to-cut-your-apps-subscription-refund-rate/ [C]
- Adapty, Refund Saver part 3 (updated Aug 7, 2025): https://adapty.io/blog/refund-saver/ [C]
- AppFollow, reply-rate benchmarks 2026: https://appfollow.io/blog/app-review-reply-rate-benchmarks-2026 [C]
- Appbot, "Increase app ratings… with replies" (Aug 7, 2022): https://appbot.co/blog/increase-app-ratings-and-improve-app-reviews/ [C]
- Hassan, Tantithamthavorn, Bezemer, Hassan, "Studying the dialogue between users and developers of free apps in the Google Play Store", Empirical Software Engineering, 2017 (metadata via Crossref; full text paywalled): https://doi.org/10.1007/s10664-017-9538-9 [C]
- Cloudflare Email Routing: https://developers.cloudflare.com/email-routing/ [V]
- Nevo David's X feed (TrustMRR "$1 support" anecdote, Mar 21–22, 2026), via the nevo brain tool: https://x.com/wickedguro/status/2035368856144003084 [C]

**Earlier chapters relied on:** 06, 16, 19, 21, 22, 23 in this folder; `digi-deep-2026-11/08-pricing-paywall.md`, `09-contest-plan.md`.

**Working files:** `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/bible/r25/` (Apple doc JSON, RevenueCat markdown, `scripts/refund_model.py`).

---

## Fact-check (2026-11-17)

A re-check of the 10 claims this chapter leans on most.

| # | Claim | Re-check | Action |
|---|---|---|---|
| 1 | Apple: respond to CONSUMPTION_REQUEST "within 12 hours"; consent required; `customerConsented` must be true | Re-read on the Send Consumption Information and ConsumptionRequest pages (Apple doc JSON). Exact wording matches. | None |
| 2 | Current fields: customerConsented, deliveryStatus, sampleContentProvided required; consumptionPercentage and refundPreference optional; endpoint `/inApps/v2/transactions/consumption/{id}` | Matches Apple's property list and the endpoint's external ID `put:inApps-v2-transactions-consumption`. The V1 body is now for Advanced Commerce API purchases. | None |
| 3 | RevenueCat sends DELIVERED / sampleContentProvided true / no consumption percentage | Quoted from the Refund Control doc today. | None; corrects ch. 06 and deep/08 |
| 4 | "Always decline" removed Jun 17, 2026 | RevenueCat blog header: Published June 17, 2026, last updated June 18, 2026. | None |
| 5 | Dipsea 3% → 1.9% (−36%) in 15 days | RevenueCat blog (Nov 14, 2024). Vendor-run test on an app RevenueCat owns. | Kept as C |
| 6 | Apple starts renewal attempts in the last 24 h | Apple "Handling subscriptions billing": "During the 24-hour period before the subscription expires, the App Store starts trying to renew it automatically." | None; drives the +40 h reminder |
| 7 | Apple refund decision "24 to 48 hours" | Apple Support 118223, published Sep 17, 2026. | None |
| 8 | Review replies notify the reviewer; one reply per review; up to 24 h to appear | Apple "Ratings, reviews, and responses" and ASC Help "Respond to reviews". | None |
| 9 | RevenueCat In-App Currency: one-time refund removes all granted currency, floor 0 | RevenueCat In-App Currency › Refunds doc. | None |
| 10 | Refund cost per 1,000 installs: $36 (no effort) → $17 (all protections) at 15% | Re-ran `refund_model.py`; arithmetic holds. The protection multipliers are my estimates, so the result stays E (med). | None |

**Could not verify:** Apple's current refund-request deadline; whether Apple charges developers for chargebacks; how App Store Connect Sales and Trends dates refunds; a primary Google source for "+0.7 stars"; the Hassan et al. paper's exact numbers (paywalled); whether RevenueCat re-grants currency on `REFUND_REVERSED`; whether Refund Control policies can filter on custom attributes; whether pack-digi balances follow a restore on a reinstall with anonymous IDs; support response-time benchmarks. My web search budget ran out before I could chase these. They are marked in the text, and the sandbox tests in §2c and §5e answer the last three directly.
