import React from 'react';
import { ScrollView, View } from 'glamorous-native';
import Listing from './Listing';

export default class Listings extends React.Component {
  render() {
    return (
      <ScrollView>  
        <View>
          {this.props.listings.map((listing, index) =>
            <Listing 
              key={index} 
              {...listing} />
          )}
        </View>
      </ScrollView>
    )
  }
}