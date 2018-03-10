import React from 'react';
import PropertyDetail from '../../../components/Property/Detail';
import ScreensLayout from '../Layout'

class ScreensPropertyDetail extends React.Component {

  static navigationOptions = {
    title: 'Detail'
  }

  render() {
    return (
      <ScreensLayout>
        <PropertyDetail />
      </ScreensLayout>
    );
  }
}

export default ScreensPropertyDetail