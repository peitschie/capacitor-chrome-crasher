export interface ChromeCrasherPlugin {
  loadChromeUrl(options?: { url: string }): void;
}
