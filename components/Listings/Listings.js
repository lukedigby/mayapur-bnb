import React from 'react';
import { arrayOf, shape } from 'prop-types';
import { ScrollView, View } from 'glamorous-native';
import Listing from '../Listing';

Listings.propTypes = {
  listings: arrayOf(shape(Listing.propTypes))
}

function Listings({ listings }) {
  return (
    <ScrollView>  
      <View>
        {listings ?
          listings.map((listing, index) =>
            <Listing 
              key={index} 
              {...listing} />
          ) : null }
      </View>
    </ScrollView>
  )
}

export default Listings