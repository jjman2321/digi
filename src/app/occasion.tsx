// Onboarding 2: what's the first party? Loads looks for it.
import { StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { C } from '@/ui/theme';
import { PhotoTile, Question } from '@/ui/digi';
import { afterPick } from '@/ui/motion';
import { DEMO } from '@/lib/demo';
import { Occasion, set, useStore } from '@/lib/store';

const OPTIONS: [Occasion, string, number][] = [
  ['birthday', 'Birthday', DEMO.r5],
  ['house_party', 'House party', DEMO.r1],
  ['night_out', 'Night out', DEMO.r2],
  ['holiday', 'Holidays', DEMO.r6],
  ['wedding', 'Wedding', DEMO.r4],
  ['just_us', 'Just us', DEMO.selfie],
];

export default function OccasionScreen() {
  const picked = useStore((s) => s.occasion);
  const next = () => router.push('/look');
  return (
    <SafeAreaView style={st.root} edges={['top', 'bottom']}>
      <Question step={1} title="What's the first" pink="party?" helper="We'll load looks for it." foot="All good if it changes" onSkip={next}>
        <View style={st.grid}>
          {OPTIONS.map(([k, label, img], i) => (
            <PhotoTile key={k} index={i} source={img} label={label} selected={picked === k} style={st.cell} onPress={() => { set({ occasion: k }); afterPick(next); }} />
          ))}
        </View>
      </Question>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.bg },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  cell: { width: '48.5%' },
});
