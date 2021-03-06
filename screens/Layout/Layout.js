import React from 'react';
import { View } from 'glamorous-native';
import { Provider as PaperProvider } from 'react-native-paper';
import theme from './theme'

function ScreensLayout({ children }) {
  return (
    <PaperProvider theme={theme}>
      <View style={{ flex: 1 }}>
        { children }
      </View>
    </PaperProvider>
  );
}

export default ScreensLayout