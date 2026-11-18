# Manual tests (the owner runs these on a phone)

Add each feature's click-through checklist here when it ships.

## Onboarding and first digi (scaffold, WIP)
1. Open the app. You should see the "Your party's photobooth" welcome with two tilted prints. Tap **Let's go**.
2. Tap the shutter. The screen flashes white and the sample turns into a flash photo. Tap **Continue**.
3. Tap an occasion. It moves on by itself.
4. Pick how you found Digi, then tap **Open the camera**. iPhone asks for camera access.
5. On the camera:
   - The flash button toggles yellow/grey.
   - The zoom chips (.5 / 1× / 2) work.
   - The mode tabs DIGICAM / STRIP / ✦ AI switch, and the line under them changes.
6. Tap the shutter. You should see a white flash, then "Your digi" develops with the orange date stamp and DIGI.PINK.
7. Tap **DATE ON/OFF**. It flips. Tap **Save** to save to Photos, and **Share** to open the share sheet.

## Step 1: app setup (Nov 17) — needs the first dev build (see STATUS §4: Expo account)
1. Find **Digi** on your home screen. The icon is the white pixel DIGI on hot pink.
2. Settings → Display & Brightness → Dark. Go home. The icon turns into the pink DIGI on black. Switch back to Light.
3. Open Digi. The splash is a pink DIGI on black for a moment, then the app.
4. When the camera opens, iPhone asks: "Digi uses your camera to take photos with flash and film looks." Tap Allow.
5. There is **no** microphone question, ever.
6. Take a photo, then tap **Save**. iPhone asks only to *add* photos ("Digi saves your finished photos and strips to your library"), not to see your whole library.
7. Open the Photos app. The digi is there with the orange date and DIGI.PINK.

## Rebuild, motion and ICP pass (Nov 18). Web: https://digi.expo.app, phone: TestFlight once set up
1. First screen: the sample is **two girls at a birthday** tagged "YOUR IPHONE". Tap the pink shutter. You get a white flash and a buzz, the photo develops over about 1 second, confetti falls, and the tag says "YOUR IPHONE, BUT 2006".
2. Tap **Let's go**. The question is "What are you shooting first?" with 6 photo tiles: Night out, Everyday, Birthday, Girls' night, My own party, Holidays. There's no Wedding tile. The tiles slide in one after another. Tap one and it turns pink, then moves on by itself.
3. Pick your look: the line on top matches your pick ("Night-out looks, loaded"). Tap each of the 4 looks; the photo changes.
4. Who's in your pics → Which describes you (optional) → How did you find Digi (Pinterest is there, YouTube isn't). The battery on top fills one pink cell per step.
5. Camera ready: the screen types out its lines with ticks, then **Open my camera**.
6. Tap **AFTER DARK ✦**, then **Try After Dark ✦**, then shoot. On the consent screen the button stays off until you tick the box.
7. Developing: a pink scan line, 3 steps that tick, then a pop into the result. Hold the photo to see the before.
8. Tap **Make it Live ✦ 3** with too few digis. The Party Pack sheet says "Pay once. Cheaper than one disposable."
9. iPhone Settings → Accessibility → Motion → Reduce Motion **on**. Redo steps 1–2: there's no white flash, no confetti, and screens fade instead of sliding.
