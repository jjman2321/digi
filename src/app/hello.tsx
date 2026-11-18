// Onboarding 1: "Tap it." The first flash happens on a sample photo, before any question or permission (Lapse pattern, ch. 24 §12).
import { useState } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { Asset } from 'expo-asset';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import { useFont } from '@shopify/react-native-skia';
import { C, F } from '@/ui/theme';
import { CamBody, GhostButton, PrimaryButton, todayStamp } from '@/ui/kit';
import { LcdStamp, PixelDigi, SerifTitle, Sheet } from '@/ui/digi';
import { developImage, loadImage } from '@/lib/develop';

const before = require('../../assets/samples/sample-before.jpg');

export default function Hello() {
  const lcd = useFont(require('../../assets/fonts/DSEG7Classic-Bold.ttf'), 40);
  const pixel = useFont(require('@expo-google-fonts/silkscreen/700Bold/Silkscreen_700Bold.ttf'), 30);
  const [flash] = useState(() => new Animated.Value(0));
  const [after, setAfter] = useState<string | null>(null);
  const [sheet, setSheet] = useState(false);
  const [busy, setBusy] = useState(false);

  const fire = async () => {
    if (busy || after) return setSheet(true);
    setBusy(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy).catch(() => {});
    flash.setValue(1);
    Animated.timing(flash, { toValue: 0, duration: 520, useNativeDriver: true }).start();
    try {
      const a = Asset.fromModule(before);
      await a.downloadAsync();
      const img = await loadImage(a.localUri ?? a.uri);
      const out = developImage(img, { stamp: todayStamp(), brand: true, lcdFont: lcd, pixelFont: pixel, maxSide: 1200 });
      setAfter(`data:image/jpeg;base64,${out.base64}`);
    } catch {
      setAfter(null);
    }
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
    setBusy(false);
    setTimeout(() => setSheet(true), 650);
  };

  return (
    <SafeAreaView style={st.root} edges={['top', 'bottom']}>
      <View style={st.header}>
        <PixelDigi unit={4.6} />
      </View>
      <CamBody style={{ marginHorizontal: 14 }}>
        <View style={st.view}>
          <Image source={after ? { uri: after } : before} style={StyleSheet.absoluteFill} contentFit="cover" transition={0} />
          <Text style={[st.tag, after && st.tagPink]}>{after ? "THAT'S A DIGI" : 'A NORMAL PHONE PIC'}</Text>
          {!after && <LcdStamp text={todayStamp()} style={st.stamp} />}
          <Animated.View pointerEvents="none" style={[StyleSheet.absoluteFill, { backgroundColor: '#fff', opacity: flash }]} />
        </View>
      </CamBody>

      <View style={st.bottom}>
        {!after && (
          <View style={st.coach} pointerEvents="none">
            <Text style={st.coachText}>Tap it.</Text>
            <View style={st.coachTail} />
          </View>
        )}
        <Pressable accessibilityRole="button" accessibilityLabel="Take photo" onPress={fire} style={st.shutter}>
          <View style={st.shutterIn} />
        </Pressable>
        <Text style={st.legal}>By continuing you agree to the Terms and Privacy Policy.</Text>
      </View>

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
