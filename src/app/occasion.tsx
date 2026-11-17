// Onboarding 2/3: one tap. Sets the default stamp/look; saved locally.
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { C, F } from '@/ui/theme';
import { Headline, TopBar, tap } from '@/ui/kit';
import { Occasion, set, useStore } from '@/lib/store';

const OPTIONS: { id: Occasion; emoji: string; label: string }[] = [
  { id: 'birthday', emoji: '🎂', label: 'Birthday' },
  { id: 'house_party', emoji: '🪩', label: 'House party' },
  { id: 'night_out', emoji: '🍸', label: 'Night out' },
  { id: 'holiday', emoji: '🎄', label: 'Holidays' },
  { id: 'wedding', emoji: '💍', label: 'Wedding' },
  { id: 'just_us', emoji: '📸', label: 'Just for fun' },
];

export default function OccasionScreen() {
  const current = useStore((s) => s.occasion);
  const choose = (id: Occasion) => {
    tap();
    set({ occasion: id });
    setTimeout(() => router.push('/source'), 180);
  };
  return (
    <SafeAreaView style={st.root}>
      <TopBar step={2} total={3} onSkip={() => router.push('/source')} />
      <View style={{ paddingHorizontal: 20, gap: 6 }}>
        <Headline pre="What are you" pink="shooting?" size={38} />
        <Text style={st.sub}>We’ll set up the right looks for it.</Text>
      </View>
      <View style={st.grid}>
        {OPTIONS.map((o) => {
          const on = current === o.id;
          return (
            <Pressable key={o.id} accessibilityRole="button" accessibilityState={{ selected: on }} onPress={() => choose(o.id)} style={[st.tile, on && st.tileOn]}>
              <Text style={st.emoji}>{o.emoji}</Text>
              <Text style={st.label}>{o.label}</Text>
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.bg },
  sub: { fontFamily: F.body, fontSize: 15, color: C.sub },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, paddingHorizontal: 16, marginTop: 24 },
  tile: { width: '47.5%', height: 116, borderRadius: 20, backgroundColor: C.card, borderWidth: 2, borderColor: C.card, padding: 16, justifyContent: 'space-between' },
  tileOn: { borderColor: C.pink, backgroundColor: C.pinkSoft },
  emoji: { fontSize: 30 },
  label: { fontFamily: F.bodyBold, fontSize: 17, color: C.text },
});
