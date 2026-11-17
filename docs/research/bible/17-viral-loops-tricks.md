# 17 · Viral loops, growth tricks and launch tactics for Digi

**Date of research:** Nov 17, 2026. **Track:** every loop, trick and launch tactic that could make Digi spread or bring people back: watermarks and "made with" stamps, share sheets, invite-to-roll, App Clips, widgets, Live Activities, referral credits, streaks, the "develops tomorrow" reveal, shots per roll, App Store featuring, In-App Events, pre-orders, rating prompts and re-engagement.

**Labels:** **V** = I checked it myself today (page, API or screen). **V-M** = seen on a Mobbin screen. **C** = someone else's claim I could not re-check. **E** = my estimate, with confidence (high / med / low).

**Read with:** chapter 14 (TikTok organic), 15 (Instagram/Snap/influencers, which already covers the Instagram Stories API and sticker chains in detail), 12 (ASO and rating timing), 10 (onboarding of viral apps), 04 (booth and social competitors), and prior `03-product-social.md` (loop maths and roll design). I don't repeat those; I point to them.

---

## Key takeaways

1. **The share is the ad, and the date stamp is the watermark.** Every free Digi image should leave the app with `digi.pink` inside the orange date stamp. Instagram's Stories API has no link or attribution field [V, Meta docs], so the pixels are the only place the brand can travel. Competitors now sell "No watermark" as a feature (1998 Cam, 40,452 ratings) [V], so the mark must look like part of the look, not a logo slapped on.
2. **"Develops tomorrow" is not new any more.** At least seven US apps already sell a shared roll that reveals later with no download for guests: POV (15,707 ratings), Lense (1,547), Once (729), Party! by Hipstamatic (232, "the morning after, you all wake up to one shared roll"), Scene (116), Revel (20), Everlens (18) [V, iTunes API, Nov 17]. Digi can copy the mechanic, but it can't win on it. It wins on the look and the AI strip recap.
3. **Hard invite gates buy a spike and then a crash.** Lapse required invites, hit **218K downloads in one day** (Oct 2023) and fell **70% to 63K/day** within weeks; Appfigures called the gate "a dark pattern" [V]. In Nov 2025 Lapse cut its feed, profiles and chat to save costs and went back to being a disposable camera [V, Product Hunt thread]. Apple also says subscribers must get what they paid for without "posting on social media, uploading contacts" [V, Guidelines 3.1.2 note]. So Digi gives rewards for invites but never gates the camera.
4. **Weekly rituals beat daily streaks for photo apps.** Locket's Sunday "Rollcall" uses a Live Activity on the Lock Screen; over **25% of active users post weekly** and it drove **1M+ shares in week one** [V, TechCrunch Nov 3, 2025]. Locket has a streak toggle on its widget too [V-M, chapter 11], but its growth story is the widget plus the weekly ritual.
5. **Live Activities fit the 9 a.m. reveal almost exactly.** A Live Activity can run **up to 8 hours**, then stays on the Lock Screen up to 4 more (12 hours max) [V, Apple ActivityKit docs]. A countdown started when the party ends (1 a.m.) reaches a 9 a.m. reveal with no hacks. A countdown started at 7 p.m. can't.
6. **App Clips are how the best event cameras let guests shoot without installing**: Once and Everlens both say so in their store text [V]. An App Clip for physical codes (QR, NFC) must stay small: Apple's table lists 10 MB (iOS 15 and earlier), 15 MB (iOS 16 and earlier) and 25 MB (iOS 27.3 and later), and the 100 MB limit applies only to digital-only invocations on iOS 17+ [V, Apple docs]. It needs a native Xcode target. That's a v2 job for an Expo app (E, high).
7. **Apple's free promotion tools have deadlines.** Featuring nominations want **at least 3 weeks** of lead time [V, App Store Connect help; Apple's "Getting featured" page says a minimum of 2 weeks and up to 3 months for wider consideration]. In-App Events can run **up to 31 days** and be shown **14 days before** they start, with up to **10 published at once** (15 approved) [V]. Pre-orders can open **2–180 days** before release, and the app auto-downloads on release day [V]. For NYE, the nomination and the event must be submitted by about **Dec 10**.
8. **Referral rewards should be paid in digis, not dollars.** Cash "affiliate or referral payouts" count as ad spend in the contest [V, rules]. AI costs don't [V]. Five digis cost Digi about $0.10–0.15 in AI (E, med). Ask the organisers to confirm in writing that in-app credits are not a "payout".
9. **Rating prompts: 3 per user per year, never from a button, never at launch** [V, Apple docs]. Apple's own sample waits for 4 completed tasks and a pause of a few seconds before asking. Digi's best moment is "Save all" on a developed roll.
10. **Realistic viral coefficient for Digi stays low (K ≈ 0.1–0.2, E med).** Loops lower the cost of every user and make TikTok posts convert better. They don't replace TikTok. The fastest real lever in the contest window is the share artifact on every image, not the social graph.

---

## 0. What I corrected or added vs earlier chapters

| # | Earlier claim | What I found today | Effect |
|---|---|---|---|
| 1 | `03-product-social.md` names Once as the app that "already" has the Digi Roll pattern | **At least seven** live US apps sell reveal-later shared rolls with no guest download: POV, Lense, Once, Party! (Hipstamatic), Scene, Revel, Everlens [V, iTunes descriptions]. Party! even uses the "morning after… one shared roll" line. Once and Everlens use App Clips; Revel uses a lock-screen widget and NFC tags [V]. | "Develops tomorrow" is table stakes, not a moat. Don't market the mechanic; market the look. |
| 2 | Lapse "had to invite 5–8 friends by SMS" | Neither the TechCrunch funding story (Feb 27, 2024) nor the two Appfigures pieces I opened give a number. TechCrunch says "forced invites" and that new users still had to share "a couple of names and numbers" [V]. | Treat "5–8" as **unverified (C)**. The lesson stands. |
| 3 | Lapse "~1.2M users by Oct 2023" | Appfigures (Sep 22, 2023) says **~1.2M downloads** since launch, most in the last few days, and **176K on one Thursday**, up from ~50/day earlier that year [V]. Peak was **218K/day** in October [V]. | Downloads, not users. |
| 4 | Nothing on Lapse after 2024 | **Nov 3, 2025:** Lapse said it "can no longer sustain the scale we've reached", removed Feed, Profile and Chat, and went back to a disposable camera [V, Product Hunt thread quoting the announcement]. | A big social graph with no revenue sank under its own costs. Digi's paid AI layer is the right instinct. |
| 5 | Rollcall uses Live Activities "introduced in iOS 18" (TechCrunch wording, repeated in prior notes) | Live Activities first shipped in **iOS 16.1** (2022) (C, high; Apple's current doc doesn't print the version). Rollcall itself is the 2025 feature. | Digi can support Live Activities from iOS 16.1. Remote "push-to-start" came later (iOS 17.2, C, med). |
| 6 | Gas: "$1M in sales within weeks" (C) | Wikipedia: **5.1M downloads by early Nov 2022**, **300K daily downloads in Oct 2022**, "God Mode" at **$6.99**, launched in a few states first; The Hustle says **12 states** at 500K downloads [V]. | Adds hard numbers. Still not Digi's audience. |
| 7 | Live Activity limits not stated | **8 hours active + up to 4 hours on the Lock Screen = 12 hours max; 4 KB data limit** [V, Apple]. | The roll countdown must start when the party ends, not when it starts. |
| 8 | App Clip "skip for launch" (07) | Agree. New detail: App Clips can send notifications for **up to 8 hours** after launch without a normal permission prompt, and Apple says use an in-clip overlay to suggest the full app, "not push notifications" [V, HIG]. | Good fit for v2 guests; still not for the contest. |

