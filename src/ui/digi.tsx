// Digi design pieces for the picked UI (rounds 3–9, docs/design/round3/).
import { ReactNode } from 'react';
import { Modal, Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Image, ImageSource } from 'expo-image';
import { router } from 'expo-router';
import Svg, { Path, Rect } from 'react-native-svg';
import * as WebBrowser from 'expo-web-browser';
import { C, F, R } from './theme';
import { tap } from './kit';
import { FillCell, PressScale, Rise, SlideIn, TypeText } from './motion';

// The owner's chunky DIGI (Nov 17: "the first 1 but make sure the D doesnt look like an o"): 9-row pixel glyphs.
const GLYPHS: Record<'D' | 'I' | 'G', string[]> = {
  D: ['111111100', '111111110', '111000111', '111000111', '111000111', '111000111', '111000111', '111111110', '111111100'],
  I: ['111', '111', '111', '111', '111', '111', '111', '111', '111'],
  G: ['011111110', '111111111', '111000000', '111000000', '111001111', '111000111', '111000111', '111111111', '011111110'],
};

export function PixelDigi({ unit = 4.7, color = C.pink, shadow }: { unit?: number; color?: string; shadow?: string }) {
  const rects: ReactNode[] = [];
  let x0 = 0;
  (['D', 'I', 'G', 'I'] as const).forEach((ch, ci) => {
    GLYPHS[ch].forEach((row, y) =>
      [...row].forEach((on, x) => {
        if (on !== '1') return;
        const X = (x0 + x) * unit;
        const Y = y * unit;
        if (shadow) rects.push(<Rect key={`s${ci}-${x}-${y}`} x={X + unit * 0.45} y={Y + unit * 0.45} width={unit + 0.4} height={unit + 0.4} fill={shadow} />);
        rects.push(<Rect key={`${ci}-${x}-${y}`} x={X} y={Y} width={unit + 0.4} height={unit + 0.4} fill={color} />);
      }),
    );
    x0 += GLYPHS[ch][0].length + 1;
  });
  const w = (x0 - 1) * unit + unit * 0.6;
  const h = 9 * unit + unit * 0.6;
  return (
    <View accessible accessibilityRole="image" accessibilityLabel="DIGI">
      <Svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>{rects}</Svg>
    </View>
  );
}

/** The orange LCD date. DSEG7 has no apostrophe, so it's drawn as a small slanted block (like finish2.py). */
export function LcdStamp({ text, size = 15, style }: { text: string; size?: number; style?: ViewStyle }) {
  const [left, right] = text.split("'");
  const glow = { textShadowColor: 'rgba(255,120,30,0.9)', textShadowRadius: 6 };
  return (
    <View style={[{ flexDirection: 'row', alignItems: 'flex-start' }, style]} accessible accessibilityLabel={`Date stamp ${text}`}>
      <Text style={[{ fontFamily: F.lcd, fontSize: size, color: C.stamp }, glow]}>{left}</Text>
      {right !== undefined && (
        <View style={{ width: size * 0.32, height: size * 0.42, marginTop: size * 0.06, alignItems: 'center' }}>
          <View style={{ width: size * 0.14, height: size * 0.36, backgroundColor: C.stamp, transform: [{ skewX: '-18deg' }], shadowColor: C.stamp, shadowOpacity: 0.9, shadowRadius: 4 }} />
        </View>
      )}
      {right !== undefined && <Text style={[{ fontFamily: F.lcd, fontSize: size, color: C.stamp }, glow]}>{right}</Text>}
    </View>
  );
}

export function Battery({ filled, total = 6 }: { filled: number; total?: number }) {
  return (
    <View accessible accessibilityLabel={`Step ${filled} of ${total}`} style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
      <View style={{ flexDirection: 'row', gap: 3, padding: 3, borderWidth: 2, borderColor: '#55555F', borderRadius: 5 }}>
        {Array.from({ length: total }, (_, i) => (
          <FillCell key={i} on={i < filled} fresh={i === filled - 1} style={{ width: 16, height: 10, borderRadius: 1 }} />
        ))}
      </View>
      <View style={{ width: 3, height: 8, borderRadius: 1, backgroundColor: '#55555F' }} />
    </View>
  );
}

