// Tiny persisted app store (no extra libraries).
// Native: expo-sqlite kv-store. Web preview: localStorage.
import { useSyncExternalStore } from 'react';
import { Platform } from 'react-native';

export type Occasion = 'birthday' | 'house_party' | 'night_out' | 'holiday' | 'wedding' | 'just_us';
export type Look = 'digicam' | 'film400' | 'y2kglow' | 'clubbw';
export type Who = 'me' | 'few' | 'group';
export type Shot = { id: string; uri: string; createdAt: number; kind: 'digi' | 'ai' | 'live' | 'strip'; look: string };

export type State = {
  onboarded: boolean;
  occasion: Occasion | null;
  look: Look;
  who: Who | null;
  gender: string | null; // optional; only picks sample photos and look order, never shown
  source: string | null;
  stampOn: boolean;
  aiConsent: boolean; // ticked once before the first After Dark
  freeDigis: number; // owner, Nov 17: 2 to start, +1 every Friday, banked up to 3
  lastRefill: number; // ms timestamp of the last Friday refill
  plus: boolean; // Digi Plus (demo until RevenueCat, build step 5)
  paywallSeen: boolean; // the paywall shows once after the first After Dark
  roll: Shot[];
};

const initial: State = {
  onboarded: false,
  occasion: null,
  look: 'digicam',
  who: null,
  gender: null,
  source: null,
  stampOn: true,
  aiConsent: false,
  freeDigis: 2,
  lastRefill: Date.now(),
  plus: false,
  paywallSeen: false,
  roll: [],
};

/** Friday refill: +1 free digi each Friday since the last refill, banked up to 3. */
export function refillFreeDigis(now = Date.now()) {
  const s = get();
  const d = new Date(s.lastRefill);
  let next = new Date(d.getFullYear(), d.getMonth(), d.getDate() + ((5 - d.getDay() + 7) % 7 || 7));
  let add = 0;
  while (next.getTime() <= now) {
    add += 1;
    next = new Date(next.getFullYear(), next.getMonth(), next.getDate() + 7);
  }
  if (add > 0) set({ freeDigis: Math.min(3, s.freeDigis + add), lastRefill: now });
}

const KEY = 'digi.state.v1';
let state: State = initial;
const listeners = new Set<() => void>();

type KV = { getItem(k: string): Promise<string | null> | string | null; setItem(k: string, v: string): Promise<void> | void };
let kv: KV | null = null;
async function getKV(): Promise<KV | null> {
  if (kv) return kv;
  if (Platform.OS === 'web') {
    kv = typeof localStorage !== 'undefined' ? localStorage : null;
  } else {
    const mod = await import('expo-sqlite/kv-store');
    kv = mod.default as unknown as KV;
  }
  return kv;
}

export async function hydrate() {
  try {
    const k = await getKV();
    const raw = k ? await k.getItem(KEY) : null;
    if (raw) state = { ...initial, ...JSON.parse(raw) };
  } catch {
    // first launch or private mode: keep defaults
  }
  emit();
}

function emit() {
  listeners.forEach((l) => l());
}

async function persist() {
  try {
    const k = await getKV();
    // Web keeps photos as big data: URIs; don't persist those.
    const toSave = Platform.OS === 'web' ? { ...state, roll: [] } : state;
    await k?.setItem(KEY, JSON.stringify(toSave));
  } catch {
    // storage full or unavailable: the app still works for this session
  }
}

export function set(patch: Partial<State> | ((s: State) => Partial<State>)) {
  const p = typeof patch === 'function' ? patch(state) : patch;
  state = { ...state, ...p };
  emit();
  persist();
}

export function get() {
  return state;
}

export function useStore<T>(pick: (s: State) => T): T {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    () => pick(state),
    () => pick(state),
  );
}

export function addShot(shot: Omit<Shot, 'id' | 'createdAt'>) {
  const s: Shot = { ...shot, id: Math.random().toString(36).slice(2, 10), createdAt: Date.now() };
  set((st) => ({ roll: [s, ...st.roll] }));
  return s;
}
