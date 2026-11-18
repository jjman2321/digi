// Onboarding 2: what are you shooting first? Loads looks for it.
// ICP (bible ch. 20): P1 "digicam girl" shoots nights out and everyday; P2 "the host" shoots birthdays and her own parties.
// No wedding tile: event cams own weddings, and the weddings pack comes after v1 (owner, Q20).
import { StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { C } from '@/ui/theme';
import { PhotoTile, Question } from '@/ui/digi';
import { afterPick } from '@/ui/motion';
import { DEMO } from '@/lib/demo';
import { Occasion, set, useStore } from '@/lib/store';

const OPTIONS: [Occasion, string, number][] = [
  ['night_out', 'Night out', DEMO.r5],
  ['everyday', 'Everyday', DEMO.selfie],
  ['birthday', 'Birthday', DEMO.r2],
  ['girls_night', 'Girls’ night', DEMO.girls],
  ['house_party', 'My own party', DEMO.r1],
  ['holiday', 'Holidays', DEMO.r6],
];

export default function OccasionScreen() {
  const picked = useStore((s) => s.occasion);
  const next = () => router.push('/look');
  return (
    <SafeAreaView style={st.root} edges={['top', 'bottom']}>
      <Question step={1} title="What are you shooting" pink="first?" helper="We'll load looks for it." foot="All good if it changes" onSkip={next}>
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
