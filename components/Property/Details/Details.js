import React from 'react';
import { oneOfType, number, object, string } from 'prop-types';
import { View, Image } from 'glamorous-native';
import { Headline } from 'react-native-paper';
import Images from '@assets/images'

PropertyDetails.propTypes = {
  image: oneOfType([ number, object]).isRequired,
  title: string.isRequired
}

function PropertyDetails({
  image = Images.house,
  title
}) {
  return (
    <View>
      <View alignItems="center">
        <Image source={image} />
        <Headline>{title}</Headline>
      </View>
    </View>
  )
}

export default PropertyDetails