// The free "Digicam" develop step: one Skia GPU pass, then the orange LCD date stamp.
// Mirrors the tested finish (research/digi-bible-2026-11/model-test/finish3.py) minus the AI relight:
// flash hot-spot + falloff, punchy contrast/saturation, cold CCD white balance, grain, vignette.
import { Skia, SkImage, SkFont, TileMode, FilterMode, MipmapMode, ImageFormat, BlurStyle } from '@shopify/react-native-skia';

const SKSL = `
uniform shader image;
uniform float2 size;
uniform float seed;
uniform float strength;

float hash(float2 p) { return fract(sin(dot(p, float2(12.9898, 78.233)) + seed) * 43758.5453); }

half4 main(float2 xy) {
  half4 c = image.eval(xy);
  float3 col = c.rgb;
  float2 uv = xy / size;
  // flash: bright centre slightly above middle, falling off to the corners
  float2 d = (uv - float2(0.5, 0.44)) / float2(0.62, 0.62);
  float r2 = dot(d, d);
  col *= mix(1.0, 1.10 - 0.42 * r2, strength);
  // punch: contrast + saturation
  float l = dot(col, float3(0.299, 0.587, 0.114));
  col = mix(float3(l), col, 1.0 + 0.16 * strength);
  col = (col - 0.5) * (1.0 + 0.12 * strength) + 0.5;
  // cold CCD white balance
  col *= mix(float3(1.0), float3(0.97, 1.0, 1.05), strength);
  // grain, stronger in shadows
  float g = hash(floor(xy / 1.5)) - 0.5;
  col += g * (0.035 + 0.05 * (1.0 - l)) * strength;
  return half4(clamp(col, 0.0, 1.0), 1.0);
}`;

let effect: ReturnType<typeof Skia.RuntimeEffect.Make> | null = null;
function getEffect() {
  if (!effect) effect = Skia.RuntimeEffect.Make(SKSL);
  if (!effect) throw new Error('Develop shader failed to compile');
  return effect;
}

export type DevelopOptions = { stamp?: string | null; brand?: boolean; maxSide?: number; strength?: number; lcdFont?: SkFont | null; pixelFont?: SkFont | null };

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
  const shader = getEffect().makeShaderWithChildren([W, H, Math.random() * 100, o.strength ?? 1], [imgShader]);
  const paint = Skia.Paint();
  paint.setShader(shader);
  canvas.drawRect(Skia.XYWHRect(0, 0, W, H), paint);

  const m = Math.round(W * 0.055);
  if (o.stamp && o.lcdFont) {
    const font = o.lcdFont;
    font.setSize(Math.round(W * 0.042));
    const glow = Skia.Paint();
    glow.setColor(Skia.Color('rgba(255,140,40,0.55)'));
    glow.setMaskFilter(Skia.MaskFilter.MakeBlur(BlurStyle.Normal, Math.max(2, W * 0.006), true));
    const ink = Skia.Paint();
    ink.setColor(Skia.Color('#FF9A2E'));
    const tw = font.getTextWidth(o.stamp);
    const x = W - m - tw;
    const y = H - m;
    canvas.drawText(o.stamp, x, y, glow, font);
    canvas.drawText(o.stamp, x, y, ink, font);
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
