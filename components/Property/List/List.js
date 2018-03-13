import React from 'react';
import { arrayOf, shape, func } from 'prop-types';
import { ScrollView, View } from 'glamorous-native';
import PropertyListItem from './Item';
import s from './styles';

class PropertyList extends React.Component{
  state = {refreshing: false}

  static propTypes = {
    properties: arrayOf(shape(PropertyListItem.listItemPropTypes)),
    onPressProperty: func.isRequired
  }

  static defaultProps = {
    properties: []
  }

  render(){
    const { properties, onPressProperty } = this.props
    
    return (
      <ScrollView style={s.list}>  
        <View style={s.container}>
          {properties.map((property, index) =>
            <PropertyListItem  
              key={index} {...property} onPressProperty={onPressProperty} />
          )}
        </View>
      </ScrollView>
    )
  }
}

export default PropertyList