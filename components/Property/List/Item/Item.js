import React from 'react';
import { string, oneOfType, number, object } from 'prop-types';
import { Image, View, Text } from 'glamorous-native';
import { Card, CardCover, CardContent, Title, Paragraph } from 'react-native-paper';
import Images from '@assets/images'

import s from './styles';

PropertyListItem.propTypes = {
  image: oneOfType([ number, object]),
  description: string.isRequired,
  price: string.isRequired,
} 

function PropertyListItem({
  image = Images.house, 
  description, 
  price 
}) {
  return (
    <Card style={s.card}>
      <CardCover source={image} />
      <CardContent>
        <Title style={s.title}>{description}</Title>
        <Paragraph style={s.paragraph}>From ₹{price} per night</Paragraph>
      </CardContent>
    </Card>
  )
}

export default PropertyListItem