import React from 'react';
import PropertyList from '../../../components/Property/List';
import { Alert } from 'react-native';
import { View } from 'glamorous-native';
import { Provider as PaperProvider } from 'react-native-paper';

class ScreensPropertyList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      properties: [
        {
          description: '2 Bedroom Flat',
          price: '2500'
        },
        {
          description: 'Single Room',
          price: '500'
        },
        {
          description: '1 Bedroom Apartment',
          price: '1500'
        },
      ]
    }
  }

  static navigationOptions = {
    title: 'Mayapur BnB'
  }

  showProperty() {
    this.props.navigation.navigate('Detail')
  }

  render() {
    return (
      <PaperProvider>
        <View justifyContent="space-around" height="100%">
          {this.state.properties ? (
            <PropertyList properties={this.state.properties} onPressProperty={this.showProperty.bind(this)} />
          ) : null }
        </View>
      </PaperProvider>
    );
  }
}

export default ScreensPropertyList