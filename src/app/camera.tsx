// Home: the pink digicam. Big viewfinder, text mode tabs, shutter in the middle (approved v6 layout).
import { useEffect, useRef, useState } from 'react';
import { Animated, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import { Asset } from 'expo-asset';
import * as Haptics from 'expo-haptics';
import { router, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, Path, Rect } from 'react-native-svg';
import { C, F } from '@/ui/theme';
import { CamBody, PrimaryButton, Stamp, tap, todayStamp } from '@/ui/kit';
import { setPending } from '@/lib/pending';
import { useStore } from '@/lib/store';

const sample = require('../../assets/samples/sample-before.jpg');
const MODES = ['DIGICAM', 'STRIP', '✦ AI'] as const;
type Mode = (typeof MODES)[number];

export default function Camera() {
  const { demo } = useLocalSearchParams<{ demo?: string }>();
  const [perm, requestPerm] = useCameraPermissions();
  const cam = useRef<CameraView>(null);
  const [ready, setReady] = useState(false);
  const [facing, setFacing] = useState<'back' | 'front'>('back');
  const [flashOn, setFlashOn] = useState(true);
  const [zoom, setZoom] = useState<0 | 0.05 | 0.2>(0.05);
  const [mode, setMode] = useState<Mode>('DIGICAM');
  const [busy, setBusy] = useState(false);
  const flash = useRef(new Animated.Value(0)).current;
  const roll = useStore((s) => s.roll);
  const freeAi = useStore((s) => s.freeAiLeft);

  const useDemo = demo === '1' || (Platform.OS === 'web' && perm?.granted !== true);

  useEffect(() => {
    if (!useDemo && perm && !perm.granted && perm.canAskAgain) requestPerm();
  }, [perm, useDemo, requestPerm]);

  const pop = () => {
    flash.setValue(1);
    Animated.timing(flash, { toValue: 0, duration: 380, useNativeDriver: true }).start();
  };

  const shoot = async () => {
    if (busy) return;
    if (mode === 'STRIP') return router.push('/strip');
    setBusy(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy).catch(() => {});
    pop();
    try {
      if (useDemo || !cam.current || !ready) {
        const a = Asset.fromModule(sample);
        await a.downloadAsync();
        setPending({ uri: a.localUri ?? a.uri, source: 'sample' });
      } else {
        const pic = await cam.current.takePictureAsync({ quality: 0.92, shutterSound: false });
        setPending({ uri: pic.uri, source: 'camera' });
      }
      router.push({ pathname: '/develop', params: { ai: mode === '✦ AI' ? '1' : '0' } });
    } finally {
      setBusy(false);
    }
  };

  const pickPhoto = async () => {
    const r = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ['images'], quality: 0.92 });
    if (!r.canceled && r.assets[0]) {
      setPending({ uri: r.assets[0].uri, source: 'library' });
      router.push({ pathname: '/develop', params: { ai: mode === '✦ AI' ? '1' : '0' } });
    }
  };

  const denied = !useDemo && perm && !perm.granted && !perm.canAskAgain;

  return (
    <SafeAreaView style={st.root} edges={['top', 'bottom']}>
      {/* top row */}
      <View style={st.top}>
        <Pressable accessibilityRole="button" accessibilityLabel="Settings" onPress={() => router.push('/settings')} style={st.round}>
          <Svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round">
            <Path d="M4 7h10M18 7h2M4 17h4M12 17h8" />
            <Circle cx={16} cy={7} r={2} />
            <Circle cx={10} cy={17} r={2} />
          </Svg>
        </Pressable>
        <Pressable accessibilityRole="button" accessibilityLabel="Your roll" onPress={() => router.push('/roll')} style={st.pill}>
          <View style={st.dot} />
          <Text style={st.pillText}>{roll.length ? `My roll · ${roll.length}` : 'Just me'}</Text>
        </Pressable>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={flashOn ? 'Flash on' : 'Flash off'}
          onPress={() => { tap(); setFlashOn((v) => !v); }}
          style={[st.round, flashOn && { backgroundColor: C.flash }]}>
          <Svg width={20} height={20} viewBox="0 0 24 24">
            <Path d="M13.5 2 4 14h6.5L9 22l11-13h-7z" fill={flashOn ? '#2B2200' : '#fff'} />
          </Svg>
        </Pressable>
      </View>

      {/* the camera body + viewfinder */}
      <CamBody style={{ marginHorizontal: 14 }}>
        <View style={st.view}>
          {useDemo ? (
            <Image source={sample} style={StyleSheet.absoluteFill} contentFit="cover" />
          ) : denied ? (
            <View style={st.denied}>
              <Text style={st.deniedTitle}>Camera is off for Digi</Text>
              <Text style={st.deniedSub}>Turn it on in Settings, or use a photo you already have.</Text>
              <PrimaryButton label="Pick a photo" onPress={pickPhoto} style={{ alignSelf: 'stretch', marginTop: 8 }} />
            </View>
          ) : perm?.granted ? (
            <CameraView
              ref={cam}
              style={StyleSheet.absoluteFill}
              facing={facing}
              flash={flashOn ? (facing === 'front' ? 'screen' : 'on') : 'off'}
              zoom={zoom}
              animateShutter={false}
              mirror={facing === 'front'}
              onCameraReady={() => setReady(true)}
            />
          ) : (
            <View style={StyleSheet.absoluteFill} />
          )}

          {!denied && (
            <>
              <View style={st.hudL} pointerEvents="none">
                <Svg width={26} height={13} viewBox="0 0 26 13">
                  <Rect x={1} y={1} width={21} height={11} rx={2} fill="none" stroke="#fff" strokeWidth={1.6} />
                  <Rect x={22.5} y={4} width={2.5} height={5} rx={1} fill="#fff" />
                  <Rect x={3} y={3} width={5} height={7} fill="#7CF3B5" />
                  <Rect x={9} y={3} width={5} height={7} fill="#7CF3B5" />
                  <Rect x={15} y={3} width={5} height={7} fill="#7CF3B5" />
                </Svg>
                <Text style={st.hudText}>3.2M</Text>
              </View>
              {flashOn && <Text style={[st.hudText, st.hudR, { color: '#FFE45C' }]}>FLASH</Text>}
              <View style={st.zoomRow}>
                {([['.5', 0], ['1×', 0.05], ['2', 0.2]] as const).map(([l, z]) => (
                  <Pressable key={l} accessibilityRole="button" accessibilityLabel={`Zoom ${l}`} onPress={() => setZoom(z)} style={st.zoom}>
                    <Text style={[st.zoomText, zoom === z && { color: C.flash, fontFamily: F.bodyBold }]}>{l}</Text>
                  </Pressable>
                ))}
              </View>
              <Stamp text={todayStamp()} size={15} style={st.stamp} />
            </>
          )}
          <Animated.View pointerEvents="none" style={[StyleSheet.absoluteFill, { backgroundColor: '#fff', opacity: flash }]} />
        </View>
      </CamBody>

      {/* mode tabs */}
      <View style={st.modes}>
        {MODES.map((m) => (
          <Pressable key={m} accessibilityRole="tab" accessibilityState={{ selected: mode === m }} onPress={() => { tap(); setMode(m); }} style={st.modeBtn}>
            <Text style={[st.modeText, mode === m && { color: '#fff' }, m === '✦ AI' && mode !== m && { color: C.pink }]}>{m}</Text>
            <View style={[st.modeDot, { opacity: mode === m ? 1 : 0 }]} />
          </Pressable>
        ))}
      </View>
      <Text style={st.lookLine}>
        {mode === 'DIGICAM' && 'Flash · 2005 CCD · free'}
        {mode === 'STRIP' && '4 shots, one booth strip · free'}
        {mode === '✦ AI' && `AI re-light · ${freeAi > 0 ? `${freeAi} free left` : 'uses 1 digi'}`}
      </Text>

      {/* shutter row */}
      <View style={st.shutterRow}>
        <Pressable accessibilityRole="button" accessibilityLabel={roll[0] ? `Last digi, ${roll.length} in your roll` : 'Pick a photo from your library'} onPress={roll[0] ? () => router.push('/roll') : pickPhoto} style={st.thumb}>
          {roll[0] ? (
            <>
              <Image source={{ uri: roll[0].uri }} style={st.thumbImg} contentFit="cover" />
              <View style={st.badge}><Text style={st.badgeText}>{roll.length}</Text></View>
            </>
          ) : (
            <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <Rect x={3} y={4} width={18} height={16} rx={3} />
              <Circle cx={9} cy={10} r={1.8} />
              <Path d="M21 16l-5-5-8 8" />
            </Svg>
          )}
        </Pressable>

        <Pressable accessibilityRole="button" accessibilityLabel="Take photo" onPress={shoot} style={st.shutter}>
          <View style={[st.shutterIn, mode === '✦ AI' && { backgroundColor: C.pink }]} />
        </Pressable>

        <Pressable accessibilityRole="button" accessibilityLabel="Flip camera" onPress={() => { tap(); setFacing((f) => (f === 'back' ? 'front' : 'back')); }} style={st.round52}>
          <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <Path d="M20 7h-3l-2-3H9L7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z" />
            <Path d="M9 13a3 3 0 0 1 5.2-2M15 13a3 3 0 0 1-5.2 2M14.5 9.5v1.7h-1.7M9.5 16.5v-1.7h1.7" />
          </Svg>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.bg },
  top: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingTop: 8, paddingBottom: 12 },
  round: { width: 44, height: 44, borderRadius: 22, backgroundColor: C.cardHi, alignItems: 'center', justifyContent: 'center' },
  round52: { width: 52, height: 52, borderRadius: 26, backgroundColor: C.cardHi, alignItems: 'center', justifyContent: 'center' },
  pill: { flexDirection: 'row', alignItems: 'center', gap: 8, height: 40, paddingHorizontal: 16, borderRadius: 999, backgroundColor: C.cardHi },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: C.pink },
  pillText: { fontFamily: F.bodySemi, fontSize: 14, color: '#fff' },
  view: { height: 400, borderRadius: 10, overflow: 'hidden', backgroundColor: '#000' },
  hudL: { position: 'absolute', top: 9, left: 10, flexDirection: 'row', alignItems: 'center', gap: 8 },
  hudR: { position: 'absolute', top: 9, right: 10 },
  hudText: { fontFamily: F.pixel, fontSize: 12, color: '#fff', textShadowColor: 'rgba(0,0,0,0.85)', textShadowRadius: 2 },
  zoomRow: { position: 'absolute', bottom: 10, alignSelf: 'center', flexDirection: 'row', gap: 6 },
  zoom: { width: 34, height: 34, borderRadius: 17, backgroundColor: 'rgba(0,0,0,0.5)', alignItems: 'center', justifyContent: 'center' },
  zoomText: { fontFamily: F.bodySemi, fontSize: 12, color: '#fff' },
  stamp: { position: 'absolute', bottom: 12, right: 12 },
  denied: { flex: 1, padding: 24, alignItems: 'center', justifyContent: 'center', gap: 8 },
  deniedTitle: { fontFamily: F.bodyBold, fontSize: 18, color: '#fff', textAlign: 'center' },
  deniedSub: { fontFamily: F.body, fontSize: 14, color: C.sub, textAlign: 'center' },
  modes: { flexDirection: 'row', justifyContent: 'center', gap: 22, paddingTop: 16 },
  modeBtn: { alignItems: 'center', gap: 4, minHeight: 44, justifyContent: 'center' },
  modeText: { fontFamily: F.bodyBold, fontSize: 13, letterSpacing: 1.5, color: C.mute },
  modeDot: { width: 5, height: 5, borderRadius: 3, backgroundColor: C.pink },
  lookLine: { fontFamily: F.body, fontSize: 13, color: C.sub, textAlign: 'center' },
  shutterRow: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 30 },
  thumb: { width: 52, height: 52, borderRadius: 12, borderWidth: 2, borderColor: '#fff', transform: [{ rotate: '-6deg' }], alignItems: 'center', justifyContent: 'center', backgroundColor: C.cardHi },
  thumbImg: { width: '100%', height: '100%', borderRadius: 10 },
  badge: { position: 'absolute', top: -8, right: -8, width: 22, height: 22, borderRadius: 11, backgroundColor: C.pink, alignItems: 'center', justifyContent: 'center' },
  badgeText: { fontFamily: F.bodyBold, fontSize: 12, color: C.onPink },
  shutter: { width: 84, height: 84, borderRadius: 42, borderWidth: 4, borderColor: '#fff', alignItems: 'center', justifyContent: 'center', shadowColor: C.pink, shadowOpacity: 0.35, shadowRadius: 30 },
  shutterIn: { width: 66, height: 66, borderRadius: 33, backgroundColor: '#fff' },
});
