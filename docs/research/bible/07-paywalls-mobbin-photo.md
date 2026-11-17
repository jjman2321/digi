# 07 · Paywalls of photo, camera and AI image apps, screen by screen

**Date of research:** Nov 17, 2026. **Track:** paywalls and the screens around them (onboarding, credit stores, success, cancel) for photo, camera, video and AI image apps.
**Builds on:** `digi-deep-2026-11/06-ui-flows.md` (sections 1e and 3.7), `08-pricing-paywall.md` (section 5) and `07-apple-end-to-end.md` (guideline 3.1.2). I don't repeat their benchmark tables. I add the screens themselves, exact copy, the price maths on each screen, the 2026 Apple rule changes, and a corrected Digi paywall spec.

**Labels**
- **V-M** = I opened the Mobbin flow or screen and read the screenshot myself today (full-resolution image, not just metadata).
- **V-A** = I read the paywall screenshot in Adapty's public paywall library (pages updated Nov 7–13, 2026). Adapty does not say when each screenshot was taken.
- **V** = checked today from a primary source (Apple iTunes Lookup API, the apps.apple.com in-app purchase list, a vendor's own post).
- **C** = a claim by a vendor, forum post or press article. **E** = my estimate or maths, with confidence high / med / low.

**Two warnings about Mobbin data**
1. **Mobbin captures many apps in Singapore.** Apple's purchase sheets on Mobbin say "S$" or "SGD" even when the app's paywall shows a bare "$". Prices ending in **.98** (S$29.98, $89.98, $4.98) are Singapore price tiers. I mark every Mobbin price with its currency, and I give today's US prices next to them from the App Store.
2. **Mobbin screenshots are old snapshots.** I dated each one from what is on the screen (for example, an Apple sheet that says "Starting on 26 Dec 2024" with a 1-week trial means it was captured around Dec 19, 2024). Five of the paywalls below use a free-trial toggle that Apple stopped approving in January 2026 (section 5). They show what worked then, not what you can ship now.

**Coverage gap:** Remini, Facetune, Retake, Prequel, Hipstamatic, Lightroom, Instagram Edits, Dazz, Huji and the G7X/digicam apps have **no paywall screens on Mobbin** (I searched by name and by description on Nov 17; searches returned other apps). For 9 of those AI photo apps I used Adapty's paywall library screenshots instead (section 3), clearly labelled.

Raw notes, contact sheets and downloaded screenshots: `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/bible/` (`notes07.md`, `mob/`, `adp/`, `iap07/`).

---

## Key takeaways

1. **The best photo-app paywalls sell the user's own result, not a feature list.** Snapchat runs the locked AI lens live on your face under the paywall. VSCO lets you apply the paid preset and only blocks Save/Post. Remini, Lovi and AirBrush put a before/after split of a face at the top. Halide makes you "Pick Your Look" on a sample photo before it asks for money [V-M, V-A].
2. **Free-trial toggles are dead on iOS.** Lensa, Picsart, Lovi, Riveo and one Retake variant all used a "Free trial" switch. Apple has been rejecting this design under guideline 3.1.2 since mid-January 2026 [C: RevenueCat Feb 9, 2026; Adapty Feb 11, 2026; Superwall Jun 3, 2026]. Do not copy any toggle screen from Mobbin.
3. **Apple now also rejects paywalls where "free" shouts louder than the price.** A developer was rejected in August 2026 because the paywall "promotes the free trial … more clearly and conspicuously than the billed amount" [C: Apple Developer Forums thread 841626]. The prior Digi spec (CTA "Start 3-day free trial" with the price in small print) needs a fix: the billed amount must be the biggest price on the screen.
4. **AI face and generator apps lead with weekly; camera and editor brands lead with yearly.** Of 23 paywalls I read: 13 pre-select or only offer a yearly plan (Halide, VSCO, Photoroom, Unfold, Picsart, FaceApp, EPIK, AirBrush, Riveo, Lensa…), 6 pre-select weekly (Remini, Prequel, GIO, Shots, Lovi, Retake), and 4 lead with monthly (CapCut, Snapchat+, Lens+, one Locket variant) [V-M, V-A]. Digi's yearly-first plan puts it with the brands, which fits a cash-now contest.
5. **The most honest screens in the set are also the most useful templates for Digi:** Lensa's "Why is it paid? … It's expensive, but we made it as affordable as possible" on its avatar-pack checkout, Lensa's "What to Expect" screen that shows bad AI results before you pay, Picsart's and Retake's "Today / Day 5 reminder / Day 7 charged" timeline, Canva's "We'll remind you 7 days before your trial ends", and Halide's "Why is Halide not free?" [V-M, V-A].
6. **Credit stores are their own screen, not a row on the subscription paywall.** CapCut, Replika, Bevel, Riveo, Perplexity and Lensa all sell credits or packs on a separate sheet that opens when you run out or start a paid job. Two good ideas to copy: Replika's "or get Platinum: 10 free videos included" upsell under the packs, and Ahead's "included usage first, then credits; credits never expire" [V-M].
7. **Dark patterns are common in this category and easy to spot:** a "2,342 people have joined this plan today!" counter (GIO, Prequel), a "Save 95%" badge that my maths puts at 92–94% (GIO), strike-through "anchor" prices with no proof they were ever charged (Lensa's $99.99/year, CapCut's $129.99 "benchmark price"), a first paywall step with no X and no price (Photoroom), a near-invisible X (Riveo), and a bare "$" that is really S$ (Unfold) [V-M, V-A, E].
8. **The close button is visible on almost every paywall here, top-left about as often as top-right.** 10 of 23 put it top-left, 9 top-right, Locket uses a "No thanks!" text link under the CTA, and 2 first screens show none (Photoroom step 1, Halide's onboarding paywall). Adapty's 2026 data: 22% of apps delay the close button, usually 3–5 s; 11% of apps have no close button [C: Adapty State of Paywalls]. Digi stays with a visible X at 0 s.
9. **Two plans plus a link beats three cards.** 62% of paywalls show two plans and apps with two plan lengths convert 67% better [C: Adapty]. The photo apps that sell packs (Lensa, Replika, CapCut) keep packs off the main subscription card stack. This fixes a conflict between the prior UI chapter (3 cards) and the prior pricing chapter (2 cards + link): **use 2 cards + a Party Pack link.**

---

## 0. What I corrected from the prior research

| # | Prior claim (file) | Correction | Evidence |
|---|---|---|---|
| 1 | "Avoid 'free trial toggles' that hide the price [C]" (07-apple-end-to-end) | It is now a hard rule, not advice. Apple began mass-rejecting toggle paywalls in **mid-January 2026**. Rejection text: *"The purchase screen includes a toggle to add or remove a free trial from the subscription purchase. This design is confusing…"* Fix Apple asked for: *"Remove the toggle… Users should be presented with a clear subscription offer that explicitly states whether a free trial is included."* | RevenueCat blog, Feb 9, 2026; Adapty, Feb 11, 2026; Superwall's off-the-record Apple meeting, Jun 3, 2026: *"Free trial toggles on paywalls are not allowed. Full stop."* (C) |
| 2 | Paywall CTA "Start 3-day free trial" with "3 days free, then $39.99/year" as a line (08-pricing-paywall §5.3) | Risky after August 2026. A paywall with "Try for Free" as the main CTA was rejected under 3.1.2(c): *"promotes the free trial, introductory pricing, or introductory period … more clearly and conspicuously than the billed amount."* Make **"$39.99/year" the largest price text**, and put the price in the CTA's second line. | Apple Developer Forums thread 841626, Aug 2026 (C, single case) |
| 3 | P1 paywall = **3 plan cards** (Yearly / Weekly / Party Pack) (06-ui-flows §3.7) vs **2 cards + pack link** (08 §5.3) | The two chapters disagree. Use **2 cards + link**. No photo app in this set puts a consumable pack in the same card stack as subscriptions; Lensa, Replika, CapCut and Riveo all give packs/coins their own sheet. | Section 4 below (V-M); Adapty: 62% of paywalls show 2 plans (C) |
| 4 | "Snapchat Lens+ uses a strike-through, so skip that" (06-ui-flows) | Half right. Snapchat's strike-through is a **real introductory offer**, spelled out on the plan card: "$5.99 for the first month, then $8.99 / mo". That is allowed. Skip it for Digi because Digi has no intro price, not because it is fake. Also: Snapchat+ in the US costs **$4.99/month** today, not the SGD prices on Mobbin. | Mobbin flow 6cc91d0b (V-M); US IAP list Nov 17 (V) |
| 5 | "Photoroom Pro paywall: 7-day trial, 'Save 65%', 'Renews automatically. Cancel anytime.'" (06-ui-flows) | Missing the part that matters: it is a **two-step paywall**. Step 1 has **no close button and no price**, only "Continue". Prices ($89.98/yr, $4.98/wk) and the X appear only on step 2. The .98 prices are almost certainly SGD; Photoroom's US IAPs are $89.99/yr, $9.99 and $5.99 [V]. | Mobbin flows 80139c78 and d04549cd (V-M) |
| 6 | Yearly badge "Best value: save 89%" (08 §5.3) | The maths is right (6.99 × 52 = $363.48; $39.99 is 11% of that). But it compares to paying weekly for 52 weeks, which almost no one does (weekly first-renewal in P&V is 45% per prior chapter). Category examples show how these badges drift (GIO's "Save 95%" is 92–94% by my maths). Use **"Best value"** with "$0.77/week" in small type. No percentage. | E (high) + section 3 |
| 7 | Blinkist trial-reminder result "+23% trial starts, −55% complaints", opt-in "6% → 74%" (08 §5) | Still unverified; only secondary sources. Keep it labelled C. The reminder itself is now standard in this category (Picsart, Retake, Canva, Givingli, Jomo all show it), so ship it for honesty, not for a promised lift. | Mobbin (V-M); no primary source found |
| 8 | Prior chapters quote Mobbin paywall prices next to US prices | Many Mobbin prices are SGD. Example: Halide on Mobbin shows **S$29.98/yr and S$99.98 one-time**; in the US today it is **$19.99/yr and $69.99 one-time** [V]. Never benchmark Digi's US price against a Mobbin screenshot without checking the currency. | Mobbin flow d600a099 (V-M); apps.apple.com US IAP list Nov 17 (V) |

---

## 1. What I covered

| # | App | Mobbin reference (paywall) | Captured (from on-screen dates) | Currency on screen | US ratings today (Nov 17, 2026) [V] | US prices today [V] |
|---|---|---|---|---|---|---|
| 1 | Lensa AI | flows 4b82fe15 (onboarding), 092858ce (membership), e155bc11 (avatar packs) | ~Mar 2023 | USD (membership); SGD (packs) | 418,227 · 4.70★ | Unlimited Access $29.99 / $39.99 / $49.99; 1 week $2.99; avatar packs $3.99–$11.99 |
| 2 | Photoroom | flows 80139c78, d04549cd, 88660b48 (cancel) | ~Apr 2025 | likely SGD | 231,775 · 4.82★ | PRO $5.99 / $9.99 / $89.99; Max $15.99 / $34.99 / $249.99 |
| 3 | Halide Mark III | flows b37e3f2d, f2d4f292, d600a099, 2209931e | not dated | SGD | 13,711 · 4.45★ | $9.99 / $19.99 sub; one-time $69.99 |
| 4 | Snapchat (Lens+) | flow 6cc91d0b | ~2025 (not dated) | USD | 6,104,089 · 4.51★ | Snapchat+ $4.99/mo |
| 5 | Snapchat (Snapchat+) | flow 36aaebb4 | ~Oct 2024 | SGD | (same app) | (same) |
| 6 | Picsart | flow 411f2073 | ~Jan 2023 | USD | 1,196,988 · 4.66★ | Gold $57/yr, $12.99/mo, $4.99/wk |
| 7 | VSCO | screens e7a24d64 (new), 327d0ef0 (old), 47c8d3e6 (locked preset) | not dated | USD | 278,593 · 4.69★ | Plus $39.99/yr, $9.99/mo; Pro $69.99/yr, $14.99/mo |
| 8 | CapCut | flows d3514c15 (Pro), 9d3bcbd5 (onboarding); screen c562545d (credits) | not dated | USD | 1,127,195 · 4.61★ | Standard $9.99/mo, Pro $19.99/mo, Yearly $89.99 |
| 9 | Unfold | flow 234c4707; screen 602eb74c (old Plus) | ~Dec 2024 | SGD (no symbol shown) | 158,634 · 4.86★ | Plus $19.99/yr, $2.99–4.99/mo; Pro $12.99/mo |
| 10 | Locket | flows 775b5243, 37926f7d | ~Aug 2025 | SGD | 593,068 · 4.76★ | Gold $1.99–4.99/mo, $16–36/yr |
| 11 | Lovi (AI face/skin) | screens 6f736fc3, b19ae89c | not dated | USD | not looked up | not looked up |
| 12 | Riveo (video effects + AI coins) | flow 12237af7; screen cb027d86 (coins) | ~Aug 2024 | SGD | not found on the US store today | n/a |
| 13 | Canva | screen 2dd2e80b | not dated | SGD | 3,621,986 · 4.87★ | not scraped |

Plus, from Adapty's library (not Mobbin, section 3): Remini, Prequel, FaceApp, Lensa (current), Shots, GIO, Retake (2 variants), EPIK, AirBrush. Plus credit-store screens from Replika, Bevel, Ahead and Perplexity (section 4). **Total: 23 paywalls from 21 apps, plus 7 credit/pack screens.**

---

## 2. Mobbin paywalls, screen by screen

### 2.1 Lensa AI — onboarding to membership (flow 4b82fe15, 24 screens; ~Mar 2023, USD)
The longest pre-paywall run in the set: 12 screens before any price.

| Step | What is on screen, top to bottom |
|---|---|
| 1–2 | Black splash, white ring logo. Then: "All good! Our AI is just getting ready". |
| 3–4 | "Lensa" + pink line "All-in-one editor. Supercharged by AI." A terms checkbox ("I agree to the Terms of Use and acknowledge I have read the Privacy Policy"). **Continue stays grey until the box is ticked.** |
| 5–8 | Full-bleed AI portraits. Yellow chip **"Powered by AI"**. H1 **"Magic Avatars"**. Sub "Create personalized, impressive avatars with the help of powerful AI technology." Small grey **"Skip"** pill top-right. Dark full-width "Continue". |
| 9–13 | Same template for each feature: "Magic Retouch", "Smart Eraser" ("Remove unwanted objects instantly from any photo."), "Pro Adjustments", "Beat Sync", "All-in-One" (an icon grid). |
| 14 | **"620,000 Five Star Ratings / Join millions of happy users."** over a stack of review cards ("Worth every penny of the subscription!" – Emmagirl9). |
| 15 **Paywall** | Top-left grey pill **"Restore"**; top-right **X in a circle, visible**. H1, very large: **"Start Your Membership Now"**. Five emoji bullets: "50% off on Magic Avatars / Exclusive Avatars packs / 4K-resolution Avatars / No limits to photo editing / No watermark on videos". Card: "Annual plan" + pink chip **"71% OFF"**, then **"~~$138.98~~ → $40.98 / year"**. Card: **"7-Day Free Trial" toggle, OFF by default**. Grey line "No commitments. Cancel anytime." CTA with a yellow-green-blue gradient: **"Continue"**; when the toggle is on it changes to **"Start my 7-day trial now"**. |
| 16 | Purchase: alert "Connecting to the AppStore… Please keep the app open", then "You're all set / Your purchase was successful." |
| 17 | A "NEW 🥳" sheet: avatar collage, "Magic Avatars / Generate mind-blowing avatars from your photos with one of the most advanced AI ever created." yellow **"Try Now"**. |
| 18 | Empty home: "Let's go! / Just add your photo here and let Lensa work its magic" with a hand-drawn arrow to the "+" tile. A yellow "Magic Avatars" button sits above the tab bar. |

**Read:** price maths is right (40.98 / 138.98 = 29.5%, so "71% off"), but nothing tells you what $138.98 is. Lensa's current paywall (section 3) still uses an anchor, "~~$99.99/year~~ $39.99", and $99.99 is not in Lensa's top-10 US IAP list today [V], so I can't confirm it was ever charged (E, med). **Copy for Digi:** the final empty state with an arrow. **Avoid:** 12 screens before value, unexplained strike-through, toggle, "Continue".

### 2.2 Lensa — Magic Avatars pack checkout (flow e155bc11, 26 screens; SGD)
This is the closest thing on Mobbin to Digi's Party Pack.

| Step | What is on screen |
|---|---|
| Type | "Select type": "Humans – Try yourself in different looks [Create]" / "Dogs & cats – Make your pet a superhero [Create]". |
| Step 1 of 5 **"What to Expect"** | *"The type of AI we utilise for Magic Avatars may generate artefacts, inaccuracies and defects in output images—it's out of our control. So please acknowledge and accept that risk before continue."* *"The more variations you get, the better chances for great result!"* A **"Good examples"** grid, then a **"Weird (with artefacts)"** grid of bad outputs. Yellow "Continue". |
| Step 3 of 5 "Select Styles" | Sections "Essential", "Time Machine" with "Select all"; "Show all 10 styles"; footer "You can select up to 10 styles at a time"; CTA counts live: **"Continue with 2 styles"**. A teaser "New pack is coming soon… [Notify me]" that triggers the push permission only then, and turns into "✅ You'll be notified". |
| Step 4 of 5 "Upload photos" | "✅ Good photo examples" (with green ticks) and "❌ Bad photo examples – Group shots with humans or other pets, shots from afar…" (red crosses). **"🔒 Photos will be immediately deleted from our servers after the Avatars are ready."** CTA **"Select 10–20 photos"**. Progress "Importing photos… 11/17". |
| Step 5 of 5 **"Check out"** | **"Why is it paid?"** *"Magic Avatars consume tremendous computation power to create amazing avatars for you. It's expensive, but we made it as affordable as possible ❤️"* Three radio rows: "50 unique avatars – 10 variations of 5 styles – $2.98"; **[MOST POPULAR] "100 unique avatars – 20 variations of 5 styles – $4.48" (pre-selected, dark card)**; "200 unique avatars – 40 variations of 5 styles – $5.98". Line: **"You've got 50% off as Subscriber! 😃"**. Yellow CTA **"Purchase for ~~$8.98~~ $4.48"**. Apple sheet: "Magic Avatars Pack 13 … SGD 2.98". |
| Result | "Pack #1 · 50 avatars"; "❄️ You will never have the same results! Every time AI generates unique avatars." [Create new avatars]. Viewer "23 of 50": Edit / Save to Photos / Share, and "Order a print via Pixels.com". |

**Read:** the subscriber discount on packs is a clean way to make the subscription feel worth it. Price per avatar falls from 6.0¢ to 4.5¢ to 3.0¢ (SGD), a plain volume ladder. **Copy for Digi:** "Why is it paid?", the "What to Expect" bad-examples grid, the good/bad photo tips, the deletion promise, the live style counter, "Notify me" as the moment to ask for push.

### 2.3 Photoroom — onboarding with a sample image, then a two-step paywall (flows 80139c78, d04549cd; ~Apr 2025; likely SGD)

| Step | What is on screen |
|---|---|
| 1 | Navy splash, gradient "P" logo. |
| 2 | Photo collage of sneakers ("DROP READY"); laurels **"300M Downloads"**; "Create pro-level images with the best AI editing tools in the market"; white "Continue"; terms line under it. |
| 3 | Progress bar. **"How did you hear about Photoroom?"** Word of mouth / Social media / Someone shared a link with me / Google search / App Store / ChatGPT (or AI tools) / Shopify. |
| 4 | "Do you sell physical products online?" Yes, it's my main job / Yes, occasionally as a side hustle / No. |
| 5–6 | "What will you be using Photoroom for?" multi-select checkboxes; Continue disabled until one is ticked. |
| 7 | **"Start from a photo" / "Magically remove the background from one of your pictures."** Purple **"Select a photo"** + light **"Use a sample image"**. |
| 8 | Sheet "Choose one of these images": 6 samples (earrings, car, dress, toy, burger, person). |
| 9–10 | A scan line sweeps the car. Then **"Just like magic / Background removed!"** [Start creating]. |
| 11 **Paywall step 1** | Lavender hero, logo, "Sharp. Seamless. Built to help you sell." with three product cards. Segmented **Pro / Max**. H1 **"Start your 7-day free Pro trial"**. Grey sub "AI tools for e-commerce brands that are ready to sell." 5 check rows ("Access to advanced AI tools (Product Staging, Virtual Model…) / 500 Batch exports per month / Edit up to 250 images at once on mobile / AI image credit allowance / High-resolution exports"). Purple **"Continue"**. **No X. No price.** |
| 11b **Paywall step 2** | Same hero, now with an **X in a white circle, top-right**. Radio cards: **"7-days free trial, then / $89.98 / year · $1.72 / week"** with purple badge **"Save 65%"** (pre-selected); **"$4.98 / week"**. "Continue". "Renews automatically after trial. Cancel anytime." Link "Need help or already purchased?" |
| 12 | Home with a "Get Pro" pill top-right. |
| Cancel flow | Plan sheet "You are on the Pro plan · Renews on April 28, 2026" → "Manage my subscription" menu: **Change Plan / Cancel Subscription / Request a refund** → "Why are you canceling your subscription?" (I hit usage or credit limits too quickly / I did not get enough value / The price is too high / The free tools are enough for my needs / Unexpected charge / Other / I prefer not to say) → free text "Tell us how could we improve to make you stay" with "I prefer not to say" → "Are you sure you want to lose your benefits? Your premium access will end on April 28, 2026" → [Keep my subscription] [Cancel subscription]. |

**Maths:** 4.98 × 52 = 258.96; 89.98 / 258.96 = 34.7%, so "Save 65%" is correct. $89.98 / 52 = $1.730, shown as $1.72 (they likely divide by 52.14 weeks). **Copy for Digi:** "Use a sample image" when the camera is denied; showing the result before the paywall; a "Request a refund" entry inside the app (Apple handles it, but the link calms people). **Avoid:** step 1 with no X and no price.

### 2.4 Halide Mark III — "Pick Your Look", then a quiet paywall (flows b37e3f2d, f2d4f292, d600a099; SGD)

| Step | What is on screen |
|---|---|
| 1 | Splash: big pink/orange/yellow ring mark, "HALIDE / MARK III / PHOTO APPLICATION". |
| 2–4 **"Pick Your Look"** | A sample portrait. *"This is a normal iPhone photo. Tap the icons below to pick from Halide's exclusive looks."* A row of look tiles; the chosen one gets a yellow ring and its name appears: **"Zephyr – Neutral tonescale and tuned, filmic contrast. A great choice for a wide variety of scenes."** White "Continue". |
| 5 **Paywall** | A paged carousel of features (page dots), e.g. "Neural Macro – Take Macro shots on any iPhone…", or an overview grid of feature tiles "See what makes Halide the best camera app on iPhone & iPad". Grey pill **"Try Halide for free"**, text link **"View all options"**, footer "Privacy Policy · Restore Purchases". **No X on this screen.** |
| 5b Plan picker | Three stacked cards: **"Pro Camera, Editor, and Lessons – S$29.98 per Year – $2.50/month" (yellow border, pre-selected)**; "One Time Purchase – S$99.98 once"; "Pro Camera, Editor, and Lessons – S$14.98 per Month". White CTA **"Start Free Trial / 7-day free, then S$29.98/year"**. "See what's included →". |
| 5c "All options" sheet | Faint X top-right. "See everything that's included in a Halide membership." Yearly card headed **"33% OFF FOR 24 HOURS"** with "**1 Day free**, then S$29.98 per Year", checks All Features / Regular Updates / Learn with included classes. One-time card: "No trial, S$99.98 once" with a crossed item "No regular member content like extra photography lessons". Monthly card. Then a developer photo: **"Every purchase supports Ben, the developer of Halide, and his family."** A link **"Why is Halide not free?"** and "Having an issue? Contact support". |
| 6–7 | Permissions card "TO GET STARTED, HALIDE NEEDS YOUR PERMISSION:" Camera / Photo Library / Location (Optional); footer **"Halide does not save, share, or upload any of your photos or information."** |
| Member screen | "Active Member – Thank you for supporting our ongoing development". *"If you're considering ending your trial, we would love to hear from you why… We personally read all feedback!"* [Message our team] [Manage subscription]. |

**Read:** the "All options" sheet says "1 Day free" while the CTA under it says "7-day free" — a mismatch Apple's reviewers would flag today. "33% OFF FOR 24 HOURS" is a time limit I can't verify. **Copy for Digi:** "Pick Your Look" on a sample photo (Digi version: pick your camera on a sample party photo), the one-time option shown honestly with what it lacks, and the human "support the maker" line. **Avoid:** no X on the onboarding paywall, the 24-hour countdown, the trial-length mismatch.

### 2.5 Snapchat — Lens+ paywall from a locked lens (flow 6cc91d0b, 8 screens; USD)

| Step | What is on screen |
|---|---|
| 1 | Camera. One coach mark: **"Swipe to try a Lens"**. Lens tabs "Favorites · For You · Halloween". |
| 2 | A locked lens in the ring **already runs live on your face**. A chip floats above the shutter: **"Get Lens+ on Sale"**. |
| 3 Half sheet over the live camera | **"Unlock this Lens with Lens+"** / "Access to thousands of the best lenses on Snapchat with Lens+ plus all Snapchat+ features". White card: "Lens+ – ~~$8.99/mo~~ $5.99/mo" with a black pill **"Try Now"**. "Learn More". Grey legal text ("…Renews at the full price after the introductory offer period… By tapping 'Try Now', you agree to the Snapchat+ Subscription Terms and the auto-renewal."). |
| 4 Full page | Chevron-down close top-left, "…" top-right. Ghost logo, **"Exclusive Lenses with Lens+"**. Hero: an AI lens (cartoon mother and child) on a real face with the lens ring under it. Rows: "New & Exclusive Lenses – Unlock hundreds of new ways to Snap." / "Transform Snaps with AI – Bring any prompt to life in your Snaps!" / "Create Songs" / "Includes all Snapchat+ features ⌄" (expands to Remix Stickers, Custom App Icon, Animated Stickers, Chat Wallpapers…). Glowing outline CTA **"Subscribe for ~~$8.99/mo~~ $5.99/mo"**. "View Other Plans". |
| 7 | "Subscribe to Lens+": gold-bordered card headed **"SPECIAL OFFER"**, "Lens+ ~~$8.99~~ $5.99 / mo", ticks "Access to all 40+ Snapchat+ features / Over 100 exclusive Lenses", line **"$5.99 for the first month, then $8.99 / mo"**. Yellow "Subscribe". |
| 8 | "You're all set." |

**Copy for Digi:** the locked look runs on the user's own photo before the ask, the half-sheet over the camera (no page change), and a seasonal tab (Halloween → Christmas/NYE). **Skip:** the strike-through (Digi has no intro price) and the wall of grey legal text.

### 2.6 Snapchat+ (flow 36aaebb4; ~Oct 2024; SGD)
- Entry: chip **"Get Snapchat+"** over an exclusive lens.
- Page: gold ghost-plus logo, **"Try Snapchat+ for SGD 2.98/mo!"**, "2 months for SGD 2.98 / month, then SGD 5.98 / month". Rows: AI Captions / Upgrade My AI / AI Creative Tools. Yellow CTA **"Try for ~~SGD 5.98/mo~~ SGD 2.98/mo"**. "View All Plans".
- Plans: **Monthly Plan [Save 50%] "SGD 2.98/mo for the first 2 months – Then SGD 5.98 / month for a total of SGD 71.76 per year" (pre-selected, gold tick)**; Annual Plan [Save 37%] "SGD 3.75 / month – For a total of SGD 44.98 per year".
- After purchase: **"Get started with Snapchat+ / Set up a few of the Snapchat+ exclusive features!"** Pin your best friend / Customize your App Icon / Choose your Post View Emoji → [View All Benefits].
- **Read:** the annual card leads with the monthly equivalent (SGD 3.75) and puts the billed total in small print. Apple's rule says the billed amount must be the most prominent price [V: developer.apple.com/app-store/subscriptions, cited in the prior Apple chapter]. **Copy:** the "set up your perks" screen right after purchase. It gets the buyer using what they paid for in the first minute, which lowers refund requests (E, med).

### 2.7 Picsart Gold — toggle that turns into a timeline (flow 411f2073; ~Jan 2023; USD)

| Step | What is on screen |
|---|---|
| 1 | Top half: a masonry of rounded, colourful edit examples; X in a white circle **top-left**, over the images. **"Get Picsart Gold"**. "Exclusive access to premium features, including a 1-tap background remover, and Retouch tools." Outlined row **"Use Free Trial." toggle OFF**. Filled teal **"Yearly $55.99 ($4.66/mo)"**. Outlined **"Monthly $11.99"**. "Renews automatically. Cancel at least 24 hours prior to your renewal date." Terms of Use · Privacy Policy · Restore. |
| 3 Toggle on | The whole top morphs into **"Your Picsart Gold Journey Starts Here"** with a vertical timeline: **Today** "Start creating with full access to every premium tool and feature." / **Day 5** "We'll hit you up with a quick reminder before your trial is over." / **Day 7** "Your account will be charged. Feel free to cancel anytime before this." Row "Free Trial Enabled." (toggle on). CTA **"Continue / 7-Day Free Trial"**. |
| 5 | Apple sheet: "Picsart Gold – Annual · TRIAL 1 Week Free · PRICE Starting Jan 24, 2023 $55.99 per year". "Please wait…" HUD, then "You're all set." |
| Settings | Picsart's own FAQ includes "Why did you charge my account without my authorization?" and **"If I choose the yearly package, will I be charged the whole amount at once or will I be charged x$ per month as it is mentioned in the ad? – Payments are made up-front…"** |

**Read:** that FAQ entry is direct evidence that "$4.66/mo" on a yearly plan confuses buyers. **Copy:** the timeline copy (adapted). **Avoid:** the toggle (now rejected) and per-month framing of a yearly price.

### 2.8 VSCO — try the preset, pay to save (screens e7a24d64, 327d0ef0, 47c8d3e6; USD)
- **Locked preset sheet (47c8d3e6):** header "Unlock with a VSCO membership", X. The user's own photo with the paid preset applied. *"Become a member and get access to our complete library of 200+ presets, including advanced Film X presets and our latest editing tools. **You can try exclusive presets and tools, but won't be able to save or post until you join or start a free trial.**"* Rows: I'm already a member / I already purchased or downloaded this preset / Help Center / Cancel.
- **New paywall (e7a24d64):** full-bleed black-and-white ocean photo, white X top-left. **"Own your creative process"**. Tabs **Yearly | Monthly**. Selected card (white border): [PRO] **"$7.49/month"**, grey "($89.98 billed annually)", right side "Free 7-day trial"; bullets "Full suite of tools and presets on mobile and desktop / Get discovered for photography jobs / Professional profile & portfolio website / Free from third party ads". Second card: [PLUS] "$3.33/month – Free 7-day trial". White pill **"Start free trial and continue"**. Terms · Privacy · Restore · Redeem Code.
- **Old paywall (327d0ef0):** X top-left, "VSCO Membership" over a desert photo, ticks "Complete library of 200+ presets / Montage and video editing / Weekly photo challenges / Exclusive education content". White panel: "Start your 7-day free trial. After trial period ends, **$19.99 / year** (just $1.67 / month)". Electric-blue rectangle **"Start free trial to subscribe"**. "No commitment. Cancel anytime."
- **Read:** VSCO's US prices today are Plus $39.99/yr and Pro $69.99/yr [V], so the "$89.98 billed annually" screen is probably SGD. The new paywall puts the monthly equivalent big and the billed amount small — the same issue as Snapchat+. The old one gets it right: "$19.99 / year" is the bold price. **Copy:** "try it, but save/post needs membership" for AI looks (Digi: show a watermarked AI preview; saving full-res needs a digi).

### 2.9 CapCut Pro — monthly-first, no trial (flow d3514c15; USD)
- Entry: dismissable home banner **"Upgrade to Pro for extra perks"** and a "Pro" chip in the header. Other captures show a "Start Standard for only Rp7.500" pill (Indonesia).
- Paywall: dark, X top-left, tabs **Pro | Cloud**, support and "?" icons top-right. An **autoplaying effect video** with caption "Effect | Rainbow drop / Animation and effects ›", then a row of feature-category icons. **"Join CapCut Pro" / "Unlock all Pro features and materials"**. Two side-by-side cards: **Monthly $9.99 (pre-selected)** / Yearly ~~$129.99~~ **$89.99**. "Featured benefits" carousels (Effects and filters: Psychedelic blur, Flash I, Black Gold, Love…). Then a long legal block, including: *"Strikethrough prices are 'recommended/benchmark prices', which are calculated based on the cost of a product and the revenue earned by the product…"* Sticky gradient CTA **"Purchase / Will charge $9.99 in the next billing cycle"**.
- Onboarding: no paywall at all. Two questions ("What type of content do you want to create?", "What will you use CapCut for?") then the editor.
- **Read:** CapCut admits its strike-through is a "benchmark", not a past price. A "Flash I" effect sits in CapCut's paid filters, which shows flash/digicam looks are treated as premium by a giant. **Copy:** "Will charge $X in the next billing cycle" under the CTA is a clear, honest sub-line. **Avoid:** the benchmark strike-through.

### 2.10 Unfold — Plus/Pro switch with a hero carousel (flow 234c4707; ~Dec 2024; SGD)
- Entry: header gift icon + outlined **"TRY PLUS"** button.
- Paywall: X top-left in a dark square; segmented **Plus | Pro** at top centre; top 60% is an auto-paging collage carousel ("Exclusive Unfold templates – Access to hundreds of reel, story and post templates."; Pro: "Personal Brand Kit – Manage custom fonts, logos, and more." with a "NEW" starburst and "COMING SOON" stamp). Chevron "Tap to compare". Plan rows: Plus — **Yearly "3-day free trial" $27.98 [41% OFF]** / Monthly $3.98; Pro — **Yearly "7-day free trial" $148.98 [36% OFF]** / Monthly $19.48. Gradient CTA **"START YOUR FREE TRIAL"**. Restore Purchases · Terms of Service · Privacy Policy.
- After purchase: **"Welcome to Unfold Pro"** collage + a partner perk ("…you get 20% off Squarespace products…") and **[CREATE AN ACCOUNT] / "I'll do this later"** — the account ask comes after payment, not before.
- **Maths:** 3.98 × 12 = 47.76, 27.98 / 47.76 = 58.6% → "41% off" ✓; 19.48 × 12 = 233.76, 148.98 / 233.76 = 63.7% → "36% off" ✓ (E, high). **Avoid:** no currency symbol on the paywall (S$ only appears on Apple's sheet).

### 2.11 Locket Gold — the friend-camera paywall (flows 775b5243, 37926f7d; ~Aug 2025; SGD)
Locket is the closest Mobbin app to Digi's social side (a camera for friends).
- Entry points: gold-outlined pill **"Get Locket Gold"** top-left of the profile (it becomes "View Locket Gold" after purchase); a gold-bordered card "Locket Gold – Unlock the best of Locket ›"; and small "Gold" tags on locked settings rows (Change app icon, Camera theme).
- Full page: dark-to-gold gradient, gold heart tile, **"Locket Gold" / "Members have so much more fun on Locket!"**. Emoji rows: "Remove ads – Never see an ad in History!" / "Video Lockets – Record short video clips!" / "Locket views – See who's opened your Lockets" / "Upload from camera roll" / "Unlimited friends [Early access!]" / "Widget frames" / "Custom app icon" / "Send longer captions". "Plus so much more…" chips: Early product updates / **Monthly feature drops** / Membership badge. Yellow **"Upgrade your Locket 🔓"**. Under it, always visible: **"No thanks!"** (no X).
- Plan sheet "Subscribe to Locket Gold": one variant shows only "Monthly – Cancel anytime! – $5.98/mo"; the other shows **"Yearly – 12 mo • Cancel anytime – S$49.98/year" (pre-selected, gold border)** and "Monthly S$5.98/mo". Yellow "Subscribe".
- Success: **gold hearts rain down the screen**, sheet "Welcome to Gold! You now have access to all Locket Gold features. We're always adding more benefits, so check back soon." [Done].
- **Copy for Digi:** the full-page benefits → bottom-sheet plan picker split; small "Plus" tags on locked rows; "Monthly feature drops" as a promise (only if Digi really ships looks monthly); a celebration on success (Digi: flash pop + date-stamp confetti).

### 2.12 Lovi — weekly-first AI face paywall (screens 6f736fc3, b19ae89c; USD)
- Sheet with X top-right on the hero. Hero: **"before" | "after"** portrait split. **"Unlock Lóvi Premium"**. Three icon benefits (Build a routine tailored to you / Boost results with Daily Plan / Track progress with Face Scan). Row **"Enable Free Trial" toggle OFF**. **Weekly $7.99 (pre-selected, purple border)**; "Yearly [BEST OFFER] $49.99 for 1 year". Links "I have a promo code · Restore". Glowing gradient CTA **"Continue 🙌"**.
- **Avoid:** toggle, weekly pre-selected, "Continue". **Copy:** the before/after hero.

### 2.13 Riveo — subscription that includes monthly AI coins (flow 12237af7; ~Aug 2024; SGD)
- Onboarding: three full-bleed glitch-video slides ("riveo / Video & Effects Composer"; "Effects & Filters / Like no other."; "Video Editor / A fully featured editing suite will help your vision come to life.") with [Enter Referral Code] and [Get Started.].
- Paywall: **thin, low-contrast X top-left**, "riveo pro" top-right; full-bleed effect video; ★★★★★ "1000+ Ratings"; laurel **"FINALIST Apple Design Award"**; ticks **"Unlock every Feature." / "Monthly AI Coin Refill to 500."**; "3-Day Trial / Then S$49.98 per Year"; pill toggle "Try Free for 3 Days." ON; blue **"Start Free Trial"**.
- Coin sheet when out (cb027d86): *"Unfortunately I can't afford to offer this AI feature without limitations :/ You need 1.0 (coin) to run it."* "Your Balance 499 · Automatic Refill in 29 Days". **"Earn AI Coins – [Invite Friends]"**. Refill packs: 100 = S$2.98, 1,000 = S$14.98, 5,000 = S$39.98.
- **Read:** this is Digi's exact model (subscription + monthly AI allowance + top-up packs + earn by inviting). The apologetic, first-person copy is honest and human. **Avoid:** the faint X and the toggle.

### 2.14 Canva — paywall as a tab (screen 2dd2e80b; SGD)
- Lives in the tab bar as **"Pro"** with a crown, so it is always reachable and never forced.
- Crown "Canva Pro". **"Upgrade to Canva's best tools"**. **"Free 14 day trial. Cancel anytime. We'll remind you 7 days before your trial ends."** "Monthly – Pay monthly, cancel anytime – S$18/month" — "or" — "Yearly – Pay yearly – S$164.98/year". Purple pill **"Get 14-day free trial"**. "Join the hundreds of organizations that create designs with Canva" + logo wall.
- **Copy:** the one-line reminder promise right under the headline.

### 2.15 Photoroom feature gate (screen a3eb113c)
Tapping a locked tool ("Video Generator") opens a small sheet: a blurred preview with a spinner, **"Upgrade to Max / Upgrade to Max to unlock this feature"**, [Learn more] [Unlock more], X. Short, and it keeps you in context.

---

## 3. AI photo apps not on Mobbin (Adapty paywall library, V-A)
Screenshot dates unknown; Adapty pages updated Nov 7–13, 2026. All USD unless noted.

| App (US ratings) | Top to bottom | Pre-selected | Close | Price maths / notes |
|---|---|---|---|---|
| **Remini** (359,868) | X top-left in a circle, "Restore Purchases"; face hero split down the middle (blurry left, sharp right, dashed line); **"Choose your Plan" / "Unlock the full power of Remini–the ultimate AI Photo Enhancer."**; "Weekly [1 week free trial] then $9.99/week"; "Yearly $79.99/year [$0.99 first month] then $1.54/week"; white **"Try For Free"**; "Other plans" | Weekly + trial | TL, visible | 79.99/52 = $1.54 ✓. A weekly plan with a 7-day trial is the riskiest combo for refunds. |
| **Prequel** (347,579) | X top-left; **"Choose your plan"**; ★★★★★ review carousel ("My favourite editing app ever… even for tech illiterate GenXers :)" – CactusFreek13); purple speech chip **"2148 people have joined this plan today!"**; "7-Day Full Access – then $6.99/week – $5.99/week" (selected); "Yearly – $0.77/week – just $39.99/year [89% off]"; peach **"Start"**; "$5.99 first week, then $6.99/week" | Weekly intro | TL | 39.99 / (6.99 × 52) = 11% → "89% off" ✓. The live counter can't be verified. |
| **GIO** (36,130) | Same template as Prequel: X top-left, "About Credits" top-right; **"Choose your plan"**; review quote (JoeBlack66); **"2342 people have joined this plan today!"**; "7-Day Full Access – then $11.99/week – $9.99/week" (selected); "Yearly just $39.99/year – $0.77/week [Save 95%]"; gradient "Continue"; "$9.99 first week, then $11.99/week" | Weekly intro | TL | 39.99 / (11.99 × 52) = 6.4% → **93.6%**; vs $9.99 → 92.3%. **"Save 95%" is overstated** (E, high). |
| **FaceApp** (1,790,710) | "Restore" pill top-left, X top-right; full portrait hero; white card **"FaceApp PRO"**; two side-by-side boxes: **"7-day trial then $60 / year [50% OFF]"** (selected) / "3-day trial then $10 / month"; "You can cancel anytime"; blue **"Start My Free Trial"** | Yearly + trial | TR | 60 / (10 × 12) = 50% ✓. Trial attached to the product, no toggle: the 2026-compliant pattern. |
| **Lensa (current)** (418,227) | X top-right (small); **"Get Full Access" / "All features. Full AI power."**; crown rows with the free limit under each: "Save Unlimited Photos – Free: 1 photo/day" / "Full AI Assistant Access – Free: Limited" / "1,200 Magic AI Tokens – Free: None" / "Cancel Anytime"; "Fair Use Policy limits may apply."; tabs Yearly / Monthly / Weekly; **"~~$99.99/year~~ $39.99 Save 60%"**; "Add 7-day free trial" toggle; gradient "Continue" | Yearly | TR | Free-vs-paid shown on each row is clear. Anchor $99.99 unproven; toggle now rejected. |
| **Shots** (18,674) | "What are coins?" link top-left, X top-right; collage of 1980s-style AI photos (including a cat in sunglasses); **"Unlock Full Access"**; "Just $7.99 / Week – Then $9.99 / Week [Popular]" (selected); "$79.99 / Year – Just $1.54 / Week [Save 85%]"; purple "Continue"; "✓ Auto renewable. Cancel anytime."; Terms · Privacy · Restore · Contact | Weekly intro | TR | 79.99 / (9.99 × 52) = 15.4% → 84.6% ✓. |
| **Retake** (53,456), 2 variants | Clean white. X top-left, "Restore" top-right. **"How your free trial works"**: Today "Start enjoying full access to the most popular PRO tools." / In 5 days "You'll get a reminder that your trial is about the end." / In 7 days "Your PRO subscription will begin and you'll be charged. Cancel anytime before." Then **"7-day free trial, then 9.99 USD/week"** (variant B: a "Free Trial Enabled – No commitment, cancel anytime" toggle and 7.99 USD/week). Black **"Start my 7-day free trial"**. "Privacy · Show all plans · Terms" | Weekly + trial | TL | A timeline on a weekly plan. Good layout, wrong product for Digi. |
| **EPIK** (54,985) | X top-right; couple-selfie collage; "EPIK *Pro*" / **"Seamless multi-slide posts"** with page dots; "Yearly $51.99 – $4.33 / Month [50% OFF]" (selected, gradient border); "Monthly $9.99/ Month"; green-violet gradient **"Start 7-day free trial"**; "View Benefits" table (Free vs Pro) below | Yearly + trial | TR | 51.99/12 = $4.33 ✓; vs 9.99 × 12 = 119.88 it is 57% off, so "50%" undersells. Monthly-equivalent shown biggest. |
| **AirBrush** (204,345) | X top-right; **"AirBrush Premium" / "25+ Pro Retouching Tools"**; portrait with tool icons around it, carousel dots; orange **"Try 7 days for FREE!"**; **"Then $33.99/year. (just $2.83/mo)"**; "Cancel anytime"; orange **"Start 7-Day Free Trial"**; "Already Subscribed? · Terms of Use · Privacy Policy" | Yearly only | TR | 33.99/12 = $2.83 ✓. The annual price is the bold number. |

---

## 4. Credit and pack screens (V-M unless noted)

| App / ref | Trigger | Layout and exact copy | Lesson for Digi |
|---|---|---|---|
| **CapCut** credit balance (c562545d) | Paid AI feature | "Total credits 0 · Subscription credits: 0 \| Other credits:". Grid of 6 tiles: 149 = $1.49, 290 = $2.9, 439 = $4.39, 790 = $7.9, 1,499 = $14.99, 1,999 = $19.99. Black **"$1.49 Buy"**. "Note: Purchased credits are valid for 2 years and cannot be refunded…". "Pro AI features" carousel below. | Shows the split "subscription credits vs bought credits". Flat 1¢/credit with no bulk discount is unusual; most stores reward bigger packs. |
| **Replika** video packs (7f976de3) | Start a paid video | "Video Generation / **Bring Sammie closer to real life**". Two tiles: **5 videos [Buy for $9.98]** / **"Best deal" 15 videos [Buy for $19.98]** (bigger, lighter tile). "or". Card "Get Platinum – Annual SGD 99.99" with red chip **"10 free videos included"** [Upgrade]. | The best "pack or subscribe" layout in the set. Digi: Party Pack tile + "or get Plus: 40 digis every week". |
| **Bevel** credits (3030a3f1) | Weekly limit reached | "Remaining credits 0 – Used after weekly limits are reached." Rows: 350 = S$6.98 (selected); ~~700~~ **750 (+50 bonus)** S$14.98; ~~1,400~~ **1,550 (+150 bonus)** S$29.98; ~~3,500~~ **4,200 (+700 bonus)** S$69.98. **"Unused credits roll over weekly and never expire."** "Estimated cost: Basic message ~1 credit". [Buy 350 credits] | "Bonus" framing for bigger packs, and an estimated-cost table. |
| **Riveo** coins (cb027d86) | Out of coins | Quoted in 2.13: apology copy, balance, refill date, **Invite Friends** to earn, 3 refill packs. | Earn-by-invite next to buy. |
| **Ahead** usage (dbee17fb) | Settings | "Daily included usage **94% remaining** – Refreshes in 2 hours". "Credits **0 credits** – **Credits never expire and only get used after your daily included usage is done.**" [Purchase more credits] | The exact rule Digi should use for Plus allowance vs Party Pack digis. |
| **Perplexity** add credits (de44dc45) | Settings | Rows "Plan credits / Purchased credits / Bonus credits / Total available 3,805 / 4,000"; sheet with $7 / $15 / $35 / $70 / $150 / $350 chips → "500 Credits" [Purchase]; "Turn on Auto-refill". | Keep it simple: one total, broken down underneath. |
| **Lensa** avatar packs | Start a pack | Section 2.2: 3 packs, middle "MOST POPULAR" pre-selected, "Why is it paid?", subscriber 50% off. | Honest "why it costs" copy. |

---

## 5. The 2026 rules that decide what you can copy

| Rule | Source and date | What it bans or requires | Mobbin examples now out of bounds |
|---|---|---|---|
| **No free-trial toggles** | Apple rejections from mid-Jan 2026 under 3.1.2 (RevenueCat, Feb 9, 2026; Adapty, Feb 11, 2026); Superwall–Apple meeting, Jun 3, 2026 (C) | Any switch that adds or removes a trial. The trial must be "attached directly to the product and clearly described". | Lensa (both), Picsart, Lovi, Riveo, Retake variant B |
| **Billed amount must be the most prominent price** | developer.apple.com/app-store/subscriptions (V, quoted in the prior Apple chapter) + Aug 2026 rejection: trial promoted "more clearly and conspicuously than the billed amount" (C) | Big "$7.49/month" with "$89.98 billed annually" in grey; a huge "Try for Free" with the price in small print. | VSCO new, Snapchat+ annual card, EPIK; arguably Remini's "Try For Free" |
| **One exit offer max** | Superwall, Jun 3, 2026: "One tasteful offer = allowed. Relentless pestering = manipulative flow = rejected." (C) | Repeated "wait, special offer" screens after a cancel. | (none seen on Mobbin in this set) |
| **A/B tests are fine, every variant must comply** | Same Superwall post (C) | Remote paywall changes are judged like a binary. | — |
| Design stats | Adapty State of Paywalls (C, vendor data; Mobbin sample of 100 paywalls for layout stats) | 22% of apps delay the close button (usually 3–5 s); 11% have no close button; 62% show 2 plans; apps with 2 plan lengths convert **67%** better; 41% use "Save X%", 16% a strike-through; 62% show the full annual price, 24% a monthly breakdown, 4% a weekly breakdown; 56% of CTAs lead with the trial; onboarding paywalls convert **0.85%** of views vs **0.23%** later; P&V buyers buy on the first view 44% of the time; only 35% of visual/copy tests raise LTV. | — |

---

## 6. Patterns that repeat, ranked for Digi

Count = how many of the 23 paywalls in sections 2–3 show it.

| Rank | Pattern | Count | Who | Verdict for Digi |
|---|---|---|---|---|
| 1 | **Hero shows the product's output** (before/after, live lens, effect video, result collage) | 19 / 23 | Snapchat, Remini, Lovi, FaceApp, Shots, CapCut, Riveo, Picsart, Unfold, Photoroom… | **Copy.** Use the user's own shot: free film look vs AI re-light, split slider. Fallback: a sample party strip. |
| 2 | **Close button visible on the first frame** | 20 / 23 (+Locket's "No thanks!") | all but Photoroom step 1, Halide main, Riveo (faint) | **Copy.** X top-left, 44 pt tap area, ≥ 3:1 contrast, at 0 s. |
| 3 | **Yearly pre-selected / only plan** | 13 / 23 | brands and editors | **Copy** for the contest (cash now). |
| 4 | **"Save X%" or "% OFF" badge** | 10 / 23 | Photoroom, Unfold, Prequel, GIO, Shots, FaceApp, EPIK, Lensa ×2, Snapchat+ | **Adapt:** "Best value" text only. Percentages drift (GIO). |
| 5 | **Weekly or monthly equivalent under a yearly price** | 12 / 23 | Photoroom, Remini, Prequel, GIO, Shots, Halide, Picsart, VSCO ×2, EPIK, AirBrush, Snapchat+ | **Copy, small.** "$39.99/year" big; "about $0.77/week" small and grey. Never the reverse. |
| 6 | **Strike-through price** | 6 / 23 (+Lensa packs) | Lensa ×2, CapCut, Snapchat ×2 | **Avoid.** Only real intro offers qualify, and Digi has none. |
| 7 | **Free-trial toggle** | 6 / 23 | Lensa ×2, Picsart, Lovi, Riveo, Retake B | **Avoid** (rejected since Jan 2026). |
| 8 | **Social proof on the paywall** (stars, reviews, award laurels, logos, "X people joined") | 6 / 23 | Prequel, GIO, Riveo, Canva, Lensa onboarding, Photoroom onboarding | **Adapt:** only real numbers. Before launch Digi has none, so skip. After 50+ real ratings, show "4.8★ on the App Store" with the count. Never a live "joined today" counter. |
| 9 | **Trial timeline / reminder promise** | 4 / 23 (+Canva line) | Picsart, Retake ×2, Canva | **Copy** with real dates. |
| 10 | **Generic "Continue" CTA** | 7 / 23 | Lensa ×2, Photoroom, Lovi, Shots, GIO, Halide step | **Avoid.** Name the action and price. |
| 11 | **Contextual paywall from a locked item** (lens, preset, tool) | 4 apps | Snapchat, VSCO, Photoroom, Locket tags | **Copy.** Locked AI look → half-sheet over the camera. |
| 12 | **Paywall after a free result in onboarding** | 3 apps | Photoroom, Halide (look pick), Lensa (feature tour, no result) | **Copy** Photoroom/Halide order: value, then price. |
| 13 | **Two-step paywall** (benefits page → plan sheet) | 4 apps | Locket, Halide, Photoroom, Snapchat | **Adapt:** fine if step 1 has the X and a price line. |
| 14 | **Honest "why it costs" copy** | 3 apps | Lensa packs, Halide, Riveo | **Copy** on the Party Pack sheet. |
| 15 | **Post-purchase "set up your perks" / celebration** | 3 apps | Snapchat+, Locket (hearts), Unfold | **Copy:** confetti + "Try your first AI look" button. |

---

## 7. The Digi paywall set, screen by screen (proposed)

Prices are Digi's draft: yearly $39.99 with a 3-day trial (pre-selected), weekly $6.99, Party Pack 25 digis $5.99 one-time. Allowances follow the prior pricing chapter: Plus 40 digis/week (max 15/day), trial 10 digis, free users 3 digis. All prices must come from RevenueCat/StoreKit, localized, never hard-coded.

### P0 · Onboarding before the paywall (Halide + Photoroom order)
1. **Pick your camera** on a sample party photo (Halide "Pick Your Look"): "This is a normal phone photo. Tap a camera to see it as a digi." Tiles: 2005 digicam / Flash film / Y2K / Booth strip. Selected tile gets an orange ring and a one-line description.
2. Camera permission with a fallback (Photoroom): "Use a sample photo instead".
3. First shot → free film look with the orange date stamp, instantly, on device.
4. **One free AI re-light** on that shot (uses 1 of the 3 free digis), with a short "What to expect" line before it runs (Lensa): "AI is great with light and colour. Sometimes it gets hands or text weird. If it does, redo is free once."
5. Then P1.

### P1 · Main paywall (shown once in onboarding, then from "Plus" in Settings and the camera's ✦ chip)
Top to bottom:
1. **Top bar:** ✕ top-left (visible at 0 s, 44 pt, white at ≥ 60% opacity on dark). "Restore" top-right.
2. **Hero (~40% of height):** the user's own shot as a before/after slider: left "Film (free)", right "AI re-light ✦". Orange date stamp stays on both. Fallback: a sample strip.
3. **Headline (serif, 28–32 pt):** pick one —
   | Option | Score /10 | Why |
   |---|---|---|
   | "Make every party look like this" | 8 | Points at the hero; no "free" in the headline. |
   | "Every party, digi'd" | 7 | On brand, but says less. |
   | "Unlock every look" | 6 | Clear, generic. |
   **Pick:** "Make every party look like this".
4. **Three benefit rows (one line each):** "40 AI digis every week" · "Every AI look + new Christmas & NYE drops" · "No watermark · host group rolls". Under the list, small: **"The camera and all film looks stay free."**
5. **Two plan cards, no toggle:**
   - **Yearly (pre-selected):** title "Yearly"; **largest price text on the screen: "$39.99/year"**; under it, grey: "3 days free, then $39.99/year · about $0.77/week". Text badge "Best value" (no percentage).
   - **Weekly:** "Weekly"; "$6.99/week"; grey "No free trial · cancel anytime".
6. **Timeline (only while Yearly is selected), with real dates:** "Today: everything unlocked, 10 AI digis to try" → "Sun, Dec 6: we'll remind you" → "Mon, Dec 7: $39.99 charged, unless you cancel". (Example for a trial started Fri, Dec 4, 2026; compute the dates from the purchase day.)
7. **CTA (two lines):** Yearly → **"Start free trial"** / second line, same weight as the card price line: "then $39.99/year after 3 days". Weekly → **"Get Weekly · $6.99/week"**.
8. Under the CTA (≥ 13 pt): "Cancel anytime in Settings › Apple ID. We'll remind you before you pay."
9. **Link:** "Just one party? **Party Pack · 25 AI digis · $5.99 once ›**" (opens P3).
10. Footer: Terms · Privacy · Restore.

From Dec 13 (prior pricing chapter): switch the RevenueCat Offering to yearly without a trial. Then the yearly line reads "$39.99/year · holiday looks all year" and the CTA "Get Yearly · $39.99/year". The timeline disappears.

**States:** loading → skeleton cards (never "$0.00"); purchasing → button spinner "Talking to Apple…"; cancelled → close silently; failed → "Payment didn't go through. You weren't charged." [Try again]; pending (Ask to Buy) → "Waiting for approval. We'll unlock it as soon as it's approved."

### P2 · Locked AI look (Snapchat Lens+ / VSCO pattern)
- The look runs on the user's photo first, with a "digi.pink preview" watermark.
- Half-sheet over the camera, X and drag handle: **"This look uses 1 digi"** / "You have 2 free digis left." Primary **"Use 1 digi"**; secondary text link "Get 40 a week with Plus ›".
- If 0 digis left → P4.

### P3 · Party Pack sheet (Lensa "Why is it paid?" + Replika tiles)
- H1 **"Party tonight?"**
- Tile: **"25 AI digis · $5.99 once"** · "No subscription. They don't expire." (If you keep the 12-month expiry from the prior chapter, say "Good for 12 months" instead; the screen must match the rule.)
- "or" → card: **"Plus · 40 AI digis every week"** · "$39.99/year" [See Plus].
- Small "Why do AI looks cost digis?" → "Each AI digi runs on a large image model and costs us real money per photo. Film looks run on your phone, so they stay free."
- CTA **"Buy Party Pack · $5.99"**.

### P4 · Out of digis (Ahead + Perplexity calm empty state)
- **"You're out of AI digis"** / "The camera and film looks are still free."
- Two tiles side by side: **Party Pack $5.99 (25)** | **Plus (40/week)**.
- For Plus users who hit the weekly cap: "Your 40 weekly digis refill on Mon, Dec 14." + Party Pack tile. Rule from Ahead: **weekly allowance is used first; pack digis only after.**
- Optional earn path (Riveo): "Invite a friend to a roll: you both get 5 digis" (only if the prior chapter's referral budget holds).

### P5 · Success (Locket + Snapchat+)
- Flash pop + orange date-stamp confetti (respect Reduce Motion), success haptic.
- **"You're in ✦"** / Plus: "Every AI look is unlocked and the watermark's gone." / Pack: "+25 digis. You have 27."
- One button: **"Try your first AI look"** (lands on the camera with the AI ring open), then "Back to the party".

### P6 · Trial reminder (local notification at 48 h)
"Your Digi trial ends tomorrow. It becomes $39.99/year unless you cancel in Settings." Tapping it opens Settings › Plus with a "Manage subscription" button (Apple's sheet).

### P7 · Settings › Plus (Photoroom + Halide)
"Plus · Yearly · Free trial ends Mon, Dec 7 · then $39.99/year" (after the first charge: "Renews Dec 7, 2027 · $39.99") · "40 AI digis left this week · refills Mon" · Pack digis: 12 · [Manage subscription] · "Request a refund" (opens Apple's refund flow) · "Tell us why you're leaving" (optional free text, never required).

---

## What this means for Digi

1. **Ship no toggle anywhere.** Attach the 3-day trial to the yearly product in App Store Connect and describe it on the card. Remove every reference to a "trial switch" from the prior mockups before the first App Review.
2. **Make "$39.99/year" the biggest price text on P1.** The trial line and the CTA can mention "free", but the billed amount must be at least as visible. Put "then $39.99/year after 3 days" inside the CTA's second line.
3. **Use 2 plan cards + a Party Pack link**, not 3 cards. Packs get their own sheet (P3) and their own trigger (P4). This settles the conflict between the prior UI and pricing chapters.
4. **Drop "Save 89%".** Use a "Best value" text badge and a small grey "about $0.77/week". No strike-through, no "people joined today" counter, no countdown.
5. **Show the user's own result in the hero of every paywall.** Build one component: before/after slider of the last photo (free film vs AI re-light). Fallback to a sample strip only if there is no photo yet.
6. **Put the ✕ top-left, visible at 0 s, 44 pt, good contrast.** Test it on a dark hero; Riveo's faint X is the failure case.
7. **Copy Halide's "Pick Your Look" as Digi's first onboarding screen**, using a sample party photo, and copy Photoroom's "Use a sample photo" fallback when the camera is denied.
8. **Add Lensa-style honesty in two places:** a one-line "What to expect from AI" before the first AI run, and "Why do AI looks cost digis?" on the Party Pack sheet. Both should lower refund requests in the highest-refund category (6.4% trial refunds in P&V, prior chapter).
9. **Show the trial timeline with real dates** (computed at purchase) and schedule the 48-hour local reminder. Ask for notification permission on this screen with the reason "so we can remind you before you pay".
10. **Contextual paywall for locked looks (P2):** run the look on the user's photo with a watermark first, then a half-sheet "This look uses 1 digi". Never jump to a full-screen paywall from the camera.
11. **Follow Ahead's rule for digis:** weekly allowance first, pack digis after; show both numbers in Settings and on P4.
12. **Celebrate the purchase and route to use:** P5 ends on "Try your first AI look". Snapchat+ and Locket do this; it gets value in the first minute.
13. **Copy all prices from RevenueCat Offerings at runtime** and never benchmark against a Mobbin screenshot without checking the currency (Mobbin often shows SGD).
14. **When you add social proof later, use only real numbers** ("4.8★ · 312 ratings" pulled at build time). Until then, show no proof rather than invented proof.
15. **For the one A/B test the contest allows** (prior chapter: annual $39.99 vs $49.99), make sure both variants pass these rules, because Apple reviews remote paywall variants like a binary [C, Superwall].

---

## Sources

**Mobbin (opened Nov 17, 2026; screens read at full resolution)**
- Lensa AI: onboarding https://mobbin.com/flows/4b82fe15-3501-43f6-8a67-a66441c9c194 · membership https://mobbin.com/flows/092858ce-a30c-45f1-b656-0e47e99ad25e · Magic Avatars packs https://mobbin.com/flows/e155bc11-e270-4c5a-b998-88a36d37da49 · pack view https://mobbin.com/flows/f61b5e15-ec32-406a-ac99-90f91662ae90
- Photoroom: onboarding https://mobbin.com/flows/80139c78-5c46-460c-96e2-8f0d9f576f57 · subscribe https://mobbin.com/flows/d04549cd-1994-497e-84ef-4742670404ff · cancel https://mobbin.com/flows/88660b48-78d0-456a-94e6-3768109b29bd · feature gate https://mobbin.com/screens/a3eb113c-d162-4aa6-a90d-2b753eb23f5a
- Halide Mark III: onboarding https://mobbin.com/flows/b37e3f2d-d9ae-4fcc-94ae-cd885c9d9621 · subscribe https://mobbin.com/flows/f2d4f292-14d4-4f52-b0fc-460422801955 · plan info https://mobbin.com/flows/d600a099-1c56-4fdc-80cc-6aa8f8fbe5a5 · membership https://mobbin.com/flows/2209931e-075d-4e25-ae02-a8cceeadb3ce
- Snapchat: Lens+ https://mobbin.com/flows/6cc91d0b-6e9c-4d61-8457-fde6970b2bfc · Snapchat+ https://mobbin.com/flows/36aaebb4-2add-4ef4-95ed-891f5775f1ee
- Picsart Gold https://mobbin.com/flows/411f2073-fce2-41fc-ad66-fdf52152b822
- VSCO: new paywall https://mobbin.com/screens/e7a24d64-cdd4-476e-8d50-5e6cf69d2958 · old paywall https://mobbin.com/screens/327d0ef0-45d8-45ef-a567-237fff4b76a2 · locked preset https://mobbin.com/screens/47c8d3e6-dbda-403b-a38b-415297e598cb · membership hub https://mobbin.com/flows/46bb5ebf-8251-4d2c-b829-3eac589e67d6
- CapCut: Pro https://mobbin.com/flows/d3514c15-f7eb-4b26-b206-05720da18c03 · onboarding https://mobbin.com/flows/9d3bcbd5-5d50-4575-ada6-bca52e7b4833 · credits https://mobbin.com/screens/c562545d-32ff-43fd-9093-9d47f9dcc20b
- Unfold: subscribe https://mobbin.com/flows/234c4707-df3a-486e-9dc1-944cb2d44851 · old Plus https://mobbin.com/screens/602eb74c-e29c-4236-8451-06ce393b6a1f
- Locket Gold: https://mobbin.com/flows/775b5243-e2f1-42fa-a2af-cbee353c1dcd · https://mobbin.com/flows/37926f7d-b9fd-4627-91bb-a861c883e1e2
- Lovi: https://mobbin.com/screens/6f736fc3-7614-4aae-96fe-1cdf458cde9d · https://mobbin.com/screens/b19ae89c-7af8-4485-b23a-2188aaf0522d
- Riveo: onboarding https://mobbin.com/flows/12237af7-5e0d-41cf-a476-946f066b1f46 · coins https://mobbin.com/screens/cb027d86-017a-4aec-9edd-786396673bc0
- Canva Pro: https://mobbin.com/screens/2dd2e80b-415c-4001-86ac-51e1b7c0def7
- Credit stores: Replika https://mobbin.com/screens/7f976de3-1ae2-49b4-83b9-aa546553fe07 · Bevel https://mobbin.com/screens/3030a3f1-ba05-4af5-a858-baf854626bbc · Ahead https://mobbin.com/screens/dbee17fb-d099-432f-b798-8b920cc8a92c · Perplexity https://mobbin.com/screens/de44dc45-bff5-4886-a7bc-13061cba2856

**Adapty paywall library (pages updated Nov 7–13, 2026; screenshot dates not given)**
- https://adapty.io/paywall-library/remini/ · /prequel/ · /gio/ · /faceapp-perfect-face-editor/ · /lensa/ · /shots/ · /retake-ai-face-photo-editor/ · /epik-ai-photo-video-editor/ · /airbrush/

**Rules and benchmarks**
- RevenueCat, "R.I.P. toggle paywall", Feb 9, 2026: https://www.revenuecat.com/blog/growth/rip-toggle-paywall
- Adapty, "Your toggle paywall is about to get rejected", Feb 11, 2026: https://adapty.io/blog/your-toggle-paywall-is-about-to-get-rejected/
- Superwall, "External checkout, A/B testing, and trial toggles: confirmed Apple's rules for iOS", Jun 3, 2026: https://superwall.com/blog/external-checkout-a-b-testing-and-trial-toggles-confirmed-apples-rules-for-ios
- Apple Developer Forums, "Rejected for 3.1.2(c) Subscriptions. Is 'Try for Free' too conspicuous now?", Aug 2026: https://developer.apple.com/forums/thread/841626
- Apple, Auto-renewable subscriptions (billed amount prominence): https://developer.apple.com/app-store/subscriptions/
- Adapty, State of Paywalls report (close-button delay, plan counts, badges, placement): https://adapty.io/state-of-paywalls/report/

**App Store data (Nov 17, 2026)**
- iTunes Lookup API, US: ids 885697368 (Halide), 588013838 (VSCO), 1500855883 (CapCut), 447188370 (Snapchat), 1600525061 (Locket), 897446215 (Canva), 1436732536 (Lensa), 1455009060 (Photoroom), 587366035 (Picsart); iTunes Search for Unfold (1247275033).
- US in-app purchase lists from apps.apple.com for Halide, VSCO, Locket, Unfold, Snapchat, CapCut (scraped Nov 17); Lensa, Photoroom, Picsart, Remini, Prequel, FaceApp, Retake, Shots, GIO, EPIK, AirBrush from the bible's `aiph/prof/profiles.json` (Nov 17).

---

## Fact-check (2026-11-16)

*Independent re-check of the 10 claims in this chapter that matter most for decisions, Nov 16–17, 2026: Apple Developer Forums, RevenueCat and Adapty primary pages (Adapty's State of Paywalls 2026 report fetched in full), and today's US IAP lists. Mobbin screenshots themselves were not re-opened.*

| # | Claim | Re-check result | Status |
|---|---|---|---|
| 1 | Apple rejects free-trial toggles under 3.1.2 since mid-January 2026 | Holds: RevenueCat (published Feb 9, 2026, updated Apr 23) quotes the rejection "Remove the toggle for adding or removing a free trial…"; Adapty says rejections began mid-January with no announcement; Superwall reports Apple banned the pattern after an off-record meeting | Confirmed (C: no Apple guideline text changed) |
| 2 | Apple rejected a paywall in Aug 2026 because it "promotes the free trial… more clearly and conspicuously than the billed amount" | Holds: Developer Forums thread 841626, "Rejected for 3.1.2(c)… Is 'Try for Free' too conspicuous now?", created Aug 2026 (screenshot dated Aug 12) | Confirmed |
| 3 | Adapty: 22% of apps delay the close button, usually 3–5 s; 11% have no close button | Holds word for word (State of Paywalls 2026) | Confirmed |
| 4 | Adapty: 62% of paywalls show two plans; apps with two plan lengths convert 67% better | Holds. Careful: the same report also says weekly plans bring 62% of subscription revenue. The chapter uses the right 62% | Confirmed |
| 5 | Lensa's "~~$99.99/year~~ $39.99" anchor: $99.99 is not in Lensa's US IAP list | Holds: today's top-10 US IAP list shows $29.99, $35.99, $39.99, $49.99 options and avatar packs $3.99–11.99, no $99.99 | Confirmed |
| 6 | GIO "Save 95%" is overstated (real 92–94%) | Arithmetic holds: 39.99 ÷ (11.99 × 52) = 6.4% → 93.6% saving; vs $9.99/week → 92.3%. GIO's US list still has weekly $9.99 and $11.99 and yearly $39.99 | Confirmed |
| 7 | Blinkist trial-reminder results (+23% trial starts, −55% complaints; opt-in 6% → 74%) are unverified | Still no primary source found; correctly labelled C | Unchanged |
| 8 | Photo & Video has the highest trial refund rate (6.4%) | Holds, from Adapty SOIS 2026 (6.4% global, 14.1% APAC, "leads all categories") | Confirmed |
| 9 | Adapty: 4% of paywalls show annual as a weekly price; 67% pre-select annual | Both hold in the same report | Confirmed |
| 10 | Apple is "getting stricter on instant paywall abandonment offers" | Holds as RevenueCat's statement in the Feb 9, 2026 toggle post | Confirmed (C) |

**What I changed**
- Nothing in the body: every checked number held. (One trap noted above: Adapty has two different "62%" figures.)

**What I could not verify**
- Everything read off Mobbin and Adapty paywall-library screenshots (copy, X position counts 10/9/2/2, the "2,342 people" counter, Unfold's S$ prices, CapCut's $129.99 benchmark price): not re-opened in this pass.
- The 13/6/4 split of yearly/weekly/monthly defaults across 23 paywalls: the author's own count.
