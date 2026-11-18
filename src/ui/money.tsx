// Money pieces shared by the camera, result and paywall: the free-digi sheet and the out-of-digis sheet.
import { Share, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { C, F } from './theme';
import { GlowButton, Sheet, SerifTitle } from './digi';
import { GhostButton, PrimaryButton } from './kit';
import { useStore } from '@/lib/store';

/** Owner, Nov 17: 2 free digis to start, +1 every Friday, banked up to 3; +2 per invited friend (Mobbin: Ahead, Riveo). */
export function FreeSheet({ visible, onClose, onTry }: { visible: boolean; onClose: () => void; onTry: () => void }) {
  const free = useStore((s) => s.freeDigis);
  const plus = useStore((s) => s.plus);
  return (
    <Sheet visible={visible} onClose={onClose}>
      <SerifTitle pre="Free digi every" pink="Friday" />
      <Text style={m.sub}>{plus ? 'You have Digi Plus: 60 digis a month.' : '2 to start. +1 every Friday, just in time for the party.'}</Text>
      {!plus && (
        <View style={m.card}>
          <View style={m.row}><Text style={m.cardTitle}>This week</Text><Text style={m.cardPink}>{free} left</Text></View>
          <View style={m.track}><View style={[m.fill, { width: `${(free / 3) * 100}%` }]} /></View>
          <Text style={m.small}>Refills Friday · saves up to 3 (enough for a Live digi)</Text>
        </View>
      )}
      <View style={[m.card, m.row]}>
        <View style={{ flex: 1 }}>
          <Text style={m.cardTitle}>Invite a friend · +2 digis</Text>
          <Text style={m.small}>When they make their first digi</Text>
        </View>
        <GhostButton label="Invite" onPress={() => Share.share({ message: 'My party camera: 2005 flash + the orange date. digi.pink' }).catch(() => {})} style={m.invite} />
      </View>
      <PrimaryButton label="Try After Dark ✦" onPress={onTry} style={{ marginTop: 14 }} />
    </Sheet>
  );
}

/** Out of digis: the Party Pack first, Plus underneath, never pushed (Mobbin: Replika). */
export function PackSheet({ visible, onClose, onBuy }: { visible: boolean; onClose: () => void; onBuy: (product: 'pack25' | 'pack60') => void }) {
  return (
    <Sheet visible={visible} onClose={onClose}>
      <Text style={m.pix}>0 DIGIS LEFT · CAMERA’S STILL FREE</Text>
      <SerifTitle pre="Party" pink="tonight?" center />
      <Text style={[m.sub, { textAlign: 'center' }]}>Pay once. Cheaper than one disposable.</Text>
      <View style={{ flexDirection: 'row', gap: 10, marginTop: 6 }}>
        <View style={[m.pack, m.packSel]}>
          <Text style={m.badge}>PAY ONCE</Text>
          <Text style={[m.big, { color: C.onPink }]}>25</Text>
          <Text style={[m.packLabel, { color: C.onPink }]}>digis</Text>
          <Text style={[m.price, { color: C.onPink }]}>$5.99</Text>
          <Text style={[m.small, { color: '#55304A' }]}>Party Pack</Text>
        </View>
        <View style={m.pack}>
          <Text style={m.big}>60</Text>
          <Text style={m.packLabel}>digis</Text>
          <Text style={m.price}>$11.99</Text>
          <Text style={m.small}>Big Night</Text>
        </View>
      </View>
      <GlowButton label="Get 25 digis · $5.99" onPress={() => onBuy('pack25')} style={{ marginTop: 16 }} />
      <View style={m.or}><View style={m.line} /><Text style={m.small}>or</Text><View style={m.line} /></View>
      <View style={[m.card, m.row, { marginTop: 0 }]}>
        <View style={{ flex: 1 }}>
          <Text style={m.cardTitle}>Digi Plus · 60 digis a month</Text>
          <Text style={m.small}>3 days free, then $39.99/year</Text>
        </View>
        <GhostButton label="See Plus" onPress={() => { onClose(); router.push('/paywall'); }} style={m.invite} />
      </View>
    </Sheet>
  );
}

const m = StyleSheet.create({
  sub: { fontFamily: F.body, fontSize: 15, color: C.sub, marginTop: 8, marginBottom: 14 },
  card: { borderRadius: 16, backgroundColor: '#1C1C22', padding: 14, marginTop: 10 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 10 },
  cardTitle: { fontFamily: F.bodyBold, fontSize: 15, color: '#fff' },
  cardPink: { fontFamily: F.bodyBold, fontSize: 15, color: '#FF7DBE' },
  track: { height: 8, borderRadius: 4, backgroundColor: '#2E2E36', marginVertical: 10 },
  fill: { height: 8, borderRadius: 4, backgroundColor: C.pink },
  small: { fontFamily: F.body, fontSize: 12, color: C.sub },
  invite: { height: 40, paddingHorizontal: 14, borderRadius: 999, backgroundColor: '#2A1420' },
  pix: { fontFamily: F.pixel, fontSize: 11, color: '#FF7DBE', textAlign: 'center', marginBottom: 6 },
  pack: { flex: 1, borderRadius: 20, paddingVertical: 16, paddingHorizontal: 12, alignItems: 'center', backgroundColor: '#1C1C22', borderWidth: 1.5, borderColor: '#2E2E36' },
  packSel: { backgroundColor: '#fff', borderColor: '#fff' },
  badge: { position: 'absolute', top: -10, fontFamily: F.bodyBold, fontSize: 11, color: C.onPink, backgroundColor: C.pink, paddingHorizontal: 9, paddingVertical: 3, borderRadius: 999, overflow: 'hidden' },
  big: { fontFamily: F.bodyBold, fontSize: 40, color: '#fff' },
  packLabel: { fontFamily: F.bodySemi, fontSize: 14, color: '#fff' },
  price: { fontFamily: F.bodyBold, fontSize: 22, color: '#fff', marginTop: 10 },
  or: { flexDirection: 'row', alignItems: 'center', gap: 10, marginVertical: 12 },
  line: { flex: 1, height: 1, backgroundColor: '#2E2E36' },
});

export function DemoNote({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  return (
    <Sheet visible={visible} onClose={onClose}>
      <SerifTitle pre="Preview" pink="only" />
      <Text style={m.sub}>Real payments plug in at build step 5 (RevenueCat). Nothing was charged.</Text>
      <PrimaryButton label="OK" onPress={onClose} />
    </Sheet>
  );
}
