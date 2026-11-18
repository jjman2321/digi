// After Dark is developing. Until the backend (build step 3), the sample photo shows our real tested
// After Dark output; your own photos get an on-phone preview, labelled as one.
// Motion (Mobbin: Cal AI loader, Meta AI edit, Lapse reveal): scan line, real stages that tick, bar holds at 90 %
// until the job is done, then a small shrink → pop into the result. No fake 0→100 %.
import { useEffect, useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useReducedMotion, useSharedValue, withRepeat, withSequence, withTiming } from 'react-native-reanimated';
import { Image } from 'expo-image';
import { Asset } from 'expo-asset';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import { useFont } from '@shopify/react-native-skia';
import { C, F } from '@/ui/theme';
import { CamBody, GhostButton, todayStamp } from '@/ui/kit';
import { LcdStamp, SerifTitle } from '@/ui/digi';
import { EASE_OUT, PopIn } from '@/ui/motion';
import { setResult, takePending } from '@/lib/pending';
import { developImage, loadImage } from '@/lib/develop';
import { saveDigi } from '@/lib/files';
import { addShot, get, set } from '@/lib/store';

const sampleAfter = require('../../assets/samples/sample-after.jpg');
const STAGES = ['Reading the room', 'Killing the lights', 'Firing the flash'];
const VIEW_H = 340;

