import React from 'react';
import PropertyDetails from '../../../components/Property/Details';
import ScreensLayout from '../../Layout'
import Images from '@assets/images'

class ScreensPropertyDetails extends React.Component {

  constructor() {
    super()

    this.state = {
      image: Images.house,
      title: 'Title'
    }
  }

  static navigationOptions = {
    title: 'Details'
  }

  render() {
    return (
      <ScreensLayout>
        <PropertyDetails {...this.state} />
      </ScreensLayout>
    );
  }
}

export default ScreensPropertyDetails