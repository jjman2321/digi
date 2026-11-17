# 10 · Onboarding of viral consumer apps, screen by screen (and Digi's first 60 seconds)

*Digi bible, chapter 10. Written Nov 17, 2026. Track: the first-run journey (welcome → questions → permissions → sign-up → first value → paywall) of 18 consumer apps known for strong funnels, read screen by screen on Mobbin, plus every published onboarding number I could check. It ends with Digi's onboarding, screen by screen, with exact copy.*

**Labels**
- **V** = verified by me on Nov 17, 2026. For Mobbin, I downloaded every screen of the flow at full size, put them in numbered contact sheets and read them in order. For the web, I read the primary page.
- **C** = claimed by a vendor, a founder or a secondary source, with no sample size or method I could check.
- **E** = my estimate or recommendation. Confidence is given as high, med or low.

**What this chapter does not repeat.** Chapter 07 covers photo-app paywalls and chapter 08 covers the paywalls of Cal AI, Duolingo, Opal, Speak, Rise, Flo, Ladder and Bumble. Here I cover **everything before the paywall** (and the paywall only as the last step of the funnel). Contact sheets and notes are in `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/bible/ob10/`.

---

## Key takeaways

1. **Viral apps run one of three onboarding styles, and Digi needs the third one.**
   - **"Quiz then paywall" utilities** run 17–45 screens before the price: Cal AI 32, Rise 45, Flo 25, Speak 21 [V].
   - **Social camera apps** run no paywall at all and spend their screens on friends and permissions: Locket, Lapse, Gas, BeReal, Partiful [V].
   - **AI photo apps** run fewer than 12 screens, show a "wow" on a sample photo, then the paywall. Photoroom does it in 10 [V].
   - Digi is a social camera that sells AI. It should borrow the social camera's speed to the first shot and Photoroom's "wow, then price".
2. **Long quizzes work only when the answers produce a real number.** Cal AI turns 17 answers into "Gain 6 kg by October 13" and calorie rings. Rise turns its answers into "Tonight, 12:01a–1:01a is the ideal time…". Flo turns them into "Sam, it's likely you're in your luteal phase" [V]. Digi has nothing to calculate, so a long quiz would be fake personalization. **Use 2–3 questions, each of which changes what the user sees.**
3. **More screens before the price can lift conversion, but only if they build value.**
   - Superwall measured 40M+ onboarding paywall opens (Feb–May 2026): multi-page paywall flows converted at **12.41% vs 9.07%** for single-page ones, a 37% lift. Superwall itself warns "the key takeaway isn't to mechanically add screens" [V, Superwall, May 26 2026]. Its own Stompers case study went the other way: a single-page paywall beat a multi-page flow by 16%+ [C, Superwall]. Test it, don't assume it.
   - Coconote went from 5 to 13 onboarding screens and saw +16% trial conversion [C, second-hand].
   - Digi's best "extra screen" is its own first developed photo, not a question.
4. **The best camera onboarding starts with the shutter.** Lapse opens on a black viewfinder with a glowing icon and a shutter button. Your first tap takes a photo, and only then does it ask for notifications: "Turn on Notifications to see snaps when they develop" [V]. Permission requests ride on a reason the user just felt. Copy this.
5. **Apple's 2026 pre-permission rules kill several patterns you see on Mobbin.**
   - A custom screen before a system alert may have **only one button**, titled "Continue" or "Next", never "Allow", and **no cancel or close** [V, Apple HIG Privacy].
   - For tracking (ATT), "displaying an image of the alert" and "annotating the screen behind the alert" cause rejection [V, same page].
   - Cal AI (fake dialog with a 👆), Gas (👆 under the real alert), Opal (arrow pointing at "Continue") and Locket ("Not now / Allow Full Access" on its contacts primer) all show patterns Digi must not copy.
6. **Account creation comes last in the social camera apps, and Apple allows no-login use.** Locket asks for an email only after you reach the camera. Duolingo puts the lesson before the account. Lapse asks for a phone number after the demo shot [V]. Apple 5.1.1(v): "If your app doesn't include significant account-based features, let people use it without a login" [V]. **Digi needs no account until someone joins a Roll.**
7. **Rating prompts before first use are risky and against the spirit of 5.6.1.** Cal AI shows a "Give us a rating" screen at step 25 of 34, before the user has scanned one meal [V]. Apple: "Use the provided API… we will disallow custom review prompts" [V, guidelines updated Oct 16, 2026]. Digi asks via the system API only after a share.
8. **Commitment and pledge screens are common, and one of them fits Digi honestly.**
   - Flo: "I, Sam, will use Flo to…" plus "Tap and hold on the Flo logo to commit".
   - Duolingo: an "I'M COMMITTED" button.
   - Opal: "What level of commitment feels right?".
   - Bumble: "It's cool to be kind… I accept" [V].
   - Digi's honest version is the **consent pledge before the first AI photo** ("everyone in this photo said yes"). It is both a commitment step and a legal need (Apple 5.1.2(i) on third-party AI).
9. **"Where did you hear about us?" is standard, and Digi needs it more than most.** Cal AI, Speak and Photoroom all ask it in the first 10 screens [V]. Contest profit is net of marketing spend, so one tap of attribution per install is worth it. Make it one tap that advances on its own, with a Skip.

---

## 0. What I corrected or added vs earlier chapters

| # | Earlier claim (file, section) | What is true now | Source |
|---|---|---|---|
| 1 | `digi-deep/06` §3.1 O8: one Halide-style screen asking for **Camera and Photos together** in onboarding | Ask for **Camera only**, when the camera first opens. Saving to Photos asks for add-only access on the first save. Importing via the system picker (PHPicker) needs no permission. The old screen contradicted §0 item 9 of the same file ("Photos only on save") | HIG Privacy: "Avoid requesting permission at launch unless the data or resource is required" [V] |
| 2 | `digi-deep/06` §3.1 O11: notification primer with **"Turn on / Not now"**, Luma style | Drop the separate primer. Put a **user-tapped toggle on the "developing" screen** ("Ping me when it's ready") that opens the system alert directly. Apple's pre-alert rule (one button, no cancel) covers camera, mic, location, contacts, calendar and tracking. Notifications are not on that list, but a forum rejection (Mar 2026) shows reviewers apply the same "no exit button" logic to primers | HIG Privacy [V]; Apple forum thread 817672 [V, developer's quote of the review] |
| 3 | `digi-deep/06` §3.1: **11 onboarding screens (O1–O11)** before and around the first AI result, including O4 "Who's usually in the shot?" | Cut to **4 taps before the camera** (welcome, pick camera, occasion, heard-from). Drop O4: its answer changes nothing the user sees | Pattern analysis §3 [V]; Superwall caveat [V] |
| 4 | `digi-deep/06` §3.1 O2: **age gate as the second screen**, before any value | Move the 18+ statement to the **AI consent screen**, right before the first upload. The free on-device camera sends nothing to a server. The 18+ rule exists because of AI on real people's faces, so ask it where it applies | E, med. Lapse puts its age toggle in sign-up, not at launch [V] |
| 5 | `bible/08` §2.1 says Cal AI's paywall comes after a "rating ask before any payment" | Confirmed, and more precise: it is screen 25 of 34. Apple 5.6.1 says custom review prompts are disallowed. If Cal AI fires the system prompt from that screen, it is asking for stars before the user has used the product. **Digi must not copy it** | Mobbin flow 579da5dd [V]; Apple 5.6.1 [V] |
| 6 | (not covered) | Gas, often cited as a viral onboarding model, **no longer exists**. Discord shut it down on Nov 7, 2023. It is not on the US App Store today | TechCrunch Oct 19 2023; Wikipedia [V]; iTunes Search API, Nov 17 2026 [V] |
| 7 | (not covered) | Umax and noplace are **not on Mobbin**. Umax's App Store text confirms the pattern people talk about: "Take a selfie… Get your analysis*… *analysis results require subscription" | iTunes Lookup API, Nov 17 2026 [V] |
| 8 | (not covered) | Superwall's Rizz case study (+10% from a two-step paywall) uses a **trial on/off toggle and a delayed X**. Apple has rejected trial toggles since Jan 2026 (see `bible/08`). Don't copy it | Superwall, Jan 26 2026 [V] |

---

## 1. Method and limits

- **Mobbin:** 20 searches for flows and screens: app names, "AI photo app onboarding", "retro film camera filter app onboarding", "AI face scan", "Locket widget onboarding" and others. For each app I downloaded every screen of the onboarding flow, not just the 3–5 previews the tool shows, and read them in numbered contact sheets.
- **Apps read screen by screen (16):**
  - Utilities: Cal AI, Opal, Rise, Duolingo, Speak, Flo, Ladder, Yuka.
  - Social: Gas, Bumble.
  - Camera and photo: Locket, Lapse, Photoroom, (Not Boring) Camera.
  - Party: Partiful.
  - Short notes: BeReal (first-run home only) and Lovi (face scan).
