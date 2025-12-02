import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/styles/theme';
import AppNavigator from './src/navigation/AppNavigator';
import { ProgressProvider } from './src/contexts/ProgressContext';

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <ProgressProvider>
          <AppNavigator />
        </ProgressProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
