import React from 'react';
import ScreensPropertyDetails from './Detail';
import PropertyDetail from '../../../components/Property/Detail';
import ScreensLayout from '../Layout';

import renderer from 'react-test-renderer';

describe("ScreensPropertyDetails", () => {
  let screensPropertyDetails = renderer.create(<ScreensPropertyDetails />).root

  it('renders a `ScreensLayout`', () => {
    expect(screensPropertyDetails.findAllByType(ScreensLayout).length).toEqual(1)
  });

  it('renders `PropertyDetail`', () => {
    expect(screensPropertyDetails.findAllByType(PropertyDetail).length).toEqual(1)
  });

});
