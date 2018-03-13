import React from 'react';
import PropertyDetails from './Details';
import { ScrollView, View, Image } from 'glamorous-native';
import { Headline, Paragraph } from 'react-native-paper';
import { Calendar } from 'react-native-calendars'
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
      title: 'Title',
      description: 'Description'
    };
    renderedPropertyDetails = undefined;
  });

  it('always renders a `ScrollView`', () => {
    expect(propertyDetails().findByType(ScrollView)).toBeTruthy()
  })

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

  it('always renders a `Paragraph`', () => {
    expect(propertyDetails().findAllByType(Paragraph).length).toEqual(1)
  })

  it('passes `description` to rendered `Paragraph` as `children`', () => {
    const paragraph = propertyDetails().findByType(Paragraph)
    expect(paragraph.props.children).toEqual(props.description)
  })
})