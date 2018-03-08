import React from 'react';
import { AsyncStorage, TouchableOpacity } from "react-native"
import { Button } from 'react-native';
import { Text, TextInput, View } from 'glamorous-native';
import Listings from './components/Listings';
import { Provider as PaperProvider } from 'react-native-paper';


class App extends React.Component {
  state = {
    listings: [
      {
        description: '2 Bedroom Flat',
        price: '₹2500'
      },
      {
        description: 'Single Room',
        price: '₹500'
      },
      {
        description: '1 Bedroom Apartment',
        price: '₹1500'
      },
      {
        description: '1 Bedroom Apartment',
        price: '₹1500'
      },
      {
        description: '1 Bedroom Apartment',
        price: '₹1500'
      },
      {
        description: '1 Bedroom Apartment',
        price: '₹1500'
      }
    ]
  }

  render() {
    return (
      <PaperProvider>
        <View justifyContent="space-around" height="100%">
          <Listings listings={this.state.listings} />
        </View>
      </PaperProvider>
    );
  }
}

export default App