import * as Settings from 'native_settings';
import * as React from 'react';
import { Button, Text, View } from 'react-native';

export default function App() {
  const [theme, setTheme] = React.useState<string>(Settings.getTheme());

  React.useEffect(() => {
    const subscription = Settings.addThemeListener(({ theme: newTheme }) => {
      setTheme(newTheme);
    });

    return () => subscription.remove();
  }, [setTheme]);

  //Переклчение между светлой и тёмной темой
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Theme: {Settings.getTheme()}</Text>
      <Button title={`Set theme to ${nextTheme}`} onPress={() => Settings.setTheme(nextTheme)} />
    </View>
  );
}