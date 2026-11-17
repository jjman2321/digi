# Compose side-by-side option boards for UI round 3.
# Run from the repo root after gen.js: python3 docs/design/round3/compose.py
from PIL import Image, ImageDraw, ImageFont

R = 'docs/design/round3/png/'
H = 'docs/design/history/'
FONT = 'node_modules/@expo-google-fonts/inter/'
f = lambda w, s: ImageFont.truetype(FONT + {700: '700Bold/Inter_700Bold.ttf', 500: '500Medium/Inter_500Medium.ttf'}[w], s)
BG, PINK, SUB = (11, 11, 14), (255, 79, 163), (180, 180, 192)


def board(name, title, opts, w=390, h=844):
    """opts: list of (png path or list of paths, label, score, note, pick)"""
    pad, gap, top, foot = 40, 36, 110, 150
    widths = [(w if isinstance(o[0], str) else len(o[0]) * (int(w * 0.62) + 8)) for o in opts]
    W = pad * 2 + sum(widths) + gap * (len(opts) - 1)
    img = Image.new('RGB', (W, top + h + foot), BG)
    d = ImageDraw.Draw(img)
    d.text((pad, 34), title, font=f(700, 38), fill=(255, 255, 255))
    x = pad
    for (src, label, score, note, pick), ow in zip(opts, widths):
        if isinstance(src, str):
            im = Image.open(src).convert('RGB').resize((w, h), Image.LANCZOS)
            img.paste(im, (x, top))
        else:  # a flow: several small screens in a row
            sw, sh = int(w * 0.62), int(h * 0.62)
            for i, p in enumerate(src):
                im = Image.open(p).convert('RGB').resize((sw, sh), Image.LANCZOS)
                img.paste(im, (x + i * (sw + 8), top + (h - sh) // 2))
        if pick:
            d.rounded_rectangle((x - 10, top - 10, x + ow + 10, top + h + foot - 20), 22, outline=PINK, width=5)
        d.text((x, top + h + 16), label, font=f(700, 26), fill=(255, 255, 255))
        sc = f'{score}/10' + ('  PICK' if pick else '')
        d.text((x, top + h + 52), sc, font=f(700, 24), fill=PINK if pick else SUB)
        d.text((x, top + h + 88), note, font=f(500, 19), fill=SUB)
        x += ow + gap
    img.save(f'docs/design/round3/{name}.jpg', quality=86)
    print(name, img.size)


board('board-q1-body', '1 · Body colour', [
    (R + 'q1-pink.png', 'Pink', 9, 'It IS digi.pink. Pops on dark.', True),
    (R + 'q1-silver.png', 'Silver', 7, 'Most like a real 2005 cam. Less brand.', False),
    (R + 'q1-black.png', 'Black', 6, 'Moody, but sinks into the dark UI.', False),
])
board('board-q2-logo', '2 · Pixel DIGI: where and how big', [
    (R + 'q2-header.png', 'Big on top', 9, 'Your concept. Body says DIGI-05.', True),
    (R + 'q2-body.png', 'On the body only', 7, 'Biggest viewfinder, logo small.', False),
    (R + 'q2-both.png', 'Both', 7.5, 'DIGI twice feels repeated.', False),
])
board('board-q3-hardware', '3 · Hardware buttons from your concept', [
    (R + 'q3-none.png', 'None (zoom chips)', 7, 'Cleanest, least "camera".', False),
    (R + 'q3-bar.png', 'MODE + T/W', 8.5, 'Feels like a real digicam. T/W zoom.', True),
    (R + 'q3-full.png', '+ date and REC', 6, 'REC means video. Date shows twice.', False),
])
board('board-q4-looks', '4 · Picking a look', [
    (R + 'q4-tabs.png', 'Text tabs (combo)', 8, 'What you liked. Mixes looks + modes.', False),
    (R + 'q4-tiles.png', 'Tiles (concept)', 6, 'Shows looks, but busy. You cut it in v7.', False),
    (R + 'q4-hybrid.png', 'Mode tabs + look swatch', 8.5, 'Clean. Adds LIVE. Tap swatch for looks.', True),
])
board('board-q5-onboarding', '5 · Onboarding (screens before the camera)', [
    ([H + 'v2-combo-11/png/01-Main.png', H + 'v2-combo-11/png/02-Permission.png', R + 'q2-header.png'],
     'Combo: 2 screens', 7.5, 'Fast. No wow before the camera ask.', False),
    (['docs/design/png/0%d-%s.png' % (i, n) for i, n in [(1, 'Main'), (2, 'Age'), (3, 'Vibe'), (4, 'Pick')]],
     'v9: 10 screens (4 shown)', 4, 'Too long. Age + consent too early.', False),
    ([R + 'q5-welcome.png', R + 'q5-occasion.png', R + 'q5-source.png', R + 'q2-header.png'],
     'Tap-it first: 3 screens', 9, 'Flash wow first. Age/consent at 1st AI.', True),
])
board('board-q6-paywall', '6 · Paywall top (all with Apple-safe pricing)', [
    (R + 'q6-strips.png', 'Film strips (combo)', 7.5, 'Pretty, but not their photo.', False),
    (R + 'q6-beforeafter.png', 'Before / after', 8, 'Shows the AI. A bit busy.', False),
    (R + 'q6-pixel.png', 'Pixel DIGI + their digi', 9, 'Brand + "that\'s yours". Least text.', True),
])

board('board-logo', 'Which is our DIGI logo?', [
    (R + 'logo-concept-pink.png', 'Your concept, in pink', 9, 'Chunky, thick strokes. Brand pink.', True),
    (R + 'logo-concept-mint.png', 'Your concept, original mint', 7.5, 'Exact original. Mint clashes with pink.', False),
    (R + 'logo-v1-silk.png', 'v1: DIGI.pink', 7.5, 'Shows the domain. Thinner, less bold.', False),
])
board('board-q6-paywall-v2', 'Paywall, tightened (dated timeline fills the gap)', [
    (R + 'q6-pixel.png', 'Pixel DIGI + their digi', 9, 'No dead space. Price biggest.', True),
])

# ---- round 4 (Mobbin rework: Lapse, Kino, Unfold, Halide, Snapchat) ----
board('board-r4-onboarding', 'Onboarding v2 (from Lapse + Kino on Mobbin)', [
    ([R + 'r4-onb-a.png', R + 'r4-onb-b.png', R + 'r4-onb-c.png'],
     'The camera IS the onboarding (Lapse)', 9, 'Tap it, flash, confetti. Camera ask + "tonight?" are sheets.', True),
    ([R + 'r4-unbox.png', R + 'r4-onb-a.png', R + 'r4-onb-b.png'],
     'Unbox first, then same (Kino)', 8, 'Fun brand moment, but one extra tap.', False),
    ([R + 'q5-welcome.png', R + 'q5-occasion.png', R + 'q5-source.png'],
     'Round 3: 3 separate screens', 7, 'Works, but feels like forms.', False),
])
board('board-r4-paywall', 'Paywall v2 (from Unfold, Halide, Snapchat on Mobbin)', [
    (R + 'r4-pay-bleed.png', 'Their digi, full screen + 2 plans', 9, 'Photo sells it. Yearly vs weekly side by side.', True),
    (R + 'r4-pay-single.png', 'One plan, least text', 8.5, 'Cleanest. A/B shows yearly OR weekly.', False),
    (R + 'q6-pixel.png', 'Round 3 (photo in a frame)', 7, 'Feels like a form under a picture.', False),
])

# ---- round 5: questions in onboarding + pro paywall ----
board('board-r5-paywall', 'Paywall v3: more professional (VSCO + Halide on Mobbin)', [
    (R + 'r5-pay-pro.png', 'Photo + grouped plans', 9, 'Clean grid, icons, one trust line.', True),
    (R + 'r5-pay-glass.png', 'Frosted glass card', 8.5, 'Very premium. Photo shows less.', False),
    (R + 'r4-pay-bleed.png', 'v2 (last round)', 8, 'Good, but plain checkmarks.', False),
])
