// The free develop step: one Skia GPU pass (flash falloff, look grade, CCD grain), then the orange LCD date stamp.
// Mirrors the tested finish (docs/model-test/finish3.py, finish2.py) minus the AI relight and the segmentation pop.
import { Skia, SkImage, SkFont, TileMode, FilterMode, MipmapMode, ImageFormat, BlurStyle } from '@shopify/react-native-skia';

const SKSL = `
uniform shader image;
uniform float2 size;
uniform float seed;
uniform float strength;
uniform float3 tint;
uniform float sat;
uniform float con;
uniform float mono;
uniform float lift;
uniform float grain;
uniform float crush;

float hash(float2 p) { return fract(sin(dot(p, float2(12.9898, 78.233)) + seed) * 43758.5453); }

half4 main(float2 xy) {
  half4 c = image.eval(xy);
  float3 col = c.rgb;
  float2 uv = xy / size;
  // flash: hot centre slightly above the middle, falling off to the corners (finish3 sensor_light: 1.05 - 0.22 r^2)
  float2 d = (uv - float2(0.5, 0.45)) / float2(0.5, 0.5);
  float r = min(length(d), 1.4);
  col *= mix(1.0, 1.05 - 0.22 * r * r, strength);
  // look: saturation, contrast, black lift, colour cast, optional mono
  float l = dot(col, float3(0.299, 0.587, 0.114));
  col = mix(float3(l), col, mix(1.0, sat, strength));
  col = (col - 0.5) * mix(1.0, con, strength) + 0.5;
  col = mix(col, col * (1.0 - lift) + lift, strength);
  col *= mix(float3(1.0), tint, strength);
  float lm = dot(col, float3(0.299, 0.587, 0.114));
  // flash crush: the dim room falls away while bright, flash-lit faces stay (stand-in until the Vision pop, step 6)
  col *= mix(1.0, 0.35 + 0.65 * smoothstep(0.05, 0.62, lm), crush * strength);
  lm = dot(col, float3(0.299, 0.587, 0.114));
  col = mix(col, float3(lm), mono);
  // CCD grain, stronger in the shadows (finish3: sh = (1 - lum)^1.6)
  float sh = pow(clamp(1.0 - lm, 0.0, 1.0), 1.6);
  float g = hash(floor(xy / 1.5)) - 0.5;
  float3 chroma = float3(hash(floor(xy / 3.0) + 1.3), hash(floor(xy / 3.0) + 7.1), hash(floor(xy / 3.0) + 3.7)) - 0.5;
  col += (g * (0.5 + sh) * 0.028 + chroma * sh * 0.02 * (1.0 - mono)) * grain * strength;
  return half4(clamp(col, 0.0, 1.0), 1.0);
}`;

/** The 4 free looks (owner pick, "Pick your look"). Values tuned against docs/model-test/finish3.py. */
export const LOOK_PARAMS = {
  digicam: { tint: [0.985, 1.0, 1.03], sat: 1.18, con: 1.16, mono: 0, lift: 0, grain: 1, crush: 0.75 },
  film400: { tint: [1.06, 1.0, 0.88], sat: 1.08, con: 1.04, mono: 0, lift: 0.05, grain: 1.5, crush: 0.3 },
  y2kglow: { tint: [1.08, 0.94, 1.06], sat: 1.28, con: 1.06, mono: 0, lift: 0.06, grain: 0.8, crush: 0.45 },
  clubbw: { tint: [1, 1, 1], sat: 1, con: 1.38, mono: 1, lift: 0, grain: 1.4, crush: 0.7 },
} as const;
export type LookId = keyof typeof LOOK_PARAMS;

let effect: ReturnType<typeof Skia.RuntimeEffect.Make> | null = null;
function getEffect() {
  if (!effect) effect = Skia.RuntimeEffect.Make(SKSL);
  if (!effect) throw new Error('Develop shader failed to compile');
  return effect;
}

export type DevelopOptions = { stamp?: string | null; brand?: boolean; maxSide?: number; strength?: number; look?: LookId; lcdFont?: SkFont | null; pixelFont?: SkFont | null };

/** Develop a photo (data/base64 or file uri already loaded into an SkImage). Returns base64 JPEG. */
export function developImage(src: SkImage, o: DevelopOptions = {}) {
  const maxSide = o.maxSide ?? 1600;
  const k = Math.min(1, maxSide / Math.max(src.width(), src.height()));
  const W = Math.round(src.width() * k);
  const H = Math.round(src.height() * k);
  const surface = Skia.Surface.MakeOffscreen(W, H) ?? Skia.Surface.Make(W, H);
  if (!surface) throw new Error('No drawing surface');
  const canvas = surface.getCanvas();

  const imgShader = src.makeShaderOptions(TileMode.Clamp, TileMode.Clamp, FilterMode.Linear, MipmapMode.None, Skia.Matrix().scale(k, k));
  const L = LOOK_PARAMS[o.look ?? 'digicam'];
  const shader = getEffect().makeShaderWithChildren(
    [W, H, Math.random() * 100, o.strength ?? 1, ...L.tint, L.sat, L.con, L.mono, L.lift, L.grain, L.crush],
    [imgShader],
  );
  const paint = Skia.Paint();
  paint.setShader(shader);
  canvas.drawRect(Skia.XYWHRect(0, 0, W, H), paint);

  const m = Math.round(W * 0.055);
  if (o.stamp && o.lcdFont) {
    // DSEG7 has no apostrophe: draw "MM DD", a slanted block, then "YY", right-aligned (finish2.py stamp).
    const font = o.lcdFont;
    const size = Math.round(W * 0.042);
    font.setSize(size);
    const [rest, yy = ''] = o.stamp.split("'");
    const glow = Skia.Paint();
    glow.setColor(Skia.Color('rgba(255,140,40,0.55)'));
    glow.setMaskFilter(Skia.MaskFilter.MakeBlur(BlurStyle.Normal, Math.max(2, size / 6), true));
    const ink = Skia.Paint();
    ink.setColor(Skia.Color('#FF962A'));
    const y = H - m;
    const xYY = W - m - font.getTextWidth(yy);
    const ax = xYY - 0.3 * size;
    const restText = rest.trimEnd();
    const xRest = ax - 0.22 * size - font.getTextWidth(restText);
    const top = y - size * 0.95;
    const tick = Skia.PathBuilder.Make()
      .moveTo(ax, top)
      .lineTo(ax + 0.16 * size, top)
      .lineTo(ax + 0.06 * size, top + 0.34 * size)
      .lineTo(ax - 0.06 * size, top + 0.34 * size)
      .close()
      .build();
    for (const p of [glow, ink]) {
      canvas.drawText(restText, xRest, y, p, font);
      canvas.drawText(yy, xYY, y, p, font);
      canvas.drawPath(tick, p);
    }
  }
  if (o.brand && o.pixelFont) {
    const f = o.pixelFont;
    f.setSize(Math.round(W * 0.03));
    const ink = Skia.Paint();
    ink.setColor(Skia.Color('rgba(255,154,46,0.92)'));
    canvas.drawText('DIGI.PINK', m, H - m, ink, f);
  }
  surface.flush();
  const snap = surface.makeImageSnapshot();
  return { base64: snap.encodeToBase64(ImageFormat.JPEG, 90), width: W, height: H };
}

export async function loadImage(uri: string): Promise<SkImage> {
  const data = await Skia.Data.fromURI(uri);
  const img = Skia.Image.MakeImageFromEncoded(data);
  if (!img) throw new Error('Could not read that photo');
  return img;
}
