// Motion kit (learned from Mobbin flow videos, Nov 18): Duolingo-style typed replies and staggered answers,
// Lapse-style develop reveal, Locket/Opal-style "powering on". Every piece falls back to a plain fade
// (or nothing) when iPhone's Reduce Motion is on (CLAUDE.md rule 6).
import { ReactNode, useEffect, useState } from 'react';
import { Pressable, PressableProps, StyleProp, Text, TextStyle, View, ViewStyle } from 'react-native';
import Animated, {
  Easing,
  FadeIn,
  FadeInDown,
  FadeInRight,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { C } from './theme';

// Presets (motion spec, docs/design/research/motion/refs.json; extends ch. 24 §5.5).
export const SNAP = { damping: 18, stiffness: 220 }; // toggles, mode switch, press release
export const POP = { damping: 12, stiffness: 260, mass: 0.8 }; // checks, badges: small overshoot
export const SHEET = { damping: 22, stiffness: 200 }; // sheets, cards, prints: no visible bounce
export const EASE_OUT = Easing.bezier(0.2, 0.8, 0.2, 1);
export const EASE_IN = Easing.bezier(0.4, 0, 1, 1);
export const SPRING = SNAP;

/** Content that rises in (fade + 12 px), staggered by `delay`. */
export function Rise({ delay = 0, children, style }: { delay?: number; children: ReactNode; style?: StyleProp<ViewStyle> }) {
  const calm = useReducedMotion();
  const entering = calm ? FadeIn.duration(150) : FadeInDown.delay(delay).duration(280).easing(EASE_OUT);
  return (
    <Animated.View entering={entering} style={style}>
      {children}
    </Animated.View>
  );
}

/** Text that types itself out (Duolingo's speech bubble), ~24 ms a character. */
export function TypeText({ text, style, delay = 0, speed = 24, onDone }: { text: string; style?: StyleProp<TextStyle>; delay?: number; speed?: number; onDone?: () => void }) {
  const calm = useReducedMotion();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (calm) {
      onDone?.();
      return;
    }
    let i = 0;
    let t: ReturnType<typeof setTimeout>;
    const step = () => {
      i += 1;
      setN(i);
      if (i < text.length) t = setTimeout(step, speed);
      else onDone?.();
    };
    t = setTimeout(step, delay);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, calm]);
  return (
    <Text style={style} accessibilityLabel={text}>
      {calm ? text : text.slice(0, n)}
      {/* keeps the line height while typing */}
      {!calm && n === 0 ? ' ' : null}
    </Text>
  );
}

/** A Pressable that springs down to 96% while pressed. */
export function PressScale({ children, style, scaleTo = 0.97, ...rest }: PressableProps & { style?: StyleProp<ViewStyle>; scaleTo?: number; children: ReactNode }) {
  const calm = useReducedMotion();
  const s = useSharedValue(1);
  const a = useAnimatedStyle(() => ({ transform: [{ scale: s.value }] }));
  return (
    <Pressable
      {...rest}
      onPressIn={(e) => { if (!calm) s.set(withTiming(scaleTo, { duration: 90 })); rest.onPressIn?.(e); }}
      onPressOut={(e) => { s.set(withSpring(1, SNAP)); rest.onPressOut?.(e); }}>
      <Animated.View style={[style, a]}>{children}</Animated.View>
    </Pressable>
  );
}

/** Gentle up-and-down bob, for the "Tap it." bubble. */
export function Bob({ children, style }: { children: ReactNode; style?: StyleProp<ViewStyle> }) {
  const calm = useReducedMotion();
  const y = useSharedValue(0);
  useEffect(() => {
    if (!calm) y.set(withRepeat(withSequence(withTiming(-5, { duration: 650 }), withTiming(0, { duration: 650 })), -1));
  }, [calm, y]);
  const a = useAnimatedStyle(() => ({ transform: [{ translateY: y.value }] }));
  return <Animated.View style={[style, a]}>{children}</Animated.View>;
}

