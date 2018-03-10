import React from 'react';
import { string } from 'prop-types';
import glamorous, { Image, View, Text } from 'glamorous-native';
import { Card, CardCover, CardContent, Title, Paragraph } from 'react-native-paper';

import s from './styles';

PropertyListItem.propTypes = {
  image: string,
  description: string.isRequired,
  price: string.isRequired,
} 

function PropertyListItem({
  image = '../../../../assets/images/house.jpg', 
  description, 
  price 
}) {
  return (
    <Card style={s.card}>
      <CardCover source={require(image)} />
      <CardContent>
        <Title style={s.title}>{description}</Title>
        <Paragraph style={s.paragraph}>From ₹{price} per night</Paragraph>
      </CardContent>
    </Card>
  )
}

export default PropertyListItem