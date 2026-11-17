# Digi v1 AI model test (Nov 17, 2026)

## ⭐ v3: the current pick (after the owner said round 1 looked "mid")

**What was wrong in round 1:**
- The AI edit was too timid. It mostly darkened the photo instead of re-lighting it with flash.
- My finish made things murkier still.
- 480p video looked mushy.

**What fixed it:**
1. **A style reference photo** (`style_ref.png`, our own AI-made 2005 flash shot) sent as image 2.
2. **A "lighting change only" prompt:**
   - room lights off, a harsh flash next to the lens;
   - the background drops to black;
   - faces stay pixel-identical.
3. **Finish v3 (`finish3.py`, runs on the phone, $0):**
   - person segmentation (iPhone has this built in; we tested with MediaPipe) gives a flash "pop" on the people;
   - the background goes deeper, but fairy lights keep glowing;
   - punchier contrast and colour;
   - a light sensor simulation, then the stamp.

| Job | Pick | Cost | Notes |
|---|---|---|---|
| Digi photo | `flux-3-image-klein` + style ref + finish v3 | **$0.009** | Beat Seedream Flash, which came out washed and pale with the same recipe. Faces kept |
| Live digi | `heygen-video-1` at **480p**, 5 s, from the popped photo + `vfinish2.sh` | **$0.05** | 768p ($0.09) drifted faces more, so 480p plus upscaling wins |
| Real look, faces drift | `flux.2-klein-4b` | $0.017 | Most authentic vibe, but it changes faces. Not shippable |

Files:
- `v3-before-after-*.jpg` and `v3-digi-*.jpg`: the photo results.
- `v3-live-digi-*.mp4`: the Live digi videos.
- `v3-round3-options.jpg`: all the options side by side.
- `v3-video-audit.jpg`: frames from each video at 1 s, 3 s and 4.6 s.
- `v1-round1/`: the old outputs.

**Total test spend: $2.27.** Everything below is round 1 and is kept for the record.

---

We tested OpenRouter models on two AI-made "normal phone photos": a group of four on a couch, and a two-person selfie. They are AI-made, so no real person's face was used. **Total spend: $1.74.**

## The pick

| Job | Model | Cost | Time | Why |
|---|---|---|---|---|
| **Digi photo (default)** | `black-forest-labs/flux-3-image-klein` | **$0.009** | ~9 s | Cheapest model tested. Keeps faces, and the flash look is strong with the v2 prompt |
| Photo fallback | `bytedance-seed/seedream-5-0-flash` | $0.018 | ~15–19 s | Strongest look and best faces. Use it if Klein refuses or fails |
| **Live digi (default)** | `heygen/heygen-video-1`, 480p, 5 s, 3:4 | **$0.05** | ~25 s | Most stable faces of all the video models. Small natural movement |
| Live digi fallback | `x-ai/grok-imagine-video-1.5-lite`, 480p | $0.11 | ~35 s | Livelier, but faces merged at 3 s. Fallback only |

**The finish runs on the phone and costs $0:** `finish2.py` (photos) and `vfinish.sh` (videos). It turns the AI output into a real 2005 camera shot:
- Photos: 1,600 px resolution, flash hot-spot and falloff, cold white balance, soft lens plus cheap over-sharpening, noise in the shadows, and JPEG blockiness.
- Videos: 15 fps, CCD noise and MJPEG blockiness, plus a white "flash pop" on the first frame.
- Both get the orange LCD date stamp and the `digi.pink` mark.

This is the step that stops results looking like AI.

## Image results (`image-models-sheet.jpg`, `image-zoom-audit.jpg`)

| Model | $/image | Result |
|---|---|---|
| flux-3-image-klein (v2 prompt) | 0.009 | ✅ Faces kept. Good flash look with the stronger prompt. The first prompt was too weak |
| seedream-5-0-flash | 0.018 | ✅ Best balance of look and faces |
| flux.2-klein-4b | 0.021 | ❌ Most "2005" vibe, but faces drift and it re-crops |
| mai-image-2.6-flash | 0.023 | ❌ Red-eye artefact on one eye, and it changed the framing |
| seedream-5-5 | 0.043 | ⚠️ Effect too subtle for the price |
| qwen-image-2.1-turbo | 0.018 | ❌ Moderation blocked the tank-top selfie |
| krea-2-medium-turbo | 0.015 | ❌ Ignored the photo and invented new people |
| minimax-h3-image-highspeed | 0.075 | ⚠️ Fine, but 8× the price |
| riverflow-v2.5-fast | 0.074–0.12 | ⚠️ Strong look, but slow (58–122 s) and expensive |
| gemini-3.1-flash-lite-image, nano-banana-2.1, gpt-image-1-mini | — | ❌ **Refused ("violation of provider Terms of Service")** on photos of people |

## Video results (`video-models-sheet.jpg`, `video-faces-audit.jpg`)

| Model | $/clip | Result |
|---|---|---|
| heygen-video-1 (480p) | 0.05 | ✅ Faces stable at 0, 3 and 4.4 s |
| grok-imagine-video-1.5-lite | 0.11 | ⚠️ Fun, but faces merge mid-clip |
| wan-3.0 | 0.15 | ❌ Camera drifts and the person on the right changes |
| hailuo-3-max | 0.25 | ❌ The person on the right morphs at 3 s |
| seedance-2.5-flash | 0.35 | ⚠️ Lively, slight face drift, 7× HeyGen's price |
| mischief-1 | 0.025 | ❌ 16:9 only, cuts off heads, loses the flash look |
| seedance-2.0-mini / -fast | — | ❌ **Refused: "input image may contain real person"** |
| veo-3.1-lite, gemini-omni-1.2-flash | — | ❌ **Refused (Terms of Service)** |

## Margins (Apple at 30%)

| Product | Net to us | Worst-case AI cost | Margin |
|---|---|---|---|
| Party Pack $5.99 (25 digis) | $4.19 | 25 photos × $0.009 = $0.23, or about 8 Live digis × $0.05 = $0.40 | ~90–95% |
| Yearly $39.99 (60 digis a month) | $26.31 after refunds | 60 photos = $0.54/month; all Live digis (3 digis each) = 20 × $0.05 = $1.00/month | stays positive even at max use |
| Weekly $6.99 (30 digis a week) | ~$4.60 | ≤ $0.50/week | ~89% |

**Suggested pricing in digis:** a photo costs 1 digi, a strip 2 and a **Live digi 3**. Even with fallbacks and retries we're about 3× cheaper than the old plan's $0.0244 per digi.

## Before launch
1. **Run a 20-photo test on real, consented photos.** Use the owner's own friends' photos, with their permission. These two test photos were AI-made, and real photos may trigger more refusals.
2. **Build a fallback chain:** Klein → Seedream Flash → "try another photo" with an automatic refund. For video: HeyGen → Grok lite → auto-refund.
3. **Check the commercial terms for HeyGen and Flux on OpenRouter**, especially their rules on real people's likeness. Update the consent screen to name the AI partners.
4. Keep the on-phone finish identical across photo and video so a digi always looks like the same camera.
