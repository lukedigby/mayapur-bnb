import React from 'react';
import { string, oneOfType, number, object, func } from 'prop-types';
import { TouchableOpacity, Alert } from 'react-native';
import { Image, View, Text } from 'glamorous-native';
import { Card, CardCover, CardContent, Title, Paragraph } from 'react-native-paper';
import Images from '@assets/images'

import s from './styles';

PropertyListItem.propTypes = {
  image: oneOfType([ number, object]),
  title: string.isRequired,
  price: number.isRequired,
  onPressProperty: func
}

function PropertyListItem({
  image = Images.house, 
  title, 
  price,
  onPressProperty
}) {
  return (    
    <Card style={s.card} onPress={onPressProperty}>
      <CardCover source={image} />
      <CardContent>
        <Title style={s.title}>{title}</Title>
        <Paragraph style={s.paragraph}>From ₹{price} per night</Paragraph>
      </CardContent>
    </Card>
  )
}

export default PropertyListItem