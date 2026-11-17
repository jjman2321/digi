# Digi: status and handoff (Nov 17, 2026)

Repo: jjman2321/digi (moved from jjman2321/MMTEST `digi/`). Style reference for the AI recipe: `docs/model-test/style_ref.png`.

**Read this first in a new session.**

## Decisions the owner made
- **Build Digi** (a party camera: 2005 digicam flash, an orange date stamp, booth strips, AI re-light, Live digi videos).
- **No contest.** Ignore the Ship or Die rules and timings completely. Build it as a real business.
- **Live digi (AI video) is in v1.** Use the cheapest good models, and keep margins high.
- Kiwi is shelved. Kilma is a possible second app for 2027.
- The owner's own words: earlier v7 Camera/Looks "the old one was way better", and round-1 AI output looked "mid". So keep the approved v6 camera layout, and keep the look punchy rather than murky.

## Sources of truth
| What | Where |
|---|---|
| Niche research (26 chapters, about 278K words) | `docs/research/00-summary.md` (full 26 chapters stay in jjman2321/MMTEST `research/digi-bible-2026-11/`). Start with §1, §12 (UI fix list) and §16 |
| UI design and fix list | `docs/research/24-ui-design.md` |
| Tech stack and costs | `docs/research/21-tech-ai-cost.md` |
| **AI model test and the winning recipe** | `docs/model-test/README.md` (v3 section) |
| Approved screen designs (18 screens) | Claude Design artifact https://claude.ai/artifact/9QnBF3QkMb3kidRsG3PMnV |

## The AI recipe (tested; total test spend $2.27)
**Photo ("✦ AI re-light"):**
- Model: `black-forest-labs/flux-3-image-klein` on OpenRouter, **$0.009 per image**, about 9 s.
- Input: the user photo plus `style_ref.png` (a 2005 flash reference) as image 2.
- Prompt: the exact prompts in `docs/model-test/PROMPTS.md`.
- Then the finish (`docs/model-test/finish3.py`):
  - person segmentation flash "pop" (iOS Vision `VNGeneratePersonSegmentationRequest` on device);
  - darker background with glowing point lights;
  - punchy contrast and saturation;
  - light sensor sim;
  - the DSEG7 stamp and the `DIGI.PINK` mark.
- Fallback: `bytedance-seed/seedream-5-0-flash` ($0.018).
- These providers refuse photos of people: Gemini, OpenAI, Qwen (sometimes), and for video Veo and Seedance 2.0.

**Live digi:**
- Model: `heygen/heygen-video-1`, 480p, 5 s, 3:4, first frame = the popped photo. **$0.05 per clip**, about 25 s.
- Then `docs/model-test/vfinish2.sh`: 15 fps, CCD noise, MJPEG blockiness, a white flash pop and the stamp.
- 768p was worse: faces drifted more.
- Fallback: `x-ai/grok-imagine-video-1.5-lite` ($0.11).

**Pricing idea:** photo 1 digi, strip 2, Live digi 3. Margins are about 90% or more.

**Still to do:** test 20 real photos with consent before launch.

## Stack (from ch. 21)
- **App:** Expo SDK 58 + Expo Router + TypeScript.
- **Camera and develop:** `expo-camera`, then a Skia develop pass.
- **Backend:** Supabase (anonymous auth, Postgres + RLS, Storage, Edge Functions that call OpenRouter server-side; never put the key in the app).
- **Payments:** RevenueCat, with the digis balance as Virtual Currency.
- **Builds:** EAS.

Read `AGENTS.md` here first. Expo APIs changed, so check the v58 docs.

## What exists in this repo (scaffold, WORK IN PROGRESS, not typechecked or run yet)
- Expo SDK 58 app (`create-expo-app`). Deps installed: camera, Skia, image-picker, media-library, sharing, haptics, file-system, svg, linear-gradient, Google fonts (Instrument Serif, Inter, Silkscreen), expo-sqlite, expo-asset. `public/canvaskit.wasm` is there for Skia on web.
- `src/ui/theme.ts` (tokens) and `src/ui/kit.tsx` (buttons, TopBar, StepDots, Headline, PixelLogo, CamBody, Stamp, todayStamp).
- `src/lib/store.ts` (a persisted store), `develop.ts` (Skia develop shader and stamp), `files.ts`, `pending.ts`.
- Screens in `src/app/`:
  - `_layout`, `index` (redirect);
  - onboarding: `welcome`, `pick` (sample flash demo), `occasion`, `source`;
  - `camera` (v6 layout);
  - `develop` (free digi plus "Re-light with AI").
- **Not built yet:**
  - screens: `consent`, `developing` (AI job), `paywall`, `looks`, `strip`, `roll`, `settings`;
  - age check;
  - Supabase functions and migrations;
  - RevenueCat;
  - the Live digi flow;
  - the iOS segmentation module;
  - app.json (bundle id, permission strings, name "Digi: Photo Booth & Digicam").
- `assets/samples/*` are AI-made demo photos (no real people). `assets/fonts/DSEG7Classic-Bold.ttf` (OFL).

## Next steps
1. `npx tsc --noEmit` and `npx expo lint`. Fix errors. Run the web preview with Playwright screenshots at 390×844.
2. Finish the screens (consent, developing, result, paywall, looks, strip, roll, settings), following ch. 24's P0 list.
3. Supabase: migrations (profiles, jobs, looks) and the edge functions `digi-ai` (Klein → Seedream fallback, moderation, auto-refund) and `live-digi` (HeyGen → Grok fallback).
4. RevenueCat: products and the digis currency. Paywall: test weekly-first vs yearly-first (no contest constraint now).
5. iOS segmentation (a local Expo module in Swift), then EAS builds.

## Owner setup needed (never paste keys in chat)
- **Apple Developer account** (Grasp Labs LLC) and the App Store Connect app record.
- **Expo account:** add `EXPO_TOKEN` in claude.ai environment settings → environment variables.
- **Supabase project:** the OpenRouter key goes in Supabase Edge Function secrets as `OPENROUTER_API_KEY`.
- **RevenueCat account:** the public iOS SDK key goes in app config. The secret key goes in Supabase secrets.
