// Your After Dark: hold to see the before; Share is primary; Live ✦3 and strip ✦2 next. The paywall shows once after this.
import { useEffect, useState } from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeIn, useAnimatedStyle, useReducedMotion, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Sharing from 'expo-sharing';
import * as Haptics from 'expo-haptics';
import { Asset as LibraryAsset, requestPermissionsAsync } from 'expo-media-library';
import Svg, { Path } from 'react-native-svg';
import { C, F } from '@/ui/theme';
import { tap } from '@/ui/kit';
import { EASE_OUT, PopIn, SHEET } from '@/ui/motion';
import { DemoNote, PackSheet } from '@/ui/money';
import { takeResult } from '@/lib/pending';
import { get, set, useStore } from '@/lib/store';

export default function Result() {
  const [r] = useState(() => takeResult());
  const [before, setBefore] = useState(false);
  const calm = useReducedMotion();
  const showBefore = useSharedValue(0);
  const settle = useSharedValue(calm ? 1 : 0.97);
  const afterStyle = useAnimatedStyle(() => ({ opacity: 1 - showBefore.value }));
  const settleStyle = useAnimatedStyle(() => ({ transform: [{ scale: settle.value }] }));
  useEffect(() => {
    if (!calm) settle.set(withSpring(1, SHEET));
  }, [calm, settle]);
  const [saved, setSaved] = useState(false);
  const [pack, setPack] = useState(false);
  const [note, setNote] = useState<string | null>(null);
  const free = useStore((s) => s.freeDigis);
  const plus = useStore((s) => s.plus);

  const close = () => {
    const s = get();
    if (!s.plus && !s.paywallSeen) {
      set({ paywallSeen: true });
      router.replace('/paywall');
    } else router.dismissTo('/camera');
  };
  const share = async () => {
    if (r && (await Sharing.isAvailableAsync())) await Sharing.shareAsync(r.uri, { mimeType: 'image/jpeg', dialogTitle: 'Share your digi' });
  };
  const save = async () => {
    if (!r) return;
    if (Platform.OS !== 'web') {
      const perm = await requestPermissionsAsync(true);
      if (!perm.granted) return;
      await LibraryAsset.create(r.uri);
    }
    setSaved(true);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
  };
  const spend = (cost: number, what: string) => {
    tap();
    if (!plus && free < cost) return setPack(true);
    setNote(`${what} arrives with the backend in build step 3.`);
  };

  const hold = (on: boolean) => {
    setBefore(on);
    if (on) Haptics.selectionAsync().catch(() => {});
    showBefore.set(withTiming(on ? 1 : 0, { duration: on ? 120 : 200, easing: EASE_OUT }));
  };

  if (!r) {
    router.dismissTo('/camera');
    return null;
  }
  return (
    <SafeAreaView style={st.root} edges={['top', 'bottom']}>
      <View style={st.top}>
        <Pressable accessibilityRole="button" accessibilityLabel="Close" onPress={close} style={st.x}>
          <Svg width={18} height={18} viewBox="0 0 24 24" stroke="#fff" strokeWidth={2.4} strokeLinecap="round"><Path d="M6 6l12 12M18 6 6 18" /></Svg>
        </Pressable>
        <PopIn delay={calm ? 0 : 150}><Text style={st.pix}>AFTER DARK ✦</Text></PopIn>
        <Pressable accessibilityRole="button" onPress={() => setNote('The free redo arrives with the backend in build step 3.')} style={st.redo}><Text style={st.redoText}>Redo</Text></Pressable>
      </View>
      <Pressable accessibilityRole="imagebutton" accessibilityLabel="Your After Dark. Hold to see the before" onPressIn={() => hold(true)} onPressOut={() => hold(false)} style={st.photo}>
        <Animated.View entering={FadeIn.duration(calm ? 150 : 500)} style={[StyleSheet.absoluteFill, settleStyle]}>
          <Image source={{ uri: r.before }} style={StyleSheet.absoluteFill} contentFit="cover" transition={0} />
          <Animated.View style={[StyleSheet.absoluteFill, afterStyle]}>
            <Image source={{ uri: r.uri }} style={StyleSheet.absoluteFill} contentFit="cover" transition={0} />
          </Animated.View>
        </Animated.View>
        <Text style={st.hold}>{before ? 'BEFORE' : 'Hold for before'}</Text>
        {r.preview && <Text style={st.preview}>PREVIEW · real After Dark in step 3</Text>}
      </Pressable>
      <View style={st.row}>
        <Pressable accessibilityRole="button" onPress={share} style={[st.btn, st.primary]}><Text style={st.primaryText}>Share</Text></Pressable>
        <Pressable accessibilityRole="button" onPress={save} style={st.saveBtn}><Text style={st.darkText}>{saved ? 'Saved ✓' : 'Save'}</Text></Pressable>
      </View>
      <View style={st.row}>
        <Pressable accessibilityRole="button" onPress={() => spend(3, 'Live digi')} style={[st.btn, st.outline]}><Text style={st.darkText}>Make it Live ✦ 3</Text></Pressable>
        <Pressable accessibilityRole="button" onPress={() => spend(2, 'The After Dark strip')} style={[st.btn, st.outline]}><Text style={st.darkText}>Make a strip ✦ 2</Text></Pressable>
      </View>
      <Text style={st.left}>{plus ? 'Digi Plus' : `${free} free digi${free === 1 ? '' : 's'} left · refills Friday`}</Text>
      <PackSheet visible={pack} onClose={() => setPack(false)} onBuy={() => { setPack(false); setNote('Real payments plug in at build step 5. Nothing was charged.'); }} />
      <DemoNote visible={!!note} onClose={() => setNote(null)} />
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.bg },
  top: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingTop: 6 },
  x: { width: 44, height: 44, borderRadius: 22, backgroundColor: C.cardHi, alignItems: 'center', justifyContent: 'center' },
  pix: { fontFamily: F.pixel, fontSize: 13, color: '#FF7DBE' },
  redo: { width: 56, height: 44, alignItems: 'flex-end', justifyContent: 'center' },
  redoText: { fontFamily: F.bodySemi, fontSize: 15, color: C.sub },
  photo: { flex: 1, marginHorizontal: 14, marginTop: 8, borderRadius: 22, overflow: 'hidden', backgroundColor: '#000', maxHeight: 520 },
  hold: { position: 'absolute', top: 12, left: 12, fontFamily: F.bodyBold, fontSize: 13, color: '#fff', backgroundColor: 'rgba(0,0,0,0.55)', paddingHorizontal: 14, paddingVertical: 8, borderRadius: 999, overflow: 'hidden' },
  preview: { position: 'absolute', top: 14, right: 12, fontFamily: F.pixel, fontSize: 9, color: C.onPink, backgroundColor: '#FFD43B', paddingHorizontal: 7, paddingVertical: 3, borderRadius: 4, overflow: 'hidden' },
  row: { flexDirection: 'row', gap: 10, paddingHorizontal: 14, paddingTop: 12 },
  btn: { flex: 1, height: 54, borderRadius: 999, alignItems: 'center', justifyContent: 'center' },
  primary: { backgroundColor: C.pink },
  primaryText: { fontFamily: F.bodyBold, fontSize: 16, color: C.onPink },
  dark: { backgroundColor: '#26252B' },
  saveBtn: { width: 110, height: 54, borderRadius: 999, backgroundColor: '#26252B', alignItems: 'center', justifyContent: 'center' },
  outline: { borderRadius: 16, backgroundColor: '#17171C', borderWidth: 1.5, borderColor: '#2E2E36', height: 52 },
  darkText: { fontFamily: F.bodyBold, fontSize: 15, color: '#fff' },
  left: { fontFamily: F.body, fontSize: 13, color: C.mute, textAlign: 'center', paddingVertical: 12 },
});
