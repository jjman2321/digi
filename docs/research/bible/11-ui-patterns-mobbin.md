# 11 · Core UI patterns for a party camera app, screen by screen (Mobbin)

**Date of research:** Nov 17, 2026. **Track:** every screen of a camera app *except* the paywall and onboarding (those are chapters 07 and 09): the viewfinder, mode switchers, look pickers, AI waiting screens, result and compare screens, editors, share sheets and story stickers, galleries and rolls, invite flows, widgets and Live Activities, notification asks, empty states, settings and subscription management.
**Builds on:** `digi-deep-2026-11/06-ui-flows.md` (sections 0, 1 and 3), `digi-bible-2026-11/07-paywalls-mobbin-photo.md` and `09-onboarding-mobbin-photo.md`. I don't repeat their tables. I add new screens, exact on-screen copy, the order of elements top to bottom, and corrections.

**Labels**
- **V-M** = I downloaded the Mobbin screens at full size and read them myself today (contact sheets in the scratch folder).
- **V-AS** = I read the app's own App Store screenshots today (from the iTunes Search API). These are marketing images, so they show the UI the company wants you to see, not always the exact live UI.
- **V** = checked today at a primary source (iTunes Search/Lookup API for ratings and update dates).
- **C** = reported by press, not checked at the source. **E** = my estimate or recommendation, with confidence high / med / low.

**How to read Mobbin dates.** Mobbin screens are snapshots. I date them only from what is on screen: Locket's profile says "Member since Oct 7, 2026"; Once's photo stamp says "JUL 30, 2026"; BeReal's widget says "23 May 2026"; Lapse's roll page says "Tuesday, 18 Mar 2025". Where nothing dates a screen, I say "not dated".

Raw contact sheets: `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/bible/ui11/` (one folder per flow, `sheet*.jpg`).

---

## Key takeaways

1. **Every camera app in this set puts the same five things in the same places.** Shutter bottom centre. Last photo (or a "developing" stack) bottom left. Flip camera bottom right or right rail. A `.5 / 1×` zoom pill just above the shutter. A text mode switcher (`PHOTO · VIDEO`, `POST · STORY · REEL`, `MEMORIES · FUTURE ME`) under or above the shutter [V-M: Snapchat, Instagram, BeReal, Locket, Lapse, Halide, VSCO, Once]. Digi should not invent a new layout. People already know this one.
2. **The best look pickers show the look's name and one plain sentence about it.** Halide: "Zephyr · Neutral tonescale and tuned, filmic contrast. A great choice for a wide variety of scenes." VSCO: "A6 / Analog +12.0". Snapchat shows the lens name on every shared snap ("Pink Hair 💗 Lens") so friends can tap it and try it [V-M]. That last one is a free growth loop Digi should copy.
3. **Once already does Digi's stamp and puts its brand inside it.** Its photo viewer burns an orange LCD-style stamp down the left edge: "ONCE | JUL 30, 2026, 11:11 PM" [V-M, screen 8038e800]. A brand inside the stamp looks like part of the photo, not like an ad, so people are less likely to crop it. Digi should test "digi.pink" inside the stamp instead of a separate corner watermark.
4. **Honest AI waiting screens share four parts:** a blurred or ghost version of the photo where the result will appear, a stage name ("Uploading photos… 0 of 17", "Creating avatars…"), a time hint, and "you can leave, we'll notify you". Lensa's own screen shows the problem with countdowns: its "Remaining time" went 13 min → 18 min → 15 min across three screenshots [V-M, flow e155bc11]. Show elapsed time and a typical time, never a countdown that can go up.
5. **"Develop" is a press-and-hold moment in the best app.** Lapse's Darkroom sheet says "3 snaps developed" and the button is "Hold to view snaps". It fills with colour while you hold. Then you swipe each photo left to ARCHIVE or right to JOURNAL, with Undo [V-M, flow 62c2320a]. This is the template for Digi's morning-after Roll reveal.
6. **Group cameras now sell three things on the camera screen itself: who you are shooting to, how much time is left, and how many shots are left.** Locket: a "1 Friend" pill at the top. Once: "Alex's party · 4d 9h left" in the header and a rolling film counter "34 35 36" next to the shutter. Once also puts the same thing on the Lock Screen as a Live Activity: "Alex's party · 5d 2h left · 🎞 35" with a camera button [V-M].
7. **Invites are a QR code plus a link plus one reassuring line.** Lapse: "Invite friends with your Roll Code" + "No download required · Even friends not on Lapse can join!" + `https://lap.se/roll/gG7rx4` + share and print buttons. Once: "Invite guests to your film." + QR + "Share Link" + "Save QR image" [V-M]. Digi only gets to say "no download required" if friends can really join from the web.
8. **Instagram now gives away two of Digi's ideas for free.** The Stories "Frames" sticker turns a photo into a Polaroid with a date and time that viewers shake to develop (rolled out from April 15, 2024 [C, Social Media Today, Android Central; re-checked Nov 17]). The Stories editor has a "Restyle" button that edits photos with Meta AI (launched Oct 23, 2025 [C, 9to5Mac]; I saw the "Restyle" label on Mobbin [V-M, screen d0e6a26b]). Digi cannot win on "AI restyle" or "develop" alone. It wins on the digicam look, the stamp, booth strips and shared party rolls.
9. **Widgets are taught, not assumed.** Locket has a 4-step tutorial ("Hold down on any app to edit your Home Screen" … "Search for Locket and add the widget") and its "I've enabled the widget" button stays grey until the last step [V-M, flow 29465928]. Its empty widget says "No pics, yet". Digi's widget is a v1.1 item, but its tutorial should copy this.
10. **Settings in this category are short, and subscription rows say plainly what you have.** Ahead: "Current Plan · Yearly · Next billing on October 13, 2025 · Change plan", then "Refunds" and "Restore purchases". Fixtured: "Monthly Fixtured+ [Free Trial] · App Store", then "Change plans / Cancel subscription / Restore past purchases" [V-M]. Huji's settings, the oldest digicam app here, are mostly about the date stamp: date style "'98", format "Auto", and "Create HUJI album on save" [V-AS].

---

## 0. What I corrected from the prior research

