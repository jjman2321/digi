# Exact prompts behind the v3 results (Nov 17, 2026)

## Photo: "AI re-light"
- Model: `black-forest-labs/flux-3-image-klein`
- Endpoint: OpenRouter `POST /api/v1/images/generations`
- Body:
  - `model`, `prompt`, `aspect_ratio: "3:4"`
  - `input_references: [user photo, style_ref.png]`, each sent as `{type: "image_url", image_url: {url: "data:..."}}`
- Fallback: `bytedance-seed/seedream-5-0-flash`, same body.

```
Image 1 is a normal phone photo. Image 2 is a style reference: a 2005 compact digital camera photo with direct on-camera flash at night. Relight image 1 as if the room lights were off and the only light is a small harsh flash right next to the lens, exactly like image 2: the people are brightly lit and slightly overexposed with shiny flash highlights on skin, everything more than two meters behind them drops to almost pure black, only tiny glowing dots remain from the fairy lights, strong contrast, saturated colors, cool-blue white balance, slight red-eye. This is a lighting change only: every face must stay pixel-identical in shape and identity, same expressions, same hair, same clothes, same hands, same framing. Do not copy any person or object from image 2. No text, no date stamp, no border.
```

Then run `finish3.py`: the segmentation pop, then the sensor simulation, then the stamp. On device, use iOS Vision person segmentation in place of MediaPipe.

## Live digi
- Model: `heygen/heygen-video-1`
- Endpoint: OpenRouter `POST /api/v1/videos`, then poll `GET /api/v1/videos/{id}` until `completed`, then download `unsigned_urls[0]`.
- Body:
  - `duration: 5`, `resolution: "480p"`, `aspect_ratio: "3:4"`
  - `frame_images: [{type: "image_url", image_url: {url}, frame_type: "first_frame"}]`
  - the first frame is the popped photo, without the stamp
- Fallback: `x-ai/grok-imagine-video-1.5-lite`, same body, with `generate_audio: false`.

```
Bring this flash party photo to life as a short early-2000s digital camera video clip. The friends laugh and lean in together naturally, small natural movements, slight handheld camera shake. Keep every face, identity, outfit and the dark room exactly the same, no new people, no morphing, no zoom. Harsh on-camera flash lighting and the black background stay the same. No text.
```

Then run `vfinish2.sh`: 15 fps, noise, MJPEG blockiness, the flash pop and the stamp.

## Notes
- `bo.py` is the test harness. It reads `OPENROUTER_API_KEY` from the environment, and the key is never stored. In the app, these calls run only in a Supabase Edge Function.
- `finish2.py`/`finish3.py` point their font folder (`FD`) at a scratch path. Use `assets/fonts/DSEG7Classic-Bold.ttf` and Silkscreen from `@expo-google-fonts/silkscreen` in their place.
