import React from 'react';
import { string } from 'prop-types';
import glamorous, { Image, View, Text } from 'glamorous-native';
import { Card, CardCover, CardContent, Title, Paragraph } from 'react-native-paper';

Listing.propTypes = {
  image: string,
  description: string.isRequired,
  price: string.isRequired,
} 

function Listing({
  image = '../../assets/images/house.jpg', 
  description, 
  price 
}) {
  return (
    <Card style={style.card}>
      <CardCover source={require(image)} />
      <CardContent>
        <Title style={style.title}>{description}</Title>
        <Paragraph style={style.paragraph}>From ₹{price} per night</Paragraph>
      </CardContent>
    </Card>
  )
}

const style = {
  card: {
    margin: 20
  },
  title: {
    fontWeight: 'bold'
  },
  paragraph: {
    fontWeight: '300'
  }
}

export default Listing