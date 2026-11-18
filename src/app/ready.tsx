// Onboarding 7: your camera's ready. The LCD lists what we set up; then iPhone asks for the camera.
import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { C, F } from '@/ui/theme';
import { CamBody, PrimaryButton, todayStamp } from '@/ui/kit';
import { Battery, LcdStamp, SerifTitle } from '@/ui/digi';
import { LOOKS } from '@/lib/demo';
import { set, useStore } from '@/lib/store';

const OCC: Record<string, string> = { birthday: 'BIRTHDAY', house_party: 'HOUSE PARTY', night_out: 'NIGHT OUT', holiday: 'HOLIDAY', wedding: 'WEDDING', just_us: 'PARTY' };
const MODE = { me: 'FRONT FLASH', few: 'STRIP MODE', group: 'WIDE 0.5×' } as const;

export default function Ready() {
  const s = useStore((x) => x);
  const lines = [
    `${s.occasion ? OCC[s.occasion] : 'PARTY'} LOOKS`,
    LOOKS[s.look].name.toUpperCase(),
    s.who ? MODE[s.who] : 'FLASH ON',
  ];
  const open = () => {
    set({ onboarded: true });
    // Clear onboarding off the stack so Back from the camera never lands in the questions again.
    if (router.canDismiss()) router.dismissAll();
    router.replace('/camera');
  };
  return (
    <SafeAreaView style={st.root} edges={['top', 'bottom']}>
      <View style={{ alignItems: 'center', paddingTop: 16 }}><Battery filled={6} /></View>
      <View style={{ paddingTop: 22, alignItems: 'center' }}>
        <SerifTitle pre="Your camera's" pink="ready" size={40} center />
      </View>
      <CamBody style={{ marginHorizontal: 20, marginTop: 28 }}>
        <View style={st.lcd}>
          {lines.map((l) => (
            <Text key={l} style={st.line}><Text style={{ color: '#7CF3B5' }}>✓ </Text>{l}</Text>
          ))}
          <Text style={[st.line, { color: '#FF7DBE' }]}><Text style={{ color: '#7CF3B5' }}>✓ </Text>{s.freeDigis} FREE DIGIS ✦</Text>
          <LcdStamp text={todayStamp()} style={{ alignSelf: 'flex-end', marginTop: 8 }} />
        </View>
      </CamBody>
      <View style={{ flex: 1 }} />
      <View style={{ paddingHorizontal: 20, paddingBottom: 12, gap: 10 }}>
        <PrimaryButton label="Open my camera" onPress={open} />
        <Text style={st.note}>Next, iPhone asks for the camera. Photos stay on your phone.</Text>
      </View>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.bg },
  lcd: { minHeight: 300, borderRadius: 10, backgroundColor: '#101012', padding: 22, justifyContent: 'center' },
  line: { fontFamily: F.pixel, fontSize: 16, lineHeight: 36, color: '#fff' },
  note: { fontFamily: F.body, fontSize: 13, color: C.mute, textAlign: 'center' },
});
