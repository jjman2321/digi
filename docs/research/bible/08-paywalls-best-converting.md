# 08 · The best-converting paywalls, screen by screen (and what Digi should copy)

*Digi bible, chapter 8. Written Nov 17, 2026. Track: paywalls of well-known consumer subscription apps outside photo, studied screen by screen on Mobbin, plus every published paywall A/B result I could find (Superwall, RevenueCat, Adapty). It ends with Digi's paywall set, screen by screen, with exact copy.*

**Labels used in this chapter**
- **V** = verified by me on Nov 17, 2026. For Mobbin, that means I downloaded the full-size screenshots and read them myself, not just the metadata. For the web, it means I read the primary page.
- **C** = claimed by a vendor or a secondary source, with no sample size or method published.
- **E** = my estimate. Confidence is given as high, med or low.

**Raw files:** screenshots and contact sheets are in `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/bible/pw/`. App Store data is in `.../scratchpad/bible/pwdata/`, and the scripts are in `.../scratchpad/bible/scripts/`.

---

## Key takeaways

1. **Annual pre-selected is the norm.** It was the default in 11 of the 14 big apps I went through screen by screen [V, Mobbin]. Adapty, using data from Oct 2025 to Sep 2026, finds that pre-selecting annual converts about as well as pre-selecting weekly, and that "annual-first" layouts raised ARPU (average revenue per user) by 25–40% in winning tests [C]. Only the two dating apps (Tinder, Bumble) pre-select a 1-week plan, because they sell an impulse moment ("see who likes you"). For Digi, that impulse buy is the Party Pack, not a weekly plan.
2. **The honest trial timeline is now the standard trial paywall.** Headspace, Opal and Strava draw it on the paywall. Duolingo, Speak, Calm and Rise promise a reminder in some other form. That makes 7 of 14 [V]. The best version uses **real dates**: "You won't be charged until Feb 6" (Strava). Duolingo even lets you **choose** your reminder: "2 days before (Dec 14) / 3 days before (Dec 13)" [V].
3. **The "free trial" toggle is dead on iOS.** Apple has rejected paywalls with a trial on/off toggle under guideline 3.1.2 since mid-January 2026. The rejection reads: "Remove the toggle for adding or removing a free trial" [V, RevenueCat, Feb 9 2026, updated Apr 23 2026]. Flo has since swapped its toggle for a separate 14-day-trial plan option. **Do not copy the toggle screens on Mobbin** (Flo, Lovi, Beside). They are older captures.
4. **Removing or trapping the close button raises trial starts but raises refunds even more.** BoldVoice tested both: no X at all, and an X that led to a discount screen with no visible close. They dropped both because "the refund spiked by way more than the gain in start trials" [V, RevenueCat, Sep 17 2026]. Photo & Video already has the highest trial refund rate of any category (6.4% globally, 14.1% in APAC; Adapty SOIS 2026, see chapter 06). Digi's X stays visible from the first frame.
5. **Ask for notification permission after the trial starts, not on the paywall.** Headspace ("Your 7 day trial has started… Remind me / Maybe later") and Duolingo ("We'll remind you 2 days before it ends") ask right after purchase, when the reason is concrete [V]. The only published opt-in number is Blinkist going from 6% to 74%. It comes from a secondary source, so its confidence is low [C].
6. **Instant "wait, here's a discount" offers carry App Review risk.** Superwall's transaction-abandon offers made up 17% of revenue across 18 companies' apps, with lower refunds (3.3% for users who saw the offer vs 6.8% in the control). But "a few apps in the cohort received scrutiny from Apple" [V, Superwall, Aug 6 2024]. RevenueCat warns that Apple "is also getting stricter on instant paywall abandonment offers" [V]. If Digi runs a win-back offer, show it at the **next app open** with a real end date. Never show it the instant someone closes the paywall or the Apple sheet.
7. **The billed amount must be the most prominent price on the screen.** Apple's rule says other pricing elements, including the trial and calculated prices such as per-week, "must be displayed in a subordinate position and size to the total billed amount" [C, quoted in an Apple rejection posted on the RevenueCat community]. So "$39.99/year" is big and "$0.77/week" is small and grey. Only 4% of paywalls show annual as a weekly price at all [C, Adapty]. Most show per-month (10 of 14 in my sample).
8. **Prices on Mobbin are mostly Singapore-storefront prices.** Many screenshots show S$, and prices end in .98 (Calm $91.98, Speak $129.98, Locket $5.98). That is Apple's price grid for that country, not a pricing trick. **Don't copy .98 prices.** The US App Store lists the same apps at .99 (Speak $83.99/$109.99, Opal $99.99, Cal AI $29.99) [V, apps.apple.com, Nov 17].
9. **The paywall is a sequence of screens, not a single screen.** The strongest apps put 1–4 screens before the price screen: "your plan is ready" (Calm, Cal AI), a benefits carousel (Duolingo, Speak), a commitment tap (Flo's "tap and hold to commit"), or a rating ask (Cal AI). Rosie Hoggmascall reports trial opt-in going 2% → 8% → 15% as the paywall moved earlier and a 3-screen carousel was added before it [C, RevenueCat, Jun 12 2025]. Digi's version of that is the first AI result itself.

---

## 0. What I corrected or added vs earlier chapters

| # | Earlier claim | What is true now | Source |
|---|---|---|---|
| 1 | `digi-deep/08` §5.3 and `bible/06` §10: ask for notification permission **on the paywall** ("so we can remind you") | Move it to the screen **after** the trial starts. Headspace and Duolingo do this, and a system dialog on top of a paywall interrupts the purchase | Mobbin flows, §2.1–2.3 [V] |
| 2 | Timeline copy "Today → Day 2: we remind you → Day 3: $39.99" | Use **real calendar dates**, computed on the device ("Nov 26: we remind you · Nov 27: $39.99 unless you cancel"). Strava, Rise and Headspace all show a date or a date-based line | §2 [V] |
| 3 | `bible/06` §7.3: a launch-week $29.99 sheet shown to people who **closed** the onboarding paywall | Keep the offer, but don't show it in the same moment. Show it at the **next app open**, with an X and the real end date "Dec 1". Instant abandonment offers draw Apple scrutiny | Superwall Aug 2024; RevenueCat Feb 2026 [V] |
| 4 | `digi-deep/08` §5.1: "Blinkist +23% trial starts, −55% complaints" (sourced to a Substack) | The figure is now repeated by RevenueCat (Jun 12 2025). It is still second-hand, with no sample size. Treat it as med-low confidence, not fact | RevenueCat [V that they say it; C on the number] |
| 5 | (not covered) | Trial toggles are being rejected by Apple since mid-Jan 2026. Add this to the "never" list | RevenueCat [V] |
| 6 | `digi-deep/06` §3.7 P1: three plan cards on the paywall (Yearly, Weekly, Party Pack) | Show **two** subscription cards and put the pack in a text link. Adapty finds that more products win only 53% of tests. In my sample, 11 of 14 show 1–2 plans first and hide the rest ("View all plans", "View More Plans") | Adapty State of Paywalls 2026 [C]; Mobbin [V] |
| 7 | (not covered) | Per-week framing must be visually smaller than the billed amount. The earlier spec "Yearly · $39.99 · $0.77/week" is fine only if $39.99 is the largest price on screen | Apple rejection wording [C]; Adapty 4% stat [C] |
| 8 | (not covered) | Mobbin's .98 prices are Singapore storefront prices, not a US tactic | apps.apple.com US pages [V] |

What still holds from the earlier chapters: yearly pre-selected with a 3-day trial until about Dec 12–13, then no trial; no hidden or delayed X; no fake countdown; Party Pack as the second product; and a value-first paywall after the first AI result.

---

## 1. Method and limits

- **Mobbin:** 20 searches for flows and screens. For each app I downloaded every screen of the subscribe or onboarding flow (not just the 3 previews the tool returns), put them in contact sheets and read them in order.
- **Apps covered in depth (14):** Cal AI, Duolingo, Headspace, Calm, Opal, Speak, Strava, Rise, Flo, Ladder, Locket Gold, Tinder, Bumble and Spotify.
- **Shorter notes (12):** Alma, Headway, TIDE, Bevel, Lovi, Beside, Feeld, Snapchat Lens+, Universe, Halide, The Outsiders and Brilliant. Exit offers come from Blinkist, Flo, Givingli, Beside, BitePal, LinkedIn, Plum and Deepstash.
- **Not on Mobbin:**
  - **Umax:** no flows or screens, and its US App Store page shows no in-app purchase list today.
  - **BeReal:** no paywall flows or screens.
  - I could not document either one screen by screen. I did not guess.
- **Capture dates:** Mobbin doesn't print them. I estimated them from dates visible inside the Apple purchase sheets:
  - Headspace ~Mar 2024
  - Opal ~Sep 2024
  - Strava ~Jan 2025
  - Rise ~Jun 2023
  - Feeld ~Jun 2024
  - Locket ~Aug 2025
  - Spotify late 2025 (its offer "ends December 31, 2025")
  - Others are unknown.
  - **Live paywalls may differ today.** These apps A/B test constantly.
- **Close-button delay can't be measured from stills.** I record whether an X is visible in the captured frame. I don't claim how many seconds it took to appear.
- **Prices:** most screenshots are from the Singapore storefront (S$). I checked US prices on apps.apple.com on Nov 17, 2026 (§3).

---

## 2. Screen by screen

Each app below lists the screens in order, top to bottom, with copy quoted exactly as shown.

### 2.1 Cal AI (calorie tracker; 4.80★, 376,039 US ratings) [V]
Mobbin: [Onboarding, 34 screens](https://mobbin.com/flows/579da5dd-453a-4e7c-9c11-d20708a4db82) · [Subscribing, 4 screens](https://mobbin.com/flows/6cadd7c7-6d96-4098-8e72-a64d45e637f2) · [Paywall screen](https://mobbin.com/screens/e145982d-dec3-4809-9325-816c72f9db32)

**The run-up to the paywall (screens ~20–33 of 34):**
1. **Quiz screens.** "What's stopping you from reaching your goals?" (Lack of consistency / Unhealthy eating habits / Lack of support / Busy schedule / Lack of meal inspiration).
2. **Projection chart.** "You have great potential to crush your goal". It shows a weight curve: 3 Days, 7 Days, 30 Days.
3. **Trust.** "Thank you for trusting us · Your privacy and security matter to us."
4. **Apple Health.** "Connect to Apple Health" with Continue / Not now.
5. **Two yes/no feature questions.** "Add calories burned back to your daily goal?" and "Rollover extra calories to the next day?"
6. **Rating ask before any payment.**
   - Headline "Give us a rating".
   - A laurel badge: "4.8 ★★★★★ 100K+ App Ratings". "Cal AI was made for people like you". Three avatars, "5M+ Cal AI Users".
   - A review card from "Jake Sullivan ★★★★★": "I lost 15 lbs in 2 months! I was about to go on Ozempic…". Then Continue.
7. **Notification priming.** "Reach your goals with notifications". A fake iOS dialog with a 👆 pointing at "Allow".
8. **Account.** "Save your progress": Sign in with Apple / Google / Skip. Then "Enter referral code (optional)".
9. **Build-up.** "All done! Time to generate your custom plan!", then a loader "18% We're setting everything up for you · Customizing health plan…".
10. **Result.** "Congratulations your custom plan is ready!", "You should gain: Gain 6 kg by October 13", and four macro rings. CTA "Let's get started!".

**Paywall, variant A (single plan, onboarding):**
- Top: **"Restore" top-right. No X and no back arrow are visible.** This is a hard paywall at the end of onboarding.
- Headline: **"Unlock CalAI to reach your goals faster."**
- Hero: a real phone mockup of the app's home screen showing "1739 calories left" and a logged "Turkey Sandwich, 460 calories".
- "✓ **No Payment Due Now**".
- Black pill CTA **"Continue"**.
- Under it, small grey: **"Just $29.99 per year ($2.49/mo)"**.

**Paywall, variant B (Subscribing flow):**
- A back arrow (←) in a circle, top-left.
- Hero: a full-bleed photo of hands photographing a salad with a phone. The product action is the image.
- Headline: **"Start your 3-day FREE trial to continue"**.
- Plan cards:
  - Yearly card with a black header band **"3 DAYS FREE"**, pre-selected (✓): **"Start for free & save 75%"** · "$39.98 billed annually" · right side "$3.33/mo".
  - A greyed second card: "Monthly $14.98/mo".
- CTA **"Continue"**.
- Fine print: "3 days free, then $39.98 per year. Billed annually and renews automatically unless canceled in the App Store."
- Footer: "Terms · Privacy · Restore".
- After purchase: Apple's "You're all set" alert, then straight to the home screen.

**Notes:**
- "Save 75%" understates the real saving vs monthly, which is 77.8% (calc).
- US App Store IAP list: "Unlimited $29.99" (top seller), $19.99, $9.99, $5.99, $2.99, plus **"Streak Restore $0.99"**, a tiny consumable sold beside the subscription [V].
- **What to take:** the build-up ("your plan is ready") and the "No Payment Due Now" line.
- **What to leave:**
  - The hard paywall. It suits a utility with a daily habit, not a party camera that grows by sharing.
  - The fake permission dialog with a pointing finger. It nudges people toward "Allow" and is borderline.

### 2.2 Duolingo (Super; 4.72★, 5.6M US ratings) [V]
Mobbin: [Subscribing to Super Duolingo, 14 screens](https://mobbin.com/flows/027521bb-14de-477a-96ac-5279c66ee6fb) · [Subscribing to Super, 19 screens](https://mobbin.com/flows/c71bfa5f-4aab-488b-a2af-d5276353a736)

Five paywall screens in a row:
1. **Proof screen** on a purple gradient with the "SUPER" logo:
   - "Super learners are **4.2x** more likely to finish the French course!"
   - The owl mascot, then benefit rows: Unlimited energy / No ads / Unlimited speaking and listening practice / Free entry to timed challenges.
   - Blue button **"TRY FOR $0.00"**, text link **"NO THANKS"**.
2. **Scroll-down** of the same screen: "Cancel anytime, no penalties or fees".
3. **Comparison table:**
   - X top-left.
   - "Progress faster in your French course with Super!"
   - Two columns, FREE vs SUPER (the SUPER column is highlighted): Learning content ✓/✓, Unlimited energy –/✓, No ads –/✓, Unlimited practice –/✓, Unlimited Legendary –/✓.
   - CTA **"START MY FREE WEEK"**.
4. **Reminder choice:**
   - X top-left.
   - "When should we remind you before your trial ends?"
   - Owl ringing a bell. Two options: **"2 days before · Dec 14"** / **"3 days before · Dec 13"**.
   - "Easy to cancel, no penalties or fees". **"START MY FREE WEEK"**.
   - Once picked, the headline changes to **"We'll remind you 3 days before your trial ends"**.
5. **Plan screen:**
   - X top-left.
   - "Get started with a **7 day free trial** on Super".
   - Family Plan "12 mo • $119.99 · $9.99/MO".
   - **Individual, pre-selected, badge "MOST POPULAR"**: "12 mo • $95.99 · $7.99/MO". Another capture shows $83.99 / $6.99/MO, so the price is being tested.
   - "Cancel anytime in the App Store", **"START MY FREE WEEK"**, then a loading state "SETTING UP YOUR TRIAL…".
   - "VIEW ALL PLANS" opens a list where a monthly plan sits under a separate label: "3 DAY FREE TRIAL · Monthly $12.99/MO".
   - The full auto-renew legal text sits below.

**After purchase:**
- "Welcome to Super Duolingo!", then a 4-step onboarding into the benefits ("Enjoy continuous learning with **ad-free** lessons", "Target weak areas…").
- Then **"Your 7-day free trial has started! We'll remind you 2 days before it ends"**.

**What to take:**
- The user picks the reminder date. It makes the trial feel safe and costs nothing.
- The post-purchase tour of what was just unlocked.
- A shorter trial on monthly (3 days) than on annual (7 days). This matches Adapty: 3-day trials perform better on weekly plans, 7-day on monthly and annual [C].

### 2.3 Headspace (4.84★, 974K US ratings) [V]
Mobbin: [Onboarding with paywall, 21 screens](https://mobbin.com/flows/31b21791-dec6-448a-8253-648f5ebbba3e) · [Subscribing to premium, 10 screens](https://mobbin.com/flows/ccf14439-4c45-4d56-b031-45173490cafe)

1. **Goal question:** "What's on your mind? I want to…" with 6 options. Then "Let's create your meditation practice" with 2 feature rows.
2. **Paywall, "How your trial works":**
   - Orange sunrise illustration, **X top-right**.
   - A segmented control **Annual | Monthly**, with Annual selected.
   - Annual line: "First 14 days free, then $69.99 ($5.83/month)".
   - Vertical timeline with icons:
     - **Today:** "Unlock our library of meditations, sleep sounds, and more."
     - **In 12 days:** "We'll send you a reminder that your trial is ending soon."
     - **In 14 days:** "You'll be charged on September 1, **cancel anytime** before."
   - "Restore Purchase" link, blue CTA **"Start my free trial"**.
   - Monthly tab: "First 7 days free, then $12.99/month", with the timeline at 5 / 7 days.
3. **After purchase:**
   - Apple "You're all set", then **"Your 14 day trial has started · Get notifications about when your trial is about to end and more."**
   - A yellow bell, buttons **"Remind me" / "Maybe later"**.
   - "Remind me" triggers the iOS permission dialog.

**Notes:**
- Annual vs monthly is a 55% saving (calc), but **no "save" badge is shown at all**. The timeline does the selling.
- **What to take:** one plan visible at a time, the timeline as the main visual, and the date in the last step.
- Also: the trial length differs by plan (14 vs 7 days), and the reminder ask comes after purchase.

### 2.4 Calm (4.77★, 1.99M US ratings) [V]
Mobbin: [Onboarding, 10 screens](https://mobbin.com/flows/38549b00-2fe8-4fd1-914b-13c4905db245) · [Guest Pass](https://mobbin.com/flows/79c9fc1e-0d76-49cf-aad6-f58ae64f1057)

1. **"take a deep breath"** splash. Then "What brings you to Calm?" with 7 goals (Reduce Stress selected).
2. **Paywall (one screen that expands):**
   - **X top-left.** "Your plan is ready." Headline **"Unlock Calm for free"**.
   - Benefit rows: "Unlimited free access for 7 days" (highlighted yellow), "50,000+ minutes of audio…", "Soothing Sleep Stories narrated by familiar voices", "Exclusive music…", "Life-changing Calm Masterclasses…".
   - **One plan visible:** "Individual · Yearly · $91.98/yr. ($7.67/mo.) · Save 56%". A chevron "View More Plans ^" expands to:
     - **"7-Day Free Trial":** Individual / Family "$137.98/yr · Save up to 90%".
     - **"No Free Trial":** Monthly "$19.98/mo. · $239.76/yr".
   - CTA **"Try Free & Subscribe"**.
   - A **toggle "Remind me 2 days before renewal"**, with "Enable notifications in Settings to receive your reminder before renewal · Open Settings".
   - Fine print: "Totally free for 7 days, then $7.67/month, billed annually at $91.98/yr. Cancel anytime."
3. **Attribution survey:** "How did you hear about Calm?" (10 options, including "YouTube Influencer", "Podcast Ad", "Social media or online Ad"). Then account creation.
4. **Later, in-app:** "Gift a free 30-day Calm Guest Pass" (Continue → "Share Now"). A referral tool that gives a friend a longer trial.

**Notes:**
- I could not reproduce "Save 56%": $91.98 vs $19.98 × 12 = 62% off (calc). Pick a badge number you can defend.
- The monthly plan shows its yearly total ("$239.76/yr") to make annual look cheap.
- Calm's reminder toggle is not a trial toggle. It doesn't change the purchase, so it's not what Apple rejects.
- **What to take:** one plan with "View more plans", grouping plans under "7-Day Free Trial" vs "No Free Trial" labels (the toggle-free way to offer both), and the post-paywall "how did you hear about us" survey. That survey is free attribution data, useful when Digi spends on influencers.

### 2.5 Opal (screen time; 4.72★, 91.6K US ratings) [V]
Mobbin: [Subscribing to Opal, 9 screens](https://mobbin.com/flows/6e9b4d66-ac85-4659-831b-518b7e3a55e7) · [Variant, 2 screens](https://mobbin.com/flows/8b5b84fd-6168-4265-a74d-cc7d6c08c356)

**Variant A (timeline):**
- **"Restore" top-left, X in a circle top-right.**
- Headline **"Start your Free Week and gain 2+ hours back"**.
- A 4-step vertical timeline:
  - ✓ "Get your Focus Diagnosis · You successfully started your journey" (already done, which gives a sense of progress)
  - 🔒 "Today: Improve Your Focus · Block Apps automatically…"
  - 🔔 "Day 6: See first results · We'll send you a notification with a report…"
  - ★ "Day 7: Trial Ends · Your subscription will start on day 7. Cancel anytime within 24hrs"
- Press logos (TNW, TechCrunch, Bustle, Product Hunt), "★★★★★ 1,500+ Reviews", "Join 200k+ people using Opal".
- "Subscription can be shared with up to 5 family members." Then "Restore Purchases", "Terms & Privacy", **"Skip for now"**.
- **Sticky bottom card**, always visible while the content scrolls:
  - "Try Free For 1 week"
  - "**$99.99/year** ($8.33/month)"
  - "+ share with up to 5 family members"
  - Blue CTA **"Start Your Free Week"**
  - "✓ No payment due now!"
- Then the Apple sheet ("1-week free trial · Starting today · $99.99 per year · Starting Sep 8, 2024"), "You're all set", then a dark screen "Now, let's look at how Opal can help you focus better and find your flow today."

**Variant B (before/after):**
- Two bar charts: "Before Opal · Daily Average 6h 32m" vs "After Opal · 1h 49m".
- "Start Your Free Week And Gain **2+ Hours** Back". Three benefit rows: "Focus, uninterrupted.", "Own your time.", "Be fully present.".
- "★★★★★ 100,000+ Reviews · Join 8 Million+ people using Opal". CTA **"Reclaim My Time"**.

**Notes:**
- US App Store: Yearly $99.99 (top), Weekly $4.99 and $9.99, Monthly $19.99, Opal Pro $49.99 [V].
- **What to take:**
  - The sticky price card. The price and CTA never scroll away, so it is always clear what you pay.
  - A first timeline step that is already ticked.
  - A before/after hero: the outcome shown as a picture.
  - An outcome verb on the CTA ("Reclaim My Time").
- **What to leave:** "Join 8 Million+ people". Only use counts you can prove.

### 2.6 Speak (language; 4.83★, 67K US ratings) [V]
Mobbin: [Subscribing to Speak, 7 screens](https://mobbin.com/flows/25cdc4d8-e837-42c6-90f0-946ed7668239)

1. **Trigger** in the lesson list: card "Get Full Access · Get unlimited access to all of Speak lessons · **Get Premium**".
2. **Promise screen:**
   - A collage of tutor faces and phrases.
   - **"Speak 1,000 phrases in your first week"**, CTA **"Start my free week"**.
   - Below: a scrollable card "Build your speaking confidence" with a real lesson screen ("Enchanté!").
3. **Reminder screen:**
   - "Try the very best of Speak. First week's on us."
   - A big yellow bell with eyes. "**In 5 days, we'll remind you by email** that your trial is about to end."
   - "Your subscription starts Mar 12, cancel 24 hours before in the App Store." Then **Continue**.
4. **Plan screen** (back arrow top-left; an X appears top-right only after scrolling down):
   - "Join over **5 million** users who already learn with Speak!"
   - **Premium (✓ pre-selected):** "The language curriculum that gets you speaking from Day 1 · Billed $129.98 / year · $10.83 / month".
   - **Premium Plus, badge "BEST VALUE":** "The world's most powerful language tutor… · Billed $259.98 / year · $21.66 / month".
   - Laurel rating block: "★★★★★ 4.8 / 5 STARS · More than 140,000 reviews" plus the Apple logo.
   - "✓ No payment due now. Cancel anytime." CTA with a crown: **"Try for $0.00, then $129.98 per year"**. Then "View More Plans".
   - Further down: a review quote ("Speak has the best curriculum among all the language learning-related apps I've tried. Highly recommend." — App Store User from South Korea), then a Premium vs Premium+ comparison table.

**Notes:**
- US App Store: Annual Premium $83.99 and $109.99 (price test), Monthly $17.99/$21.99, Annual Premium Plus $164.99 [V].
- **What to take:**
  - The billed amount is **inside the CTA** ("Try for $0.00, then $129.98 per year"). Apple's prominence rule is met by the button itself.
  - Promise → reminder → plans in that order. A **"Best value" badge on the dearer plan** (a decoy) to make the default look sensible.
- **What to leave:** the X that only appears after scrolling. That is a hidden close.

### 2.7 Strava (4.81★, 382K US ratings) [V]
Mobbin: [Subscribing to Strava, 4 screens](https://mobbin.com/flows/035addee-8e1e-4dba-8e78-cafa433e2135) · [Subscription hub](https://mobbin.com/flows/7b65c8cc-d2be-493b-8294-4cf6441ba4b1)

1. **Paywall** (white, minimal):
   - Header "› Subscription", with **"Skip" as text top-right**.
   - Headline **"Try the very best of Strava. First month's on us."**
   - Orange vertical timeline:
     - **Today:** "Unlock subscription features including routes, segment leaderboards, advanced training analysis and more."
     - **In 28 days:** "Get a reminder about when your trial will end."
     - **In 30 days:** "You'll be charged the subscription amount. Cancel anytime before."
   - Bottom card: "**Free 30-Day Trial** · S$69.98/year (S$5.83/mo.) after trial".
   - Orange CTA **"Start free trial"**.
   - **"You won't be charged until Feb 6. Cancel anytime up to 24hrs before your trial ends."**
2. Apple sheet ("1-month free trial… S$69.98 per year · Starting on 30 Jan 2025"), then "You're all set".
3. **Subscriber hub**:
   - "Hi, Sam! You've been a subscriber since June 2026." [Manage Your Subscription]
   - Features grouped Explore / Train / Compete, then "Subscribers also get access to: Recover Athletics, Custom app icons".
   - In Settings: a bundle card "Strava + Runna, Up to 60% off · Start with a free 4-week trial. No excuses, just running."

**What to take:**
- One plan, one sentence of value, and a timeline.
- **"You won't be charged until [date]"** under the button. This is the single clearest honest line in the whole sample.
- A post-purchase hub that keeps reminding subscribers what they get. This lowers churn.

### 2.8 Rise (sleep; 4.73★, 74K US ratings) [V]
Mobbin: [Subscribing to Rise, 8 screens](https://mobbin.com/flows/bcb71a32-b32d-4f07-a310-85e6d1a4a43a)

1. **Personal result first:** "Tonight, **12:01a—1:01a** is the ideal time for your body to fall asleep and stay asleep." CTA "START TODAY".
2. **Two feature slides:** "Change your biology" and "Optimize today" (1 of 2, 2 of 2).
3. **Paywall, "Design your trial":**
   - "Recommended By" logos (The New York Times, TODAY, Harvard Business Review, ESPN).
   - "Join 1 million people taking control of their sleep & energy".
   - "TRY RISE FOR:" with a green pill **"STUDENTS SAVE 40%"**. Radio options: **Free · 7 days** (selected) / "~~$3.99~~ $2.49 · 1 month".
   - Toggle **"Remind me before my trial ends"** (on), "Cancel anytime with a tap", link **"Money Back Guarantee"**.
   - Footer: "FREE FOR 7 DAYS. THEN ~~$59.99~~ $35.99/YEAR · THAT'S JUST ~~$4.99~~ $2.99/MO."
   - CTA **"REDEEM 7 DAYS FREE"**.
   - **No X is visible on this frame, only "Help".**
4. **Guarantee sheet:** "Our Satisfaction Guarantee… We'll give you your money back if you are not completely satisfied within 30 days. Most RISE users feel a difference in just 5 days." CTA "I'M READY TO TRY!".
5. **After purchase, "Enjoy your trial!":**
   - **Today:** "Start using RISE · TIP: Check your melatonin window…"
   - **June 27:** "We'll send you a reminder that your trial is ending…"
   - **June 29:** "Trial ends and your card will be charged. Cancel anytime before."
   - Link "What if I forget to cancel?" and a confirmation chip **"✓ You'll be reminded June 27th"**.

**Notes:**
- US App Store: Sleep Improvement Membership $69.99 / $59.99 / $35.99 / $9.99, AI Expert Access $29.99 [V].
- **What to take:**
  - Show the personal result before the price.
  - A dated confirmation chip after purchase ("You'll be reminded June 27th").
  - A guarantee in a sheet, not in the headline.
- **What to leave:**
  - No visible close.
  - Struck-through "original" prices with no proof the old price was ever charged. US App Store data shows $59.99 and $35.99 both live, so a struck price may be real for some users, but Digi has no old price to strike.

### 2.9 Flo (period tracker; 4.74★, 2.0M US ratings) [V]
Mobbin: [Onboarding, 12 screens](https://mobbin.com/flows/d64dd348-5de3-40d0-8e2a-1fa781dad065) · [Account setup, 34 screens](https://mobbin.com/flows/541b7fd0-025b-417a-8d74-0185217879ff) · [Exit offer](https://mobbin.com/screens/3ec4a23a-08e5-4d22-a019-45ae61dd261c)

1. **Run-up:**
   - Health permissions, "Personalizing your experience…" 13% → 100%, an "ISO 27001 CERTIFIED" badge ("Know your data and privacy is our No.1 priority").
   - "When you Flo, you know": a **Without Flo / With Flo** two-column comparison.
2. **Commitment:** "**I, Jane, will use Flo to** improve my relationship with my period, know my body better and be ready for anything."
   - A big pink circle: "**Tap and hold on the Flo logo to commit.**" → "Keep holding!" → "Welcome to Flo!".
3. **Paywall:**
   - X top-left, Restore top-right. "Choose your plan".
   - Five gold stars and a single user quote: "A ladies best friend. Awesome and quite accurate! 👍👍👍" — 333honesty.
   - **Toggle "Not sure yet? Enable free trial."** (off by default).
   - Yearly Plan "MOST POPULAR" header, pre-selected: "12 mo • $59.99 · $5 / mo". Friends Plan "UP TO 5 FRIENDS · 12 mo • $79.99 · $6.67 / mo".
   - **Continue**, "View all plans".
4. **Exit offer:**
   - "Claim your gift before it's gone · Turn your free trial into **46% OFF FOREVER** · ~~SGD 64.98~~ SGD 34.98/year".
   - "Once you close your one-time offer, it's gone! · Only SGD 2.92/month. Cancel anytime." Continue. Confetti.

**Notes:**
- **The toggle in this capture is the pattern Apple now rejects.** Flo replaced it with a 14-day-trial plan option (RevenueCat update, Apr 23 2026) [V].
- **What to take:** the hold-to-commit gesture. Digi already has one: holding the shutter. The Friends plan is useful too: one buyer, five users.
- **What to leave:** "once you close… it's gone" pressure copy and the toggle.

### 2.10 Ladder (strength training) [V]
Mobbin: [Upgrading to Ladder Pro, 10 screens](https://mobbin.com/flows/14eb27d8-8dd9-4c38-b5bb-33402b95c412)

- **The paywall is a tab.** "Upgrade ⚡" sits in the tab bar with a badge "3". There is no X because it's a page, not a pop-up.
- Black background, neon yellow-green accent. Headline **"Get Results, Without Planning Workouts."**
- "★★★★★ 4.9 stars (over 25,000 reviews)". I couldn't check this: the iTunes API refused the lookup twice.
- Six ✓ benefit rows. **The last row changes with the plan:**
  - Annual → "**Unlimited** team changes per month".
  - Monthly → "**Two** team changes per month".
- Annual card, pre-selected, header **"BEST VALUE + ALL TEAM ACCESS"**: "12 mo • $249.98 · $20.83/mo". Monthly: "1 mo • $43.98 · $43.98/mo".
- "Cancel anytime in the App Store". CTA **"CONTINUE - SAVE 50%"** on annual, plain **"CONTINUE"** on monthly. "Restore Purchase".
- After purchase: confetti, **"IT'S OFFICIAL · Congrats! Your payment was successful. Welcome to the Ladder Team."** CONTINUE.

**What to take:**
- The **benefit list changes with the selected plan**, so the plan difference is concrete (for Digi: "60 AI digis every month" vs "30 every week").
- The CTA restates the saving: 52.6% by calc, so "save 50%" is honest.
- A celebratory success screen in brand colours.
- A permanent paywall tab works for apps people open daily, but it's too pushy for a camera.

### 2.11 Locket Gold (photo widget; 4.76★, 593K US ratings) [V]
Mobbin: [Subscribing to Locket Gold, 8 screens](https://mobbin.com/flows/775b5243-e2f1-42fa-a2af-cbee353c1dcd) · [Variant, 7 screens](https://mobbin.com/flows/37926f7d-b9fd-4627-91bb-a861c883e1e2)

The closest social-camera reference in this set. It's a soft, in-app, two-step paywall with no trial.

1. **Entry:** a gold-outlined pill **"Get Locket Gold"** top-left of the profile, or a card "Locket Gold · Unlock the best of Locket".
2. **Benefits page** (no prices):
   - Gold heart icon, **"Locket Gold · Members have so much more fun on Locket!"**
   - Rows with emoji icons: "Remove ads · Never see an ad in History!", "Video Lockets · Record short video clips!", "Locket views · See who's opened your Lockets", "Upload from camera roll", "Unlimited friends **[Early access!]**", "Widget frames", "Custom app icon", "Send longer captions".
   - "Plus so much more…": Early product updates · Monthly feature drops · Membership badge.
   - Sticky yellow CTA **"Upgrade your Locket 🔓"**, text link **"No thanks!"**.
3. **Plan sheet** slides up: "Subscribe to Locket Gold".
   - One variant: "Yearly · 12 mo • Cancel anytime · S$49.98/year" (selected) and "Monthly S$5.98/mo".
   - Another variant: Monthly only, "$5.98/mo · Cancel anytime!".
   - Yellow **"Subscribe"**.
4. **Success:** gold hearts rain over the sheet. **"Welcome to Gold! You now have access to all Locket Gold features. We're always adding more benefits, so check back soon."** Done. The profile pill changes to "View Locket Gold".

**Notes:**
- US App Store lists "Locket Gold" at $3.99, $36.00, $1.99, $2.99, $4.99 and $16.00. They all share one name, so I can't tell which is monthly and which is yearly [V].
- **What to take:**
  - Separating "what you get" from "what it costs". The price only appears after the person says yes to the benefits.
  - A one-word label ("Gold") that shows up on the profile afterwards: status as a benefit.
  - "Monthly feature drops" as a promise. Digi's version is seasonal looks.

### 2.12 Tinder Gold (4.20★, 1.76M US ratings) [V]
Mobbin: [Subscribing to Tinder Gold, 9 screens](https://mobbin.com/flows/45115a15-69ec-4d4b-9ee4-e4a9b9b1fc77)

1. **Tier carousel** "My Subscription":
   - Cards tinder+ / tinder GOLD / PLATINUM, then feature groups ("Upgrade Your Likes", "Enhance Your Experience", "Premium Discovery") with ✓ or 🔒 per tier.
   - CTA per tier ("GET TINDER PLUS®", "GET TINDER GOLD™").
2. **Plan screen:**
   - X top-left, gold gradient top.
   - "See Who Likes You and match with them instantly with Tinder Gold™."
   - "Select a plan": a horizontal carousel of cards.
     - **"Popular · 1 Week · $39.99/wk" (pre-selected, gold border, ✓)**
     - "1 Month · $19.74/wk · Save 51%"
     - "Best Value · 6 Months · $9.96/wk · Save 75%"
   - "Included with Tinder Gold™" checklist. Legal line, CTA **"Continue - $39.99 total"**.
3. **On scroll:** the plan carousel collapses into a **sticky mini bar** "1 Week · $39.99 total · [Continue]".
4. **Success:** "Welcome to Tinder Gold · Check out all of the premium features you have access to! · **Take me there** / Maybe Later".

**Notes:**
- Every plan is shown **per week**, so savings read at a glance. The saving maths checks out: 75.1% and 50.6% (calc).
- The **total charged is in the CTA** ("$39.99 total").
- The $39.99 weekly price is probably a non-US storefront or a test (unknown).
- **What to take:** the total price in the button and the sticky mini bar on scroll.
- **What to leave:** weekly pre-selected at a high price. It suits a "right now" dating need and creates the refund and "charged me" reviews Digi must avoid (chapter 06).

### 2.13 Bumble Premium (4.32★, 1.77M US ratings) [V]
Mobbin: [Subscribing to Bumble Premium, 6 screens](https://mobbin.com/flows/678596ab-aca0-4d4d-be11-4cc346ca6615) · [Pay plan](https://mobbin.com/flows/8b21909e-9125-4d52-9160-f319bf5bde63)

- **X top-left**, tabs "Boost | **Premium**", ⓘ top-right.
- Hero: three **blurred faces** of people who liked you. **"See who likes you · Unlock Beeline to see who already swiped right"**, with carousel dots.
- Horizontal plan cards. The **middle card is pre-selected and yellow**: "1 week · $29.99". Left: "MOST POPULAR · 1 month · $14.00/wk · SAVE 53%". Right: "3 months · $9.33/wk · SAVE 68%".
- "Recurring billing. Cancel anytime." plus legal text. Black CTA **"Get 1 week for $29.99"**.
- Profile page: a "Pay plan" tab with a Premium+ vs Premium comparison table (14 rows).

**Notes:**
- The "Most popular" badge sits on a plan that is **not** pre-selected. That's a quiet nudge toward the middle option.
- The blurred-likes hero is "show the locked thing", the most persuasive visual in the sample.
- **For Digi:** a blurred preview of the **developing roll**, or of the AI strip, behind the paywall.

### 2.14 Spotify Premium (4.77★, 43.2M US ratings) [V]
Mobbin: [Subscribing to Spotify Premium, 5 screens](https://mobbin.com/flows/57c32d62-ff05-44c6-b9ff-20a7ab3f2b77) · [Premium hub](https://mobbin.com/flows/dc83e1b2-7fe5-4e73-aa08-cc9c2b041e58)

- **A Premium tab** in the tab bar (no pop-up).
- Graphic header, **"$0 for 4 months of Premium Individual"**, a chip "🔔 Limited time offer".
- White pill **"Try 4 months for US$0 ↗"**. The ↗ icon marks a web link-out.
- Small print: "By clicking this button, you'll be taken to our website. Premium Individual only. Free for 4 months, then $11.99 per month after. Offer only available if you haven't tried Premium before. Terms apply. **Offer ends December 31, 2025.**"
- "Why join Premium?" with 6 rows. "Available plans" cards: "US$0 for 4 months · Individual · US$11.99/month after…".
- Subscriber view: "Trial · Premium Individual · Trial expires on 10/4/26 · Manage", plus "Snapshot of your benefits".

**What to take:**
- "Limited time" is fine **when it has a real end date in the fine print**.
- The US web link-out is now live in a top app. It confirms chapter 06's note that external purchase links work in the US.
- **What to leave:** web checkout for Digi in the contest window. Superwall measured up to a 37% drop in initial conversion (chapter 06).

### 2.15 Short notes on 12 more paywalls [V]

| App (Mobbin link) | What's on it | Copy or avoid |
|---|---|---|
| [Alma](https://mobbin.com/flows/afe2cc2a-7672-43f7-b75c-15c1ff369a52) | X top-right. "Get the full Alma experience · Try free for 7 days. Cancel anytime. · 4.9 stars ★★★★★ 500+ reviews". 5 ✓ rows. **Side-by-side cards**: Yearly "17% OFF · $12.49/mo · Billed at S$149.98/yr after free trial" (✓) vs Monthly. CTA "Get started for free". Footer Restore · Terms · Privacy · **Redeem** | Copy the side-by-side 2-card layout and the "Redeem" link (offer codes) |
| [Headway](https://mobbin.com/screens/d064ab69-70bc-476a-aad6-0d80fe753746) | X top-left. "#1 most downloaded book summary app". **One price line: "3 days free, then S$129.98/year · Only $2.49/week"** (the weekly figure smaller and grey). "Start free trial", "View other plans", "🛡 Secured with App Store" | Copy the per-week figure **under** the billed amount |
| [TIDE](https://mobbin.com/screens/4946c946-896e-433d-a459-e031e0e011b6) | X top-right. "A Mindful Life Start Here." Laurels "App Store App of the Year" and "5 STARS 165K+". Timeline: Today / In 5 days reminder / **"In 7 days: You'll be charged on 02/15"**. Bottom: "Try 7 days free, then $54.99/year, Cancel anytime" · Continue | Copy the dated timeline |
| [Bevel](https://mobbin.com/screens/87ac5af9-7c7a-46b8-8a82-ad8c90bf574c) | X top-left. Icon benefit list, "also includes" divider. Two cards: Yearly "Save 37% · S$149.98/yr · $12.50/mo equivalent" ✓, Monthly S$19.98/mo. CTA "Start Free for 7 days" | The badge maths checks out (37.4%, calc) |
| [Lovi](https://mobbin.com/screens/b19ae89c-7af8-4485-b23a-2188aaf0522d) | **Before/after face photos** as the hero, X top-right. "Unlock Lóvi Premium". Toggle "Enable Free Trial" (off), Weekly $7.99 ✓ pre-selected, Yearly "BEST OFFER" $49.99. "I have a promo code · Restore" | Copy the before/after hero. **Avoid the toggle** (rejected) and weekly pre-selected |
| [Beside](https://mobbin.com/screens/aacc9503-be4e-481d-b6e4-df0dba561324) | X top-left. "Free trial enabled ✓ · No commitment, cancel anytime". **"Due today: $0.00 · 7 days free"**. Yearly "45% DISCOUNT · $199.99/year · then $3.85/week"; Monthly $29.99 · then $6.92/week. "Start my free week" | Copy "Due today: $0.00". Avoid the trial switch |
| [Feeld](https://mobbin.com/flows/4f3d84f2-dcce-4dae-b626-64766e96237a) | "Special offer · Become Majestic". Three plans with intro prices: "19% off · 30 days · S$18.48 for 30 days, then S$22.98". **A big grey "Skip" button** the same size as the CTA. Success: "You're MAJESTIC" | Copy the equal-size Skip. That's honest dismissal |
| [Snapchat Lens+](https://mobbin.com/screens/88799770-402d-43a7-8c14-fac6a558b5dd) | **In-context**: a bottom sheet over the live camera with the locked lens on your face. "Unlock this Lens with Lens+ · Access to thousands of the best lenses…". One row: "Lens+ ~~$8.99/mo~~ $5.99/mo [Try Now]". "Learn More" | Copy the in-camera sheet for locked looks. Skip the strike-through |
| [Universe](https://mobbin.com/screens/09f4e9c1-42ff-4c48-86eb-dea51f99e7c0) | "Try before you buy · Create your first five images for free and upgrade to generate more." [Generate Image] | Same model as Digi's 3 free digis. State the number up front |
| [Halide](https://mobbin.com/screens/78cb0805-dcc9-4a2e-bfa1-b2ba2b40ac63) | Dark grid of feature tiles around the app icon: "See what makes Halide the best camera app on iPhone & iPad". "Try Halide for free" / "View all options" | Good camera-app tone. One button, details behind a link |
| [The Outsiders](https://mobbin.com/screens/65112b07-4e73-4a48-a3f5-0a83e895108e) | Laurels "Made by Apple Design Award & App of the Year Winning Team". Monthly / **Annual "BEST OFFER" (pre-selected)** / Lifetime S$99.98. "Start 1 week Free Trial · Cancel Anytime" | 3-across cards with a centre default |
| [Brilliant](https://mobbin.com/screens/4769fa19-5abe-4bd9-8b9e-e1260ace9d56) | "Unlock Premium with a 7 day free trial". MOST POPULAR Individual vs Family "6 seats included". "You won't be charged until after your free trial ends." Loading state "Completing purchase…" | Copy the in-place loading copy |

**Exit and win-back offers seen** ([Blinkist](https://mobbin.com/screens/0ee44212-8ee5-4d4b-9c04-c44cff089393), [Givingli](https://mobbin.com/screens/deb16f8f-5fff-4edb-9f72-374f872e761d), [Beside](https://mobbin.com/screens/6beb136d-47f6-4ded-bc0e-c9e4a6bc4ed0), [BitePal](https://mobbin.com/screens/6a2d89ef-cd39-44c1-87d8-19f7a2b8631d), [Flo](https://mobbin.com/screens/3ec4a23a-08e5-4d22-a019-45ae61dd261c)):
- **Blinkist (in the cancel flow):** "Would a discount help? 40% OFF · Your price $119.98/YEAR · ~~Original price $199.98/year~~ · Only $10.00/month". Then **"Claim my discount" / "Continue to cancel"**. This is the honest version: shown when the user is cancelling, with a clear way out.
- **Givingli:** "ONE-TIME OFFER · 50% Off Premium for 1 Year… This 50% offer expires when you leave this page."
- **Beside:** "33% OFF FOREVER… ⚠ This offer won't be there once you close it · LOWEST PRICE EVER".
- **BitePal:** "Limited time -60% offer" with a red **"Offer expire in: 59:51" countdown**.
- The last three are the fake-urgency patterns Digi must not use.

---

## 3. Side-by-side matrix (14 core apps)

| App | Where shown | Plans visible first | Default | Trial | Reminder / timeline | Close in frame | Social proof | CTA copy | Price framing |
|---|---|---|---|---|---|---|---|---|---|
| Cal AI | End of onboarding | 1 (A) / 2 (B) | Annual | 3 days | No | **None (A)**; back arrow (B) | Rating screen before paywall | "Continue" | $/mo under annual |
| Duolingo | In-app, 5 steps | 2 + "View all plans" | Annual Individual, "Most popular" | 7 days (3 on monthly) | **User picks the date** | X | "4.2x more likely to finish" | "Start my free week" / "Try for $0.00" | $/mo + annual total |
| Headspace | End of onboarding | 1 (Annual/Monthly tabs) | Annual | 14 / 7 days | **Timeline + post-buy "Remind me"** | X | None | "Start my free trial" | $/mo |
| Calm | End of onboarding | 1 + "View More Plans" | Annual | 7 days | Toggle "Remind me 2 days before" | X | None | "Try Free & Subscribe" | $/mo, Save % |
| Opal | End of onboarding | 1 | Annual | 7 days | **4-step timeline** | X + "Skip for now" | Press, 1,500+ reviews, 200k+ people | "Start Your Free Week" | $/mo |
| Speak | In-app, 3 steps | 2 + "View More Plans" | Annual Premium | 7 days | **Email reminder screen** | Back arrow (X after scroll) | 4.8/5, 140k reviews, 5M users | "Try for $0.00, then $129.98 per year" | $/mo |
| Strava | Onboarding | 1 | Annual | 30 days | **Timeline + "won't be charged until Feb 6"** | "Skip" | None | "Start free trial" | $/mo |
| Rise | End of onboarding | 2 (trial choice) | 7-day free | 7 days | Toggle + **dated post-buy timeline** | **None (Help only)** | Press logos, 1M people | "Redeem 7 days free" | Struck prices, $/mo |
| Flo | End of onboarding | 2 + "View all plans" | Annual, "Most popular" | Toggle (now rejected) | No | X | 1 review quote | "Continue" | $/mo |
| Ladder | Tab | 2 | Annual, "Best value" | None | No | n/a (tab) | 4.9★, 25k reviews | "Continue - Save 50%" | $/mo |
| Locket | In-app, 2 steps | 2 in a sheet | Annual | None | No | "No thanks!" | None | "Upgrade your Locket" → "Subscribe" | Total only |
| Tinder | In-app | 3 carousel | **1 week** | None | No | X | None | "Continue - $39.99 total" | **$/wk all plans**, Save % |
| Bumble | In-app | 3 cards | **1 week** | None | No | X | Blurred likers | "Get 1 week for $29.99" | $/wk, Save % |
| Spotify | Tab | 1 offer | Intro offer | 4 months $0 (web) | Expiry date shown | n/a (tab) | None | "Try 4 months for US$0 ↗" | Intro then $/mo |

**Counts (n = 14):**
- Annual (or annual-type) default: **11**. Weekly default: **2** (dating). Intro offer: **1** (Spotify).
- Free trial offered: **10**. No trial: 4 (Ladder, Locket, Tinder, Bumble).
- A reminder promise in any form: **7**. A drawn timeline on the paywall: **3** (Headspace, Opal, Strava).
- Social proof on or just before the paywall: **6**. Press logos: 2. Exact review counts: 4.
- Annual shown as a per-month figure: **10**. Per-week: **2** (Tinder, Bumble).
- **A visible way out in the captured frame: 12 of 14.** The exceptions are Cal AI variant A and Rise.
- Paywall split over 2 or more screens: **5** (Duolingo, Speak, Locket, Calm's expander, Tinder's tier carousel).

---

## 4. Published A/B results (what was actually measured)

Most paywall "results" online are vendor marketing with no sample size. I kept only results with a named app or a stated dataset, and labelled confidence.

| # | Test | Result | Source, date | Confidence |
|---|---|---|---|---|
| 1 | **Remove the close button** (BoldVoice) | Trial starts up; **refunds up more**. Dropped | RevenueCat Sub Club, Sep 17 2026 | High (direct quote, no %) |
| 2 | **Trap the close** (X leads to a discount screen with no close) | Same: starts up, refunds "spiked by way more". Dropped | Same | High (qualitative) |
| 3 | **Trial toggle** on iOS | Rejected by Apple under 3.1.2 since mid-Jan 2026 | RevenueCat, Feb 9 2026 (upd. Apr 23 2026) | High (rejection text quoted) |
| 4 | Toggle vs Blinkist-style timeline (Fits) | Toggle won ARPU by 19%. But the **lift came mostly from showing the yearly price per month, a "Most Popular" badge and a bigger annual card**, not from the toggle | RevenueCat, Feb 2026 | Med |
| 5 | Blinkist honest paywall (timeline + reminder) | +23% conversion, −55% complaints | RevenueCat interview, Jun 12 2025 (second-hand) | Med-low |
| 6 | Blinkist notification opt-in after the timeline | 6% → 74% | b2bpricinginsights Substack | Low |
| 7 | Opt-in trial vs trial included by default (Linearity Curve) | Fewer trial starts, **+10% trial→paid** | Superwall case study, Mar 17 2026 | Med (vendor) |
| 8 | Paid trial extension (Ahead) | +7% conversion to trial | Superwall case study | Med-low |
| 9 | **Transaction-abandon offer** (18 apps, 438K control vs 87K variant users) | 17% of revenue; refunds 3.3% vs 6.8%; ~20% of paywalled users see it; "a few apps… received scrutiny from Apple" | Superwall, Aug 6 2024 | Med. The page's own maths is off: 5,128/87,403 = 5.9%, not the 6.3% printed |
| 10 | Yearly as the only default, monthly behind "view all plans" (Mojo) | +15–20% yearly take-up, small rise in cancellations | RevenueCat, Sep 15 2023 | Med |
| 11 | Yearly shown as $/month vs yearly total (Mojo) | "Significant" lift in revenue per impression, most in lower-income countries | Same | Med (no %) |
| 12 | Paywall moved before onboarding, with a demo video (FitnessAI) | Paywall views +50%, install→trial 2×, trial→paid flat | Same | Med |
| 13 | Paywall earlier + 3-screen carousel before it | Trial opt-in 2% → 8% → 15% | RevenueCat (Rosie Hoggmascall), Jun 12 2025 | Med-low |
| 14 | "Most popular" badge vs highlighting the cheapest plan | Badge tested better (no %) | Same | Low |
| 15 | Trial explainer on the paywall | ARPU +12–36% | Adapty State of Paywalls 2026 (Oct 2025–Sep 2026 data) | Med |
| 16 | Annual-first layout | ARPU +25–40% in winning tests | Same | Med |
| 17 | Personalized onboarding | ARPU +13–35% | Same | Med |
| 18 | More products on the paywall | Won only 53% of tests | Same | Med |
| 19 | Discount depth | ≤30% off keeps 90% of 6-month revenue; 31–60% keeps 70%; >60% keeps 46%. Typical second-chance discount: 38% | Same | Med-high |
| 20 | 7-day → 3-day trial | Trial→paid +12–18% | Adapty playbook, Feb 12 2026 | Low (no sample) |
| 21 | Weekly $7.99 → $9.99 | Conversion −5–8%, ARPU +18–22% | Same | Low |
| 22 | Video background vs static | +8–15% conversion | Same | Low |
| 23 | Delayed X / X after scroll | +5–7% trial conversion | Uncited third-party writeup | Very low. Ignore |

**Benchmarks that frame these results:**
- Onboarding paywalls convert 0.85% of views vs 0.23% for later ones, and earn $170 vs $40 per 1,000 views [C].
- 60% of buyers buy on the first view; Photo & Video only 44% [C].
- 44% of trials are cancelled within 24 hours (US 40%), 32% within the first hour [C].
- 22% of apps delay the close by 3–5 s; 11% use no close at all [C].
- 27% of paywalls show social proof [C].
- 56% of CTAs lead with the trial, 23% say "Continue", 9% say "Subscribe" [C].
- Source for all of these: Adapty State of Paywalls 2026, 78,000+ paywalls from 30,000+ apps.

**What the evidence says, plainly:**
1. **Pricing and plan layout move revenue far more than visuals** (tests 4, 10, 11, 16, 21).
2. **Honest trust elements help or are neutral** (5, 7, 15). Trapping people raises refunds (1, 2).
3. **Recovery offers work, but the instant version is now an App Review risk** (3, 9).
4. **Nothing published is from a party-camera or photo app.** Read every number here as direction, not a forecast for Digi.

---

## 5. Patterns that repeat, ranked

The rank combines how often the pattern appears in the sample (n = 14) with the strength of the outside evidence.

| Rank | Pattern | Seen in | Evidence | Digi |
|---|---|---|---|---|
| 1 | Annual pre-selected, one other plan visible, more behind "View all plans" | 11/14 | Adapty +25–40% ARPU; Mojo +15–20% | **Copy** |
| 2 | Show the outcome or the locked thing as the hero (macro rings, before/after, blurred likers, lens on your face) | 8/14 + Lovi, Snapchat | Adapty: image use is common; Opal B; Bumble | **Copy: the user's own digi, before/after** |
| 3 | Trial with a reminder promise, and **real dates** | 7/14 | Blinkist +23% (med-low); Adapty explainer +12–36% | **Copy, dated** |
| 4 | A run-up screen right before the price ("your plan is ready", carousel, commit) | 6/14 | 2%→8%→15% (med-low); FitnessAI 2× | **Copy: the first developed digi is the run-up** |
| 5 | Billed amount stated in or next to the CTA ("Try for $0.00, then $129.98 per year", "Continue - $39.99 total") | 5/14 | Apple prominence rule | **Copy** |
| 6 | Annual shown as a per-month figure, small, under the total | 10/14 | Mojo; Fits | **Adapt: per-week for Digi (vs a weekly plan), small and grey** |
| 7 | Post-purchase screen: celebrate, tour benefits, ask for reminder permission | 6/14 | Blinkist opt-in (low) | **Copy** |
| 8 | Social proof with exact counts or press | 6/14 | 27% of paywalls overall | **Later. Only real numbers. Nothing at launch** |
| 9 | Sticky price card or mini bar while content scrolls | 3/14 (Opal, Tinder, Ladder) | None published | **Copy** |
| 10 | Plan-dependent benefit line | 1/14 (Ladder) | None published | **Copy: allowance per plan** |
| 11 | Two-step: benefits first, price sheet second | 3/14 (Locket, Duolingo, Speak) | None published | **Copy for in-app triggers** |
| 12 | User picks the reminder date | 1/14 (Duolingo) | None published | **Skip for a 3-day trial. Just show the date** |
| 13 | "Most popular" badge | 4/14 | Rosie (low); Fits | **Not until real data says so. Use "Best value"** |
| 14 | Weekly pre-selected with $/wk on every plan | 2/14 | Adapty: 90% then buy weekly | **Avoid in the contest window** |
| 15 | Hard paywall with no visible way out | 2/14 | BoldVoice refunds | **Avoid** |
| 16 | Trial on/off toggle | 1/14 + Lovi, Beside | Apple rejections | **Avoid** |
| 17 | Struck "original" prices, "once you close it's gone", countdowns | Rise, Flo, Givingli, Beside, BitePal | Apple 3.1.2(a) bait-and-switch | **Avoid** |
| 18 | X that appears only after scrolling or after a delay | Speak; 22% of apps | Only an uncited +5–7% | **Avoid** |

---

## 6. Digi's paywall set, screen by screen

This set builds on the money-screen copy in `bible/06` §10 and the layout in `digi-deep/06` §3.7. It changes what this chapter's evidence says to change.

**Tokens:**
- Dark background.
- Pink CTA as in the existing mockup, with the orange date-stamp colour as the accent.
- Large serif headline.
- 44 pt hit areas.
- Every price comes from RevenueCat Offerings in local currency, never hard-coded.

### D0 · The run-up (no prices yet)
- The first AI re-light develops in front of the user: hold the shutter, the date stamp burns in, then a short flash animation. This is Digi's version of Flo's "hold to commit" and Rise's "Tonight, 12:01a…". The value comes before the ask.
- Result screen: **"Your first digi"**, with [Save] [Share to Story] and a small grey counter "2 free digis left".
- The paywall sheet rises **after** Save or Share, or when they tap "Try another look". Not before.

### D1 · Main paywall, trial period (launch → Dec 12)
Top to bottom:
1. **✕ top-left**, visible from the first frame, 44 pt, white at 70%. **"Restore" top-right.**
2. **Hero, about 40% of the height:** the user's own photo, before (on-device digicam look) and after (AI re-light), with a drag divider. Fallback: three real sample strips. Caption, 13 pt: "That's yours. Plus keeps the flash going."
3. **Headline (serif):** **"Keep the flash going"**
4. **Three benefit rows. Row 1 changes with the plan (Ladder pattern):**
   - Yearly selected: "**60 AI digis every month**". Weekly selected: "**30 AI digis every week**".
   - "Every look, plus new holiday drops"
   - "No watermark · Rolls up to 30 friends"
5. **Two plan cards, stacked:**
   - **Yearly, pre-selected.** Small pill "BEST VALUE". **"$39.99 / year"** is the largest price on screen. Second line, smaller and grey: "3 days free · $0.77 a week".
   - **Weekly.** "**$6.99 / week**". Second line: "Cancel anytime".
   - No "Most popular" badge. No "Save 89%": it is true, but it compares against a weekly plan almost nobody keeps for 52 weeks, and "Best value" reads more honest.
6. **Dated timeline** (only while Yearly is selected; dates computed on the device):
   - **Today:** "Every AI look unlocked. 10 digis to play with."
   - **Nov 26:** "We remind you."
   - **Nov 27:** "$39.99 for the year, unless you cancel before."
7. **Sticky bottom card** (Opal), always visible:
   - Yearly: line "No payment today", CTA **"Start my 3 free days"**, line under it: **"Then $39.99/year. You won't be charged until Nov 27. Cancel anytime in Settings."**
   - Weekly: CTA **"Get Weekly · $6.99"**, line "Renews weekly. Cancel anytime in Settings."
8. **Text link:** **"Just tonight? Party Pack · 25 digis · $5.99 →"**
9. **Footer:** Terms · Privacy · Redeem code.

**States:**
- Products loading → skeleton cards.
- Purchasing → "Talking to Apple…" in the button (Brilliant's "Completing purchase…").
- Cancelled → silent return, no guilt copy.
- Other states as in `digi-deep/06` §3.7.

### D2 · Trial started (right after Apple's sheet)
- Flash burst animation. Locket's gold hearts and Ladder's confetti are the references.
- **"You're in. 3 free days start now."**
- **"We'll remind you on Nov 26, the day before you're charged."**
- Buttons: **"Turn on the reminder"** (this triggers the iOS notification permission) / "Not now".
- If they choose "Not now": a chip "OK, we'll show a banner in Digi on Nov 26." Then always schedule both the local notification (if allowed) and the in-app banner.
- CTA **"Back to the party"**.

### D3 · Reminder (Nov 26, local notification and in-app banner)
- Notification: **"Heads up: Digi Plus becomes $39.99/year tomorrow (Nov 27). Keep it, or cancel in 2 taps."**
- Tapping it opens a sheet with [Keep Plus] and [Manage subscription]. The second button opens Apple's own manage-subscription screen.

### D4 · Locked look, in the camera (Snapchat Lens+ pattern)
- A bottom sheet over the live viewfinder with the look's sample on screen.
- "**This look is Plus**". One row: "Digi Plus · 3 days free, then $39.99/year [Try free]".
- Link: "or Party Pack · $5.99".
- Swipe down to close.

### D5 · Out of free digis (Party Pack first; copy from `bible/06` §10)
- "You're out of free digis".
- Party Pack card: "25 AI digis · $5.99 · pay once, no subscription". Big Night card: "60 AI digis · $11.99".
- Link: "Or get Plus: 60 digis every month".
- Two-step, Locket style: this sheet shows the benefits, and the price is on the card buttons.

### D6 · After a close (no instant offer)
- Closing D1 returns the user to the camera. Nothing pops up.
- **Launch week only (Nov 24–Dec 1), at the next app open:** a one-time card "**Launch week: first year $29.99 (then $39.99) · ends Dec 1**" [Get it] [✕].
  - No timer.
  - Shown once per device.
  - This is Apple's pay-up-front intro offer, so the price is real.

### D7 · From Dec 13 (no trial; RevenueCat Offering switch, no app update)
- The timeline is hidden.
- Yearly card: "**$39.99 / year**", second line "$0.77 a week".
- CTA **"Get Yearly · $39.99"**. Line: "Pay once a year. Holiday looks all year. Cancel anytime in Settings."
- Weekly CTA unchanged.

### D8 · Plus hub (Strava pattern)
- In Settings: "Digi Plus since Nov 22".
- "**43 digis left this month · refills Dec 1**", [Manage subscription], then "What you get" rows.
- This doubles as the honest counter that chapters 03 and 06 asked for.

---

## What this means for Digi

1. **Build D1 exactly as in §6.** Two subscription cards plus a Party Pack link. Yearly pre-selected. **$39.99 as the biggest price on screen.** "$0.77 a week" small and grey. ✕ and Restore visible from the first frame.
2. **Replace the relative timeline with real dates.** Compute "Nov 26 / Nov 27" on the device from the trial start, and put **"You won't be charged until [date]"** under the CTA. This is Strava's line, and it costs nothing.
3. **Move the notification permission ask to D2 (after the trial starts).** Use the button "Turn on the reminder". Always schedule an in-app banner too, so people who refuse notifications still get warned. Log the opt-in rate.
4. **Never ship a trial toggle, a delayed or after-scroll ✕, a timer, "once you close it's gone", or a struck-through "original" price.** Add these to the App Review checklist in chapter 07. Apple rejects toggles under 3.1.2, and BoldVoice showed that trapping people costs more in refunds than it gains.
5. **No instant decline or transaction-abandon offer.** Run the launch-week $29.99 offer only at the next app open, Nov 24–Dec 1, once per device, with the real end date.
6. **Make the hero the user's own before/after.** Fall back to three real strips. Never use stock photos. This is the "show the outcome" pattern (Opal, Lovi, Bumble, Snapchat Lens+).
7. **Make the first benefit row follow the selected plan** ("60 AI digis every month" vs "30 AI digis every week"). This shows the allowance difference without a comparison table.
8. **Use a two-step layout for in-app triggers** (locked look, out of digis): first the sheet with what you get, then the price on the button. Use Snapchat's in-camera bottom sheet for locked looks.
9. **Add a one-question attribution survey after the first purchase or close** (Calm): "How did you find Digi?" with TikTok · Instagram · Snapchat · a friend's roll · App Store · Other. It is free attribution data for an owner who runs ads and influencers himself.
10. **Social proof only when it's real.** At launch, show none. From about 1,000 ratings, add "4.x★ on the App Store" with the real count. Never show "Join X million". Never use "Most popular" until RevenueCat data shows which plan really sells the most.
11. **Use US .99 prices.** Ignore the .98 prices on Mobbin; they are Singapore storefront prices. Check every storefront in App Store Connect against `bible/06` §5.
12. **Judge every paywall test on net revenue after refunds, per user who saw the paywall, after the trial and refund window closes** (about 3 weeks). That is the BoldVoice rule. Inside the contest, run only the annual-price test from chapter 06. Decide nothing on trial-start counts.
13. **Copy the post-purchase moments:**
    - A celebration in brand colours (flash burst).
    - "You're in" with the reminder date.
    - A Plus hub in Settings with the digis-left counter and refill date (D8).
    - These lower "charged me" refunds, the top complaint in chapter 06's review scrape.

---

## Sources

**Mobbin (viewed Nov 17, 2026; full screens downloaded and read)**
- Cal AI: https://mobbin.com/flows/579da5dd-453a-4e7c-9c11-d20708a4db82 · https://mobbin.com/flows/6cadd7c7-6d96-4098-8e72-a64d45e637f2 · https://mobbin.com/screens/e145982d-dec3-4809-9325-816c72f9db32
- Duolingo: https://mobbin.com/flows/027521bb-14de-477a-96ac-5279c66ee6fb · https://mobbin.com/flows/c71bfa5f-4aab-488b-a2af-d5276353a736
- Headspace: https://mobbin.com/flows/31b21791-dec6-448a-8253-648f5ebbba3e · https://mobbin.com/flows/ccf14439-4c45-4d56-b031-45173490cafe
- Calm: https://mobbin.com/flows/38549b00-2fe8-4fd1-914b-13c4905db245 · https://mobbin.com/flows/79c9fc1e-0d76-49cf-aad6-f58ae64f1057
- Opal: https://mobbin.com/flows/6e9b4d66-ac85-4659-831b-518b7e3a55e7 · https://mobbin.com/flows/8b5b84fd-6168-4265-a74d-cc7d6c08c356
- Speak: https://mobbin.com/flows/25cdc4d8-e837-42c6-90f0-946ed7668239
- Strava: https://mobbin.com/flows/035addee-8e1e-4dba-8e78-cafa433e2135 · https://mobbin.com/flows/7b65c8cc-d2be-493b-8294-4cf6441ba4b1
- Rise: https://mobbin.com/flows/bcb71a32-b32d-4f07-a310-85e6d1a4a43a
- Flo: https://mobbin.com/flows/d64dd348-5de3-40d0-8e2a-1fa781dad065 · https://mobbin.com/flows/541b7fd0-025b-417a-8d74-0185217879ff · https://mobbin.com/screens/3ec4a23a-08e5-4d22-a019-45ae61dd261c
- Ladder: https://mobbin.com/flows/14eb27d8-8dd9-4c38-b5bb-33402b95c412
- Locket: https://mobbin.com/flows/775b5243-e2f1-42fa-a2af-cbee353c1dcd · https://mobbin.com/flows/37926f7d-b9fd-4627-91bb-a861c883e1e2
- Tinder: https://mobbin.com/flows/45115a15-69ec-4d4b-9ee4-e4a9b9b1fc77
- Bumble: https://mobbin.com/flows/678596ab-aca0-4d4d-be11-4cc346ca6615 · https://mobbin.com/flows/8b21909e-9125-4d52-9160-f319bf5bde63
- Spotify: https://mobbin.com/flows/57c32d62-ff05-44c6-b9ff-20a7ab3f2b77 · https://mobbin.com/flows/dc83e1b2-7fe5-4e73-aa08-cc9c2b041e58
- Others: Alma https://mobbin.com/flows/afe2cc2a-7672-43f7-b75c-15c1ff369a52 · Feeld https://mobbin.com/flows/4f3d84f2-dcce-4dae-b626-64766e96237a · Headway https://mobbin.com/screens/d064ab69-70bc-476a-aad6-0d80fe753746 · TIDE https://mobbin.com/screens/4946c946-896e-433d-a459-e031e0e011b6 · Bevel https://mobbin.com/screens/87ac5af9-7c7a-46b8-8a82-ad8c90bf574c · Lovi https://mobbin.com/screens/b19ae89c-7af8-4485-b23a-2188aaf0522d · Beside https://mobbin.com/screens/aacc9503-be4e-481d-b6e4-df0dba561324 and https://mobbin.com/screens/6beb136d-47f6-4ded-bc0e-c9e4a6bc4ed0 · Snapchat Lens+ https://mobbin.com/screens/88799770-402d-43a7-8c14-fac6a558b5dd · Universe https://mobbin.com/screens/09f4e9c1-42ff-4c48-86eb-dea51f99e7c0 · Halide https://mobbin.com/screens/78cb0805-dcc9-4a2e-bfa1-b2ba2b40ac63 · The Outsiders https://mobbin.com/screens/65112b07-4e73-4a48-a3f5-0a83e895108e · Brilliant https://mobbin.com/screens/4769fa19-5abe-4bd9-8b9e-e1260ace9d56 · Blinkist https://mobbin.com/screens/0ee44212-8ee5-4d4b-9c04-c44cff089393 and https://mobbin.com/flows/e1955af2-75c9-4a0b-ab51-ab1510e4c549 · Givingli https://mobbin.com/screens/deb16f8f-5fff-4edb-9f72-374f872e761d · BitePal https://mobbin.com/screens/6a2d89ef-cd39-44c1-87d8-19f7a2b8631d

**App Store data (pulled Nov 17, 2026)**
- iTunes Search API, US: ratings and counts for every app above (`pwdata/itunes_lookup.json`). Ladder's lookup was refused twice (HTTP 403), so it is not verified.
- US in-app purchase lists from apps.apple.com: Cal AI id6480417616, Speak id1286609883, Rise id1453884781, Opal id1497465230, Locket id1600525061, Umax id6471026798 (no list shown).

**Tests, benchmarks and rules**
- RevenueCat, "R.I.P. toggle paywall" (Feb 9 2026, updated Apr 23 2026): https://www.revenuecat.com/blog/growth/rip-toggle-paywall
- RevenueCat, BoldVoice / Sub Club (Sep 17 2026): https://www.revenuecat.com/blog/growth/anada-lakra-boldvoice-sub-club-podcast-2026.md
- RevenueCat, "What the best subscription apps get right about paywalls" (Jun 12 2025): https://www.revenuecat.com/blog/growth/how-top-apps-approach-paywalls.md
- RevenueCat, paywall tests (Sep 15 2023): https://www.revenuecat.com/blog/growth/paywall-tests-grow-app-revenue.md
- RevenueCat, Schedule 2 §3.8(b): https://www.revenuecat.com/blog/engineering/schedule-2-section-3-8-b
- Superwall, transaction abandon case study (Aug 6 2024): https://superwall.com/blog/17-revenue-boost-with-transaction-abandon-paywalls-a-case-study
- Superwall, three placements incl. paywall_decline (Jul 15 2024): https://superwall.com/blog/show-a-paywall-during-these-three-high-converting-app-experiences
- Superwall, Linearity Curve (Mar 17 2026): https://superwall.com/case-studies/linearity-curve.md
- Superwall, Ahead App: https://superwall.com/case-studies/ahead-app
- Superwall, 3 experiments (Oct 23 2024, no results published): https://superwall.com/blog/3-proven-paywall-and-pricing-experiments-to-boost-indie-app-revenue
- Adapty, State of Paywalls 2026 (data Oct 2025–Sep 2026): https://adapty.io/state-of-paywalls/report/
- Adapty, paywall experiments playbook (Feb 12 2026): https://adapty.io/blog/paywall-experiments-playbook/
- Blinkist opt-in figure (secondary): https://b2bpricinginsights.substack.com/p/4-min-read-how-blinkists-new-paywall
- Apple App Review Guidelines 3.1.2(a), 3.1.2(c): https://developer.apple.com/app-store/review/guidelines/
- Billed-amount prominence (Apple rejection text quoted by a developer): https://community.revenuecat.com/general-questions-7/guideline-3-1-2-business-payments-subscriptions-6793 · 2019 report: https://9to5mac.com/2019/01/25/apple-revamps-documentation-for-app-subscriptions-details-how-billing-amounts-should-be-clearly-presented-to-users/
- Purchasely: I found no public A/B results with numbers.

**Earlier Digi chapters used:** `digi-deep-2026-11/06-ui-flows.md`, `digi-deep-2026-11/08-pricing-paywall.md`, `digi-bible-2026-11/06-monetization-packs.md`.

**Mobbin usage notice (returned by the Mobbin tool during this research, reproduced as given):**

---

**Your Mobbin AI usage is high this month**

Usage is unlimited during beta. If your usage stays at this level, you may need to purchase more credits once limits take effect. [View usage and plan options](https://mobbin.com/settings/billing-and-usage?utm_source=claude&utm_medium=ai-assistant&utm_source_platform=mcp)

---

## Fact-check (2026-11-16)

*Independent re-check of the 10 claims in this chapter that matter most for decisions, Nov 16–17, 2026: RevenueCat blog sources (raw `.md` with publish dates), Superwall's case study, Adapty's State of Paywalls 2026 report and Photo & Video benchmarks, and today's US IAP lists.*

| # | Claim | Re-check result | Status |
|---|---|---|---|
| 1 | Adapty: "annual-first" layouts raised ARPU 25–40% in winning tests | Holds: "Pre-selecting annual and putting the trial there increased ARPU by 25–40%" (Adapty State of In-App Subscriptions 2026, quoted in the paywall report) | Confirmed (C) |
| 2 | Toggle rejection text "Remove the toggle for adding or removing a free trial" (RevenueCat, Feb 9, 2026, updated Apr 23, 2026) | Holds; publish date Feb 9, 2026 and the Apr 23 update both on the page | Confirmed |
| 3 | BoldVoice: "the refund spiked by way more than the gain in start trials" (RevenueCat, Sep 17, 2026) | Holds word for word; published Sep 17, 2026 | Confirmed |
| 4 | Superwall: transaction-abandon offers = 17% of revenue, 18 apps, refunds 3.3% vs 6.8%, "a few apps … received scrutiny from Apple" (Aug 6, 2024) | Holds. The page says "18 Companies"; 3.3% is the offer group, 6.8% the control | Confirmed; wording made precise in takeaway 6 |
| 5 | Photo & Video has the highest trial refund rate of any category, 6.4% | Holds, but the source is Adapty SOIS 2026, not RevenueCat (also 14.1% in APAC) | Confirmed; source named in takeaway 4 |
| 6 | Only 4% of paywalls show annual as a weekly price | Holds (Adapty: 62% show the yearly amount, 24% per month, 4% per week) | Confirmed |
| 7 | US prices: Speak $83.99/$109.99, Opal $99.99, Cal AI $29.99 | All hold in today's US IAP lists (Speak also $164.99 Premium Plus; Opal also $49.99 Pro; Cal AI also $19.99 and $9.99 options) | Confirmed |
| 8 | Trial opt-in 2% → 8% → 15% as the paywall moved earlier and a 3-screen carousel was added | Holds in RevenueCat's "paywalls unexpected uses" post (flows A/B/C). I could not confirm from the page that Rosie Hoggmascall is the author | Numbers confirmed; attribution C |
| 9 | Apple: other pricing "must be displayed in a subordinate position and size to the total billed amount" | Not found in the public App Review Guidelines page text; it appears in rejection notices quoted by developers | Stays C, as labelled |
| 10 | Blinkist opt-in 6% → 74% | Still only a secondary Substack source | Stays C (low), as labelled |

**What I changed**
- Takeaway 4: named the source of the 6.4% trial-refund figure (Adapty SOIS 2026) and added the 14.1% APAC figure.
- Takeaway 6: "18 apps" → "18 companies' apps", and said which group had 3.3% vs 6.8% refunds.

**What I could not verify**
- Everything read off Mobbin screenshots (11 of 14 annual defaults, 7 of 14 trial timelines, exact copy such as Strava's "You won't be charged until Feb 6"): not re-opened.
- Adapty's claim that pre-selecting annual "converts about as well as" pre-selecting weekly: not found in the report text I read; treat as C.
- Flo replacing its toggle with a 14-day plan: reported by Adapty/RevenueCat posts, not checked in the live app.
