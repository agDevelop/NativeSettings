import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { Native_settingsViewProps } from './Native_settings.types';

const NativeView: React.ComponentType<Native_settingsViewProps> =
  requireNativeViewManager('Native_settings');

export default function Native_settingsView(props: Native_settingsViewProps) {
  return <NativeView {...props} />;
}
