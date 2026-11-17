# Digi: status, decisions and build spec

Last updated: **Nov 17, 2026**. This repo moved here from jjman2321/MMTEST `digi/`.

## 1. Where we are
- ✅ Research done: 26-chapter "bible" in `docs/research/bible/`, plus the earlier deep dive in `docs/research/earlier/`.
- ✅ 18 approved screen designs: `docs/design/png/` and `docs/design/screens/`. Live artifact: https://claude.ai/artifact/9QnBF3QkMb3kidRsG3PMnV
- ✅ AI recipe tested and picked: `docs/model-test/` (README v3 section and `PROMPTS.md`). Test spend: $2.27.
- 🟡 **App scaffold (WORK IN PROGRESS, not yet typechecked or run):**
  - Expo SDK 58 with deps installed;
  - design kit (`src/ui/`), store, the Skia develop pass;
  - screens: `welcome`, `pick`, `occasion`, `source`, `camera`, `develop`.
- ⬜ Everything in §5 "Build order".

## 2. Decisions (owner's words, dated)
| Date | Decision |
|---|---|
| Nov 17 | "ok let's do it don't build with the contest in mind anymore or its rules". **No contest.** Build Digi as a business. Kiwi is shelved; Kilma is a 2027 maybe. |
| Nov 17 | "we should have it in v1 but we should use the cheapest best models so our margins are good". **Live digi (AI video) is in v1.** |
| Nov 17 | Round-1 AI output looked "mid". Round 3 approved: Klein + style ref + punchy finish. Results must "not look AI". |
| Nov 16 | Camera and Looks: "the old one was way better". **Keep the v6 camera layout**: big viewfinder, text mode tabs, shutter in the middle, roll pill. No extra clutter. |
| Nov 16 | Wants the pixel "digi" logo visible (Permission screen, camera body). |

**What changed now there's no contest** (overrides those parts of the research):
- **Paywall:** test **weekly-first vs yearly-first**. Weekly with a 3-day trial is the top-LTV setup in Photo & Video. Yearly-first was only for contest scoring.
- **Paid ads** are allowed once revenue per install is known: Meta and TikTok first, then Apple Ads.
- **Storefronts:** start with US (plus CA, UK, AU after a privacy/legal check). Add Gulf and Egypt after a data-law check.
- **No Dec 13 "trial switch", no $297 cash cap, no "in-window" maths.**
- **Timing:** aim to be **live by about Dec 10** for the Christmas/NYE party season. Then weddings and events (Apr–Sep).

## 3. Product spec v1
**Name and ASO:** "Digi: Photo Booth & Digicam". Subtitle: "Y2K Flash Camera, Party Strips". Plan name: **Digi Plus**. Keywords: ch. 12.

**Flow** (ch. 24 §12, about 7 taps to the first real digi):
1. Welcome
2. Try the flash on a sample (no permission yet)
3. Occasion (1 tap)
4. How did you find us (1 tap)
5. Camera (the system camera prompt fires here)
6. First real digi develops (free)
7. "✦ Re-light it with AI · free"
8. Age (18+)
9. Consent
10. Developing
11. Result
12. Paywall, once, with ✕ visible from 0 s

**Screens** (map to `docs/design/png/NN-*.png`):

