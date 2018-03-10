import React from 'react';
import PropertyList from '../../../components/Property/List';
import { Alert } from 'react-native';
import { View } from 'glamorous-native';
import { Provider as PaperProvider } from 'react-native-paper';

class ScreensPropertyList extends React.Component {
  state = {
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
      {
        description: '1 Bedroom Apartment',
        price: '1500'
      },
      {
        description: '1 Bedroom Apartment',
        price: '1500'
      },
      {
        description: '1 Bedroom Apartment',
        price: '1500'
      }
    ]
  }

  static navigationOptions = {
    title: 'Mayapur BnB'
  }

  showProperty() {
    Alert.alert('Testing!')
    this.props.navigation.navigate('Detail')
  }

  render() {
    return (
      <PaperProvider>
        <View justifyContent="space-around" height="100%">
          {this.state.properties ? (
            <PropertyList properties={this.state.properties} onPressProperty={this.showProperty} />
          ) : null }
        </View>
      </PaperProvider>
    );
  }
}

export default ScreensPropertyList