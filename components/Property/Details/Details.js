import React from 'react';
import { oneOfType, number, object, string } from 'prop-types';
import { ScrollView, View, Image } from 'glamorous-native';
import { Button, Headline, Paragraph } from 'react-native-paper';
import { Calendar } from 'react-native-calendars'
import Images from '@assets/images'

import s from './styles'

PropertyDetails.propTypes = {
  image: oneOfType([ number, object]).isRequired,
  title: string.isRequired,
  description: string.isRequired
}

function PropertyDetails({
  image,
  title,
  description,
  navigation
}) {
  return (
    <View style={s.wrapper}>
      <ScrollView style={s.scrollView}>
        <View>
          <View style={s.imageContainer}>
            <Image style={s.image} source={image} />
          </View>
          <View style={s.container}>
            <Headline style={s.title}>{title}</Headline>
            <Paragraph>{description}</Paragraph>
          </View>
        </View>
      </ScrollView>
      <Button raised primary onPress={() => navigation.navigate('Modal') }>
        Check Availability
      </Button>
    </View>
  )
}

export default PropertyDetails