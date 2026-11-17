# 24 · The Digi UI plan: flow map, screen-by-screen critique, missing screens, visual system

**Date of research:** Nov 17, 2026. **Track:** turn the paywall, onboarding, UI-pattern, copy and review chapters into one design plan for the next design round.
**Inputs read in full or by section:** `bible/07`, `08`, `09`, `10`, `11`, `18`, `19`, the prior `digi-deep/06-ui-flows.md`, the pricing chapter `bible/06` (for allowances), and the **current design**: 18 HTML mockups (`digi-ui/project/*.dc.html`, text and CSS extracted) and their 18 rendered PNGs, plus the owner's two comparison renders (`fixes.png`, `restored.png`).
**New work in this chapter:** WCAG contrast measured on every colour pair the mockups use; font sizes read from the mockup CSS; 3 new Mobbin searches (guest join, AI moderation errors, capture countdowns); Apple's App Clip page and App Review Guidelines 1.2 and 5.1.1(v) re-read today; Expo's Liquid Glass module checked.

**Labels:** **V** = I checked it today in a primary source (Apple page, Mobbin screen, the mockup file). **V-M** = Mobbin screen I opened. **C** = a claim from a vendor or a secondary source. **E** = my estimate or design judgement, with confidence high / med / low. Scores out of 10 are my judgement (E).

---

## Key takeaways

