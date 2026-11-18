// Digi Plus paywall, pick A "their prints" (owner, Nov 17). Billed price is the biggest price (Apple 3.1.2),
// ✕ and Restore visible from frame 1, real dates, auto-renew line, no toggle, "Best value" not "Save X%".
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path, Rect } from 'react-native-svg';
import { C, F } from '@/ui/theme';
import { tap } from '@/ui/kit';
import { GlowButton, PixelDigi, SerifTitle, dayLabel } from '@/ui/digi';
import { DemoNote, PackSheet } from '@/ui/money';
import { DEMO } from '@/lib/demo';
import { useStore } from '@/lib/store';

type Plan = 'yearly' | 'weekly';

function Print({ source, rot, label, w, style }: { source: number | { uri: string }; rot: string; label: string; w: number; style: object }) {
  return (
    <View style={[st.print, { width: w, transform: [{ rotate: rot }] }, style]}>
      <Image source={source} style={{ width: w - 14, height: Math.round((w - 14) * 1.18) }} contentFit="cover" />
      <Text style={st.printLabel}>{label}</Text>
    </View>
  );
}

const ICONS = {
  spark: <Svg width={20} height={20} viewBox="0 0 24 24" fill={C.pink}><Path d="M12 2l2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2z" /></Svg>,
  live: <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={C.pink} strokeWidth={2.2}><Rect x={3} y={5} width={13} height={14} rx={3} /><Path d="M16 10l5-3v10l-5-3z" fill={C.pink} /></Svg>,
  mark: <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={C.pink} strokeWidth={2.2} strokeLinecap="round"><Rect x={3} y={4} width={18} height={16} rx={3} /><Path d="M4 20 20 4" /></Svg>,
};

function PlanTile({ name, price, per, sub, badge, sel, onPress }: { name: string; price: string; per: string; sub: string; badge?: string; sel: boolean; onPress: () => void }) {
  return (
    <Pressable accessibilityRole="radio" accessibilityState={{ selected: sel }} accessibilityLabel={`${name}, ${price} ${per}. ${sub}`} onPress={() => { tap(); onPress(); }} style={[st.plan, sel ? st.planSel : st.planOff]}>
      {badge ? <Text style={st.badge}>{badge}</Text> : null}
      <Text style={[st.planName, sel && { color: C.onPink }]}>{name}</Text>
      <Text style={[st.planPrice, sel && { color: C.onPink }]}>{price}<Text style={[st.per, sel && { color: '#55304A' }]}> {per}</Text></Text>
      <Text style={[st.planSub, sel && { color: '#55304A' }]}>{sub}</Text>
    </Pressable>
  );
}

