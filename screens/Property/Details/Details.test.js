import React from 'react';
import ScreensPropertyDetails from './Details';
import PropertyDetails from '../../../components/Property/Details';
import ScreensLayout from '../../Layout';
import Images from '@assets/images';

import renderer from 'react-test-renderer';

describe("ScreensPropertyDetails", () => {
  let props = {
    navigation: { state: { params: { property: {
      title: 'Title',
      description: 'Description',
      price: 1500,
      image: Images.house
    } }}}
  }
  let screensPropertyDetails = renderer.create(<ScreensPropertyDetails {...props} />).root

  it('renders a `ScreensLayout`', () => {
    expect(screensPropertyDetails.findAllByType(ScreensLayout).length).toEqual(1)
  });

  it('renders `PropertyDetails`', () => {
    expect(screensPropertyDetails.findAllByType(PropertyDetails).length).toEqual(1)
  });

  it('passes `image` to `PropertyDetails`', () => {
    expect(screensPropertyDetails.findByType(PropertyDetails).props.image).toBeDefined()
  })

  it('passes `title` to `PropertyDetails`', () => {
    expect(screensPropertyDetails.findByType(PropertyDetails).props.title).toBeDefined()
  })

  it('passes `description` to `PropertyDetails`', () => {
    expect(screensPropertyDetails.findByType(PropertyDetails).props.description).toBeDefined()
  })

});
