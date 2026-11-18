// Onboarding 7: your camera's ready. The LCD lists what we set up; then iPhone asks for the camera.
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useReducedMotion, useSharedValue, withSequence, withTiming } from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { C, F } from '@/ui/theme';
import { CamBody, PrimaryButton, todayStamp } from '@/ui/kit';
import { Battery, LcdStamp, SerifTitle } from '@/ui/digi';
import { PopIn, Rise, TypeText } from '@/ui/motion';
import { LOOKS } from '@/lib/demo';
import { set, useStore } from '@/lib/store';

const OCC: Record<string, string> = { night_out: 'NIGHT OUT', everyday: 'EVERYDAY', birthday: 'BIRTHDAY', girls_night: 'GIRLS NIGHT', house_party: 'PARTY', holiday: 'HOLIDAY' };
const MODE = { me: 'FRONT FLASH', few: 'STRIP MODE', group: 'WIDE 0.5×' } as const;

const CHAR_MS = 35;

export default function Ready() {
  const s = useStore((x) => x);
  const calm = useReducedMotion();
  const [skip, setSkip] = useState(false);
  const instant = calm || skip;
  const lines = [
    `${s.occasion ? OCC[s.occasion] : 'PARTY'} LOOKS`,
    LOOKS[s.look].name.toUpperCase(),
    s.who ? MODE[s.who] : 'FLASH ON',
    `${s.freeDigis} FREE DIGIS ✦`,
  ];
  // When each line starts typing (ms), and when the whole boot is done (≈1.5 s).
  const starts: number[] = [];
  let t = 260;
  for (const l of lines) {
    starts.push(t);
    t += l.length * CHAR_MS + 60;
  }
  const done = t;

  // LCD powers on with a 2-frame flicker (Locket "set up" glow, Opal boot).
  const lcd = useSharedValue(calm ? 1 : 0);
  useEffect(() => {
    if (!calm) lcd.set(withSequence(withTiming(0.6, { duration: 40 }), withTiming(0.2, { duration: 40 }), withTiming(1, { duration: 80 })));
    const h = setTimeout(() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {}), calm ? 0 : done);
    return () => clearTimeout(h);
  }, [calm, done, lcd]);
  const lcdStyle = useAnimatedStyle(() => ({ opacity: lcd.value }));

  const open = () => {
    set({ onboarded: true });
    // Clear onboarding off the stack so Back from the camera never lands in the questions again.
    if (router.canDismiss()) router.dismissAll();
    router.replace('/camera');
  };
  return (
    <SafeAreaView style={st.root} edges={['top', 'bottom']}>
      <View style={{ alignItems: 'center', paddingTop: 16 }}><Battery filled={6} /></View>
      <Rise style={{ paddingTop: 22, alignItems: 'center' }}>
        <SerifTitle pre="Your camera's" pink="ready" size={40} center />
      </Rise>
      <Pressable accessibilityRole="button" accessibilityLabel="Show everything now" onPress={() => setSkip(true)}>
        <CamBody style={{ marginHorizontal: 20, marginTop: 28 }}>
          <Animated.View style={[st.lcd, lcdStyle]}>
            {lines.map((l, i) => (
              <View key={l} style={st.lineRow}>
                <PopIn delay={instant ? 0 : starts[i]}><Text style={st.check}>✓ </Text></PopIn>
                {instant ? (
                  <Text style={[st.line, i === 3 && { color: '#FF7DBE' }]}>{l}</Text>
                ) : (
                  <TypeText text={l} delay={starts[i]} speed={CHAR_MS} style={[st.line, i === 3 && { color: '#FF7DBE' }]} />
                )}
              </View>
            ))}
            <Rise delay={instant ? 0 : done} style={{ alignSelf: 'flex-end', marginTop: 8 }}>
              <LcdStamp text={todayStamp()} />
            </Rise>
          </Animated.View>
        </CamBody>
      </Pressable>
      <View style={{ flex: 1 }} />
      <Rise delay={instant ? 0 : done + 120} style={{ paddingHorizontal: 20, paddingBottom: 12, gap: 10 }}>
        <PrimaryButton label="Open my camera" onPress={open} />
        <Text style={st.note}>Next, iPhone asks for the camera. Photos stay on your phone.</Text>
      </Rise>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.bg },
  lcd: { minHeight: 300, borderRadius: 10, backgroundColor: '#101012', padding: 22, justifyContent: 'center' },
  lineRow: { flexDirection: 'row', alignItems: 'center', minHeight: 36 },
  check: { fontFamily: F.pixel, fontSize: 16, color: '#7CF3B5' },
  line: { fontFamily: F.pixel, fontSize: 16, lineHeight: 36, color: '#fff' },
  note: { fontFamily: F.body, fontSize: 13, color: C.mute, textAlign: 'center' },
});
