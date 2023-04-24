import { registerPlugin } from '@capacitor/core';

import type { ChromeCrasherPlugin } from './definitions';

const ChromeCrasher = registerPlugin<ChromeCrasherPlugin>('ChromeCrasher');

export * from './definitions';
export { ChromeCrasher };
