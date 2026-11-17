// Onboarding 3/3: "How did you find Digi?" (attribution, one tap). Then straight to the camera.
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { C, F } from '@/ui/theme';
import { Headline, PrimaryButton, TopBar, tap } from '@/ui/kit';
import { set, useStore } from '@/lib/store';

const SOURCES = ['TikTok', 'Instagram', 'A friend', 'App Store', 'Snapchat', 'Somewhere else'];

export default function Source() {
  const source = useStore((s) => s.source);
  const done = () => {
    set({ onboarded: true });
    router.replace('/camera');
  };
  return (
    <SafeAreaView style={st.root}>
      <TopBar step={3} total={3} onSkip={done} />
      <View style={{ paddingHorizontal: 20, gap: 6 }}>
        <Headline pre="How did you" pink="find us?" size={38} />
        <Text style={st.sub}>Helps us make more of what you like.</Text>
      </View>
      <View style={st.wrap}>
        {SOURCES.map((x) => {
          const on = source === x;
          return (
            <Pressable key={x} accessibilityRole="button" accessibilityState={{ selected: on }} onPress={() => { tap(); set({ source: x }); }} style={[st.chip, on && st.chipOn]}>
              <Text style={[st.chipText, on && { color: C.onPink }]}>{x}</Text>
            </Pressable>
          );
        })}
      </View>
      <View style={st.bottom}>
        <PrimaryButton label="Open the camera" onPress={done} disabled={!source} />
        <Text style={st.note}>Next, iPhone asks for your camera.</Text>
      </View>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.bg },
  sub: { fontFamily: F.body, fontSize: 15, color: C.sub },
  wrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, paddingHorizontal: 16, marginTop: 24 },
  chip: { height: 48, paddingHorizontal: 18, borderRadius: 999, backgroundColor: C.card, justifyContent: 'center' },
  chipOn: { backgroundColor: C.pink },
  chipText: { fontFamily: F.bodySemi, fontSize: 16, color: C.text },
  bottom: { marginTop: 'auto', paddingHorizontal: 20, paddingBottom: 12, gap: 8 },
  note: { fontFamily: F.body, fontSize: 13, color: C.mute, textAlign: 'center' },
});
