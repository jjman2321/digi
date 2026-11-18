import { useEffect, useState } from 'react';
import { Platform, View } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { InstrumentSerif_400Regular, InstrumentSerif_400Regular_Italic } from '@expo-google-fonts/instrument-serif';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { Silkscreen_700Bold } from '@expo-google-fonts/silkscreen';
import { C } from '@/ui/theme';

SplashScreen.preventAutoHideAsync().catch(() => {});

function useSkiaReady() {
  // Skia needs CanvasKit loaded on web; native is ready immediately.
  const [ready, setReady] = useState(Platform.OS !== 'web');
  useEffect(() => {
    if (Platform.OS !== 'web') return;
    import('@shopify/react-native-skia/lib/module/web')
      .then(({ LoadSkiaWeb }) => LoadSkiaWeb({ locateFile: () => '/canvaskit.wasm' }))
      .then(() => setReady(true))
      .catch(() => setReady(true));
  }, []);
  return ready;
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    InstrumentSerif_400Regular,
    InstrumentSerif_400Regular_Italic,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Silkscreen_700Bold,
    DSEG7: require('../../assets/fonts/DSEG7Classic-Bold.ttf'),
  });
  const skiaReady = useSkiaReady();
  const ready = fontsLoaded && skiaReady;

  useEffect(() => {
    if (ready) SplashScreen.hideAsync().catch(() => {});
  }, [ready]);

  if (!ready) return <View style={{ flex: 1, backgroundColor: C.bg }} />;

  return (
    <View style={Platform.OS === 'web' ? webFrame.outer : { flex: 1, backgroundColor: C.bg }}>
      <View style={Platform.OS === 'web' ? webFrame.phone : { flex: 1 }}>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: C.bg }, animation: 'fade' }}>
        <Stack.Screen name="paywall" options={{ presentation: 'modal', animation: 'slide_from_bottom' }} />
        <Stack.Screen name="looks" options={{ presentation: 'formSheet', sheetAllowedDetents: [0.62, 0.95], sheetGrabberVisible: true }} />
      </Stack>
      </View>
    </View>
  );
}

// Web preview only: on a computer, show the app in a phone-sized frame instead of stretching it.
const webFrame = {
  outer: { flex: 1, backgroundColor: '#050507', alignItems: 'center' as const, justifyContent: 'center' as const },
  phone: { flex: 1, width: '100%' as const, maxWidth: 430, maxHeight: 932, backgroundColor: C.bg, overflow: 'hidden' as const, borderRadius: 0 },
};
