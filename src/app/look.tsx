// Onboarding 3: pick your look. Same photo, 4 looks; the pick sets the camera (Mobbin: Halide "Pick Your Look", Once).
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { C, F } from '@/ui/theme';
import { CamBody, PrimaryButton, tap, todayStamp } from '@/ui/kit';
import { Battery, Chevron, LcdStamp } from '@/ui/digi';
import { LOOKS } from '@/lib/demo';
import { Look, set, useStore } from '@/lib/store';

const REPLY: Record<string, string> = {
  birthday: 'Birthday looks, loaded 🎂', house_party: 'House party looks, loaded', night_out: 'Night-out looks, loaded',
  holiday: 'Holiday looks, loaded 🎄', wedding: 'Wedding looks, loaded', just_us: 'Nice. Just you and yours.',
};

export default function LookScreen() {
  const look = useStore((s) => s.look);
  const occasion = useStore((s) => s.occasion);
  const next = () => router.push('/who');
  const keys = Object.keys(LOOKS) as Look[];
  return (
    <SafeAreaView style={st.root} edges={['top', 'bottom']}>
      <View style={st.top}>
        <Pressable accessibilityRole="button" accessibilityLabel="Back" onPress={() => router.back()} style={st.icon}><Chevron /></Pressable>
        <Battery filled={2} />
        <Pressable accessibilityRole="button" onPress={next} style={st.skip}><Text style={st.skipText}>Skip</Text></Pressable>
      </View>
      <View style={{ paddingHorizontal: 20, paddingTop: 14 }}>
        <Text style={st.reply}>{occasion ? REPLY[occasion] : ' '}</Text>
        <Text accessibilityRole="header" style={st.title}>Pick your <Text style={st.pink}>look</Text></Text>
        <Text style={st.helper}>Same photo, 4 looks. Change it any time.</Text>
      </View>
      <CamBody style={{ marginHorizontal: 16, marginTop: 18 }}>
        <View style={st.view}>
          <Image source={LOOKS[look].img} style={StyleSheet.absoluteFill} contentFit="cover" transition={120} />
          <Text style={st.tag}>{LOOKS[look].name.toUpperCase()}</Text>
          <LcdStamp text={todayStamp()} style={st.stamp} />
        </View>
      </CamBody>
      <View style={st.row}>
        {keys.map((k) => (
          <Pressable key={k} accessibilityRole="button" accessibilityState={{ selected: look === k }} accessibilityLabel={LOOKS[k].name} onPress={() => { tap(); set({ look: k }); }} style={st.sw}>
            <View style={[st.swImg, look === k && st.swSel]}>
              <Image source={LOOKS[k].img} style={StyleSheet.absoluteFill} contentFit="cover" />
            </View>
            <Text style={[st.swText, look === k && { color: '#fff', fontFamily: F.bodyBold }]}>{LOOKS[k].name}</Text>
          </Pressable>
        ))}
      </View>
      <View style={{ flex: 1 }} />
      <View style={{ paddingHorizontal: 20, paddingBottom: 12 }}>
        <PrimaryButton label={`Use ${LOOKS[look].name}`} onPress={next} />
      </View>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.bg },
  top: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 12, paddingTop: 6 },
  icon: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center' },
  skip: { width: 44, height: 44, alignItems: 'flex-end', justifyContent: 'center' },
  skipText: { fontFamily: F.bodySemi, fontSize: 15, color: C.sub },
  reply: { fontFamily: F.bodySemi, fontSize: 15, color: '#FF7DBE', marginBottom: 6, minHeight: 20 },
  title: { fontFamily: F.serif, fontSize: 40, lineHeight: 42, color: '#fff' },
  pink: { fontFamily: F.serifItalic, color: C.pink },
  helper: { fontFamily: F.body, fontSize: 15, color: C.sub, marginTop: 8 },
  view: { height: 330, borderRadius: 10, overflow: 'hidden', backgroundColor: '#000' },
  tag: { position: 'absolute', top: 9, left: 10, fontFamily: F.pixel, fontSize: 11, color: C.onPink, backgroundColor: C.pink, paddingHorizontal: 7, paddingVertical: 2, borderRadius: 4, overflow: 'hidden' },
  stamp: { position: 'absolute', right: 10, bottom: 8 },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 18, paddingTop: 16 },
  sw: { alignItems: 'center', gap: 6, width: 76 },
  swImg: { width: 66, height: 66, borderRadius: 18, overflow: 'hidden' },
  swSel: { borderWidth: 3, borderColor: C.pink },
  swText: { fontFamily: F.bodySemi, fontSize: 13, color: C.sub },
});
