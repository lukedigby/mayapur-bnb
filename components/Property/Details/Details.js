import React from 'react';
import { oneOfType, number, object, string } from 'prop-types';
import { ScrollView, View, Image } from 'glamorous-native';
import { Headline, Paragraph } from 'react-native-paper';
import Images from '@assets/images'

PropertyDetails.propTypes = {
  image: oneOfType([ number, object]).isRequired,
  title: string.isRequired,
  description: string.isRequired
}

function PropertyDetails({
  image,
  title,
  description
}) {
  return (
    <ScrollView>
      <View alignItems="center">
        <Image source={image} />
        <Headline>{title}</Headline>
        <Paragraph>{description}</Paragraph>
      </View>
    </ScrollView>
  )
}

export default PropertyDetails