- **Not on Mobbin:** Umax and noplace, so I used their App Store pages and did not guess their screens. Halide's onboarding is in `bible/07` §2.4.
- **Dates:** Mobbin doesn't print capture dates. Where a screen shows a date I note it: Locket "Sep 28 – Oct 4" (2025), Gas "Class of 2026" (2022–23 era), Rise trial dates "June 27/29" (~2023, per `bible/08`). **Live apps may differ today.**
- **Timing can't be read from stills.** I can't tell how long a loader runs or whether a close button appears late. I only report what is in the frame.
- **Ratings** are from the iTunes Search/Lookup API, US storefront, Nov 17 2026 [V].

---

## 2. Screen by screen

The **funnel count** under each app is the number of screens before the first real value and before the price. That is the number to compare.

### 2.1 Cal AI (4.80★, 375,959 US ratings) [V]
Mobbin: [Onboarding, 34 screens](https://mobbin.com/flows/579da5dd-453a-4e7c-9c11-d20708a4db82) · [newer Onboarding, 17 screens](https://mobbin.com/flows/05ca2ff4-106a-4fda-a0dd-3cc9b73a83c1)

**Look:** white background, black type, black pill buttons ("Continue"). Thin progress bar top centre, back arrow in a grey circle top left, "EN" language chip top right.

| # | Screen | Exact copy / notes |
|---|---|---|
| 1 | Splash | Apple-shaped logo + "Cal AI" |
| 2 | Welcome | Phone mockup scanning a sandwich (camera UI with "Scan Food"). H: **"Calorie tracking made easy"**. CTA **"Get Started"**. "Already have an account? Sign In" |
| 3–4 | Gender | "Choose your Gender" · sub "This will be used to calibrate your custom plan." Male / Female / Other. Continue stays grey until you pick |
| 5 | Workouts | "How many workouts do you do per week?" 0-2 "Workouts now and then" / 3-5 "A few workouts per week" / 6+ "Dedicated athlete" |
| 6 | Attribution | **"Where did you hear about us?"** Instagram, TikTok, TV, Friend or family, Facebook, Youtube… (brand icons) |
| 7 | Past tries | "Have you tried other calorie tracking apps?" No / Yes |
| 8 | Education | "Cal AI creates long-term results". Chart "Your weight" vs "Traditional diet". "80% of Cal AI users maintain their weight loss even 6 months later" (no source on screen) |
| 9–11 | Body | "Height & weight", Imperial/Metric toggle, wheel pickers |
| 12 | Birthday | "When were you born?" month/day/year wheel |
| 13 | Goal | "What is your goal?" Lose / Maintain / Gain weight |
| 14–15 | Target | "What is your desired weight?" Ruler slider "Gain weight 77.0 kg" |
| 16 | Reassure | "Gaining **6 kg** is a realistic target. It's not hard at all!" + "90% of users say that the change is obvious after using Cal AI…" |
| 17 | Speed | "How fast do you want to reach your goal?" Sloth / rabbit / cheetah slider, 0.1–1.5 kg, "Recommended" pill |
| 18 | Proof | "Gain twice as much weight with Cal AI vs on your own". Bars: Without 20% / With 2X |
| 19 | Barrier | "What's stopping you from reaching your goals?" Lack of consistency / Unhealthy eating habits / Lack of support / Busy schedule / Lack of meal inspiration |
| 20 | Projection | "You have great potential to crush your goal". Curve 3 / 7 / 30 Days |
| 21 | Trust | "Thank you for trusting us · Now let's personalize Cal AI for you…" Card: "Your privacy and security matter to us." |
| 22 | Health | "Connect to Apple Health" Continue / **Not now** |
| 23–24 | Settings as questions | "Add calories burned back to your daily goal?" No/Yes · "Rollover extra calories to the next day?" No/Yes |
| 25 | **Rating ask** | "Give us a rating" · laurel "4.8 ★★★★★ 100K+ App Ratings" · "Cal AI was made for people like you" · 3 avatars "5M+ Cal AI Users" · review card "Jake Sullivan ★★★★★ I lost 15 lbs in 2 months!…" |
| 26 | Notifications | "Reach your goals with notifications". **A drawing of the iOS dialog with a 👆 pointing at "Allow"** |
| 27 | Sign-in | "Save your progress" with the Google sign-in system alert · "Would you like to sign in later? **Skip**" |
| 28 | Referral | "Enter referral code (optional) · You can skip this step" |
| 29 | Build-up | "All done! Time to generate your custom plan!" |
| 30 | Loader | "18% We're setting everything up for you · Customizing health plan…" + checklist (Calories, Carbs, Protein, Fats, Health Score) |
| 31 | **Result** | "Congratulations your custom plan is ready!" · "You should gain: **Gain 6 kg by October 13**" · 4 macro rings · "You can edit this anytime" · CTA **"Let's get started!"** |
| 32 | Sign-in again | "Save your progress": Sign in with Apple / Google · Skip |
| 33 | Paywall | "Restore" top right, **no X**. "Unlock CalAI to reach your goals faster." · "✓ No Payment Due Now" · Continue · "Just $29.99 per year ($2.49/mo)" |
| 34 | Home | |

**Funnel count:** 32 screens before the price. About 17 of them collect input. The product's core action, scanning food, is never done before paying.

**Published numbers:**
- Superwall's case study (Apr 15, 2026): **87% of new users see a paywall, 57% of viewers start a transaction, 63% of those complete**. That means roughly 31% of new users finish a trial or purchase (calc). Cal AI ran 61 tests on the onboarding paywall alone [V, vendor case study].
- The founder said adding questions raised conversion "because users invest more time" [C, Founderpath, Jun 2025].
- Latka lists 20–25% first-session conversion [C, May 2025].

**Copy:** the "your result is ready" screen built from the user's own input, and the attribution question.
**Leave:**
- The fake permission dialog with a finger.
- The rating ask before use.
- Unsourced claims ("80%", "2X").
- 30+ screens.
- A paywall with no X.

### 2.2 Opal (4.72★, 91,654 ratings) [V]
Mobbin: [Onboarding 17](https://mobbin.com/flows/91394aa7-8b77-461f-b95a-ad3f177e98f3) · [Onboarding 23](https://mobbin.com/flows/7b6dc8e9-56e3-4db3-a898-cfdddc9b1e8a)

**Look:** pure black, white type, white pill buttons. A 3D opal gem for the hero, a purple-to-blue gradient for the big numbers, and story-style segment bars in the "news" section.

**Flow A (17):**
1. Logo.
2. **"Welcome to Opal" · "Starting today, you can get back more than 6 years of your life."** CTA "Get Started", "Sign In" top right.
3. Same screen with a laurel crest "The Focus Company".
4. "How much time do you spend on your phone? · On your phone only". Slider "8 Hours" with −/+, plus a text link "I don't know".
5. "What habit would you like to change? · Select one or multiple", badge **"+3.3M people in common"**. Options include "Using the phone while driving", "Scrolling first thing in morning", "Feeling bad after using my phone".
6. "How do you plan to use Opal?" On my Own / With my Family or Kids / With my Friends.
7. "How old are you? · So we can suggest the best setup for you." Wheel, with **Skip** top right.
8. "Calculating" bar.
9. Story mode: **"Some not-so-good news, and some great news."**
10. "The good news is that Opal can help you get back **8 years+** of your life free from distractions". Fine print: "According to your profile combined with Opal program".
11. **"What level of commitment feels right?"** I'm just curious and exploring / I need firm controls that block distractions for me / I want to understand my Screen Time first.
12. "Let's take the first step: Opal will connect to your Screen Time to give you a personalized focus report."

**Flow B (23) adds:**
- The **App Tracking Transparency (ATT) prompt over the welcome screen at launch**.
- "What is your occupation?".
- The bad news: "you'll spend **114 days** on your phone this year. Meaning that you're on track to spend **22 years** of your life looking down at your phone. Yep, you read this right." (footnote: "based on an average 16 waking hours each day").
- "Connect Opal to Screen Time, Securely" with a **drawing of the system dialog and an arrow pointing at "Continue"**.
- A sheet: "We take privacy very seriously. Opal does NOT see: Any data you enter… Your browsing data… Your Screen Time data, Opal only displays it" → **"Give Permissions to Opal"**.
- The real system alert and passcode, then "Let's create your account · Join 4,000,000+ gems on their journey" (email, Apple, phone; Skip).

**Funnel count:** 16–22 screens before the core permission. The paywall comes after (see `bible/08` §2.5).
**Copy:** the "what we don't see" privacy list right before a scary permission. Digi's version is "what we upload: only the photo you pick for AI".
**Leave:** the scare maths, the ATT prompt at launch, and the annotated dialog.

### 2.3 Rise (4.73★, 74,458 ratings) [V]
Mobbin: [Onboarding 46](https://mobbin.com/flows/279b34bb-f95f-4d50-8af9-7113aeeaae6c) · [Subscribing 8](https://mobbin.com/flows/bcb71a32-b32d-4f07-a310-85e6d1a4a43a)

**Look:** black, violet accents, all-caps outlined buttons that turn solid when the step is done.

**Story opening (1–4):**
- "Imagine I told you there was a drug that gave you…" → "That drug is Sleep." → "That one thing is called Sleep Debt."
- CTA **"FIND MY SLEEP DEBT"**. "Have an account? Login" top right.

**Questions (5–15):** chips, several multi-select.
- "What brings you to RISE?".
- "Do you experience any of the following?". The button reads **SKIP** until you select something, then becomes **NEXT**.
- Age, "Are you an undergraduate or graduate student? · We know it's hard to prioritize sleep as a student.", gender, "How do you currently manage… your energy levels?", "What are some things that help you have a good night's sleep?".

**Permissions, each with its own "why" (16–24):**
- "Without your sleep and step data, Rise won't work" (Our Special Recipe: PHONE MOTION / SLEEP / STEPS) → "OK, LET'S DO IT!".
- "First, let's enable Phone Motion Data" with the button "Enable Phone Motion Data" → system alert. Link "Why do you need this?".
- Apple Health: "VIEW & ALLOW ALL", link "Tell me again, why is this important?".
- "We'll also need to send you reminders" → "Enable Notifications" → "Notifications Enabled" ✓.
- "Analyzing your data… This may take up to 30 seconds" with a step checklist.

**Personal result (25–34):**
- "Based on your sleep patterns, we've learned your **sleep need is 10h 30m**".
- Slider to adjust it.
- "When you sleep less than your sleep need, you build up sleep debt".

**Email (35–36):** "Enter your email to save your progress · Your privacy matters: Read our policy".

**Tour (37–46):**
- "This is your Energy Schedule today." → "you'll feel an energy peak from **9:50a–12:52p** today" → "energy dip from 2:57p–5:03p".
- Then **"Tonight, 12:01a—1:01a is the ideal time for your body to fall asleep… START TODAY"** → paywall: "FREE FOR 7 DAYS. THEN ~~$59.99~~ $35.99/YEAR".

**Funnel count:** 45 screens. But from screen 29 on, every screen shows the user's own numbers.
**Copy:**
- One "why" link under each permission.
- A step checklist on the loader that shows real stages.
- The idea that **the last screen before the price is a personal result in big type**.

**Leave:** the struck-through "original" price (see `bible/08` on 3.1.2).

### 2.4 Duolingo (4.72★, 5,598,937 ratings) [V]
Mobbin: [Onboarding 20](https://mobbin.com/flows/b0b4f93f-5637-46ec-9d77-49ecda6b991d)

**Look:** white, green #58CC02 3D buttons in ALL CAPS, the owl in speech bubbles on every screen.

1. Green splash.
2. **"duolingo · Learn for free. Forever."** GET STARTED / I ALREADY HAVE AN ACCOUNT.
3. "Hi there! I'm Duo!"
4. **"Just 7 quick questions before we start your first lesson!"** It sets the length up front.
5–6. "What would you like to learn?" Flag list. CONTINUE greyed until you pick.
7. "COURSE BUILDING… Get ready to join the **7 million people** currently learning French with Duolingo!"
8. "How much French do you know?" Signal-bar icons, 5 levels.
9–10. "Why are you learning French?" Multi-select checkboxes.
11–12. "Let's set up a learning routine!" → "What's your daily learning goal?" 5/10/15/20 min (Casual / Regular / Serious / Intense). CTA **"I'M COMMITTED"**.
13. "That's 50 words in your first week!"
14. **"I'll remind you to practice so it becomes a habit!"** A greyed drawing of the system dialog with an arrow toward Allow. CTA "REMIND ME TO PRACTICE".
15. "I'll cheer you on from your home screen!" Widget mock with streak 1. ADD WIDGET / NOT NOW.
16. "Here's what you can achieve in 3 months!"
17–18. **"How do you want to get started?"** Super Duolingo (RECOMMENDED, "Faster progress, no ads") vs "Learn for free" → "Awesome! You can upgrade anytime."
19–20. "Where would you like to start?" → "Since you know a few words, let's start at Score 10!" → **first lesson. No account yet.**

**Funnel count:** 20 screens to the first lesson. The paid plan is a choice on screen 17, not a wall.
**Copy:**
- Say the length up front ("3 quick taps").
- The paid plan offered as a calm choice, with "You can upgrade anytime" when they say no.
- Value before the account.

**Leave:** the drawn dialog with an arrow.

### 2.5 Speak (4.83★, 67,141 ratings) [V]
Mobbin: [Onboarding 24](https://mobbin.com/flows/60e05ece-3567-4ad8-9dbe-577de850a017)

**Look:** white, electric blue, a blob mascot.

- **Opening (1–6):**
  - "Adults can become fluent — even faster than kids." (Tap to continue).
  - "Speak turns science into real speaking practice from Day 1." CTA "Start speaking today".
  - "What language do you want to learn?".
- **Account wall (7–9):** "Let's sign up to continue". Email / Google / Apple / Facebook.
- **Questions (10–13):** "Hey there! I'm Speak Tutor. I have a few quick questions…" Then **"How did you hear about Speak? Select all that apply"**, with 11 options including "Search Engine (ex. Google, ChatGPT)" and "Influencer or Celebrity".
- **Answer by voice (14–15):** "What's motivating you to learn French?" A big mic button, plus a text fallback "I can't speak now". **The first input is the core action: speaking.**
- **Result (16–21):**
  - "In two months, you'll be able to communicate while traveling in France."
  - "We have the perfect course for you! Upper Elementary Part 1 · 47 lessons".
  - Reviews ("Maria C., Speak user for 193 days").
  - "Generate your curriculum" → "Generating your curriculum…" → "Here's what we learned about you."
- **Paywall (22):** "Speak 1,000 phrases in your first week · Start my free week". X top left.

**Funnel count:** 21. But the user does the core action (speaks) at screen 14.
**Copy:** make the first input the product's own action. Digi's version: the first input is a shutter tap.
**Leave:** the account wall at screen 7.

### 2.6 Flo (4.74★, 2,024,444 ratings) [V]
Mobbin: [Completing account setup, 26](https://mobbin.com/flows/0223522f-775d-4f5e-92d5-67473763e19e)

**Look:** pink gradient, a battery mascot, "Skip" top right on most screens. **It uses the user's name in headlines.**

- **Questions with replies (1–5):**
  - "What are your main reasons for using Flo? Choose all that apply."
  - **Each option expands with a short reply when tapped** ("Flo helps you predict your next period, so you're never caught off guard.").
  - "How do you feel about your period, Sam?" It's a love-hate relationship 😅 / Embarrassed / I hate it / I want to understand it better / We've become friends.
- **Proof (6–7):**
  - "Flo's tracked over 2.2 billion cycles".
  - "Over 7 million 5-star ratings on App store and Google Play" with 4 quoted reviews.
- **Roadmap (8, 20):** a path with locks. "First, let's look at your cycle — Find out your Well-Being Battery charge today" … "Finally, let's take a look at your sleep".
- **Real input → real result (9–14):**
  - "Tap on the day when your last period started" ("I don't remember").
  - "We started with a 5 day period. Adjust for smarter predictions".
  - Result: **"Sam, it's likely you're in your luteal phase"** with a hormone chart.
  - "Analyzing your cycle… 90% of members said Flo accurately predicts the start of their period. *2,000 members surveyed (2021)". **This is the only on-screen claim in the whole sample with its sample size and year.**
- **Referral mid-flow (17):** "Supercharge your sex lives with Flo for Partners" Invite my partner / I'm not interested.
- **Build-up (23–24):** "The world's #1 women's health app · 12% Personalizing your experience…" → "When you Flo, you know" (Without Flo / With Flo).
- **Commitment (25):** **"I, Sam, will use Flo to improve my relationship with my period… Tap and hold on the Flo logo to commit."**
- **Paywall (26):** "Choose your plan". "Not sure yet? Start a free trial" as a separate row. Yearly pre-selected. **The free path is a text link: "Cancel your plan anytime or choose limited access without full Flo benefits."**

**Funnel count:** 25.
**Copy:**
- Expanding answers that reply to the user.
- Claims printed with their sample and year.
- A referral ask placed inside onboarding.

**Leave:** the hold-to-commit ritual. It's fine for a health habit; for a party camera it would be silly.

### 2.7 Ladder (4.95★, 223,645 ratings) [V]
Mobbin: [Onboarding 14](https://mobbin.com/flows/81034eff-5cf2-4439-ad4b-b57adfbb6690)

**Look:** black with neon yellow-green, condensed all-caps type, real coach photos and video.

1. Logo.
2. Full-bleed coach photo: **"SIGN IN TO GET YOUR FREE PLAN"**, Sign in with Apple only, **"Free To Try • No Credit Card To Start"**.
3–4. **An auto-playing coach video** with story bars, Skip and a sound toggle: "LADDER HELPS YOU TRAIN WITH PURPOSE" / "LET'S FIND YOU A TEAM".
5–8. "Let's find the team for you." Then a filter sheet (styles, workout length, coach gender). The CTA shows a **live match count**: "APPLY FILTER (27 Matches)" → 5 → 4.
9–11. Coach cards: "Coach Maia · DEFINE · Sculpt a lean, toned physique…" LEARN MORE / TRY TEAM.
12. **"How your free trial works"** timeline: Welcome ✓ → Now: Welcome Workout ("Unlock your plan by completing your Welcome Workout") → Day 5 Trial Reminder → Day 7 Trial Ends.
13. **"FREE PASS · Your Trial Has Officially Started · Free for 7 Days"** ✓ Get notified when your trial is about to end… **YES, REMIND ME** / MAYBE LATER.
14. Home: "WELCOME WORKOUT" + "Get Started Challenge 30% · Complete Workout To Unlock Plan".

**Funnel count:** 13, with a no-card in-app trial.
**Copy:**
- The live count that shrinks as you filter. Digi's version: "12 looks match your party".
- The notification ask framed as **the trial reminder**.
- A first task that "unlocks" the plan.

### 2.8 Yuka (4.82★, 102,452 ratings) [V]
Mobbin: [Onboarding 10](https://mobbin.com/flows/acae0386-5cd2-4d55-a133-9af19587daa2)

**Look:** green, a carrot mascot, script headings.

- **3 slides:**
  - "Welcome! Yuka is a completely independent app that helps you choose the right products" (Slide to continue).
  - "Product analysis".
  - "Recommendations" (Let's go!).
- **Email account:** "Root for good health!" Sign in with email → Create account ("By continuing, you agree to the terms of service.").
- **First action:** **"Yuka scans the barcodes of your products to analyze them · Scan my 1st product"**.

**Funnel count:** 9. No quiz, no paywall.
**Note:** with only a 3-slide intro, Yuka still has 102K ratings at 4.82★. For a one-action app, the first action is the onboarding.

### 2.9 Gas (shut down Nov 7, 2023) [V]
Mobbin: [Onboarding 22](https://mobbin.com/flows/4eba4f5a-1b12-4aa8-b06a-7f4b6867e52b) · [Profile photo & friends 10](https://mobbin.com/flows/e18ab0f7-b5a7-4320-be0c-cb0d262fa71a)

**Look:** a dark splash, then full-bleed bright orange, one big centred question per screen, white pill buttons.

- **Age first (2):** "Enter your age" wheel. "By entering your age you agree to our Terms and Privacy Policy".
- **School as the "room" (4–8):**
  - "Connect your school to find friends · Find My School", with a lock line: "Location is only used to find nearby schools."
  - "What grade are you in?" (Grade 9 · CLASS OF 2026…).
  - "Pick your school" with **member counts per school** ("Martin Luther School · 30 MEMBERS").
- **The hook (9):** **"30 classmates found at Martin Luther School · Find My Friends"** → contacts alert. "We will never text or spam your contacts."
- **Identity (11–24):** phone + SMS code ("Remember — never sign up with another person's phone number."), first and last name, a prefilled username, gender (Boy / Girl / Non-binary), profile photo ("Add a photo so your friends can find you", Skip).
- **Friends:** "Add Friends · PEOPLE YOU MAY KNOW" with mutual counts.
- **Notifications:** "GAS WORKS BEST WITH NOTIFICATIONS ON" over the **real** alert, with a 👆 drawn under Allow.
- **Start:** "WELCOME TO GAS · Answer Polls About Friends · Get Flames When Picked" → poll "1 of 12 · Best person to go camping with".

**Funnel count:** about 30, all spent building the friend graph. No paywall in onboarding.
**Outcome:** launched Aug 2022, 1M daily users within two months, bought by Discord Jan 2023, shut down Nov 2023 [V, TechCrunch / Wikipedia].
**Copy:** "X people you know are already here" with a real count. For Digi that's the Roll: "14 shots so far · 6 people".
**Leave:** the 👆 annotation. Remember Gas's lesson: a graph-first onboarding grows fast and dies fast without a reason to come back.

### 2.10 Bumble (4.32★, 1,772,588 ratings) [V]
Mobbin: [Completing account setup (BFF), 10](https://mobbin.com/flows/795ff2ae-e5a9-4684-a24c-cdd2ea4bce63)

**Look:** white, black circular arrow button bottom right, "Skip" bottom left, a live counter "0/5 selected".

- "Make new friends at every stage of your life" → Got it.
- "Your life · Pick up to 3", with the toggle "Shown on my profile".
- "Choose 5 things you're really into · Proud foodie or big on bouldering?…" Emoji chips, "5/5 selected".
- "Your relationship · You can change this later. It'll show on your profile."
- **Pledge:** photo of two friends, **"It's cool to be kind · We're all about equality in relationships… By using Bumble, you're agreeing to adhere to our values as well as our guidelines." CTA "I accept".**
- First card with a swipe-hand hint.

**Copy:** a values screen with one honest "I accept". It's the closest model for Digi's consent step.

### 2.11 Locket (4.76★, 593,068 ratings) [V]
Mobbin: [Onboarding 25](https://mobbin.com/flows/0362c07a-8b68-4db1-b90a-5fbb5e38e52c) · [Widget tutorial 4](https://mobbin.com/flows/29465928-82fe-42e1-a44a-f47a006cc3b1)

**Look:** near-black with a warm amber glow at the bottom, yellow pill buttons with "→".

1. Phone outline with the widget showing a friend's selfie: **"Locket · Live pics from your friends, on your home screen"** Create an account / Sign in.
2–6. "What's your number?" → "Verify your number" (6-Digit Code, "Try again in 29 secs").
7–10. "What's your name?" → "Pick a username · This helps your friends find you on Locket!" → "Available!".
11. Photos alert, with Locket's line below it: "Locket needs photo library access so you can pick your photos. 🔒 Only photos you pick are shared".
12–13. **"SEP 28 – OCT 4 · Next, share your favorite photos from last week"**. If empty: "No photos found". If you tap Skip: **"Skip sharing? Your friends want to see what you were up to last week 😊"** Cancel / Skip. That confirm leans on mild guilt.
14. "Find your friends! Locket needs Full Access to your contacts…" **"Not now" / "Allow Full Access"**. Apple's HIG says one button titled "Continue", not "Allow".
15–16. "Add your friends · So they can see your Rollcall!" Search contacts; Telegram / Insta / WhatsApp / Others; "Share your Locket link"; contacts with "+ Add".
17. **"Rollcall happens every Sunday afternoon · Rollcall will appear on your Lock Screen when it's time to share this week's pics!"** It sets the weekly ritual during onboarding.
18. "Add the widget!" + a 4-step widget tutorial.
19. "Your Locket is set up · We'll notify you once your friends have set up theirs" Finish.
20–24. **On the camera:** a sheet "Add an email address · This is required so that you can continue to sign in to your account". Account hardening comes after the user reaches the product.
25. Camera home, "1 Friend".

**Funnel count:** 19 to the camera. No paywall.
**Copy:**
- **Tell people when the ritual happens.** Digi: "Your roll develops tomorrow at 9:00 AM".
- Share buttons for WhatsApp and Instagram, not just contacts. WhatsApp matters most in Egypt and the Gulf.
- Ask for an email after the user reaches the camera.

**Leave:** the guilt confirm and the "Allow"-titled primer.

### 2.12 Lapse (4.75★, 118,322 ratings) [V], the closest model for Digi
Mobbin: [Onboarding 11](https://mobbin.com/flows/96fcdd96-85ca-4d4f-9504-8d8fbdd2c050) · [Taking a photo](https://mobbin.com/flows/36c9cc1a-cb0b-4f70-980f-2c57260ee5b4)

**Look:** black, a glowing orange viewfinder icon "[O]", a big white shutter, "Help" top right. No welcome text at all.

1. **The app opens as a camera:** black screen, glowing viewfinder, shutter.
2. You tap the shutter, and a dialog appears: **"Turn on Notifications to see snaps when they develop · Get notified when your snaps are ready to view"** Don't Allow / OK. From a still I can't tell whether this is the native alert or a lookalike.
3. A blurred colour card: **"Developing snaps…"**
4. Reveal: a full-bleed real flash photo.
5–8. A bottom sheet over rotating real photos tagged "Taken on Lapse": **"Review these permissions to get started"**.
   - Camera "To capture your memories" [Select → green ✓].
   - Contacts "So you can share snaps with friends" [Select] + "ⓘ Why do you need this".
   - Footer: **"⚡ Flash photography, discretion advised"**.
9–10. A sample photo, then the chrome serif wordmark "ROLL".
11. "Log in or Sign up", mobile number, the toggle **"I am over the age of 13 👍"**, Terms line, round → button.
12. Camera home: **"Snap something you love 🧡"**, modes MEMORIES / START ROLL, counter 0. After the first shot: **"You took your first snap 🎉"** with confetti, counter 1.

**Funnel count:** **1 tap to the first (demo) shot.** 11 screens to the real camera.
**Copy almost all of it:**
- Camera-first.
- "Developing" as the reason for notifications.
- A permission checklist with "why" links.
- Real photos tagged with the app name as social proof.
- A first-shot celebration.

**Change for Digi:**
- Use **the user's own first shot** as the reveal, not a stock photo.
- Use the native alert only.
- No phone sign-up before the first shot.

### 2.13 Photoroom (4.82★, 231,775 ratings) [V]
Mobbin: [Onboarding 13](https://mobbin.com/flows/80139c78-5c46-460c-96e2-8f0d9f576f57)

1. Navy splash.
2. Full-bleed product collage, laurel **"300M Downloads"**, "Create pro-level images with the best AI editing tools in the market" Continue. "By continuing, you agree to our Terms…"
3. **"How did you hear about Photoroom?"** Word of mouth / Social media / Someone shared a link with me / Google search / App Store / ChatGPT (or AI tools) / Shopify. **Tapping an option advances; there is no Continue button.**
4. "Do you sell physical products online?" Yes, it's my main job / Yes, occasionally as a side hustle / No.
5–6. "What will you be using Photoroom for?" Checkboxes.
7. **"Start from a photo · Magically remove the background from one of your pictures."** [Select a photo] / **[Use a sample image]**.
8. Sheet: "Choose one of these images" (6 samples).
9. The photo with a scanning-line animation.
10. **"Just like magic · Background removed!"** [Start creating].
11. Paywall: Pro | Max switch, "Start your 7-day free Pro trial", 5 ✓ benefits, Continue. No X in this frame.
12–13. The editor working on **their** image, with a "Get Pro" pill.

**Funnel count:** 10 to the "wow", paywall at 11.
**Copy:**
- Tap-to-advance questions.
- "Use a sample" for people who won't upload.
- The wow on their own photo right before the price.

### 2.14 (Not Boring) Camera (4.55★, 5,769 ratings) [V]
Mobbin: [Onboarding 14](https://mobbin.com/flows/1d328006-8692-4556-a642-f60fab639b3d)

**Look:** a dark workbench photo covered in camera parts, heavy rounded type.

1. Logo "-O^O-".
2. **"Let's Build a Camera"** Start.
3–4. **"Gather the Parts"**. Each permission is a part on a checklist: Camera Access → Library Access → Location Access, ticked one by one as the real alerts appear. Footer: "We value privacy. This app doesn't collect, store, or share any personal data."
5–6. **"Pick Your Colorway"**: 6 numbered swatch cards (305 Breezy, 212 Classic, 512 Saddle, 206 Adventurer, 408 Retro, 8106 Prismatic). Build.
7–9. A 3D animation: the body assembles and the lens screws on.
10. **"Pick Up Your Camera"**.
11–13. Feature cards: "SuperRaw™…", "Realtime Styles · Professionally-graded 3D LUTs emulate film stock and other looks."
14. The camera itself, in the colour you picked.

**Copy:** choosing **your** camera, so the home screen feels like something you made. Note that its permission checklist pairs each item with a real alert. It doesn't fake the alert.

### 2.15 Partiful (4.95★, 288,947 ratings) [V]
Mobbin: [Onboarding 18](https://mobbin.com/flows/dc648fc2-71e4-44f0-a0fe-e6459884414c)

**Look:** near-black with a purple-pink aurora at the top, a chrome 3D "P", white flat buttons, a "Skip" pill on optional steps.

- **Intro (1–2):** pink sea with balloons and confetti → "Get started".
- **Phone (3–8):**
  - **"Join the party · Just for event updates. No spam 🫡"**.
  - The SMS-consent checkbox is **unticked by default**, and "Send code" stays off until it's ticked. The legal text is in full.
  - Code screen: "Didn't receive your code? Resend it in 12s".
- **Profile (9–15):**
  - "What's your name? · So your friends know it's you 🫶".
  - "Add a profile pic · So other people can see you on the guest list", with a Pro tip: "You're 10x more likely to get invited to parties if you have a profile picture 😊". The 10x claim has no source on screen.
  - **"See who's on Partiful · Sync your contacts…"**, footer "Partiful doesn't store your contacts' information."
  - "Add your birthday · We'll send inspo when it's time to make plans · Your birth year is kept private".
- **First action (16–17):**
  - **"Let's create an event"** over a collage of invite cards ("you're invited!", "my party", Going / Maybe stickers).
  - "No plans yet? Send a card" (Happy Birthday / i love you).
- **Home (18):** "Trending in the Bay", events with "505 Interested".

**Copy:**
- The casual one-line reasons under each ask ("So your friends know it's you").
- The unticked consent box.
- Ending onboarding on "make your first thing", with two sizes of first task (a party or just a card).

**Leave:** the unsourced 10x claim.

### 2.16 Short notes [V unless marked]
- **BeReal (4.77★, 1,163,576)** ([home flow](https://mobbin.com/flows/a6390339-7c42-4138-b302-8e20d6cff023)). The first-run home is blurred.
  - "HEY ALEX · Are you ready? It's time to BeReal… **Post your first BeReal.**"
  - The Friends-of-Friends tab: "Discover the Friends of your Friends · **Share your BeReal to discover**".
  - **Post to unlock.** This is the model for Digi Rolls: you see the roll after you add a shot.
- **Lovi (4.64★, 3,989)** ([face scan](https://mobbin.com/flows/14635960-2a9b-44de-ae51-e1b4b5d42591)).
  - "Sunshine, let's analyze your skin with our AI Face scanner" Make a face scan / Not now.
  - Then a sheet: "Privacy-First Processing For Your Photos · …allow the use of photos for **algorithm training**" with a glowing primary **"Allow photo processing"**.
  - **Leave:** training consent dressed up as the main path. Digi never trains on user photos and should say so.
- **Umax (4.56★, 51,753), not on Mobbin.** The App Store description reads: "1) Download the app 2) Take a selfie 3) Get your analysis* … *analysis results require subscription." That is a **result-gate**: the user does the action, and the result sits behind the paywall [V, iTunes Lookup].
  - Digi's honest cousin: the first AI result is free, and the paywall comes after.
- **noplace (3.90★, 3,925), not on Mobbin.** I couldn't document it.

---

## 3. Side-by-side matrix

| App | Screens to first value | Screens to price | Questions | Account | Paywall X | Attribution Q | Commitment step |
|---|---|---|---|---|---|---|---|
| Cal AI | never before paying | 32 | ~17 | screen 27 (skippable) | none | yes (6) | none |
| Opal | 16–22 (report) | after | 6–7 | after permission (skip) | see `bible/08` | no | "level of commitment" |
| Rise | 29 (sleep need) | 45 | 10 | screen 35 (email) | yes (modal X) | no | no |
| Duolingo | 20 (lesson) | choice at 17 | 7 | after lesson | n/a (choice) | not in this flow | "I'M COMMITTED" |
| Speak | 14 (speak) | 21 | 4 | screen 7 (wall) | top left | yes (11) | no |
| Flo | 13 (cycle phase) | 25 | 10+ | not shown | Restore only | no | hold to commit |
| Ladder | 13 (workout) | in-app free pass | filters | screen 2 (Apple) | n/a | no | no |
| Yuka | 9 (scan) | none | 0 | screen 4 (email) | n/a | no | no |
| Gas | ~30 (polls) | none | 4 | phone (11) | n/a | no | no |
| Bumble BFF | 9 | none | 4 | before (not shown) | n/a | no | "I accept" pledge |
| Locket | 19 (camera) | none | 0 | phone (2) | n/a | no | no |
| **Lapse** | **1 (demo shot)** | none | 0 | phone (11) | n/a | no | no |
| Photoroom | 10 (wow) | 11 | 3 | not in flow | not in frame | yes (3) | no |
| Not Boring | 14 (camera) | not in flow | colorway | none | n/a | no | "Build" |
| Partiful | 16 (create) | none | 0 | phone (3) | n/a | no | no |

**What the matrix says:**
1. Every subscription-first app (Cal AI, Rise, Flo, Speak, Photoroom) puts **something personal** right before the price: a plan, a result, a curriculum or their own edited image.
2. Every social camera app (Locket, Lapse, BeReal, Gas, Partiful) has **no paywall in onboarding**. They get the first shot or the friend graph done and sell later.
3. Only Cal AI and Flo show a price with **no visible X**. Both are utilities with a daily habit, unlike Digi.

---

## 4. Published onboarding data (what was measured)

| # | Finding | Number | Source, date | Confidence |
|---|---|---|---|---|
| 1 | Multi-page vs single-page onboarding paywalls | 12.41% vs 9.07% conversion (+37%). 24% of onboarding opens are multi-page. 40M+ opens, Feb–May 2026. Paywalls with zero sales and fewer than 50 opens excluded | Superwall blog, May 26 2026 | Med (vendor, big sample, no controls) |
| 2 | Cal AI funnel | 87% see a paywall → 57% start a transaction → 63% complete (≈31% of new users) | Superwall case study, Apr 15 2026 | Med (vendor) |
| 3 | Cal AI: more questions → more conversion | "users invest more time" (no %) | Founderpath interview, Jun 2025 | Low-med |
| 4 | Cal AI first-session conversion | 20–25% to trial or paid | Latka, May 2025 | Low (self-reported) |
| 5 | Coconote: 5 → 13 onboarding screens, paywall before login | +16% trial conversion | Superwall podcast description; stormy.ai | Low (second-hand) |
| 6 | Rizz: two-step paywall (early + end of onboarding) | +10% onboarding conversion | Superwall, Jan 26 2026 | Low (uses a trial toggle and a delayed X; no baseline) |
| 7 | 3-day trial cancellations | 55.4% on Day 0, 84% by Day 1 (a "51% a year earlier" comparison is not on the current page: unverified) | RevenueCat, Mar 19 2026 | High (115K-app dataset) |
| 8 | Hard paywall vs freemium | Median Day-35 conversion 10.7% vs 2.1%; revenue per install at day 60 $3.09 vs $0.38 | RevenueCat, Mar 19 2026 | High for the median; it mixes app types, so not causal |
| 9 | Paywall in onboarding vs later | 0.85% vs 0.23% of views convert | Adapty State of Paywalls 2026 (via `bible/07`, `bible/08`) | Med |
| 10 | Personalized onboarding | ARPU +13–35% in winning tests | Adapty 2026 (via `bible/08`) | Med |
| 11 | Push opt-in on iOS | Median ≈ 48.85% (2025). Other vendors report 44–56% | Airship 2026 report, via secondary summaries; Pushwoosh; MobiLoud | Med for the 45–55% range |
| 12 | Pre-permission priming lift | "2–3x" (Plotline), "up to 182%" (Leanplum), "10–15% in 30 days" (Business of Apps) | Vendor blogs | Low. Wide spread, no method |
| 13 | ATT opt-in | 35% average among users shown the prompt (Q2 2025); 38% reported for Q1 2026 | Adjust blog; secondary summary for 2026 | Med |
| 14 | Duolingo "value before sign-up" | Tested and kept; a related change gave ~20% more daily users (context cut off) | Taplytics write-up; Appcues GoodUX | Low on the number, high on the pattern |

**What the data supports, plainly:**
1. **Some value-building screens before the price beat none** (rows 1, 5, 9). Nothing published shows that a long quiz helps a camera app.
2. **Day 0 is everything.** Most trial cancels happen on Day 0 (row 7), and onboarding paywalls convert about 4× better than later ones (row 9). Digi's first session must deliver the "wow" and the offer.
3. **Notification opt-in is roughly a coin flip on iOS** (row 11). Asking in context, with a reason the user just felt, is the only lever with consistent support. Its size is unproven (row 12).
4. **Nothing here is from a party camera.** Treat every number as direction, not a forecast.

---

## 5. Apple's rules that decide what you can copy (read Nov 17, 2026)

| Rule | Exact text | What it bans on Mobbin |
|---|---|---|
| HIG Privacy: pre-alert screens | "Include only one button and make it clear that it opens the system alert… Use a term like 'Continue' or 'Next'… Don't include an option to cancel. Don't include an option to close the view." Applies to "camera, microphone, location, contact, calendar, and tracking" | Locket's contacts primer ("Not now / Allow Full Access"); Lovi's "Allow photo processing / Don't allow" (if used as a pre-alert) |
| HIG Privacy: tracking | Prohibited: "offering incentives, displaying a screen or window that looks like a request, displaying an image of the alert, and annotating the screen behind the alert" | Opal's arrow at the drawn dialog; the same style used for notifications (Cal AI, Duolingo, Gas) is risky even where not strictly banned |
| HIG Privacy: timing | "Avoid requesting permission at launch unless the data or resource is required for your app to function." | Opal's ATT at launch. (A camera app may ask for the camera on first open. That's its core function) |
| 5.1.1(iv) | "…not attempt to manipulate, trick, or force people to consent… Where possible, provide alternative solutions for users who don't grant consent." | Any camera app without a fallback when the camera is denied |
| 5.1.1(v) | "If your app doesn't include significant account-based features, let people use it without a login." | Account walls before value (Speak screen 7, Yuka) for an app like Digi |
| 5.1.2(i) | "You must clearly disclose where personal data will be shared with third parties, including with third-party AI, and obtain explicit permission before doing so." | An AI upload with no consent screen |
| 5.6.1 | "Use the provided API to prompt users to review your app… we will disallow custom review prompts." | Cal AI's "Give us a rating" page, if it fires a custom prompt. Asking before first use goes against the spirit of the rule either way |

---

## 6. Patterns that repeat, ranked for Digi

The rank combines how often the pattern appears in the sample (16 apps), the outside evidence, and fit with Digi (a party camera that sells AI and packs).

| Rank | Pattern | Seen in | Evidence | Digi |
|---|---|---|---|---|
| 1 | **First input = the product's own action** (shutter, speak, scan) | Lapse, Speak, Yuka, Photoroom | HIG "get to content"; RevenueCat "aha in 60 minutes" | **Copy.** The shutter by tap 4 |
| 2 | **Personal result right before the price** | Cal AI, Rise, Flo, Speak, Photoroom | Superwall +37%; Adapty +13–35% | **Copy.** Their own AI digi, before/after |
| 3 | **Questions that change the output** (with a reply) | Flo, Duolingo, Photoroom, Ladder | Cal AI founder (low) | **Copy, 2 questions max**: camera + occasion |
| 4 | **Permission asked at the moment of need, with a one-line why** | Lapse, Rise, Partiful, Gas, Locket | HIG | **Copy.** Camera on first open, Photos on first save, notifications on "developing" |
| 5 | **Attribution question, tap to advance** | Cal AI, Speak, Photoroom | None (it's for you, not the user) | **Copy.** One tap, with a Skip |
| 6 | **No account until it matters**; ask for email later | Duolingo, Locket, Lapse | Apple 5.1.1(v) | **Copy.** Sign in with Apple only to join a Roll or restore digis |
| 7 | **Ritual time stated up front** ("Rollcall every Sunday") | Locket, Rise, Ladder | None | **Copy.** "Develops tomorrow at 9:00 AM" |
| 8 | **Honest pledge / values screen** | Bumble, Flo, Duolingo | Apple 5.1.2(i) needs consent anyway | **Copy as the AI consent step** |
| 9 | **Post to unlock** (give to get) | BeReal, Locket | None | **Copy for Rolls** (see what others shot after you add one) |
| 10 | **Pick your camera / colorway** (the user builds their tool) | Not Boring, Halide (`bible/07`) | None | **Copy** as screen 2 |
| 11 | **"X people you know are here" with a real count** | Gas, Partiful, Opal ("4,000,000+ gems") | None | **Copy only inside a Roll** (real counts). No global vanity numbers at launch |
| 12 | **Loader with real steps** | Rise, Cal AI, Flo | None | **Copy** on the AI "developing" screen. Real stages only |
| 13 | Story-style "bad news / good news" | Opal | None | **Avoid.** Scare maths doesn't fit a party app |
| 14 | Long quiz (15+ questions) | Cal AI, Rise, Flo | Works where answers feed a calculation | **Avoid.** Nothing to calculate |
| 15 | Rating ask before use | Cal AI | Apple 5.6.1 | **Avoid** |
| 16 | Drawn or annotated system alerts (👆, arrows) | Cal AI, Gas, Opal, Duolingo | HIG bans it for tracking | **Avoid** |
| 17 | "Not now / Allow" primers; guilt confirms ("Skip sharing? Your friends want to see…") | Locket | HIG; no-dark-patterns rule | **Avoid** |
| 18 | Unsourced claims ("10x more likely", "2X", "80%") | Partiful, Cal AI | 3.1.2 / false-claims risk | **Avoid.** Flo's "*2,000 members surveyed (2021)" is the standard to meet |
| 19 | ATT prompt at launch | Opal | HIG | **Avoid.** If Digi needs ATT for ad attribution, ask after the first develop, with no incentive and no drawing |
| 20 | Training consent as the main path | Lovi | 5.1.2(i) | **Avoid.** Say "we never train on your photos" |

---

## 7. Digi's onboarding, screen by screen (proposed)

**Goal:** the first developed digi in under 30 seconds and 4 taps. The first AI digi in under 2 minutes. The price only after the user has seen their own AI result.
**Voice:** casual, lowercase-friendly, one emoji per screen at most.
**Navigation:** a back chevron top left (44 pt). One primary button in the bottom safe area. Thin progress bar (3 segments) only on the 3 setup screens.

### O1 · Welcome (Lapse camera feel + Partiful warmth)
- **Visual:** full-bleed loop of 4 real Digi shots that "flash" in one by one, each with the orange date stamp. They must be our own photos of consenting adults or clearly fictional ones. **No stock "Taken on Digi" claims until real users exist.**
- **H1:** "your party's camera."
- **Sub:** "flash, grain, the orange date. free forever. AI looks when you want them."
- **CTA:** **Start shooting**
- **Fine print:** "By continuing you agree to our Terms and Privacy." (links). "Already have digis? Restore" text link top right.
- No sign-in, no age question, no permissions.

### O2 · Pick your camera (Not Boring + Halide)
- **Visual:** one sample party photo (our own) that re-renders live as the user swipes 4 camera cards.
- **H1:** "pick your camera"
- **Sub:** "you can switch any time."
- **Cards:** DIGICAM FLASH · FILM 400 · Y2K · PHOTO STRIP (each with a number badge, like "305 Breezy": `01`, `400`, `2003`, `4×`)
- **CTA:** **this one** (sets the default look)

### O3 · What are you shooting? (Flo's reply-on-tap, Ladder's live count)
- **H1:** "what's the occasion?"
- **Chips:** Christmas party 🎄 · NYE · Birthday · Night out · Just because
- **On tap:** a one-line reply slides in, then the screen auto-advances after 0.6 s. Examples:
  - Christmas: "red flash + snow grain unlocked for your camera."
  - NYE: "we'll stamp it 31.12 / 01.01 automatically."
- If they pick a dated event, a small optional row: "when is it? [date]". This powers one reminder notification later, asked in context.
- **Effect:** sets the stamp format, the order of AI looks, and the first Roll template.

### O4 · Where did you hear about Digi? (Photoroom tap-to-advance)
- **H1:** "last one: how'd you find us?"
- **Rows (tap advances):** TikTok · Instagram · Snapchat · A friend sent it · App Store search · Google / ChatGPT · Other
- **Top right:** Skip
- **Why:** the contest scores profit after ad spend. This is the cheapest per-install attribution you can get. Store it locally and on the RevenueCat customer as an attribute.

### C1 · Camera (first open)
- The camera view appears and **the system camera alert fires directly**, with no custom pre-screen. The purpose string carries the reason: "Digi uses the camera to take your photos. Nothing leaves your phone unless you pick a photo for an AI look."
- **First-run coach line** above the shutter (Lapse): "tap to shoot 📸 it develops in 3 seconds"
- **If denied** (5.1.1(iv) fallback): the viewfinder shows "camera's off. you can still use a photo you already have." [Choose a photo], which opens PHPicker (no permission needed) + "Turn camera on in Settings" link.

### C2 · First develop (Lapse)
- A 3-second "developing" animation: blur → flash → stamp burns in. Honest: it's on-device.
- **Reveal:** their own photo, full-bleed. Toast: **"your first digi 🎉"**, with confetti, off under Reduce Motion.
- **Buttons:** Save · Share · **✦ Try an AI look (1 free)**
- **Save** fires the add-only Photos alert on first use. Purpose string: "Digi saves your digis to your Photos."
- **Share** opens Digi's share row (Stories · WhatsApp · Snap · TikTok · Save · More).

### A0 · AI consent (Bumble pledge + Apple 5.1.2(i)), shown once before the first AI upload
- **Visual:** a thumbnail of the chosen photo.
- **H1:** "quick check before AI"
- **Three plain rules:**
  - "this photo goes to our AI provider to make your look. we don't keep it for training."
  - "everyone in it is 18+ and said yes."
  - "nothing explicit. it gets blocked anyway."
- **Checkbox (unticked by default, Partiful):** ☐ "yep — everyone here is 18+ and okay with it"
- **CTA:** **make it ✦** (disabled until ticked)
- **Link:** "how we handle your photo"
- This is the honest commitment step, and it is where the 18+ statement lives (correction #4).

### A1 · Developing (AI), with the notification ask in context
- **Real stages** (Rise loader): "uploading 64%" → "re-lighting" → "adding grain" → "burning in the date". Plus "usually ~20 s".
- **Row:** 🔔 "ping me when it's ready" [toggle]. Tapping it fires the **system notification alert directly**: no separate primer, no "Not now" button.
- Past 45 s: "you can leave, we'll ping you" (only if they switched the toggle on).
- On failure: "that one didn't develop. your free digi is back." Retry.

### A2 · AI result (the run-up to the price)
- **Before/after drag** on their own photo.
- **H1:** "developed ✦"
- **Buttons:** Share (primary) · Save · "try another look"
- Below, one line: **"that was your free AI digi. want more?"** [see options] → P1
- This is the "your plan is ready" moment of Cal AI and Rise, built from the user's own photo.

### P1 · Paywall
Use the exact screen in `bible/08` §6 D1: yearly pre-selected, X visible from 0 s, dated trial line, Party Pack as a text link. Two notes from this chapter:
- If you add a second page before the price (Superwall's multi-page lift), make it **"what Plus gets you"** using **their** before/after as the hero. Not a carousel of stock looks.
- Closing the paywall returns to A2 with their result intact. **No instant offer on close** (see `bible/08`).

### After onboarding (once, in context, never stacked)
- **Rating:** the system `SKStoreReviewController` prompt after the **second share** in a session. Never during onboarding.
- **ATT (only if the ad stack truly needs it):** after the first share, never at launch. No drawing, no incentive.
- **Account:** "save your digis across phones? [Sign in with Apple]" shown in Settings and when joining a Roll. Never as a wall.

### R0 · Roll invite path (the person who receives a link)
- The deep link skips O1–O4 and lands on the Roll's join screen.
- **Title:** "Sara's NYE roll"
- **Facts:** "14 shots · 6 people · develops 1 Jan, 9:00 AM" (real counts only)
- **CTA:** **join the roll**. Sign in with Apple, or name only: "what should we call you?"
- Then camera C1, with "shooting to: Sara's NYE roll" on top. After their first shot (post to unlock, BeReal style): "you're in. see everyone's shots tomorrow at 9."

**Tap count to first develop:** O1 (1) → O2 (1) → O3 (1) → O4 (1) → camera allow (1) → shutter (1) = **6 taps, about 20–30 s** (E, med). Lapse does it in 1, Photoroom in about 9 to its "wow".

---

## What this means for Digi

1. **Build the onboarding as 4 setup screens, then the camera** (O1–O4 above). Cut O4 "who's in the shot" and any question whose answer doesn't change the camera, the stamp or the looks.
2. **Fire the camera alert directly when the camera first appears**, with the purpose string in §7 C1. No custom pre-screen. Add the "choose a photo" fallback for people who deny it.
3. **Make the first shot a celebration on the user's own photo** ("your first digi 🎉"), with Save / Share / "✦ Try an AI look (1 free)" right under it.
4. **Put the 18+ statement and the AI consent on one screen (A0)**, with an unticked checkbox, shown once before the first upload. That screen covers Apple 5.1.2(i) and Digi's no-kids rule.
5. **Ask for notifications only via the "ping me when it's ready" toggle** on the AI developing screen, plus the Roll's "develops at 9:00 AM" moment. Never a separate primer with "Not now", and never a drawn dialog or 👆.
6. **Add the attribution question (O4)** and store the answer as a RevenueCat attribute. Report weekly installs and conversion by source, so ad spend can be cut where it doesn't pay back inside the contest.
7. **Show the paywall only after the first AI result (A2 → P1)**, with the X visible from 0 s and the user's own before/after as the hero. Copy the `bible/08` D1 copy as is.
8. **No sign-in until a Roll or a restore needs it.** Use Sign in with Apple only. Hide the account behind Settings and the Roll join screen.
9. **Ask for a rating with the system API only, after the second share.** Never in onboarding.
10. **Never use these:** scare maths, unsourced percentages, "Skip sharing? your friends want…" confirms, ATT at launch, "Allow"-titled primers, trial toggles, delayed X. Any claim on a screen needs a real number with its source and year (Flo standard), or it goes.
11. **Measure the funnel from day one** (PostHog or RevenueCat events): `o1_start`, `o2_camera_picked`, `o3_occasion`, `o4_source`, `cam_allowed`, `first_shot`, `first_save`, `first_share`, `ai_consent`, `ai_done`, `paywall_view`, `trial_start`, `pack_buy`. Targets for the first 1,000 installs (E, low confidence): ≥85% reach first_shot, ≥40% start an AI digi, ≥25% of paywall viewers start a trial or buy a pack.
12. **Run one onboarding test in the contest window, not five:** paywall as one page vs two pages (benefits on their photo → plans). That is the test with the strongest outside evidence (Superwall +37%). Run it from launch to Dec 5 with RevenueCat Experiments, then keep the winner through NYE.

---

## Sources

**Mobbin (all opened Nov 17, 2026; every screen downloaded and read)**
- Cal AI: https://mobbin.com/flows/579da5dd-453a-4e7c-9c11-d20708a4db82 · https://mobbin.com/flows/05ca2ff4-106a-4fda-a0dd-3cc9b73a83c1
- Opal: https://mobbin.com/flows/91394aa7-8b77-461f-b95a-ad3f177e98f3 · https://mobbin.com/flows/7b6dc8e9-56e3-4db3-a898-cfdddc9b1e8a
- Rise: https://mobbin.com/flows/279b34bb-f95f-4d50-8af9-7113aeeaae6c · https://mobbin.com/flows/bcb71a32-b32d-4f07-a310-85e6d1a4a43a
- Duolingo: https://mobbin.com/flows/b0b4f93f-5637-46ec-9d77-49ecda6b991d
- Speak: https://mobbin.com/flows/60e05ece-3567-4ad8-9dbe-577de850a017
- Flo: https://mobbin.com/flows/0223522f-775d-4f5e-92d5-67473763e19e
- Ladder: https://mobbin.com/flows/81034eff-5cf2-4439-ad4b-b57adfbb6690
- Yuka: https://mobbin.com/flows/acae0386-5cd2-4d55-a133-9af19587daa2
- Gas: https://mobbin.com/flows/4eba4f5a-1b12-4aa8-b06a-7f4b6867e52b · https://mobbin.com/flows/e18ab0f7-b5a7-4320-be0c-cb0d262fa71a
- Bumble: https://mobbin.com/flows/795ff2ae-e5a9-4684-a24c-cdd2ea4bce63
- Locket: https://mobbin.com/flows/0362c07a-8b68-4db1-b90a-5fbb5e38e52c · https://mobbin.com/flows/29465928-82fe-42e1-a44a-f47a006cc3b1
- Lapse: https://mobbin.com/flows/96fcdd96-85ca-4d4f-9504-8d8fbdd2c050 · https://mobbin.com/flows/36c9cc1a-cb0b-4f70-980f-2c57260ee5b4
- Photoroom: https://mobbin.com/flows/80139c78-5c46-460c-96e2-8f0d9f576f57
- (Not Boring) Camera: https://mobbin.com/flows/1d328006-8692-4556-a642-f60fab639b3d
- Partiful: https://mobbin.com/flows/dc648fc2-71e4-44f0-a0fe-e6459884414c
- BeReal (home): https://mobbin.com/flows/a6390339-7c42-4138-b302-8e20d6cff023
- Lovi (face scan): https://mobbin.com/flows/14635960-2a9b-44de-ae51-e1b4b5d42591
- Halide (in `bible/07`): https://mobbin.com/flows/b37e3f2d-d9ae-4fcc-94ae-cd885c9d9621

**Apple (read Nov 17, 2026)**
- App Review Guidelines (last updated Oct 16, 2026): 5.1.1(iv), 5.1.1(v), 5.1.2(i), 5.6.1, 3.1.2(c). https://developer.apple.com/app-store/review/guidelines/
- HIG Privacy, "Requesting permission", "Pre-alert screens", "Tracking requests" (JSON of the page). https://developer.apple.com/design/human-interface-guidelines/privacy
- Developer forum, 5.1.1(iv) rejection for a "Not Now" button on a pre-permission screen (Mar 2026). https://developer.apple.com/forums/thread/817672

**App Store data (iTunes Search/Lookup API, US, Nov 17, 2026)**
- Ratings counts and averages for all apps above. Umax description (id 6471026798). https://itunes.apple.com/lookup?id=6471026798&country=us

**Published data**
- Superwall, "Multi-page onboarding paywalls convert 37% better than single-page" (May 26, 2026). https://www.superwall.com/blog/new-postmulti-page-onboarding-paywalls-convert-37-better-than-single-page-heres-why
- Superwall, Cal AI case study (Apr 15, 2026). https://superwall.com/case-studies/cal-ai
- Superwall, Rizz case study (Jan 26, 2026). https://superwall.com/case-studies/rizz-god
- Coconote 5 → 13 screens, +16% (second-hand): https://www.buzzsprout.com/2522779/episodes/19010268-brett-bauman-zack-hargett-copy-this-ai-app-s-6-7m-yr-marketing-strategy · https://stormy.ai/blog/coconote-superwall-case-study-conversion-optimization
- RevenueCat, "Subscription app trends & benchmarks 2026" (Mar 19, 2026). https://www.revenuecat.com/blog/growth/subscription-app-trends-benchmarks-2026
- Founderpath, Zach Yadegari on onboarding questions (Jun 2025). https://founderpath.com/resources/zach-yadegari-cal-ai-onboarding-tests-and-influencer-marketing
- Latka, Cal AI interview (May 2025). https://getlatka.com/interviews/cal-ai-zach-yadegari-2025
- Push opt-in: Airship 2026 benchmark landing page https://www.airship.com/resources/mobile-app-push-notification-benchmarks-2026/ (figures via secondary summaries); Pushwoosh https://www.pushwoosh.com/blog/ios-push-notifications/ ; MobiLoud https://www.mobiloud.com/blog/push-notification-opt-in-rate
- ATT: Adjust, "ATT opt-in rates 2025" https://www.adjust.com/blog/att-opt-in-rates-2025
- Duolingo delayed sign-up: Taplytics https://taplytics.com/blog/duolingo-ab-test-onboarding ; Appcues GoodUX https://goodux.appcues.com/blog/duolingo-user-onboarding
- Gas shutdown: TechCrunch (Oct 19, 2023) https://techcrunch.com/2023/10/19/discord-kills-gas-anonymous-compliments-app-bought-nine-months-ago ; Wikipedia https://en.wikipedia.org/wiki/Gas_(app)
- Adapty State of Paywalls 2026 figures as cited and checked in `digi-bible-2026-11/07` and `/08`.

---

## Fact-check (2026-11-16)

Adversarial re-check on Nov 17, 2026 of the 12 numbers and rules this chapter's decisions rest on, each against the primary page where one exists.

**Checked and confirmed (no change)**
1. Superwall multi-page vs single-page onboarding paywalls: **12.41% vs 9.07%**, 40M+ opens, Feb–May 2026, 24% of opens are multi-page, zero-transaction paywalls excluded. Confirmed on Superwall's blog.
2. Superwall's Cal AI case study funnel: 87% see a paywall, 57% start a transaction, 63% complete. Confirmed (vendor data).
3. RevenueCat SOSA 2026: 3-day trial cancellations 55.4% on Day 0, 84% by Day 1. Confirmed.
4. RevenueCat SOSA 2026: hard paywall vs freemium Day-35 download-to-paid **10.7% vs 2.1%**; Day-60 revenue per install **$3.09 vs $0.38**. Confirmed.
5. Adapty State of Paywalls 2026: "0.85% of onboarding views to paid, compared with 0.23% of later views" and "$170 per 1,000 views vs $40". Confirmed. Note: Adapty's separate subscriptions report gives a much smaller gap with a different metric (1.35% vs 0.89% with trial; 0.82% vs 0.76% without). The "4×" holds only for the State of Paywalls metric.
6. Adapty: personalized onboarding lifted ARPU by **13–35%** in its own tests ("results vary by app"). Confirmed.
7. Airship iOS push opt-in median **48.85%** (2025 data, 2026 report). Confirmed via several secondary quotes of the report; Airship's own page did not show the number to me.
8. Adjust ATT opt-in **35%** in Q2 2025 among users shown the prompt; 38% for Q1 2026. Confirmed (Adjust blog; 2026 figure via secondary summaries).
9. Gas shut down **Nov 7, 2023**, announced Oct 19, 2023 (TechCrunch). Confirmed.
10. App Review Guidelines quotes for 5.1.1(iv), 5.1.1(v), 5.1.2(i) (third-party AI) and 5.6.1 (custom review prompts disallowed), and "Last Updated: October 16, 2026". All confirmed word for word on developer.apple.com.
11. HIG Privacy pre-alert and tracking rules (one button, "Continue"/"Next", no cancel/close; no image of the alert). Confirmed from Apple's HIG JSON.
12. Apple rejecting free-trial toggle paywalls from mid-January 2026 under 3.1.2. Confirmed by RevenueCat, Adapty and Superwall write-ups and developer forum threads. Apple has published no rule text on it, and vendors disagree on whether a default-off toggle is allowed.

**Changed**
1. Section 4 row 7: removed the unsourced "51% on Day 0 a year earlier" as a fact; marked unverified.
2. Key takeaway 3: added Superwall's own Stompers counterexample (single-page beat multi-page), so the 37% lift isn't read as a rule.

**Could not verify**
- Coconote "5 → 13 screens, +16%" (second-hand only), Cal AI "20–25% first-session conversion" (Latka, self-reported) and the Duolingo "~20% more daily users" number: no primary source found. Keep them as anecdotes.
- Screen counts per app (Cal AI 32, Rise 45, Flo 25, Speak 21) come from the author's Mobbin downloads and can't be re-checked from here.
- Apple developer forum thread 817672 (notification primer rejection) was not re-opened.
