import React from 'react';
import PropertyDetails from '../../../components/Property/Details';
import ScreensLayout from '../../Layout'
import Images from '@assets/images'

class ScreensPropertyDetails extends React.Component {

  constructor() {
    super()
  }

  static navigationOptions = {
    title: 'Details'
  }

  render() {
    const { property } = this.props.navigation.state.params
    return (
      <ScreensLayout>
        <PropertyDetails {...property} />
      </ScreensLayout>
    );
  }
}

export default ScreensPropertyDetails