| Route | Design | Status |
|---|---|---|
| `welcome` | 01-Main | built |
| `pick` (sample flash demo) | 04-Pick / 05-Watch | built |
| `occasion` | 03-Vibe (single tap) | built |
| `source` | (new) | built |
| `age` | 02-Age (blank, neutral; shown at first AI use) | todo |
| `consent` | 08-Consent (box unticked, names partners, deletion time, "Free digi 1 of 3") | todo |
| `camera` | 13-Camera (v6) | built, needs a device test |
| `develop` (free digi + actions) | 11-Result | built |
| `developing` (AI job, "Ping me" toggle) | 09-Developing | todo |
| `result` (AI digi, Before chip, Share, "Make it live ✦ 3", "Make it a strip ✦ 2") | 11-Result | todo |
| `live` (Live digi player and share) | (new; ch. 24 style) | todo |
| `paywall` | 12-Paywall (fix per ch. 24 P0 #1) | todo |
| `looks` (sheet; "✦ 1 / ✦ 2" badges, never "PRO") | 14-Looks | todo |
| `strip` | 15-Booth | todo |
| `share` | 16-Story | todo |
| `roll` (local gallery) | 18-Gallery | todo |
| `settings` (Plus hub, Restore, Help, Delete data) | (new) | todo |
| Shared rolls (host QR, guests join on web, reveal at 10 AM) | 17-Roll | **v1.1** |

**Money** (RevenueCat):

| Product | Details |
|---|---|
| Digi Plus Weekly | $6.99, 3-day trial, 30 digis a week |
| Digi Plus Yearly | $39.99, 60 digis a month |
| Party Pack | $5.99, 25 digis |
| Big Night | $11.99, 60 digis |
| Free | 3 AI digis, one time |

- **Costs in digis:** AI photo 1, strip 2, Live digi 3.
- **Paywall copy:**
  - the price is the biggest text;
  - a dated trial timeline: "You won't be charged until <date>";
  - a reminder at trial start + 40 h;
  - "Best value", never "SAVE 89%".

**AI pipeline** (Supabase Edge Functions; recipe in `docs/model-test/PROMPTS.md`):
- **`digi-ai`:** check auth + balance → moderate (cheap vision JSON: people count, possible minor, nudity; ch. 21 §5) → Klein + `style_ref.png` → fallback Seedream Flash → store → spend 1 digi (idempotent) → on failure, refund.
- **`live-digi`:** same checks → HeyGen 480p 5 s 3:4 (first frame = the popped photo) → fallback Grok lite → store → spend 3.
- **On the phone after AI:** segmentation pop → sensor finish → stamp. Video: the 15 fps / grain / flash-pop finish. Ports of `docs/model-test/finish3.py` and `vfinish2.sh`.
- **Logging:** a `jobs` table (user, kind, model, cost_usd, ms, status, error).

**Data** (Postgres, RLS on everything):
- `profiles` (anon user, occasion, source, age_ok, consent_at)
- `jobs`
- `looks` (id, name, model, fallback, prompt, cost_digis, active)
- `assets` (storage paths; **delete originals after 24 h**, keep outputs until the user deletes them)

## 3b. Interview the owner first (open questions)
Read the bible first (`docs/research/bible/00-README-summary.md`, then ch. 06, 12, 18, 21, 22 and 24). Then ask **all 20**. Don't guess any of these:
- Give a recommended default for each question, with a score out of 10, so he can just say "yes".
- Show visuals where it helps (designs, icon options, sample digis).
- Ask in batches of 5: 1–5, 6–10, 11–15, 16–20.
- Record every answer in §2 with his words and the date. Then build.

1. **Look and feel:** keep the approved designs as they are, or anything that bugs him? Show `docs/design/png/` side by side.
2. **Launch looks:** which 6 free looks and which AI looks at launch? Default from ch. 10/18: Digicam Flash, Y2K, Film, Strip, Xmas, NYE, plus "✦ AI Re-light".
3. **Paywall test:** weekly-first vs yearly-first A/B. Default: yes. Prices: $6.99/wk, $39.99/yr, packs $5.99 / $11.99.
4. **Free allowance:** 3 free AI digis once? Live digi costs 3 digis?
5. **Markets:** US only at launch, or US + CA/UK/AU? Arabic UI later?
6. **Domain and handles:** does he own `digi.pink`? Which TikTok and Instagram handles?
7. **Brand voice:** check 3 sample lines from ch. 18 (onboarding, paywall, push).
8. **Shared rolls:** v1.1 as planned, or are they core for him?
9. **His time:** hours a day for testing, and when he can install a dev build on his iPhone.
10. **Accounts ready?** Apple Developer (Grasp Labs), Expo, Supabase, RevenueCat, OpenRouter. Which exist already?
11. **App icon:** show 3 options. Default: the pink digicam with the pixel "digi" logo. No look-alike of any real camera brand.
12. **Watermark:** a small `DIGI.PINK` mark on free shares, removed by Plus, and never on guests' roll photos. OK? Same question for the date stamp format (`11 17 '26`, orange LCD, bottom right).
13. **Sign-in:** start anonymous (no account), and ask for Sign in with Apple only for rolls or restore. OK?
14. **Age rating:** 18+ only, with the age check at the first AI use (ch. 22). Or allow 17+ for the free camera only?
15. **Photo storage:** delete the uploaded original photo 24 h after the AI job; keep AI results until the user deletes them; never train on photos. OK? Also the support email (e.g. `hi@digi.pink`).
16. **Live digi:** 5 s, silent or with a sound (a flash "pop" sound effect only, no licensed music)? Costs 3 digis, at 480p plus the finish. OK?
17. **Strip:** 4 poses, vertical; free shows the date only, Plus adds themed frames. Which 3 frame themes at launch?
18. **Notifications:** which pushes are OK? Default: "your digi is ready", the trial reminder (start + 40 h), and at most 1 a week for new looks. No guilt or streak pushes.
19. **Marketing:** will he post from his own phone or face, or faceless accounts only? Budget for UGC creators and ads after launch (paid ads are allowed now)? Use PostHog for analytics (a key name exists in the environment)?
20. **After v1:** priority order for v1.1: shared rolls, Android, Arabic UI, weddings/event pack, more looks weekly. And the success bar for deciding to keep investing (default: D7 ≥ 8%, refunds < 4%, AI cost < 10% of revenue).

## 4. Owner setup (never paste keys in chat)
1. **Apple Developer account** for Grasp Labs LLC, and enrol in the App Store Small Business Program (15% instead of 30%).
2. **Expo:** create an access token → add `EXPO_TOKEN` in claude.ai environment settings → environment variables.
3. **Supabase:** create a project (EU or US region) → add `OPENROUTER_API_KEY` under Supabase → Edge Functions → Secrets.
4. **RevenueCat:**
   - create a project;
   - add the iOS public SDK key as `EXPO_PUBLIC_REVENUECAT_IOS_KEY` in environment variables;
   - add the secret key in Supabase secrets as `REVENUECAT_SECRET_KEY`.
5. **App Store Connect:**
   - create the app "Digi: Photo Booth & Digicam" and the 4 products above;
   - create an App Store Connect API key for EAS submit (stored in EAS, not chat).

## 5. Build order (next steps)
1. **Get the scaffold green:** `npx tsc --noEmit` and `npx expo lint`. Fix everything. Set up `app.json`:
   - name and bundle id `pink.digi.app`;
   - camera and photos permission strings from ch. 22;
   - icon: the pink camera with the pixel "digi" logo;
   - dark UI.

   Then take web preview screenshots of every built screen.
2. **Finish the free loop:**
   - the camera and develop pass on a device via an EAS dev build;
   - the strip (4 timed shots composed in Skia);
   - the roll, saving and sharing.
3. **Backend:** Supabase migrations and the `digi-ai` and `live-digi` Edge Functions with moderation, fallbacks, refunds and logging. Test them with the AI-made samples in `assets/samples/`.
4. **Screens:** `age`, `consent`, `developing`, `result`, `live` and `looks`.
5. **Money:**
   - RevenueCat products and currency;
   - the paywall (weekly-first vs yearly-first experiment);
   - the out-of-digis sheet (pack first vs Plus first);
   - Settings with Restore.
6. **iOS segmentation module** for the flash pop.
7. **The 20-photo real-face test:** the owner's friends, with consent. Gate: faces kept in at least 18 of 20.
8. **Release:** TestFlight → App Store, with the In-App Event, 3 Custom Product Pages and the launch content plan (ch. 14–17).
9. **v1.1:** shared rolls with web guest join, Live Activity, more looks weekly, Android.

## 6. How to test (keep `docs/MANUAL-TESTS.md` updated)
- Web preview: `npx expo start --web`, then screenshots at 390×844 against `docs/design/png/`.
- Device: EAS development build on the owner's iPhone, then TestFlight.
- AI: run each look on the 20-photo set. Log cost and face check in `docs/model-test/`.
