// Onboarding 1/3: try the flash on a sample photo before anything else (no permissions yet).
import { useState } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import { C, F } from '@/ui/theme';
import { CamBody, Headline, PrimaryButton, TopBar } from '@/ui/kit';

const before = require('../../assets/samples/sample-before.jpg');
const after = require('../../assets/samples/sample-after.jpg');

export default function Pick() {
  const [shot, setShot] = useState(false);
  const [flash] = useState(() => new Animated.Value(0));

  const fire = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy).catch(() => {});
    flash.setValue(1);
    setShot(true);
    Animated.timing(flash, { toValue: 0, duration: 450, useNativeDriver: true }).start();
  };

  return (
    <SafeAreaView style={st.root}>
      <TopBar step={1} total={3} />
      <View style={{ paddingHorizontal: 20, gap: 6 }}>
        <Headline pre={shot ? 'That' : 'Tap the'} pink={shot ? 'flash.' : 'shutter'} size={38} />
        <Text style={st.sub}>{shot ? 'Same photo, shot like it’s 2005.' : 'A normal phone photo. Watch what Digi does.'}</Text>
      </View>

      <CamBody style={{ marginHorizontal: 14, marginTop: 16 }}>
        <View style={st.view}>
          <Image source={shot ? after : before} style={StyleSheet.absoluteFill} contentFit="cover" transition={0} />
          <Animated.View pointerEvents="none" style={[StyleSheet.absoluteFill, { backgroundColor: '#fff', opacity: flash }]} />
          {!shot && <Text style={st.hint}>BEFORE</Text>}
        </View>
      </CamBody>

      <View style={st.bottom}>
        {shot ? (
          <PrimaryButton label="Continue" onPress={() => router.push('/occasion')} />
        ) : (
          <Pressable accessibilityRole="button" accessibilityLabel="Take a sample photo" onPress={fire} style={st.shutter}>
            <View style={st.shutterIn} />
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.bg },
  sub: { fontFamily: F.body, fontSize: 15, color: C.sub },
  view: { height: 400, borderRadius: 10, overflow: 'hidden', backgroundColor: '#000' },
  hint: { position: 'absolute', top: 10, left: 10, fontFamily: F.pixel, fontSize: 12, color: '#fff' },
  bottom: { marginTop: 'auto', paddingHorizontal: 20, paddingBottom: 14, alignItems: 'stretch', justifyContent: 'center', minHeight: 100 },
  shutter: { alignSelf: 'center', width: 84, height: 84, borderRadius: 42, borderWidth: 4, borderColor: '#fff', alignItems: 'center', justifyContent: 'center', shadowColor: C.pink, shadowOpacity: 0.5, shadowRadius: 20 },
  shutterIn: { width: 66, height: 66, borderRadius: 33, backgroundColor: '#fff' },
});
