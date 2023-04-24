export interface ChromeCrasherPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
