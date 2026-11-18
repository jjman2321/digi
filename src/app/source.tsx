// Onboarding 6: how did you find Digi? One tap, for attribution (ch. 10 #9).
import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { C, F } from '@/ui/theme';
import { tap } from '@/ui/kit';
import { Question } from '@/ui/digi';
import { afterPick, PressScale, SlideIn } from '@/ui/motion';
import { set, useStore } from '@/lib/store';

const OPTIONS: [string, string][] = [['🎵', 'TikTok'], ['📸', 'Instagram'], ['💬', 'A friend'], ['🔎', 'App Store'], ['📌', 'Pinterest'], ['✨', 'Other']];

export default function SourceScreen() {
  const source = useStore((s) => s.source);
  const next = () => router.push('/ready');
  return (
    <SafeAreaView style={st.root} edges={['top', 'bottom']}>
      <Question step={5} reply="Got it." title="How did you find" pink="Digi?" helper="One tap. It helps a tiny team a lot." onSkip={next}>
        <View style={st.grid}>
          {OPTIONS.map(([icon, label], i) => (
            <SlideIn key={label} index={i} style={st.cellWrap}>
              <PressScale accessibilityRole="button" accessibilityState={{ selected: source === label }} onPress={() => { tap(); set({ source: label }); afterPick(next); }} style={[st.cell, source === label && st.sel]}>
                <Text style={st.icon}>{icon}</Text>
                <Text style={[st.label, source === label && { color: C.onPink }]}>{label}</Text>
              </PressScale>
            </SlideIn>
          ))}
        </View>
      </Question>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.bg },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  cellWrap: { width: '48.5%' },
  cell: { height: 124, borderRadius: 18, backgroundColor: '#17171C', borderWidth: 2, borderColor: '#24242B', alignItems: 'center', justifyContent: 'center', gap: 8 },
  sel: { backgroundColor: C.pink, borderColor: C.pink },
  icon: { fontSize: 28 },
  label: { fontFamily: F.bodyBold, fontSize: 16, color: '#fff' },
});