export function Chevron({ dir = 'left', color = '#fff' }: { dir?: 'left' | 'right'; color?: string }) {
  return (
    <Svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
      <Path d={dir === 'left' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'} />
    </Svg>
  );
}

/** One question per screen: back · battery · Skip, a reply line, a serif question, answers right under it (owner: not at the bottom). */
export function Question({
  step, total = 6, reply, title, pink, helper, children, foot = 'Tap one to keep going', onSkip,
}: { step: number; total?: number; reply?: string; title: string; pink: string; helper?: string; children: ReactNode; foot?: string; onSkip?: () => void }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={q.top}>
        <Pressable accessibilityRole="button" accessibilityLabel="Back" onPress={() => router.back()} style={q.icon} hitSlop={6}>
          <Chevron />
        </Pressable>
        <Battery filled={step} total={total} />
        {onSkip ? (
          <Pressable accessibilityRole="button" onPress={onSkip} style={q.skip} hitSlop={6}>
            <Text style={q.skipText}>Skip</Text>
          </Pressable>
        ) : (
          <View style={{ width: 44 }} />
        )}
      </View>
      <View style={q.head}>
        {reply ? <TypeText text={reply} style={q.reply} delay={120} /> : <Text style={q.reply}> </Text>}
        <Rise delay={40}>
          <Text accessibilityRole="header" style={q.title}>
            {title} <Text style={q.pink}>{pink}</Text>
          </Text>
        </Rise>
        {helper ? <Rise delay={90}><Text style={q.helper}>{helper}</Text></Rise> : null}
      </View>
      <View style={q.body}>{children}</View>
      <View style={{ flex: 1 }} />
      <Text style={q.foot}>{foot}</Text>
    </View>
  );
}

export function OptionTile({ title, sub, lead, selected, onPress, minHeight = 100, index = 0 }: { title: string; sub?: string; lead?: (sel: boolean) => ReactNode; selected?: boolean; onPress: () => void; minHeight?: number; index?: number }) {
  return (
    <SlideIn index={index}>
    <PressScale
      accessibilityRole="button"
      accessibilityState={{ selected }}
      onPress={() => { tap(); onPress(); }}
      style={[q.tile, { minHeight }, selected && q.tileSel]}>
      {lead ? <View style={{ width: 44, alignItems: 'center' }}>{lead(!!selected)}</View> : null}
      <View style={{ flex: 1 }}>
        <Text style={[q.tileTitle, selected && { color: C.onPink }]}>{title}</Text>
        {sub ? <Text style={[q.tileSub, selected && { color: '#3D0A24' }]}>{sub}</Text> : null}
      </View>
    </PressScale>
    </SlideIn>
  );
}

export function PhotoTile({ source, label, onPress, height = 150, selected, style, index = 0 }: { source: ImageSource | number; label: string; onPress: () => void; height?: number; selected?: boolean; style?: ViewStyle; index?: number }) {
  return (
    <SlideIn index={index} style={style}>
      <PressScale accessibilityRole="button" accessibilityLabel={label} onPress={() => { tap(); onPress(); }} style={[{ height, borderRadius: 18, overflow: 'hidden' }, selected && { borderWidth: 3, borderColor: C.pink }]}>
        <Image source={source} style={StyleSheet.absoluteFill} contentFit="cover" />
        <View style={q.shade} />
        <Text style={[q.photoLabel, selected && q.photoLabelSel]}>{label}</Text>
      </PressScale>
    </SlideIn>
  );
}

export function PhotoRow({ source, title, sub, onPress, selected, index = 0 }: { source: ImageSource | number; title: string; sub: string; onPress: () => void; selected?: boolean; index?: number }) {
  return (
    <SlideIn index={index}>
    <PressScale accessibilityRole="button" accessibilityLabel={`${title}. ${sub}`} onPress={() => { tap(); onPress(); }} style={[{ height: 158, borderRadius: 20, overflow: 'hidden' }, selected && { borderWidth: 3, borderColor: C.pink }]}>
      <Image source={source} style={StyleSheet.absoluteFill} contentFit="cover" contentPosition={{ top: '35%' }} />
      <View style={q.shadeSide} />
      <View style={{ position: 'absolute', left: 18, bottom: 16 }}>
        <Text style={{ fontFamily: F.bodyBold, fontSize: 20, color: '#fff' }}>{title}</Text>
        <Text style={{ fontFamily: F.body, fontSize: 14, color: '#E4E4EA', marginTop: 2 }}>{sub}</Text>
      </View>
    </PressScale>
    </SlideIn>
  );
}

/** Signal bars for "how often" style answers. */
export function Bars({ n, color = C.pink, off = '#33333B' }: { n: number; color?: string; off?: string }) {
  return (
    <Svg width={34} height={26} viewBox="0 0 34 26">
      {[0, 1, 2, 3].map((i) => (
        <Rect key={i} x={i * 9} y={18 - i * 6} width={6} height={8 + i * 6} rx={1.5} fill={i < n ? color : off} />
      ))}
    </Svg>
  );
}

/** Bottom sheet over the current screen (Snapchat Lens+ / Lapse pattern). */
export function Sheet({ visible, onClose, children }: { visible: boolean; onClose: () => void; children: ReactNode }) {
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={q.sheetWrap}>
        <Pressable accessibilityRole="button" accessibilityLabel="Close" style={StyleSheet.absoluteFill} onPress={onClose} />
        <View style={q.sheet}>
          <View style={q.grabber} />
          {children}
        </View>
      </View>
    </Modal>
  );
}

