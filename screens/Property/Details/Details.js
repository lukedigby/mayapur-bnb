import React from 'react';
import PropertyDetails from '../../../components/Property/Details';
import ScreensLayout from '../Layout'

class ScreensPropertyDetails extends React.Component {

  static navigationOptions = {
    title: 'Details'
  }

  render() {
    return (
      <ScreensLayout>
        <PropertyDetails />
      </ScreensLayout>
    );
  }
}

export default ScreensPropertyDetails