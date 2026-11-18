// After Dark is developing. Until the backend (build step 3), the sample photo shows our real tested
// After Dark output; your own photos get an on-phone preview, labelled as one.
import { useEffect, useState } from 'react';
import { Animated, Easing, StyleSheet, Switch, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { Asset } from 'expo-asset';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFont } from '@shopify/react-native-skia';
import { C, F } from '@/ui/theme';
import { CamBody, GhostButton, todayStamp } from '@/ui/kit';
import { LcdStamp, SerifTitle } from '@/ui/digi';
import { setResult, takePending } from '@/lib/pending';
import { developImage, loadImage } from '@/lib/develop';
import { saveDigi } from '@/lib/files';
import { addShot, get, set } from '@/lib/store';

const sampleAfter = require('../../assets/samples/sample-after.jpg');

export default function Developing() {
  const [p] = useState(() => takePending());
  const [ping, setPing] = useState(true);
  const [bar] = useState(() => new Animated.Value(0));
  const lcd = useFont(require('../../assets/fonts/DSEG7Classic-Bold.ttf'), 40);
  const pixel = useFont(require('@expo-google-fonts/silkscreen/700Bold/Silkscreen_700Bold.ttf'), 30);

  useEffect(() => {
    if (!p) return router.dismissTo('/camera');
    if (!lcd || !pixel) return;
    Animated.timing(bar, { toValue: 1, duration: 3200, easing: Easing.out(Easing.cubic), useNativeDriver: false }).start();
    let alive = true;
    (async () => {
      let uri: string;
      let preview = false;
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
      await new Promise((r) => setTimeout(r, 3000));
      if (!alive) return;
      const s = get();
      if (!s.plus) set({ freeDigis: Math.max(0, s.freeDigis - (p.mode === 'live' ? 3 : 1)) });
      addShot({ uri, kind: 'ai', look: 'After Dark' });
      setResult({ uri, before: p.uri, preview });
      router.replace('/result');
    })().catch(() => router.dismissTo('/camera'));
    return () => { alive = false; };
  }, [p, lcd, pixel, bar]);

  return (
    <SafeAreaView style={st.root} edges={['top', 'bottom']}>
      <CamBody style={{ marginHorizontal: 30, marginTop: 50 }}>
        <View style={st.view}>
          {p ? <Image source={{ uri: p.uri }} style={StyleSheet.absoluteFill} contentFit="cover" blurRadius={18} /> : null}
          <View style={st.dim} />
          <Text style={st.dev}>DEVELOPING…</Text>
          <LcdStamp text={todayStamp()} style={st.stamp} />
        </View>
      </CamBody>
      <View style={{ alignItems: 'center', marginTop: 26, gap: 6 }}>
        <SerifTitle pre="Lights" pink="off…" size={36} center />
        <Text style={st.sub}>Usually about 15 seconds</Text>
        <View style={st.track}>
          <Animated.View style={[st.fill, { width: bar.interpolate({ inputRange: [0, 1], outputRange: ['8%', '92%'] }) }]} />
        </View>
      </View>
      <View style={{ flex: 1 }} />
      <View style={st.ping}>
        <Text style={st.pingText}>Ping me when it’s ready</Text>
        <Switch value={ping} onValueChange={setPing} trackColor={{ true: C.pink, false: '#3A3A44' }} accessibilityLabel="Ping me when it's ready" />
      </View>
      <GhostButton label="Keep shooting" onPress={() => router.dismissTo('/camera')} style={{ marginBottom: 8 }} />
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.bg },
  view: { height: 360, borderRadius: 10, overflow: 'hidden', backgroundColor: '#000', alignItems: 'center', justifyContent: 'center' },
  dim: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.45)' },
  dev: { fontFamily: F.pixel, fontSize: 15, letterSpacing: 2, color: '#fff' },
  stamp: { position: 'absolute', right: 10, bottom: 8 },
  sub: { fontFamily: F.body, fontSize: 15, color: C.sub },
  track: { width: 220, height: 6, borderRadius: 3, backgroundColor: '#26252B', marginTop: 10, overflow: 'hidden' },
  fill: { height: 6, borderRadius: 3, backgroundColor: C.pink },
  ping: { marginHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 14, borderRadius: 16, backgroundColor: '#17171C', marginBottom: 6 },
  pingText: { fontFamily: F.bodySemi, fontSize: 15, color: '#fff' },
});
