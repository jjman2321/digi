// Onboarding 5 (optional): which describes you? Only picks sample photos and look order; never shown (Strava pattern).
import { StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { C } from '@/ui/theme';
import { OptionTile, Question } from '@/ui/digi';
import { set, useStore } from '@/lib/store';

const REPLY = { me: 'Front flash it is.', few: 'Strip mode it is.', group: 'Wide it is.' } as const;

export default function GenderScreen() {
  const gender = useStore((s) => s.gender);
  const who = useStore((s) => s.who);
  const next = () => router.push('/source');
  return (
    <SafeAreaView style={st.root} edges={['top', 'bottom']}>
      <Question step={4} reply={who ? REPLY[who] : 'Got it.'} title="Which describes" pink="you?" helper="Picks your sample photos and first looks. Never shown to anyone." foot="Optional · change it any time in Settings" onSkip={next}>
        <View style={{ gap: 10 }}>
          {['Woman', 'Man', 'Non-binary', 'Prefer not to say'].map((g) => (
            <OptionTile key={g} title={g} minHeight={76} selected={gender === g} onPress={() => { set({ gender: g }); next(); }} />
          ))}
        </View>
      </Question>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({ root: { flex: 1, backgroundColor: C.bg } });
