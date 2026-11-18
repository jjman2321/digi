// Home: the pink digicam (picked design, rounds 3–9): pixel DIGI on top, DIGI-05 body, MODE + T/W,
// tabs PHOTO · STRIP · AFTER DARK ✦ · LIVE ✦, look swatch and the free-digi counter.
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
import { CamBody, PrimaryButton, tap, todayStamp } from '@/ui/kit';
import { LcdStamp, PixelDigi } from '@/ui/digi';
import { FreeSheet } from '@/ui/money';
import { setPending } from '@/lib/pending';
import { LOOKS } from '@/lib/demo';
import { get, Look, refillFreeDigis, set, useStore } from '@/lib/store';

const sample = require('../../assets/samples/sample-before.jpg');
const MODES = ['PHOTO', 'STRIP', 'AFTER DARK ✦', 'LIVE ✦'] as const;
type Mode = (typeof MODES)[number];
const ZOOMS = [0, 0.05, 0.2] as const; // .5×, 1×, 2× on the back camera

export default function Camera() {
  const { demo } = useLocalSearchParams<{ demo?: string }>();
  const [perm, requestPerm] = useCameraPermissions();
  const cam = useRef<CameraView>(null);
  const [ready, setReady] = useState(false);
  const [facing, setFacing] = useState<'back' | 'front'>('back');
  const [flashOn, setFlashOn] = useState(true);
  const who = useStore((s) => s.who);
  const [zoomI, setZoomI] = useState(who === 'group' ? 0 : 1);
  const [mode, setMode] = useState<Mode>(who === 'few' ? 'STRIP' : 'PHOTO');
  const [busy, setBusy] = useState(false);
  const [freeSheet, setFreeSheet] = useState(false);
  const [flash] = useState(() => new Animated.Value(0));
  const roll = useStore((s) => s.roll);
  const free = useStore((s) => s.freeDigis);
  const plus = useStore((s) => s.plus);
  const look = useStore((s) => s.look);

  const useDemo = demo === '1' || (Platform.OS === 'web' && perm?.granted !== true);
  const paid = mode === 'AFTER DARK ✦' || mode === 'LIVE ✦';

  useEffect(() => {
    refillFreeDigis();
  }, []);
  useEffect(() => {
    if (!useDemo && perm && !perm.granted && perm.canAskAgain) requestPerm();
  }, [perm, useDemo, requestPerm]);

  const pop = () => {
    flash.setValue(1);
    Animated.timing(flash, { toValue: 0, duration: 380, useNativeDriver: true }).start();
  };

  const go = (uri: string, source: 'camera' | 'library' | 'sample') => {
    if (paid) {
      setPending({ uri, source, mode: mode === 'LIVE ✦' ? 'live' : 'afterdark' });
      router.push(get().aiConsent ? '/developing' : '/consent');
    } else {
      setPending({ uri, source });
      router.push('/develop');
    }
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
        go(a.localUri ?? a.uri, 'sample');
      } else {
        const pic = await cam.current.takePictureAsync({ quality: 0.92, shutterSound: false });
        go(pic.uri, 'camera');
      }
    } finally {
      setBusy(false);
    }
  };

  const pickPhoto = async () => {
    const r = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ['images'], quality: 0.92 });
    if (!r.canceled && r.assets[0]) go(r.assets[0].uri, 'library');
  };

  const pickMode = (m: Mode) => {
    tap();
    setMode(m);
    if ((m === 'AFTER DARK ✦' || m === 'LIVE ✦') && !get().aiConsent) setFreeSheet(true);
  };
  const nextLook = () => {
    tap();
    const keys = Object.keys(LOOKS) as Look[];
    set({ look: keys[(keys.indexOf(get().look) + 1) % keys.length] });
  };

  const denied = !useDemo && perm && !perm.granted && !perm.canAskAgain;
  const zoomBy = (d: number) => { tap(); setZoomI((i) => Math.max(0, Math.min(ZOOMS.length - 1, i + d))); };

  return (
    <SafeAreaView style={st.root} edges={['top', 'bottom']}>
      {/* header: settings · pixel DIGI · flash */}
      <View style={st.top}>
        <Pressable accessibilityRole="button" accessibilityLabel="Settings" onPress={() => router.push('/settings')} style={st.round}>
          <Svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round">
            <Path d="M4 7h10M18 7h2M4 17h4M12 17h8" />
            <Circle cx={16} cy={7} r={2} />
            <Circle cx={10} cy={17} r={2} />
          </Svg>
        </Pressable>
        <PixelDigi unit={4.2} />
        <Pressable accessibilityRole="button" accessibilityLabel={flashOn ? 'Flash on' : 'Flash off'} onPress={() => { tap(); setFlashOn((v) => !v); }} style={[st.round, flashOn && { backgroundColor: C.flash }]}>
          <Svg width={20} height={20} viewBox="0 0 24 24">
            <Path d="M13.5 2 4 14h6.5L9 22l11-13h-7z" fill={flashOn ? '#2B2200' : '#fff'} />
          </Svg>
        </Pressable>
      </View>
      <View style={{ alignItems: 'center', paddingBottom: 10 }}>
        <Pressable accessibilityRole="button" accessibilityLabel="Your roll" onPress={() => router.push('/roll')} style={st.pill}>
          <View style={st.dot} />
          <Text style={st.pillText}>{roll.length ? `My roll · ${roll.length}` : 'Just me'}</Text>
          <Text style={[st.pillText, { color: C.mute }]}>⌄</Text>
        </Pressable>
      </View>

      {/* the camera body + viewfinder + hardware buttons */}
      <CamBody style={{ marginHorizontal: 14 }}>
        <View style={st.view}>
          {useDemo ? (
            <Image source={sample} style={StyleSheet.absoluteFill} contentFit="cover" />
          ) : denied ? (
            <View style={st.denied}>
              <Text style={st.deniedTitle}>No camera? You can still play.</Text>
              <Text style={st.deniedSub}>Try every look on a photo you already have, or turn the camera on in Settings.</Text>
              <PrimaryButton label="Pick a photo" onPress={pickPhoto} style={{ alignSelf: 'stretch', marginTop: 8 }} />
            </View>
          ) : perm?.granted ? (
            <CameraView
              ref={cam}
              style={StyleSheet.absoluteFill}
              facing={facing}
              flash={flashOn ? (facing === 'front' ? 'screen' : 'on') : 'off'}
              zoom={facing === 'front' ? 0 : ZOOMS[zoomI]}
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
              <Text style={[st.hudText, st.hudR, { color: paid ? '#FF7DBE' : '#FFE45C' }]}>{paid ? mode.replace(' ✦', '') : flashOn ? 'FLASH' : 'NO FLASH'}</Text>
              <Text style={[st.hudText, st.zoomHud]}>{['.5×', '1×', '2×'][zoomI]}</Text>
              <LcdStamp text={todayStamp()} style={st.stamp} />
            </>
          )}
          <Animated.View pointerEvents="none" style={[StyleSheet.absoluteFill, { backgroundColor: '#fff', opacity: flash }]} />
        </View>
        <View style={st.hw}>
          <Pressable accessibilityRole="button" accessibilityLabel={`Look: ${LOOKS[look].name}. Tap for the next look`} onPress={nextLook} style={st.hwBtn}>
            <Text style={st.hwText}>MODE</Text>
          </Pressable>
          <Text style={[st.hwText, { marginLeft: 'auto', color: '#A33A72' }]}>ZOOM</Text>
          <Pressable accessibilityRole="button" accessibilityLabel="Zoom in" onPress={() => zoomBy(1)} style={st.hwRound}><Text style={st.hwTW}>T</Text></Pressable>
          <Pressable accessibilityRole="button" accessibilityLabel="Zoom out" onPress={() => zoomBy(-1)} style={st.hwRound}><Text style={st.hwTW}>W</Text></Pressable>
        </View>
      </CamBody>

      {/* mode tabs */}
      <View style={st.modes} accessibilityRole="tablist">
        {MODES.map((m) => (
          <Pressable key={m} accessibilityRole="tab" accessibilityState={{ selected: mode === m }} onPress={() => pickMode(m)} style={st.modeBtn}>
            <Text style={[st.modeText, mode === m && { color: '#fff' }, mode !== m && m.includes('✦') && { color: '#FF7DBE' }]}>{m}</Text>
            <View style={[st.modeDot, { opacity: mode === m ? 1 : 0 }]} />
          </Pressable>
        ))}
      </View>

      {/* shutter row: last digi · shutter · look swatch */}
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
        <Pressable accessibilityRole="button" accessibilityLabel={paid ? `Take photo for ${mode.replace(' ✦', '')}` : 'Take photo'} onPress={shoot} style={st.shutter}>
          <View style={[st.shutterIn, paid && { backgroundColor: C.pink }]} />
        </Pressable>
        <Pressable accessibilityRole="button" accessibilityLabel={`Look: ${LOOKS[look].name}. Tap for the next look`} onPress={nextLook} style={st.swatchWrap}>
          <View style={st.swatch}><Image source={LOOKS[look].img} style={StyleSheet.absoluteFill} contentFit="cover" /></View>
          <Text style={st.swatchText}>{LOOKS[look].name} ⌃</Text>
        </Pressable>
      </View>
      <View style={st.footRow}>
        <Pressable accessibilityRole="button" accessibilityLabel="Flip camera" onPress={() => { tap(); setFacing((f) => (f === 'back' ? 'front' : 'back')); }} style={st.flip}>
          <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <Path d="M20 7h-9a5 5 0 0 0 0 10h1M17 4l3 3-3 3M4 17h9a5 5 0 0 0 0-10h-1M7 20l-3-3 3-3" />
          </Svg>
        </Pressable>
        <Pressable accessibilityRole="button" accessibilityLabel={plus ? 'Digi Plus' : `${free} free digis. How free digis work`} onPress={() => setFreeSheet(true)} style={st.counter}>
          <Text style={st.counterText}>{plus ? 'DIGI PLUS ✦' : `${free} FREE DIGI${free === 1 ? '' : 'S'} ✦`}</Text>
        </Pressable>
        <View style={{ width: 44 }} />
      </View>

      <FreeSheet visible={freeSheet} onClose={() => setFreeSheet(false)} onTry={() => { setFreeSheet(false); setMode((m) => (m === 'LIVE ✦' ? m : 'AFTER DARK ✦')); }} />
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.bg },
  top: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingTop: 8, paddingBottom: 6 },
  round: { width: 44, height: 44, borderRadius: 22, backgroundColor: C.cardHi, alignItems: 'center', justifyContent: 'center' },
  pill: { flexDirection: 'row', alignItems: 'center', gap: 8, height: 36, paddingHorizontal: 14, borderRadius: 999, backgroundColor: C.cardHi },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: C.pink },
  pillText: { fontFamily: F.bodySemi, fontSize: 14, color: '#fff' },
  view: { height: 330, borderRadius: 10, overflow: 'hidden', backgroundColor: '#000' },
  hudL: { position: 'absolute', top: 9, left: 10, flexDirection: 'row', alignItems: 'center', gap: 8 },
  hudR: { position: 'absolute', top: 9, right: 10 },
  zoomHud: { position: 'absolute', bottom: 12, left: 12 },
  hudText: { fontFamily: F.pixel, fontSize: 12, color: '#fff', textShadowColor: 'rgba(0,0,0,0.85)', textShadowRadius: 2 },
  stamp: { position: 'absolute', bottom: 10, right: 12 },
  denied: { flex: 1, padding: 24, alignItems: 'center', justifyContent: 'center', gap: 8 },
  deniedTitle: { fontFamily: F.bodyBold, fontSize: 18, color: '#fff', textAlign: 'center' },
  deniedSub: { fontFamily: F.body, fontSize: 14, color: C.sub, textAlign: 'center' },
  hw: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingTop: 10, paddingHorizontal: 2 },
  hwBtn: { height: 44, paddingHorizontal: 14, borderRadius: 999, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', shadowColor: '#C97FA6', shadowOpacity: 1, shadowRadius: 0, shadowOffset: { width: 0, height: 2 } },
  hwRound: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', shadowColor: '#C97FA6', shadowOpacity: 1, shadowRadius: 0, shadowOffset: { width: 0, height: 2 } },
  hwText: { fontFamily: F.pixel, fontSize: 12, color: '#8E2D62' },
  hwTW: { fontFamily: F.bodyBold, fontSize: 14, color: '#8E2D62' },
  modes: { flexDirection: 'row', justifyContent: 'center', gap: 16, paddingTop: 10 },
  modeBtn: { alignItems: 'center', gap: 4, minHeight: 44, justifyContent: 'center', paddingHorizontal: 2 },
  modeText: { fontFamily: F.bodyBold, fontSize: 13, letterSpacing: 1.2, color: C.mute },
  modeDot: { width: 5, height: 5, borderRadius: 3, backgroundColor: C.pink },
  shutterRow: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 30, minHeight: 100 },
  thumb: { width: 52, height: 52, borderRadius: 12, borderWidth: 2, borderColor: '#fff', transform: [{ rotate: '-6deg' }], alignItems: 'center', justifyContent: 'center', backgroundColor: C.cardHi },
  thumbImg: { width: '100%', height: '100%', borderRadius: 10 },
  badge: { position: 'absolute', top: -8, right: -8, width: 22, height: 22, borderRadius: 11, backgroundColor: C.pink, alignItems: 'center', justifyContent: 'center' },
  badgeText: { fontFamily: F.bodyBold, fontSize: 12, color: C.onPink },
  shutter: { width: 84, height: 84, borderRadius: 42, borderWidth: 4, borderColor: '#fff', alignItems: 'center', justifyContent: 'center', shadowColor: C.pink, shadowOpacity: 0.35, shadowRadius: 30 },
  shutterIn: { width: 66, height: 66, borderRadius: 33, backgroundColor: '#fff' },
  swatchWrap: { alignItems: 'center', gap: 4, minWidth: 64 },
  swatch: { width: 52, height: 52, borderRadius: 26, overflow: 'hidden', borderWidth: 2, borderColor: '#fff' },
  swatchText: { fontFamily: F.bodySemi, fontSize: 11, color: C.sub },
  footRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 22, paddingBottom: 6 },
  flip: { width: 44, height: 44, borderRadius: 22, backgroundColor: C.cardHi, alignItems: 'center', justifyContent: 'center' },
  counter: { minHeight: 44, paddingHorizontal: 12, justifyContent: 'center' },
  counterText: { fontFamily: F.pixel, fontSize: 11, color: C.sub, letterSpacing: 0.5 },
});
