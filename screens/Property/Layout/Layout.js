import React from 'react';
import { View } from 'glamorous-native';
import { Provider as PaperProvider } from 'react-native-paper';

function ScreensLayout({ children }) {
  return (
    <PaperProvider>
      <View justifyContent="space-around" height="100%">
        { children }
      </View>
    </PaperProvider>
  );
}

export default ScreensLayout