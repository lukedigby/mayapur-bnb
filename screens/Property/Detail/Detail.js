import React from 'react';
import PropertyDetail from '../../../components/Property/Detail';
import { View } from 'glamorous-native';
import { Provider as PaperProvider } from 'react-native-paper';

class ScreensPropertyDetail extends React.Component {

  static navigationOptions = {
    title: 'Detail'
  }

  render() {
    return (
      <PaperProvider>
        <View justifyContent="space-around" height="100%">
          <PropertyDetail />
        </View>
      </PaperProvider>
    );
  }
}

export default ScreensPropertyDetail