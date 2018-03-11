import React from 'react';
import ScreensPropertyDetails from './Details';
import PropertyDetails from '../../../components/Property/Details';
import ScreensLayout from '../../Layout';

import renderer from 'react-test-renderer';

describe("ScreensPropertyDetails", () => {
  let screensPropertyDetails = renderer.create(<ScreensPropertyDetails />).root

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

});