---

## 1. Method and limits

**What I used:** Apple's developer docs as JSON (ActivityKit, App Clips, ratings, Review Guidelines of Oct 16, 2026), Apple help pages (featuring, offer codes, win-back offers, pre-orders, In-App Events), Meta, Snap and TikTok developer docs, the iTunes Search and Lookup APIs (US, Nov 17), Wikipedia, TechCrunch, Appfigures, NoGood, dot.la and Product Hunt pages that earlier chapters cited, Mobbin (iOS flows and screens), and Nevo David's playbook library.

**What I could not do:** The shared web-search budget for this run was used up before my first search ran. So I did **no fresh open-web searching**: no new Reddit threads, X threads or YouTube transcripts. I fetched only pages I could name directly. Where a claim needs a source I couldn't open today, it's labelled C. I did not invent founder quotes. If you want the Reddit/X/YouTube layer, send a follow-up and I'll run it with a fresh budget.

---

## 2. The loop maths, redone for a party camera

A viral loop has three numbers: how many people see a share, how many of them try the app, and **how long one turn of the loop takes** (cycle time). Party apps have a long, bursty cycle: you shoot on Friday, the roll reveals on Saturday, and the next party might be weeks away.

**Loop A: solo share with watermark (v1, every user).**
- 30% of active users share at least one image a week (E, med; photo-app share rates aren't published).
- Each Story is seen by ~50–150 friends (E, low; Meta doesn't publish averages for personal accounts).
- 0.3–1% of viewers read the stamp, search "digi pink" and install (E, low).
- **K ≈ 0.3 × 100 × 0.5% ≈ 0.15 per week** (E, low). Cycle time: about a day.

**Loop B: hosted roll (v1.1+, hosts only).**
- A host invites ~8 people; 60% join on the web (E, med).
- Guests see the reveal and the stamp. Some later host their own roll. Partiful's model is "guests become hosts" [C, NoGood].
- If 5% of guests host within a month: **0.24 new hosts per hosted roll** (E, low). Cycle time: 1–3 weeks.

**What this means:** Loop A is weak but fast and free. Loop B is stronger per event but slow, and it only matters once lots of people host. Neither gets to K > 1. In the contest window, **Loop A on every image plus TikTok content is the plan**. Loop B is the hook for the Christmas-to-NYE party burst (Dec 19–Jan 1), when party density is highest and the cycle shrinks to days (E, med).

**Benchmarks to keep you honest:** a "good" consumer K is about 0.15–0.25 and "great" is about 0.4 (C, weak growth blogs; prior 03). Lapse hit K > 1 for a few weeks only with a forced gate, and lost 70% of daily downloads in about six weeks [V, Appfigures].

---

## 3. Evidence: what the viral photo and party apps actually did

New facts only; earlier facts are in prior 03 §1 and chapter 04.

| App | Mechanic | Hard numbers (date) | Lesson for Digi |
|---|---|---|---|
| **Locket** | Home-screen widget shows friends' photos; **max 20 friends**; monthly recap video; Sunday Rollcall Live Activity [V, App Store text; TechCrunch] | **593,254 US ratings, 4.76★** (Nov 17, 2026) [V]. 20M installs by Jun 2022 (Sensor Tower via TechCrunch) [V]. 91M+ lifetime installs, 100K+ subscribers, profitable since 2024; 2M users and 1M posts on one weekend in Oct 2025 [V, TechCrunch Nov 3, 2025] | Small private groups and a weekly ritual. The widget is a free notification channel. |
| **Lapse** | "Shoot first, develop later", forced invites, Story share cards ("see my photos on Lapse") [V-M] | 8K/day early Sep 2023 → 210K late Sep → **218K peak** in Oct → **63K by Nov 17, 2023** [V, Appfigures]. 118,321 ratings [V]. $30M raise Feb 2024, ~$42M total [V, TechCrunch]. Simplified Nov 2025 [V] | Spikes from gates fade. Share cards that sell *you* ("see my photos") still work and are clean. |
| **Dispo** | Photos develop at **9 a.m.** the next day [V, App Store text] | 2.6M downloads from Christmas 2019 launch to Oct 2020 [V, dot.la]. ~800/day by Sep 2023 [V, Appfigures]. 8,299 ratings, 4.3★ [V] | The 9 a.m. reveal is a real hook, but creator-led (David Dobrik) growth fades when the creator leaves. |
| **BeReal** | One random 2-minute window per day; you must post to see friends; late posts are labelled; up to 5 bonus posts; year-end recap video (Dec 2022); World Cup goal pushes (2026) [V, Wikipedia] | 21.6M → 73.5M users Jul→Aug 2022; DAU ~15M Oct 2022 → ~6M spring 2023; sold to Voodoo ~€500M Jun 2024 [V]. 1,163,655 US ratings [V]. #bereal had 390M+ TikTok views by Jun 2022 [V, TechCrunch] | Give-to-get works. Daily obligation burns out. **Event-timed pushes (a goal, midnight on NYE) are the good kind.** |
| **Gas / tbh** | School-by-school rollout; tbh founders "used Instagram to target teenagers at specific schools… timing their messages to… the end of the school day" [V, Wikipedia citing BuzzFeed] | tbh #1 US Oct 2017, bought by Facebook (~$100M est.). Gas: 300K downloads/day Oct 2022, 5.1M by early Nov; shut Nov 7, 2023 [V] | **Cluster seeding** (one school, one city, one occasion at a time) makes the app feel everywhere inside a group. A hoax nearly killed Gas: keep a public safety page. |
| **Poparazzi** | Open TestFlight + TikTok to build **pre-orders**; auto-followed all contacts on sign-up [V, Wikipedia] | 5M downloads by Jun 2022; shut Jun 2023 [V] | Pre-orders work as a launch-day stack. Auto-contact tricks are now banned (5.1.1(v)) and cost trust. |
| **Clubhouse** | Invite-only; codes resold on eBay **up to $400**; a German invite chain on Telegram [V, Wikipedia] | 3.5M → 8.1M downloads in two weeks (Feb 1–15, 2021); 10M on the waitlist when it opened (Jul 2021) [V] | Scarcity works when demand already exists. Digi has no demand yet, so a waitlist would only slow it. |
| **Partiful** | Invites are links; guests RSVP without an account; photo uploads to the event; branded disposable cameras sold as an add-on [V, Wikipedia, NoGood] | Apple App Store Award finalist and Google Best App 2024; 500K MAU in Q1 2025 (+400% YoY); a lookalike-contest event got ~5,000 RSVPs [V/C, NoGood] | The invite page is the landing page. Screenshots of fun events are free media. |
| **Dropbox** | Two-sided referral in product currency: **+500 MB per referral, up to 16 GB** free [V, Wikipedia] | — | Pay referrals in the thing the product sells (for Digi, digis). |
| **Event cameras** (POV, Once, Everlens, Scene, Revel, Party!) | QR or link join, shot limits per guest, timed reveal, host pays per event [V, App Store text] | POV 15,707 ratings 4.92★; Once 729 (launched Nov 24, 2025) [V] | The mechanic is solved and free to copy. Price per event, not per guest. |

---

## 4. The trick catalogue (52 tricks)

Each row: what it is, the proof, and how well it fits Digi (**Fit /10**, my judgement) and when (v1 = contest build, v1.1 = late Nov, v2 = after Dec 16).

### 4A. The output is the ad (share artifacts)

| # | Trick | How it works | Source | Fit | When |
|---|---|---|---|---|---|
| 1 | **Brand inside the date stamp** | Render `'26 12 31 23:58 · digi.pink` in the orange stamp on every free image. It reads as part of the look. | Once's stamp "ONCE \| JUL 30 2026" [V-M, ch. 04]; Huji Cam's stamp is its identity (12,004 ratings) [V]; IG has no link field [V, Meta] | **10** | v1 |
| 2 | **Subtle "made with" corner on share cards** (not on the photo itself) | A small badge on the Story card frame, outside the photo. | Any Distance "Made with Any Distance" share card; VSCO recipe card shows `vsco.co/username`; yope card carries "YOPE" [V-M, [Any Distance](https://mobbin.com/screens/57f3e4e3-06f4-46ca-acdd-e2181f7cd1bc), [VSCO](https://mobbin.com/screens/5c4cf591-372e-4db4-8db6-338502730d42), [yope](https://mobbin.com/screens/b8225415-6f2d-4ecf-a81a-bf4ce5e71e87)] | 9 | v1 |
| 3 | **Let payers remove the mark, but keep the stamp on by default** | Paid users can switch the `digi.pink` text off; most won't. | 1998 Cam markets "No watermark" (40,452 ratings) [V]; free-with-mark / paid-without is a common pattern (C) | 8 | v1 |
| 4 | **Share row with destinations first, Save last** | Big buttons for Instagram Story, TikTok, Snapchat and Messages above "Save". | CapCut's "Ready to share" puts **Share to TikTok** as the main button [V-M, [CapCut](https://mobbin.com/screens/788e678d-131a-4836-a8a6-ca1427d2a0e0)]; Locket's sheet: Messages, Instagram, Snapchat [V-M, [Locket](https://mobbin.com/screens/0b4a7bea-b365-4b55-a993-48d00f87cd01)] | **10** | v1 |
| 5 | **A Story-sized card, not a raw photo** | Send a 9:16 background (≥720×1280) plus the strip as a movable sticker image. | Meta Stories API keys and sizes [V, Meta docs]; ch. 15 §2.4 | 9 | v1 |
| 6 | **Copy the share link before opening Instagram** | Put `digi.pink/s/abc` on the clipboard so the user can paste it into the Link sticker. | Ch. 15 (whether the paste survives is untested) | 7 | v1 (test) |
| 7 | **Snapchat share with attachment URL** | Creative Kit sends media, one sticker and a caption; the iOS reference lists an attachment URL [V, Snap docs; ch. 15]. | Snap docs [V] | 8 | v1.1 |
| 8 | **TikTok "photo dump" in one tap** | TikTok Share Kit sends **up to 35 images** (or 12 videos) straight into TikTok's editor, aspect ratio 1:2.2 to 2.2:1 [V, TikTok docs]. A whole developed roll becomes a TikTok photo post. | TikTok developer docs [V] | **9** | v1.1 |
| 9 | **Instagram carousel export (20)** | Export the roll as 20 4:5 images. | IG carousel limit 20 since Aug 2024 [V, prior 03] | 8 | v1.1 |
| 10 | **"Join our roll" Story card with a QR code** | The host posts a card to their Story; friends at the party scan or tap. | Lapse's "Share your Journal · see my photos on Lapse" Story card [V-M, [Lapse](https://mobbin.com/screens/79181671-e584-4b4b-9331-353e58599116)]; Scene: "Put the QR code on a table card, a screen or in the group chat" [V] | 8 | v1.1 |
| 11 | **Ask for a hashtag in the store text** | One line: "tag #digipink to get reposted". | Dazz Cam's description: "tag them with #dazzcam" (118,201 ratings) [V] | 6 | v1 |
| 12 | **Credited reposts of real users** | Repost the best user strips, with permission. | Ch. 14 (WayShot) [C] | 7 | after launch |
| 13 | **"How it developed" GIF** | A short making-of animation as a second share. | Life4Cuts session video with the QR download [C, prior 03] | 6 | v2 |
| 14 | **Year recap on Dec 31** | "Your 2026 in digis": an auto strip of the user's year (for new users, their December). | BeReal's year-end compilation (Dec 2022) [V]; Locket's monthly recap video [V] | 8 | Dec 28 |

### 4B. Invite and group loops

| # | Trick | How it works | Source | Fit | When |
|---|---|---|---|---|---|
| 15 | **No download for guests** | A guest opens a web link, adds photos, sees the reveal. Only the host needs the app. | POV, Once, Scene, Everlens, Revel, Party! [V]; Partiful RSVPs without an account [V] | **10** | v1.1 |
| 16 | **Pre-written group-chat text** | The app writes the invite; the user just picks the chat. | Partiful [V-M, prior 03] | 9 | v1.1 |
| 17 | **Host pays, guests free** | Price the roll by size; free for small groups. | POV (free to 10 guests, IAPs $4.99–89.99) [V, prior 03]; Scene and Everlens free for up to 5 guests [V] | 8 | v2 |
| 18 | **Shots per guest** | e.g., 24 shots each. Scarcity makes people choose moments, and the roll feels like film. | Once: "Limited shots = better photos" [V]; Scene: "when everyone has only a few, every shot counts" [V]; Gudak's 24-shot rolls (C, not re-checked) | 9 | v1.1 |
| 19 | **One synchronized reveal** | Everyone's photos unlock at the same moment, so shares bunch into one hour of Story activity. | Dispo 9 a.m. [V]; Party!: "the whole roll is revealed to everyone at once" [V] | **10** | v1.1 |
| 20 | **Lock-screen countdown (Live Activity)** | "Roll develops in 6h 12m" on every guest's Lock Screen. Max 8 h active [V, Apple]. | Locket Rollcall [V]; Revel "camera widget… on guests' lock screens" [V] | 8 | v2 (native target) |
| 21 | **QR on a screen or table card** | One code people scan in the room. | Scene, Lense, POV [V] | 8 | v1.1 |
| 22 | **App Clip for guests** | iPhone guests get a native mini-camera with no install, 8 h of notifications, then an install overlay. | Once and Everlens [V]; Apple HIG [V] | 7 | v2 |
| 23 | **Small group cap** | Free rolls up to ~12 people; bigger rolls paid. Small groups feel private and share more. | Locket's 20-friend limit [V] | 7 | v1.1 |
| 24 | **Invite rewards that unlock *free* extras** | "2 friends joined: bonus look unlocked." | Beli: "You have 3 invites left! Unlock features as friends join (4/5)" [V-M, [Beli](https://mobbin.com/flows/9f26df76-b587-42d5-9ef2-66e989761b96)] | 6 | v2 |
| 25 | **Cluster seeding** | Launch inside one tight group (an occasion, a city) at a time. | tbh/Gas school targeting [V, Wikipedia]; BeReal campus ambassadors [V, ch. 15] | 6 | Dec (occasion = Christmas parties) |
| 26 | **Post to see** | Guests see the full roll only after they add at least one shot (or a selfie for the strip). | BeReal's post-to-see rule [V] | 6 | v2 |
| 27 | **Invite-only waitlist** | Scarcity hype. | Clubhouse ($400 codes) [V] | 2 | never in contest |
| 28 | **Hard invite gate** | Must invite N friends to use the app. | Lapse spike and crash [V]; Apple 3.1.2 note [V] | **0** | never |

### 4C. Referral and credits

| # | Trick | How it works | Source | Fit | When |
|---|---|---|---|---|---|
| 29 | **Two-sided referral in product currency** | Both people get 5 digis when the friend makes their first AI digi. | Dropbox 500 MB per referral [V]; Manus "Invite to get credits… 500 credits each" [V-M, [Manus](https://mobbin.com/flows/ee745d66-e0d9-40c1-8920-f45808c0cd97)] | **9** | v1.1 |
| 30 | **Reward a real action, not an install** | Pay out after the friend's first generation, which blocks fake-account farming. | ClassPass pays "when they become paying members"; Preply pays after the friend's first lesson [V-M, [ClassPass](https://mobbin.com/flows/0a9a4037-a5f2-44b3-b43a-6f9e78718471), [Preply](https://mobbin.com/flows/44e88f82-a28e-49f2-881d-c8e25a87c94c)] | 9 | v1.1 |
| 31 | **Top-up at 3 friends** | "Get 3 friends in and we'll top you up to 25." | ClassPass: "Get 3 friends to join and we'll top it up to 100 credits" [V-M] | 6 | v2 |
| 32 | **Monthly cap and a visible history** | e.g., max 50 bonus digis a month; show "Credits / Referrals" counters. | Manus invitation history panel [V-M] | 8 | v1.1 |
| 33 | **"Friend already joined" state** | A clear message when the link was already used. | Manus [V-M] | 5 | v1.1 |
| 34 | **Gift a Party Pack** | The host buys digis for the group before the party. Apple allows gifting of IAP items; refunds go to the buyer only [V, Guideline 3.1.1]. | Apple Guidelines [V] | 7 | v2 |
| 35 | **Creator/custom offer codes** | Apple offer codes: up to 1M per app per quarter; custom codes up to 64 characters and 25,000 redemptions at a time; IAP codes need iOS 16.3+ [V, Apple help]. | Apple help [V]; ch. 15 creator plan | 6 | Dec |
| 36 | **Never expire paid digis** | Bought credits "may not expire" [V, 3.1.1]. Bonus digis *can* have an end date (E, med: the rule speaks of purchased credits). | Apple Guidelines [V] | rule | v1 |

### 4D. Habit and re-engagement

| # | Trick | How it works | Source | Fit | When |
|---|---|---|---|---|---|
| 37 | **Weekly ritual on the Lock Screen** | "Sunday dump": turn this week's shots into a free strip. | Locket Rollcall: >25% of actives post weekly, 1M+ shares in week one [V] | 8 | v2 (in-app card v1.1) |
| 38 | **Home-screen widget** | "Last night's strip" or the roll countdown. | Locket (widget-first, 593K ratings) [V]; widget apps Noteit 18.8M installs, BeReal WidgetMojis [V, TechCrunch 2022] | 6 | v2 |
| 39 | **Push permission asked at the reveal moment** | "Turn on notifications so you know when your roll develops." | Lapse asks right after the first shutter tap: "see snaps when they develop" [V-M, ch. 10] | **9** | v1 |
| 40 | **Event-timed push** | One push at a real moment: midnight on NYE, the morning after Christmas parties. | BeReal's World Cup goal pushes [V] | 8 | Dec 31 |
| 41 | **Streak with a warning** | Email/push shortly before a streak ends. | Postiz: email 2 hours before the streak expires [V, Nevo]; Locket widget "Show Streak" toggle [V-M, ch. 11] | 3 | skip (parties aren't daily) |
| 42 | **Weekly look drop** | A new look every Thursday, matched to a TikTok post. | Prior 03 §6 [E] | 8 | from Nov 27 |
| 43 | **Win-back offers** | Apple shows them to people lapsed 1–24 months in Manage Subscriptions (iOS 14.3+) and in-app (iOS 18+), and can promote them on the App Store [V, Apple help]. | Apple [V] | 5 | Jan 2027 |
| 44 | **Recap memories** | "1 month ago: your Friendsgiving strip" in-app. | Locket monthly recap [V]; Snapchat Memories (prior 03) | 6 | v2 |

### 4E. App Store and launch

| # | Trick | How it works | Source | Fit | When |
|---|---|---|---|---|---|
| 45 | **Featuring nomination** | App Launch / New Content nomination, ≥3 weeks before the date, with an In-App Event attached and a TestFlight link as supplemental material (up to 5 URLs) [V, Apple help]. | Apple [V] | 7 | now (for NYE) |
| 46 | **In-App Events** | Event cards show in search, on your product page and in Today-tab picks; people can tap "Notify me"; up to 31 days long, promoted 14 days early, 10 published at once (15 approved) [V]. Badges include Live Event, Major Update, Special Event [V]. | Apple [V]; ch. 12 §7 | **9** | Dec 1 & Dec 17 |
| 47 | **Pre-orders to stack day one** | 2–180 days of pre-order; the app downloads itself on release day and appears in search [V, Apple]. | Apple [V]; Poparazzi used TikTok + open TestFlight to build pre-orders [V, Wikipedia] | 5 | only if review is fast (see §6) |
| 48 | **Rating prompt at the peak moment** | System prompt only; 3 times per 365 days; not from a button, not at launch; Apple's sample waits for 4 completed tasks and a pause [V]. Add a "Rate Digi" row in Settings using the `action=write-review` link [V]. | Apple docs [V]; ch. 12 §10 | **9** | v1 |
| 49 | **Concentrate downloads** | Charts reward a burst. Lapse at 176K–218K/day was #1 overall; Gas at ~300K/day passed TikTok [V]. Category charts need far less, but I found no public threshold (unverified). | Appfigures, Wikipedia [V] | 6 | launch week |
| 50 | **Manual release** | Hold the approved build and release it the morning your TikToks go out (US time). | Standard App Store Connect option (C, high) | 8 | launch |

### 4F. Content-loop tricks (feed the share loop)

| # | Trick | How it works | Source | Fit | When |
|---|---|---|---|---|---|
| 51 | **The "showed them" slideshow** | "[Person] + [doubt] → I showed them → they changed their mind." Slide 1 is the hook and the only slide most people read. | Nevo David's slideshow guide (AI room app: "My landlord said I can't change anything…", 234K views) [C, Nevo] | 8 | daily |
| 52 | **One hub post, everything points to it** | For any launch push, send every channel to one post instead of several. | Papermark's Product Hunt day via one tweet (~100K views) [C, Nevo] | 5 | launch day |

### 4G. Never do these (they've been punished)

- **Fake activity or fake friends.** NGL's fake messages led to a $5M FTC/LA settlement and an under-18 ban [V, prior 03].
- **Auto-following or auto-messaging contacts.** Poparazzi did the first [V]. Apple now bans "Select All" contact invites and requires showing the message before it's sent [V, 5.1.1(v)].
- **Paying, filtering or faking for ratings or charts.** "Expelling you from the Apple Developer Program" [V, Guidelines 3.2.2 / 5.6]. Also no "rate us 5★ for free digis".
- **Gating paid features behind posting or contacts** [V, 3.1.2 note].
- **Push marketing without opt-in** [V, 4.5.4]. Live Activities can't be used for spam either [V, 4.5.3].
- **Promoting to friends or family who then buy.** That's a contest disqualification [V, rules]. Referral links must go to strangers, not classmates.

---

## 5. The 15 best tricks for Digi, ranked

Ranked by (expected effect on profit in the next 30 days) × (how cheap it is to build for a solo founder on Expo) × (risk). Scores are my judgement (E, med).

| Rank | Trick (#) | Why it ranks here | Build cost | Ship by |
|---|---|---|---|---|
| 1 | **Brand inside the date stamp** (1, 3) | Every free image becomes an ad at zero cost. It's the only attribution that survives Instagram. | 2–3 h (Skia text) | v1, Nov 19 |
| 2 | **Share row: Story / TikTok / Snap / Messages first** (4, 5) | Removes 2–3 taps from every share. Story cards look designed, so people post them. | 1 day | v1 |
| 3 | **Notification ask at the "develop" moment** (39) | Without push, rolls and AI results can't call people back. Contextual asks beat cold asks (iOS median opt-in ~49%, C). | 2 h | v1 |
| 4 | **Rating prompt after "Save all" or the 3rd share** (48) | Ratings decide whether you show up for "photo booth" (top apps have only 81–86 ratings, ch. 12). | 2 h | v1 |
| 5 | **Two-sided referral in digis, paid on first AI digi, capped** (29, 30, 32) | Cheap in AI cost, not a "payout" (to confirm). Turns every happy user into a channel. | 1–2 days (server ledger + deep link) | v1.1, Nov 28 |
| 6 | **No-download web roll + pre-written group text** (15, 16) | The core group loop. Guests meet the stamp and the reveal; some become hosts. | 3–5 days | v1.1 or Dec 17–24 |
| 7 | **One synchronized next-morning reveal** (19) | Bunches shares into one hour and gives every guest a reason to open the link. | Part of #6 | with #6 |
| 8 | **TikTok photo-dump share (35 images)** (8) | Puts the full roll on TikTok, where Digi's buyers find apps. | 1 day (Share Kit + TikTok dev approval) | v1.1 |
| 9 | **In-App Events: "Christmas Party Looks" and "NYE Roll Night"** (46) | Free App Store placement in search and Today picks, plus "Notify me". | 1 h each + review | Dec 1 and Dec 17 |
| 10 | **Shots per guest (24)** (18) | Makes the roll feel like film and keeps hosting costs bounded. | Small, part of #6 | with #6 |
| 11 | **Year recap strip on Dec 28–31** (14) | The one moment everyone posts recaps. A free, non-AI strip. | 1 day | Dec 28 |
| 12 | **Featuring nomination (App Launch, then New Content for NYE)** (45) | Low odds, zero cost; needs 3 weeks. | 30 min | today and Dec 10 |
| 13 | **"Join our roll" Story card with QR** (10, 21) | Turns the host's Story into the party's front door. | Half a day | with #6 |
| 14 | **Event-timed push at midnight NYE** (40) | One honest, opted-in push at the most shareable minute of the year. | 1 h | Dec 31 |
| 15 | **Weekly look drop matched to a TikTok** (42) | Gives the content engine a fresh hook every week and gives users a reason to reopen. | Ongoing | from Nov 27 |

**Left out on purpose:** App Clip (great, but a native target; v2), widget and Live Activity (v2, need `expo-apple-targets` native Swift, prior 07), waitlists and invite gates (harmful), daily streaks (wrong rhythm), pre-orders (they delay revenue; see §6).

---

## 6. Launch-day and chart tactics for the contest

**What the charts reward (C/E):** Apple doesn't publish the chart formula. What's observable: a burst of downloads in a short window moves you up fast (Lapse, Gas, Poparazzi) [V]. Ratings and keyword metadata matter for search [V, Apple search page via ch. 12]. Since mid-2025, screenshot caption text appears to be read for search (C, Appfigures; the author couldn't prove which parts of the caption count).

**Should Digi use pre-orders?** Probably not in the contest (E, med).
- *For:* pre-orders download automatically on release day [V], which stacks day-one downloads.
- *Against:* a pre-order needs an approved build, the earliest release is 2 days later [V], and every pre-order day is a day with no revenue. With the window closing on Dec 16, two lost revenue days cost more than a chart bump is worth.
- *Exception:* if approval lands on a Thursday or Friday, set release for the next **Monday or Tuesday morning US time**. Then post the first TikTok batch over the weekend pointing to the pre-order page.

**Launch sequence (E, med):**
1. **Choose "manually release this version."** Release at ~9 a.m. US Eastern (16:00 Cairo) so the first TikTok wave lands on an app that's already live.
2. **Day 0:** post 3 slideshows per account in the first 6 hours. Every slide ends on the stamped image.
3. **Day 0–2:** answer every review within 24 h. The rating prompt fires only after real success, so early ratings skew positive honestly.
4. **Day 1:** submit the first In-App Event so it can go live a week later.
5. **Day 3–7:** check which look gets shared most (track share taps by look). Make the next TikTok batch about that look.

**Featuring:** Nominations are free. Use the **App Launch** type now (even this late) and attach the Christmas In-App Event. In "Helpful details", note that Digi is a solo founder app with an honest paywall, keeps faces real and has a visible close button. Apple's form asks about "unique aspects of the app or team" [V]. Featuring odds are low for a brand-new app (E, med). Don't plan around it.

---

## 7. Exact copy (original, ready to use)

All lines are new for Digi. Keep them short. None use fake urgency.

**Date stamp (free tier):** `'26 11 27 23:41  digi.pink`
**Share card corner (outside the photo):** `made with digi ↗`

**Share row title:** "Post it" · buttons: **Story** · **TikTok** · **Snap** · **Messages** · Save
**Toast when the link is copied:** "Link copied. Add the 🔗 sticker and paste it so friends can make theirs."

**Group invite text (pre-written, the user can edit):**
> "I started a digi roll for tonight 📸 Tap to add your pics, no app needed: digi.pink/r/7KQ2 · it develops tomorrow at 9"

**Story card for the host:**
> top: "we're shooting tonight" · middle: QR · bottom: "join the roll · develops 9 a.m."

**Notification pre-ask (one button, Apple HIG):**
> "Your roll develops at 9 a.m. Turn on notifications so you see it first." · **Continue**

**Reveal push (transactional):**
> "Your roll developed ☀️ 143 shots from 9 friends are in."

**Live Activity (v2):**
> compact: "🎞 6h 12m" · Lock Screen: "Mia's birthday roll · 143 shots · develops 9:00"

**Referral screen:**
> Title: "Give 5 digis, get 5 digis"
> Body: "When a friend makes their first digi with your link, you both get 5. Up to 50 a month."
> Button: "Share my link" · Small print: "Bonus digis expire after 60 days. Bought digis never expire."

**Referral success:** "Sam made their first digi. +5 for you 🎉"
**Link already used:** "Looks like this friend already joined. Your link still works for others."

**Rating prompt:** no custom text. Use the system prompt only.
**Settings row:** "Rate Digi on the App Store" (opens `?action=write-review`).

**In-App Event card (ch. 12 has the full set):**
> Name: "Christmas Party Looks" · Short description: "New flash looks for office parties and ugly sweaters." · Badge: Major Update
> Name: "NYE Roll Night" · Short description: "Shoot all night. Your roll develops on Jan 1." · Badge: Live Event

**NYE push (opted-in users only, 23:58 local):**
> "2 minutes. Get the flash ready ✨"

---

## 8. Build notes that matter (Expo / React Native)

- **Share to Instagram Stories:** pasteboard keys `com.instagram.sharedSticker.backgroundImage` / `stickerImage`; query scheme `instagram-stories` in `LSApplicationQueriesSchemes`; Facebook App ID required since Jan 2023 [V, Meta]. `react-native-share` supports this (C, high).
- **TikTok Share Kit:** register on TikTok for Developers, add Share Kit, needs photo-library access to the saved images; 35 images max [V]. Budget 2–5 days for TikTok app approval (C, low). If approval is slow, fall back to the system share sheet.
- **Snapchat Creative Kit:** needs a Snap Kit app registration (ch. 15 says apply this week).
- **Live Activities / widgets / App Clip:** all need native Swift targets. In Expo they're done with config plugins such as `expo-apple-targets` (C, med). **Not before Dec 16.**
- **Referral deep links:** a link like `digi.pink/i/CODE` opens the app if installed (Universal Links), or the web page with an App Store button. After install, ask "Got a friend's code?" with paste detection; don't rely on fingerprinting (E, high; Apple's privacy rules make device fingerprinting risky).
- **Fraud limits:** one referral reward per device (Apple DeviceCheck, C, high), only after the friend's first successful AI digi, and a cap of 50 bonus digis a month.
- **Cost check:** 5 + 5 digis ≈ 10 images × $0.02–0.03 = **$0.20–0.30 per completed referral** (E, med, using the Seedream price in the brief). 1,000 referrals ≈ $250 of AI, which is not deducted in the contest [V], but is real money.

---

## What this means for Digi

1. **Today (Nov 17):** put `digi.pink` inside the orange date stamp in the free camera. Use the format `'YY MM DD HH:MM  digi.pink`. Paid users get a toggle to hide the text, default on.
2. **v1 (by Nov 19):** build the result screen's share row in this order: Story, TikTok, Snap, Messages, Save. Story uses a 9:16 card with the strip as a sticker. Copy the share link to the clipboard and show the one-line toast.
3. **v1:** ask for notifications only at the first AI "developing" screen, with a one-button pre-ask that says why ("so you see it first").
4. **v1:** fire `StoreReview.requestReview()` only after (a) the 3rd saved or shared image or (b) "Save all" on a roll. Never within 24 h of a purchase, never after a failed generation. Add a "Rate Digi" row in Settings.
5. **Email the contest organisers** (same thread as the eligibility question): "Are free in-app credits given to referrers and referred users counted as 'referral payouts'? No cash changes hands." Keep the reply.
6. **v1.1 (Nov 25–28):** ship the two-sided referral: 5 + 5 digis, paid when the friend's first AI digi succeeds, cap 50 a month, bonus digis expire after 60 days, bought digis never expire.
7. **v1.1:** apply for TikTok Share Kit now. Ship "Post the whole roll to TikTok" (up to 35 images) when approved.
8. **Dec 1:** submit In-App Event #1, "Christmas Party Looks" (Major Update badge, runs Dec 8–31). **By Dec 10:** submit In-App Event #2, "NYE Roll Night" (Live Event badge, Dec 26–Jan 1) and a New Content featuring nomination that names both.
9. **Dec 17–24 (after exams):** build the web roll: host link plus QR, guests add photos with no app, 24 shots each, free up to 12 guests, one reveal at 9 a.m. local, pre-written group text, host "Join our roll" Story card.
10. **Dec 28:** ship the free "Your December in digis" recap strip (no AI cost). **Dec 31, 23:58 local:** one opted-in push. **Jan 1, 9:00:** the NYE roll reveal push.
11. **Never:** invite gates, contact uploads, fake "someone viewed your strip" pushes, rating gating, or promoting to anyone you know personally.
12. **v2 (Jan 2027):** Live Activity countdown (start it at "End party", ≤8 h before the reveal), a "Last night's strip" widget, an App Clip for guests (keep it under Apple's size limit for QR invocations), the Sunday dump ritual and win-back offers.
13. **Measure weekly:** share taps per active user, shares by destination, referral links sent vs completed, guests per roll, guest-to-host rate, rating prompt → rating rate. If share taps per active user are under 0.3 a week by Dec 1, the stamp or share row isn't working; redesign before Christmas.

---

## Sources

All accessed Nov 17, 2026 unless noted.

**Apple (V)**
- App Review Guidelines (updated Oct 16, 2026), sections 3.1.1, 3.1.2, 3.2.2(x), 4.5.3, 4.5.4, 5.1.1(v), 5.6: https://developer.apple.com/app-store/review/guidelines/ (local copy fetched Nov 16)
- Requesting App Store reviews (3 per 365 days; sample conditions; `action=write-review`): https://developer.apple.com/documentation/storekit/requesting-app-store-reviews
- HIG, Ratings and reviews: https://developer.apple.com/design/human-interface-guidelines/ratings-and-reviews
- Displaying live data with Live Activities (8 h + 4 h, 4 KB): https://developer.apple.com/documentation/activitykit/displaying-live-data-with-live-activities
- HIG, Live Activities: https://developer.apple.com/design/human-interface-guidelines/live-activities
- HIG, App Clips (invocations, 8-hour notifications, overlay): https://developer.apple.com/design/human-interface-guidelines/app-clips
- Choosing the right functionality for your App Clip (size table, 100 MB digital-only): https://developer.apple.com/documentation/appclip/choosing-the-right-functionality-for-your-app-clip
- Nominate your app for featuring (3-week lead time): https://developer.apple.com/help/app-store-connect/manage-featuring-nominations/nominate-your-app-for-featuring
- In-App Events (31 days, 14 days early, 10 live): https://developer.apple.com/app-store/in-app-events/
- Pre-orders (2–180 days, auto-download): https://developer.apple.com/app-store/pre-orders/
- Offer codes for subscriptions: https://developer.apple.com/help/app-store-connect/manage-subscriptions/set-up-offer-codes
- Offer codes for In-App Purchases (iOS 16.3+): https://developer.apple.com/help/app-store-connect/manage-in-app-purchases/create-offer-codes-for-in-app-purchases
- Win-back offers: https://developer.apple.com/help/app-store-connect/manage-subscriptions/set-up-win-back-offers

**Platforms (V)**
- Meta, Sharing to Stories: https://developers.facebook.com/docs/instagram-platform/sharing-to-stories
- Snap Creative Kit overview: https://developers.snap.com/snap-kit/creative-kit/overview
- TikTok Share Kit iOS (35 images / 12 videos): https://developers.tiktok.com/doc/share-kit-ios-quickstart-v2

**App data (V, iTunes Search/Lookup API, US, Nov 17, 2026)**
- https://itunes.apple.com/search?term=pov+disposable+camera&country=us&entity=software (and terms: lapse friends, dispo, dazz cam, huji cam, disposable camera party, photo booth strip, once disposable)
- https://itunes.apple.com/lookup?id=1600525061,1636699256,6754265953,6775506628&country=us (Locket, Lapse, Once, Everlens)

**Articles and pages**
- TechCrunch, Locket and Gen Alpha (Nov 3, 2025): https://techcrunch.com/2025/11/03/lockets-social-app-is-picking-up-steam-with-gen-alpha
- TechCrunch, the home screen as social platform (Jun 16, 2022): https://techcrunch.com/2022/06/16/the-next-big-social-platform-isthe-smartphones-homescreen
- TechCrunch, Lapse raises $30M (Feb 27, 2024): https://techcrunch.com/2024/02/27/lapse-the-app-turning-your-phone-into-an-old-school-camera-snaps-up-30m
- Appfigures, Lapse (Sep 22, 2023): https://appfigures.com/resources/insights/20230922/5-this-trend-has-to-stop-why-lapse-is-doomed-to-fail
- Appfigures, Lapse loses momentum (Nov 17, 2023): https://appfigures.com/resources/insights/20231117/5-lapse-loses-momentum-as-downloads-drop-70-percent
- Appfigures, App Store algorithm update (2025): https://appfigures.com/resources/guides/app-store-algorithm-update-2025
- Product Hunt, Lapse simplification thread (Nov 2025): https://www.producthunt.com/p/lapse-3/lapse-a-cautionary-tale-for-social-products-that-prioritize-disposable-sharing
- dot.la, Dispo (Oct 2020): https://dot.la/dispo-2648134232.html
- The Hustle, Gas (originally Oct 2022): https://thehustle.co/10-18-22-gas-app
- NoGood, Partiful marketing: https://nogood.io/blog/partiful-marketing-strategy/
- Party! by Hipstamatic site: https://party.camera
- Wikipedia (extracts via API): BeReal, Gas (app), Tbh (app), Poparazzi, Clubhouse (app), Partiful, Dropbox, Hipstamatic — https://en.wikipedia.org/wiki/BeReal etc.

**Mobbin (V-M)**
- ClassPass refer friends: https://mobbin.com/flows/0a9a4037-a5f2-44b3-b43a-6f9e78718471
- Manus invite to get credits: https://mobbin.com/flows/ee745d66-e0d9-40c1-8920-f45808c0cd97
- Whatnot referrals: https://mobbin.com/flows/1451bab5-f2d2-45ab-ac72-0fc5a4515751
- Preply refer a friend: https://mobbin.com/flows/44e88f82-a28e-49f2-881d-c8e25a87c94c
- Beli invite to unlock: https://mobbin.com/flows/9f26df76-b587-42d5-9ef2-66e989761b96
- Instagram story creation (sticker tray, Add Yours): https://mobbin.com/flows/c9f9a026-1819-4700-ad04-4f8c20988095
- Share screens: CapCut https://mobbin.com/screens/788e678d-131a-4836-a8a6-ca1427d2a0e0 · yope https://mobbin.com/screens/b8225415-6f2d-4ecf-a81a-bf4ce5e71e87 · VSCO https://mobbin.com/screens/5c4cf591-372e-4db4-8db6-338502730d42 · Locket https://mobbin.com/screens/0b4a7bea-b365-4b55-a993-48d00f87cd01 · Any Distance https://mobbin.com/screens/57f3e4e3-06f4-46ca-acdd-e2181f7cd1bc · Lapse https://mobbin.com/screens/79181671-e584-4b4b-9331-353e58599116

**Playbooks (C)**
- Nevo David, TikTok slideshow guide (Apr 20, 2026): https://x.com/wickedguro/status/2046261869963587636
- Nevo David, selling through outcomes / slideshow formula: https://x.com/wickedguro/status/2096974398167392500
- Nevo David, Postiz streak emails (Jan 30, 2026): https://x.com/wickedguro/status/2017216658251673996
- Papermark Product Hunt interview (via Nevo): https://www.youtube.com/watch?v=z6TpKJSSrbI

**Contest rules** (profit formula, referral payouts count as ad spend, AI not deducted): quoted from `/home/user/MMTEST/research/digi-deep-2026-11/09-contest-plan.md` §1 (read live Nov 16, 2026).

**Sibling chapters:** `/home/user/MMTEST/research/digi-bible-2026-11/04-competitors-booth-social.md`, `10-onboarding-viral-consumer.md`, `11-ui-patterns-mobbin.md`, `12-aso.md`, `14-tiktok-organic.md`, `15-instagram-snap-influencers.md`; prior `/home/user/MMTEST/research/digi-deep-2026-11/03-product-social.md`, `07-apple-end-to-end.md`.

---

## Fact-check (2026-11-16)

An adversarial re-check of the 10 claims in this chapter that matter most for decisions. I used fresh searches, Apple's docs and the iTunes Lookup API (US).

| # | Claim | Re-check result | Action |
|---|---|---|---|
| 1 | Live Activity: 8 h active + up to 4 h on the Lock Screen = 12 h max; 4 KB data limit | Confirmed word for word in Apple's ActivityKit doc ("Displaying live data with Live Activities"). | None |
| 2 | App Clip size: 10 MB (iOS 15 and earlier), 15 MB (iOS 16 and earlier), 25 MB (iOS 27.3+); 100 MB only for digital-only invocations on iOS 17+ | Confirmed in Apple's "Choosing the right functionality for your App Clip". New detail: the App Store Connect **App Clip demo link** can use the 100 MB limit even with QR/NFC invocations. | None (detail noted here) |
| 3 | In-App Events: up to 31 days, promoted 14 days early, "10 live at once" | 31 days and 14 days confirmed. The limit is **10 published on the App Store at a time, 15 approved** in App Store Connect. | **Changed** in takeaway 7 and trick 46 |
| 4 | Featuring nominations need at least 3 weeks | App Store Connect help says "a minimum lead time of 3 weeks". Apple's public "Getting featured" page says "a minimum of two weeks" and recommends up to three months for wider featuring. | **Changed**: both figures added to takeaway 7. Keep the Dec 10 target. |
| 5 | Pre-orders 2–180 days before release, auto-download on release | Confirmed (Apple pre-orders page, MacRumors Oct 2020). Auto-download goes to the device that ordered; other devices only if automatic downloads are on. | None |
| 6 | Rating prompt max 3 times per 365 days; not from a button; Apple's sample waits for 4 completions and a pause | Confirmed in Apple's "Requesting App Store reviews" sample (also a 2-second delay in code). | None |
| 7 | Lapse: 218K downloads/day peak (Oct 2023), down 70% to 63K; Appfigures called the gate a dark pattern | Confirmed (Appfigures, Nov 17, 2023). Same source: 44,738 by Nov 24, 2023. | None |
| 8 | Locket Rollcall: >25% of active users post weekly; 1M+ shares in week one | Matches TechCrunch (Nov 3, 2025), but both numbers are **company-provided**, not audited. | Read as a company claim |
| 9 | TikTok Share Kit: up to 35 images or 12 videos; aspect 1:2.2 to 2.2:1 | Confirmed in TikTok's iOS Share Kit quickstart. | None |
| 10 | Rating counts of comps (Nov 17) | Lookup today: Locket 593,254 (was 593,068), POV 15,707 (15,701), 1998 Cam 40,452 (40,454), Dazz 118,201 (118,170), Huji 12,004, Lense 1,547, Scene 116, Lapse 118,321, BeReal 1,163,655, Dispo 8,299. Once 729 and Party! 232 unchanged. Once's release date Nov 24, 2025 confirmed. | **Changed** to today's counts (drift under 0.1%; no conclusion changes) |

**Also confirmed:** Voodoo bought BeReal for €500M (BeReal press release, Jun 11, 2024); KD Pro (id 1291297394) still returns nothing from the US Lookup API.

**Could not verify:** the loop maths in §2 (K ≈ 0.15, share rates, Story reach). These are the author's estimates with no public source; they stay labelled E (low/med). Lapse's "5–8 invites" stays unverified (C). The claim that in-app credits are not a contest "payout" still needs written confirmation from the organisers.
