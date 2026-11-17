# 09 · Onboarding of photo, camera and AI image apps, screen by screen

**Date of research:** Nov 17, 2026. **Track:** what happens between "Open" and the first real photo: welcome screens, try-first demos, permission screens (camera, photos, contacts, notifications), age gates, when the account is asked for, and where the paywall sits.
**Builds on:** `digi-deep-2026-11/06-ui-flows.md` (§1d, §3.1, §3.10), `digi-bible-2026-11/07-paywalls-mobbin-photo.md` (paywall screens; I don't repeat them) and `digi-bible-2026-11/04-competitors-booth-social.md` (event cameras, Once pricing).

**Labels**
- **V-M** = I opened the Mobbin flow, downloaded every screen at full size and read it myself today (contact sheets in the scratch folder).
- **V** = checked today from a primary source (Apple's HIG JSON, App Review Guidelines page, Apple Developer News, FTC FAQ, iTunes Lookup/Search API, apps.apple.com purchase lists, RevenueCat's SOSA 2026 page).
- **C** = reported by press or a vendor and not checked at the source. **E** = my estimate or recommendation, with confidence high / med / low.

**How to read Mobbin dates.** Mobbin screenshots are old snapshots. I dated each flow from what is on the screen: a birthday wheel that opens on "today", a calendar month, a photo's date stamp. Where nothing dates it, I say "not dated". Prices on Mobbin are often Singapore dollars (see chapter 07); this chapter is about screens, not prices.

Raw notes and contact sheets: `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/bible/ob09/` (`notes.md`, `img/<app>/sheet*.png`).

---

## Key takeaways

1. **The camera apps that people love let you shoot or play before they ask for anything.** Lapse's very first screen is a shutter button on black. You press it, a sample photo "develops", and only then does it ask for permissions and a phone number. Halide makes you "Pick Your Look" on a sample photo. (Not Boring) Camera turns permissions into a game called "Gather the Parts" [V-M].
2. **Social cameras ask for the account first, and it costs them a lot of screens.** Before you can take your first photo: Dispo needs 14 steps, Snapchat 14, Locket 12, BeReal 8. Halide needs 4, Kino 6 and (Not Boring) Camera 8, and none of those three ever asks for an account [V-M, my count of distinct steps].
3. **Apple has a hard rule for "pre-permission" screens, and most of these apps break it.** HIG: a custom screen before the camera, microphone, location, contacts, calendar or tracking prompt must have **one button only**, titled "Continue" or "Next", **not "Allow"**, with no close, cancel or "Not now" [V, HIG Privacy]. Locket's contacts screen ("Not now" + "Allow Full Access") and Snapchat's and BeReal's hand-pointing "Allow Full Access" illustrations break it. Halide, Kino and Not Boring follow it.
4. **Notifications are not on Apple's list, so the rules there are looser, but the best apps still prime them with a real example.** Once shows a lock screen with "'Justin' joined your film!" and "Photos revealing in 10 minutes! 📸". Lapse asks with the line "Turn on Notifications to see snaps when they develop" [V-M]. For Digi this is the strongest ask in the whole app, because "your roll develops at 10 AM" is a reason people want the ping.
5. **Three apps draw fake system alerts.** Lapse, BeReal and Snapchat show custom pop-ups styled like iOS alerts ("Please turn on Notifications … Don't Allow / Allow") before the real one [V-M]. It works because it looks like iOS. That is also why it is a dark pattern. Digi should not copy it.
6. **Age gates in this category are weak and often not neutral.** Lapse uses a toggle, "I am over the age of 13 👍", which is the exact pattern the FTC calls non-neutral [V-M; V, FTC COPPA FAQ H.3]. BeReal, Dispo, Snapchat and VSCO use a date wheel that opens on today's date, which is the neutral way. BeReal then confirms with a button that reads "I'm 31 years old" [V-M].
7. **Texas age rules are live again for new Apple Accounts as of June 4, 2026.** A Fifth Circuit stay lifted the December 2025 injunction. Apple tells developers to implement the Declared Age Range API (iOS 26+) and the related StoreKit and PermissionKit pieces [V, Apple Developer News Dec 23, 2025; C, 9to5Mac Jun 3, 2026]. Digi needs an age check that can read Apple's age range when it exists and falls back to a neutral date entry.
8. **The paywall comes in one of three places:** right after signing up (VSCO, Picsart), right after a try-first result (Photoroom, Lensa), or before permissions with no X (Halide). Social and event cameras show no paywall in onboarding at all (BeReal, Locket, Lapse, Dispo, Snapchat, Once) [V-M]. RevenueCat's data says about 8 in 10 trials start on the install day (82% overall in SOSA 2025; 78–90% by category in SOSA 2026) [V], so the first session matters. But the user has to have seen a result first.
9. **The Photo & Video category is weak at trial-to-paid and tends to run short trials.** RevenueCat SOSA 2026: Photo & Video median trial-to-paid is **22.2%, the lowest of all categories** (top quartile above 33.1%). **68.2%** of Photo & Video trials are 4 days or shorter. **55.4%** of 3-day-trial cancellations happen on Day 0 [V]. Digi's 3-day trial fits the category. Expect more than half of the people who cancel to do it on the install day (Day 0 is a calendar day, not the first hour), so the reminder and the honest copy matter more than the trial length.
10. **The fastest path to Digi's "aha" is 4 taps, and no app in this set does exactly that.** The path: tap the shutter on a sample party photo (Lapse), pick a camera (Halide), give camera access through a one-button screen (HIG), then take a real photo that comes out with the flash look and the orange date stamp, instantly. Ask for no account, age, photos or notifications until the moment each one is needed.

---

## 0. What I corrected from the prior research

| # | Prior claim (file) | Correction | Evidence |
|---|---|---|---|
| 1 | O8 "Two quick permissions" card asks for Camera **and** Photos together, with the line "Photos: to save them. You can pick 'limited'" (06-ui-flows §3.1) | Two errors. (a) This conflicts with the same chapter's decision #9, "Photos only on save". (b) "Limited" is a choice in the **read** prompt. If Digi imports with PHPicker (no permission needed) and saves with **add-only** access, the user never sees a "Limited" option. Ask for the camera only at onboarding. Ask for add-only Photos access at the first Save, with no pre-screen. | HIG Privacy (V); App Review 5.1.1(iii): "use the out-of-process picker … rather than requesting full access to protected resources like Photos" (V) |
| 2 | O11 notification primer: buttons **"Turn on" / "Not now"** (06 §3.1) | "Turn on" means the same as the system's "Allow", which is what the HIG warns about. Notifications are **not** on the HIG's pre-alert list, so a "Not now" is allowed. But title the main button **"Continue"**. Better still, use iOS **provisional** notifications for the first "your digi is ready" ping. They arrive quietly, with no prompt. | HIG Privacy, "Pre-alert screens" (V); provisional authorization is an iOS API (`UNAuthorizationOptions.provisional`) (C, Apple docs not re-read today) |
| 3 | O2 age gate at launch, with the subline **"Digi is for 18+. We don't show this to anyone."** shown before entry (06 §3.1) | Move it. Ask for age right before the first AI look or the first Roll, not at launch: the free camera needs no age. Don't show the cutoff before entry. FTC guidance warns against hinting at what age "works", and against inputs that default to a passing age. Keep "We don't show this to anyone." Show "18+" only after a fail. Store the result so the person can't go back and retry (the prior chapter already had that part right). | FTC COPPA FAQ D.7 and H.3 (V). COPPA itself covers under-13s; I use it as the model for a neutral screen (E, high) |
| 4 | Age gating treated as a self-built screen only (06, 07-apple) | Since **June 4, 2026**, Texas SB 2420 applies to **new Apple Accounts in Texas**: age assurance plus parent consent for under-18 downloads, in-app purchases and "significant changes". Apple asks developers to implement the **Declared Age Range API**, the Significant Change API, the StoreKit age-rating property and server notifications. The law is in force through a Fifth Circuit stay while the appeal continues. | Apple Developer News, Dec 23, 2025 (V); 9to5Mac quoting Apple, Jun 3, 2026 (C); Texas Tribune, May 28, 2026 (C) |
| 5 | Klarna's "Allow camera access / Choose existing photo" cited as the camera-ask template (06 §1d #34) | That is a good **denied-state** screen. It is not a legal **pre-alert** screen, because the HIG says a pre-alert must not offer another action. Use the fallback ("Use a sample photo", "Pick from Photos") only after a denial. | HIG Privacy (V) |
| 6 | Halide-style permission checklist for Digi (06 §1d #33) | Keep the look, but it must contain **one row (Camera)** and one "Continue" button. Halide and Kino can ask for Location or Microphone in a list because each row is optional and fires its own system prompt. Digi has nothing else to ask for at that moment. | Halide flow b37e3f2d, Kino flow b32a3d13 (V-M) |
| 7 | Prior chapters list Lapse as an active benchmark for "develop" mechanics | It still is the best **onboarding** benchmark, but Lapse's last update was **Dec 6, 2025** (V, iTunes Lookup), and it removed its social layer (chapter 04). Copy the first-run demo. Don't treat Lapse's current product as proof that the model works. | iTunes Lookup id 1636699256 (V) |

---

## 1. What I covered

12 full onboarding flows opened today (every screen read at full size), Lensa from chapter 07, plus single permission and consent screens from 8 more apps. Ratings are US App Store, read today (Nov 17, 2026) [V].

| # | App | Mobbin flow | Captured | US ratings · stars | Account asked | First permission asked | Paywall in onboarding? |
|---|---|---|---|---|---|---|---|
| 1 | BeReal | [15bad8e1](https://mobbin.com/flows/15bad8e1-bddd-4882-84ea-05be1ca53199) (20 screens) | not dated | 1,163,576 · 4.77 | First (phone) | Contacts, then notifications | No |
| 2 | Locket | [0362c07a](https://mobbin.com/flows/0362c07a-8b68-4db1-b90a-5fbb5e38e52c) (25) | a "Sep 28 – Oct 4" week, year not shown | 593,068 · 4.76 | First (phone), email+password after setup | Photos (full) | No |
| 3 | Lapse | [96fcdd96](https://mobbin.com/flows/96fcdd96-85ca-4d4f-9504-8d8fbdd2c050) (11) | not dated | 118,322 · 4.75 | Last (after demo + permissions) | Notifications (custom alert) | No |
| 4 | Dispo | [a094d89a](https://mobbin.com/flows/a094d89a-5ea5-4a73-b07d-5b13fc63e7f7) (25) | ~Apr 2022 (birthday wheel) | 8,298 · 4.30 | First (name, username, password, phone) | Contacts | No |
| 5 | Snapchat | [2b9e4803](https://mobbin.com/flows/2b9e4803-bbdc-47c9-b67f-23e48db02229) (27) | ~Oct 2026 (birthday wheel) | 6,106,346 · 4.51 | Yes, 5 steps | Notifications (custom alert, before signup) | No |
| 6 | Once (create a film) | [62e405c1](https://mobbin.com/flows/62e405c1-8bc5-4d97-a77a-9a483937d0fb) (12) | ~Jul–Aug 2026 | 729 · 4.76 | not in capture | not in capture | No (free up to 5 guests) |
| 7 | VSCO | [3f0cf702](https://mobbin.com/flows/3f0cf702-084d-40e6-8369-398f6472956e) (23) | ~Dec 2024 (birthday wheel) | 278,593 · 4.69 | First | Notifications (after paywall) | **Yes, right after sign-up** |
| 8 | Picsart | [1c3a97d2](https://mobbin.com/flows/1c3a97d2-513f-4b33-a34f-6e66976ac6d3) (13), [a70f7fb1](https://mobbin.com/flows/a70f7fb1-4f72-4dcc-bae8-f22dd11875ee) (10) | ~Jan 2023 (ch. 07) | 1,197,009 · 4.66 | First (but a faint "Skip") | none in flow | **Yes, right after sign-up** |
| 9 | Halide Mark III | [b37e3f2d](https://mobbin.com/flows/b37e3f2d-d9ae-4fcc-94ae-cd885c9d9621) (9) | not dated | 13,713 · 4.45 | Never | Camera + Photos + Location (one card) | **Yes, before permissions, no X** |
| 10 | Kino | [b32a3d13](https://mobbin.com/flows/b32a3d13-e52d-48e6-8254-7be1bb85b237) (8) | not dated | 2,006 · 4.73 | Never | Camera + Mic + Photos (one card) | No |
| 11 | (Not Boring) Camera | [1d328006](https://mobbin.com/flows/1d328006-8692-4556-a642-f60fab639b3d) (14) | not dated | 5,769 · 4.55 | Never | Camera + Library + Location ("Gather the Parts") | No |
| 12 | Photoroom | [80139c78](https://mobbin.com/flows/80139c78-5c46-460c-96e2-8f0d9f576f57) (13) | ~Apr 2025 (ch. 07) | 231,775 · 4.82 | Never in flow | Photos picker (sample image offered) | Yes, after the result, 2 steps |
| 13 | Lensa | flow 4b82fe15 (24 screens; read in ch. 07 §2.1, not reopened today) | ~Mar 2023 | 418,227 · 4.70 | No | none before paywall | Yes, after 12 screens of features |

Lensa's row comes from chapter 07, which gives only the short flow ID; I did not reopen it today.

**Single screens used:** Once notification primer ([a29830fb](https://mobbin.com/screens/a29830fb-bc8f-4410-a7d1-18d999b7ad37)), VSCO notification primer ([97575dfa](https://mobbin.com/screens/97575dfa-8a65-4d3c-ac0d-fb0a6a062da1)), Instagram ([52549a8c](https://mobbin.com/screens/52549a8c-3cf5-4345-8266-f96580685602)), Canva ([bb7e6f88](https://mobbin.com/screens/bb7e6f88-9747-43f3-becf-71beb3bbf365)), Klarna camera fallback ([e79dc9e0](https://mobbin.com/screens/e79dc9e0-830c-460d-bd79-1e1fc419ab4c)), Bird and DICK'S camera-denied screens, plus AI "likeness" consent flows from Meta AI ([95106c1a](https://mobbin.com/flows/95106c1a-366a-4e8c-a5b0-f254d1a73e52)), Doji ([efb49c00](https://mobbin.com/flows/efb49c00-478a-4330-9e55-c2e7a528aa4b)) and Tinder ([f20b02ad](https://mobbin.com/flows/f20b02ad-6a81-47cc-80ce-e1b0712a20a5)).

**Not on Mobbin today** (searched by name and by description): Remini, Retake, Facetune, Instagram Edits (searches return Instagram's in-app editor), Poparazzi, Dazz, Huji and the digicam clones. I did not use other sources for their onboarding, so the chapter says nothing about them.

---

## 2. The flows, screen by screen

### 2.1 Lapse: shoot first, sign up last (the template closest to Digi)
Dark, black background, glowing orange "[ O ]" viewfinder mark, "Help" in faint grey top-right. [V-M]

| Step | Top to bottom |
|---|---|
| 1 | Pure black. The orange "[ O ]" glyph glows in the middle. One big white shutter button at the bottom. **No words at all.** The first action in the app is to take a picture. |
| 2 | A blurred rainbow card behind a **custom alert styled like iOS**: "Turn on Notifications to see snaps when they develop" / "Get notified when your snaps are ready to view" / **Don't Allow · OK**. |
| 3 | The card shimmers: "Developing snaps…" |
| 4 | Reveal: a full-bleed flash selfie at a festival in a rounded card (a sample, not the user's photo). |
| 5 | Over another sample photo with a chip "✱ Taken on Lapse": yellow line **"Review these permissions to get started"**, rows **Camera "To capture your memories" [Select]** and **Contacts "So you can share snaps with friends" [Select]** with a small link "ⓘ Why do you need this". Footer: **"ⓘ Flash photography, discretion advised"**. |
| 6–7 | Real system alert: "Lapse would like access to your camera to capture photos to share with friends". The Camera row turns into a green ✓ pill. |
| 8 | Real system alert: "Lapse would like to upload your contacts to our server so you can find your friends" (Don't Allow / Continue). |
| 9–10 | One more sample photo, then a big serif italic "ROLL" brand splash. |
| 11 | **"Log in or Sign up"**: flag + "Mobile number", toggle **"I am over the age of 13 👍" (off by default)**, round arrow button, "By signing up to Lapse you agree to our Terms of Service & Privacy policy". |

After the first real photo (camera flow): the coach line "Snap something you love 🧡", then **"You took your first snap 🎉"** with confetti, and a shot counter tile going 0 → 1.

**Copy for Digi:** the shutter as the first screen; the demo "develop" that teaches the mechanic in 3 seconds; "discretion advised" as a light, honest safety line; the first-shot celebration. **Avoid:** the fake system alert (step 2), the age toggle (step 11, non-neutral), and the contacts upload.

### 2.2 Halide Mark III: pick a look on a sample, then a quiet ask
Dark UI, grey and white pill buttons, yellow selection ring. No account anywhere. [V-M]

| Step | Top to bottom |
|---|---|
| 1 | Splash: huge pink/orange/yellow ring, "HALIDE / MARK III / PHOTO APPLICATION". |
| 2–4 | **"Pick Your Look"**: a sample portrait in a rounded card. "This is a normal iPhone photo. Tap the icons below to pick from Halide's exclusive looks." A tray of 5 look icons; the photo re-grades live on each tap. After a pick: **"Zephyr / Neutral tonescale and tuned, filmic contrast. A great choice for a wide variety of scenes."** White "Continue". |
| 5–6 | Paywall carousel (chapter 07 §2.4): feature mosaic "See what makes Halide the best camera app on iPhone & iPad", page dots, a swipe-hand hint, grey pill **"Try Halide for free"**, link "View all options". **No X on this screen.** |
| 7–8 | Card **"TO GET STARTED, HALIDE NEEDS YOUR PERMISSION:"** with checkboxes: CAMERA ACCESS "Lets Halide capture images using the camera." / PHOTO LIBRARY ACCESS "Lets Halide save and view photos to your photo library." / LOCATION ACCESS "Lets Halide save location information with your photos. Optional." Each tap fires the system prompt and turns the box green. One button: **Continue**. Footer: **"Halide does not save, share, or upload any of your photos or information. Tap to learn more."** |
| 9 | Camera. |

**Copy for Digi:** "Pick your look" on a sample photo with the name and one line of description; the privacy promise under the permission card. **Avoid:** the paywall before the user has taken a photo, and with no visible close.

### 2.3 (Not Boring) Camera: permissions as part of a game
Released Jun 5, 2025; 5,769 ratings. US IAPs: !Camera Plus $14.99/yr, $59.99 lifetime; Super !Boring $7.99/mo, $29.99/yr [V, apps.apple.com]. [V-M for screens]

| Step | Top to bottom |
|---|---|
| 1 | Black, a "-O^O-" face glyph. |
| 2 | Dark photo of camera parts on a cutting mat. Huge rounded bold **"Let's Build a Camera"**. White pill **Start**. |
| 3–4 | **"Gather the Parts"**: the system camera prompt fires ("The camera will be used to take photos."). A checklist ticks in with orange checks: **Camera Access · Library Access · Location Access**. Footer: "We value privacy. This app doesn't collect, store, or share any personal data." |
| 5–6 | **"Pick Your Colorway"**: six colour tiles with numbers and names (305 Breezy, 212 Classic, 512 Saddle, 206 Adventurer, 408 Retro, 8106 Prismatic). The tapped tile lifts and tilts. **Build**. |
| 7–9 | 3D assembly: the body appears, the dial drops in, the lens fills the screen ("SUPER !BORING … 1:1.78/2"). |
| 10 | **"Pick Up Your Camera"** → **Pick Up**. |
| 11–13 | Sheets over the camera: "SuperRaw™ / Our SuperRaw™ processing captures natural grain and more film-like exposures…" [Continue]; **"Realtime Styles / Professionally-graded 3D LUTs emulate film stock and other looks."** with 4 selectable hex icons that re-grade the photo [Done]. |
| 14 | A skeuomorphic saddle-brown camera with a huge red shutter. |

**Copy for Digi:** a "your camera" choice that feels like owning an object (Digi's camera bodies: 2005 digicam, flash film, booth). The idea of a short build animation is good. **Skip:** 8 screens is too long for a party app opened in a bar. Keep it to 1 screen.

### 2.4 Kino: an unboxing, then one permission card
Same studio as Halide. [V-M]
1. Cardboard box art: "LCX-02 / Kino / LUX OPTICS CORPORATION … STEALTH BLACK", "OPEN HERE".
2. A VHS-style "AutoMotion LCX-2 Camera Manual" cover.
3. "Welcome to Kino / A pro video camera made for everyone. This brochure will showcase…"
4. "A Grade Experience" with stacked preset cards (kinochrome, NOIR, Kolor, verve, Fadeo).
5. **"SET UP KINO YOUR WAY"**: ☑ STARTER / MOST POPULAR (pre-checked) or ☐ CUSTOM / FOR ADVANCED USERS. Continue.
6. **"ONE MORE THING / Kino needs a few permissions."** CAMERA, MICROPHONE and PHOTO LIBRARY ("Optional"), with coral checks. One **Continue** button.
7. Camera with a modal "Get Started Quick / We recommend a quick tour…" **[Start] / Skip**.

**Copy for Digi:** "Starter, most popular" as the default, so nobody has to configure anything. The tour is offered, not forced.

### 2.5 BeReal: phone first, then the strongest notification pitch in the set
Dark, white pill CTA that stays grey until valid, "Help" pill top-right. [V-M]

| Step | Top to bottom |
|---|---|
| 1 | Black splash "BeReal." |
| 2–6 | **"What's your phone number?"** Flag chip (+31 suggested, country sheet with search), link "Recently changed your phone number?", fine print "By continuing, you agree to our Privacy Policy and Terms of Service." **Send Verification Text**. |
| 7–9 | "Verify your number", 6 dots, "Verification code sent to +1 650-…", "Resend in 45s", auto-submit spinner. |
| 10–11 | **"What's your first name?"** One big centred field, grey sub **"What your friends call you"**. |
| 12–13 | **Age:** "What's your birthdate?" MM DD YYYY on a number pad, sub **"Just to check you're old enough to use BeReal."** The button turns into **"I'm 31 years old"**, so you confirm your age in plain words. |
| 14–16 | "Create a username", "You can change this later", live checks "Not long enough" ✕ / "Available" ✓. |
| 17 | **Contacts primer:** a phone mock showing iOS's own "How do you want to share contacts?" sheet, with a yellow cartoon hand pointing at **Allow Full Access**. "Help us find your best friends. / You never know who you might discover on BeReal. Allow full access to connect with the people who matter most to you." Button **Continue**; "Your contact list remains private and 100% secure 🔒". |
| 18 | **"When to post on BeReal?" / "The only way to know when to post a BeReal, is to enable the notifications!"** over a drawn alert "Please turn on Notifications / All notifications on the app are silent except the one that will indicate you when to post once a day." with a blue **Allow** and greyed options. |
| 19 | If denied: **"BeReal is way better with notifications"** … "We won't spam you and all notifications are silent (except the BeReal one)." Link "Go to next step without notifications" + white **Open Settings**. |
| 20 | Home: **"HEY ALEX / Are you ready? It's time to BeReal. Save this moment and share it with your friends." [Post your first BeReal.]** plus a banner "Turn on notifications so you can post on time. [Turn on]". |

**Copy for Digi:** "I'm 31 years old" as the confirm button (it catches typos and feels human); "What your friends call you"; the honest promise that notifications are quiet except one; the home card that names the next action. **Avoid:** the phone number before any value; the pointing hand that steers people to "Full Access"; the drawn alert.

### 2.6 Locket: account, photos, friends, widget, then the camera
Dark with a warm amber glow, yellow pill buttons with an arrow. [V-M]

| Step | Top to bottom |
|---|---|
| 1 | A tilted phone outline with a friend's photo in a widget. Logo, **"Live pics from your friends, on your home screen"**. **[Create an account]** / "Sign in". |
| 2–6 | "What's your number?" → "Verify your number" ("Sent to …", "Try again in 29 secs"). |
| 7–10 | "What's your name?" (first, last) → "Pick a username" / "This helps your friends find you on Locket!" → "Available!" with a yellow ring. |
| 11 | **Photos:** the real system prompt with Locket's purpose string "So you can select photos! Only the ones you pick are shared." (Limit Access… / Allow Full Access / Don't Allow). Under it, Locket's own text: "Locket needs photo library access so you can pick your photos." "🔒 Only photos you pick are shared". |
| 12–13 | "SEP 28 — OCT 4 / Next, share your favorite photos from last week" → "No photos found / Each week you can only share photos that were taken within the last 7 days." Skip → alert **"Skip sharing? Your friends want to see what you were up to last week 😊"** Cancel / Skip. |
| 14 | **Contacts primer:** blurred contact list, **"Find your friends! / Locket needs Full Access to your contacts to find your friends."** "🔒 Your contacts are always kept safe and secure". **[Not now] [Allow Full Access]**. |
| 15–16 | "Add your friends / So they can see your Rollcall!" Search; "Find friends from other apps: Telegram · Insta · WhatsApp · Others"; "Share your Locket link: Messages / Other apps"; contacts with yellow "+ Add". |
| 17 | **"Rollcall happens every Sunday afternoon"** with a lock-screen mock of the live activity ("Share your favorite photos from this week! [Pick your photos]"). |
| 18 | **"Add the widget!"** [Add the widget] / Not now; a 4-page tutorial ("Hold down on any app to edit your Home Screen" … [I've enabled the widget]). |
| 19 | **"Your Locket is set up / We'll notify you once your friends have set up theirs"** [Finish]. |
| 20–24 | On the camera, a sheet: **"Add an email address / This is required so that you can continue to sign in to your account"** → email → "Choose a password". |
| 25 | Camera: "1 Friend" pill, yellow-ring shutter, "History ⌄". |

**Copy for Digi:** the "Find friends from other apps" row with WhatsApp and Insta icons (Digi Roll invites); "We'll notify you once your friends have set up theirs" as a calm end. **Avoid:** the contacts screen (two buttons and "Allow" wording: both against the HIG); the "your friends want to see…" guilt line on Skip; asking for Photos full access when the picker would do.

### 2.7 Dispo: the digicam app with the longest road to the camera
Dark card over a holographic purple/teal background, monospace body text, lime "NEXT" pill top-right, 8 progress dots, "← BACK" top-left. [V-M]
1. White splash with a black 8-point star.
2. A 3D blister pack "DISPOSABLE DIGICAM DSP-01" on the holo background. **[Log In]** lime / **[Sign Up]** white. Mono fine print about Privacy Policy and terms.
3. "Welcome! What's your name?" (first, last, green ✓ on each).
4. "Pick a username".
5. "Choose a password" / "Password must be at least 8 characters and include 1 number" (turns green when met).
6. "What's your number?" / **"Just for verification. Don't worry, we won't call you or give away your information."**
7. "Great! We sent you a verification code." / **"We need you to give it back, though."** / "Didn't get the text? Send it again". Toast: "Hang tight! We've sent a code. Please wait a minute before trying again."
8. **"When is your birthday?"** A big white pill shows the date. The wheel starts on **today** (26 April 2022). "You must be at least 13 years old to use Dispo. Your birthday will not appear on your profile."
9. "Add a profile picture / Help your friends recognize you!" [Select a dispo] → system picker → crop. SKIP.
10. "Let's find your friends! / Sync your contacts to see who you know on Dispo. We'll never contact them or give out their info." [sync your contacts] → system prompt. SKIP.
11. "We found 28 of your friends on Dispo" → "Invite your friends to Dispo!"
12. Tutorial carousel **"HOW TO DISPO"**: ① Capture "Shoot and share photos to rolls. They all save to your library." ② Enjoy **"We'll give you a shout when they're ready, at 9am the next day."** ③ Share "Rolls can be public or private. Either way, make sure to include friends!" [Let's go!]
13. Camera with a tooltip **"Take your first pic! dispos develop at 9am in your LIBRARY."** Top bar "SHOOTING TO: Library 🔒 Private [+]" and a "9 AM / NOW" chip. A seasonal "Spring Shot" frame skin.

**Copy for Digi:** the playful lines ("We need you to give it back, though."), the 3-card "how it works" with a fixed develop time, the "Shooting to:" switch, seasonal skins. **Avoid:** 7 account screens before any value. Dispo is now 80% 1–2★ in recent reviews (chapter 04).

### 2.8 Snapchat: notifications before you even sign up
White UI, blue pill CTA, header "Create account / Step N of 5". [V-M]

| Step | Top to bottom |
|---|---|
| 1 | Full yellow, ghost logo; white pills "Continue with Google", "Continue with Apple"; full-width red **LOG IN** and blue **SIGN UP** bars. |
| 2 | **Before sign-up:** a Snapchat-drawn alert with a ghost-and-phone illustration: "Please turn on Notifications / You'll be able to see Snaps & Chats you receive from friends on your phone." **Don't Allow** (red) / **Allow** (blue). |
| 3–4 | Step 1/5: First name, Last name (optional). "By tapping 'Agree and Continue' below, you agree to the Terms of Service and acknowledge that you have read the Privacy Policy." **Agree and Continue**. |
| 5–6 | Step 2/5: Birthday field with a wheel (no explanation). Continue stays grey until a date is picked. |
| 7–11 | Step 3/5: **"Your username is slee20263617 / Change my username / You will be able to change this later in settings"**. The username is suggested for you. Live checks "Checking username…", "Username is available", "Usernames must be at least 3 characters". |
| 12–14 | Step 4/5: Set a password ("Password looks good"), checkbox "Save Login Info on your iCloud devices". |
| 15 | "Add a passkey" (Touch ID / Face ID / Device Passcode). Skip. |
| 16–19 | Step 5/5: Email ("Use phone number instead"), domain chips; or phone with "By proceeding, you agree to receive transactional messaging via text, WhatsApp…". |
| 20–22 | "Confirm your number", 6 boxes, "Re-send code in 49". |
| 23 | **"Find All Your Friends"**: "Allow Full Access for Snapchat to give you the best friend suggestions, or choose 'Select Contacts' for individual contacts to be automatically added as friends." A phone mock of iOS's contact sheet with a white cartoon hand on "Allow Full Access". Yellow **Continue**. |
| 24–25 | "Add Friends" (pre-ticked list, [Add 1 Friend]); "Invite Contacts / Snapchat will send a SMS invite with a friend request for you!" [Send 2 Invites]. |
| 26 | "Create Your Bitmoji / Use your camera to instantly create an avatar that looks like you". |
| 27 | Camera with one coach mark: **"Swipe to try a Lens"**; lens tabs "Favorites · For You · Halloween". |

**Copy for Digi:** a suggested username (zero typing); one coach mark on the camera; a seasonal tab. **Avoid:** asking for notifications before the user knows what they will get, and pre-ticked friend lists.

### 2.9 Once: the event-camera setup (closest to Digi Roll)
Dark #111, serif headlines, white "Next →" pill bottom-right, 6 dots bottom-left, a back arrow in a rounded square. Released Nov 24, 2025; 729 ratings. US IAPs run from "Film: 10 participants $1.99" to "Film: 150 participants $59.99" [V, apps.apple.com]. Chapter 04 has the full Once business case; this is only the setup. [V-M]
1. **"What brings you to Once? / Everyone has their own reason to capture. Tell us how you'd like to use Once."** 2×3 tiles: Wedding day · Birthday · Party · Travelling · Company events · Other event.
2. **"What is the name of your event? / Choose the perfect title for your film. This title will be visible to all of your film guests."** Field "Enter your film title" plus **SUGGESTIONS** chips already filled with the user's name: "Alex's party", "Alex's Birthday", "Alex's Wedding day", "Our Anniversary", "Our Little Party".
3. **"When does your event finish? / The film opens now, and guests can capture photos until the film closes at your chosen time."** Month calendar + TIME "11:00 PM".
4. **"How many guests for your film?"** "Up to 5 Participants" with **"Free"** on the right; 8 slots; **SHOTS PER PERSON** shown as a film-counter dial ("24") next to a shutter; chips 5 · 10 · 16 · 24 · 36 · ∞; VISIBILITY PERMISSIONS toggle "Everyone can see all photos." **Create →**
5. "Creating your special film" → alert **"Film Created! Your film 'Alex's party' is ready! Share Code: eRHLY8c9 / Guests can join at: https://join.once.film/f/eRHLY8c9" [OK]**.
6. The camera ("Alex's party · 5d 23h left", QR icon), then the film page ("0 Moments · 5d 7h Left · 1 People") with "Welcome to your film! Start capturing your memories to fill your album."
7. Home has a **"Welcome! SAMPLE"** album of old family photos, so the app is never empty.
8. Notification primer ([a29830fb](https://mobbin.com/screens/a29830fb-bc8f-4410-a7d1-18d999b7ad37)): **"Never miss any moment / We'll let you know when something important happens, like new guests joining & photo reveal."** A lock screen showing "'Justin' joined your film!" and "Photos revealing in 10 minutes! 📸". **[🔔 Turn On Notifications]** / "Not Now".

**Copy for Digi:** almost all of it for Roll creation: the occasion tiles, name chips filled with the host's name, "when does it finish", a free cap shown next to the guest count, a sample album, the "revealing in 10 minutes" notification preview. **Change:** the button label ("Continue", not "Turn On"). Also note that Once's orange vertical date stamp is already Digi's signature, so Digi must win on the look, not the stamp (chapter 04).

### 2.10 VSCO: account wall, then the paywall, then email verification
White, editorial caps type, black pills. [V-M]
1. VSCO wheel splash.
2. Auto-cycling full-bleed photos (a person holding a camera, a Leica lens) under **"FOR ALL PHOTOGRAPHERS"**. **[LOG IN]** black / **[SIGN UP]** outline.
3. Sheet with tabs New | Returning: **"Sign up for VSCO / Make a free account to save your edits and interact with other creators."** Sign up with Apple (black) · Google · Snapchat · "See More Options" (Facebook, email).
4. Email form: Email · Profile name · Password (8+ characters, with a friendly "That'll do") · Birthday (the wheel opens on today, Dec 11, 2024). A rainbow progress line runs across the top while it submits.
5. **Paywall straight away** ("Own your creative process", X top-left; chapter 07 §2.8).
6. "Activating your membership" (rainbow border animation) → "Thank you for becoming a member / Your membership is now active. Start editing to explore your new presets and tools." [Get Started].
7. "VERIFY YOUR EMAIL / Please check your email, … to verify your account" / Resend email / Edit email address / [CHECK VERIFICATION].
8. **Notification primer:** a photo card with a mock banner "VSCO · Check out VSCO's newest camera feature!", **"Let's stay in touch! / We'd love to send you an occasional nudge to keep creating; turn on notifications using the button below."** One **[Continue]** button. This is the only notification primer in the set that follows the HIG one-button pattern.

A second VSCO primer ([97575dfa](https://mobbin.com/screens/97575dfa-8a65-4d3c-ac0d-fb0a6a062da1)) uses a big black-and-white photo, "Never miss an update", and **[Allow notifications] / [Not now]**: two buttons, one of them labelled "Allow". VSCO tests both.

**Copy for Digi:** "Let's stay in touch!" with one Continue button. **Avoid:** account + paywall + email verification before the user has edited a single photo.

### 2.11 Picsart: sign-up with a hidden skip, then the paywall
White, magenta CTA. [V-M]
1. Icon splash → teal-to-magenta "Picsart" wordmark.
2. A full-bleed model photo with smiley stickers. **[Create an Account]**; "OR" Apple · Google · Facebook · Snapchat circles; "Already have an account? Sign in". **"Skip" in faint grey, top-right.**
3. 3-dot progress, X top-right. **"Hi there!"** "By clicking Next, you agree to our Terms of Use and Privacy Policy. Please read them. Learn more about how we handle your data." Checkbox **unticked**: "I want marketing content such as the latest Picsart news and special offers." Email field with @gmail.com / @yahoo.com / @hotmail.com chips.
4. "Secure it with a password / Your password must contain: 8 to 16 characters · At least one letter · At least 1 number".
5. **"Let's pick you a username!"**, prefilled, with a refresh icon. **Complete**.
6. **Paywall** (two variants: "Get Picsart Gold" with a free-trial toggle; "A Whole New World / Get Picsart Gold and open a door to endless creativity!"). X top-left on both.
7. Home feed where every example has a **"Try" / "REPLAY ON MY IMAGE" / "Remix"** button under it.

**Copy for Digi:** the unticked marketing box (honest consent); "Replay on my image" under every sample look, which is how Digi's look gallery should work. **Avoid:** making "Skip" faint, and a paywall right after the form.

### 2.12 Photoroom and Lensa (detailed in chapter 07; summary only)
- **Photoroom** ([80139c78](https://mobbin.com/flows/80139c78-5c46-460c-96e2-8f0d9f576f57)): splash → "300M Downloads" welcome → 3 questions ("How did you hear about Photoroom?" etc.) → **"Start from a photo / Magically remove the background from one of your pictures." [Select a photo] [Use a sample image]** → 6 samples → scan animation → **"Just like magic / Background removed!" [Start creating]** → a 2-step paywall (step 1 has no X and no price). The result comes before the money, and a sample photo is always offered. [V-M]
- **Lensa** (ch. 07 §2.1): terms checkbox that blocks Continue → **6 feature screens** ("Magic Avatars", "Magic Retouch", "Smart Eraser"…) → "620,000 Five Star Ratings" → paywall. 12 screens before any price and no try-first step. Its avatar-pack flow has the best **AI expectation** screen in the category ("What to Expect … may generate artefacts", good vs weird examples, "Photos will be immediately deleted from our servers after the Avatars are ready").

### 2.13 Consent for AI edits of real faces (Meta AI, Doji, Tinder)
Digi will turn group photos into AI images. These three screens show how big companies word consent and photo handling. [V-M]
- **Meta AI ("Imagine me")**: a dialog **"Add up to 3 photos to improve your AI images / Only add photos of yourself. Meta will use the photo you captured earlier to verify you're only adding photos of yourself. By adding photos, you agree to Meta's AI Verification Terms." [Add photos] [Skip]**. The page says: "We'll only show photos of you and we won't show photos you uploaded that included other people." A settings page lets you choose who can use your selfie (Only me / Followers I approve / Followers I follow back / Everyone), and offers "Retake photo", "Upload photos" and a red "Delete".
- **Doji**: "Before You Start / Hold phone at a distance / Use balanced, bright lighting / No glasses, hats, or airpods" [I'm Ready]; "For Best Results: Just you, no friends…".
- **Tinder photo selector**: "Start with your photo / We'll use your profile photo to find images of you in your photo library." Link **"Learn how your biometrics are used"**. [Let's do it] / "Take a selfie instead". The progress screen reads "Hang tight while we search through your recent photos" with a real **47%** bar, and "Tinder doesn't collect or store photos from your device except the ones you choose to post."

**For Digi:** group photos are harder than "only you". Meta's line "only photos of yourself" is the strict model. Digi's tick box ("Everyone in this photo said yes and is 18+") is the right equivalent (chapter 06 O10), plus Tinder's honest line about what is stored, and a real progress bar.

---

## 3. The rules that decide what you can copy

| Rule | What it says (quoted) | Source |
|---|---|---|
| HIG, requesting permission | "Avoid requesting permission at launch unless the data or resource is required for your app to function." "Ideally, wait to request permission until people actually use an app feature that requires access." | HIG Privacy (V) |
| HIG, purpose strings | "Aim for a brief, complete sentence that's straightforward, specific, and easy to understand. Use sentence case, avoid passive voice, and include a period at the end." | HIG Privacy (V) |
| HIG, pre-alert screens | Applies to custom views before alerts for "camera, microphone, location, contact, calendar, and tracking". "Include only one button and make it clear that it opens the system alert." "Use a term like 'Continue' or 'Next'." Don't use "Allow". "Don't include an option to cancel. Don't include an option to close the view." | HIG Privacy (V) |
| App Review 5.1.1(iii) | "Where possible, use the out-of-process picker or a share sheet rather than requesting full access to protected resources like Photos or Contacts." | App Review Guidelines (V) |
| App Review 5.1.1(iv) | "Apps must respect the user's permission settings and not attempt to manipulate, trick, or force people to consent to unnecessary data access … Where possible, provide alternative solutions for users who don't grant consent." | App Review Guidelines (V) |
| App Review 5.1.1(v) | "If your app doesn't include significant account-based features, let people use it without a login." | App Review Guidelines (V) |
| App Review 4.5.4 | "Push Notifications must not be required for the app to function … should not be used for promotions or direct marketing purposes unless customers have explicitly opted in … via consent language displayed in your app's UI." | App Review Guidelines (V) |
| FTC neutral age screen | Ask age "in a neutral manner … does not default to an age 13 or over"; "a system that allows a user freely to enter the month and year of birth"; a check box "I am over 12 years old" is **not** neutral; use "a cookie, to prevent children from back-buttoning to enter a different age". | FTC COPPA FAQ D.7, H.3 (V) |
| Texas SB 2420 | Since Jun 4, 2026: "new Apple Accounts in Texas are now subject to the law" (age assurance; parent consent under 18 for downloads, IAPs, significant changes). Apple asks developers to use the Declared Age Range API (iOS 26+), the Significant Change API, the StoreKit age-rating property and server notifications. | Apple Developer News Dec 23, 2025 (V); 9to5Mac Jun 3, 2026 (C) |

**What this means in practice (E, high):**
- Digi's camera screen may have exactly one button, "Continue". The "use a sample photo instead" escape goes on the screen that appears **after** a denial.
- Notifications are not on the pre-alert list. A "Not now" is allowed and protects the one-time system prompt for a better moment. Still title the main button "Continue", and never draw a fake system alert.
- The free camera must work with no account (5.1.1(v)). Ask for an account only for Rolls, which really are account-based (sharing with a group).
- Marketing pushes ("New drop: NYE glitter") need explicit opt-in wording in the UI (4.5.4). Keep Digi's first notification prompt about develops and results only. Add a separate "Drops & deals" toggle in Settings, off by default.

---

## 4. When each app asks for what (timing matrix)

"Steps to first real photo" counts distinct screens or questions in the Mobbin flow, merging keyboard and validation states [V-M count, E for exact merges].

| App | Steps to first real photo or result | Account | Age | Camera | Photos | Contacts | Notifications | Paywall |
|---|---|---|---|---|---|---|---|---|
| Lapse | demo at step 1; real photo after sign-up (~12) | after demo | toggle at sign-up | step 5 (checklist) | — | step 5 | step 2 (fake alert) | none |
| Halide | 4 | never | none | after paywall | same card | — | — | before permissions, no X |
| Kino | 6 | never | none | step 6 card | same card | — | — | none |
| Not Boring | 8 | never | none | step 3 (game) | same | — | — | none |
| Photoroom | 8 to first AI result | not in flow | none | picker only | picker | — | — | after result |
| Picsart | 5 to home | first (skippable) | none | — | — | — | — | after sign-up |
| VSCO | 8 to empty studio | first | in form | — | — | — | after paywall | after sign-up |
| BeReal | 8 to "Post your first" | first (phone) | step 5 | at first post | — | step 7 | step 8 | none |
| Locket | 12 | first (phone), email later | not seen | not seen | step 6 (full) | step 8 | not seen | none |
| Snapchat | 14 | 5 steps | step 2/5 | at camera | — | step 10 | step 2 (fake alert) | none |
| Dispo | 14 | first (4 screens) | step 8 | at camera | picker | step 10 | not seen | none |
| Once (create film) | 4 to film created | before (not captured) | not seen | at camera | — | — | primer | none (free cap 5) |
| Lensa | 12+ to paywall | no | none | — | later | — | later | after 12 screens |

**Patterns in the matrix:**
- No app asks for age before showing *something*, except the phone-first social apps.
- Contacts is asked by every social app and by no camera or editor app. Digi doesn't need contacts: Roll invites go out as a link through the share sheet.
- The three apps with the shortest path (Halide, Kino, Not Boring) never ask for an account.

---

## 5. Patterns that repeat, ranked for Digi

Score = how much it should help Digi's first session (E), out of 10. "Seen in" = apps in this chapter.

| Rank | Pattern | Seen in | Verdict for Digi | Score |
|---|---|---|---|---|
| 1 | **Try first on a sample** (a sample photo, demo shutter, or "Use a sample image") | Lapse, Halide, Photoroom, Not Boring (styles), Picsart ("Replay on my image"), Once (sample album) | **Copy.** First screen = shutter on a sample party photo → flash + stamp | 10 |
| 2 | **No account until the feature needs one** | Halide, Kino, Not Boring, Photoroom, Lapse (demo first) | **Copy.** Account only for Rolls and Restore | 9 |
| 3 | **One-button permission card with a privacy promise** | Halide, Kino, Not Boring, VSCO (notifications) | **Copy** for the camera only: "Digi doesn't upload your camera roll." | 9 |
| 4 | **Notification ask tied to a real event, shown as a lock-screen preview** | Once, Lapse ("see snaps when they develop"), BeReal, Dispo ("at 9am") | **Copy** at Roll create/join: "Your roll develops at 10 AM. Want the ping?" | 9 |
| 5 | **Name the look + one line about it** | Halide (Zephyr), Not Boring (colourways), Kino (grades) | **Copy**: "2005 Digicam: hard flash, blown highlights, orange date." | 8 |
| 6 | **Prefilled suggestions** (username, event name) | Snapchat, Picsart, Once ("Alex's party") | **Copy** for Roll names: "Sara's NYE", "Christmas at Omar's" | 8 |
| 7 | **First-shot celebration** | Lapse ("You took your first snap 🎉"), Locket (set-up glow) | **Copy**: flash pop + "Your first digi. Nov 17 '26." | 7 |
| 8 | **Free cap shown next to the choice** | Once ("Up to 5 Participants · Free") | **Copy** in Roll setup: "Up to 8 people free" (see chapter 04/06 for the number) | 8 |
| 9 | **Neutral age entry with a plain confirmation** | BeReal ("I'm 31 years old"), Dispo/VSCO/Snapchat (wheel opens on today) | **Copy**, moved to the first AI look or Roll | 7 |
| 10 | **Expectation screen before AI** | Lensa ("What to Expect"), Doji ("Before You Start"), Tinder (what's stored) | **Copy** as 3 lines on the consent screen | 8 |
| 11 | **Paywall right after sign-up, before any use** | VSCO, Picsart | **Avoid.** Show the paywall after the first AI result | — |
| 12 | **Paywall before permissions with no X** | Halide, Photoroom step 1 | **Avoid** (Digi rule: visible X at 0 s) | — |
| 13 | **Fake system alerts** | Lapse, BeReal, Snapchat | **Avoid.** Dark pattern | — |
| 14 | **Two-button or "Allow"-labelled pre-alert for contacts or camera** | Locket, Snapchat/BeReal (pointing hand) | **Avoid.** Against the HIG | — |
| 15 | **Guilt on skip** ("Your friends want to see…") | Locket | **Avoid** | — |
| 16 | **Non-neutral age toggle** ("I am over the age of 13 👍") | Lapse | **Avoid** | — |
| 17 | **Phone number first** | BeReal, Locket, Dispo, Snapchat | **Avoid** for a party app. Sign in with Apple, only at Roll creation | — |
| 18 | **Long feature tour before value** | Lensa (6 screens), Dispo (3 tutorial cards) | **Avoid.** Teach by doing; at most 1 card for Rolls | — |

---

## 6. The Digi onboarding, screen by screen (proposed)

Visual system and tokens come from chapter 06 §5. Copy is plain, short and lightly playful, with at most one emoji per screen. Every price comes from RevenueCat/StoreKit. All copy below is my proposal (E); the app it is borrowed from is in brackets.

### Path A: new user (from TikTok, IG or the App Store)

**A0 · Launch.** Static #0A0A0C, "digi." wordmark with the pink dot. No animation (the launch screen is static).

**A1 · Shutter first** [Lapse step 1 + Halide "Pick Your Look"]
- Full-bleed **sample party photo**, flat and dull, labelled at the top in small caps "A NORMAL PHONE PIC". The people in it are fictional (AI-made or licensed), never real people without a release.
- A big white shutter at the bottom. One line above it: **"Tap it."**
- On tap: a white flash (respects Reduce Motion: 150 ms fade instead), a haptic `impactHeavy`, and the photo re-renders as the **2005 Digicam** look with the orange date stamp of today ("11 17 '26").
- Then the subline appears: **"That's a digi. Flash, grain, the orange date."** Button: **"Pick your camera"**. Small text link under it: "I've used Digi before" (Restore, top right is also fine).
- No permission, no account, no age. Time: ~5 s.

**A2 · Pick your camera** [Halide step 2–4, Not Boring colourways, Kino "Starter · Most popular"]
- The same sample photo, now with a row of 4 camera tiles under it: **2005 Digicam** (pre-selected, label "MOST POPULAR"), **Flash Film 400**, **Y2K Glow**, **Photo Strip**. Tapping a tile re-grades the photo live, with a name and one line:
  - 2005 Digicam: "Hard flash, blown highlights, the orange date."
  - Flash Film 400: "Warm grain, soft edges, like a disposable at 1 AM."
  - Y2K Glow: "Bloom, pink cast, low-res sparkle."
  - Photo Strip: "4 shots, 3-2-1, one strip."
- Button: **"Use this camera"**. A line in small text: "You can switch any time. All of these are free."
- Saying "free" here is honest and sets up the later "AI looks use digis" difference.

**A3 · Camera permission (pre-alert)** [Halide/Kino card, HIG rule]
- Dark card, one row only: 📷 **Camera** "To shoot your digis." Under the card: **"Digi doesn't upload your camera roll. Free looks run on your phone."**
- **One button: "Continue"** → system prompt. Purpose string (`NSCameraUsageDescription`): **"Digi uses the camera to take your photos and strips."**
- No close, no "Not now" (HIG).

**A3-denied · If they tap Don't Allow** [Klarna, Photoroom sample, BeReal "Open Settings"]
- Headline **"No camera, no problem (for now)"**. Sub: "You can still try every look on a photo you already have."
- Buttons: **[Pick a photo]** (PHPicker, no permission needed) · **[Use a sample]** · text link "Turn on camera in Settings" (opens `app-settings:`).
- Never block the app.

**A4 · Camera, first real shot** [Snapchat single coach mark, Lapse celebration]
- The camera opens with the chosen camera active. One coach mark above the looks carousel: **"Swipe for more cameras"**. It disappears after the first swipe or shot.
- After the first shot, the photo develops on the spot (on-device), and a toast says **"Your first digi 🎉"** with the date stamp visible. The last-shot thumbnail bounces bottom-left.
- **No permission for Photos yet.**

**A5 · First save → add-only Photos prompt** [HIG "when the feature needs it"]
- Tapping Save triggers the system prompt directly, with no pre-screen (the context is obvious). Purpose string (`NSPhotoLibraryAddUsageDescription`): **"Digi saves your digis and strips to your photo library."**
- If denied: a toast "Saved in Digi. Turn on Photos in Settings to save to your camera roll." plus a Share button that still works (the share sheet needs no permission).

**A6 · The AI moment (first digi is free)** [Snapchat locked lens live, VSCO "try but pay to save", Lensa expectations]
- In the looks carousel, the AI looks carry a ✦. Each first-session user gets **3 free digis** (chapter 07/08 numbers). Tapping an AI look on any photo opens:

**A6a · Age, once** [BeReal wording + FTC neutral entry + Declared Age Range]
- On iOS 26+, call the **Declared Age Range API** first. If Apple returns 18+, skip this screen entirely.
- Otherwise: **"Quick one: when were you born?"** Month and year, entered freely, starting blank (no default year that passes). Sub: **"We don't show this to anyone."** The button becomes **"I'm 24"** when valid (BeReal pattern).
- Under 18: **"AI looks and Rolls are 18+. The free cameras are all yours."** Store the result in Keychain so reinstalling doesn't reset it (E: Keychain survives app deletion on iOS, high). Do not show the "18+" rule before entry.

**A6b · Consent + what to expect** [chapter 06 O10, Meta "only photos of yourself", Lensa "What to Expect", Tinder storage line]
- Thumbnail of the chosen photo. Checkbox, **unticked by default**: **"Everyone in this photo said yes and is 18+."**
- 3 short lines:
  - "AI re-lights the scene. Faces can come out a bit different."
  - "If it's bad, redo once for free."
  - "We send only this photo to make your digi and delete it from our server after." (Make sure the backend really does this, and say how long "after" is.)
- Button **"Make it ✦"**. It stays disabled until the box is ticked. Counter under it: **"1 of 3 free digis"**.

**A6c · Developing** [chapter 06 A2 honest progress; Tinder real %]
- Upload shows a real %. Then "Developing… usually about 20 s" with elapsed seconds. Past 45 s: "You can leave. We'll ping you." At that moment, request **provisional** notification authorization (no prompt) so the "ready" ping can arrive quietly.

**A6d · Result → soft paywall** [Photoroom order: result first, then price]
- Result with before/after drag. Buttons: **Save · Share · Make it a strip**. Under them: "2 free digis left".
- The paywall (chapter 07 P1) appears **once**, after the first AI result is saved or shared, never before. X visible at 0 s. Trial reminder line included.

**A7 · No account yet.** RevenueCat runs on an anonymous ID. Purchases restore with "Restore purchases" in Settings. An account is asked for only in Path C.

### Path B: invited guest (opens a Roll link at the party)
Chapter 04 found a POV review: "Once you scan the QR guests are **forced to sign into their Apple ID** which is too much of a friction point." Guests are Digi's growth loop. Ask them for nothing that isn't needed.

**B1 · Join card** [Rodeo "Sam wants to hang", Once film header]
- The Roll cover photo, **"Sara invited you to Sara's NYE"**, "Develops for everyone at 10 AM tomorrow · 6 people in". One button **"Join the roll"**. Small text: "No sign-up. Just your first name."

**B2 · Your name** [BeReal "What your friends call you"]
- **"What should the roll call you?"**, one field, keyboard up. Button **"Join"**.

**B3 · Camera permission** (same as A3, but the card says "To shoot into Sara's NYE.")

**B4 · Notification ask, the one that matters** [Once lock-screen preview; HIG wording]
- Lock-screen mock with two banners: **"digi · Sara's NYE developed 📸"** and **"digi · 12 new shots from last night"**.
- Headline **"Want a ping when it develops?"** Sub: "One ping at 10 AM. That's it."
- Buttons: **"Continue"** (opens the system prompt) and text link **"Not now"**. Notifications aren't on the HIG pre-alert list, so "Not now" is allowed, and it saves the one-shot prompt.
- If they tap "Not now", don't ask again on launch. Offer it again only at the next Roll.

**B5 · Camera, shooting to the Roll** [Dispo "Shooting to:" + Once shot counter]
- Top bar: "Shooting to: **Sara's NYE** ⌄" (switch to "My camera"). Film counter "24 left". Age check and consent come only when a guest taps an AI look (A6a/A6b).
- Guests see **no paywall in their first session**. They can meet the Party Pack later, when the Roll develops and they want AI strips of the group.

### Path C: host creates a Roll (needs an account)
**C1 · "Start a roll"** [Once occasion tiles]: "What's the party?" tiles: Christmas · NYE · Birthday · Night out · Wedding · Other.
**C2 · Name** [Once suggestions]: field + chips "Omar's Christmas", "NYE at Sara's", "Friday night".
**C3 · When does it develop?** [Once "When does your event finish?"; Dispo "9am next day"]: default **"Tomorrow 10:00 AM"**, editable. Line: "Everyone can shoot until then. Then it develops for everyone at once."
**C4 · Who's in** [Once "Up to 5 Participants · Free"]: guest slots, the free cap labelled "Free", shots per person (default 24), and a toggle "Everyone sees everything" (default on).
**C5 · Sign in to save your roll** [Unfold "create account after purchase / I'll do this later"]: **Sign in with Apple** (primary) and email magic link. Line: "So your roll is still here tomorrow." This is the first and only account ask in the app.
**C6 · Invite** [Locket "Find friends from other apps", Once QR]: the QR big, plus rows WhatsApp · Instagram · Messages · Copy link. "No app? They can still join on the web." (Only if Digi builds web join; otherwise remove the line.)
**C7 · Notification ask** (B4, wording for the host: "We'll ping you when people join and when it develops.")

### Screen and tap budget (E, high)

| Path | Screens before the "aha" | Taps |
|---|---|---|
| A (new user) | A1 → A2 → A3 → first shot | 4 to first real digi; +3 to first AI result |
| B (guest) | B1 → B2 → B3 → B4 → shot | 5 |
| C (host) | C1–C6 | 7 to a shareable roll |

For comparison: BeReal 8, Locket 12, Dispo and Snapchat 14 steps before the first photo (section 4).

---

## 7. Analytics events to watch the funnel (E, high)

Log these with no personal data: `ob_shutter_demo`, `ob_camera_picked{camera}`, `perm_camera{granted|denied}`, `first_shot`, `first_save`, `perm_photos_add{granted|denied}`, `ai_tap_first`, `age_check{passed|blocked|apple_range}`, `consent_ticked`, `ai_result_first{seconds}`, `paywall_view{source}`, `trial_start`, `roll_join_open`, `roll_join_done`, `perm_notif{granted|denied|provisional}`.

Targets to beat in week 1 (E, low; set from category data, not Digi data):
- A1 → first_shot ≥ 70%.
- first_shot → ai_result_first ≥ 35%.
- paywall_view → trial_start: compare against RevenueCat's 5–6% download-to-trial for most non-gaming categories [V, SOSA 2026].
- Trial → paid: compare against the 22.2% Photo & Video median [V].

---

## What this means for Digi

1. **Make the first screen a shutter on a sample party photo.** One tap shows the flash, grain and orange date. No text except "Tap it." Build this before any other onboarding screen; it is the ad, the tutorial and the hook in one.
2. **Cut onboarding to A1–A3** (shutter demo, pick camera, camera permission). Remove the prior plan's O3–O5 questions ("What's the vibe?", "Who's usually in the shot?", "Anything coming up?") from v1. The contest window is 30 days; every extra screen loses party users holding a drink. Bring back one question later only if you have a use for the answer.
3. **Use one permission card, Camera only, with one "Continue" button.** Purpose string: "Digi uses the camera to take your photos and strips." Add the line "Digi doesn't upload your camera roll. Free looks run on your phone." Never put "Not now" or "Allow" on it.
4. **Build the denied state** with "Pick a photo" (PHPicker) and "Use a sample", plus "Turn on camera in Settings". Test it on a phone where the camera was denied.
5. **Ask for Photos as add-only, at the first Save, with no pre-screen.** Remove "You can pick 'limited'" from the prior copy. In Expo, use `expo-image-picker` (picker) for imports and `expo-media-library` with write-only permission for saving. Check the current Expo docs for the exact call names before building (C).
6. **Move the age check to the first AI look** (and Roll creation). Read Apple's Declared Age Range on iOS 26+. Fall back to a blank month/year entry. The button reads "I'm 24". Don't mention 18+ before entry. Store a fail in Keychain. Ask a lawyer whether Digi needs the Texas Significant Change and parent-consent flows for under-18 Texas accounts if the App Store age rating allows under-18 downloads. (I can't give legal advice. The law is live under a stay as of June 2026.)
7. **Keep the consent screen exactly as specified in A6b**: unticked box, three plain lines, "1 of 3 free digis" under the button. Say how long the uploaded photo is kept, and make the server really delete it.
8. **Show the paywall only after the first AI result**, with the X visible at 0 s (chapter 07 P1). Never after sign-up, never before permissions.
9. **Don't build accounts for v1 except at Roll creation.** RevenueCat anonymous IDs plus Restore Purchases cover buyers. Sign in with Apple appears on C5 with the line "So your roll is still here tomorrow."
10. **Guests join with first name + camera only.** No sign-in, no paywall, no contacts. This answers the top complaint about POV ("forced to sign into their Apple ID").
11. **The notification ask lives at Roll create/join**, with a lock-screen mock ("Sara's NYE developed 📸"), "Continue" + "Not now". Use provisional notifications for the "your AI digi is ready" ping, so solo users never see a prompt. Put marketing pushes behind a separate Settings toggle, off by default (App Review 4.5.4).
12. **Never draw a fake iOS alert, never use a pointing hand at "Allow", never add guilt on Skip.** Add these three to the review checklist in `docs/MANUAL-TESTS` (or the Digi equivalent) so nobody adds them later.
13. **Pre-fill everything you can:** Roll names from the host's name ("Omar's Christmas"), a default develop time of "Tomorrow 10:00 AM", 24 shots. Each pre-fill removes a keyboard.
14. **Ship the 14 analytics events in section 7 on day 1.** Read the A1 → first_shot and first_shot → ai_result_first rates after the first 200 installs. If A1 → first_shot is under 60%, the permission screen is the first suspect.
15. **Make the App Store screenshots match the first 3 screens** (shutter demo → camera picker → result). People should recognise the first screen from the ad they just saw.

---

## Sources

**Mobbin flows and screens (opened Nov 17, 2026; full-resolution screens read):**
- BeReal onboarding: https://mobbin.com/flows/15bad8e1-bddd-4882-84ea-05be1ca53199 · notification screen https://mobbin.com/screens/ea01a85a-7c11-4128-97c5-dbc5d20e03f5
- Locket onboarding: https://mobbin.com/flows/0362c07a-8b68-4db1-b90a-5fbb5e38e52c · widget tutorial https://mobbin.com/flows/29465928-82fe-42e1-a44a-f47a006cc3b1
- Lapse onboarding: https://mobbin.com/flows/96fcdd96-85ca-4d4f-9504-8d8fbdd2c050 · notification screen https://mobbin.com/screens/4256d5fd-aa53-48c8-83f1-e119abdbe2cd
- Dispo onboarding: https://mobbin.com/flows/a094d89a-5ea5-4a73-b07d-5b13fc63e7f7
- Snapchat onboarding: https://mobbin.com/flows/2b9e4803-bbdc-47c9-b67f-23e48db02229 · notification screen https://mobbin.com/screens/f950bddf-d47d-43c8-93bb-8accd7f4167a
- Once creating a film: https://mobbin.com/flows/62e405c1-8bc5-4d97-a77a-9a483937d0fb · invite https://mobbin.com/flows/9b83eb76-5573-4575-987f-29a073df984a · film detail https://mobbin.com/flows/8278fc43-1ec1-4d25-9d9a-6ed264b2ed66 · notification primer https://mobbin.com/screens/a29830fb-bc8f-4410-a7d1-18d999b7ad37
- VSCO onboarding: https://mobbin.com/flows/3f0cf702-084d-40e6-8369-398f6472956e · notification primer https://mobbin.com/screens/97575dfa-8a65-4d3c-ac0d-fb0a6a062da1
- Picsart onboarding: https://mobbin.com/flows/1c3a97d2-513f-4b33-a34f-6e66976ac6d3 and https://mobbin.com/flows/a70f7fb1-4f72-4dcc-bae8-f22dd11875ee
- Halide Mark III onboarding: https://mobbin.com/flows/b37e3f2d-d9ae-4fcc-94ae-cd885c9d9621
- Kino onboarding: https://mobbin.com/flows/b32a3d13-e52d-48e6-8254-7be1bb85b237
- (Not Boring) Camera onboarding: https://mobbin.com/flows/1d328006-8692-4556-a642-f60fab639b3d
- Photoroom onboarding: https://mobbin.com/flows/80139c78-5c46-460c-96e2-8f0d9f576f57 · subscribing https://mobbin.com/flows/d04549cd-1994-497e-84ef-4742670404ff
- Lensa onboarding (via chapter 07): flow 4b82fe15
- Meta AI uploading photos: https://mobbin.com/flows/95106c1a-366a-4e8c-a5b0-f254d1a73e52 · Doji likeness: https://mobbin.com/flows/efb49c00-478a-4330-9e55-c2e7a528aa4b · Tinder photo selector: https://mobbin.com/flows/f20b02ad-6a81-47cc-80ce-e1b0712a20a5
- Instagram notifications https://mobbin.com/screens/52549a8c-3cf5-4345-8266-f96580685602 · Canva https://mobbin.com/screens/bb7e6f88-9747-43f3-becf-71beb3bbf365 · Klarna https://mobbin.com/screens/e79dc9e0-830c-460d-bd79-1e1fc419ab4c · Bird https://mobbin.com/screens/ea89413a-8f12-484e-9a2f-ce4047b5a13c · DICK'S https://mobbin.com/screens/aef99718-d836-4d09-a1a4-529bb2bcdcdf

**Apple and regulators (read Nov 17, 2026):**
- Apple HIG, Privacy (JSON): https://developer.apple.com/design/human-interface-guidelines/privacy
- App Store Review Guidelines (5.1.1, 4.5.4): https://developer.apple.com/app-store/review/guidelines/
- Apple Developer News, "Update on age requirements for apps distributed in Texas" (Dec 23, 2025): https://developer.apple.com/news/?id=8jzbigf4
- 9to5Mac, "Apple says Texas App Store age assurance rules start tomorrow after court ruling" (Jun 3, 2026): https://9to5mac.com/2026/06/03/apple-says-texas-app-store-age-assurance-rules-start-tomorrow-after-court-ruling/
- Texas Tribune (May 28, 2026): https://www.texastribune.org/2026/05/28/texas-apple-google-app-store-age-verification/
- 9to5Mac, injunction (Dec 23, 2025): https://9to5mac.com/2025/12/23/texas-judge-blocks-state-app-store-age-verification-law/
- FTC, Complying with COPPA: Frequently Asked Questions (D.7, H.3): https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions

**Data:**
- RevenueCat, State of Subscription Apps 2026 (Photo & Video trial-to-paid 22.2%; 68.2% of trials ≤4 days; 55.4% of 3-day-trial cancellations on Day 0; download-to-trial 5–6%): https://www.revenuecat.com/state-of-subscription-apps/
- RevenueCat, State of Subscription Apps 2025 (82% of trial starts on install day): https://www.revenuecat.com/state-of-subscription-apps-2025
- iTunes Search/Lookup API, US, Nov 17, 2026 (ratings, release and update dates): ids 1459645446 (BeReal), 1600525061 (Locket), 1636699256 (Lapse), 1491684197 (Dispo), 6754265953 (Once), 588013838 (VSCO), 587366035 (Picsart), 885697368 (Halide), 6472380172 (Kino), 6737783441 ((Not Boring) Camera), 1455009060 (Photoroom), 447188370 (Snapchat), 1436732536 (Lensa)
- apps.apple.com US in-app purchase lists, Nov 17, 2026: Once https://apps.apple.com/us/app/id6754265953 · (Not Boring) Camera https://apps.apple.com/us/app/id6737783441
- Chapter 04 of this bible (POV review quote, Once pricing, Lapse review data) and chapter 07 (Lensa, Photoroom, Halide paywall details)

---

## Fact-check (2026-11-16)

Adversarial re-check on Nov 17, 2026 of the 12 numbers and rules this chapter's decisions lean on. Each was re-fetched from the primary source, not from the notes above.

**Checked and confirmed (no change)**
1. US ratings and stars from the iTunes Lookup API (re-pulled today): BeReal 1,163,655 · 4.77; Locket 593,254 · 4.76; Lapse 118,321 · 4.75; Snapchat 6,107,199 · 4.51; VSCO 278,611 · 4.69; Picsart 1,197,013 · 4.66; Halide 13,712 · 4.45; Dispo 8,299 · 4.30. All within a few hundred of the table (same day, normal drift).
2. Lapse last update **Dec 6, 2025** (iTunes Lookup `currentVersionReleaseDate`). Confirmed.
3. Once released **Nov 24, 2025**, 729 ratings; IAPs from "Film: 10 participants $1.99" to "Film: 150 participants $59.99" (apps.apple.com US). Confirmed.
4. (Not Boring) Camera released Jun 5, 2025; IAPs !Camera Plus $14.99/yr, $59.99 lifetime; Super !Boring $7.99/mo, $29.99/yr. Confirmed (ratings now 5,774).
5. RevenueCat SOSA 2026: Photo & Video trial-to-paid median **22.2%**, lowest of all categories, top quartile above 33.1%. Confirmed on revenuecat.com/state-of-subscription-apps.
6. Same page: **68.2%** of Photo & Video trials are 4 days or shorter. Confirmed.
7. Same page: **55.4%** of 3-day-trial cancellations on Day 0 (84% by Day 1). Confirmed.
8. Same page: download-to-trial "most non-gaming categories between 5% and 6%". Confirmed (Photo & Video is not broken out, so the 5–6% benchmark is a cross-category one).
9. Apple HIG Privacy, pre-alert screens: one button, "Continue" or "Next", no "Allow", no cancel or close; applies to camera, microphone, location, contacts, calendar and tracking. Confirmed word for word from Apple's HIG JSON.
10. App Review 5.1.1(iii) "use the out-of-process picker or a share sheet rather than requesting full access to protected resources like Photos or Contacts". Confirmed on the guidelines page (last updated Oct 16, 2026).
11. Texas SB 2420: the Fifth Circuit granted a stay pending appeal on **June 4, 2026** (after a May 28 administrative stay), so the law is enforceable while the appeal runs. Confirmed via MediaPost, Pearl Cohen, Morrison Foerster, Eric Goldman's blog. A petition asking the Supreme Court to vacate the stay was filed in June 2026 (WLF), so the status can still change.

**Changed**
1. Key takeaway 8: "nearly all trials start on Day 0" overstated the source. Now: about 8 in 10 (82% in SOSA 2025; 78–90% by category in SOSA 2026).
2. Key takeaway 9: "half of the people who cancel do it in the first hour" was wrong. RevenueCat's Day 0 is the install day, not the first hour. Reworded.

**Could not verify**
- Apple's exact developer instructions for Texas (Declared Age Range, Significant Change API) were not re-read today; the court dates were. Treat the API list as from the Dec 23, 2025 Apple Developer News post.
- FTC COPPA FAQ D.7 / H.3 wording on neutral age screens was not re-fetched today.
- Mobbin screen contents and capture dates [V-M] can't be re-checked without the original downloads; they rest on the author's contact sheets.
