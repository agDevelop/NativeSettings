import { EventEmitter, Subscription } from 'expo-modules-core';

import Native_settingsModule from './Native_settingsModule';

const emitter = new EventEmitter(Native_settingsModule);

export type Theme = 'light' | 'dark' | 'system';

export type ThemeChangeEvent = {
  theme: Theme;
};

export function addThemeListener(listener: (event: ThemeChangeEvent) => void): Subscription {
  return emitter.addListener<ThemeChangeEvent>('onChangeTheme', listener);
}

export function getTheme(): Theme {
  return Native_settingsModule.getTheme();
}

export function setTheme(theme: Theme): void {
  return Native_settingsModule.setTheme(theme);
}
