# Digi: product, social layer, growth loops, onboarding and paywall (Nov 16, 2026)

**Scope:** what successful party/camera/social apps did (with numbers), and from that, Digi's concrete v1 / v1.1 / v2 spec, onboarding screen list, paywall spec, retention plan, moderation and consent rules, and the KPIs to watch daily during the contest (Nov 16 – Dec 16).

**Labels:**
- **V** = I checked the primary source today (Apple's guidelines, App Store listing, Mobbin flow, the vendor's own report or a first-hand news report).
- **C** = claimed by a company, a secondary blog or a third-party tracker. Not independently confirmed.
- **E** = my estimate or recommendation.

Read with: `PHOTOBOOTH-PLAN-2026-11-13.md` (section 9) and `DIGI-HOW-COMPETITORS-WORK-2026-11-14.md`. Nothing here was written into /home/user/MMTEST.

---

## 0. The verdict in 10 lines

1. **Party and novelty social apps spike and fade.** Dispo, Lapse, BeReal, Gas and Poparazzi all hit #1 and then lost most of their usage within months (section 1). The ones still making money **charge the host per event** (POV), **sell a subscription on top of a daily habit** (Locket: 100K+ subscribers, profitable), or **use invites as landing pages** (Partiful). **Digi should copy those three, not the spike apps.**
2. **Guests must never need the app or an account.** POV, Partiful and Life4Cuts all work from a link or a QR code. For Digi that means a **web join page on digi.pink, not an App Clip, in v1/v1.1.** The App Clip waits for v2.
3. **Never gate the app behind invites.** Lapse's "invite 5 friends" gate got it to #1, then downloads fell 70% and it was called a dark pattern. Apple 3.1.2 also says paid features can't require social tasks.
4. **Never fake social signals.** NGL sent fake "anonymous" messages and paid **$5M to the FTC**. It was also banned from serving under-18s.
5. **Contest week v1 = solo AI digis plus share links that sell.** That means `/s/<id>` pages with rich previews, "Try this look", Universal Links, report/delete, and a watermark on free shares. **No group features in week 1.**
6. **v1.1, by ~Nov 30 (before exams on Dec 5) = "Digi Party" group strip.** Friends add a selfie from a web link. It's the simplest group loop, consent is built in, and Christmas "we're apart" fits it.
7. **Digi Roll (develops at 9 a.m.) is mainly a New Year's Eve play.** Build it Dec 17–28, after the contest. It takes more work than it looks (multiple guests, scheduling, web camera, moderation). And it isn't unique: "Once" on Mobbin already does event films that reveal on a countdown, with shots per guest and a QR code.
8. **Change the plan: the host pays per event, POV-style.** The **Party Pack ($5.99)** should include hosting **1 group strip or 1 Digi Roll**, not only 25 AI digis. A Plus subscription shouldn't be the only way to host.
9. **Paywall:** soft and closable after the first free result, firm when free digis run out. **Yearly pre-selected, no fake timers.** At contest volume, test **one thing at a time, week by week**, not A/B splits (they won't reach significance).
10. **North Star = "shared digis opened by someone else" per week.** Watch AI cost per paying user every day: the yearly plan can lose money if heavy users aren't capped (section 5.4).

---

## 1. Evidence: how the viral photo and party apps grew, and why most faded

### 1.1 Delayed "develop" and party cameras

| App | Loop | Numbers | What went wrong / lesson |
|---|---|---|---|
| **Dispo** (2019–) | Shoot now, photos "develop" at **9 a.m. next day**. 2021 beta added **Shared Rolls**: friends add to one roll, which develops together the next morning. Invite-only TestFlight at first. | Valued at ~$200M, ~10M downloads claimed in Feb 2021 [C, trustedinsight / dot.la]. By 2023 about **800 downloads a day** [C, Appfigures]. Still on the App Store: 4.3★ from ~8K ratings [C, AppFollow]. | Co-founder scandal pulled investors. Novelty faded and there was no money model. **Lesson:** the 9 a.m. develop is a real hook, but it creates **one moment, not a habit**. It needs a reason to come back (events, seasons). |
| **Lapse** (2021, re-launch 2023) | "Develop later" film camera, friends only. **Had to invite 5–8 friends by SMS before using it**, and add a widget. | Went from #118 to #1 on the US App Store in late Sep 2023. Peak **218K downloads in one day**. **Down 70%** to ~63K/day by mid-Nov [V, Appfigures]. ~1.2M users by Oct 2023. Raised $30M in Feb 2024 [V, TechCrunch/PetaPixel]. | Called a "dark pattern" and a "pyramid scheme". The team said it would drop the gate even if it cost rankings. **Key insight:** the most active users used Lapse as a **private photo journal, not a party camera** [C, Wikipedia]. **Lesson for Digi:** the free solo camera is what keeps people. The party features are a multiplier on top. |
| **POV – Disposable Camera Events** | Host creates an event and shares a **QR code or link**. **Guests don't install anything.** The host sets shots per guest. The gallery reveals during the event or the next day. | **4.9★ from 16K ratings, age 13+** [V, App Store]. IAPs: "More Participants" at **$4.99, 9.99, 14.99, 24.99, 31.49, 34.99, 64.99, 89.99**, plus "Gold" at $54.99 [V, App Store]. **Free up to 10 guests**, priced by guest count (10/25/50/100/175/250/251+), with a business tier adding branding and a live slideshow [V, pov.camera/pricing]. Users report ~$25–50 per event [C, Knipsmig, a competitor]. Revenue estimates conflict: $10K to $200K a month [C, trackers]. | Hard to sell in a contest: weddings are planned months ahead. **Lesson:** **hosts pay per event, scaled by guest count**. Guests are free and need no app. That's the model to copy for Digi Roll and event mode. |
| **Once** (Mobbin) | "What brings you to Once?" (wedding / birthday / party / travel / company / other), then "When does your event finish?", then number of guests ("Up to 5 participants"), then **shots per guest (5/10/16/24/36/∞)**, then a visibility toggle ("Everyone can see all photos"). The event page shows **"3 Moments · 2d 12h left · 2 People"** and tiles that read "Reveals in 2d 12h". Invites by QR or share link. The empty state shows a **SAMPLE album**. | [V Mobbin: [Creating a film](https://mobbin.com/flows/62e405c1-8bc5-4d97-a77a-9a483937d0fb), [Invite guests](https://mobbin.com/flows/9b83eb76-5573-4575-987f-29a073df984a)] | **This is the Digi Roll pattern, and it already exists.** Digi's difference has to be **the look** (digicam flash, date stamp, AI strip recap), not the mechanic. |
| **Apple Invites** (Apple, 2025) | Event invite with a **built-in Shared Album**: "Create a photo album for this event and share it with participants." | [V Mobbin: [Adding photos](https://mobbin.com/flows/15fbecfc-72d5-44cd-9f53-0d0cc7944112)] | **Threat:** Apple gives away event plus album for free. Digi can't compete on storage, only on taste and AI. |
| **Life4Cuts (인생네컷), Korea** | A physical 4-cut booth prints a strip with a **QR code**. Scanning it downloads digital copies plus a **video of the session**. | ~400–410 stores in Korea, ~161 abroad. **1.1M+ Instagram posts** under the Korean hashtag. QR downloads **expire after 1–7 days** (sources differ) [C, Korea Herald via Daebak, Korea Daily, Soul of Seoul]. | **Lesson:** the strip is the social object. A QR/link handoff that expires is normal and accepted. **The "making-of" video is a free extra share** (Digi v2: a "how it developed" GIF). |

### 1.2 Friend graph, widgets and daily rituals

| App | Loop | Numbers | Lesson |
|---|---|---|---|
| **Locket** | Friends' photos land in a **home-screen widget**, which brings you back to post. Onboarding **asks for contacts ("Find your friends!")** and teaches the widget in 3–4 steps. 22–25 screens in total. | 2M users in 2 weeks (Jan 2022), organic TikTok, #1 US [V, TechCrunch 2022 / iPhoneinCanada]. **91M+ lifetime installs**. **Rollcall** (a weekly "share your favourite photos from last week" prompt via Live Activities) had **>25% of active users posting weekly** and **1M shares in its first week**. **100K+ subscribers, profitable**, ~80% of Rollcall's early users were Gen Alpha [V, TechCrunch Nov 3 2025]. | **A weekly ritual beats a daily streak** for photo apps. The widget is the free notification channel. Mobbin: [Onboarding 25 screens](https://mobbin.com/flows/0362c07a-8b68-4db1-b90a-5fbb5e38e52c), [Onboarding 22 screens](https://mobbin.com/flows/34fc1d2c-eefd-4f6d-ba82-53df1a21ba09), [Widget tutorial](https://mobbin.com/flows/29465928-82fe-42e1-a44a-f47a006cc3b1) [V]. |
| **BeReal** | One random daily push ("Time to BeReal"); you have to post to see friends' posts. | ~20M DAU in Oct 2022, ~10M by Feb 2023 [C, Apptopia via PetaPixel]. BeReal itself claimed 25M DAU. Sold to **Voodoo for €500M (June 2024)** with "40M+ active users" [V, Voodoo press release]. | One daily ritual with nothing new got tiring. Copycats (Instagram/TikTok "Now") killed the novelty. **Don't build a daily obligation.** |
| **Gas** | Anonymous compliment polls, rolled out **school by school**, with contacts upload and Snapchat story shares. Locked you out for an hour unless you invited friends. | "$1M in sales" within weeks (Oct 2022) [C, founder tweet via newsletters]. 23% of US Snapchat users saw a Gas story in Oct 2022 [C, founder]. Discord bought it in Jan 2023 and **shut it down in Nov 2023** [C, TechCrunch]. | Hyper-growth on teens plus anonymity is fragile (trafficking rumours, platform kick-off). **Not Digi's audience or values.** |
| **NGL** | Anonymous question link in Instagram stories. Paid "hints" to reveal the sender. | **FTC/LA DA, July 2024:** NGL sent **fake messages posing as real friends** to push teens into paying. **$5M settlement, banned under-18s** [V, ABC/CNN syndication]. | **Hard rule for Digi: never fake activity** ("Sam viewed your strip!" when nobody did), never fake urgency. |
| **Partiful** | **Every invite is a landing page.** Guests RSVP **without an account** from SMS / Instagram DM / WhatsApp. Guests see the app when they comment or upload photos. Hosts are the funnel: guests become hosts. Its own invite text reads: *"Hey [Name], Alex invited you to Sunday Run Club! RSVP at [link]"* plus an optional note. QR sheet with Save / Messages / More. | 500K MAU in Q1 2025 (+400% YoY), 2M new users in H1 2025, 60% of active users check it weekly [C, NoGood]. Mobbin: [Inviting a guest](https://mobbin.com/flows/a35cf433-e4cb-487f-9f73-fba032b906e1), [Inviting a user / compose](https://mobbin.com/flows/4bf25b48-6147-4b82-860b-ccc2076bb634), [Share an event / QR](https://mobbin.com/flows/33bde017-d9a4-4f69-8ced-6e14b5d946cf) [V]. | **Copy:** the pre-written group-chat message, link-first, no account for guests, the host sees a live "Going/Joined" count. Plans live in the group chat, so Digi should post *into* the group chat, not try to replace it. |
| **Picnic** | Daily photo challenges ("Mixes") for friends [C, Google Play]. | No growth data found. | A daily prompt with no event behind it is weak. Skip. |

### 1.3 Incumbents that already pool party photos (free)

- **Apple Shared Albums:**
  - 100 subscribers and 5,000 items per album;
  - optional **public website**;
  - photos downsized to 2048 px on the long side [V, Apple support 148868].
- **Google Photos shared albums:**
  - **unguessable link** that the owner can reset;
  - "Collaborate" lets anyone with the link add photos;
  - removing a person doesn't stop someone who still holds the link [V, Google support 9789702].
- **Instagram photo dumps:**
  - carousel limit raised **from 10 to 20** in Aug 2024 [V, PetaPixel/MacRumors].
  - This is where party photos end up. **Digi should export a "dump" (up to 20 images, 4:5) in one tap.**
- **Snapchat Memories** (2016):
  - "a year ago" flashbacks;
  - storage is now part of paid plans (Snap "Other revenue" ~$316M in Q2 2026, which also includes Snapchat+ and Lens+) [C, aggregator citing Snap].
  - **Lesson:** an archive of memories can be a paid feature, as long as people can always save their photos for free.

**Conclusion:** pooling and storing photos is free everywhere. **Digi only wins on the output:** a strip and a look that friends want to post.

### 1.4 What "viral coefficient" really looks like (so we don't fool ourselves)

- Typical consumer app: **K = 0.1–0.4**. "Great" ≈ 0.4, "outstanding" ≈ 0.7 [C, growth blogs, weak sources]. K > 1 is rare and short-lived.
- **Digi model (E):** K = (share rate) × (opens per share) × (installs per open).

**Solo share links alone (E):**
- 25% of AI users share a link;
- ×3 opens per share;
- ×6% installs per open;
- = **K ≈ 0.05**.

Nice to have, but it won't grow the app on its own.

**Group strip host (E):**
- invites 3 friends;
- ×60% join;
- ×20% of joiners install (they've already given Digi their selfie and see the result);
- = **≈0.36 per host**;
- × 15% of users who host = **+0.05**.

**Bottom line (E):** the social layer adds maybe **+0.1 K**. **TikTok and Instagram slideshow posting stays the main engine** (Boothie got to $53K MRR with no ads and no social layer [V, plan §1]). Build the social layer because it **lowers acquisition cost and makes every share an ad**, not as the plan for growth.

---

## 2. Rules that shape the design (Apple + law), checked today

Apple App Review Guidelines, **last updated Oct 16, 2026** [V, developer.apple.com/app-store/review/guidelines]:

**1.2 User-Generated Content.** It now names **"AI content creation apps"** and **"nonconsensual intimate imagery"** explicitly. Apps must have:
- a filter for objectionable material;
- **report** plus timely responses;
- **block** abusive users;
- **published contact info**.

Apps used mainly for "objectification of real people" or bullying "do not belong on the App Store".

**What this means for Digi:**
- Any share link or group feature makes Digi a UGC app.
- Report, block and contact info must be in the build Apple reviews, **including on the web pages** (digi.pink/s/…). Apple reviewers do open them.

**Other guidelines that apply:**

| Guideline | What it says | What it means for Digi |
|---|---|---|
| **1.1.1** | Bans mean-spirited content meant to humiliate a person. | "Roast" or "ugly" looks are risky. Skip them. |
| **5.1.2(i)** | You must **"clearly disclose where personal data will be shared with third parties, including with third-party AI, and obtain explicit permission"**. You may not require push or tracking permission to use the app. | Name the AI provider on the consent screen. Never make notifications a condition for anything. |
| **5.1.1(iii)** | Use the out-of-process picker / share sheet instead of full Photos or Contacts access. | **Use PHPicker** (no Photos permission needed). **No contacts upload.** |
| **5.1.1(v)** | Let people use the app without a login. If accounts exist, **account deletion must be in the app**. | v1 = no account (anonymous device ID + RevenueCat app user ID). |
| **3.1.2** | You must let a user "get what they've paid for without performing additional tasks, such as posting on social media, uploading contacts…". Bait-and-switch gets the app removed. | **Never "share to unlock"**, never "invite 3 to get more digis" for paid things. |
| **3.2.2(x)** | Can't force ratings or reviews. | Ask for a review at most once, after a happy moment. |
| **2.3.6** | Answer the age-rating questions honestly. | (see age rating below) |
| **2.5.16 / 2.5.18** | App Clip features must also be in the main app. No ads in App Clips. | (applies to the v2 App Clip) |

**TAKE IT DOWN Act (US):**
- Removal duties took effect **May 19, 2026**.
- "Covered platforms" must **remove non-consensual intimate images, including AI-made ones, within 48 hours of a valid request**, and also known identical copies.
- The FTC enforces it. Reported fines are about $53K per violation [V, WilmerHale / Covington Inside Privacy; penalty figure C].
- **Digi: build a "Report: this is an intimate or fake image of me" route with a 48-hour SLA.** Log every report and removal time. A public share link probably makes Digi a covered platform (E: check with a lawyer).

**Age laws (Texas, Utah, Louisiana):**
- Apple's **Declared Age Range API** gives an age bracket without a birthdate.
- Apple applies Texas age assurance to new accounts (June 2026); Utah from May 7, 2026; Louisiana from July 1, 2026 [C, AppleInsider / MacRumors / Mondaq].
- **Digi: call the Declared Age Range API at onboarding where available**, with a fallback birth-year question.

**Age rating (E):** pick **16+** (the audience is 16–40). The plan already says 16+ for link-in-bio. **Block AI and share links under 16.** Under-16s get the on-device camera only (it saves locally, no upload).

**App Clips (for later):**
- Size limit: **15 MB (iOS 16+)**, or **100 MB if the App Clip targets iOS 17+ and is digital-only** (links, no App Clip Codes or NFC) [V, App Store Connect help, max build sizes].
- Apple says a Messages link can open an App Clip card [V, Apple docs "Supporting invocations from your website and the Messages app"]. **But developers report Messages always shows the *default* card, not the per-URL advanced one** [C, Apple dev forums 834811 / 832152].
- Expo support: **`@bacons/apple-targets`** (`type: "clip"`, `exportJs: true`). The repo itself says it is "highly experimental" [V, GitHub EvanBacon/expo-apple-targets].
- **Verdict:** not in a 1-week build, and not needed. POV and Partiful prove a web page is enough. **Revisit in v2** for a native camera feel (live flash and date stamp) and a one-tap upgrade to the full app.

---

## 3. Digi's social layer, version by version

### 3.0 Building blocks shared by every version

**URL scheme on digi.pink** (Cloudflare Worker + R2):

| Path | What it is | Expires | In app (Universal Link) | Without app |
|---|---|---|---|---|
| `/s/<id>` | A shared result (single digi or strip) | 30 days (default), with 24 h / 7 d / 30 d choice | Opens the result, then "Make yours" | Full-size image, **"Try this look"** button, "Get Digi" button, Smart App Banner, report link |
| `/l/<look-slug>` | "Try this look" (e.g. `/l/xmas-party`) | Never (it's marketing) | Opens the camera/picker with that look pre-selected | Look gallery (AI-made fictional examples) + App Store button |
| `/p/<id>` | Digi Party (group strip) join page | Joining closes at 48 h; result kept 30 days | Opens the strip status | **Web flow:** add selfie, consent, done. Result appears here |
| `/r/<id>` | Digi Roll join page (v1.1b/v2) | Roll closes at its end time; developed album kept 30 days (Plus: kept) | Opens the roll camera | Web camera / upload, see "develops at 9:00" |

**Technical details:**
- **IDs:** 22+ random base62 characters (≥128 bits), never sequential. `noindex, nofollow` meta plus an `X-Robots-Tag: noindex` header. No sitemap entries [E].
- **AASA (apple-app-site-association)** lists only `/s/*`, `/l/*`, `/p/*`, `/r/*`. Leave `/`, `/privacy`, `/terms` and the free strip-maker tool out, so the website stays the website [E].
- **Smart App Banner:** `<meta name="apple-itunes-app" content="app-id=<id>, app-argument=https://digi.pink/l/xmas-party">` on every page.
  - **Deferred deep linking (the look surviving the install) does NOT work without a link SDK.** v1 workaround: the first onboarding screen shows "Trending this week" looks first, so the look a friend shared is usually one tap away (E).
  - Check whether App Store **custom product pages with deep links** can carry the look through the install (C, not verified today).

**Rich preview (OG image):**
- The Worker renders a **1200×630** pink card: the strip on the left, the look name, small "digi.pink".
- Keep it **under ~300 KB as JPEG** so WhatsApp shows it (C, common guidance).
- Tags: `og:title` = "Mia's Christmas party strip", `og:description` = "Made with Digi, your party's photobooth", `twitter:card=summary_large_image`.
- Never put a person's real name in the title unless they typed it. Default is "A Digi strip".

**Watermark:**
- Free tier: a small "digi.pink" in the date-stamp corner of the image itself. Plus removes it.
- **The watermark is the referral link for screenshots**, which make up most real-world sharing (E).

**Analytics events** (PostHog or similar; names in config):
- `onboarding_step`, `first_ai_requested`, `first_ai_ready`, `result_saved`, `share_link_created`, `share_page_view` (Worker log), `try_look_tap`, `app_open_from_link`, `paywall_view`, `purchase`, `refund` (RevenueCat webhook), `party_created`, `party_join_view`, `party_join_done`, `report_submitted`, `ai_cost_usd` (Worker, per job).

### 3.1 v1: contest week build (Nov 16–20 submit). Solo plus share links.

**Ships:**
1. **Free on-device Digi camera:**
   - flash look, grain, orange date stamp;
   - strip layouts (2×2, 1×4) made from 4 quick shots;
   - saves locally.
   - No upload, so no UGC and no AI cost.
2. **AI looks (8–10 presets only; NO free-text prompt in v1).** Preset-only is the single biggest abuse-reduction choice (E).
3. **Result screen.** Big result, with:
   - **Save**;
   - **Share link** (creates `/s/<id>`, opens the iOS share sheet with the pre-written text "made us a photobooth strip 📸 digi.pink/s/…");
   - **Redo**;
   - **"Make it a strip"**;
   - **"Try another look"** carousel underneath (the Arts & Culture pattern);
   - CapCut's post-save screen pattern: a row of share targets plus "More edits with AI" [V Mobbin [CapCut editing](https://mobbin.com/flows/86f80255-ca48-427f-b193-bc0c5c2a6c26)].
4. **Share page `/s/<id>` + "Try this look" `/l/<slug>`.** Universal Links, Smart App Banner, OG card, report link, "Delete this link" (owner only, via a secret token stored on the creating device).
5. **"Save as dump"** (E, half a day): save the result plus the original plus 2 variants as 4:5 images, ready for an Instagram carousel.
6. **Safety basics:**
   - age gate;
   - AI consent screen;
   - upload and output filter;
   - report form (in app and on web);
   - contact email in Settings and on every web page;
   - auto-delete of uploads after 24 h;
   - share links expire after 30 days.

**Not in v1:** group strip, Digi Roll, accounts, feed, profiles, contacts, comments, likes.

**Flow: share a result (v1):**
1. Result ready.
2. Tap **Share link**.
3. A sheet shows: "Anyone with this link can see this photo. Expires in **30 days**," with a [Change: 24 h / 7 d / 30 d] option.
4. Tap **Copy & share**.
5. The iOS share sheet opens with the pre-written text.
6. Toast: "Link ready. You can delete it any time in **My links**."

**Flow: friend receives the link (no app):**
1. iMessage shows the rich card.
2. The friend taps it and lands on `/s/<id>`: the image, "Mia made this with Digi", a **[Try this look]** button and a **[Get Digi, free]** button.
3. Try this look goes to `/l/xmas-party`, then the App Store.
4. Install and open.
5. Onboarding shows "Trending: Christmas party" as the first vibe.

### 3.2 v1.1a: "Digi Party" group strip (target ship ~Nov 28–30, before exams)

**Why first:**
- It's asynchronous: no scheduling, no live camera sync.
- **Each person uploads their own face, so consent is built in.**
- It fits the Christmas "the group strip, even if we're apart" story.
- It's the one thing nobody in the digicam niche does (V: none of WayShot, Boothie, Esti or Tezza has it, per the competitor doc).

**Host flow (in the app):**
1. Tap **New → Digi Party**.
2. **Pick a look** (Christmas party / NYE glitter / Paparazzi / Y2K).
3. **Pick a layout:**
   - "4 frames, one person each", or
   - "one group shot × 4 poses" (the AI puts everyone together; this is the hero).
4. Add your own selfie, then the consent tick.
5. **Pay check:** this needs **Plus or a Party Pack**. If you have neither, the paywall shows with the Party Pack highlighted ("Just tonight? $5.99").
6. Tap **Invite friends**. The share sheet opens with: *"Join our Digi strip 🎄 add a selfie here (takes 20 sec): digi.pink/p/abc… (closes Sat 9 pm)"*. This is the Partiful-style pre-written message.
7. Waiting screen: avatars of who joined, "2 of 4 joined", and a **[Make it now]** button that works from 2 people.
8. Push to the host: "Sam added a selfie (3 of 4)". Real events only.
9. Generate (~30–60 s).
10. Result goes to the host, and the **result link is posted back** ("Send to the group").

**Friend flow (web, no app, no account):**
1. Open `/p/<id>`: "Mia's Christmas strip: add your selfie".
2. Shown: who has joined (first names or emoji only), the look preview, and **"Your photo is only used for this strip and deleted after 24 h. AI by [provider]."**
3. Tap **[Take selfie]** (`<input type="file" accept="image/*" capture="user">`) or **[Choose photo]**.
4. On-device face check (one face, roughly frontal), then preview.
5. **Consent ticks:**
   - ☐ "This is me and I'm 16 or older";
   - ☐ "I'm OK with Digi's AI editing this for Mia's strip".
6. Tap **Add to strip**. Page: "You're in! The strip appears here when Mia makes it."
7. Later, the friend opens the same link (or the host's group-chat post) and sees the result: **[Save] [Make your own on Digi]** and Report.

**Limits:**
- 2–6 people per party.
- The join link closes after 48 h or when the host taps Make.
- The host can remove a selfie before generating.
- Each friend sees a **"Remove my photo"** link (cookie token) until generation, and **"Remove me from this strip"** after. Removal triggers a re-generate without them, or deletes the strip, host's choice (E).

**Cost (E):** one composite AI job + up to 4 pose variants ≈ $0.04–0.16. The host pays via plan or pack. Friends are free.

### 3.3 v1.1b / Dec 17–28: Digi Roll ("develops at 9 a.m.") for New Year's Eve

**Blunt timing call:**
- With exams from Dec 5, a solid Roll by Dec 4 is unlikely.
- A buggy Roll at someone's Christmas party is worse than none (hurt reviews, moderation gaps).
- **Ship it for NYE.** It's the biggest party night of the year and the best launch content for TikTok ("our NYE roll developed at 9 a.m. 🥴").
- It counts for the long-term business, not the contest.

**Mechanic (copy POV/Once structure, Digi look):**

**Host (app) creates a roll:**
1. Name ("Jess's NYE").
2. Start now, end time (default 4 a.m.).
3. **Develops at** 9:00 a.m. next morning (host time zone).
4. **Shots per guest:** 12 / 24 / 36, default 24, echoing the disposable feel and WayShot's "30 film shots" scarcity.
5. Up to 12 guests on a Party Pack; 25 on Plus (E). This uses POV's guest-count logic.
6. Visibility:
   - "Everyone sees all photos after develop" (default), or
   - "Only the host sees all; guests see their own".

**Guests join:**
- QR on the host's screen, or a link in the group chat (`/r/<id>`).
- **Web camera:** live preview with a **client-side canvas filter** (grain + flash tone + date stamp) so photos already look "Digi". Counter: "18 shots left". No preview of shots taken ("developing…").
- Guests who have the app get the native camera with real flash.

**Develop at 9:00:**
- The server applies the final non-AI film look (cheap).
- It builds **one AI recap strip** (4 best frames chosen by a simple sharpness/face score; the host can re-pick).
- **Push to the host:** "Your roll developed: 143 shots. Send it to the group?" The host sends the album link to the group chat.
- Guests with the app get a push. Web guests see it on the same link (there's no web push on iOS without installing a PWA, so the group chat is the channel).
- **AI is opt-in per photo, paid by whoever applies it.** A guest taps "Make this a digi", which uses their own free digis or the paywall. **This is the guest-to-paying-user moment** (E).

**Cost (E):**
- Non-AI develop: ~$0.
- 1 AI recap strip: ~$0.16.
- Never run AI on all ~150 photos automatically (≈$6, more than the Party Pack's revenue).

**Live Activity (stretch):** "Jess's NYE · 62 shots · develops in 5 h 12 m" on the host's lock screen, the way Locket's Rollcall uses Live Activities [V TechCrunch].

### 3.4 v2: Jan–Mar 2027

| Feature | Why | Note |
|---|---|---|
| **App Clip for `/r/` and `/p/`** | Native camera with real flash and a 1-tap "Get the full app" | iOS 17+, digital-only (100 MB). Test Messages card behaviour on a phone without the app first (forum reports say it shows only the default card) |
| **Event mode (QR, priced per event like POV)** | Weddings, birthdays, sororities: 50–200 guests | Prices E: Free ≤10 guests · $9.99 ≤25 · $24.99 ≤75 · $49.99 ≤200. Use consumable IAPs, as POV does ($4.99–89.99) [V] |
| **Home-screen widget: "Last night's strip" / "Roll develops in 3 h"** | Free re-engagement without push (Locket's whole loop) | WidgetKit via `@bacons/apple-targets` |
| **digi.pink/@name link-in-bio** | Every bio advertises digi.pink | Opt-in, 16+, noindex by default, report button (plan §9) |
| **Memories** | "1 month ago: Friendsgiving strip" in-app card (no push by default). A real "1 year ago" from Nov 2027 | Plus keeps rolls and links forever. Free links expire after 30 days, but **saving to Photos is always free** (no hostage photos) |
| **"Making-of" GIF** | A free extra share, like Life4Cuts' session video | Frames before → after develop |
| **Android** | Group strips and rolls are cross-platform by nature | The web join already covers Android guests in v1.1 |

### 3.5 What Digi will never build (and why)

- **Public feed, follows, likes, comments, DMs.** That means heavy 1.2 moderation and a young audience (plan §9).
- **Invite gates or "share to unlock".** Lapse backlash; Apple 3.1.2 for paid features.
- **Contacts upload.** Not needed: links go through iMessage and WhatsApp. Apple 5.1.1(iii) prefers out-of-process pickers.
- **Anonymous anything.** NGL/Gas.
- **Fake activity or urgency.** NGL's $5M FTC case.
- **Free-text prompts on photos of real people** (v1/v1.1). Revisit only with strong filters.

---

## 4. Onboarding (screen by screen)

**Evidence used:**
- **Photoroom:** 1–2 questions, then **"Select a photo / Use a sample image"**, then an instant "Background removed!", then the paywall (7-day trial, $89.98/yr "Save 65%" vs $4.98/wk, "Renews automatically after trial. Cancel anytime.") [V Mobbin [onboarding](https://mobbin.com/flows/80139c78-5c46-460c-96e2-8f0d9f576f57), [paywall](https://mobbin.com/flows/d04549cd-1994-497e-84ef-4742670404ff)].
- **Meta AI selfies:** "Only add photos of yourself… we won't show photos you uploaded that included other people" [V Mobbin [Meta AI uploading](https://mobbin.com/flows/95106c1a-366a-4e8c-a5b0-f254d1a73e52)].
- **Pool:** "Enable AI features: your screenshots are securely processed in the cloud. Learn more" with a visible **"Continue without AI"** [V Mobbin [screen](https://mobbin.com/screens/5689d86a-6132-47c0-a5fb-bb0aed50d85f)].
- **Once:** occasion-first questions and a SAMPLE album in the empty state [V Mobbin].
- **Locket:** 22–25 screens, widget tutorial, "We'll notify you once your friends have set up theirs" [V Mobbin].
- **Superwall:** onboarding paywalls with **2+ pages convert 12.41% vs 9.07% for single-page (+37%)**, from 40M+ opens, Feb–May 2026. Its advice: "start with two to three screens that establish value" [V superwall.com].
- **RevenueCat:** longer onboarding can lift trial starts (Lose It! "double digits"). Judge it on LTV, not only trial starts [V revenuecat.com].
- **Adapty Photo & Video:** an onboarding paywall with trial gives **1.35% install-to-paid vs 0.89% for in-app with trial**. 91.2% of trials start on Day 0 [V adapty.io].

**Design rule (E):**
- Reach the first real wow (the user's own photo turned into a digi) in **≤ 9 taps and ≤ 90 seconds**.
- No account.
- Ask permissions only when they're needed.

| # | Screen | Content / copy | Why |
|---|---|---|---|
| 1 | **Hero** | A looping before→after: a dull group photo becomes a flash-lit strip with an orange date stamp. "**Your party's photobooth.**" [Start] | Positioning in one line |
| 2 | **Age** | "How old are you?" Uses the Declared Age Range API, with a birth-year wheel as fallback. Under 16: "Digi's AI looks and links are 16+. You can still use the free camera." | 1.2 / age laws / minors |
| 3 | **Vibe** (multi-select) | Night out · Christmas party · Cute & soft · Y2K · Paparazzi. The trending look is first. | Personalises look order. Catches "Try this look" arrivals |
| 4 | **Who's in your pics?** | My friends · My partner · Just me | Sets the default (strip vs single) and the copy |
| 5 | **Sample wow** | "Tap a photo to see a Digi." 3 AI-made fictional sample photos; the **pre-rendered** result animates in (film develop). | Photoroom's "Use a sample image". Zero AI cost, instant |
| 6 | **Your photo** | [Take a photo] (camera permission primer, then the system prompt) · [Choose from library] (PHPicker, **no permission needed**) | 5.1.1(iii) |
| 7 | **AI consent** (once, then a light per-photo tick) | "To make your digi, we send this photo to **[provider]**'s AI. It's deleted from our servers within 24 h. We never use it to train models or show it to anyone unless you share a link." ☐ **"Everyone in this photo is 16+ and OK with it being edited."** [Make my digi] · *Continue without AI* (camera only) | **5.1.2(i)**, consent, Pool pattern |
| 8 | **Developing** (~20–30 s) | A film-develop animation. Halfway through: "Want a ping when it's ready? 🔔" [Yes] [No]. The push prompt only comes after a reason to say yes. | Contextual push ask, never required (5.1.2) |
| 9 | **Result** | Save · Share link · Make it a strip · "Try another look" carousel · "2 free digis left" | The value moment |
| 10 | **Soft paywall** (after the first Save/Share finishes; never blocks the share) | See §5. Close button visible from the first second. | Onboarding-paywall benchmark + value first |
| 11 | **Home = camera** | Locket-style: the camera *is* the home screen. Looks tray at the bottom, "My digis", "New Digi Party" (v1.1) | A daily camera keeps people coming back (Lapse's journal insight) |

**Total:** 9 screens to the result, plus the paywall. That's shorter than the competitor doc's 12–15. Add questions only if testing shows trial starts go up (RevenueCat). **Don't add a "rate us" screen, a fake loading "building your profile…" screen, or a contacts screen.**

**Arrival from a link:**
- Skip screen 3 when the Universal Link carries a look: the look is pre-selected, and the copy says "Make your own *Christmas party* digi".
- Arrival from `/p/` or `/r/` (app installed) goes straight to that party/roll after the age gate and consent.

---

## 5. Paywall spec

### 5.1 Benchmarks (what's normal for photo apps)

| Metric | Value | Source |
|---|---|---|
| Photo & Video revenue by plan | **Weekly 51%**, annual 8% (2025) | [V] Adapty P&V benchmarks |
| Weekly-trial funnel (P&V) | Install→trial **14.0%**, trial→paid **30.5%**, 1st renewal **54.9%**, **refund 7.5%** | [V] Adapty |
| Trial use in P&V | 70.7% (2024) → **62.3%** (2025), the steepest drop of any category | [V] Adapty |
| Install-to-paid, onboarding paywall + trial | **1.35%** (P&V) vs 0.89% in-app with trial | [V] Adapty |
| P&V trial→paid median | **22.2%** (top quartile 33.1%), the lowest category | [V] RevenueCat SOSA 2026 |
| P&V trials ≤4 days | **68.2%** of trials | [V] RevenueCat |
| Hard vs freemium, D35 download→paid (all apps) | **10.7% vs 2.1%** | [V] RevenueCat |
| Trial length vs conversion (all apps) | ≤4 d: 25.5% · 5–9 d: 37.4% · 17–32 d: 42.5%. **Day-0 trial cancels: 55.4% (3-day) vs 39.8% (7-day)** | [V] RevenueCat |
| Global price medians (all categories, 2025) | Weekly **$7.48**, monthly $12.99, annual **$38.42** | [V] Adapty |
| AI apps | 41% more revenue per payer, **churn 30% faster** | [V] RevenueCat |
| Competitors (US) | WayShot $9.99/wk; Boothie $6.99–9.99 tiers, $7.99/wk Pro, packs $2.99/10 · $5.99/25 · $11.99/60; Esti $4.99–6.99/wk, $39.99/yr | [V] competitor doc |
| Multi-page vs single-page onboarding paywall | 12.41% vs 9.07% | [V] Superwall |

**Reading (E):**
- $6.99/week and $39.99/year sit at or just under the medians. Good.
- Photo users convert trials badly (lowest trial→paid of any category) and refund a lot.
- **3 free AI digis already act as the trial.**
- A free *subscription* trial on top mostly adds AI cost (trial users can generate) and refunds.

### 5.2 What the paywall looks like (soft version, after the first result)

Two pages (the Superwall finding). The first page sells, the second picks the plan. Use RevenueCat Paywalls or a custom RN screen.

**Page 1: "What Plus gets you"**
- Header image: the user's **own result** next to a locked strip version of it ("This, as a 4-pose strip →").
- Title: **"Make every party a photobooth."**
- Bullets (concrete, per Apple 3.1.2(c)):
  - **20 AI digis every week** (a strip uses 2);
  - **All looks**, plus a new look every Thursday;
  - **No watermark**;
  - **Host Digi Parties** (group strips, v1.1);
  - **Keep your links** (no 30-day expiry).
- Button: [See plans]. Close ✕ visible top-left immediately.

**Page 2: plans**

| Option | Line 1 | Line 2 | State |
|---|---|---|---|
| **Yearly**, **$39.99/year** | "$0.77 a week" | "Best value · billed once a year" | **Pre-selected** |
| Weekly, **$6.99/week** | "Cancel any time" | — | — |
| *(below the plan list, as a text link)* **"Just one party? Party Pack $5.99"** | "25 AI digis + host 1 Digi Party. One-time, no subscription." | — | — |

- Button: **[Continue]**
- Under the button (always): *"Renews automatically until you cancel. Cancel any time in Settings › Apple ID › Subscriptions. Payment is charged to your Apple ID."*
- Links: Restore · Terms · Privacy.
- **If a trial is being tested** (yearly only), use Stardust's honest timeline [V Mobbin [Stardust](https://mobbin.com/flows/0357497c-9a57-4179-81c9-fde02ec11f13)]: "**Today:** full access · **Day 2:** we'll remind you · **Day 3:** you're charged $39.99 unless you cancel before." Send that reminder push for real.

**Copy rules (E):**
- **Never use:**
  - countdown timers;
  - "only X left";
  - "price goes up tonight" (unless it's true and dated);
  - crossed-out fake "original" prices;
  - a hidden close button;
  - a pre-ticked trial toggle;
  - "Most popular" unless it's measured.
- "Save 89%" style badges are allowed only when the maths is true ($6.99 × 52 = $363.48 vs $39.99 is 89%). Still, use "$0.77 a week" instead: it's clearer and less shouty.

### 5.3 When the paywall appears

| Moment | Type | Note |
|---|---|---|
| After the 1st AI result is saved or shared (onboarding) | **Soft**, closable | Value first. Never blocks the share action |
| User taps a 2nd look, "Make it a strip" or "Remove watermark" while free digis remain | No paywall. Let them use free digis | Don't nag while they still have free value |
| Free digis = 0 and they request an AI digi | **Firm**: you can't generate without paying, but you can close and keep using the free camera | It's a "hard" wall for AI, soft for the app |
| Host taps "New Digi Party" or "New Digi Roll" without a plan | Party Pack shown **first** ("Just tonight?"), Plus second | Host pays per event (POV) |
| Guest on the web taps "Make your own" | No paywall on the web. Send to the app | Apple IAP inside the app only |

**Free tier:**
- Camera unlimited.
- **3 AI digis lifetime per device.** A strip counts as 2.
- Enforce with **App Attest/DeviceCheck** so a reinstall doesn't reset the count (E).

### 5.4 Credit caps and unit economics (check before launch)

Assumptions:
- AI ≈ **$0.04 per image**; a 4-pose strip ≈ $0.16 [V plan §3, E].
- Apple Small Business Program cut = 15%.

| Plan | Net revenue | Allowance (E) | Worst-case AI cost | Verdict |
|---|---|---|---|---|
| Weekly $6.99 | $5.94/week | 20 digis/week (strip = 2) | 20 × $0.04 = $0.80 (singles) up to 10 strips × $0.16 = $1.60 | Healthy |
| Yearly $39.99 | **$0.65/week** | 20 digis/week | up to **$1.60/week** | **Loses money on heavy users.** Fine on average if median use is ~3–5 digis a week (E), but **watch daily cost per yearly subscriber**. If the 90th percentile goes over ~$0.50/week, cut the yearly allowance to 10/week or make "strip = 4" |
| Party Pack $5.99 | $5.09 one-time | 25 digis + 1 party | ≤ 12 strips ≈ $2.00 + party ≈ $0.16 | Healthy |
| Free | $0 | 3 digis | ≤ $0.12–0.20 per new user | At 10K installs ≈ $1.2–2K. Budget it in contest profit |

- Show remaining usage the way Ahead does: **"Weekly digis: 14 of 20 left · refreshes Thursday"**, plus "Pack digis never expire and are used after your weekly ones" [V Mobbin [Ahead](https://mobbin.com/screens/dbee17fb-d099-432f-b798-8b920cc8a92c)].
- Thursday refresh lines up with the weekly look drop and the weekend.

### 5.5 Pricing tests (sequential, not A/B, at contest volume)

**Sample sizes (E):** an A/B test that detects a 20% relative lift on a ~2% install→paid rate needs roughly **~20K installs per arm**. The contest won't get there.

So **change one thing per week** and compare week to week, noting traffic mix (TikTok post spikes skew it):

| Week | Test | Keep if |
|---|---|---|
| Nov 20–26 | **Baseline:** no trial, yearly pre-selected, Party Pack link | — |
| Nov 27–Dec 3 | **3-day free trial on yearly only** (AI capped at 5 digis during the trial) | Revenue per install ↑ AND refund rate ≤ baseline |
| Dec 4–10 | **Party Pack promoted to a 3rd plan card** (instead of a text link) during Christmas party week | Total revenue per paywall view ↑ (watch whether it eats into weekly subs) |
| Dec 11–16 | Weekly **$4.99** vs $6.99 (only if weekly share of purchases is < 30%) | Revenue per paywall view ↑ |
| Jan (post-contest) | Real A/B in RevenueCat Experiments once installs allow: trial length (3 vs 7 days), paywall page 1 on/off, yearly $29.99 vs $39.99 | LTV at day 35/60, not just conversion |

---

## 6. Retention plan

**Evidence:**
- Locket: a weekly ritual with >25% posting weekly, plus the widget [V TechCrunch].
- BeReal: a daily obligation faded [C].
- Lapse: power users made it a solo journal [C].
- AI apps churn 30% faster [V RevenueCat].

**Principle (E):** people don't party daily. **Aim for weekly and seasonal rhythms, never daily streaks.**

1. **Weekly look drop, every Thursday ~5 p.m. local.**
   - One new look, announced in the app (a "New" badge) and in one push to people who opted in to "New looks" (off by default after onboarding unless they said yes).
   - Every drop is also a TikTok slideshow.
2. **Seasonal calendar** (look + share-page theme + TikTok hooks):

| Dates | Moment | Look |
|---|---|---|
| Nov 26 (Thanksgiving) / Nov 21–29 | Friendsgiving | "Friendsgiving table flash" |
| Dec 1–23 | Office/Christmas parties, ugly sweaters | Christmas party, ugly-sweater strip, "Home Alone" Polaroid (own art) |
| Dec 24–26 | Family Christmas | Warm film "Christmas morning" |
| Dec 31 / Jan 1 | **NYE + Digi Roll launch** | NYE glitter, 2027 date stamp, "9 a.m. developed" |
| Feb 13–14 | Galentine's / Valentine's | Pink flash, couple strip |
| ~Mar 20, 2027 | Eid al-Fitr (check the date) | Eid night out |
| Apr–Jun | Prom, grad, spring break | Prom paparazzi, grad yearbook |
| Every week | Birthdays | Birthday strip (the evergreen #1 occasion) |

3. **Rituals instead of streaks:**
   - **"Sunday recap"** (opt-in, v1.1): one in-app card / optional push on Sunday at 6 p.m.: "Your weekend in a strip?" It turns the last 7 days' digis and on-device camera shots into a free non-AI strip (zero cost). This copies Locket's Rollcall, which drove >25% weekly posting.
   - **Group rituals:** "Monthly girls' night strip", a recurring Digi Party the host can re-open with the same group (v2).
4. **Widgets (v2):** "Last night's strip", "Roll develops in 3 h", "New look Thursday".
5. **Memories:** in-app only ("1 month ago: your Friendsgiving strip"). Real "1 year ago" from Nov 2027. Push only if opted in.
6. **The free camera is the anchor.** It's unlimited, beautiful and private, and gives a reason to open Digi without paying (Lapse's journal lesson, WayShot's business).

**Notification policy (hard rules, E):**
- **Allowed (transactional, the user started it):**
  - "Your digi is ready";
  - "Sam added a selfie to your strip";
  - "Your roll develops in 1 hour / developed";
  - "Your trial ends tomorrow".
- **Allowed if opted in, max 1 a week:**
  - new look Thursday;
  - Sunday recap.
- **Never:**
  - guilt ("You haven't…");
  - fake social ("Someone looked at your strip");
  - fake scarcity;
  - more than 2 marketing pushes a week;
  - pushes between 10 p.m. and 9 a.m., except the roll develop the user scheduled.
- Opt-in benchmark: iOS median ~**49%** (Airship, 2025 data), ~56% average (Batch) [C]. Target ≥55% thanks to the contextual ask at screen 8 (E).

---

## 7. Moderation, consent and abuse

### 7.1 Main risks

| Risk | Example | Control |
|---|---|---|
| **Editing someone without consent** | Photo of a stranger, an ex or a coworker turned into a "paparazzi" shot and shared to mock them | Per-generation consent tick; **group features use self-uploaded selfies**; report route "This is me and I didn't agree", takedown ≤ 24 h (E) |
| **Sexualising / "undress" / NCII** | Prompt tricks, revealing outfits | **Preset looks only (no free text)**; the provider's safety settings at maximum; **output check** with a free image moderation model (e.g. OpenAI `omni-moderation` accepts images [C, OpenAI docs]), or similar, on every output; block and log. **TAKE IT DOWN 48-hour removal** + copy search (hash) |
| **Minors** | A 14-year-old uses it, or edits a photo of a kid | 16+ rating + Declared Age Range; **server-side face age estimate** on uploads (block if any face is estimated under ~16; cost ~$0.001/img, E). Never generate if unsure. "No editing of children" is already in the plan |
| **CSAM** | Upload of illegal imagery | Hash-matching on uploads (e.g. Cloudflare's CSAM Scanning Tool for content on Cloudflare [C]). US providers must report to NCMEC; write the procedure before launch (E: lawyer check) |
| **Bullying via share links** | An ugly edit shared to a group chat | No "roast/ugly" looks (1.1.1). Report on every page. Owner and **subject** can request removal |
| **Celebrity / impersonation** | Faces of famous people as "paparazzi" | Paparazzi look is framed as "you, as if famous". Report reason "Impersonation". Remove fast |
| **Spam / junk on join links** | A link leaks and strangers upload | Joining closes at 48 h; host approves or removes; max 6 (party) / 25 (roll); rate-limit per IP; host can **close the roll** |
| **Link leaks / scraping** | Someone guesses links | 128-bit random IDs, noindex, expiry, owner delete, no listing/search |
| **Refund abuse / trial farming** | Reinstall for free digis | App Attest/DeviceCheck count; trial capped at 5 digis |

### 7.2 Must be in the build Apple reviews (Guideline 1.2 checklist)

- [ ] **Filter:** upload check (one face to many faces is OK; nudity or minor → block) + output check before any result is shown or shared.
- [ ] **Report** on: the result screen (in the app), every `/s/`, `/p/`, `/r/` page, and every photo in a roll.
  - Reasons: *Nudity or sexual · This is me and I didn't agree · Looks like a minor · Bullying or hate · Impersonation · Spam · Other* (Reddit/Phantom pattern [V Mobbin [Reddit report](https://mobbin.com/screens/4de80dc1-c1a3-49f6-ba58-14390c77e091), [Phantom](https://mobbin.com/screens/93ddbe65-1725-438b-b50b-fc7435d851f9)]).
  - Response: an auto-hide on "minor" or "nudity" reports until reviewed; a human (the founder) reviews within 24 h; NCII within 48 h by law.
- [ ] **Block:** a host can remove/block a guest from a party or roll. Blocked device tokens can't join that host's future links. With no accounts, block = device token + IP rate limit (E).
- [ ] **Contact:** support email in Settings, on every web page, and in the App Store listing (not from @digi.pink, per plan §9: use a separate support domain/address).
- [ ] **Privacy policy:** retention (uploads 24 h; results until the link expires or is deleted; Plus archive until deleted), how to delete, named AI provider.
- [ ] **Review notes for Apple:** explain the consent screen, preset-only looks, filters, report flow, 24-h deletion. Give a demo share link.

### 7.3 Consent wording

- **Uploader (each generation, small tick, remembered per photo):** "Everyone in this photo is 16+ and OK with it being edited by AI."
- **Group selfie (web):** "This is me, I'm 16+, and I'm OK with Digi's AI editing it for *[host]*'s strip. My photo is deleted within 24 h."
- **Roll guest (web, on join):** "Photos you take here are shared with everyone in *[roll]* when it develops at 9:00. The host may turn a few into AI strips. You can remove any photo you took, any time."
- **Removal for the people in the photo:** every shared page carries "Are you in this photo and want it gone? [Request removal]". No account needed. Auto-hide while it's reviewed.

---

## 8. Metrics

### 8.1 North Star

**"Shared digis opened by someone else, per week"**: distinct `/s/` `/p/` `/r/` pages with ≥1 view from a different device than the creator's.

It captures three things at once: the product delivered value (they made something good enough to send), growth (every open is an ad), and the party positioning. Pair it with **daily contest profit** (revenue minus refunds, Apple's cut and AI cost), because the contest is judged on profit.

### 8.2 The 10 daily KPIs (contest dashboard)

| # | KPI | Formula | Target (E) | Benchmark / why |
|---|---|---|---|---|
| 1 | **Install → first AI digi** | users with `first_ai_ready` within 24 h ÷ installs | **≥ 55%** | Activation. Below 40% means onboarding or consent is scaring people |
| 2 | **Time to first digi** | median seconds install → `first_ai_ready` | **≤ 120 s** | Wow speed |
| 3 | **Share rate** | users who create ≥1 share link ÷ users with ≥1 AI digi | **≥ 25%** | Drives the North Star |
| 4 | **Opens per share & installs per open** | share-page views ÷ links; `app_open_from_link` (or App Store taps) ÷ views | ≥ 2.5 views/link; ≥ 5% to App Store | Viral loop. Gives a K estimate (section 1.4) |
| 5 | **Invite acceptance (v1.1)** | joined selfies ÷ invited slots (or joins ÷ party links) | **≥ 50%** | The group loop works or it doesn't |
| 6 | **Paywall view → purchase** | purchases ÷ unique paywall views (split: onboarding / out-of-digis / host) | ≥ 4% onboarding; ≥ 10% out-of-digis | Adapty P&V install→trial 14%. Superwall onboarding PW 9–12% (trial or purchase) |
| 7 | **Install → paid (D0 and D7)** | payers ÷ installs | ≥ 2% D7 | Adapty P&V onboarding PW 1.35% install→paid. Freemium median 2.1% D35 (RevenueCat) |
| 8 | **Refund rate** | refunds ÷ purchases (RevenueCat webhooks) | **≤ 5%** | Adapty P&V weekly 7.5%. Rising refunds = AI quality complaints |
| 9 | **AI cost per image & AI cost % of net revenue** | Worker-logged USD ÷ images; total AI USD ÷ net revenue | ≤ $0.045/img; **≤ 15%** of revenue (plan §4); 90th-pct yearly sub ≤ $0.50/wk | Profit protection (section 5.4) |
| 10 | **D1 / D7 retention** | opened the app on day 1 / day 7 ÷ installs | D1 ≥ 25%, D7 ≥ 10% (E for a photo utility) | Weekly drops and the camera should hold D7 |

**Also watch:**
- reports per 1,000 generations, and time to resolve (must be < 24 h);
- filter block rate (a spike means abuse or a broken prompt);
- push opt-in %;
- App Store rating (stay ≥ 4.5).

**Daily routine (E, 10 minutes):**
- Check KPIs 1, 6, 8 and 9 first. Those four decide profit.
- When activation drops, look at the onboarding step funnel.
- When share rate drops, check result quality (look at 20 random outputs).

---

## 9. Build order (updated)

| When | Ship |
|---|---|
| **Nov 16–19** | Camera + 8–10 preset looks + result screen + consent/age gate + filters + RevenueCat paywall (2 pages) + Party Pack + `/s/` & `/l/` pages with OG cards + AASA + report/delete + analytics events |
| **Nov 20** | Submit. Review notes cover 1.2 / 5.1.2(i) |
| **Nov 21–29** | Fix-ups from real data; weekly look drops; **Digi Party group strip (web join)** → submit ~Nov 28 |
| **Dec 1–4** | Christmas looks; "Sunday recap" (non-AI); queue TikTok content before exams |
| **Dec 5–16** | Exams: monitoring only (KPIs, reports < 24 h, refunds). **No new features** |
| **Dec 17–28** | **Digi Roll** (web camera + 9 a.m. develop + 1 AI recap strip) for **NYE** |
| **Jan–Mar** | App Clip, event mode (POV pricing), widgets, link-in-bio, Android |

---

## 10. Sources

**Apple / law**
- [V] App Review Guidelines (updated Oct 16, 2026): https://developer.apple.com/app-store/review/guidelines/ (1.2, 1.1.1, 2.3.6, 2.5.16, 3.1.2, 3.2.2(x), 5.1.1(iii)(v), 5.1.2(i))
- [V] App Clip max size: https://developer.apple.com/help/app-store-connect/reference/app-uploads/maximum-build-file-sizes
- [V] App Clip invocations from Messages/website: https://developer.apple.com/documentation/appclip/supporting-invocations-from-your-website-and-the-messages-app
- [C] Forum: Messages shows the default card only: https://developer.apple.com/forums/thread/834811 · https://developer.apple.com/forums/thread/832152
- [V] Expo App Clip plugin (experimental): https://github.com/EvanBacon/expo-apple-targets
- [V] TAKE IT DOWN Act in effect May 19, 2026: https://www.wilmerhale.com/en/insights/client-alerts/20260615-the-take-it-down-act-goes-live · https://www.insideprivacy.com/united-states/federal-trade-commission/the-take-it-down-acts-notice-and-removal-requirements-enter-into-effect/
- [C] Age laws / Declared Age Range: https://appleinsider.com/articles/26/06/03/age-verification-now-mandatory-for-app-store-users-in-texas · https://www.macrumors.com/2025/11/04/ios-26-2-texas-age-verification-law/
- [V] NGL FTC settlement: https://abc7news.com/post/popular-app-banned-hosting-young-teens-groundbreaking-settlement/15048436/
- [V] Apple Shared Albums limits: https://support.apple.com/148868 · [V] Google Photos sharing controls: https://support.google.com/photos/answer/9789702

**Apps / growth**
- [V] POV App Store (16K ratings, IAPs): https://apps.apple.com/us/app/id1636032890 · [V] POV pricing calculator: https://pov.camera/pricing · [C] https://knipsmig.com/pov-camera-pricing
- [V] Lapse −70%: https://appfigures.com/resources/insights/20231117/5-lapse-loses-momentum-as-downloads-drop-70-percent · [V] $30M: https://techcrunch.com/2024/02/27/lapse-the-app-turning-your-phone-into-an-old-school-camera-snaps-up-30m · [C] https://en.wikipedia.org/wiki/Lapse_(social_network)
- [C] Dispo: https://www.thetrustedinsight.com/investment-news/how-photo-app-dispo-is-coming-back-from-scandal-20210608161/ · https://dot.la/dispo-2648134232.html · https://appfigures.com/resources/insights/20230922/5-this-trend-has-to-stop-why-lapse-is-doomed-to-fail
- [V] Locket 2022: https://techcrunch.com/2022/06/16/the-next-big-social-platform-isthe-smartphones-homescreen · [V] Locket 2025 (Rollcall, 100K subs): https://techcrunch.com/2025/11/03/lockets-social-app-is-picking-up-steam-with-gen-alpha
- [C] BeReal decline: https://petapixel.com/2023/02/22/bereal-may-be-on-the-out-users-have-nearly-halved-since-peak · [V] Voodoo deal: https://voodoo.io/news/voodoo-acquires-bereal
- [C] Gas: https://techcrunch.com/?p=2617303 · https://thehustle.co/10-18-22-gas-app
- [C] Partiful: https://nogood.io/blog/partiful-marketing-strategy/ · https://sacra.com/chat/h/ca6c792b-7d6d-42a9-ae5f-0970a819c66c/
- [C] Life4Cuts: https://daebak.co/blogs/magazine/korean-photo-booth-life4cuts · https://en.koreadaily.com/?p=36275 · https://thesoulofseoul.net/the-photobooth-trend-in-korea-providing-unique-souvenir-memories/
- [V] Instagram 20-item carousel: https://petapixel.com/2024/08/09/instagram-users-can-now-share-20-photos-videos-in-a-post-carousel-photodump
- [C] Snap Other revenue: https://www.digitalapplied.com/blog/snapchat-statistics-2026-users-revenue-ad-data
- [C] K-factor ranges: https://www.saxifrage.xyz/post/k-factor-benchmarks · https://blog.getlaunchlist.com/blog/viral-coefficient-k-factor-guide

**Monetization benchmarks**
- [V] Adapty Photo & Video benchmarks: https://adapty.io/blog/photo-video-app-subscription-benchmarks/
- [V] RevenueCat State of Subscription Apps 2026: https://www.revenuecat.com/state-of-subscription-apps-2026/
- [V] Superwall multi-page onboarding paywalls +37%: https://www.superwall.com/blog/new-postmulti-page-onboarding-paywalls-convert-37-better-than-single-page-heres-why
- [V] RevenueCat on onboarding length: https://www.revenuecat.com/blog/growth/why-your-onboarding-experience-might-be-too-short
- [C] Push opt-in benchmarks: https://www.pushwoosh.com/blog/push-notification-benchmarks/ · Airship 2025 benchmarks PDF

**Mobbin flows and screens used [V]**
- Photoroom onboarding: https://mobbin.com/flows/80139c78-5c46-460c-96e2-8f0d9f576f57 · Photoroom Pro paywall: https://mobbin.com/flows/d04549cd-1994-497e-84ef-4742670404ff
- Meta AI uploading selfies (consent "only photos of yourself"): https://mobbin.com/flows/95106c1a-366a-4e8c-a5b0-f254d1a73e52
- CapCut editing → save/share screen: https://mobbin.com/flows/86f80255-ca48-427f-b193-bc0c5c2a6c26
- Locket onboarding (25 / 22 screens) + widget tutorial: https://mobbin.com/flows/0362c07a-8b68-4db1-b90a-5fbb5e38e52c · https://mobbin.com/flows/34fc1d2c-eefd-4f6d-ba82-53df1a21ba09 · https://mobbin.com/flows/29465928-82fe-42e1-a44a-f47a006cc3b1
- Partiful invite / compose / share-QR / create event: https://mobbin.com/flows/a35cf433-e4cb-487f-9f73-fba032b906e1 · https://mobbin.com/flows/4bf25b48-6147-4b82-860b-ccc2076bb634 · https://mobbin.com/flows/33bde017-d9a4-4f69-8ced-6e14b5d946cf · https://mobbin.com/flows/732d3782-570a-47cc-9a84-cd991745c03c
- Once (event film with reveal countdown) create + invite: https://mobbin.com/flows/62e405c1-8bc5-4d97-a77a-9a483937d0fb · https://mobbin.com/flows/9b83eb76-5573-4575-987f-29a073df984a
- Apple Photos shared album + participants: https://mobbin.com/flows/84a121ca-e1c5-4251-9cf5-f3c5db2a4f78 · https://mobbin.com/flows/fec1c592-a6e9-4686-8e94-c8a078f7fd1a · Apple Invites shared album: https://mobbin.com/flows/15fbecfc-72d5-44cd-9f53-0d0cc7944112
- Stardust honest trial timeline paywall: https://mobbin.com/flows/0357497c-9a57-4179-81c9-fde02ec11f13
- Ahead "daily included usage + credits" screen: https://mobbin.com/screens/dbee17fb-d099-432f-b798-8b920cc8a92c · Pool "Enable AI / Continue without AI": https://mobbin.com/screens/5689d86a-6132-47c0-a5fb-bb0aed50d85f
- Report sheets (Reddit, Phantom): https://mobbin.com/screens/4de80dc1-c1a3-49f6-ba58-14390c77e091 · https://mobbin.com/screens/93ddbe65-1725-438b-b50b-fc7435d851f9

*Working files (Apple guidelines text) in `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/digi/product/`. Nothing saved to Mobbin; no accounts created; nothing posted.*
