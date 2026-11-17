// The photo "develops" into a digi (free, on-device), then: save, share, or re-light with AI.
import { useEffect, useRef, useState } from 'react';
import { Animated, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFont } from '@shopify/react-native-skia';
import { Asset as LibraryAsset, requestPermissionsAsync } from 'expo-media-library';
import * as Sharing from 'expo-sharing';
import * as Haptics from 'expo-haptics';
import { C, F } from '@/ui/theme';
import { BackButton, GhostButton, PrimaryButton, todayStamp } from '@/ui/kit';
import { developImage, loadImage } from '@/lib/develop';
import { takePending } from '@/lib/pending';
import { saveDigi } from '@/lib/files';
import { addShot, get, set, useStore } from '@/lib/store';

function goAi(u: string) {
  const s = get();
  router.push({ pathname: s.aiConsent && s.ageOk ? '/developing' : '/consent', params: { uri: u } });
}

export default function Develop() {
  const { ai } = useLocalSearchParams<{ ai?: string }>();
  const lcd = useFont(require('../../assets/fonts/DSEG7Classic-Bold.ttf'), 40);
  const pixel = useFont(require('@expo-google-fonts/silkscreen/700Bold/Silkscreen_700Bold.ttf'), 30);
  const stampOn = useStore((s) => s.stampOn);
  const freeAi = useStore((s) => s.freeAiLeft);
  const [uri, setUri] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const [reveal] = useState(() => new Animated.Value(1));
  const started = useRef(false);
  const [pending] = useState(() => takePending());

  useEffect(() => {
    const p = pending;
    if (started.current || !lcd || !pixel || !p) return;
    started.current = true;
    (async () => {
      try {
        const img = await loadImage(p.uri);
        const out = developImage(img, { stamp: stampOn ? todayStamp() : null, brand: true, lcdFont: lcd, pixelFont: pixel });
        const shot = addShot({ uri: await saveDigi(out.base64, `d${Date.now()}`), kind: 'digi', look: 'Digicam Flash' });
        setUri(shot.uri);
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
        Animated.timing(reveal, { toValue: 0, duration: 900, useNativeDriver: true }).start();
        if (ai === '1') goAi(shot.uri);
      } catch (e) {
        setErr(e instanceof Error ? e.message : 'Something went wrong.');
      }
    })();
  }, [lcd, pixel, stampOn, ai, reveal, pending]);
  const shownErr = pending ? err : 'No photo to develop.';

  const save = async () => {
    if (!uri) return;
    if (Platform.OS === 'web') return setSaved(true);
    const perm = await requestPermissionsAsync(true);
    if (!perm.granted) return;
    await LibraryAsset.create(uri);
    setSaved(true);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
  };
  const share = async () => {
    if (uri && (await Sharing.isAvailableAsync())) await Sharing.shareAsync(uri, { mimeType: 'image/jpeg', dialogTitle: 'Share your digi' });
  };

  return (
    <SafeAreaView style={st.root}>
      <View style={st.top}>
        <BackButton onPress={() => router.replace('/camera')} />
        <Text style={st.title}>Your digi</Text>
        <Pressable accessibilityRole="button" accessibilityLabel={stampOn ? 'Date stamp on' : 'Date stamp off'} onPress={() => set({ stampOn: !stampOn })} style={st.stampToggle}>
          <Text style={[st.stampToggleText, !stampOn && { color: C.mute }]}>{stampOn ? 'DATE ON' : 'DATE OFF'}</Text>
        </Pressable>
      </View>

      <View style={st.frame}>
        {uri ? <Image source={{ uri }} style={StyleSheet.absoluteFill} contentFit="contain" /> : null}
        <Animated.View pointerEvents="none" style={[StyleSheet.absoluteFill, { backgroundColor: '#fff', opacity: reveal }]} />
        {!uri && !shownErr && <Text style={st.developing}>DEVELOPING…</Text>}
        {shownErr && <Text style={[st.developing, { color: C.bad }]}>{shownErr}</Text>}
      </View>

      <View style={st.actions}>
        <Pressable accessibilityRole="button" disabled={!uri} onPress={() => uri && goAi(uri)} style={st.aiRow}>
          <View style={st.aiIcon}><Text style={{ fontSize: 18, color: C.onPink }}>✦</Text></View>
          <View style={{ flex: 1 }}>
            <Text style={st.aiTitle}>Re-light it with AI</Text>
            <Text style={st.aiSub}>Real flash, room goes dark. {freeAi > 0 ? `${freeAi} free left` : '1 digi'}</Text>
          </View>
          <Text style={st.chev}>›</Text>
        </Pressable>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <PrimaryButton label="Share" onPress={share} style={{ flex: 1 }} disabled={!uri} />
          <Pressable accessibilityRole="button" onPress={save} disabled={!uri} style={st.secondary}>
            <Text style={st.secondaryText}>{saved ? 'Saved ✓' : 'Save'}</Text>
          </Pressable>
        </View>
        <GhostButton label="Back to camera" onPress={() => router.replace('/camera')} />
      </View>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.bg },
  top: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 12 },
  title: { fontFamily: F.serif, fontSize: 26, color: '#fff' },
  stampToggle: { height: 36, paddingHorizontal: 12, borderRadius: 999, backgroundColor: C.cardHi, justifyContent: 'center' },
  stampToggleText: { fontFamily: F.pixel, fontSize: 11, color: C.stamp },
  frame: { flex: 1, marginHorizontal: 16, marginTop: 8, borderRadius: 14, overflow: 'hidden', backgroundColor: '#000', alignItems: 'center', justifyContent: 'center' },
  developing: { fontFamily: F.pixel, fontSize: 13, color: '#111' },
  actions: { padding: 16, gap: 10 },
  aiRow: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 14, borderRadius: 18, backgroundColor: C.pinkSoft, borderWidth: 2, borderColor: C.pink },
  aiIcon: { width: 40, height: 40, borderRadius: 12, backgroundColor: C.pink, alignItems: 'center', justifyContent: 'center' },
  aiTitle: { fontFamily: F.bodyBold, fontSize: 16, color: '#fff' },
  aiSub: { fontFamily: F.body, fontSize: 13, color: '#E3C6D5' },
  chev: { fontSize: 26, color: C.pink },
  secondary: { width: 110, height: 56, borderRadius: 999, backgroundColor: C.cardHi, alignItems: 'center', justifyContent: 'center' },
  secondaryText: { fontFamily: F.bodyBold, fontSize: 16, color: '#fff' },
});
