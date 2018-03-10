import React from 'react';
import { arrayOf, shape } from 'prop-types';
import { ScrollView, View } from 'glamorous-native';
import PropertyListItem from './Item';

PropertyList.propTypes = {
  properties: arrayOf(shape(PropertyListItem.propTypes))
}

function PropertyList({ properties }) {
  return (
    <ScrollView>  
      <View>
        {properties ?
          properties.map((property, index) =>
            <PropertyListItem 
              key={index} 
              {...property} />
          ) : null }
      </View>
    </ScrollView>
  )
}

export default PropertyList