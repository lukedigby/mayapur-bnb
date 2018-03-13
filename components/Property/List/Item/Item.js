import React from 'react';
import { string, oneOfType, number, object, func } from 'prop-types';
import { TouchableOpacity, Alert } from 'react-native';
import { Image, View, Text } from 'glamorous-native';
import { Card, CardCover, CardContent, Title, Paragraph } from 'react-native-paper';
import Images from '@assets/images'

import s from './styles';

const listItemPropTypes = {
  image: oneOfType([ number, object]),
  title: string.isRequired,
  price: number.isRequired,
  id: number.isRequired,
}

class PropertyListItem extends React.Component {
  constructor(props) {
    super(props)

    this.onPress = this.onPress.bind(this) 
  }


  static propTypes = {
    ...listItemPropTypes,
    onPressProperty: func.isRequired
  }

  static defaultProps = {
    image: Images.house
  }

  onPress() {
    this.props.onPressProperty(this.props.id)
  }

  render() {
    const {
      image, 
      title, 
      price
    } = this.props
    return (
      <Card style={s.card} onPress={this.onPress}>
        <CardCover source={image} />
        <CardContent>
          <Title style={s.title}>{title}</Title>
          <Paragraph style={s.paragraph}>From ₹{price} per night</Paragraph>
        </CardContent>
      </Card>
    )
  }
}

export default PropertyListItem