| # | Prior claim (file) | Correction | Evidence |
|---|---|---|---|
| 1 | Lapse developed shots "are swiped one by one (Archive / keep) with Undo" (06-ui-flows §1a #1) | The keep action is called **"Journal"**, not keep, and there is a third button (a red trash can) between Archive and Journal. Before the swipe, the reveal is a **"Darkroom · 3 snaps developed"** sheet with a press-and-hold button, **"Hold to view snaps"**, and the line "Snaps are a mystery until you develop them." After the swipe, a "Your March Journal · ✦3 day streak" calendar appears. | Mobbin flow 62c2320a, screens 2–11 (V-M) |
| 2 | Lapse roll wheel "Develop roll in 3 / 6 / 12 hours" (06 §1a #2) | The wheel has at least a fourth option below 12 hours (partly hidden, most likely "24 hours"; I can't read it fully, so treat that as unverified). The flow also has a step the prior chapter missed: **"Roll name"** with **"Need inspo?"** chips ("roll call", "mild rager", "moments of love", "gang", "future memories"). After creation, the camera switches to a **FUTURE MEMORIES** mode with a QR code where the last-photo thumbnail used to be. | Mobbin flow 092746dd (V-M) |
| 3 | Digi watermark = a separate "digi.pink" mark on shared images (06 §0, product brief) | Not wrong, but there is a better-tested pattern: **put the brand inside the date stamp.** Once does exactly this ("ONCE \| JUL 30, 2026, 11:11 PM", orange, vertical, left edge). Treat it as an A/B test, not a rule. | Mobbin screen 8038e800 (V-M); E (med) on the crop effect |
| 4 | "Developing" screen: show elapsed time plus "usually about 20 s" (06 §0 #5) | Confirmed, and now with evidence for *why*. Lensa's avatar screen showed "Remaining time 13 min", then "18 min", then "15 min". A countdown that goes up looks broken. Keep elapsed time + a typical time. | Mobbin flow e155bc11, screens 18–21 (V-M) |
| 5 | Prior chapters treat Instagram as a share target only | Instagram is also a **direct competitor inside the share flow**: the Frames sticker (Polaroid + date + shake to develop, Apr 2024) and Restyle (Meta AI edits in Stories, Oct 2025) are free. Digi's share flow must lead with what IG can't do: the flash digicam look, burned-in stamp, strips, group rolls. | C: Social Media Today, Android Central (Frames); 9to5Mac, Engadget (Restyle); V-M: Restyle label on IG screen d0e6a26b |
| 6 | Look picker: "Category chips like Snapchat's 'For You / Halloween'" (06 §0 #2) | Snapchat's current row is **Favorites · For You · Halloween** with "Lens+" sometimes inserted, and a separate **"AI" button** left of Memories that opens AI lenses. Snapchat keeps AI lenses in the same carousel *and* gives them their own entry point. A locked lens shows a **"Get Lens+ on Sale"** pill floating above the shutter. | Mobbin flow a24deea6, screens 1–3 (V-M) |
| 7 | Huji / Dazz / digicam clones "not on Mobbin" (07, 09) | Still true today; I searched again with descriptive queries and got Not Boring Camera, BeReal and others instead. I filled the gap with their App Store screenshots (V-AS) and say so on each line. Huji Cam's last update was **Dec 11, 2024** (12,001 ratings, 4.22★); Dazz Cam was updated **Nov 9, 2026** (118,170 ratings, 4.75★). Huji is a stale benchmark. | iTunes Search API, Nov 17, 2026 (V) |

---

## 1. What I covered

24 Mobbin searches (flows and screens) plus App Store screenshots for 5 apps that Mobbin doesn't have. **15 apps studied screen by screen**, plus single screens from 20 more.

| # | App | Main Mobbin references | Dated by | US ratings · ★ · last update (Nov 17, 2026) [V] |
|---|---|---|---|---|
| 1 | Snapchat | flows [a24deea6](https://mobbin.com/flows/a24deea6-578d-490c-bc4f-e45b57546cf2) (17 screens), [ae530a11](https://mobbin.com/flows/ae530a11-91c2-4df6-b299-f13150bfc4bf) (9) | "Halloween" tab (Oct, year not shown) | 6,106,346 · 4.51 · Nov 12, 2026 |
| 2 | Instagram (Stories camera) | flow [c9f9a026](https://mobbin.com/flows/c9f9a026-1819-4700-ad04-4f8c20988095) (11); screens [d0e6a26b](https://mobbin.com/screens/d0e6a26b-9c4e-4541-82f1-5f4c3635e50d), [4db1efcc](https://mobbin.com/screens/4db1efcc-3d98-42a6-a961-d5a5a548bdd0) | not dated | 29,721,805 · 4.69 · Nov 16, 2026 |
| 3 | BeReal | flows [8f1e0ec2](https://mobbin.com/flows/8f1e0ec2-bd9f-4fd5-bbf5-056fc6dcdaec) (8), [bae72edb](https://mobbin.com/flows/bae72edb-5828-4283-a8da-f9f35afa5588), [980bf26b](https://mobbin.com/flows/980bf26b-e068-45a2-ad7a-d44d99fd7aee), [f0b862f9](https://mobbin.com/flows/f0b862f9-6eeb-4eb1-83d2-11ed038073da) | calendar June 2026, widget "23 May 2026" | 1,163,576 · 4.77 · Nov 16, 2026 |
| 4 | Locket | flows [e61e87a5](https://mobbin.com/flows/e61e87a5-9382-41e6-b8b8-ba373848f763) (10), [29465928](https://mobbin.com/flows/29465928-82fe-42e1-a44a-f47a006cc3b1), [fbeab1f5](https://mobbin.com/flows/fbeab1f5-8e9f-4724-b9b5-6f85652ac8c9), [5e4b6ec6](https://mobbin.com/flows/5e4b6ec6-a0a1-4e59-b0f5-4ba8af97ff86) | "Member since Oct 7, 2026" | 593,068 · 4.76 · Nov 7, 2026 |
| 5 | Lapse | flows [62c2320a](https://mobbin.com/flows/62c2320a-80ba-4c1e-8458-1e04d3f41f92) (12), [092746dd](https://mobbin.com/flows/092746dd-dba6-4a89-af7e-9f2f756709bc) (7), [5f433db5](https://mobbin.com/flows/5f433db5-8dac-42e7-be95-d8ac2f7f0a60) (9), [8f392a85](https://mobbin.com/flows/8f392a85-f358-4366-98e1-a4126bf2223b), [f2e4ee07](https://mobbin.com/flows/f2e4ee07-9e57-4fcf-8f3e-eaecd1ffba2e) | "Tuesday, 18 Mar 2025" | 118,322 · 4.75 · Dec 6, 2025 |
| 6 | Once | flow [9b83eb76](https://mobbin.com/flows/9b83eb76-5573-4575-987f-29a073df984a); screens [8038e800](https://mobbin.com/screens/8038e800-a56e-4bf6-942b-80964fa1d027), [c7c91e8b](https://mobbin.com/screens/c7c91e8b-25d8-453c-9ce3-1f579bff80c6), [92eef9f6](https://mobbin.com/screens/92eef9f6-ebe1-4195-8ebf-c06ebfe56384), [6d614c9a](https://mobbin.com/screens/6d614c9a-4fbb-4124-88bf-8c8d52d0adca) | stamp "JUL 30, 2026" | 729 · 4.76 (chapter 09) |
| 7 | Halide Mark III | screens [fc1c3b46](https://mobbin.com/screens/fc1c3b46-6c85-4d43-90b7-9143af929d0b), [cddd2952](https://mobbin.com/screens/cddd2952-f7f4-4de5-b5ea-1e73aedfde14), [d6030ecf](https://mobbin.com/screens/d6030ecf-e191-489a-903b-8ab937087023), [f4f601dd](https://mobbin.com/screens/f4f601dd-9a6d-4c0e-83e8-abeaec866411) | not dated | 13,713 · 4.45 · Nov 5, 2026 |
| 8 | VSCO | flows [eb662391](https://mobbin.com/flows/eb662391-0dc2-4fb2-be6c-ceeb814c534a) (11), [b2296a38](https://mobbin.com/flows/b2296a38-6c1c-43f5-82d8-82d999f143d4), [60423fbe](https://mobbin.com/flows/60423fbe-8b3a-46ef-9d2d-8b9a91544029); screen [81dfb4d6](https://mobbin.com/screens/81dfb4d6-9b83-44a0-b081-97d36a08c098) | not dated | 278,593 · 4.69 · Nov 13, 2026 |
| 9 | Lensa AI | flows [e155bc11](https://mobbin.com/flows/e155bc11-e270-4c5a-b998-88a36d37da49) (26), [f61b5e15](https://mobbin.com/flows/f61b5e15-ec32-406a-ac99-90f91662ae90) | ~2023 (chapter 07) | 418,227 · 4.70 · Nov 12, 2026 |
| 10 | CapCut | flow [86f80255](https://mobbin.com/flows/86f80255-ca48-427f-b193-bc0c5c2a6c26) (7); screen [8212d5d8](https://mobbin.com/screens/8212d5d8-0f0c-46d4-aff1-25367ce3bc55) | promo for "Seedance 2.0" (2026) | 1,127,195 · 4.61 · Nov 10, 2026 |
| 11 | Photoroom | screen [581c0f2a](https://mobbin.com/screens/581c0f2a-743c-4464-bb1a-c5ac3c2c2625) | not dated | 231,775 · 4.82 (ch. 07) |
| 12 | Remini | not on Mobbin → App Store screenshots | V-AS | 359,948 · 4.61 · Nov 12, 2026 |
| 13 | Edits (Instagram) | not on Mobbin (searches return Instagram's in-app editor) → App Store screenshots | V-AS | 105,237 · 4.79 · Nov 16, 2026 |
| 14 | Huji Cam | not on Mobbin → App Store screenshots | V-AS | 12,001 · 4.22 · Dec 11, 2024 |
| 15 | Dazz Cam / 1998 Cam | not on Mobbin → App Store screenshots | V-AS | Dazz 118,170 · 4.75 · Nov 9, 2026; 1998 Cam 40,454 · 4.80 · Oct 24, 2026 |

**Single screens used:** Meta AI ([ec848afc](https://mobbin.com/screens/ec848afc-743d-4488-8937-7a8b74a51144)), Brainly ([7680e340](https://mobbin.com/screens/7680e340-23ff-4307-8f94-1e06dc92b599)), TikTok Tako ([a8071f22](https://mobbin.com/screens/a8071f22-df16-4c2f-88e3-4f372b430105)), Starling ([89142ff2](https://mobbin.com/screens/89142ff2-1535-4f98-a8b5-af005419b63f)), Genie ([1bcdb242](https://mobbin.com/screens/1bcdb242-b524-4cb9-8234-6954e7c5dba5)), Rodeo ([5d5570a5](https://mobbin.com/screens/5d5570a5-7292-4aec-9edd-fb1c9acf5dad)), Depop ([855df8ee](https://mobbin.com/screens/855df8ee-56dd-4d89-a396-d4a8c6f713e7)), (Not Boring) Camera ([48384051](https://mobbin.com/screens/48384051-5018-4177-8070-36ca4de38ee9)), Google Photos ([447fab43](https://mobbin.com/flows/447fab43-da8f-42d3-8eb9-5fd4fb26f3af)), Canva ([1bd7213f](https://mobbin.com/flows/1bd7213f-2e24-4327-8a8a-21fa4ee59ac8), [eb8ad360](https://mobbin.com/flows/eb8ad360-a0d2-4faf-aff7-edb5c9bbd6e0)), Ahead ([f22a1c1c](https://mobbin.com/screens/f22a1c1c-fda3-4038-b0d1-3a12a3ec8332)), Fixtured ([4408d4e3](https://mobbin.com/screens/4408d4e3-e89f-46da-9dc3-a21f719b367a)), Stardust ([8b4c860e](https://mobbin.com/screens/8b4c860e-d94d-4f5a-8c80-018317256be3)), Tiimo ([a70332c5](https://mobbin.com/screens/a70332c5-eb5a-4f01-8e14-1348848f6aae)), Future Pro timer ([7f1ecd07](https://mobbin.com/screens/7f1ecd07-20f7-4a90-b8a8-d13577ba6cad)), Vestiaire shot slots ([9c57fd7f](https://mobbin.com/screens/9c57fd7f-3bc3-4cf5-8208-23a9118b1c5e)), yope widget ([52762633](https://mobbin.com/screens/52762633-a84d-4158-a28a-588ae9c4f61f)), WhatsApp camera ([610996cb](https://mobbin.com/screens/610996cb-cdae-42cb-b54f-b000c7465960)).

---

## 2. The screens, pattern by pattern

Each block lists what is on the screen **top to bottom**, the exact copy, and what Digi takes from it.

### 2.1 The camera (viewfinder) home

**Snapchat · camera** ([flow a24deea6](https://mobbin.com/flows/a24deea6-578d-490c-bc4f-e45b57546cf2), screens 1–2) [V-M]
- Top bar: Bitmoji avatar + search (left); bell, add-friend, flip (right).
- Right rail, top to bottom: flash (off), music note, a record/"dual" icon, night mode moon, a chevron for more.
- Full-bleed viewfinder (no frame).
- Above the shutter: `.5 · 1× · 2` pill, with 1× in yellow.
- Shutter row: Memories icon (left of shutter), big white ring shutter, lens bubbles to the right. Screen 2 adds an **"AI" sparkle button** left of Memories.
- Under that: category text row **Favorites · For You · Halloween** (scrolls; "Lens+" appears in some screens).
- First-run tooltip: **"Swipe to try a Lens"** pointing at the lens bubbles.
- Tab bar: Map · Chat · Camera · Stories · Spotlight.

**Instagram · Stories camera** ([flow c9f9a026](https://mobbin.com/flows/c9f9a026-1819-4700-ad04-4f8c20988095)) [V-M]
- Top: ✕ (left), flash (centre), settings gear (right).
- Left rail: `Aa` (Create), `∞` (Boomerang), layout grid (Layout), chevron. Expanded, the rail shows labels: **Create · Boomerang · Layout · Hands-free · Close**.
- Shutter row: shutter centre, effect bubbles to the right.
- Bottom: gallery thumbnail (left), mode text **POST · STORY · REEL** (centre), flip (right).
- With an effect on: a pill under the shutter shows the effect's name ("Bubble hearts") with a bookmark and an ✕. A face effect shows **"Find a face"** until it finds one.

**BeReal · camera** ([flow 8f1e0ec2](https://mobbin.com/flows/8f1e0ec2-bd9f-4fd5-bbf5-056fc6dcdaec)) [V-M]
- Top: chevron down (close), "BeReal." wordmark, and under it a **countdown "00:57"**.
- Viewfinder is a **rounded card**, not full-bleed.
- Bottom of the card: flash (left), `1×` (centre), flip (right).
- Under the card: **VIDEO · PHOTO** (PHOTO in yellow), then the shutter.
- After capture: spinner + the line **"Authenticity is timeless, make a memory"**.

**Locket · camera** ([flow e61e87a5](https://mobbin.com/flows/e61e87a5-9382-41e6-b8b8-ba373848f763)) [V-M]
- Top: a megaphone icon (left), an audience pill **"👥 1 Friend"** (centre; it reads "Add a Friend" with no friends yet), profile initials (right).
- Rounded square viewfinder; flash top-left and `1×` top-right *inside* the frame.
- Shutter row: last photo (left), **shutter with a yellow ring**, flip (right).
- Under it: **"History ⌄"** (swipe up for the feed).
- A small floating pill nav: grid · home · chat.

**Lapse · camera** ([flow 62c2320a](https://mobbin.com/flows/62c2320a-80ba-4c1e-8458-1e04d3f41f92)) [V-M]
- Top: add-friend (left); search and heart (right).
- Centre: no live preview in the capture state shown, only **glowing orange viewfinder brackets `[ O ]`** on black. It sells "you can't see what you get".
- Bottom of the frame: flip (left), `.5 · 1×` (centre), flash off (right).
- Mode text: **MEMORIES · FUTURE ME** (yellow = active).
- Shutter row: a **pink stack of cards with a count "3"** (the photos developing), the shutter, an album icon.
- Tab bar: Memories · Chat · Camera · Feed · Profile.

**Once · event camera** ([screen c7c91e8b](https://mobbin.com/screens/c7c91e8b-25d8-453c-9ce3-1f579bff80c6)) [V-M]
- Top: back arrow (left), centred serif title **"Alex's party"** with **"4d 9h left"** under it, QR icon (right).
- Rounded viewfinder with a thin blue focus square.
- Under it: flash, `0.5 · 1.0×`, flip.
- Shutter row: a **rolling film counter "34 35 36"** (shots left, set by the host), shutter, last-photo tile.

**Halide Mark III · camera** ([screen fc1c3b46](https://mobbin.com/screens/fc1c3b46-6c85-4d43-90b7-9143af929d0b)) [V-M]
- Top: exposure meter (red "-2.9 METER"), shutter speed and ISO top-right.
- Chips over the bottom of the viewfinder: RAW, aspect, grid.
- Control row: AF chip (yellow), `.5 · 1× · 2` pill, "…" menu.
- Shutter row: last photo (left), shutter, and a **square swatch of the current "Look"** (right). Tapping it opens the look picker (2.3).
- Timer: a "3" badge appears when a 3-second timer is on.

**VSCO · camera** ([screen 81dfb4d6](https://mobbin.com/screens/81dfb4d6-9b83-44a0-b081-97d36a08c098)) [V-M]
- Top: ✕, framing, flash (auto), selfie switch.
- Right edge: a **vertical yellow exposure slider**.
- Bottom row of round tool buttons around the shutter; mode text **RETRO · DSCO · VIDEO**.

**Huji Cam and 1998 Cam (digicam clones)** [V-AS]
- Huji: a toy-camera body fills the screen, with a tiny viewfinder window top-right, a big round shutter bottom-left, "Flash" and "Lab ▾". The photo viewer header shows the shot time ("1998년 9월 26일 16:01" in the Korean screenshots) and the photo has an orange stamp **'98 9 26** bottom-right, plus random light leaks.
- 1998 Cam: full viewfinder with an orange stamp **'98 09 29** shown live in the preview, a **yellow round shutter**, PHOTO · VIDEO, and a "LAB" button.

**What repeats (camera home)**

| Element | Where it sits | Seen in |
|---|---|---|
| Shutter | bottom centre, white ring (Locket: yellow ring; 1998 Cam: yellow fill) | all |
| Last photo / developing stack | left of shutter | Snapchat (Memories), Locket, Lapse (count stack), Halide, Once (right) |
| Flip | right of shutter or right rail | all |
| Zoom pill `.5 · 1×` | above shutter | Snapchat, BeReal, Lapse, Halide, Once |
| Mode text switcher | under or above shutter | Instagram, BeReal, Lapse, VSCO, WhatsApp |
| Audience / event pill | top centre | Locket ("1 Friend"), Once (title + time left) |
| Rounded viewfinder card | middle | BeReal, Locket, Once |
| Live date stamp in preview | bottom-right of preview | 1998 Cam (V-AS) |

**Digi takes:** rounded 3:4 viewfinder card (BeReal/Locket/Once), the live orange stamp in the preview (1998 Cam), "Shooting to" pill top centre (Locket/Once), developing stack bottom-left (Lapse), look swatch bottom-right (Halide). Details in section 5.

### 2.2 Mode switchers

| App | Modes (exact text) | Style |
|---|---|---|
| Instagram | POST · STORY · REEL | small caps text, active in white bold |
| BeReal | VIDEO · PHOTO | active in yellow |
| Lapse | MEMORIES · FUTURE ME / START ROLL / FUTURE MEMORIES | active in yellow; the camera itself changes (QR replaces thumbnail, sun icon in shutter) |
| VSCO | RETRO · DSCO · VIDEO | active in white |
| Snapchat | Snap · Video | under shutter |
| WhatsApp | FILTERS · EFFECTS · BACKGROUND | active in orange |
| Facebook (prior ch. 06) | LAYOUT · NORMAL | layout icons above shutter |

[V-M for all except Facebook, which is from 06.]

**Pattern:** a horizontal text list you swipe, centred on the active mode, coloured accent for the active one. No icons. Max 3 visible. Lapse proves a mode can change the whole camera, not just a setting: in FUTURE MEMORIES mode the thumbnail slot becomes a QR code for inviting people.

**Digi takes:** `PHOTO · STRIP · ROLL` (ROLL only when a roll is active or in v1.1), active in Digi pink. Swiping left and right on the viewfinder also switches modes, as in Instagram and Lapse (E, high).

### 2.3 Look and filter pickers

**Snapchat · lens carousel** ([a24deea6](https://mobbin.com/flows/a24deea6-578d-490c-bc4f-e45b57546cf2), screens 3–7) [V-M]
- Lens bubbles ring the shutter; the active one sits *inside* the shutter ring.
- A **"View more from this collection"** tooltip over a small avatar stack "+13".
- An AI lens ("AI Clips") shows a sample result video top-left with a view count ("32M") and a dashed ring with **"Center your face"**.
- While the AI lens runs: **"42%"** in the middle of the face.
- Locked lens: a **"Get Lens+ on Sale"** pill above the shutter.

**Halide · Look picker** ([cddd2952](https://mobbin.com/screens/cddd2952-f7f4-4de5-b5ea-1e73aedfde14)) [V-M]
- A glass sheet at the bottom, over the live view.
- Row of square look icons with names: **Apple · Process Zero · Valencia · Rembrandt** (scrolls).
- Under it, the selected look's name in a large mono font, **"Zephyr"**, and one sentence: **"Neutral tonescale and tuned, filmic contrast. A great choice for a wide variety of scenes."**
- A yellow ✓ bottom-right to confirm.
- In the editor ([d6030ecf](https://mobbin.com/screens/d6030ecf-e191-489a-903b-8ab937087023)) the same looks sit under tabs **FRAME · QUICK EDIT · EXPOSURE**, with an exposure dial "0.0" and ✕ / ✓ at the bottom.

**VSCO · presets** ([eb662391](https://mobbin.com/flows/eb662391-0dc2-4fb2-be6c-ceeb814c534a), [b2296a38](https://mobbin.com/flows/b2296a38-6c1c-43f5-82d8-82d999f143d4)) [V-M]
- Category tabs: **PORTRAIT · URBAN · NATURE · VIBRANT · ESSENTIAL**.
- Thumbnails of *your own photo* with each preset, each with a coloured code label (AU5, A6, AL3, B5, C1, G3).
- Tap again: a strength row **"A6 / Analog · +12.0"**, with Undo.
- Pro presets add sliders **Strength · Contrast · Color · Tone** and a pill **"WE5 PRO / We the Creators ⌄"**.
- The preset's info page explains each slider, then shows **"Edited with WE5 PRO"**: a row of real community photos with usernames.
- A tip banner: **"TIP · Finished? Share your edit or head back to Studio"**.

**Instagram · effect grid** ([4db1efcc](https://mobbin.com/screens/4db1efcc-3d98-42a6-a961-d5a5a548bdd0)) [V-M]
- Live preview shrinks to the top; "Select an effect" under it.
- Sheet with tabs: search · saved · ✦ · **Trending · Reels · Appearance**.
- Grid of round thumbnails with names ("No effect", "Green Screen – Remix", "8K quality ✧", "Soft Nature 🌞"). Many are creator effects with clickbait names. This is what an uncurated library looks like.

**CapCut · Auto styles** ([8212d5d8](https://mobbin.com/screens/8212d5d8-0f0c-46d4-aff1-25367ce3bc55)) [V-M]
- Tabs **Presets · ✦ Auto styles · Retouch · Reshape**.
- Face thumbnails per style ("Dolly Girl", "Cherry Sn…", "Soda blue", "Hollywood").
- A **Retouch strength slider**, **"Apply to all"**, and a compare icon on the photo.
- The Export button carries a small badge **"1 use/month"** (a free-use limit shown on the button itself).

**(Not Boring) Camera · Realtime Styles** ([48384051](https://mobbin.com/screens/48384051-5018-4177-8070-36ca4de38ee9)) [V-M]
- "Realtime Styles · Professionally-graded 3D LUTs emulate film stock and other looks." Four style gems, a "Done" button.

**Dazz Cam and 1998 Cam** [V-AS]
- Dazz: each look is a **little camera icon** (Inst Color, D3D, DFunS, 8mm) instead of a thumbnail; you "pick a camera", not a filter. Add-ons stack ("DFunS + Star").
- 1998 Cam: light-leak picker with tabs **Favorites · All Light Leak** and tiles L9–L14.

**What repeats:** (1) the look's *name* is always visible; (2) thumbnails show *your* photo or a real result, not an abstract icon (VSCO, CapCut, Instagram); (3) one strength slider after a second tap (VSCO, CapCut); (4) categories as text tabs; (5) social proof per look: Snapchat's view count, VSCO's "Edited with…" row.

**Digi takes (E, high):**
- Carousel around the shutter for quick swaps (Snapchat). Each bubble is a tiny photo made with that look.
- Above the carousel, the active look's name + one sentence (Halide), for example: **"Flash 2003 · Hard on-camera flash, warm skin, orange stamp."**
- Tabs: **Free · AI ✦ · Christmas · NYE** (Snapchat-style text row).
- AI looks carry "✦ 1 digi" on the bubble; free looks carry nothing.
- Long-press a look → sheet with "Made with Flash 2003" real examples (VSCO/Snapchat). Only show examples Digi has the right to show (team photos or opted-in users).
- Dazz's "pick a camera" framing fits Digi's brand: call the free looks **cameras** ("Cybershot '05", "Disposable", "Point & Shoot") and the AI ones **looks**. Test which word users understand (E, med).

### 2.4 AI generation progress

**Lensa · Magic Avatars** ([flow e155bc11](https://mobbin.com/flows/e155bc11-e270-4c5a-b998-88a36d37da49), screens 15–25) [V-M]
1. Photo picker: "Select up to 20 photos." · "Show Selected (15)".
2. Over the tips screen, a system-style alert: **"Importing photos… 1/17 · Cancel"**, then "11/17".
3. Checkout (see ch. 07): "Why is it paid? Magic Avatars consume tremendous computation power…".
4. Alert: **"You're all set · Your purchase was successful. · OK"**.
5. Screen title "New Avatars". Big headline **"Uploading photos…"**, a grey ring with **"0 of 17"**, and **"Please keep the app open"**.
6. Headline **"Creating avatars…"**, ring with **"Remaining time · 13 min"**, text **"When it's finished, you'll get 50 images generated for you. Feel free to close the app."**, a line **"✅ You'll be notified when it's done"**, and a grey button **"Hide this screen"**. Top-left "Hide".
7–8. The same screen later shows **18 min**, then **15 min**, with the blue ring arc growing. The time went up.

**Meta AI · video from photo** ([ec848afc](https://mobbin.com/screens/ec848afc-743d-4488-8937-7a8b74a51144)) [V-M]
- In the chat thread, a **blurred version of the source photo** at the final size, with a white ring and **"51%"** in the middle.
- Under it: **"You'll be notified when your vibe is ready."**

**Brainly · staged checklist** ([7680e340](https://mobbin.com/screens/7680e340-23ff-4307-8f94-1e06dc92b599)) [V-M]
- Mascot, headline **"Generating your test prep…"**, sub **"This may take up to 2 minutes — we're creating questions tailored to what you're really learning."**
- Four stage cards: **Understanding your material** (active, with "Scanning your files to find key topics…") · Refining the details · Personalizing your practice · Final touches.
- Footer: **"We'll let you know when your test prep is ready."**

**TikTok Tako** ([a8071f22](https://mobbin.com/screens/a8071f22-df16-4c2f-88e3-4f372b430105)) [V-M] (also in ch. 06)
- **"Generating video… 5 mins left · Analyzing your prompt"**, "feel free to keep chatting or leave Tako. I'll message you when it's ready", **"1 of 2 video generations used today."**

**Short-wait screens** [V-M]
- Starling: bracket spinner, **"Reviewing your image… This can take up to 10 seconds."**
- Rodeo: headline **"Wrangling…"** over a **blurred copy of your photo** with a refresh icon; "Analyzing and looking for more info…".
- Genie: black screen, spinner, **"Reimagining…"**, with the style prompt shown below ("Golden hour photography, warm sunset lighting…").
- Snapchat AI lens: "42%" right on the face (2.3).

**Consent before upload: CapCut** ([flow 86f80255](https://mobbin.com/flows/86f80255-ca48-427f-b193-bc0c5c2a6c26), screen 5) [V-M]
- Before the first AI edit, a modal: **"Allow CapCut to upload your photos to our server?"** "By continuing to use this service you acknowledge and agree: You are solely responsible for content generated based on your uploaded materials; You confirm that you have all necessary rights and permissions to use your uploaded content…; You may not use CapCut tools to misrepresent or violate the IP or publicity rights of others; You will not upload sensitive personal…" Buttons **Allow** / **Not now**.
- It is honest about the upload but reads like a contract. Digi's version should say the same things in party language (section 5).

**Ranking of AI-waiting patterns for a 15–30 s job (Digi's Seedream call)** (E, high)

| Rank | Pattern | Why |
|---|---|---|
| 1 | Blurred source photo at final size + stage text (Rodeo, Meta AI) | The layout doesn't jump; the user sees *their* photo the whole time |
| 2 | Named stages (Brainly, Lensa) | Feels like progress without a fake percentage |
| 3 | "Usually takes about 20 s" + elapsed seconds | Lensa shows why countdowns fail |
| 4 | "You can leave, we'll ping you" after ~30 s (Lensa, Meta AI, TikTok) | Needed for slow nights; doubles as the reason to allow notifications |
| 5 | A real percentage (Snapchat 42%, Meta AI 51%) | Only if the number is real; Digi's API gives no progress, so don't fake one |

### 2.5 Result and compare screens

**Photoroom · before/after** ([581c0f2a](https://mobbin.com/screens/581c0f2a-743c-4464-bb1a-c5ac3c2c2625)) [V-M]
- Full photo; at the bottom a **toggle track labelled BEFORE … AFTER** with a white knob. Dragging the knob wipes between the two.

**Remini · split slider** [V-AS]
- Vertical split line with a round `‹›` handle in the middle, **"Before"** and **"After"** pills in the bottom corners. Tools under it: Face Enhancer · Background Enhancer · Face Retouch · Colors. Every App Store screenshot sells the before/after, not the tool list ("Enhance your photos' quality.", "Get the best face in every photo.", "Create your 90's Yearbook photos.").

**CapCut · applied AI edit** ([86f80255](https://mobbin.com/flows/86f80255-ca48-427f-b193-bc0c5c2a6c26), screens 4–7) [V-M]
- The applied edit shows as a label **"✨ Glow Up Skin"** over the prompt bar; undo/redo bottom-left; a **compare icon** bottom-right (hold to see the original).
- After Save: header **"Saved to device"**, the photo, a white **"Edit another photo"** button, share icons **TikTok · Instagram · Stories · Facebook · WhatsApp**, then **"More edits with AI"** chips ("✨ Polish skin texture", "Apply natural makeup", **"Apply same edit to new image"**, "Quick retouch"), then Quick actions (Collage, AutoCut, Create video, AI photo editor), then a promo card **"Spend fewer credits on Seedance 2.0 Mini & Fast"**.

**Lensa · result pack** ([f61b5e15](https://mobbin.com/flows/f61b5e15-ec32-406a-ac99-90f91662ae90)) [V-M]
- "Magic Avatars" list: a card **"Pack #1 · 50 avatars"**; footer **"❄️ You will never have the same results! Every time AI generates unique avatars."** + black button **"Create new avatars"**.
- Pack page: section "Stylish", 2-column grid, top-right **"Save all avatars"**.
- Viewer: **"23 of 50"**, then three square buttons **Edit · Save to Photos · Share**, then **"Order a print" via Pixels.com**.

**Depop · "AI relight"** ([855df8ee](https://mobbin.com/screens/855df8ee-56dd-4d89-a396-d4a8c6f713e7)) [V-M]
- In a plain "Adjust" sheet (Brightness · Contrast · Saturation), a single tile **"AI relight"** with a sun icon, then **Apply**. A useful naming signal: "relight" is a word a resale app trusts normal users to understand.

**Snapchat · shared result** ([3c3b00ba](https://mobbin.com/screens/3c3b00ba-cd94-4a38-9865-60aaaff0f6c2)) [V-M]
- The viewed snap shows a small chip bottom-left: **"Pink Hair 💗"** with the lens icon. Tapping it opens the lens. Every share advertises the look.

**Digi takes (E, high):**
- **Hold anywhere on the result to see the original** (CapCut/Photoroom), plus a visible "Before" chip so people find it.
- One primary action, two secondary: **Share** (big), Save, Redo.
- Under it: **"Try another look"** row (Art Selfie, ch. 06) and **"Same look, new photo"** (CapCut's "Apply same edit to new image").
- Lensa's "You will never have the same results!" is a good expectation line for AI: **"Every digi comes out a little different."**

### 2.6 Editors

**Snapchat · post-capture editor** ([a24deea6](https://mobbin.com/flows/a24deea6-578d-490c-bc4f-e45b57546cf2), screens 9–10) [V-M]
- ✕ (top-left), music pill (top-centre).
- Right rail of 12 icons: Text `T`, pen, sticker, scissors, music, sound, crop-frame, emoji, magic wand, quote `99`, mic, paperclip, crop.
- Filters by swiping the photo sideways; **"Swipe up to edit"** with a filter row (4K, etc.).
- Bottom bar: download icon · **Story** (with your avatar) · yellow **"Send To ▶"**.

**Instagram · Stories editor** ([c9f9a026](https://mobbin.com/flows/c9f9a026-1819-4700-ad04-4f8c20988095), [d0e6a26b](https://mobbin.com/screens/d0e6a26b-9c4e-4541-82f1-5f4c3635e50d)) [V-M]
- ✕ (top-left), right rail **Text · Stickers · Audio · Restyle** (+ More, Effects, Draw, Mentions when expanded).
- "Add a caption…" at the bottom of the image.
- Bottom: **Your story** · **Close Friends** (green star) · → arrow.
- Stickers seen on one story: a slider poll, a countdown **"THE HOLIDAYS 02:08:07 days hours minutes"**, a **Polaroid photo sticker with a handwritten caption "sunny day" and the photo's date**, a "check here!" link, a music disc, **"Add yours"** ("camera roll gems"), "Nominate a friend". On the viewer side the Polaroid shows **"Shake to reveal"**. This is the Frames sticker [C: launched April 2024 with LE SSERAFIM].

**VSCO, Halide** (see 2.3): tool tabs (ALL TOOLS · ESSENTIAL · LIGHT · COLOR · EFFECTS) with Adjust, Exposure, Contrast, Tone, Dodge & Burn.

**1998 Cam · booth strip editor** [V-AS]
- Headline **"Strike a pose. Stack the strip."**
- The strip preview with caption "1998 CAM · 2026.05.18" in a serif.
- Shot counter **"4/4"** with the four thumbnails.
- Layouts: **Classic Strip · 2×2 Grid · Filmstrip · Instant Duo**.
- Background colours: **Classic · Pastel · Sky · Vintage · Film**.
- Templates page with tags **All · Film · Collage · Love · Family · Paper** and named frames ("Instant 600 Classic", "Instant Portrait", "Instant Landscape", "Cinema Trio").

**Digi takes (E, high):** Digi's editor stays tiny in v1: **Stamp (on/off, date style) · Frame colour · Caption · Strip layout**. Snapchat and Instagram have 12+ tools because people post there every day. Digi photos should look finished straight out of the camera; the editor is for the strip and the stamp, nothing else. 1998 Cam's strip editor is the closest model; copy its four layouts and five background colours as a starting set.

### 2.7 Share sheets and story stickers

**Snapchat · "Send To" list** ([a24deea6](https://mobbin.com/flows/a24deea6-578d-490c-bc4f-e45b57546cf2), screens 11–15; [c70099b3](https://mobbin.com/screens/c70099b3-b192-472c-b33e-6dfc9fd6df4e)) [V-M]
- Search bar, "All · New +" chips.
- **Post to…**: Spotlight ("Pink Hair 💗 Lens" under it, so the lens travels with the post), **My Story · Friends Only** ("Just for Friends"), **My Story · Public** ("Friends, Followers, and Everyone").
- Recents & Suggested, Find Friends.
- A clock chip "⏱ 24h ⌄" on the story row opens a wheel: **"Snap disappears from Story… 1 hour · 6 hours · 12 hours · 1 day · 2 days"**.
- Bottom: blue bar with the chosen target "My Story · Friends Only" and a send arrow.
- After posting to Spotlight: a top banner **"Sent! · Share your Spotlight Post"** with My AI · Team Snapchat · **Copy** · WhatsApp · Messages.

**Instagram · after posting a story** ([c9f9a026](https://mobbin.com/flows/c9f9a026-1819-4700-ad04-4f8c20988095), screens 6–11) [V-M]
- Sheet **"Share"**: Your story (radio) · Close Friends ("Add people ›") · Message › · blue **Share**.
- Sheet **"Also share to"**: Add to Highlights · Your Facebook story **Share** · Suggested people with **Send** · **Done**.
- Feed shows a one-time alert **"Stories archive · Stories are saved to your archive after 24 hours… Stories shared publicly will be used to improve AI at Meta. · OK / Manage settings"**.
- Story viewer shows **"Uploading…"** bottom-left.

**VSCO · "Share your Recipe"** ([60423fbe](https://mobbin.com/flows/60423fbe-8b3a-46ef-9d2d-8b9a91544029)) [V-M]
- A 9:16 **share card**: your photo on top; under it a black band **"VSCO EDITED— · A6 / ANALOG +12.0"**, then the VSCO logo and **vsco.co/username**.
- Buttons: **Instagram · More**.

**Lapse · "Share your Journal"** ([f2e4ee07](https://mobbin.com/flows/f2e4ee07-9e57-4fcf-8f3e-eaecd1ffba2e)) [V-M]
- Title **"Share your Journal · so friends can add you"**.
- Swipeable card templates (3 dots): photo with your name + "is on Lapse" + a **"see my photos"** pill; or your face in a circle with stickers and big text **"see my photos on Lapse"**.
- Two buttons only: **Snapchat story · Instagram story**.

**Canva · share** ([1bd7213f](https://mobbin.com/flows/1bd7213f-2e24-4327-8a8a-21fa4ee59ac8), [eb8ad360](https://mobbin.com/flows/eb8ad360-a0d2-4faf-aff7-edb5c9bbd6e0)) [V-M]
- Icon row: Download selection · **Instagram** · X · Move to folder · **TikTok**; list: **Share link (Suggested)** · Download · Email · Print with Canva.
- After download: a sheet **"Saved to camera roll"** that upsells **"Try Brand Kit"** / "See what's new". A post-save moment used for the next action.

**Edits (Instagram)** [V-AS]
- Export screen: **"Choose where to share · Videos are optimized for high-quality playback on Instagram."** Row: Instagram · Facebook · Message · Download · More. App Store headline: **"Export in 4K with no watermark"**. A free Meta app selling "no watermark" sets the bar: a forced watermark is a cost users notice.

**Once · photo viewer** ([8038e800](https://mobbin.com/screens/8038e800-a56e-4bf6-942b-80964fa1d027)) [V-M]
- Top: photographer name in italic serif "Alex", "Jul 30, 11:11pm", ✕.
- Photo with a centred title sticker **"Alex's party!" / "JUL 30, 11:11PM"** (edit pen and fill-bucket icons on the right), a **"Stickers"** button, and the **orange stamp "ONCE | JUL 30, 2026, 11:11 PM"** running up the left edge.
- Bottom: **Story** (Instagram glyph) · **Save** · share (white, primary) · "…".

**What repeats:** (1) a custom row of 4–6 targets *before* the iOS sheet, with "More" as the last item (Canva, CapCut, Edits, Snapchat); (2) Instagram Story is always first or second; (3) a branded share card with the look/recipe name and the app's link (VSCO, Lapse); (4) the brand rides inside the image (Once stamp, VSCO band) or as a tappable chip (Snapchat lens chip).

**Digi takes:** see section 5, S1–S3.

### 2.8 Galleries, rolls and the "develop" moment

**Lapse · Darkroom → triage → journal** ([62c2320a](https://mobbin.com/flows/62c2320a-80ba-4c1e-8458-1e04d3f41f92)) [V-M]
1. Camera with the pink "3" stack.
2. Brown bottom sheet: **"Darkroom •"** (green dot), **"3 snaps developed"**, a "?" help icon, an orange gradient button **"⟳ Hold to view snaps"**, and small print **"Snaps are a mystery until you develop them. Share your feedback."**
3. While held, the button fills with a green-to-yellow bar from the left.
4. First time only: serif headline **"Collect daily moments"** with a calendar of photo circles, blue **Continue**; then month cards ("August", "June", "July" in big serif over photos) and **"OK, got it!"**
5. Triage: header **"Your snaps · Snap 1 of 3"**, **Undo** top-right. On the photo: "Add comment" and "Tag". Bottom: **Archive** (grey) · trash (red) · **✓ Journal** (green). Swiping tilts the card and stamps **ARCHIVE** (grey) or **JOURNAL** (green) on it.
6. End: **"Your March Journal"** with a gold card **"✦3 day streak"** and a calendar with the day ringed in green, blue **"Done ✓"**.

**Lapse · roll page** ([8f392a85](https://mobbin.com/flows/8f392a85-f358-4366-98e1-a4126bf2223b)) [V-M]
- Cover card with a **"Recap"** button, roll name **"future memories"**, sub **"Just you 😭 · 3 📷"**, member avatars with an **"Invite to Roll"** "+" bubble, buttons **"Reload roll"** and **"Share roll"**, then a date header "Tuesday, 18 Mar 2025" with a select tick, then a 3-column grid.

**Once · film page** ([9b83eb76](https://mobbin.com/flows/9b83eb76-5573-4575-987f-29a073df984a), [6d614c9a](https://mobbin.com/screens/6d614c9a-4fbb-4124-88bf-8c8d52d0adca)) [V-M]
- Cover photo, serif title **"Alex's party"**, three stats **"3 Moments · 2d 12h Left · 2 People ›"**.
- A big white camera button, plus QR and download buttons.
- Grid tiles stay dark with **"Reveals in 2d 12h"** and the photographer's name ("Sam", "Alex") in italic.
- Empty film: **"Welcome to your film! Start capturing your memories to fill your album."**, stats "0 Moments · 5d 7h Left · 1 People".

**BeReal · Memories** ([bae72edb](https://mobbin.com/flows/bae72edb-5828-4283-a8da-f9f35afa5588), [980bf26b](https://mobbin.com/flows/980bf26b-e068-45a2-ad7a-d44d99fd7aee)) [V-M]
- Segmented **Memories · Calendar**, Select.
- Calendar: posted days in orange, a 🔥 over streak starts, today ringed.
- "i" opens **"What's on your calendar"**: Streak started here · **Posted on time** ("You posted within 2 minutes. Nice.") · Streak restore · Deleted post or late post · No streak day. Footer **"Keep it real. Keep it on time."**

**Lensa** (2.5): pack → grid → "23 of 50" viewer.

**Digi takes (E, high):**
- **My digis** gallery = 3-column grid grouped by night ("Sat, Dec 20 · Maya's Christmas party"), not by month. Party apps are about nights.
- **Roll page** = Once's stats line ("12 digis · Develops in 9h 12m · 6 people") + Lapse's member row with "Invite" + Once's dark "Develops at 10:00" tiles with the shooter's name.
- **Reveal** = Lapse's "Hold to develop" button + strong haptic + the flash sound, then one-by-one swipe (**Keep** / **Skip**) with Undo, ending on an auto-made **recap strip**.

### 2.9 Invite flows

**Lapse · Roll Code** ([8f392a85](https://mobbin.com/flows/8f392a85-f358-4366-98e1-a4126bf2223b), screen 2) [V-M]
- Sheet title **"Invite friends with your Roll Code"**.
- Gold card with a QR code, a sun emoji in the centre (with an edit pencil), and the roll name "future memories".
- Green tooltip **"💥 No download required 💥 · Even friends not on Lapse can join!"**
- Steps: "1 …" (hidden by the tooltip), **"2 Snaps reveal when developed"**.
- Bottom: copy-link field **`https://lap.se/roll/gG7rx4`**, share icon, **print icon** (print the QR for the party table).

**Once · invite guests** ([9b83eb76](https://mobbin.com/flows/9b83eb76-5573-4575-987f-29a073df984a)) [V-M]
- Sheet **"Invite guests to your film."** · "Take a glimpse of your world through their lens. Invite your guests to make this film unforgettable."
- White QR, then **"Share Link"** and **"Save QR image"**.

**Google Photos · album QR** ([447fab43](https://mobbin.com/flows/447fab43-da8f-42d3-8eb9-5fd4fb26f3af)) [V-M]
- Album card "Merchandise · 9 photos, location included · Options", **"Send in Google Photos ›"**, **"Show QR code"** → **"Scan to start sharing · Ask the receiver to scan this QR code with their device"**. Note the privacy detail in the sub-line: "location included" / "location hidden".

**Lapse · friend code** (same family) [V-M]: "Your friend code", QR with your face in the middle, username, "ⓘ Friends can scan this code to add you", **Share profile**, segmented **Show my code · Scan a code**.

**Locket · after a send** (adjacent): "Sam has your snap on their Lock Screen!" with **"Continue · to get snaps on your Lock Screen"** [V-M, Lapse flow 5f433db5]. It uses the moment a friend receives your photo to sell the receiver-side feature.

**Digi takes (E, high):** Invite sheet = title "Invite people to this roll", QR with the roll emoji in the middle, the roll name under it, a link `digi.pink/r/XXXXXX`, **Share link · Save QR · Print**, and one line that is true for Digi. If guests can shoot from the web: "No app needed. Friends can join from their browser." If not: "Friends get the app free and join in one tap." Show the privacy line Google Photos shows: "Everyone in the roll sees every photo at 10:00."

### 2.10 Widgets and Live Activities

**Locket · widget tutorial** ([29465928](https://mobbin.com/flows/29465928-82fe-42e1-a44a-f47a006cc3b1)) [V-M]
1. A tilted phone mockup with a real friend photo widget on the home screen. **"Add the widget! · Add your friends to your Home Screen. Locket works best with the widget!"** Yellow **"Add the widget"**, text link **"Not now"**.
2. **"Finally, add the widget to your home screen"**, an animated phone, **"Hold down on any app to edit your Home Screen"**, 4 dots, a **grey (disabled) "I've enabled the widget"** button.
3. Step 4: the widget gallery with "Locket" searched, **"Search for Locket and add the widget"**, button now yellow.
4. **"Your Locket is set up · We'll notify you once your friends have set up theirs"**, glowing phone outline, **Finish**.

**Locket · widget states and settings** ([5e4b6ec6](https://mobbin.com/flows/5e4b6ec6-a0a1-4e59-b0f5-4ba8af97ff86), [fbeab1f5](https://mobbin.com/flows/fbeab1f5-8e9f-4724-b9b5-6f85652ac8c9)) [V-M]
- Empty widget (large and small): photo icon in a yellow ring, **"No pics, yet"**.
- Filled: photo with the sender's avatar and caption pill **"time to party! 🎊"**, a yellow badge "1" (unseen), and later a 🔥2 streak badge with a blue frame.
- Profile sheet: "LOCKET GOLD · SINCE 2026" badge, name, `locket.cam/samlee18`, **1 Friend · Copy Link · Share Link**, a gold card **"Locket Gold · Member since Oct 7, 2026"**, **Widgets** section ("Everyone · Edit", "+ Create", "New +").
- Widget editor: preview, **Show Streak** toggle, **Always Show in Full Color** toggle, **Widget Frame** colour grid (None, pink, orange ✓, yellow, green, teal…).

**Lapse · Lock Screen "Pin"** ([5f433db5](https://mobbin.com/flows/5f433db5-8dac-42e7-be95-d8ac2f7f0a60)) [V-M]
- Intro: **"Spam friends with Instants · ⚡ Develops instantly · 👻 Deletes after sending · 👀 Only viewable once"**.
- A Polaroid frame with **"add note…"** in a serif; sheet **"Send as Instant"**, friend avatar, **"📌 Pin NEW"** chip with tooltip **"Pin to their Lock Screen"**, **Send**.
- **"✓ Sent"** in green, then **"Sam has your snap on their Lock Screen!"** + **"Continue · to get snaps on your Lock Screen"**.
- Explainer: **"Pin Instants to your friend's Lock Screen · Leave Instants right on your friend's Lock Screen. Disappears after they open."**

**Once · Live Activity** ([92eef9f6](https://mobbin.com/screens/92eef9f6-ebe1-4195-8ebf-c06ebfe56384)) [V-M]
- Lock Screen card: Once logo ✱, **"Alex's party"** (serif), **"🕘 5d 2h left"**, a chip **"🎞 35"** (shots left), a light-blue **camera button**.

**BeReal and yope** [V-M]
- BeReal: photo widgets (small, medium, large) dated "23 May 2026", and a **"Memories"** widget strip.
- yope: a wide widget **"🔥6 · 59:44 · DROP A PIC FOR THE DAY"** with S M T W TODAY ticks and crosses.

**Digi takes (E):**
- **Live Activity during a roll (v1.1, high value):** "Maya's NYE · Develops 10:00 · 🎞 18 left · [camera]". A party is the one time people keep their phone locked in a pocket; one tap from the Lock Screen to the camera matters more than a home-screen widget. Expo now ships its own `expo-widgets` library (alpha Mar 2026, stable since SDK 56 in June 2026) for iOS widgets and Live Activities, with push updates. It needs a development build, not Expo Go [V, Expo docs and blog]. Still budget a day to test it on a real phone before promising it in the contest window (E, med).
- **Home-screen widget (v1.1):** "Last digi" + "Roll develops in 6h". Empty state: **"No digis yet"**. Copy Locket's 4-step tutorial, including the disabled button until the last step.

### 2.11 Notification asks (in-context lines only; the full primer screens are in chapter 09)

| App | Exact line | Where it appears |
|---|---|---|
| BeReal | "Turn on notifications so you can post on time." + **Turn on** | banner at the top of the home feed [V-M] |
| Lensa | "✅ You'll be notified when it's done" | on the AI waiting screen [V-M] |
| Meta AI | "You'll be notified when your vibe is ready." | under the generating tile [V-M] |
| Brainly | "We'll let you know when your test prep is ready." | waiting screen footer [V-M] |
| Locket | "We'll notify you once your friends have set up theirs" | setup finish [V-M] |
| Lapse | "Turn on Notifications to see snaps when they develop" | onboarding (ch. 09) |

**Pattern:** the ask is tied to a concrete future event ("when it's done", "when they develop"). **Digi:** ask on the first AI wait ("Want a ping when it's ready?") and when a roll is created ("Get a ping at 10:00 when the roll develops"). Not at launch.

### 2.12 Empty states

| App | Copy (exact) | Action |
|---|---|---|
| BeReal home, first day | **"HEY ALEX · Are you ready? It's time to BeReal. Save this moment and share it with your friends."** | **Post your first BeReal.** |
| BeReal feed, no friends posted | **"Wow, it's really calm in here! · Your friends haven't posted their BeReal yet. Add even more friends."** | **Add Friends** |
| Lensa photos | **"Let's go! · Just add your photo here and let Lensa work its magic"** with a hand-drawn arrow to the "+" tile | "+" tile, "Magic Avatars" |
| Locket widget | **"No pics, yet"** | — |
| Once film | **"Welcome to your film! Start capturing your memories to fill your album."** | camera button |
| Lapse roll, alone | **"Just you 😭"** | "Invite to Roll" |
| Mindtrip media | **"Nothing here yet. · Add photos, videos, or links to keep track of your trip media."** | **+ Add media** |

[All V-M.] **Pattern:** greet by name, say what goes here, one button. The best ones (BeReal, Lapse) are a little funny. **Digi:** gallery empty: **"No digis yet. Tonight's a good night for one."** + "Open camera". Roll alone: **"Just you so far. Parties need people."** + "Invite".

### 2.13 Settings and subscription management

**Huji Cam settings** [V-AS] (Korean screenshot; my translation): Date display: **Date '98 ›**, **Format: Auto ›**. Options: **Viewfinder touch mode** (on), **Create "HUJI" album on save**, **Save location info**. A button "Use extra options and edit existing photos" (the paid part). Then: Save straight to album, Save in app too, **Keep original photo**. Support: Recently deleted, Write a review, INSTAGRAM.

**Subscription rows** [V-M]
- Ahead ([f22a1c1c](https://mobbin.com/screens/f22a1c1c-fda3-4038-b0d1-3a12a3ec8332)): **Current Plan · Yearly · Next billing on October 13, 2025 · Change plan**; Refunds; Restore purchases.
- Fixtured ([4408d4e3](https://mobbin.com/screens/4408d4e3-e89f-46da-9dc3-a21f719b367a)): **Monthly Fixtured+ [Free Trial] · App Store**; Change plans · Cancel subscription · Restore past purchases.
- Stardust ([8b4c860e](https://mobbin.com/screens/8b4c860e-d94d-4f5a-8c80-018317256be3)): table Subscription type · Purchased on (App Store) · Purchase date · Expiration date · Billing Cycle (Annual).
- Tiimo ([a70332c5](https://mobbin.com/screens/a70332c5-eb5a-4f01-8e14-1348848f6aae)): **Account & subscription:** Restore purchase · **Redeem offer code** · Email settings · Delete account · Change email address · Sign out.
- Locket keeps paid status in the **profile** ("Locket Gold · Member since …") rather than in settings.

**Digi Settings (E, high)**, top to bottom:
1. **Digi Plus** card: "Yearly · renews Dec 20, 2027" or "Free" + "See Plus"; **digis left: 18** ("Party Pack digis never expire").
2. **Camera:** Date stamp (On) · Stamp style ('26 12 31 / 2026.12.31 / DEC 31 '26) · Stamp position · Save original too (Off) · Flash sound (On).
3. **Account & purchases:** Restore purchases · Redeem code · Manage subscription (opens Apple's sheet) · Delete account.
4. **Privacy:** What we upload (only AI looks), Delete my uploads.
5. Help · Rate Digi · Instagram/TikTok · Terms · Privacy.

### 2.14 Paywall touch points inside these screens (new items only; full paywalls in ch. 07)

- **Snapchat:** a locked lens shows **"Get Lens+ on Sale"** above the shutter [V-M]. The upsell lives where the desire is (the lens), not in a menu.
- **Lensa:** the pack checkout says **"You've got 50% off as Subscriber! 😃"** and the CTA strikes the old price: **"Purchase for ~~$8.98~~ $4.48"** (currency on Mobbin is SGD) [V-M]. Allowed only if the higher price is real for non-subscribers.
- **CapCut:** "1 use/month" badge on Export [V-M].
- **Canva:** "Saved to camera roll" sheet upsells after the save [V-M].

**Digi:** an AI look bubble shows "✦ 1 digi"; with 0 digis, tapping it opens the out-of-digis sheet (ch. 07 P4). After the first free AI result is saved, the save toast can carry one line: "Like it? 25 more for the party · $5.99" (E, med; test it, and don't show it twice in one night).

---

## 3. Patterns that repeat, ranked for Digi

Score = how many of the 15 core apps show it × how much it matters for a party camera (my judgement). "Copy" means build it as is; "Adapt" means change it; "Avoid" means don't.

| Rank | Pattern | Apps seen (V-M unless noted) | Digi verdict |
|---|---|---|---|
| 1 | Standard camera layout: shutter centre, last photo left, flip right, zoom pill, text modes | 9 of 9 cameras | **Copy** |
| 2 | Look name + one-sentence description on selection | Halide, VSCO, Snapchat (name chip), Instagram (name pill) | **Copy** |
| 3 | Thumbnails made from real results, not icons | VSCO, CapCut, Instagram, ChatGPT (ch. 06), Lensa | **Copy** (ship Digi's own sample photos) |
| 4 | Look name travels with the share (tappable chip / band / stamp) | Snapchat, VSCO, Once | **Copy** → `digi.pink/l/flash-2003` |
| 5 | Custom 4–6 target share row before "More" | Canva, CapCut, Edits, Snapchat, Once | **Copy** |
| 6 | Blurred-photo placeholder + stage text for AI waits | Rodeo, Meta AI, Lensa, Brainly | **Copy** |
| 7 | "Leave, we'll notify you" on waits | Lensa, Meta AI, TikTok, Brainly | **Copy** after 30 s |
| 8 | Hold to compare with the original | CapCut, Photoroom, Remini (V-AS) | **Copy** |
| 9 | Hold-to-reveal develop + swipe triage + Undo | Lapse | **Copy** for Roll reveal |
| 10 | Event header: name + time left + shots left | Once, Lapse, Locket ("1 Friend") | **Copy** for Roll camera |
| 11 | QR + link + "print" invite | Lapse, Once, Google Photos | **Copy** |
| 12 | Brand inside the date stamp | Once | **Adapt** (A/B vs corner watermark) |
| 13 | Live Activity with time + shots left + camera button | Once | **Adapt** (v1.1, `expo-widgets`, dev build) |
| 14 | Step-by-step widget tutorial with disabled button until last step | Locket | **Adapt** (v1.1) |
| 15 | Rounded viewfinder card | BeReal, Locket, Once | **Copy** |
| 16 | Remaining-time countdown | Lensa | **Avoid** (it went up) |
| 17 | 12-icon editor rail | Snapchat, Instagram | **Avoid** (too much for Digi) |
| 18 | Uncurated effect library with clickbait names | Instagram ("8K quality ✧") | **Avoid** |
| 19 | Fake system alerts to prime permissions | Lapse, BeReal, Snapchat (ch. 09) | **Avoid** (dark pattern) |
| 20 | "On Sale" pill on locked content | Snapchat | **Avoid** unless there is a real, dated sale |

---

## 4. What not to copy (dark patterns and weak spots seen)

1. **Countdowns that go up** (Lensa 13 → 18 → 15 min). It makes a wait feel like a lie. Show elapsed time and a typical time instead.
2. **System-looking pop-ups that are not from iOS** (Lapse, BeReal, Snapchat; ch. 09). Digi's own sheets must look like Digi, never like an iOS alert.
3. **"Sale" and strike-through prices without a real old price** (Snapchat "on Sale" pill; Lensa strike-through only fine if the base price is real). No fake urgency in Digi, ever.
4. **Contract-style consent** (CapCut's upload modal). The content is right; the tone loses people. Digi says the same three facts in three short lines.
5. **Hidden "keep the app open" requirements** (Lensa's upload step said "Please keep the app open"). If Digi's upload must finish in the foreground, say so before the user taps, and keep it under 5 s by resizing on device first.
6. **Uncurated filters** (Instagram's effect grid full of "4K HD IPHONE" effects). Digi ships fewer looks, all good.
7. **A forced watermark people can't remove after paying** would look worse next to Edits' "Export in 4K with no watermark". Decide this in the pricing chapter; the UI should make the rule visible in Settings either way.

---

## 5. Digi screens, revised spec (only what changes vs chapter 06 §3)

Copy voice as in chapter 06: casual, short, sentence case, max one emoji per screen.

**C1 · Camera home** (top to bottom)
- Top bar: gallery/settings button (left) · **"Shooting to: Just me ⌄"** pill (centre; during a roll: "Maya's NYE · 9h 12m · 🎞 18") · flash (right).
- Viewfinder: rounded 3:4 card. **Live orange stamp in the bottom-right of the preview** (the exact one that will be burned in). Tap to focus; pinch to zoom.
- Under the card: `.5 · 1×` pill.
- Look line: active look name + one sentence, e.g. **"Flash 2003 · Hard flash, warm skin, orange stamp."**; AI looks add **"✦ 1 digi · 18 left"**.
- Shutter row: developing stack with a count (left; shows AI jobs in progress) · shutter with a pink ring, current look inside it · look bubbles to the right (swipe).
- Tabs: **Free · AI ✦ · Christmas · NYE**.
- Modes: **PHOTO · STRIP** (+ ROLL in v1.1).
- First run only: one tooltip, **"Swipe to try a look"**.

**C2 · Look sheet (long-press a look)**
- Name, one sentence, "Made with this look" row (3–6 sample images), **Use this look** button. AI looks add: "Uses 1 digi. Takes about 20 s. Faces are sent to our AI partner and deleted after."

**A2 · Developing (AI)**
- Your photo, blurred, at the final size. Over it, stage text that changes: **"Sending your photo…" → "Relighting…" → "Adding grain and stamp…"**.
- Under it: **"Usually about 20 s · 0:07"** (elapsed).
- At 30 s: **"Taking longer than usual. You can leave, we'll ping you."** + "Notify me" (first time this triggers the iOS prompt).
- On failure: **"That one didn't develop. Your digi is back."** + Try again.

**A0 · First AI upload consent (once per install, plus the per-photo "everyone said yes" check from ch. 06)**
- **"Quick thing before your first AI look"**
- "Your photo goes to our AI partner to make the look."
- "We delete it after. We never train on it."
- "Only use photos of people who are OK with it."
- Buttons: **Continue** / Not now.

**A3 · Result**
- Full result; **"Before"** chip top-left (hold anywhere to compare).
- Primary: **Share**. Secondary: **Save** · **Redo (1 digi)**.
- Rows: **Try another look** (thumbnails) · **Same look, new photo** · **Make it a strip**.
- Line under the image: "Every digi comes out a little different."

**S1 · Share row** (bottom sheet before iOS sheet)
- Preview of what will be shared (with stamp).
- Row: **IG Story · Snap · TikTok · Messages · Save · More**.
- A toggle **"Add look link"** (on by default): adds a small "Flash 2003 · digi.pink" sticker to Story shares, the way Snapchat shows "Pink Hair 💗". Off removes the sticker, not the stamp.

**S2 · Share card (for strips and roll recaps)**
- 9:16 card like VSCO's: the strip on top, a band with **"DIGI · FLASH 2003 · '26 12 31"**, and `digi.pink`. Swipe for 2–3 templates (Lapse).

**R2 · Create roll** (v1.1)
- **"When should it develop?"** wheel: **Tomorrow 10:00** (default) · 3 hours · 6 hours · 12 hours.
- **"Roll name"** with **"Need ideas?"** chips: "christmas party", "NYE '27", "girls night", "birthday", "the group chat".
- **"Shots each"**: 12 · 24 · 36 (Once offers 5/10/16/24/36/∞, ch. 06).

**R3 · Invite** (v1.1): see 2.9 "Digi takes".

**R5 · Roll camera** (v1.1): header "Maya's NYE · develops in 9h 12m"; film counter "18" left of the shutter (Once); QR button top-right.

**R7 · Reveal** (v1.1): push at 10:00 "Your roll from last night is ready." → sheet **"Maya's NYE · 86 digis developed"** + **"Hold to develop"** (fills while held, haptic tick every 10%) → one-by-one Keep/Skip with Undo → recap strip + Share.

**G1 · Gallery**: grouped by night; segments **Digis · Strips · Rolls**; empty state from 2.12.

**ST1 · Settings**: as in 2.13.

---

## What this means for Digi

1. **Build the camera home exactly in the standard layout this week** (shutter centre, last photo left, flip right, `.5 · 1×` pill, PHOTO · STRIP text modes). Add only two Digi-specific things: the live orange stamp in the preview and the look line above the shutter. Estimated effort: the biggest single screen; 2–3 days with Expo Camera (E, med).
2. **Write a name + one sentence for every look before launch.** Example set: "Flash 2003 · Hard flash, warm skin, orange stamp." "Disposable · Soft focus, green shadows, a little blur." "Cybershot · Cool, sharp, blown-out highlights." Put the sentence in the look line, the look sheet and the App Store screenshots.
3. **Make every look thumbnail a real photo made with that look.** Shoot 10–15 sample party photos (with people's written OK) and run every look on them. No icons, no gradients.
4. **Ship the AI waiting screen with the blurred photo, three stage texts, elapsed time and "usually about 20 s".** No countdown, no fake percentage. Add "You can leave, we'll ping you" at 30 s and use that moment for the first notification ask.
5. **Add hold-to-compare on every AI result,** plus a visible "Before" chip. It costs half a day and it is the moment people screenshot.
6. **Ship the custom share row (IG Story · Snap · TikTok · Messages · Save · More)** and make the look travel with the share: a small "Flash 2003 · digi.pink" sticker on Story shares, linking to `digi.pink/l/flash-2003`, which opens the App Store or the app with that look selected.
7. **A/B test the brand inside the stamp vs a corner watermark.** Variant A: stamp `'26 12 31` + small "digi.pink" in the corner. Variant B: one stamp line `DIGI.PINK '26 12 31` (Once style). Measure shares that keep the mark and installs from `digi.pink` links. Run it during the first 7 days so Christmas parties use the winner.
8. **Keep the editor to four controls in v1:** stamp on/off, stamp style, frame colour, caption, plus the strip layouts from 1998 Cam (Classic Strip · 2×2 · Filmstrip · Duo) and five frame colours.
9. **Write the first-AI-upload consent in three short lines** (section 5, A0) and keep the per-photo "everyone in this photo said yes" check from chapter 06.
10. **Put stamp settings at the top of Settings,** before account rows (Huji did this for a reason: the stamp is the product). Include "Save original too".
11. **Use the empty-state lines from 2.12:** "No digis yet. Tonight's a good night for one." and, for rolls, "Just you so far. Parties need people."
12. **If Rolls make it before NYE (v1.1), copy three things only:** Lapse's "Develop roll in" wheel with a "Tomorrow 10:00" default, Once's header (name · time left · shots left), and Lapse's "Hold to develop" reveal. Leave the widget and Live Activity for January unless Expo's own `expo-widgets` (stable since SDK 56) works on the first try.
13. **Never use:** countdowns that can go up, iOS-looking custom alerts, "Sale" pills or strike-through prices without a real old price, hidden close buttons.
14. **Position against Instagram in the share flow and App Store copy:** IG can restyle and develop a Polaroid for free; it cannot give you a flash digicam look with a burned-in stamp, a 4-shot booth strip, or one shared roll for the whole party that develops in the morning. Say those three things, in that order.

---

## Sources

**Mobbin (all opened and read at full size on Nov 17, 2026)**
- Snapchat: [Uploading a snap](https://mobbin.com/flows/a24deea6-578d-490c-bc4f-e45b57546cf2) · [Sending a snap](https://mobbin.com/flows/ae530a11-91c2-4df6-b299-f13150bfc4bf) · [Story duration wheel](https://mobbin.com/screens/c70099b3-b192-472c-b33e-6dfc9fd6df4e) · [Lens chip on a snap](https://mobbin.com/screens/3c3b00ba-cd94-4a38-9865-60aaaff0f6c2) · [Sent! share banner](https://mobbin.com/screens/4fdf3d06-506f-43ae-8ded-8a5f40d07f74)
- Instagram: [Creating a story](https://mobbin.com/flows/c9f9a026-1819-4700-ad04-4f8c20988095) · [Taking a picture](https://mobbin.com/flows/fc566c31-9dfc-4ef8-9bbb-8412aa7352ba) · [Story editor with Restyle](https://mobbin.com/screens/d0e6a26b-9c4e-4541-82f1-5f4c3635e50d) · [Effect grid](https://mobbin.com/screens/4db1efcc-3d98-42a6-a961-d5a5a548bdd0) · [New reel with "Add AI Label"](https://mobbin.com/screens/fbdea489-9a1d-4564-831a-2e5ddbf8c1cd)
- BeReal: [Publishing a picture](https://mobbin.com/flows/8f1e0ec2-bd9f-4fd5-bbf5-056fc6dcdaec) · [Memories](https://mobbin.com/flows/bae72edb-5828-4283-a8da-f9f35afa5588) · [Calendar information](https://mobbin.com/flows/980bf26b-e068-45a2-ad7a-d44d99fd7aee) · [Widgets](https://mobbin.com/flows/f0b862f9-6eeb-4eb1-83d2-11ed038073da)
- Locket: [Sending an image](https://mobbin.com/flows/e61e87a5-9382-41e6-b8b8-ba373848f763) · [Widget tutorial](https://mobbin.com/flows/29465928-82fe-42e1-a44a-f47a006cc3b1) · [Updating a widget frame](https://mobbin.com/flows/fbeab1f5-8e9f-4724-b9b5-6f85652ac8c9) · [Widgets](https://mobbin.com/flows/5e4b6ec6-a0a1-4e59-b0f5-4ba8af97ff86) · [Onboarding](https://mobbin.com/flows/34fc1d2c-eefd-4f6d-ba82-53df1a21ba09)
- Lapse: [Developing snaps](https://mobbin.com/flows/62c2320a-80ba-4c1e-8458-1e04d3f41f92) · [Creating a camera roll](https://mobbin.com/flows/092746dd-dba6-4a89-af7e-9f2f756709bc) · [Camera roll tutorial](https://mobbin.com/flows/4505017e-7a4a-4510-99da-1a24e69d3b8c) · [Invite friends to roll](https://mobbin.com/flows/8f392a85-f358-4366-98e1-a4126bf2223b) · [Sending an Instant](https://mobbin.com/flows/5f433db5-8dac-42e7-be95-d8ac2f7f0a60) · [Share profile](https://mobbin.com/flows/f2e4ee07-9e57-4fcf-8f3e-eaecd1ffba2e)
- Once: [Invite guests](https://mobbin.com/flows/9b83eb76-5573-4575-987f-29a073df984a) · [Photo viewer with stamp](https://mobbin.com/screens/8038e800-a56e-4bf6-942b-80964fa1d027) · [Event camera](https://mobbin.com/screens/c7c91e8b-25d8-453c-9ce3-1f579bff80c6) · [Live Activity](https://mobbin.com/screens/92eef9f6-ebe1-4195-8ebf-c06ebfe56384) · [Empty film](https://mobbin.com/screens/6d614c9a-4fbb-4124-88bf-8c8d52d0adca)
- Halide Mark III: [Camera](https://mobbin.com/screens/fc1c3b46-6c85-4d43-90b7-9143af929d0b) · [Look picker](https://mobbin.com/screens/cddd2952-f7f4-4de5-b5ea-1e73aedfde14) · [Quick edit](https://mobbin.com/screens/d6030ecf-e191-489a-903b-8ab937087023) · [Timer](https://mobbin.com/screens/f4f601dd-9a6d-4c0e-83e8-abeaec866411)
- VSCO: [Applying a preset](https://mobbin.com/flows/eb662391-0dc2-4fb2-be6c-ceeb814c534a) · [Effect detail](https://mobbin.com/flows/b2296a38-6c1c-43f5-82d8-82d999f143d4) · [Sharing a recipe](https://mobbin.com/flows/60423fbe-8b3a-46ef-9d2d-8b9a91544029) · [Camera](https://mobbin.com/screens/81dfb4d6-9b83-44a0-b081-97d36a08c098)
- Lensa AI: [Generating magic avatars](https://mobbin.com/flows/e155bc11-e270-4c5a-b998-88a36d37da49) · [View magic avatar pack](https://mobbin.com/flows/f61b5e15-ec32-406a-ac99-90f91662ae90)
- CapCut: [Editing a photo](https://mobbin.com/flows/86f80255-ca48-427f-b193-bc0c5c2a6c26) · [Auto styles](https://mobbin.com/screens/8212d5d8-0f0c-46d4-aff1-25367ce3bc55)
- Others: [Photoroom before/after](https://mobbin.com/screens/581c0f2a-743c-4464-bb1a-c5ac3c2c2625) · [Depop AI relight](https://mobbin.com/screens/855df8ee-56dd-4d89-a396-d4a8c6f713e7) · [(Not Boring) Camera styles](https://mobbin.com/screens/48384051-5018-4177-8070-36ca4de38ee9) · [Meta AI 51%](https://mobbin.com/screens/ec848afc-743d-4488-8937-7a8b74a51144) · [Brainly stages](https://mobbin.com/screens/7680e340-23ff-4307-8f94-1e06dc92b599) · [TikTok Tako](https://mobbin.com/screens/a8071f22-df16-4c2f-88e3-4f372b430105) · [Starling](https://mobbin.com/screens/89142ff2-1535-4f98-a8b5-af005419b63f) · [Genie](https://mobbin.com/screens/1bcdb242-b524-4cb9-8234-6954e7c5dba5) · [Rodeo](https://mobbin.com/screens/5d5570a5-7292-4aec-9edd-fb1c9acf5dad) · [Google Photos album QR](https://mobbin.com/flows/447fab43-da8f-42d3-8eb9-5fd4fb26f3af) · [Canva share](https://mobbin.com/flows/1bd7213f-2e24-4327-8a8a-21fa4ee59ac8) · [Canva download](https://mobbin.com/flows/eb8ad360-a0d2-4faf-aff7-edb5c9bbd6e0) · [Ahead manage subscription](https://mobbin.com/screens/f22a1c1c-fda3-4038-b0d1-3a12a3ec8332) · [Fixtured](https://mobbin.com/screens/4408d4e3-e89f-46da-9dc3-a21f719b367a) · [Stardust](https://mobbin.com/screens/8b4c860e-d94d-4f5a-8c80-018317256be3) · [Tiimo](https://mobbin.com/screens/a70332c5-eb5a-4f01-8e14-1348848f6aae) · [Future Pro timer](https://mobbin.com/screens/7f1ecd07-20f7-4a90-b8a8-d13577ba6cad) · [Vestiaire shot slots](https://mobbin.com/screens/9c57fd7f-3bc3-4cf5-8208-23a9118b1c5e) · [yope widget](https://mobbin.com/screens/52762633-a84d-4158-a28a-588ae9c4f61f) · [WhatsApp camera modes](https://mobbin.com/screens/610996cb-cdae-42cb-b54f-b000c7465960) · [Mindtrip empty state](https://mobbin.com/screens/c871410a-c688-4ef5-a035-0b5f76554837)

**App Store (iTunes Search / Lookup API, read Nov 17, 2026)**
- Search: `https://itunes.apple.com/search?term=<app>&country=us&entity=software&limit=3` for BeReal, Snapchat, Locket, Dazz Cam, Huji Cam, 1998 Cam, Dispo, Lapse, Edits, Instagram, CapCut, Halide, Remini.
- Lookup: `https://itunes.apple.com/lookup?id=1436732536,588013838,1500855883,6738967378&country=us` (Lensa, VSCO, CapCut, Edits).
- Screenshots (V-AS) from the `screenshotUrls` field for Dazz Cam (id 1422471180), Huji Cam (781383622), 1998 Cam (1450480287), Remini (1470373330), Edits (6738967378).

**Press (C, not checked at Meta's own pages)**
- Instagram Restyle launch, Oct 23, 2025: [9to5Mac](https://9to5mac.com/2025/10/23/instagram-stories-now-support-ai-powered-edits-with-the-new-restyle-tool/), [Engadget](https://www.engadget.com/social-media/instagram-stories-is-getting-new-ai-powered-editing-tools-175500693.html), [PhoneArena](https://www.phonearena.com/news/your-instagram-stories-just-got-restyled-meta-ai-now-edits-them-for-you_id175162)
- Instagram Frames sticker ("shake to reveal" Polaroid with date), April 2024: [Social Media Today](https://www.socialmediatoday.com/news/instagram-adds-new-interactive-polaroid-frame-for-coachella-2024/713279/), [Android Central](https://www.androidcentral.com/apps-software/instagram-le-sserafim-stories-feature-debut)

**Prior chapters used:** `digi-deep-2026-11/06-ui-flows.md`; `digi-bible-2026-11/07-paywalls-mobbin-photo.md`; `digi-bible-2026-11/09-onboarding-mobbin-photo.md`.

---

## Fact-check (2026-11-16)

Adversarial re-check on Nov 17, 2026. This chapter is mostly screen descriptions from Mobbin [V-M], which can't be re-checked without the downloads. I re-checked the 11 facts that feed decisions.

**Checked and confirmed (no change)**
1. Huji Cam last update **Dec 11, 2024**, ~12,000 ratings, 4.22★ (iTunes Search API, 12,004 today). Confirmed: Huji is a stale benchmark.
2. Dazz Cam updated **Nov 9, 2026**, ~118,200 ratings, 4.75★. Confirmed.
3. 1998 Cam 40,452 ratings, 4.80★, updated Oct 24, 2026. Confirmed.
4. Instagram 29.7M ratings, 4.69★, updated Nov 16, 2026. Confirmed.
5. CapCut 1.13M · 4.61; Edits 105K · 4.79; Remini 360K · 4.61; Lensa 418K · 4.70. Confirmed (counts drift by a few hundred per day).
6. Snapchat 6.1M · 4.51, Locket 593K · 4.76, BeReal 1.16M · 4.77, Halide 13.7K · 4.45, VSCO 278.6K · 4.69 (cross-checked in chapter 09's pull today). Confirmed.
7. Instagram **Restyle** (Meta AI edits in Stories) launched **Oct 23, 2025**. Confirmed by 9to5Mac, Engadget, TechCrunch and others. Restyled looks can also be saved as a sticker others can reuse, which is one more reason not to compete on "AI restyle".
8. Instagram **Frames** sticker (Polaroid with date and time, "Shake to reveal") rolled out from **April 15, 2024**, around Coachella, US first. Confirmed (Social Media Today, Android Central).
9. Lensa pack price "$8.98 → $4.48" is SGD on Mobbin, as the chapter says; not a US price. No change.
10. Apple HIG pre-alert and App Review rules referenced from chapters 09/10. Confirmed there.

**Changed**
1. Section 2.10, the pattern table (row 13) and recommendation 12: "Expo can do Live Activities only through a native module" was outdated. Expo's own `expo-widgets` (alpha March 2026, stable since SDK 56, June 2026) supports iOS widgets and Live Activities, including push updates, in a development build.
2. Frames launch date made precise (April 15, 2024).

**Could not verify**
- All screen copy, element order and Mobbin capture dates [V-M] (e.g. Lensa's 13 → 18 → 15 min countdown, Once's "ONCE | JUL 30, 2026" stamp, Lapse's "Hold to view snaps"). These rest on the author's contact sheets.
- The claim that a brand inside the stamp is cropped less often than a corner watermark is an estimate (E). No published test found.
