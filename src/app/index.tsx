import { Redirect } from 'expo-router';
import { useStore } from '@/lib/store';

// Settings are already loaded by the root layout.
export default function Index() {
  const onboarded = useStore((s) => s.onboarded);
  return <Redirect href={onboarded ? '/camera' : '/hello'} />;
}
