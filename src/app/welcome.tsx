import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { C, F } from '@/ui/theme';
import { Headline, PixelLogo, PrimaryButton } from '@/ui/kit';

const after1 = require('../../assets/samples/sample-after.jpg');
const after2 = require('../../assets/samples/sample2-after.jpg');

export default function Welcome() {
  return (
    <SafeAreaView style={st.root}>
      <View style={st.logoRow}>
        <PixelLogo size={22} color={C.pink} />
      </View>

      <View style={st.collage} accessibilityLabel="Two example digis: friends on a couch and a birthday selfie, shot with flash">
        <View style={[st.print, { transform: [{ rotate: '-7deg' }], left: 18, top: 24 }]}>
          <Image source={after2} style={st.photo} contentFit="cover" />
        </View>
        <View style={[st.print, { transform: [{ rotate: '5deg' }], right: 18, top: 0 }]}>
          <Image source={after1} style={st.photo} contentFit="cover" />
        </View>
      </View>

      <View style={st.copy}>
        <Headline pre="Your party's" pink="photobooth" size={44} center />
        <Text style={st.sub}>2005 flash, the orange date stamp and booth strips. Right on your phone.</Text>
      </View>

      <View style={st.bottom}>
        <PrimaryButton label="Let's go" onPress={() => router.push('/pick')} />
        <Text style={st.legal}>No account needed.</Text>
      </View>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.bg },
  logoRow: { alignItems: 'center', paddingTop: 12 },
  collage: { height: 360, marginTop: 18 },
  print: { position: 'absolute', width: 210, height: 280, padding: 8, paddingBottom: 26, backgroundColor: '#F4F1EA', borderRadius: 6, shadowColor: '#000', shadowOpacity: 0.6, shadowRadius: 20, shadowOffset: { width: 0, height: 12 } },
  photo: { flex: 1, borderRadius: 2 },
  copy: { paddingHorizontal: 28, marginTop: 8, gap: 12 },
  sub: { fontFamily: F.body, fontSize: 16, lineHeight: 23, color: C.sub, textAlign: 'center' },
  bottom: { marginTop: 'auto', paddingHorizontal: 20, paddingBottom: 12, gap: 6 },
  legal: { fontFamily: F.body, fontSize: 13, color: C.mute, textAlign: 'center' },
});
