// Save a developed digi (base64 JPEG) so it survives restarts. Web preview keeps it in memory.
import { Platform } from 'react-native';

export async function saveDigi(base64: string, name: string): Promise<string> {
  if (Platform.OS === 'web') return `data:image/jpeg;base64,${base64}`;
  const { Directory, File, Paths } = await import('expo-file-system');
  const dir = new Directory(Paths.document, 'digis');
  if (!dir.exists) dir.create({ intermediates: true, idempotent: true });
  const f = new File(dir, `${name}.jpg`);
  if (f.exists) f.delete();
  f.create();
  await f.write(base64, { encoding: 'base64' });
  return f.uri;
}
