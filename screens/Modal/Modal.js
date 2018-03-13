import React from 'react';
import { Text } from 'react-native'
import ScreensLayout from '../Layout';
import { Calendar } from 'react-native-calendars'

class ScreensModal extends React.Component {

  static navigationOptions = {
    title: 'Modal'
  }

  render() {
    return (
      <ScreensLayout>
        <Calendar />
      </ScreensLayout>
    );
  }
}

export default ScreensModal