import React from 'react';
import { arrayOf, shape, func } from 'prop-types';
import { ScrollView, View } from 'glamorous-native';
import PropertyListItem from './Item';

PropertyList.propTypes = {
  properties: arrayOf(shape(PropertyListItem.propTypes)),
  onPressProperty: func
}

function PropertyList({ properties, onPressProperty }) {
  return (
    <ScrollView>  
      <View>
        {properties ?
          properties.map((property, index) =>
            <PropertyListItem  
              key={index} {...property} onPressProperty={onPressProperty} />
          ) : null }
      </View>
    </ScrollView>
  )
}

export default PropertyList