const CONFETTI = [C.pink, '#FFD43B', '#7CF3B5', C.stamp, '#FFFFFF'];
function Piece({ i, width }: { i: number; width: number }) {
  const t = useSharedValue(0);
  const x0 = ((i * 53) % 100) / 100;
  const drift = (((i * 37) % 60) - 30) * 1.4;
  const spin = ((i * 71) % 360) + 180;
  useEffect(() => {
    t.set(withDelay((i % 7) * 30, withTiming(1, { duration: 900 + (i % 5) * 80, easing: Easing.out(Easing.quad) })));
  }, [i, t]);
  const a = useAnimatedStyle(() => ({
    opacity: t.value < 0.85 ? 1 : (1 - t.value) / 0.15,
    transform: [{ translateY: -40 + t.value * 560 }, { translateX: drift * t.value }, { rotate: `${spin * t.value}deg` }],
  }));
  return (
    <Animated.View
      style={[{ position: 'absolute', top: 0, left: x0 * width, width: i % 3 ? 8 : 12, height: i % 2 ? 4 : 10, borderRadius: 2, backgroundColor: CONFETTI[i % CONFETTI.length] }, a]}
    />
  );
}
/** One-shot confetti burst (Lapse's "You took your first snap 🎉"). Nothing under Reduce Motion. */
export function Confetti({ width = 390, count = 30 }: { width?: number; count?: number }) {
  const calm = useReducedMotion();
  if (calm) return null;
  return (
    <View pointerEvents="none" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden' }}>
      {Array.from({ length: count }, (_, i) => <Piece key={i} i={i} width={width} />)}
    </View>
  );
}

/** The newest battery cell flashes white for 80 ms, then settles to pink (Duolingo's bar growing each step). */
export function FillCell({ on, fresh, style }: { on: boolean; fresh: boolean; style: StyleProp<ViewStyle> }) {
  const calm = useReducedMotion();
  const w = useSharedValue(fresh && !calm ? 1 : 0);
  useEffect(() => {
    if (fresh && !calm) w.set(withDelay(80, withTiming(0, { duration: 200 })));
  }, [fresh, calm, w]);
  const a = useAnimatedStyle(() => ({ opacity: w.value }));
  return (
    <View style={[style, { backgroundColor: on ? C.pink : '#26252B', overflow: 'hidden' }]}>
      {on && fresh ? <Animated.View style={[{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#FFFFFF' }, a]} /> : null}
    </View>
  );
}

/** A check mark that pops in (0 → 1 with a small overshoot). */
export function PopIn({ children, delay = 0, style }: { children: ReactNode; delay?: number; style?: StyleProp<ViewStyle> }) {
  const calm = useReducedMotion();
  const s = useSharedValue(calm ? 1 : 0);
  useEffect(() => {
    if (!calm) s.set(withDelay(delay, withSpring(1, POP)));
  }, [calm, delay, s]);
  const a = useAnimatedStyle(() => ({ transform: [{ scale: s.value }], opacity: Math.min(1, s.value * 1.5) }));
  return <Animated.View style={[style, a]}>{children}</Animated.View>;
}

/** List items that slide in from the right, 40 ms apart (Duolingo answers). Max ~5 items so it stays under 400 ms. */
export function SlideIn({ index = 0, children, style }: { index?: number; children: ReactNode; style?: StyleProp<ViewStyle> }) {
  const calm = useReducedMotion();
  const entering = calm ? FadeIn.duration(150) : FadeInRight.delay(140 + index * 40).duration(220).easing(EASE_OUT);
  return (
    <Animated.View entering={entering} style={style}>
      {children}
    </Animated.View>
  );
}

/** Let the pick land before moving on (350 ms; faster feels like a misfire). */
export const afterPick = (fn: () => void) => setTimeout(fn, 350);
