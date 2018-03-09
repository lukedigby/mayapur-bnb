import React from 'react';
import { View } from 'glamorous-native';
import Listings from './components/Listings';
import { Provider as PaperProvider } from 'react-native-paper';


class App extends React.Component {
  state = {
    listings: [
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
          {this.state.listings ? (
            <Listings listings={this.state.listings} />
          ) : null }
        </View>
      </PaperProvider>
    );
  }
}

export default App