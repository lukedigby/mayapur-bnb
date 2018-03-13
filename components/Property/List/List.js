import React from 'react';
import { arrayOf, shape, func } from 'prop-types';
import { ScrollView, View } from 'glamorous-native';
import PropertyListItem from './Item';


class PropertyList extends React.Component{
  state = {refreshing: false}

  static propTypes = {
    properties: arrayOf(shape(PropertyListItem.listItemPropTypes)),
    onPressProperty: func.isRequired
  }

  render(){
    const { properties, onPressProperty } = this.props
    
    return (
      <ScrollView>  
        <View style={{ marginBottom: 10 }}>
          {properties ?
            properties.map((property, index) =>
              <PropertyListItem  
                key={index} {...property} onPressProperty={onPressProperty} />
            ) : null }
        </View>
      </ScrollView>
    )
  }
}

export default PropertyList