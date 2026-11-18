// Onboarding 4: who's in your pics? Sets the camera's first mode.
import { StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { C } from '@/ui/theme';
import { PhotoRow, Question } from '@/ui/digi';
import { DEMO, LOOKS } from '@/lib/demo';
import { set, useStore, Who } from '@/lib/store';

export default function WhoScreen() {
  const who = useStore((s) => s.who);
  const look = useStore((s) => s.look);
  const next = () => router.push('/gender');
  const pick = (w: Who) => { set({ who: w }); next(); };
  return (
    <SafeAreaView style={st.root} edges={['top', 'bottom']}>
      <Question step={3} reply={`${LOOKS[look].name} it is.`} title="Who's in your" pink="pics?" helper="We set up your camera for it." onSkip={next}>
        <View style={{ gap: 12 }}>
          <PhotoRow source={DEMO.selfie} title="Mostly me" sub="Front flash first" selected={who === 'me'} onPress={() => pick('me')} />
          <PhotoRow source={DEMO.r2} title="Me + a few friends" sub="Strip mode first" selected={who === 'few'} onPress={() => pick('few')} />
          <PhotoRow source={DEMO.r1} title="The whole group" sub="Wide 0.5× first" selected={who === 'group'} onPress={() => pick('group')} />
        </View>
      </Question>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({ root: { flex: 1, backgroundColor: C.bg } });