1. **The current design is strong on look and weak on order.** The dark background, pink serif italics, the pink digicam body and the text camera tabs give Digi a face no competitor has. But the flow runs **11 screens before the paywall and never lets the user take a free photo first** (Welcome → Age → Vibe → Pick → Watch → Permission → Add photo → Consent → Developing → Notify → Result → Paywall). Every research chapter says: free shot first, AI wow second, price third [V, bible 09, 10].
2. **Recommended order: 4 setup taps to the first free digi, then the AI re-light on that same photo, then the paywall.** Welcome → Pick your camera (with a demo shutter) → Occasion → How did you find us → Camera card → **first real shot** → "✦ Re-light it with AI (free)" → Age (only now) → Consent → Developing → Result → Paywall once. That puts the user's own photo in the paywall hero, which is the pattern in 19 of 23 photo-app paywalls [V-M, bible 07].
3. **The paywall mockup would likely be rejected as drawn.** It makes **"$0.77" the biggest price (16 px bold) and "$39.99/year" a 13 px grey line** [V, Paywall.dc.html]. Apple wants the billed amount to be the most prominent price [C, Apple rejection quoted in bible 08]. It also shows "SAVE 89%", "40 AI digis every week" (the pricing chapter changed this to 60 a month on yearly and 30 a week on weekly to pass the contest's no-loss rule) and "Host your own roll" as a paid perk (rolls up to 8 friends are free). Fix all four before anything else.
4. **Three onboarding screens break Apple or FTC rules as drawn:** the Age wheel opens on a passing year (April 2002) and says "18+" before entry (not neutral); the Permission card asks for Camera and Photos together with radio circles (HIG wants one button, and Photos should be add-only at first save); the Consent checkbox is shown pre-ticked and doesn't name the AI partner (guideline 5.1.2(i)) [V, mockups; HIG and guidelines quoted in bible 09, 18].
5. **The camera screen is the best screen and needs four things:** a flip-camera button (front camera is a top request in reviews [V, bible 19]), a visible digis counter, a "Just me / Sara's roll" state for the top pill, and a look swatch instead of the unclear venn icon. Keep the text tabs the owner liked; add **✦ AI** as the last tab instead of a bubble row.
6. **"PRO" badges in the Looks sheet are the wrong label.** AI looks are paid with digis, which a non-subscriber can buy in a Party Pack. Use **"✦ 1"** on AI looks, keep the owner's preferred "old" sheet layout and chips.
7. **About 25 screens are missing**, and 6 of them matter for the contest build: Party Pack sheet, Out of digis, Trial started + reminder, Settings with the Plus hub and Restore, the guest join page for a friend who opens a roll link, and the AI-failed / moderation-blocked states. Two are now hard Apple requirements: in-app account deletion (5.1.1(v)) once Sign in with Apple exists, and report / block for roll photos (1.2, user-generated content) [V, guidelines read Nov 17, 2026].
8. **Colour is mostly fine; three pairs fail.** Dark text on pink buttons (#1A0010 on #FF4FA3) is **6.56:1**, good. But white on pink is 3.04:1, grey #55555F on the background is 2.67:1, and pink #FF4FA3 on the pink camera body is 1.86:1 [V, WCAG formula]. Keep dark labels on pink buttons, ban the two weakest greys for text, and use a deep pink for anything written on the body.
9. **One word, one meaning.** Right now "digi" means a photo, an AI credit, and the AI result ("24 digis · 6 friends" on the roll; "2 free left" on the result). That invites "did it charge me 24?" moments in the category where billing confusion averages 1.39★ [V, bible 19]. Use **"shots"** for roll and gallery counts and keep **"digis"** for AI.
10. **Anti-generic rule for the next round:** every screen should hold a real photo or a physical object (the camera body, a paper strip, a film canister, a lock-screen mock). The two screens that look most "AI-made" today are Permission and Add Photo: stacked rounded cards with icon squares. Rebuild them around the camera body.

---

## 0. What I corrected from the prior research and the current mockups

| # | Prior claim or current mockup | Correction | Evidence |
|---|---|---|---|
| 1 | Paywall mockup: "$0.77 / week" big (16 px bold), "$39.99/year" small (13 px) | Flip it. **"$39.99 / year" is the largest price on the screen**; "$0.77 a week" small and grey under it | Paywall.dc.html CSS [V]; Apple rejection wording "must be displayed in a subordinate position and size to the total billed amount" [C, bible 08] |
| 2 | Paywall mockup and `bible/07` P1: "40 AI digis every week" | **Yearly: 60 AI digis every month. Weekly: 30 AI digis every week.** 40/week on yearly could cost $70.72 of AI against $27.99 net and break the contest's selling-at-a-loss rule | `bible/06` §0 #5 and §4 [V maths there] |
| 3 | Paywall mockup: badge "BEST VALUE · SAVE 89%" | "Best value" only. 89% is true against 52 weeks of weekly billing, which almost no one pays | `bible/07` §0 #6, `bible/18` §5.2 |
| 4 | Paywall mockup: "No watermark. Host your own roll." as Plus perks | Rolls up to 8 friends are free. Write **"No watermark · Rolls up to 30 friends"** | `bible/06` §4.8 |
| 5 | Paywall mockup timeline "Today / Day 2 / Day 3" | Real dates computed on the device: "Today · Nov 26 · Nov 27" | Strava, Headspace pattern [V-M, bible 08] |
| 6 | Looks sheet (the version the owner liked) uses **PRO** badges; `bible/19` #3 says "lock and Pro tag" | Use **"✦ 1"** (pink chip). AI looks are bought with digis, including from packs, so "PRO" tells a pack buyer they can't use them. ✦ is reserved for AI in the voice guide | `bible/18` §7 glossary; `bible/06` product list |
| 7 | Consent mockup shows the box **ticked**; line doesn't name the AI partner | Box **unticked by default**, button disabled until ticked; name the partner and the deletion time | Guideline 5.1.2(i), Oct 16, 2026 version [V, quoted in bible 18]; FTC neutral-entry logic [V, bible 09] |
| 8 | Age mockup: wheel opens on **April 2002**, sub says "Digi is for 18+" before entry, shown at launch | Blank month/year entry, no 18+ hint before entry, asked only before the first AI look or roll; read Apple's Declared Age Range first on iOS 26+ | FTC COPPA FAQ D.7, H.3 [V, bible 09]; Apple Developer News Dec 23, 2025 [V, bible 09] |
| 9 | Permission mockup: Camera **and** Photos rows with radio circles, "'Limited' is fine" | Camera only, one row, one "Continue". Photos is add-only at first save, with no pre-screen; "Limited" only exists for read access | HIG Privacy pre-alert rule [V, bible 09]; App Review 5.1.1(iii) |
| 10 | `bible/09` keeps a one-button camera card; `bible/10` fires the system alert with no card | **Keep the card** (one row, one "Continue"). It carries the privacy line "Free looks run on your phone", which a purpose string can't hold for long, and it is HIG-compliant. It costs one tap | E, med |
| 11 | Notify mockup: standalone primer with "Turn on / Not now", and a promo example ("New drop: NYE Glitter") | No standalone primer in onboarding. Ask (a) with a "Ping me when it's ready" toggle on Developing, (b) "Turn on the reminder" after a trial starts, (c) with the lock-screen mock at roll create/join. Never show a promo push as an example in the main ask | Guideline 4.5.4 [V, bible 18]; `bible/08` D2; `bible/10` A1 |
| 12 | `bible/11` §5: look bubbles to the right of the shutter, modes PHOTO · STRIP, tabs Free · AI · Christmas · NYE | The owner **rejected a bubble row** and **liked** the text tabs Y2K · FILM · DIGICAM · STRIP · XMAS. Keep his tabs; each tab is a "camera". Add **✦ AI** as the last tab, which opens the AI section of the Looks sheet | Owner feedback (task brief) |
| 13 | Develop time: 9:00 (bible 10, 19, 23, Roll mockup) vs 10:00 (bible 09, 11, 18) | Pick one default: **Tomorrow, 10:00 AM**, editable (9 AM · 10 AM · noon · now). A party that ends at 2 AM makes 9 AM early. Then fix all copy to match | E, low-med (no data either way) |
| 14 | "digi" used for photos, AI credits and AI results in the same screens | "shots" for roll and gallery counts; "digis" only for AI ("2 free digis left") | Billing-confusion reviews avg 1.39★ [V, bible 19]; E, med |
| 15 | Result mockup labels the AI output "DIGICAM FLASH", the same name as a free look | Rename the AI look: **"Flash Re-light ✦"**. Free look stays "Digicam" | Mockups Result, Looks, Watch [V]; "say AI every time" [V, bible 18] |
| 16 | Booth mockup frame "Polaroid" | Trademark, on the banned list. Use **"Instant"** | `bible/18` §9 |
| 17 | Welcome strip shows "11.17.26", camera shows "11 17 '26" | One stamp format everywhere: `11 17 '26` | `bible/18` §0 #6 |
| 18 | Prior chapters: App Clip limit "15 MB (iOS 16+) or 100 MB digital-only" | Apple's page today also lists a **25 MB** row ("iOS 27.3 and later"). More important for design: **App Clips can't use PhotoKit** (no saving to the camera roll) and **can't do background networking**. A guest App Clip must upload while open and must say "Get Digi to keep your copies" | Apple, "Choosing the right functionality for your App Clip", read Nov 17, 2026 [V] |

---

## 1. Method in brief

- I read every mockup's text and CSS and listed each colour, size and string. Contrast is the WCAG 2.x relative-luminance formula, computed in Python (script in `scratchpad/bible/contrast.py`).
- For each screen I checked the research verdicts in chapters 07–11, 18 and 19 against what is drawn, and scored it now and after the fixes.
- New Mobbin evidence (opened Nov 17): Once "Joining a film", Partiful "Photo album", Apple Photos shared album, five AI-moderation and error screens, five capture-countdown screens.
- Limits: Mobbin has no Huji, Dazz or Pecra screens, and no published A/B data comes from a party camera. Every conversion number below is direction, not a forecast for Digi.

---

## 2. The flow map

### 2.1 Recommended order (v1, contest build)

```
NEW USER (TikTok / IG / App Store)
O1 Welcome ─► O2 Pick your camera (tap the demo shutter) ─► O3 Occasion (1 tap, auto-advance)
   ─► O4 How did you find Digi? (1 tap, Skip) ─► O5 Camera card (1 row, Continue) ─► iOS camera alert
   ─► C1 CAMERA ─► first shot develops on device (3 s) ─► C2 "Your first digi" sheet
         ├─ Save ─► iOS add-only Photos alert (no pre-screen)
         ├─ Share ─► S1 share row
         └─ ✦ Re-light it with AI · free ─► A1 Age (only if Apple gives no age range)
               ─► A2 Consent (once per photo) ─► A3 Developing (+ "Ping me" toggle)
               ─► A4 Result (before/after) ─► on Save, Share or "Try another look":
               ─► P1 Paywall (once, ✕ at 0 s) ─► P5 Trial started ("Turn on the reminder")
               ─► back to C1 with "2 free digis left" under the shutter

STRIP:  C1 tab STRIP ─► 3-2-1 countdown × 4 (free, on device) ─► B1 Strip builder ─► S1 Share
        A4 "Make it a strip · ✦ 2" ─► AI group strip ─► B1 ─► S1
ROLL (host): top pill "Just me ⌄" ─► R1 Start a roll (occasion, name, develop time, shots each)
        ─► R2 Sign in with Apple ("so your roll is still here tomorrow") ─► R3 Invite (QR + link)
        ─► R4 Ping ask (lock-screen mock) ─► C1 in roll mode ─► next morning R6 Hold to develop
        ─► R7 Keep / Skip ─► G1 Roll gallery ─► recap strip ─► S1
ROLL (guest with a link): web page digi.pink/r/k7Q ─► J1 join card ─► first name ─► camera
        (app installed: universal link skips onboarding ─► J1 ─► C1 in roll mode)
```

### 2.2 Why this order (evidence)

| Step | Why here | Evidence |
|---|---|---|
| Welcome first, no sign-in | Apple: no login unless the app is account-based; only rolls are | Guideline 5.1.1(v) [V]; Halide, Kino, Not Boring never ask [V-M, bible 09] |
| Camera picker with a demo shutter | The fastest "aha" in the category: Lapse opens on a shutter, Halide on "Pick Your Look" | Lapse flow 62c2320a, Halide b37e3f2d [V-M] |
| One occasion question | Questions only work when the answer changes what you see. Occasion sets the stamp, the look order and the roll template | Cal AI, Rise, Flo pattern; Superwall's own warning not to add screens mechanically [V, bible 10] |
| Attribution question | The contest scores profit after ad spend; one tap per install is the cheapest attribution | Cal AI, Speak, Photoroom ask it [V, bible 10] |
| Camera card → alert | Camera is the core function, so asking on first open is allowed; a one-button card is HIG-compliant | HIG Privacy [V, bible 09] |
| Free shot before AI | Free and generous camera apps hold 4.3–4.5★; the first develop is the celebration | Dazz, Huji reviews [V, bible 19]; Lapse "You took your first snap" [V-M] |
| AI on the photo they just took | Removes the Add Photo step and puts **their** photo in the paywall hero | 19/23 paywalls show the output [V-M, bible 07] |
| Age and consent right before the upload | 18+ exists because of AI on faces; the free camera sends nothing | Bible 09 correction #3, bible 10 correction #4 |
| Paywall after the first AI result, once | Onboarding paywalls convert 0.85% of views vs 0.23% later; value first | Adapty 2026 [C, bible 08]; Photoroom order [V-M] |
| Notification asks in context | Opt-in is about a coin flip on iOS (~45–55%); context is the only lever with steady support | Airship and others [C, bible 10] |

**Tap budget [E, med]:** 6 taps to the first real digi (O1, O2 shutter + "Use this camera", O3, O4, Continue, iOS Allow, shutter ≈ 7 with the alert), about 25–35 s. +4 taps to the first AI result (✦, age if needed, tick, Make it). The current mockup flow needs about 14 taps to the first AI result and never shows a free shot.

### 2.3 The one onboarding test worth running

Camera-first (above) vs the current AI-first order (Welcome → Pick → Watch → Add photo → Consent → Developing → Result → Paywall). Run it in RevenueCat Experiments from launch to Dec 5, judge on **net revenue per install after refunds** 3 weeks later (bible 08 rule), keep the winner through NYE. Confidence that camera-first wins: med (E). The AI-first variant reuses five screens you already drew, so it is cheap to keep.

---

## 3. Screen-by-screen critique of the 18 current screens

Each block: what works · what to change · exact new copy · score now → target. "Keep" means the owner liked it; do not redesign it.

### 3.1 Main (Welcome) — 8 → 9.5
**Works:** pixel "DIGI.PINK" wordmark, three tilted strips with real-looking party photos, serif headline with the pink italic word, dark text on the pink CTA (6.56:1), legal line present. This is the screen people will recognise from TikTok. Keep.
**Change:**
- CTA "Let's go" says nothing. Name the action.
- Add a quiet "Restore" or "I've used Digi before" top-right (reviewers test restore [E, high]).
- Strip date "11.17.26" → `11 17 '26`.
- The strip photos must be your own photos of adults who agreed in writing, or clearly fictional AI people, labelled in your files. No real users before launch (guideline 2.3.1).
- Optional motion: each strip "flashes" in (80 ms white) one after another, off under Reduce Motion.
**Copy:**
- H1: **Your party's** *photobooth* (keep)
- Sub: **Flash, grain, the orange date. Free. AI strips of the whole group when you want them.**
- CTA: **Start shooting**
- Top-right link: **Restore**
- Footer: By continuing you agree to our Terms and Privacy Policy. (keep)

### 3.2 Age — 4 → 8 (moved, not deleted)
**Works:** big serif question, "We don't show this to anyone." is the right reassurance.
**Change:**
- Move it out of launch. Show it only when someone taps their first ✦ AI look or starts or joins a roll.
- On iOS 26+, ask Apple's Declared Age Range API first; if it returns 18+, skip the screen.
- The wheel must start blank ("Month", "Year"), not on April 2002. Remove "Digi is for 18+" from before the entry.
- The button reads the age back: "I'm 24" (BeReal pattern [V-M, bible 09]).
- Under 18: a calm block, saved in the Keychain so a reinstall doesn't reset it.
**Copy:**
- H1: **Quick one: your** *birthday?*
- Sub: **We don't show this to anyone.**
- Button (disabled until both are set): **I'm {age}**
- Under-18 result: **AI looks and rolls are for 18+. Every free camera is still yours.** · [Back to the camera]

### 3.3 Vibe — 5 → 8 (becomes "Occasion")
**Works:** real photo tiles, pink selected ring, a count on the button. It looks like Digi.
**Change:**
- Multi-select of 6 "vibes" changes nothing the user sees. Make it **single-select occasion**, with a one-line reply that slides in, then auto-advance after 0.6 s (Flo / Ladder pattern [V, bible 10]).
- The answer must do three real things: set the look order in the camera tabs, set the stamp (NYE → `12 31 '26`), and preset the first roll template.
- Six tiles is fine; drop "Soft & cute" and "Paparazzi" (they are looks, not occasions).
- Keep "Skip".
**Copy:**
- H1: **What are you** *shooting?*
- Tiles: **Christmas party · NYE · Birthday · Night out · Friendsgiving · Just because**
- Replies (one line under the tile, pink): Christmas → **"Tree lights and hard flash, up first."** · NYE → **"We'll stamp it 12 31 at midnight."** · Birthday → **"Cake flash is up first."** · Just because → **"Digicam it is."**
- No Next button (tap advances). Top-right: **Skip**.

### 3.4 Pick your camera — 7 → 9
**Works:** the pink camera body around the sample photo (owner favourite), name in Silkscreen caps, one sentence about the look, "Switch any time."
**Change:**
- Merge in the shutter demo: the first state shows the **sample photo flat and dull** with a small label "A NORMAL PHONE PIC" and a shutter under the body: "Tap it." The tap fires the flash, a heavy haptic, and the photo re-renders as the selected camera with today's stamp. Then the camera chips appear.
- Three icon chips (camera / digicam / strip) are hard to tell apart. Use **4 named chips** with a number badge, as in Not Boring's colourways: `2005` Digicam · `400` Film · `Y2K` Glow · `4×` Strip. Each tap re-grades the same photo live.
- Label the default **"Start here"**, never "Most popular" (nothing is popular before launch, guideline 2.3.1 [V, bible 18]).
- Body label "digi.pink" is #A33A72 on the pink body: 3.78:1. Fine for a logo; keep it decorative.
**Copy:**
- Before the tap: label **A NORMAL PHONE PIC** · above shutter **Tap it.**
- After the tap: H1 **Pick your** *party camera* (keep) · sub **That's a digi. Every camera here is free.**
- Chip lines: **2005 Digicam** · Hard flash, bright faces, the orange date. / **Film 400** · Warm grain, like a disposable at 1 AM. / **Y2K Glow** · Pink bloom, low-res sparkle. / **Photo Strip** · 4 shots, 3-2-1, one strip.
- CTA: **Use this camera**

### 3.5 Watch (before/after demo) — 6 → merged (8 as the AI explainer)
**Works:** the drag divider, "BEFORE / DIGI" pills, and the honest caption "Sample photo of made-up people."
**Change:**
- In the recommended flow this screen leaves onboarding. Reuse it in two places: (1) the **first time someone taps ✦ AI** with no photo yet, as the explainer at the top of the AI section of the Looks sheet; (2) as screen 3 of the AI-first test variant (§2.3).
- "One normal group pic → digicam flash" mixes the free look with the AI look. Say what AI adds.
- Pill "DIGI" → **"AI ✦"** (say AI every time [V, bible 18]).
**Copy:**
- H1: **What AI** *adds*
- Sub: **A normal group pic → Flash Re-light ✦. AI re-lights the whole scene.**
- Caption: **Sample photo of made-up people. Drag to compare.** (keep)
- CTA: **Try it on my photo** · link **Not now**

### 3.6 Permission — 5 → 9
**Works:** the pink camera icon with focus brackets, the privacy line, a single Continue button.
**Change:**
- One row only: Camera. Remove Photos (it comes at first save, add-only).
- Remove the radio circles; they look like choices, and the HIG pre-alert screen may have only one action [V, bible 09].
- This screen looks the most generic of the set (a card with icon squares). Rebuild it around the camera body: the pink body with a closed lens cap, and Continue "opens" it.
**Copy:**
- H1: **One** *permission*
- Row: 📷 **Camera** · To shoot your digis.
- Line: **Digi doesn't upload your camera roll. Free looks run on your phone.**
- Button: **Continue**
- Purpose string: **Digi uses the camera to take your photos and strips.**
- Denied state (new, §4): **No camera? You can still play.** · Try every look on a photo you already have. · [Pick a photo] [Use a sample] · link **Turn on camera in Settings**

### 3.7 Add Photo — 6 → 8 (becomes the import sheet)
**Works:** three clear sources, the "1–6 people / faces visible / flash or good light / tiny faces far away" tips, which prevent the no-face and crowd errors before they happen.
**Change:**
- In the new flow the user already has a photo, so this becomes the **"Pick a photo"** sheet for imports and the camera-denied path, not an onboarding step.
- Stacked rounded cards with icon squares look generic. Show three real thumbnails instead: their last shot, the sample, a "Photos" tile.
- "Your first 3 AI digis are free" is good; keep it as a chip.
**Copy:**
- Title: **Pick a photo for AI ✦**
- Chip: **3 free AI digis**
- Rows: **Your last shot** · **Choose from Photos** (Only the one you pick leaves your phone.) · **Use the sample** (See it work first.)
- Tips (keep): Faces visible · 1–6 people · Flash or good light · ✕ Tiny faces far away

### 3.8 Consent — 6 → 9
**Works:** the headline "Everyone in this photo *okay* with it?" is human and clear; three short rules; "Make it ✦".
**Change:**
- Box unticked by default; "Make it ✦" disabled until it is ticked.
- Add the 5.1.2(i) line that names the AI partner and the deletion time. Fill it only with what the backend really does.
- Add "what to expect" and the free counter.
**Copy:**
- H1: **Everyone in this photo** *okay* **with it?** (keep)
- Checkbox (unticked): **Everyone in this photo said yes and is 18+.**
- Lines: **AI re-lights the whole scene. Faces can come out a bit different.** · **If it's off, one redo is free.** · **To make it, we send this one photo to our AI partner, {partner}. It's deleted from their servers and ours within {24 hours}. Not used to train AI.** · **Nothing explicit, no kids. It gets blocked anyway.**
- Button: **Make it ✦** · counter under it **Free digi 1 of 3** · link **How we handle your photo**

### 3.9 Developing — 7.5 → 9
**Works:** the pink camera body again, the scan line with a sharp half and a blurred half of **their** photo, named stages, elapsed time "0:11 · usually about 20 s" (no countdown, which is right: Lensa's went 13 → 18 → 15 min [V-M, bible 11]).
**Change:**
- "Re-lighting faces" puts the word "faces" next to change, the #1 AI fear. Say "scene".
- "Keep shooting. We'll tell you." promises a ping before notification permission exists. Replace with a toggle that fires the iOS alert when tapped.
- At 45 s: "Taking longer than usual." At 90 s: auto-refund and the failed state (§4).
- The green LED on the body pulses pink while a job runs; reuse that dot on the camera screen so people see a job is still developing.
**Copy:**
- H1: **Adding the** *flash* (keep)
- Line: **0:11 · usually about 20 s**
- Stages: **Photo sent** → **Re-lighting the scene** → **Grain and the date stamp**
- Row: 🔔 **Ping me when it's ready** [toggle]
- At 45 s: **Taking longer than usual. You can leave, we'll ping you.**
- Button: **Back to the camera**

### 3.10 Notify — 5 → 8 (moved to the roll)
**Works:** the lock-screen mock with real-looking banners is the strongest notification pitch pattern (Once, Lapse [V-M, bible 09]). "Never 'you haven't posted today.'" is a good, honest line.
**Change:**
- Remove it from onboarding. Use it at roll create and roll join, where the reason is concrete.
- Remove the "New drop · NYE Glitter" banner: promo pushes need their own opt-in (4.5.4), and they must not ride on the main ask.
- Main button "Continue" (bible 09 correction #2); "Not now" is allowed here because notifications are not on the HIG pre-alert list.
**Copy:**
- Banners: **Sara's birthday developed 📸** · "24 shots from last night. 6 are yours." / **Omar + 2 others joined** · "It develops for everyone at 10 AM."
- H1: **Want a ping when it** *develops?*
- Sub: **One ping at 10 AM, plus when friends join. Never "you haven't posted today."**
- Buttons: **Continue** · **Not now**

### 3.11 Result — 7 → 9
**Works:** big result, "2 free left" with ✦, "Faces can shift a little with AI. Redo free if they do." (honest, short), "Try another look" row with real thumbnails.
**Change:**
- Label the output as AI: chip **"Flash Re-light ✦"**, not "DIGICAM FLASH".
- Add hold-to-compare and a visible **"Before"** chip (CapCut, Photoroom [V-M, bible 11]). It is the moment people screenshot.
- Two buttons, clear costs: Share is the viral loop and the paywall trigger, so make it primary. "Make it a strip" shows its price (2 digis [V, bible 06]).
- In the look row, mark AI looks with "✦ 1"; free looks show nothing.
- Top bar: back + Save (keep the download icon), and change "Your digi" to "Your first digi ✦" the first time.
**Copy:**
- Title: **Your first digi ✦** · sub **2 free digis left**
- Under the image: **Faces can shift a little with AI.** **Redo free** **if they do.** (keep)
- Row label: **TRY ANOTHER LOOK**
- Buttons: **Share** (pink, primary) · **Make it a strip · ✦ 2** (dark)

### 3.12 Paywall — 5 → 9
**Works:** ✕ top-left visible at once, Restore top-right, the user's own before/after as the hero, two plan cards, a reminder timeline, the Party Pack as a link (not a third card), "Renews automatically. Cancel anytime in Settings."
**Change (all P0):**
1. **"$39.99 / year" is the largest price** (20 pt bold); "3 days free · $0.77 a week" 13 pt grey under it.
2. Remove "SAVE 89%". Badge: **Best value**.
3. Benefit row 1 follows the selected plan: 60 a month vs 30 a week.
4. "Host your own roll" → "Rolls up to 30 friends".
5. Timeline with real dates, shown only while Yearly is selected.
6. CTA names the action; the line under it names price and date.
7. Hero captions: "YOURS / DIGI" → "Before / AI ✦".
8. Sticky bottom block so the CTA and price line never scroll away on an iPhone SE.
**Copy (Variant A, launch → Dec 12; from bible 18 §8.2, with allowances fixed):**
- Hero caption: **That's yours. Plus keeps the flash going.**
- H1: **Keep the** *flash* **going**
- Rows: **60 AI digis every month** (yearly) / **30 AI digis every week** (weekly) · **Every look, plus new holiday drops** · **No watermark · Rolls up to 30 friends**
- Yearly card: **Yearly** · **$39.99 / year** · 3 days free · $0.77 a week · badge **Best value**
- Weekly card: **Weekly** · **$6.99 / week** · Cancel anytime
- Timeline: **Today** · Every AI look open. 10 digis to try. / **{Nov 26}** · We remind you. / **{Nov 27}** · $39.99 for the year, unless you cancel before.
- Above CTA: **No payment today**
- CTA: **Start my 3 free days** · under it **Then $39.99/year. You won't be charged until {Nov 27}. Cancel anytime in Settings.**
- Weekly CTA: **Get Weekly · $6.99** · under it **Renews weekly. Cancel anytime in Settings.**
- Link: **Just tonight? Party Pack · 25 AI digis · $5.99 →**
- Footer: **Restore · Terms · Privacy · Redeem code**
- From Dec 13 (Variant C, no trial): H1 **One price,** *every party* · CTA **Get Yearly · $39.99** · under it **Billed once a year. Cancel anytime in Settings.** Timeline hidden.
All prices come from RevenueCat Offerings at runtime, in local currency.

### 3.13 Camera — 7.5 → 9.5
**Works (keep):** dark background; the pink digicam body with lens, flash window and status LED; the LCD overlays inside the frame ("3.2M", battery, FLASH, `11 17 '26`) that make the preview feel like a real screen; the big 3:4 viewfinder; the text tabs; the "Tonight's roll" pill; the yellow flash button; the last-shot thumbnail with a count.
**Change:**
1. **Add flip camera.** Party photos are half selfies, and "front camera" is a top-14 request [V, bible 19]. Put it inside the body, top-right next to the "digi.pink" label (Locket puts its controls inside the frame [V-M, bible 11]), or right of the shutter, swapping the look button into the body.
2. **The top pill has two states.** No roll: **"Just me ⌄"** (opens "Start a roll"). In a roll: **"Sara's birthday · 18 left"** with the pink live dot. The top-left add-friend icon duplicates this; replace it with **Settings** (gear).
3. **Digis counter under the shutter**, Silkscreen 12 pt: **"✦ 2 free digis"** / **"✦ 43 left · refills Dec 1"** / **"0 digis · camera's still free"**.
4. **Right of the shutter: a look swatch** (a tiny thumbnail of the current look, Halide pattern [V-M]) instead of the venn icon. Tap = Looks sheet.
5. **Tabs:** keep Y2K · FILM · DIGICAM · STRIP · XMAS, add **✦ AI** at the end. Tabs reorder by the occasion answer (Christmas puts XMAS first). Tab text #9A9AA8 is 7.08:1, fine.
6. **Last-shot badge** means "AI jobs still developing" (Lapse's stack [V-M]), not roll size. Roll size lives in the pill.
7. **Zoom pill** `.5 · 1× · 2` stays inside the frame (Snapchat). Pinch zoom too.
8. **Small phones:** on an iPhone SE (667 pt tall) the body, tabs and shutter row don't all fit at this size [E, high from the 844 pt mockup]. Shrink the body padding, keep the viewfinder 3:4, and let the tabs overlap the body bottom.
9. **First-run coach line** above the tabs, once: **"Swipe for more cameras"**.
10. **Offline chip** inside the frame when there is no network: **"Offline · camera only"**.
**Copy:** pill **Just me ⌄** / **Sara's birthday · 18 left** · counter **✦ 2 free digis** · first shot toast **Your first digi 🎉**

### 3.14 Looks sheet — 7.5 → 9
**Works (keep):** the owner's preferred "old" sheet: serif "Looks" title, Party · Holiday · Classic · New chips, a 3-column grid of real results, pink selected ring, white "Use Digicam Flash" button.
**Change:**
- "PRO" → **"✦ 1"** chip on AI looks (see §0 #6). Free looks show nothing; "free" is the default, so it needs no badge.
- One plain line under the title (from the alternate version) so the ✦ is explained once.
- The AI section opens with the before/after strip from the Watch screen the first time.
- Long-press a look = detail sheet: name, one sentence, 3–6 example shots, cost.
- Add **Booth 4-cut** to the free side if it is the on-device strip; if it is the AI group strip, its chip says **"✦ 2"**.
**Copy:**
- Under the title: **Free looks run on your phone. ✦ AI looks use 1 digi.**
- Button: **Use {look name}**
- Detail (AI): **Flash Re-light ✦** · Hard flash on the whole scene, done by AI. · **Uses 1 digi · about 20 s** · [Try it]
- 0 digis left, tapping an AI look → the Out of digis sheet (§4), never a full-screen paywall.

### 3.15 Booth (strip builder) — 7 → 9
**Works:** tilted paper strip with a real shadow, serif caption on the frame ("girls night · 11.17.26"), frame picker, "Shoot again / Save strip".
**Change:**
- Rename frames: **4-cut** (the vertical Korean strip), **2×2**, **Instant** (not Polaroid), **Y2K**. Today "4-cut" shows a 2×2 grid, which is the wrong name.
- Add **frame colour** dots (paper, black, pink, red, silver), the one editor control people expect after layout (bible 11 recommends four controls max).
- One stamp per strip, on the bottom tab, never on faces; date format `11 17 '26`.
- Primary action: **Share strip** (it saves too). "Shoot again" stays secondary.
- If the strip is AI, the header says so: **"AI group strip ✦"**.
**Copy:** header **BOOTH MODE** · H1 **Your** *strip* **is ready** · labels **FRAME · COLOUR · CAPTION** · caption placeholder **girls night** · buttons **Shoot again** / **Share strip**

### 3.16 Story (share) — 7 → 9
**Works:** "Saved to Photos" confirmation, serif "Post it *tonight*", a ready 9:16 card in brand pink, a custom share row before "More" (the pattern in Canva, CapCut, Snapchat [V-M, bible 11]).
**Change:**
- Sticker "SHOT ON DIGI.PINK" → **`11 17 '26 · digi.pink`** (scored 9/10 in bible 18; the look is the brand). For AI images: **`AI look ✦ · digi.pink`**.
- Let people swipe 3 card templates (pink card, black card, full-bleed) — Lapse's share templates [V-M].
- Share row by storefront: US **IG Story · Snapchat · TikTok · Messages · More**; Egypt and Gulf swap Messages for **WhatsApp**.
- "Back to camera" → keep, but make it a text button so the share row is the visual focus.
**Copy:** pill **Saved to Photos** · H1 **Post it** *tonight* · toast after IG **Link copied. Paste it on the 🔗 sticker so friends can find the look.**

### 3.17 Roll (live roll) — 7 → 9
**Works:** blurred, locked cards on top (the "you can't see it yet" tension), "Tonight's *roll*", 24-cell shot counter, avatars, "Develops tomorrow, 9 AM · Everyone sees the roll at once", the invite link as the main button.
**Change:**
- Counter is **per person**: "6 of 24 shots" is yours; also show the roll total: "38 shots in the roll".
- Add the free limit line: **"5 of 8 friends · free"** (the Roll Pass appears only at the 9th).
- Add host controls row (host only): develop time, shots each, "guests can add camera-roll photos", "develop now" (free), end roll. Host controls are a repeat request [V, bible 19 #12].
- Privacy line (Google Photos shows this kind of line under its QR [V-M, bible 11]): **Everyone in the roll sees every photo at 10:00 AM.**
- Fix develop time to the chosen default (§0 #13).
- Invite button opens the Invite sheet (QR + link + Save QR + Print).
**Copy:** H1 **Tonight's** *roll* · sub **Sara's birthday · started 9:12 PM** · **6 of 24 shots · 38 in the roll** · **5 of 8 friends · free** · **Develops tomorrow, 10:00 AM** · **Everyone in the roll sees every photo then.** · button **Invite friends · digi.pink/r/k7Q**

### 3.18 Gallery (developed roll) — 6 → 9
**Works:** "Developed 9:00 AM" pill, serif "Sara's *birthday*", stats line, mixed grid with stamps, "Share the roll" and "Make a recap strip".
**Change:**
- Before this grid, add the **reveal**: "Hold to develop" (Lapse's Darkroom: a press-and-hold button that fills while held, then one-by-one Keep / Skip with Undo [V-M, flow 62c2320a]). The reveal is the morning's reason to open the app; jumping straight to a grid wastes it.
- "24 digis · 6 friends" → **"124 shots · 6 friends · last night"** (see §0 #14).
- Show who shot each photo in italic serif on the tile (Once [V-M]).
- Long-press a tile: Save · Share · **Report** · (host) **Remove from roll**. Required by guideline 1.2 [V].
- 3-column grid grouped by night for the personal gallery (bible 11); the 2-column masonry is fine for a single roll.
**Copy:** pill **Developed 10:00 AM** · stats **124 shots · 6 friends · last night** · buttons **Share the roll** / **Make a recap strip · ✦ 2**

### 3.19 Score summary

| Screen | Now | Target | Biggest single fix |
|---|---|---|---|
| Main | 8 | 9.5 | CTA "Start shooting" + Restore |
| Age | 4 | 8 | Neutral blank entry, moved to first AI |
| Vibe → Occasion | 5 | 8 | Single select that changes the camera |
| Pick | 7 | 9 | Demo shutter + 4 named chips |
| Watch | 6 | 8 (merged) | Becomes the AI explainer |
| Permission | 5 | 9 | Camera only, body metaphor |
| Add Photo | 6 | 8 | Import sheet with real thumbnails |
| Consent | 6 | 9 | Unticked + named AI partner |
| Developing | 7.5 | 9 | "Ping me" toggle, "scene" not "faces" |
| Notify | 5 | 8 | Move to roll, drop the promo banner |
| Result | 7 | 9 | "Flash Re-light ✦" label + Before chip |
| Paywall | 5 | 9 | $39.99 biggest, correct allowances |
| Camera | 7.5 | 9.5 | Flip camera + digis counter |
| Looks | 7.5 | 9 | "✦ 1" instead of PRO |
| Booth | 7 | 9 | Correct frame names + colour |
| Story | 7 | 9 | Stamp-style sticker, templates |
| Roll | 7 | 9 | Per-person counter, free limit, host row |
| Gallery | 6 | 9 | Hold-to-develop reveal + Report |
| **Average** | **6.3** | **8.8** | |

---

## 4. Missing screens

Priority: **P0** = needed for the first App Review or the first paying user. **P1** = contest build (before Dec 4, the first holiday-party weekend). **P2** = after Dec 16. Copy is from bible 18 unless marked new.

### 4.1 Money screens

| ID | Screen | Pri | Layout and copy |
|---|---|---|---|
| M1 | **Out of digis** (sheet) | P0 | Over the camera. H1 **You're out of free digis** · sub **The camera's still free.** · cards **Party Pack · 25 AI digis · $5.99 · They don't expire** (pre-selected) / **Big Night · 60 AI digis · $11.99** · CTA **Buy Party Pack · $5.99** · link **Party every weekend? Digi Plus: 60 digis a month →**. For a subscriber at 0: only packs, line **Your 60 refill on {Dec 1}.** Never a "buy Plus" screen for someone who pays (bible 06) |
| M2 | **Party Pack sheet** (from the paywall link) | P0 | H1 **Party** *tonight?* · the same two cards · small link **Why do AI looks cost digis?** → "Each AI digi runs on a large image model and costs us real money. Film looks run on your phone, so they stay free." (Lensa's "Why is it paid?" [V-M]) |
| M3 | **Trial started** | P0 | Flash-burst animation, success haptic. H1 **You're in. 3 free days start now.** · **We'll remind you on {Nov 26}, the day before you're charged.** · [Turn on the reminder] (fires the iOS alert) · Not now → chip **OK. We'll also show a banner in Digi on {Nov 26}.** · [Back to the party] |
| M4 | **Purchase success** (pack / Plus) | P0 | Pack: **+25 digis** · You have {27}. They don't expire. Plus: **You're in ✦** · Every AI look is open and the watermark's gone. One button: **Try an AI look** |
| M5 | **Purchase states** | P0 | Button spinner **Talking to Apple…** · failed **Payment didn't go through. You weren't charged.** [Try again] · pending **Waiting for approval. We'll add it as soon as it's approved.** · cancelled: silent return |
| M6 | **Trial reminder banner** (in-app, last day) | P0 | Top banner on the camera: **Your trial ends tomorrow. Digi Plus becomes $39.99/year on {Nov 27}.** [Keep Plus] [Manage] |
| M7 | **Locked AI look** (sheet over the live camera) | P1 | Look runs on their last photo with a "preview" mark. **This look is AI ✦** · Uses 1 digi. You have {0}. · [Get Party Pack · $5.99] · or Digi Plus · 3 days free, then $39.99/year |
| M8 | **Roll Pass** (9th friend joins) | P1 | **Bigger party?** · Roll Pass · $4.99 · one party · Up to 30 friends. Everyone gets an AI group strip. · [Get Roll Pass · $4.99] · Plus members: included |
| M9 | **Launch-week card** (next open after a close, Nov 24–Dec 1, once) | P1 | **Launch week** · Digi Plus Yearly: first year $29.99, then $39.99/year. Ends Mon, Dec 1. [Get it · $29.99] ✕. Never shown at the moment of closing (Apple scrutiny of instant abandon offers [C, bible 08]) |

### 4.2 Settings, account, subscription

**S0 Settings (P0)**, top to bottom (Huji puts the stamp first; Ahead and Fixtured show the plan plainly [V-M, bible 11]):
1. **Digi Plus card:** "Plus · Yearly · Free trial ends {Nov 27}, then $39.99/year" or "Free · 2 AI digis left" + [See Plus]. Row: **{43} digis left this month · refills {Dec 1}** · **Pack digis: {12} · never expire**.
2. **Camera:** Date stamp (On) · Stamp style (`11 17 '26` / `'26 11 17` / `NOV 17 '26`) · Show time (Off) · Any date… · digi.pink mark (Plus: Off allowed) · Save original too (Off) · Shutter sound (On) · Flash strength (Normal / Soft).
3. **Notifications:** **Your photos and rolls** (on after the iOS prompt) · **Looks and offers** (off; consent line "New seasonal looks and the odd deal. About once a week, max.").
4. **Purchases:** Restore purchases · Redeem code · Manage subscription (opens Apple's sheet) · Request a refund (Apple's flow).
5. **Account** (only if signed in): Sign in with Apple status · **Delete account** (required in-app by 5.1.1(v) once accounts exist [V]).
6. **Privacy:** What we upload (AI looks only) · Delete my uploads now.
7. Help · Rate Digi · Instagram · TikTok · Terms · Privacy · version.

**S1 Plus hub (P0):** "Digi Plus since {Nov 22}" · the digis counter · [Manage subscription] · "What you get" rows (Strava pattern [V-M, bible 08]).
**S2 Restore result (P0):** success toast **Purchases restored. {43} digis.** · none **Nothing to restore · No purchases found for this Apple Account.** [OK] [Contact us].
**S3 Delete account (P0 once accounts exist):** **Delete your Digi account?** · "Your rolls and AI uploads are deleted within 30 days. Photos already saved to your camera roll stay there. Your Apple subscription isn't cancelled by this: manage it in Settings." · [Delete account] (red #FF5A5F text, 6.48:1) · [Cancel]. (The 30 days is a placeholder: fill in what the backend does.)

### 4.3 Roll screens (host and guest)

| ID | Screen | Pri | Key content |
|---|---|---|---|
| R1 | **Start a roll** | P1 | "What's the party?" tiles (pre-picked from the occasion answer) · name with chips **Omar's Christmas · NYE at Sara's · Friday night** · **When does it develop?** default **Tomorrow, 10:00 AM** · **Shots each** 12 · 24 · 36 · line **Up to 8 friends free** |
| R2 | **Sign in to save your roll** | P1 | Sign in with Apple (primary), email link (secondary). **So your roll is still here tomorrow.** The only account ask in the app |
| R3 | **Invite** | P1 | QR with the occasion emoji in the centre, roll name, `digi.pink/r/k7Q`, [Share link] [Save QR] [Print]. Line only if true: **No app needed. Friends join from their browser.** (POV's 1★ "misleading no download" is the warning [V, bible 18]) |
| R4 | **Ping ask** | P1 | The Notify design (§3.10) |
| R5 | **Roll camera** | P1 | Camera with the pill "Sara's birthday · 18 left", body LED pink, header time "develops in 9h 12m" under the pill (Once header [V-M]) |
| R6 | **Hold to develop** | P1 | Push at 10:00 **Sara's birthday developed 📸**. Sheet: **124 shots developed** · big button **Hold to develop** that fills over 1.2 s with a tick haptic every 10%, then flash + heavy haptic |
| R7 | **Keep / Skip** | P2 | One by one, swipe left Skip, right Keep, Undo top-right; ends on an auto recap strip |
| R8 | **Report / remove** | P0 if rolls ship | Long-press: **Report photo** → reasons (Nudity · Someone under 18 · I'm in it and didn't agree · Other) → **Thanks. The host and Digi will check it.**; host: **Remove from roll**, **Remove {name} from roll** (block). Guideline 1.2 asks for filtering, reporting, blocking and published contact info [V] |

**Guest join for a friend who gets the link (P1). New evidence:** Once's join screen is the model: full-bleed cover photo, a pill "Invited by Alex", serif "Alex's party", a stats line "2d 12h left · 36 shots available", one name field, and **"Take your camera →"** [V-M, Once flow 60597fab]. Partiful's album adds a host toggle "Allow Guests to Upload" and an empty state "Don't let the memories die in your camera roll · Drop the pics" [V-M, flow 5faf7ae6].

- **J1 Web join (digi.pink/r/k7Q, no app):** cover photo (first blurred shot), pill **Invited by Sara**, serif **Sara's birthday**, line **Develops tomorrow, 10:00 AM · 24 shots each · 5 friends in**, field **Your first name**, button **Take your camera →**. Then the browser camera with the Digi look and stamp, and a counter "24 left". After the first shot: **You're in. See everyone's shots tomorrow at 10.** + a quiet **Get Digi to keep your copies** (App Store link). No sign-in, no paywall.
- **J1 in the app (universal link, app installed):** the same card as a sheet over the camera; button **Join the roll**; then R4 and R5.
- **J-errors:** **This link doesn't work anymore · Ask your friend for a new one.** / **This roll already developed · Ask Sara to share the album.** / **Your roll is full** (host) / **You're out of shots · 24 of 24 taken. It develops at 10 AM.**

### 4.4 App Clip, widget, Live Activity (P2, Jan 2027)

All three need native targets (`expo-apple-targets`, C) and are out of the contest window per bible 17.

- **App Clip (guest join):** the J1 card, then a native camera with the Digi look. Apple's page (read today) says App Clips **can't use PhotoKit** and **can't run background networking** [V]. So: upload each shot while the clip is open with a visible "Sent to the roll ✓" chip, and after the last shot show the install overlay **"Get Digi to keep your copies and see the roll at 10."** Size: keep it under 15 MB to support QR codes on older iOS; the 100 MB tier is for digital-only links or Apple's demo link [V]. App Clips can't request reviews, can't promote other apps, and Apple suggests keeping purchases in the full app [V].
- **Live Activity during a roll:** **Sara's birthday · develops 10:00 · 🎞 18 left · [camera]** (Once's Live Activity [V-M, screen 92eef9f6]). A party is when the phone is locked in a pocket.
- **Home-screen widget:** "Last digi" photo with stamp; roll countdown "Develops in 6h". Empty: **No digis yet**. Teach it with Locket's 4-step tutorial with the button disabled until the last step [V-M, flow 29465928].

### 4.5 Empty, error, offline and AI states (P0 unless marked)

| ID | Where | Copy | Notes |
|---|---|---|---|
| E1 | Gallery empty | **No digis yet** · Your shots and AI digis land here. Only you see them unless you share. · [Open camera] | |
| E2 | Rolls empty (P1) | **No rolls yet** · Start one for your next party. Everyone shoots, it develops for all of you the next morning. · [Start a roll] | |
| E3 | Roll with only you (P1) | **Just you so far. Parties need people.** · [Invite] | Lapse "Just you 😭" [V-M] |
| E4 | Offline | Chip in the viewfinder **Offline · camera only**; on an AI tap: **You're offline** · The camera works. AI looks and links need internet. | Free camera must keep working |
| E5 | AI failed | **That one didn't develop** · Something broke on our side. Your digi's back. · [Try again] [Another look] | Auto-refund always (Pecra "stuck at 26% for 2 days" [V, bible 19]) |
| E6 | AI busy | **Darkroom's packed** · Lots of parties tonight. Try again in a minute. Nothing was used. | |
| E7 | **Moderation block** | **We can't make this one** · This photo breaks our rules (like nudity or kids in the shot). Your digi's back. · [Pick another] [Rules] | New evidence below |
| E8 | No faces / crowd / small photo | **Can't find any faces** · Try a photo where faces are bigger and well lit. / **That's a crowd** · AI looks work best with 1–6 people. [Try anyway] / **Small photo** · It might come out blurry. | Checked on device before upload, so no digi is spent |
| E9 | Redo | Sheet from the Result: **Redo this one?** · Your first redo is free. · [Redo free] · after that **Redo · ✦ 1** | 1 free redo per digi [V, bible 06] |
| E10 | Photos save denied | **Can't save to Photos** · Digi needs "Add Photos" to save. Your digi is safe in the app. · [Open Settings] | |
| E11 | Storage full | **Your phone's full** · Free up some space to save this. It's kept in Digi for now. | |
| E12 | Camera denied | §3.6 denied state | 5.1.1(iv) fallback |

**Moderation, what real apps do (new, V-M):**
- ElevenLabs shows a red "Error · Unable to process your request due to abuse detection. You will be able to continue generating audio if you purchase a paid subscription." That ties a safety block to a paywall. **Never copy it**: a block must never be an upsell.
- Google Arts & Culture: "Images of People · Unfortunately this feature is not designed for use with images of people. Please try a different photo…" with two actions, **New Photo** and an alternative feature. Copy the shape: say why, offer the next step.
- Feeld states the rule before upload: "Keep it clean · … Any photos featuring nudity or children will be removed." Digi already does this on Consent.
- Airtasker: "This task has broken our guidelines … please read our guidelines". A link to the rules is enough; no lecture.
- Google Photos "Me Meme" puts **"Results may be unexpected"** under the title, plus a Compare chip, thumbs up/down and **Regenerate**. Digi's Result already has the honest line; add a small 👍 / 👎 under the image (one tap feedback, no text) to learn which looks fail.

### 4.6 Other missing pieces

| Screen | Pri | Spec |
|---|---|---|
| **O4 How did you find Digi?** | P0 | **Last one: how'd you find us?** · TikTok · Instagram · Snapchat · A friend sent it · App Store search · Google / ChatGPT · Other · tap advances · Skip. Store as a RevenueCat attribute |
| **C2 First-shot sheet** | P0 | Their photo full-bleed, toast **Your first digi 🎉** · [Save] [Share] · pink row **✦ Re-light it with AI · free** |
| **Strip capture** (STRIP tab) | P0 | Big countdown digit over the viewfinder (Snapchat "3" centred over the live view [V-M, screen 80e55b6c]; Future Pro's "Timer Off · 5s · 10s" pill [V-M, 268d8c6c]). Shot dots "● ● ○ ○" under the frame; front flash = one white frame per shot, ≤150 ms (HIG seizure note, bible 06 deep) |
| **Photo viewer** | P1 | Swipe through shots; stamp visible; Save · Share · Make it AI ✦ · Delete; "Before" chip on AI shots |
| **Help / contact** | P0 | Email address visible (guideline 1.2 needs published contact info) |
| **What's new / drop sheet** | P2 | Once per drop: one look, one sample, one button. Never at launch over the camera |

---

## 5. Visual system

### 5.1 Colour tokens (dark only), measured contrast [V, WCAG formula, Nov 17]

Background is the mockup's `#0B0B0E`. AA needs 4.5:1 for body text and 3:1 for large (≥18 pt, or ≥14 pt bold) text and UI parts.

| Token | Hex | Use | Contrast | Verdict |
|---|---|---|---|---|
| `bg` | #0B0B0E | app background | — | keep |
| `surface1` | #1C1C22 | cards, pills, secondary buttons | 1.16 vs bg | keep; separate with lightness, not borders |
| `surface2` | #26262E | pressed, inputs | 1.31 vs bg | keep |
| `surfacePink` | #2A1420 | selected card fill | white 17.22 · pink 5.66 | keep |
| `text` | #FFFFFF | primary text | 19.65 | keep |
| `text2` | #B4B4C0 | secondary text | 9.58 (8.26 on surface1) | keep |
| `text3` | #9A9AA8 | tabs, captions, fine print | 7.08 | keep, ≥12 pt |
| `text4` | #8C8C99 | legal links | 5.92 (5.11 on surface1) | keep, ≥12 pt |
| `textFaint` | #6E6E7A | disabled, wheel neighbours | **3.91** | large text or disabled only |
| ~~#55555F~~ | | inactive dots | **2.67** | **never for text**; OK for decorative dots |
| `pink` | #FF4FA3 | CTA fill, rings, wordmark, pink text | 6.46 on bg · 5.57 on surface1 | keep |
| `onPink` | #1A0010 | label on pink buttons | **6.56** | keep (white on pink is only 3.04) |
| `pinkSoft` | #FF7DBE | links, italic accent words | 8.36 | keep |
| `pinkPale` | #FFB3D6 | hover/pressed text | 11.86 | keep |
| `pinkDeep` | #D6267F | text on the pink body, Increase Contrast fill | white on it 4.73 · on body (#F7B9D6) **2.90** | body text must be ≥18 pt or decorative |
| `pinkInk` (new) | #A33A72 | small labels on the body | 3.78 on #F7B9D6 | use for "digi.pink" on the body |
| `body` | #FDE1EE → #F7B9D6 → #EE9CC2 | camera body gradient | pink #FF4FA3 on it **1.86** | never put #FF4FA3 text on the body |
| `stamp` | #FF9A2E | date stamp, counters | 9.28 | keep |
| `flash` | #FFD43B | flash On, 1× selected | 13.79; icon #2B2200 on it 11.06 | keep; never pink + yellow in one control |
| `success` | #3BE58E | checks, "Saved" | 11.97 | keep |
| `danger` (new) | #FF5A5F | delete, errors | 6.48 (bible deep 06) | add |

Increase Contrast (iOS setting): swap `pink` fills for `pinkDeep` with white labels (4.73:1), raise `text3` to `text2`.

### 5.2 Type scale

Three free fonts already in the mockups: **Instrument Serif** (display, OFL), **Inter** (UI), **Silkscreen** (pixel wordmark, LCD labels). The mockup body sizes (13–15 px) are small for a party app read with one hand.

| Role | Font | Size / line (pt) | Notes |
|---|---|---|---|
| Display | Instrument Serif 400 | 40/42 (mockup) → **36/40** on SE | one italic pink word per headline, max |
| Title | Instrument Serif 400 | 28/32 | sheet titles ("Looks") |
| Headline | Inter 600 | 17/22 | row titles |
| Body | Inter 400 | **16/22** (mockup 13–15) | raise sub-lines to 16 |
| Button | Inter 700 | 17/22 | on pink: #1A0010 |
| Subhead | Inter 500 | 15/20 | |
| Footnote | Inter 400 | 13/18 | legal, renewal lines (App Review reads these) |
| Caption | Inter 500 | 12/16 floor | "Sample photo of made-up people" |
| Overline | Inter 700, tracking +1.5 | 12/16 | TRY ANOTHER LOOK, FRAME |
| Pixel | Silkscreen 400/700 | 11–14 | wordmark, look names on the body, LCD overlays, digis counter |
| Stamp | Silkscreen (current) or a 7-segment font | scaled to the image | real digicam stamps are 7-segment; test DSEG7 Classic (OFL, C) against Silkscreen once on real exports |

Dynamic Type: let UI text scale to 1.6×, display serif to 1.3×, stamp and pixel counters not at all. Never fake-bold Instrument Serif or Silkscreen 400.

### 5.3 Spacing, radii, sizes

- 4-pt grid: 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40. Screen gutter 16 (camera, result, grids) and 20 (text screens).
- Radii: 8 chips · 12 thumbnails · 16 look tiles · 20 cards and plan rows · 24 result image · 32 camera body (mockup) · 999 pills. Use continuous corners.
- Hit areas ≥ 44 × 44 pt everywhere (the mockup's top icons are 44, good). Shutter 78–84. Primary button 56 h. Look tiles ≥ 108 wide.
- Shadows only on objects: pink CTA glow, the camera body, paper strips. Cards use surface lightness.

### 5.4 Components (build once, reuse)

| Component | Where | Spec |
|---|---|---|
| **CameraBody** | Pick, Permission, Developing, Camera, App Store shots | gradient body, lens, flash window, status LED (green idle, pink pulse = AI job, red = offline), label slot, viewfinder slot |
| **LCD overlay** | viewfinder | Silkscreen 12, white with 1 px dark shadow; battery, resolution, FLASH; never burned into exports except the stamp |
| **Stamp** | everywhere | `11 17 '26` in #FF9A2E with a 6 px orange glow; on exports rendered on device after AI (the model never draws digits) |
| **BeforeAfter** | Watch, Result, Paywall hero | drag divider with a 44 pt round handle, pills "Before" / "AI ✦", hold anywhere to see the original |
| **PlanCard** | Paywall | name 17 pt, **billed price 20 pt bold**, grey line 13 pt, badge 12 pt bold |
| **DigisCounter** | camera, result, sheets | Silkscreen 12, ✦ prefix, 3 states (free left / plan left + refill date / zero) |
| **LookTile** | Looks sheet, result row | real result photo, name 13 pt, "✦ 1" chip top-right for AI |
| **ShareRow** | Story, Result, Booth | 5 round targets 56 pt + labels 12 pt; storefront-aware |
| **Sheet** | Looks, packs, consent, join | native form sheet with grabber and detents; ✕ 44 pt |
| **StatusPill** | top of camera, roll | 40 h, pink live dot, ⌄ when tappable |

### 5.5 Motion and haptics

| Moment | Motion | Haptic (expo-haptics) | Reduce Motion |
|---|---|---|---|
| Shutter press | shutter scales to 0.92 in 80 ms | `impactAsync(Medium)` on press | keep |
| **Shutter flash** | full-screen white #FFF at 95%: 80 ms in, 150 ms out; the body's flash window lights at the same frame | `impactAsync(Heavy)` at capture | one 150 ms fade, no white burst |
| **On-device develop** (first shot, demo) | 1.2 s: blur 18 → 0, saturation 1.6 → 1, grain fades in, then the stamp digits light up left to right, 60 ms each | `notificationAsync(Success)` when the stamp finishes | 300 ms crossfade |
| **AI developing** | the scan line from the mockup sweeps the blurred photo every 1.6 s; the LED pulses pink; stage text crossfades | none while waiting | static blurred photo, text only |
| AI result reveal | same as on-device develop, plus the "AI ✦" pill drops in | `notificationAsync(Success)` | crossfade |
| **Hold to develop** (roll) | button fills left to right over 1.2 s; release early = drains back | `selectionAsync()` every 10%, `impactAsync(Heavy)` at 100% | fill without scale |
| Strip countdown | digit 3 → 2 → 1 at 1 s each, scale 1.2 → 1 | `impactAsync(Light)` per digit, `Heavy` per shot | no scale |
| Look switch (tab swipe) | spring snap, damping 18 / stiffness 220 | `selectionAsync()` | 150 ms |
| Purchase / trial started | a single flash burst + a few orange stamp-digit "confetti" | `notificationAsync(Success)` | static check |
| Errors | small shake, 2 × 6 px | `notificationAsync(Error)` | no shake |
| Toasts | 220 ms in, 2 s hold, 220 ms out | none | fade |

Nothing else vibrates. Never strobe; one flash per capture (HIG accessibility).

### 5.6 iOS 26 note

On iOS 26, system controls use Liquid Glass. Expo's `expo-glass-effect` (`GlassView`) exists from SDK 54, falls back to a plain view on older iOS, needs Xcode 26, and Expo advises checking `isGlassEffectAPIAvailable()` first [V, Expo docs]. Use glass only for camera chrome that floats over the live preview (zoom pill, flash, look swatch). Don't glass the cards or the paywall: the owner wants the flat dark + pink look, and glass everywhere is part of what reads as "generic".

### 5.7 Rules that keep Digi from looking generic

1. Every screen holds a real photo or a physical object: camera body, paper strip, film canister, lock-screen mock. No screen is only cards and icons.
2. ✦ means AI and costs digis. Nothing else sparkles (the Story card's yellow sparkles are fine as stickers on the card, not as UI icons).
3. One serif headline with one italic pink word per screen. Not two.
4. Pixel type (Silkscreen) only for things a camera would print: counters, labels on the body, the stamp, the wordmark.
5. No gradient blobs, no purple, no stock 3D illustrations, no emoji strings. At most one emoji per screen.
6. Real numbers on screen (18 left, 0:11, 60 a month). "Unlimited" and vague claims are banned (bible 18 §9).

---

## 6. Prioritised fix list for the next design round

**P0: before the first App Review build**
1. Paywall: $39.99/year biggest; remove "SAVE 89%"; allowances 60/month and 30/week; "Rolls up to 30 friends"; dated timeline; CTA "Start my 3 free days" + price-and-date line; captions "Before / AI ✦".
2. Consent: unticked box, disabled button, named AI partner + deletion time, "Free digi 1 of 3".
3. Age: blank neutral entry, no 18+ hint, moved to the first AI tap; under-18 block screen.
4. Permission: Camera only, one row, body metaphor; draw the camera-denied state.
5. Remove the standalone Notify screen from onboarding; add the "Ping me" toggle to Developing.
6. Camera: flip button, digis counter, "Just me ⌄" pill state, look swatch, ✦ AI tab, Settings top-left.
7. Looks: "PRO" → "✦ 1"; subline "Free looks run on your phone. ✦ AI looks use 1 digi."
8. Result: "Flash Re-light ✦" label, Before chip, Share primary, "Make it a strip · ✦ 2".
9. Draw the money set: Out of digis, Party Pack, Trial started, success, purchase states, reminder banner.
10. Draw Settings + Plus hub + Restore results + Help with a contact email.
11. Draw E4–E11 (offline, failed, busy, moderation, no faces, crowd, small photo, save denied).
12. Reorder onboarding: Welcome → Pick (with demo shutter) → Occasion → How'd you find us → Camera card → C1 → C2 first-shot sheet.

**P1: before Dec 4 (first holiday-party weekend)**
13. Roll set: Start a roll, Sign in with Apple, Invite (QR), Ping ask (the old Notify design), Roll camera header, Hold to develop, Report / remove (1.2), Delete account (5.1.1(v)).
14. Guest web join J1 and its errors.
15. Booth: frame names (4-cut / 2×2 / Instant / Y2K), colour dots, Share strip; strip capture countdown screen.
16. Story: stamp-style sticker, 3 templates, storefront-aware share row.
17. Gallery: per-photo shooter name, "shots" wording, long-press actions.
18. Locked AI look sheet, Roll Pass sheet, launch-week card.

**P2: after Dec 16**
19. Keep / Skip triage, Live Activity, widget + tutorial, App Clip, What's new sheet, Arabic RTL pass of every screen.

---

## What this means for Digi

1. **This week, redraw the Paywall first.** Make "$39.99 / year" 20 pt bold and the largest price; move "$0.77 a week" to a 13 pt grey line; replace "SAVE 89%" with "Best value"; change the rows to "60 AI digis every month / 30 AI digis every week", "Every look, plus new holiday drops", "No watermark · Rolls up to 30 friends"; use the dated timeline and the CTA "Start my 3 free days" with "Then $39.99/year. You won't be charged until {date}." under it.
2. **Reorder onboarding to 4 setup screens + the camera card** (Welcome, Pick with a demo shutter, Occasion, How'd you find us, Camera). Keep Age, Consent, Developing and Result, but trigger them from the first "✦ Re-light it with AI · free" tap on the user's own first shot. Keep the current AI-first order as the B arm of the one onboarding test.
3. **Fix the three rule-breaking screens:** Age (blank, neutral, later), Permission (camera only, one button), Consent (unticked, name the AI partner and the deletion time). Confirm the partner name and both retention times in the backend before writing them.
4. **Add four things to the camera screen** without touching what the owner likes: flip camera inside the body, the digis counter under the shutter, the "Just me ⌄ / Sara's birthday · 18 left" pill, and a look swatch right of the shutter. Add "✦ AI" as the last text tab. No bubble row.
5. **Swap "PRO" for "✦ 1" in the Looks sheet** and rename the AI look "Flash Re-light ✦" everywhere (Result, Watch, Looks), so a free look and an AI look never share a name.
6. **Draw the 12 P0 missing screens in §6** (money set, Settings + Plus hub, errors) in the same visual language before any engineering starts on purchases. They are what App Review and the first buyer will see.
7. **Lock the tokens in §5.1:** keep #1A0010 labels on pink (6.56:1), never white on pink at body size (3.04:1), never #55555F text (2.67:1), never #FF4FA3 text on the camera body (1.86:1). Raise body copy from 13–15 to 16 pt.
8. **Use "shots" for roll and gallery counts and "digis" only for AI.** Update the Roll ("6 of 24 shots · 38 in the roll"), Gallery ("124 shots · 6 friends") and pushes.
9. **Pick one develop time default (10:00 AM, editable) and one stamp format (`11 17 '26`)** and search every mockup and string for 9 AM, 9:00 and "11.17.26".
10. **Build the guest join page on digi.pink before Dec 4**, copying Once's join screen: cover, "Invited by Sara", stats line, first-name field, "Take your camera →". Say "no app needed" only if the web camera really works.
11. **Add Report / Remove / Block to roll photos and in-app Delete account** in the same release that ships rolls and Sign in with Apple. Both are written requirements (1.2, 5.1.1(v)).
12. **Ship the motion and haptics table in §5.5 as one shared module**, with the Reduce Motion column wired from day one. The shutter flash and the stamp lighting up digit by digit are the two moments that make TikTok clips; spend the polish there.
13. **Leave App Clip, widget and Live Activity for January.** When you build the App Clip, design for its limits: no saving to Photos, uploads only while it is open, and an install overlay "Get Digi to keep your copies".
14. **Test the next design round on two phones:** an iPhone SE (667 pt tall, the camera screen is the risk) and a Pro Max, with Larger Text on and Reduce Motion on. Add each fixed screen's click-through checklist to the manual test list.

---

## Sources

**Current design (read Nov 17, 2026)**
- Mockups: `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/digi-ui/project/*.dc.html` (18 files, text and CSS extracted) and renders in `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/digi-render/` (18 PNGs, plus `fixes.png`, `restored.png`).
- Contrast script: `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/bible/contrast.py` (WCAG 2.x relative luminance).

**Research chapters used**
- `/home/user/MMTEST/research/digi-bible-2026-11/06-monetization-packs.md` (allowances, AI strip = 2 digis, Roll Pass, free roll limit 8)
- `/home/user/MMTEST/research/digi-bible-2026-11/07-paywalls-mobbin-photo.md`
- `/home/user/MMTEST/research/digi-bible-2026-11/08-paywalls-best-converting.md`
- `/home/user/MMTEST/research/digi-bible-2026-11/09-onboarding-mobbin-photo.md`
- `/home/user/MMTEST/research/digi-bible-2026-11/10-onboarding-viral-consumer.md`
- `/home/user/MMTEST/research/digi-bible-2026-11/11-ui-patterns-mobbin.md`
- `/home/user/MMTEST/research/digi-bible-2026-11/17-viral-loops-tricks.md` (App Clip timing)
- `/home/user/MMTEST/research/digi-bible-2026-11/18-wording-copy.md`
- `/home/user/MMTEST/research/digi-bible-2026-11/19-review-mining.md`
- `/home/user/MMTEST/research/digi-bible-2026-11/23-retention-season-contest.md` (develop time 9:00)
- `/home/user/MMTEST/research/digi-deep-2026-11/06-ui-flows.md` (tokens, motion, native checklist)

**New Mobbin evidence (opened Nov 17, 2026)**
- Once, "Joining a film": https://mobbin.com/flows/60597fab-2465-466b-a0c8-efae59e6bed6
- Partiful, "Photo album": https://mobbin.com/flows/5faf7ae6-53b6-4eda-857d-be32ddda0a72 · https://mobbin.com/flows/a43cca3d-34e8-4517-969f-91150a1866b7
- Apple Photos, shared album participants: https://mobbin.com/flows/fec1c592-a6e9-4686-8e94-c8a078f7fd1a
- ElevenLabs abuse-detection error: https://mobbin.com/screens/029f68d6-8908-4448-8504-f6b879fd18fa
- Google Arts & Culture "Images of People": https://mobbin.com/screens/d4260145-ba1f-458d-9d72-dcaab86d4834
- Feeld "Keep it clean": https://mobbin.com/screens/b40581de-e34d-4bd9-8ad5-3ef283fe3aa3
- Airtasker guidelines block: https://mobbin.com/screens/eb394ece-1045-4739-9b6f-8cfca77bf5a3
- Google Photos "Me Meme" (Results may be unexpected, Regenerate): https://mobbin.com/screens/5cb7ba41-767d-41c6-be0b-2f66c07b9a68
- Snapchat capture countdown: https://mobbin.com/screens/80e55b6c-b0f7-45df-8f07-eb63ff75c232
- Future Pro timer pill: https://mobbin.com/screens/268d8c6c-7370-4148-8ae2-d2fa75033fdf
- Ulta Beauty "Get ready! Snapping your Photo in…": https://mobbin.com/screens/f9164939-ca44-48db-b690-f81e4c18d4d1

**Mobbin references inherited from earlier chapters (cited above)**
- Lapse darkroom / hold to develop: https://mobbin.com/flows/62c2320a-80ba-4c1e-8458-1e04d3f41f92
- Lapse roll page and invite: https://mobbin.com/flows/8f392a85-f358-4366-98e1-a4126bf2223b
- Once camera header: https://mobbin.com/screens/c7c91e8b-25d8-453c-9ce3-1f579bff80c6 · Once stamp: https://mobbin.com/screens/8038e800-a56e-4bf6-942b-80964fa1d027 · Once Live Activity: https://mobbin.com/screens/92eef9f6-ebe1-4195-8ebf-c06ebfe56384
- Locket widget tutorial: https://mobbin.com/flows/29465928-82fe-42e1-a44a-f47a006cc3b1
- Snapchat camera and lens flow: https://mobbin.com/flows/a24deea6-578d-490c-bc4f-e45b57546cf2
- Lensa avatar wait (countdown that went up): https://mobbin.com/flows/e155bc11-e270-4c5a-b998-88a36d37da49
- Photoroom before/after: https://mobbin.com/screens/581c0f2a-743c-4464-bb1a-c5ac3c2c2625
- Halide onboarding: https://mobbin.com/flows/b37e3f2d (as cited in bible 07/09)
- Ahead subscription row: https://mobbin.com/screens/f22a1c1c-fda3-4038-b0d1-3a12a3ec8332

**Apple and Expo (read Nov 17, 2026)**
- App Review Guidelines (1.2 user-generated content; 5.1.1(v) account deletion): https://developer.apple.com/app-store/review/guidelines/
- Choosing the right functionality for your App Clip (size table incl. 25 MB row; PhotoKit and background networking unavailable; reserve purchases and review requests for the full app): https://developer.apple.com/documentation/appclip/choosing-the-right-functionality-for-your-app-clip
- Forum thread on a 17 MB App Clip rejected at the 15 MB limit: https://developer.apple.com/forums/thread/740061
- Expo `expo-glass-effect` (SDK 54, iOS 26 only, `isGlassEffectAPIAvailable()`): https://docs.expo.dev/versions/v54.0.0/sdk/glass-effect/ · Expo SDK 54 changelog: https://expo.dev/changelog/sdk-54
- HIG Privacy (pre-alert screens), guideline 5.1.2(i), 4.5.4, 3.1.2, FTC COPPA FAQ D.7/H.3 and the Apple rejection on billed-amount prominence: as quoted and linked in bible 08, 09 and 18.
