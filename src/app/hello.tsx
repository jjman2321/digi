// Onboarding 1: "Tap it." The first flash happens on a sample photo, before any question or permission (Lapse pattern, ch. 24 §12).
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useReducedMotion, useSharedValue, withSequence, withTiming } from 'react-native-reanimated';
import { Image } from 'expo-image';
import { Asset } from 'expo-asset';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import { useFont } from '@shopify/react-native-skia';
import { C, F } from '@/ui/theme';
import { CamBody, GhostButton, PrimaryButton, todayStamp } from '@/ui/kit';
import { LcdStamp, LegalLinks, PixelDigi, SerifTitle, Sheet } from '@/ui/digi';
import { Bob, Confetti, PressScale } from '@/ui/motion';
import { developImage, loadImage } from '@/lib/develop';

const before = require('../../assets/samples/sample2-before.jpg');

export default function Hello() {
  const lcd = useFont(require('../../assets/fonts/DSEG7Classic-Bold.ttf'), 40);
  const pixel = useFont(require('@expo-google-fonts/silkscreen/700Bold/Silkscreen_700Bold.ttf'), 30);
  const calm = useReducedMotion();
  const flash = useSharedValue(0);
  const dev = useSharedValue(0);
  const flashStyle = useAnimatedStyle(() => ({ opacity: flash.value }));
  const devStyle = useAnimatedStyle(() => ({ opacity: dev.value }));
  const [after, setAfter] = useState<string | null>(null);
  const [sheet, setSheet] = useState(false);
  const [busy, setBusy] = useState(false);

  const fire = async () => {
    if (busy || after) return setSheet(true);
    setBusy(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy).catch(() => {});
    // One flash per capture, never chained: 80 ms in, 150 ms out (no white burst under Reduce Motion).
    if (!calm) flash.set(withSequence(withTiming(0.95, { duration: 80 }), withTiming(0, { duration: 150 })));
    try {
      const a = Asset.fromModule(before);
      await a.downloadAsync();
      const img = await loadImage(a.localUri ?? a.uri);
      const out = developImage(img, { stamp: todayStamp(), brand: true, lcdFont: lcd, pixelFont: pixel, maxSide: 1200 });
      dev.set(0);
      setAfter(`data:image/jpeg;base64,${out.base64}`);
      // The digi develops over the plain photo (Lapse: blurred card → sharp photo).
      dev.set(withTiming(1, { duration: calm ? 300 : 1000 }));
    } catch {
      setAfter(null);
    }
    setTimeout(() => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {}), calm ? 300 : 1000);
    setBusy(false);
    setTimeout(() => setSheet(true), calm ? 500 : 1400);
  };

  return (
    <SafeAreaView style={st.root} edges={['top', 'bottom']}>
      <View style={st.header}>
        <PixelDigi unit={4.6} />
      </View>
      <CamBody style={{ marginHorizontal: 14 }}>
        <View style={st.view}>
          <Image source={before} style={StyleSheet.absoluteFill} contentFit="cover" transition={0} />
          {after ? (
            <Animated.View style={[StyleSheet.absoluteFill, devStyle]}>
              <Image source={{ uri: after }} style={StyleSheet.absoluteFill} contentFit="cover" transition={0} />
            </Animated.View>
          ) : null}
          <Text style={[st.tag, after && st.tagPink]}>{after ? 'YOUR IPHONE, BUT 2006' : 'YOUR IPHONE'}</Text>
          {!after && <LcdStamp text={todayStamp()} style={st.stamp} />}
          <Animated.View pointerEvents="none" style={[StyleSheet.absoluteFill, { backgroundColor: '#fff' }, flashStyle]} />
        </View>
      </CamBody>

      <View style={st.bottom}>
        {!after && (
          <Bob style={st.coach}>
            <Text style={st.coachText}>Tap it.</Text>
            <View style={st.coachTail} />
          </Bob>
        )}
        <PressScale accessibilityRole="button" accessibilityLabel="Take photo" scaleTo={0.92} onPressIn={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {})} onPress={fire} style={st.shutter}>
          <View style={st.shutterIn} />
        </PressScale>
        <LegalLinks prefix="By continuing you agree to our " style={st.legal} />
      </View>

      {after ? <Confetti /> : null}
      <Sheet visible={sheet} onClose={() => setSheet(false)}>
        <SerifTitle pre="That's a" pink="digi." />
        <Text style={st.sheetSub}>Flash, grain, the orange date. Now set up yours: 5 quick taps.</Text>
        <PrimaryButton label="Let's go" onPress={() => { setSheet(false); router.push('/occasion'); }} />
        <GhostButton label="Shoot again" onPress={() => { setSheet(false); setAfter(null); }} style={st.again} />
      </Sheet>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.bg },
  header: { alignItems: 'center', paddingTop: 12, paddingBottom: 14 },
  view: { height: 440, borderRadius: 10, overflow: 'hidden', backgroundColor: '#000' },
  tag: { position: 'absolute', top: 9, left: 10, fontFamily: F.pixel, fontSize: 11, color: '#fff', backgroundColor: 'rgba(0,0,0,0.6)', paddingHorizontal: 7, paddingVertical: 2, borderRadius: 4, overflow: 'hidden' },
  tagPink: { backgroundColor: C.pink, color: C.onPink },
  stamp: { position: 'absolute', right: 12, bottom: 10 },
  bottom: { flex: 1, alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 8, gap: 14 },
  coach: { alignItems: 'center' },
  coachText: { backgroundColor: '#fff', color: C.onPink, fontFamily: F.bodyBold, fontSize: 16, paddingHorizontal: 16, paddingVertical: 10, borderRadius: 14, overflow: 'hidden' },
  coachTail: { width: 14, height: 14, backgroundColor: '#fff', transform: [{ rotate: '45deg' }], marginTop: -8 },
  shutter: { width: 84, height: 84, borderRadius: 42, borderWidth: 4, borderColor: '#fff', alignItems: 'center', justifyContent: 'center', shadowColor: C.pink, shadowOpacity: 0.5, shadowRadius: 30 },
  shutterIn: { width: 66, height: 66, borderRadius: 33, backgroundColor: C.pink },
  legal: { fontFamily: F.body, fontSize: 12, color: C.mute, textAlign: 'center', paddingHorizontal: 24 },
  sheetSub: { fontFamily: F.body, fontSize: 15, color: C.sub, marginTop: 8, marginBottom: 18 },
  again: { marginTop: 6 },
});
