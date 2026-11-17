# CLAUDE.md: Digi (digi.pink)

## What this project is
Digi is an iPhone party camera. It shoots like a 2005 digicam: harsh flash, CCD grain and the orange LCD date stamp. It also makes 4-pose booth strips, an **AI re-light** (a real-looking flash, where the room goes dark) and **Live digi** (a 5-second AI clip). Built by Grasp Labs LLC.

It is a real business. **No contest:** ignore every Ship or Die rule, deadline and "in-window" number in the research. Some research chapters were written for that contest; their timing and pricing advice is superseded where `STATUS.md` says so.

**Start of every session:** read `STATUS.md` (where we are, decisions, next steps). Then read `AGENTS.md` (Expo SDK 58 rules: check the v58 docs, don't trust memory).

**Before any feature:**
- **UI:** `docs/research/bible/24-ui-design.md` (P0/P1 fix list, visual rules) and the approved screens in `docs/design/png/` (source HTML in `docs/design/screens/`).
- **Tech and AI:** `docs/research/bible/21-tech-ai-cost.md` and `docs/model-test/README.md` + `PROMPTS.md` (the tested AI recipe).
- **Copy:** `docs/research/bible/18-wording-copy.md`.
- **Money:** `docs/research/bible/06-monetization-packs.md`.
- **App Store and legal:** `docs/research/bible/22-legal-appstore.md`.
- **Full research summary:** `docs/research/bible/00-README-summary.md`.

## The owner
A medical student, founder of Grasp Labs LLC, with limited coding experience.
- After every change, explain in plain language what changed and give a short click-through checklist to test it on a phone. Add each checklist to `docs/MANUAL-TESTS.md`.
- Never ask him to paste API keys or passwords into chat. Tell him exactly where to add them: claude.ai environment settings → environment variables, Supabase → Edge Function secrets, RevenueCat or App Store Connect dashboards. Check that keys exist by name only; never print them.
- He likes options side by side with an honest score out of 10 and a pick. Keep copy short, casual and human. His most common correction is "too much text" or "looks mid", so show screenshots and iterate.
- Record each decision he makes in `STATUS.md` → "Decisions", with his words and the date.

## Stack
- Expo SDK 58, Expo Router, TypeScript (`src/app/` = routes). EAS for builds. No hand-edited `ios/`.
- `expo-camera` for capture. `@shopify/react-native-skia` for the free develop pass and the stamp.
- iOS Vision person segmentation (a local Expo module) for the flash "pop".
- Supabase: anonymous auth, Postgres + RLS, Storage, Edge Functions. **All OpenRouter calls run only in Edge Functions.**
- RevenueCat: subscriptions, packs, and the digis balance as Virtual Currency.
- AI through OpenRouter. Model IDs live in config/env or a `looks` table, never hard-coded:

  | Use | Default | Fallback |
  |---|---|---|
  | Photo | flux-3-image-klein | seedream-5-0-flash |
  | Video | heygen-video-1 at 480p | grok-imagine-video-1.5-lite |

## Rules (non-negotiable)
1. **Never commit secrets.** Keep `.env.example` updated with names only.
2. **Faces must not change.** Every AI path keeps people's identity. Test it on the 20-photo set before shipping a model or prompt change.
3. **Consent and age:**
   - The consent screen before the first AI use names the AI partners and how long photos are kept.
   - 18+ only.
   - No kids, no nudity. Moderate the input before AI, and auto-refund digis on any failure.
4. **No dark patterns:**
   - The trial is honest, with real dates and a reminder.
   - No toggle paywalls (Apple 3.1.2).
   - Restore purchases is visible. No fake urgency.
   - Never charge to see your own photos.
5. **Watermark policy:**
   - The date stamp is free to edit or remove.
   - A small `DIGI.PINK` mark appears on free shares; Plus removes it.
   - Never put a mark on guests' roll originals.
6. **Accessibility:**
   - Tap targets of at least 44 pt.
   - Labelled buttons.
   - Dynamic Type safe.
   - Reduce Motion respected.
   - Contrast per ch. 24: #1A0010 on pink; never white body text on pink.
7. Every AI job logs model, cost, latency and outcome. Target AI cost: ≤ $0.01 per photo and ≤ $0.06 per Live digi.
8. Small, focused commits. Run `npx tsc --noEmit` and `npx expo lint` before every commit.

## Working style
- Before a big feature, write a short plan (files, data, how to test) in chat and wait for his go.
- Prefer simple, boring code. When something fails, show the error and the fix, then explain it simply.
- Check UI in the web preview: `npx expo start --web`, then Playwright screenshots at 390×844. Compare against `docs/design/png/`.
