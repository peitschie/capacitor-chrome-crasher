import { WebPlugin } from '@capacitor/core';

import type { ChromeCrasherPlugin } from './definitions';

export class ChromeCrasherWeb extends WebPlugin implements ChromeCrasherPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
