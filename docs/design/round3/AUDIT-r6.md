# Round 6 audit: onboarding + paywall (Nov 17)

Sources: bible ch. 07, 08 (paywalls), 09, 10 (onboarding), 18 (copy), 22 (Apple rules), 24 (UI rules); Mobbin references in `../research/mobbin/` (`mobbin-refs.json`).
AppKittie: not used. The account has 0 credits, so every call returned 402 and nothing was charged. Its key is saved as `PPKITTIE_API_KEY` (typo).
Automated numbers come from `audit-metrics.json`, written by `gen.js`. Word counts include only readable copy, not stamps or pixel labels on photos.

## Paywall A "Their prints" (`png/r6-pay-a.png`)

| # | Check | Source | Result |
|---|---|---|---|
| 1 | Billed price is the largest price ($39.99 / $6.99 at 26 px; per-week 12 px) | Apple 3.1.2, ch. 08 #7 | ✅ |
| 2 | Trial length and the price after it shown on the plan ("3 days free") | ch. 22 §2 | ✅ |
| 3 | No trial toggle | Apple 3.1.2, ch. 07 #2 | ✅ |
| 4 | ✕ visible from frame 1, 44 pt; Restore visible | ch. 08 #4, CLAUDE.md rule 4 | ✅ |
| 5 | Real dates: "Reminder on Nov 19 · first charge Nov 20" (worked out at runtime) | ch. 08 #2, Headspace / Jomo | ✅ |
| 6 | Auto-renew line + Terms + Privacy | ch. 22 §2 | ✅ |
| 7 | Sells the user's own result (their digi is the middle print, "YOURS ✦") | ch. 07 #1, Photoroom | ✅ |
| 8 | 2 plans + a Party Pack link, not 3 cards | ch. 07 #9 (Adapty: 2 plans convert +67%) | ✅ |
| 9 | "Best value", no "Save X%", no strike-through, no timers | ch. 18, CLAUDE.md rule 4 | ✅ |
| 10 | No more than 3 features; 4-word headline | Mobbin shared pattern | ✅ |
| 11 | Copy ≤ 65 words (actual: 60) | owner: "too much text" | ✅ |
| 12 | Contrast: all text pairs ≥ 4.5:1 (lowest 5.44:1); #1A0010 on pink; no white text on pink | ch. 24, CLAUDE.md rule 6 | ✅ |
| 13 | Tap targets ≥ 44 pt (plan tiles 100 pt, CTA 58 pt) | CLAUDE.md rule 6 | ✅ |
| 14 | Brand: pixel DIGI + PLUS, serif pink word, orange stamp | owner picks | ✅ |
| 15 | Fits 390×844 with no overflow | `audit-metrics.json` | ✅ |
| 16 | Trial reminder push promised and actually scheduled (start + 40 h) | STATUS §3 | ✅ copy · ⬜ build step 5 |

**Score: 10/10 on the checklist.** Not yet measured: real conversion (A/B after launch), iPhone SE height (in code this screen scrolls under 700 pt), and Dynamic Type at the largest sizes (check in the build).

## Paywall B "Camera bento" (`png/r6-pay-b.png`)
Passes 1–6 and 8–16. **Fails #7:** it sells features, not the user's own photo. Score 9/10.

## Out-of-digis sheet (`png/r6-pack.png`)
- Its own sheet over the camera, Party Pack first (Replika, ch. 06 §7.3). 49 words.
- "0 digis left · camera's still free" (ch. 18).
- The badge reads "PAY ONCE", not "MOST PICKED", because that claim has no data before launch.
- Plus is offered underneath, never pushed. **10/10.**

## Onboarding (`r6-onboarding-flow.jpg`)

| # | Check | Result |
|---|---|---|
| 1 | Wow before any question or permission (Tap it on a sample) | ✅ |
| 2 | Every question changes something: occasion → first looks; how often → suggested plan (logged during the A/B); who → default mode or lens; gender → sample photos and look order; source → attribution | ✅ |
| 3 | One tap moves on; Skip on every question; back chevron | ✅ |
| 4 | Progress shown (pixel battery, 6 cells) | ✅ |
| 5 | Answers in the thumb zone (bottom), tiles ≥ 72 pt | ✅ |
| 6 | ≤ 45 words per screen (highest: 42) | ✅ |
| 7 | Gender: Woman / Man / Non-binary / Prefer not to say; reason shown; "never shown to anyone"; optional (Strava pattern) | ✅ |
| 8 | Reply line after each answer ("Birthday looks, loaded 🎂") | ✅ |
| 9 | Camera permission primed with the reason, then the system prompt | ✅ |
| 10 | No age gate or AI consent here; those come at the first AI tap (STATUS) | ✅ |
| 11 | About 8 taps to the live camera | ✅ (ch. 24 target ≈ 7; +1 for gender) |

**Score: 10/10 on the checklist.**

Trade-off: gender is personal data. It has to be listed in the privacy label and the privacy policy, and stored only on the profile, never sent to AI. Skipping it costs nothing.
