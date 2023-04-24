import { registerPlugin } from '@capacitor/core';

import type { ChromeCrasherPlugin } from './definitions';

const ChromeCrasher = registerPlugin<ChromeCrasherPlugin>('ChromeCrasher', {
  web: () => import('./web').then(m => new m.ChromeCrasherWeb()),
});

export * from './definitions';
export { ChromeCrasher };
