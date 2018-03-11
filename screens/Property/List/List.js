import React from 'react';
import PropertyList from '../../../components/Property/List';
import ScreensLayout from '../../Layout';

class ScreensPropertyList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      properties: [
        {
          title: '2 Bedroom Flat',
          price: '2500'
        },
        {
          title: 'Single Room',
          price: '500'
        },
        {
          title: '1 Bedroom Apartment',
          price: '1500'
        },
      ]
    }
  }

  static navigationOptions = {
    title: 'Mayapur BnB'
  }

  showProperty() {
    this.props.navigation.navigate('Details')
  }

  render() {
    return (
      <ScreensLayout>
        {this.state.properties ? (
          <PropertyList properties={this.state.properties} onPressProperty={this.showProperty.bind(this)} />
        ) : null }
      </ScreensLayout>
    );
  }
}

export default ScreensPropertyList