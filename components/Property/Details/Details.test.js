import React from 'react';
import PropertyDetails from './Details';
import { View, Image } from 'glamorous-native';
import { Headline } from 'react-native-paper';
import Images from '@assets/images'

import renderer from 'react-test-renderer';

describe("PropertyDetails", () => {
  let renderedPropertyDetails;
  let props;
  
  const propertyDetails = () => {
    if (!renderedPropertyDetails) {
      renderedPropertyDetails = renderer.create(
        <PropertyDetails {...props} />
      );
    }
    return renderedPropertyDetails.root;
  }

  beforeEach(() => {
    props = {
      image: Images.house,
      title: 'Title'
    };
    renderedPropertyDetails = undefined;
  });

  it('always renders a `View`', () => {
    expect(propertyDetails().findByType(View)).toBeTruthy()
  })

  it('always renders an `Image`', () => {
    expect(propertyDetails().findAllByType(Image).length).toEqual(1)
  })

  it('passes `image` to rendered `Image` as `source`', () => {
    const image = propertyDetails().findByType(Image)
    expect(image.props.source).toEqual(props.image)
  })

  it('always renders a `Headline`', () => {
    expect(propertyDetails().findAllByType(Headline).length).toEqual(1)
  })

  it('passes `title` to rendered `Headline` as `children`', () => {
    const headline = propertyDetails().findByType(Headline)
    expect(headline.props.children).toEqual(props.title)
  })
})