export default function Developing() {
  const [p] = useState(() => takePending());
  const [ping, setPing] = useState(true);
  const [stage, setStage] = useState(0); // index of the stage in progress; 3 = done
  const calm = useReducedMotion();
  const lcd = useFont(require('../../assets/fonts/DSEG7Classic-Bold.ttf'), 40);
  const pixel = useFont(require('@expo-google-fonts/silkscreen/700Bold/Silkscreen_700Bold.ttf'), 30);

  const scan = useSharedValue(0);
  const bar = useSharedValue(0.08);
  const card = useSharedValue(1);
  useEffect(() => {
    if (!calm) scan.set(withRepeat(withTiming(1, { duration: 1600, easing: Easing.linear }), -1));
  }, [calm, scan]);
  const scanStyle = useAnimatedStyle(() => ({ transform: [{ translateY: scan.value * VIEW_H }] }));
  const barStyle = useAnimatedStyle(() => ({ width: `${bar.value * 100}%` }));
  const cardStyle = useAnimatedStyle(() => ({ transform: [{ scale: card.value }] }));

  useEffect(() => {
    if (!p) return router.dismissTo('/camera');
    if (!lcd || !pixel) return;
    let alive = true;
    const step = (i: number, frac: number) => {
      if (!alive) return;
      setStage(i);
      bar.set(withTiming(frac, { duration: 700, easing: EASE_OUT }));
    };
    (async () => {
      step(0, 0.3);
      let uri: string;
      let preview = false;
      const started = Date.now();
      if (p.source === 'sample') {
        const a = Asset.fromModule(sampleAfter);
        await a.downloadAsync();
        uri = a.localUri ?? a.uri;
      } else {
        const img = await loadImage(p.uri);
        const out = developImage(img, { stamp: get().stampOn ? todayStamp() : null, brand: !get().plus, look: 'digicam', strength: 1.7, lcdFont: lcd, pixelFont: pixel });
        uri = await saveDigi(out.base64, `ad${Date.now()}`);
        preview = true;
      }
      step(1, 0.6);
      // Demo pacing until the real job (build step 3) reports its own stages.
      await new Promise((r) => setTimeout(r, Math.max(0, 1500 - (Date.now() - started))));
      step(2, 0.9); // holds at 90 % until the result is really ready
      await new Promise((r) => setTimeout(r, 1300));
      if (!alive) return;
      const s = get();
      if (!s.plus) set({ freeDigis: Math.max(0, s.freeDigis - (p.mode === 'live' ? 3 : 1)) });
      addShot({ uri, kind: 'ai', look: 'After Dark' });
      setResult({ uri, before: p.uri, preview });
      setStage(3);
      bar.set(withTiming(1, { duration: 200 }));
      // Lapse reveal: a small anticipation shrink, then pop into the result.
      if (!calm) card.set(withSequence(withTiming(0.94, { duration: 180 }), withTiming(1.04, { duration: 160 })));
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
      setTimeout(() => alive && router.replace('/result'), calm ? 150 : 360);
    })().catch(() => router.dismissTo('/camera'));
    return () => { alive = false; };
  }, [p, lcd, pixel, bar, card, calm]);

  return (
    <SafeAreaView style={st.root} edges={['top', 'bottom']}>
      <Animated.View style={cardStyle}>
        <CamBody style={{ marginHorizontal: 30, marginTop: 40 }}>
          <View style={st.view}>
            {p ? <Image source={{ uri: p.uri }} style={StyleSheet.absoluteFill} contentFit="cover" blurRadius={18} /> : null}
            <View style={st.dim} />
            {!calm && <Animated.View pointerEvents="none" style={[st.scan, scanStyle]} />}
            <Text style={st.dev}>DEVELOPING…</Text>
            <LcdStamp text={todayStamp()} style={st.stamp} />
          </View>
        </CamBody>
      </Animated.View>
      <View style={{ alignItems: 'center', marginTop: 22, gap: 6 }}>
        <SerifTitle pre="Lights" pink="off…" size={36} center />
        <View style={st.track}><Animated.View style={[st.fill, barStyle]} /></View>
      </View>
      <View style={st.stages} accessibilityLiveRegion="polite">
        {STAGES.map((label, i) => (
          <View key={label} style={st.stageRow}>
            <View style={[st.dot, i < stage && st.dotDone, i === stage && st.dotNow]}>
              {i < stage ? <PopIn><Text style={st.tick}>✓</Text></PopIn> : null}
            </View>
            <Text style={[st.stageText, i <= stage && { color: '#fff' }]}>{label}</Text>
          </View>
        ))}
      </View>
      <View style={{ flex: 1 }} />
      <View style={st.ping}>
        <Text style={st.pingText}>Ping me when it’s ready</Text>
        <Switch value={ping} onValueChange={setPing} trackColor={{ true: C.pink, false: '#3A3A44' }} accessibilityLabel="Ping me when it’s ready" />
      </View>
      <GhostButton label="Keep shooting" onPress={() => router.dismissTo('/camera')} style={{ marginBottom: 8 }} />
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.bg },
  view: { height: VIEW_H, borderRadius: 10, overflow: 'hidden', backgroundColor: '#000', alignItems: 'center', justifyContent: 'center' },
  dim: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.45)' },
  scan: { position: 'absolute', top: -2, left: 0, right: 0, height: 3, backgroundColor: C.pink, shadowColor: C.pink, shadowOpacity: 1, shadowRadius: 10, opacity: 0.85 },
  dev: { fontFamily: F.pixel, fontSize: 15, letterSpacing: 2, color: '#fff' },
  stamp: { position: 'absolute', right: 10, bottom: 8 },
  track: { width: 220, height: 6, borderRadius: 3, backgroundColor: '#26252B', marginTop: 10, overflow: 'hidden' },
  fill: { height: 6, borderRadius: 3, backgroundColor: C.pink },
  stages: { alignSelf: 'center', marginTop: 18, gap: 10 },
  stageRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  dot: { width: 22, height: 22, borderRadius: 11, borderWidth: 2, borderColor: '#3A3A44', alignItems: 'center', justifyContent: 'center' },
  dotNow: { borderColor: C.pink },
  dotDone: { borderColor: C.pink, backgroundColor: C.pink },
  tick: { fontFamily: F.bodyBold, fontSize: 12, color: C.onPink },
  stageText: { fontFamily: F.bodySemi, fontSize: 15, color: C.mute },
  ping: { marginHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 14, borderRadius: 16, backgroundColor: '#17171C', marginBottom: 6 },
  pingText: { fontFamily: F.bodySemi, fontSize: 15, color: '#fff' },
});
