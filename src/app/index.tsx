import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Redirect } from 'expo-router';
import { hydrate, useStore } from '@/lib/store';
import { C } from '@/ui/theme';

export default function Index() {
  const [ready, setReady] = useState(false);
  const onboarded = useStore((s) => s.onboarded);
  useEffect(() => {
    hydrate().finally(() => setReady(true));
  }, []);
  if (!ready) return <View style={{ flex: 1, backgroundColor: C.bg }} />;
  return <Redirect href={onboarded ? '/camera' : '/welcome'} />;
}
