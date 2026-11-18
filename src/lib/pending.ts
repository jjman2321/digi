// Hand-off between screens (avoids huge data URIs in route params).
export type Pending = { uri: string; source: 'camera' | 'library' | 'sample'; mode?: 'afterdark' | 'live' };
let pending: Pending | null = null;
let result: { uri: string; before: string; preview: boolean } | null = null;
export const setPending = (p: Pending | null) => {
  pending = p;
};
export const takePending = () => pending;
export const setResult = (r: typeof result) => {
  result = r;
};
export const takeResult = () => result;
