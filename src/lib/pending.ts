// Hand-off for the photo just taken/picked (avoids huge data URIs in route params).
let pending: { uri: string; source: 'camera' | 'library' | 'sample' } | null = null;
export const setPending = (p: typeof pending) => {
  pending = p;
};
export const takePending = () => pending;