/** White CTA with a pink glow (FocusFlight pattern), used on money screens. */
export function GlowButton({ label, onPress, style }: { label: string; onPress: () => void; style?: ViewStyle }) {
  return (
    <Pressable accessibilityRole="button" onPress={() => { tap(); onPress(); }} style={({ pressed }) => [q.glow, pressed && { transform: [{ scale: 0.98 }] }, style]}>
      <Text style={q.glowText}>{label}</Text>
    </Pressable>
  );
}

export function SerifTitle({ pre, pink, post, size = 32, center }: { pre?: string; pink: string; post?: string; size?: number; center?: boolean }) {
  return (
    <Text accessibilityRole="header" style={{ fontFamily: F.serif, fontSize: size, lineHeight: size * 1.06, color: '#fff', textAlign: center ? 'center' : 'left' }}>
      {pre ? pre + ' ' : ''}
      <Text style={{ fontFamily: F.serifItalic, color: C.pink }}>{pink}</Text>
      {post ? ' ' + post : ''}
    </Text>
  );
}

/** "Nov 20" style date, some hours from now (trial dates are always real: reminder at +40 h, charge at +72 h). */
export function dayLabel(hoursFromNow: number, from = new Date()) {
  const d = new Date(from.getTime() + hoursFromNow * 3600 * 1000);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

const q = StyleSheet.create({
  top: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 12, paddingTop: 6 },
  icon: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center' },
  skip: { width: 44, height: 44, alignItems: 'flex-end', justifyContent: 'center' },
  skipText: { fontFamily: F.bodySemi, fontSize: 15, color: C.sub },
  head: { paddingHorizontal: 20, paddingTop: 14 },
  reply: { fontFamily: F.bodySemi, fontSize: 15, color: '#FF7DBE', marginBottom: 6, minHeight: 20 },
  title: { fontFamily: F.serif, fontSize: 40, lineHeight: 42, color: '#fff' },
  pink: { fontFamily: F.serifItalic, color: C.pink },
  helper: { fontFamily: F.body, fontSize: 15, color: C.sub, marginTop: 8 },
  body: { paddingHorizontal: 20, paddingTop: 24 },
  foot: { fontFamily: F.body, fontSize: 13, color: C.mute, textAlign: 'center', paddingVertical: 14 },
  tile: { flexDirection: 'row', alignItems: 'center', gap: 14, paddingHorizontal: 16, paddingVertical: 12, borderRadius: 18, borderWidth: 2, borderColor: '#24242B', backgroundColor: '#17171C' },
  tileSel: { backgroundColor: C.pink, borderColor: C.pink },
  tileTitle: { fontFamily: F.bodyBold, fontSize: 18, color: '#fff' },
  tileSub: { fontFamily: F.body, fontSize: 14, color: C.sub, marginTop: 2 },
  shade: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.25)' },
  shadeSide: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.38)' },
  photoLabel: { position: 'absolute', left: 10, bottom: 10, fontFamily: F.bodyBold, fontSize: 16, color: '#fff', textShadowColor: 'rgba(0,0,0,0.8)', textShadowRadius: 4 },
  photoLabelSel: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: R.pill, overflow: 'hidden', backgroundColor: C.pink, color: C.onPink, textShadowRadius: 0 },
  sheetWrap: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' },
  sheet: { backgroundColor: '#17171C', borderTopLeftRadius: 28, borderTopRightRadius: 28, paddingHorizontal: 20, paddingTop: 10, paddingBottom: 34, width: '100%', maxWidth: 430, alignSelf: 'center' },
  grabber: { width: 40, height: 5, borderRadius: 3, backgroundColor: '#3A3A44', alignSelf: 'center', marginBottom: 14 },
  glow: { height: 58, borderRadius: R.pill, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', shadowColor: C.pink, shadowOpacity: 0.55, shadowRadius: 18, shadowOffset: { width: 0, height: 8 } },
  glowText: { fontFamily: F.bodyBold, fontSize: 17, color: C.onPink },
});

/** Terms · Privacy links (Apple 3.1.2 needs working links on the paywall). Pages live at digi.pink. */
export function LegalLinks({ prefix, style }: { prefix?: string; style?: object }) {
  const open = (path: string) => WebBrowser.openBrowserAsync(`https://digi.pink/${path}`).catch(() => {});
  return (
    <Text style={[{ fontFamily: F.body, fontSize: 12, color: '#9A9AA8', textAlign: 'center' }, style]}>
      {prefix}
      <Text accessibilityRole="link" onPress={() => open('terms')} style={{ textDecorationLine: 'underline' }}>Terms</Text>
      {' · '}
      <Text accessibilityRole="link" onPress={() => open('privacy')} style={{ textDecorationLine: 'underline' }}>Privacy</Text>
    </Text>
  );
}
