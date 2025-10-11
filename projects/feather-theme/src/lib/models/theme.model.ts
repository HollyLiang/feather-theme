/**
 * Theme configuration interface
 */
export interface ThemeConfig {
  name: string;
  properties: ThemeProperties;
}

/**
 * Theme properties interface for CSS custom properties
 */
export interface ThemeProperties {
  [key: string]: string;
}

/**
 * Available theme modes
 */
export type ThemeMode = 'light' | 'dark' | 'auto';

/**
 * Theme options
 */
export interface ThemeOptions {
  mode?: ThemeMode;
  customTheme?: ThemeConfig;
  storageKey?: string;
}
