// Temporary screen for routes that are planned but not built yet (each says which build step brings it).
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackButton, Headline } from './kit';
import { C, F } from './theme';

export function Soon({ title, pink, step }: { title: string; pink: string; step: string }) {
  return (
    <SafeAreaView style={st.root}>
      <View style={st.top}>
        <BackButton />
      </View>
      <View style={st.body}>
        <Headline pre={title} pink={pink} center />
        <Text style={st.sub}>Coming in {step}.</Text>
      </View>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.bg },
  top: { paddingHorizontal: 16, paddingTop: 6 },
  body: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10, paddingHorizontal: 24 },
  sub: { fontFamily: F.body, fontSize: 16, color: C.sub, textAlign: 'center' },
});