export default function Paywall() {
  const [plan, setPlan] = useState<Plan>('yearly');
  const [pack, setPack] = useState(false);
  const [note, setNote] = useState(false);
  const roll = useStore((s) => s.roll);
  const mine = roll.find((x) => x.kind === 'ai') ?? roll[0];
  const close = () => (router.canGoBack() ? router.back() : router.dismissTo('/camera'));

  return (
    <SafeAreaView style={st.root} edges={['top', 'bottom']}>
      <View style={st.top}>
        <Pressable accessibilityRole="button" onPress={() => setNote(true)} style={st.restore}><Text style={st.restoreText}>Restore</Text></Pressable>
        <Pressable accessibilityRole="button" accessibilityLabel="Close" onPress={close} style={st.x}>
          <Svg width={18} height={18} viewBox="0 0 24 24" stroke="#fff" strokeWidth={2.4} strokeLinecap="round"><Path d="M6 6l12 12M18 6 6 18" /></Svg>
        </Pressable>
      </View>
      <ScrollView contentContainerStyle={st.scroll} bounces={false}>
        <View style={st.prints}>
          <Print source={DEMO.r2} rot="-10deg" label="FILM 400" w={118} style={{ left: 10, top: 22 }} />
          <Print source={DEMO.r1} rot="9deg" label="LIVE ✦" w={118} style={{ right: 10, top: 22 }} />
          <Print source={mine ? { uri: mine.uri } : DEMO.r1} rot="-1.5deg" label="YOURS ✦" w={156} style={{ alignSelf: 'center', top: 0 }} />
        </View>
        <View style={st.brand}>
          <PixelDigi unit={3.2} />
          <Text style={st.plusTag}>PLUS</Text>
        </View>
        <SerifTitle pre="Keep the" pink="flash" post="going" size={36} />
        <View style={{ marginTop: 6 }}>
          {[[ICONS.spark, '60 digis a month for After Dark'], [ICONS.live, 'Live digis: 5-second flash clips'], [ICONS.mark, 'Every look, no DIGI.PINK mark']].map(([icon, t]) => (
            <View key={t as string} style={st.feat}><View style={st.featIcon}>{icon}</View><Text style={st.featText}>{t}</Text></View>
          ))}
        </View>
        <View style={st.plans}>
          <PlanTile name="Yearly" price="$39.99" per="/yr" sub="3 days free · $0.77/wk" badge="BEST VALUE" sel={plan === 'yearly'} onPress={() => setPlan('yearly')} />
          <PlanTile name="Weekly" price="$6.99" per="/wk" sub="Cancel anytime" sel={plan === 'weekly'} onPress={() => setPlan('weekly')} />
        </View>
        <GlowButton label={plan === 'yearly' ? 'Start my 3 free days' : 'Get Weekly · $6.99'} onPress={() => setNote(true)} />
        <Text style={st.date}>{plan === 'yearly' ? `🔔 Reminder on ${dayLabel(40)} · first charge ${dayLabel(72)}` : 'Renews weekly. Cancel anytime in Settings.'}</Text>
        <Text style={st.legal}>Auto-renews until you cancel in Settings · <Text style={st.link}>Terms</Text> · <Text style={st.link}>Privacy</Text></Text>
        <Pressable accessibilityRole="button" onPress={() => setPack(true)} style={st.packLink}><Text style={st.packText}>Just tonight? 25 digis · $5.99</Text></Pressable>
      </ScrollView>
      <PackSheet visible={pack} onClose={() => setPack(false)} onBuy={() => { setPack(false); setNote(true); }} />
      <DemoNote visible={note} onClose={() => setNote(false)} />
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#140810' },
  top: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingTop: 4 },
  restore: { height: 44, justifyContent: 'center' },
  restoreText: { fontFamily: F.bodySemi, fontSize: 15, color: C.sub },
  x: { width: 44, height: 44, borderRadius: 22, backgroundColor: C.cardHi, alignItems: 'center', justifyContent: 'center' },
  scroll: { paddingHorizontal: 20, paddingBottom: 24 },
  prints: { height: 236, marginTop: -4 },
  print: { position: 'absolute', backgroundColor: '#F4F1EC', padding: 7, paddingBottom: 24, borderRadius: 4, shadowColor: '#000', shadowOpacity: 0.55, shadowRadius: 15, shadowOffset: { width: 0, height: 12 } },
  printLabel: { position: 'absolute', left: 8, bottom: 6, fontFamily: F.pixel, fontSize: 9, color: '#C21F70' },
  brand: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 8, marginBottom: 6 },
  plusTag: { fontFamily: F.pixel, fontSize: 12, color: C.onPink, backgroundColor: C.pink, paddingHorizontal: 8, paddingVertical: 3, borderRadius: 5, overflow: 'hidden' },
  feat: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 7 },
  featIcon: { width: 38, height: 38, borderRadius: 11, backgroundColor: '#2A1420', alignItems: 'center', justifyContent: 'center' },
  featText: { fontFamily: F.bodyBold, fontSize: 15, color: '#fff', flex: 1 },
  plans: { flexDirection: 'row', gap: 10, marginTop: 18, marginBottom: 16 },
  plan: { flex: 1, borderRadius: 18, paddingHorizontal: 12, paddingTop: 14, paddingBottom: 12, minHeight: 100 },
  planSel: { backgroundColor: '#fff' },
  planOff: { backgroundColor: '#17171C', borderWidth: 1.5, borderColor: '#2E2E36' },
  badge: { position: 'absolute', top: -10, alignSelf: 'center', fontFamily: F.bodyBold, fontSize: 11, color: C.onPink, backgroundColor: C.pink, paddingHorizontal: 9, paddingVertical: 3, borderRadius: 999, overflow: 'hidden' },
  planName: { fontFamily: F.bodyBold, fontSize: 14, color: '#E4E4EA' },
  planPrice: { fontFamily: F.bodyBold, fontSize: 26, color: '#fff', marginTop: 6 },
  per: { fontFamily: F.body, fontSize: 14, color: C.sub },
  planSub: { fontFamily: F.body, fontSize: 12, color: C.sub, marginTop: 3 },
  date: { fontFamily: F.body, fontSize: 13, color: C.sub, textAlign: 'center', marginTop: 10 },
  legal: { fontFamily: F.body, fontSize: 12, color: '#9A9AA8', textAlign: 'center', marginTop: 6 },
  link: { textDecorationLine: 'underline' },
  packLink: { minHeight: 44, alignItems: 'center', justifyContent: 'center', marginTop: 4 },
  packText: { fontFamily: F.bodyBold, fontSize: 14, color: '#FF7DBE' },
});
