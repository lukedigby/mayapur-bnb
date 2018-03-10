import React from 'react';
import { View } from 'glamorous-native';
import PropertyList from './components/Property/List';
import { Provider as PaperProvider } from 'react-native-paper';


class App extends React.Component {
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

  render() {
    return (
      <PaperProvider>
        <View justifyContent="space-around" height="100%">
          {this.state.properties ? (
            <PropertyList properties={this.state.properties} />
          ) : null }
        </View>
      </PaperProvider>
    );
  }
}

export default App