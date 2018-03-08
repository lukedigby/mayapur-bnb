import React from 'react';
import glamorous, { Image, View, Text } from 'glamorous-native';
import { Card, CardCover, CardContent, Title, Paragraph } from 'react-native-paper';
const houseImage = require('../assets/images/house.jpg')

export default class Listing extends React.Component {

  render() {
    return (
      <Card style={style.card}>
        <CardCover source={houseImage} />
        <CardContent>
          <Title style={style.title}>{ this.props.description }</Title>
          <Paragraph style={style.paragraph}>From { this.props.price } per night</Paragraph>
        </CardContent>
      </Card>
    )
  }
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