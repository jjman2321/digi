// Before the first After Dark: names the AI partners and how long photos are kept (CLAUDE.md rule 3, Apple 5.1.2(i)).
// One unticked box; the button stays off until it's ticked. Shown once.
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';
import { C, F } from '@/ui/theme';
import { CamBody, PrimaryButton, tap } from '@/ui/kit';
import { SerifTitle } from '@/ui/digi';
import { takePending } from '@/lib/pending';
import { set, useStore } from '@/lib/store';

export default function Consent() {
  const [ok, setOk] = useState(false);
  const [p] = useState(() => takePending());
  const free = useStore((s) => s.freeDigis);
  return (
    <SafeAreaView style={st.root} edges={['top', 'bottom']}>
      <View style={st.top}>
        <Pressable accessibilityRole="button" accessibilityLabel="Close" onPress={() => router.back()} style={st.x}>
          <Svg width={18} height={18} viewBox="0 0 24 24" stroke="#fff" strokeWidth={2.4} strokeLinecap="round"><Path d="M6 6l12 12M18 6 6 18" /></Svg>
        </Pressable>
      </View>
      <ScrollView contentContainerStyle={st.body}>
        {p ? (
          <CamBody style={{ marginBottom: 18 }}>
            <View style={st.view}><Image source={{ uri: p.uri }} style={StyleSheet.absoluteFill} contentFit="cover" /></View>
          </CamBody>
        ) : null}
        <Text style={st.pix}>BEFORE YOUR FIRST AFTER DARK ✦</Text>
        <SerifTitle pre="The room goes" pink="dark" />
        <Text style={st.text}>
          To re-light it, we send this one photo to our AI partners (OpenRouter and Black Forest Labs, USA). It’s deleted right after. Never used to train AI.
        </Text>
        <Pressable accessibilityRole="checkbox" accessibilityState={{ checked: ok }} onPress={() => { tap(); setOk((v) => !v); }} style={st.check}>
          <View style={[st.box, ok && st.boxOn]}>{ok ? <Text style={st.tick}>✓</Text> : null}</View>
          <Text style={st.checkText}>Everyone in this photo is 18+ and said yes</Text>
        </Pressable>
      </ScrollView>
      <View style={st.foot}>
        <PrimaryButton label="Make it After Dark ✦" disabled={!ok} onPress={() => { set({ aiConsent: true }); router.replace('/developing'); }} />
        <Text style={st.small}>{free > 0 ? `Uses 1 of your ${free} free digis · ` : ''}If a face looks off, the redo is free</Text>
      </View>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.bg },
  top: { flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: 16, paddingTop: 6 },
  x: { width: 44, height: 44, borderRadius: 22, backgroundColor: C.cardHi, alignItems: 'center', justifyContent: 'center' },
  body: { paddingHorizontal: 20, paddingBottom: 20 },
  view: { height: 230, borderRadius: 10, overflow: 'hidden', backgroundColor: '#000' },
  pix: { fontFamily: F.pixel, fontSize: 12, color: '#FF7DBE', marginBottom: 6 },
  text: { fontFamily: F.body, fontSize: 15, lineHeight: 22, color: C.sub, marginTop: 10, marginBottom: 16 },
  check: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 14, borderRadius: 16, backgroundColor: '#1C1C22', minHeight: 56 },
  box: { width: 26, height: 26, borderRadius: 7, borderWidth: 2, borderColor: C.pink, alignItems: 'center', justifyContent: 'center' },
  boxOn: { backgroundColor: C.pink },
  tick: { fontFamily: F.bodyBold, color: C.onPink, fontSize: 16 },
  checkText: { flex: 1, fontFamily: F.bodySemi, fontSize: 15, color: '#fff' },
  foot: { paddingHorizontal: 20, paddingBottom: 10, gap: 10 },
  small: { fontFamily: F.body, fontSize: 13, color: C.mute, textAlign: 'center' },
});
