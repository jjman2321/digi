// Shared UI pieces: buttons, headers, step dots, the pink digicam body and the pixel logo.
import { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View, ViewStyle, TextStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import Svg, { Path } from 'react-native-svg';
import * as Haptics from 'expo-haptics';
import { C, F, R } from './theme';

export function tap() {
  Haptics.selectionAsync().catch(() => {});
}

export function PrimaryButton({ label, onPress, style, disabled }: { label: string; onPress: () => void; style?: ViewStyle; disabled?: boolean }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={() => { tap(); onPress(); }}
      style={({ pressed }) => [s.primary, disabled && { opacity: 0.4 }, pressed && { transform: [{ scale: 0.98 }] }, style]}>
      <Text style={s.primaryText}>{label}</Text>
    </Pressable>
  );
}

export function GhostButton({ label, onPress, style }: { label: string; onPress: () => void; style?: ViewStyle }) {
  return (
    <Pressable accessibilityRole="button" onPress={onPress} style={[s.ghost, style]} hitSlop={8}>
      <Text style={s.ghostText}>{label}</Text>
    </Pressable>
  );
}

export function BackButton({ onPress }: { onPress?: () => void }) {
  return (
    <Pressable accessibilityRole="button" accessibilityLabel="Back" onPress={onPress ?? (() => router.back())} style={s.icon44} hitSlop={6}>
      <Svg width={22} height={22} viewBox="0 0 24 24" fill="none">
        <Path d="M15 5l-7 7 7 7" stroke={C.text} strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" />
      </Svg>
    </Pressable>
  );
}

export function StepDots({ step, total }: { step: number; total: number }) {
  return (
    <View accessibilityLabel={`Step ${step} of ${total}`} style={{ flexDirection: 'row', gap: 5 }}>
      {Array.from({ length: total }, (_, i) => (
        <View key={i} style={{ width: i + 1 === step ? 18 : 6, height: 6, borderRadius: 3, backgroundColor: i + 1 <= step ? C.pink : '#3A3A44' }} />
      ))}
    </View>
  );
}

export function TopBar({ step, total, onSkip, back = true }: { step?: number; total?: number; onSkip?: () => void; back?: boolean }) {
  return (
    <View style={s.topbar}>
      {back ? <BackButton /> : <View style={{ width: 44 }} />}
      {step && total ? <StepDots step={step} total={total} /> : <View />}
      {onSkip ? <GhostButton label="Skip" onPress={onSkip} style={{ width: 44, alignItems: 'flex-end', height: 44 }} /> : <View style={{ width: 44 }} />}
    </View>
  );
}

// Headline with an italic pink word: <Headline pre="Your party's" pink="photobooth" />
export function Headline({ pre, pink, post, size = 40, center, style }: { pre?: string; pink?: string; post?: string; size?: number; center?: boolean; style?: TextStyle }) {
  return (
    <Text accessibilityRole="header" style={[{ fontFamily: F.serif, fontSize: size, lineHeight: size * 1.06, color: C.text, textAlign: center ? 'center' : 'left' }, style]}>
      {pre ? pre + ' ' : ''}
      {pink ? <Text style={{ fontFamily: F.serifItalic, color: C.pink }}>{pink}</Text> : null}
      {post ? ' ' + post : ''}
    </Text>
  );
}

export function PixelLogo({ size = 18, color = C.bodyText }: { size?: number; color?: string }) {
  return (
    <Text style={{ fontFamily: F.pixel, fontSize: size, color, includeFontPadding: false }}>
      digi<Text style={{ fontSize: size * 0.72, opacity: 0.75 }}>.pink</Text>
    </Text>
  );
}

// The pink plastic digicam body that frames the viewfinder.
export function CamBody({ children, style }: { children: ReactNode; style?: ViewStyle }) {
  return (
    <LinearGradient colors={[C.bodyHi, C.bodyMid, C.bodyLo]} start={{ x: 0.2, y: 0 }} end={{ x: 0.8, y: 1 }} style={[s.body, style]}>
      <View style={s.bodyTop}>
        <LinearGradient colors={['#FFFBEA', '#F3E6B5']} style={s.flashWindow} />
        <View style={s.lens} />
        <View style={s.led} />
        <View style={{ marginLeft: 'auto' }}>
          <PixelLogo size={13} />
        </View>
      </View>
      <View style={s.screenBezel}>{children}</View>
    </LinearGradient>
  );
}

export function Stamp({ text, size = 16, style }: { text: string; size?: number; style?: TextStyle }) {
  return (
    <Text style={[{ fontFamily: F.lcd, fontSize: size, color: C.stamp, textShadowColor: 'rgba(255,120,30,0.9)', textShadowRadius: 6 }, style]}>{text}</Text>
  );
}

export function todayStamp(d = new Date()) {
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  const yy = String(d.getFullYear()).slice(2);
  return `${mm} ${dd} '${yy}`;
}

export const s = StyleSheet.create({
  primary: { height: 56, borderRadius: R.pill, backgroundColor: C.pink, alignItems: 'center', justifyContent: 'center', shadowColor: C.pink, shadowOpacity: 0.45, shadowRadius: 18, shadowOffset: { width: 0, height: 10 } },
  primaryText: { fontFamily: F.bodyBold, fontSize: 17, color: C.onPink },
  ghost: { height: 44, alignItems: 'center', justifyContent: 'center' },
  ghostText: { fontFamily: F.bodySemi, fontSize: 15, color: C.sub },
  icon44: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center' },
  topbar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingTop: 6, paddingBottom: 6 },
  body: { borderRadius: R.big, padding: 12, paddingTop: 12, shadowColor: C.pink, shadowOpacity: 0.18, shadowRadius: 24, shadowOffset: { width: 0, height: 14 } },
  bodyTop: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 4, paddingBottom: 10 },
  flashWindow: { width: 70, height: 24, borderRadius: 8, borderWidth: 2, borderColor: '#E8C9D8' },
  lens: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#1B1B3A', borderWidth: 4, borderColor: '#D98AB2' },
  led: { width: 8, height: 8, borderRadius: 4, backgroundColor: C.ok, shadowColor: C.ok, shadowOpacity: 1, shadowRadius: 6 },
  screenBezel: { borderRadius: 18, backgroundColor: '#26252B', padding: 9 },
});
