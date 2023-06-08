export interface TestPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  loginWithEmailOtp(options: {
    email: string;
  }): Promise<{ didToken: string; error?: string }>;
}
