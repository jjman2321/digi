# Digi × Ship or Die $100K Hackathon: rules, risks and a 30-day plan

Written Nov 16, 2026, 13:40 UTC, about 40 minutes after the start.

**Labels**
- **V**: read today on the official contest page, or on another primary source (Apple, TrustMRR, or Marc Lou's own post mirror), with the URL given.
- **C**: claimed by a third party, or by our own earlier notes.
- **E**: my estimate or inference.

**Sources**
- Rules: https://www.ship-or-die.com/100k-hackathon/rules (V)
- Main page: https://www.ship-or-die.com/100k-hackathon (V)
- Leaderboard: https://www.ship-or-die.com/100k-hackathon/leaderboard (V)
- Raw copies saved to `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/digi/contest/raw/` (rules.txt, main.txt)

---

## 0. The blunt version

1. **Accept the rules in the contest dashboard now, before doing any more work on Digi.** V: "Accept the contest rules in your dashboard before you start working on your new business… Work done before accepting the rules does not qualify." Screenshot the acceptance time.
2. **The domain worry is gone. Pre-launch design work is the new risk.**
   - The rules changed since our Nov 11 notes. Owning a domain early is now fine. V: "Owning a business name or registering a domain earlier is fine… A domain's purchase date alone does not disqualify you."
   - But the rules now also say, V: "**No earlier code, prototypes, designs, landing pages or other work on the business.** Keeping earlier work private… does not make it new."
   - Pre-launch Digi work we already have:
     - `/home/user/razzi-demo/digi-ui-v2.png`: a "Digi v1 screens" mockup dated Nov 14, showing digi.pink and prices.
     - `l1–l6` look test images and `razzi-photo-strip.png`, dated Nov 13.
   - **Do not reuse any of these files or their prompts.** Redesign and re-tune from scratch in a fresh repo created after accepting the rules. Disclose this to the organisers in the email (Q3 below). Planning documents are fine. V: "Plan your idea, but do not work on the business until launch."
3. **App Review is the biggest threat to profit.**
   - Marc Lou's own iOS app took "336 hours for Apple to review it" (V, Nov 10, https://marclou.com/tweets/chat-trustmrr-com-is-now-on-ios-after-4-hours-and-336-hours-of-review).
   - New-app reviews are taking "weeks" for some developers as AI-made apps flood in (C, Oct 20, https://mobilegamer.biz/app-store-review-times-are-being-dragged-down-by-a-flood-of-ai-made-apps-and-games/).
   - 3,559 entrants are on board today (V, main page). Many will submit iOS apps this week.
   - **Ship a web version on digi.pink with Stripe within 48 h as the hedge.** Submit a minimal iOS v1 by Nov 18 to start the review clock. Add features later as updates, which review in about 14–18 h (C, see section 3).
4. **Apple's commission probably counts against you.**
   - The rules subtract "your payment provider's processing fees" (V). For App Store sales, Apple is the payment provider.
   - TrustMRR counts App Store revenue "before Apple's commission" (V, https://trustmrr.com/faq).
   - Plan for the worst case, 30%, unless the Apple account is already in the Small Business Program (15%). Ask the organisers (Q1).
   - Web checkout costs about 3–4% (C). US apps may now link to web checkout (V, Apple guidelines 3.1.1(a)).
5. **AI costs are not subtracted, but there is a new "selling at a loss" rule.** V: "each sale must cover what it costs you to deliver: selling at a loss to pump revenue is cheating." Cap credits on every plan, including the "unlimited" yearly plan in the mockup.
6. **Friends and family buying is cheating.** V: "having friends, family, other entrants or anyone you pay buy it." Never promote Digi to your med-school classmates or family. The "Digi party" invite flow puts friends of users in the app. That is fine, but any purchase by your own contacts is a risk (Q5).
7. **Realistic outcome (E).**
   - Top 3 probably needs $20K–$60K profit; first place probably needs $50K+ (C, our Nov 11 analysis, `/home/user/MMTEST/research/hackathon-2026-11/pivot/contest.md`).
   - A solid Digi month is $1K–$8K revenue. The prize is a long shot. Build for profit and the asset, and don't break a rule chasing rank.

---

## 1. The exact rules (V, rules page, read 13:38 UTC Nov 16)

The page still says "These rules may still change until launch day, Monday, November 16." Section 12 also says: "We may update these rules to fix mistakes or close loopholes, and we'll announce any change." **Re-read the rules weekly.**

### Dates
- "Start from zero on Monday, November 16, 2026 at 13:00 UTC."
- "ends exactly 30 days later, on Wednesday, December 16, 2026, at the same time it started. Only money received inside that window counts."
- In Cairo, that is Nov 16 15:00 to Dec 16 15:00.
- "You can join on any day before the contest ends… joining later does not give you a new 30-day window."
- "Pre-registering reserves your spot. It does not let you start early."
- "Growing a personal or niche social account before launch is fine… Just don't make it about your product until launch day."

### Eligibility
- "Entry is free… One entry per person."
- "18 or older."
- Sanctions: comprehensive US-sanctioned countries are out. Egypt is not one of them (E).
- "**Solo only. One person, one entry, one active product.** No co-founders, partners or teams… You must build and run the hackathon business yourself."
- "Your landing page and marketing may say 'we' or 'our'."
- AI agents doing the building are not addressed. Marc Lou himself builds with agents, so this is normal (E).

### What you can build
- "A new digital product, first launched on or after Monday, November 16, 2026 at 13:00 UTC." Mobile apps are explicitly allowed.
- "It must be new. Relaunching, renaming or moving an existing product or customer base is not allowed."
- "**No earlier code, prototypes, designs, landing pages or other work on the business.** Keeping earlier work private or pushing it to a repository after launch does not make it new."
- On an old landing page: "You may use its visual design as a reference and recreate it from scratch in a fresh project after launch and rules acceptance, including with AI."
- "Not allowed: courses, info products, agencies, consulting, client services, or selling physical goods as your business."
- "Not allowed: sexually explicit or adult content, gambling, or **deepfakes and other depictions of real people without their consent**."
- "You can change ideas or switch businesses during the hackathon… Only the business you finish with counts."
- "Using the Higgsfield API is welcome but optional. It never affects your ranking."

### Payments and verification
- Accepted providers: "Stripe, Lemon Squeezy, Polar, Paddle Billing, Dodo Payments, RevenueCat, Superwall, App Store, Creem, Whop, Shopify (stores and apps) or Razorpay."
- "A separate payment account… is recommended, not required. You may reuse an older account… Only your hackathon business's payments count; keep them clearly identifiable and separate."
- "The live leaderboard shows provisional contest revenue, not profit. It does not determine the winners."
- "Connect TrustMRR as soon as possible… it must cover the full contest period for verification. Keep it connected."
- "A TrustMRR listing is required, but it can use Anonymous mode."
- "**Our website traffic tracker is mandatory.** Install it before sending traffic or receiving your first payment and keep it running through the contest. Include it in your privacy notice."
  - The script is `https://www.ship-or-die.com/hackathon/verify.js` with a `data-site` key.
  - It is cookieless and respects Global Privacy Control.
  - It logs the referrer, utm_source and utm_medium, and flags paid clicks (gclid, gbraid, wbraid, msclkid, ttclid). V, read the script.
- "**Native app evidence requirements will be announced separately**; keep your store, acquisition, and payment records."
- "Ties go to whoever reached the tied amount first."

### Profit formula (section 13)
- "Profit = money received − refunds − chargebacks − payment fees − ad spend"
- Money received: "payments that actually landed in your payment account between launch and the end… as shown by TrustMRR. Not invoices, not pending payments, not projected MRR. **An annual plan paid up front counts in full.**"
- Refunds and chargebacks: subtracted, "**including ones issued after the hackathon ends but before winners are confirmed**."
- "Payment fees: your payment provider's processing fees on that money."
- Ad spend: "ads on any platform, sponsored posts, paid influencers or shoutouts, **affiliate or referral payouts**, bought placements. Every dollar comes off and must be clearly attributed."
- "**Not subtracted: hosting, domains, software, AI or API costs, and your own time.** … But each sale must cover what it costs you to deliver."
- "Other currencies are converted to US dollars using TrustMRR's rates."

### Paid marketing (section 6)
- "Direct traffic is allowed… unpaid TikTok posts and other organic promotion. A 'direct' label… is not evidence of cheating."
- "Keep receipts or ad account records for every dollar… Show which customers and revenue that spend brought in, beyond doubt."
- "Spend you didn't disclose, or customers we can't trace to a real source, get you disqualified."

### Cheating (section 7)
- "Buying your own product, or having friends, family, other entrants or anyone you pay buy it."
- "Payments you refund or reverse after the hackathon, or deals meant to win a prize, not a business."
- "Selling at a loss to pump revenue: charging less than each sale costs you to deliver (AI, API or compute costs), like reselling AI credits or generations for less than you pay for them."
- "Moving in revenue, customers or contracts from anything that existed before launch day."
- "Faking, editing or hiding TrustMRR, payment provider or analytics data."
- "asking your audience to buy to help you win rather than because they want the product."
- "Finalists must show us where their visitors and customers came from, with read access to their analytics and payment account. We may ask anyone on the leaderboard… at any time."

### Prizes, winning and publicity
- 1st: $100,000 cash. 2nd: iPhone Duo. 3rd: MacBook Neo. Paid by Higgsfield "within 30 days after the winners are confirmed."
- "up to 10 days to verify the top entries by hand."
- "**you have 5 days to send all of it. Miss the deadline and you're disqualified.**" Dec 16–26 falls in exam season, so prepare the verification pack before Dec 5.
- "We check code and domain history, including earlier landing pages on the Wayback Machine, and the product's payment history."
- Winners need ID plus a W-9 or W-8 and sanctions screening. "Prizes are subject to any tax withholding required by law."
- On the leaderboard: "During the contest, the leaderboard shows your name, pirate avatar, and provisional revenue, without startup names." Public sharing of the startup name is "on by default" in My Startup and can be turned off.
- "Winners and their businesses will be announced publicly regardless."
- The contest is run by JustShipIt Pte. Ltd. Contact: crew@email.ship-or-die.com.

### What changed since our Nov 11 notes (`/home/user/MMTEST/research/hackathon-2026-11/CONTEST-RULES.md`)

| Topic | Nov 11 | Today |
|---|---|---|
| Domain bought before the start | Disqualified | Fine, if no work was done on it |
| Earlier code, prototypes, designs, landing pages | Not mentioned | Explicitly banned |
| Accepting the rules | Not mentioned | Must accept in the dashboard before working |
| Traffic tracker | Not mentioned | Mandatory |
| One active product | Not mentioned | Added |
| Selling at a loss | Not mentioned | Now cheating |
| Payment account | Separate recommended | Reusing a payment account is explicitly OK |
| Anonymous TrustMRR listing | Not mentioned | Allowed |
| Leaderboard | Not described | Shows revenue only |
| Native app evidence | Not mentioned | Rules "to be announced" |

---

## 2. Open questions to email crew@email.ship-or-die.com

The owner sends this himself. Keep it short and in his own words.

1. **Apple commission.** For App Store and RevenueCat sales, does Apple's 15%/30% commission count as "payment fees"? Are RevenueCat's own fees counted?
2. **Timing of App Store money.** Apple pays out about a month after the sale. Is "money received" the purchase date as shown on TrustMRR, or the payout date?
3. **Pre-launch planning.** Before Nov 16 I made planning notes, one static UI mockup image and a few AI test images to judge whether the idea works. No code, landing page, domain content, store listing or payments. I won't reuse them and will rebuild everything from scratch. Is that OK?
4. **Real people and consent.** Digi restyles photos the user uploads: selfies and group photos with friends. Before any processing, the uploader must confirm everyone in the photo agreed. In group strips, each friend uploads their own selfie. No celebrities, no editing of children, no nudity. Does this meet the "depictions of real people without their consent" rule?
5. **Friends and acquaintances.** If people who know me find the app on their own and buy it, is that a problem? Should I refund them during the window?
6. **Non-cash creator deals.** If I give creators free Pro access or credits (no cash), is that "paid marketing"? At what value?
7. **Referral rewards.** Rewards paid in free in-app credits (no cash): do they count as "referral payouts"?
8. **One business, two providers.** An iOS app through RevenueCat plus a web version through Stripe, same brand: is that OK, and how should both be connected so nothing is counted twice?
9. **Native app evidence.** When will these requirements be published? For app-only traffic (TikTok to the App Store), what evidence of acquisition source do you want: App Store Connect source reports, campaign links?
10. **Domain history.** digi.pink has a Wayback snapshot from Dec 2021 by an earlier owner. I registered it on Nov 16, 2026. Is the registrar receipt enough?
11. **AI tools for content.** Are AI generation tools such as Higgsfield, used to make organic TikTok content, "software" (not subtracted)?
12. **Discounts.** Is a Black Friday discount on the yearly plan fine, as long as each sale still covers AI cost per user?

---

## 3. Facts that drive the plan

| Fact | Label | Source |
|---|---|---|
| 3,559 builders signed up today; 2,296 on Nov 14 | V | main page; https://marclou.com/tweets/2-296-participants-joined-the-100k-hackathon-before-it-starts-in-24-hours |
| TrustMRR last-30-day revenue across 10,646 startups: $0 for 5,845; under $1K for 3,744; $1–10K for 816; $10–100K for 217; $100K+ for 24 | V | https://marclou.com/tweets/i-checked-10-646-startups-and-54-9-made-0 |
| Marc's iOS app: 4 h to build, 336 h in App Review (Nov 10) | V | https://marclou.com/tweets/chat-trustmrr-com-is-now-on-ios-after-4-hours-and-336-hours-of-review |
| Apple says average review is 1.5 days, 14 h for minor updates; new apps "deemed to need additional scrutiny" take longer; submissions +84% YoY | C | https://mobilegamer.biz/app-store-review-times-are-being-dragged-down-by-a-flood-of-ai-made-apps-and-games/ (Oct 20, 2026) |
| Review Clock: new iOS app about 4 days, update about 18 h (tiny sample) | C | https://appreviewclock.com/ |
| Apple Guidelines (updated Oct 16, 2026), 3.1.1(a): entitlements "are not required for developers to include buttons, external links, or other calls to action in their United States storefront apps" | V | https://developer.apple.com/app-store/review/guidelines/ |
| Apple currently collects 0% on qualifying US link-out purchases under the contempt order. A proposed up-to-15% fee is pending; the Supreme Court hears the case Jan 11, 2027 | C | https://techcrunch.com/2026/08/14/apple-proposes-to-take-a-15-cut-of-purchases-made-outside-the-app-store/, https://9to5mac.com/2026/11/13/epic-formally-asks-scotus-to-uphold-contempt-ruling-against-apple/ |
| Guideline 5.1.2(i): "clearly disclose where personal data will be shared with third parties, including with third-party AI, and obtain explicit permission" | V | Apple guidelines |
| TrustMRR App Store revenue is "customer sales before Apple's commission, minus refunds"; App Store "cannot be combined with RevenueCat or Superwall on the same startup"; RevenueCat connects with a V2 secret key (read-only); "discrepancies of up to 30% can occur"; syncs "typically hourly" | V | https://trustmrr.com/faq |
| TrustMRR Anonymous mode hides name, logo, website, screenshots and store links; country, founding date and metrics stay public; turning it off does not restore removed details | V | https://trustmrr.com/faq |
| Small Business Program (15%) starts about 15 days after the end of the Apple fiscal month of approval. Enrolling today probably means 30% on most contest sales, unless the Grasp Labs account is already enrolled | C | https://adapty.io/docs/app-store-small-business-program, https://newly.app/how-to/apple-small-business-program |
| RevenueCat refund handling answers Apple's CONSUMPTION_REQUEST within 12 h. Vendor reports refunds down about 33–50%; one user reports Apple still refunded every time; needs customer consent in the terms | C | https://www.revenuecat.com/docs/platform-resources/apple-platform-resources/handling-refund-requests |
| digi.pink has a Wayback snapshot from Dec 1, 2021 (earlier owner; content not readable from here) | V | archive.org availability API |

---

## 4. Prior editions and similar contests

From our Nov 11 research in `/home/user/MMTEST/research/hackathon-2026-11/pivot/contest.md`; the original URLs are listed there.

- **First edition.** This is the first public contest ranked on 30-day profit. There are no past winners (C).
- **Ship or Die cycle 1 (Jun 2026).** 155 startups shipped, 57 made money, $33K+ combined, about $580 per earning startup. The median Ship or Die product on TrustMRR has made $38.50 all-time (C).
- **RevenueCat Shipaton** (judged by a panel, not profit).
  - 2025 winner: Payout (class-action finder).
  - 2026: 3,985 projects. Winner Mio (gamified self-care). RevenueCat said Apple barely kept up with reviews (C).
  - **Lesson:** a big contest clogs App Review.
- **Young TrustMRR risers that look like Digi** (C, Nov 11):
  - Glowy (AI photos, $9/$12/$20 one-time): $11.7K in 30 days. Channels: IG, TikTok, X, Reddit.
  - Pet Plus Us (AI pet portraits, $19): $28.5K in 30 days, probably on ads.
  - Boothie (AI digicam photobooth): $55K in the last 30 days, about $4.7K in its first week. Organic TikTok slideshows from about 12 persona accounts, weekly plans (C, `/home/user/MMTEST/research/hackathon-2026-11/PHOTOBOOTH-PLAN-2026-11-13.md`).
- **Tactics that worked**
  1. Take cash upfront: yearly plans, one-time packs, lifetime. In RevenueCat's BF/CM data, annual went from 41% to 49% of new payers, with a lower 30-day refund rate (2.7% vs 4%).
  2. Black Friday: +20% new payers for apps running a promo vs −16% without. About half the lift came from people who were already free users. Christmas-only offers showed no clear lift (C, https://www.revenuecat.com/blog/growth/holiday-offers-subscription-apps).
  3. Organic channels where buyers already are. Most fast risers had under 1K X followers; the revenue-to-followers correlation is only 0.25.
  4. Ads and affiliates bought revenue fast for some, but here they come straight off profit.

---

## 5. Day-by-day plan, Nov 16 → Dec 16

Assumes about 10–14 h a day until Dec 4, then about 15 min a day during exams (Dec 5 onward). Times are Cairo time (UTC+2).

### Week 1: Build and submit (Nov 16–22)

| Day | Date | Do |
|---|---|---|
| D1 | **Mon Nov 16** (from 15:00) | 1. Sign up and **accept the rules in the dashboard first**; screenshot it.<br>2. Create a **new, empty `digi` repo** (never copy files from `razzi-demo`).<br>3. Create the App Store Connect app record and bundle ID, the RevenueCat project, and IAP products (yearly, weekly, credit pack).<br>4. Stripe: a new account or a clearly separate product and account. Polar is fine too.<br>5. TrustMRR: add the startup in Anonymous mode and connect RevenueCat (read-only V2 key).<br>6. digi.pink: a one-page holding site with the **verify.js tracker** and a privacy notice that names it.<br>7. Check whether the Apple account is in the Small Business Program; apply today if not.<br>8. Owner sends the organiser email (section 2). |
| D2 | Tue Nov 17 | 1. Cloudflare Worker for generation (key on the server, model ID in config, per-user credit caps, OpenRouter spend limit).<br>2. Tune prompts **fresh** on 4–6 looks.<br>3. Web flow: upload → consent → result → paywall → Stripe Checkout. Go live on digi.pink by evening.<br>4. Install a Sentry spend/error alert. |
| D3 | **Wed Nov 18** | 1. Minimal iOS v1: import/camera, 6 looks, AI consent screen (5.1.2(i)), IAP paywall plus Restore, terms and privacy links, data deletion, report button, nudity filter.<br>2. TestFlight on your own phone, then **submit to App Review tonight.** Small scope means fewer rejection reasons. No group feature or share links yet: they add UGC questions (guideline 1.2). |
| D4 | Thu Nov 19 | 1. Open 3 TikTok and IG accounts (brand personas, AI-made fictional people only). First 2 posts each, all linking to digi.pink with `utm_source=tiktok`.<br>2. Batch-produce 40 slideshows. |
| D5–7 | Fri–Sun Nov 20–22 | 1. Answer App Review within hours. If rejected, fix and resubmit the same day.<br>2. Web: add the 4-shot photo strip and share link (digi.pink/s/…).<br>3. Post 2–3 times a day per account.<br>4. Read the numbers every evening (section 7). |

### Week 2: Launch and Black Friday (Nov 23–30)

| Day | Date | Do |
|---|---|---|
| D8–10 | Mon–Wed Nov 23–25 | 1. If approved: release and set up ASO (photobooth, photo strip, digicam, Christmas photo).<br>2. Submit update 1.1: strip, share links, "Try this look"; updates review in about 1 day (C).<br>3. Prepare the Black Friday offer in App Store Connect (introductory or offer code on yearly) and as a Stripe coupon. **Check that the discounted price still covers the worst-case AI cost per user** (section 6). |
| D11 | **Thu Nov 26** (Thanksgiving) | "Friendsgiving" look drop, switched on by remote config so no app update is needed. |
| D12–15 | **Fri Nov 27 – Mon Nov 30** | 1. One real deal: yearly plan discounted, for example $39.99 → $29.99 (E). It really ends Nov 30 at 23:59.<br>2. One push to opted-in free users on Nov 27 and Nov 30. One email to web sign-ups.<br>3. Submit to free BF lists only; a paid list counts as ad spend. |

### Week 3: Christmas build and pre-exam lockdown (Dec 1–4)

| Day | Date | Do |
|---|---|---|
| D16–17 | Tue–Wed Dec 1–2 | 1. Build every Christmas and party look now: office party, ugly sweater, Secret Santa strip, NYE glitter. Hide them behind remote-config dates (unlock Dec 8–10).<br>2. **Submit the last pre-exam iOS build by Dec 2.** That leaves room for one rejection and resubmission before Dec 5. |
| D18 | Thu Dec 3 | Automate:<br>1. Schedule 12 days × 3 accounts of posts (scheduler, or drafts queued).<br>2. Turn on RevenueCat refund handling, after adding consent wording to the terms.<br>3. Support auto-reply plus 5 canned answers (restore purchase, delete data, refund how-to, bad result → free re-roll, contact).<br>4. Hard daily spend cap on OpenRouter; alert if AI cost passes X% of revenue.<br>5. Uptime alert on the Worker. |
| D19 | Fri Dec 4 | **Build the verification pack** for the 5-day deadline during exams:<br>1. Screenshot of the rules acceptance time.<br>2. Repo first-commit date.<br>3. Domain receipt.<br>4. Payment account history.<br>5. Ad spend ledger (should read $0).<br>6. Read-only analytics invites ready.<br>7. App Store Connect source report.<br>8. Proof that the TrustMRR connection was continuous.<br>Freeze features; bug fixes only. |

### Exam period: autopilot (Dec 5–16)

| Day | Date | Do |
|---|---|---|
| D20–25 | Sat Dec 5 – Thu Dec 10 | 15 min a day (section 7). No new features. Holiday looks unlock by remote config on Dec 8–10. |
| D26–31 | **Fri Dec 11 – Wed Dec 16** | Christmas-party week (E: office and friend parties are Dec 10–20, so the timing fits).<br>1. "Party pack" one-time purchase on the web and as IAP.<br>2. A web "gift a Party Pack" code, redeemed on the web only (keeps clear of Apple's in-app unlock rules, 3.1.1).<br>3. Push to free users once, around Dec 12. **The contest ends Dec 16 at 15:00 Cairo.** |
| After | Dec 16 → about Dec 26 | Watch refunds; they still count until winners are confirmed. If contacted, send the pack within 5 days.<br>Apple's App Store Connect holiday slowdown is usually about Dec 23–27 (C). It doesn't matter for the contest, but don't plan a late-December update. |

### If App Review rejects or stalls
- **Rejected for a fixable issue** (metadata, consent, IAP): fix and resubmit within 24 h, and reply in the Resolution Center.
- **Rejected under 4.3 (spam) or 1.2 (UGC):** reframe around strips and party themes, remove share links from v1, then resubmit.
- **Request an expedited review** once, citing the holiday launch.
- **Still not approved by Nov 27:** make the **web app the main product** and push all TikTok traffic to digi.pink. You lose little: web Stripe fees are about 4% against Apple's 15–30%, and web-to-app links never depended on the store.
- **Rejected after Dec 2:** don't fight it during exams. The web app carries the contest.

---

## 6. Allowed profit tactics, with the math

### Pricing that collects cash in the window
- **Yearly pre-selected**, paid upfront. It counts in full (V).
  - The mockup's $39.99 a year is cheap for the contest (E).
  - Test $29.99 against $49.99 in week 1 on the web, where changes need no review.
- **Weekly $6.99 earns at most about 4 payments per buyer** in the window. Keep it as the decoy and anchor (E).
- **One-time packs on the web** (Glowy-style $9/$12/$20) earn cash now, with no renewal surprise, so fewer refunds (E).
- **No free trials after about Dec 10.** A trial that converts after Dec 16 earns $0 for the contest. Simplest option: no trials at all. One free watermarked look is the trial (E).

### Selling-at-a-loss check
Do this before every price or discount (V rule; numbers C/E).
- Nano Banana costs about $0.04 an image, so a 4-shot strip is about $0.16 (C, earlier notes; re-check the live price).
- Rule of thumb: worst-case credits per sale × cost per image must be less than the net price after fees.
  - Party pack $5.99 with 25 images: net about $4.19 after 30%, cost $1.00. OK.
  - Yearly $29.99: net about $21 after 30%. Cap at about 300 images, worth $12, during the window, then a daily cap. OK.
  - **"Unlimited" must not be literal.**

### Fees (E/C)

| Channel | Fee | Note |
|---|---|---|
| App Store, standard | 30% | Not yet confirmed as a counted fee (Q1) |
| App Store, Small Business Program | 15% | Only if already enrolled, or once it kicks in (about mid-December or later) |
| Stripe | about 2.9% + $0.30 US, +1.5% international cards, +1% FX (C) | |
| Polar | about 4% + $0.40, merchant of record, handles VAT (C) | |

- Example: 500 yearly plans at $29.99 = $14,995 gross.
  - App Store at 30%: profit about $10.5K.
  - App Store at 15%: about $12.7K.
  - Web via Stripe: about $14.2K.
- **The web channel is worth up to +35% profit** (E).
- A US in-app "Buy on web (save 20%)" button is allowed (V, 3.1.1(a)), and currently has no Apple commission (C). It adds friction, so A/B test it. Outside the US, IAP only.

### Refunds
- Apple decides App Store refunds. You can only influence them.
- Show a sample result **before** the paywall. Then the buyer knows what they get.
- Offer a free re-roll on any bad result.
- State the weekly renewal price clearly.
- Turn on RevenueCat refund handling, with consent in the terms (C).
- On Stripe: a clear refund policy and fast email replies. Answer disputes with usage logs.
- **Never refund after Dec 16 to game anything.** That is cheating (V).

### Ad spend
- Baseline is **$0**. Every dollar comes off profit 1:1, and Apple Search Ads counts too (V).
- Only test paid ads if both of these hold:
  1. Organic numbers show web conversion and yearly take-rate.
  2. A $50 test returns more than $1.30 net per $1 *inside the window*.
- Keep every receipt and use UTM links. The tracker flags `ttclid`/`gclid` clicks as paid (V).

### Creators and affiliates
- **Flat fees and rev-share both count**: "paid influencers," "affiliate or referral payouts" (V).
- A 30% rev-share affiliate still nets 70% minus fees, so it isn't a loss. But it needs attribution records (Rewardful-style links) (E).
- Free Pro for creators is unclear (Q6).
- **Never write "help me win" or "support my entry."**

### Organic, which is the real plan
- 3 faceless slideshow accounts, 2–3 posts a day each. AI-made fictional people only.
- Every result has a share link and a watermark on the free tier.
- Run the "Digi party" group strip once the app is approved.
- ASO terms: photobooth, photo strip, digicam.
- Free BF and holiday deal lists, only the ones that don't charge.

### Cost control
- AI and hosting are not subtracted (V), but they come from the owner's real wallet.
- Set an OpenRouter hard cap and an AI-cost-to-revenue alert. Target under 15% (E).

---

## 7. The 15-minute daily check (from Dec 5; also every evening before then)

| Check | Where | Act if |
|---|---|---|
| Contest revenue | TrustMRR / leaderboard | Not syncing → reconnect the same day (V rule) |
| New payers, yearly share, refunds | RevenueCat dashboard; Stripe | Refunds above 5% → look at why; consider a stronger free re-roll |
| Paywall views → purchases | RevenueCat / web analytics | Under 2% → swap the paywall copy or price via remote config (web first) |
| AI spend vs revenue | OpenRouter | Above 15% → tighten daily caps |
| Errors and uptime | Sentry / Worker alert | Generation failing → fall back to a second model ID from config |
| Top 3 posts' views | TikTok / IG | Repeat the winning hook; drop dead formats |
| Support inbox | Email | Over 10 unanswered → canned replies |

Write one line a day in a log: date, revenue, refunds, spend, notes. It doubles as verification evidence.

---

## 8. Disqualification risks for Digi, worst first

1. **Pre-launch designs and prototypes.**
   - The mockup and test images from Nov 13–14 in `/home/user/razzi-demo/`.
   - Fix: never ship them; redesign and re-tune fresh; disclose (Q3).
   - The research repo commit "Add Digi competitor teardown and product design" (Nov 14) is a planning doc, which is allowed, but it will be visible if asked.
2. **Starting work before accepting the rules.** Fix: accept the rules first; timestamp it.
3. **Friends, family or classmates buying.** Fix: zero personal promotion; ask the organisers (Q5).
4. **No traffic tracker before the first visitor or payment.** Fix: install it on D1 and name it in the privacy notice.
5. **Untraceable customers or undisclosed spend.**
   - Use UTM links on every bio and post.
   - Keep App Store Connect source data.
   - Keep the spend ledger, even at $0.
6. **Selling at a loss.** Uncapped "unlimited" plans, or BF prices below the AI cost of heavy users.
7. **Double-counting revenue.** RevenueCat with Stripe inside it, plus Stripe also linked in TrustMRR. Fix: one path per payment (E).
8. **Mixed payment accounts.** If AnkiDecks' Polar or Stripe account is reused, Digi payments must be clearly separable. Better: a new account or organisation.
9. **Real-people content.**
   - Marketing must never use real people's photos without written consent.
   - No celebrity looks, and no edits of minors.
   - The consent screen is required by both the contest and Apple 5.1.2(i).
10. **Breaking TrustMRR continuity** (an API key rotated or deleted). Fix: don't touch the keys during exams.
11. **Missing the 5-day verification deadline during exams.** Fix: the Dec 4 pack.

## 9. Leaderboard and build in public

- The public board shows only name, pirate avatar and revenue during the contest (V).
- **Recommendation (E): turn TrustMRR Anonymous mode ON and set public sharing OFF in My Startup.**
  - 3,559 builders with AI agents can clone a visible winner within days.
  - Digi's buyers are women aged 16–40 on TikTok, not indie-hacker X, so build-in-public brings little revenue.
- Turn anonymity off after the contest, when listing for sale. Re-enter the details by hand; they aren't restored (V).
- If the owner wants X posts: share numbers and lessons ("day 9, $X, what worked"), with no product name while anonymous.
  - Don't post anything like "help me win."
  - Skip the optional "Part of the $100K Hackathon" footer link, since it breaks anonymity.
