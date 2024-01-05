import * as React from 'react';

import { Native_settingsViewProps } from './Native_settings.types';

export default function Native_settingsView(props: Native_settingsViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
